/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from '@wordpress/interactivity';
import JustValidate from 'just-validate';
import TomSelect from 'tom-select';

let formStarted = false;
let fieldInteractionState = {};
let generatedTokens = null;

async function generateFormToken( context ) {
	if ( ! formStarted ) {
		try {
			generatedTokens = await wp.apiFetch( {
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

// Field View & Drop-off counts
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
			data: {
				counter_name: counterName, // views, drop_off, both
				counter_type: counterType, // +, -
				field_name: element.ref.name,
			},
		} );
	} catch ( error ) {
		console.log( 'Count error:', error );
	}
}

const { callbacks } = store( 'formgent/form', {
	actions: {
		updateInput: async () => {
			const element = getElement();
			const context = getContext();
			const fieldName = element.ref.name;

			if ( ! fieldInteractionState[ fieldName ] ) {
				fieldInteractionState[ fieldName ] = {
					interacted: false,
				};
			}

			// Handle initial field interaction
			if ( ! fieldInteractionState[ fieldName ].interacted ) {
				await updateFieldCounter( context, element, 'both', '+' );
				fieldInteractionState[ fieldName ].interacted = true;

				for ( const field in fieldInteractionState ) {
					if (
						field !== fieldName &&
						fieldInteractionState[ field ].interacted
					) {
						let previousElement = document.querySelector(
							`input[name="${ field }"]`
						);

						if ( ! previousElement ) {
							previousElement = document.querySelector(
								`textarea[name="${ field }"]`
							);
						}

						if ( previousElement ) {
							await updateFieldCounter(
								context,
								{ ref: previousElement },
								'drop_off',
								'-'
							);
						}
					}
				}
			}
			generateFormToken( context );
			formStarted = true;

			const { data } = context;
			function updateFieldRecursively( data, fieldName, fieldValue ) {
				for ( let k in data ) {
					if ( data.hasOwnProperty( k ) ) {
						if (
							typeof data[ k ] === 'object' &&
							data[ k ] !== null
						) {
							updateFieldRecursively(
								data[ k ],
								fieldName,
								fieldValue
							);
						} else if ( k === fieldName ) {
							data[ k ] = fieldValue;
							return;
						}
					}
				}
			}

			updateFieldRecursively( data, element.ref.name, element.ref.value );
		},
		updateNumber: async () => {
			const element = getElement();
			const context = getContext();
			const fieldName = element.ref.name;

			if ( ! fieldInteractionState[ fieldName ] ) {
				fieldInteractionState[ fieldName ] = {
					interacted: false,
				};
			}
			// Handle initial field interaction
			if ( ! fieldInteractionState[ fieldName ].interacted ) {
				await updateFieldCounter( context, element, 'both', '+' );
				fieldInteractionState[ fieldName ].interacted = true;

				for ( const field in fieldInteractionState ) {
					if (
						field !== fieldName &&
						fieldInteractionState[ field ].interacted
					) {
						let previousElement = document.querySelector(
							`input[name="${ field }"]`
						);

						if ( ! previousElement ) {
							previousElement = document.querySelector(
								`textarea[name="${ field }"]`
							);
						}

						if ( previousElement ) {
							await updateFieldCounter(
								context,
								{ ref: previousElement },
								'drop_off',
								'-'
							);
						}
					}
				}
			}

			//update field data
			context.data[ element.ref.name ] = parseInt( element.ref.value );
			generateFormToken( context );
			formStarted = true;
		},
		updateGdpr: async () => {
			const element = getElement();
			const context = getContext();
			const fieldName = element.ref.name;

			if ( ! fieldInteractionState[ fieldName ] ) {
				fieldInteractionState[ fieldName ] = {
					interacted: false,
				};
			}
			// Handle initial field interaction
			if ( ! fieldInteractionState[ fieldName ].interacted ) {
				await updateFieldCounter( context, element, 'both', '+' );
				fieldInteractionState[ fieldName ].interacted = true;

				for ( const field in fieldInteractionState ) {
					if (
						field !== fieldName &&
						fieldInteractionState[ field ].interacted
					) {
						let previousElement = document.querySelector(
							`input[name="${ field }"]`
						);

						if ( ! previousElement ) {
							previousElement = document.querySelector(
								`textarea[name="${ field }"]`
							);
						}

						if ( previousElement ) {
							await updateFieldCounter(
								context,
								{ ref: previousElement },
								'drop_off',
								'-'
							);
						}
					}
				}
			}

			//update field data
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
		updateMultiChoice: () => {
			const element = getElement();
			const context = getContext();

			const choices = context.data[ element.ref.name ] || [];
			const valueIndex = choices.indexOf( element.ref.value );

			if ( valueIndex > -1 ) {
				//If the item is found remove it
				choices.splice( valueIndex, 1 );
			} else {
				//If the item is not found, add it to the array
				choices.push( element.ref.value );
			}

			context.data[ element.ref.name ] = choices;
		},
	},
	callbacks: {
		init: async () => {
			const context = getContext();
			const element = getElement();

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

			const { blocksSettings, data } = JSON.parse(
				JSON.stringify( context )
			);

			// Loop through blocksSettings and construct data object
			Object.entries( blocksSettings ).forEach(
				( [ blockKey, block ] ) => {
					data[ blockKey ] = block.children
						? Object.keys( block.children ).reduce(
								( acc, childKey ) => {
									acc[ childKey ] = '';
									return acc;
								},
								{}
						  )
						: '';
				}
			);

			context.data = { ...data };
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
		dropdownInit: () => {
			const element = getElement();
			const context = getContext();

			new TomSelect( `#${ element.ref.id }`, {
				onChange: function ( value ) {
					context.data[ element.ref.name ] = value;
				},
			} );
		},
		phoneNumberInit: async () => {
			const context = getContext();
			const element = getElement();
			const name = element.ref.getAttribute( 'data-wp-key' );
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
			const formData = JSON.parse( JSON.stringify( context.data ) );
			const fieldName = element.ref.name;

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
			}
			try {
				// Remove drop-off from last interacted field
				if ( ! fieldInteractionState[ fieldName ] ) {
					fieldInteractionState[ fieldName ] = {
						interacted: false,
					};
				}
				if ( ! fieldInteractionState[ fieldName ].interacted ) {
					for ( const field in fieldInteractionState ) {
						if (
							field !== fieldName &&
							fieldInteractionState[ field ].interacted
						) {
							let previousElement = document.querySelector(
								`input[name="${ field }"]`
							);

							if ( ! previousElement ) {
								previousElement = document.querySelector(
									`textarea[name="${ field }"]`
								);
							}

							if ( previousElement ) {
								await updateFieldCounter(
									context,
									{ ref: previousElement },
									'drop_off',
									'-'
								);
							}
						}
					}
				}

				// Generate form token
				let responseToken = null;
				if ( ! formStarted ) {
					responseToken = await wp.apiFetch( {
						path: 'formgent/responses/generate-token',
						method: 'POST',
						data: {
							form_id: context.formId,
						},
					} );
				}

				// Submit form response
				const response = await wp.apiFetch( {
					path: '/formgent/responses',
					method: 'POST',
					data: {
						id: context.formId,
						form_data: formData,
						response_token:
							responseToken || generatedTokens.response_token,
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
