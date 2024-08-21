import { lazy } from '@wordpress/element';
import { resolveSelect, useSelect } from '@wordpress/data';
import { AnalyticsStyle } from './style';
import { registerIsProActive } from '@formgent/helper/registerApplyFilter';
import AnalyticStats from './components/AnalyticStats';
import AnalyticsProCta from './components/AnalyticsProCta';
import AnalyticsChart from '@formgent/admin/Slots/AnalyticsChart';
import QuestionsDropOff from '@formgent/admin/Slots/QuestionsDropOff';
import ReactSVG from 'react-inlinesvg';
import layerIcon from '@icon/layer.svg';
const FormHeader = lazy( () => import( '@formgent/components/FormHeader' ) );

function Analytics() {
	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );

	const { FormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getForms();
	}, [] );

	const { isAnalyticsSummaryFetching } = FormReducer;

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

	const handleChartDatepicker = ( dates, dateStrings ) => {
		if ( isAnalyticsSummaryFetching ) return;
		const [ dateFrom, dateTo ] = dateStrings;
		resolveSelect( 'formgent' ).getAnalyticsSubmission(
			formId,
			dateFrom !== '' ? dateFrom : '2024-01-01',
			dateTo !== '' ? dateTo : '2024-12-31',
			Date.now()
		);
	};

	const questionDropOffData = useSelect(
		( select ) => {
			return select( 'formgent' ).getQuestionDropOff( formId );
		},
		[ formId ]
	);

	return (
		<>
			<FormHeader resultHeader />
			<AnalyticsStyle>
				<div
					className={ `formgent-analytics-container ${
						! isProActive ? 'formgent-analytics-container--pro' : ''
					}` }
				>
					<AnalyticStats
						totalView={ total_views }
						totalStarted={ total_stared }
						totalFinished={ total_finished }
						timeToComplete={ average_completion_time }
					/>
					{ isProActive && (
						<>
							<AnalyticsChart.Slot
								fillProps={ {
									data: analyticSubmissionData,
									handleChartDatepicker:
										handleChartDatepicker,
								} }
							>
								{ ( fills ) => <>{ fills }</> }
							</AnalyticsChart.Slot>

							<QuestionsDropOff.Slot
								fillProps={ {
									questionDropOffData: questionDropOffData,
									layerIcon: <ReactSVG src={ layerIcon } />,
								} }
							>
								{ ( fills ) => <>{ fills }</> }
							</QuestionsDropOff.Slot>
						</>
					) }
				</div>
				{ ! isProActive && <AnalyticsProCta /> }
			</AnalyticsStyle>
		</>
	);
}

export default function AnalyticsModule( props ) {
	return <Analytics { ...props } />;
}
