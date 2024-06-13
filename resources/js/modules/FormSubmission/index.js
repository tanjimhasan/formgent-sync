import { useSelect } from '@wordpress/data';
import { Form } from 'antd';
import SubmissionForm from '@formgent/components/SubmissionForm';
import { FormSubmissionStyle } from './style';

function FormSubmission( props ) {
	const { formId } = props;

	const { SingleFormReducer } = useSelect(
		( select ) => {
			return select( 'frontend/formgent' ).getSingleForm( formId );
		},
		[ formId ]
	);
	const { singleForm } = SingleFormReducer;
	console.log( singleForm );
	return (
		<FormSubmissionStyle>
			<SubmissionForm />
		</FormSubmissionStyle>
	);
}

export default function FormSubmissionModule( props ) {
	return <FormSubmission { ...props } />;
}