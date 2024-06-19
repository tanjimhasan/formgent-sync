import { useRef, memo, useCallback } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import ReactSVG from 'react-inlinesvg';
import { useDraggable } from '@dnd-kit/core';
import { nanoid } from 'nanoid';

const DraggableField = ( props ) => {
	const { field, fieldInfo, ...rest } = props;
	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );
	const { useParams } = CommonReducer.routerComponents;

	const { id: formId } = useParams();

	const { SingleFormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getSingleForm();
	}, [] );
	const { updateFormFields } = useDispatch( 'formgent' );
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
			name: `${ field.type }${ fields.length }`,
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
			className="formgent-editor-inserter__field"
			{ ...memoizedAttributes }
			{ ...memoizedListeners }
		>
			<span className="formgent-editor-inserter__field--icon">
				<ReactSVG src={ fieldInfo.icon } />
			</span>
			<span className="formgent-editor-inserter__field--title">
				{ fieldInfo.title }
			</span>
		</div>
	);
};

export default memo( DraggableField );
