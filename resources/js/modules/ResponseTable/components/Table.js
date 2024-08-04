import {
	PrepareExportData,
	exportToPDF,
	exportToSpreadsheet,
} from '@formgent/admin/export/response';

import { AntDropdown, AntSpin, AntTable } from '@formgent/components';
import deleteData from '@formgent/helper/deleteData';
import fetchData from '@formgent/helper/fetchData';
import patchData from '@formgent/helper/patchData';
import postData from '@formgent/helper/postData';
import { formatDate } from '@formgent/helper/utils';
import { resolveSelect, useDispatch, useSelect } from '@wordpress/data';
import { useEffect, useRef, useState } from '@wordpress/element';
import { addQueryArgs } from '@wordpress/url';
import { CSVLink } from 'react-csv';
import ReactSVG from 'react-inlinesvg';
import TableDrawer from './TableDrawer';
import TableHeader from './TableHeader';
import { TableStyle } from './style';

// Icon
import arrowsDownIcon from '@icon/arrows-down.svg';
import arrowsUpIcon from '@icon/arrows-up.svg';
import calendarIcon from '@icon/calendar.svg';
import ellipsisVIcon from '@icon/ellipsis-v.svg';
import expandIcon from '@icon/expand.svg';
import hideIcon from '@icon/eye-off.svg';
import fileIcon from '@icon/file.svg';
import gridIcon from '@icon/grid.svg';
import mailOpenIcon from '@icon/mail-open.svg';
import mailIcon from '@icon/mail.svg';
import pinIcon from '@icon/pin.svg';
import starIcon from '@icon/star.svg';
import userIcon from '@icon/user.svg';

export default function Table() {
	const [ selectedRowKeys, setSelectedRowKeys ] = useState( [] );
	const [ totalCompletedItems, setTotalCompletedItems ] = useState( null );
	const [ totalPartialItems, setTotalPartialItems ] = useState( null );
	const [ activeTab, setActiveTab ] = useState( 'completed' );
	const [ tableDrawer, setTableDrawer ] = useState( false );
	const [ filteredData, setFilteredData ] = useState( [] );
	const [ starredItems, setStarredItems ] = useState( {} );
	const [ readItems, setReadItems ] = useState( {} );
	const [ customColumns, setCustomColumns ] = useState( [] );
	const [ frozenColumns, setFrozenColumns ] = useState( [] );
	const [ hiddenColumns, setHiddenColumns ] = useState( [] );
	const [ visibleColumns, setVisibleColumns ] = useState( [] );
	const [ fieldColumnHide, setFieldColumnHide ] = useState( [] );
	const [ responseFields, setResponseFields ] = useState( [] );
	const [ csvExportData, setCSVExportData ] = useState( [] );

	// Reference
	const isInitialRender = useRef( true );
	const csvLinkRef = useRef();

	// Retrieve from the store
	const { updateCurrentResponsePage } = useDispatch( 'formgent' );

	const { SingleFormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getSingleFormState();
	}, [] );

	const { responses, pagination, isLoading, fields, selected_fields } =
		SingleFormReducer;

	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );
	const { useParams } = CommonReducer.routerComponents;
	const { id } = useParams();

	// Download Items
	const downloadItems = [
		{
			key: 'csv',
			label: (
				<>
					<span
						className="dropdown-header-content"
						onClick={ ( e ) => handleExportCSV( e ) }
					>
						<ReactSVG width="14" height="14" src={ fileIcon } />
						Download as CSV
					</span>
					<CSVLink
						data={ csvExportData }
						filename={ 'formgent-response-list.csv' }
						className="csv-downloader"
						style={ { display: 'none' } }
						ref={ csvLinkRef }
					/>
				</>
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
	];

	// handleSelectItems
	function handleSelectItems( { key } ) {
		const selectFunctions = {
			all: () => responses,
			read: () => responses?.filter( ( item ) => item.is_read === '1' ),
			unread: () => responses?.filter( ( item ) => item.is_read === '0' ),
			starred: () =>
				responses?.filter( ( item ) => item.is_starred === '1' ),
			unstarred: () =>
				responses?.filter( ( item ) => item.is_starred === '0' ),
		};

		// Get the sorted data based on the key
		const selectedData = selectFunctions[ key ]
			? selectFunctions[ key ]()
			: responses;
		setFilteredData( selectedData );
	}

	// handleSortby
	function handleSortby( item, dropdownId ) {
		const { key } = item;
		const sortFunctions = {
			ascending: () =>
				[ ...responses ].sort(
					( a, b ) =>
						new Date( a[ dropdownId ] ) -
						new Date( b[ dropdownId ] )
				),
			descending: () =>
				[ ...responses ].sort(
					( a, b ) =>
						new Date( b[ dropdownId ] ) -
						new Date( a[ dropdownId ] )
				),
			freeze: () => {
				setFrozenColumns( ( prevFrozenColumns ) => {
					return [ ...prevFrozenColumns, dropdownId ];
				} );
			},
			hide: () => {
				setHiddenColumns( ( prevHiddenColumns ) => {
					return [ ...prevHiddenColumns, dropdownId ];
				} );
			},
		};

		// Get the sorted data based on the key
		if ( key === 'freeze' || key === 'hide' ) {
			sortFunctions[ key ]();
		} else {
			const sortedData = sortFunctions[ key ]
				? sortFunctions[ key ]()
				: filteredData;
			setFilteredData( sortedData );
		}
	}

	// handleStarred
	async function handleStarred( id, isStarredStatus ) {
		console.log( 'handleStarred : ', id, isStarredStatus );
		const reverseStarredStatus = isStarredStatus ? 0 : 1;
		const updateStarredStatus = await patchData(
			`admin/responses/${ id }/starred/`,
			{ is_starred: reverseStarredStatus }
		);
		if ( updateStarredStatus ) {
			setStarredItems( ( prevStarredItems ) => ( {
				...prevStarredItems,
				[ id ]: reverseStarredStatus,
			} ) );
		}
	}

	// handleRead
	async function handleRead( id, isReadStatus ) {
		console.log( 'handleRead : ', id, isReadStatus );
		const reverseReadStatus = isReadStatus ? 0 : 1;
		const updateReadStatus = await patchData(
			`admin/responses/${ id }/read/`,
			{ is_read: reverseReadStatus }
		);
		if ( updateReadStatus ) {
			setReadItems( ( prevReadItems ) => ( {
				...prevReadItems,
				[ id ]: reverseReadStatus,
			} ) );
		}
	}

	// handleTableDrawer
	async function handleTableDrawer( record ) {
		console.log( ' record: ', record );
		setTableDrawer( record );
		// const responseDrawer = await fetchData(
		// 	`admin/responses/single?form_id=${ id }&page=${ record.id }`
		// );

		// if ( responseDrawer ) {
		// 	console.log( 'handleTableDrawer', responseDrawer );
		// 	setTableDrawer( responseDrawer );
		// }
	}

	// Date Format
	const dateFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	// Handle Create Export Data
	async function handleCreateExportData() {
		return await fetchData(
			addQueryArgs( `admin/responses/export?form_id=${ id }`, {
				response_ids: selectedRowKeys,
			} )
		);
	}

	// Handle Download
	async function handleDownload( { key } ) {
		const exportedData = await handleCreateExportData();
		if ( exportedData ) {
			if ( key === 'pdf' ) {
				return exportToPDF( exportedData, 'formgent-response' );
			} else if ( key === 'excel' ) {
				return exportToSpreadsheet( exportedData, 'formgent-response' );
			} else {
				return;
			}
		} else {
			console.error( 'No data to export' );
		}
	}

	// Handle Export CSV
	async function handleExportCSV( e ) {
		e.stopPropagation();
		const exportedData = await handleCreateExportData();
		if ( exportedData ) {
			setCSVExportData( PrepareExportData( exportedData ) );
		}
	}

	// Filter data based on active tab
	function handleFilterData() {
		const completedItems = responses?.filter(
			( item ) => item.is_completed === '1'
		);
		const partialItems = responses?.filter(
			( item ) => item.is_completed === '0'
		);

		setTotalCompletedItems( completedItems?.length || 0 );
		setTotalPartialItems( partialItems?.length || 0 );

		console.log(
			'handleFilterData',
			responses,
			completedItems,
			partialItems
		);

		if ( activeTab === 'completed' ) {
			return completedItems;
		} else if ( activeTab === 'partial' ) {
			return partialItems;
		}
		return [];
	}

	// Select Items Data
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
			key: 'unstarred',
		},
	];

	// Sort Items Data
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

	// Default Column Data
	const defaultColumns = [
		{
			key: 'id',
			dataIndex: 'id',
			title: () => (
				<div className="formgent-column-action formgent-column-action__id">
					<AntDropdown
						menu={ {
							items: selectItems,
							onClick: handleSelectItems,
						} }
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
			render: ( text, record ) => {
				const isStarred =
					starredItems[ record.id ] !== undefined
						? starredItems[ record.id ]
						: record.is_starred === '1';
				return (
					<div className="formgent-form-table-item-wrap">
						{ record.id }
						<ReactSVG
							width="14"
							height="14"
							src={ starIcon }
							className={ isStarred ? 'starred' : '' }
							onClick={ () =>
								handleStarred( record.id, isStarred )
							}
						/>
					</div>
				);
			},
		},
		{
			key: 'created_at',
			dataIndex: 'created_at',
			title: () => (
				<div className="formgent-column-action">
					<span className="formgent-column-action__title">
						<ReactSVG width="14" height="14" src={ calendarIcon } />
						Submission Date
					</span>
					<AntDropdown
						menu={ {
							items: sortItems,
							onClick: ( item ) =>
								handleSortby( item, 'created_at' ),
						} }
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
			render: ( text, record ) => {
				return (
					<div className="formgent-form-date">
						{ formatDate(
							'en-US',
							record.created_at,
							dateFormatOptions
						) }
						<button
							className="response-table__modal__open"
							onClick={ () => {
								handleTableDrawer( record );
							} }
						>
							<ReactSVG
								width="12"
								height="12"
								src={ expandIcon }
							/>
							View
						</button>
					</div>
				);
			},
		},
		{
			key: 'created_by',
			dataIndex: 'created_by',
			title: () => (
				<div className="formgent-column-action">
					<span className="formgent-column-action__title">
						<ReactSVG width="14" height="14" src={ userIcon } />
						Submitted By
					</span>
					<AntDropdown
						menu={ {
							items: sortItems,
							onClick: ( item ) =>
								handleSortby( item, 'created_by' ),
						} }
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

	// Table Operations
	const rowSelection = {
		selectedRowKeys,
		onChange: handleRowSelection,
	};

	function handleRowSelection( newSelectedRowKeys ) {
		setSelectedRowKeys( newSelectedRowKeys );
	}

	function handleTableChange( pagination ) {
		console.log( 'Table Changed', responses, pagination, isLoading );
		updateCurrentResponsePage( pagination?.current );
		resolveSelect( 'formgent' ).getSingleFormResponse(
			pagination?.current,
			10,
			parseInt( id )
		);
	}

	// Handle Delete
	async function handleDelete( ids ) {
		console.log( 'Delete clicked', ids, selectedRowKeys );
		const deleteResponse = await deleteData(
			addQueryArgs( `admin/responses?form_id=${ parseInt( id ) }`, {
				ids: ids || selectedRowKeys,
			} )
		);

		if ( deleteResponse ) {
			console.log( 'Deleted SUccessfully : ', deleteResponse );
			handleTableChange();
		}
	}

	// Use effect to update filtered data when the active tab changes
	useEffect( () => {
		setFilteredData( handleFilterData() );
	}, [ responses, activeTab ] );

	useEffect( () => {
		const newColumns = customColumns.map( ( col ) => {
			return {
				...col,
				hidden: hiddenColumns.includes( col.key ),
			};
		} );

		setCustomColumns( newColumns );
	}, [ hiddenColumns ] );

	useEffect( () => {
		const newColumns = defaultColumns.map( ( col ) => {
			return {
				...col,
				fixed: frozenColumns.includes( col.dataIndex )
					? 'left'
					: col.fixed,
			};
		} );

		setCustomColumns( newColumns );
	}, [ frozenColumns ] );

	useEffect( () => {
		setResponseFields( fields );
		resolveSelect( 'formgent' ).getSingleFormFields( parseInt( id ) );
	}, [ fields ] );

	// Generate Column
	const generateCustomColumns = ( selectedFields, responses, fields ) => {
		return ( selectedFields || [] ).map( ( fieldId ) => {
			const field = fields?.find( ( f ) => f.id === fieldId );
			const title = field ? field.label : `Field ${ fieldId }`;

			return {
				key: fieldId,
				dataIndex: fieldId,
				title: () => (
					<div className="formgent-column-action">
						<span className="formgent-column-action__title">
							{ title }
						</span>
						<AntDropdown
							menu={ {
								items: sortItems,
								onClick: ( item ) =>
									handleSortby( item, fieldId ),
							} }
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
				render: ( text, record ) => {
					const response = responses.find(
						( r ) => r.id === record.id
					);
					if ( response ) {
						const answer = response.answers?.find(
							( a ) => a.field_id === fieldId
						);
						if ( answer ) {
							return <div>{ answer.value }</div>;
						}
					}
					return <div>No data</div>;
				},
			};
		} );
	};

	// Handle Show/Hide Column
	async function handleColumn() {
		if ( ! fieldColumnHide ) {
			const updateColumn = await postData( 'admin/responses/fields', {
				form_id: id,
				field_ids: visibleColumns,
			} );

			if ( updateColumn ) {
				resolveSelect( 'formgent' ).getSingleFormFields(
					parseInt( id ),
					visibleColumns
				);
			}
		} else {
			setHiddenColumns( [ ...hiddenColumns, fieldColumnHide ] );
		}
	}

	useEffect( () => {
		setFilteredData( responses );
		const generatedColumns = generateCustomColumns(
			selected_fields,
			responses,
			fields
		);
		const allColumns = [ ...defaultColumns, ...generatedColumns ];

		setCustomColumns( allColumns );
	}, [ selected_fields, responses, starredItems, readItems ] );

	useEffect( () => {
		setVisibleColumns( selected_fields );
	}, [ selected_fields ] );

	useEffect( () => {
		if ( isInitialRender.current ) {
			isInitialRender.current = false;
		} else {
			handleColumn();
		}
	}, [ visibleColumns ] );

	useEffect( () => {
		handleTableChange();
		setCustomColumns( defaultColumns );
	}, [] );

	// Export CSV Data
	useEffect( () => {
		if ( csvExportData.length ) {
			csvLinkRef.current?.link.click();
		}
	}, [ csvExportData ] );

	return (
		<TableStyle>
			<AntSpin spinning={ isLoading }>
				<TableHeader
					id={ id }
					responses={ responses }
					selectedRowKeys={ selectedRowKeys }
					setSelectedRowKeys={ setSelectedRowKeys }
					handleTableChange={ handleTableChange }
					totalCompletedItems={ totalCompletedItems }
					totalPartialItems={ totalPartialItems }
					activeTab={ activeTab }
					setActiveTab={ setActiveTab }
					visibleColumns={ visibleColumns }
					setVisibleColumns={ setVisibleColumns }
					responseFields={ responseFields }
					setResponseFields={ setResponseFields }
					setFieldColumnHide={ setFieldColumnHide }
					handleDelete={ handleDelete }
					downloadItems={ downloadItems }
					handleDownload={ handleDownload }
					handleExportCSV={ handleExportCSV }
					csvExportData={ csvExportData }
					setCSVExportData={ setCSVExportData }
				/>

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
					columns={ customColumns }
					dataSource={ filteredData }
					rowKey={ ( record ) => record.id }
					pagination={ {
						current: pagination?.current_page,
						pageSize: 10,
						total: pagination?.total_items,
						showTotal: ( total, range ) =>
							`${ range[ 0 ] }-${ range[ 1 ] } of ${ total } items`,
					} }
					className="formgent-result-table"
					onChange={ handleTableChange }
				/>
			</AntSpin>
			{ tableDrawer && (
				<TableDrawer
					response={ tableDrawer }
					setTableDrawer={ setTableDrawer }
					handleDelete={ handleDelete }
					starredItems={ starredItems }
					handleStarred={ handleStarred }
					handleRead={ handleRead }
					dateFormatOptions={ dateFormatOptions }
					handleDownload={ handleDownload }
					downloadItems={ downloadItems }
				/>
			) }
		</TableStyle>
	);
}
