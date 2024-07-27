export default function Edit( { attributes, setAttributes } ) {
	function handleClick( event ) {
		event.preventDefault(); // Prevents the default action
		event.stopPropagation(); // Stops the event from propagating
	}

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
			<div className="block-editor-block-list__single__wrapper">
				<div className="block-editor-block-list__single__box">
					{ attributes.options.length > 0 ? (
						attributes.options.map( ( option, index ) => (
							<div
								key={ index }
								className="block-editor-block-list__single__box__wrapper"
							>
								<input
									className="block-editor-block-list__single__input block-editor-block-list__single__input--checkbox"
									type="checkbox"
									name={ option.title }
									value={ option.title }
									onClick={ ( e ) => handleClick( e ) }
								/>
								<label htmlFor={ option.title }>
									{ option.title }
								</label>
							</div>
						) )
					) : (
						<div className="block-editor-block-list__single__box__wrapper">
							<input
								className="block-editor-block-list__single__input block-editor-block-list__single__input--checkbox"
								type="checkbox"
								name="formgent-default-checkbox"
								value={
									attributes.value ||
									'formgent-default-option'
								}
								onClick={ ( e ) => handleClick( e ) }
							/>
							<label htmlFor="formgent-default-checkbox">
								Choose Default
							</label>
						</div>
					) }
				</div>
				<span className="block-editor-block-list__single__sub-label">
					{ attributes.sub_label }
				</span>
			</div>
		</div>
	);
}
