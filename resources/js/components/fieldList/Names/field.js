import { nanoid } from 'nanoid';

const Names = {
	id: nanoid( 12 ),
	type: 'names',
	name: 'names',
	fields: [
		{
			// The user cannot change Name field child item input name. we will use the type as a input name.
			id: nanoid( 12 ),
			type: 'first_name',
			label: 'First Name',
			placeholder: 'First Name',
		},
		{
			id: nanoid( 12 ),
			label: 'Middle Name',
			type: 'middle_name',
			placeholder: 'Middle Name',
		},
		{
			id: nanoid( 12 ),
			type: 'last_name',
			label: 'Last Name',
			placeholder: 'Last Name',
		},
	],
	general_option: {
		label: '',
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

export default Names;
