import { useSelect, resolveSelect } from '@wordpress/data';
import { Loader } from '@formgent/components';
import { SettingsContentStyle } from '../style';
import EditForm from './EditForm';

export default function Edit() {
	const { state, formID, navigateTo } = useSelect( ( select ) => {
		const { CommonReducer, EmailNotificationSingleReducer } =
			select( 'formgent' ).getCommonState();

		const { useParams, useNavigate } = CommonReducer.routerComponents;
		const { id, email_notification_id } = useParams();

		const navigateTo = useNavigate();

		select( 'formgent' ).getEmailNotification( email_notification_id );

		return {
			state: EmailNotificationSingleReducer,
			formID: id,
			navigateTo,
		};
	}, [] );

	if ( state.isNotFound ) {
		back();
		return '';
	}

	if ( state.isCreated ) {
		back();
		return '';
	}

	function filterNullItems( values ) {
		for ( const key of Object.keys( values ) ) {
			if ( null === values[ key ] ) {
				delete values[ key ];
			}
		}

		return values;
	}

	function onSubmit( values ) {
		values = filterNullItems( {
			...state.initialValues,
			...values,
			form_id: parseInt( formID ),
		} );

		if ( values.hasOwnProperty( 'id' ) ) {
			delete values.id;
		}

		if ( state.id ) {
			resolveSelect( 'formgent' ).updateEmailNotification(
				state.id,
				values,
				Date.now()
			);
		} else {
			values = { ...values, status: 'publish' };
			resolveSelect( 'formgent' ).createEmailNotification(
				values,
				Date.now()
			);
		}
	}

	function back() {
		navigateTo( `/forms/${ formID }/settings/email-notifications` );
	}

	return (
		<SettingsContentStyle className="formgent-settings-content">
			<Loader isLoadiing={ state.isLoading.initialValues }>
				<EditForm
					isEdit={ state.id ? true : false }
					initialValues={ state.initialValues }
					isProcessing={
						state.isLoading.createData || state.isLoading.updateData
					}
					responseStatus={ state.responseStatus }
					presetFields={ state.presetFields }
					onSubmit={ onSubmit }
					onCancel={ back }
				/>
			</Loader>
		</SettingsContentStyle>
	);
}
