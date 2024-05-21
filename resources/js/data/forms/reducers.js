const DEFAULT_STATE = {
	forms: null,
	isLoading: false,
	error: null,
};

export const FormReducer = ( state = DEFAULT_STATE, action ) => {
	const { type, isLoading, data, error } = action;
	switch ( type ) {
		case 'FORM_FETCH_LOADING':
			return {
				...state,
				isLoading: isLoading,
			};
		case 'FORM_FETCH':
			return {
				...state,
				forms: data,
			};
		case 'FORM_FETCH_ERROR':
			return {
				...state,
				error: error,
			};
		default:
			return state;
	}
};
