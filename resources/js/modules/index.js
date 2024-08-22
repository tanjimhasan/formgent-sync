import { registerModule } from '@formgent/modules/helpers';
import { lazy } from '@wordpress/element';
import { registerBlock } from './../../blocks/utils';

const SettingsModule = lazy( () => import( './Settings' ) );
const FormTableModule = lazy( () => import( './FormTable' ) );
const ResponseTableModule = lazy( () => import( './ResponseTable' ) );
const SummaryModule = lazy( () => import( './Summary' ) );

registerModule( 'modules', {
	SettingsModule,
	FormTableModule,
	ResponseTableModule,
	registerBlock,
	SummaryModule,
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
};
