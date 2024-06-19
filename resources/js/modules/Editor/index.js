import FormHeader from '@formgent/components/FormHeader';
import { Modal } from '@wordpress/components';
import { useSelect, resolveSelect } from '@wordpress/data';
import { useState, useEffect } from '@wordpress/element';
import CreateFormModalContent from './components/CreateFormModalContent';
import MainContent from './components/MainContent';

function Editor( props ) {
	const [ uiState, setUiState ] = useState( {
		isInserterActive: false,
	} );
	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );

	const { useParams, useNavigate } = CommonReducer.routerComponents;

	const { id } = useParams();

	const { SingleFormReducer } = useSelect(
		( select ) => {
			return select( 'formgent' ).getSingleForm( id );
		},
		[ id ]
	);

	// useEffect( () => {
	// 	if ( ! SingleFormReducer.singleForm ) return;
	// 	if ( SingleFormReducer?.singleForm?.id === id ) return;
	// 	resolveSelect( 'formgent' ).getSingleForm( id, Date.now() );
	// }, [ id ] );

	return (
		<div className="formgent-editor-wrap">
			<FormHeader
				id={ id }
				useNavigate={ useNavigate }
				uiState={ uiState }
				setUiState={ setUiState }
			/>
			{ SingleFormReducer?.singleForm && <MainContent id={ id } /> }
			{ ! SingleFormReducer?.singleForm?.title && props.isAddForm && (
				<Modal
					overlayClassName="formgent-modal formgent-form-title-modal"
					size="medium"
					isDismissible={ false }
				>
					<CreateFormModalContent />
				</Modal>
			) }
		</div>
	);
}

export default function EditorModule( props ) {
	return <Editor { ...props } />;
}
