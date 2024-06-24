import { SearchOutlined } from '@ant-design/icons';
import {
	AntButton,
	AntCheckbox,
	AntDropdown,
	AntInput,
	AntTabs,
} from '@formgent/components';
import { useState } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import ReactSVG from 'react-inlinesvg';
import { TableActionStyle, TableHeaderStyle, TableTabStyle } from './style';

// Icon
import attachmentIcon from '@icon/attachment.svg';
import checkIcon from '@icon/check-square.svg';
import chevronDownIcon from '@icon/chevron-down.svg';
import closeIcon from '@icon/close.svg';
import columnIcon from '@icon/column-3.svg';
import downloadIcon from '@icon/download.svg';
import fileIcon from '@icon/file.svg';
import filterIcon from '@icon/filter-lines.svg';
import printIcon from '@icon/print.svg';
import refreshIcon from '@icon/refresh.svg';
import trashIcon from '@icon/trash.svg';

export default function TableHeader( props ) {
	const {
		responseTableData,
		selectedRowKeys,
		setSelectedRowKeys,
		totalCompletedItems,
		totalPartialItems,
		activeTab,
		setActiveTab,
	} = props;

	const [ columnCheckedItems, setColumnCheckedItems ] = useState( {} );

	// Handle Tab Operations
	function handleTabChange( key ) {
		setActiveTab( key );
	}

	function handleDownload( { key } ) {
		console.log( 'Download clicked', key );
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
		setSelectedRowKeys( responseTableData.map( ( item ) => item.id ) );
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
			label: `Completed (${ totalCompletedItems })`,
		},
		{
			key: 'partial',
			label: `Partial (${ totalPartialItems })`,
		},
	];

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
						<AntButton onClick={ ( e ) => e.preventDefault() }>
							<ReactSVG
								width="14"
								height="14"
								src={ downloadIcon }
							/>
						</AntButton>
					</AntDropdown>
					<AntButton onClick={ handlePrint }>
						<ReactSVG width="14" height="14" src={ printIcon } />
					</AntButton>
					<AntButton
						onClick={ handleDelete }
						className="formgent-table-header__delete"
					>
						<ReactSVG width="14" height="14" src={ trashIcon } />
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
					<ReactSVG width="14" height="14" src={ filterIcon } />
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
	);
}
