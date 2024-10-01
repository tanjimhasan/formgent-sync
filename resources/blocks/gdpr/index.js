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

const exampleAttributes = {};

const generalControls = {
	basic_info: {
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
};

const advancedControls = {};

const controls = { generalControls, advancedControls };

registerBlock( metadata, controls, Edit, 'smiley', exampleAttributes );
