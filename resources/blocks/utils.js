/**
 * Internal dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import Controls from './controls';
import { useEffect } from '@wordpress/element';
import { nanoid } from 'nanoid';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { select } from '@wordpress/data';
import { registerBlockType } from '@wordpress/blocks';

function Block( { controls, Edit, attributes, setAttributes } ) {
	useEffect( () => {
		/**
		 * If id length is empty, that's mean it's a new block.
		 */
		if ( undefined === attributes.id || 0 !== attributes.id.length ) {
			return;
		}

		const selectedBlock = select( 'core/block-editor' ).getSelectedBlock();

		if ( ! selectedBlock ) {
			return;
		}

		const blocks = select( blockEditorStore )
			.getBlocks()
			.filter( ( block ) => block.name === selectedBlock.name );

		const name =
			blocks.length > 1
				? `${ attributes.name }-${ blocks.length - 1 }`
				: attributes.name;

		setAttributes( {
			id: nanoid( 12 ),
			name: name,
		} );
	}, [] );

	return (
		<>
			<div { ...useBlockProps() }>
				<Edit
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			</div>
			<InspectorControls>
				<Controls
					controls={ controls }
					attributes={ attributes }
					setAttributes={ setAttributes }
				/>
			</InspectorControls>
		</>
	);
}

export function registerBlock(
	metadata,
	controls,
	Edit,
	icon = 'smiley',
	exampleAttributes = {}
) {
	if ( 'formgent_form' === typenow ) {
		registerBlockType( metadata.name, {
			icon,
			example: {
				attributes: exampleAttributes,
			},
			edit: function ( { attributes, setAttributes } ) {
				return (
					<Block
						controls={ controls }
						Edit={ Edit }
						attributes={ attributes }
						setAttributes={ setAttributes }
					/>
				);
			},
		} );
	}
}
