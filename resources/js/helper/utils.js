export function formatDate( date ) {
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];

	const dateParts = date.split( ' ' );
	const [ datePart, timePart ] = dateParts;
	const [ year, month, day ] = datePart.split( '-' );
	const [ hour, minute ] = timePart.split( ':' );

	const formattedDate = `${ parseInt( day ) } ${
		months[ parseInt( month ) - 1 ]
	} ${ year.slice( -2 ) } @ ${ hour }:${ minute }`;
	return formattedDate;
}