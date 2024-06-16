import { createRoot } from '@wordpress/element';
import domReady from '@wordpress/dom-ready';
import { addAction } from '@wordpress/hooks';
import { useState, useCallback, useEffect } from '@wordpress/element';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { __ } from '@wordpress/i18n';

const Notification = () => {
	const [ toastConfig, setToastConfig ] = useState( {} );

	const pushNotification = useCallback( ( data ) => {
		const config = Object.assign(
			{
				position: 'bottom-right',
				message: __( 'formgent Notification', 'formgent' ),
				type: 'success',
				autoClose: 2000,
				pauseOnFocusLoss: false,
				transition: Bounce,
			},
			data || {}
		);

		setToastConfig( config );

		toast[ config.type ](
			<div dangerouslySetInnerHTML={ { __html: config.message } } />
		);
	}, [] );

	useEffect( () => {
		addAction(
			'formgent-toast',
			'component-formgent-toast',
			pushNotification
		);
	}, [ pushNotification ] );

	return <ToastContainer { ...toastConfig } />;
};

domReady( () => {
	const container = document.createElement( 'div' );
	container.setAttribute( 'id', 'formgent-toast' );
	container.setAttribute(
		'style',
		'position: absolute; z-index: 9999999999'
	);
	document.body.appendChild( container );

	const root = createRoot( container );
	root.render( <Notification /> );
} );
