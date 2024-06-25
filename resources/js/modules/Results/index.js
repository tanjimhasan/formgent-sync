import FormHeader from '@formgent/components/FormHeader';
import ResponseTableModule from '@formgent/modules/ResponseTable';
import { useSelect } from '@wordpress/data';
import { Suspense } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import ResultsHeader from './components/Header';
import { ResultWrapStyle } from './style';

function Results() {
	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );

	const { useParams, Navigate, Route, Routes, useNavigate } =
		CommonReducer.routerComponents;
	const { id } = useParams();

	const resultsRoutes = applyFilters( 'formgent_results_routes', [
		{
			key: 'results',
			path: '*',
			element: <Navigate to="responses" />,
		},
		{
			key: 'responses',
			path: 'responses',
			element: <ResponseTableModule />,
		},
		{
			key: 'summary',
			path: 'summary',
			element: <ResponseTableModule />,
		},
		{
			key: 'analytics',
			path: 'analytics',
			element: <ResponseTableModule />,
		},
	] );

	return (
		<>
			<FormHeader id={ id } useNavigate={ useNavigate } />
			<ResultWrapStyle className="formgent-result-wrap">
				<ResultsHeader id={ id } />
				<Suspense fallback={ <>Loading...</> }>
					<Routes>
						{ resultsRoutes.map( ( routeItem ) => {
							return (
								<Route
									key={ routeItem.key }
									path={ routeItem.path }
									element={ routeItem.element }
								/>
							);
						} ) }
					</Routes>
				</Suspense>
			</ResultWrapStyle>
		</>
	);
}

export default function ResultsModule( props ) {
	return <Results { ...props } />;
}
