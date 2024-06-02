import { FormActions } from './actions';
export const FormResolvers = {
	*getForms( currentPage = '1', perPage = '10', timestamp = 0 ) {
		yield FormActions.isFormFetchLoading( true );
		try {
			const data = yield FormActions.fetchForm(
				'new-form/admin/forms',
				currentPage,
				perPage
			);
			yield FormActions.storsForm( {
				forms: data.forms,
				pagination: data.pagination,
			} );
			yield FormActions.isFormFetchLoading( false );
		} catch ( error ) {
			yield FormActions.fetchFormError( error );
			yield FormActions.isFormFetchLoading( false );
		}
	},
};
