import { Modal } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import CreateFormModalContent from './components/CreateFormModalContent';
import Header from './components/Header';
import MainContent from './components/MainContent';

function Editor( props ) {
	const [ uiState, setUiState ] = useState( {
		isInserterActive: false,
	} );
	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );

	const { useParams } = CommonReducer.routerComponents;

	const { id } = useParams();

	console.log( 'editor id:', id );

	const { SingleFormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getSingleForm( id );
	}, [] );

	return (
		<div className="formgent-editor-wrap">
			<Header id={ id } uiState={ uiState } setUiState={ setUiState } />
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
