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
		updateEmail: () => {
			console.log( 'yes' );
			const element = getElement();
			const context = getContext();
			context.email = element.ref.value;
		},
	},
	callbacks: {},
} );
