import { doAction } from '@wordpress/hooks';
import postData from './postData';
// import { registerElements } from '@helpgent/elements';
import { __ } from '@wordpress/i18n';

export default async function handleCreateForm(
	forms,
	singleFormSate,
	data,
	setServerErrors,
	storeSingleForm,
	storsForm,
	navigate
) {
	// const initialElementsInstance = registerElements().filter(
	// 	( item ) =>
	// 		item.element_type === 'welcome' ||
	// 		item.element_type === 'end' ||
	// 		item.element_type === 'user_validation'
	// );

	let screenFormContent = {};

	let globalSettingsData = {};
	//Global new options object
	const globalNewOptions = {
		color_style: {
			icon: {
				value: '#3C3C3C',
			},
			title: {
				value: '#000000',
			},
			description: {
				value: '#3C3C3C',
			},
			chat_title_color: {
				value: '#000000',
			},
			button: {
				value: '#6551F2',
			},
			button_text: {
				value: '#ffffff',
			},
			footer_text_color: {
				value: '#6E6E6E',
			},
			options_color: {
				value: '#3c3c3c',
			},
		},
		corner: 'round', //partiallyRound, square
		element_size: 'md', //lg, sm
		specialElement_size: 'md', //lg, sm
		background_image: null,
		background_color: '#ffffff',
		background_style: {
			background_overlay: {
				isActive: '1',
			},
			overlay_color: {
				value: '#000000',
			},
			overlay_opacity: {
				value: '50',
			},
		},
		font_family: { family: 'Inter', category: 'sans-serif' },
		font_weight_variations: [ 400, 500, 600 ],
	};
	// if ( formContent ) {
	// 	// Here we create form from premade template
	// 	const globalOldOptions = Object.assign(
	// 		{},
	// 		JSON.parse( formContent ).global
	// 	);
	// 	const elementsData = JSON.parse( formContent ).elements;
	// 	globalSettingsData = {
	// 		...globalOldOptions,
	// 		...globalNewOptions,
	// 	};
	// 	screenFormContent = JSON.stringify( {
	// 		elements: elementsData,
	// 		global: globalSettingsData,
	// 	} );
	// } else {
	// 	// Here we create brand new form
	// 	globalSettingsData = {
	// 		...globalNewOptions,
	// 		action_btn: {
	// 			isActive: '1',
	// 		},
	// 		go_to_next_text: {
	// 			value: 'OK',
	// 		},
	// 		submission_text: {
	// 			value: 'Submit',
	// 		},
	// 		helpgent_branding: {
	// 			isActive: '1',
	// 		},
	// 		save_incomplete_data: {
	// 			isActive: '0',
	// 		},
	// 		anonymous_submission: {
	// 			isActive: '0',
	// 		},
	// 		progress_count: {
	// 			isActive: '1',
	// 		},
	// 		bubble: {
	// 			background_type: {
	// 				type: '',
	// 				screen: '',
	// 				color: '',
	// 				upload: {},
	// 			},
	// 			overlay_text: '',
	// 			shape: 'circle', //border-radius
	// 			border: {
	// 				has_border: '1',
	// 				color: '#6551F2',
	// 			},
	// 			position: 'left', //right
	// 			offset_x: '30',
	// 			offset_y: '30',
	// 			size: 'medium', // large, small
	// 		},
	// 		media: {
	// 			max_video_duration: {
	// 				value: '2',
	// 			},
	// 			max_voice_duration: {
	// 				value: '2',
	// 			},
	// 			// remove_attachment_after_days: {
	// 			// 	value: '30'
	// 			// },
	// 			max_upload_size: {
	// 				value: '300',
	// 				unit: 'mb',
	// 			},
	// 		},
	// 		email_notification: {
	// 			admin_notification: {
	// 				notify_on_new_response: {
	// 					isActive: '1',
	// 				},
	// 				new_response_subject: {
	// 					value: 'New Form Submission Alert',
	// 				},
	// 				new_response_body: {
	// 					value: '<p>Hello {{TO_NAME}},</p><p>You have received a new submission for the {{FROM_NAME}}. Here are the details:</p><ul><li>User Name: {{FROM_EMAIL}}</li><li>IP Address: {{IP_ADDRESS}}</li><li>Submission Date and Time: {{NOW}}</li></ul><p>To access the complete submission details, kindly navigate to the admin panel by clicking on the link below: {{DASHBOARD_LINK}}</p><p>Best regards,</p><p>{{SITE_NAME}}</p>',
	// 				},
	// 				notify_on_user_message: {
	// 					isActive: '1',
	// 				},
	// 				user_message_subject: {
	// 					value: 'New Message Received Alert',
	// 				},
	// 				user_message_body: {
	// 					value: '<p>Hello {{TO_NAME}},</p><p>You have received a new message for the {{FROM_NAME}}. Here are the details: </p><ul><li>User Name: {{FROM_EMAIL}}</li><li>Submission Date and Time: {{NOW}}</li></ul><p>To continue the conversation, kindly visit the admin panel by clicking on this link: {{DASHBOARD_LINK}}</p><p>Best regards, </p><p>{{SITE_NAME}}</p>',
	// 				},
	// 			},
	// 			// Guest And Registered User
	// 			user_notification: {
	// 				// Apply only for registered user start ⬇️
	// 				notify_on_new_response: {
	// 					isActive: '1',
	// 				},
	// 				new_response_subject: {
	// 					value: 'New Submission',
	// 				},
	// 				new_response_body: {
	// 					value: "<p>Hello {{TO_NAME}},</p><p>Greetings and welcome to our platform!</p><p>We're delighted to inform you that your submission was successful, and we've received your message. </p><p>You can view your submission and continue the conversation through your dashboard by clicking on the following link: {{DASHBOARD_LINK}}</p><p>Thanks,</p><p>The Administrator of {{SITE_NAME}} </p>",
	// 				},
	// 				// Apply only for registered user end ⬆️
	// 				// Apply for guest and registered user start ⬇️
	// 				notify_on_admin_message: {
	// 					isActive: '1',
	// 				},
	// 				admin_message_subject: {
	// 					value: 'New message form {{SITE_NAME}}',
	// 				},
	// 				admin_message_body: {
	// 					value: '<p>Hello {{TO_NAME}},</p><p>You have received a new response from the admin. Here are the details:</p><ul><li>Message: {{MESSAGE}}</li><li>Submission Date and Time: {{NOW}}</li></ul><p>You can view the response and continue the conversation through your dashboard by clicking on the following link: {{DASHBOARD_LINK}}</p><p>Thanks, </p><p>The Administrator of {{SITE_NAME}} </p>',
	// 				},
	// 				// Apply for guest and registered user end ⬆️
	// 			},
	// 		},
	// 	};

	// 	const endElement = initialElementsInstance.filter(
	// 		( item ) => item.element_type === 'end'
	// 	)[ 0 ];

	// 	initialElementsInstance[ 0 ].controls.elementLogic.default_target =
	// 		endElement?.id;
	// 	screenFormContent = JSON.stringify( {
	// 		elements: initialElementsInstance,
	// 		global: globalSettingsData,
	// 	} );
	// }

	screenFormContent = JSON.stringify( {
		fields: [],
	} );

	const formData = {
		status: 'draft',
		content: screenFormContent,
	};

	// const pageIds = form.available_pages ? form.available_pages : '';

	formData.title = data.title;
	// formData.available_pages = pageIds || [];
	// formData.is_chat_bubble = form.displayChatBubble || '0';

	try {
		const createFormResponse = await postData( 'admin/forms', formData );
		const createdForm = {
			...singleFormSate,
			id: createFormResponse?.data?.id,
			title: formData.title,
		};
		const updatedFormList = forms.push( createdForm );
		storeSingleForm( createdForm );
		storsForm( updatedFormList );
		navigate( `/forms/${ createFormResponse?.data?.id }/edit` );
		//doAction( 'helpgent-toast', { message: createFormResponse.message } );
	} catch ( error ) {
		let errors = {};
		if ( error.message ) {
			errors.internal = error.message;
		} else {
			errors.internal = __( 'Server Error', 'helpgent' );
		}

		setServerErrors( errors );
	}
}
