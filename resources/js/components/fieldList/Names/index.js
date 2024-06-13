import { Form } from 'antd';
import { AntInput, Row, Col } from '@formgent/components';
import { __ } from '@wordpress/i18n';
import FieldEditor from '@formgent/components/FieldEditor';

export default function Name( props ) {
	const { field, isSubmissionForm } = props;
	return (
		<div className="formgent-field">
			<div className="formgent-field__text">
				<FieldEditor { ...props } />
			</div>
			<div className="formgent-field__action">
				<Row gutter={ 20 }>
					{ field &&
						field?.fields.map( ( item ) => {
							return (
								<Col sm={ 24 / field.fields.length }>
									<Form.Item
										name={ [ field?.name, item?.type ] }
									>
										<div className="formgent-field__item">
											<AntInput
												placeholder={
													item?.placeholder
												}
												disabled={ ! isSubmissionForm }
											/>
										</div>
									</Form.Item>
								</Col>
							);
						} ) }
				</Row>
			</div>
		</div>
	);
}
