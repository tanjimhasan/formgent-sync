import { useEffect } from '@wordpress/element';
import { useSelect, resolveSelect } from '@wordpress/data';
import { Loader } from '@formgent/components';
import { SettingsContentStyle } from '../style';
import EditForm from './EditForm';

export default function Edit() {
	const params = new URL( document.location.toString() ).searchParams;
	const formID = parseInt( params.get( 'post' ) );

	const { state, navigateTo } = useSelect( ( select ) => {
		const { CommonReducer, EmailNotificationSingleReducer } =
			select( 'formgent' ).getCommonState();

		const { useParams, useNavigate } = CommonReducer.routerComponents;
		const { email_notification_id } = useParams();
		const navigateTo = useNavigate();

		select( 'formgent' ).fetchEmailNotificationSingle(
			email_notification_id
		);
		select( 'formgent' ).fetchEmailNotificationSinglePresetFields( formID );

		return {
			state: EmailNotificationSingleReducer,
			formID,
			navigateTo,
		};
	}, [] );

	useEffect( () => {
		if ( state.isCreated === true ) {
			navigateTo( '/email-notifications' );
		}
	}, [ state.isCreated, navigateTo ] );

	function filterNullItems( values ) {
		for ( const key of Object.keys( values ) ) {
			if ( values[ key ] === null ) {
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
			resolveSelect( 'formgent' ).updateEmailNotificationSingle(
				state.id,
				values,
				Date.now()
			);
		} else {
			values = { ...values, status: 'publish' };
			resolveSelect( 'formgent' ).createEmailNotificationSingle(
				values,
				Date.now()
			);
		}
	}

	return (
		<SettingsContentStyle className="formgent-settings-content">
			<Loader
				isLoading={
					state.isLoading.initialValues ||
					state.isLoading.presetFields
				}
			>
				<EditForm
					isEdit={ state.id ? true : false }
					initialValues={ state.initialValues }
					isProcessing={
						state.isLoading.createData || state.isLoading.updateData
					}
					responseStatus={ state.responseStatus }
					presetFields={ state.presetFields }
					onSubmit={ onSubmit }
					onCancel={ () => navigateTo( '/email-notifications' ) }
				/>
			</Loader>
		</SettingsContentStyle>
	);
}
