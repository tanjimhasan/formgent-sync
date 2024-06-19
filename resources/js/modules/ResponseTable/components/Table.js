import {
	ColumnHeightOutlined,
	DownOutlined,
	DownloadOutlined,
	FilterOutlined,
	ReloadOutlined,
	SearchOutlined,
} from '@ant-design/icons';
import {
	AntButton,
	AntCheckbox,
	AntDropdown,
	AntInput,
	AntSpin,
	AntTable,
	AntTabs,
} from '@formgent/components';
import fetchData from '@formgent/helper/fetchData';
import { useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useState } from '@wordpress/element';
import TableAction from './TableAction';
// import TableBulkSelection from './TableBulkSelection';

import {
	TableActionStyle,
	TableHeaderStyle,
	TableStyle,
	TableTabStyle,
} from './style';

export default function Table() {
	const [ selectedRowKeys, setSelectedRowKeys ] = useState( [] );
	const [ responseTableData, setResponseTableData ] = useState( [] );
	const [ activeTab, setActiveTab ] = useState( 'completed' );
	const [ filteredData, setFilteredData ] = useState( [] );
	const [ tableParams, setTableParams ] = useState( {
		pagination: {
			current: 1,
			pageSize: 10,
		},
	} );

	// Execute Store Operations
	const { updateFormItemState } = useDispatch( 'formgent' );

	const { FormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getForms();
	}, [] );

	const { isLoading } = FormReducer;

	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );
	const { useParams } = CommonReducer.routerComponents;
	const { id } = useParams();

	// Handle Tab Operations
	const handleTabChange = ( key ) => {
		setActiveTab( key );
	};

	const handleSearch = ( value ) => {
		// Implement search functionality
		console.log( 'Search:', value );
	};

	const handleFilter = () => {
		// Implement filter functionality
		console.log( 'Filter clicked' );
	};

	const handleDownload = () => {
		// Implement download functionality
		console.log( 'Download clicked' );
	};

	const handleRefresh = () => {
		// Implement refresh functionality
		console.log( 'Refresh clicked' );
	};

	const [ checkedItems, setCheckedItems ] = useState( {
		column1: true,
		column2: false,
		column3: false,
	} );

	const handleCheckboxChange = ( e, key ) => {
		e.stopPropagation();
		setCheckedItems( {
			...checkedItems,
			[ key ]: e.target.checked,
		} );
	};

	const columnItems = [
		{
			label: (
				<span
					style={ {
						fontWeight: 'bold',
						display: 'block',
						marginBottom: '8px',
					} }
				>
					Show Hide Columns
				</span>
			),
			key: 'heading',
			type: 'group',
		},
		{
			label: (
				<AntCheckbox
					checked={ checkedItems.column1 }
					onChange={ ( e ) => handleCheckboxChange( e, 'column1' ) }
				>
					Column One
				</AntCheckbox>
			),
			key: 'column1',
			disabled: true,
		},
		{
			label: (
				<AntCheckbox
					checked={ checkedItems.column2 }
					onChange={ ( e ) => handleCheckboxChange( e, 'column2' ) }
				>
					Column Two
				</AntCheckbox>
			),
			key: 'column2',
			disabled: true,
		},
		{
			label: (
				<AntCheckbox
					checked={ checkedItems.column3 }
					onChange={ ( e ) => handleCheckboxChange( e, 'column3' ) }
				>
					Column Three
				</AntCheckbox>
			),
			key: 'column3',
			disabled: true,
		},
	];

	const downloadItems = [
		{
			key: 'csv',
			label: 'Download as CSV',
		},
		{
			key: 'excel',
			label: 'Download as Excel',
		},
		{
			key: 'pdf',
			label: 'Download as PDF',
		},
		{
			key: 'attachment',
			label: 'Download Attachment',
		},
	];

	const tabItems = [
		{
			key: 'completed',
			label: 'Completed',
		},
		{
			key: 'partial',
			label: 'Partial',
		},
	];

	// Filter data based on active tab
	const filterData = () => {
		if ( activeTab === 'completed' ) {
			return defaultData.filter( ( item ) => item.age > 40 );
		} else if ( activeTab === 'partial' ) {
			return defaultData.filter( ( item ) => item.age > 50 );
		}
		return [];
	};

	// Use effect to update filtered data when the active tab changes
	useEffect( () => {
		setFilteredData( filterData() );
	}, [ activeTab ] );

	// Default Column Data
	const defaultColumns = [
		{
			title: 'Name',
			dataIndex: 'name',
			render: ( text, record ) => (
				<div className="formgent-form-wrap">
					<div className="formgent-form-data">
						<span>{ text }</span>
					</div>
					<div className="formgent-form-action">
						<TableAction type="sortby" responseData={ record } />
					</div>
				</div>
			),
		},
		{
			title: 'Age',
			dataIndex: 'age',
			render: ( text, record ) => (
				<div className="formgent-form-wrap">
					<div className="formgent-form-data">
						<span>{ text }</span>
					</div>
					<div className="formgent-form-action">
						<TableAction type="sortby" responseData={ record } />
					</div>
				</div>
			),
		},
		{
			title: 'Address',
			dataIndex: 'address',
			render: ( text, record ) => (
				<div className="formgent-form-wrap">
					<div className="formgent-form-data">
						<span>{ text }</span>
					</div>
					<div className="formgent-form-action">
						<TableAction type="sortby" responseData={ record } />
					</div>
				</div>
			),
		},
		{
			title: 'Action',
			dataIndex: 'action',
			render: ( text, record ) => (
				<div className="formgent-form-action">
					<TableAction type="action" responseData={ record } />
				</div>
			),
		},
	];

	// Default Table Data
	const defaultData = [];
	for ( let i = 0; i < 46; i++ ) {
		defaultData.push( {
			key: i,
			name: `Edward King ${ i }`,
			age: 32 + i,
			address: `London, Park Lane no. ${ i }`,
		} );
	}

	// Table Operations
	const rowSelection = {
		selectedRowKeys,
		onChange: handleRowSelection,
	};

	function handleRowSelection( newSelectedRowKeys ) {
		setSelectedRowKeys( newSelectedRowKeys );
	}

	const handleTableChange = ( pagination ) => {
		setTableParams( {
			pagination,
		} );
	};

	useEffect( () => {
		// Fetch Response Table Data
		fetchData( `admin/entries?page=1&per_page=10&form_id=${ id }` )
			.then( ( res ) => {
				console.log( 'responseTable Data Response:', res );
				setResponseTableData( res.entries );
				updateFormItemState( id, res );
			} )
			.catch( ( error ) => {
				console.error( 'Failed to fetch entry data:', error );
			} );
	}, [] );

	useEffect( () => {
		const formItem = FormReducer.forms.find( ( item ) => item?.id === id );
		const pagination = formItem?.pagination || tableParams?.pagination;

		setTableParams( {
			pagination: {
				current: pagination.current_page,
				pageSize: pagination.per_page,
			},
		} );
	}, [ responseTableData ] );

	return (
		<TableStyle>
			<AntSpin spinning={ isLoading }>
				{ /* { selectedRowKeys.length !== 0 ? (
					<TableBulkSelection
						data={ defaultData }
						selectedRowKeys={ selectedRowKeys }
						setSelectedRowKeys={ setSelectedRowKeys }
					/>
				) : (
					''
				) } */ }

				<TableHeaderStyle className="formgent-table-header">
					<TableTabStyle className="formgent-table-header__tab">
						<AntTabs
							activeKey={ activeTab }
							onChange={ handleTabChange }
							items={ tabItems }
						/>
					</TableTabStyle>
					<TableActionStyle className="formgent-table-header__action">
						<AntInput
							placeholder="Search responses"
							prefix={ <SearchOutlined /> }
							onPressEnter={ ( e ) =>
								handleSearch( e.target.value )
							}
							className="formgent-table-header__search"
						/>
						<AntButton
							icon={ <FilterOutlined /> }
							onClick={ handleFilter }
						>
							Filters
						</AntButton>

						<AntDropdown
							menu={ { items: columnItems } }
							trigger={ [ 'click' ] }
							placement="bottomRight"
						>
							<AntButton icon={ <ColumnHeightOutlined /> }>
								Column <DownOutlined />
							</AntButton>
						</AntDropdown>

						<AntDropdown
							menu={ { items: downloadItems } }
							placement="bottomRight"
						>
							<AntButton
								icon={ <DownloadOutlined /> }
								onClick={ handleDownload }
							/>
						</AntDropdown>

						<AntButton
							icon={ <ReloadOutlined /> }
							onClick={ handleRefresh }
						/>
					</TableActionStyle>
				</TableHeaderStyle>

				<AntTable
					componentTokens={ {
						Table: {
							headerColor: '#6e6e6e',
							headerBg: '#d5d5d5',
							headerSplitColor: '#ffffff',
							cellPaddingBlock: 20,
						},
					} }
					rowSelection={ rowSelection }
					columns={ defaultColumns }
					dataSource={ filteredData }
					rowKey={ ( record ) => record.key }
					pagination={ tableParams.pagination }
					onChange={ handleTableChange }
				/>
			</AntSpin>
		</TableStyle>
	);
}
