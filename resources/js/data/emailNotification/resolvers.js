import { EmailNotificationActions as Actions } from './actions';

export const EmailNotificationResolvers = {
	/**
	 * @param {object} queryArgs
	 * @param {number} queryArgs.page
	 * @param {number} queryArgs.per_page
	 */
	*getEmailNotifications( queryArgs ) {
		try {
			yield Actions.updateIsLoadingEmailNotifications( true );

			yield Actions.updateEmailNotificationResponseStatus( null );

			const defaultQueryArgs = {
				page: 1,
				per_page: 1,
			};

			queryArgs = { ...defaultQueryArgs, queryArgs };

			const data = yield Actions.fetchEmailNotifications( queryArgs );

			yield Actions.updateEmailNotificationData( data.emails );

			yield Actions.updateEmailNotificationQueryArgs( queryArgs );

			yield Actions.updateIsLoadingEmailNotifications( false );
		} catch ( error ) {
			yield Actions.updateEmailNotificationResponseStatus( {
				success: false,
				message: error.message,
			} );

			yield Actions.updateIsLoadingEmailNotifications( false );
		}
	},

	/**
	 * @param {number} id
	 * @param {string} status
	 */
	*updateEmailNotificationStatus( id, status ) {
		try {
			yield Actions.updateEmailNotificationItem( id, {
				isUpdatingStatus: true,
			} );

			yield Actions.updateEmailNotificationStatus( id, status );

			yield Actions.updateEmailNotificationItem( id, {
				status,
				isUpdatingStatus: false,
			} );
		} catch ( error ) {
			yield Actions.updateEmailNotificationItem( id, {
				isUpdatingStatus: false,
			} );
		}
	},

	/**
	 * @param {number} id
	 */
	*duplicateEmailNotification( id ) {
		try {
			yield Actions.updateEmailNotificationItem( id, {
				isDuplicating: true,
			} );

			yield Actions.updateIsProcessingEmailNotifications( true );

			yield Actions.duplicateEmailNotification( id );

			yield Actions.updateEmailNotificationItem( id, {
				isDuplicating: false,
			} );

			yield Actions.updateIsProcessingEmailNotifications( false );

			yield Actions.updateRefreshEmailNotifications( true );
		} catch ( error ) {
			yield Actions.updateEmailNotificationItem( id, {
				isDuplicating: false,
			} );
		}
	},

	/**
	 * @param {number} id
	 */
	*deleteEmailNotification( id ) {
		try {
			yield Actions.updateEmailNotificationItem( id, {
				isDeleting: true,
			} );

			yield Actions.deleteEmailNotification( id );

			yield Actions.deleteEmailNotificationItem( id );
		} catch ( error ) {
			yield Actions.updateEmailNotificationItem( id, {
				isDeleting: false,
			} );
		}
	},
};
