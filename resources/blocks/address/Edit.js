export default function Edit( { attributes, setAttributes } ) {
	return (
		<div className="block-editor-block-list__single">
			<div className="block-editor-block-list__single__single">
				<label
					className={ `block-editor-block-list__single__label label-align-${ attributes.street_label_alignment }` }
				>
					{ attributes.street_label }
					{ attributes.street_required ? (
						<span className="block-editor-block-list__single__label__required">
							*
						</span>
					) : null }
				</label>
				<div className="block-editor-block-list__single__wrapper">
					<input
						className="block-editor-block-list__single__input"
						type="text"
						name={ attributes.street_name }
						placeholder={ attributes.street_placeholder }
						value={ attributes.street_value }
					/>
					<span className="block-editor-block-list__single__sub-label">
						{ attributes.street_sub_label }
					</span>
				</div>
			</div>
			{ /* { attributes.options.map( ( option, index ) => (
				<>
					<label
						className={ `block-editor-block-list__single__label label-align-${ attributes.label_alignment }` }
					>
						{ option.label }
						{ attributes.required ? (
							<span className="block-editor-block-list__single__label__required">
								*
							</span>
						) : null }
					</label>
					<div className="block-editor-block-list__single__wrapper">
						<input
							className="block-editor-block-list__single__input"
							type="text"
							name={ option.name }
							placeholder={ option.placeholder }
						/>
						<span className="block-editor-block-list__single__sub-label">
							{ option.sub_label }
						</span>
					</div>
				</>
			) ) } */ }
		</div>
	);
}
