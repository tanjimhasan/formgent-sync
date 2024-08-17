import { useEffect } from '@wordpress/element';
import { resolveSelect, useSelect, useDispatch } from '@wordpress/data';
import { AnalyticsStyle } from './style';

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

	// useEffect(() => {
	// 	resolveSelect( 'formgent' ).getAnalyticsSummary(
	// 		parseInt( formId ),
	// 		Date.now()
	// 	);
	// }, [ formId ])

	console.log( 'AnalyticsSummary', analyticsSummary );

	return <AnalyticsStyle>sdfjklds</AnalyticsStyle>;
}

export default function AnalyticsModule( props ) {
	return <Analytics { ...props } />;
}
