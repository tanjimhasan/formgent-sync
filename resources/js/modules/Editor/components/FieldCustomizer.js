import { useState } from '@wordpress/element';
import picture from '@icon/picture.svg';
import { FieldCustomizerStyle } from './style';
import Empty from '@formgent/components/Empty';
import { __ } from '@wordpress/i18n';

export default function FieldCustomizer() {
	const [ activeTab, setActiveTab ] = useState( 'element' );
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
					<Empty
						text={ __(
							'Add a field in your page to modify it',
							'formgent'
						) }
						icon={ picture }
					/>
				</div>
			</div>
		</FieldCustomizerStyle>
	);
}
