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
			format: {
				type: 'select',
				label: __( 'Format', 'formgent' ),
				options: [
					{
						label: __( 'Full Name', 'formgent' ),
						value: 'full_name',
					},
					{
						label: __( 'First and Last', 'formgent' ),
						value: 'first_last',
					},
					{
						label: __( 'First, Middle, and Last', 'formgent' ),
						value: 'first_middle_last',
					},
				],
			},
			checkbox: {
				type: 'checkbox',
				label: __( 'Checkbox', 'formgent' ),
				checkbox_text: __( 'Is author?', 'formgent' ),
			},
		},
	},
};

registerBlockType( 'formgent/name', {
	title: __( 'Name', 'formgent' ),
	category: 'formgent',
	icon: 'smiley',
	description: __( 'FormGent name field', 'formgent' ),
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
