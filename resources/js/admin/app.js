import { useDispatch } from '@wordpress/data';
import { Suspense, useEffect, useState } from '@wordpress/element';
import {
	HashRouter,
	Link,
	NavLink,
	Route,
	Routes,
	useLocation,
	useNavigate,
	useParams,
} from 'react-router-dom';

import { applyFilters } from '@wordpress/hooks';
// import { ThemeProvider } from 'styled-components';
import { SlotFillProvider } from '@wordpress/components';
import { getPlugins } from '@wordpress/plugins';
import AddForm from './pages/AddForm/index.js';
import Editor from './pages/Editor/index.js';
import FormTable from './pages/FormTable/index.js';
import Settings from './pages/Settings/index.js';

export default function App() {
	const { setRouterState } = useDispatch( 'formgent' );
	const [ dir, setDir ] = useState( 'ltr' );
	const theme = {
		direction: dir,
	};

	const Plugins = () => {
		return getPlugins().map( ( plugin ) => {
			const Component = plugin.render;
			return <Component />;
		} );
	};

	useEffect( () => {
		if ( document.documentElement.getAttribute( 'dir' ) === 'rtl' ) {
			setDir( 'rtl' );
		} else {
			setDir( 'ltr' );
		}
	}, [] );

	useEffect( () => {
		if ( ! setRouterState ) {
			return;
		}
		setRouterState( {
			HashRouter,
			Routes,
			Route,
			Link,
			NavLink,
			useNavigate,
			useParams,
			useLocation,
		} );
	}, [ setRouterState ] );

	const adminRoutes = applyFilters( 'formgent_admin_routes', [
		{
			path: '/*',
			element: <FormTable />,
		},
		{
			path: '/forms/:id/edit',
			element: <Editor />,
		},
		{
			path: '/forms/:id/settings/*',
			element: <Settings />,
		},
		{
			path: '/forms/form-new/:type',
			element: <AddForm />,
		},
	] );

	return (
		<div className="formgent-app-wrap">
			<SlotFillProvider>
				<Plugins />
				<HashRouter>
					<Suspense fallback={ <></> }>
						{ /* <ThemeProvider theme={ theme }> */ }
						{ /* <ConfigProvider
						theme={ {
							token: {
								// Seed Tokens
								colorPrimary: '#000000',
								borderRadius: 2,

								// Alias Token
								colorBgContainer: '#f6ffed',
							},
						} }
					> */ }
						<Routes>
							{ adminRoutes.map( ( routeItem, index ) => {
								return (
									<Route
										key={ index }
										path={ routeItem.path }
										element={ routeItem.element }
									></Route>
								);
							} ) }
						</Routes>
						{ /* </ConfigProvider> */ }
						{ /* </ThemeProvider> */ }
					</Suspense>
				</HashRouter>
			</SlotFillProvider>
		</div>
	);
}
