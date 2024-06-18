export default function InserterOverlayField( props ) {
	const { inserterOverlayActiveField } = props;
	return (
		<div className="formgent-editor-inserter__field">
			{ inserterOverlayActiveField.type }
		</div>
	);
}
