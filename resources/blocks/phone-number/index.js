/**
 * wordpress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { registerBlock } from '../utils';
import Edit from './Edit';
import metadata from './block.json';

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
			sub_label: {
				type: 'text',
				label: __( 'Sub Label', 'formgent' ),
			},
			required: {
				type: 'switch',
				label: __( 'Required', 'formgent' ),
			},
			label_alignment: {
				type: 'select',
				label: __( 'Label Alignment', 'formgent' ),
				options: [
					{
						label: __( 'Left', 'formgent' ),
						value: 'left',
					},
					{
						label: __( 'Right', 'formgent' ),
						value: 'right',
					},
					{
						label: __( 'Top', 'formgent' ),
						value: 'top',
					},
				],
			},
			placeholder: {
				type: 'text',
				label: __( 'Field Placeholder', 'formgent' ),
			},
			value: {
				type: 'text',
				label: __( 'Phone Number', 'formgent' ),
			},
			name: {
				type: 'text',
				label: __( 'Field Name', 'formgent' ),
			},
		},
	},
};

registerBlock( metadata, controls, Edit, 'smiley', exampleAttributes );