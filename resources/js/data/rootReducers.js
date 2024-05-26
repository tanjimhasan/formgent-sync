import { combineReducers } from '@wordpress/data';
import { FormReducer } from './forms/reducers';
import { SingleFormReducer } from './singleform/reducers';
import { CommonReducer } from './commonData/reducers';
export const rootReducers = combineReducers( {
	FormReducer,
	SingleFormReducer,
	CommonReducer,
} );
