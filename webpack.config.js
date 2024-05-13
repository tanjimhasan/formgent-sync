const path = require( 'path' );
const defaultConfig = require( '@wordpress/scripts/config/webpack.config' );
const DependencyExtractionWebpackPlugin = require( '@wordpress/dependency-extraction-webpack-plugin' );

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
		'js/admin': './resources/js/admin/index.js',
		'js/modules': './resources/js/modules/index.js',
		'js/components': './resources/js/components/index.js'
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
					'@newform/modules' === request ||
					'@newform/components' === request ||
					'@newform/hooks' === request ||
					'newform/i18n' === request
				) {
					return [
						'newform',
						camelCaseDash( request.split( '/' )[ 1 ] ),
					];
				}
			},
			requestToHandle( request ) {
				if (
					'@newform/modules' === request ||
					'@newform/components' === request ||
					'@newform/hooks' === request ||
					'newform/i18n' === request
				) {
					return `newform/${ camelCaseDash(
						request.split( '/' )[ 1 ]
					) }`;
				}
			},
		} ),
	],
	resolve: {
		alias: {
			'@newform': path.resolve( __dirname, 'resources/js' ),
			'@icon': path.resolve( __dirname, 'resources/svg/icon' ),
			'@assets': path.resolve( __dirname, 'assets' ),
		},
	},
};
