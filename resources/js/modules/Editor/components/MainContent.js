import {
	DndContext,
	DragOverlay,
	KeyboardSensor,
	MouseSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import {
	SortableContext,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useDispatch, useSelect } from '@wordpress/data';
import { useCallback, useRef, useState } from '@wordpress/element';
import { nanoid } from 'nanoid';
import {
	handleDragEnd,
	handleDragOver,
	handleDragStart,
} from '../helper/utils';
import Body from './Body';
import DroppedOverlayField from './DroppedOverlayField';
import FieldInserter from './FieldInserter';
import InserterOverlayField from './InserterOverlayField';
import { EditorContentStyle } from './style';

export default function MainContent( props ) {
	const { id } = props;
	const { SingleFormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getSingleForm( id );
	}, [] );
	const { updateFormFields } = useDispatch( 'formgent' );
	const { singleForm } = SingleFormReducer;
	const { fields } = singleForm?.content ?? { fields: [] };
	const [ inserterDomKey, setInserterDomKey ] = useState( nanoid( 10 ) );
	const [ inserterOverlayActiveField, setInserterOverlayActiveField ] =
		useState();
	const [ droppedOverlayActiveField, setDroppedOverlayActiveField ] =
		useState();
	const spacerInsertedRef = useRef();
	const currentDragFieldRef = useRef();

	const handleDragStartCallback = useCallback(
		( event ) =>
			handleDragStart(
				event,
				fields,
				updateFormFields,
				currentDragFieldRef,
				setInserterOverlayActiveField,
				setDroppedOverlayActiveField
			),
		[ fields, updateFormFields ]
	);

	const handleDragOverCallback = useCallback(
		( event ) =>
			handleDragOver(
				event,
				fields,
				spacerInsertedRef,
				updateFormFields
			),
		[ fields, updateFormFields ]
	);

	const handleDragEndCallback = useCallback(
		( event ) =>
			handleDragEnd(
				event,
				fields,
				currentDragFieldRef,
				spacerInsertedRef,
				updateFormFields,
				droppedOverlayActiveField,
				setInserterOverlayActiveField,
				setDroppedOverlayActiveField,
				setInserterDomKey
			),
		[ fields, updateFormFields, droppedOverlayActiveField ]
	);

	const mouseSensor = useSensor( MouseSensor, {
		activationConstraint: {
			distance: 1, // Enable sort function when dragging 10px   💡 here!!!
		},
	} );
	const keyboardSensor = useSensor( KeyboardSensor );
	const sensors = useSensors( mouseSensor, keyboardSensor );

	return (
		<EditorContentStyle
			className="formgent-editor-content"
			style={ { display: 'flex' } }
		>
			<DndContext
				onDragStart={ handleDragStartCallback }
				onDragOver={ handleDragOverCallback }
				onDragEnd={ handleDragEndCallback }
				autoScroll
				sensors={ sensors }
			>
				<FieldInserter inserterDomKey={ inserterDomKey } />
				{ singleForm?.content && singleForm?.content?.fields && (
					<SortableContext
						strategy={ verticalListSortingStrategy }
						items={ singleForm?.content?.fields.map(
							( field ) => field.id
						) }
					>
						<Body fields={ fields } />
					</SortableContext>
				) }

				{ singleForm?.content && (
					<DragOverlay dropAnimation={ false }>
						{ inserterOverlayActiveField ? (
							<InserterOverlayField
								inserterOverlayActiveField={
									inserterOverlayActiveField
								}
							/>
						) : null }
						{ droppedOverlayActiveField ? (
							<DroppedOverlayField
								droppedOverlayActiveField={
									droppedOverlayActiveField
								}
							/>
						) : null }
					</DragOverlay>
				) }
			</DndContext>
		</EditorContentStyle>
	);
}
