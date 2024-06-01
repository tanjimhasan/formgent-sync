import { useSelect, useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { HeaderStyle } from './style';
import handleCreateForm from '@newform/helper/handleCreateForm';
export default function Header() {
	const { updateFormState } = useDispatch( 'newform' );

	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'newform' ).getCommonState();
	}, [] );

	const { useNavigate } = CommonReducer.routerComponents;

	const navigate = useNavigate();

	return (
		<HeaderStyle>
			<div className="newform-header-top">
				<div className="newform-header-top__content newform-d-flex">
					<h1 className="newform-header-top__title">
						{ __( 'All Forms', 'newform' ) }
					</h1>
					<button
						className="newform-btn newform-btn-dark newform-page-header-btn"
						onClick={ () => {
							navigate( 'forms/form-new' );
						} }
					>
						{ __( 'Create New', 'newform' ) }
					</button>
				</div>
			</div>
		</HeaderStyle>
	);
}
