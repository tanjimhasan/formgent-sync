import { useSelect } from '@wordpress/data';
import { Suspense, useState } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';

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

	const { useParams, Route, Routes, NavLink, useNavigate } =
		CommonReducer.routerComponents;

	const { id } = useParams();

	const settingsRoutes = applyFilters( 'formgent_settings_routes', [
		{
			path: '*',
			element: <General />,
		},
		{
			path: 'notifications',
			element: <Notifications />,
		},
	] );

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
