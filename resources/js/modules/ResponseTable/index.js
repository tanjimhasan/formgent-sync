import { AntSkeleton } from '@formgent/components';
import { lazy, Suspense } from '@wordpress/element';
import { ResultStyle } from './style';
const Table = lazy( () => import( './components/Table' ) );

function ResponseTable() {
	return (
		<ResultStyle className="formgent-result-content">
			<Suspense fallback={ <AntSkeleton active /> }>
				<Table />
			</Suspense>
		</ResultStyle>
	);
}

export default function ResponseTableModule( props ) {
	return <ResponseTable { ...props } />;
}
