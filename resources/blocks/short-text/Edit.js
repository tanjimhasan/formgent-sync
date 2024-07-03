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
				<input type="text" value={ attributes.value } />
			</div>
		</p>
	);
}
