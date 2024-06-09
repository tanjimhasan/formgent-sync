import { __ } from '@wordpress/i18n';
import { SettingsSidebarStyle } from './style';

export default function Sidebar( props ) {
	const { NavLink } = props;

	return (
		<SettingsSidebarStyle className="formgent-settings-sider">
			<div className="formgent-settings-sider__top">
				<h3 className="formgent-settings-sider__title">
					{ __( 'Share Settings', 'formgent' ) }
				</h3>
			</div>
			<nav className="formgent-settings-sider__nav">
				<NavLink to="general">
					{ __( 'General Settings', 'formgent' ) }
				</NavLink>
				<NavLink to="notifications">
					{ __( 'Notifications', 'formgent' ) }
				</NavLink>
				<NavLink to="quiz">{ __( 'Quiz Mode', 'formgent' ) }</NavLink>
				<NavLink to="integrations">
					{ __( 'Integrations', 'formgent' ) }
				</NavLink>
			</nav>
		</SettingsSidebarStyle>
	);
}
