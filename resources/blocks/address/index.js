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
			street_label: {
				type: 'text',
				label: __( 'Street Label', 'formgent' ),
			},
			street_sub_label: {
				type: 'text',
				label: __( 'Street Sub Label', 'formgent' ),
			},
			street_required: {
				type: 'switch',
				label: __( 'Street Label Required', 'formgent' ),
			},
			street_label_alignment: {
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
			street_value: {
				type: 'text',
				label: __( 'Street Value', 'formgent' ),
			},
			street_placeholder: {
				type: 'text',
				label: __( 'Street Field Placeholder', 'formgent' ),
			},
			street_name: {
				type: 'text',
				label: __( 'Street Field Name', 'formgent' ),
			},
		},
	},
};

registerBlock( metadata, controls, Edit, 'smiley', exampleAttributes );
