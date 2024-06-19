import FormSubmissionModule from '@formgent/modules/FormSubmission';
import domReady from '@wordpress/dom-ready';
import { createRoot } from '@wordpress/element';
import '../../../data/frontend/store.js';

domReady( async () => {
	const container = document.querySelector( '.formgent-shortcode' );

	if ( container === null ) {
		return;
	}

	const formId = container ? container.getAttribute( 'data-form_id' ) : null;
	if ( createRoot ) {
		const root = createRoot( container );
		try {
			root.render( <FormSubmissionModule formId={ formId } /> );
		} catch ( error ) {
			console.log( error );
		}
	} else {
		try {
			render( <FormSubmissionModule formId={ formId } />, container );
		} catch ( error ) {
			console.log( error );
		}
	}
} );
