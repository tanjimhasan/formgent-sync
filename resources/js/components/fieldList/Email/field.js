import { nanoid } from 'nanoid';

const Email = {
	id: nanoid( 12 ),
	type: 'email',
	name: 'email',
	group_name: 'basic',
	general_option: {
		label: 'Email',
		description: '',
		placeholder: 'Email Address',
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
		container_class: '',
		field_class: '',
		max_length: '',
		logics: {
			is_advance_logic_active: '0',
		},
	},
};

export default Email;