/**
 * Internal dependencies
 */
import { __ } from '@wordpress/i18n';
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';
import Controls from './Controls';
import { useEffect, useState } from '@wordpress/element';
import { nanoid } from 'nanoid';
import { select, dispatch, useSelect } from '@wordpress/data';
import { addFilter, applyFilters } from '@wordpress/hooks';
import { registerBlockType } from '@wordpress/blocks';

function generateUniqueKey( baseKey, blocks ) {
	// Extract the numeric suffixes from existing keys
	const suffixes = blocks
		.map( ( block ) => {
			const name = block.attributes.name || '';
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
	const { attr_key, attributes, metaData } = props;
	//Only validate if the attribute key is 'name'
	if ( attr_key !== 'name' ) {
		return props;
	}

	const blockEditorStore = select( 'core/block-editor' );
	const selectedBlock = blockEditorStore.getSelectedBlock();

	// Return early if no block is selected
	if ( ! selectedBlock ) {
		return props;
	}

	const parentIds = blockEditorStore.getBlockParents(
		selectedBlock.clientId
	);
	const maturedParent = blockEditorStore.getBlocksByClientId(
		parentIds[ parentIds.length - 1 ]
	);

	const blocksToCheck = ! maturedParent.includes( null )
		? maturedParent[ 0 ].innerBlocks.filter(
				( childBlock ) => childBlock.clientId !== selectedBlock.clientId
		  )
		: blockEditorStore
				.getBlocks()
				.filter(
					( block ) =>
						block.name === metaData.name &&
						block.clientId !== selectedBlock.clientId
				);
	const isNameUsed = blocksToCheck.some(
		( block ) => block.attributes.name === attributes[ attr_key ]
	);

	if ( isNameUsed ) {
		props.help = __( 'This name is already used.', 'doatmail' );
		props.isInvalid = true;
	}

	return props;
} );

const updateBlockAttributtes = ( blockId, name, filteredBlocks ) => {
	dispatch( 'core/block-editor' ).updateBlockAttributes( blockId, {
		id: nanoid( 12 ),
		name: generateUniqueKey( name, filteredBlocks ),
	} );
};

const getFilteredBlocks = ( blocksArray, id ) => {
	return blocksArray.filter( ( block ) => block.clientId !== id );
};

function Block( { controls, Edit, attributes, setAttributes, metaData } ) {
	const blockProps = useBlockProps();
	const clientId = blockProps[ 'data-block' ];

	const [ draggingEnded, setDraggingEnded ] = useState( false );

	const isBeingDragged = useSelect(
		( select ) => {
			const { isBlockBeingDragged } = select( 'core/block-editor' );
			return isBlockBeingDragged( clientId );
		},
		[ clientId ]
	);

	useEffect( () => {
		// When dragging state changes
		if ( isBeingDragged ) {
			// Dragging started
			setDraggingEnded( false );
		} else if ( draggingEnded === false ) {
			// Dragging has ended
			setDraggingEnded( true );
		}
	}, [ isBeingDragged ] );

	// The value you need when dragging ends
	useEffect( () => {
		if ( draggingEnded ) {
			// Perform actions based on the end of dragging
			const props = applyFilters( 'formgent-field-text-control', {
				isInvalid: false,
				help: '',
				attr_key: 'name',
				attributes,
				metaData,
			} );
		}
	}, [ draggingEnded ] );

	useEffect( () => {
		const blockEditorStore = select( 'core/block-editor' );
		const blocks = blockEditorStore.getBlocks();
		const parentIds = blockEditorStore.getBlockParents(
			blockProps[ 'data-block' ]
		);

		const maturedParent = blockEditorStore.getBlocksByClientId(
			parentIds[ parentIds.length - 1 ]
		);
		const blockName = metaData.name;
		const currentId = attributes.id;
		const isNewBlock = ! currentId || currentId.length === 0;

		if ( isNewBlock ) {
			//If new blocks are added
			// If Parent blocks having child (Address, Name Block)
			if ( ! maturedParent.includes( null ) ) {
				const filteredChildBlocks = getFilteredBlocks(
					maturedParent[ 0 ].innerBlocks,
					attributes.id
				);
				setAttributes( {
					id: nanoid( 12 ),
					name: generateUniqueKey(
						attributes.name.replace( /-\d+$/, '' ),
						filteredChildBlocks
					),
				} );
			} else {
				//Hiving no child
				// All blocks of the same type, excluding the current block
				const filteredBlocks = getFilteredBlocks(
					blocks,
					blockProps[ 'data-block' ]
				);
				setAttributes( {
					id: nanoid( 12 ),
					name: generateUniqueKey(
						blockName.substring( 'formgent/'.length ),
						filteredBlocks
					),
				} );
			}
		} else {
			//If Blocks are duplicated
			// If Parent blocks having child (Address, Name Block)
			if ( ! maturedParent.includes( null ) ) {
				//Filter duplicated blocks
				const duplicatedChildBlocks =
					maturedParent[ 0 ].innerBlocks.filter(
						( childBlock ) => childBlock.attributes.id === currentId
					);
				if ( duplicatedChildBlocks[ 1 ] ) {
					//skip current duplicated block
					const filteredChildBlocks = getFilteredBlocks(
						maturedParent[ 0 ].innerBlocks,
						duplicatedChildBlocks[ 1 ].clientId
					);

					updateBlockAttributtes(
						duplicatedChildBlocks[ 1 ].clientId,
						attributes.name.replace( /-\d+$/, '' ),
						filteredChildBlocks
					);
				}
			} else {
				//Hiving no child
				//Filter duplicated blocks
				const duplicateBlocks = blocks.filter(
					( block ) => block.attributes.id === currentId
				);
				if ( duplicateBlocks[ 1 ] ) {
					//skip current duplicated block
					const filteredBlocks = getFilteredBlocks(
						blocks,
						duplicateBlocks[ 1 ].clientId
					);
					updateBlockAttributtes(
						duplicateBlocks[ 1 ].clientId,
						blockName.substring( 'formgent/'.length ),
						filteredBlocks
					);
				}
			}
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
