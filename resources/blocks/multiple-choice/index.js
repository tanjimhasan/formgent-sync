/**
 * wordpress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { registerBlock } from '@formgent/modules';
import { onChangeChoiceOptions } from '../utils';
import Edit from './Edit';
import metadata from './block.json';
import './style.scss';

const exampleAttributes = {};

const generalControls = {
	general: {
		type: 'panel',
		children: {
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
			options: {
				type: 'repeater',
				label: __( 'Multi Choice Items', 'formgent' ),
				label_key: 'label',
				add_button_text: 'Add Item',
				onChange: onChangeChoiceOptions,
				fields: {
					label: {
						type: 'text',
						label: __( 'Label', 'formgent' ),
					},
				},
			},
			choice_limit: {
				type: 'switch',
				label: __( 'Choice Limit', 'formgent' ),
			},
			choice_limit_item: {
				type: 'number',
				precision: false,
				condition: function ( attributes ) {
					return attributes[ 'choice_limit' ];
				},
			},
			value: {
				type: 'default_value',
				label: __( 'Default Value', 'formgent' ),
			},
			name: {
				type: 'text',
				label: __( 'Field Name', 'formgent' ),
			},
			required: {
				type: 'switch',
				label: __( 'Required', 'formgent' ),
			},
		},
	},
	advanced: {
		type: 'panel',
		label: __( 'FormGent Advanced', 'formgent' ),
		children: {
			options: {
				type: 'repeater',
				label: __( 'Values', 'formgent' ),
				label_key: 'label',
				show_actions: false,
				onChange: onChangeChoiceOptions,
				fields: {
					value: {
						type: 'text',
						label: __( 'Value', 'formgent' ),
					},
				},
			},
		},
	},
};

const advancedControls = {};

const controls = { generalControls, advancedControls };

registerBlock( metadata, controls, Edit, 'smiley', exampleAttributes );
