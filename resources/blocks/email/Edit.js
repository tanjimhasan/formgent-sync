/**
 * wordpress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<div className="block-editor-block-list__single">
			<span>
				<RichText
					className={ `block-editor-block-list__single__label label-align-${ attributes.label_alignment }` }
					tagName="label"
					value={ attributes.label }
					onChange={ ( content ) =>
						setAttributes( { label: content } )
					}
					placeholder={ __( 'Type sub label' ) }
				/>
				{ attributes.required ? (
					<span className="block-editor-block-list__single__label__required">
						*
					</span>
				) : null }
			</span>
			<div className="block-editor-block-list__single__wrapper">
				<input
					className="block-editor-block-list__single__input"
					type="email"
					name={ attributes.name }
					placeholder={ attributes.placeholder }
					value={ attributes.value }
					onChange={ () => {} }
				/>
				<RichText
					className="block-editor-block-list__single__sub-label"
					tagName="span"
					value={ attributes.sub_label }
					onChange={ ( content ) =>
						setAttributes( { sub_label: content } )
					}
					placeholder={ __( 'Type sub label here (optional)' ) }
				/>
			</div>
		</div>
	);
}
