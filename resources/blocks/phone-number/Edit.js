import Phone from './Phone';

export default function Edit( { attributes, setAttributes } ) {
	const handlePhoneChange = ( value ) => {
		attributes.value = value;
	};

	return (
		<div className="block-editor-block-list__single">
			<label
				className={ `block-editor-block-list__single__label label-align-${ attributes.label_alignment }` }
			>
				{ attributes.label }
				{ attributes.required ? (
					<span className="block-editor-block-list__single__label__required">
						*
					</span>
				) : null }
			</label>
			{ attributes.value || 'No value' }
			<Phone handlePhoneChange={ handlePhoneChange } />
			{ /* <div className="block-editor-block-list__single__wrapper">
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
					className="block-editor-block-list__single__input"
					type="text"
					name={ attributes.name }
					placeholder={ attributes.placeholder }
					value={ attributes.value }
					onChange={ () => {} }
				/>
				<span className="block-editor-block-list__single__sub-label">
					{ attributes.sub_label }
				</span>
			</div> */ }
		</div>
	);
}
