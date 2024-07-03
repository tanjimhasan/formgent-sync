import {
	PanelBody,
	SelectControl,
	ToggleControl,
	CheckboxControl,
} from '@wordpress/components';
import { __experimentalInputControl as InputControl } from '@wordpress/components';

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
