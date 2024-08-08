import './editor.scss';
import { RichText } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<div className="formgent-editor-block-list__single">
			<span>
				<RichText
					className={ `formgent-editor-block-list__single__label formgent-label-align-${ attributes.label_alignment }` }
					tagName="label"
					value={ attributes.label }
					onChange={ ( content ) =>
						setAttributes( { label: content } )
					}
					placeholder={ __( 'Type sub label' ) }
				/>
				{ attributes.required ? (
					<span className="formgent-editor-block-list__single__label__required">
						*
					</span>
				) : null }
			</span>
			<div className="formgent-editor-block-list__single__wrapper">
				<input
					className="formgent-editor-block-list__single__input"
					type="number"
					name={ attributes.name }
					value={ attributes.value }
					onChange={ () => {} }
				/>
				<span className="formgent-editor-block-list__single__sub-label">
					{ attributes.sub_label }
				</span>
			</div>
		</div>
	);
}
