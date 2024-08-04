import { registerModule } from '@formgent/modules/helpers';
import { lazy } from '@wordpress/element';
import { registerBlock } from './../../blocks/utils';

const EditorModule = lazy( () => import( './Editor' ) );
const SettingsModule = lazy( () => import( './Settings' ) );
const ResultsModule = lazy( () => import( './Results' ) );
const FormTableModule = lazy( () => import( './FormTable' ) );
const ResponseTableModule = lazy( () => import( './ResponseTable' ) );
const FormSubmissionModule = lazy( () => import( './FormSubmission' ) );

registerModule( 'modules', {
	EditorModule,
	SettingsModule,
	ResultsModule,
	FormTableModule,
	ResponseTableModule,
	FormSubmissionModule,
	registerBlock,
} );

/**
 * Exporting for code editor intellisense support.
 */
export {
	EditorModule,
	FormTableModule,
	ResponseTableModule,
	ResultsModule,
	SettingsModule,
	FormSubmissionModule,
	registerBlock,
};
