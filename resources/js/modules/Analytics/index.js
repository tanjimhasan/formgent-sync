import { useSelect } from '@wordpress/data';
import { AnalyticsStyle } from './style';

function Analytics( props ) {
	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );

	const { useParams } = CommonReducer?.routerComponents;
	const { id: formId } = useParams();
	const { analyticsSummary } = useSelect(
		( select ) => {
			return select( 'formgent' ).getAnalyticsSummary( formId );
		},
		[ formId ]
	);

	return <AnalyticsStyle></AnalyticsStyle>;
}

export default function AnalyticsModule( props ) {
	return <Analytics { ...props } />;
}
