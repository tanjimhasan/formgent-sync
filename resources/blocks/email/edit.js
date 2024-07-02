import { useBlockProps } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<div { ...useBlockProps() }>
			<div className="formgent-form-group">
				<label>{ attributes.label }</label>
				<input type="email" value={ attributes.value } />
			</div>
		</div>
	);
}
