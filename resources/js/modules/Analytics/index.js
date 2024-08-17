import { useEffect, lazy } from '@wordpress/element';
import { resolveSelect, useSelect, useDispatch } from '@wordpress/data';
import { AnalyticsStyle } from './style';
import AnalyticStats from './components/AnalyticStats';
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
	const {
		total_views,
		total_stared,
		total_finished,
		average_completion_time,
	} = analyticsSummary;

	return (
		<>
			<FormHeader resultHeader />
			<AnalyticsStyle>
				<div className="formgent-analytics-container">
					<AnalyticStats
						totalView={ total_views }
						totalStarted={ total_stared }
						totalFinished={ total_finished }
						completionRate={ '80%' }
						timeToComplete={ average_completion_time }
					/>
				</div>
			</AnalyticsStyle>
		</>
	);
}

export default function AnalyticsModule( props ) {
	return <Analytics { ...props } />;
}
