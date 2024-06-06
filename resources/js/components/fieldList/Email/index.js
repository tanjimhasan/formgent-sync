import { Row, Col, Form } from 'antd';
import { AntInput } from '@formgent/components';
import FieldEditor from '@formgent/components/FieldEditor';
export default function Email( props ) {
	const { field } = props;
	return (
		<div className="formgent-field">
			<div className="formgent-field__text">
				<FieldEditor />
			</div>
			<div className="formgent-field__action">
				<Row gutter={ 15 }>
					<Col>
						<Form.Item
							name={ field?.name }
							rules={ [
								{
									type: 'email',
								},
							] }
						>
							<div className="formgent-field__item">
								<AntInput
									placeholder={
										field?.general_option?.placeholder
									}
								/>
							</div>
						</Form.Item>
					</Col>
				</Row>
			</div>
		</div>
	);
}
