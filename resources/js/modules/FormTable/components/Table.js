import { AntSpin, AntTable } from '@formgent/components';
import { formatDate } from '@formgent/helper/utils';
import { resolveSelect, useDispatch, useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import { TableStyle } from './style';
import TableAction from './TableAction';
import TableBulkSelection from './TableBulkSelection';
import TitleBox from './TitleBox';
export default function Table() {
	const [ selectedRowKeys, setSelectedRowKeys ] = useState( [] );
	const [ editableForm, setEditableForm ] = useState( null );

	const { updateCurrentPage } = useDispatch( 'formgent' );

	const { FormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getForms();
	}, [] );
	const { forms, pagination, isLoading, form_edit_url } = FormReducer;
	console.log( 'FormReducer Form', FormReducer );

	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );
	const { Link } = CommonReducer.routerComponents;

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

	const formTableColumns = applyFilters( 'formgent_form_table_columns', [
		{
			title: 'Name',
			className: 'formgent-form-checkbox',
			render: ( text, record ) => (
				<TitleBox
					form={ record }
					form_edit_url={ form_edit_url }
					editableForm={ editableForm }
					setEditableForm={ setEditableForm }
				/>
			),
		},
		{
			title: 'Responses',
			className: 'formgent-head-response',
			render: ( text, record ) => (
				<div className="helpgent-form-responses">
					<Link to={ `forms/${ record.id }/response` }>
						{ record.total_responses > 0 ? (
							<div className="helpgent-badge helpgent-badge-danger helpgent-badge-circle helpgent-badge-small">
								{ record.total_responses }
							</div>
						) : (
							''
						) }
					</Link>
				</div>
			),
		},
		{
			title: 'Created By',
			className: 'formgent-head-created-by',
			render: ( text, record ) => (
				<td className="helpgent-form-username">{ record.username }</td>
			),
		},
		{
			title: 'Updated',
			className: 'formgent-head-updated-at',
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
			className: 'formgent-head-action',
			render: ( text, record ) => {
				const date =
					'string' === typeof record.updated_at
						? record.updated_at
						: record.created_at;
				return (
					<div className="formgent-form-action">
						<TableAction
							form={ record }
							editableForm={ editableForm }
							setEditableForm={ setEditableForm }
						/>
					</div>
				);
			},
		},
	] );
	function handleFormTableChange( pagination ) {
		updateCurrentPage( pagination?.current );
		resolveSelect( 'formgent' ).getForms(
			pagination?.current,
			10,
			Date.now()
		);
	}

	return (
		<TableStyle>
			<AntSpin spinning={ isLoading }>
				{ selectedRowKeys.length !== 0 && (
					<TableBulkSelection
						data={ forms }
						selectedRowKeys={ selectedRowKeys }
						setSelectedRowKeys={ setSelectedRowKeys }
					/>
				) }
				<AntTable
					componentTokens={ {
						Table: {
							headerColor: '#6e6e6e',
							headerBg: '#d5d5d5',
							headerSplitColor: '#d5d5d5',
							cellPaddingBlock: 20,
						},
					} }
					showHeader={ selectedRowKeys.length === 0 }
					rowSelection={ rowSelection }
					columns={ formTableColumns }
					dataSource={ forms }
					rowKey={ ( record ) => record.id }
					pagination={ {
						current: pagination?.current_page,
						pageSize: 10,
						total: pagination?.total_items,
						showTotal: ( total, range ) =>
							`${ range[ 0 ] }-${ range[ 1 ] } of ${ total } items`,
					} }
					onChange={ handleFormTableChange }
				/>
			</AntSpin>
		</TableStyle>
	);
}
