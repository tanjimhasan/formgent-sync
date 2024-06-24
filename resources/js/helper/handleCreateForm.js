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
		createFormSuccess( formData );
		updateForms( createFormResponse.form );
		updateCreatePopUp( false );
		navigate( `/forms/${ createFormResponse?.form?.id }/edit` );
		doAction( 'formgent-toast', {
			message: createFormResponse.message,
		} );
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
