import { registerModule } from '@formgent/modules/helpers';
import { lazy } from '@wordpress/element';
import { registerBlock } from './../../blocks/utils';
import AnalyticsChart from '@formgent/admin/Slots/AnalyticsChart';

const SettingsModule = lazy( () => import( './Settings' ) );
const FormTableModule = lazy( () => import( './FormTable' ) );
const ResponseTableModule = lazy( () => import( './ResponseTable' ) );
const AnalyticsModule = lazy( () => import( './Analytics' ) );

registerModule( 'modules', {
	SettingsModule,
	FormTableModule,
	ResponseTableModule,
	AnalyticsModule,
	registerBlock,
	AnalyticsChart,
} );

/**
 * Exporting for code editor intellisense support.
 */
export {
	FormTableModule,
	registerBlock,
	ResponseTableModule,
	AnalyticsModule,
	SettingsModule,
	AnalyticsChart,
};
