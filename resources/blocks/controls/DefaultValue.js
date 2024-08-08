import {
	Dropdown,
	Button,
	__experimentalInputControl as InputControl,
} from '@wordpress/components';
import { useState } from '@wordpress/element';
import ReactSVG from 'react-inlinesvg';
import ellipsisH from '@icon/ellipsis-h.svg';

export default function DefaultValue( {
	attr_key,
	control,
	attributes,
	setAttributes,
} ) {
	const defaultValues = [
		{
			label: 'Date Format',
			value: '{date_format}',
		},
		{
			label: 'Value two',
			value: '{value_two}',
		},
		{
			label: 'Value three',
			value: '{value_three}',
		},
	];

	function handleAddValue( e ) {
		const dataValue = e.target.dataset.value;
		const currentValue = attributes[ attr_key ] || '';
		//if ( ! currentValue.includes( dataValue ) ) {
		const newValue = `${ currentValue }${ dataValue }`;
		setAttributes( { [ attr_key ]: newValue } );
		//}
	}

	return (
		<div className="formgent-control-default-value-wrapper">
			<div className="formgent-control-default-value">
				<InputControl
					label={ control.label }
					value={ attributes[ attr_key ] }
					onChange={ function ( value ) {
						// Update the attribute value in the block's attributes
						setAttributes( { [ attr_key ]: value } );
					} }
				/>
				<Dropdown
					className="formgent-control-default-value-list"
					contentClassName="formgent-control-default-value-list-content"
					popoverProps={ { placement: 'bottom-end' } }
					renderToggle={ ( { isOpen, onToggle } ) => (
						<Button
							ghost
							onClick={ onToggle }
							aria-expanded={ isOpen }
						>
							<ReactSVG src={ ellipsisH } />
						</Button>
					) }
					renderContent={ () => (
						<div>
							{ defaultValues.map( ( item ) => {
								return (
									<span
										data-value={ item.value }
										onClick={ ( e ) => {
											handleAddValue( e );
										} }
									>
										{ item.label }
									</span>
								);
							} ) }
						</div>
					) }
				/>
			</div>
		</div>
	);
}
