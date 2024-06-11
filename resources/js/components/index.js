import { registerModule } from '@formgent/modules/helpers';
import { Col, Form, Row } from 'antd';
import AntButton from './Button';
import AntCheckbox from './Checkbox';
import AntForm from './Form.js';
import AntInput from './Input';
import AntMenu from './Menu';
import AntModal from './Modal';
import AntSkeleton from './Skeleton';
import AntSpin from './Spin';
import AntSwitch from './Switch';
import AntTable from './Table';
import AntTextArea from './TextArea';
import AntModal from './Modal';
import AntSpin from './Spin';
import AntSkeleton from './Skeleton';
import AntTooltip from './Tooltip';
import AntForm from './Form.js';
import AntCheckbox from './Checkbox';
import { Row, Col, Form } from 'antd';

/**
 * Global components for admin and user
 */
registerModule( 'components', {
	AntButton,
	AntSwitch,
	AntInput,
	AntTextArea,
	AntModal,
	AntForm,
	AntTable,
	AntSpin,
	AntCheckbox,
	AntSkeleton,
	AntTooltip,
	Row,
	Col,
	Form,
	AntMenu,
} );

/**
 * Exporting for code editor intellisense support.
 */
export {
	AntButton,
	AntForm,
	AntInput,
	AntMenu,
	AntModal,
	AntSwitch,
	AntTable,
	AntTextArea,
	Form,
};
