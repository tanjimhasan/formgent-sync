import PropTypes from 'prop-types';
import { __ } from '@wordpress/i18n';

export default function CreatePopupHeader( props ) {
	const { title, subtitle } = props;

	return (
		<div className="formgent-createPopup__header">
			{ title && <h4>{ title }</h4> }
			{ subtitle && <p>{ subtitle }</p> }
		</div>
	);
}

CreatePopupHeader.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
};
