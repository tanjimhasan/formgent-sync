import { useSelect, useDispatch } from '@wordpress/data';
import { Form } from 'antd';
import { AntSpin, AntButton } from '@formgent/components';
import { registerPreviewFields } from '@formgent/fields';
import { SubmissionFormStyle } from './style';
import postData from '@formgent/helper/postData';

export default function SubmissionForm( props ) {
	const { submitFormRequest, submitFormSuccess, submitFormError } =
		useDispatch( 'frontend/formgent' );
	const { SingleFormReducer } = useSelect( ( select ) => {
		return select( 'frontend/formgent' ).getSingleForm();
	}, [] );

	const { singleForm, isFormSubmitting } = SingleFormReducer;

	function getFormItem( item ) {
		const FormItem = registerPreviewFields()[ item?.type ];
		return <FormItem field={ item } isSubmissionForm={ true } />;
	}

	async function handleSubmitForm( data ) {
		if ( isFormSubmitting ) return;
		const dataSubmit = {
			form_id: parseInt( singleForm?.id ),
			form_data: {
				...data,
			},
		};
		submitFormRequest( true );
		try {
			const formSubmitResponse = await postData(
				'responses',
				dataSubmit
			);
			submitFormSuccess();
		} catch ( error ) {
			submitFormError( error );
		}
	}

	return (
		SingleFormReducer.singleForm && (
			<SubmissionFormStyle>
				{ SingleFormReducer.singleForm.isLoading ? (
					<AntSpin />
				) : (
					<Form
						name="formgent-form-submission"
						onFinish={ handleSubmitForm }
					>
						{ SingleFormReducer.singleForm.content.fields.map(
							( item ) => {
								return getFormItem( item );
							}
						) }
						<Form.Item>
							<AntButton type="primary" htmlType="submit">
								Submit
							</AntButton>
						</Form.Item>
					</Form>
				) }
			</SubmissionFormStyle>
		)
	);
}
