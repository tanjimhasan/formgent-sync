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
				<select
					name={ attributes.name }
					value={ attributes.value || 'formgent-default-option' }
					onChange={ () => {} }
				>
					{ attributes.options.length > 0 ? (
						attributes.options.map( ( option, index ) => (
							<option key={ index } value={ option.title }>
								{ option.title }
							</option>
						) )
					) : (
						<option value="formgent-default-option">
							Please Select
						</option>
					) }
				</select>
				<span className="formgent-form-block__sub-label">
					{ attributes.sub_label }
				</span>
			</div>
		</div>
	);
}
