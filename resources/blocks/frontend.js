/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from '@wordpress/interactivity';
import JustValidate from 'just-validate';
import TomSelect from 'tom-select';

let formStarted = false;

// Generate form token on form start
async function generateFormToken( context ) {
	if ( ! formStarted ) {
		try {
			const responseTokens = await wp.apiFetch( {
				path: 'formgent/responses/generate-token',
				method: 'POST',
				data: {
					form_id: context.formId,
				},
			} );
		} catch ( error ) {
			console.log( error );
		}
	}
}

// Drop-off counts
async function updateFieldCounter(
	context,
	element,
	counterName,
	counterType
) {
	try {
		const responseCounts = await wp.apiFetch( {
			path: `formgent-pro/analytics/forms/${ context.formId }/fields/update-count`,
			method: 'POST',
			data: JSON.stringify( {
				counter_name: 'views',
				counter_type: '+',
				field_name: 'email',
			} ),
		} );
	} catch ( error ) {
		console.log( error );
	}
}

const { callbacks } = store( 'formgent/form', {
	actions: {
		updateInput: async () => {
			const element = getElement();
			const context = getContext();
			context.data[ element.ref.name ] = element.ref.value;
			generateFormToken( context );
			formStarted = true;
			updateFieldCounter( context, element, 'both', '+' );
		},
		updateNumber: () => {
			const element = getElement();
			const context = getContext();
			context.data[ element.ref.name ] = parseInt( element.ref.value );
			generateFormToken( context );
			formStarted = true;
		},
		updateGdpr: () => {
			const element = getElement();
			const context = getContext();
			context.data[ element.ref.name ] =
				context.data[ element.ref.name ] === '' ||
				context.data[ element.ref.name ] === 0
					? 1
					: 0;
			generateFormToken( context );
			formStarted = true;
		},
		updatePhoneNumber: () => {
			const element = getElement();
			const context = getContext();
			context.data[ element.ref.name ].number = element.ref.value;
			generateFormToken( context );
			formStarted = true;
		},
		updateDialCode: () => {
			const element = getElement();
			const context = getContext();
			const name = element.ref.name.replace( '-dial-code', '' );
			context.data[ name ].dialCode = element.ref.value;
			generateFormToken( context );
			formStarted = true;
		},
	},
	callbacks: {
		init: async () => {
			const context = getContext();
			const element = getElement();

			/* Update form views */
			try {
				const updateFromViews = await wp.apiFetch( {
					path: `formgent/analytics/forms/${ context.formId }/update-view-count`,
					method: 'POST',
					data: {
						form_id: context.formId,
						type: '+',
					},
				} );
			} catch ( error ) {
				console.log( error );
			}

			const validation = new JustValidate(
				`#${ element.attributes.id }`,
				{ validateBeforeSubmitting: true }
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
				let selector = element.ref.querySelector(
					`input[name="${ name }"]`
				);

				if ( ! selector ) {
					selector = element.ref.querySelector(
						`textarea[name="${ name }"]`
					);
				}

				const rules = [];
				const field = context.blocksSettings[ name ];

				// // General validation rules
				if ( field.required || field.field_type === 'gdpr' ) {
					if ( field.field_type === 'gdpr' ) {
						field.label = 'GDPR';
					}
					rules.push( {
						rule: 'required',
						errorMessage: `${ field.label || 'Field' } is required`,
					} );
				}

				// // Type specific validation rules
				if ( rulesList[ field.field_type ] ) {
					rulesList[ field.field_type ]( rules );
				}

				if ( rules.length > 0 ) {
					validation.addField( selector, rules );
				}
			}

			validation.onSuccess( ( event ) => {
				event.preventDefault();
				callbacks.submit( context, element );
			} );
		},
		phoneNumberInit: async () => {
			const context = getContext();
			const element = getElement();
			const name = element.ref.getAttribute( 'data-wp-key' );
			console.log( context.data[ name ] );
			// let phoneNumberParts =
			// 	context.data[ element.ref.name ].split( ')' );
			// context.data[ element.ref.name ] = {
			// 	dialCode: `${ phoneNumberParts[ 0 ] })`,
			// 	number: phoneNumberParts[ 1 ].trim(),
			// };

			// try {
			// 	const countryObject = await wp.apiFetch( {
			// 		path: '/formgent/countries',
			// 		method: 'GET',
			// 	} );
			// 	const flagUrl = countryObject.flag_url;
			// 	const countries = Object.entries( countryObject.countries ).map(
			// 		( [ key, value ] ) => {
			// 			return {
			// 				id: key,
			// 				img: `${ flagUrl }/${ key }.png`,
			// 				...value,
			// 			};
			// 		}
			// 	);
			// 	const control = new TomSelect(
			// 		`#${ element.attributes.id }-dial-code`,
			// 		{
			// 			valueField: 'dial_code',
			// 			options: countries,
			// 			render: {
			// 				option: function ( data, escape ) {
			// 					return `
			// 					<div class="formgent-phone-dialer-option">
			// 						<img src="${ escape( data.img ) }" />
			// 						<span>${ escape( data.name ) }</span>
			// 					<div/>
			// 				`;
			// 				},
			// 				item: function ( data, escape ) {
			// 					return `<img src="${ escape( data.img ) }" />`;
			// 				},
			// 			},
			// 			create: false,
			// 		}
			// 	);
			// 	control.setValue( '+880' );
			// } catch ( error ) {
			// 	console.log( error );
			// }
		},
		submit: async ( context, element ) => {
			const form = element.ref.closest( 'form' );
			const formData = {};

			// Honeypot security check
			const honeypotField = form.querySelector(
				`input[name="formgent-honeypot-${ context.formId }"]`
			);
			if ( honeypotField.value !== '' ) {
				return;
			}

			for ( const name in context.data ) {
				if ( ! Object.hasOwnProperty.call( context.data, name ) ) {
					continue;
				}
				const value = context.data[ name ];
				switch ( context.blocksSettings[ name ].field_type ) {
					case 'number':
						formData[ name ] = parseInt( value, 10 );
						break;
					case 'phone-number':
						formData[
							name
						] = `(${ value.dialCode })${ value.number }`;
						break;
					case 'gdpr':
						formData[ name ] = value.toString();
						break;
					default:
						formData[ name ] = value;
						break;
				}
			}
			try {
				const responseToken = await wp.apiFetch( {
					path: 'formgent/responses/generate-token',
					method: 'POST',
					data: {
						form_id: context.formId,
					},
				} );

				const response = await wp.apiFetch( {
					path: '/formgent/responses',
					method: 'POST',
					data: {
						id: context.formId,
						form_data: formData,
						response_token: responseToken.response_token,
					},
				} );

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
