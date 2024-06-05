import { registerModule } from '@formgent/modules/helpers';
import { lazy } from '@wordpress/element';
const EditorModule = lazy( () => import( './Editor' ) );
const SettingsModule = lazy( () => import( './Settings' ) );
const ResultsModule = lazy( () => import( './Results' ) );
const ShareModule = lazy( () => import( './Share' ) );
const FormTableModule = lazy( () => import( './FormTable' ) );

registerModule( 'modules', {
	EditorModule,
	SettingsModule,
	ShareModule,
	ResultsModule,
	FormTableModule,
} );

/**
 * Exporting for code editor intellisense support.
 */
export { EditorModule, FormTableModule, SettingsModule };
