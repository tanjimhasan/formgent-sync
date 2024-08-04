export default function Edit( { attributes, setAttributes } ) {
	return (
		<code>
			<pre>{ JSON.stringify( attributes, null, 2 ) }</pre>
		</code>
	);
}
