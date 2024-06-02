import { AntTextArea } from '@formgent/components';
export default function LongText() {
	return <AntTextArea rows={ 4 } placeholder="Long text" maxLength={ 6 } />;
}
