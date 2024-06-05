import { useSelect } from '@wordpress/data';
import { useRef, useState, useEffect } from '@wordpress/element';
import MainContent from './components/MainContent';
import Header from './components/Header';
import { Modal } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import CreateFormModalContent from './components/CreateFormModalContent';

function Editor( props ) {
	const [ uiState, setUiState ] = useState( {
		isInserterActive: false,
	} );
	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );

	const { useParams } = CommonReducer.routerComponents;

	const { id } = useParams();

	const { SingleFormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getSingleForm( id );
	}, [] );

	return (
		<div className="formgent-editor-wrap">
			<Header uiState={ uiState } setUiState={ setUiState } />
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
