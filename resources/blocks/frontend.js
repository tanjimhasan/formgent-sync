/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from '@wordpress/interactivity';
import JustValidate from 'just-validate';
import TomSelect from 'tom-select';
import intlTelInput from 'intl-tel-input';

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
		updateInput: async () => {
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

			updateFieldRecursively( data, element.ref.name, element.ref.value );
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
			const name = element.ref.name;
			if (
				typeof context.data[ name ] !== 'object' ||
				context.data[ name ] === null
			) {
				context.data[ name ] = {
					dialCode: context.blocksSettings[ name ].country_code
						? '+1'
						: '',
					number: '',
				};
			}

			context.data[ name ].number = element.ref.value;

			if ( typeof context.data[ name ] === 'object' ) {
				context.data[
					name
				] = `${ context.data[ name ].dialCode }${ context.data[ name ].number }`;
			}

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
		phoneNumberInit: () => {
			const context = getContext();
			const element = getElement();
			const name = element.ref.getAttribute( 'data-wp-key' );

			if (
				typeof context.data[ name ] !== 'object' ||
				context.data[ name ] === null
			) {
				context.data[ name ] = {
					dialCode: context.blocksSettings[ name ].country_code
						? '+1'
						: '',
					number: '',
				};
			}
			// Initialize intl-tel-input on the phone input field
			const input = document.querySelector(
				`#${ element.attributes.name }`
			);

			const iti = intlTelInput( input, {
				initialCountry: 'us',
				separateDialCode: context.blocksSettings[ name ].country_code,
			} );

			input.addEventListener( 'countrychange', function () {
				const selectedCountryData = iti.getSelectedCountryData();
				const fullNumber = iti.getNumber();
				const dialCode = selectedCountryData.dialCode;
				const name = element.ref.getAttribute( 'data-wp-key' );

				context.data[ name ] = {
					dialCode: `+${ dialCode }`,
					number: fullNumber,
				};
			} );

			//validation
			input.addEventListener( 'blur', function () {
				if ( iti.isValidNumber() ) {
					const fullNumber = iti.getNumber();
					const selectedCountryData = iti.getSelectedCountryData();
					const dialCode = selectedCountryData.dialCode;
					if (
						typeof context.data[ name ] !== 'object' ||
						context.data[ name ] === null
					) {
						context.data[ name ] = {
							dialCode: context.blocksSettings[ name ]
								.country_code
								? '+1'
								: '',
							number: '',
						};
					}
					context.data[ name ].dialCode = `+${ dialCode }`;
					context.data[ name ].number =
						context.data[ name ].number || fullNumber;
				} else {
					console.log( 'Invalid phone number' );
				}
			} );
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
				if ( context.data.hasOwnProperty( name ) ) {
					if (
						typeof context.data[ name ] === 'object' &&
						context.data[ name ].dialCode &&
						context.data[ name ].number
					) {
						context.data[
							name
						] = `${ context.data[ name ].dialCode }${ context.data[ name ].number }`;
					}
				}
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
