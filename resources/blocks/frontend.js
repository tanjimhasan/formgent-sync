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

const { callbacks } = store( 'formgent/form', {
	actions: {
		getValue: () => {
			const context = getContext();

			let value = '';
			if ( context.blocksSettings ) {
				for ( const [ blockKey, block ] of Object.entries(
					context.blocksSettings
				) ) {
					if ( block.children ) {
						for ( const [ childKey, child ] of Object.entries(
							block.children
						) ) {
							if ( childKey === context.name ) {
								value = child.value;
								break; // Stop the loop once the condition is met
							} else {
								value = '';
								break;
							}
						}
					} else if ( block.name === context.name ) {
						value = block.value;
						break;
					}
				}
			}
			return value;
		},
		updateInput: async ( e ) => {
			const element = getElement();
			const context = getContext();

			const { blocksSettings } = JSON.parse( JSON.stringify( context ) );
			const elementName = element.ref.name;
			let fieldName = null;

			if ( blocksSettings[ elementName ] ) {
				fieldName = elementName;
			} else {
				for ( const [ key, value ] of Object.entries(
					blocksSettings
				) ) {
					if ( value.children && value.children[ elementName ] ) {
						fieldName = key;
						break;
					}
				}
			}

			// Dispatch custom event for handleFieldInteraction
			const interactionEvent = new CustomEvent( 'fieldInteraction', {
				detail: {
					fieldName,
					fieldInteractionState,
					context,
					element,
				},
			} );
			document.dispatchEvent( interactionEvent );

			generateFormToken( context );
			formStarted = true;

			const { data } = context;
			function updateFieldRecursively( data, fieldName, fieldValue ) {
				for ( let k in data ) {
					if ( data.hasOwnProperty( k ) ) {
						if ( k === fieldName ) {
							data[ k ] = fieldValue;
							return;
						} else {
							if ( ! data || typeof data !== 'object' ) {
								return;
							}
							updateFieldRecursively(
								data[ k ],
								fieldName,
								fieldValue
							);
						}
					}
				}
			}

			//Handle input masking
			/* Mask types:
				(000) 000-0000,
				(00) 0000-0000,
				00/00/0000,
				00:00:00,
				00/00/0000 00:00:00,
				//custom
			*/
			// function formatInput( value, maskType ) {
			// 	let cleanValue = value.replace( /\D/g, '' );
			// 	let formattedValue = '';
			// 	let maxLength = 0;

			// 	switch ( maskType ) {
			// 		case '(000) 000-0000':
			// 			maxLength = 14;
			// 			if ( cleanValue.length > 3 && cleanValue.length <= 6 ) {
			// 				formattedValue = `(${ cleanValue.slice(
			// 					0,
			// 					3
			// 				) }) ${ cleanValue.slice( 3 ) }`;
			// 			} else if ( cleanValue.length > 6 ) {
			// 				formattedValue = `(${ cleanValue.slice(
			// 					0,
			// 					3
			// 				) }) ${ cleanValue.slice(
			// 					3,
			// 					6
			// 				) }-${ cleanValue.slice( 6, 10 ) }`;
			// 			} else {
			// 				formattedValue = `(${ cleanValue }`;
			// 			}
			// 			break;

			// 		case '(00) 0000-0000':
			// 			maxLength = 14;
			// 			if ( cleanValue.length > 2 && cleanValue.length <= 6 ) {
			// 				formattedValue = `(${ cleanValue.slice(
			// 					0,
			// 					2
			// 				) }) ${ cleanValue.slice( 2 ) }`;
			// 			} else if ( cleanValue.length > 6 ) {
			// 				formattedValue = `(${ cleanValue.slice(
			// 					0,
			// 					2
			// 				) }) ${ cleanValue.slice(
			// 					2,
			// 					6
			// 				) }-${ cleanValue.slice( 6, 10 ) }`;
			// 			} else {
			// 				formattedValue = `(${ cleanValue }`;
			// 			}
			// 			break;

			// 		case '00/00/0000':
			// 			maxLength = 10;
			// 			if ( cleanValue.length > 2 && cleanValue.length <= 4 ) {
			// 				formattedValue = `${ cleanValue.slice(
			// 					0,
			// 					2
			// 				) }/${ cleanValue.slice( 2 ) }`;
			// 			} else if ( cleanValue.length > 4 ) {
			// 				formattedValue = `${ cleanValue.slice(
			// 					0,
			// 					2
			// 				) }/${ cleanValue.slice(
			// 					2,
			// 					4
			// 				) }/${ cleanValue.slice( 4, 8 ) }`;
			// 			} else {
			// 				formattedValue = cleanValue;
			// 			}
			// 			break;

			// 		case '00:00:00':
			// 			maxLength = 8;
			// 			if ( cleanValue.length > 2 && cleanValue.length <= 4 ) {
			// 				formattedValue = `${ cleanValue.slice(
			// 					0,
			// 					2
			// 				) }:${ cleanValue.slice( 2 ) }`;
			// 			} else if ( cleanValue.length > 4 ) {
			// 				formattedValue = `${ cleanValue.slice(
			// 					0,
			// 					2
			// 				) }:${ cleanValue.slice(
			// 					2,
			// 					4
			// 				) }:${ cleanValue.slice( 4, 6 ) }`;
			// 			} else {
			// 				formattedValue = cleanValue;
			// 			}
			// 			break;

			// 		case '00/00/0000 00:00:00':
			// 			maxLength = 19;
			// 			if ( cleanValue.length <= 8 ) {
			// 				if (
			// 					cleanValue.length > 2 &&
			// 					cleanValue.length <= 4
			// 				) {
			// 					formattedValue = `${ cleanValue.slice(
			// 						0,
			// 						2
			// 					) }/${ cleanValue.slice( 2 ) }`;
			// 				} else if ( cleanValue.length > 4 ) {
			// 					formattedValue = `${ cleanValue.slice(
			// 						0,
			// 						2
			// 					) }/${ cleanValue.slice(
			// 						2,
			// 						4
			// 					) }/${ cleanValue.slice( 4, 8 ) }`;
			// 				} else {
			// 					formattedValue = cleanValue;
			// 				}
			// 			} else {
			// 				const datePart = `${ cleanValue.slice(
			// 					0,
			// 					2
			// 				) }/${ cleanValue.slice(
			// 					2,
			// 					4
			// 				) }/${ cleanValue.slice( 4, 8 ) }`;
			// 				const timePart =
			// 					cleanValue.length > 8 && cleanValue.length <= 10
			// 						? `${ cleanValue.slice( 8, 10 ) }`
			// 						: cleanValue.length > 10 &&
			// 						  cleanValue.length <= 12
			// 						? `${ cleanValue.slice(
			// 								8,
			// 								10
			// 						  ) }:${ cleanValue.slice( 10, 12 ) }`
			// 						: `${ cleanValue.slice(
			// 								8,
			// 								10
			// 						  ) }:${ cleanValue.slice(
			// 								10,
			// 								12
			// 						  ) }:${ cleanValue.slice( 12, 14 ) }`;
			// 				formattedValue =
			// 					`${ datePart } ${ timePart }`.trim();
			// 			}
			// 			break;

			// 		case 'custom':
			// 		case 'none':
			// 			formattedValue = value;
			// 			break;

			// 		default:
			// 			formattedValue = value;
			// 	}

			// 	if ( formattedValue.length > maxLength && maxLength > 0 ) {
			// 		formattedValue = formattedValue.slice( 0, maxLength );
			// 	}

			// 	element.ref.value = formattedValue;
			// 	return formattedValue;
			// }

			function formatInput( value, maskType ) {
				let cleanValue = value.replace( /\D/g, '' );
				let formattedValue = '';
				let maxLength = 0;

				// Helper to slice and format a cleanValue based on a given pattern
				const applyPattern = ( pattern, cleanValue ) => {
					let index = 0;
					return pattern.replace(
						/0/g,
						() => cleanValue[ index++ ] || ''
					);
				};

				// Helper to define format patterns and maxLength for each mask type
				const getPatternInfo = ( maskType ) => {
					switch ( maskType ) {
						case '(000) 000-0000':
							return { pattern: '(000) 000-0000', maxLength: 14 };
						case '(00) 0000-0000':
							return { pattern: '(00) 0000-0000', maxLength: 14 };
						case '00/00/0000':
							return { pattern: '00/00/0000', maxLength: 10 };
						case '00:00:00':
							return { pattern: '00:00:00', maxLength: 8 };
						case '00/00/0000 00:00:00':
							return {
								pattern: '00/00/0000 00:00:00',
								maxLength: 19,
							};
						case 'custom':
						case 'none':
							return { pattern: '', maxLength: 0 };
						default:
							return { pattern: '', maxLength: 0 };
					}
				};

				// Get the pattern and maxLength for the given maskType
				const { pattern, maxLength: patternMaxLength } =
					getPatternInfo( maskType );
				maxLength = patternMaxLength;

				// Apply formatting if pattern exists
				if ( pattern ) {
					formattedValue = applyPattern( pattern, cleanValue );
				} else {
					formattedValue = value; // For 'custom' or 'none' masks
				}

				// Ensure formatted value doesn't exceed maxLength
				if ( formattedValue.length > maxLength && maxLength > 0 ) {
					formattedValue = formattedValue.slice( 0, maxLength );
				}

				// Set the value to the element's reference (assuming element is globally accessible)
				element.ref.value = formattedValue;

				return formattedValue;
			}

			const fieldType = context.blocksSettings[ elementName ].field_type;
			const maskType = context.blocksSettings[ elementName ].mask_type;
			let input = element.ref.value;

			if ( fieldType === 'input-masking' ) {
				const formattedInput = formatInput( input, maskType );
				updateFieldRecursively(
					data,
					element.ref.name,
					formattedInput
				);
			} else {
				updateFieldRecursively(
					data,
					element.ref.name,
					element.ref.value
				);
			}
		},
		updateNumber: async () => {
			const element = getElement();
			const context = getContext();

			const { blocksSettings } = JSON.parse( JSON.stringify( context ) );
			const elementName = element.ref.name;
			let fieldName = null;

			if ( blocksSettings[ elementName ] ) {
				fieldName = elementName;
			} else {
				for ( const [ key, value ] of Object.entries(
					blocksSettings
				) ) {
					if ( value.children && value.children[ elementName ] ) {
						fieldName = key;
						break;
					}
				}
			}
			// Dispatch custom event for handleFieldInteraction
			const interactionEvent = new CustomEvent( 'fieldInteraction', {
				detail: {
					fieldName,
					fieldInteractionState,
					context,
					element,
				},
			} );
			document.dispatchEvent( interactionEvent );

			//update field data
			context.data[ element.ref.name ] = parseInt( element.ref.value );
			generateFormToken( context );
			formStarted = true;
		},
		updateGdpr: async () => {
			const element = getElement();
			const context = getContext();

			const { blocksSettings } = JSON.parse( JSON.stringify( context ) );
			const elementName = element.ref.name;
			let fieldName = null;

			if ( blocksSettings[ elementName ] ) {
				fieldName = elementName;
			} else {
				for ( const [ key, value ] of Object.entries(
					blocksSettings
				) ) {
					if ( value.children && value.children[ elementName ] ) {
						fieldName = key;
						break;
					}
				}
			}
			// Dispatch custom event for handleFieldInteraction
			const interactionEvent = new CustomEvent( 'fieldInteraction', {
				detail: {
					fieldName,
					fieldInteractionState,
					context,
					element,
				},
			} );
			document.dispatchEvent( interactionEvent );

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

			const { blocksSettings } = JSON.parse( JSON.stringify( context ) );
			const elementName = element.ref.name;
			let fieldName = null;

			if ( blocksSettings[ elementName ] ) {
				fieldName = elementName;
			} else {
				for ( const [ key, value ] of Object.entries(
					blocksSettings
				) ) {
					if ( value.children && value.children[ elementName ] ) {
						fieldName = key;
						break;
					}
				}
			}
			// Dispatch custom event for handleFieldInteraction
			const interactionEvent = new CustomEvent( 'fieldInteraction', {
				detail: {
					fieldName,
					fieldInteractionState,
					context,
					element,
				},
			} );
			document.dispatchEvent( interactionEvent );

			context.data[ element.ref.name ] = choices;

			generateFormToken( context );
			formStarted = true;
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
			blocksSettings &&
				Object.entries( blocksSettings ).forEach(
					( [ blockKey, block ] ) => {
						data[ blockKey ] = block.children
							? Object.keys( block.children ).reduce(
									( acc, childKey ) => {
										acc[ childKey ] =
											block.children[ childKey ].value;
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
			const groupField = [ 'single-choice', 'multiple-choice' ];

			function getSelector( fieldType, name, child = false ) {
				switch ( fieldType ) {
					case 'dropdown':
						return element.ref.querySelector(
							`select[name="${ name }"]`
						);
					case 'textarea':
						return element.ref.querySelector(
							`textarea[name="${ name }"]`
						);
					default:
						if ( groupField.includes( fieldType ) ) {
							return element.ref.querySelector(
								`.formgent-${ fieldType }-${ name }`
							);
						} else {
							return element.ref.querySelector(
								`input[name="${ name }"]`
							);
						}
				}
			}

			function applyValidationRules( field, name, rules ) {
				if ( field.required || field.field_type === 'gdpr' ) {
					if ( field.field_type === 'gdpr' ) {
						field.label = 'GDPR';
					}
					rules.push( {
						rule: 'required',
						errorMessage: `${ field.label || 'Field' } is required`,
					} );
				}

				if ( rulesList[ field.field_type ] ) {
					rulesList[ field.field_type ]( rules );
				}
			}
			for ( const name in context.data ) {
				const rules = [];
				const field = context.blocksSettings[ name ];
				if ( typeof context.data[ name ] === 'object' ) {
					for ( const childName in context.data[ name ] ) {
						const childField = field.children[ childName ];
						const selector = getSelector(
							childField.field_type,
							childName,
							true
						);

						applyValidationRules( childField, childName, rules );
						if ( rules.length > 0 ) {
							validation.addField( selector, rules );
						}
					}
				} else {
					const selector = getSelector( field.field_type, name );
					applyValidationRules( field, name, rules );

					if ( rules.length > 0 ) {
						if ( groupField.includes( field.field_type ) ) {
							validation.addRequiredGroup( selector );
						} else {
							validation.addField( selector, rules );
						}
					}
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

			function updateFieldRecursively( data, fieldName, fieldValue ) {
				for ( let k in data ) {
					if ( data.hasOwnProperty( k ) ) {
						if ( k === fieldName ) {
							data[ k ] = fieldValue;
							return;
						} else {
							if ( ! data || typeof data !== 'object' ) {
								return;
							}
							updateFieldRecursively(
								data[ k ],
								fieldName,
								fieldValue
							);
						}
					}
				}
			}

			new TomSelect( `#${ element.ref.id }`, {
				placeholder: 'Select an option...',
				onChange: function ( value ) {
					updateFieldRecursively(
						context.data,
						element.ref.name,
						value
					);

					const { blocksSettings } = JSON.parse(
						JSON.stringify( context )
					);
					const elementName = element.ref.name;
					let fieldName = null;

					if ( blocksSettings[ elementName ] ) {
						fieldName = elementName;
					} else {
						for ( const [ key, value ] of Object.entries(
							blocksSettings
						) ) {
							if (
								value.children &&
								value.children[ elementName ]
							) {
								fieldName = key;
								break;
							}
						}
					}
					// Dispatch custom event for handleFieldInteraction
					const interactionEvent = new CustomEvent(
						'fieldInteraction',
						{
							detail: {
								fieldName,
								fieldInteractionState,
								context,
								element,
							},
						}
					);
					document.dispatchEvent( interactionEvent );

					generateFormToken( context );
					formStarted = true;
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

			if (
				context.isResponseTokenGenerating ||
				context.isResponseSubmitting
			) {
				return;
			}

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
				const { blocksSettings } = JSON.parse(
					JSON.stringify( context )
				);
				const elementName = element.ref.name;
				let fieldName = null;

				if ( blocksSettings[ elementName ] ) {
					fieldName = elementName;
				} else {
					for ( const [ key, value ] of Object.entries(
						blocksSettings
					) ) {
						if ( value.children && value.children[ elementName ] ) {
							fieldName = key;
							break;
						}
					}
				}
				// Dispatch custom event for handleResetInteraction
				const resetInteractionEvent = new CustomEvent(
					'resetFieldInteraction',
					{
						detail: {
							fieldName,
							fieldInteractionState,
							context,
						},
					}
				);
				document.dispatchEvent( resetInteractionEvent );

				context.isResponseTokenGenerating = true;
				element.ref.disabled = true;

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

				context.isResponseTokenGenerating = false;
				context.isResponseSubmitting = true;

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

				context.isResponseSubmitting = false;
				element.ref.disabled = false;

				form.querySelector(
					'.formgent-notices'
				).innerHTML = `<span>${ response.message }</span>`;

				form.reset();
			} catch ( error ) {
				console.error( 'Error:', error );
			}
		},
	},
} );
