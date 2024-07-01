import { useBlockProps } from '@wordpress/block-editor';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes, setAttributes } ) {
	function handleNameChange( e, field ) {
		if ( attributes.format === 'full_name' ) {
			setAttributes( {
				name: e.target.value,
			} );
		} else if ( attributes.format === 'first_last' ) {
			setAttributes( {
				[ field ]: e.target.value,
				name: `${
					field === 'fname' ? e.target.value : attributes.fname || ''
				} ${
					field === 'lname' ? e.target.value : attributes.lname || ''
				}`,
			} );
		} else if ( attributes.format === 'first_middle_last' ) {
			setAttributes( {
				[ field ]: e.target.value,
				name: `${
					field === 'fname' ? e.target.value : attributes.fname || ''
				} ${
					field === 'mname' ? e.target.value : attributes.mname || ''
				} ${
					field === 'lname' ? e.target.value : attributes.lname || ''
				}`,
			} );
		}
	}

	useEffect( () => {
		if ( attributes.format === 'full_name' ) {
			setAttributes( {
				name: `${ attributes.fname || '' } ${ attributes.lname || '' }`,
			} );
		} else if ( attributes.format === 'first_last' ) {
			setAttributes( {
				name: `${ attributes.fname || '' } ${ attributes.lname || '' }`,
			} );
		} else if ( attributes.format === 'first_middle_last' ) {
			setAttributes( {
				name: `${ attributes.fname || '' } ${
					attributes.mname || ''
				} ${ attributes.lname || '' }`,
			} );
		}
	}, [ attributes.format ] );

	return (
		<div { ...useBlockProps() }>
			<h4>{ attributes.label }</h4>
			{ attributes.format === 'full_name' ? (
				<div className="formgent-form-group">
					<label> { __( 'Full Name', 'formgent' ) }</label>
					<input
						type="text"
						value={ attributes.name }
						onChange={ handleNameChange }
					/>
				</div>
			) : (
				<>
					<div className="formgent-form-group">
						<label> { __( 'First Name', 'formgent' ) }</label>
						<input
							type="text"
							value={ attributes.fname }
							onChange={ ( e ) => handleNameChange( e, 'fname' ) }
						/>
					</div>
					{ attributes.format === 'first_middle_last' && (
						<div className="formgent-form-group">
							<label> { __( 'Middle Name', 'formgent' ) }</label>
							<input
								type="text"
								value={ attributes.mname }
								onChange={ ( e ) =>
									handleNameChange( e, 'mname' )
								}
							/>
						</div>
					) }
					<div className="formgent-form-group">
						<label> { __( 'Last Name', 'formgent' ) }</label>
						<input
							type="text"
							value={ attributes.lname }
							onChange={ ( e ) => handleNameChange( e, 'lname' ) }
						/>
					</div>
				</>
			) }
		</div>
	);
}
