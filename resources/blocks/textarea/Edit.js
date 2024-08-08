import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<div className="formgent-editor-block-list__single">
			<label
				className={ `formgent-editor-block-list__single__label formgent-label-align-${ attributes.label_alignment }` }
			>
				{ attributes.label }
				{ attributes.required ? (
					<span className="formgent-editor-block-list__single__label__required">
						*
					</span>
				) : null }
			</label>
			<div className="formgent-editor-block-list__single__wrapper">
				<textarea
					className="formgent-editor-block-list__single__input formgent-editor-block-list__single__input--textarea"
					name={ attributes.name }
					placeholder={ attributes.placeholder }
					value={ attributes.value }
					onChange={ () => {} }
					rows="4"
					cols="50"
				/>
				<span className="formgent-editor-block-list__single__sub-label">
					{ attributes.sub_label }
				</span>
			</div>
		</div>
	);
}
