import {
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
import ReactSVG from 'react-inlinesvg';
// import TableBulkSelection from './TableBulkSelection';

// Icon
import arrowDown from '@icon/arrow-down.svg';
import arrowsDown from '@icon/arrows-down.svg';
import arrowsUp from '@icon/arrows-up.svg';
import calendar from '@icon/calendar.svg';
import columnIcon from '@icon/column-3.svg';
import download from '@icon/download.svg';
import ellipsisV from '@icon/ellipsis-v.svg';
import hide from '@icon/eye-off.svg';
import grid from '@icon/grid.svg';
import mailOpen from '@icon/mail-open.svg';
import mail from '@icon/mail.svg';
import pin from '@icon/pin.svg';
import star from '@icon/star.svg';
import user from '@icon/user.svg';

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

	const [ columnCheckedItems, setColumnCheckedItems ] = useState( {
		column1: true,
		column2: false,
		column3: false,
	} );

	// Handle checkbox change
	const handleColumnCheckbox = ( e, name ) => {
		setColumnCheckedItems( {
			...columnCheckedItems,
			[ name ]: e.target.checked,
		} );
	};

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

	const handleRefresh = () => {
		// Implement refresh functionality
		console.log( 'Refresh clicked' );
	};

	const selectItems = [
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ grid } />
					All
				</span>
			),
			key: 'all',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ mailOpen } />
					Read
				</span>
			),
			key: 'read',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ mail } />
					Unread
				</span>
			),
			key: 'unread',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ star } />
					Starred
				</span>
			),
			key: 'starred',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ star } />
					Unstarred
				</span>
			),
			key: 'Unstarred',
		},
	];

	const sortItems = [
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ arrowsUp } />
					Ascending
				</span>
			),
			key: 'ascending',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ arrowsDown } />
					Descending
				</span>
			),
			key: 'descending',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ download } />
					Download
				</span>
			),
			key: 'download',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ pin } />
					Freeze Column
				</span>
			),
			key: 'freeze',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ hide } />
					Hide Column
				</span>
			),
			key: 'hide',
		},
	];

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
			value: 'heading',
			type: 'group',
		},
		{
			key: 'column1',
			label: (
				<AntCheckbox
					checked={ columnCheckedItems.column1 }
					onChange={ ( e ) => handleColumnCheckbox( e, 'column1' ) }
				>
					Screen name
				</AntCheckbox>
			),
		},
		{
			key: 'column2',
			label: (
				<AntCheckbox
					checked={ columnCheckedItems.column2 }
					onChange={ ( e ) => handleColumnCheckbox( e, 'column2' ) }
				>
					Screen name
				</AntCheckbox>
			),
		},
		{
			key: 'column3',
			label: (
				<AntCheckbox
					checked={ columnCheckedItems.column3 }
					onChange={ ( e ) => handleColumnCheckbox( e, 'column3' ) }
				>
					Screen name
				</AntCheckbox>
			),
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
			label: 'Completed (6)',
		},
		{
			key: 'partial',
			label: 'Partial (2)',
		},
	];

	// Filter data based on active tab
	const filterData = () => {
		if ( activeTab === 'completed' ) {
			return defaultData.filter( ( item ) => item.shortText > 40 );
		} else if ( activeTab === 'partial' ) {
			return defaultData.filter( ( item ) => item.shortText > 50 );
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
			key: 'name',
			dataIndex: 'name',
			title: () => (
				<div className="formgent-column-action">
					<AntDropdown
						menu={ { items: selectItems } }
						trigger={ [ 'click' ] }
						placement="bottomLeft"
						overlayStyle={ { minWidth: '240px' } }
					>
						<a onClick={ ( e ) => e.preventDefault() }>
							<ReactSVG
								width="14"
								height="14"
								src={ ellipsisV }
							/>
						</a>
					</AntDropdown>
				</div>
			),
		},
		{
			title: 'date',
			dataIndex: 'date',
			title: () => (
				<div className="formgent-column-action">
					<span className="formgent-column-action__title">
						<ReactSVG width="14" height="14" src={ calendar } />
						Submission Date
					</span>
					<AntDropdown
						menu={ { items: sortItems } }
						trigger={ [ 'click' ] }
						placement="bottomRight"
						overlayStyle={ { minWidth: '240px' } }
					>
						<a onClick={ ( e ) => e.preventDefault() }>
							<ReactSVG
								width="14"
								height="14"
								src={ ellipsisV }
							/>
						</a>
					</AntDropdown>
				</div>
			),
		},
		{
			key: 'author',
			dataIndex: 'author',
			title: () => (
				<div className="formgent-column-action">
					<span className="formgent-column-action__title">
						<ReactSVG width="14" height="14" src={ user } />
						Submitted By
					</span>
					<AntDropdown
						menu={ { items: sortItems } }
						trigger={ [ 'click' ] }
						placement="bottomRight"
						overlayStyle={ { minWidth: '240px' } }
					>
						<a onClick={ ( e ) => e.preventDefault() }>
							<ReactSVG
								width="14"
								height="14"
								src={ ellipsisV }
							/>
						</a>
					</AntDropdown>
				</div>
			),
		},
		{
			key: 'shortText',
			dataIndex: 'shortText',
			title: () => (
				<div className="formgent-column-action">
					<span className="formgent-column-action__title">
						<ReactSVG width="14" height="14" src={ user } />
						Short Text
					</span>
					<AntDropdown
						menu={ { items: sortItems } }
						trigger={ [ 'click' ] }
						placement="bottomRight"
						overlayStyle={ { minWidth: '240px' } }
					>
						<a onClick={ ( e ) => e.preventDefault() }>
							<ReactSVG
								width="14"
								height="14"
								src={ ellipsisV }
							/>
						</a>
					</AntDropdown>
				</div>
			),
		},
		{
			key: 'longText',
			dataIndex: 'longText',
			title: () => (
				<div className="formgent-column-action">
					<span className="formgent-column-action__title">
						<ReactSVG width="14" height="14" src={ user } />
						Long Text
					</span>
					<AntDropdown
						menu={ { items: sortItems } }
						trigger={ [ 'click' ] }
						placement="bottomRight"
						overlayStyle={ { minWidth: '240px' } }
					>
						<a onClick={ ( e ) => e.preventDefault() }>
							<ReactSVG
								width="14"
								height="14"
								src={ ellipsisV }
							/>
						</a>
					</AntDropdown>
				</div>
			),
		},
		{
			key: 'multiple',
			dataIndex: 'multiple',
			title: () => (
				<div className="formgent-column-action">
					<span className="formgent-column-action__title">
						<ReactSVG width="14" height="14" src={ user } />
						Multiple Select
					</span>
					<AntDropdown
						menu={ { items: sortItems } }
						trigger={ [ 'click' ] }
						placement="bottomRight"
						overlayStyle={ { minWidth: '240px' } }
					>
						<a onClick={ ( e ) => e.preventDefault() }>
							<ReactSVG
								width="14"
								height="14"
								src={ ellipsisV }
							/>
						</a>
					</AntDropdown>
				</div>
			),
		},
		{
			key: 'dropdown',
			dataIndex: 'dropdown',
			title: () => (
				<div className="formgent-column-action">
					<span className="formgent-column-action__title">
						<ReactSVG width="14" height="14" src={ user } />
						Dropdown
					</span>
					<AntDropdown
						menu={ { items: sortItems } }
						trigger={ [ 'click' ] }
						placement="bottomRight"
						overlayStyle={ { minWidth: '240px' } }
					>
						<a onClick={ ( e ) => e.preventDefault() }>
							<ReactSVG
								width="14"
								height="14"
								src={ ellipsisV }
							/>
						</a>
					</AntDropdown>
				</div>
			),
		},
	];

	// Default Table Data
	const defaultData = [];
	for ( let i = 0; i < 46; i++ ) {
		defaultData.push( {
			key: i,
			date: `Date ${ i }`,
			author: `Edward King ${ i }`,
			shortText: 32 + i,
			longText: `London, Park Lane no. ${ i }`,
			multiple: `Multiple no. ${ i }`,
			dropdown: `Dropdown no. ${ i }`,
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
						{ /* <AntSelect
							mode="multiple"
							placeholder="Please select"
							onChange={ handleChange }
							style={ {
								width: '100%',
							} }
							options={ columnItems }
						/> */ }

						{ /* <AntDropdown
							menu={ { items: columnItems } }
							// trigger={ [ 'click' ] }
							placement="bottomRight"
						>
							<AntButton>
								<ReactSVG width="14" height="14" src={ columnIcon } />
								<span>
									Column <ReactSVG width="14" height="14" src={ arrowDown } />
								</span>
							</AntButton>
						</AntDropdown> */ }

						<div className="formgent-table-header__dropdown">
							<div className="formgent-table-header__dropdown__toggle">
								<ReactSVG
									width="14"
									height="14"
									src={ columnIcon }
								/>
								<span>
									Column{ ' ' }
									<ReactSVG
										width="14"
										height="14"
										src={ arrowDown }
									/>
								</span>
							</div>

							<div className="formgent-table-header__dropdown__content">
								<span className="formgent-table-header__dropdown__title">
									Show Hide Columns
								</span>
								{ columnItems
									.map( ( item ) => item.label )
									.slice( 1, 4 ) }
							</div>
						</div>

						<AntDropdown
							menu={ { items: downloadItems } }
							placement="bottomRight"
						>
							<AntButton icon={ <DownloadOutlined /> } />
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
