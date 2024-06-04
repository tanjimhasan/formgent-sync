import CreatePopupHeader from './CreatePopupHeader';
import CreatePopupAction from './CreatePopupAction';
import Pencil from '@icon/pencil-plus.svg';
import template from '@icon/template.svg';
import { __ } from '@wordpress/i18n';
export default function CreatePopupInitial( props ) {
	const { moduleState, setModuleState } = props;
	const actionsData = [
		{
			icon: Pencil,
			label: 'Traditional Form',
			text: 'Multiple questions on single page',
			step: 'scratch' /* step/url */,
		},
		// {
		// 	icon: template,
		// 	text: 'Start From A Template',
		// 	url: 'pre-made-templates' /* step/url */,
		// },
	];

	return (
		<div className="formgent-createPopup">
			<CreatePopupHeader
				title={ __( 'Create a New Form', 'formgent' ) }
				subtitle={ __(
					'Select the type of form you want to create',
					'formgent'
				) }
			/>
			<div className="formgent-createPopup__body">
				<div className="formgent-createPopup__actions">
					{ actionsData.map( ( item, index ) => {
						return (
							<CreatePopupAction
								icon={ item.icon }
								text={ item.text }
								step={ item.step }
								url={ item.url }
								moduleState={ moduleState }
								setModuleState={ setModuleState }
								key={ index }
							/>
						);
					} ) }
				</div>
			</div>
		</div>
	);
}

CreatePopupInitial.propTypes = {};
