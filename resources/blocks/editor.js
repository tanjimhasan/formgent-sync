import { dispatch } from '@wordpress/data';
import domReady from '@wordpress/dom-ready';

/**
 * Initially open editor left and right both sidebar
 */
domReady( function () {
	setTimeout( function () {
		dispatch( 'core/editor' ).setIsInserterOpened( true );
		dispatch( 'core/edit-post' ).openGeneralSidebar( 'edit-post/document' );
	}, 0 );
} );
