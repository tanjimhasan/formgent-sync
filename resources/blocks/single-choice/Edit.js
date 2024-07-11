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
				<div className="formgent-form-block__wrapper__box">
					{ attributes.options.length > 0 ? (
						attributes.options.map( ( option, index ) => (
							<div
								key={ index }
								className="formgent-form-block__wrapper__single"
							>
								<input
									className="formgent-form-block__input"
									type="radio"
									id={ option.title }
									name={ attributes.name }
								/>
								<label htmlFor={ option.title }>
									{ option.title }
								</label>
							</div>
						) )
					) : (
						<div className="formgent-form-block__wrapper__single">
							<input
								className="formgent-form-block__input"
								type="radio"
								id="formgent-default-radio"
								name={ attributes.name }
							/>
							<label htmlFor="formgent-default-radio">
								Choose Default
							</label>
						</div>
					) }
				</div>
				<span className="formgent-form-block__sub-label">
					{ attributes.sub_label }
				</span>
			</div>
		</div>
	);
}
