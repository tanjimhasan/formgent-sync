import FormHeader from '@formgent/components/FormHeader';
import ResponseTableModule from '@formgent/modules/ResponseTable';
import { useSelect } from '@wordpress/data';
import { Suspense } from '@wordpress/element';
import { applyFilters } from '@wordpress/hooks';
import ReactSVG from 'react-inlinesvg';
import { ResultWrapStyle } from './style';

// Icon
import chartIcon from '@icon/line-chart.svg';
import pieIcon from '@icon/pie-chart.svg';
import rowIcon from '@icon/row-3.svg';

function Results() {
	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );

	const { useParams, Navigate, NavLink, Route, Routes, useNavigate } =
		CommonReducer.routerComponents;
	const { id } = useParams();

	const { SingleFormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getSingleFormState();
	}, [] );

	const { responses } = SingleFormReducer;

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

	const results = `/forms/${ id }/results`;

	const navItems = (
		<>
			<NavLink
				to={ `${ results }/responses` }
				className="formgent-results-header__nav__link"
			>
				<ReactSVG src={ rowIcon } width="18" height="18" />
				Responses { responses && `(${ responses.length })` }
			</NavLink>
			<NavLink
				to={ `${ results }/summary` }
				className="formgent-results-header__nav__link"
			>
				<ReactSVG src={ pieIcon } width="18" height="18" />
				Summary
			</NavLink>
			<NavLink
				to={ `${ results }/analytics` }
				className="formgent-results-header__nav__link"
			>
				<ReactSVG src={ chartIcon } width="18" height="18" />
				Analytics
			</NavLink>
		</>
	);

	return (
		<>
			<FormHeader
				id={ id }
				useNavigate={ useNavigate }
				navItems={ navItems }
			/>
			<ResultWrapStyle className="formgent-result-wrap">
				{ /* <ResultsHeader id={ id } /> */ }
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
