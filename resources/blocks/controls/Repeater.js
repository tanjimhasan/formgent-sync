import { useState } from '@wordpress/element';
import { Button, Icon } from '@wordpress/components';
import { v4 as uuidv4 } from 'uuid';
import Controls from '../controls';

export default function Repeater( {
	attr_key,
	control,
	attributes,
	setAttributes,
} ) {
	const [ openIndex, setOpenIndex ] = useState( null );

	const handleRemoveField = ( id ) => {
		const newFields = attributes[ attr_key ].filter(
			( item ) => item.id !== id
		);
		setAttributes( { [ attr_key ]: newFields } );
	};

	const handleAddField = () => {
		const newField = { id: uuidv4(), ...{} };
		const newFields = [ ...attributes[ attr_key ], newField ];
		setAttributes( { [ attr_key ]: newFields } );
		setOpenIndex( newFields.length - 1 );
	};

	const toggleFieldContent = ( index ) => {
		setOpenIndex( openIndex === index ? null : index );
	};

	const handleChange = ( id, fieldKey, value ) => {
		const newFields = attributes[ attr_key ].map( ( item ) => {
			if ( item.id === id ) {
				return { ...item, [ fieldKey ]: value };
			}
			return item;
		} );
		setAttributes( { [ attr_key ]: newFields } );
	};

	return (
		<div className="formgent-repeater-control">
			<label className="formgent-control-label">{ control.label }</label>
			{ attributes[ attr_key ] &&
				attributes[ attr_key ].map( ( field, index ) => {
					const labelKey = control.label_key;
					return (
						<div
							key={ field.id }
							className={ `formgent-repeater-field ${
								openIndex === index
									? 'formgent-repeater-field--expanded'
									: ''
							}` }
						>
							<div className="formgent-repeater-field-control">
								<div
									className="formgent-repeater-field-title"
									onClick={ () =>
										toggleFieldContent( index )
									}
								>
									{ typeof field[ labelKey ] === 'undefined'
										? control.fields[ control.label_key ]
												.label
										: field[ labelKey ] }
								</div>
								<Button
									onClick={ () =>
										handleRemoveField( field.id )
									}
									className="formgent-repeater-field-remove"
								>
									X
								</Button>
							</div>
							{ openIndex === index && (
								<div className="formgent-repeater-field-control-content">
									<Controls
										controls={ control.fields }
										attributes={ field }
										setAttributes={ ( updatedField ) => {
											Object.keys( updatedField ).forEach(
												( fieldKey ) => {
													handleChange(
														field.id,
														fieldKey,
														updatedField[ fieldKey ]
													);
												}
											);
										} }
									/>
								</div>
							) }
						</div>
					);
				} ) }
			<div className="formgent-repeater__add-item">
				<Button variant="primary" onClick={ handleAddField }>
					<Icon icon="plus" /> { control.add_button_text }
				</Button>
			</div>
		</div>
	);
}
