import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { AntInput, AntForm, AntButton } from '@formgent/components';
import { Form } from 'antd';
import { applyFilter } from '@formgent/modules/helpers';
// import { Switch } from '@formgent/components';
// import { useQueryClient } from '@tanstack/react-query';
// import { useForm } from 'react-hook-form';
import handleCreateForm from '@formgent/helper/handleCreateForm.js';
import getValidationMessage from '@formgent/helper/getValidationMessage.js';
// import useCreateMutation from '@formgent/hooks/useCreateMutation.js';
import handleChatBubbleToggle from './helper/handleChatBubbleToggle';
import CreatePopupHeader from './CreatePopupHeader';
import { CreateFormStyleWrap } from './style.js';
import CreatePopupElementPreparation from './CreatePopupElementPreparation.js';
// import { getGlobalState } from '@formgent/helper/utils';
// import BubblePageSelection from './BubblePageSelection';
import { __ } from '@wordpress/i18n';
// import handleCreateForm from '@formgent/helper/handleCreateForm';

export default function CreatePopupForm( props ) {
	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );

	const { FormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getForms();
	}, [] );
	const { selectedTemplate } = FormReducer;
	const { useNavigate } = CommonReducer.routerComponents;
	// const { selectedTemplate } = moduleState;
	const navigate = useNavigate();
	// const queryClient = useQueryClient();

	const [ serverErrors, setServerErrors ] = useState( {} );
	const [ formGentData, setFormGentData ] = useState( null );
	const [ displayChatBubble, setDisplayChatBubble ] = useState( false );
	const [ toggleSwitch, setToggleSwitch ] = useState( '0' );
	const [ createStep, setCreateStep ] = useState( 'form' );

	// const {
	// 	register,
	// 	handleSubmit,
	// 	setValue,
	// 	formState: { errors },
	// 	control,
	// } = useForm( { mode: 'all' } );

	// const { mutateAsync: createFormMutation, isLoading: formCreating } =
	// 	useCreateMutation(
	// 		`${ baseApiRoute?.forms }`,
	// 		function ( previousData, forms ) {
	// 			previousData.forms.push( forms );
	// 			previousData.total = previousData.forms.length;
	// 			queryClient.setQueryData(
	// 				[ 'formgent-form' ],
	// 				( old ) => previousData
	// 			);
	// 		}
	// 	);

	// useEffect( () => {
	// 	if ( selectedTemplate ) {
	// 		setValue( 'title', selectedTemplate?.title || null );
	// 	}
	// }, [ selectedTemplate ] );

	function handleFormSubmission( formData ) {
		if ( selectedTemplate ) {
			setCreateStep( 'attachmentImport' );
			setFormGentData( formData );
		} else {
			handleCreateForm( formData, setServerErrors, navigate );
		}
	}

	const onFinish = ( values ) => {
		console.log( 'Success:', values );
	};

	return (
		<>
			{ createStep === 'form' && (
				<div className="formgent-createPopup">
					<CreatePopupHeader
						title={ __( 'Let’s get started', 'formgent' ) }
					/>
					<CreateFormStyleWrap>
						<Form
							name="formgent-create-form"
							style={ {
								minWidth: 450,
							} }
							// initialValues={{
							// remember: true,
							// }}
							onFinish={ handleFormSubmission }
							// onFinishFailed={onFinishFailed}
							autoComplete="off"
						>
							<Form.Item
								name="title"
								rules={ [
									{
										min: 5,
										message: __(
											'The title field must be at least 5 characters.',
											'helpgent'
										),
									},
									{
										whitespace: true,
										message: __(
											'Only spaces not allowed',
											'formgent'
										),
									},
									{
										required: true,
										message: 'The title field is required',
									},
								] }
							>
								<AntInput
									placeholder={ __(
										'Form Name',
										'formgent'
									) }
									size="large"
								/>
							</Form.Item>
							<Form.Item>
								<AntButton
									type="primary"
									size="large"
									htmlType="submit"
									block
								>
									Create Form
								</AntButton>
							</Form.Item>
						</Form>
					</CreateFormStyleWrap>
				</div>
			) }
			{ createStep === 'attachmentImport' && (
				<CreatePopupElementPreparation
					formData={ formGentData }
					createFormMutation={ createFormMutation }
					setServerErrors={ setServerErrors }
					navigate={ navigate }
					queryClient={ queryClient }
					moduleState={ moduleState }
					setModuleState={ setModuleState }
					// baseLinkRoute={ baseLinkRoute }
				/>
			) }
		</>
	);
}
