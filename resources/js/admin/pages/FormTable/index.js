import { registerPlugin } from '@wordpress/plugins';
import { Notice } from '@wordpress/components';

import FormTableHead from '@formgent/admin/Slots/FormTableHead';
import { FormTableModule } from '@formgent/modules';

const Test = ( { testProps } ) => {
	return (
		<Notice status="warning">
			This notice is rendered by gutenberg slot - Test Props:{ ' ' }
			{ testProps }
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
