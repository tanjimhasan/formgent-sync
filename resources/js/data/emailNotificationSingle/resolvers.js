import { EmailNotificationSingleActions as Actions } from './actions';
import { getErrorMessage } from '../utils';

export const EmailNotificationSingleResolvers = {
	/**
	 * @param {number} id
	 * @param {number} timestamp
	 */
	*getEmailNotification( id, timestamp = 0 ) {
		try {
			if ( typeof id === 'undefined' ) {
				return;
			}

			if ( isNaN( parseInt( id ) ) || `${ id }` === '0' ) {
				yield Actions.updateIsNotFoundEmailNotificationSingle( true );
				return;
			}

			id = parseInt( id );

			yield Actions.updateEmailNotificationSingleID( id );

			yield Actions.updateEmailNotificationSingleResponseStatus( null );

			yield Actions.updateIsLoadingEmailNotificationSingle(
				'initialValues',
				true
			);

			const data = yield Actions.fetchEmailNotificationSingle( id );

			yield Actions.updateEmailNotificationSingleInitialValues( data );

			yield Actions.updateIsLoadingEmailNotificationSingle(
				'initialValues',
				false
			);
		} catch ( error ) {
			yield Actions.updateEmailNotificationSingleResponseStatus( {
				success: false,
				message: getErrorMessage( error ),
			} );

			yield Actions.updateIsLoadingEmailNotificationSingle(
				'initialValues',
				false
			);

			if ( 404 === error.data.status_code ) {
				yield Actions.updateIsNotFoundEmailNotificationSingle( true );
			}
		}
	},

	/**
	 * @param {object} data
	 * @param {number} timestamp
	 */
	*createEmailNotification( data, timestamp = 0 ) {
		try {
			yield Actions.updateIsLoadingEmailNotificationSingle(
				'createData',
				true
			);

			yield Actions.updateEmailNotificationSingleResponseStatus( null );

			yield Actions.createEmailNotificationSingle( data );

			yield Actions.updateIsCreatedEmailNotificationSingle( true );
		} catch ( error ) {
			yield Actions.updateEmailNotificationSingleResponseStatus( {
				success: false,
				message: getErrorMessage( error ),
			} );

			yield Actions.updateIsLoadingEmailNotificationSingle(
				'createData',
				false
			);
		}
	},

	/**
	 * @param {object} data
	 * @param {number} timestamp
	 */
	*updateEmailNotification( id, data, timestamp = 0 ) {
		try {
			yield Actions.updateIsLoadingEmailNotificationSingle(
				'updateData',
				true
			);

			yield Actions.updateEmailNotificationSingleResponseStatus( null );

			const response = yield Actions.updateEmailNotificationSingle(
				id,
				data
			);

			yield Actions.updateEmailNotificationSingleResponseStatus( {
				success: true,
				message: response.message,
			} );

			yield Actions.updateIsLoadingEmailNotificationSingle(
				'updateData',
				false
			);
		} catch ( error ) {
			yield Actions.updateEmailNotificationSingleResponseStatus( {
				success: false,
				message: getErrorMessage( error ),
			} );

			yield Actions.updateIsLoadingEmailNotificationSingle(
				'updateData',
				false
			);
		}
	},
};
