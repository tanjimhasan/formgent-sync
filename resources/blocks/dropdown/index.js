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

const exampleAttributes = {};

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
			name: {
				type: 'text',
				label: __( 'Field Name', 'formgent' ),
			},
			options: {
				type: 'repeater',
				label: __( 'Dropdown Options', 'formgent' ),
				fields: [
					{
						title: 'Option 1',
						content: 'Option 1 content',
					},
				],
			},
		},
	},
};

registerBlock( metadata, controls, Edit, 'smiley', exampleAttributes );
