/**
 *  Dependencies
 */
import { createReduxStore, register } from '@wordpress/data';
import { FormStore } from "./forms";
import { rootReducers } from './rootReducers';

/**
 * merge all actions
 */
const ACTIONS = {
    ...FormStore.FormActions
}

/**
 * merge all selectors
 */
const SELECTORS = {
    ...FormStore.FormSelectors
}

/**
 * merge all controls
 */
const CONTROLS = {
    ...FormStore.FormControls
}
/**
 * merge all resolvers
 */
const RESOLVERS = {
    ...FormStore.FormResolvers
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