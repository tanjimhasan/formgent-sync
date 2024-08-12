import { registerModule } from '@formgent/modules/helpers';
import { lazy } from '@wordpress/element';
import { registerBlock } from './../../blocks/utils';

const SettingsModule = lazy( () => import( './Settings' ) );
const ResultsModule = lazy( () => import( './Results' ) );
const FormTableModule = lazy( () => import( './FormTable' ) );
const ResponseTableModule = lazy( () => import( './ResponseTable' ) );

registerModule( 'modules', {
	SettingsModule,
	ResultsModule,
	FormTableModule,
	ResponseTableModule,
	registerBlock,
} );

/**
 * Exporting for code editor intellisense support.
 */
export {
	FormTableModule,
	ResponseTableModule,
	ResultsModule,
	SettingsModule,
	registerBlock,
};
