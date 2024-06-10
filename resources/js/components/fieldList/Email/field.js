import { nanoid } from 'nanoid';

const Email = {
	id: nanoid( 12 ),
	type: 'email',
	name: 'email',
	fields: [
		{
			id: nanoid( 12 ),
			type: 'email',
			label: 'example@example.com',
			placeholder: 'Email address',
		},
	],
	general_option: {
		label: 'Email',
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

export default Email;
