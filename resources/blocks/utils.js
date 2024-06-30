import { useEffect } from '@wordpress/element';
import { nanoid } from 'nanoid';
import { store as blockEditorStore } from '@wordpress/block-editor';
import { select } from '@wordpress/data';

export function setUniqueNameAndId( attributes, setAttributes ) {
	useEffect( () => {
		/**
		 * If id length is empty, that's mean it's a new block.
		 */
		if ( 0 !== attributes.id.length ) {
			return;
		}

		const selectedBlock = select( 'core/block-editor' ).getSelectedBlock();
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
}
