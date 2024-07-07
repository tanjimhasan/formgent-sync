/**
 * Internal dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import Block from '../block';
import Edit from './Edit';

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
			required: {
				type: 'switch',
				label: __( 'Required', 'formgent' ),
			},
		},
	},
};

registerBlockType( 'formgent/number', {
	title: __( 'Number', 'formgent' ),
	category: 'formgent',
	icon: 'smiley',
	description: __( 'FormGent Number Field', 'formgent' ),
	supports: {
		html: false,
	},
	attributes: formgent_blocks[ 'formgent/number' ].attrs,
	example: {
		attributes: exampleAttributes,
	},
	/**
	 * @see ./Edit.js
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
