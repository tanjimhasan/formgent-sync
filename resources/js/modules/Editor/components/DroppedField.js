import { useRef } from '@wordpress/element';
import { useSortable } from '@dnd-kit/sortable';
import { registerPreviewFields } from '@newform/fields';

export default function DroppedField( props ) {
	const { id, index, field } = props;
	const ref = useRef( null );
	const DroppedField = registerPreviewFields()[ field.type ];
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
			className="newform-dropable-field"
			style={ style }
			ref={ setNodeRef }
			{ ...attributes }
		>
			<DroppedField />
		</div>
	) : (
		<div
			className="newform-dropable-field"
			ref={ setNodeRef }
			style={ style }
			{ ...attributes }
		>
			<div className="newform-dropable-field__actions">
				<i className="newform-icon" { ...listeners }>
					Trigger sort
				</i>
				<i className="newform-icon">D</i>
				<i className="newform-icon">D</i>
				<i className="newform-icon">D</i>
			</div>

			<DroppedField />
		</div>
	);
}
