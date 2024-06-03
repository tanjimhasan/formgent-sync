import { useState } from '@wordpress/element';
import { useSelect, useDispatch, resolveSelect } from '@wordpress/data';
import { applyFilters } from '@wordpress/hooks';
import ReactSVG from 'react-inlinesvg';
import AntDropdown from '@formgent/components/Dropdown';
import { __ } from '@wordpress/i18n';
import ellipsisV from '@icon/ellipsis-v.svg';
import penNib from '@icon/pen-nib.svg';
import trash from '@icon/trash.svg';
import FormDeleteAlert from './FormDeleteAlert';
import PopUp from '@formgent/components/PopUp';
import patchData from '@formgent/helper/patchData';
import deleteData from '@formgent/helper/deleteData';
export default function TableAction( props ) {
	const [ isActivateFormDeleteModal, setIsActivateFormDeleteModal ] =
		useState( false );
	const { form, editableForm, setEditableForm } = props;

	const { FormReducer } = useSelect( ( select ) => {
		return select( 'formgent' ).getForms();
	}, [] );

	const { forms, isFormDeleting } = FormReducer;

	const { deleteFormRequest, deleteFormSuccess, deleteFormError } =
		useDispatch( 'formgent' );

	function handleActivateEditor( e ) {
		e.preventDefault();
		const editableForm = {
			id: form.id,
			title: form.title,
		};
		setEditableForm( editableForm );
	}

	function handleActivateDeleteFormModal() {
		setIsActivateFormDeleteModal( true );
	}

	const items = applyFilters( 'formgent_form_table_action', [
		{
			key: '1',
			label: (
				<a onClick={ handleActivateEditor }>
					<ReactSVG src={ penNib } /> { __( 'Rename', 'formgent' ) }
				</a>
			),
		},
		// {
		// 	key: '2',
		// 	label: __( 'Duplicate', 'formgent' ),
		// },
		{
			type: 'divider',
		},
		{
			key: '3',
			label: (
				<a onClick={ handleActivateDeleteFormModal }>
					<ReactSVG src={ trash } /> { __( 'Delete', 'formgent' ) }
				</a>
			),
		},
	] );

	function handleCancelDeleteAlert() {
		setIsActivateFormDeleteModal( false );
	}

	async function handleDeleteForm() {
		if ( isFormDeleting ) return;
		try {
			deleteFormRequest();
			const formDeleteResponse = await deleteData(
				`admin/forms/${ form.id }`
			);
			deleteFormSuccess( form.id );
			setIsActivateFormDeleteModal( false );
		} catch ( error ) {
			deleteFormError( error );
		}
	}

	return (
		<div className="formgent-table-action">
			<AntDropdown
				menu={ { items } }
				trigger={ [ 'click' ] }
				placement="bottomRight"
				overlayStyle={ { minWidth: '240px' } }
			>
				<a onClick={ ( e ) => e.preventDefault() }>
					<ReactSVG src={ ellipsisV } />
				</a>
			</AntDropdown>
			{ isActivateFormDeleteModal && (
				<PopUp
					title={ __( 'Delete Form', 'formgent' ) }
					onCancel={ handleCancelDeleteAlert }
					onSubmit={ handleDeleteForm }
					hasCancelButton
					hasSubmitButton
					isActiveSubmit
					submitText={
						isFormDeleting
							? __( 'Deleting', 'formgent' )
							: __( 'Delete', 'formgent' )
					}
					className="formgent-form-delete-alert"
				>
					<FormDeleteAlert
						// error={ formDeletionError }
						formTitle={ form.title }
					/>
				</PopUp>
			) }
		</div>
	);
}
