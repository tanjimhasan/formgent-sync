if ( 'formgent_form' === typenow ) {
	require( './name' );
	require( './email' );
	require( './short-text' );
	require( './number' );
	require( './website' );
} else {
	require( './form' );
}
