/**
 * Internal dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import Edit from './edit';
import Block from '../block';

const exampleAttributes = {
	content: 'Sample content for preview',
};

const controls = [
	{
		type: 'panel',
		label: __( 'Basic info', 'formgent' ),
		children: [
			{
				type: 'text',
				attr_key: 'label',
				label: __( 'Label', 'formgent' ),
			},
			{
				type: 'select',
				attr_key: 'format',
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
		],
	},
];

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
