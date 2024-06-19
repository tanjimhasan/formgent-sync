import { Fragment, useState } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';
import { RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function FieldEditor( props ) {
	const { field, isSubmissionForm } = props;
	const { updateFieldLabel } = isSubmissionForm ?? useDispatch( 'formgent' );
	return (
		<Fragment>
			<div className="formgent-field__label">
				{ isSubmissionForm ? (
					<span className="formgent-field__label--text">
						{ field?.general_option?.label }
					</span>
				) : (
					<RichText
						value={ field?.general_option?.label }
						onChange={ ( label ) =>
							updateFieldLabel( label, field.id )
						}
						placeholder="Type your question here"
						tagName="p"
					/>
				) }
			</div>
		</Fragment>
	);
}
