const DEFAULT_STATE = {
	singleForm: null,
	isCreatingForm: false,
	isLoading: false,
	error: null,
};

export const SingleFormReducer = ( state = DEFAULT_STATE, action ) => {
	const { type, isLoading, data, error } = action;
	switch ( type ) {
		case 'CREATE_FORM_REQUEST':
			return {
				...state,
				isCreatingForm: true,
			};
		case 'CREATE_FORM_SUCCESS':
			return {
				...state,
				singleForm: {
					...state.singleForm,
					data,
				},
			};
		case 'CREATE_FORM_ERROR':
			return {
				...state,
				error: error,
			};
		case 'UPDATE_SINGLE_FORM_TYPE':
			return {
				...state,
				singleForm: {
					type: action.formType,
				},
			};
		case 'SINGLE_FORM_FETCH_LOADING':
			return {
				...state,
				isLoading: isLoading,
			};
		case 'SINGLE_FORM_FETCH':
			return {
				...state,
				forms: data,
			};
		case 'SINGLE_FORM_STORE':
			return {
				...state,
				singleForm: data,
			};
		case 'SINGLE_FORM_FETCH_ERROR':
			return {
				...state,
				error: error,
			};
		case 'FORM_FIELDS_UPDATE':
			return {
				...state,
				singleForm: {
					...state.singleForm,
					content: {
						...state.singleForm.content,
						fields: data,
					},
				},
			};
		default:
			return state;
	}
};
