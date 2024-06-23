export default function checkClickedOutside( domStatus, setDomStatus, ref ) {
	const updateDomOnOutsideClick = ( e ) => {
		if ( domStatus && ref.current && ! ref.current.contains( e.target ) ) {
			setDomStatus( false );
		}
	};
	document.addEventListener( 'mousedown', updateDomOnOutsideClick );
	return () => {
		// Cleanup the event listener
		document.removeEventListener( 'mousedown', updateDomOnOutsideClick );
	};
}
