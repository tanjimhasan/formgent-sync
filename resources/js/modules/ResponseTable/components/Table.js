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
import chevronDownIcon from '@icon/chevron-down.svg';
import csvIcon from '@icon/csv.svg';
import ellipsisVIcon from '@icon/ellipsis-v.svg';
import expandIcon from '@icon/expand.svg';
import hideIcon from '@icon/eye-off.svg';
import gridIcon from '@icon/grid.svg';
import mailOpenIcon from '@icon/mail-open.svg';
import mailIcon from '@icon/mail.svg';
import pdfIcon from '@icon/pdf.svg';
import pinIcon from '@icon/pin.svg';
import starIcon from '@icon/star.svg';
import userIcon from '@icon/user.svg';
import xlsIcon from '@icon/xls.svg';

export default function Table() {
	const [ selectedRowKeys, setSelectedRowKeys ] = useState( [] );
	const [ activeTab, setActiveTab ] = useState( 'completed' );
	const [ tableDrawer, setTableDrawer ] = useState( false );
	const [ responseNotes, setResponseNotes ] = useState( false );
	const [ filteredData, setFilteredData ] = useState( [] );
	const [ searchItem, setSearchItem ] = useState( '' );
	const [ readStatus, setReadStatus ] = useState( 0 );
	const [ orderType, setOrderType ] = useState( 'asc' );
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
	const debounceTimeout = useRef( null );

	// Retrieve from the store
	const {
		updateCurrentResponsePage,
		starredChangeRequest,
		starredChangeSuccess,
		starredChangeError,
		readStatusChangeRequest,
		readStatusChangeSuccess,
		readStatusChangeError,
		responseDeleteRequest,
		responseDeleteSuccess,
		responseDeleteError,
	} = useDispatch( 'formgent' );

	const { SingleFormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getSingleFormState();
	}, [] );

	console.log( 'SingleFormReducer Table : ', SingleFormReducer );

	const {
		responses,
		pagination,
		isLoading,
		starredItems,
		isStarredChanging,
		readStatusItems,
		isReadStatusChanging,
		isResponseDeleting,
		fields,
		selected_fields,
		single_response,
		single_response_pagination,
	} = SingleFormReducer;

	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );
	const { useParams } = CommonReducer.routerComponents;
	const { id } = useParams();

	// Fetch Responses
	function fetchResponse( page ) {
		return resolveSelect( 'formgent' ).getResponseForm(
			page?.current || pagination.current_page,
			10,
			searchItem,
			parseInt( id ),
			readStatus,
			orderType,
			Date.now()
		);
	}

	// Download Items
	const downloadItems = ( source ) => [
		{
			key: `csv|${ source }`,
			label: (
				<>
					<span
						className="dropdown-header-content"
						onClick={ ( e ) => handleExportCSV( e, source ) }
					>
						<ReactSVG width="16" height="16" src={ csvIcon } />
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
			key: `excel|${ source }`,
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="16" height="16" src={ xlsIcon } />
					Download as Excel
				</span>
			),
		},
		{
			key: `pdf|${ source }`,
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="16" height="16" src={ pdfIcon } />
					Download as PDF
				</span>
			),
		},
	];

	// handleSelectItems
	function handleSelectItems( { key } ) {
		const selectFunctions = {
			all: () => responses,
			read: () => {
				setReadStatus( 1 );
			},
			unread: () => {
				setReadStatus( 0 );
			},
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
			ascending: () => {
				setOrderType( 'asc' );
			},
			descending: () => {
				setOrderType( 'desc' );
			},
			freeze: () => {
				setFrozenColumns( ( prevFrozenColumns ) => {
					return [ ...prevFrozenColumns, dropdownId ];
				} );
			},
			hide: () => {
				setHiddenColumns( ( prevHiddenColumns ) => {
					return [ ...prevHiddenColumns, dropdownId ];
				} );
				setVisibleColumns(
					visibleColumns.includes( dropdownId )
						? visibleColumns.filter(
								( item ) => item !== dropdownId
						  )
						: visibleColumns
				);
			},
		};

		sortFunctions[ key ]();
	}

	// handleTableDrawer
	async function handleTableDrawer( record, nav ) {
		let drawerResponse = responses.findIndex(
			( item ) => item.id === record
		);

		switch ( nav ) {
			case 'prev':
				drawerResponse = drawerResponse;
				break;
			case 'next':
				drawerResponse = drawerResponse + 2;
				break;
			default:
				drawerResponse = drawerResponse + 1;
		}

		resolveSelect( 'formgent' ).getSingleResponse(
			drawerResponse,
			searchItem,
			parseInt( id ),
			readStatus,
			orderType,
			Date.now()
		);

		handleResponseNotes( responses[ drawerResponse - 1 ]?.id );
	}

	// handleResponseNotes
	async function handleResponseNotes( responseID ) {
		const getResponseNotes = await fetchData(
			`admin/responses/notes?response_id=${ responseID }`
		);
		setResponseNotes( getResponseNotes.notes );
	}

	// handleStarred
	async function handleStarred( id, isStarredStatus, source ) {
		if ( isStarredChanging ) return;

		starredChangeRequest();
		const reverseStarredStatus = isStarredStatus === '1' ? 0 : 1;

		const updateStarredStatus = await patchData(
			`admin/responses/${ id }/starred/`,
			{ is_starred: reverseStarredStatus }
		);
		if ( updateStarredStatus ) {
			starredChangeSuccess( id, reverseStarredStatus );

			if ( source === 'drawer' ) {
				handleTableDrawer( id );
			}
		} else {
			starredChangeError();
		}
	}

	// handleRead
	async function handleRead( id, isReadStatus, source ) {
		if ( isReadStatusChanging ) return;

		readStatusChangeRequest();

		const reverseReadStatus = isReadStatus === '1' ? 0 : 1;

		const updateReadStatus = await patchData(
			`admin/responses/${ id }/read/`,
			{ is_read: reverseReadStatus }
		);
		if ( updateReadStatus ) {
			readStatusChangeSuccess( id, reverseReadStatus );

			if ( source === 'drawer' ) {
				handleTableDrawer( id );
			}
		} else {
			readStatusChangeError();
		}
	}

	// Date Format
	const dateFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	};

	// Handle Create Export Data
	async function handleCreateExportData( source ) {
		const downloadItemsID =
			source === 'drawer' && tableDrawer?.id
				? [ tableDrawer.id ]
				: selectedRowKeys;
		const responseIds = responses.map( ( response ) => response.id );

		return await fetchData(
			addQueryArgs( `admin/responses/export?form_id=${ id }`, {
				response_ids: downloadItemsID.length
					? downloadItemsID
					: responseIds,
			} )
		);
	}

	// Handle Download
	async function handleDownload( { key } ) {
		const [ fileType, source ] = key.split( '|' ); // fileType: pdf, excel, source: header, drawer

		if ( fileType === 'csv' ) {
			return;
		}

		const exportedData = await handleCreateExportData( source );

		if ( exportedData ) {
			if ( fileType === 'pdf' ) {
				return exportToPDF( exportedData, 'formgent-response' );
			} else if ( fileType === 'excel' ) {
				return exportToSpreadsheet( exportedData, 'formgent-response' );
			} else {
				return;
			}
		} else {
			console.error( 'No data to export' );
		}
	}

	// Handle Export CSV
	async function handleExportCSV( e, source ) {
		e.stopPropagation();
		const exportedData = await handleCreateExportData( source );
		if ( exportedData ) {
			setCSVExportData( PrepareExportData( exportedData ) );
		}
	}

	// Select Items Data
	const selectItems = [
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="16" height="16" src={ gridIcon } />
					All
				</span>
			),
			key: 'all',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="16" height="16" src={ mailOpenIcon } />
					Read
				</span>
			),
			key: 'read',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="16" height="16" src={ mailIcon } />
					Unread
				</span>
			),
			key: 'unread',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG
						width="16"
						height="16"
						src={ starIcon }
						fill="currentColor"
					/>
					Starred
				</span>
			),
			key: 'starred',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="16" height="16" src={ starIcon } />
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
					<ReactSVG width="16" height="16" src={ arrowsUpIcon } />
					Ascending
				</span>
			),
			key: 'ascending',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="16" height="16" src={ arrowsDownIcon } />
					Descending
				</span>
			),
			key: 'descending',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="16" height="16" src={ pinIcon } />
					Freeze Column
				</span>
			),
			key: 'freeze',
		},
		{
			label: (
				<span className="dropdown-header-content">
					<ReactSVG width="16" height="16" src={ hideIcon } />
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
								width="16"
								height="16"
								src={ chevronDownIcon }
							/>
						</a>
					</AntDropdown>
				</div>
			),
			render: ( text, record ) => {
				const isStarred =
					starredItems[ record.id ] !== undefined
						? starredItems[ record.id ]
						: '0';
				return (
					<div className="formgent-form-table-item-wrap">
						{ record.id }
						<ReactSVG
							width="16"
							height="16"
							src={ starIcon }
							className={ isStarred === '1' ? 'starred' : '' }
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
						<span className="formgent-column-action__icon">
							<ReactSVG
								width="16"
								height="16"
								src={ calendarIcon }
							/>
						</span>
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
								width="16"
								height="16"
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
							className="response-table__drawer__open"
							onClick={ () => {
								handleTableDrawer( record.id );
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
			key: 'user_email',
			dataIndex: 'user_email',
			title: () => (
				<div className="formgent-column-action">
					<span className="formgent-column-action__title">
						<span className="formgent-column-action__icon">
							<ReactSVG width="16" height="16" src={ userIcon } />
						</span>
						Submitted By
					</span>
					<AntDropdown
						menu={ {
							items: sortItems,
							onClick: ( item ) =>
								handleSortby( item, 'user_email' ),
						} }
						trigger={ [ 'click' ] }
						placement="bottomRight"
						overlayStyle={ { minWidth: '240px' } }
					>
						<a onClick={ ( e ) => e.preventDefault() }>
							<ReactSVG
								width="16"
								height="16"
								src={ ellipsisVIcon }
							/>
						</a>
					</AntDropdown>
				</div>
			),
			render: ( text, record ) => {
				return <div>{ record.user_email }</div>;
			},
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

	function handleTableChange( page ) {
		setHiddenColumns( [] );
		setFrozenColumns( [] );
		updateCurrentResponsePage( page?.current );
		fetchResponse( page );
	}

	function handleSearch( value ) {
		// Clear the previous debounce timeout if it exists
		if ( debounceTimeout.current ) {
			clearTimeout( debounceTimeout.current );
		}

		// Set a new timeout
		debounceTimeout.current = setTimeout( () => {
			setSearchItem( value );
		}, 300 );
	}

	// Handle Delete
	async function handleDelete( ids, source ) {
		if ( isResponseDeleting ) return;
		responseDeleteRequest();

		const deleteItems = source === 'drawer' ? ids : selectedRowKeys;
		const deleteResponse = await deleteData(
			addQueryArgs( `admin/responses?form_id=${ parseInt( id ) }`, {
				ids: deleteItems,
			} )
		);

		if ( deleteResponse ) {
			setTableDrawer( null );
			setSelectedRowKeys( [] );
			responseDeleteSuccess( deleteItems );
		} else {
			responseDeleteError();
		}
	}

	// Use effect to update
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
		const newColumns = customColumns.map( ( col ) => {
			return {
				...col,
				fixed: frozenColumns.includes( col.dataIndex ) ? 'left' : null,
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
							{ field?.icon ? (
								<span className="formgent-column-action__icon">
									<ReactSVG
										width="16"
										height="16"
										src={ field.icon }
									/>
								</span>
							) : null }
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
									width="16"
									height="16"
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
		const generatedColumns = generateCustomColumns(
			selected_fields,
			responses,
			fields
		);
		const allColumns = [ ...defaultColumns, ...generatedColumns ];

		setCustomColumns( allColumns );
	}, [
		selected_fields,
		responses,
		visibleColumns,
		starredItems,
		readStatusItems,
		filteredData,
	] );

	useEffect( () => {
		setVisibleColumns( selected_fields );
	}, [ selected_fields ] );

	useEffect( () => {
		console.log( 'Changed visibleColumns', visibleColumns );
		if ( isInitialRender.current ) {
			isInitialRender.current = false;
		} else {
			handleColumn();
		}
	}, [ visibleColumns ] );

	useEffect( () => {
		setTableDrawer( ( single_response && single_response[ 0 ] ) || null );
	}, [ single_response ] );

	useEffect( () => {
		setFilteredData( responses );
		responses?.forEach( ( response ) => {
			starredChangeSuccess( response.id, response.is_starred );
			readStatusChangeSuccess( response.id, response.is_read );
		} );

		console.log( 'response', responses );
	}, [ responses ] );

	useEffect( () => {
		fetchResponse();
		console.log( 'fetchResponse chk' );
	}, [ searchItem, readStatus, orderType ] );

	useEffect( () => {
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
					handleSearch={ handleSearch }
					activeTab={ activeTab }
					setActiveTab={ setActiveTab }
					visibleColumns={ visibleColumns }
					setVisibleColumns={ setVisibleColumns }
					responseFields={ responseFields }
					setResponseFields={ setResponseFields }
					setFieldColumnHide={ setFieldColumnHide }
					handleDelete={ handleDelete }
					downloadItems={ downloadItems() }
					handleDownload={ handleDownload }
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
					bordered
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
					handleTableDrawer={ handleTableDrawer }
					responseNotes={ responseNotes }
					setTableDrawer={ setTableDrawer }
					pagination={ single_response_pagination }
					handleDelete={ ( id ) => handleDelete( id, 'drawer' ) }
					handleStarred={ ( id, isStarredStatus ) =>
						handleStarred( id, isStarredStatus, 'drawer' )
					}
					handleRead={ ( id, isReadStatus ) =>
						handleRead( id, isReadStatus, 'drawer' )
					}
					handleDownload={ handleDownload }
					downloadItems={ downloadItems( 'drawer' ) }
					dateFormatOptions={ dateFormatOptions }
				/>
			) }
		</TableStyle>
	);
}
