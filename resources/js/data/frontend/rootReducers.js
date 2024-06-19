import { combineReducers } from '@wordpress/data';
import { SingleFormReducer } from './singleform/reducers';
export const rootReducers = combineReducers( {
	SingleFormReducer,
} );
