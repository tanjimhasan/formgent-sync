import { useState } from '@wordpress/element';
import { useDispatch, useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import { CreateFormStyle } from './style';
import AntInput from '@formgent/components/Input';
import { Form } from 'antd';
import AntButton from '@formgent/components/Button';
import handleCreateForm from '@formgent/helper/handleCreateForm';

export default function CreateFormModalContent() {
	const [ serverErrors, setServerErrors ] = useState( {} );

	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );
	console.log( CommonReducer );
	const { useNavigate, useParams } = CommonReducer.routerComponents;
	// const { selectedTemplate } = moduleState;
	const navigate = useNavigate();
	const { id } = useParams();

	const { SingleFormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getSingleForm( id );
	}, [] );

	const { FormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getForms();
	}, [] );

	const { storeSingleForm, storsForm } = useDispatch( 'formgent' );

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
		<CreateFormStyle className="formgent-create-modal">
			<h2 className="formgent-create-modal-title">
				{ __( "Let's get started", 'formgent' ) }
			</h2>
			<p>
				{ __(
					'Please enter a name for your ffffor. You can edit it later.',
					'formgent'
				) }
			</p>
			<div className="formgent-create-modal__content">
				<Form
					name="formgent-create-form"
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
									'formgent'
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
