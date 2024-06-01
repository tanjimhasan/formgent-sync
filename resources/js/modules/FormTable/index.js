import { useSelect } from '@wordpress/data';
import { useRef, useState, useEffect, Fragment } from '@wordpress/element';
import { Modal } from '@wordpress/components';
import Header from './components/Header';
import Table from './components/Table';
import FormTableHead from '@newform/admin/Slots/FormTableHead';
import CreatePopup from '@newform/components/Form/CreatePopup';

function FormTable( props ) {
	const { FormReducer } = useSelect( ( select ) => {
		return select( 'newform' ).getForms();
	}, [] );

	const { forms, pagination, isLoading, erroe } = FormReducer;

	return (
		<div className="newform-page-inner">
			<FormTableHead.Slot fillProps={ { testProps: 10 } }>
				{ ( fills ) => (
					<>
						{ fills }
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
