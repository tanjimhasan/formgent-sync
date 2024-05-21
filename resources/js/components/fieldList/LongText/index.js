import { Input } from '@newform/components';
export default function LongText() {
	const { TextArea } = Input;
	return <TextArea rows={ 4 } placeholder="Long text" maxLength={ 6 } />;
}
