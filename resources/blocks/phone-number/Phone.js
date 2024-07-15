import { useState } from '@wordpress/element';
import 'intl-tel-input/build/css/intlTelInput.css';
import IntlTelInput from 'intl-tel-input/react';

export default function Phone( { handlePhoneChange } ) {
	const [ phoneNumber, setPhoneNumber ] = useState( '' );

	const handleChange = ( value ) => {
		setPhoneNumber( value );
		handlePhoneChange( value );
		console.log( 'Number Changed', { value } );
	};

	return (
		<IntlTelInput
			containerClassName="intl-tel-input"
			inputClassName="form-control"
			value={ phoneNumber }
			onChangeNumber={ ( value ) => handleChange( value ) }
			initOptions={ {
				initialCountry: 'bd',
				utilsScript:
					'https://cdn.jsdelivr.net/npm/intl-tel-input@23.3.2/build/js/utils.js',
			} }
		/>
	);
}
