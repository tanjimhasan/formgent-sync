import { SingleFormActions } from './actions';
export const SingleFormResolvers = {
	*getSingleForm( id, timeStamp ) {
		yield SingleFormActions.getSingleFormRequest( true );
		try {
			let stateData = {};
			const data = yield SingleFormActions.fetchForm(
				`formgent/forms/${ id }`
			);
			stateData = {
				...data?.form,
				content: JSON.parse( data?.form.content ),
			};
			yield SingleFormActions.getSingleFormSuccess( stateData );
		} catch ( error ) {
			yield SingleFormActions.getSingleFormError( error );
		}
	},
};
