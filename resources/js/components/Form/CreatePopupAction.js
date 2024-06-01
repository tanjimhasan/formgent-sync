// import { getGlobalState } from '@newform/helper/utils';
import { useSelect, useDispatch } from '@wordpress/data';
import PropTypes from 'prop-types';
import ReactSVG from 'react-inlinesvg';
import { __ } from '@wordpress/i18n';

export default function CreatePopupAction( props ) {
	// const { routeLink: Link } = getGlobalState(
	// 	'newform_router_references',
	// 	null
	// );
	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'newform' ).getCommonState();
	}, [] );

	const { updateFormState } = useDispatch( 'newform' );

	const { Link } = CommonReducer.routerComponents;

	const { icon, text, step, url, moduleState, setModuleState } = props;
	function handleCreateFormSteps( event, step ) {
		event.preventDefault();
		if ( step === 'scratch' ) {
			updateFormState( {
				addBackBtn: true,
				createFormStage: 'scratch',
			} );
		} else if ( step === 'template' ) {
			updateFormState( {
				createFormStage: 'template',
			} );
		}
	}
	return url ? (
		<Link
			to={ url || '#' }
			className="newform-createPopup__action"
			onClick={ ( e ) =>
				step ? handleCreateFormSteps( e, step ) : null
			}
		>
			<div className="newform-createPopup__action-icon">
				<ReactSVG src={ icon } />
			</div>
			{ text && (
				<span className="newform-createPopup__action-text">
					{ text }
				</span>
			) }
		</Link>
	) : (
		<span
			className="newform-createPopup__action"
			onClick={ ( e ) =>
				step ? handleCreateFormSteps( e, step ) : null
			}
		>
			<div className="newform-createPopup__action-icon">
				<ReactSVG src={ icon } />
			</div>
			{ text && (
				<span className="newform-createPopup__action-text">
					{ text }
				</span>
			) }
		</span>
	);
}

CreatePopupAction.propTypes = {
	icon: PropTypes.string,
	text: PropTypes.string,
	step: PropTypes.string,
	url: PropTypes.string,
};
