import { dispatch } from '@wordpress/data';
import domReady from '@wordpress/dom-ready';

if ( 'formgent_form' === typenow ) {
	/**
	 * Initially open editor left and right both sidebar
	 */
	domReady( function () {
		setTimeout( function () {
			dispatch( 'core/editor' ).setIsInserterOpened( true );
			dispatch( 'core/edit-post' ).openGeneralSidebar(
				'edit-post/document'
			);
		}, 0 );
	} );

	/**
	 * Register custom blocks
	 */
	require( './name' );
	require( './email' );
	require( './text' );
	require( './number' );
	require( './dropdown' );
	require( './gdpr' );
	require( './single-choice' );
	require( './multi-choice' );
	// require( './button' );
	// require( './phone-number' );
	// require( './address' );
} else {
	require( './form' );
}
