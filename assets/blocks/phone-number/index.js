/******/ ( () => {
	// webpackBootstrap
	/******/ 'use strict';
	/******/ var __webpack_modules__ = {
		/***/ './resources/svg/icons/chevron-down.svg':
			/*!**********************************************!*\
  !*** ./resources/svg/icons/chevron-down.svg ***!
  \**********************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ ReactComponent: () =>
							/* binding */ SvgChevronDown,
						/* harmony export */ default: () =>
							__WEBPACK_DEFAULT_EXPORT__,
						/* harmony export */
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__( /*! react */ 'react' );
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(
						react__WEBPACK_IMPORTED_MODULE_0__
					);
				var _path;
				function _extends() {
					return (
						( _extends = Object.assign
							? Object.assign.bind()
							: function ( n ) {
									for (
										var e = 1;
										e < arguments.length;
										e++
									) {
										var t = arguments[ e ];
										for ( var r in t )
											( {} ).hasOwnProperty.call(
												t,
												r
											) && ( n[ r ] = t[ r ] );
									}
									return n;
							  } ),
						_extends.apply( null, arguments )
					);
				}

				var SvgChevronDown = function SvgChevronDown( props ) {
					return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
						'svg',
						_extends(
							{
								xmlns: 'http://www.w3.org/2000/svg',
								fill: 'none',
								viewBox: '0 0 24 24',
							},
							props
						),
						_path ||
							( _path =
								/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
									'path',
									{
										stroke: 'currentColor',
										strokeLinecap: 'round',
										strokeLinejoin: 'round',
										strokeWidth: 2,
										d: 'm6 9 6 6 6-6',
									}
								) )
					);
				};

				/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
					'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogPHBhdGggZD0iTTYgOUwxMiAxNUwxOCA5IiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCiA8L3N2Zz4=';

				/***/
			},

		/***/ './resources/blocks/phone-number/Edit.js':
			/*!***********************************************!*\
  !*** ./resources/blocks/phone-number/Edit.js ***!
  \***********************************************/
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
				/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_5__ =
					__webpack_require__(
						/*! react-inlinesvg */ './node_modules/react-inlinesvg/dist/index.mjs'
					);
				/* harmony import */ var _icon_chevron_down_svg__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! @icon/chevron-down.svg */ './resources/svg/icons/chevron-down.svg'
					);
				/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						/*! @wordpress/i18n */ '@wordpress/i18n'
					);
				/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__
					);
				/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						/*! ./editor.scss */ './resources/blocks/phone-number/editor.scss'
					);

				/**
				 * wordpress dependencies
				 */

				function Edit( { attributes, setAttributes } ) {
					return ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
						'div',
						{
							className: 'formgent-editor-block-list__single',
						},
						( 0, react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
							'div',
							{
								className: `formgent-editor-block-list__single__label-container formgent-label-align-${ attributes.label_alignment }`,
							},
							( 0,
							react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
								_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText,
								{
									className:
										'formgent-editor-block-list__single__label',
									tagName: 'label',
									value: attributes.label,
									onChange: ( content ) =>
										setAttributes( {
											label: content,
										} ),
									placeholder: ( 0,
									_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__ )(
										'Type your question'
									),
								}
							),
							attributes.required
								? ( 0,
								  react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
										'span',
										{
											className:
												'formgent-editor-block-list__single__label__required',
										},
										'*'
								  )
								: null
						),
						( 0, react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
							'div',
							{
								className:
									'formgent-editor-block-list__single__wrapper',
							},
							( 0,
							react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
								'div',
								{
									className:
										'formgent-editor-block-list__single__dialer',
								},
								( 0,
								react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
									'span',
									{
										className:
											'formgent-editor-block-list__single__dialer__flag',
									},
									( 0,
									react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
										'img',
										{
											src: `${ formgent_blocks.assetUrl }/images/us.webp`,
											alt: 'Formgent Flag',
										}
									),
									( 0,
									react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
										react_inlinesvg__WEBPACK_IMPORTED_MODULE_5__[
											'default'
										],
										{
											src: _icon_chevron_down_svg__WEBPACK_IMPORTED_MODULE_2__[
												'default'
											],
										}
									)
								),
								( 0,
								react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
									'div',
									{
										className:
											'formgent-editor-block-list__single__dialer__content',
									},
									attributes?.country_code &&
										( 0,
										react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
											'span',
											{
												className:
													'formgent-editor-block-list__single__dialer__code',
											},
											'+1'
										),
									( 0,
									react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
										'input',
										{
											className:
												'formgent-editor-block-list__single__input',
											type: 'text',
											name: attributes.name,
											placeholder: attributes.placeholder,
											value: attributes.value.value_two,
											onChange: () => {},
											disabled: true,
										}
									)
								)
							),
							( 0,
							react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
								_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText,
								{
									className:
										'formgent-editor-block-list__single__sub-label',
									tagName: 'span',
									value: attributes.sub_label,
									onChange: ( content ) =>
										setAttributes( {
											sub_label: content,
										} ),
									placeholder: ( 0,
									_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__ )(
										'Type sub label here (optional)'
									),
								}
							)
						)
					);
				}

				/***/
			},

		/***/ './resources/blocks/phone-number/index.js':
			/*!************************************************!*\
  !*** ./resources/blocks/phone-number/index.js ***!
  \************************************************/
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
						/*! ./Edit */ './resources/blocks/phone-number/Edit.js'
					);
				/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						/*! ./block.json */ './resources/blocks/phone-number/block.json'
					);
				/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						/*! ./style.scss */ './resources/blocks/phone-number/style.scss'
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
							label_alignment: {
								type: 'toggle_group',
								label: ( 0,
								_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
									'Label Alignment',
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
											'Right',
											'formgent'
										),
										value: 'right',
									},
									{
										label: ( 0,
										_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
											'Top',
											'formgent'
										),
										value: 'top',
									},
									{
										label: ( 0,
										_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
											'Justify',
											'formgent'
										),
										value: 'justify',
									},
								],
							},
							placeholder: {
								type: 'text',
								label: ( 0,
								_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
									'Field Placeholder',
									'formgent'
								),
							},
							country_code: {
								type: 'switch',
								label: ( 0,
								_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
									'Include country code',
									'formgent'
								),
							},
							country_auto_detection: {
								type: 'switch',
								label: ( 0,
								_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
									'Enable auto country detection',
									'formgent'
								),
							},
							required: {
								type: 'switch',
								label: ( 0,
								_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
									'Required',
									'formgent'
								),
							},
						},
					},
				};
				const advancedControls = {
					advanced: {
						type: 'panel',
						children: {
							value: {
								type: 'default_value',
								label: ( 0,
								_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
									'Default Value',
									'formgent'
								),
							},
							name: {
								type: 'text',
								label: ( 0,
								_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
									'Field Name',
									'formgent'
								),
							},
						},
					},
				};
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

		/***/ './resources/blocks/phone-number/editor.scss':
			/*!***************************************************!*\
  !*** ./resources/blocks/phone-number/editor.scss ***!
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

		/***/ './resources/blocks/phone-number/style.scss':
			/*!**************************************************!*\
  !*** ./resources/blocks/phone-number/style.scss ***!
  \**************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				__webpack_require__.r( __webpack_exports__ );
				// extracted by mini-css-extract-plugin

				/***/
			},

		/***/ './node_modules/react/cjs/react-jsx-runtime.development.js':
			/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
			/***/ ( __unused_webpack_module, exports, __webpack_require__ ) => {
				/**
				 * @license React
				 * react-jsx-runtime.development.js
				 *
				 * Copyright (c) Facebook, Inc. and its affiliates.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */

				if ( true ) {
					( function () {
						'use strict';

						var React = __webpack_require__( /*! react */ 'react' );

						// ATTENTION
						// When adding new symbols to this file,
						// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
						// The Symbol used to tag the ReactElement-like types.
						var REACT_ELEMENT_TYPE = Symbol.for( 'react.element' );
						var REACT_PORTAL_TYPE = Symbol.for( 'react.portal' );
						var REACT_FRAGMENT_TYPE =
							Symbol.for( 'react.fragment' );
						var REACT_STRICT_MODE_TYPE =
							Symbol.for( 'react.strict_mode' );
						var REACT_PROFILER_TYPE =
							Symbol.for( 'react.profiler' );
						var REACT_PROVIDER_TYPE =
							Symbol.for( 'react.provider' );
						var REACT_CONTEXT_TYPE = Symbol.for( 'react.context' );
						var REACT_FORWARD_REF_TYPE =
							Symbol.for( 'react.forward_ref' );
						var REACT_SUSPENSE_TYPE =
							Symbol.for( 'react.suspense' );
						var REACT_SUSPENSE_LIST_TYPE = Symbol.for(
							'react.suspense_list'
						);
						var REACT_MEMO_TYPE = Symbol.for( 'react.memo' );
						var REACT_LAZY_TYPE = Symbol.for( 'react.lazy' );
						var REACT_OFFSCREEN_TYPE =
							Symbol.for( 'react.offscreen' );
						var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
						var FAUX_ITERATOR_SYMBOL = '@@iterator';
						function getIteratorFn( maybeIterable ) {
							if (
								maybeIterable === null ||
								typeof maybeIterable !== 'object'
							) {
								return null;
							}

							var maybeIterator =
								( MAYBE_ITERATOR_SYMBOL &&
									maybeIterable[ MAYBE_ITERATOR_SYMBOL ] ) ||
								maybeIterable[ FAUX_ITERATOR_SYMBOL ];

							if ( typeof maybeIterator === 'function' ) {
								return maybeIterator;
							}

							return null;
						}

						var ReactSharedInternals =
							React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

						function error( format ) {
							{
								{
									for (
										var _len2 = arguments.length,
											args = new Array(
												_len2 > 1 ? _len2 - 1 : 0
											),
											_key2 = 1;
										_key2 < _len2;
										_key2++
									) {
										args[ _key2 - 1 ] = arguments[ _key2 ];
									}

									printWarning( 'error', format, args );
								}
							}
						}

						function printWarning( level, format, args ) {
							// When changing this logic, you might want to also
							// update consoleWithStackDev.www.js as well.
							{
								var ReactDebugCurrentFrame =
									ReactSharedInternals.ReactDebugCurrentFrame;
								var stack =
									ReactDebugCurrentFrame.getStackAddendum();

								if ( stack !== '' ) {
									format += '%s';
									args = args.concat( [ stack ] );
								} // eslint-disable-next-line react-internal/safe-string-coercion

								var argsWithFormat = args.map(
									function ( item ) {
										return String( item );
									}
								); // Careful: RN currently depends on this prefix

								argsWithFormat.unshift( 'Warning: ' + format ); // We intentionally don't use spread (or .apply) directly because it
								// breaks IE9: https://github.com/facebook/react/issues/13610
								// eslint-disable-next-line react-internal/no-production-logging

								Function.prototype.apply.call(
									console[ level ],
									console,
									argsWithFormat
								);
							}
						}

						// -----------------------------------------------------------------------------

						var enableScopeAPI = false; // Experimental Create Event Handle API.
						var enableCacheElement = false;
						var enableTransitionTracing = false; // No known bugs, but needs performance testing

						var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
						// stuff. Intended to enable React core members to more easily debug scheduling
						// issues in DEV builds.

						var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

						var REACT_MODULE_REFERENCE;

						{
							REACT_MODULE_REFERENCE = Symbol.for(
								'react.module.reference'
							);
						}

						function isValidElementType( type ) {
							if (
								typeof type === 'string' ||
								typeof type === 'function'
							) {
								return true;
							} // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).

							if (
								type === REACT_FRAGMENT_TYPE ||
								type === REACT_PROFILER_TYPE ||
								enableDebugTracing ||
								type === REACT_STRICT_MODE_TYPE ||
								type === REACT_SUSPENSE_TYPE ||
								type === REACT_SUSPENSE_LIST_TYPE ||
								enableLegacyHidden ||
								type === REACT_OFFSCREEN_TYPE ||
								enableScopeAPI ||
								enableCacheElement ||
								enableTransitionTracing
							) {
								return true;
							}

							if ( typeof type === 'object' && type !== null ) {
								if (
									type.$$typeof === REACT_LAZY_TYPE ||
									type.$$typeof === REACT_MEMO_TYPE ||
									type.$$typeof === REACT_PROVIDER_TYPE ||
									type.$$typeof === REACT_CONTEXT_TYPE ||
									type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
									// types supported by any Flight configuration anywhere since
									// we don't know which Flight build this will end up being used
									// with.
									type.$$typeof === REACT_MODULE_REFERENCE ||
									type.getModuleId !== undefined
								) {
									return true;
								}
							}

							return false;
						}

						function getWrappedName(
							outerType,
							innerType,
							wrapperName
						) {
							var displayName = outerType.displayName;

							if ( displayName ) {
								return displayName;
							}

							var functionName =
								innerType.displayName || innerType.name || '';
							return functionName !== ''
								? wrapperName + '(' + functionName + ')'
								: wrapperName;
						} // Keep in sync with react-reconciler/getComponentNameFromFiber

						function getContextName( type ) {
							return type.displayName || 'Context';
						} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.

						function getComponentNameFromType( type ) {
							if ( type == null ) {
								// Host root, text node or just invalid type.
								return null;
							}

							{
								if ( typeof type.tag === 'number' ) {
									error(
										'Received an unexpected object in getComponentNameFromType(). ' +
											'This is likely a bug in React. Please file an issue.'
									);
								}
							}

							if ( typeof type === 'function' ) {
								return type.displayName || type.name || null;
							}

							if ( typeof type === 'string' ) {
								return type;
							}

							switch ( type ) {
								case REACT_FRAGMENT_TYPE:
									return 'Fragment';

								case REACT_PORTAL_TYPE:
									return 'Portal';

								case REACT_PROFILER_TYPE:
									return 'Profiler';

								case REACT_STRICT_MODE_TYPE:
									return 'StrictMode';

								case REACT_SUSPENSE_TYPE:
									return 'Suspense';

								case REACT_SUSPENSE_LIST_TYPE:
									return 'SuspenseList';
							}

							if ( typeof type === 'object' ) {
								switch ( type.$$typeof ) {
									case REACT_CONTEXT_TYPE:
										var context = type;
										return (
											getContextName( context ) +
											'.Consumer'
										);

									case REACT_PROVIDER_TYPE:
										var provider = type;
										return (
											getContextName(
												provider._context
											) + '.Provider'
										);

									case REACT_FORWARD_REF_TYPE:
										return getWrappedName(
											type,
											type.render,
											'ForwardRef'
										);

									case REACT_MEMO_TYPE:
										var outerName =
											type.displayName || null;

										if ( outerName !== null ) {
											return outerName;
										}

										return (
											getComponentNameFromType(
												type.type
											) || 'Memo'
										);

									case REACT_LAZY_TYPE: {
										var lazyComponent = type;
										var payload = lazyComponent._payload;
										var init = lazyComponent._init;

										try {
											return getComponentNameFromType(
												init( payload )
											);
										} catch ( x ) {
											return null;
										}
									}

									// eslint-disable-next-line no-fallthrough
								}
							}

							return null;
						}

						var assign = Object.assign;

						// Helpers to patch console.logs to avoid logging during side-effect free
						// replaying on render function. This currently only patches the object
						// lazily which won't cover if the log function was extracted eagerly.
						// We could also eagerly patch the method.
						var disabledDepth = 0;
						var prevLog;
						var prevInfo;
						var prevWarn;
						var prevError;
						var prevGroup;
						var prevGroupCollapsed;
						var prevGroupEnd;

						function disabledLog() {}

						disabledLog.__reactDisabledLog = true;
						function disableLogs() {
							{
								if ( disabledDepth === 0 ) {
									/* eslint-disable react-internal/no-production-logging */
									prevLog = console.log;
									prevInfo = console.info;
									prevWarn = console.warn;
									prevError = console.error;
									prevGroup = console.group;
									prevGroupCollapsed = console.groupCollapsed;
									prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

									var props = {
										configurable: true,
										enumerable: true,
										value: disabledLog,
										writable: true,
									}; // $FlowFixMe Flow thinks console is immutable.

									Object.defineProperties( console, {
										info: props,
										log: props,
										warn: props,
										error: props,
										group: props,
										groupCollapsed: props,
										groupEnd: props,
									} );
									/* eslint-enable react-internal/no-production-logging */
								}

								disabledDepth++;
							}
						}
						function reenableLogs() {
							{
								disabledDepth--;

								if ( disabledDepth === 0 ) {
									/* eslint-disable react-internal/no-production-logging */
									var props = {
										configurable: true,
										enumerable: true,
										writable: true,
									}; // $FlowFixMe Flow thinks console is immutable.

									Object.defineProperties( console, {
										log: assign( {}, props, {
											value: prevLog,
										} ),
										info: assign( {}, props, {
											value: prevInfo,
										} ),
										warn: assign( {}, props, {
											value: prevWarn,
										} ),
										error: assign( {}, props, {
											value: prevError,
										} ),
										group: assign( {}, props, {
											value: prevGroup,
										} ),
										groupCollapsed: assign( {}, props, {
											value: prevGroupCollapsed,
										} ),
										groupEnd: assign( {}, props, {
											value: prevGroupEnd,
										} ),
									} );
									/* eslint-enable react-internal/no-production-logging */
								}

								if ( disabledDepth < 0 ) {
									error(
										'disabledDepth fell below zero. ' +
											'This is a bug in React. Please file an issue.'
									);
								}
							}
						}

						var ReactCurrentDispatcher =
							ReactSharedInternals.ReactCurrentDispatcher;
						var prefix;
						function describeBuiltInComponentFrame(
							name,
							source,
							ownerFn
						) {
							{
								if ( prefix === undefined ) {
									// Extract the VM specific prefix used by each line.
									try {
										throw Error();
									} catch ( x ) {
										var match = x.stack
											.trim()
											.match( /\n( *(at )?)/ );
										prefix = ( match && match[ 1 ] ) || '';
									}
								} // We use the prefix to ensure our stacks line up with native stack frames.

								return '\n' + prefix + name;
							}
						}
						var reentry = false;
						var componentFrameCache;

						{
							var PossiblyWeakMap =
								typeof WeakMap === 'function' ? WeakMap : Map;
							componentFrameCache = new PossiblyWeakMap();
						}

						function describeNativeComponentFrame( fn, construct ) {
							// If something asked for a stack inside a fake render, it should get ignored.
							if ( ! fn || reentry ) {
								return '';
							}

							{
								var frame = componentFrameCache.get( fn );

								if ( frame !== undefined ) {
									return frame;
								}
							}

							var control;
							reentry = true;
							var previousPrepareStackTrace =
								Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

							Error.prepareStackTrace = undefined;
							var previousDispatcher;

							{
								previousDispatcher =
									ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
								// for warnings.

								ReactCurrentDispatcher.current = null;
								disableLogs();
							}

							try {
								// This should throw.
								if ( construct ) {
									// Something should be setting the props in the constructor.
									var Fake = function () {
										throw Error();
									}; // $FlowFixMe

									Object.defineProperty(
										Fake.prototype,
										'props',
										{
											set: function () {
												// We use a throwing setter instead of frozen or non-writable props
												// because that won't throw in a non-strict mode function.
												throw Error();
											},
										}
									);

									if (
										typeof Reflect === 'object' &&
										Reflect.construct
									) {
										// We construct a different control for this case to include any extra
										// frames added by the construct call.
										try {
											Reflect.construct( Fake, [] );
										} catch ( x ) {
											control = x;
										}

										Reflect.construct( fn, [], Fake );
									} else {
										try {
											Fake.call();
										} catch ( x ) {
											control = x;
										}

										fn.call( Fake.prototype );
									}
								} else {
									try {
										throw Error();
									} catch ( x ) {
										control = x;
									}

									fn();
								}
							} catch ( sample ) {
								// This is inlined manually because closure doesn't do it for us.
								if (
									sample &&
									control &&
									typeof sample.stack === 'string'
								) {
									// This extracts the first frame from the sample that isn't also in the control.
									// Skipping one frame that we assume is the frame that calls the two.
									var sampleLines =
										sample.stack.split( '\n' );
									var controlLines =
										control.stack.split( '\n' );
									var s = sampleLines.length - 1;
									var c = controlLines.length - 1;

									while (
										s >= 1 &&
										c >= 0 &&
										sampleLines[ s ] !== controlLines[ c ]
									) {
										// We expect at least one stack frame to be shared.
										// Typically this will be the root most one. However, stack frames may be
										// cut off due to maximum stack limits. In this case, one maybe cut off
										// earlier than the other. We assume that the sample is longer or the same
										// and there for cut off earlier. So we should find the root most frame in
										// the sample somewhere in the control.
										c--;
									}

									for ( ; s >= 1 && c >= 0; s--, c-- ) {
										// Next we find the first one that isn't the same which should be the
										// frame that called our sample function and the control.
										if (
											sampleLines[ s ] !==
											controlLines[ c ]
										) {
											// In V8, the first line is describing the message but other VMs don't.
											// If we're about to return the first line, and the control is also on the same
											// line, that's a pretty good indicator that our sample threw at same line as
											// the control. I.e. before we entered the sample frame. So we ignore this result.
											// This can happen if you passed a class to function component, or non-function.
											if ( s !== 1 || c !== 1 ) {
												do {
													s--;
													c--; // We may still have similar intermediate frames from the construct call.
													// The next one that isn't the same should be our match though.

													if (
														c < 0 ||
														sampleLines[ s ] !==
															controlLines[ c ]
													) {
														// V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
														var _frame =
															'\n' +
															sampleLines[
																s
															].replace(
																' at new ',
																' at '
															); // If our component frame is labeled "<anonymous>"
														// but we have a user-provided "displayName"
														// splice it in to make the stack more readable.

														if (
															fn.displayName &&
															_frame.includes(
																'<anonymous>'
															)
														) {
															_frame =
																_frame.replace(
																	'<anonymous>',
																	fn.displayName
																);
														}

														{
															if (
																typeof fn ===
																'function'
															) {
																componentFrameCache.set(
																	fn,
																	_frame
																);
															}
														} // Return the line we found.

														return _frame;
													}
												} while ( s >= 1 && c >= 0 );
											}

											break;
										}
									}
								}
							} finally {
								reentry = false;

								{
									ReactCurrentDispatcher.current =
										previousDispatcher;
									reenableLogs();
								}

								Error.prepareStackTrace =
									previousPrepareStackTrace;
							} // Fallback to just using the name if we couldn't make it throw.

							var name = fn ? fn.displayName || fn.name : '';
							var syntheticFrame = name
								? describeBuiltInComponentFrame( name )
								: '';

							{
								if ( typeof fn === 'function' ) {
									componentFrameCache.set(
										fn,
										syntheticFrame
									);
								}
							}

							return syntheticFrame;
						}
						function describeFunctionComponentFrame(
							fn,
							source,
							ownerFn
						) {
							{
								return describeNativeComponentFrame(
									fn,
									false
								);
							}
						}

						function shouldConstruct( Component ) {
							var prototype = Component.prototype;
							return !! (
								prototype && prototype.isReactComponent
							);
						}

						function describeUnknownElementTypeFrameInDEV(
							type,
							source,
							ownerFn
						) {
							if ( type == null ) {
								return '';
							}

							if ( typeof type === 'function' ) {
								{
									return describeNativeComponentFrame(
										type,
										shouldConstruct( type )
									);
								}
							}

							if ( typeof type === 'string' ) {
								return describeBuiltInComponentFrame( type );
							}

							switch ( type ) {
								case REACT_SUSPENSE_TYPE:
									return describeBuiltInComponentFrame(
										'Suspense'
									);

								case REACT_SUSPENSE_LIST_TYPE:
									return describeBuiltInComponentFrame(
										'SuspenseList'
									);
							}

							if ( typeof type === 'object' ) {
								switch ( type.$$typeof ) {
									case REACT_FORWARD_REF_TYPE:
										return describeFunctionComponentFrame(
											type.render
										);

									case REACT_MEMO_TYPE:
										// Memo may contain any component type so we recursively resolve it.
										return describeUnknownElementTypeFrameInDEV(
											type.type,
											source,
											ownerFn
										);

									case REACT_LAZY_TYPE: {
										var lazyComponent = type;
										var payload = lazyComponent._payload;
										var init = lazyComponent._init;

										try {
											// Lazy may contain any component type so we recursively resolve it.
											return describeUnknownElementTypeFrameInDEV(
												init( payload ),
												source,
												ownerFn
											);
										} catch ( x ) {}
									}
								}
							}

							return '';
						}

						var hasOwnProperty = Object.prototype.hasOwnProperty;

						var loggedTypeFailures = {};
						var ReactDebugCurrentFrame =
							ReactSharedInternals.ReactDebugCurrentFrame;

						function setCurrentlyValidatingElement( element ) {
							{
								if ( element ) {
									var owner = element._owner;
									var stack =
										describeUnknownElementTypeFrameInDEV(
											element.type,
											element._source,
											owner ? owner.type : null
										);
									ReactDebugCurrentFrame.setExtraStackFrame(
										stack
									);
								} else {
									ReactDebugCurrentFrame.setExtraStackFrame(
										null
									);
								}
							}
						}

						function checkPropTypes(
							typeSpecs,
							values,
							location,
							componentName,
							element
						) {
							{
								// $FlowFixMe This is okay but Flow doesn't know it.
								var has = Function.call.bind( hasOwnProperty );

								for ( var typeSpecName in typeSpecs ) {
									if ( has( typeSpecs, typeSpecName ) ) {
										var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
										// fail the render phase where it didn't fail before. So we log it.
										// After these have been cleaned up, we'll let them throw.

										try {
											// This is intentionally an invariant that gets caught. It's the same
											// behavior as without this statement except with a better message.
											if (
												typeof typeSpecs[
													typeSpecName
												] !== 'function'
											) {
												// eslint-disable-next-line react-internal/prod-error-codes
												var err = Error(
													( componentName ||
														'React class' ) +
														': ' +
														location +
														' type `' +
														typeSpecName +
														'` is invalid; ' +
														'it must be a function, usually from the `prop-types` package, but received `' +
														typeof typeSpecs[
															typeSpecName
														] +
														'`.' +
														'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
												);
												err.name =
													'Invariant Violation';
												throw err;
											}

											error$1 = typeSpecs[ typeSpecName ](
												values,
												typeSpecName,
												componentName,
												location,
												null,
												'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
											);
										} catch ( ex ) {
											error$1 = ex;
										}

										if (
											error$1 &&
											! ( error$1 instanceof Error )
										) {
											setCurrentlyValidatingElement(
												element
											);

											error(
												'%s: type specification of %s' +
													' `%s` is invalid; the type checker ' +
													'function must return `null` or an `Error` but returned a %s. ' +
													'You may have forgotten to pass an argument to the type checker ' +
													'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
													'shape all require an argument).',
												componentName || 'React class',
												location,
												typeSpecName,
												typeof error$1
											);

											setCurrentlyValidatingElement(
												null
											);
										}

										if (
											error$1 instanceof Error &&
											! (
												error$1.message in
												loggedTypeFailures
											)
										) {
											// Only monitor this failure once because there tends to be a lot of the
											// same error.
											loggedTypeFailures[
												error$1.message
											] = true;
											setCurrentlyValidatingElement(
												element
											);

											error(
												'Failed %s type: %s',
												location,
												error$1.message
											);

											setCurrentlyValidatingElement(
												null
											);
										}
									}
								}
							}
						}

						var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

						function isArray( a ) {
							return isArrayImpl( a );
						}

						/*
						 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
						 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
						 *
						 * The functions in this module will throw an easier-to-understand,
						 * easier-to-debug exception with a clear errors message message explaining the
						 * problem. (Instead of a confusing exception thrown inside the implementation
						 * of the `value` object).
						 */
						// $FlowFixMe only called in DEV, so void return is not possible.
						function typeName( value ) {
							{
								// toStringTag is needed for namespaced types like Temporal.Instant
								var hasToStringTag =
									typeof Symbol === 'function' &&
									Symbol.toStringTag;
								var type =
									( hasToStringTag &&
										value[ Symbol.toStringTag ] ) ||
									value.constructor.name ||
									'Object';
								return type;
							}
						} // $FlowFixMe only called in DEV, so void return is not possible.

						function willCoercionThrow( value ) {
							{
								try {
									testStringCoercion( value );
									return false;
								} catch ( e ) {
									return true;
								}
							}
						}

						function testStringCoercion( value ) {
							// If you ended up here by following an exception call stack, here's what's
							// happened: you supplied an object or symbol value to React (as a prop, key,
							// DOM attribute, CSS property, string ref, etc.) and when React tried to
							// coerce it to a string using `'' + value`, an exception was thrown.
							//
							// The most common types that will cause this exception are `Symbol` instances
							// and Temporal objects like `Temporal.Instant`. But any object that has a
							// `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
							// exception. (Library authors do this to prevent users from using built-in
							// numeric operators like `+` or comparison operators like `>=` because custom
							// methods are needed to perform accurate arithmetic or comparison.)
							//
							// To fix the problem, coerce this object or symbol value to a string before
							// passing it to React. The most reliable way is usually `String(value)`.
							//
							// To find which value is throwing, check the browser or debugger console.
							// Before this exception was thrown, there should be `console.error` output
							// that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
							// problem and how that type was used: key, atrribute, input value prop, etc.
							// In most cases, this console output also shows the component and its
							// ancestor components where the exception happened.
							//
							// eslint-disable-next-line react-internal/safe-string-coercion
							return '' + value;
						}
						function checkKeyStringCoercion( value ) {
							{
								if ( willCoercionThrow( value ) ) {
									error(
										'The provided key is an unsupported type %s.' +
											' This value must be coerced to a string before before using it here.',
										typeName( value )
									);

									return testStringCoercion( value ); // throw (to help callers find troubleshooting comments)
								}
							}
						}

						var ReactCurrentOwner =
							ReactSharedInternals.ReactCurrentOwner;
						var RESERVED_PROPS = {
							key: true,
							ref: true,
							__self: true,
							__source: true,
						};
						var specialPropKeyWarningShown;
						var specialPropRefWarningShown;
						var didWarnAboutStringRefs;

						{
							didWarnAboutStringRefs = {};
						}

						function hasValidRef( config ) {
							{
								if ( hasOwnProperty.call( config, 'ref' ) ) {
									var getter =
										Object.getOwnPropertyDescriptor(
											config,
											'ref'
										).get;

									if ( getter && getter.isReactWarning ) {
										return false;
									}
								}
							}

							return config.ref !== undefined;
						}

						function hasValidKey( config ) {
							{
								if ( hasOwnProperty.call( config, 'key' ) ) {
									var getter =
										Object.getOwnPropertyDescriptor(
											config,
											'key'
										).get;

									if ( getter && getter.isReactWarning ) {
										return false;
									}
								}
							}

							return config.key !== undefined;
						}

						function warnIfStringRefCannotBeAutoConverted(
							config,
							self
						) {
							{
								if (
									typeof config.ref === 'string' &&
									ReactCurrentOwner.current &&
									self &&
									ReactCurrentOwner.current.stateNode !== self
								) {
									var componentName =
										getComponentNameFromType(
											ReactCurrentOwner.current.type
										);

									if (
										! didWarnAboutStringRefs[
											componentName
										]
									) {
										error(
											'Component "%s" contains the string ref "%s". ' +
												'Support for string refs will be removed in a future major release. ' +
												'This case cannot be automatically converted to an arrow function. ' +
												'We ask you to manually fix this case by using useRef() or createRef() instead. ' +
												'Learn more about using refs safely here: ' +
												'https://reactjs.org/link/strict-mode-string-ref',
											getComponentNameFromType(
												ReactCurrentOwner.current.type
											),
											config.ref
										);

										didWarnAboutStringRefs[
											componentName
										] = true;
									}
								}
							}
						}

						function defineKeyPropWarningGetter(
							props,
							displayName
						) {
							{
								var warnAboutAccessingKey = function () {
									if ( ! specialPropKeyWarningShown ) {
										specialPropKeyWarningShown = true;

										error(
											'%s: `key` is not a prop. Trying to access it will result ' +
												'in `undefined` being returned. If you need to access the same ' +
												'value within the child component, you should pass it as a different ' +
												'prop. (https://reactjs.org/link/special-props)',
											displayName
										);
									}
								};

								warnAboutAccessingKey.isReactWarning = true;
								Object.defineProperty( props, 'key', {
									get: warnAboutAccessingKey,
									configurable: true,
								} );
							}
						}

						function defineRefPropWarningGetter(
							props,
							displayName
						) {
							{
								var warnAboutAccessingRef = function () {
									if ( ! specialPropRefWarningShown ) {
										specialPropRefWarningShown = true;

										error(
											'%s: `ref` is not a prop. Trying to access it will result ' +
												'in `undefined` being returned. If you need to access the same ' +
												'value within the child component, you should pass it as a different ' +
												'prop. (https://reactjs.org/link/special-props)',
											displayName
										);
									}
								};

								warnAboutAccessingRef.isReactWarning = true;
								Object.defineProperty( props, 'ref', {
									get: warnAboutAccessingRef,
									configurable: true,
								} );
							}
						}
						/**
						 * Factory method to create a new React element. This no longer adheres to
						 * the class pattern, so do not use new to call it. Also, instanceof check
						 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
						 * if something is a React Element.
						 *
						 * @param {*} type
						 * @param {*} props
						 * @param {*} key
						 * @param {string|object} ref
						 * @param {*} owner
						 * @param {*} self A *temporary* helper to detect places where `this` is
						 * different from the `owner` when React.createElement is called, so that we
						 * can warn. We want to get rid of owner and replace string `ref`s with arrow
						 * functions, and as long as `this` and owner are the same, there will be no
						 * change in behavior.
						 * @param {*} source An annotation object (added by a transpiler or otherwise)
						 * indicating filename, line number, and/or other information.
						 * @internal
						 */

						var ReactElement = function (
							type,
							key,
							ref,
							self,
							source,
							owner,
							props
						) {
							var element = {
								// This tag allows us to uniquely identify this as a React Element
								$$typeof: REACT_ELEMENT_TYPE,
								// Built-in properties that belong on the element
								type: type,
								key: key,
								ref: ref,
								props: props,
								// Record the component responsible for creating this element.
								_owner: owner,
							};

							{
								// The validation flag is currently mutative. We put it on
								// an external backing store so that we can freeze the whole object.
								// This can be replaced with a WeakMap once they are implemented in
								// commonly used development environments.
								element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
								// the validation flag non-enumerable (where possible, which should
								// include every environment we run tests in), so the test framework
								// ignores it.

								Object.defineProperty(
									element._store,
									'validated',
									{
										configurable: false,
										enumerable: false,
										writable: true,
										value: false,
									}
								); // self and source are DEV only properties.

								Object.defineProperty( element, '_self', {
									configurable: false,
									enumerable: false,
									writable: false,
									value: self,
								} ); // Two elements created in two different places should be considered
								// equal for testing purposes and therefore we hide it from enumeration.

								Object.defineProperty( element, '_source', {
									configurable: false,
									enumerable: false,
									writable: false,
									value: source,
								} );

								if ( Object.freeze ) {
									Object.freeze( element.props );
									Object.freeze( element );
								}
							}

							return element;
						};
						/**
						 * https://github.com/reactjs/rfcs/pull/107
						 * @param {*} type
						 * @param {object} props
						 * @param {string} key
						 */

						function jsxDEV(
							type,
							config,
							maybeKey,
							source,
							self
						) {
							{
								var propName; // Reserved names are extracted

								var props = {};
								var key = null;
								var ref = null; // Currently, key can be spread in as a prop. This causes a potential
								// issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
								// or <div key="Hi" {...props} /> ). We want to deprecate key spread,
								// but as an intermediary step, we will use jsxDEV for everything except
								// <div {...props} key="Hi" />, because we aren't currently able to tell if
								// key is explicitly declared to be undefined or not.

								if ( maybeKey !== undefined ) {
									{
										checkKeyStringCoercion( maybeKey );
									}

									key = '' + maybeKey;
								}

								if ( hasValidKey( config ) ) {
									{
										checkKeyStringCoercion( config.key );
									}

									key = '' + config.key;
								}

								if ( hasValidRef( config ) ) {
									ref = config.ref;
									warnIfStringRefCannotBeAutoConverted(
										config,
										self
									);
								} // Remaining properties are added to a new props object

								for ( propName in config ) {
									if (
										hasOwnProperty.call(
											config,
											propName
										) &&
										! RESERVED_PROPS.hasOwnProperty(
											propName
										)
									) {
										props[ propName ] = config[ propName ];
									}
								} // Resolve default props

								if ( type && type.defaultProps ) {
									var defaultProps = type.defaultProps;

									for ( propName in defaultProps ) {
										if ( props[ propName ] === undefined ) {
											props[ propName ] =
												defaultProps[ propName ];
										}
									}
								}

								if ( key || ref ) {
									var displayName =
										typeof type === 'function'
											? type.displayName ||
											  type.name ||
											  'Unknown'
											: type;

									if ( key ) {
										defineKeyPropWarningGetter(
											props,
											displayName
										);
									}

									if ( ref ) {
										defineRefPropWarningGetter(
											props,
											displayName
										);
									}
								}

								return ReactElement(
									type,
									key,
									ref,
									self,
									source,
									ReactCurrentOwner.current,
									props
								);
							}
						}

						var ReactCurrentOwner$1 =
							ReactSharedInternals.ReactCurrentOwner;
						var ReactDebugCurrentFrame$1 =
							ReactSharedInternals.ReactDebugCurrentFrame;

						function setCurrentlyValidatingElement$1( element ) {
							{
								if ( element ) {
									var owner = element._owner;
									var stack =
										describeUnknownElementTypeFrameInDEV(
											element.type,
											element._source,
											owner ? owner.type : null
										);
									ReactDebugCurrentFrame$1.setExtraStackFrame(
										stack
									);
								} else {
									ReactDebugCurrentFrame$1.setExtraStackFrame(
										null
									);
								}
							}
						}

						var propTypesMisspellWarningShown;

						{
							propTypesMisspellWarningShown = false;
						}
						/**
						 * Verifies the object is a ReactElement.
						 * See https://reactjs.org/docs/react-api.html#isvalidelement
						 * @param {?object} object
						 * @return {boolean} True if `object` is a ReactElement.
						 * @final
						 */

						function isValidElement( object ) {
							{
								return (
									typeof object === 'object' &&
									object !== null &&
									object.$$typeof === REACT_ELEMENT_TYPE
								);
							}
						}

						function getDeclarationErrorAddendum() {
							{
								if ( ReactCurrentOwner$1.current ) {
									var name = getComponentNameFromType(
										ReactCurrentOwner$1.current.type
									);

									if ( name ) {
										return (
											'\n\nCheck the render method of `' +
											name +
											'`.'
										);
									}
								}

								return '';
							}
						}

						function getSourceInfoErrorAddendum( source ) {
							{
								if ( source !== undefined ) {
									var fileName = source.fileName.replace(
										/^.*[\\\/]/,
										''
									);
									var lineNumber = source.lineNumber;
									return (
										'\n\nCheck your code at ' +
										fileName +
										':' +
										lineNumber +
										'.'
									);
								}

								return '';
							}
						}
						/**
						 * Warn if there's no key explicitly set on dynamic arrays of children or
						 * object keys are not valid. This allows us to keep track of children between
						 * updates.
						 */

						var ownerHasKeyUseWarning = {};

						function getCurrentComponentErrorInfo( parentType ) {
							{
								var info = getDeclarationErrorAddendum();

								if ( ! info ) {
									var parentName =
										typeof parentType === 'string'
											? parentType
											: parentType.displayName ||
											  parentType.name;

									if ( parentName ) {
										info =
											'\n\nCheck the top-level render call using <' +
											parentName +
											'>.';
									}
								}

								return info;
							}
						}
						/**
						 * Warn if the element doesn't have an explicit key assigned to it.
						 * This element is in an array. The array could grow and shrink or be
						 * reordered. All children that haven't already been validated are required to
						 * have a "key" property assigned to it. Error statuses are cached so a warning
						 * will only be shown once.
						 *
						 * @internal
						 * @param {ReactElement} element Element that requires a key.
						 * @param {*} parentType element's parent's type.
						 */

						function validateExplicitKey( element, parentType ) {
							{
								if (
									! element._store ||
									element._store.validated ||
									element.key != null
								) {
									return;
								}

								element._store.validated = true;
								var currentComponentErrorInfo =
									getCurrentComponentErrorInfo( parentType );

								if (
									ownerHasKeyUseWarning[
										currentComponentErrorInfo
									]
								) {
									return;
								}

								ownerHasKeyUseWarning[
									currentComponentErrorInfo
								] = true; // Usually the current owner is the offender, but if it accepts children as a
								// property, it may be the creator of the child that's responsible for
								// assigning it a key.

								var childOwner = '';

								if (
									element &&
									element._owner &&
									element._owner !==
										ReactCurrentOwner$1.current
								) {
									// Give the component that originally created this child.
									childOwner =
										' It was passed a child from ' +
										getComponentNameFromType(
											element._owner.type
										) +
										'.';
								}

								setCurrentlyValidatingElement$1( element );

								error(
									'Each child in a list should have a unique "key" prop.' +
										'%s%s See https://reactjs.org/link/warning-keys for more information.',
									currentComponentErrorInfo,
									childOwner
								);

								setCurrentlyValidatingElement$1( null );
							}
						}
						/**
						 * Ensure that every element either is passed in a static location, in an
						 * array with an explicit keys property defined, or in an object literal
						 * with valid key property.
						 *
						 * @internal
						 * @param {ReactNode} node Statically passed child of any type.
						 * @param {*} parentType node's parent's type.
						 */

						function validateChildKeys( node, parentType ) {
							{
								if ( typeof node !== 'object' ) {
									return;
								}

								if ( isArray( node ) ) {
									for ( var i = 0; i < node.length; i++ ) {
										var child = node[ i ];

										if ( isValidElement( child ) ) {
											validateExplicitKey(
												child,
												parentType
											);
										}
									}
								} else if ( isValidElement( node ) ) {
									// This element was passed in a valid location.
									if ( node._store ) {
										node._store.validated = true;
									}
								} else if ( node ) {
									var iteratorFn = getIteratorFn( node );

									if ( typeof iteratorFn === 'function' ) {
										// Entry iterators used to provide implicit keys,
										// but now we print a separate warning for them later.
										if ( iteratorFn !== node.entries ) {
											var iterator =
												iteratorFn.call( node );
											var step;

											while (
												! ( step = iterator.next() )
													.done
											) {
												if (
													isValidElement( step.value )
												) {
													validateExplicitKey(
														step.value,
														parentType
													);
												}
											}
										}
									}
								}
							}
						}
						/**
						 * Given an element, validate that its props follow the propTypes definition,
						 * provided by the type.
						 *
						 * @param {ReactElement} element
						 */

						function validatePropTypes( element ) {
							{
								var type = element.type;

								if (
									type === null ||
									type === undefined ||
									typeof type === 'string'
								) {
									return;
								}

								var propTypes;

								if ( typeof type === 'function' ) {
									propTypes = type.propTypes;
								} else if (
									typeof type === 'object' &&
									( type.$$typeof ===
										REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
										// Inner props are checked in the reconciler.
										type.$$typeof === REACT_MEMO_TYPE )
								) {
									propTypes = type.propTypes;
								} else {
									return;
								}

								if ( propTypes ) {
									// Intentionally inside to avoid triggering lazy initializers:
									var name = getComponentNameFromType( type );
									checkPropTypes(
										propTypes,
										element.props,
										'prop',
										name,
										element
									);
								} else if (
									type.PropTypes !== undefined &&
									! propTypesMisspellWarningShown
								) {
									propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

									var _name =
										getComponentNameFromType( type );

									error(
										'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
										_name || 'Unknown'
									);
								}

								if (
									typeof type.getDefaultProps ===
										'function' &&
									! type.getDefaultProps.isReactClassApproved
								) {
									error(
										'getDefaultProps is only used on classic React.createClass ' +
											'definitions. Use a static property named `defaultProps` instead.'
									);
								}
							}
						}
						/**
						 * Given a fragment, validate that it can only be provided with fragment props
						 * @param {ReactElement} fragment
						 */

						function validateFragmentProps( fragment ) {
							{
								var keys = Object.keys( fragment.props );

								for ( var i = 0; i < keys.length; i++ ) {
									var key = keys[ i ];

									if ( key !== 'children' && key !== 'key' ) {
										setCurrentlyValidatingElement$1(
											fragment
										);

										error(
											'Invalid prop `%s` supplied to `React.Fragment`. ' +
												'React.Fragment can only have `key` and `children` props.',
											key
										);

										setCurrentlyValidatingElement$1( null );
										break;
									}
								}

								if ( fragment.ref !== null ) {
									setCurrentlyValidatingElement$1( fragment );

									error(
										'Invalid attribute `ref` supplied to `React.Fragment`.'
									);

									setCurrentlyValidatingElement$1( null );
								}
							}
						}

						var didWarnAboutKeySpread = {};
						function jsxWithValidation(
							type,
							props,
							key,
							isStaticChildren,
							source,
							self
						) {
							{
								var validType = isValidElementType( type ); // We warn in this case but don't throw. We expect the element creation to
								// succeed and there will likely be errors in render.

								if ( ! validType ) {
									var info = '';

									if (
										type === undefined ||
										( typeof type === 'object' &&
											type !== null &&
											Object.keys( type ).length === 0 )
									) {
										info +=
											' You likely forgot to export your component from the file ' +
											"it's defined in, or you might have mixed up default and named imports.";
									}

									var sourceInfo =
										getSourceInfoErrorAddendum( source );

									if ( sourceInfo ) {
										info += sourceInfo;
									} else {
										info += getDeclarationErrorAddendum();
									}

									var typeString;

									if ( type === null ) {
										typeString = 'null';
									} else if ( isArray( type ) ) {
										typeString = 'array';
									} else if (
										type !== undefined &&
										type.$$typeof === REACT_ELEMENT_TYPE
									) {
										typeString =
											'<' +
											( getComponentNameFromType(
												type.type
											) || 'Unknown' ) +
											' />';
										info =
											' Did you accidentally export a JSX literal instead of a component?';
									} else {
										typeString = typeof type;
									}

									error(
										'React.jsx: type is invalid -- expected a string (for ' +
											'built-in components) or a class/function (for composite ' +
											'components) but got: %s.%s',
										typeString,
										info
									);
								}

								var element = jsxDEV(
									type,
									props,
									key,
									source,
									self
								); // The result can be nullish if a mock or a custom function is used.
								// TODO: Drop this when these are no longer allowed as the type argument.

								if ( element == null ) {
									return element;
								} // Skip key warning if the type isn't valid since our key validation logic
								// doesn't expect a non-string/function type and can throw confusing errors.
								// We don't want exception behavior to differ between dev and prod.
								// (Rendering will throw with a helpful message and as soon as the type is
								// fixed, the key warnings will appear.)

								if ( validType ) {
									var children = props.children;

									if ( children !== undefined ) {
										if ( isStaticChildren ) {
											if ( isArray( children ) ) {
												for (
													var i = 0;
													i < children.length;
													i++
												) {
													validateChildKeys(
														children[ i ],
														type
													);
												}

												if ( Object.freeze ) {
													Object.freeze( children );
												}
											} else {
												error(
													'React.jsx: Static children should always be an array. ' +
														'You are likely explicitly calling React.jsxs or React.jsxDEV. ' +
														'Use the Babel transform instead.'
												);
											}
										} else {
											validateChildKeys( children, type );
										}
									}
								}

								{
									if ( hasOwnProperty.call( props, 'key' ) ) {
										var componentName =
											getComponentNameFromType( type );
										var keys = Object.keys( props ).filter(
											function ( k ) {
												return k !== 'key';
											}
										);
										var beforeExample =
											keys.length > 0
												? '{key: someKey, ' +
												  keys.join( ': ..., ' ) +
												  ': ...}'
												: '{key: someKey}';

										if (
											! didWarnAboutKeySpread[
												componentName + beforeExample
											]
										) {
											var afterExample =
												keys.length > 0
													? '{' +
													  keys.join( ': ..., ' ) +
													  ': ...}'
													: '{}';

											error(
												'A props object containing a "key" prop is being spread into JSX:\n' +
													'  let props = %s;\n' +
													'  <%s {...props} />\n' +
													'React keys must be passed directly to JSX without using spread:\n' +
													'  let props = %s;\n' +
													'  <%s key={someKey} {...props} />',
												beforeExample,
												componentName,
												afterExample,
												componentName
											);

											didWarnAboutKeySpread[
												componentName + beforeExample
											] = true;
										}
									}
								}

								if ( type === REACT_FRAGMENT_TYPE ) {
									validateFragmentProps( element );
								} else {
									validatePropTypes( element );
								}

								return element;
							}
						} // These two functions exist to still get child warnings in dev
						// even with the prod transform. This means that jsxDEV is purely
						// opt-in behavior for better messages but that we won't stop
						// giving you warnings if you use production apis.

						function jsxWithValidationStatic( type, props, key ) {
							{
								return jsxWithValidation(
									type,
									props,
									key,
									true
								);
							}
						}
						function jsxWithValidationDynamic( type, props, key ) {
							{
								return jsxWithValidation(
									type,
									props,
									key,
									false
								);
							}
						}

						var jsx = jsxWithValidationDynamic; // we may want to special case jsxs internally to take advantage of static children.
						// for now we can ship identical prod functions

						var jsxs = jsxWithValidationStatic;

						exports.Fragment = REACT_FRAGMENT_TYPE;
						exports.jsx = jsx;
						exports.jsxs = jsxs;
					} )();
				}

				/***/
			},

		/***/ './node_modules/react/jsx-runtime.js':
			/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
			/***/ ( module, __unused_webpack_exports, __webpack_require__ ) => {
				if ( false ) {
				} else {
					module.exports = __webpack_require__(
						/*! ./cjs/react-jsx-runtime.development.js */ './node_modules/react/cjs/react-jsx-runtime.development.js'
					);
				}

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

		/***/ './node_modules/react-from-dom/dist/index.mjs':
			/*!****************************************************!*\
  !*** ./node_modules/react-from-dom/dist/index.mjs ***!
  \****************************************************/
			/***/ (
				__unused_webpack___webpack_module__,
				__webpack_exports__,
				__webpack_require__
			) => {
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ convertFromNode: () =>
							/* binding */ convertFromNode,
						/* harmony export */ convertFromString: () =>
							/* binding */ convertFromString,
						/* harmony export */ default: () =>
							/* binding */ convert,
						/* harmony export */
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__( /*! react */ 'react' );
				// src/index.ts

				// src/helpers.ts
				var styleToObject = ( input ) => {
					if ( typeof input !== 'string' ) {
						return {};
					}
					return input.split( / ?; ?/ ).reduce( ( acc, item ) => {
						const [ key, value ] = item
							.split( / ?: ?/ )
							.map( ( d, index ) =>
								index === 0 ? d.replace( /\s+/g, '' ) : d.trim()
							);
						if ( key && value ) {
							const nextKey = key.replace(
								/(\w)-(\w)/g,
								( _$0, $1, $2 ) =>
									`${ $1 }${ $2.toUpperCase() }`
							);
							let nextValue = value.trim();
							if ( ! Number.isNaN( Number( value ) ) ) {
								nextValue = Number( value );
							}
							acc[ key.startsWith( '-' ) ? key : nextKey ] =
								nextValue;
						}
						return acc;
					}, {} );
				};
				function randomString( length = 6 ) {
					const characters =
						'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
					let result = '';
					for ( let index = length; index > 0; --index ) {
						result +=
							characters[
								Math.round(
									Math.random() * ( characters.length - 1 )
								)
							];
					}
					return result;
				}
				var noTextChildNodes = [
					'br',
					'col',
					'colgroup',
					'dl',
					'hr',
					'iframe',
					'img',
					'input',
					'link',
					'menuitem',
					'meta',
					'ol',
					'param',
					'select',
					'table',
					'tbody',
					'tfoot',
					'thead',
					'tr',
					'ul',
					'wbr',
				];
				var possibleStandardNames = {
					// HTML
					'accept-charset': 'acceptCharset',
					acceptcharset: 'acceptCharset',
					accesskey: 'accessKey',
					allowfullscreen: 'allowFullScreen',
					autocapitalize: 'autoCapitalize',
					autocomplete: 'autoComplete',
					autocorrect: 'autoCorrect',
					autofocus: 'autoFocus',
					autoplay: 'autoPlay',
					autosave: 'autoSave',
					cellpadding: 'cellPadding',
					cellspacing: 'cellSpacing',
					charset: 'charSet',
					class: 'className',
					classid: 'classID',
					classname: 'className',
					colspan: 'colSpan',
					contenteditable: 'contentEditable',
					contextmenu: 'contextMenu',
					controlslist: 'controlsList',
					crossorigin: 'crossOrigin',
					dangerouslysetinnerhtml: 'dangerouslySetInnerHTML',
					datetime: 'dateTime',
					defaultchecked: 'defaultChecked',
					defaultvalue: 'defaultValue',
					enctype: 'encType',
					for: 'htmlFor',
					formmethod: 'formMethod',
					formaction: 'formAction',
					formenctype: 'formEncType',
					formnovalidate: 'formNoValidate',
					formtarget: 'formTarget',
					frameborder: 'frameBorder',
					hreflang: 'hrefLang',
					htmlfor: 'htmlFor',
					httpequiv: 'httpEquiv',
					'http-equiv': 'httpEquiv',
					icon: 'icon',
					innerhtml: 'innerHTML',
					inputmode: 'inputMode',
					itemid: 'itemID',
					itemprop: 'itemProp',
					itemref: 'itemRef',
					itemscope: 'itemScope',
					itemtype: 'itemType',
					keyparams: 'keyParams',
					keytype: 'keyType',
					marginwidth: 'marginWidth',
					marginheight: 'marginHeight',
					maxlength: 'maxLength',
					mediagroup: 'mediaGroup',
					minlength: 'minLength',
					nomodule: 'noModule',
					novalidate: 'noValidate',
					playsinline: 'playsInline',
					radiogroup: 'radioGroup',
					readonly: 'readOnly',
					referrerpolicy: 'referrerPolicy',
					rowspan: 'rowSpan',
					spellcheck: 'spellCheck',
					srcdoc: 'srcDoc',
					srclang: 'srcLang',
					srcset: 'srcSet',
					tabindex: 'tabIndex',
					typemustmatch: 'typeMustMatch',
					usemap: 'useMap',
					// SVG
					accentheight: 'accentHeight',
					'accent-height': 'accentHeight',
					alignmentbaseline: 'alignmentBaseline',
					'alignment-baseline': 'alignmentBaseline',
					allowreorder: 'allowReorder',
					arabicform: 'arabicForm',
					'arabic-form': 'arabicForm',
					attributename: 'attributeName',
					attributetype: 'attributeType',
					autoreverse: 'autoReverse',
					basefrequency: 'baseFrequency',
					baselineshift: 'baselineShift',
					'baseline-shift': 'baselineShift',
					baseprofile: 'baseProfile',
					calcmode: 'calcMode',
					capheight: 'capHeight',
					'cap-height': 'capHeight',
					clippath: 'clipPath',
					'clip-path': 'clipPath',
					clippathunits: 'clipPathUnits',
					cliprule: 'clipRule',
					'clip-rule': 'clipRule',
					colorinterpolation: 'colorInterpolation',
					'color-interpolation': 'colorInterpolation',
					colorinterpolationfilters: 'colorInterpolationFilters',
					'color-interpolation-filters': 'colorInterpolationFilters',
					colorprofile: 'colorProfile',
					'color-profile': 'colorProfile',
					colorrendering: 'colorRendering',
					'color-rendering': 'colorRendering',
					contentscripttype: 'contentScriptType',
					contentstyletype: 'contentStyleType',
					diffuseconstant: 'diffuseConstant',
					dominantbaseline: 'dominantBaseline',
					'dominant-baseline': 'dominantBaseline',
					edgemode: 'edgeMode',
					enablebackground: 'enableBackground',
					'enable-background': 'enableBackground',
					externalresourcesrequired: 'externalResourcesRequired',
					fillopacity: 'fillOpacity',
					'fill-opacity': 'fillOpacity',
					fillrule: 'fillRule',
					'fill-rule': 'fillRule',
					filterres: 'filterRes',
					filterunits: 'filterUnits',
					floodopacity: 'floodOpacity',
					'flood-opacity': 'floodOpacity',
					floodcolor: 'floodColor',
					'flood-color': 'floodColor',
					fontfamily: 'fontFamily',
					'font-family': 'fontFamily',
					fontsize: 'fontSize',
					'font-size': 'fontSize',
					fontsizeadjust: 'fontSizeAdjust',
					'font-size-adjust': 'fontSizeAdjust',
					fontstretch: 'fontStretch',
					'font-stretch': 'fontStretch',
					fontstyle: 'fontStyle',
					'font-style': 'fontStyle',
					fontvariant: 'fontVariant',
					'font-variant': 'fontVariant',
					fontweight: 'fontWeight',
					'font-weight': 'fontWeight',
					glyphname: 'glyphName',
					'glyph-name': 'glyphName',
					glyphorientationhorizontal: 'glyphOrientationHorizontal',
					'glyph-orientation-horizontal':
						'glyphOrientationHorizontal',
					glyphorientationvertical: 'glyphOrientationVertical',
					'glyph-orientation-vertical': 'glyphOrientationVertical',
					glyphref: 'glyphRef',
					gradienttransform: 'gradientTransform',
					gradientunits: 'gradientUnits',
					horizadvx: 'horizAdvX',
					'horiz-adv-x': 'horizAdvX',
					horizoriginx: 'horizOriginX',
					'horiz-origin-x': 'horizOriginX',
					imagerendering: 'imageRendering',
					'image-rendering': 'imageRendering',
					kernelmatrix: 'kernelMatrix',
					kernelunitlength: 'kernelUnitLength',
					keypoints: 'keyPoints',
					keysplines: 'keySplines',
					keytimes: 'keyTimes',
					lengthadjust: 'lengthAdjust',
					letterspacing: 'letterSpacing',
					'letter-spacing': 'letterSpacing',
					lightingcolor: 'lightingColor',
					'lighting-color': 'lightingColor',
					limitingconeangle: 'limitingConeAngle',
					markerend: 'markerEnd',
					'marker-end': 'markerEnd',
					markerheight: 'markerHeight',
					markermid: 'markerMid',
					'marker-mid': 'markerMid',
					markerstart: 'markerStart',
					'marker-start': 'markerStart',
					markerunits: 'markerUnits',
					markerwidth: 'markerWidth',
					maskcontentunits: 'maskContentUnits',
					maskunits: 'maskUnits',
					numoctaves: 'numOctaves',
					overlineposition: 'overlinePosition',
					'overline-position': 'overlinePosition',
					overlinethickness: 'overlineThickness',
					'overline-thickness': 'overlineThickness',
					paintorder: 'paintOrder',
					'paint-order': 'paintOrder',
					'panose-1': 'panose1',
					pathlength: 'pathLength',
					patterncontentunits: 'patternContentUnits',
					patterntransform: 'patternTransform',
					patternunits: 'patternUnits',
					pointerevents: 'pointerEvents',
					'pointer-events': 'pointerEvents',
					pointsatx: 'pointsAtX',
					pointsaty: 'pointsAtY',
					pointsatz: 'pointsAtZ',
					preservealpha: 'preserveAlpha',
					preserveaspectratio: 'preserveAspectRatio',
					primitiveunits: 'primitiveUnits',
					refx: 'refX',
					refy: 'refY',
					renderingintent: 'renderingIntent',
					'rendering-intent': 'renderingIntent',
					repeatcount: 'repeatCount',
					repeatdur: 'repeatDur',
					requiredextensions: 'requiredExtensions',
					requiredfeatures: 'requiredFeatures',
					shaperendering: 'shapeRendering',
					'shape-rendering': 'shapeRendering',
					specularconstant: 'specularConstant',
					specularexponent: 'specularExponent',
					spreadmethod: 'spreadMethod',
					startoffset: 'startOffset',
					stddeviation: 'stdDeviation',
					stitchtiles: 'stitchTiles',
					stopcolor: 'stopColor',
					'stop-color': 'stopColor',
					stopopacity: 'stopOpacity',
					'stop-opacity': 'stopOpacity',
					strikethroughposition: 'strikethroughPosition',
					'strikethrough-position': 'strikethroughPosition',
					strikethroughthickness: 'strikethroughThickness',
					'strikethrough-thickness': 'strikethroughThickness',
					strokedasharray: 'strokeDasharray',
					'stroke-dasharray': 'strokeDasharray',
					strokedashoffset: 'strokeDashoffset',
					'stroke-dashoffset': 'strokeDashoffset',
					strokelinecap: 'strokeLinecap',
					'stroke-linecap': 'strokeLinecap',
					strokelinejoin: 'strokeLinejoin',
					'stroke-linejoin': 'strokeLinejoin',
					strokemiterlimit: 'strokeMiterlimit',
					'stroke-miterlimit': 'strokeMiterlimit',
					strokewidth: 'strokeWidth',
					'stroke-width': 'strokeWidth',
					strokeopacity: 'strokeOpacity',
					'stroke-opacity': 'strokeOpacity',
					suppresscontenteditablewarning:
						'suppressContentEditableWarning',
					suppresshydrationwarning: 'suppressHydrationWarning',
					surfacescale: 'surfaceScale',
					systemlanguage: 'systemLanguage',
					tablevalues: 'tableValues',
					targetx: 'targetX',
					targety: 'targetY',
					textanchor: 'textAnchor',
					'text-anchor': 'textAnchor',
					textdecoration: 'textDecoration',
					'text-decoration': 'textDecoration',
					textlength: 'textLength',
					textrendering: 'textRendering',
					'text-rendering': 'textRendering',
					underlineposition: 'underlinePosition',
					'underline-position': 'underlinePosition',
					underlinethickness: 'underlineThickness',
					'underline-thickness': 'underlineThickness',
					unicodebidi: 'unicodeBidi',
					'unicode-bidi': 'unicodeBidi',
					unicoderange: 'unicodeRange',
					'unicode-range': 'unicodeRange',
					unitsperem: 'unitsPerEm',
					'units-per-em': 'unitsPerEm',
					unselectable: 'unselectable',
					valphabetic: 'vAlphabetic',
					'v-alphabetic': 'vAlphabetic',
					vectoreffect: 'vectorEffect',
					'vector-effect': 'vectorEffect',
					vertadvy: 'vertAdvY',
					'vert-adv-y': 'vertAdvY',
					vertoriginx: 'vertOriginX',
					'vert-origin-x': 'vertOriginX',
					vertoriginy: 'vertOriginY',
					'vert-origin-y': 'vertOriginY',
					vhanging: 'vHanging',
					'v-hanging': 'vHanging',
					videographic: 'vIdeographic',
					'v-ideographic': 'vIdeographic',
					viewbox: 'viewBox',
					viewtarget: 'viewTarget',
					vmathematical: 'vMathematical',
					'v-mathematical': 'vMathematical',
					wordspacing: 'wordSpacing',
					'word-spacing': 'wordSpacing',
					writingmode: 'writingMode',
					'writing-mode': 'writingMode',
					xchannelselector: 'xChannelSelector',
					xheight: 'xHeight',
					'x-height': 'xHeight',
					xlinkactuate: 'xlinkActuate',
					'xlink:actuate': 'xlinkActuate',
					xlinkarcrole: 'xlinkArcrole',
					'xlink:arcrole': 'xlinkArcrole',
					xlinkhref: 'xlinkHref',
					'xlink:href': 'xlinkHref',
					xlinkrole: 'xlinkRole',
					'xlink:role': 'xlinkRole',
					xlinkshow: 'xlinkShow',
					'xlink:show': 'xlinkShow',
					xlinktitle: 'xlinkTitle',
					'xlink:title': 'xlinkTitle',
					xlinktype: 'xlinkType',
					'xlink:type': 'xlinkType',
					xmlbase: 'xmlBase',
					'xml:base': 'xmlBase',
					xmllang: 'xmlLang',
					'xml:lang': 'xmlLang',
					'xml:space': 'xmlSpace',
					xmlnsxlink: 'xmlnsXlink',
					'xmlns:xlink': 'xmlnsXlink',
					xmlspace: 'xmlSpace',
					ychannelselector: 'yChannelSelector',
					zoomandpan: 'zoomAndPan',
					// event handlers
					onblur: 'onBlur',
					onchange: 'onChange',
					onclick: 'onClick',
					oncontextmenu: 'onContextMenu',
					ondoubleclick: 'onDoubleClick',
					ondrag: 'onDrag',
					ondragend: 'onDragEnd',
					ondragenter: 'onDragEnter',
					ondragexit: 'onDragExit',
					ondragleave: 'onDragLeave',
					ondragover: 'onDragOver',
					ondragstart: 'onDragStart',
					ondrop: 'onDrop',
					onerror: 'onError',
					onfocus: 'onFocus',
					oninput: 'onInput',
					oninvalid: 'onInvalid',
					onkeydown: 'onKeyDown',
					onkeypress: 'onKeyPress',
					onkeyup: 'onKeyUp',
					onload: 'onLoad',
					onmousedown: 'onMouseDown',
					onmouseenter: 'onMouseEnter',
					onmouseleave: 'onMouseLeave',
					onmousemove: 'onMouseMove',
					onmouseout: 'onMouseOut',
					onmouseover: 'onMouseOver',
					onmouseup: 'onMouseUp',
					onscroll: 'onScroll',
					onsubmit: 'onSubmit',
					ontouchcancel: 'onTouchCancel',
					ontouchend: 'onTouchEnd',
					ontouchmove: 'onTouchMove',
					ontouchstart: 'onTouchStart',
					onwheel: 'onWheel',
				};

				// src/index.ts
				function getReactNode( node, options ) {
					const { key, level, ...rest } = options;
					switch ( node.nodeType ) {
						case 1: {
							return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
								parseName( node.nodeName ),
								parseAttributes( node, key ),
								parseChildren( node.childNodes, level, rest )
							);
						}
						case 3: {
							const nodeText = node.nodeValue?.toString() ?? '';
							if (
								! rest.allowWhiteSpaces &&
								/^\s+$/.test( nodeText ) &&
								! /[\u00A0\u202F]/.test( nodeText )
							) {
								return null;
							}
							if ( ! node.parentNode ) {
								return nodeText;
							}
							const parentNodeName =
								node.parentNode.nodeName.toLowerCase();
							if ( noTextChildNodes.includes( parentNodeName ) ) {
								if ( /\S/.test( nodeText ) ) {
									console.warn(
										`A textNode is not allowed inside '${ parentNodeName }'. Your text "${ nodeText }" will be ignored`
									);
								}
								return null;
							}
							return nodeText;
						}
						case 8: {
							return null;
						}
						case 11: {
							return parseChildren(
								node.childNodes,
								level,
								options
							);
						}
						default: {
							return null;
						}
					}
				}
				function parseAttributes( node, reactKey ) {
					const attributes = {
						key: reactKey,
					};
					if ( node instanceof Element ) {
						const nodeClassNames = node.getAttribute( 'class' );
						if ( nodeClassNames ) {
							attributes.className = nodeClassNames;
						}
						[ ...node.attributes ].forEach( ( d ) => {
							switch ( d.name ) {
								case 'class':
									break;
								case 'style':
									attributes[ d.name ] = styleToObject(
										d.value
									);
									break;
								case 'allowfullscreen':
								case 'allowpaymentrequest':
								case 'async':
								case 'autofocus':
								case 'autoplay':
								case 'checked':
								case 'controls':
								case 'default':
								case 'defer':
								case 'disabled':
								case 'formnovalidate':
								case 'hidden':
								case 'ismap':
								case 'itemscope':
								case 'loop':
								case 'multiple':
								case 'muted':
								case 'nomodule':
								case 'novalidate':
								case 'open':
								case 'readonly':
								case 'required':
								case 'reversed':
								case 'selected':
								case 'typemustmatch':
									attributes[
										possibleStandardNames[ d.name ] ||
											d.name
									] = true;
									break;
								default:
									attributes[
										possibleStandardNames[ d.name ] ||
											d.name
									] = d.value;
							}
						} );
					}
					return attributes;
				}
				function parseChildren( childNodeList, level, options ) {
					const children = [ ...childNodeList ]
						.map( ( node, index ) =>
							convertFromNode( node, {
								...options,
								index,
								level: level + 1,
							} )
						)
						.filter( Boolean );
					if ( ! children.length ) {
						return null;
					}
					return children;
				}
				function parseName( nodeName ) {
					if ( /[a-z]+[A-Z]+[a-z]+/.test( nodeName ) ) {
						return nodeName;
					}
					return nodeName.toLowerCase();
				}
				function convertFromNode( input, options = {} ) {
					if ( ! input || ! ( input instanceof Node ) ) {
						return null;
					}
					const {
						actions = [],
						index = 0,
						level = 0,
						randomKey,
					} = options;
					let node = input;
					let key = `${ level }-${ index }`;
					const result = [];
					if ( randomKey && level === 0 ) {
						key = `${ randomString() }-${ key }`;
					}
					if ( Array.isArray( actions ) ) {
						actions.forEach( ( action ) => {
							if ( action.condition( node, key, level ) ) {
								if ( typeof action.pre === 'function' ) {
									node = action.pre( node, key, level );
									if ( ! ( node instanceof Node ) ) {
										node = input;
										if ( true ) {
											console.warn(
												'The `pre` method always must return a valid DomNode (instanceof Node) - your modification will be ignored (Hint: if you want to render a React-component, use the `post` method instead)'
											);
										}
									}
								}
								if ( typeof action.post === 'function' ) {
									result.push(
										action.post( node, key, level )
									);
								}
							}
						} );
					}
					if ( result.length ) {
						return result;
					}
					return getReactNode( node, { key, level, ...options } );
				}
				function convertFromString( input, options = {} ) {
					if ( ! input || typeof input !== 'string' ) {
						return null;
					}
					const {
						includeAllNodes = false,
						nodeOnly = false,
						selector = 'body > *',
						type = 'text/html',
					} = options;
					try {
						const parser = new DOMParser();
						const document = parser.parseFromString( input, type );
						if ( includeAllNodes ) {
							const { childNodes } = document.body;
							if ( nodeOnly ) {
								return childNodes;
							}
							return [ ...childNodes ].map( ( node2 ) =>
								convertFromNode( node2, options )
							);
						}
						const node =
							document.querySelector( selector ) ||
							document.body.childNodes[ 0 ];
						if ( ! ( node instanceof Node ) ) {
							throw new TypeError( 'Error parsing input' );
						}
						if ( nodeOnly ) {
							return node;
						}
						return convertFromNode( node, options );
					} catch ( error ) {
						if ( true ) {
							console.error( error );
						}
					}
					return null;
				}
				function convert( input, options = {} ) {
					if ( typeof input === 'string' ) {
						return convertFromString( input, options );
					}
					if ( input instanceof Node ) {
						return convertFromNode( input, options );
					}
					return null;
				}

				//# sourceMappingURL=index.mjs.map

				/***/
			},

		/***/ './node_modules/react-inlinesvg/dist/index.mjs':
			/*!*****************************************************!*\
  !*** ./node_modules/react-inlinesvg/dist/index.mjs ***!
  \*****************************************************/
			/***/ (
				__unused_webpack___webpack_module__,
				__webpack_exports__,
				__webpack_require__
			) => {
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ cacheStore: () =>
							/* binding */ cacheStore,
						/* harmony export */ default: () =>
							/* binding */ InlineSVG,
						/* harmony export */
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__( /*! react */ 'react' );
				/* harmony import */ var react_from_dom__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! react-from-dom */ './node_modules/react-from-dom/dist/index.mjs'
					);
				/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! react/jsx-runtime */ './node_modules/react/jsx-runtime.js'
					);
				( 'use client' );
				var __defProp = Object.defineProperty;
				var __defNormalProp = ( obj, key, value ) =>
					key in obj
						? __defProp( obj, key, {
								enumerable: true,
								configurable: true,
								writable: true,
								value,
						  } )
						: ( obj[ key ] = value );
				var __publicField = ( obj, key, value ) => {
					__defNormalProp(
						obj,
						typeof key !== 'symbol' ? key + '' : key,
						value
					);
					return value;
				};

				// src/index.tsx

				// src/config.ts
				var CACHE_NAME = 'react-inlinesvg';
				var CACHE_MAX_RETRIES = 10;
				var STATUS = {
					IDLE: 'idle',
					LOADING: 'loading',
					LOADED: 'loaded',
					FAILED: 'failed',
					READY: 'ready',
					UNSUPPORTED: 'unsupported',
				};

				// src/modules/helpers.ts
				function canUseDOM() {
					return !! (
						typeof window !== 'undefined' &&
						window.document &&
						window.document.createElement
					);
				}
				function isSupportedEnvironment() {
					return (
						supportsInlineSVG() &&
						typeof window !== 'undefined' &&
						window !== null
					);
				}
				async function request( url, options ) {
					const response = await fetch( url, options );
					const contentType = response.headers.get( 'content-type' );
					const [ fileType ] = ( contentType ?? '' ).split( / ?; ?/ );
					if ( response.status > 299 ) {
						throw new Error( 'Not found' );
					}
					if (
						! [ 'image/svg+xml', 'text/plain' ].some( ( d ) =>
							fileType.includes( d )
						)
					) {
						throw new Error(
							`Content type isn't valid: ${ fileType }`
						);
					}
					return response.text();
				}
				function sleep( seconds = 1 ) {
					return new Promise( ( resolve ) => {
						setTimeout( resolve, seconds * 1e3 );
					} );
				}
				function supportsInlineSVG() {
					if ( ! document ) {
						return false;
					}
					const div = document.createElement( 'div' );
					div.innerHTML = '<svg />';
					const svg = div.firstChild;
					return (
						!! svg &&
						svg.namespaceURI === 'http://www.w3.org/2000/svg'
					);
				}
				function randomCharacter( character ) {
					return character[
						Math.floor( Math.random() * character.length )
					];
				}
				function randomString( length ) {
					const letters = 'abcdefghijklmnopqrstuvwxyz';
					const numbers = '1234567890';
					const charset = `${ letters }${ letters.toUpperCase() }${ numbers }`;
					let R = '';
					for ( let index = 0; index < length; index++ ) {
						R += randomCharacter( charset );
					}
					return R;
				}
				function omit( input, ...filter ) {
					const output = {};
					for ( const key in input ) {
						if ( {}.hasOwnProperty.call( input, key ) ) {
							if ( ! filter.includes( key ) ) {
								output[ key ] = input[ key ];
							}
						}
					}
					return output;
				}

				// src/modules/cache.ts
				var CacheStore = class {
					constructor() {
						__publicField( this, 'cacheApi' );
						__publicField( this, 'cacheStore' );
						__publicField( this, 'subscribers', [] );
						__publicField( this, 'isReady', false );
						this.cacheStore = /* @__PURE__ */ new Map();
						let cacheName = CACHE_NAME;
						let usePersistentCache = false;
						if ( canUseDOM() ) {
							cacheName =
								window.REACT_INLINESVG_CACHE_NAME ?? CACHE_NAME;
							usePersistentCache =
								!! window.REACT_INLINESVG_PERSISTENT_CACHE &&
								'caches' in window;
						}
						if ( usePersistentCache ) {
							caches
								.open( cacheName )
								.then( ( cache ) => {
									this.cacheApi = cache;
									this.isReady = true;
									this.subscribers.forEach( ( callback ) =>
										callback()
									);
								} )
								.catch( ( error ) => {
									this.isReady = true;
									console.error(
										`Failed to open cache: ${ error.message }`
									);
								} );
						} else {
							this.isReady = true;
						}
					}
					onReady( callback ) {
						if ( this.isReady ) {
							callback();
						} else {
							this.subscribers.push( callback );
						}
					}
					async get( url, fetchOptions ) {
						await ( this.cacheApi
							? this.fetchAndAddToPersistentCache(
									url,
									fetchOptions
							  )
							: this.fetchAndAddToInternalCache(
									url,
									fetchOptions
							  ) );
						return this.cacheStore.get( url )?.content ?? '';
					}
					set( url, data ) {
						this.cacheStore.set( url, data );
					}
					isCached( url ) {
						return (
							this.cacheStore.get( url )?.status === STATUS.LOADED
						);
					}
					async fetchAndAddToInternalCache( url, fetchOptions ) {
						const cache = this.cacheStore.get( url );
						if ( cache?.status === STATUS.LOADING ) {
							await this.handleLoading( url, async () => {
								this.cacheStore.set( url, {
									content: '',
									status: STATUS.IDLE,
								} );
								await this.fetchAndAddToInternalCache(
									url,
									fetchOptions
								);
							} );
							return;
						}
						if ( ! cache?.content ) {
							this.cacheStore.set( url, {
								content: '',
								status: STATUS.LOADING,
							} );
							try {
								const content = await request(
									url,
									fetchOptions
								);
								this.cacheStore.set( url, {
									content,
									status: STATUS.LOADED,
								} );
							} catch ( error ) {
								this.cacheStore.set( url, {
									content: '',
									status: STATUS.FAILED,
								} );
								throw error;
							}
						}
					}
					async fetchAndAddToPersistentCache( url, fetchOptions ) {
						const cache = this.cacheStore.get( url );
						if ( cache?.status === STATUS.LOADED ) {
							return;
						}
						if ( cache?.status === STATUS.LOADING ) {
							await this.handleLoading( url, async () => {
								this.cacheStore.set( url, {
									content: '',
									status: STATUS.IDLE,
								} );
								await this.fetchAndAddToPersistentCache(
									url,
									fetchOptions
								);
							} );
							return;
						}
						this.cacheStore.set( url, {
							content: '',
							status: STATUS.LOADING,
						} );
						const data = await this.cacheApi?.match( url );
						if ( data ) {
							const content = await data.text();
							this.cacheStore.set( url, {
								content,
								status: STATUS.LOADED,
							} );
							return;
						}
						try {
							await this.cacheApi?.add(
								new Request( url, fetchOptions )
							);
							const response = await this.cacheApi?.match( url );
							const content = ( await response?.text() ) ?? '';
							this.cacheStore.set( url, {
								content,
								status: STATUS.LOADED,
							} );
						} catch ( error ) {
							this.cacheStore.set( url, {
								content: '',
								status: STATUS.FAILED,
							} );
							throw error;
						}
					}
					async handleLoading( url, callback ) {
						let retryCount = 0;
						while (
							this.cacheStore.get( url )?.status ===
								STATUS.LOADING &&
							retryCount < CACHE_MAX_RETRIES
						) {
							await sleep( 0.1 );
							retryCount += 1;
						}
						if ( retryCount >= CACHE_MAX_RETRIES ) {
							await callback();
						}
					}
					keys() {
						return [ ...this.cacheStore.keys() ];
					}
					data() {
						return [ ...this.cacheStore.entries() ].map(
							( [ key, value ] ) => ( { [ key ]: value } )
						);
					}
					async delete( url ) {
						if ( this.cacheApi ) {
							await this.cacheApi.delete( url );
						}
						this.cacheStore.delete( url );
					}
					async clear() {
						if ( this.cacheApi ) {
							const keys = await this.cacheApi.keys();
							for ( const key of keys ) {
								await this.cacheApi.delete( key );
							}
						}
						this.cacheStore.clear();
					}
				};

				// src/modules/hooks.tsx

				function usePrevious( state ) {
					const ref = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )();
					( 0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect )( () => {
						ref.current = state;
					} );
					return ref.current;
				}

				// src/modules/utils.ts

				function getNode( options ) {
					const {
						baseURL,
						content,
						description,
						handleError,
						hash,
						preProcessor,
						title,
						uniquifyIDs = false,
					} = options;
					try {
						const svgText = processSVG( content, preProcessor );
						const node = ( 0,
						react_from_dom__WEBPACK_IMPORTED_MODULE_1__[
							'default'
						] )( svgText, { nodeOnly: true } );
						if ( ! node || ! ( node instanceof SVGSVGElement ) ) {
							throw new Error(
								'Could not convert the src to a DOM Node'
							);
						}
						const svg = updateSVGAttributes( node, {
							baseURL,
							hash,
							uniquifyIDs,
						} );
						if ( description ) {
							const originalDesc = svg.querySelector( 'desc' );
							if ( originalDesc?.parentNode ) {
								originalDesc.parentNode.removeChild(
									originalDesc
								);
							}
							const descElement = document.createElementNS(
								'http://www.w3.org/2000/svg',
								'desc'
							);
							descElement.innerHTML = description;
							svg.prepend( descElement );
						}
						if ( typeof title !== 'undefined' ) {
							const originalTitle = svg.querySelector( 'title' );
							if ( originalTitle?.parentNode ) {
								originalTitle.parentNode.removeChild(
									originalTitle
								);
							}
							if ( title ) {
								const titleElement = document.createElementNS(
									'http://www.w3.org/2000/svg',
									'title'
								);
								titleElement.innerHTML = title;
								svg.prepend( titleElement );
							}
						}
						return svg;
					} catch ( error ) {
						return handleError( error );
					}
				}
				function processSVG( content, preProcessor ) {
					if ( preProcessor ) {
						return preProcessor( content );
					}
					return content;
				}
				function updateSVGAttributes( node, options ) {
					const { baseURL = '', hash, uniquifyIDs } = options;
					const replaceableAttributes = [
						'id',
						'href',
						'xlink:href',
						'xlink:role',
						'xlink:arcrole',
					];
					const linkAttributes = [ 'href', 'xlink:href' ];
					const isDataValue = ( name, value ) =>
						linkAttributes.includes( name ) &&
						( value ? ! value.includes( '#' ) : false );
					if ( ! uniquifyIDs ) {
						return node;
					}
					[ ...node.children ].forEach( ( d ) => {
						if ( d.attributes?.length ) {
							const attributes = Object.values(
								d.attributes
							).map( ( a ) => {
								const attribute = a;
								const match = /url\((.*?)\)/.exec( a.value );
								if ( match?.[ 1 ] ) {
									attribute.value = a.value.replace(
										match[ 0 ],
										`url(${ baseURL }${ match[ 1 ] }__${ hash })`
									);
								}
								return attribute;
							} );
							replaceableAttributes.forEach( ( r ) => {
								const attribute = attributes.find(
									( a ) => a.name === r
								);
								if (
									attribute &&
									! isDataValue( r, attribute.value )
								) {
									attribute.value = `${ attribute.value }__${ hash }`;
								}
							} );
						}
						if ( d.children.length ) {
							return updateSVGAttributes( d, options );
						}
						return d;
					} );
					return node;
				}

				// src/index.tsx

				var cacheStore;
				function ReactInlineSVG( props ) {
					const {
						cacheRequests = true,
						children = null,
						description,
						fetchOptions,
						innerRef,
						loader = null,
						onError,
						onLoad,
						src,
						title,
						uniqueHash,
					} = props;
					const [ state, setState ] = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useReducer )(
						( previousState2, nextState ) => ( {
							...previousState2,
							...nextState,
						} ),
						{
							content: '',
							element: null,
							isCached:
								cacheRequests &&
								cacheStore.isCached( props.src ),
							status: STATUS.IDLE,
						}
					);
					const { content, element, isCached, status } = state;
					const previousProps = usePrevious( props );
					const previousState = usePrevious( state );
					const hash = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )(
						uniqueHash ?? randomString( 8 )
					);
					const isActive = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )( false );
					const isInitialized = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )( false );
					const handleError = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useCallback )(
						( error ) => {
							if ( isActive.current ) {
								setState( {
									status:
										error.message ===
										'Browser does not support SVG'
											? STATUS.UNSUPPORTED
											: STATUS.FAILED,
								} );
								onError?.( error );
							}
						},
						[ onError ]
					);
					const handleLoad = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useCallback )(
						( loadedContent, hasCache = false ) => {
							if ( isActive.current ) {
								setState( {
									content: loadedContent,
									isCached: hasCache,
									status: STATUS.LOADED,
								} );
							}
						},
						[]
					);
					const fetchContent = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useCallback )( async () => {
						const responseContent = await request(
							src,
							fetchOptions
						);
						handleLoad( responseContent );
					}, [ fetchOptions, handleLoad, src ] );
					const getElement = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useCallback )( () => {
						try {
							const node = getNode( {
								...props,
								handleError,
								hash: hash.current,
								content,
							} );
							const convertedElement = ( 0,
							react_from_dom__WEBPACK_IMPORTED_MODULE_1__[
								'default'
							] )( node );
							if (
								! convertedElement ||
								! ( 0,
								react__WEBPACK_IMPORTED_MODULE_0__.isValidElement )(
									convertedElement
								)
							) {
								throw new Error(
									'Could not convert the src to a React element'
								);
							}
							setState( {
								element: convertedElement,
								status: STATUS.READY,
							} );
						} catch ( error ) {
							handleError( new Error( error.message ) );
						}
					}, [ content, handleError, props ] );
					const getContent = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useCallback )( async () => {
						const dataURI =
							/^data:image\/svg[^,]*?(;base64)?,(.*)/u.exec(
								src
							);
						let inlineSrc;
						if ( dataURI ) {
							inlineSrc = dataURI[ 1 ]
								? window.atob( dataURI[ 2 ] )
								: decodeURIComponent( dataURI[ 2 ] );
						} else if ( src.includes( '<svg' ) ) {
							inlineSrc = src;
						}
						if ( inlineSrc ) {
							handleLoad( inlineSrc );
							return;
						}
						try {
							if ( cacheRequests ) {
								const cachedContent = await cacheStore.get(
									src,
									fetchOptions
								);
								handleLoad( cachedContent, true );
							} else {
								await fetchContent();
							}
						} catch ( error ) {
							handleError( error );
						}
					}, [
						cacheRequests,
						fetchContent,
						fetchOptions,
						handleError,
						handleLoad,
						src,
					] );
					const load = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useCallback )( async () => {
						if ( isActive.current ) {
							setState( {
								content: '',
								element: null,
								isCached: false,
								status: STATUS.LOADING,
							} );
						}
					}, [] );
					( 0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect )(
						() => {
							isActive.current = true;
							if ( ! canUseDOM() || isInitialized.current ) {
								return () => void 0;
							}
							try {
								if ( status === STATUS.IDLE ) {
									if ( ! isSupportedEnvironment() ) {
										throw new Error(
											'Browser does not support SVG'
										);
									}
									if ( ! src ) {
										throw new Error( 'Missing src' );
									}
									load();
								}
							} catch ( error ) {
								handleError( error );
							}
							isInitialized.current = true;
							return () => {
								isActive.current = false;
							};
						},
						// eslint-disable-next-line react-hooks/exhaustive-deps
						[]
					);
					( 0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect )( () => {
						if ( ! canUseDOM() ) {
							return;
						}
						if ( ! previousProps ) {
							return;
						}
						if ( previousProps.src !== src ) {
							if ( ! src ) {
								handleError( new Error( 'Missing src' ) );
								return;
							}
							load();
						} else if (
							previousProps.title !== title ||
							previousProps.description !== description
						) {
							getElement();
						}
					}, [
						description,
						getElement,
						handleError,
						load,
						previousProps,
						src,
						title,
					] );
					( 0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect )( () => {
						if ( ! previousState ) {
							return;
						}
						if (
							previousState.status !== STATUS.LOADING &&
							status === STATUS.LOADING
						) {
							getContent();
						}
						if (
							previousState.status !== STATUS.LOADED &&
							status === STATUS.LOADED
						) {
							getElement();
						}
						if (
							previousState.status !== STATUS.READY &&
							status === STATUS.READY
						) {
							onLoad?.( src, isCached );
						}
					}, [
						getContent,
						getElement,
						isCached,
						onLoad,
						previousState,
						src,
						status,
					] );
					const elementProps = omit(
						props,
						'baseURL',
						'cacheRequests',
						'children',
						'description',
						'fetchOptions',
						'innerRef',
						'loader',
						'onError',
						'onLoad',
						'preProcessor',
						'src',
						'title',
						'uniqueHash',
						'uniquifyIDs'
					);
					if ( ! canUseDOM() ) {
						return loader;
					}
					if ( element ) {
						return ( 0,
						react__WEBPACK_IMPORTED_MODULE_0__.cloneElement )(
							element,
							{ ref: innerRef, ...elementProps }
						);
					}
					if (
						[ STATUS.UNSUPPORTED, STATUS.FAILED ].includes( status )
					) {
						return children;
					}
					return loader;
				}
				function InlineSVG( props ) {
					if ( ! cacheStore ) {
						cacheStore = new CacheStore();
					}
					const { loader } = props;
					const hasCallback = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )( false );
					const [ isReady, setReady ] = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useState )(
						cacheStore.isReady
					);
					( 0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect )( () => {
						if ( ! hasCallback.current ) {
							cacheStore.onReady( () => {
								setReady( true );
							} );
							hasCallback.current = true;
						}
					}, [] );
					if ( ! isReady ) {
						return loader;
					}
					return /* @__PURE__ */ ( 0,
					react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx )(
						ReactInlineSVG,
						{ ...props }
					);
				}

				//# sourceMappingURL=index.mjs.map

				/***/
			},

		/***/ './resources/blocks/phone-number/block.json':
			/*!**************************************************!*\
  !*** ./resources/blocks/phone-number/block.json ***!
  \**************************************************/
			/***/ ( module ) => {
				module.exports = /*#__PURE__*/ JSON.parse(
					'{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"formgent/phone-number","title":"Phone Number","category":"formgent","description":"FormGent Phone Number field.","textdomain":"formgent","attributes":{"id":{"type":"string","default":""},"name":{"type":"string","default":"phone-number"},"value":{"type":"string","default":""},"placeholder":{"type":"string","default":""},"label":{"type":"string","default":"Phone Number"},"label_alignment":{"type":"string","default":"top"},"sub_label":{"type":"string","default":""},"required":{"type":"boolean","default":false},"country_code":{"type":"boolean","default":false},"country_auto_detection":{"type":"boolean","default":false}},"supports":{"interactivity":true},"editorScript":"file:index.js","style":"file:style-index.css","editorStyle":"file:index.css","render":"file:render.php"}'
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
			/******/ 'phone-number/index': 0,
			/******/ 'phone-number/style-index': 0,
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
		[ 'phone-number/style-index' ],
		() => __webpack_require__( './resources/blocks/phone-number/index.js' )
	);
	/******/ __webpack_exports__ = __webpack_require__.O( __webpack_exports__ );
	/******/
	/******/
} )();
//# sourceMappingURL=index.js.map
