import { Fragment } from '@wordpress/element';
import { applyFilters as wpApplyFilters } from '@wordpress/hooks';

export function registerModule( key, value ) {
	if ( ! window.formgent ) {
		window.formgent = {};
	}

	if ( ! window.formgent[ key ] ) {
		window.formgent[ key ] = value;
	}
}

export function applyFilter( hook, content = {}, ...args ) {
	if ( typeof hook !== 'string' ) {
		throw new Error( 'Invalid input parameters' );
	}

	const items = wpApplyFilters( hook, content, ...args );

	return Object.values( items ).map( function ( item, index ) {
		if ( typeof item === 'object' ) {
			return <Fragment key={ index }>{ item }</Fragment>;
		} else {
			const Component = item;
			return <Component key={ index } />;
		}
	} );
}
