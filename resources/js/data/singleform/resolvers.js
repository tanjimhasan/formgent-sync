import { SingleFormActions } from './actions';
export const SingleFormResolvers = {
	*getSingleForm( id ) {
		console.log( id );
		yield SingleFormActions.isSingleFormFetchLoading( true );
		try {
			let stateData = {};
			if ( id ) {
				const data = yield SingleFormActions.fetchForm(
					`formgent/admin/forms/${ id }`
				);
				console.log( data );
				stateData = {
					...data?.form,
					content: JSON.parse( data?.form.content ),
				};
			} else {
				stateData = {
					content: {
						fields: [],
					},
				};
			}

			yield SingleFormActions.storeSingleForm( stateData );
			yield SingleFormActions.isSingleFormFetchLoading( false );
		} catch ( error ) {
			yield SingleFormActions.fetchSingleFormError( error );
			yield SingleFormActions.isSingleFormFetchLoading( false );
		}
	},
};
