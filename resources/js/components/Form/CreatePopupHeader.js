import PropTypes from 'prop-types';
import { __ } from '@wordpress/i18n';

export default function CreatePopupHeader( props ) {
	const { title, step } = props;

	return (
		<div className="formgent-createPopup__header">
			<span className="formgent-createPopup__header-step">
				Step { step } of 2
			</span>
			{ title && <h4>{ title }</h4> }
			{ step === '1' ? (
				<p>Select the type of form youwant to create</p>
			) : (
				<p>
					Start from scratch or you can select a template to assist
					you.
				</p>
			) }
		</div>
	);
}

CreatePopupHeader.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
};
