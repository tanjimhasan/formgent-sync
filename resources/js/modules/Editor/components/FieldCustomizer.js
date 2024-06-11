import { useState } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import picture from '@icon/picture.svg';
import { FieldCustomizerStyle } from './style';
import Empty from '@formgent/components/Empty';
import { registerControlsPreview } from '@formgent/fields';
import { __ } from '@wordpress/i18n';
import ControlGenerator from '@formgent/components/ControlGenerator';

export default function FieldCustomizer() {
	const [ activeTab, setActiveTab ] = useState( 'element' );

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

	return (
		<FieldCustomizerStyle>
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
		</FieldCustomizerStyle>
	);
}
