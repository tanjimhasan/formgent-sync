import { lazy } from '@wordpress/element';
import { resolveSelect, useSelect } from '@wordpress/data';
import { SummaryStyle } from './style';
import { registerIsProActive } from '@formgent/helper/registerApplyFilter';
const FormHeader = lazy( () => import( '@formgent/components/FormHeader' ) );

function Summary() {
	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );
	const { useParams } = CommonReducer?.routerComponents;
	const { id: formId } = useParams();

	const { FormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getForms();
	}, [] );
	const { isFetchingSummary } = FormReducer;

	const summary = useSelect(
		( select ) => {
			return select( 'formgent' ).getSummary( formId, 'email' );
		},
		[ formId ]
	);

	console.log( summary );

	return (
		<>
			<FormHeader resultHeader />
			<h1>sdjfk</h1>
		</>
	);
}

export default function SummaryModule( props ) {
	return <Summary { ...props } />;
}
