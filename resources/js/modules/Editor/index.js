import FormHeader from '@formgent/components/FormHeader';
import { Modal } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
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

	const { singleForm } = useSelect(
		( select ) => {
			return { singleForm: select( 'formgent' ).getSingleForm( id ) };
		},
		[ id ]
	);

	const { selectForm } = useDispatch( 'formgent' );

	useEffect( () => {
		selectForm( id );
	}, [ id ] );

	return (
		<div className="formgent-editor-wrap">
			<FormHeader
				id={ id }
				useNavigate={ useNavigate }
				uiState={ uiState }
				setUiState={ setUiState }
			/>
			{ singleForm && <MainContent id={ id } /> }
			{ ! singleForm?.title && props.isAddForm && (
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
