import { AntSkeleton } from '@formgent/components';
import { useSelect } from '@wordpress/data';
import { lazy, Suspense } from '@wordpress/element';
const Table = lazy( () => import( './components/Table' ) );

function ResponseTable() {
	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );

	const { useParams } = CommonReducer?.routerComponents;

	return (
		<div className="formgent-page-inner">
			<Suspense fallback={ <AntSkeleton active /> }>
				<Table />
			</Suspense>
		</div>
	);
}

export default function ResponseTableModule( props ) {
	return <ResponseTable { ...props } />;
}
