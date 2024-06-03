import { registerModule } from '@formgent/modules/helpers';
import AntButton from './Button';
import AntTable from './Table';
import AntInput from './Input';
import AntTextArea from './TextArea';
import AntSpin from './Spin';
import AntSkeleton from './Skeleton';
import AntForm from './Form.js';
import AntCheckbox from './Checkbox';
import { Form } from 'antd';

/**
 * Global components for admin and user
 */
registerModule( 'components', {
	AntButton,
	AntInput,
	AntTextArea,
	AntForm,
	AntTable,
	AntSpin,
	AntCheckbox,
	AntSkeleton,
	Form,
} );
