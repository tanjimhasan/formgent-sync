if ( 'formgent_form' === typenow ) {
	require( './name' );
	require( './email' );
	require( './short-text' );
	require( './number' );
	require( './button' );
	require( './phone-number' );
	require( './select' );
} else {
	require( './form' );
}
