import { registerModule } from '@formgent/modules/helpers';
import { Col, Form, Row } from 'antd';
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
import AntTable from './Table';
import AntTabs from './Tabs';
import AntTextArea from './TextArea';
import AntTooltip from './Tooltip';

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
	AntTabs,
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
	AntTable,
	AntTabs,
	AntTextArea,
	Form,
};
