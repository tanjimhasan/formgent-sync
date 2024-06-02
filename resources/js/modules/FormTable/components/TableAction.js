import { applyFilters } from '@wordpress/hooks';
import AntDropdown from '@formgent/components/Dropdown';
import { __ } from '@wordpress/i18n';
export default function TableAction() {
	const items = applyFilters( 'formgent_form_table_action', [
		{
			key: '1',
			label: __( 'Rename', 'formgent' ),
		},
		{
			key: '2',
			label: __( 'Duplicate', 'formgent' ),
		},
		{
			type: 'divider',
		},
		{
			key: '3',
			label: __( 'Delete', 'formgent' ),
		},
	] );
	return (
		<div className="formgent-table-action">
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
