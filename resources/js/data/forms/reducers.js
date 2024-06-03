const DEFAULT_STATE = {
	forms: [],
	addBackBtn: false,
	isCreatePopupOpen: false,
	selectedTemplate: null,
	templateElements: null,
	createFormStage: 'initial',
	pagination: {
		current_page: '1',
		total_items: '0',
	},
	isLoading: false,
	isFormDeleting: false,
	isFormBulkDeleting: false,
	error: null,
};

export const FormReducer = ( state = DEFAULT_STATE, action ) => {
	const { type, isLoading, data, currentPage, error } = action;
	console.log( type );
	switch ( type ) {
		case 'FORM_FETCH_LOADING':
			return {
				...state,
				isLoading: isLoading,
			};
		case 'DELETE_FORM_REQUEST':
			return {
				...state,
				isFormDeleting: true,
			};
		case 'DELETE_FORM_SUCCESS':
			const updatedForms = state.forms.filter(
				( item ) => item.id !== action.id
			);
			return {
				...state,
				isFormDeleting: false,
				forms: updatedForms,
				pagination: {
					...state.pagination,
					total_items: updatedForms.length,
				},
			};
		case 'DELETE_FORM_ERROR':
			return {
				...state,
				isFormDeleting: false,
				error: error,
			};
		case 'BULK_DELETE_FORM_REQUEST':
			console.log( 'request' );
			return {
				...state,
				isFormBulkDeleting: true,
			};
		case 'BULK_DELETE_FORM_SUCCESS':
			console.log( action );
			const bulkUpdatedForm = state.forms.filter(
				( item ) => ! action.ids.includes( item.id )
			);
			console.log( bulkUpdatedForm, action );
			return {
				...state,
				isFormBulkDeleting: false,
				forms: bulkUpdatedForm,
				pagination: {
					...state.pagination,
					total_items: bulkUpdatedForm.length,
				},
			};
		case 'BULK_DELETE_FORM_ERROR':
			return {
				...state,
				isFormBulkDeleting: false,
				error: error,
			};
		case 'FORM_STORE':
			return {
				...state,
				...data,
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
		case 'DELETE_FORM':
			return {};
		case 'UPDATE_CURRENT_PAGE':
			return {
				...state,
				pagination: {
					...state.pagination,
					current_page: currentPage,
				},
			};
		default:
			return state;
	}
};
