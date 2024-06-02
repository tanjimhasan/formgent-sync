import { useSelect } from '@wordpress/data';
import Header from './components/Header';
import Table from './components/Table';
import FormTableHead from '@formgent/admin/Slots/FormTableHead';
import CreatePopup from '@formgent/components/Form/CreatePopup';

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
			{ forms && <Table /> }
			<CreatePopup />
		</div>
	);
}

export default function FormTableModule( props ) {
	return <FormTable { ...props } />;
}
