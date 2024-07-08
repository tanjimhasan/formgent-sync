if ( 'formgent_form' === typenow ) {
	require( './name' );
	require( './email' );
	require( './short-text' );
	require( './long-text' );
	require( './number' );
} else {
	require( './form' );
}
