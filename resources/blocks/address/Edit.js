import { InnerBlocks } from '@wordpress/block-editor';

import './editor.scss';

const ALLOWED_BLOCKS = [
	'core/paragraph',
	'core/heading',
	'formgent/text',
	'formgent/number',
	'formgent/country',
];

const TEMPLATE = [
	[
		'core/paragraph',
		{
			content: '<strong>Address</strong>',
			className: 'has-medium-font-size',
		},
	],
	[
		'formgent/text',
		{
			label: 'Address line 1',
			label_alignment: 'top',
			name: 'address_line_one',
			metadata: { name: 'Address line 1' },
		},
	],
	[
		'formgent/text',
		{
			label: 'Address line 2',
			label_alignment: 'top',
			name: 'address_line_two',
			metadata: { name: 'Address line 2' },
		},
	],
	[
		'core/columns',
		{},
		[
			[
				'core/column',
				{},
				[
					[
						'formgent/text',
						{
							label: 'City',
							label_alignment: 'top',
							name: 'city',
							metadata: { name: 'City' },
						},
					],
				],
			],
			[
				'core/column',
				{},
				[
					[
						'formgent/text',
						{
							label: 'State / Province',
							label_alignment: 'top',
							name: 'state',
							metadata: { name: 'State / Province' },
						},
					],
				],
			],
		],
	],
	[
		'core/columns',
		{},
		[
			[
				'core/column',
				{},
				[
					[
						'formgent/text',
						{
							label: 'Postal code / Zip Code',
							label_alignment: 'top',
							name: 'zip_code',
							metadata: { name: 'Postal code / Zip Code' },
						},
					],
				],
			],
			[
				'core/column',
				{},
				[
					[
						'formgent/text',
						{
							label: 'Country',
							label_alignment: 'top',
							name: 'country',
							metadata: { name: 'Country' },
						},
					],
				],
			],
		],
	],
];

export default function Edit() {
	return (
		<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } template={ TEMPLATE } />
	);
}
