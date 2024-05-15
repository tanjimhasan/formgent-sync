// import { Input } from "@newform/components";

// console.log(Input);
import '../data/store.js';
import { createRoot } from '@wordpress/element';

import App from './app';
document.addEventListener( 'DOMContentLoaded', function () {
	console.log('index');
	const container = document.querySelector( '.newform-root' );
	if ( ! container ) {
		return;
	}
	if ( createRoot ) {
		const root = createRoot( container );

		root.render(
				<App />
		);
	} else {
		render(
			<App />,
			container
		);
	}
} );
