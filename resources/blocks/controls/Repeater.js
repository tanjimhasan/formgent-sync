import { Fragment, useState } from '@wordpress/element';
import {
	Button,
	Icon,
	__experimentalInputControl as InputControl,
} from '@wordpress/components';

export default function Repeater( { attr_key, control, setAttributes } ) {
	const [ openIndex, setOpenIndex ] = useState( null );

	const handleAddField = () => {
		const newFields = [
			...control.fields,
			{
				type: control.field_type,
				label: `Option ${ control.fields.length + 1 }`,
			},
		];
		control.fields = newFields;
		setAttributes( { [ attr_key ]: newFields } );
		setOpenIndex( newFields.length - 1 );
	};

	const handleRemoveField = ( index ) => {
		const newFields = control.fields.filter( ( item, i ) => i !== index );
		control.fields = newFields;
		setAttributes( { [ attr_key ]: newFields } );
	};

	const handleChangeFieldTitle = ( index, value ) => {
		const newFields = [ ...control.fields ];
		newFields[ index ].label = value;
		control.fields = newFields;
		setAttributes( { [ attr_key ]: newFields } );
	};

	const toggleFieldContent = ( index ) => {
		setOpenIndex( openIndex === index ? null : index );
	};

	return (
		<Fragment>
			<label className="formgent-control-label">{ control.label }</label>
			{ /* { control.field_type === 'switch' } */ }
			{ control.fields.map( ( field, index ) => (
				<div
					key={ index }
					className={ `formgent-repeater-field ${
						openIndex === index
							? 'formgent-repeater-field--expanded'
							: ''
					}` }
				>
					<div className="formgent-repeater-field-control">
						<button
							className="formgent-repeater-field-title"
							onClick={ () => toggleFieldContent( index ) }
						>
							{ field.label }
						</button>
						<button
							onClick={ () => handleRemoveField( index ) }
							className="formgent-repeater-field-remove"
						>
							X
						</button>
					</div>
					{ openIndex === index && (
						<div className="formgent-repeater-field-control-content">
							<div className="formgent-repeater-field-control-title">
								<label>Title</label>
								<InputControl
									value={ field.label }
									onChange={ ( value ) =>
										handleChangeFieldTitle( index, value )
									}
								/>
							</div>
						</div>
					) }
				</div>
			) ) }

			<div className="formgent-repeater__add-item">
				<Button variant="primary" onClick={ handleAddField }>
					<Icon icon="plus" /> Add option
				</Button>
			</div>
		</Fragment>
	);
}
