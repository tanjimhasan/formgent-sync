import { useSelect } from '@wordpress/data';
import { AnalyticsStyle } from './style';

function Analytics( props ) {
	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );
	console.log( CommonReducer );
	const { useParams } = CommonReducer?.routerComponents;
	const { id: formId } = useParams();
	const { summary } = useSelect(
		( select ) => {
			return select( 'formgent' ).getAnalyticsSummary( formId );
		},
		[ formId ]
	);

	console.log( summary );
	return <AnalyticsStyle></AnalyticsStyle>;
}

export default function AnalyticsModule( props ) {
	return <Analytics { ...props } />;
}
