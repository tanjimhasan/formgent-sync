import PopUp from '@formgent/components/PopUp.js';
import { DeleteAlertStyle } from '@formgent/components/style';
import { sprintf, __ } from '@wordpress/i18n';

export default function BuilderAlert( props ) {
	const { title, setIsAlertActive, submitHandler, type } = props;

	function handleCancelDeleteAlert() {
		setIsAlertActive( false );
	}

	return (
		<PopUp
			title={ title }
			onCancel={ handleCancelDeleteAlert }
			onSubmit={ submitHandler }
			hasCancelButton
			hasSubmitButton
			isActiveSubmit
			cancelText={ __( 'No, cancel', 'formgent' ) }
			// submitText={
			// 	elementDeleting || optionDeleting
			// 		? type === 'element-type'
			// 			? __( 'Changing', 'formgent' )
			// 			: __( 'Deleting', 'formgent' )
			// 		: type === 'element-type'
			// 		? __( 'Yes, change type', 'formgent' )
			// 		: __( 'Yes, delete it', 'formgent' )
			// }
			submitText={ 'Yes, delete it' }
			cancelBtnType="light"
			submitBtnType="danger"
			className="formgent-delete-alert-modal"
		>
			<DeleteAlertStyle>
				<div className="formgent-alert-content">
					<span className="formgent-text-warning formgent-mb-15">
						{ __( 'Warning:', 'formgent' ) }
					</span>
					<ul>
						<li>
							{ sprintf(
								__(
									'Deleting this %s will result in the permanent loss of response data associated with this %s.',
									'formgent'
								),
								type === 'field' ? 'field' : 'option'
							) }
						</li>
						<li>
							{ sprintf(
								__(
									'If logic rules are applied to this %s, deleting it will break the logic.',
									'formgent'
								),
								type === 'element' ? 'element' : 'option'
							) }
						</li>
					</ul>
					<h4>
						{ __(
							'Are you sure you want to delete it?',
							'formgent'
						) }
					</h4>
				</div>
			</DeleteAlertStyle>
		</PopUp>
	);
}
