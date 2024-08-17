/**
 * Internal dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import Controls from './Controls';
import { useEffect } from '@wordpress/element';
import { nanoid } from 'nanoid';
import { select, dispatch } from '@wordpress/data';
import { addFilter } from '@wordpress/hooks';
import { registerBlockType } from '@wordpress/blocks';

function generateUniqueKey( baseKey, blocks ) {
	const suffixes = blocks
		.map( ( block ) => {
			const name = block.attributes.name;
			const match = name.match( new RegExp( `^${ baseKey }-(\\d+)$` ) );
			return match ? parseInt( match[ 1 ], 10 ) : 0;
		} )
		.filter( ( num ) => num >= 0 );
	const maxSuffix = Math.max( ...suffixes, -1 );
	const newSuffix = maxSuffix + 1;
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

function updateBlockAttributesRecursively( block, setAttributes ) {
	const blockEditorStore = select( 'core/block-editor' );
	const blocks = blockEditorStore.getBlocks();
	const blockName = block.attributes.name;
	const currentId = block?.attributes?.id;
	const isNewBlock = ! currentId || currentId.length === 0;
	console.log( block.innerBlocks );
	if ( isNewBlock ) {
		const filteredBlocks = blocks.filter(
			( b ) => b.name === blockName && b.clientId !== block.clientId
		);

		const uniqueKey = generateUniqueKey( blockName, filteredBlocks );
		setAttributes( {
			...block.attributes,
			id: nanoid( 12 ),
			name: uniqueKey,
		} );
	} else {
		const duplicateBlocks = blocks.filter(
			( b ) => b.attributes.id === currentId
		);

		if ( duplicateBlocks[ 1 ] ) {
			const filteredBlocks = blocks.filter(
				( b ) =>
					b.name === blockName &&
					b.clientId !== duplicateBlocks[ 1 ].clientId
			);
			const uniqueKey = generateUniqueKey( blockName, filteredBlocks );
			dispatch( 'core/block-editor' ).updateBlockAttributes(
				duplicateBlocks[ 1 ].clientId,
				{
					id: nanoid( 12 ),
					name: uniqueKey,
				}
			);
		}
	}

	// Process inner blocks while preserving their original names
	if ( block.innerBlocks && block.innerBlocks.length > 0 ) {
		block.innerBlocks.forEach( ( innerBlock ) => {
			const originalInnerBlockName =
				innerBlock.attributes.name || 'inner-block';
			const uniqueInnerKey = generateUniqueKey(
				originalInnerBlockName,
				blocks
			);
			// Only update the name if it's a new block
			if (
				! innerBlock.attributes.id ||
				innerBlock.attributes.id.length === 0
			) {
				dispatch( 'core/block-editor' ).updateBlockAttributes(
					innerBlock.clientId,
					{
						id: nanoid( 12 ),
						name: uniqueInnerKey,
					}
				);
			}
		} );
	}
}

function Block( { controls, Edit, attributes, setAttributes, metaData } ) {
	const blockEditorStore = select( 'core/block-editor' );
	const blockProps = useBlockProps();

	useEffect( () => {
		const selectedBlock = blockEditorStore.getSelectedBlock();

		if ( selectedBlock ) {
			updateBlockAttributesRecursively( selectedBlock, setAttributes );
		}
	}, [] );

	return (
		<>
			<div { ...blockProps }>
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
	exampleAttributes = {},
	props = {}
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
			...props,
		} );
	}
}
