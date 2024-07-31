import { useDispatch } from '@wordpress/data';
import { addQueryArgs } from '@wordpress/url';
import { AntCheckbox, AntButton } from '@formgent/components';
import { useState, useEffect, useRef } from '@wordpress/element';
import { TablkSelectionStyle } from './style';
import ReactSVG from 'react-inlinesvg';
import trashIcon from '@icon/trash.svg';
import toggleIcon from '@icon/toggle.svg';
import deleteData from '@formgent/helper/deleteData';
import checkClickedOutside from '@formgent/helper/checkClickedOutside';
import { __ } from '@wordpress/i18n';

export default function TableBulkSelection( props ) {
	const { data, selectedRowKeys, setSelectedRowKeys } = props;
	const [ isMoreBulkActionOpen, setMoreBulkActionOpen ] = useState( false );
	const moreBulkActionRef = useRef( null );

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

	// handle bulk action more button
	function handleMoreBulkAction() {
		setMoreBulkActionOpen( ! isMoreBulkActionOpen );
	}
	// Close Dropdown click on outside
	useEffect( () => {
		checkClickedOutside(
			isMoreBulkActionOpen,
			setMoreBulkActionOpen,
			moreBulkActionRef
		);
	}, [ isMoreBulkActionOpen ] );

	return (
		<TablkSelectionStyle className="formgent-bulk-selection">
			<div className="formgent-bulk-selection__checkbox">
				<AntCheckbox
					onChange={ handleBulkSelection }
					checked={ selectedRowKeys.length === data.length }
				></AntCheckbox>
			</div>
			<div className="formgent-form-bulk-action__more">
				<AntButton
					size="small"
					className="formgent-btn-bulk-status"
					onClick={ handleMoreBulkAction }
				>
					<ReactSVG src={ toggleIcon } /> Status
				</AntButton>
				{ isMoreBulkActionOpen && (
					<ul
						className="formgent-form-bulk-action__dropdown"
						ref={ moreBulkActionRef }
					>
						<li>
							<a
								href=""
								onClick={ ( e ) => {
									e.preventDefault();
									//handleUpdateStatus( 'draft' );
								} }
							>
								{ __( 'Activate', 'formgent' ) }
							</a>
						</li>
						<li>
							<a
								href=""
								onClick={ ( e ) => {
									e.preventDefault();
									//handleUpdateStatus( 'publish' );
								} }
							>
								{ __( 'Deactivate', 'formgent' ) }
							</a>
						</li>
					</ul>
				) }
			</div>
			<AntButton
				size="small"
				className="formgent-btn-bulk-delete"
				onClick={ handleBulkDelete }
			>
				<ReactSVG src={ trashIcon } />
				Delete
			</AntButton>
			<span className="formgent-bulk-selection__text">
				<strong>{ selectedRowKeys.length }</strong> Forms Selected
			</span>
			<a className="formgent-clear-bulk" onClick={ handleClearSelection }>
				Clear Selection
			</a>
		</TablkSelectionStyle>
	);
}
