import {
	Dropdown,
	Button,
	__experimentalInputControl as InputControl,
} from '@wordpress/components';
import { useViewportMatch } from '@wordpress/compose';

import ReactSVG from 'react-inlinesvg';
import ellipsisH from '@icon/ellipsis-h.svg';

function dropdownProps() {
	const isMobile = useViewportMatch( 'medium', '<' );
	return ! isMobile
		? {
				placement: 'left-start',
				offset: 248,
		  }
		: {};
}

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

	function handleAddValue( item ) {
		const currentValue = attributes[ attr_key ] || '';
		const newValue = `${ currentValue }${ item.value }`;
		setAttributes( { [ attr_key ]: newValue } );
	}

	return (
		<div className="formgent-control-default-value-wrapper">
			<div className="formgent-control-default-value">
				<InputControl
					label={ control.label }
					value={ attributes[ attr_key ] }
					size="__unstable-large"
					onChange={ function ( value ) {
						// Update the attribute value in the block's attributes
						setAttributes( { [ attr_key ]: value } );
					} }
				/>
				<Dropdown
					className="formgent-control-default-value-list"
					contentClassName="formgent-control-default-value-list-content"
					popoverProps={ dropdownProps() }
					renderToggle={ ( { isOpen, onToggle } ) => (
						<Button onClick={ onToggle } aria-expanded={ isOpen }>
							<ReactSVG src={ ellipsisH } />
						</Button>
					) }
					renderContent={ () => (
						<div>
							{ defaultValues.map( ( item, index ) => {
								return (
									<span
										key={ index }
										onClick={ () => handleAddValue( item ) }
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
