import {
	ColumnHeightOutlined,
	DownOutlined,
	DownloadOutlined,
	FilterOutlined,
	ReloadOutlined,
	SearchOutlined,
} from '@ant-design/icons';
import { AntButton, AntDropdown, AntInput } from '@formgent/components';
import AntTabs from '@formgent/components/Tabs';
import { useState } from '@wordpress/element';
import { TableActionStyle, TableHeaderStyle, TableTabStyle } from './style';

const { TabPane } = AntTabs;

export default function TableHeader( props ) {
	const { data, selectedRowKeys, setSelectedRowKeys } = props;

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

	const handleColumnToggle = () => {
		// Implement column toggle functionality
		console.log( 'Column toggle clicked' );
	};

	const handleDownload = () => {
		// Implement download functionality
		console.log( 'Download clicked' );
	};

	const handleRefresh = () => {
		// Implement refresh functionality
		console.log( 'Refresh clicked' );
	};

	const columnItems = [
		{
			label: 'Menu 1',
			key: 'menu-1',
		},
		{
			label: 'Menu 2',
			key: 'menu-2',
		},
		{
			label: 'Menu 3',
			key: 'menu-3',
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
