import { SearchOutlined } from '@ant-design/icons';
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

// Icon
import arrowsDownIcon from '@icon/arrows-down.svg';
import arrowsUpIcon from '@icon/arrows-up.svg';
import attachmentIcon from '@icon/attachment.svg';
import calendarIcon from '@icon/calendar.svg';
import checkIcon from '@icon/check-square.svg';
import chevronDownIcon from '@icon/chevron-down.svg';
import closeIcon from '@icon/close.svg';
import columnIcon from '@icon/column-3.svg';
import downloadIcon from '@icon/download.svg';
import ellipsisVIcon from '@icon/ellipsis-v.svg';
import hideIcon from '@icon/eye-off.svg';
import fileIcon from '@icon/file.svg';
import filterIcon from '@icon/filter-lines.svg';
import gridIcon from '@icon/grid.svg';
import mailOpenIcon from '@icon/mail-open.svg';
import mailIcon from '@icon/mail.svg';
import pinIcon from '@icon/pin.svg';
import printIcon from '@icon/print.svg';
import refreshIcon from '@icon/refresh.svg';
import starIcon from '@icon/star.svg';
import trashIcon from '@icon/trash.svg';
import userIcon from '@icon/user.svg';

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
	function handleTabChange( key ) {
		setActiveTab( key );
	}

	function handleDownload( { key } ) {
		// Implement Download functionality
		console.log( 'Download clicked', key );
	}

	function handleSearch( value ) {
		// Implement search functionality
		console.log( 'Search:', value );
	}

	function handlePrint() {
		// Implement Print functionality
		console.log( 'Print clicked' );
	}

	function handleDelete() {
		// Implement Delete functionality
		console.log( 'Delete clicked', selectedRowKeys );
	}

	function handleFilter() {
		// Implement filter functionality
		console.log( 'Filter clicked' );
	}

	function handleRefresh() {
		// Implement refresh functionality
		console.log( 'Refresh clicked' );
	}

	// Handle column checkbox change
	function handleColumnCheckbox( e, name ) {
		setColumnCheckedItems( {
			...columnCheckedItems,
			[ name ]: e.target.checked,
		} );
	}

	const selectItems = [
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ gridIcon } />
					All
				</span>
			),
			key: 'all',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ mailOpenIcon } />
					Read
				</span>
			),
			key: 'read',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ mailIcon } />
					Unread
				</span>
			),
			key: 'unread',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ starIcon } />
					Starred
				</span>
			),
			key: 'starred',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ starIcon } />
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
					<ReactSVG width="14" height="14" src={ arrowsUpIcon } />
					Ascending
				</span>
			),
			key: 'ascending',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ arrowsDownIcon } />
					Descending
				</span>
			),
			key: 'descending',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ pinIcon } />
					Freeze Column
				</span>
			),
			key: 'freeze',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ hideIcon } />
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
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ fileIcon } />
					Download as CSV
				</span>
			),
		},
		{
			key: 'excel',
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ fileIcon } />
					Download as Excel
				</span>
			),
		},
		{
			key: 'pdf',
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ fileIcon } />
					Download as PDF
				</span>
			),
		},
		{
			key: 'attachment',
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="14" height="14" src={ attachmentIcon } />
					Download Attachment
				</span>
			),
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
	function filterData() {
		if ( activeTab === 'completed' ) {
			return defaultData.filter( ( item ) => item.shortText > 40 );
		} else if ( activeTab === 'partial' ) {
			return defaultData.filter( ( item ) => item.shortText > 50 );
		}
		return [];
	}

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
								src={ ellipsisVIcon }
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
						<ReactSVG width="14" height="14" src={ calendarIcon } />
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
								src={ ellipsisVIcon }
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
						<ReactSVG width="14" height="14" src={ userIcon } />
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
								src={ ellipsisVIcon }
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
						<ReactSVG width="14" height="14" src={ userIcon } />
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
								src={ ellipsisVIcon }
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
						<ReactSVG width="14" height="14" src={ userIcon } />
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
								src={ ellipsisVIcon }
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
						<ReactSVG width="14" height="14" src={ userIcon } />
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
								src={ ellipsisVIcon }
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
						<ReactSVG width="14" height="14" src={ userIcon } />
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
								src={ ellipsisVIcon }
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

	function handleBulkSelection() {
		setSelectedRowKeys( defaultData.map( ( item ) => item.key ) );
	}

	function handleClearSelection() {
		setSelectedRowKeys( [] );
	}

	function handleTableChange( pagination ) {
		setTableParams( {
			pagination,
		} );
	}

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
				<TableHeaderStyle className="formgent-table-header">
					{ selectedRowKeys.length !== 0 ? (
						<TableActionStyle className="formgent-table-header__action">
							<div className="formgent-table-header__selection">
								<span className="formgent-table-header__selection__text">
									<ReactSVG
										width="16"
										height="16"
										src={ checkIcon }
									/>
									{ selectedRowKeys.length } response selected
									<button
										className="formgent-table-header__selection__clear"
										onClick={ handleClearSelection }
									>
										<ReactSVG
											width="16"
											height="16"
											src={ closeIcon }
										/>
									</button>
								</span>
								<button
									className="formgent-table-header__selection__all"
									onClick={ handleBulkSelection }
								>
									Select All
								</button>
							</div>
							<AntDropdown
								menu={ {
									items: downloadItems,
									onClick: handleDownload,
								} }
								placement="bottomLeft"
							>
								<AntButton
									onClick={ ( e ) => e.preventDefault() }
								>
									<ReactSVG
										width="14"
										height="14"
										src={ downloadIcon }
									/>
								</AntButton>
							</AntDropdown>
							<AntButton onClick={ handlePrint }>
								<ReactSVG
									width="14"
									height="14"
									src={ printIcon }
								/>
							</AntButton>
							<AntButton
								onClick={ handleDelete }
								className="formgent-table-header__delete"
							>
								<ReactSVG
									width="14"
									height="14"
									src={ trashIcon }
								/>
							</AntButton>
						</TableActionStyle>
					) : (
						<TableTabStyle className="formgent-table-header__tab">
							<AntTabs
								activeKey={ activeTab }
								onChange={ handleTabChange }
								items={ tabItems }
							/>
						</TableTabStyle>
					) }

					<TableActionStyle className="formgent-table-header__action">
						<AntInput
							placeholder="Search responses"
							prefix={ <SearchOutlined /> }
							onChange={ ( e ) => handleSearch( e.target.value ) }
							className="formgent-table-header__search"
						/>
						<AntButton onClick={ handleFilter }>
							<ReactSVG
								width="14"
								height="14"
								src={ filterIcon }
							/>
							Filters
						</AntButton>

						{ selectedRowKeys.length === 0 ? (
							<>
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
												src={ chevronDownIcon }
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
									<AntButton>
										<ReactSVG
											width="14"
											height="14"
											src={ downloadIcon }
										/>
									</AntButton>
								</AntDropdown>

								<AntButton onClick={ handleRefresh }>
									<ReactSVG
										width="14"
										height="14"
										src={ refreshIcon }
									/>
								</AntButton>
							</>
						) : (
							''
						) }
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
