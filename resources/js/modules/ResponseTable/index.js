import { AntSkeleton } from '@formgent/components';
import FormHeader from '@formgent/components/FormHeader';
import { useSelect } from '@wordpress/data';
import { lazy, Suspense } from '@wordpress/element';
const Table = lazy( () => import( './components/Table' ) );

function ResponseTable() {
	const { CommonReducer, FormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );

	console.log( 'Response Reducer', CommonReducer, FormReducer );

	const { useParams, useNavigate } = CommonReducer?.routerComponents;

	const { id } = useParams();

	return (
		<>
			<FormHeader id={ id } useNavigate={ useNavigate } />
			<div className="formgent-page-inner">
				<Suspense fallback={ <AntSkeleton active /> }>
					<Table />
				</Suspense>
			</div>
		</>
	);
}

export default function ResponseTableModule( props ) {
	return <ResponseTable { ...props } />;
}
