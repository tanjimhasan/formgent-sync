import { useBlockProps } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<p { ...useBlockProps() }>
			{ /* <code>
				<pre>{ JSON.stringify( attributes, null, 2 ) }</pre>
			</code> */ }
			<div className="formgent-form-group">
				<label>
					{ attributes.label } { attributes.required ? '*' : '' }
				</label>
				<textarea
					value={ attributes.value }
					name={ attributes.name }
					rows="4"
					cols="50"
				/>
			</div>
		</p>
	);
}
