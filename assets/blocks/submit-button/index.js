/******/ ( () => {
	// webpackBootstrap
	/******/ 'use strict';
	/******/ var __webpack_modules__ = {
		/***/ './resources/blocks/submit-button/Edit.js':
			/*!************************************************!*\
  !*** ./resources/blocks/submit-button/Edit.js ***!
  \************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () => /* binding */ Edit,
						/* harmony export */
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__( /*! react */ 'react' );
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(
						react__WEBPACK_IMPORTED_MODULE_0__
					);
				/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! @wordpress/block-editor */ '@wordpress/block-editor'
					);
				/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__
					);
				/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! @wordpress/i18n */ '@wordpress/i18n'
					);
				/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__
					);
				/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						/*! ./editor.scss */ './resources/blocks/submit-button/editor.scss'
					);

				/**
				 * wordpress dependencies
				 */

				function Edit( { attributes, setAttributes } ) {
					return ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
						'div',
						{
							className: `formgent-editor-block-list__single formgent-editor-block-list__single--button formgent-editor-block-align-${ attributes.button_alignment }`,
							style: {
								'--formgent-btn-bg-color':
									attributes.background_color,
								'--formgent-btn-text-color':
									attributes.text_color,
								'--formgent-btn-border-color':
									attributes.border_color,
							},
						},
						( 0, react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
							_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText,
							{
								className: `formgent-editor-block-list__button-text formgent-btn formgent-btn-md formgent-btn-${ attributes.button_style }`,
								'aria-label': ( 0,
								_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__ )(
									'Button text',
									'formgent'
								),
								value: attributes.button_text,
								onChange: ( content ) =>
									setAttributes( {
										button_text: content,
									} ),
								placeholder: ( 0,
								_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__ )(
									'Add text...',
									'formgent'
								),
								identifier: 'text',
								allowedFormats: [
									'core/bold',
									'core/italic',
									'core/strikethrough',
									'core/code',
									'core/subscript',
									'core/superscript',
									'core/text-color',
									'core/image',
									'core/underline',
								],
							}
						)
					);
				}

				/***/
			},

		/***/ './resources/blocks/submit-button/index.js':
			/*!*************************************************!*\
  !*** ./resources/blocks/submit-button/index.js ***!
  \*************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				__webpack_require__.r( __webpack_exports__ );
				/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! @wordpress/i18n */ '@wordpress/i18n'
					);
				/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__
					);
				/* harmony import */ var _formgent_modules__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! @formgent/modules */ '@formgent/modules'
					);
				/* harmony import */ var _formgent_modules__WEBPACK_IMPORTED_MODULE_1___default =
					/*#__PURE__*/ __webpack_require__.n(
						_formgent_modules__WEBPACK_IMPORTED_MODULE_1__
					);
				/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! ./Edit */ './resources/blocks/submit-button/Edit.js'
					);
				/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						/*! ./block.json */ './resources/blocks/submit-button/block.json'
					);
				/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						/*! ./style.scss */ './resources/blocks/submit-button/style.scss'
					);
				/**
				 * wordpress dependencies
				 */

				/**
				 * Internal dependencies
				 */

				const exampleAttributes = {};
				const generalControls = {
					basic_info: {
						type: 'panel',
						children: {
							button_alignment: {
								type: 'toggle_group',
								label: ( 0,
								_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
									'Button Alignment',
									'formgent'
								),
								options: [
									{
										label: ( 0,
										_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
											'Left',
											'formgent'
										),
										value: 'left',
									},
									{
										label: ( 0,
										_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
											'Middle',
											'formgent'
										),
										value: 'middle',
									},
									{
										label: ( 0,
										_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
											'Right',
											'formgent'
										),
										value: 'right',
									},
									{
										label: ( 0,
										_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
											'Block',
											'formgent'
										),
										value: 'block',
									},
								],
							},
							button_style: {
								type: 'select',
								label: ( 0,
								_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
									'Button Style',
									'formgent'
								),
								options: [
									{
										label: ( 0,
										_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
											'Default Style',
											'formgent'
										),
										value: 'default',
									},
									{
										label: ( 0,
										_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
											'Solid',
											'formgent'
										),
										value: 'solid',
									},
									{
										label: ( 0,
										_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
											'Bordered',
											'formgent'
										),
										value: 'bordered',
									},
								],
							},
							background_color: {
								type: 'color',
								label: ( 0,
								_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
									'Background Color',
									'formgent'
								),
								condition: ( attributes ) => {
									return attributes.button_style === 'solid';
								},
							},
							border_color: {
								type: 'color',
								label: ( 0,
								_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
									'Border Color',
									'formgent'
								),
								condition: ( attributes ) => {
									return (
										attributes.button_style === 'bordered'
									);
								},
							},
							text_color: {
								type: 'color',
								label: ( 0,
								_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
									'Text Color',
									'formgent'
								),
								condition: ( attributes ) => {
									return (
										attributes.button_style !== 'default'
									);
								},
							},
						},
					},
				};
				const advancedControls = {};
				const controls = {
					generalControls,
					advancedControls,
				};
				( 0,
				_formgent_modules__WEBPACK_IMPORTED_MODULE_1__.registerBlock )(
					_block_json__WEBPACK_IMPORTED_MODULE_3__,
					controls,
					_Edit__WEBPACK_IMPORTED_MODULE_2__[ 'default' ],
					'smiley',
					exampleAttributes
				);

				/***/
			},

		/***/ './resources/blocks/submit-button/editor.scss':
			/*!****************************************************!*\
  !*** ./resources/blocks/submit-button/editor.scss ***!
  \****************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				__webpack_require__.r( __webpack_exports__ );
				// extracted by mini-css-extract-plugin

				/***/
			},

		/***/ './resources/blocks/submit-button/style.scss':
			/*!***************************************************!*\
  !*** ./resources/blocks/submit-button/style.scss ***!
  \***************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				__webpack_require__.r( __webpack_exports__ );
				// extracted by mini-css-extract-plugin

				/***/
			},

		/***/ react:
			/*!************************!*\
  !*** external "React" ***!
  \************************/
			/***/ ( module ) => {
				module.exports = window[ 'React' ];

				/***/
			},

		/***/ '@formgent/modules':
			/*!***************************************!*\
  !*** external ["formgent","modules"] ***!
  \***************************************/
			/***/ ( module ) => {
				module.exports = window[ 'formgent' ][ 'modules' ];

				/***/
			},

		/***/ '@wordpress/block-editor':
			/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
			/***/ ( module ) => {
				module.exports = window[ 'wp' ][ 'blockEditor' ];

				/***/
			},

		/***/ '@wordpress/i18n':
			/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
			/***/ ( module ) => {
				module.exports = window[ 'wp' ][ 'i18n' ];

				/***/
			},

		/***/ './resources/blocks/submit-button/block.json':
			/*!***************************************************!*\
  !*** ./resources/blocks/submit-button/block.json ***!
  \***************************************************/
			/***/ ( module ) => {
				module.exports = /*#__PURE__*/ JSON.parse(
					'{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"formgent/submit-button","title":"Submit Button","category":"formgent","description":"FormGent Submit Button Block","textdomain":"formgent","attributes":{"id":{"type":"string","default":""},"name":{"type":"string","default":"button"},"button_text":{"type":"string","default":"Submit"},"button_alignment":{"type":"string","default":"left"},"button_style":{"type":"string","default":"default"},"background_color":{"type":"string","default":"#4cafaa"},"border_color":{"type":"string","default":"#000000"},"text_color":{"type":"string","default":"#000000"}},"supports":{"interactivity":true},"editorScript":"file:index.js","style":"file:style-index.css","editorStyle":"file:index.css","render":"file:render.php"}'
				);

				/***/
			},

		/******/
	};
	/************************************************************************/
	/******/ // The module cache
	/******/ var __webpack_module_cache__ = {};
	/******/
	/******/ // The require function
	/******/ function __webpack_require__( moduleId ) {
		/******/ // Check if module is in cache
		/******/ var cachedModule = __webpack_module_cache__[ moduleId ];
		/******/ if ( cachedModule !== undefined ) {
			/******/ return cachedModule.exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/ var module = ( __webpack_module_cache__[ moduleId ] = {
			/******/ // no module.id needed
			/******/ // no module.loaded needed
			/******/ exports: {},
			/******/
		} );
		/******/
		/******/ // Execute the module function
		/******/ __webpack_modules__[ moduleId ](
			module,
			module.exports,
			__webpack_require__
		);
		/******/
		/******/ // Return the exports of the module
		/******/ return module.exports;
		/******/
	}
	/******/
	/******/ // expose the modules object (__webpack_modules__)
	/******/ __webpack_require__.m = __webpack_modules__;
	/******/
	/************************************************************************/
	/******/ /* webpack/runtime/chunk loaded */
	/******/ ( () => {
		/******/ var deferred = [];
		/******/ __webpack_require__.O = ( result, chunkIds, fn, priority ) => {
			/******/ if ( chunkIds ) {
				/******/ priority = priority || 0;
				/******/ for (
					var i = deferred.length;
					i > 0 && deferred[ i - 1 ][ 2 ] > priority;
					i--
				)
					deferred[ i ] = deferred[ i - 1 ];
				/******/ deferred[ i ] = [ chunkIds, fn, priority ];
				/******/ return;
				/******/
			}
			/******/ var notFulfilled = Infinity;
			/******/ for ( var i = 0; i < deferred.length; i++ ) {
				/******/ var chunkIds = deferred[ i ][ 0 ];
				/******/ var fn = deferred[ i ][ 1 ];
				/******/ var priority = deferred[ i ][ 2 ];
				/******/ var fulfilled = true;
				/******/ for ( var j = 0; j < chunkIds.length; j++ ) {
					/******/ if (
						( priority & ( 1 === 0 ) ||
							notFulfilled >= priority ) &&
						Object.keys( __webpack_require__.O ).every( ( key ) =>
							__webpack_require__.O[ key ]( chunkIds[ j ] )
						)
					) {
						/******/ chunkIds.splice( j--, 1 );
						/******/
					} else {
						/******/ fulfilled = false;
						/******/ if ( priority < notFulfilled )
							notFulfilled = priority;
						/******/
					}
					/******/
				}
				/******/ if ( fulfilled ) {
					/******/ deferred.splice( i--, 1 );
					/******/ var r = fn();
					/******/ if ( r !== undefined ) result = r;
					/******/
				}
				/******/
			}
			/******/ return result;
			/******/
		};
		/******/
	} )();
	/******/
	/******/ /* webpack/runtime/compat get default export */
	/******/ ( () => {
		/******/ // getDefaultExport function for compatibility with non-harmony modules
		/******/ __webpack_require__.n = ( module ) => {
			/******/ var getter =
				module && module.__esModule
					? /******/ () => module[ 'default' ]
					: /******/ () => module;
			/******/ __webpack_require__.d( getter, { a: getter } );
			/******/ return getter;
			/******/
		};
		/******/
	} )();
	/******/
	/******/ /* webpack/runtime/define property getters */
	/******/ ( () => {
		/******/ // define getter functions for harmony exports
		/******/ __webpack_require__.d = ( exports, definition ) => {
			/******/ for ( var key in definition ) {
				/******/ if (
					__webpack_require__.o( definition, key ) &&
					! __webpack_require__.o( exports, key )
				) {
					/******/ Object.defineProperty( exports, key, {
						enumerable: true,
						get: definition[ key ],
					} );
					/******/
				}
				/******/
			}
			/******/
		};
		/******/
	} )();
	/******/
	/******/ /* webpack/runtime/hasOwnProperty shorthand */
	/******/ ( () => {
		/******/ __webpack_require__.o = ( obj, prop ) =>
			Object.prototype.hasOwnProperty.call( obj, prop );
		/******/
	} )();
	/******/
	/******/ /* webpack/runtime/make namespace object */
	/******/ ( () => {
		/******/ // define __esModule on exports
		/******/ __webpack_require__.r = ( exports ) => {
			/******/ if (
				typeof Symbol !== 'undefined' &&
				Symbol.toStringTag
			) {
				/******/ Object.defineProperty( exports, Symbol.toStringTag, {
					value: 'Module',
				} );
				/******/
			}
			/******/ Object.defineProperty( exports, '__esModule', {
				value: true,
			} );
			/******/
		};
		/******/
	} )();
	/******/
	/******/ /* webpack/runtime/jsonp chunk loading */
	/******/ ( () => {
		/******/ // no baseURI
		/******/
		/******/ // object to store loaded and loading chunks
		/******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
		/******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
		/******/ var installedChunks = {
			/******/ 'submit-button/index': 0,
			/******/ 'submit-button/style-index': 0,
			/******/
		};
		/******/
		/******/ // no chunk on demand loading
		/******/
		/******/ // no prefetching
		/******/
		/******/ // no preloaded
		/******/
		/******/ // no HMR
		/******/
		/******/ // no HMR manifest
		/******/
		/******/ __webpack_require__.O.j = ( chunkId ) =>
			installedChunks[ chunkId ] === 0;
		/******/
		/******/ // install a JSONP callback for chunk loading
		/******/ var webpackJsonpCallback = (
			parentChunkLoadingFunction,
			data
		) => {
			/******/ var chunkIds = data[ 0 ];
			/******/ var moreModules = data[ 1 ];
			/******/ var runtime = data[ 2 ];
			/******/ // add "moreModules" to the modules object,
			/******/ // then flag all "chunkIds" as loaded and fire callback
			/******/ var moduleId,
				chunkId,
				i = 0;
			/******/ if (
				chunkIds.some( ( id ) => installedChunks[ id ] !== 0 )
			) {
				/******/ for ( moduleId in moreModules ) {
					/******/ if (
						__webpack_require__.o( moreModules, moduleId )
					) {
						/******/ __webpack_require__.m[ moduleId ] =
							moreModules[ moduleId ];
						/******/
					}
					/******/
				}
				/******/ if ( runtime )
					var result = runtime( __webpack_require__ );
				/******/
			}
			/******/ if ( parentChunkLoadingFunction )
				parentChunkLoadingFunction( data );
			/******/ for ( ; i < chunkIds.length; i++ ) {
				/******/ chunkId = chunkIds[ i ];
				/******/ if (
					__webpack_require__.o( installedChunks, chunkId ) &&
					installedChunks[ chunkId ]
				) {
					/******/ installedChunks[ chunkId ][ 0 ]();
					/******/
				}
				/******/ installedChunks[ chunkId ] = 0;
				/******/
			}
			/******/ return __webpack_require__.O( result );
			/******/
		};
		/******/
		/******/ var chunkLoadingGlobal = ( self[ 'webpackChunkformgent' ] =
			self[ 'webpackChunkformgent' ] || [] );
		/******/ chunkLoadingGlobal.forEach(
			webpackJsonpCallback.bind( null, 0 )
		);
		/******/ chunkLoadingGlobal.push = webpackJsonpCallback.bind(
			null,
			chunkLoadingGlobal.push.bind( chunkLoadingGlobal )
		);
		/******/
	} )();
	/******/
	/************************************************************************/
	/******/
	/******/ // startup
	/******/ // Load entry module and return exports
	/******/ // This entry module depends on other loaded chunks and execution need to be delayed
	/******/ var __webpack_exports__ = __webpack_require__.O(
		undefined,
		[ 'submit-button/style-index' ],
		() => __webpack_require__( './resources/blocks/submit-button/index.js' )
	);
	/******/ __webpack_exports__ = __webpack_require__.O( __webpack_exports__ );
	/******/
	/******/
} )();
//# sourceMappingURL=index.js.map
