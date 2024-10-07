export const EmailNotificationActions = {
	/**
	 * @param {boolean} isLoading
	 */
	updateIsLoadingEmailNotifications: ( isLoading ) => ( {
		type: 'UPDATE_IS_LOADING_EMAIL_NOTIFICATIONS',
		payload: isLoading,
	} ),

	/**
	 * @param {Array} data
	 */
	updateEmailNotificationData: ( data ) => ( {
		type: 'UPDATE_EMAIL_NOTIFICATION_DATA',
		payload: data,
	} ),

	/**
	 * @param {number} id
	 * @param {object} data
	 */
	updateEmailNotificationItem: ( id, data ) => ( {
		type: 'UPDATE_EMAIL_NOTIFICATION_ITEM',
		payload: { id, data },
	} ),

	/**
	 * @param {number} id
	 */
	deleteEmailNotificationItem: ( id ) => ( {
		type: 'DELETE_EMAIL_NOTIFICATION_ITEM',
		payload: { id },
	} ),

	/**
	 * @param {?object} status
	 * @param {boolean} status.success
	 * @param {string} status.message
	 */
	updateEmailNotificationResponseStatus: ( status ) => ( {
		type: 'UPDATE_EMAILNOTIFICATION_RESPONSE_STATUS',
		payload: status,
	} ),

	/**
	 * @param {object} queryArgs
	 */
	updateEmailNotificationQueryArgs: ( queryArgs ) => ( {
		type: 'UPDATE_EMAIL_NOTIFICATION_QUERY_ARGS',
		payload: queryArgs,
	} ),

	/**
	 * @param {object} queryArgs
	 */
	fetchEmailNotifications: ( queryArgs ) => ( {
		type: 'FETCH_EMAIL_NOTIFICATIONS',
		payload: queryArgs,
	} ),

	/**
	 * @param {number} id
	 * @param {string} status
	 */
	updateEmailNotificationStatus: ( id, status ) => ( {
		type: 'UPDATE_EMAIL_NOTIFICATION_STATUS',
		payload: { id, status },
	} ),

	/**
	 * @param {number} id
	 */
	duplicateEmailNotification: ( id ) => ( {
		type: 'DUPLICATE_EMAIL_NOTIFICATION',
		payload: id,
	} ),

	/**
	 * @param {number} id
	 */
	deleteEmailNotification: ( id ) => ( {
		type: 'DELETE_EMAIL_NOTIFICATION',
		payload: id,
	} ),
};
