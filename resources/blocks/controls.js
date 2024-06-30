import { PanelBody, SelectControl } from '@wordpress/components';
import { __experimentalInputControl as InputControl } from '@wordpress/components';

const controlGenerators = {
	panel: function ( control, attributes, setAttributes ) {
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
	text: function ( control, attributes, setAttributes ) {
		return (
			<>
				<label>{ control.label }</label>
				<InputControl
					value={ attributes[ control.attr_key ] }
					onChange={ ( value ) =>
						setAttributes( { [ control.attr_key ]: value } )
					}
				/>
			</>
		);
	},
	select: function ( control, attributes, setAttributes ) {
		return (
			<>
				<label>{ control.label }</label>
				<SelectControl
					value={ attributes[ control.attr_key ] }
					options={ control.options }
					onChange={ ( value ) =>
						setAttributes( { [ control.attr_key ]: value } )
					}
				/>
			</>
		);
	},
};

export default function Controls( { controls, attributes, setAttributes } ) {
	return controls.map( ( control ) => {
		return controlGenerators[ control.type ](
			control,
			attributes,
			setAttributes
		);
	} );
}
