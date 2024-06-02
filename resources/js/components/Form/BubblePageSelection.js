import ReactSVG from 'react-inlinesvg';
import { Tooltip } from '@wordpress/components';
import elementCircle from '@icon/question-circle.svg';
import { SelectField } from '@formgent/components';
import { __ } from '@wordpress/i18n';

export default function BubblePageSelection( props ) {
	const { control, baseApiRoute } = props;

	return (
		<div className="formgent-form-group">
			<label
				htmlFor="formgent-page-select"
				className="formgent-form__label"
			>
				{ baseApiRoute.availablePages.text }
				<Tooltip
					text={ __(
						"Control where your form bubble appears by specifying the pages it's displayed on.",
						'formgent'
					) }
					delay="0"
				>
					<span className="formgent-tooltip-toggle">
						<ReactSVG src={ elementCircle } />
					</span>
				</Tooltip>
			</label>

			<SelectField
				name="available_pages"
				control={ control }
				isMulti={ true }
				optionsAPI={ baseApiRoute.availablePages.api }
				placeholder={ __( 'Select...', 'formgent' ) }
			/>
		</div>
	);
}
