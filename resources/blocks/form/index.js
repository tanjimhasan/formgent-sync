/**
 * Internal dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';

const exampleAttributes = {
	// formId: {
	// 	type: 'string',
	// 	default: '0',
	// },
};

registerBlockType( 'formgent/form', {
	title: __( 'Form', 'formgent' ),
	icon: 'smiley',
	category: 'formgent',
	attributes: formgent_blocks[ 'formgent/form' ].attrs,
	example: {
		// attributes: exampleAttributes,
	},
	edit: Edit,
} );
