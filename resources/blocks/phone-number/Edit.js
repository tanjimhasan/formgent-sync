export default function Edit( { attributes, setAttributes } ) {
	return (
		<div className="formgent-form-block">
			<label
				className={ `formgent-form-block__label label-align-${ attributes.label_alignment }` }
			>
				{ attributes.label }
				{ attributes.required ? (
					<span className="formgent-form-block__label__required">
						*
					</span>
				) : null }
			</label>
			<div className="formgent-form-block__wrapper">
				{ /* <span className="formgent-form-block__code">+88</span> */ }
				<select
					name={ attributes.country_code }
					value={ attributes.country_code || 'formgent-default-code' }
					onChange={ () => {} }
				>
					<option value="formgent-default-code">Please Select</option>
					<option value="+88">+88</option>
					<option value="+11">+11</option>
					<option value="+22">+22</option>
					<option value="+33">+33</option>
				</select>
				<input
					className="formgent-form-block__input"
					type="text"
					name={ attributes.name }
					placeholder={ attributes.placeholder }
					value={ attributes.value }
					onChange={ () => {} }
				/>
				<span className="formgent-form-block__sub-label">
					{ attributes.sub_label }
				</span>
			</div>
		</div>
	);
}
