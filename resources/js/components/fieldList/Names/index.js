import { Row, Col, Form } from 'antd';
import { AntInput } from '@formgent/components';
import { __ } from '@wordpress/i18n';
import FieldEditor from '@formgent/components/FieldEditor';

export default function Name( props ) {
	const { field } = props;
	return (
		<div className="formgent-field">
			<div className="formgent-field__text">
				<FieldEditor />
			</div>
			<div className="formgent-field__action">
				<Form.Item name={ field?.name }>
					<Row gutter={ 20 }>
						{ field &&
							field?.fields.map( ( item ) => {
								return (
									<Col sm={ 24 / field.fields.length }>
										<Form.Item name={ item?.type }>
											<div className="formgent-field__item">
												<AntInput
													placeholder={
														item?.placeholder
													}
												/>
											</div>
										</Form.Item>
									</Col>
								);
							} ) }
					</Row>
				</Form.Item>
			</div>
		</div>
	);
}
