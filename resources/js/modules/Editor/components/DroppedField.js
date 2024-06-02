import { useRef, memo } from '@wordpress/element';
import { useSortable } from '@dnd-kit/sortable';
import { registerPreviewFields } from '@formgent/fields';

const DroppedField = ( { id, index, field } ) => {
	const ActiveDroppedField = registerPreviewFields()[ field.type ];
	console.log( ActiveDroppedField );
	const ref = useRef( null );
	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable( {
			id,
			data: {
				index,
				id,
				field,
			},
		} );

	const style = {
		transform:
			transform &&
			`translate3d(${ transform.x }px, ${ transform.y }px, 0px) scaleX(${ transform.scaleX }) scaleY(${ transform.scaleY })`,
		transition,
	};

	return field.type === 'spacer' ? (
		<div
			className="formgent-dropable-field"
			style={ style }
			ref={ setNodeRef }
			{ ...attributes }
		>
			<ActiveDroppedField />
		</div>
	) : (
		<div
			className="formgent-dropable-field"
			ref={ setNodeRef }
			style={ style }
			{ ...attributes }
		>
			<div className="formgent-dropable-field__actions">
				<i className="formgent-icon" { ...listeners }>
					Trigger sort
				</i>
				<i className="formgent-icon">D</i>
				<i className="formgent-icon">D</i>
				<i className="formgent-icon">D</i>
			</div>

			<ActiveDroppedField />
		</div>
	);
};

export default memo( DroppedField );
