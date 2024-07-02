import { useBlockProps } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<p { ...useBlockProps() }>
			<pre>{ JSON.stringify( attributes, null, 2 ) }</pre>
			<div className="formgent-form-group">
				<label>{ attributes.label }</label>
				<input type="text" value={ attributes.value } />
			</div>
		</p>
	);
}
