import { InserterStyle } from './style';
import DraggableField from './DraggableField';
import { registerFields } from '@formgent/fields';
export default function FieldInserter( props ) {
	const { inserterDomKey } = props;
	const generalFields = [ 'long_text', 'short_text' ];
	const advanceFields = [];
	const fields = registerFields().filter(
		( item ) => item.type !== 'spacer'
	);

	function getFieldByGroup( fieldGroup, field ) {
		if ( ! fieldGroup.includes( field.type ) ) {
			return;
		}
		return <DraggableField key={ field.id } field={ field } />;
	}

	return (
		<InserterStyle
			key={ inserterDomKey }
			className="formgent-editor-inserter"
		>
			<span className="formgent-editor-inserter__label">General</span>
			<div className="formgent-editor-inserter__group">
				{ fields.map( ( field ) =>
					getFieldByGroup( generalFields, field )
				) }
			</div>
		</InserterStyle>
	);
}
