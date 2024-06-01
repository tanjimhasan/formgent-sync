import ReactSVG from 'react-inlinesvg';
import { Tooltip } from '@wordpress/components';
import elementCircle from '@icon/question-circle.svg';
import { SelectField } from '@newform/components';
import { __ } from '@wordpress/i18n';

export default function BubblePageSelection( props ) {
	const { control, baseApiRoute } = props;

	return (
		<div className="newform-form-group">
			<label
				htmlFor="newform-page-select"
				className="newform-form__label"
			>
				{ baseApiRoute.availablePages.text }
				<Tooltip
					text={ __(
						"Control where your form bubble appears by specifying the pages it's displayed on.",
						'newform'
					) }
					delay="0"
				>
					<span className="newform-tooltip-toggle">
						<ReactSVG src={ elementCircle } />
					</span>
				</Tooltip>
			</label>

			<SelectField
				name="available_pages"
				control={ control }
				isMulti={ true }
				optionsAPI={ baseApiRoute.availablePages.api }
				placeholder={ __( 'Select...', 'newform' ) }
			/>
		</div>
	);
}
