/**
 * Internal dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import Edit from './edit';

const exampleAttributes = {
	content: 'Sample content for preview',
};

registerBlockType( 'formgent/name', {
	title: __( 'Name', 'formgnet' ),
	category: 'formgent',
	icon: 'smiley',
	description: 'FormGent Name Field',
	supports: {
		html: false,
	},
	attributes: formgent_blocks[ 'formgent/name' ].attrs,
	example: {
		attributes: exampleAttributes,
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
} );
