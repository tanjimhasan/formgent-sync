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
import { useEffect, useRef, useState } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import { CSVLink } from 'react-csv';
import ReactSVG from 'react-inlinesvg';
import { TableActionStyle, TableHeaderStyle, TableTabStyle } from './style';

// Icon
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
		responses,
		selectedRowKeys,
		setSelectedRowKeys,
		totalCompletedItems,
		totalPartialItems,
		activeTab,
		setActiveTab,
	} = props;

	const [ columnCheckedItems, setColumnCheckedItems ] = useState( {} );
	const [ csvExportData, setCSVExportData ] = useState( [] );

	const csvLinkRef = useRef();

	const apiResponse = {
		form: {
			content:
				'{"fields":[{"id":"hxtTKxpkE7","type":"long_text","name":"long_text1","fields":[{"id":"I3VvinDPZcjs","type":"long_text","label":"Long Text","placeholder":"Short text"}],"general_option":{"label":"Long text","label_alignment":"left","format":"full","validations":{"required":{"value":"0","message":"This field is required","global_message":"This field is required"}}},"advance_option":{"default_value":"","css_class":"","logics":{"is_advance_logic_active":"0"}}},{"id":"PX0C1cmMmn","type":"names","name":"names3","fields":[{"id":"AWxmV-VH7GAq","type":"first_name","label":"First Name","placeholder":"First Name"},{"id":"jPdT8rXRTUhU","label":"Middle Name","type":"middle_name","placeholder":"Middle Name"},{"id":"PtCJq9pPOP94","type":"last_name","label":"Last Name","placeholder":"Last Name"}],"general_option":{"label":"","label_alignment":"left","format":"full","validations":{"required":{"value":"0","message":"This field is required","global_message":"This field is required"}}},"advance_option":{"default_value":"","css_class":"","logics":{"is_advance_logic_active":"0"}}},{"id":"nnlUiJGJ3U","type":"short_text","name":"short_text2","fields":[{"id":"5AqA7B52ZbrK","type":"short_text","label":"Short Text","placeholder":"Short text"}],"general_option":{"label":"Short text","label_alignment":"left","format":"full","validations":{"required":{"value":"0","message":"This field is required","global_message":"This field is required"}}},"advance_option":{"default_value":"","css_class":"","logics":{"is_advance_logic_active":"0"}}}]}',
		},
		responses: [
			{
				id: '1',
				form_id: '3',
				is_read: '0',
				is_completed: '0',
				is_starred: '1',
				ip: null,
				device: null,
				browser: null,
				browser_version: null,
				created_by: null,
				created_at: '2024-06-20 19:22:27',
				updated_at: '2024-06-20 19:25:08',
				answers: [],
			},
			{
				id: '2',
				form_id: '3',
				is_read: '0',
				is_completed: '1',
				is_starred: '0',
				ip: '127.0.0.1',
				device: null,
				browser: null,
				browser_version: null,
				created_by: '1',
				created_at: '2024-06-20 20:18:37',
				updated_at: null,
				answers: [
					{
						id: '1',
						response_id: '2',
						field_id: 'hxtTKxpkE7',
						value: 'Bfficia culpa nisi u',
						children: [],
					},
					{
						id: '2',
						response_id: '2',
						field_id: 'nnlUiJGJ3U',
						value: 'asdfkasd;fas',
						children: [],
					},
				],
			},
			{
				id: '3',
				form_id: '3',
				is_read: '0',
				is_completed: '1',
				is_starred: '0',
				ip: '127.0.0.1',
				device: null,
				browser: null,
				browser_version: null,
				created_by: '1',
				created_at: '2024-06-20 20:19:45',
				updated_at: null,
				answers: [
					{
						id: '3',
						response_id: '3',
						field_id: 'hxtTKxpkE7',
						value: 'Officia culpa nisi u',
						children: [],
					},
					{
						id: '4',
						response_id: '3',
						field_id: 'nnlUiJGJ3U',
						value: 'asdfkasd;fas',
						children: [],
					},
				],
			},
		],
	};

	// Handle Tab Operations
	function handleTabChange( key ) {
		setActiveTab( key );
	}

	function handleExportCSV( e ) {
		e.stopPropagation();
		setCSVExportData( PrepareExportData( apiResponse ) );
	}

	function handleDownload( { key } ) {
		if ( key === 'pdf' ) {
			return exportToPDF( apiResponse, 'formgent-response' );
		} else if ( key === 'excel' ) {
			return exportToSpreadsheet( apiResponse, 'formgent-response' );
		} else {
			return;
		}
	}

	function handleSearch( value ) {
		console.log( 'Search:', value );
	}

	function handlePrint() {
		console.log( 'Print clicked' );
	}

	function handleDelete() {
		console.log( 'Delete clicked', selectedRowKeys );
	}

	function handleFilter() {
		console.log( 'Filter clicked' );
	}

	function handleRefresh() {
		console.log( 'Refresh clicked' );
	}

	// Handle column checkbox change
	function handleColumnCheckbox( e, name ) {
		setColumnCheckedItems( {
			...columnCheckedItems,
			[ name ]: e.target.checked,
		} );
	}

	function handleBulkSelection() {
		setSelectedRowKeys( responses?.map( ( item ) => item.id ) );
	}

	function handleClearSelection() {
		setSelectedRowKeys( [] );
	}

	const columnItems = applyFilters( 'formgent_response_column', [
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
	] );

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

	useEffect( () => {
		if ( csvExportData.length ) {
			csvLinkRef.current?.link.click();
		}
	}, [ csvExportData ] );

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
								{ columnItems
									.map( ( item ) => item.label )
									.slice( 1, 4 ) }
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
