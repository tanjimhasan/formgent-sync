import { SettingsSidebarStyle } from './style';

export default function Sidebar( props ) {
	const { NavLink } = props;

	return (
		<SettingsSidebarStyle className="formgent-settings-sider">
			<div className="formgent-settings-sider__top">
				<h3 className="formgent-settings-sider__title">
					Share Settings
				</h3>
			</div>
			<nav className="formgent-settings-sider__nav">
				<NavLink to="general">General Settings</NavLink>
				<NavLink to="notifications">Notifications</NavLink>
				<NavLink to="quiz">Quiz Mode</NavLink>
				<NavLink to="integrations">Integrations</NavLink>
			</nav>
		</SettingsSidebarStyle>
	);
}
