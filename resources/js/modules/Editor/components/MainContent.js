import { useDispatch, useSelect } from '@wordpress/data';
import { useRef, useState, useEffect, useCallback } from '@wordpress/element';
import {
	DndContext,
	KeyboardSensor,
	MouseSensor,
	useSensor,
	useSensors,
	DragOverlay,
} from '@dnd-kit/core';
import Body from './Body';
import FieldInserter from './FieldInserter';
import Sidebar from './Sidebar';
import {
	arrayMove,
	SortableContext,
	verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { nanoid } from 'nanoid';
import InserterOverlayField from './InserterOverlayField';
import { EditorContentStyle } from './style';
import DroppedOverlayField from './DroppedOverlayField';
import {
	handleDragStart,
	handleDragOver,
	handleDragEnd,
} from '../helper/utils';

export default function MainContent( props ) {
	const { uiState, setUiState } = props;
	const { SingleFormReducer } = useSelect( ( select ) => {
		return select( 'newform' ).getSingleForm();
	}, [] );
	const { updateFormFields } = useDispatch( 'newform' );
	const { singleForm } = SingleFormReducer;
	const { fields } = singleForm.content;
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
			className="newform-editor-content"
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

				<SortableContext
					strategy={ verticalListSortingStrategy }
					items={ singleForm.content.fields.map(
						( field ) => field.id
					) }
				>
					<Body fields={ fields } />
				</SortableContext>
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
			</DndContext>
		</EditorContentStyle>
	);
}
