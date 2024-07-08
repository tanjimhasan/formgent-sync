/**
 * wordpress dependencies
 */
import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';

/**
 * Internal dependencies
 */
import Edit from './Edit';
import metadata from './block.json';

const exampleAttributes = {};

registerBlockType( metadata.name, {
	icon: 'smiley',
	example: {
		attributes: exampleAttributes,
	},
	edit: Edit,
} );
