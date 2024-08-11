/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from '@wordpress/interactivity';
import JustValidate from 'just-validate';
import TomSelect from 'tom-select';

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
		updateDialCode: () => {
			const element = getElement();
			const context = getContext();
			console.log(
				element.ref.name,
				element.ref.value,
				context.data[ element.ref.name ].replace(
					/\(\+\d+\)/,
					element.ref.value
				)
			);
			let parts = context.data[ element.ref.name ].split( ')' );
			parts[ 0 ] = `(${ element.ref.value }`;
			console.log( parts.join( ')' ) );
			context.data[ element.ref.name ] = parts.join( ')' );
		},
	},
	callbacks: {
		init: () => {
			const context = getContext();
			const element = getElement();

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
					rules.push( {
						rule: 'required',
						errorMessage: `${ field.label } is required`,
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
		tomSelectInit: async () => {
			const context = getContext();
			const element = getElement();
			try {
			} catch ( error ) {}
			const countryObject = await wp.apiFetch( {
				path: '/formgent/countries',
				method: 'GET',
			} );
			const flagUrl = countryObject.flag_url;
			const countries = Object.entries( countryObject.countries ).map(
				( [ key, value ] ) => {
					return {
						id: key,
						img: `${ flagUrl }/${ key }.png`,
						...value,
					};
				}
			);
			var control = new TomSelect( `#${ element.attributes.id }`, {
				valueField: 'dial_code',
				options: countries,
				render: {
					option: function ( data, escape ) {
						return `
							<div class="formgent-phone-dialer-option">
								<img src="${ escape( data.img ) }" />
								<span>${ escape( data.name ) }</span>
							<div/>
						`;
					},
					item: function ( data, escape ) {
						return `<img src="${ escape( data.img ) }" />`;
					},
				},
				create: false,
			} );
			control.setValue( '+880' );
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
