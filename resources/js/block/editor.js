import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import apiFetch from '@wordpress/api-fetch';
import { useEffect, useState } from '@wordpress/element';

const Form = ( { formId } ) => {
	return `Selected Form Id is ${ formId }`;
};

registerBlockType( 'newform/form', {
	title: __( 'New Form', 'newform' ),
	icon: 'smiley',
	category: 'common',
	attributes: {
		formId: {
			type: 'string',
			default: '0',
		},
	},
	edit: ( { attributes, setAttributes } ) => {
		const { formId } = attributes;
		const [ options, setOptions ] = useState( [] );

		const onChangeForm = ( formId ) => {
			setAttributes( { formId: formId } );
		};

		useEffect( () => {
			apiFetch( { path: '/new-form/admin/forms/select' } ).then(
				( response ) => {
					setOptions( [
						{
							label: __( '-- Select a form --', 'newform' ),
							value: '0',
						},
						...response.forms,
					] );

					const formExists = response.forms.some(
						( form ) => form.value === formId
					);

					/**
					 * If the form does not exist then resetting it.
					 */
					if ( ! formExists ) {
						onChangeForm( '0' );
					}
				}
			);
		}, [] );

		return (
			<>
				<InspectorControls>
					<PanelBody
						title={ __( 'Select your new form', 'newform' ) }
					>
						<SelectControl
							label={ __( 'SELECT A FORM', 'newform' ) }
							value={ formId }
							options={ options }
							onChange={ onChangeForm }
						/>
					</PanelBody>
				</InspectorControls>
				{ '0' === formId ? (
					<>
						<h3>New Form Logo</h3>
						<SelectControl
							label={ __( 'SELECT A FORM', 'newform' ) }
							value={ formId }
							options={ options }
							onChange={ onChangeForm }
						/>
					</>
				) : (
					<Form formId={ formId } />
				) }
			</>
		);
	},
	save: ( { attributes } ) => {
		return (
			<div
				className="newform newform-block"
				data-form_id={ attributes.formId }
			/>
		);
	},
} );
