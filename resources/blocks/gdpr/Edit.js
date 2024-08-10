/**
 * wordpress dependencies
 */
import { __ } from '@wordpress/i18n';
import { RichText } from '@wordpress/block-editor';

import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<div className="block-editor-block-list__single">
			{ /* <label
				className={ `block-editor-block-list__single__label label-align-${ attributes.label_alignment }` }
			>
				{ attributes.label }
				{ attributes.required ? (
					<span className="block-editor-block-list__single__label__required">
						*
					</span>
				) : null }
			</label> */ }
			<div className="block-editor-block-list__single__wrapper">
				<input
					className="block-editor-block-list__single__input block-editor-block-list__single__input--checkbox"
					type="checkbox"
					id={ attributes.id }
					name={ attributes.name }
					checked={ attributes.checked }
					onChange={ () => {} }
				/>
				<RichText
					className="block-editor-block-list__single__sub-label"
					tagName="span"
					value={ attributes.description }
					onChange={ ( description ) =>
						setAttributes( { description } )
					}
					placeholder={ __( 'Enter description' ) }
				/>
			</div>
		</div>
	);
}
