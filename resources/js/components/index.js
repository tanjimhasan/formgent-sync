import { registerModule } from '@formgent/modules/helpers';
import AntButton from './Button';
import AntCheckbox from './Checkbox';
import AntDropdown from './Dropdown';
import AntForm from './Form.js';
import AntInput from './Input';
import AntMenu from './Menu';
import AntModal from './Modal';
import AntSkeleton from './Skeleton';
import AntSpin from './Spin';
import AntSwitch from './Switch';
import AntTab from './Tabs';
import AntTable from './Table';
import AntTextArea from './TextArea';
import AntTooltip from './Tooltip';
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
	AntTab,
	AntTable,
	AntSpin,
	AntCheckbox,
	AntSkeleton,
	AntTooltip,
	Row,
	Col,
	Form,
	AntMenu,
	AntDropdown,
} );

/**
 * Exporting for code editor intellisense support.
 */
export {
	AntButton,
	AntDropdown,
	AntForm,
	AntInput,
	AntMenu,
	AntModal,
	AntSwitch,
	AntTab,
	AntTable,
	AntTextArea,
	Form,
};
