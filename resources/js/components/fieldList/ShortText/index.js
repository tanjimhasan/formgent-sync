import { Form } from 'antd';
import { AntInput, Row, Col } from '@formgent/components';
import FieldEditor from '@formgent/components/FieldEditor';
export default function ShortText( props ) {
	const { field, isSubmissionForm } = props;
	return (
		<div className="formgent-field">
			<div className="formgent-field__text">
				<FieldEditor { ...props } />
			</div>
			<div className="formgent-field__action">
				<Row gutter={ 15 }>
					<Col>
						<Form.Item name={ field?.name }>
							<div className="formgent-field__item">
								<AntInput
									placeholder={
										field?.general_option?.placeholder
									}
									disabled={ ! isSubmissionForm }
								/>
							</div>
						</Form.Item>
					</Col>
				</Row>
			</div>
		</div>
	);
}
