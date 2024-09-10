import { registerModule } from '@formgent/modules/helpers';
import { lazy } from '@wordpress/element';
import { registerBlock } from './../../blocks/utils';
import AnalyticsChart from '@formgent/admin/Slots/AnalyticsChart';
import QuestionsDropOff from '@formgent/admin/Slots/QuestionsDropOff';

const SettingsModule = lazy( () => import( './Settings' ) );
const FormTableModule = lazy( () => import( './FormTable' ) );
const ResponseTableModule = lazy( () => import( './ResponseTable' ) );
const SummaryModule = lazy( () => import( './Summary' ) );
const AnalyticsModule = lazy( () => import( './Analytics' ) );

registerModule( 'modules', {
	SettingsModule,
	FormTableModule,
	ResponseTableModule,
	AnalyticsModule,
	registerBlock,
	SummaryModule,
	AnalyticsChart,
	QuestionsDropOff,
} );

/**
 * Exporting for code editor intellisense support.
 */
export {
	FormTableModule,
	registerBlock,
	ResponseTableModule,
	SettingsModule,
	SummaryModule,
	AnalyticsModule,
	AnalyticsChart,
	QuestionsDropOff,
};
