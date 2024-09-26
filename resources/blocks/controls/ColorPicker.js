import { useState, useEffect, useRef } from '@wordpress/element';
import { ColorPicker } from '@wordpress/components';
import checkClickedOutside from '@formgent/helper/checkClickedOutside';

export default function PickColor( {
	attr_key,
	control,
	attributes,
	setAttributes,
} ) {
	const [ showColorPicker, setShowColorPicker ] = useState( false );
	const colorPickerRef = useRef( null );
	// Close Dropdown click on outside
	useEffect( () => {
		checkClickedOutside(
			showColorPicker,
			setShowColorPicker,
			colorPickerRef
		);
	}, [ showColorPicker ] );

	return (
		<div className="formgent-control-color-picker">
			<span className="formgent-control-label">{ control.label }</span>
			<div
				className="formgent-control-color-picker-trigger"
				onClick={ () => {
					setShowColorPicker( ! showColorPicker );
				} }
			>
				<span className="formgent-control-color-picker-value">
					{ attributes[ attr_key ] }
				</span>
				<span
					className="formgent-control-color-picker-color"
					style={ { background: attributes[ attr_key ] } }
				></span>
			</div>
			{ showColorPicker && (
				<div
					className="formgent-control-color-picker-input"
					ref={ colorPickerRef }
				>
					<ColorPicker
						color={ control.color }
						onChange={ function ( value ) {
							// Update the attribute value in the block's attributes
							setAttributes( { [ attr_key ]: value } );
						} }
					/>
				</div>
			) }
		</div>
	);
}
