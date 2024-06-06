import { useSelect } from '@wordpress/data';
import { Suspense, useState } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';

import Header from '../Editor/components/Header';
import General from './components/General';
import Integrations from './components/Integrations';
import Notifications from './components/Notifications';
import Quiz from './components/Quiz';
import Sidebar from './components/Sidebar';

function Settings( props ) {
	const [ uiState, setUiState ] = useState( {
		isInserterActive: false,
	} );
	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );

	const { useParams, Route, Routes, NavLink, useNavigate } =
		CommonReducer.routerComponents;

	const { id } = useParams();

	const settingsRoutes = applyFilters( 'formgent_settings_routes', [
		{
			path: '*',
			element: <General />,
		},
		{
			path: 'integrations',
			element: <Integrations />,
		},
		{
			path: 'notifications',
			element: <Notifications />,
		},
		{
			path: 'quiz',
			element: <Quiz />,
		},
	] );

	return (
		<div className="formgent-editor-wrap">
			<Header
				id={ id }
				useNavigate={ useNavigate }
				uiState={ uiState }
				setUiState={ setUiState }
			/>
			<div
				className="formgent-editor-wrap__content"
				style={ { display: 'flex' } }
			>
				<Sidebar NavLink={ NavLink } />

				<Suspense fallback={ <></> }>
					<Routes>
						{ settingsRoutes.map( ( routeItem, index ) => {
							return (
								<Route
									key={ index }
									path={ routeItem.path }
									element={ routeItem.element }
								/>
							);
						} ) }
					</Routes>
				</Suspense>
			</div>
		</div>
	);
}

export default function SettingsModule( props ) {
	return <Settings { ...props } />;
}
