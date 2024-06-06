import { Fragment } from '@wordpress/element';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function FieldEditor() {
	return (
		<Fragment>
			<div className="formgent-field__label">
				<RichText placeholder="Type your question here" tagName="p" />
			</div>
			<div className="formgent-field__description">
				<RichText
					placeholder={ __( 'Type a description', 'formgent' ) }
					tagName="p"
				/>
			</div>
		</Fragment>
	);
}
