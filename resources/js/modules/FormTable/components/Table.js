import { useState } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { applyFilters } from '@wordpress/hooks';
import { AntTable } from '@newform/components';
import { ConfigProvider } from 'antd';
import { formatDate } from '@newform/helper/utils';
import TItleBox from './TitleBox';
import { TableStyle } from './style';
import TableAction from './TableAction';
export default function Table() {
	const [ selectedRowKeys, setSelectedRowKeys ] = useState( [] );

	const { FormReducer } = useSelect( ( select ) => {
		return select( 'newform' ).getForms();
	}, [] );

	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'newform' ).getCommonState();
	}, [] );
	const { forms } = FormReducer;
	const { useNavigate } = CommonReducer.routerComponents;
	const navigate = useNavigate();
	const rowSelection = {
		selectedRowKeys,
		onChange: handleRowSelection,
	};

	function handleRowSelection( newSelectedRowKeys ) {
		setSelectedRowKeys( newSelectedRowKeys );
	}

	const dateFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	const formTableColumns = applyFilters( 'newform_form_table_columns', [
		{
			title: 'Name',
			className: 'newform-form-checkbox',
			render: ( text, record ) => <TItleBox form={ record } />,
		},
		{
			title: 'Entries',
			className: 'newform-head-response',
			render: ( text, record ) => (
				<div className="helpgent-form-responses">
					<a
					//to={ `responses` }
					>
						{ record.total_entries }
						{ record.total_unread_entries > 0 ? (
							<div className="helpgent-badge helpgent-badge-danger helpgent-badge-circle helpgent-badge-small">
								{ record.total_unread_entries }
							</div>
						) : (
							''
						) }
					</a>
				</div>
			),
		},
		{
			title: 'Created By',
			className: 'newform-head-created-by',
			render: ( text, record ) => (
				<td className="helpgent-form-username">{ record.username }</td>
			),
		},
		{
			title: 'Updated',
			className: 'newform-head-updated-at',
			render: ( text, record ) => {
				const date =
					'string' === typeof record.updated_at
						? record.updated_at
						: record.created_at;
				return (
					<div className="helpgent-form-date">
						{ formatDate( 'en-US', date, dateFormatOptions ) }
					</div>
				);
			},
		},
		{
			title: 'More',
			className: 'newform-head-action',
			render: ( text, record ) => {
				const date =
					'string' === typeof record.updated_at
						? record.updated_at
						: record.created_at;
				return (
					<div className="newform-form-action">
						<TableAction />
					</div>
				);
			},
		},
	] );

	return (
		<TableStyle>
			<AntTable
				componentTokens={ {
					Table: {
						headerColor: '#6e6e6e',
						headerBg: '#d5d5d5',
						headerSplitColor: '#d5d5d5',
						cellPaddingBlock: 20,
					},
				} }
				rowSelection={ rowSelection }
				columns={ formTableColumns }
				dataSource={ forms }
				pagination={ {
					showTotal: ( total, range ) =>
						`${ range[ 0 ] }-${ range[ 1 ] } of ${ total } items`,
				} }
			/>
		</TableStyle>
	);
}
