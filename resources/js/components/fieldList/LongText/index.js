import { AntTextArea, Row, Col } from '@formgent/components';
import { Form } from 'antd';
import FieldEditor from '@formgent/components/FieldEditor';
export default function LongText( props ) {
	const { field } = props;
	return (
		<div className="formgent-field">
			<div className="formgent-field__text">
				<FieldEditor />
			</div>
			<div className="formgent-field__action">
				<Row gutter={ 15 }>
					<Col>
						<Form.Item name={ field?.name }>
							<div className="formgent-field__item">
								<AntTextArea
									rows={ 4 }
									placeholder="Long text"
									maxLength={ 6 }
								/>
							</div>
						</Form.Item>
					</Col>
				</Row>
			</div>
		</div>
	);
}
