import { registerPreviewFields } from '@formgent/fields';
import ReactSVG from 'react-inlinesvg';
import dotsGrid from '@icon/dots-grid.svg';

export default function DroppedOverlayField( props ) {
	const { droppedOverlayActiveField } = props;
	const DroppedField =
		registerPreviewFields()[ droppedOverlayActiveField.type ];
	return (
		<div className="formgent-droppable-field-overlay">
			<span className="formgent-dropable-field__sorting">
				<ReactSVG src={ dotsGrid } />
			</span>
			<DroppedField />
		</div>
	);
}
