import { lazy } from '@wordpress/element';
import { registerModule } from '@formgent/modules/helpers';
const EditorModule = lazy( () => import( './Editor' ) );
const FormTableModule = lazy( () => import( './FormTable' ) );

registerModule( 'modules', {
	EditorModule,
	FormTableModule,
} );

/**
 * Exporting for code editor intellisense support.
 */
export { EditorModule, FormTableModule };
