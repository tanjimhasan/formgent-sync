export default function Edit( { attributes, setAttributes } ) {
	return (
		<div className="formgent-form-group">
			<label>
				{ attributes.label } { attributes.required ? '*' : '' }
			</label>
			<input type="number" name={ attributes.name } />
		</div>
	);
}
