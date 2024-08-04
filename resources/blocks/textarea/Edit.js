import './editor.scss';

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
				<textarea
					className="block-editor-block-list__single__input block-editor-block-list__single__input--textarea"
					name={ attributes.name }
					placeholder={ attributes.placeholder }
					value={ attributes.value }
					onChange={ () => {} }
					rows="4"
					cols="50"
				/>
				<span className="block-editor-block-list__single__sub-label">
					{ attributes.sub_label }
				</span>
			</div>
		</div>
	);
}
