import { SettingsModule } from '@formgent/modules';
import { addFilter } from '@wordpress/hooks';

// Import Settings Pages
import Integrations from './Integrations.js';
import IntegrationsTest from './IntegrationsTest.js';

// Add filter to extend settings routes
addFilter(
	'formgent_settings_routes',
	'formgent/settings/routes',
	( routes ) => {
		return [
			...routes,
			{
				path: 'integrations',
				element: <Integrations />,
			},
			{
				path: 'integrations/test',
				element: <IntegrationsTest />,
			},
		];
	}
);

export default function Settings() {
	return <SettingsModule />;
}
