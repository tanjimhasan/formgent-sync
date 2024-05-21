//Define actions for Form store
export const FormActions = {
	/**
	 * Action creator to set the loading state of form fetching
	 * @param {boolean} isLoading - The loading state
	 * @returns {Object} Action object with type 'FORM_FETCH_LOADING' and isLoading flag
	 */
	isFormFetchLoading: ( isLoading ) => {
		return {
			type: 'FORM_FETCH_LOADING',
			isLoading,
		};
	},

	/**
	 * Action creator to handle successful form fetch
	 * @param {String} path - path for requesting api
	 * @returns {Object} Action object with type 'FORM_FETCH' and fetched data
	 */
	fetchForm: ( path ) => {
		return {
			type: 'FETCH_FROM',
			path,
		};
	},

	/**
	 * Action creator to handle store form data
	 * @param {Object} data - The fetched form data
	 * @returns {Object} Action object with type 'FORM_FETCH' and fetched data
	 */
	storsForm: ( data ) => {
		return {
			type: 'FORM_STORE',
			data,
		};
	},

	/**
	 * Action creator to handle form fetch error
	 * @param {Object} error - The error occurred during form fetch
	 * @returns {Object} Action object with type 'FORM_FETCH_ERROR' and error information
	 */
	fetchFormError: ( error ) => {
		return {
			type: 'FORM_FETCH_ERROR',
			error,
		};
	},
};
