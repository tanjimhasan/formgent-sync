import { addQueryStrings } from '@formgent/helper/utils';
import apiFetch from '@wordpress/api-fetch';

export const EmailNotificationControls = {
	FETCH_EMAIL_NOTIFICATIONS( { payload } ) {
		return apiFetch( {
			path: addQueryStrings(
				'formgent/admin/forms/email-notifications',
				payload
			),
		} );
	},
	UPDATE_EMAIL_NOTIFICATION_STATUS( { payload } ) {
		const { id, status } = payload;

		return apiFetch( {
			path: `formgent/admin/forms/email-notifications/${ id }/status`,
			method: 'PATCH',
			body: JSON.stringify( { id, status } ),
		} );
	},
	DUPLICATE_EMAIL_NOTIFICATION( { payload } ) {
		return apiFetch( {
			path: `formgent/admin/forms/email-notifications/${ payload }/duplicate`,
			method: 'POST',
		} );
	},
	DELETE_EMAIL_NOTIFICATION( { payload } ) {
		return apiFetch( {
			path: `formgent/admin/forms/email-notifications/${ payload }`,
			method: 'DELETE',
		} );
	},
};
