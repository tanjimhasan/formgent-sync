import { InserterStyle } from './style';
import DraggableField from './DraggableField';
import { registerFields } from '@newform/fields';
export default function FieldInserter( props ) {
	const { inserterDomKey } = props;
	const fields = registerFields().filter(
		( item ) => item.type !== 'spacer'
	);

	return (
		<InserterStyle
			key={ inserterDomKey }
			className="newform-editor-inserter"
		>
			{ fields.map( ( field ) => (
				<DraggableField key={ field.id } field={ field } />
			) ) }
		</InserterStyle>
	);
}
