import { useSelect, useDispatch } from '@wordpress/data';
import { AntButton } from '@newform/components';
import { __ } from '@wordpress/i18n';
import { HeaderStyle } from './style';
import handleCreateForm from '@formgent/helper/handleCreateForm';
export default function Header() {
	const { updateFormState } = useDispatch( 'formgent' );

	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );

	const { useNavigate } = CommonReducer.routerComponents;

	const navigate = useNavigate();

	return (
		<HeaderStyle>
			<div className="formgent-header-top">
				<div className="formgent-header-top__content formgent-d-flex">
					<h1 className="formgent-header-top__title">
						{ __( 'All Forms', 'formgent' ) }
					</h1>
					<AntButton
						type="dark"
						className="newform-page-header-btn"
						onClick={ () => {
							navigate( 'forms/form-new' );
						} }
					>
						{ __( 'Create New', 'newform' ) }
					</AntButton>
				</div>
			</div>
		</HeaderStyle>
	);
}
