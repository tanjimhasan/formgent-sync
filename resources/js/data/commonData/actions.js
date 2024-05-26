//Define actions for Form store
export const CommonActions = {
	/**
	 * Action creator to handle store form data
	 * @param {Object} data - The fetched form data
	 * @returns {Object} Action object with type 'FORM_FETCH' and fetched data
	 */
	setRouterState: ( data ) => {
		return {
			type: 'SET_ROUTER_STATE',
			data,
		};
	},
};
