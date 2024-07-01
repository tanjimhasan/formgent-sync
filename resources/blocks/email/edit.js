import { useBlockProps } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {
	function handleEmailChange( e ) {
		setAttributes( {
			value: e.target.value,
		} );
	}
	return (
		<div { ...useBlockProps() }>
			<div className="formgent-form-group">
				<label>{ attributes.label }</label>
				<input
					type="email"
					value={ attributes.value }
					onChange={ handleEmailChange }
				/>
			</div>
		</div>
	);
}
