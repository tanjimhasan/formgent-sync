import { useSelect } from '@wordpress/data';
import { useState } from '@wordpress/element';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Header from '../Editor/components/Header';
import General from './components/General';
import Integrations from './components/Integrations';
import Notifications from './components/Notifications';
import Quiz from './components/Quiz';
import { SettingsContentStyle, SettingsSidebarStyle } from './style';

function Settings( props ) {
	const [ uiState, setUiState ] = useState( {
		isInserterActive: false,
	} );
	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );

	const { useParams } = CommonReducer.routerComponents;

	const { id } = useParams();

	return (
		<div className="formgent-editor-wrap">
			<Header id={ id } uiState={ uiState } setUiState={ setUiState } />
			<Tabs
				className="formgent-editor-wrap__content"
				style={ { display: 'flex' } }
			>
				<SettingsSidebarStyle className="formgent-settings-sider">
					<div className="formgent-settings-sider__top">
						<h3 className="formgent-settings-sider__title">
							Form Settings
						</h3>
					</div>
					<TabList className="formgent-settings-sider__nav">
						<Tab>General Settings</Tab>
						<Tab>Notifications</Tab>
						<Tab>Quiz Mode</Tab>
						<Tab>Integrations</Tab>
					</TabList>
				</SettingsSidebarStyle>
				<SettingsContentStyle
					className="formgent-editor-wrap__content"
					style={ { display: 'flex' } }
				>
					<TabPanel>
						<General />
					</TabPanel>
					<TabPanel>
						<Notifications />
					</TabPanel>
					<TabPanel>
						<Quiz />
					</TabPanel>
					<TabPanel>
						<Integrations />
					</TabPanel>
				</SettingsContentStyle>
			</Tabs>
		</div>
	);
}

export default function SettingsModule( props ) {
	return <Settings { ...props } />;
}
