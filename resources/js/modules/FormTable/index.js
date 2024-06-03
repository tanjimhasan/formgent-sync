import { lazy, Suspense } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import Header from './components/Header';
const Table = lazy( () => import( './components/Table' ) );
import FormTableHead from '@formgent/admin/Slots/FormTableHead';
import CreatePopup from '@formgent/components/Form/CreatePopup';
import { AntSkeleton } from '@formgent/components';

function FormTable( props ) {
	const { FormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getForms();
	}, [] );

	const { forms } = FormReducer;
	return (
		<div className="formgent-page-inner">
			<FormTableHead.Slot fillProps={ { testProps: 10 } }>
				{ ( fills ) => (
					<>
						{ /* { fills } */ }
						<Header />
					</>
				) }
			</FormTableHead.Slot>
			{ forms && (
				<Suspense fallback={ <AntSkeleton active /> }>
					<Table />
				</Suspense>
			) }
			<CreatePopup />
		</div>
	);
}

export default function FormTableModule( props ) {
	return <FormTable { ...props } />;
}
