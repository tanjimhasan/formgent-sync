export const SingleFormSelectors = {
	getSingleForm( state, id ) {
		return state?.SingleFormReducer?.forms
			? state?.SingleFormReducer?.forms[ id ]
			: {};
	},
	getSingleFormState( SingleFormReducer ) {
		return SingleFormReducer;
	},
};
