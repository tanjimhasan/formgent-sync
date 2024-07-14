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
			},
			switch: {
				type: 'switch',
				label: __( 'Switch', 'formgent' ),
			},
			margin: {
				type: 'dimension',
				label: __( 'Margin', 'formgent' ),
				values: {
					top: '10px',
					right: '10px',
					bottom: '10px',
					left: '10px',
				},
			},
			padding: {
				type: 'dimension',
				label: __( 'Padding', 'formgent' ),
				values: {
					top: '10px',
					right: '10px',
					bottom: '10px',
					left: '10px',
				},
			},
			toggle_group: {
				type: 'toggle_group',
				label: __( 'Toggle Group', 'formgent' ),
				options: [
					{
						label: 'Left',
						value: 'left',
					},
					{
						label: 'Right',
						value: 'right',
					},
					{
						label: 'Center',
						value: 'center',
					},
					{
						label: 'Justify',
						value: 'justify',
					},
				],
			},
			repeater: {
				type: 'repeater',
				label: __( 'Repeater fields', 'formgent' ),
				item_label: 'header_value',
				fields: {
					full_name: {
						type: 'text',
						label: __( 'Text', 'formgent' ),
					},
					address: {
						type: 'textarea',
						label: __( 'Textarea', 'formgent' ),
					},
					enable_notification: {
						type: 'switch',
						label: __( 'Switch', 'formgent' ),
					},
					re_entry: {
						type: 'checkbox',
						label: __( 'Checkbox', 'formgent' ),
					},
					radio_option: {
						type: 'radio',
						label: __( 'Radio', 'formgent' ),
						options: [
							{
								label: __( 'Option One' ),
								value: 'option1',
							},
							{
								label: __( 'Option Two' ),
								value: 'option2',
							},
						],
					},
					select_option: {
						type: 'select',
						label: __( 'Select', 'formgent' ),
						options: [
							{
								label: __( 'Cookie', 'formgent' ),
								value: 'cookie',
							},
							{
								label: __( 'Expect', 'formgent' ),
								value: 'expect',
							},
						],
					},
				},
			},
			input_group: {
				type: 'repeater',
				label: __( 'Input Group', 'formgent' ),
				item_label: 'header_value',
				fields: {
					field_name: {
						type: 'text',
						label: __( 'Field Name', 'formgent' ),
					},
				},
			},
		},
	},
};

// [
// 	{
// 		"header": "asdfsadf"
// 		"header_value": "|dasfasdf"
// 	},
// 	{
// 		"header": "asdfsadf"
// 		"header_value": "|dasfasdf"
// 	}
// ]

registerBlock( metadata, controls, Edit, 'smiley', exampleAttributes );
