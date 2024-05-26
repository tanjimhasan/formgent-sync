import { FormActions } from './actions';
export const FormResolvers = {
	*getForms() {
		yield FormActions.isFormFetchLoading( true );
		try {
			const data = yield FormActions.fetchForm(
				'new-form/admin/forms?page=1&per_page=10&date_type=last_month'
			);
			console.log( data );
			yield FormActions.storsForm( data.forms );
			yield FormActions.isFormFetchLoading( false );
		} catch ( error ) {
			yield FormActions.fetchFormError( error );
			yield FormActions.isFormFetchLoading( false );
		}
	},
};
