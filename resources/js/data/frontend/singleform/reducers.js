const DEFAULT_STATE = {
	singleForm: null,
	isLoading: false,
	isFormSubmitting: false,
	error: null,
};

export const SingleFormReducer = ( state = DEFAULT_STATE, action ) => {
	let fieldList = {};
	switch ( action?.type ) {
		case 'GET_SINGLE_FORM_REQUEST':
			return {
				...state,
				isLoading: action.isLoading,
			};
		case 'GET_SINGLE_FORM_SUCCESS':
			return {
				...state,
				singleForm: action.data,
				isLoading: false,
			};
		case 'GET_SINGLE_FORM_ERROR':
			return {
				...state,
				error: action.error,
				isLoading: false,
			};
		case 'SUBMIT_FORM_REQUEST':
			return {
				...state,
				isFormSubmitting: action?.isFormSubmitting,
			};
		case 'SUBMIT_FORM_SUCCESS':
			return {
				...state,
				isFormSubmitting: false,
			};
		case 'SUBMIT_FORM_ERROR':
			return {
				...state,
				error: action?.error,
			};
		default:
			return state;
	}
};
