export default function FieldContent( props ) {
	const { data } = props;

	console.log( data );

	return (
		data.length &&
		data.map( ( item ) => {
			return <span key={ item.id }>{ item.value }</span>;
		} )
	);
}
