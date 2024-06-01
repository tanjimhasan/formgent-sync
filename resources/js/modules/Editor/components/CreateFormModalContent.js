import { useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { CreateFormStyle } from './style';
import AntInput from '@newform/components/Input';
import { Form } from 'antd';
import AntButton from '@newform/components/Button';
import handleCreateForm from '@newform/helper/handleCreateForm';

export default function CreateFormModalContent() {
	const [ serverErrors, setServerErrors ] = useState( {} );

	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'newform' ).getCommonState();
	}, [] );
	console.log( CommonReducer );
	const { useNavigate, useParams } = CommonReducer.routerComponents;
	// const { selectedTemplate } = moduleState;
	const navigate = useNavigate();
	const { id } = useParams();

	const { SingleFormReducer } = useSelect( ( select ) => {
		return select( 'newform' ).getSingleForm( id );
	}, [] );

	const { FormReducer } = useSelect( ( select ) => {
		return select( 'newform' ).getForms();
	}, [] );

	const { storeSingleForm, storsForm } = useDispatch( 'newform' );

	function hadnleFormSubmission( formData ) {
		handleCreateForm(
			SingleFormReducer.singleForm,
			FormReducer.forms,
			formData,
			setServerErrors,
			storeSingleForm,
			storsForm,
			navigate
		);
	}

	return (
		<CreateFormStyle className="newform-create-modal">
			<h2 className="newform-create-modal-title">
				{ __( "Let's get started", 'newform' ) }
			</h2>
			<p>
				{ __(
					'Please enter a name for your ffffor. You can edit it later.',
					'newform'
				) }
			</p>
			<div className="newform-create-modal__content">
				<Form
					name="newform-create-form"
					layout="vertical"
					onFinish={ hadnleFormSubmission }
				>
					<Form.Item
						label="Form name"
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
						<AntInput size="large" />
					</Form.Item>
					<Form.Item>
						<AntButton
							type="dark"
							size="large"
							htmlType="submit"
							block
						>
							Create form
						</AntButton>
					</Form.Item>
				</Form>
			</div>
		</CreateFormStyle>
	);
}
