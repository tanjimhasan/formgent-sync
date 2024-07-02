import { useBlockProps } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<p { ...useBlockProps() }>
			<div className="formgent-form-group">
				<label>{ attributes.label }</label>
				<input type="text" value={ attributes.value } />
			</div>
		</p>
	);
}
