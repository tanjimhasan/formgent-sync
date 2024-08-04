export default function Edit( { attributes, setAttributes } ) {
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
				<div className="block-editor-block-list__address">
					<div className="block-editor-block-list__address__single">
						<input
							className="block-editor-block-list__single__input"
							type="text"
							name={ attributes.street_name }
							placeholder={ attributes.street_placeholder }
							value={ attributes.street_value }
							onChange={ () => {} }
						/>
						<span className="block-editor-block-list__single__sub-label">
							{ attributes.street_sub_label }
						</span>
					</div>
					<div className="block-editor-block-list__address__single">
						<input
							className="block-editor-block-list__single__input"
							type="text"
							name={ attributes.address_line_name }
							placeholder={ attributes.address_line_placeholder }
							value={ attributes.address_line_value }
							onChange={ () => {} }
						/>
						<span className="block-editor-block-list__single__sub-label">
							{ attributes.address_line_sub_label }
						</span>
					</div>
					<div className="block-editor-block-list__address__wrapper">
						<div className="block-editor-block-list__address__single">
							<input
								className="block-editor-block-list__single__input"
								type="text"
								name={ attributes.city_name }
								placeholder={ attributes.city_placeholder }
								value={ attributes.city_value }
								onChange={ () => {} }
							/>
							<span className="block-editor-block-list__single__sub-label">
								{ attributes.city_sub_label }
							</span>
						</div>
						<div className="block-editor-block-list__address__single">
							<input
								className="block-editor-block-list__single__input"
								type="text"
								name={ attributes.state_name }
								placeholder={ attributes.state_placeholder }
								value={ attributes.state_value }
								onChange={ () => {} }
							/>
							<span className="block-editor-block-list__single__sub-label">
								{ attributes.state_sub_label }
							</span>
						</div>
					</div>
					<div className="block-editor-block-list__address__single">
						<input
							className="block-editor-block-list__single__input"
							type="text"
							name={ attributes.zip_name }
							placeholder={ attributes.zip_placeholder }
							value={ attributes.zip_value }
							onChange={ () => {} }
						/>
						<span className="block-editor-block-list__single__sub-label">
							{ attributes.zip_sub_label }
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
