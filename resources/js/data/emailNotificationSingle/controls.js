import apiFetch from '@wordpress/api-fetch';

export const EmailNotificationSingleControls = {
	FETCH_EMAIL_NOTIFICATION_SINGLE( { payload } ) {
		return apiFetch( {
			path: `formgent/admin/forms/email-notifications/${ payload }`,
		} );
	},
	CREATE_EMAIL_NOTIFICATION_SINGLE( { payload } ) {
		return apiFetch( {
			path: `formgent/admin/forms/email-notifications`,
			method: 'POST',
			data: payload,
		} );
	},
	UPDATE_EMAIL_NOTIFICATION_SINGLE( { payload } ) {
		return apiFetch( {
			path: `formgent/admin/forms/email-notifications/${ payload.id }`,
			method: 'PATCH',
			body: JSON.stringify( payload.data ),
		} );
	},
};
