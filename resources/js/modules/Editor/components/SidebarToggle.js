import { useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import { SidebarToggleStyle } from './style';

export default function SidebarToggle( props ) {
	const { initIcon, collapseIcon, contentRef } = props;

	const [ isSidebarOpen, setSidebarOpen ] = useState( true );

	function handleCollapse( e ) {
		e.preventDefault();
		const sidebarParent = contentRef.current;
		sidebarParent &&
			sidebarParent.classList.toggle( 'formgent-content-collapsed' );
		setSidebarOpen( ! isSidebarOpen );
	}

	return (
		<SidebarToggleStyle
			className="formgent-sidebar-collapse"
			onClick={ ( e ) => {
				handleCollapse( e );
			} }
		>
			<ReactSVG src={ isSidebarOpen ? initIcon : collapseIcon } />
		</SidebarToggleStyle>
	);
}
