import { Row, Col, Form } from 'antd';
import { AntInput } from '@formgent/components';
import { __ } from '@wordpress/i18n';
import FieldEditor from '@formgent/components/FieldEditor';

export default function Name( props ) {
	const { field } = props;
	const { fields } = field;
	return (
		<div className="formgent-field">
			<div className="formgent-field__text">
				<FieldEditor />
			</div>
			<div className="formgent-field__action">
				<Row gutter={ 20 }>
					{ fields.map( ( field ) => (
						<Col sm={ 12 } key={ field.id }>
							<Form.Item name={ field.type }>
								<AntInput placeholder={ field.placeholder } />
							</Form.Item>
						</Col>
					) ) }
				</Row>
			</div>
		</div>
	);
}
