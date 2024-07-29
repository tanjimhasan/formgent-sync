import {
	PrepareExportData,
	exportToPDF,
	exportToSpreadsheet,
} from '@formgent/admin/export/response';
import {
	AntButton,
	AntCheckbox,
	AntDropdown,
	AntInput,
	AntTabs,
} from '@formgent/components';
import { useSelect } from '@wordpress/data';
import { useEffect, useRef, useState } from '@wordpress/element';
import { CSVLink } from 'react-csv';
import ReactSVG from 'react-inlinesvg';
import { TableActionStyle, TableHeaderStyle, TableTabStyle } from './style';

// Icon
import fetchData from '@formgent/helper/fetchData';
import checkIcon from '@icon/check-square.svg';
import chevronDownIcon from '@icon/chevron-down.svg';
import closeIcon from '@icon/close.svg';
import columnIcon from '@icon/column-3.svg';
import downloadIcon from '@icon/download.svg';
import fileIcon from '@icon/file.svg';
import filterIcon from '@icon/filter-lines.svg';
import printIcon from '@icon/print.svg';
import refreshIcon from '@icon/refresh.svg';
import searchIcon from '@icon/search.svg';
import trashIcon from '@icon/trash.svg';

export default function TableHeader( props ) {
	const {
		id,
		selectedRowKeys,
		setSelectedRowKeys,
		totalCompletedItems,
		totalPartialItems,
		activeTab,
		setActiveTab,
	} = props;

	const [ columnCheckedItems, setColumnCheckedItems ] = useState( {} );
	const [ csvExportData, setCSVExportData ] = useState( [] );
	const [ responseFields, setResponseFields ] = useState( [] );
	const [ formResponse, setFormResponse ] = useState( [] );

	// Retrieve from the store
	const { SingleFormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getSingleFormState();
	}, [] );

	const { fields } = SingleFormReducer;

	const csvLinkRef = useRef();

	// Handle Tab Change
	function handleTabChange( key ) {
		setActiveTab( key );
	}

	// Handle Create Export Data
	async function handleCreateExportData() {
		const responsesToExport =
			selectedRowKeys.length > 0
				? selectedRowKeys
				: responses.map( ( item ) => item.id );
		console.log( 'responsesToExport', responsesToExport );
		return await fetchData(
			`admin/responses/export?form_id=${ id }&response_ids[]=${ responsesToExport }`
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

	// Handle Search
	function handleSearch( value ) {
		console.log( 'Search:', value );
	}

	// Handle Print
	function handlePrint() {
		console.log( 'Print clicked' );
	}

	// Handle Delete
	function handleDelete() {
		console.log( 'Delete clicked', selectedRowKeys );
	}

	// Handle Filter
	function handleFilter() {
		console.log( 'Filter clicked' );
	}

	// Handle Refresh
	function handleRefresh() {
		console.log( 'Refresh clicked' );
	}

	// Handle column checkbox change
	function handleColumnCheckbox( e, id ) {
		setColumnCheckedItems( {
			...columnCheckedItems,
			[ id ]: e.target.checked,
		} );
	}

	// Handle Bulk Selection
	function handleBulkSelection() {
		setSelectedRowKeys( responses?.map( ( item ) => item.id ) );
	}

	// Handle Clear Selection
	function handleClearSelection() {
		setSelectedRowKeys( [] );
	}

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

	// Tab Items
	const tabItems = [
		{
			key: 'completed',
			label: `Completed (${ totalCompletedItems })`,
		},
		{
			key: 'partial',
			label: `Partial (${ totalPartialItems })`,
		},
	];

	// Export CSV Data
	useEffect( () => {
		if ( csvExportData.length ) {
			csvLinkRef.current?.link.click();
		}
	}, [ csvExportData ] );

	useEffect( () => {
		setResponseFields( fields );
	}, [ fields ] );

	return (
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
							icon={
								<ReactSVG
									width="14"
									height="14"
									src={ downloadIcon }
								/>
							}
						/>
					</AntDropdown>
					<AntButton
						onClick={ handlePrint }
						icon={
							<ReactSVG
								width="14"
								height="14"
								src={ printIcon }
							/>
						}
					/>
					<AntButton
						onClick={ handleDelete }
						icon={
							<ReactSVG
								width="14"
								height="14"
								src={ trashIcon }
							/>
						}
						className="formgent-table-header__delete"
					/>
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
					prefix={
						<ReactSVG width="14" height="14" src={ searchIcon } />
					}
					onChange={ ( e ) => handleSearch( e.target.value ) }
					className="formgent-table-header__search"
				/>

				<AntButton
					onClick={ handleFilter }
					icon={
						<ReactSVG width="14" height="14" src={ filterIcon } />
					}
				>
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
								{ responseFields?.map( ( field, index ) => {
									return (
										<AntCheckbox
											key={ index }
											checked={
												columnCheckedItems[ field.id ]
											}
											onChange={ ( e ) =>
												handleColumnCheckbox(
													e,
													field.id
												)
											}
										>
											{ field.label }
										</AntCheckbox>
									);
								} ) }
							</div>
						</div>

						<AntDropdown
							menu={ {
								items: downloadItems,
								onClick: handleDownload,
							} }
							placement="bottomRight"
						>
							<AntButton
								onClick={ ( e ) => e.preventDefault() }
								icon={
									<ReactSVG
										width="14"
										height="14"
										src={ downloadIcon }
									/>
								}
							/>
						</AntDropdown>

						<AntButton
							onClick={ handleRefresh }
							icon={
								<ReactSVG
									width="14"
									height="14"
									src={ refreshIcon }
								/>
							}
						/>
					</>
				) : (
					''
				) }
			</TableActionStyle>
		</TableHeaderStyle>
	);
}
