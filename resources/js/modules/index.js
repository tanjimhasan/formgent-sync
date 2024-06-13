import { registerModule } from '@formgent/modules/helpers';
import { lazy } from '@wordpress/element';
const EditorModule = lazy( () => import( './Editor' ) );
const SettingsModule = lazy( () => import( './Settings' ) );
const FormTableModule = lazy( () => import( './FormTable' ) );
const FormSubmissionModule = lazy( () => import( './FormSubmission' ) );

registerModule( 'modules', {
	EditorModule,
	SettingsModule,
	FormTableModule,
	FormSubmissionModule,
} );

/**
 * Exporting for code editor intellisense support.
 */
export { EditorModule, FormTableModule, SettingsModule, FormSubmissionModule };
