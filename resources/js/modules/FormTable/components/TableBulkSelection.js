import { AntCheckbox, AntButton } from '@formgent/components';
import { TablkSelectionStyle } from './style';
import ReactSVG from 'react-inlinesvg';
import trashIcon from '@icon/trash.svg';
export default function TableBulkSelection( props ) {
	const { data, selectedRowKeys, setSelectedRowKeys } = props;

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

	return (
		<TablkSelectionStyle className="formgent-bulk-selection">
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
			>
				<ReactSVG src={ trashIcon } />
				Delete
			</AntButton>
			<span className="ormgent-bulk-selection__text">
				<strong>{ selectedRowKeys.length }</strong> Forms Selected
			</span>
			<a className="formgent-clear-bulk" onClick={ handleClearSelection }>
				{ ' ' }
				Clear Selection
			</a>
		</TablkSelectionStyle>
	);
}
