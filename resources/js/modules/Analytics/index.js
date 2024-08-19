import { useEffect, lazy } from '@wordpress/element';
import { resolveSelect, useSelect, useDispatch } from '@wordpress/data';
import { AnalyticsStyle } from './style';
import AnalyticStats from './components/AnalyticStats';
import AnalyticsProCta from './components/AnalyticsProCta';
import { registerIsProActive } from '@formgent/helper/registerApplyFilter';
import { applyFilters } from '@wordpress/hooks';
const FormHeader = lazy( () => import( '@formgent/components/FormHeader' ) );

function Analytics( props ) {
	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );

	const { useParams } = CommonReducer?.routerComponents;
	const { id: formId } = useParams();
	const analyticsSummary = useSelect(
		( select ) => {
			return select( 'formgent' ).getAnalyticsSummary( formId );
		},
		[ formId ]
	);
	const isProActive = registerIsProActive();

	const {
		total_views,
		total_stared,
		total_finished,
		average_completion_time,
	} = analyticsSummary;

	//const FilteredAnalyticsComponent = applyFilters('formgent_response_analytics', null);

	return (
		<>
			<FormHeader resultHeader />
			<AnalyticsStyle>
				<div className="formgent-analytics-container">
					<AnalyticStats
						totalView={ total_views }
						totalStarted={ total_stared }
						totalFinished={ total_finished }
						timeToComplete={ average_completion_time }
					/>
				</div>
				{ ! isProActive && <AnalyticsProCta /> }
				{ /* { FilteredAnalyticsComponent && <FilteredAnalyticsComponent /> } */ }
			</AnalyticsStyle>
		</>
	);
}

export default function AnalyticsModule( props ) {
	return <Analytics { ...props } />;
}
