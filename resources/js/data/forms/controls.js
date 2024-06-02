import apiFetch from '@wordpress/api-fetch';
export const FormControls = {
	FETCH_FROM( action ) {
		return apiFetch( {
			path: `new-form/admin/forms?page=${ action.payload.currentPage }&per_page=${ action.payload.perPage }&date_type=last_month`,
		} );
	},
};
