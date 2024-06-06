import { registerModule } from '@formgent/modules/helpers';
import { lazy } from '@wordpress/element';
const EditorModule = lazy( () => import( './Editor' ) );
const SettingsModule = lazy( () => import( './Settings' ) );
const FormTableModule = lazy( () => import( './FormTable' ) );

registerModule( 'modules', {
	EditorModule,
	SettingsModule,
	FormTableModule,
} );

/**
 * Exporting for code editor intellisense support.
 */
export { EditorModule, FormTableModule, SettingsModule };
