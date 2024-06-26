import SubmitButton from '@formgent/components/fieldList/SubmitButton/field.js';
import { SingleFormActions } from './actions';
export const SingleFormResolvers = {
	*getSingleForm( id, timeStamp ) {
		yield SingleFormActions.isSingleFormFetchLoading( true );
		try {
			let singleForm = {};
			if ( id ) {
				const data = yield SingleFormActions.fetchForm(
					`formgent/admin/forms/${ id }`
				);
				singleForm = {
					...data?.form,
					content: JSON.parse( data?.form.content ),
					submit_button: SubmitButton,
				};
				yield SingleFormActions.storeSingleForm( singleForm, id );
			} else {
				// singleForm = {
				// 	content: {
				// 		fields: [],
				// 	},
				// 	submit_button: SubmitButton,
				// };
			}

			yield SingleFormActions.isSingleFormFetchLoading( false );
			return singleForm;
		} catch ( error ) {
			yield SingleFormActions.fetchSingleFormError( error );
			yield SingleFormActions.isSingleFormFetchLoading( false );
		}
	},
	*getSingleFormResponse( currentPage = '1', perPage = '10', formID = '1' ) {
		yield SingleFormActions.isSingleFormFetchLoading( true );
		try {
			const data = yield SingleFormActions.fetchResponse(
				'formgent/admin/responses',
				currentPage,
				perPage,
				formID
			);

			console.log( 'getSingleFormResponse data', data );

			yield SingleFormActions.storeResponse( {
				responses: data.responses,
				pagination: data.pagination,
			} );
			yield SingleFormActions.isSingleFormFetchLoading( false );
		} catch ( error ) {
			yield SingleFormActions.fetchSingleFormError( error );
			yield SingleFormActions.isSingleFormFetchLoading( false );
		}
	},
};
