/**
 *  Dependencies
 */
import { createReduxStore, register } from '@wordpress/data';
import { SingleFormStore } from './singleform';
import { rootReducers } from './rootReducers';

/**
 * merge all actions
 */
const ACTIONS = {
	...SingleFormStore.SingleFormActions,
};

/**
 * merge all selectors
 */
const SELECTORS = {
	...SingleFormStore.SingleFormSelectors,
};

/**
 * merge all controls
 */
const CONTROLS = {
	...SingleFormStore.SingleFormControls,
};
/**
 * merge all resolvers
 */
const RESOLVERS = {
	...SingleFormStore.SingleFormResolvers,
};

/**
 * Register store
 */
register(
	createReduxStore( 'frontend/formgent', {
		actions: ACTIONS,
		reducer: rootReducers,
		selectors: SELECTORS,
		controls: CONTROLS,
		resolvers: RESOLVERS,
	} )
);
