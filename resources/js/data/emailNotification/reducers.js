const DEFAULT_STATE = {
	isLoadingData: false,
	isUpdatingStatus: {},
	isDuplicating: {},
	isDeleting: {},
	responseStatus: null,
	data: [],
	queryArgs: {
		page: 1,
		per_page: 1,
	},
};

export const EmailNotificationReducer = ( state = DEFAULT_STATE, action ) => {
	const { type, payload } = action;

	switch ( type ) {
		case 'UPDATE_IS_LOADING_EMAIL_NOTIFICATIONS':
			return {
				...state,
				isLoadingData: payload,
			};
		case 'UPDATE_EMAIL_NOTIFICATION_DATA':
			return {
				...state,
				data: payload,
			};
		case 'UPDATE_EMAIL_NOTIFICATION_ITEM':
			return {
				...state,
				data: state.data.map( ( item ) => {
					if ( `${ item.id }` === `${ payload.id }` ) {
						return { ...item, ...payload.data };
					}

					return item;
				} ),
			};
		case 'DELETE_EMAIL_NOTIFICATION_ITEM':
			return {
				...state,
				data: state.data.filter(
					( item ) => `${ item.id }` !== `${ payload.id }`
				),
			};
		case 'UPDATE_EMAILNOTIFICATION_RESPONSE_STATUS':
			return {
				...state,
				responseStatus: payload,
			};
		case 'UPDATE_EMAIL_NOTIFICATION_QUERY_ARGS':
			return {
				...state,
				queryArgs: payload,
			};
		default:
			return state;
	}
};
