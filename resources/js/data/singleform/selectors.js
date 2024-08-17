export const SingleFormSelectors = {
	getSingleForm( state, id ) {
		return state?.SingleFormReducer?.forms
			? state?.SingleFormReducer?.forms[ id ]
			: {};
	},
	getSingleFormState( SingleFormReducer ) {
		return SingleFormReducer;
	},
	getResponseForm( SingleFormReducer ) {
		return SingleFormReducer;
	},
	getSingleResponse( SingleFormReducer ) {
		return SingleFormReducer;
	},
	getSingleFormFields( SingleFormReducer ) {
		return SingleFormReducer;
	},
	getAnalyticsSummary( state, id ) {
		return state?.SingleFormReducer?.analyticsSummary
			? state?.SingleFormReducer?.analyticsSummary[ id ]
			: {};
	},
};
