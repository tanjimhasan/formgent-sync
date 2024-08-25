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
	// Regex to match baseKey and any variations like baseKey, baseKey-1, baseKey-2, etc.
	const regex = new RegExp( `^${ baseKey }(?:-(\\d+))?$` );
	// Extract all matching names and their suffix numbers
	const suffixes = blocks
		.map( ( block ) => {
			if ( block.attributes && block.attributes.name ) {
				const match = block.attributes.name.match( regex );
				return match
					? match[ 1 ]
						? parseInt( match[ 1 ], 10 )
						: 0
					: null;
			}
			return null;
		} )
		.filter( ( suffix ) => suffix !== null );
	// If no suffixes are found, return the baseKey
	if ( suffixes.length === 0 ) {
		return baseKey;
	}

	// Find the highest suffix used
	const maxSuffix = Math.max( ...suffixes );

	// Return baseKey with an incremented suffix (baseKey-1, baseKey-2, etc.)
	return `${ baseKey }-${ maxSuffix + 1 }`;
}

addFilter( 'formgent-field-text-control', 'formgent', function ( props ) {
	const { attr_key, attributes, metaData } = props;
	//Only validate if the attribute key is 'name'
	if ( attr_key !== 'name' ) {
		return props;
	}

	const blockEditorStore = select( 'core/block-editor' );
	const selectedBlock = blockEditorStore.getSelectedBlock();
	const blocks = blockEditorStore.getBlocks();

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

	let allBlocksToCheck = [];

	if ( ! maturedParent.includes( null ) ) {
		let leafBlock = [];
		let siblingBlocks = [];

		if ( ! maturedParent[ 0 ].name.includes( 'formgent/' ) ) {
			blocks.forEach( ( block ) => {
				if ( block.innerBlocks.length === 0 ) {
					leafBlock.push( block );
				} else {
					siblingBlocks.push( block );
				}
			} );
			allBlocksToCheck = [
				...leafBlock,
				...mergeSiblingsBlocks(
					mergeInnerBlocks( maturedParent[ 0 ], parentIds )
				),
				...mergeSiblingsBlocks( siblingBlocks ),
			];
		} else {
			allBlocksToCheck = [
				...mergeSiblingsBlocks(
					mergeInnerBlocks( maturedParent[ 0 ], parentIds )
				),
			];
		}
		console.log( allBlocksToCheck, attributes[ attr_key ] );
	} else {
		let leafBlock = [];
		let siblingBlocks = [];
		let hostBlocks = [];
		blocks.forEach( ( block ) => {
			if ( block.innerBlocks.length === 0 ) {
				leafBlock.push( block );
			} else if ( block.name.includes( 'formgent/' ) ) {
				hostBlocks.push( block );
			} else {
				siblingBlocks.push( block );
			}
		} );

		allBlocksToCheck = leafBlock.concat(
			mergeSiblingsBlocks( siblingBlocks ),
			hostBlocks
		);
	}
	const isNameUsed = allBlocksToCheck
		.filter( ( block ) => block.clientId !== selectedBlock.clientId )
		.some( ( block ) => block.attributes.name === attributes[ attr_key ] );

	if ( isNameUsed ) {
		props.help = __( 'This name is already used.', 'doatmail' );
		props.isInvalid = true;
	}

	return props;
} );

function mergeSiblingsBlocks( blocks ) {
	let mergedBlocks = [];
	blocks.forEach( ( block ) => {
		if (
			! block.name.includes( 'formgent/' ) ||
			block.innerBlocks.length !== 0
		) {
			// console.log("recursive");
			// Recursively merge inner blocks
			const innerMergedBlocks = mergeSiblingsBlocks( block.innerBlocks );
			innerMergedBlocks.forEach( ( innerBlock ) => {
				if (
					! mergedBlocks.some(
						( existingBlock ) =>
							existingBlock.clientId === innerBlock.clientId
					)
				) {
					mergedBlocks.push( innerBlock );
				}
			} );
			//mergedBlocks = mergedBlocks.concat(mergeSiblingsBlocks(block.innerBlocks));
		} else {
			// Only add the block if it's not already in mergedBlocks
			if (
				! mergedBlocks.some(
					( existingBlock ) =>
						existingBlock.clientId === block.clientId
				)
			) {
				mergedBlocks.push( block );
			}
			//mergedBlocks.push(block);
		}

		// console.log('block',block, mergedBlocks);
	} );
	return mergedBlocks;
}

const mergeInnerBlocks = ( block, blockParentIds ) => {
	// console.log(blockParentIds, block);
	let mergeBlocks = [];
	const blockEditorStore = select( 'core/block-editor' );

	if ( block.innerBlocks ) {
		mergeBlocks = [ ...block.innerBlocks ];

		// Recursively merge innerBlocks of each block
		block.innerBlocks.forEach( ( innerBlock ) => {
			mergeBlocks = mergeBlocks.concat( mergeInnerBlocks( innerBlock ) );
		} );
	}
	if ( blockParentIds && blockParentIds.length > 1 ) {
		mergeBlocks = mergeParentBlocks(
			blockParentIds,
			mergeBlocks,
			blockEditorStore
		);
	}
	// console.log('merged',mergeBlocks);
	return mergeBlocks.filter( ( block ) => block.name !== 'core/group' );
};

function mergeParentBlocks( blockParentIds, mergeBlocks, blockEditorStore ) {
	let mergedParentBlocks = [ ...mergeBlocks ];
	for ( let i = blockParentIds.length - 1; i >= 0; i-- ) {
		const parent = blockEditorStore.getBlocksByClientId(
			blockParentIds[ i ]
		);
		// console.log('parent', parent);
		if ( ! parent[ 0 ].name.includes( 'formgent/' ) ) {
			// console.log('pushed');
			const innerBlocksClientIds = parent[ 0 ].innerBlocks.map(
				( block ) => block.clientId
			);
			mergedParentBlocks = mergeParentBlocks(
				innerBlocksClientIds,
				mergedParentBlocks,
				blockEditorStore
			);
		} else {
			const isAlreadyMerged = mergedParentBlocks.some(
				( block ) => block.clientId === parent[ 0 ].clientId
			);
			if ( ! isAlreadyMerged ) {
				// console.log('pushed');
				mergedParentBlocks = mergedParentBlocks.concat( parent );
			}
		}
	}
	return mergedParentBlocks;
}

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
			// If Parent blocks having child (Address, Name Block)
			if ( ! maturedParent.includes( null ) ) {
				let leafBlock = [];
				let siblingBlocks = [];
				let allBlocksToCheck = [];
				if ( ! maturedParent[ 0 ].name.includes( 'formgent/' ) ) {
					blocks.forEach( ( block ) => {
						if ( block.innerBlocks.length === 0 ) {
							leafBlock.push( block );
						} else {
							siblingBlocks.push( block );
						}
					} );
					allBlocksToCheck = [
						...leafBlock,
						...mergeSiblingsBlocks(
							mergeInnerBlocks( maturedParent[ 0 ], parentIds )
						),
						...mergeSiblingsBlocks( siblingBlocks ),
					];
				} else {
					allBlocksToCheck = [
						...mergeSiblingsBlocks(
							mergeInnerBlocks( maturedParent[ 0 ], parentIds )
						),
					];
				}
				const filteredChildBlocks = getFilteredBlocks(
					allBlocksToCheck,
					blockProps[ 'data-block' ]
				);
				setAttributes( {
					id: nanoid( 12 ),
					name: generateUniqueKey(
						attributes.name.replace( /-\d+$/, '' ),
						filteredChildBlocks
					),
				} );
			} else {
				let leafBlock = [];
				let siblingBlocks = [];
				let hostBlocks = [];
				blocks.forEach( ( block ) => {
					if ( block.innerBlocks.length === 0 ) {
						leafBlock.push( block );
					} else if ( block.name.includes( 'formgent/' ) ) {
						hostBlocks.push( block );
					} else {
						siblingBlocks.push( block );
					}
				} );

				const allBlocksToCheck = leafBlock.concat(
					mergeSiblingsBlocks( siblingBlocks ),
					hostBlocks
				);

				//Hiving no child
				// All blocks of the same type, excluding the current block
				const filteredBlocks = getFilteredBlocks(
					allBlocksToCheck,
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
			console.log( maturedParent );
			//If Blocks are duplicated
			// If Parent blocks having child (Address, Name Block)
			if ( ! maturedParent.includes( null ) ) {
				let leafBlock = [];
				let siblingBlocks = [];
				let allBlocksToCheck = [];
				if ( ! maturedParent[ 0 ].name.includes( 'formgent/' ) ) {
					blocks.forEach( ( block ) => {
						if ( block.innerBlocks.length === 0 ) {
							leafBlock.push( block );
						} else {
							siblingBlocks.push( block );
						}
					} );
					console.log(
						mergeSiblingsBlocks(
							mergeInnerBlocks( maturedParent[ 0 ], parentIds )
						),
						mergeSiblingsBlocks( siblingBlocks )
					);
					// allBlocksToCheck = [...leafBlock, ...mergeSiblingsBlocks(mergeInnerBlocks(maturedParent[ 0 ], parentIds)), ...mergeSiblingsBlocks(siblingBlocks)]
					allBlocksToCheck = [
						...new Map( [
							...leafBlock.map( ( block ) => [
								block.clientId,
								block,
							] ),
							...mergeSiblingsBlocks(
								mergeInnerBlocks(
									maturedParent[ 0 ],
									parentIds
								)
							).map( ( block ) => [ block.clientId, block ] ),
							...mergeSiblingsBlocks( siblingBlocks ).map(
								( block ) => [ block.clientId, block ]
							),
						] ).values(),
					];
				} else {
					allBlocksToCheck = [
						...mergeSiblingsBlocks(
							mergeInnerBlocks( maturedParent[ 0 ], parentIds )
						),
					];
				}

				//Filter duplicated blocks
				const duplicatedChildBlocks =
					maturedParent[ 0 ].innerBlocks.filter(
						( childBlock ) => childBlock.attributes.id === currentId
					);
				console.log( duplicatedChildBlocks );
				if ( duplicatedChildBlocks[ 1 ] ) {
					console.log( 'uuu' );
					// console.log(allBlocksToCheck);
					//skip current duplicated block
					const filteredChildBlocks = getFilteredBlocks(
						allBlocksToCheck,
						duplicatedChildBlocks[ 1 ].clientId
					);

					console.log( filteredChildBlocks );

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
