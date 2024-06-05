import { nanoid } from 'nanoid';

const Name = {
	id: nanoid( 12 ),
	type: 'name',
	name: 'name',
	group_name: 'basic',
	fields: {
		first_name: {
			// The user cannot change the child field input name. we will use the object key as a input name.
			placeholder: 'First Name',
			validations: {
				required: {
					value: '0',
					message: 'This field is required',
					global_message: 'This field is required',
				},
			},
		},
		middle_name: {
			placeholder: 'Middle Name',
			validations: {
				required: {
					value: '0',
					message: 'This field is required',
					global_message: 'This field is required',
				},
			},
		},
		last_name: {
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
	general_option: {
		label: '',
		description: '',
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
