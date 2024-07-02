/**
 * Internal dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import Block from '../block';
import Edit from './edit';

const exampleAttributes = {
	content: 'Sample content for preview',
};

const controls = {
	basic_info: {
		type: 'panel',
		label: __( 'Basic info', 'formgent' ),
		children: {
			label: {
				type: 'text',
				label: __( 'Label', 'formgent' ),
			},
		},
	},
};

registerBlockType( 'formgent/email', {
	title: __( 'Email', 'formgent' ),
	category: 'formgent',
	icon: 'smiley',
	description: __( 'FormGent Email field', 'formgent' ),
	supports: {
		html: false,
	},
	attributes: formgent_blocks[ 'formgent/email' ].attrs,
	example: {
		attributes: exampleAttributes,
	},
	/**
	 * @see ./edit.js
	 */
	edit: function ( { attributes, setAttributes } ) {
		return (
			<Block
				controls={ controls }
				Edit={ Edit }
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
		);
	},
} );