import { Fragment, useState } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { Modal } from '@wordpress/components';
import ReactSVG from 'react-inlinesvg';
import { CreatePopupStyle } from './style.js';
import arrowLeft from '@icon/arrow-small-left.svg';
import Pencil from '@icon/pencil-plus.svg';
import { __ } from '@wordpress/i18n';
import CreatePopupAction from './CreatePopupAction.js';
import CreatePopupHeader from './CreatePopupHeader.js';

function CreatePopup( props ) {
	const [ step, setStep ] = useState( '1' );
	const { FormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getForms();
	}, [] );
	const { SingleFormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getSingleForm();
	}, [] );
	const { updateFormState } = useDispatch( 'formgent' );
	const {
		isImportingAttachment,
		isCreatePopupOpen,
		createFormStage,
		addBackBtn,
	} = FormReducer;
	const actionData = [
		{
			type: 'general',
			icon: Pencil,
			label: 'Traditional Form',
			text: 'Multiple questions on single page',
			step: '1',
		},
		{
			type: 'scratch',
			icon: Pencil,
			label: 'Start From Scratch',
			text: 'Start with a blank form',
			url: `forms/form-new/${ SingleFormReducer?.singleForm?.type }`,
			step: '2',
		},
	];

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
					headerActions={
						<span className="formgent-create-modal-logo">
							FormGent
						</span>
					}
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
						<CreatePopupHeader
							title={ __( 'Create a New Form', 'formgent' ) }
							step={ step }
						/>
						{ actionData.map( ( item, index ) => {
							if ( step === item.step ) {
								return (
									<CreatePopupAction
										item={ item }
										setStep={ setStep }
										key={ index }
									/>
								);
							}
						} ) }
					</CreatePopupStyle>
				</Modal>
			</Fragment>
		)
	);
}

export default CreatePopup;
