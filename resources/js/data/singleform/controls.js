import apiFetch from '@wordpress/api-fetch';
export const SingleFormControls = {
	FETCH_SINGLE_FROM( action ) {
		return apiFetch( { path: action.path } );
	},
	FETCH_RESPONSE( action ) {
		console.log( ' FETCH_RESPONSE: ', action );
		return apiFetch( {
			path: `${ action.payload.path }?page=${ action.payload.currentPage }&per_page=${ action.payload.perPage }&s=${ action.payload.searchItem }&form_id=${ action.payload.formID }`,
		} );
	},
	FETCH_RESPONSE_SEARCH( action ) {
		return apiFetch( {
			path: `${ action.payload.path }?s=${ action.payload.searchItem }&form_id=${ action.payload.formID }`,
		} );
	},
	FETCH_FIELDS( action ) {
		return apiFetch( {
			path: `${ action.payload.path }?form_id=${ action.payload.formID }`,
		} );
	},
};
