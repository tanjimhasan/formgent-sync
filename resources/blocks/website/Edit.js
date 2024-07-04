import { useBlockProps } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<div { ...useBlockProps() }>
			<div className="formgent-form-group">
				<label>
					{ attributes.label } { attributes.required ? '*' : '' }
				</label>
				<input
					type="text"
					name={ attributes.name }
					placeholder={ attributes.placeholder }
				/>
			</div>
		</div>
	);
}
