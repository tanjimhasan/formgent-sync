import { useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import { SidebarCollapseStyle } from './style';

export default function SidebarCollapse( props ) {
	const { initIcon, collapseIcon, contentRef } = props;

	const [ isSidebarOpen, setSidebarOpen ] = useState( true );

	function sidebarCollapse( e ) {
		e.preventDefault();
		const sidebarParent = contentRef.current;
		sidebarParent &&
			sidebarParent.classList.toggle( 'formgent-content-collapsed' );
		setSidebarOpen( ! isSidebarOpen );
	}

	return (
		<SidebarCollapseStyle
			className="formgent-sidebar-collapse"
			onClick={ ( e ) => {
				sidebarCollapse( e );
			} }
		>
			<ReactSVG src={ isSidebarOpen ? initIcon : collapseIcon } />
		</SidebarCollapseStyle>
	);
}
