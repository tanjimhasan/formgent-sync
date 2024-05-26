import { nanoid } from 'nanoid';
import { arrayMove } from '@dnd-kit/sortable';

function extractEventData( prop ) {
	return prop?.data?.current ?? {};
}

function createSpacer( { id } ) {
	return {
		id,
		type: 'spacer',
	};
}

const cleanDraggingHistory = (
	currentDragFieldRef,
	spacerInsertedRef,
	setInserterOverlayActiveField,
	setDroppedOverlayActiveField
) => {
	setInserterOverlayActiveField( null );
	setDroppedOverlayActiveField( null );
	currentDragFieldRef.current = null;
	spacerInsertedRef.current = false;
};

const handleDragStart = (
	event,
	fields,
	updateFormFields,
	currentDragFieldRef,
	setInserterOverlayActiveField,
	setDroppedOverlayActiveField
) => {
	const { active } = event;
	const activeData = extractEventData( active );
	// In builder handleDragStart will be triggered two time. one is when field is dragged from sidebar
	// and antoehr one is draged from dropbox.
	// When dragged from sidebar will update the inserterOverlayField state
	if ( activeData.fromSidebar ) {
		const { field } = activeData;
		const { type } = field;
		let darggedField = structuredClone( field );
		darggedField = {
			...darggedField,
			advance_option: {
				...darggedField.advance_option,
				name: `${ type }${ fields.length + 1 }`,
			},
		};
		setInserterOverlayActiveField( field );
		// Create a new field that'll be added to the fields array
		// if we drag it over the canvas.
		currentDragFieldRef.current = {
			...darggedField,
			id: active.id,
			parent: null,
		};
		return;
	}
	// When dragged form dropbox update droppedOverlayField state
	//and create a spacer then add it to the field list

	const { field, index } = activeData;
	setDroppedOverlayActiveField( field );
	currentDragFieldRef.current = field;

	const updatedFields = [ ...fields ];
	updatedFields.splice( index, 1, createSpacer( { id: active.id } ) );
	updateFormFields( updatedFields );
};

const handleDragOver = (
	event,
	fields,
	spacerInsertedRef,
	updateFormFields
) => {
	const { active, over } = event;
	const activeData = extractEventData( active );
	let updatedFields = [ ...fields ];
	if ( activeData.fromSidebar ) {
		const overData = extractEventData( over );

		if ( ! spacerInsertedRef.current ) {
			const spacer = createSpacer( {
				id: active.id + '-spacer',
			} );

			if ( ! updatedFields.length ) {
				updatedFields.push( spacer );
			} else {
				const nextIndex =
					overData.index > -1 ? overData.index : updatedFields.length;

				updatedFields.splice( nextIndex, 0, spacer );
			}
			spacerInsertedRef.current = true;
			updateFormFields( updatedFields );
		} else if ( ! over ) {
			// This solves the issue where you could have a spacer handing out in the canvas if you drug
			// a sidebar item on and then off

			updateFormFields(
				updatedFields.filter( ( f ) => f.type !== 'spacer' )
			);

			spacerInsertedRef.current = false;
		} else {
			// Since we're still technically dragging the sidebar draggable and not one of the sortable draggables
			// we need to make sure we're updating the spacer position to reflect where our drop will occur.
			// We find the spacer and then swap it with the over skipping the op if the two indexes are the same

			const spacerIndex = updatedFields.findIndex(
				( f ) => f.id === active.id + '-spacer'
			);

			const nextIndex =
				overData.index > -1 ? overData.index : updatedFields.length - 1;

			if ( nextIndex === spacerIndex ) {
				return;
			}

			updatedFields = arrayMove(
				updatedFields,
				spacerIndex,
				overData.index
			);
			updateFormFields( updatedFields );
		}
	}
};

const handleDragEnd = (
	event,
	fields,
	currentDragFieldRef,
	spacerInsertedRef,
	updateFormFields,
	droppedOverlayActiveField,
	setInserterOverlayActiveField,
	setDroppedOverlayActiveField,
	setInserterDomKey
) => {
	const { over } = event;
	let updatedFields = [ ...fields ];
	if ( ! over ) {
		cleanDraggingHistory(
			currentDragFieldRef,
			spacerInsertedRef,
			setInserterOverlayActiveField,
			setDroppedOverlayActiveField
		);
		if ( droppedOverlayActiveField ) {
			updatedFields = [ ...updatedFields, droppedOverlayActiveField ];
		}

		updatedFields = updatedFields.filter(
			( field ) => field.type !== 'spacer'
		);
		updateFormFields( updatedFields );
		return;
	}
	let nextField = currentDragFieldRef.current;
	if ( nextField ) {
		delete nextField.parent;
		const overData = extractEventData( over );
		const spacerIndex = updatedFields.findIndex(
			( field ) => field.type === 'spacer'
		);
		updatedFields.splice( spacerIndex, 1, nextField );
		updatedFields = arrayMove(
			updatedFields,
			spacerIndex,
			overData.index || 0
		);
		updateFormFields( updatedFields );
	}

	setInserterDomKey( nanoid( 10 ) );
	cleanDraggingHistory(
		currentDragFieldRef,
		spacerInsertedRef,
		setInserterOverlayActiveField,
		setDroppedOverlayActiveField
	);
};

export { handleDragStart, handleDragOver, handleDragEnd };
