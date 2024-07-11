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
					{ attributes.options.map( ( option, index ) => (
						<div className="formgent-form-block__wrapper__single">
							<input
								className="formgent-form-block__input"
								type="radio"
								id={ option.title }
								name={ attributes.name }
							/>
							<label for={ option.title }>{ option.title }</label>
						</div>
					) ) }
				</div>
				<span className="formgent-form-block__sub-label">
					{ attributes.sub_label }
				</span>
			</div>
		</div>
	);
}
