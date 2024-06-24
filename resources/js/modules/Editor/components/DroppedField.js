import { memo, useState, useRef, useEffect } from '@wordpress/element';
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
import plus from '@icon/plus.svg';
import search from '@icon/search.svg';
import { nanoid } from 'nanoid';
import { __ } from '@wordpress/i18n';
import { AntInput, AntModal, AntPopover, Row, Col } from '@formgent/components';
import AlertContent from '@formgent/components/AlertContent';
import { FieldListPopoverStyle } from './style';
import checkClickedOutside from '@formgent/helper/checkClickedOutside';

const DroppedField = ( {
	id,
	index,
	fields,
	field,
	rootFields,
	setRootFields,
} ) => {
	const [ domStatus, setDomStatus ] = useState( false );
	const [ isAlertActive, setIsAlertActive ] = useState( false );
	const [ activePopupFieldId, setActivePopupFieldId ] = useState( null );
	const ActiveDroppedField = registerPreviewFields()[ field.type ];
	const contentRef = useRef( null );
	const {
		updateActiveField,
		updateFormFields,
		duplicateFormField,
		deleteFormField,
		addFieldAfter,
	} = useDispatch( 'formgent' );

	const { CommonReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getCommonState();
	}, [] );
	const { useParams } = CommonReducer.routerComponents;

	const { id: formId } = useParams();

	const { SingleFormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getSingleFormState();
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
		updateFormFields( updatedFields, formId );
	}

	//Shift field to down index
	function handleShiftDown() {
		const updatedFields = arrayMove( fields, index, index + 1 );
		updateFormFields( updatedFields, formId );
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

	function handleAlertCancel() {
		setIsAlertActive( false );
	}

	function handleActivatePopoverField() {
		setActivePopupFieldId( field.id );
	}

	function handleAddNewFieldInititalAfter( field ) {
		const { fields } = SingleFormReducer.singleForm.content;
		const newField = {
			...field,
			id: nanoid( 10 ),
			name: `${ field.type }${ fields.length }`,
		};
		addFieldAfter( newField, index );
	}

	const fieldListPopoverContent = (
		<div className="formgent-popover-content-wrap" ref={ contentRef }>
			<AntInput
				prefix={ <ReactSVG src={ search } /> }
				// onChange={ handleUpdateSearchQuery }
			/>
			<Row gutter={ 15 }>
				{ rootFields.map( ( field, index ) => {
					if ( field.group === 'submit' ) {
						return;
					}
					return (
						<Col span={ 8 } key={ index }>
							<div
								className="formgent-editor-inserter__field"
								onClick={ () =>
									handleAddNewFieldInititalAfter(
										field?.fieldObj
									)
								}
							>
								<span className="formgent-editor-inserter__field--icon">
									<ReactSVG src={ field.icon } />
								</span>
								<span className="formgent-editor-inserter__field--title">
									{ field.title }
								</span>
							</div>
						</Col>
					);
				} ) }
			</Row>
		</div>
	);

	/* Hide plus button on outside click */
	useEffect( () => {
		checkClickedOutside( domStatus, setDomStatus, contentRef );
	}, [ domStatus ] );

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
				SingleFormReducer?.activeField?.id === id
					? 'formgent-active'
					: ''
			}` }
			ref={ setNodeRef }
			style={ style }
			{ ...attributes }
			onClick={ () => updateActiveField( field ) }
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
			<FieldListPopoverStyle
				className={ `formgent-fieldlist-popover-trigger ${
					domStatus ? 'formgent-active' : ''
				}` }
				onClick={ () => setDomStatus( ! domStatus ) }
			>
				<AntPopover content={ fieldListPopoverContent } trigger="click">
					<ReactSVG src={ plus } />
				</AntPopover>
			</FieldListPopoverStyle>

			<AntModal
				open={ isAlertActive }
				title={ __( 'Delete field', 'formgent' ) }
				onOk={ handleDeleteField }
				onCancel={ handleAlertCancel }
			>
				<AlertContent />
			</AntModal>

			<ActiveDroppedField field={ field } />
		</div>
	);
};

export default memo( DroppedField );
