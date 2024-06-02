const DEFAULT_STATE = {
	forms: [],
	addBackBtn: false,
	isCreatePopupOpen: false,
	selectedTemplate: null,
	templateElements: null,
	createFormStage: 'initial',
	pagination: {},
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
		case 'FORM_STORE':
			console.log( data );
			return {
				...state,
				forms: data,
			};
		case 'FORM_FETCH_ERROR':
			return {
				...state,
				error: error,
			};
		case 'UPDATE_FORM_STORE':
			return {
				...state,
				...data,
			};
		case 'UPDATE_FORM_ITEM_STORE':
			let form = state.forms.find(
				( form ) => form.id === action.formId
			);

			if ( ! form ) {
				return form;
			}

			Object.assign( form, data );

			return state;
		default:
			return state;
	}
};
