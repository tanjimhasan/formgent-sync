import { nanoid } from 'nanoid';

const Name = {
	id: nanoid( 12 ),
	type: 'name',
	name: 'name',
	group_name: 'basic',
	fields: [
		{
			// The user cannot change Name field child item input name. we will use the type as a input name.
			id: nanoid( 12 ),
			placeholder: 'First Name',
			type: 'first_name',
			validations: {
				required: {
					value: '0',
					message: 'This field is required',
					global_message: 'This field is required',
				},
			},
		},
		{
			id: nanoid( 12 ),
			placeholder: 'Middle Name',
			type: 'middle_name',
			validations: {
				required: {
					value: '0',
					message: 'This field is required',
					global_message: 'This field is required',
				},
			},
		},
		{
			id: nanoid( 12 ),
			type: 'last_name',
			placeholder: 'Last Name',
			validations: {
				required: {
					value: '0',
					message: 'This field is required',
					global_message: 'This field is required',
				},
			},
		},
	],
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
