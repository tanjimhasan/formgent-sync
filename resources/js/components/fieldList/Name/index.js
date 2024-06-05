import { Row, Col, Form } from 'antd';
import { AntInput } from '@formgent/components';
import { __ } from '@wordpress/i18n';
import FieldEditor from '@formgent/components/FieldEditor';
export default function Name( props ) {
	const { field } = props;
	const { general_option } = field;
	return (
		<div className="formgent-field">
			<div className="formgent-field__text">
				<FieldEditor />
			</div>
			<div className="formgent-field__action">
				<Row gutter={ 20 }>
					<Col sm={ 12 }>
						<Form.Item name={ general_option?.first_name?.name }>
							<AntInput
								placeholder={
									general_option?.first_name?.placeholder
								}
							/>
						</Form.Item>
					</Col>
					<Col sm={ 12 }>
						<Form.Item name={ general_option?.last_name?.name }>
							<AntInput
								placeholder={
									general_option?.last_name?.placeholder
								}
							/>
						</Form.Item>
					</Col>
				</Row>
			</div>
		</div>
	);
}
