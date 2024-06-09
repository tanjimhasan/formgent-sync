import AntButton from '@formgent/components/Button';

export default function SubmitButton( props ) {
	const { field } = props;
	return (
		<AntButton type={ field?.general_option?.button_style }>
			{ field.general_option.button_text }
		</AntButton>
	);
}
