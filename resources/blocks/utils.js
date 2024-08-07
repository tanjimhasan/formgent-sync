/**
 * Internal dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import Controls from './Controls';
import { useEffect } from '@wordpress/element';
import { nanoid } from 'nanoid';
import { select } from '@wordpress/data';
import { addFilter } from '@wordpress/hooks';
import { registerBlockType } from '@wordpress/blocks';

function generateUniqueKey( baseKey, blocks ) {
	// Extract the numeric suffixes from existing keys
	const suffixes = blocks
		.map( ( block ) => {
			const name = block.attributes.name;
			// Match names with the format "baseKey-n" where n is a number
			const match = name.match( new RegExp( `^${ baseKey }-(\\d+)$` ) );
			return match ? parseInt( match[ 1 ], 10 ) : 0;
		} )
		.filter( ( num ) => num >= 0 ); // Filter out non-numeric suffixes

	// Find the highest suffix and increment it
	const maxSuffix = Math.max( ...suffixes, -1 );
	const newSuffix = maxSuffix + 1;

	// Return the new unique key
	return newSuffix === 0 ? baseKey : `${ baseKey }-${ newSuffix }`;
}

addFilter( 'formgent-field-text-control', 'formgent', function ( props ) {
	if ( 'name' !== props.attr_key ) {
		return props;
	}

	const blockEditorStore = select( 'core/block-editor' );
	const selectedBlock = blockEditorStore.getSelectedBlock();

	if ( ! selectedBlock ) {
		return props;
	}

	const blocks = blockEditorStore
		.getBlocks()
		.filter(
			( block ) =>
				block.name === props.metaData.name &&
				block.clientId !== selectedBlock.clientId
		);

	for ( const key in blocks ) {
		const block = blocks[ key ];
		if ( block.attributes.name === props.attributes[ props.attr_key ] ) {
			props.help = __( 'This name is already used.', 'doatmail' );
			props.isInvalid = true;
		}
	}

	return props;
} );

function Block( { controls, Edit, attributes, setAttributes, metaData } ) {
	useEffect( () => {
		const blockEditorStore = select( 'core/block-editor' );
		/**
		 * If id length is empty, that's mean it's a new block.
		 */
		if ( undefined === attributes.id || 0 !== attributes.id.length ) {
			return;
		}

		const selectedBlock = blockEditorStore.getSelectedBlock();

		if ( ! selectedBlock ) {
			return;
		}

		const blocks = blockEditorStore
			.getBlocks()
			.filter(
				( block ) =>
					block.name === metaData.name &&
					block.clientId !== selectedBlock.clientId
			);

		setAttributes( {
			id: nanoid( 12 ),
			name: generateUniqueKey(
				metaData.name.substring( 'formgent/'.length ),
				blocks
			),
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
					metaData={ metaData }
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
						metaData={ metadata }
					/>
				);
			},
		} );
	}
}
