import domReady from '@wordpress/dom-ready';
import { dispatch } from '@wordpress/data';

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
	require( './short-text' );
	require( './number' );
} else {
	require( './form' );
}
