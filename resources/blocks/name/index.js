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
			repeater: {
				type: 'repeater',
				label: __( 'Options', 'formgent' ),
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
