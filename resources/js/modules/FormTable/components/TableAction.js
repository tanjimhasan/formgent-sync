import { applyFilters } from '@wordpress/hooks';
import AntDropdown from '@newform/components/Dropdown';
import { __ } from '@wordpress/i18n';
export default function TableAction() {
	const items = applyFilters( 'newform_form_table_action', [
		{
			key: '1',
			label: __( 'Rename', 'newform' ),
		},
		{
			key: '2',
			label: __( 'Duplicate', 'newform' ),
		},
		{
			type: 'divider',
		},
		{
			key: '3',
			label: __( 'Delete', 'newform' ),
		},
	] );
	return (
		<div className="newform-table-action">
			<AntDropdown
				menu={ { items } }
				trigger={ [ 'click' ] }
				placement="bottomRight"
				overlayStyle={ { minWidth: '240px' } }
			>
				<a onClick={ ( e ) => e.preventDefault() }>
					<span>more</span>
				</a>
			</AntDropdown>
		</div>
	);
}
