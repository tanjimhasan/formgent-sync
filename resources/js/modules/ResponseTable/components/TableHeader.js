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
	AntTabs,
} from '@formgent/components';
import { useState } from '@wordpress/element';
import { TableActionStyle, TableHeaderStyle, TableTabStyle } from './style';

const { TabPane } = AntTabs;

export default function TableHeader() {
	const [ activeTab, setActiveTab ] = useState( 'completed' );

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
		column2: true,
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
					Screen name
				</AntCheckbox>
			),
			key: 'column1',
		},
		{
			label: (
				<AntCheckbox
					checked={ checkedItems.column2 }
					onChange={ ( e ) => handleCheckboxChange( e, 'column2' ) }
				>
					Screen name
				</AntCheckbox>
			),
			key: 'column2',
		},
		{
			label: (
				<AntCheckbox
					checked={ checkedItems.column3 }
					onChange={ ( e ) => handleCheckboxChange( e, 'column3' ) }
				>
					Screen name
				</AntCheckbox>
			),
			key: 'column3',
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

	return (
		<TableHeaderStyle className="formgent-table-header">
			<TableTabStyle className="formgent-table-header__tab">
				<AntTabs activeKey={ activeTab } onChange={ handleTabChange }>
					<TabPane tab="Completed" key="completed">
						Completed Tab
					</TabPane>
					<TabPane tab="Partial" key="partial">
						Partial Tab
					</TabPane>
				</AntTabs>
			</TableTabStyle>
			<TableActionStyle className="formgent-table-header__action">
				<AntInput
					placeholder="Search responses"
					prefix={ <SearchOutlined /> }
					onPressEnter={ ( e ) => handleSearch( e.target.value ) }
					className="formgent-table-header__search"
				/>
				<AntButton icon={ <FilterOutlined /> } onClick={ handleFilter }>
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
	);
}
