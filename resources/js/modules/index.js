import { lazy } from '@wordpress/element';
import { registerModule } from '@newform/modules/helpers';
const EditorModule = lazy( () => import( './Editor' ) );

registerModule( 'modules', {
	EditorModule,
} );

export { EditorModule };
