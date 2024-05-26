import { useSelect } from '@wordpress/data';
import { useRef, useState, useEffect, Fragment } from '@wordpress/element';
import Header from './components/Header';
import Table from './components/Table';

function FormTable( props ) {
	const { FormReducer } = useSelect( ( select ) => {
		return select( 'newform' ).getForms();
	}, [] );

	const { forms, pagination, isLoading, erroe } = FormReducer;
	console.log( forms, FormReducer );
	return (
		<div className="newform-page-inner">
			<Header />
			{ forms && <Table /> }
		</div>
	);
}

export default function FormTableModule( props ) {
	return <FormTable { ...props } />;
}
