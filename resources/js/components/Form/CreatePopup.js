import { Fragment } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { Modal } from '@wordpress/components';
import ReactSVG from 'react-inlinesvg';
import CreatePopupInitial from './CreatePopupInitial.js';
import CreatePopupForm from './CreatePopupForm.js';
import { Spinner } from '@wordpress/components';
import { CreatePopupStyle } from './style.js';
import arrowLeft from '@icon/arrow-small-left.svg';
import { __ } from '@wordpress/i18n';

function CreatePopup( props ) {
	const { moduleState, setModuleState, baseApiRoute, baseLinkRoute } = props;
	const { FormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getForms();
	}, [] );
	const { updateFormState } = useDispatch( 'formgent' );
	const {
		isImportingAttachment,
		isCreatePopupOpen,
		createFormStage,
		addBackBtn,
	} = FormReducer;
	function popupContent() {
		if ( createFormStage === 'initial' ) {
			return (
				<CreatePopupInitial
					moduleState={ moduleState }
					setModuleState={ setModuleState }
				/>
			);
		} else if ( createFormStage === 'scratch' ) {
			return (
				<CreatePopupForm
					moduleState={ moduleState }
					setModuleState={ setModuleState }
					baseApiRoute={ baseApiRoute }
					baseLinkRoute={ baseLinkRoute }
				/>
			);
		}
	}

	function handlePopupCloseRequest() {
		updateFormState( {
			createFormStage: 'initial',
			addBackBtn: false,
			isCreatePopupOpen: false,
		} );
	}

	function handleFormBack() {
		updateFormState( {
			createFormStage: 'initial',
			addBackBtn: false,
		} );
	}

	return (
		isCreatePopupOpen && (
			<Fragment>
				<Modal
					overlayClassName={ `formgent-modal formgent-create-modal-wrap ${
						isImportingAttachment
							? 'formgent-attachment-importing'
							: ''
					}` }
					shouldCloseOnClickOutside={ ! isImportingAttachment }
					onRequestClose={ () =>
						isImportingAttachment ? {} : handlePopupCloseRequest()
					}
					isDismissible={ ! isImportingAttachment }
				>
					{ createFormStage === 'scratch' && addBackBtn && (
						<span
							className="formgent-btn-back"
							onClick={ handleFormBack }
						>
							<ReactSVG src={ arrowLeft } />{ ' ' }
							{ __( 'Back', 'formgent' ) }
						</span>
					) }

					<CreatePopupStyle
						className={ `formgent-create-form-modal ${
							createFormStage === 'prepared-elements'
								? 'formgent-create-loader-active'
								: ''
						}` }
					>
						{ createFormStage === 'prepared-elements' && (
							<Spinner />
						) }
						{ popupContent() }
					</CreatePopupStyle>
				</Modal>
			</Fragment>
		)
	);
}

export default CreatePopup;
