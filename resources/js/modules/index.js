import { lazy } from '@wordpress/element';
import { registerModule } from '@formgent/modules/helpers';
const EditorModule = lazy( () => import( './Editor' ) );
const FormTableModule = lazy( () => import( './FormTable' ) );

registerModule( 'modules', {
	EditorModule,
	FormTableModule,
} );

export { EditorModule };
