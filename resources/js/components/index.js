import { registerModule } from '@formgent/modules/helpers';
import AntButton from './Button';
import AntTable from './Table';
import AntInput from './Input';
import AntTextArea from './Textarea';
import AntForm from './Form.js';
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
	Form,
} );
