import { Modal } from '@wordpress/components';
import { AntButton } from '@formgent/components';
import { ModalAlertStyle } from './style';
import { __ } from '@wordpress/i18n';

export default function PopUp( props ) {
	const {
		children,
		title,
		className,
		AlertContent,
		onCancel,
		onFooterCancel,
		onSubmit,
		hasCancelButton,
		hasSubmitButton,
		isDisableAction,
		submitText,
		cancelText,
		cancelBtnType,
		submitBtnType = 'danger',
		isDismissible,
	} = props;
	return (
		<Modal
			title={ title }
			overlayClassName={ `formgent-modal formgent-modal-default ${ className }` }
			onRequestClose={ onCancel }
			isDismissible={ isDismissible }
		>
			<ModalAlertStyle>
				{ children }
				{ ! isDisableAction && (
					<div
						className={ `formgent-modal-action ${ className }-action` }
					>
						{ hasCancelButton && (
							<AntButton
								type="light"
								className={ `formgent-btn formgent-btn-${
									cancelBtnType ? cancelBtnType : 'light'
								} formgent-btn-md formgent-modal-action__cancel` }
								onClick={ ( e ) => {
									e.preventDefault();
									onFooterCancel
										? onFooterCancel()
										: onCancel();
								} }
							>
								{ cancelText || __( 'Cancel', 'formgent' ) }
							</AntButton>
						) }
						{ hasSubmitButton && (
							<AntButton
								// className={ `formgent-btn formgent-btn-md formgent-modal-action__btn formgent-btn-${ submitBtnType }` }
								type="primary"
								onClick={ ( e ) => {
									e.preventDefault();
									onSubmit();
								} }
								danger
							>
								{ submitText }
							</AntButton>
						) }
					</div>
				) }
			</ModalAlertStyle>
		</Modal>
	);
}
