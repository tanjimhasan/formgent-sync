import {
	CheckboxControl,
	PanelBody,
	SelectControl,
	ToggleControl,
	Button,
	Icon,
	TextareaControl,
	__experimentalInputControl as InputControl,
	__experimentalBoxControl as BoxControl,
	__experimentalToggleGroupControl as ToggleGroupControl,
	__experimentalToggleGroupControlOption as ToggleGroupControlOption,
} from '@wordpress/components';
import { Fragment, useState } from '@wordpress/element';
import Repeater from './controls/Repeater';

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
			<Fragment>
				<label className="formgent-control-label">
					{ control.label }
				</label>
				<InputControl
					value={ attributes[ attr_key ] }
					onChange={ function ( value ) {
						// Update the attribute value in the block's attributes
						setAttributes( { [ attr_key ]: value } );
					} }
				/>
			</Fragment>
		);
	},
	select: function ( { attr_key, control, attributes, setAttributes } ) {
		return (
			<Fragment>
				<label className="formgent-control-label">
					{ control.label }
				</label>
				<SelectControl
					value={ attributes[ attr_key ] }
					options={ control.options }
					onChange={ function ( value ) {
						// Update the attribute value in the block's attributes
						setAttributes( { [ attr_key ]: value } );
					} }
				/>
			</Fragment>
		);
	},
	checkbox: function ( { attr_key, control, attributes, setAttributes } ) {
		return (
			<CheckboxControl
				label={ control.label }
				checked={ attributes[ attr_key ] }
				onChange={ function ( value ) {
					// Update the attribute value in the block's attributes
					setAttributes( { [ attr_key ]: value } );
				} }
			/>
		);
	},
	switch: function ( { attr_key, control, attributes, setAttributes } ) {
		return (
			<ToggleControl
				label={ control.label }
				checked={ attributes[ attr_key ] }
				onChange={ function ( value ) {
					// Update the attribute value in the block's attributes
					setAttributes( { [ attr_key ]: value } );
				} }
			/>
		);
	},
	dimension: function ( { attr_key, control, setAttributes } ) {
		const [ values, setValues ] = useState( control.values );
		return (
			<Fragment>
				<label className="formgent-control-label">
					{ control.label }
				</label>
				<BoxControl
					values={ values }
					onChange={ function ( value ) {
						// Update dimension values
						setValues( value );
						// Update the attribute value in the block's attributes
						setAttributes( { [ attr_key ]: value } );
					} }
				/>
			</Fragment>
		);
	},
	repeater: Repeater,
	toggle_group: function ( { attr_key, control, setAttributes } ) {
		const toggleOptions = control.options;
		return (
			<Fragment>
				<label className="formgent-control-label">
					{ control.label }
				</label>
				<ToggleGroupControl
					isBlock
					onChange={ function ( value ) {
						// Update the attribute value in the block's attributes
						setAttributes( { [ attr_key ]: value } );
					} }
				>
					{ toggleOptions.map( ( option, index ) => {
						return (
							<ToggleGroupControlOption
								key={ index }
								value={ option.value }
								label={ option.label }
							/>
						);
					} ) }
				</ToggleGroupControl>
			</Fragment>
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
