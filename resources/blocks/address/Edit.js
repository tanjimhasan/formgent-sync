import { InnerBlocks } from '@wordpress/block-editor';
import { nanoid } from 'nanoid';

import './editor.scss';

const ALLOWED_BLOCKS = [
	'core/paragraph',
	'core/heading',
	'formgent/text',
	'formgent/number',
	'formgent/dropdown',
	'core/columns',
	'core/column',
	'core/group',
	'core/spacer',
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
			metadata: {
				name: 'Address line 1',
			},
		},
	],
	[
		'core/spacer',
		{
			height: '20px',
		},
	],
	[
		'formgent/text',
		{
			label: 'Address line 2',
			label_alignment: 'top',
			name: 'address_line_two',
			metadata: {
				name: 'Address line 2',
			},
		},
	],
	[
		'core/spacer',
		{
			height: '20px',
		},
	],
	[
		'core/group',
		{
			layout: {
				type: 'grid',
				minimumColumnWidth: null,
				columnCount: 2,
			},
			style: {
				spacing: {
					blockGap: 'var:preset|spacing|10',
				},
			},
		},
		[
			[
				'formgent/text',
				{
					label: 'City',
					label_alignment: 'top',
					name: 'city',
					metadata: {
						name: 'City',
					},
				},
			],
			[
				'formgent/text',
				{
					label: 'State / Province',
					label_alignment: 'top',
					name: 'state',
					metadata: {
						name: 'State / Province',
					},
				},
			],
		],
	],
	[
		'core/spacer',
		{
			height: '20px',
		},
	],
	[
		'core/group',
		{
			layout: {
				type: 'grid',
				minimumColumnWidth: null,
				columnCount: 2,
			},
			style: {
				spacing: {
					blockGap: 'var:preset|spacing|10',
				},
			},
		},
		[
			[
				'formgent/text',
				{
					label: 'Postal code / Zip Code',
					label_alignment: 'top',
					name: 'zip_code',
					metadata: {
						name: 'Postal code / Zip Code',
					},
				},
			],
			[
				'formgent/dropdown',
				{
					label: 'Country',
					label_alignment: 'top',
					name: 'country',
					options: [
						{
							id: nanoid(),
							label: 'Afghanistan',
							value: '+93',
						},
						{
							id: nanoid(),
							label: 'Åland Islands',
							value: '+358',
						},
						{
							id: nanoid(),
							label: 'Albania',
							value: '+355',
						},
						{
							id: nanoid(),
							label: 'Algeria',
							value: '+213',
						},
						{
							id: nanoid(),
							label: 'American Samoa',
							value: '+1684',
						},
						{
							id: nanoid(),
							label: 'Andorra',
							value: '+376',
						},
						{
							id: nanoid(),
							label: 'Angola',
							value: '+244',
						},
						{
							id: nanoid(),
							label: 'Anguilla',
							value: '+1264',
						},
						{
							id: nanoid(),
							label: 'Antarctica',
							value: '+672',
						},
						{
							id: nanoid(),
							label: 'Antigua and Barbuda',
							value: '+1268',
						},
						{
							id: nanoid(),
							label: 'Argentina',
							value: '+54',
						},
						{
							id: nanoid(),
							label: 'Armenia',
							value: '+374',
						},
						{
							id: nanoid(),
							label: 'Aruba',
							value: '+297',
						},
						{
							id: nanoid(),
							label: 'Australia',
							value: '+61',
						},
						{
							id: nanoid(),
							label: 'Austria',
							value: '+43',
						},
						{
							id: nanoid(),
							label: 'Azerbaijan',
							value: '+994',
						},
						{
							id: nanoid(),
							label: 'Bahamas',
							value: '+1242',
						},
						{
							id: nanoid(),
							label: 'Bahrain',
							value: '+973',
						},
						{
							id: nanoid(),
							label: 'Bangladesh',
							value: '+880',
						},
						{
							id: nanoid(),
							label: 'Barbados',
							value: '+1246',
						},
						{
							id: nanoid(),
							label: 'Belarus',
							value: '+375',
						},
						{
							id: nanoid(),
							label: 'Belgium',
							value: '+32',
						},
						{
							id: nanoid(),
							label: 'Belize',
							value: '+501',
						},
						{
							id: nanoid(),
							label: 'Benin',
							value: '+229',
						},
						{
							id: nanoid(),
							label: 'Bermuda',
							value: '+1441',
						},
						{
							id: nanoid(),
							label: 'Bhutan',
							value: '+975',
						},
						{
							id: nanoid(),
							label: 'Bolivia, Plurinational State of bolivia',
							value: '+591',
						},
						{
							id: nanoid(),
							label: 'Bosnia and Herzegovina',
							value: '+387',
						},
						{
							id: nanoid(),
							label: 'Botswana',
							value: '+267',
						},
						{
							id: nanoid(),
							label: 'Bouvet Island',
							value: '+47',
						},
						{
							id: nanoid(),
							label: 'Brazil',
							value: '+55',
						},
						{
							id: nanoid(),
							label: 'British Indian Ocean Territory',
							value: '+246',
						},
						{
							id: nanoid(),
							label: 'Brunei Darussalam',
							value: '+673',
						},
						{
							id: nanoid(),
							label: 'Bulgaria',
							value: '+359',
						},
						{
							id: nanoid(),
							label: 'Burkina Faso',
							value: '+226',
						},
						{
							id: nanoid(),
							label: 'Burundi',
							value: '+257',
						},
						{
							id: nanoid(),
							label: 'Cambodia',
							value: '+855',
						},
						{
							id: nanoid(),
							label: 'Cameroon',
							value: '+237',
						},
						{
							id: nanoid(),
							label: 'Canada',
							value: '+1',
						},
						{
							id: nanoid(),
							label: 'Cape Verde',
							value: '+238',
						},
						{
							id: nanoid(),
							label: 'Cayman Islands',
							value: '+345',
						},
						{
							id: nanoid(),
							label: 'Central African Republic',
							value: '+236',
						},
						{
							id: nanoid(),
							label: 'Chad',
							value: '+235',
						},
						{
							id: nanoid(),
							label: 'Chile',
							value: '+56',
						},
						{
							id: nanoid(),
							label: 'China',
							value: '+86',
						},
						{
							id: nanoid(),
							label: 'Christmas Island',
							value: '+61',
						},
						{
							id: nanoid(),
							label: 'Cocos (Keeling) Islands',
							value: '+61',
						},
						{
							id: nanoid(),
							label: 'Colombia',
							value: '+57',
						},
						{
							id: nanoid(),
							label: 'Comoros',
							value: '+269',
						},
						{
							id: nanoid(),
							label: 'Congo',
							value: '+242',
						},
						{
							id: nanoid(),
							label: 'Congo, The Democratic Republic of the Congo',
							value: '+243',
						},
						{
							id: nanoid(),
							label: 'Cook Islands',
							value: '+682',
						},
						{
							id: nanoid(),
							label: 'Costa Rica',
							value: '+506',
						},
						{
							id: nanoid(),
							label: "Cote d'Ivoire",
							value: '+225',
						},
						{
							id: nanoid(),
							label: 'Croatia',
							value: '+385',
						},
						{
							id: nanoid(),
							label: 'Cuba',
							value: '+53',
						},
						{
							id: nanoid(),
							label: 'Cyprus',
							value: '+357',
						},
						{
							id: nanoid(),
							label: 'Czech Republic',
							value: '+420',
						},
						{
							id: nanoid(),
							label: 'Denmark',
							value: '+45',
						},
						{
							id: nanoid(),
							label: 'Djibouti',
							value: '+253',
						},
						{
							id: nanoid(),
							label: 'Dominica',
							value: '+1767',
						},
						{
							id: nanoid(),
							label: 'Dominican Republic',
							value: '+1849',
						},
						{
							id: nanoid(),
							label: 'Ecuador',
							value: '+593',
						},
						{
							id: nanoid(),
							label: 'Egypt',
							value: '+20',
						},
						{
							id: nanoid(),
							label: 'El Salvador',
							value: '+503',
						},
						{
							id: nanoid(),
							label: 'Equatorial Guinea',
							value: '+240',
						},
						{
							id: nanoid(),
							label: 'Eritrea',
							value: '+291',
						},
						{
							id: nanoid(),
							label: 'Estonia',
							value: '+372',
						},
						{
							id: nanoid(),
							label: 'Ethiopia',
							value: '+251',
						},
						{
							id: nanoid(),
							label: 'Falkland Islands (Malvinas)',
							value: '+500',
						},
						{
							id: nanoid(),
							label: 'Faroe Islands',
							value: '+298',
						},
						{
							id: nanoid(),
							label: 'Fiji',
							value: '+679',
						},
						{
							id: nanoid(),
							label: 'Finland',
							value: '+358',
						},
						{
							id: nanoid(),
							label: 'France',
							value: '+33',
						},
						{
							id: nanoid(),
							label: 'French Guiana',
							value: '+594',
						},
						{
							id: nanoid(),
							label: 'French Polynesia',
							value: '+689',
						},
						{
							id: nanoid(),
							label: 'French Southern Territories',
							value: '+262',
						},
						{
							id: nanoid(),
							label: 'Gabon',
							value: '+241',
						},
						{
							id: nanoid(),
							label: 'Gambia',
							value: '+220',
						},
						{
							id: nanoid(),
							label: 'Georgia',
							value: '+995',
						},
						{
							id: nanoid(),
							label: 'Germany',
							value: '+49',
						},
						{
							id: nanoid(),
							label: 'Ghana',
							value: '+233',
						},
						{
							id: nanoid(),
							label: 'Gibraltar',
							value: '+350',
						},
						{
							id: nanoid(),
							label: 'Greece',
							value: '+30',
						},
						{
							id: nanoid(),
							label: 'Greenland',
							value: '+299',
						},
						{
							id: nanoid(),
							label: 'Grenada',
							value: '+1473',
						},
						{
							id: nanoid(),
							label: 'Guadeloupe',
							value: '+590',
						},
						{
							id: nanoid(),
							label: 'Guam',
							value: '+1671',
						},
						{
							id: nanoid(),
							label: 'Guatemala',
							value: '+502',
						},
						{
							id: nanoid(),
							label: 'Guernsey',
							value: '+44',
						},
						{
							id: nanoid(),
							label: 'Guinea',
							value: '+224',
						},
						{
							id: nanoid(),
							label: 'Guinea-Bissau',
							value: '+245',
						},
						{
							id: nanoid(),
							label: 'Guyana',
							value: '+592',
						},
						{
							id: nanoid(),
							label: 'Haiti',
							value: '+509',
						},
						{
							id: nanoid(),
							label: 'Heard Island and Mcdonald Islands',
							value: '+0',
						},
						{
							id: nanoid(),
							label: 'Holy See (Vatican City State)',
							value: '+379',
						},
						{
							id: nanoid(),
							label: 'Honduras',
							value: '+504',
						},
						{
							id: nanoid(),
							label: 'Hong Kong',
							value: '+852',
						},
						{
							id: nanoid(),
							label: 'Hungary',
							value: '+36',
						},
						{
							id: nanoid(),
							label: 'Iceland',
							value: '+354',
						},
						{
							id: nanoid(),
							label: 'India',
							value: '+91',
						},
						{
							id: nanoid(),
							label: 'Indonesia',
							value: '+62',
						},
						{
							id: nanoid(),
							label: 'Iran, Islamic Republic of Persian Gulf',
							value: '+98',
						},
						{
							id: nanoid(),
							label: 'Iraq',
							value: '+964',
						},
						{
							id: nanoid(),
							label: 'Ireland',
							value: '+353',
						},
						{
							id: nanoid(),
							label: 'Isle of Man',
							value: '+44',
						},
						{
							id: nanoid(),
							label: 'Israel',
							value: '+972',
						},
						{
							id: nanoid(),
							label: 'Italy',
							value: '+39',
						},
						{
							id: nanoid(),
							label: 'Jamaica',
							value: '+1876',
						},
						{
							id: nanoid(),
							label: 'Japan',
							value: '+81',
						},
						{
							id: nanoid(),
							label: 'Jersey',
							value: '+44',
						},
						{
							id: nanoid(),
							label: 'Jordan',
							value: '+962',
						},
						{
							id: nanoid(),
							label: 'Kazakhstan',
							value: '+7',
						},
						{
							id: nanoid(),
							label: 'Kenya',
							value: '+254',
						},
						{
							id: nanoid(),
							label: 'Kiribati',
							value: '+686',
						},
						{
							id: nanoid(),
							label: "Korea, Democratic People's Republic of Korea",
							value: '+850',
						},
						{
							id: nanoid(),
							label: 'Korea, Republic of South Korea',
							value: '+82',
						},
						{
							id: nanoid(),
							label: 'Kosovo',
							value: '+383',
						},
						{
							id: nanoid(),
							label: 'Kuwait',
							value: '+965',
						},
						{
							id: nanoid(),
							label: 'Kyrgyzstan',
							value: '+996',
						},
						{
							id: nanoid(),
							label: 'Laos',
							value: '+856',
						},
						{
							id: nanoid(),
							label: 'Latvia',
							value: '+371',
						},
						{
							id: nanoid(),
							label: 'Lebanon',
							value: '+961',
						},
						{
							id: nanoid(),
							label: 'Lesotho',
							value: '+266',
						},
						{
							id: nanoid(),
							label: 'Liberia',
							value: '+231',
						},
						{
							id: nanoid(),
							label: 'Libyan Arab Jamahiriya',
							value: '+218',
						},
						{
							id: nanoid(),
							label: 'Liechtenstein',
							value: '+423',
						},
						{
							id: nanoid(),
							label: 'Lithuania',
							value: '+370',
						},
						{
							id: nanoid(),
							label: 'Luxembourg',
							value: '+352',
						},
						{
							id: nanoid(),
							label: 'Macao',
							value: '+853',
						},
						{
							id: nanoid(),
							label: 'Macedonia',
							value: '+389',
						},
						{
							id: nanoid(),
							label: 'Madagascar',
							value: '+261',
						},
						{
							id: nanoid(),
							label: 'Malawi',
							value: '+265',
						},
						{
							id: nanoid(),
							label: 'Malaysia',
							value: '+60',
						},
						{
							id: nanoid(),
							label: 'Maldives',
							value: '+960',
						},
						{
							id: nanoid(),
							label: 'Mali',
							value: '+223',
						},
						{
							id: nanoid(),
							label: 'Malta',
							value: '+356',
						},
						{
							id: nanoid(),
							label: 'Marshall Islands',
							value: '+692',
						},
						{
							id: nanoid(),
							label: 'Martinique',
							value: '+596',
						},
						{
							id: nanoid(),
							label: 'Mauritania',
							value: '+222',
						},
						{
							id: nanoid(),
							label: 'Mauritius',
							value: '+230',
						},
						{
							id: nanoid(),
							label: 'Mayotte',
							value: '+262',
						},
						{
							id: nanoid(),
							label: 'Mexico',
							value: '+52',
						},
						{
							id: nanoid(),
							label: 'Micronesia, Federated States of Micronesia',
							value: '+691',
						},
						{
							id: nanoid(),
							label: 'Moldova',
							value: '+373',
						},
						{
							id: nanoid(),
							label: 'Monaco',
							value: '+377',
						},
						{
							id: nanoid(),
							label: 'Mongolia',
							value: '+976',
						},
						{
							id: nanoid(),
							label: 'Montenegro',
							value: '+382',
						},
						{
							id: nanoid(),
							label: 'Montserrat',
							value: '+1664',
						},
						{
							id: nanoid(),
							label: 'Morocco',
							value: '+212',
						},
						{
							id: nanoid(),
							label: 'Mozambique',
							value: '+258',
						},
						{
							id: nanoid(),
							label: 'Myanmar',
							value: '+95',
						},
						{
							id: nanoid(),
							label: 'Namibia',
							value: '+264',
						},
						{
							id: nanoid(),
							label: 'Nauru',
							value: '+674',
						},
						{
							id: nanoid(),
							label: 'Nepal',
							value: '+977',
						},
						{
							id: nanoid(),
							label: 'Netherlands',
							value: '+31',
						},
						{
							id: nanoid(),
							label: 'Netherlands Antilles',
							value: '+599',
						},
						{
							id: nanoid(),
							label: 'New Caledonia',
							value: '+687',
						},
						{
							id: nanoid(),
							label: 'New Zealand',
							value: '+64',
						},
						{
							id: nanoid(),
							label: 'Nicaragua',
							value: '+505',
						},
						{
							id: nanoid(),
							label: 'Niger',
							value: '+227',
						},
						{
							id: nanoid(),
							label: 'Nigeria',
							value: '+234',
						},
						{
							id: nanoid(),
							label: 'Niue',
							value: '+683',
						},
						{
							id: nanoid(),
							label: 'Norfolk Island',
							value: '+672',
						},
						{
							id: nanoid(),
							label: 'Northern Mariana Islands',
							value: '+1670',
						},
						{
							id: nanoid(),
							label: 'Norway',
							value: '+47',
						},
						{
							id: nanoid(),
							label: 'Oman',
							value: '+968',
						},
						{
							id: nanoid(),
							label: 'Pakistan',
							value: '+92',
						},
						{
							id: nanoid(),
							label: 'Palau',
							value: '+680',
						},
						{
							id: nanoid(),
							label: 'Palestinian Territory, Occupied',
							value: '+970',
						},
						{
							id: nanoid(),
							label: 'Panama',
							value: '+507',
						},
						{
							id: nanoid(),
							label: 'Papua New Guinea',
							value: '+675',
						},
						{
							id: nanoid(),
							label: 'Paraguay',
							value: '+595',
						},
						{
							id: nanoid(),
							label: 'Peru',
							value: '+51',
						},
						{
							id: nanoid(),
							label: 'Philippines',
							value: '+63',
						},
						{
							id: nanoid(),
							label: 'Pitcairn',
							value: '+64',
						},
						{
							id: nanoid(),
							label: 'Poland',
							value: '+48',
						},
						{
							id: nanoid(),
							label: 'Portugal',
							value: '+351',
						},
						{
							id: nanoid(),
							label: 'Puerto Rico',
							value: '+1939',
						},
						{
							id: nanoid(),
							label: 'Qatar',
							value: '+974',
						},
						{
							id: nanoid(),
							label: 'Romania',
							value: '+40',
						},
						{
							id: nanoid(),
							label: 'Russia',
							value: '+7',
						},
						{
							id: nanoid(),
							label: 'Rwanda',
							value: '+250',
						},
						{
							id: nanoid(),
							label: 'Réunion',
							value: '+262',
						},
						{
							id: nanoid(),
							label: 'Saint Barthélemy',
							value: '+590',
						},
						{
							id: nanoid(),
							label: 'Saint Helena, Ascension and Tristan Da Cunha',
							value: '+290',
						},
						{
							id: nanoid(),
							label: 'Saint Kitts and Nevis',
							value: '+1869',
						},
						{
							id: nanoid(),
							label: 'Saint Lucia',
							value: '+1758',
						},
						{
							id: nanoid(),
							label: 'Saint Martin',
							value: '+590',
						},
						{
							id: nanoid(),
							label: 'Saint Pierre and Miquelon',
							value: '+508',
						},
						{
							id: nanoid(),
							label: 'Saint Vincent and the Grenadines',
							value: '+1784',
						},
						{
							id: nanoid(),
							label: 'Samoa',
							value: '+685',
						},
						{
							id: nanoid(),
							label: 'San Marino',
							value: '+378',
						},
						{
							id: nanoid(),
							label: 'Sao Tome and Principe',
							value: '+239',
						},
						{
							id: nanoid(),
							label: 'Saudi Arabia',
							value: '+966',
						},
						{
							id: nanoid(),
							label: 'Senegal',
							value: '+221',
						},
						{
							id: nanoid(),
							label: 'Serbia',
							value: '+381',
						},
						{
							id: nanoid(),
							label: 'Seychelles',
							value: '+248',
						},
						{
							id: nanoid(),
							label: 'Sierra Leone',
							value: '+232',
						},
						{
							id: nanoid(),
							label: 'Singapore',
							value: '+65',
						},
						{
							id: nanoid(),
							label: 'Sint Maarten',
							value: '+1721',
						},
						{
							id: nanoid(),
							label: 'Slovakia',
							value: '+421',
						},
						{
							id: nanoid(),
							label: 'Slovenia',
							value: '+386',
						},
						{
							id: nanoid(),
							label: 'Solomon Islands',
							value: '+677',
						},
						{
							id: nanoid(),
							label: 'Somalia',
							value: '+252',
						},
						{
							id: nanoid(),
							label: 'South Africa',
							value: '+27',
						},
						{
							id: nanoid(),
							label: 'South Georgia and the South Sandwich Islands',
							value: '+500',
						},
						{
							id: nanoid(),
							label: 'South Sudan',
							value: '+211',
						},
						{
							id: nanoid(),
							label: 'Spain',
							value: '+34',
						},
						{
							id: nanoid(),
							label: 'Sri Lanka',
							value: '+94',
						},
						{
							id: nanoid(),
							label: 'Sudan',
							value: '+249',
						},
						{
							id: nanoid(),
							label: 'Suriname',
							value: '+597',
						},
						{
							id: nanoid(),
							label: 'Svalbard and Jan Mayen',
							value: '+47',
						},
						{
							id: nanoid(),
							label: 'Swaziland',
							value: '+268',
						},
						{
							id: nanoid(),
							label: 'Sweden',
							value: '+46',
						},
						{
							id: nanoid(),
							label: 'Switzerland',
							value: '+41',
						},
						{
							id: nanoid(),
							label: 'Syrian Arab Republic',
							value: '+963',
						},
						{
							id: nanoid(),
							label: 'Taiwan',
							value: '+886',
						},
						{
							id: nanoid(),
							label: 'Tajikistan',
							value: '+992',
						},
						{
							id: nanoid(),
							label: 'Tanzania, United Republic of Tanzania',
							value: '+255',
						},
						{
							id: nanoid(),
							label: 'Thailand',
							value: '+66',
						},
						{
							id: nanoid(),
							label: 'Timor-Leste',
							value: '+670',
						},
						{
							id: nanoid(),
							label: 'Togo',
							value: '+228',
						},
						{
							id: nanoid(),
							label: 'Tokelau',
							value: '+690',
						},
						{
							id: nanoid(),
							label: 'Tonga',
							value: '+676',
						},
						{
							id: nanoid(),
							label: 'Trinidad and Tobago',
							value: '+1868',
						},
						{
							id: nanoid(),
							label: 'Tunisia',
							value: '+216',
						},
						{
							id: nanoid(),
							label: 'Turkey',
							value: '+90',
						},
						{
							id: nanoid(),
							label: 'Turkmenistan',
							value: '+993',
						},
						{
							id: nanoid(),
							label: 'Turks and Caicos Islands',
							value: '+1649',
						},
						{
							id: nanoid(),
							label: 'Tuvalu',
							value: '+688',
						},
						{
							id: nanoid(),
							label: 'Uganda',
							value: '+256',
						},
						{
							id: nanoid(),
							label: 'Ukraine',
							value: '+380',
						},
						{
							id: nanoid(),
							label: 'United Arab Emirates',
							value: '+971',
						},
						{
							id: nanoid(),
							label: 'United Kingdom',
							value: '+44',
						},
						{
							id: nanoid(),
							label: 'United States',
							value: '+1',
						},
						{
							id: nanoid(),
							label: 'Uruguay',
							value: '+598',
						},
						{
							id: nanoid(),
							label: 'Uzbekistan',
							value: '+998',
						},
						{
							id: nanoid(),
							label: 'Vanuatu',
							value: '+678',
						},
						{
							id: nanoid(),
							label: 'Venezuela, Bolivarian Republic of Venezuela',
							value: '+58',
						},
						{
							id: nanoid(),
							label: 'Vietnam',
							value: '+84',
						},
						{
							id: nanoid(),
							label: 'Virgin Islands, British',
							value: '+1284',
						},
						{
							id: nanoid(),
							label: 'Virgin Islands, U.S.',
							value: '+1340',
						},
						{
							id: nanoid(),
							label: 'Wallis and Futuna',
							value: '+681',
						},
						{
							id: nanoid(),
							label: 'Western Sahara',
							value: '+212',
						},
						{
							id: nanoid(),
							label: 'Yemen',
							value: '+967',
						},
						{
							id: nanoid(),
							label: 'Zambia',
							value: '+260',
						},
						{
							id: nanoid(),
							label: 'Zimbabwe',
							value: '+263',
						},
					],
					metadata: {
						name: 'Country',
					},
				},
			],
		],
	],
	[
		'core/spacer',
		{
			height: '30px',
		},
	],
];

export default function Edit() {
	return (
		<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } template={ TEMPLATE } />
	);
}
