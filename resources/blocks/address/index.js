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
import './style.scss';

const exampleAttributes = {};

const controls = {
	basic_info: {
		type: 'panel',
		label: __( 'General', 'formgent' ),
		children: {
			label: {
				type: 'text',
				label: __( 'Label', 'formgent' ),
			},
			required: {
				type: 'switch',
				label: __( 'Label Required', 'formgent' ),
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
			street_sub_label: {
				type: 'text',
				label: __( 'Street Sub Label', 'formgent' ),
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
			address_line_sub_label: {
				type: 'text',
				label: __( 'Address Line Sub Label', 'formgent' ),
			},
			address_line_value: {
				type: 'text',
				label: __( 'Address Line Value', 'formgent' ),
			},
			address_line_placeholder: {
				type: 'text',
				label: __( 'Address Line Field Placeholder', 'formgent' ),
			},
			address_line_name: {
				type: 'text',
				label: __( 'Address Line Field Name', 'formgent' ),
			},
			city_sub_label: {
				type: 'text',
				label: __( 'City Sub Label', 'formgent' ),
			},
			city_value: {
				type: 'text',
				label: __( 'City Value', 'formgent' ),
			},
			city_placeholder: {
				type: 'text',
				label: __( 'City Field Placeholder', 'formgent' ),
			},
			city_name: {
				type: 'text',
				label: __( 'City Field Name', 'formgent' ),
			},
			state_sub_label: {
				type: 'text',
				label: __( 'State Sub Label', 'formgent' ),
			},
			state_value: {
				type: 'text',
				label: __( 'State Value', 'formgent' ),
			},
			state_placeholder: {
				type: 'text',
				label: __( 'State Field Placeholder', 'formgent' ),
			},
			state_name: {
				type: 'text',
				label: __( 'State Field Name', 'formgent' ),
			},
			zip_sub_label: {
				type: 'text',
				label: __( 'Zip Code Sub Label', 'formgent' ),
			},
			zip_value: {
				type: 'text',
				label: __( 'Zip Code Value', 'formgent' ),
			},
			zip_placeholder: {
				type: 'text',
				label: __( 'Zip Code Field Placeholder', 'formgent' ),
			},
			zip_name: {
				type: 'text',
				label: __( 'Zip Code Field Name', 'formgent' ),
			},
			default_value: {
				type: 'default_value',
				label: __( 'Default Value', 'formgent' ),
			},
		},
	},
};

registerBlock( metadata, controls, Edit, 'smiley', exampleAttributes );
