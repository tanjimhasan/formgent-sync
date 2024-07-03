import { useBlockProps } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<div { ...useBlockProps() }>
			<code>
				<pre>{ JSON.stringify( attributes, null, 2 ) }</pre>
			</code>
		</div>
	);
}
