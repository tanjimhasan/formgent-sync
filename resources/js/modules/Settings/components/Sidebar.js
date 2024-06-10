import { AntMenu } from '@formgent/components';
import { __ } from '@wordpress/i18n';
import { SettingsSidebarStyle } from './style';

export default function Sidebar( props ) {
	const { useNavigate, useLocation, navItems } = props;
	const navigate = useNavigate();
	const location = useLocation();

	const activeSidebarNav = location.pathname.split( 'settings/' )[ 1 ];
	// Function to determine if a menu item should be active
	const isActive = ( path ) => {
		return activeSidebarNav === path;
	};

	function convertMenuFormat( data ) {
		const menuItems = {};

		// Iterate through the data to organize menu items
		data.forEach( ( item ) => {
			const pathParts = item.path.split( '/' );
			const parentKey = pathParts[ 0 ];

			// If the path contains more than one part
			if ( pathParts.length > 1 ) {
				const childKey = pathParts[ 1 ];

				// Check if parent already exists in menuItems
				if ( ! menuItems[ parentKey ] ) {
					// If not, create the parent menu item
					menuItems[ parentKey ] = {
						key: parentKey,
						label:
							parentKey.charAt( 0 ).toUpperCase() +
							parentKey.slice( 1 ), // Capitalize the first letter
						children: [],
					};
				}

				// Add the child menu item to the parent
				menuItems[ parentKey ].children.push( {
					label: item.label,
					key: `${ parentKey }/${ childKey }`,
				} );
			} else {
				// If there's only one part in the path, it's a standalone menu item
				menuItems[ item.key ] = {
					key: item.key,
					label: item.label,
				};
			}
		} );

		// Convert the menuItems object to an array
		const result = Object.values( menuItems );

		return result;
	}

	const sidebarNavItems = navItems && convertMenuFormat( navItems );

	// Find the key of the menu item that matches the current pathname
	const activeItem = navItems.find( ( item ) => isActive( item.path ) );
	const defaultSelectedChild = activeItem?.path;
	const defaultSelectedParent = activeItem?.path?.split( '/' )[ 0 ];

	const handleMenuClick = ( e ) => {
		// Navigate to the selected route
		navigate( e.key );
	};

	return (
		<SettingsSidebarStyle className="formgent-settings-sider">
			<div className="formgent-settings-sider__top">
				<h3 className="formgent-settings-sider__title">
					{ __( 'Share Settings', 'formgent' ) }
				</h3>
			</div>
			<AntMenu
				defaultSelectedKeys={ [ defaultSelectedChild || 'general' ] }
				defaultOpenKeys={ [ defaultSelectedParent ] }
				mode="inline"
				items={ sidebarNavItems }
				onClick={ handleMenuClick }
				className="formgent-settings-sider__nav"
			/>
		</SettingsSidebarStyle>
	);
}
