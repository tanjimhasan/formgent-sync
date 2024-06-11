import { registerModule } from '@formgent/modules/helpers';
import { lazy } from '@wordpress/element';
const EditorModule = lazy( () => import( './Editor' ) );
const SettingsModule = lazy( () => import( './Settings' ) );
const FormTableModule = lazy( () => import( './FormTable' ) );
const EntriesTableModule = lazy( () => import( './EntriesTable' ) );

registerModule( 'modules', {
	EditorModule,
	SettingsModule,
	FormTableModule,
	EntriesTableModule,
} );

/**
 * Exporting for code editor intellisense support.
 */
export { EditorModule, EntriesTableModule, FormTableModule, SettingsModule };
