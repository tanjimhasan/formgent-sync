import { useState } from '@wordpress/element';
import {
	Button,
	Icon,
	__experimentalInputControl as InputControl,
	ToggleControl,
	CheckboxControl,
	RadioControl,
	TextareaControl,
	SelectControl,
} from '@wordpress/components';

export default function Repeater( {
	attr_key,
	control,
	attributes,
	setAttributes,
} ) {
	const [ openIndex, setOpenIndex ] = useState( null );

	const handleRemoveField = ( index ) => {
		const newFields = attributes[ attr_key ].filter(
			( item, i ) => i !== index
		);
		setAttributes( { [ attr_key ]: newFields } );
	};

	const handleAddField = () => {
		const newFields = [ ...attributes[ attr_key ], {} ];
		setAttributes( { [ attr_key ]: newFields } );
		setOpenIndex( newFields.length - 1 );
	};

	const toggleFieldContent = ( index ) => {
		setOpenIndex( openIndex === index ? null : index );
	};

	const handleChange = ( index, fieldKey, value ) => {
		const newFields = [ ...attributes[ attr_key ] ];
		newFields[ index ][ fieldKey ] = value;
		setAttributes( { [ attr_key ]: newFields } );
	};

	return (
		<div className="formgent-repeater-control">
			<label className="formgent-control-label">{ control.label }</label>
			{ attributes[ attr_key ].map( ( field, index ) => (
				<div key={ index } className="formgent-repeater-field">
					<div className="formgent-repeater-field-control">
						<div
							className="formgent-repeater-field-title"
							onClick={ () => toggleFieldContent( index ) }
						>
							{ control.label } { index + 1 }
						</div>
						<button
							onClick={ () => handleRemoveField( index ) }
							className="formgent-repeater-field-remove"
						>
							X
						</button>
					</div>
					{ openIndex === index && (
						<div className="formgent-repeater-field-control-content">
							{ Object.keys( control.fields ).map(
								( fieldKey ) => {
									const fieldControl =
										control.fields[ fieldKey ];
									const fieldValue = field[ fieldKey ] || '';

									switch ( fieldControl.type ) {
										case 'text':
											return (
												<InputControl
													label={ fieldControl.label }
													value={ fieldValue }
													onChange={ ( value ) =>
														handleChange(
															index,
															fieldKey,
															value
														)
													}
												/>
											);
										case 'textarea':
											return (
												<TextareaControl
													label={ fieldControl.label }
													value={ fieldValue }
													onChange={ ( value ) =>
														handleChange(
															index,
															fieldKey,
															value
														)
													}
												/>
											);
										case 'switch':
											return (
												<ToggleControl
													label={ fieldControl.label }
													checked={ fieldValue }
													onChange={ ( value ) =>
														handleChange(
															index,
															fieldKey,
															value
														)
													}
												/>
											);
										case 'checkbox':
											return (
												<CheckboxControl
													label={ fieldControl.label }
													checked={ fieldValue }
													onChange={ ( value ) =>
														handleChange(
															index,
															fieldKey,
															value
														)
													}
												/>
											);
										case 'radio':
											return (
												<RadioControl
													label={ fieldControl.label }
													selected={ fieldValue }
													options={
														fieldControl.options
													}
													onChange={ ( value ) =>
														handleChange(
															index,
															fieldKey,
															value
														)
													}
												/>
											);
										case 'select':
											return (
												<SelectControl
													label={ fieldControl.label }
													value={ fieldValue }
													options={
														fieldControl.options
													}
													onChange={ ( value ) =>
														handleChange(
															index,
															fieldKey,
															value
														)
													}
												/>
											);
										default:
											return null;
									}
								}
							) }
						</div>
					) }
				</div>
			) ) }
			<div className="formgent-repeater__add-item">
				<Button variant="primary" onClick={ handleAddField }>
					<Icon icon="plus" /> Add option
				</Button>
			</div>
		</div>
	);
}
