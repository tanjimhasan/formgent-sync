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
	*getSingleFormResponse(
		currentPage = '1',
		perPage = '10',
		searchItem,
		formID,
		readStatus,
		orderType
	) {
		console.log(
			'getSingleFormResponse',
			currentPage,
			perPage,
			searchItem,
			formID,
			readStatus,
			orderType
		);
		yield SingleFormActions.isSingleFormFetchLoading( true );
		try {
			const data = yield SingleFormActions.fetchResponse(
				'formgent/admin/responses',
				currentPage,
				perPage,
				searchItem,
				formID,
				readStatus,
				orderType
			);

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
	*getSingleResponse( currentPage = '1', searchItem, formID ) {
		console.log( 'getSingleResponse', currentPage, searchItem, formID );
		yield SingleFormActions.isSingleFormFetchLoading( true );
		try {
			const data = yield SingleFormActions.fetchSingleResponse(
				'formgent/admin/responses/single',
				currentPage,
				searchItem,
				formID
			);

			console.log( 'fetchSingleResponse response : ', data );

			yield SingleFormActions.storeResponse( {
				single_response: data.responses,
				single_response_pagination: data.pagination,
			} );
			yield SingleFormActions.isSingleFormFetchLoading( false );
		} catch ( error ) {
			yield SingleFormActions.fetchSingleFormError( error );
			yield SingleFormActions.isSingleFormFetchLoading( false );
		}
	},
	*getSingleFormFields( formID ) {
		yield SingleFormActions.isSingleFormFetchLoading( true );
		try {
			const data = yield SingleFormActions.fetchFields(
				`formgent/admin/responses/table`,
				formID
			);

			yield SingleFormActions.storeResponse( {
				fields: data.fields,
				selected_fields: data.selected_fields,
			} );
			yield SingleFormActions.isSingleFormFetchLoading( false );
		} catch ( error ) {
			console.error( 'getSingleFormFields error', error );
			yield SingleFormActions.fetchSingleFormError( error );
			yield SingleFormActions.isSingleFormFetchLoading( false );
		}
	},
};
