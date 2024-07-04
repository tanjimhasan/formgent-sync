import { useBlockProps } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<p { ...useBlockProps() }>
			<div className="formgent-form-group">
				<label>
					{ attributes.label } { attributes.required ? '*' : '' }
				</label>
				<textarea
					name={ attributes.name }
					placeholder={ attributes.placeholder }
					rows="4"
					cols="50"
				/>
			</div>
		</p>
	);
}
