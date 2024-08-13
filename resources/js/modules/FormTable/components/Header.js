import { useSelect, useDispatch } from '@wordpress/data';
import { AntButton } from '@formgent/components';
import { __ } from '@wordpress/i18n';
import { HeaderStyle } from './style';
import handleCreateForm from '@formgent/helper/handleCreateForm';
import ReactSVG from 'react-inlinesvg';
import plusIcon from '@icon/plus.svg';
export default function Header() {
	const { updateCreatePopUp, updateCreatePopupStep } =
		useDispatch( 'formgent' );

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
						type="primary"
						className="formgent-page-header-btn"
						onClick={ ( e ) => {
							updateCreatePopUp( true );
							updateCreatePopupStep( '1' );
						} }
					>
						<ReactSVG src={ plusIcon } />{ ' ' }
						{ __( 'Create New', 'formgent' ) }
					</AntButton>
				</div>
			</div>
		</HeaderStyle>
	);
}
