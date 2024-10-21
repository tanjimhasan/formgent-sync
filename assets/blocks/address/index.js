/******/ ( () => {
	// webpackBootstrap
	/******/ 'use strict';
	/******/ var __webpack_modules__ = {
		/***/ './resources/blocks/address/Edit.js':
			/*!******************************************!*\
  !*** ./resources/blocks/address/Edit.js ***!
  \******************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () => /* binding */ Edit,
						/* harmony export */
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__( /*! react */ 'react' );
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(
						react__WEBPACK_IMPORTED_MODULE_0__
					);
				/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! @wordpress/block-editor */ '@wordpress/block-editor'
					);
				/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__
					);
				/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! ./editor.scss */ './resources/blocks/address/editor.scss'
					);

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
											id: '+93',
											label: 'Afghanistan',
											value: '+93',
										},
										{
											id: '+358',
											label: 'Åland Islands',
											value: '+358',
										},
										{
											id: '+355',
											label: 'Albania',
											value: '+355',
										},
										{
											id: '+213',
											label: 'Algeria',
											value: '+213',
										},
										{
											id: '+1684',
											label: 'American Samoa',
											value: '+1684',
										},
										{
											id: '+376',
											label: 'Andorra',
											value: '+376',
										},
										{
											id: '+244',
											label: 'Angola',
											value: '+244',
										},
										{
											id: '+1264',
											label: 'Anguilla',
											value: '+1264',
										},
										{
											id: '+672',
											label: 'Antarctica',
											value: '+672',
										},
										{
											id: '+1268',
											label: 'Antigua and Barbuda',
											value: '+1268',
										},
										{
											id: '+54',
											label: 'Argentina',
											value: '+54',
										},
										{
											id: '+374',
											label: 'Armenia',
											value: '+374',
										},
										{
											id: '+297',
											label: 'Aruba',
											value: '+297',
										},
										{
											id: '+61',
											label: 'Australia',
											value: '+61',
										},
										{
											id: '+43',
											label: 'Austria',
											value: '+43',
										},
										{
											id: '+994',
											label: 'Azerbaijan',
											value: '+994',
										},
										{
											id: '+1242',
											label: 'Bahamas',
											value: '+1242',
										},
										{
											id: '+973',
											label: 'Bahrain',
											value: '+973',
										},
										{
											id: '+880',
											label: 'Bangladesh',
											value: '+880',
										},
										{
											id: '+1246',
											label: 'Barbados',
											value: '+1246',
										},
										{
											id: '+375',
											label: 'Belarus',
											value: '+375',
										},
										{
											id: '+32',
											label: 'Belgium',
											value: '+32',
										},
										{
											id: '+501',
											label: 'Belize',
											value: '+501',
										},
										{
											id: '+229',
											label: 'Benin',
											value: '+229',
										},
										{
											id: '+1441',
											label: 'Bermuda',
											value: '+1441',
										},
										{
											id: '+975',
											label: 'Bhutan',
											value: '+975',
										},
										{
											id: '+591',
											label: 'Bolivia, Plurinational State of bolivia',
											value: '+591',
										},
										{
											id: '+387',
											label: 'Bosnia and Herzegovina',
											value: '+387',
										},
										{
											id: '+267',
											label: 'Botswana',
											value: '+267',
										},
										{
											id: '+47',
											label: 'Bouvet Island',
											value: '+47',
										},
										{
											id: '+55',
											label: 'Brazil',
											value: '+55',
										},
										{
											id: '+246',
											label: 'British Indian Ocean Territory',
											value: '+246',
										},
										{
											id: '+673',
											label: 'Brunei Darussalam',
											value: '+673',
										},
										{
											id: '+359',
											label: 'Bulgaria',
											value: '+359',
										},
										{
											id: '+226',
											label: 'Burkina Faso',
											value: '+226',
										},
										{
											id: '+257',
											label: 'Burundi',
											value: '+257',
										},
										{
											id: '+855',
											label: 'Cambodia',
											value: '+855',
										},
										{
											id: '+237',
											label: 'Cameroon',
											value: '+237',
										},
										{
											id: '+1',
											label: 'Canada',
											value: '+1',
										},
										{
											id: '+238',
											label: 'Cape Verde',
											value: '+238',
										},
										{
											id: '+345',
											label: 'Cayman Islands',
											value: '+345',
										},
										{
											id: '+236',
											label: 'Central African Republic',
											value: '+236',
										},
										{
											id: '+235',
											label: 'Chad',
											value: '+235',
										},
										{
											id: '+56',
											label: 'Chile',
											value: '+56',
										},
										{
											id: '+86',
											label: 'China',
											value: '+86',
										},
										{
											id: '+61',
											label: 'Christmas Island',
											value: '+61',
										},
										{
											id: '+61',
											label: 'Cocos (Keeling) Islands',
											value: '+61',
										},
										{
											id: '+57',
											label: 'Colombia',
											value: '+57',
										},
										{
											id: '+269',
											label: 'Comoros',
											value: '+269',
										},
										{
											id: '+242',
											label: 'Congo',
											value: '+242',
										},
										{
											id: '+243',
											label: 'Congo, The Democratic Republic of the Congo',
											value: '+243',
										},
										{
											id: '+682',
											label: 'Cook Islands',
											value: '+682',
										},
										{
											id: '+506',
											label: 'Costa Rica',
											value: '+506',
										},
										{
											id: '+225',
											label: "Cote d'Ivoire",
											value: '+225',
										},
										{
											id: '+385',
											label: 'Croatia',
											value: '+385',
										},
										{
											id: '+53',
											label: 'Cuba',
											value: '+53',
										},
										{
											id: '+357',
											label: 'Cyprus',
											value: '+357',
										},
										{
											id: '+420',
											label: 'Czech Republic',
											value: '+420',
										},
										{
											id: '+45',
											label: 'Denmark',
											value: '+45',
										},
										{
											id: '+253',
											label: 'Djibouti',
											value: '+253',
										},
										{
											id: '+1767',
											label: 'Dominica',
											value: '+1767',
										},
										{
											id: '+1849',
											label: 'Dominican Republic',
											value: '+1849',
										},
										{
											id: '+593',
											label: 'Ecuador',
											value: '+593',
										},
										{
											id: '+20',
											label: 'Egypt',
											value: '+20',
										},
										{
											id: '+503',
											label: 'El Salvador',
											value: '+503',
										},
										{
											id: '+240',
											label: 'Equatorial Guinea',
											value: '+240',
										},
										{
											id: '+291',
											label: 'Eritrea',
											value: '+291',
										},
										{
											id: '+372',
											label: 'Estonia',
											value: '+372',
										},
										{
											id: '+251',
											label: 'Ethiopia',
											value: '+251',
										},
										{
											id: '+500',
											label: 'Falkland Islands (Malvinas)',
											value: '+500',
										},
										{
											id: '+298',
											label: 'Faroe Islands',
											value: '+298',
										},
										{
											id: '+679',
											label: 'Fiji',
											value: '+679',
										},
										{
											id: '+358',
											label: 'Finland',
											value: '+358',
										},
										{
											id: '+33',
											label: 'France',
											value: '+33',
										},
										{
											id: '+594',
											label: 'French Guiana',
											value: '+594',
										},
										{
											id: '+689',
											label: 'French Polynesia',
											value: '+689',
										},
										{
											id: '+262',
											label: 'French Southern Territories',
											value: '+262',
										},
										{
											id: '+241',
											label: 'Gabon',
											value: '+241',
										},
										{
											id: '+220',
											label: 'Gambia',
											value: '+220',
										},
										{
											id: '+995',
											label: 'Georgia',
											value: '+995',
										},
										{
											id: '+49',
											label: 'Germany',
											value: '+49',
										},
										{
											id: '+233',
											label: 'Ghana',
											value: '+233',
										},
										{
											id: '+350',
											label: 'Gibraltar',
											value: '+350',
										},
										{
											id: '+30',
											label: 'Greece',
											value: '+30',
										},
										{
											id: '+299',
											label: 'Greenland',
											value: '+299',
										},
										{
											id: '+1473',
											label: 'Grenada',
											value: '+1473',
										},
										{
											id: '+590',
											label: 'Guadeloupe',
											value: '+590',
										},
										{
											id: '+1671',
											label: 'Guam',
											value: '+1671',
										},
										{
											id: '+502',
											label: 'Guatemala',
											value: '+502',
										},
										{
											id: '+441481',
											label: 'Guernsey',
											value: '+441481',
										},
										{
											id: '+224',
											label: 'Guinea',
											value: '+224',
										},
										{
											id: '+245',
											label: 'Guinea-Bissau',
											value: '+245',
										},
										{
											id: '+592',
											label: 'Guyana',
											value: '+592',
										},
										{
											id: '+509',
											label: 'Haiti',
											value: '+509',
										},
										{
											id: '+379',
											label: 'Holy See (Vatican City State)',
											value: '+379',
										},
										{
											id: '+504',
											label: 'Honduras',
											value: '+504',
										},
										{
											id: '+852',
											label: 'Hong Kong',
											value: '+852',
										},
										{
											id: '+36',
											label: 'Hungary',
											value: '+36',
										},
										{
											id: '+354',
											label: 'Iceland',
											value: '+354',
										},
										{
											id: '+91',
											label: 'India',
											value: '+91',
										},
										{
											id: '+62',
											label: 'Indonesia',
											value: '+62',
										},
										{
											id: '+98',
											label: 'Iran, Islamic Republic of Persian Gulf',
											value: '+98',
										},
										{
											id: '+964',
											label: 'Iraq',
											value: '+964',
										},
										{
											id: '+353',
											label: 'Ireland',
											value: '+353',
										},
										{
											id: '+441624',
											label: 'Isle of Man',
											value: '+441624',
										},
										{
											id: '+972',
											label: 'Israel',
											value: '+972',
										},
										{
											id: '+39',
											label: 'Italy',
											value: '+39',
										},
										{
											id: '+1876',
											label: 'Jamaica',
											value: '+1876',
										},
										{
											id: '+81',
											label: 'Japan',
											value: '+81',
										},
										{
											id: '+441534',
											label: 'Jersey',
											value: '+441534',
										},
										{
											id: '+962',
											label: 'Jordan',
											value: '+962',
										},
										{
											id: '+7',
											label: 'Kazakhstan',
											value: '+7',
										},
										{
											id: '+254',
											label: 'Kenya',
											value: '+254',
										},
										{
											id: '+686',
											label: 'Kiribati',
											value: '+686',
										},
										{
											id: '+850',
											label: "Korea, Democratic People's Republic of Korea",
											value: '+850',
										},
										{
											id: '+82',
											label: 'Korea, Republic of South Korea',
											value: '+82',
										},
										{
											id: '+965',
											label: 'Kuwait',
											value: '+965',
										},
										{
											id: '+996',
											label: 'Kyrgyzstan',
											value: '+996',
										},
										{
											id: '+856',
											label: "Laos People's Democratic Republic",
											value: '+856',
										},
										{
											id: '+371',
											label: 'Latvia',
											value: '+371',
										},
										{
											id: '+961',
											label: 'Lebanon',
											value: '+961',
										},
										{
											id: '+266',
											label: 'Lesotho',
											value: '+266',
										},
										{
											id: '+231',
											label: 'Liberia',
											value: '+231',
										},
										{
											id: '+218',
											label: 'Libyan Arab Jamahiriya',
											value: '+218',
										},
										{
											id: '+423',
											label: 'Liechtenstein',
											value: '+423',
										},
										{
											id: '+370',
											label: 'Lithuania',
											value: '+370',
										},
										{
											id: '+352',
											label: 'Luxembourg',
											value: '+352',
										},
										{
											id: '+853',
											label: 'Macao',
											value: '+853',
										},
										{
											id: '+389',
											label: 'Macedonia',
											value: '+389',
										},
										{
											id: '+261',
											label: 'Madagascar',
											value: '+261',
										},
										{
											id: '+265',
											label: 'Malawi',
											value: '+265',
										},
										{
											id: '+60',
											label: 'Malaysia',
											value: '+60',
										},
										{
											id: '+960',
											label: 'Maldives',
											value: '+960',
										},
										{
											id: '+223',
											label: 'Mali',
											value: '+223',
										},
										{
											id: '+356',
											label: 'Malta',
											value: '+356',
										},
										{
											id: '+692',
											label: 'Marshall Islands',
											value: '+692',
										},
										{
											id: '+596',
											label: 'Martinique',
											value: '+596',
										},
										{
											id: '+222',
											label: 'Mauritania',
											value: '+222',
										},
										{
											id: '+230',
											label: 'Mauritius',
											value: '+230',
										},
										{
											id: '+262',
											label: 'Mayotte',
											value: '+262',
										},
										{
											id: '+52',
											label: 'Mexico',
											value: '+52',
										},
										{
											id: '+691',
											label: 'Micronesia, Federated States of Micronesia',
											value: '+691',
										},
										{
											id: '+373',
											label: 'Moldova',
											value: '+373',
										},
										{
											id: '+377',
											label: 'Monaco',
											value: '+377',
										},
										{
											id: '+976',
											label: 'Mongolia',
											value: '+976',
										},
										{
											id: '+382',
											label: 'Montenegro',
											value: '+382',
										},
										{
											id: '+1664',
											label: 'Montserrat',
											value: '+1664',
										},
										{
											id: '+212',
											label: 'Morocco',
											value: '+212',
										},
										{
											id: '+258',
											label: 'Mozambique',
											value: '+258',
										},
										{
											id: '+95',
											label: 'Myanmar',
											value: '+95',
										},
										{
											id: '+264',
											label: 'Namibia',
											value: '+264',
										},
										{
											id: '+674',
											label: 'Nauru',
											value: '+674',
										},
										{
											id: '+977',
											label: 'Nepal',
											value: '+977',
										},
										{
											id: '+31',
											label: 'Netherlands',
											value: '+31',
										},
										{
											id: '+599',
											label: 'Netherlands Antilles',
											value: '+599',
										},
										{
											id: '+687',
											label: 'New Caledonia',
											value: '+687',
										},
										{
											id: '+64',
											label: 'New Zealand',
											value: '+64',
										},
										{
											id: '+505',
											label: 'Nicaragua',
											value: '+505',
										},
										{
											id: '+227',
											label: 'Niger',
											value: '+227',
										},
										{
											id: '+234',
											label: 'Nigeria',
											value: '+234',
										},
										{
											id: '+683',
											label: 'Niue',
											value: '+683',
										},
										{
											id: '+672',
											label: 'Norfolk Island',
											value: '+672',
										},
										{
											id: '+1670',
											label: 'Northern Mariana Islands',
											value: '+1670',
										},
										{
											id: '+47',
											label: 'Norway',
											value: '+47',
										},
										{
											id: '+968',
											label: 'Oman',
											value: '+968',
										},
										{
											id: '+92',
											label: 'Pakistan',
											value: '+92',
										},
										{
											id: '+680',
											label: 'Palau',
											value: '+680',
										},
										{
											id: '+970',
											label: 'Palestinian Territory, Occupied',
											value: '+970',
										},
										{
											id: '+507',
											label: 'Panama',
											value: '+507',
										},
										{
											id: '+675',
											label: 'Papua New Guinea',
											value: '+675',
										},
										{
											id: '+595',
											label: 'Paraguay',
											value: '+595',
										},
										{
											id: '+51',
											label: 'Peru',
											value: '+51',
										},
										{
											id: '+63',
											label: 'Philippines',
											value: '+63',
										},
										{
											id: '+64',
											label: 'Pitcairn',
											value: '+64',
										},
										{
											id: '+48',
											label: 'Poland',
											value: '+48',
										},
										{
											id: '+351',
											label: 'Portugal',
											value: '+351',
										},
										{
											id: '+1939',
											label: 'Puerto Rico',
											value: '+1939',
										},
										{
											id: '+974',
											label: 'Qatar',
											value: '+974',
										},
										{
											id: '+40',
											label: 'Romania',
											value: '+40',
										},
										{
											id: '+7',
											label: 'Russia',
											value: '+7',
										},
										{
											id: '+250',
											label: 'Rwanda',
											value: '+250',
										},
										{
											id: '+262',
											label: 'Reunion',
											value: '+262',
										},
										{
											id: '+590',
											label: 'Saint Barthelemy',
											value: '+590',
										},
										{
											id: '+290',
											label: 'Saint Helena, Ascension and Tristan Da Cunha',
											value: '+290',
										},
										{
											id: '+1869',
											label: 'Saint Kitts and Nevis',
											value: '+1869',
										},
										{
											id: '+1758',
											label: 'Saint Lucia',
											value: '+1758',
										},
										{
											id: '+590',
											label: 'Saint Martin',
											value: '+590',
										},
										{
											id: '+508',
											label: 'Saint Pierre and Miquelon',
											value: '+508',
										},
										{
											id: '+1784',
											label: 'Saint Vincent and the Grenadines',
											value: '+1784',
										},
										{
											id: '+684',
											label: 'Samoa',
											value: '+684',
										},
										{
											id: '+378',
											label: 'San Marino',
											value: '+378',
										},
										{
											id: '+239',
											label: 'Sao Tome and Principe',
											value: '+239',
										},
										{
											id: '+966',
											label: 'Saudi Arabia',
											value: '+966',
										},
										{
											id: '+221',
											label: 'Senegal',
											value: '+221',
										},
										{
											id: '+381',
											label: 'Serbia',
											value: '+381',
										},
										{
											id: '+248',
											label: 'Seychelles',
											value: '+248',
										},
										{
											id: '+232',
											label: 'Sierra Leone',
											value: '+232',
										},
										{
											id: '+65',
											label: 'Singapore',
											value: '+65',
										},
										{
											id: '+421',
											label: 'Slovakia',
											value: '+421',
										},
										{
											id: '+386',
											label: 'Slovenia',
											value: '+386',
										},
										{
											id: '+677',
											label: 'Solomon Islands',
											value: '+677',
										},
										{
											id: '+252',
											label: 'Somalia',
											value: '+252',
										},
										{
											id: '+27',
											label: 'South Africa',
											value: '+27',
										},
										{
											id: '+500',
											label: 'South Georgia and the South Sandwich Islands',
											value: '+500',
										},
										{
											id: '+211',
											label: 'South Sudan',
											value: '+211',
										},
										{
											id: '+34',
											label: 'Spain',
											value: '+34',
										},
										{
											id: '+94',
											label: 'Sri Lanka',
											value: '+94',
										},
										{
											id: '+249',
											label: 'Sudan',
											value: '+249',
										},
										{
											id: '+597',
											label: 'Suriname',
											value: '+597',
										},
										{
											id: '+47',
											label: 'Svalbard and Jan Mayen',
											value: '+47',
										},
										{
											id: '+268',
											label: 'Swaziland',
											value: '+268',
										},
										{
											id: '+46',
											label: 'Sweden',
											value: '+46',
										},
										{
											id: '+41',
											label: 'Switzerland',
											value: '+41',
										},
										{
											id: '+963',
											label: 'Syrian Arab Republic',
											value: '+963',
										},
										{
											id: '+886',
											label: 'Taiwan',
											value: '+886',
										},
										{
											id: '+992',
											label: 'Tajikistan',
											value: '+992',
										},
										{
											id: '+255',
											label: 'Tanzania, United Republic of Tanzania',
											value: '+255',
										},
										{
											id: '+66',
											label: 'Thailand',
											value: '+66',
										},
										{
											id: '+670',
											label: 'Timor-Leste',
											value: '+670',
										},
										{
											id: '+228',
											label: 'Togo',
											value: '+228',
										},
										{
											id: '+690',
											label: 'Tokelau',
											value: '+690',
										},
										{
											id: '+676',
											label: 'Tonga',
											value: '+676',
										},
										{
											id: '+1868',
											label: 'Trinidad and Tobago',
											value: '+1868',
										},
										{
											id: '+216',
											label: 'Tunisia',
											value: '+216',
										},
										{
											id: '+90',
											label: 'Turkey',
											value: '+90',
										},
										{
											id: '+993',
											label: 'Turkmenistan',
											value: '+993',
										},
										{
											id: '+1649',
											label: 'Turks and Caicos Islands',
											value: '+1649',
										},
										{
											id: '+688',
											label: 'Tuvalu',
											value: '+688',
										},
										{
											id: '+256',
											label: 'Uganda',
											value: '+256',
										},
										{
											id: '+380',
											label: 'Ukraine',
											value: '+380',
										},
										{
											id: '+971',
											label: 'United Arab Emirates',
											value: '+971',
										},
										{
											id: '+44',
											label: 'United Kingdom',
											value: '+44',
										},
										{
											id: '+1',
											label: 'United States',
											value: '+1',
										},
										{
											id: '+598',
											label: 'Uruguay',
											value: '+598',
										},
										{
											id: '+998',
											label: 'Uzbekistan',
											value: '+998',
										},
										{
											id: '+678',
											label: 'Vanuatu',
											value: '+678',
										},
										{
											id: '+58',
											label: 'Venezuela, Bolivarian Republic of Venezuela',
											value: '+58',
										},
										{
											id: '+84',
											label: 'Vietnam',
											value: '+84',
										},
										{
											id: '+1284',
											label: 'Virgin Islands, British',
											value: '+1284',
										},
										{
											id: '+1340',
											label: 'Virgin Islands, U.S.',
											value: '+1340',
										},
										{
											id: '+681',
											label: 'Wallis and Futuna',
											value: '+681',
										},
										{
											id: '+212',
											label: 'Western Sahara',
											value: '+212',
										},
										{
											id: '+967',
											label: 'Yemen',
											value: '+967',
										},
										{
											id: '+260',
											label: 'Zambia',
											value: '+260',
										},
										{
											id: '+263',
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
				function Edit() {
					return ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
						_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks,
						{
							allowedBlocks: ALLOWED_BLOCKS,
							template: TEMPLATE,
						}
					);
				}

				/***/
			},

		/***/ './resources/blocks/address/Save.js':
			/*!******************************************!*\
  !*** ./resources/blocks/address/Save.js ***!
  \******************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () => /* binding */ Save,
						/* harmony export */
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__( /*! react */ 'react' );
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(
						react__WEBPACK_IMPORTED_MODULE_0__
					);
				/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! @wordpress/block-editor */ '@wordpress/block-editor'
					);
				/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__
					);

				function Save() {
					return ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
						'div',
						{
							..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(),
						},
						( 0, react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
							_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__
								.InnerBlocks.Content,
							null
						)
					);
				}

				/***/
			},

		/***/ './resources/blocks/address/index.js':
			/*!*******************************************!*\
  !*** ./resources/blocks/address/index.js ***!
  \*******************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				__webpack_require__.r( __webpack_exports__ );
				/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! @wordpress/i18n */ '@wordpress/i18n'
					);
				/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__
					);
				/* harmony import */ var _formgent_modules__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! @formgent/modules */ '@formgent/modules'
					);
				/* harmony import */ var _formgent_modules__WEBPACK_IMPORTED_MODULE_1___default =
					/*#__PURE__*/ __webpack_require__.n(
						_formgent_modules__WEBPACK_IMPORTED_MODULE_1__
					);
				/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! ./Edit */ './resources/blocks/address/Edit.js'
					);
				/* harmony import */ var _Save__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						/*! ./Save */ './resources/blocks/address/Save.js'
					);
				/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						/*! ./block.json */ './resources/blocks/address/block.json'
					);
				/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ =
					__webpack_require__(
						/*! ./style.scss */ './resources/blocks/address/style.scss'
					);
				/**
				 * wordpress dependencies
				 */

				/**
				 * Internal dependencies
				 */

				const exampleAttributes = {};
				const generalControls = {
					general: {
						type: 'panel',
						children: {
							name: {
								type: 'text',
								label: ( 0,
								_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
									'Field Name',
									'formgent'
								),
							},
						},
					},
				};
				const advancedControls = {};
				const controls = {
					generalControls,
					advancedControls,
				};
				( 0,
				_formgent_modules__WEBPACK_IMPORTED_MODULE_1__.registerBlock )(
					_block_json__WEBPACK_IMPORTED_MODULE_4__,
					controls,
					_Edit__WEBPACK_IMPORTED_MODULE_2__[ 'default' ],
					'smiley',
					exampleAttributes,
					{
						save: _Save__WEBPACK_IMPORTED_MODULE_3__[ 'default' ],
					}
				);

				/***/
			},

		/***/ './resources/blocks/address/editor.scss':
			/*!**********************************************!*\
  !*** ./resources/blocks/address/editor.scss ***!
  \**********************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				__webpack_require__.r( __webpack_exports__ );
				// extracted by mini-css-extract-plugin

				/***/
			},

		/***/ './resources/blocks/address/style.scss':
			/*!*********************************************!*\
  !*** ./resources/blocks/address/style.scss ***!
  \*********************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				__webpack_require__.r( __webpack_exports__ );
				// extracted by mini-css-extract-plugin

				/***/
			},

		/***/ react:
			/*!************************!*\
  !*** external "React" ***!
  \************************/
			/***/ ( module ) => {
				module.exports = window[ 'React' ];

				/***/
			},

		/***/ '@formgent/modules':
			/*!***************************************!*\
  !*** external ["formgent","modules"] ***!
  \***************************************/
			/***/ ( module ) => {
				module.exports = window[ 'formgent' ][ 'modules' ];

				/***/
			},

		/***/ '@wordpress/block-editor':
			/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
			/***/ ( module ) => {
				module.exports = window[ 'wp' ][ 'blockEditor' ];

				/***/
			},

		/***/ '@wordpress/i18n':
			/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
			/***/ ( module ) => {
				module.exports = window[ 'wp' ][ 'i18n' ];

				/***/
			},

		/***/ './resources/blocks/address/block.json':
			/*!*********************************************!*\
  !*** ./resources/blocks/address/block.json ***!
  \*********************************************/
			/***/ ( module ) => {
				module.exports = /*#__PURE__*/ JSON.parse(
					'{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"formgent/address","title":"Address","category":"formgent","description":"FormGent Address field.","textdomain":"formgent","attributes":{"id":{"type":"string","default":""},"name":{"type":"string","default":"address"}},"supports":{"interactivity":true},"editorScript":"file:index.js","style":"file:style-index.css","editorStyle":"file:index.css"}'
				);

				/***/
			},

		/******/
	};
	/************************************************************************/
	/******/ // The module cache
	/******/ var __webpack_module_cache__ = {};
	/******/
	/******/ // The require function
	/******/ function __webpack_require__( moduleId ) {
		/******/ // Check if module is in cache
		/******/ var cachedModule = __webpack_module_cache__[ moduleId ];
		/******/ if ( cachedModule !== undefined ) {
			/******/ return cachedModule.exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/ var module = ( __webpack_module_cache__[ moduleId ] = {
			/******/ // no module.id needed
			/******/ // no module.loaded needed
			/******/ exports: {},
			/******/
		} );
		/******/
		/******/ // Execute the module function
		/******/ __webpack_modules__[ moduleId ](
			module,
			module.exports,
			__webpack_require__
		);
		/******/
		/******/ // Return the exports of the module
		/******/ return module.exports;
		/******/
	}
	/******/
	/******/ // expose the modules object (__webpack_modules__)
	/******/ __webpack_require__.m = __webpack_modules__;
	/******/
	/************************************************************************/
	/******/ /* webpack/runtime/chunk loaded */
	/******/ ( () => {
		/******/ var deferred = [];
		/******/ __webpack_require__.O = ( result, chunkIds, fn, priority ) => {
			/******/ if ( chunkIds ) {
				/******/ priority = priority || 0;
				/******/ for (
					var i = deferred.length;
					i > 0 && deferred[ i - 1 ][ 2 ] > priority;
					i--
				)
					deferred[ i ] = deferred[ i - 1 ];
				/******/ deferred[ i ] = [ chunkIds, fn, priority ];
				/******/ return;
				/******/
			}
			/******/ var notFulfilled = Infinity;
			/******/ for ( var i = 0; i < deferred.length; i++ ) {
				/******/ var chunkIds = deferred[ i ][ 0 ];
				/******/ var fn = deferred[ i ][ 1 ];
				/******/ var priority = deferred[ i ][ 2 ];
				/******/ var fulfilled = true;
				/******/ for ( var j = 0; j < chunkIds.length; j++ ) {
					/******/ if (
						( priority & ( 1 === 0 ) ||
							notFulfilled >= priority ) &&
						Object.keys( __webpack_require__.O ).every( ( key ) =>
							__webpack_require__.O[ key ]( chunkIds[ j ] )
						)
					) {
						/******/ chunkIds.splice( j--, 1 );
						/******/
					} else {
						/******/ fulfilled = false;
						/******/ if ( priority < notFulfilled )
							notFulfilled = priority;
						/******/
					}
					/******/
				}
				/******/ if ( fulfilled ) {
					/******/ deferred.splice( i--, 1 );
					/******/ var r = fn();
					/******/ if ( r !== undefined ) result = r;
					/******/
				}
				/******/
			}
			/******/ return result;
			/******/
		};
		/******/
	} )();
	/******/
	/******/ /* webpack/runtime/compat get default export */
	/******/ ( () => {
		/******/ // getDefaultExport function for compatibility with non-harmony modules
		/******/ __webpack_require__.n = ( module ) => {
			/******/ var getter =
				module && module.__esModule
					? /******/ () => module[ 'default' ]
					: /******/ () => module;
			/******/ __webpack_require__.d( getter, { a: getter } );
			/******/ return getter;
			/******/
		};
		/******/
	} )();
	/******/
	/******/ /* webpack/runtime/define property getters */
	/******/ ( () => {
		/******/ // define getter functions for harmony exports
		/******/ __webpack_require__.d = ( exports, definition ) => {
			/******/ for ( var key in definition ) {
				/******/ if (
					__webpack_require__.o( definition, key ) &&
					! __webpack_require__.o( exports, key )
				) {
					/******/ Object.defineProperty( exports, key, {
						enumerable: true,
						get: definition[ key ],
					} );
					/******/
				}
				/******/
			}
			/******/
		};
		/******/
	} )();
	/******/
	/******/ /* webpack/runtime/hasOwnProperty shorthand */
	/******/ ( () => {
		/******/ __webpack_require__.o = ( obj, prop ) =>
			Object.prototype.hasOwnProperty.call( obj, prop );
		/******/
	} )();
	/******/
	/******/ /* webpack/runtime/make namespace object */
	/******/ ( () => {
		/******/ // define __esModule on exports
		/******/ __webpack_require__.r = ( exports ) => {
			/******/ if (
				typeof Symbol !== 'undefined' &&
				Symbol.toStringTag
			) {
				/******/ Object.defineProperty( exports, Symbol.toStringTag, {
					value: 'Module',
				} );
				/******/
			}
			/******/ Object.defineProperty( exports, '__esModule', {
				value: true,
			} );
			/******/
		};
		/******/
	} )();
	/******/
	/******/ /* webpack/runtime/jsonp chunk loading */
	/******/ ( () => {
		/******/ // no baseURI
		/******/
		/******/ // object to store loaded and loading chunks
		/******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
		/******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
		/******/ var installedChunks = {
			/******/ 'address/index': 0,
			/******/ 'address/style-index': 0,
			/******/
		};
		/******/
		/******/ // no chunk on demand loading
		/******/
		/******/ // no prefetching
		/******/
		/******/ // no preloaded
		/******/
		/******/ // no HMR
		/******/
		/******/ // no HMR manifest
		/******/
		/******/ __webpack_require__.O.j = ( chunkId ) =>
			installedChunks[ chunkId ] === 0;
		/******/
		/******/ // install a JSONP callback for chunk loading
		/******/ var webpackJsonpCallback = (
			parentChunkLoadingFunction,
			data
		) => {
			/******/ var chunkIds = data[ 0 ];
			/******/ var moreModules = data[ 1 ];
			/******/ var runtime = data[ 2 ];
			/******/ // add "moreModules" to the modules object,
			/******/ // then flag all "chunkIds" as loaded and fire callback
			/******/ var moduleId,
				chunkId,
				i = 0;
			/******/ if (
				chunkIds.some( ( id ) => installedChunks[ id ] !== 0 )
			) {
				/******/ for ( moduleId in moreModules ) {
					/******/ if (
						__webpack_require__.o( moreModules, moduleId )
					) {
						/******/ __webpack_require__.m[ moduleId ] =
							moreModules[ moduleId ];
						/******/
					}
					/******/
				}
				/******/ if ( runtime )
					var result = runtime( __webpack_require__ );
				/******/
			}
			/******/ if ( parentChunkLoadingFunction )
				parentChunkLoadingFunction( data );
			/******/ for ( ; i < chunkIds.length; i++ ) {
				/******/ chunkId = chunkIds[ i ];
				/******/ if (
					__webpack_require__.o( installedChunks, chunkId ) &&
					installedChunks[ chunkId ]
				) {
					/******/ installedChunks[ chunkId ][ 0 ]();
					/******/
				}
				/******/ installedChunks[ chunkId ] = 0;
				/******/
			}
			/******/ return __webpack_require__.O( result );
			/******/
		};
		/******/
		/******/ var chunkLoadingGlobal = ( self[ 'webpackChunkformgent' ] =
			self[ 'webpackChunkformgent' ] || [] );
		/******/ chunkLoadingGlobal.forEach(
			webpackJsonpCallback.bind( null, 0 )
		);
		/******/ chunkLoadingGlobal.push = webpackJsonpCallback.bind(
			null,
			chunkLoadingGlobal.push.bind( chunkLoadingGlobal )
		);
		/******/
	} )();
	/******/
	/************************************************************************/
	/******/
	/******/ // startup
	/******/ // Load entry module and return exports
	/******/ // This entry module depends on other loaded chunks and execution need to be delayed
	/******/ var __webpack_exports__ = __webpack_require__.O(
		undefined,
		[ 'address/style-index' ],
		() => __webpack_require__( './resources/blocks/address/index.js' )
	);
	/******/ __webpack_exports__ = __webpack_require__.O( __webpack_exports__ );
	/******/
	/******/
} )();
//# sourceMappingURL=index.js.map
