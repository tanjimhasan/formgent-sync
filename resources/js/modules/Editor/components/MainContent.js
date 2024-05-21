import { useDispatch, useSelect } from '@wordpress/data';
import { useRef, useState, useEffect } from '@wordpress/element';
import { DndContext, DragOverlay } from '@dnd-kit/core';
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

	return (
		<EditorContentStyle
			className="newform-editor-content"
			style={ { display: 'flex' } }
		>
			<DndContext
				onDragStart={ ( event ) =>
					handleDragStart(
						event,
						fields,
						updateFormFields,
						currentDragFieldRef,
						setInserterOverlayActiveField,
						setDroppedOverlayActiveField
					)
				}
				onDragOver={ ( event ) =>
					handleDragOver(
						event,
						fields,
						spacerInsertedRef,
						updateFormFields
					)
				}
				onDragEnd={ ( event ) =>
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
					)
				}
				autoScroll
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
