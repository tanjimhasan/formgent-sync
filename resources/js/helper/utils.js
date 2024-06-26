function formatDate( formatType, date, options ) {
	const dataObject = new Date( date );
	const formattedDate = dataObject.toLocaleDateString( formatType, options );
	const formattedTime = dataObject.toLocaleTimeString( formatType, {
		hour: '2-digit',
		minute: '2-digit',
	} );

	return (
		<>
			<span className="formgent-form-date__day">{ formattedDate }</span>
			<span className="formgent-form-date__time">{ formattedTime }</span>
		</>
	);
}

export { formatDate };
