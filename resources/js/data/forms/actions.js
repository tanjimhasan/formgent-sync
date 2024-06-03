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

	deleteFormRequest: () => {
		return {
			type: 'DELETE_FORM_REQUEST',
		};
	},

	deleteFormSuccess: ( id ) => {
		return {
			type: 'DELETE_FORM_SUCCESS',
			id,
		};
	},

	deleteFormError: ( error ) => {
		return {
			type: 'DELETE_FORM_ERROR',
			error,
		};
	},

	/**
	 * Action creator to handle successful form fetch
	 * @param {String} path - path for requesting api
	 * @returns {Object} Action object with type 'FORM_FETCH' and fetched data
	 */
	fetchForm: ( path, currentPage, perPage ) => {
		console.log( 'hello' );
		return {
			type: 'FETCH_FROM',
			payload: { path, currentPage, perPage },
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

	updateFormState: ( data ) => {
		return {
			type: 'UPDATE_FORM_STORE',
			data,
		};
	},

	updateCurrentPage: ( currentPage ) => {
		return {
			type: 'UPDATE_CURRENT_PAGE',
			currentPage,
		};
	},
};
