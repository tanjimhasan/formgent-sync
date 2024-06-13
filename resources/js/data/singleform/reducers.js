const DEFAULT_STATE = {
	singleForm: null,
	isCreatingForm: false,
	isLoading: false,
	isUpdatingForm: false,
	activeCustomizerTab: 'element',
	activeField: '',
	error: null,
};

export const SingleFormReducer = ( state = DEFAULT_STATE, action ) => {
	const { type, isLoading, data, error } = action;
	let fieldList = {};
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
		case 'PUBLISH_FORM_REQUEST':
			return {
				...state,
				isUpdatingForm: true,
			};
		case 'PUBLISH_FORM_SUCCESS':
			return {
				...state,
				singleForm: {
					...state.singleForm,
					...action.data,
				},
				isUpdatingForm: false,
			};
		case 'PUBLISH_FORM_ERROR':
			return {
				...state,
				isUpdatingForm: false,
				error: error,
			};
		case 'UPDATE_ACTIVE_FIELD':
			return {
				...state,
				activeField: action?.field,
			};
		case 'UPDATE_ACTIVE_CUSTOMIZER_TAB':
			return {
				...state,
				activeCustomizerTab: action?.activeTab,
			};
		case 'DUPLICATE_FORM_FIELD':
			fieldList = structuredClone( state?.singleForm?.content?.fields );
			fieldList.splice( action.index + 1, 0, action.field );

			return {
				...state,
				singleForm: {
					...state.singleForm,
					content: {
						...state.singleForm.content,
						fields: fieldList,
					},
				},
			};
		case 'DELETE_FORM_FIELD':
			fieldList = structuredClone( state?.singleForm?.content?.fields );
			return {
				...state,
				singleForm: {
					...state.singleForm,
					content: {
						...state.singleForm.content,
						fields: fieldList.filter(
							( item ) => item.id !== action.id
						),
					},
				},
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
		case 'UPDATE_FIELD_LABEL':
			let fieldList = structuredClone(
				state?.singleForm?.content?.fields
			);
			fieldList = fieldList.map( ( item ) => {
				if ( item?.id === action?.payload?.fieldId ) {
					return {
						...item,
						general_option: {
							...item.general_option,
							label: action?.payload?.label,
						},
					};
				}
				return item;
			} );
			return {
				...state,
				singleForm: {
					...state.singleForm,
					content: {
						...state.singleForm.content,
						fields: fieldList,
					},
				},
			};
		default:
			return state;
	}
};
