import { nanoid } from 'nanoid';

const SubmitButton = {
	id: nanoid( 12 ),
	type: 'submit',
	name: 'name',
	general_option: {
		button_text: 'Submit Form',
		button_size: 'medium',
		button_style: 'default',
	},
	advance_option: {
		container_class: '',
	},
};

export default SubmitButton;
