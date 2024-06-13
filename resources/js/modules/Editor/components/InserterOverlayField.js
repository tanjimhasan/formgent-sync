export default function InserterOverlayField( props ) {
	const { inserterOverlayActiveField } = props;
	console.log( inserterOverlayActiveField );
	return (
		<div className="formgent-editor-inserter__field">
			{ inserterOverlayActiveField.type }
		</div>
	);
}
