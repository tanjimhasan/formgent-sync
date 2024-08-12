import { useDispatch } from '@wordpress/data';
import { doAction } from '@wordpress/hooks';
import patchData from '@formgent/helper/patchData';
import { __ } from '@wordpress/i18n';
import { useState, useEffect } from 'react';
import { Switch } from 'antd';

export default function FormTableStatus( props ) {
	const { form, isStatusUpdating } = props;
	const { id, status } = form;
	const [ currentStatus, setCurrentStatus ] = useState( status );
	const { updateStatusRequest, updateStatusSuccess, updateStatusError } =
		useDispatch( 'formgent' );

	async function handleUpdateFormStatus( newStatus ) {
		setCurrentStatus( newStatus ? 'publish' : 'draft' );
		updateStatusRequest();
		try {
			const statusUpdateResponse = await patchData(
				`admin/forms/${ id }/status`,
				{ status: String( newStatus ? 'publish' : 'draft' ) }
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
		setCurrentStatus( status );
	}, [ status ] );

	return (
		<div className="formgent-toggle">
			<Switch
				checked={ currentStatus === 'publish' }
				onChange={ ( isChecked ) => {
					handleUpdateFormStatus( isChecked );
				} }
				loading={ isStatusUpdating }
			/>
			<span>{ currentStatus === 'publish' ? 'Active' : 'Inactive' }</span>
		</div>
	);
}
