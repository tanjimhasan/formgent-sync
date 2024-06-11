import { useRef, useState, useEffect, useCallback } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { useDroppable } from '@dnd-kit/core';
import picture from '@icon/picture.svg';
import { Form } from 'antd';
import DroppedField from './DroppedField';
import { DropableBoxStyle } from './style';
import Empty from '@formgent/components/Empty';
import SubmitButton from '@formgent/components/fieldList/SubmitButton';
import { __ } from '@wordpress/i18n';
import { AntButton } from '@formgent/components';
export default function DropableBox( props ) {
	const { fields } = props;
	const { updateActiveField } = useDispatch( 'formgent' );
	const { SingleFormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getSingleForm();
	}, [] );

	const { singleForm, activeField } = SingleFormReducer;

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

	return (
		<DropableBoxStyle ref={ setNodeRef } style={ style } { ...listeners }>
			<div className="formgent-dropable-field-list">
				{ fields.length === 0 && (
					<div className="formgent-dropable-field-empty-placeholder">
						<Empty
							label={ __( 'Add Fields Here', 'formgent' ) }
							text={ __(
								'Drag and drop fields here from the left panel to build your form.',
								'formgent'
							) }
							icon={ picture }
						/>
						<span className="formgent-dropable-field-add">+</span>
					</div>
				) }
				<Form>
					{ fields.map( ( field, index ) => (
						<DroppedField
							key={ field.id }
							id={ field.id }
							field={ field }
							fields={ singleForm?.content?.fields }
							index={ index }
						/>
					) ) }
				</Form>

				{ fields.length > 0 && (
					<div
						className={ `formgent-submit-button ${
							activeField?.type ===
							singleForm?.submit_button?.type
								? 'formgent-active'
								: ''
						}` }
						onClick={ () =>
							updateActiveField( singleForm?.submit_button )
						}
					>
						<SubmitButton field={ singleForm?.submit_button } />
					</div>
				) }
			</div>
		</DropableBoxStyle>
	);
}
