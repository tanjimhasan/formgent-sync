/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from '@wordpress/interactivity';

store( 'formgent/form', {
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
		submit: async () => {
			const context = getContext();
			const element = getElement();

			const formData = [];

			for ( const name in context.data ) {
				if ( ! Object.hasOwnProperty.call( context.data, name ) ) {
					continue;
				}
				const value = context.data[ name ];

				switch ( context.blocksSettings[ name ].field_type ) {
					case 'number':
						formData[ name ] = parseInt( value, 10 );
						break;
					default:
						formData[ name ] = value;
						break;
				}
			}

			try {
				const response = await wp.apiFetch( {
					path: '/formgent/responses',
					method: 'POST',
					data: {
						id: context.formId,
						form_data: formData,
					},
				} );
				const form = element.ref.closest( 'form' );
				form.querySelector(
					'.formgent-notices'
				).innerHTML = `<span>${ response.message }</span>`;
				form.reset();
			} catch ( error ) {
				console.error( 'Error:', error );
			}
		},
	},
	callbacks: {},
} );
