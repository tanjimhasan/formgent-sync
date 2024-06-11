import { useSelect } from '@wordpress/data';
import { Suspense, useState } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';

import IntegrationsChild1 from '@formgent/admin/pages/Settings/IntegrationsChild1';
import IntegrationsChild2 from '@formgent/admin/pages/Settings/IntegrationsChild2';
import IntegrationsChild3 from '@formgent/admin/pages/Settings/IntegrationsChild3';
import FormHeader from '@formgent/components/FormHeader';
import General from './components/General';
import Notifications from './components/Notifications';
import Sidebar from './components/Sidebar';

function Settings( props ) {
	const [ uiState, setUiState ] = useState( {
		isInserterActive: false,
	} );
	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );

	console.log( 'Settings CommonReducer', CommonReducer );

	const { useParams, Route, Routes, NavLink, useNavigate, useLocation } =
		CommonReducer.routerComponents;

	const { id } = useParams();

	const settingsRoutes = applyFilters( 'formgent_settings_routes', [
		{
			key: 'general',
			label: 'General Settings',
			path: '*',
			element: <General />,
		},
		{
			key: 'notifications',
			label: 'Notifications',
			path: 'notifications',
			element: <Notifications />,
		},
	] );

	console.log( 'settingsRoutes', settingsRoutes );

	return (
		<div className="formgent-editor-wrap">
			<FormHeader
				id={ id }
				useNavigate={ useNavigate }
				uiState={ uiState }
				setUiState={ setUiState }
			/>
			<div
				className="formgent-editor-wrap__content"
				style={ { display: 'flex' } }
			>
				<Sidebar
					NavLink={ NavLink }
					useNavigate={ useNavigate }
					useLocation={ useLocation }
					navItems={ settingsRoutes }
				/>

				<Suspense fallback={ <></> }>
					<Routes>
						{ /* { settingsRoutes.map( ( routeItem, index ) => {
							return (
								<Route
									key={ index }
									path={ routeItem.path }
									element={ routeItem.element }
								/>
							);
						} ) } */ }
						<Route key="general" path="*" element={ <General /> } />
						<Route
							key="notifications"
							path="notifications"
							element={ <Notifications /> }
						/>
						<Route
							key="integrations/child1"
							path="integrations/child1"
							element={ <IntegrationsChild1 /> }
						/>
						<Route
							key="integrations/child2"
							path="integrations/child2"
							element={ <IntegrationsChild2 /> }
						/>
						<Route
							key="integrations/child3"
							path="integrations/child3"
							element={ <IntegrationsChild3 /> }
						/>
					</Routes>
				</Suspense>
			</div>
		</div>
	);
}

export default function SettingsModule( props ) {
	return <Settings { ...props } />;
}
