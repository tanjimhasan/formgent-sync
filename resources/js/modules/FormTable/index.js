import { useSelect } from '@wordpress/data';
import { useRef, useState, useEffect, Fragment } from '@wordpress/element';
import Header from './components/Header';
import Table from './components/Table';

function FormTable( props ) {
	const { SingleFormReducer } = useSelect( ( select ) => {
		return select( 'newform' ).getSingleForm();
	}, [] );

	return (
		<div className="newform-page-inner">
            <Header />
            <Table />
        </div>
	);
}

export default function FormTableModule( props ) {
	return <FormTable { ...props } />;
}
