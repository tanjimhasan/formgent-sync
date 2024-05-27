import apiFetch from '@wordpress/api-fetch';

jQuery( function () {
	const control = elementor.modules.controls.Select2.extend( {
		onReady: function () {
			this.controlSelect = this.$el.find( '.custom-control-select' );
			this.savedValue = this.$el.find( '.saved-value' ).val();

			apiFetch( { path: '/new-form/admin/forms/select' } )
				.then( ( response ) => {
					const forms = response.forms;

					let options = forms.map( ( form ) => {
						return {
							text: form.label,
							id: form.value,
							selected: this.savedValue === form.value,
						};
					} );

					this.controlSelect.select2( {
						data: options,
					} );
				} )
				.catch( ( error ) => {
					console.error( 'Failed to fetch forms:', error );
				} );
		},

		onBeforeDestroy: function () {
			this.controlSelect.select2( 'close' );
		},
	} );

	elementor.addControlView( 'newform-select', control );
} );
