import { lazy } from '@wordpress/element';
import { registerModule } from '@newform/modules/helpers';
const EditorModule = lazy( () => import( './Editor' ) );
const FormTableModule = lazy( () => import( './FormTable' ) );

registerModule( 'modules', {
	EditorModule,
	FormTableModule,
} );

export { EditorModule };
