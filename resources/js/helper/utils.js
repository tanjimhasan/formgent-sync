function formatDate( formatType, date, options, isTimeActive = true ) {
	const dataObject = new Date( date );
	const formattedDate = dataObject.toLocaleDateString( formatType, options );
	const formattedTime = dataObject.toLocaleTimeString( formatType, {
		hour: '2-digit',
		minute: '2-digit',
	} );

	return (
		<>
			<span className="formgent-form-date__day">{ formattedDate }</span>
			{ isTimeActive && (
				<span className="formgent-form-date__time">
					{ formattedTime }
				</span>
			) }
		</>
	);
}

function convertToTitleCase( text ) {
	return text
		.replace( /_/g, ' ' )
		.split( ' ' )
		.map( ( word ) => word.charAt( 0 ).toUpperCase() + word.slice( 1 ) )
		.join( ' ' );
}

function addQueryStrings( path, data ) {
	const isObject = ( value ) =>
		value && typeof value === 'object' && ! Array.isArray( value );

	if ( ! isObject( data ) ) {
		return path;
	}

	let queryString = '';

	for ( const [ key, value ] of Object.entries( data ) ) {
		if ( value === '' ) {
			continue;
		}

		if ( Array.isArray( value ) ) {
			for ( const item of value ) {
				if ( item === '' ) {
					continue;
				}

				queryString += `&${ key }[]=${ item }`;
			}
		} else {
			queryString += `&${ key }=${ value }`;
		}
	}

	if ( ! queryString ) {
		return path;
	}

	return `${ path }?${ queryString.substring( 1 ) }`;
}

export { formatDate, convertToTitleCase, addQueryStrings };
