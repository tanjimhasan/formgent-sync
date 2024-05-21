const DEFAULT_STATE = {
    singleForm: null,
    isLoading: false,
    error: null
}

export const SingleFormReducer = (state = DEFAULT_STATE, action )=>{
    const { type, isLoading, data, error } = action;
    switch (type) {
        case 'SINGLE_FORM_FETCH_LOADING':
            return {
                ...state,
                isLoading: isLoading
            };
        case 'SINGLE_FORM_FETCH':
            return{
                ...state,
                forms: data
            }
        case 'SINGLE_FORM_STORE':
            return{
                ...state,
                singleForm: data
            }
        case 'SINGLE_FORM_FETCH_ERROR':
            return{
                ...state,
                error: error
            }
        case 'FORM_FIELDS_UPDATE':
            return{
                ...state,
                singleForm: {
                    ...state.singleForm,
                    content: {
                        ...state.singleForm.content,
                        fields: data
                    }
                }
            }
        default:
            return state;
    }
}
