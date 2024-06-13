import apiFetch from '@wordpress/api-fetch';
export const SingleFormControls = {
	FETCH_SINGLE_FROM( action ) {
		return apiFetch( { path: action.path } );
	},
};
