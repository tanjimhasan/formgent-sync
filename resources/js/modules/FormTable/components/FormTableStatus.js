import { useSelect, useDispatch } from '@wordpress/data';
import { doAction } from '@wordpress/hooks';
import { ToggleControl } from '@wordpress/components';
import patchData from '@formgent/helper/patchData';
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from 'react';

export default function FormTableStatus( props ) {
	const { form } = props;
	const { id, status } = form;

	const [ currentStatus, setCurrentStatus ] = useState( status );

	const { updateStatusRequest, updateStatusSuccess, updateStatusError } =
		useDispatch( 'formgent' );

	const { FormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getForms();
	}, [] );

	const { isStatusUpdating } = FormReducer;

	const statusText = currentStatus === 'publish' ? 'Active' : 'Inactive';

	function handleUpdateCurrentStatus( newStatus ) {
		setCurrentStatus( newStatus ? 'publish' : 'draft' );
	}

	async function handleUpdateFormStatus() {
		if ( status === currentStatus || isStatusUpdating ) return;

		updateStatusRequest();
		try {
			const statusUpdateResponse = await patchData(
				`admin/forms/${ id }/status`,
				{ status: String( currentStatus ) }
			);
			doAction( 'formgent-toast', {
				message: statusUpdateResponse.message,
			} );
			updateStatusSuccess( {
				...form,
				status: currentStatus,
			} );
		} catch ( error ) {
			updateStatusError( error );
		}
	}

	useEffect( () => {
		handleUpdateFormStatus();
	}, [ currentStatus ] );

	return (
		<div className="formgent-toggle">
			<ToggleControl
				checked={ currentStatus === 'publish' }
				label={ __( statusText, 'formgent' ) }
				onChange={ ( isChecked ) => {
					handleUpdateCurrentStatus( isChecked );
				} }
				disabled={ isStatusUpdating }
			/>
		</div>
	);
}
