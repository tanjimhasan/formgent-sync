import apiFetch from '@wordpress/api-fetch';
export const SingleFormControls = {
	FETCH_SINGLE_FROM( action ) {
		return apiFetch( { path: action.path } );
	},
	FETCH_RESPONSE( action ) {
		return apiFetch( {
			path: `${ action.payload.path }?page=${ action.payload.currentPage }&per_page=${ action.payload.perPage }&form_id=${ action.payload.formID }`,
		} );
	},
	FETCH_FIELDS( action ) {
		return apiFetch( {
			path: `${ action.payload.path }?form_id=${ action.payload.formID }`,
		} );
	},
};
