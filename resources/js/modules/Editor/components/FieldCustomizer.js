import ControlGenerator from '@formgent/components/ControlGenerator';
import { registerControlsPreview } from '@formgent/fields';
import leftIndent from '@icon/collapse-left.svg';
import rightIndent from '@icon/collapse-right.svg';
import { useSelect } from '@wordpress/data';
import { useRef, useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import { FieldCustomizerStyle } from './style';

export default function FieldCustomizer() {
	const [ activeTab, setActiveTab ] = useState( 'element' );
	const [ isSidebarOpen, setSidebarOpen ] = useState( true );

	const contentRef = useRef( null );

	const { SingleFormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getSingleForm();
	}, [] );

	const { activeField } = SingleFormReducer;

	function getControls() {
		if ( ! activeField ) {
			return;
		}
		const controlsPreview = registerControlsPreview();
		const controlList = {};
		for ( const key in controlsPreview ) {
			if ( activeField?.general_option.hasOwnProperty( key ) ) {
				if (
					key === 'validations' &&
					activeField?.general_option[ key ].hasOwnProperty(
						'required'
					)
				) {
					controlList.required = controlsPreview[ key ].required;
				} else {
					controlList[ key ] = controlsPreview[ key ];
				}
			}
		}

		return controlList;
	}

	function sidebarCollapse( e ) {
		e.preventDefault();
		const sidebarParent = contentRef.current;
		sidebarParent &&
			sidebarParent.classList.toggle( 'formgent-content-collapsed' );
		setSidebarOpen( ! isSidebarOpen );

		console.log( 'sidebarCollapse', isSidebarOpen );
	}

	return (
		<FieldCustomizerStyle
			className="formgent-editor-customizer"
			ref={ contentRef }
		>
			<div className="formgent-editor-sider">
				<div className="formgent-editor-sider__top">
					<ul className="formgent-editor-sider__nav">
						<li>
							<a
								href="#"
								className={
									activeTab === 'element'
										? 'formgent-active'
										: ''
								}
								onClick={ ( e ) => {
									e.preventDefault();
									setActiveTab( 'element' );
								} }
							>
								Edit Element
							</a>
						</li>
						<li>
							<a
								href="#"
								className={
									activeTab === 'design'
										? 'formgent-active'
										: ''
								}
								onClick={ ( e ) => {
									e.preventDefault();
									setActiveTab( 'logic' );
								} }
							>
								Logic
							</a>
						</li>
					</ul>
				</div>
				<div className="formgent-editor-sider__content">
					{ /* <Empty
						text={ __(
							'Add a field in your page to modify it',
							'formgent'
						) }
						icon={ picture }
					/> */ }
					{ activeField &&
						Object.values( getControls() ).map( ( control ) => {
							return <ControlGenerator control={ control } />;
						} ) }
				</div>
			</div>
			<button
				className="formgent-sidebar-collapse"
				onClick={ ( e ) => {
					sidebarCollapse( e );
				} }
			>
				<ReactSVG src={ isSidebarOpen ? rightIndent : leftIndent } />
			</button>
		</FieldCustomizerStyle>
	);
}
