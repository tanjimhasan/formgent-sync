/**
 * Internal dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { InspectorControls } from '@wordpress/block-editor';
import Controls from '../controls';
import { setUniqueNameAndId } from '../utils';

const controls = [
	{
		type: 'panel',
		label: 'Basic info',
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

export default function Edit( { attributes, setAttributes } ) {
	setUniqueNameAndId( attributes, setAttributes );

	return (
		<>
			<p { ...useBlockProps() }>{ attributes.content }</p>
			<InspectorControls>
				<Controls
					controls={ controls }
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			</InspectorControls>
		</>
	);
}
