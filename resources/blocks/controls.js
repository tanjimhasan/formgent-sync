import {
	PanelBody,
	SelectControl,
	ToggleControl,
	CheckboxControl,
	__experimentalInputControl as InputControl,
	Button,
	Icon,
	TextareaControl,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

const controlGenerators = {
	panel: function ( { control, attributes, setAttributes } ) {
		return (
			<PanelBody title={ control.label }>
				<Controls
					controls={ control.children }
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			</PanelBody>
		);
	},
	text: function ( { attr_key, control, attributes, setAttributes } ) {
		return (
			<>
				<label>{ control.label }</label>
				<InputControl
					value={ attributes[ attr_key ] }
					onChange={ ( value ) =>
						setAttributes( { [ attr_key ]: value } )
					}
				/>
			</>
		);
	},
	select: function ( { attr_key, control, attributes, setAttributes } ) {
		return (
			<>
				<label>{ control.label }</label>
				<SelectControl
					value={ attributes[ attr_key ] }
					options={ control.options }
					onChange={ ( value ) =>
						setAttributes( { [ attr_key ]: value } )
					}
				/>
			</>
		);
	},
	checkbox: function ( { attr_key, control, attributes, setAttributes } ) {
		return (
			<>
				<label>{ control.label }</label>
				<CheckboxControl
					label={ control.checkbox_text }
					checked={ attributes[ attr_key ] === '0' ? false : true }
					onChange={ ( value ) => {
						value === true
							? setAttributes( { [ attr_key ]: '1' } )
							: setAttributes( { [ attr_key ]: '0' } );
					} }
				/>
			</>
		);
	},
	switch: function ( { attr_key, control, attributes, setAttributes } ) {
		return (
			<>
				<label>{ control.label }</label>
				<ToggleControl
					label={ control.switch_text }
					checked={ attributes[ attr_key ] === '0' ? false : true }
					onChange={ ( value ) => {
						value === true
							? setAttributes( { [ attr_key ]: '1' } )
							: setAttributes( { [ attr_key ]: '0' } );
					} }
				/>
			</>
		);
	},
	repeater: function ( { attr_key, control, setAttributes } ) {
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
				<label>{ control.label }</label>
				{ control.fields.map( ( field, index ) => (
					<div
						key={ index }
						className={ `formgent-repeater-field ${
							openIndex === index
								? 'formgent-repeater-field--collapsed'
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
											handleChangeFieldTitle(
												index,
												value
											)
										}
									/>
								</div>
								<div className="formgent-repeater-field-control-content-inner">
									<label>Content</label>
									<TextareaControl
										value={ field.content }
										onChange={ ( value ) =>
											handleChangeFieldContent(
												index,
												value
											)
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
	},
};

export default function Controls( { controls, attributes, setAttributes } ) {
	return Object.keys( controls ).map( ( key ) => {
		const control = controls[ key ];
		const ControlView = controlGenerators[ control[ 'type' ] ];
		return (
			<ControlView
				key={ key }
				attr_key={ key }
				control={ control }
				attributes={ attributes }
				setAttributes={ setAttributes }
			/>
		);
	} );
}
