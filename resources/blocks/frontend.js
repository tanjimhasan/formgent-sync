/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from '@wordpress/interactivity';
import JustValidate from 'just-validate';

const { callbacks } = store( 'formgent/form', {
	actions: {
		updateInput: () => {
			const element = getElement();
			const context = getContext();
			context.data[ element.ref.name ] = element.ref.value;
		},
		updateNumber: () => {
			const element = getElement();
			const context = getContext();
			context.data[ element.ref.name ] = parseInt( element.ref.value );
		},
	},
	callbacks: {
		init: () => {
			const context = getContext();
			const element = getElement();

			const validation = new JustValidate(
				`#${ element.attributes.id }`
			);

			let rulesList = {
				email: function ( rules ) {
					rules.push( {
						rule: 'email',
						errorMessage: 'Email is invalid!',
					} );
				},
			};

			//Loop over each field & prepare validation group
			for ( const name in context.data ) {
				const selector = element.ref.querySelector(
					`input[name="${ name }"]`
				);
				const rules = [];
				const field = context.blocksSettings[ name ];

				// General validation rules
				if ( field.required ) {
					rules.push( {
						rule: 'required',
						errorMessage: `${ field.label } is required`,
					} );
				}

				// Type specific validation rules
				if ( rulesList[ field.field_type ] ) {
					rulesList[ field.field_type ]( rules );
				}

				if ( rules.length < 1 ) {
					return;
				}

				validation.addField( selector, rules );
			}

			validation.onSuccess( ( event ) => {
				event.preventDefault();
				callbacks.submit( context, element );
			} );
		},
		submit: async ( context, element ) => {
			const formData = {};

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
				context.data = {};
			} catch ( error ) {
				console.error( 'Error:', error );
			}
		},
	},
} );
