/**
 * Internal dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import Edit from './edit';

const attributes = {
	content: {
		type: 'string',
		default: 'Content for edit',
	},
	label: {
		type: 'string',
		default: 'Hello World',
	},
	format: {
		type: 'string',
		default: 'first_last',
	},
};

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
	attributes,
	example: {
		attributes: exampleAttributes,
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
} );
