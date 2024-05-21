//Define actions for Form store
export const SingleFormActions = {
    /**
     * Action creator to set the loading state of form fetching
     * @param {boolean} isLoading - The loading state
     * @returns {Object} Action object with type 'SINGLE_FORM_FETCH_LOADING' and isLoading flag
     */
    isSingleFormFetchLoading: (isLoading)=>{
        return {
            type: 'SINGLE_FORM_FETCH_LOADING',
        isLoading
        }
    },

    /**
     * Action creator to handle successful form fetch
     * @param {String} path - path for requesting api
     * @returns {Object} Action object with type 'SINGLE_FORM_FETCH' and fetched data
     */
    fetchForm: (path)=>{
        return {
            type: 'FETCH_SINGLE_FROM',
            path
        };
    },

    /**
     * Action creator to handle store form data
     * @param {Object} data - The fetched single form data
     * @returns {Object} Action object with type 'SINGLE_FORM_FETCH' and fetched data
     */
    storeSingleForm: (data)=>{
        return {
            type: 'SINGLE_FORM_STORE',
        data
        }
    },

    /**
     * Action creator to handle form fetch error
     * @param {Object} error - The error occurred during form fetch
     * @returns {Object} Action object with type 'SINGLE_FORM_FETCH_ERROR' and error information
     */
    fetchSingleFormError: (error)=>{
        return {
            type: 'SINGLE_FORM_FETCH_ERROR',
        error
        }
    },

    /**
     * Action to updae form fields
     * @param {Object} data - updated
     * @returns {Object} Action object with type 'FORM_FIELDS_UPDATE' and updated data
     */
    updateFormFields: (data)=>{
        return {
            type: 'FORM_FIELDS_UPDATE',
            data
        }
    },

    insertSpacer: (spacer, index)=>{
        return {
            type: 'INSERT_SPACER',
            data: {spacer, index}
        }
    }
}