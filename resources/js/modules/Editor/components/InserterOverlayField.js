export default function InserterOverlayField( props ) {
	const { inserterOverlayActiveField } = props;
	return (
		<div className="newform-editor-inserter__field">
			{ inserterOverlayActiveField.type }
		</div>
	);
}
