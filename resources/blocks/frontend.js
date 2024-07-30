/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from '@wordpress/interactivity';

store( 'formgent-block', {
	actions: {
		toggle: () => {
			const context = getContext();
			context.isOpen = ! context.isOpen;
		},
		updateInput: () => {
			const element = getElement();
			const context = getContext();
			context[ element.ref.name ] = element.ref.value;
		},

		updateNumber: () => {
			const element = getElement();
			const context = getContext();
			context[ element.ref.name ] = parseInt( element.ref.value );
		},
	},
	callbacks: {},
} );

document.addEventListener( 'formgent/submit', async function ( event ) {
	const { formId, names, form } = event.detail;

	const formData = new FormData( form );
	const rowData = {};

	for ( const name of Object.keys( names ) ) {
		const inputElement = form.querySelector( `[name="${ name }"]` );
		const inputType = inputElement ? inputElement.type : null;

		switch ( inputType ) {
			case 'number':
				rowData[ name ] = parseInt( formData.get( name ), 10 );
				break;
			default:
				rowData[ name ] = formData.get( name );
				break;
		}
	}

	const submissionData = {
		id: parseInt( formId ),
		form_data: {
			...rowData,
		},
	};

	try {
		const response = await wp.apiFetch( {
			path: '/formgent/responses',
			method: 'POST',
			data: submissionData,
		} );

		const noticeContainer = form.querySelector( '.formgent-notices' );
		noticeContainer.innerHTML = `<span>${ response.message }</span>`;
		form.reset();
	} catch ( error ) {
		console.error( 'Error:', error );
	}
} );
