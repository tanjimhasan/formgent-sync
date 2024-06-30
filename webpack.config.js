const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );
const { BuildOutputPlugin } = require( '@laravel-mix/webpack-build-output' );

/**
 * Given a string, returns a new string with dash separators converted to
 * camelCase equivalent. This is not as aggressive as `_.camelCase` in
 * converting to uppercase, where Lodash will also capitalize letters
 * following numbers.
 *
 * @param {string} string Input dash-delimited string.
 * @return {string} Camel-cased string.
 */
function camelCaseDash( string ) {
	return string.replace( /-([a-z])/g, ( _, letter ) => letter.toUpperCase() );
}

const chunkUniqueKey = Date.now().toString();

module.exports = {
	...defaultConfig,
	entry: {
		'js/frontend/FormSubmission/index':
			'./resources/js/frontend/pages/FormSubmission/index.js',
		'js/notification': './resources/js/components/Notification.js',
		'css/notification': './resources/js/components/notification.scss',
		'js/block/editor': './resources/js/block/editor.js',
		'js/elementor': './resources/js/elementor.js',
		'js/admin': './resources/js/admin/index.js',
		'js/modules': './resources/js/modules/index.js',
		'js/components': './resources/js/components/index.js',
		'css/app': './resources/sass/app.scss',

		/**
		 * Block scripts
		 */
		'js/block/editor': './resources/blocks/editor.js',
		'js/block/frontend': './resources/blocks/frontend.js',
		'css/block/frontend': './resources/blocks/frontend.scss',
		'css/block/editor': './resources/blocks/editor.scss',
	},
	output: {
		path: path.resolve( __dirname, './assets/build/' ),
		filename: '[name].js',
		chunkFilename: '[name].js?ver=' + chunkUniqueKey,
		clean: false,
	},
	plugins: [
		...defaultConfig.plugins.filter(
			( plugin ) =>
				plugin.constructor.name !== 'DependencyExtractionWebpackPlugin'
		),
		new DependencyExtractionWebpackPlugin( {
			requestToExternal( request ) {
				if (
					'@formgent/modules' === request ||
					'@formgent/components' === request ||
					'@formgent/hooks' === request ||
					'formgent/i18n' === request
				) {
					return [
						'formgent',
						camelCaseDash( request.split( '/' )[ 1 ] ),
					];
				}
			},
			requestToHandle( request ) {
				if (
					'@formgent/modules' === request ||
					'@formgent/components' === request ||
					'@formgent/hooks' === request ||
					'formgent/i18n' === request
				) {
					return `formgent/${ camelCaseDash(
						request.split( '/' )[ 1 ]
					) }`;
				}
			},
		} ),
		new BuildOutputPlugin( {
			clearConsole: true,
		} ),
	],
	resolve: {
		alias: {
			'@formgent': path.resolve( __dirname, 'resources/js' ),
			'@icon': path.resolve( __dirname, 'resources/svg/icons' ),
			'@assets': path.resolve( __dirname, 'assets' ),
		},
	},
};
