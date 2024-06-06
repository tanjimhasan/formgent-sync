import { useRef, memo, Fragment } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import ReactSVG from 'react-inlinesvg';
import { useSortable } from '@dnd-kit/sortable';
import { registerPreviewFields } from '@formgent/fields';
import dotsGrid from '@icon/dots-grid.svg';
import copy from '@icon/copy.svg';
import trash from '@icon/trash.svg';
import arrowUp from '@icon/arrow-up.svg';
import arrowDown from '@icon/arrow-down.svg';

const DroppedField = ( { id, index, fields, field } ) => {
	const ActiveDroppedField = registerPreviewFields()[ field.type ];
	const ref = useRef( null );
	const { updateActiveField } = useDispatch( 'formgent' );

	const { SingleFormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getSingleForm();
	}, [] );

	console.log( SingleFormReducer, id );

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

	console.log( fields.length, fields.length < 1 );

	return field.type === 'spacer' ? (
		<div
			className="formgent-dropable-field"
			style={ style }
			ref={ setNodeRef }
			{ ...attributes }
		>
			<ActiveDroppedField field={ field } />
		</div>
	) : (
		<div
			className={ `formgent-dropable-field ${
				SingleFormReducer.activeField === id ? 'formgent-active' : ''
			}` }
			ref={ setNodeRef }
			style={ style }
			{ ...attributes }
			onClick={ () => updateActiveField( id ) }
		>
			<span className="formgent-dropable-field__sorting" { ...listeners }>
				<ReactSVG src={ dotsGrid } />
			</span>
			<div className="formgent-dropable-field__actions">
				{ fields.length >= 2 && index !== 0 && (
					<Fragment>
						<i className="formgent-icon">
							<ReactSVG src={ arrowUp } />
						</i>
					</Fragment>
				) }

				{ fields.length >= 2 && index !== fields.length - 1 && (
					<Fragment>
						<i className="formgent-icon">
							<ReactSVG src={ arrowDown } />
						</i>
					</Fragment>
				) }
				<i className="formgent-icon">
					<ReactSVG src={ copy } />
				</i>
				<i className="formgent-icon">
					<ReactSVG src={ trash } />
				</i>
			</div>

			<ActiveDroppedField field={ field } />
		</div>
	);
};

export default memo( DroppedField );
