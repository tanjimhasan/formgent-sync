/**
 * wordpress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { registerBlock } from '@formgent/modules';
import Edit from './Edit';
import metadata from './block.json';
import './style.scss';

const exampleAttributes = {
	content: 'Sample content for preview',
};

const controls = {
	basic_info: {
		type: 'panel',
		label: __( 'General', 'formgent' ),
		children: {
			required: {
				type: 'switch',
				label: __( 'Required', 'formgent' ),
			},
			label_alignment: {
				type: 'toggle_group',
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
					{
						label: __( 'Justify', 'formgent' ),
						value: 'justify',
					},
				],
			},
			mask_type: {
				type: 'select',
				label: __( 'Mask Type', 'formgent' ),
				options: [
					{
						label: __( 'None', 'formgent' ),
						value: 'none',
					},
					{
						label: __( '(###) ###-####', 'formgent' ),
						value: 'phone_1',
					},
					{
						label: __( '(##) ####-####', 'formgent' ),
						value: 'phone_2',
					},
					{
						label: __( '26/09/2024', 'formgent' ),
						value: 'date',
					},
					{
						label: __( '23:59:59', 'formgent' ),
						value: 'time',
					},
					{
						label: __( '23/09/2024 23:59:59', 'formgent' ),
						value: 'date_time',
					},
					{
						label: __( 'Custom', 'formgent' ),
						value: 'custom',
					},
				],
			},
			placeholder: {
				type: 'text',
				label: __( 'Field Placeholder', 'formgent' ),
			},
			name: {
				type: 'text',
				label: __( 'Field Name', 'formgent' ),
			},
			value: {
				type: 'default_value',
				label: __( 'Default Value', 'formgent' ),
			},
		},
	},
};

registerBlock( metadata, controls, Edit, 'smiley', exampleAttributes );
