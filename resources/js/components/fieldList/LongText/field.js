import { nanoid } from 'nanoid';

const LongText = {
	id: nanoid( 12 ),
	type: 'long_text',
	name: 'long_text',
	general_option: {
		label: 'Long text',
		description: '',
		placeholder: '',
		row: '',
		cols: '',
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

export default LongText;
