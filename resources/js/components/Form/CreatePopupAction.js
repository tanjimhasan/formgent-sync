import { useSelect, useDispatch } from '@wordpress/data';
import PropTypes from 'prop-types';
import ReactSVG from 'react-inlinesvg';
import { __ } from '@wordpress/i18n';
export default function CreatePopupAction( props ) {
	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );

	const { updateSingleFormType } = useDispatch( 'formgent' );

	const { Link } = CommonReducer.routerComponents;

	const { item, setStep } = props;

	function handleFormAction() {
		updateSingleFormType( item.type );
		setStep( '2' );
	}
	return item.url ? (
		<Link to={ item.url || '#' } className="formgent-createPopup__action">
			<div className="formgent-createPopup__action-icon">
				<div className="formgent-createPopup__action-icon-wrap">
					<ReactSVG src={ item.icon } />
				</div>
			</div>
			{ item.label && (
				<span className="formgent-createPopup__action-label">
					{ item.label }
				</span>
			) }
			{ item.text && (
				<span className="formgent-createPopup__action-text">
					{ item.text }
				</span>
			) }
		</Link>
	) : (
		<span
			className="formgent-createPopup__action"
			onClick={ () => handleFormAction() }
		>
			<div className="formgent-createPopup__action-icon">
				<div className="formgent-createPopup__action-icon-wrap">
					<ReactSVG src={ item.icon } />
				</div>
			</div>
			{ item.label && (
				<span className="formgent-createPopup__action-label">
					{ item.label }
				</span>
			) }
			{ item.text && (
				<span className="formgent-createPopup__action-text">
					{ item.text }
				</span>
			) }
		</span>
	);
}

CreatePopupAction.propTypes = {
	item: PropTypes.object,
	setStep: PropTypes.func,
};
