import { memo, useState } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import ReactSVG from 'react-inlinesvg';
import { useSortable } from '@dnd-kit/sortable';
import { registerPreviewFields } from '@formgent/fields';
import { arrayMove } from '@dnd-kit/sortable';
import dotsGrid from '@icon/dots-grid.svg';
import copy from '@icon/copy.svg';
import trash from '@icon/trash.svg';
import arrowUp from '@icon/arrow-up.svg';
import arrowDown from '@icon/arrow-down.svg';
import { nanoid } from 'nanoid';
import BuilderAlert from '@formgent/components/BuilderAlert';
import { __ } from '@wordpress/i18n';

const DroppedField = ( { id, index, fields, field } ) => {
	const [ isAlertActive, setIsAlertActive ] = useState( false );
	const ActiveDroppedField = registerPreviewFields()[ field.type ];
	const {
		updateActiveField,
		updateFormFields,
		duplicateFormField,
		deleteFormField,
	} = useDispatch( 'formgent' );

	const { SingleFormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getSingleForm();
	}, [] );

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

	//Shift field to up index
	function handleShiftUp() {
		const updatedFields = arrayMove( fields, index, index - 1 );
		updateFormFields( updatedFields );
	}

	//Shift field to down index
	function handleShiftDown() {
		const updatedFields = arrayMove( fields, index, index + 1 );
		updateFormFields( updatedFields );
	}

	//Duplicatefield
	function handleDuplicate() {
		const duplicateField = structuredClone( field );

		duplicateField.id = nanoid( 12 );
		duplicateField.name = `${ field.type }${ fields.length }`;
		duplicateFormField( duplicateField, index );
	}

	//Delete field
	function handleDeleteField() {
		deleteFormField( id );
		setIsAlertActive( false );
	}

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
					<i
						className="formgent-icon"
						onClick={ () => handleShiftUp() }
					>
						<ReactSVG src={ arrowUp } />
					</i>
				) }

				{ fields.length >= 2 && index !== fields.length - 1 && (
					<i
						className="formgent-icon"
						onClick={ () => handleShiftDown() }
					>
						<ReactSVG src={ arrowDown } />
					</i>
				) }
				<i className="formgent-icon" onClick={ handleDuplicate }>
					<ReactSVG src={ copy } />
				</i>
				<i
					className="formgent-icon"
					onClick={ () => setIsAlertActive( true ) }
				>
					<ReactSVG src={ trash } />
				</i>
			</div>

			{ isAlertActive && (
				<BuilderAlert
					title={ __( 'Delete field', 'formgent' ) }
					submitHandler={ handleDeleteField }
					setIsAlertActive={ setIsAlertActive }
					type="field"
				/>
			) }

			<ActiveDroppedField field={ field } />
		</div>
	);
};

export default memo( DroppedField );
