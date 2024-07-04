import { useState } from '@wordpress/element';
import {
	Button,
	Icon,
	TextareaControl,
	__experimentalInputControl as InputControl,
} from '@wordpress/components';

export default function Repeater( { attr_key, control, setAttributes } ) {
	const [ openIndex, setOpenIndex ] = useState( null );

	const handleAddField = () => {
		const newFields = [
			...control.fields,
			{
				title: `Option ${ control.fields.length + 1 }`,
				content: 'Field Contents',
			},
		];
		control.fields = newFields;
		setAttributes( { [ attr_key ]: newFields } );
		setOpenIndex( newFields.length - 1 );
	};

	const handleRemoveField = ( index ) => {
		const newFields = control.fields.filter( ( _, i ) => i !== index );
		control.fields = newFields;
		setAttributes( { [ attr_key ]: newFields } );
	};

	const handleChangeFieldTitle = ( index, value ) => {
		const newFields = [ ...control.fields ];
		newFields[ index ].title = value;
		control.fields = newFields;
		setAttributes( { [ attr_key ]: newFields } );
	};

	const handleChangeFieldContent = ( index, value ) => {
		const newFields = [ ...control.fields ];
		newFields[ index ].content = value;
		control.fields = newFields;
		setAttributes( { [ attr_key ]: newFields } );
	};

	const toggleFieldContent = ( index ) => {
		setOpenIndex( openIndex === index ? null : index );
	};

	return (
		<>
			<label className="formgent-control-label">{ control.label }</label>
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
							{ field.title }
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
									value={ field.title }
									onChange={ ( value ) =>
										handleChangeFieldTitle( index, value )
									}
								/>
							</div>
							<div className="formgent-repeater-field-control-content-inner">
								<label>Content</label>
								<TextareaControl
									value={ field.content }
									onChange={ ( value ) =>
										handleChangeFieldContent( index, value )
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
		</>
	);
}
