import { combineReducers } from '@wordpress/data';
import { FormReducer } from './forms/reducers';
import { SingleFormReducer } from './singleform/reducers';
export const rootReducers = combineReducers( {
	FormReducer,
	SingleFormReducer,
} );
