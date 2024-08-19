import { useEffect, lazy } from '@wordpress/element';
import { resolveSelect, useSelect, useDispatch } from '@wordpress/data';
import { AnalyticsStyle } from './style';
import AnalyticStats from './components/AnalyticStats';
import AnalyticsProCta from './components/AnalyticsProCta';
import { registerIsProActive } from '@formgent/helper/registerApplyFilter';
//import { applyFilters } from '@wordpress/hooks';
const FormHeader = lazy( () => import( '@formgent/components/FormHeader' ) );
import CompletedSubmissionsChart from './components/CompletedSubmissionsChart';
import QuestionDropOff from './components/QuestionDropOff';

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

	const analyticSubmissionData = useSelect(
		( select ) => {
			return select( 'formgent' ).getAnalyticsSubmission(
				formId,
				'2024-01-01',
				'2024-12-31'
			);
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

	const handleChartDatepicker = ( dates, dateStrings ) => {
		const [ dateFrom, dateTo ] = dateStrings;
		resolveSelect( 'formgent' ).getAnalyticsSubmission(
			formId,
			dateFrom,
			dateTo,
			Date.now()
		);
	};

	const questionDropOffData = useSelect(
		( select ) => {
			return select( 'formgent' ).getQuestionDropOff( formId );
		},
		[ formId ]
	);

	console.log( questionDropOffData );

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
					<CompletedSubmissionsChart
						data={ analyticSubmissionData }
						handleChartDatepicker={ handleChartDatepicker }
					/>
					<QuestionDropOff
						questionDropOffData={ questionDropOffData }
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
