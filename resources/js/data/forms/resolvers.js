import { FormActions } from './actions';
export const FormResolvers = {
	*getForms() {
		yield FormActions.isFormFetchLoading( true );
		try {
			const data = yield FormActions.fetchForm( 'new-form/ping' );
			yield FormActions.storsForm( data );
			yield FormActions.isFormFetchLoading( false );
		} catch ( error ) {
			yield FormActions.fetchFormError( error );
			yield FormActions.isFormFetchLoading( false );
		}
	},
};
