import { AntButton, AntCheckbox } from '@formgent/components';
import deleteData from '@formgent/helper/deleteData';
import trashIcon from '@icon/trash.svg';
import { useDispatch } from '@wordpress/data';
import { addQueryArgs } from '@wordpress/url';
import ReactSVG from 'react-inlinesvg';
import { TableSelectionStyle } from './style';
export default function TableBulkSelection( props ) {
	const { data, selectedRowKeys, setSelectedRowKeys } = props;

	const {
		bulkDeleteFormRequest,
		bulkDeleteFormSuccess,
		bulkDeleteFormError,
	} = useDispatch( 'formgent' );

	function handleBulkSelection( event ) {
		if ( event.target.checked ) {
			setSelectedRowKeys( data.map( ( item ) => item.id ) );
		} else {
			setSelectedRowKeys( [] );
		}
	}

	function handleClearSelection() {
		setSelectedRowKeys( [] );
	}

	async function handleBulkDelete() {
		bulkDeleteFormRequest();
		try {
			// Bulk Delete Forms (Need to delete responseTable data)
			const bulkDeleteResponse = await deleteData(
				addQueryArgs( `admin/forms`, {
					ids: selectedRowKeys,
				} )
			);
			bulkDeleteFormSuccess( selectedRowKeys );
			setSelectedRowKeys( [] );
		} catch ( error ) {
			bulkDeleteFormError( error );
		}
	}

	return (
		<TableSelectionStyle className="formgent-bulk-selection">
			<div className="formgent-bulk-selection__checkbox">
				<AntCheckbox
					onChange={ handleBulkSelection }
					checked={ selectedRowKeys.length === data.length }
				></AntCheckbox>
			</div>
			<AntButton
				type="white"
				size="small"
				className="formgent-btn-bulk-delete"
				onClick={ handleBulkDelete }
			>
				<ReactSVG src={ trashIcon } />
				Delete
			</AntButton>
			<span className="ormgent-bulk-selection__text">
				<strong>{ selectedRowKeys.length }</strong> Forms Selected
			</span>
			<a className="formgent-clear-bulk" onClick={ handleClearSelection }>
				Clear Selection
			</a>
		</TableSelectionStyle>
	);
}
