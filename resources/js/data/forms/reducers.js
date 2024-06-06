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
	isTitleUpdating: false,
	error: null,
};

export const FormReducer = ( state = DEFAULT_STATE, action ) => {
	const { type, isLoading, data, currentPage, error } = action;
	switch ( type ) {
		case 'FORM_FETCH_LOADING':
			return {
				...state,
				isLoading: isLoading,
			};
		case 'UPDATE_CREATE_POPUP_STATUS':
			return {
				...state,
				isCreatePopupOpen: action.status,
			};
		case 'UPDATE_TITLE_REQUEST':
			return {
				...state,
				isTitleUpdating: true,
			};
		case 'UPDATE_TITLE_SUCCESS':
			const updatedTitleFormList = state.forms.map( ( item ) => {
				if ( item.id === action.payload.id ) {
					return {
						...item,
						title: action.payload.title,
					};
				}
			} );
			return {
				...state,
				isTitleUpdating: false,
				forms: updatedTitleFormList,
			};
		case 'UPDATE_TITLE_ERROR':
			return {
				...state,
				isTitleUpdating: false,
				error: error,
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
			return {
				...state,
				isFormBulkDeleting: true,
			};
		case 'BULK_DELETE_FORM_SUCCESS':
			const bulkUpdatedForm = state.forms.filter(
				( item ) => ! action.ids.includes( item.id )
			);
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
		case 'UPDATE_CURRENT_PAGE':
			return {
				...state,
				pagination: {
					...state.pagination,
					current_page: currentPage,
				},
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
		case 'UPDATE_FORMS':
			return {
				...state,
				forms: [ data, ...state.forms ],
				pagination: {
					...state.pagination,
					total_items: state.pagination + 1,
				},
			};
		default:
			return state;
	}
};
