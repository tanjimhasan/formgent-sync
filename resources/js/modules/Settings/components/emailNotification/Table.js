import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';
import { resolveSelect, useDispatch } from '@wordpress/data';
import { AntTable, AntSwitch, AntSkeleton } from '@formgent/components';

import { TableStyle } from './style';
import DataItemAction from './DataItemAction';

export default function Table( props ) {
	const { data, isLoadingData, isProcessing, queryArgs, refresh } = props;

	const { updateRefreshEmailNotifications } = useDispatch( 'formgent' );

	useEffect( () => {
		if ( ! refresh ) {
			return;
		}

		resolveSelect( 'formgent' ).getEmailNotifications( queryArgs );

		updateRefreshEmailNotifications( false );
	}, [ refresh ] );

	const columns = [
		{
			title: __( 'Status' ),
			dataIndex: 'status',
			render: ( status, data ) => {
				return (
					<AntSwitch
						checked={ status === 'publish' }
						onChange={ () => {
							resolveSelect(
								'formgent'
							).updateEmailNotificationStatus(
								data.id,
								'publish' === data.status ? 'draft' : 'publish'
							);
						} }
						loading={ data.isUpdatingStatus }
					/>
				);
			},
		},
		{
			title: __( 'Name' ),
			dataIndex: 'name',
			key: 'name',
		},
		{
			title: __( 'Subject' ),
			dataIndex: 'subject',
			key: 'subject',
		},
		{
			title: __( 'Action' ),
			key: 'action',
			render: ( _, data ) => {
				return (
					<DataItemAction
						{ ...data }
						onDuplicate={ ( id ) => {
							resolveSelect(
								'formgent'
							).duplicateEmailNotification( id );
						} }
						onEdit={ ( id ) => {
							//
						} }
						onDelete={ ( id ) => {
							resolveSelect( 'formgent' ).deleteEmailNotification(
								id
							);
						} }
					/>
				);
			},
		},
	];

	if ( ! data.length && isLoadingData ) {
		return <AntSkeleton active />;
	}

	return (
		<TableStyle>
			<AntTable
				loading={ isLoadingData || isProcessing }
				componentTokens={ {
					Table: {
						headerColor: '#6e6e6e',
						headerBg: '#d5d5d5',
						headerSplitColor: '#d5d5d5',
						cellPaddingBlock: 20,
					},
				} }
				columns={ columns }
				dataSource={ data }
				rowKey={ ( dataItem ) => dataItem.id }
				pagination={ { position: [ 'none' ] } }
				scroll={ { x: 1300 } }
			/>
		</TableStyle>
	);
}
