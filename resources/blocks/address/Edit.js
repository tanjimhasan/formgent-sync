export default function Edit( { attributes, setAttributes } ) {
	return (
		<div className="formgent-form-block">
			<div className="formgent-form-block__single">
				<label
					className={ `formgent-form-block__label label-align-${ attributes.street_label_alignment }` }
				>
					{ attributes.street_label }
					{ attributes.street_required ? (
						<span className="formgent-form-block__label__required">
							*
						</span>
					) : null }
				</label>
				<div className="formgent-form-block__wrapper">
					<input
						className="formgent-form-block__input"
						type="text"
						name={ attributes.street_name }
						placeholder={ attributes.street_placeholder }
						value={ attributes.street_value }
					/>
					<span className="formgent-form-block__sub-label">
						{ attributes.street_sub_label }
					</span>
				</div>
			</div>
			{ /* { attributes.options.map( ( option, index ) => (
				<>
					<label
						className={ `formgent-form-block__label label-align-${ attributes.label_alignment }` }
					>
						{ option.label }
						{ attributes.required ? (
							<span className="formgent-form-block__label__required">
								*
							</span>
						) : null }
					</label>
					<div className="formgent-form-block__wrapper">
						<input
							className="formgent-form-block__input"
							type="text"
							name={ option.name }
							placeholder={ option.placeholder }
						/>
						<span className="formgent-form-block__sub-label">
							{ option.sub_label }
						</span>
					</div>
				</>
			) ) } */ }
		</div>
	);
}
