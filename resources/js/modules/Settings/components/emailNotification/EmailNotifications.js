import { Col, Row } from 'antd';
import { __ } from '@wordpress/i18n';
import { useSelect, resolveSelect } from '@wordpress/data';

import {
	AntTable,
	AntSwitch,
	AntButton,
	AntSkeleton,
} from '@formgent/components';

import ReactSVG from 'react-inlinesvg';
import plusIcon from '@icon/plus.svg';
import editIcon from '@icon/edit.svg';
import copyIcon from '@icon/copy.svg';
import trashIcon from '@icon/trash.svg';
import { SettingsContentStyle } from '../style';
import { TableStyle } from './style';

export default function EmailNotifications() {
	const { EmailNotificationReducer: state } = useSelect( ( select ) => {
		return select( 'formgent' ).getEmailNotifications();
	}, [] );

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
					<div>
						<a
							href="#"
							onClick={ ( e ) => {
								e.preventDefault();
							} }
							className="formgent-action-link"
						>
							<span className="formgent-action-link-icon">
								<ReactSVG src={ editIcon } />
							</span>
						</a>
						<a
							href="#"
							onClick={ ( e ) => {
								e.preventDefault();
							} }
							className="formgent-action-link"
						>
							<span className="formgent-action-link-icon">
								<ReactSVG src={ copyIcon } />
							</span>
						</a>
						<a
							href="#"
							onClick={ ( e ) => {
								e.preventDefault();
								const isConfirmed = confirm( 'Are you sure?' );

								if ( isConfirmed ) {
									resolveSelect(
										'formgent'
									).deleteEmailNotification( data.id );
								}
							} }
							className="formgent-action-link"
						>
							<span className="formgent-action-link-icon">
								<ReactSVG src={ trashIcon } />
							</span>
						</a>
					</div>
				);
			},
		},
	];

	return (
		<SettingsContentStyle className="formgent-settings-content">
			<Row align={ 'middle' }>
				<Col flex={ 'auto' }>
					<h4 className="formgent-settings-content__title">
						{ __( 'Email Notifications', 'helpgent' ) }
					</h4>
				</Col>

				<Col>
					<AntButton
						type="primary"
						className="formgent-page-header-btn"
						onClick={ ( e ) => {
							updateCreatePopUp( true );
							updateCreatePopupStep( '1' );
						} }
					>
						<ReactSVG src={ plusIcon } />{ ' ' }
						{ __( 'Add Notification', 'formgent' ) }
					</AntButton>
				</Col>
			</Row>

			{ ! state.data.length && state.isLoadingData ? (
				<AntSkeleton active></AntSkeleton>
			) : (
				<TableStyle>
					<AntTable
						isLoading={ state.isLoadingData }
						componentTokens={ {
							Table: {
								headerColor: '#6e6e6e',
								headerBg: '#d5d5d5',
								headerSplitColor: '#d5d5d5',
								cellPaddingBlock: 20,
							},
						} }
						columns={ columns }
						dataSource={ state.data }
						rowKey={ ( dataItem ) => dataItem.id }
						pagination={ { position: [ 'none' ] } }
						scroll={ { x: 1300 } }
					/>
				</TableStyle>
			) }
		</SettingsContentStyle>
	);
}
