/**
 * WordPress dependencies
 */
import { store, getContext, getElement } from '@wordpress/interactivity';

const { state } = store( 'create-block', {
	state: {
		email: '',
	},
	actions: {
		toggle: () => {
			const context = getContext();
			context.isOpen = ! context.isOpen;
		},
		updateEmail: () => {
			const element = getElement();
			const context = getContext();
			context.email = element.ref.value;
		},
	},
	callbacks: {},
} );
