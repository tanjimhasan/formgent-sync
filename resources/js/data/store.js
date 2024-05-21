/**
 *  Dependencies
 */
import { createReduxStore, register } from '@wordpress/data';
import { FormStore } from "./forms";
import { SingleFormStore } from './singleform';
import { rootReducers } from './rootReducers';

/**
 * merge all actions
 */
const ACTIONS = {
    ...FormStore.FormActions,
	...SingleFormStore.SingleFormActions
}

/**
 * merge all selectors
 */
const SELECTORS = {
    ...FormStore.FormSelectors,
	...SingleFormStore.SingleFormSelectors
}

/**
 * merge all controls
 */
const CONTROLS = {
    ...FormStore.FormControls,
	...SingleFormStore.SingleFormControls
}
/**
 * merge all resolvers
 */
const RESOLVERS = {
    ...FormStore.FormResolvers,
	...SingleFormStore.SingleFormResolvers
}

/**
 * Register store
 */
register(
	createReduxStore( 'newform', {
        actions: ACTIONS,
		reducer: rootReducers,
		selectors: SELECTORS,
		controls: CONTROLS,
		resolvers: RESOLVERS,
	} )
);