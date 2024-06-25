import { registerPlugin } from '@wordpress/plugins';
import { Notice } from '@wordpress/components';

import FormTableHead from '@formgent/admin/Slots/FormTableHead';
import { FormTableModule } from '@formgent/modules';
import {
	PrepareExportData,
	exportToPDF,
} from '@formgent/admin/export/response';
import { CSVLink } from 'react-csv';

const apiResponse = {
	form: {
		content:
			'{"fields":[{"id":"hxtTKxpkE7","type":"long_text","name":"long_text1","fields":[{"id":"I3VvinDPZcjs","type":"long_text","label":"Long Text","placeholder":"Short text"}],"general_option":{"label":"Long text","label_alignment":"left","format":"full","validations":{"required":{"value":"0","message":"This field is required","global_message":"This field is required"}}},"advance_option":{"default_value":"","css_class":"","logics":{"is_advance_logic_active":"0"}}},{"id":"PX0C1cmMmn","type":"names","name":"names3","fields":[{"id":"AWxmV-VH7GAq","type":"first_name","label":"First Name","placeholder":"First Name"},{"id":"jPdT8rXRTUhU","label":"Middle Name","type":"middle_name","placeholder":"Middle Name"},{"id":"PtCJq9pPOP94","type":"last_name","label":"Last Name","placeholder":"Last Name"}],"general_option":{"label":"","label_alignment":"left","format":"full","validations":{"required":{"value":"0","message":"This field is required","global_message":"This field is required"}}},"advance_option":{"default_value":"","css_class":"","logics":{"is_advance_logic_active":"0"}}},{"id":"nnlUiJGJ3U","type":"short_text","name":"short_text2","fields":[{"id":"5AqA7B52ZbrK","type":"short_text","label":"Short Text","placeholder":"Short text"}],"general_option":{"label":"Short text","label_alignment":"left","format":"full","validations":{"required":{"value":"0","message":"This field is required","global_message":"This field is required"}}},"advance_option":{"default_value":"","css_class":"","logics":{"is_advance_logic_active":"0"}}}]}',
	},
	responses: [
		{
			id: '1',
			form_id: '3',
			is_read: '0',
			is_completed: '0',
			is_starred: '1',
			ip: null,
			device: null,
			browser: null,
			browser_version: null,
			created_by: null,
			created_at: '2024-06-20 19:22:27',
			updated_at: '2024-06-20 19:25:08',
			answers: [],
		},
		{
			id: '2',
			form_id: '3',
			is_read: '0',
			is_completed: '1',
			is_starred: '0',
			ip: '127.0.0.1',
			device: null,
			browser: null,
			browser_version: null,
			created_by: '1',
			created_at: '2024-06-20 20:18:37',
			updated_at: null,
			answers: [
				{
					id: '1',
					response_id: '2',
					field_id: 'hxtTKxpkE7',
					value: 'Bfficia culpa nisi u',
					children: [],
				},
				{
					id: '2',
					response_id: '2',
					field_id: 'nnlUiJGJ3U',
					value: 'asdfkasd;fas',
					children: [],
				},
			],
		},
		{
			id: '3',
			form_id: '3',
			is_read: '0',
			is_completed: '1',
			is_starred: '0',
			ip: '127.0.0.1',
			device: null,
			browser: null,
			browser_version: null,
			created_by: '1',
			created_at: '2024-06-20 20:19:45',
			updated_at: null,
			answers: [
				{
					id: '3',
					response_id: '3',
					field_id: 'hxtTKxpkE7',
					value: 'Officia culpa nisi u',
					children: [],
				},
				{
					id: '4',
					response_id: '3',
					field_id: 'nnlUiJGJ3U',
					value: 'asdfkasd;fas',
					children: [],
				},
			],
		},
	],
};

const Test = ( { testProps } ) => {
	return (
		<Notice status="warning">
			This notice is rendered by gutenberg slot - Test Props:{ ' ' }
			{ testProps }
			<CSVLink
				data={ PrepareExportData( apiResponse ) }
				filename={ 'formgent-responses.csv' }
				target="_blank"
			>
				Download
			</CSVLink>
			<button
				onClick={ () => {
					exportToPDF( apiResponse, 'formgent-response' );
				} }
			>
				Export PDF
			</button>
		</Notice>
	);
};

/**
 * TODO: Only for testing
 * TODO: plugin name is must be unique.
 */
registerPlugin( 'form-table-head-test', {
	render: () => <FormTableHead render={ Test } />,
} );

export default function FormTable() {
	return <FormTableModule />;
}
