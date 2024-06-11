import { Fragment, useState } from '@wordpress/element';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function FieldEditor() {
	const { content, setContent } = useState();
	return (
		<Fragment>
			<div className="formgent-field__label">
				<RichText
					value={ content }
					onChange={ ( newContent ) => setContent( newContent ) }
					placeholder="Type your question here"
					tagName="p"
				/>
			</div>
		</Fragment>
	);
}
