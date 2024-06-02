import { useRef, useState, useEffect, useCallback } from '@wordpress/element';
import { useSelect } from '@wordpress/data';
import { useDroppable } from '@dnd-kit/core';

import update from 'immutability-helper';
import DroppedField from './DroppedField';
import { DropableBoxStyle } from './style';

export default function DropableBox( props ) {
	const { fields } = props;

	const { listeners, setNodeRef, transform, transition } = useDroppable( {
		id: 'canvas_droppable',
		data: {
			parent: null,
			isContainer: true,
		},
	} );

	const style = {
		transform:
			transform &&
			`translate3d(${ transform.x }px, ${ transform.y }px, 0px) scaleX(${ transform.scaleX }) scaleY(${ transform.scaleY })`,
		transition,
	};

	console.log( fields );
	return (
		<DropableBoxStyle ref={ setNodeRef } style={ style } { ...listeners }>
			<div className="formgent-dropable-field-list">
				{ /* {
					fields.length === 0 &&
					<div className="formgent-dropable-field-empty-placeholder">
						<span>+</span>
					</div>
				} */ }
				{ fields.map( ( field, index ) => (
					<DroppedField
						key={ field.id }
						id={ field.id }
						field={ field }
						index={ index }
					/>
				) ) }
			</div>
		</DropableBoxStyle>
	);
}
