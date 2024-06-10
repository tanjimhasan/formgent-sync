import { nanoid } from 'nanoid';

const LongText = {
	id: nanoid( 12 ),
	type: 'long_text',
	name: 'long_text',
	fields: [
		{
			id: nanoid( 12 ),
			type: 'long_text',
			label: 'Long Text',
			placeholder: 'Short text',
		},
	],
	general_option: {
		label: 'Long text',
		label_alignment: 'left', //left,right,top
		format: 'full', //full,f-l, f-m-l
		validations: {
			required: {
				value: '0',
				message: 'This field is required',
				global_message: 'This field is required',
			},
		},
	},
	advance_option: {
		default_value: '',
		css_class: '',
		logics: {
			is_advance_logic_active: '0',
		},
	},
};

export default LongText;
