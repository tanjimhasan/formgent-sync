import { nanoid } from 'nanoid';

const Name = {
	id: nanoid( 12 ),
	type: 'name',
	name: 'name',
	group_name: 'basic',
	general_option: {
		label: '',
		description: '',
		first_name: {
			name: 'first_name',
			placeholder: 'First Name',
			validations: {
				required: {
					value: '0',
					message: 'This field is required',
					global_message: 'This field is required',
				},
			},
		},
		last_name: {
			name: 'last_name',
			placeholder: 'Last Name',
			validations: {
				required: {
					value: '0',
					message: 'This field is required',
					global_message: 'This field is required',
				},
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

export default Name;
