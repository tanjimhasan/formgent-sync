const DEFAULT_STATE = {
	routerComponents: null,
};

export const CommonReducer = ( state = DEFAULT_STATE, action ) => {
	const { type, data } = action;
	switch ( type ) {
		case 'SET_ROUTER_STATE':
			return {
				...state,
				routerComponents: data,
			};
		default:
			return state;
	}
};
