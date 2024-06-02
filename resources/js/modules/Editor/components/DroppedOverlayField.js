import { registerPreviewFields } from '@formgent/fields';

export default function DroppedOverlayField( props ) {
	const { droppedOverlayActiveField } = props;
	const DroppedField =
		registerPreviewFields()[ droppedOverlayActiveField.type ];
	return (
		<div className="formgent-droppable-field-overlay">
			<div className="formgent-dropable-field__actions">
				<i className="formgent-icon">Trigger sort</i>
				<i className="formgent-icon">D</i>
				<i className="formgent-icon">D</i>
				<i className="formgent-icon">D</i>
			</div>
			<DroppedField />
		</div>
	);
}
