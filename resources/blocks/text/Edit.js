import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<div className="formgent-form-group">
			<label>
				Label: { attributes.label } { attributes.required ? '*' : '' }
			</label>
			<input type="text" value={ attributes.value } />
			<input
				type="text"
				name={ attributes.name }
				placeholder={ attributes.placeholder }
			/>
			<span>{ attributes.sub_label }</span>
		</div>
	);
}
