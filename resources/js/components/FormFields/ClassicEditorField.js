import { Form } from 'antd';
import ClassicEditor from '@wpmvc/classic-editor';

export default function ClassicEditorField( props ) {
	const { status } = Form.Item.useStatus();

	return (
		<div className={ `custom-input-${ status }` }>
			<ClassicEditor
				height={ 300 }
				hasMedia={ true }
				useExtendStyles={ true }
				{ ...props }
			/>
		</div>
	);
}
