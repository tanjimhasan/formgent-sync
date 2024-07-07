export default function Edit( { attributes, setAttributes } ) {
	return (
		<div className="formgent-form-group">
			<label>
				Label: { attributes.label } { attributes.required ? '*' : '' }
			</label>
			<input type="number" name={ attributes.name } />
			<span>{ attributes.sub_label }</span>
		</div>
	);
}
