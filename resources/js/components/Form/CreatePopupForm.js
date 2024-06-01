import { useState, useEffect } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { AntInput, AntForm, AntButton } from '@newform/components';
import { Form } from 'antd';
import { applyFilter } from '@newform/modules/helpers';
// import { Switch } from '@newform/components';
// import { useQueryClient } from '@tanstack/react-query';
// import { useForm } from 'react-hook-form';
import handleCreateForm from '@newform/helper/handleCreateForm.js';
import getValidationMessage from '@newform/helper/getValidationMessage.js';
// import useCreateMutation from '@newform/hooks/useCreateMutation.js';
import handleChatBubbleToggle from './helper/handleChatBubbleToggle';
import CreatePopupHeader from './CreatePopupHeader';
import { CreateFormStyleWrap } from './style.js';
import CreatePopupElementPreparation from './CreatePopupElementPreparation.js';
// import { getGlobalState } from '@newform/helper/utils';
// import BubblePageSelection from './BubblePageSelection';
import { __ } from '@wordpress/i18n';
// import handleCreateForm from '@newform/helper/handleCreateForm';

export default function CreatePopupForm( props ) {
	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'newform' ).getCommonState();
	}, [] );

	const { FormReducer } = useSelect( ( select ) => {
		return select( 'newform' ).getForms();
	}, [] );
	const { selectedTemplate } = FormReducer;
	const { useNavigate } = CommonReducer.routerComponents;
	// const { selectedTemplate } = moduleState;
	const navigate = useNavigate();
	// const queryClient = useQueryClient();

	const [ serverErrors, setServerErrors ] = useState( {} );
	const [ newFormData, setNewFormData ] = useState( null );
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
	// 				[ 'newform-form' ],
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
			setNewFormData( formData );
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
				<div className="newform-createPopup">
					<CreatePopupHeader
						title={ __( 'Let’s get started', 'newform' ) }
					/>
					<CreateFormStyleWrap>
						<Form
							name="newform-create-form"
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
											'newform'
										),
									},
									{
										required: true,
										message: 'The title field is required',
									},
								] }
							>
								<AntInput
									placeholder={ __( 'Form Name', 'newform' ) }
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
					formData={ newFormData }
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
