import { nanoid } from 'nanoid';

const ShortText = {
	id: nanoid( 12 ),
	type: 'short_text',
	name: 'short_text',
	group_name: 'general',
	general_option: {
		label: 'Short text',
		placeholder: '',
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

export default ShortText;
