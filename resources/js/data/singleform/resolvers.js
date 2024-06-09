import { SingleFormActions } from './actions';
import SubmitButton from '@formgent/components/fieldList/SubmitButton/field.js';
export const SingleFormResolvers = {
	*getSingleForm( id ) {
		yield SingleFormActions.isSingleFormFetchLoading( true );
		try {
			let stateData = {};
			if ( id ) {
				const data = yield SingleFormActions.fetchForm(
					`formgent/admin/forms/${ id }`
				);
				stateData = {
					...data?.form,
					content: JSON.parse( data?.form.content ),
					submit_button: SubmitButton,
				};
			} else {
				stateData = {
					content: {
						fields: [],
					},
					submit_button: SubmitButton,
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
