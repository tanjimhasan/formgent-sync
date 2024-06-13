import FormHeader from '@formgent/components/FormHeader';
import ResponseTableModule from '@formgent/modules/ResponseTable';
import { useSelect } from '@wordpress/data';
import { Suspense } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import ResultsHeader from './components/Header';

function Results() {
	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );

	console.log( 'Results CommonReducer', CommonReducer );

	const { useParams, Route, Routes, useNavigate } =
		CommonReducer.routerComponents;
	const { id } = useParams();

	const resultsRoutes = applyFilters( 'formgent_results_routes', [
		{
			path: '*',
			element: <ResponseTableModule />,
		},
		{
			path: 'summary',
			element: <ResponseTableModule />,
		},
		{
			path: 'analytics',
			element: <ResponseTableModule />,
		},
	] );

	console.log( 'resultsRoutes', resultsRoutes );

	return (
		<>
			<FormHeader id={ id } useNavigate={ useNavigate } />
			<div className="formgent-editor-wrap">
				<ResultsHeader id={ id } />
				<Suspense fallback={ <>Loading...</> }>
					<Routes>
						{ resultsRoutes.map( ( routeItem, index ) => {
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
		</>
	);
}

export default function ResultsModule( props ) {
	return <Results { ...props } />;
}
