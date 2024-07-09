import { doAction } from '@wordpress/hooks';
import postData from './postData';
import { __ } from '@wordpress/i18n';

export default async function handleCreateForm(
	formData,
	createFormSuccess,
	createFormError,
	updateForms,
	updateCreatePopUp,
	navigate
) {
	let screenFormContent = {};

	screenFormContent = JSON.stringify( {
		fields: [],
	} );
	Object.assign( formData, { content: screenFormContent } );

	try {
		const createFormResponse = await postData( 'admin/forms', formData );

		// TODO
		// createFormSuccess( formData, createFormResponse?.form?.id );
		// updateForms( createFormResponse.form );
		// updateCreatePopUp( false );
		doAction( 'formgent-toast', {
			message: createFormResponse.message,
		} );
		location.href = createFormResponse.form_edit_url;
	} catch ( error ) {
		let errors = {};
		if ( error.message ) {
			errors.internal = error.message;
		} else {
			errors.internal = __( 'Server Error', 'helpgent' );
		}
		// setServerErrors( errors );
	}
}
