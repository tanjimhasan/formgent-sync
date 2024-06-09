import { SettingsModule } from '@formgent/modules';
import { addFilter } from '@wordpress/hooks';

// Import Settings Pages
import General from '@formgent/modules/Settings/components/General.js';
import Integrations from '@formgent/modules/Settings/components/Integrations.js';
import Notifications from '@formgent/modules/Settings/components/Notifications.js';

// Add filter to extend settings routes
addFilter(
	'formgent_settings_routes',
	'formgent/settings/routes',
	( routes ) => {
		return [
			...routes,
			{
				path: '*',
				element: <General />,
			},
			{
				path: 'integrations',
				element: <Integrations />,
			},
			{
				path: 'notifications',
				element: <Notifications />,
			},
		];
	}
);

export default function Settings() {
	return <SettingsModule />;
}
