import { useRef, useCallback } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { useDraggable } from '@dnd-kit/core';
import { nanoid } from 'nanoid';

export default function DraggableField( props ) {
	const { field, ...rest } = props;
	const { SingleFormReducer } = useSelect( ( select ) => {
		return select( 'newform' ).getSingleForm();
	}, [] );
	const { updateFormFields } = useDispatch( 'newform' );
	const id = useRef( nanoid( 10 ) );
	const { attributes, listeners, setNodeRef } = useDraggable( {
		id: id.current,
		data: {
			field,
			fromSidebar: true,
		},
	} );

	const handleAddNewField = useCallback( () => {
		const { fields } = SingleFormReducer.singleForm.content;
		const newField = {
			...field,
			id: nanoid( 10 ),
			advance_option: {
				...field.advance_option,
				name: `${ field.type }${ fields.length }`,
			},
		};
		const updatedFields = [ ...fields, newField ];
		updateFormFields( updatedFields );
	}, [ SingleFormReducer ] );

	const memoizedAttributes = useCallback( attributes, [ attributes ] );
	const memoizedListeners = useCallback( listeners, [ listeners ] );

	return (
		<div
			ref={ setNodeRef }
			onClick={ handleAddNewField }
			className="newform-editor-inserter__field"
			{ ...memoizedAttributes }
			{ ...memoizedListeners }
		>
			<span>{ field.type }</span>
		</div>
	);
}
