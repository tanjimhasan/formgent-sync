//Define actions for Form store
export const SingleFormActions = {
	/**
	 * Action creator to set the loading state of form fetching
	 * @param {boolean} isLoading - The loading state
	 * @returns {Object} Action object with type 'SINGLE_FORM_FETCH_LOADING' and isLoading flag
	 */
	getSingleFormRequest: ( isLoading ) => {
		return {
			type: 'GET_SINGLE_FORM_REQUEST',
			isLoading,
		};
	},

	/**
	 * Action creator to handle successful form fetch
	 * @param {String} path - path for requesting api
	 * @returns {Object} Action object with type 'SINGLE_FORM_FETCH' and fetched data
	 */
	getSingleFormSuccess: ( data ) => {
		return {
			type: 'GET_SINGLE_FORM_SUCCESS',
			data,
		};
	},

	/**
	 * Action creator to handle successful form fetch
	 * @param {String} path - path for requesting api
	 * @returns {Object} Action object with type 'SINGLE_FORM_FETCH' and fetched data
	 */
	fetchForm: ( path ) => {
		return {
			type: 'FETCH_SINGLE_FROM',
			path,
		};
	},

	/**
	 * Action creator to handle form fetch error
	 * @param {Object} error - The error occurred during form fetch
	 * @returns {Object} Action object with type 'SINGLE_FORM_FETCH_ERROR' and error information
	 */
	getSingleFormError: ( error ) => {
		return {
			type: 'GET_SINGLE_FORM_ERROR',
			error,
		};
	},

	submitFormRequest: ( isFormSubmitting ) => {
		return {
			type: 'SUBMIT_FORM_REQUEST',
			isFormSubmitting,
		};
	},

	submitFormSuccess: () => {
		return {
			type: 'SUBMIT_FORM_SUCCESS',
		};
	},

	submitFormError: ( error ) => {
		return {
			type: 'SUBMIT_FORM_ERROR',
			error,
		};
	},
};
