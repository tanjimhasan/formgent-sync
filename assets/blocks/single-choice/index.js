/******/ ( () => {
	// webpackBootstrap
	/******/ var __webpack_modules__ = {
		/***/ './node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js':
			/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js ***!
  \*******************************************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ isPropValid,
						/* harmony export */
					}
				);
				/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! @emotion/memoize */ './node_modules/@emotion/is-prop-valid/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js'
					);

				var reactPropsRegex =
					/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

				var isPropValid = /* #__PURE__ */ ( 0,
				_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__[ 'default' ] )(
					function ( prop ) {
						return (
							reactPropsRegex.test( prop ) ||
							( prop.charCodeAt( 0 ) === 111 &&
								/* o */
								prop.charCodeAt( 1 ) === 110 &&
								/* n */
								prop.charCodeAt( 2 ) < 91 )
						);
					}
					/* Z+1 */
				);

				/***/
			},

		/***/ './node_modules/@emotion/is-prop-valid/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js':
			/*!*******************************************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/node_modules/@emotion/memoize/dist/emotion-memoize.esm.js ***!
  \*******************************************************************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ memoize,
						/* harmony export */
					}
				);
				function memoize( fn ) {
					var cache = Object.create( null );
					return function ( arg ) {
						if ( cache[ arg ] === undefined )
							cache[ arg ] = fn( arg );
						return cache[ arg ];
					};
				}

				/***/
			},

		/***/ './node_modules/@emotion/unitless/dist/emotion-unitless.esm.js':
			/*!*********************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/emotion-unitless.esm.js ***!
  \*********************************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ unitlessKeys,
						/* harmony export */
					}
				);
				var unitlessKeys = {
					animationIterationCount: 1,
					aspectRatio: 1,
					borderImageOutset: 1,
					borderImageSlice: 1,
					borderImageWidth: 1,
					boxFlex: 1,
					boxFlexGroup: 1,
					boxOrdinalGroup: 1,
					columnCount: 1,
					columns: 1,
					flex: 1,
					flexGrow: 1,
					flexPositive: 1,
					flexShrink: 1,
					flexNegative: 1,
					flexOrder: 1,
					gridRow: 1,
					gridRowEnd: 1,
					gridRowSpan: 1,
					gridRowStart: 1,
					gridColumn: 1,
					gridColumnEnd: 1,
					gridColumnSpan: 1,
					gridColumnStart: 1,
					msGridRow: 1,
					msGridRowSpan: 1,
					msGridColumn: 1,
					msGridColumnSpan: 1,
					fontWeight: 1,
					lineHeight: 1,
					opacity: 1,
					order: 1,
					orphans: 1,
					tabSize: 1,
					widows: 1,
					zIndex: 1,
					zoom: 1,
					WebkitLineClamp: 1,
					// SVG-related properties
					fillOpacity: 1,
					floodOpacity: 1,
					stopOpacity: 1,
					strokeDasharray: 1,
					strokeDashoffset: 1,
					strokeMiterlimit: 1,
					strokeOpacity: 1,
					strokeWidth: 1,
				};

				/***/
			},

		/***/ './resources/svg/icons/close-solid-circle.svg':
			/*!****************************************************!*\
  !*** ./resources/svg/icons/close-solid-circle.svg ***!
  \****************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ ReactComponent: () =>
							/* binding */ SvgCloseSolidCircle,
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

				var SvgCloseSolidCircle = function SvgCloseSolidCircle(
					props
				) {
					return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
						'svg',
						_extends(
							{
								xmlns: 'http://www.w3.org/2000/svg',
								width: 16,
								height: 16,
								fill: 'none',
							},
							props
						),
						_path ||
							( _path =
								/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
									'path',
									{
										fill: '#A1A9B2',
										fillRule: 'evenodd',
										d: 'M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.98-8 1.817-1.818a.692.692 0 1 0-.979-.98L8 7.022 6.182 5.203a.692.692 0 0 0-.98.979L7.022 8 5.203 9.818a.692.692 0 0 0 .979.98L8 8.978l1.818 1.818a.69.69 0 0 0 .98 0 .69.69 0 0 0 0-.979z',
										clipRule: 'evenodd',
									}
								) )
					);
				};

				/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
					'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIGlkPSJDbG9zZSI+DQo8cGF0aCBpZD0iQ2xvc2VfMiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04IDE2QzEyLjQxODMgMTYgMTYgMTIuNDE4MyAxNiA4QzE2IDMuNTgxNzIgMTIuNDE4MyAwIDggMEMzLjU4MTcyIDAgMCAzLjU4MTcyIDAgOEMwIDEyLjQxODMgMy41ODE3MiAxNiA4IDE2Wk04Ljk3OTI2IDcuOTk5OTZMMTAuNzk3MiA2LjE4MTc5QzExLjA2NzcgNS45MTEzOCAxMS4wNjc3IDUuNDczMDcgMTAuNzk3MSA1LjIwMjY2QzEwLjUyNjggNC45MzI0NSAxMC4wODg3IDQuOTMyNDUgOS44MTgyMSA1LjIwMjY2TDguMDAwMDIgNy4wMjA4Mkw2LjE4MTY5IDUuMjAyNjZDNS45MTEyMyA0LjkzMjQ1IDUuNDczMTggNC45MzI0NSA1LjIwMjgxIDUuMjAyNjZDNC45MzI0IDUuNDczMDcgNC45MzI0IDUuOTExMzggNS4yMDI4MSA2LjE4MTc5TDcuMDIwODQgNy45OTk5NEw1LjIwMjkyIDkuODE4MDJDNC45MzI1IDEwLjA4ODYgNC45MzI1IDEwLjUyNjkgNS4yMDI5MiAxMC43OTczQzUuMzM4MTMgMTAuOTMyNSA1LjUxNTE3IDExIDUuNjkyMzMgMTFDNS44Njk1NCAxMSA2LjA0NjcgMTAuOTMyNCA2LjE4MTggMTAuNzk3M0w4LjAwMDA0IDguOTc4OTlMOS44MTg0MSAxMC43OTczQzkuOTUzNDIgMTAuOTMyNSAxMC4xMzA2IDExIDEwLjMwNzkgMTFDMTAuNDg1IDExIDEwLjY2MjEgMTAuOTMyNCAxMC43OTcyIDEwLjc5NzNDMTEuMDY3NyAxMC41MjY4IDExLjA2NzcgMTAuMDg4NiAxMC43OTcyIDkuODE4MDRMOC45NzkyNiA3Ljk5OTk2WiIgZmlsbD0iI0ExQTlCMiIvPg0KPC9nPg0KPC9zdmc+DQo=';

				/***/
			},

		/***/ './resources/svg/icons/cog.svg':
			/*!*************************************!*\
  !*** ./resources/svg/icons/cog.svg ***!
  \*************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ ReactComponent: () =>
							/* binding */ SvgCog,
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
				var _g, _defs;
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

				var SvgCog = function SvgCog( props ) {
					return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
						'svg',
						_extends(
							{
								xmlns: 'http://www.w3.org/2000/svg',
								width: 18,
								height: 18,
								fill: 'none',
							},
							props
						),
						_g ||
							( _g =
								/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
									'g',
									{
										fill: '#747C89',
										clipPath: 'url(#cog_svg__a)',
									},
									/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
										'path',
										{
											d: 'M9 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3',
										}
									),
									/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
										'path',
										{
											d: 'm15.97 10.425-.332-.192c.15-.816.15-1.652 0-2.468l.333-.191a2.252 2.252 0 0 0-2.25-3.9l-.334.192a6.7 6.7 0 0 0-2.137-1.231V2.25a2.25 2.25 0 0 0-4.5 0v.385a6.7 6.7 0 0 0-2.136 1.234l-.335-.194a2.251 2.251 0 1 0-2.25 3.9l.333.192a6.8 6.8 0 0 0 0 2.468l-.333.192a2.251 2.251 0 0 0 2.25 3.9l.334-.193a6.7 6.7 0 0 0 2.137 1.231v.385a2.25 2.25 0 0 0 4.5 0v-.385a6.7 6.7 0 0 0 2.136-1.234l.335.193a2.252 2.252 0 0 0 2.25-3.9zm-1.91-2.832c.254.92.254 1.892 0 2.813a.75.75 0 0 0 .348.85l.813.469a.75.75 0 1 1-.75 1.3l-.815-.472a.75.75 0 0 0-.911.124 5.24 5.24 0 0 1-2.432 1.407.75.75 0 0 0-.564.726v.94a.75.75 0 1 1-1.5 0v-.939a.75.75 0 0 0-.563-.727 5.24 5.24 0 0 1-2.431-1.409.75.75 0 0 0-.912-.124l-.813.47a.75.75 0 1 1-.75-1.299l.813-.469a.75.75 0 0 0 .348-.85 5.3 5.3 0 0 1 0-2.812.75.75 0 0 0-.348-.847l-.813-.47a.75.75 0 0 1 .75-1.3l.814.472a.75.75 0 0 0 .91-.121 5.24 5.24 0 0 1 2.433-1.406.75.75 0 0 0 .563-.73V2.25a.75.75 0 0 1 1.5 0v.939a.75.75 0 0 0 .563.727c.924.24 1.765.726 2.433 1.409a.75.75 0 0 0 .91.124l.814-.47a.75.75 0 1 1 .75 1.298l-.813.47a.75.75 0 0 0-.347.847z',
										}
									)
								) ),
						_defs ||
							( _defs =
								/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
									'defs',
									null,
									/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
										'clipPath',
										{
											id: 'cog_svg__a',
										},
										/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
											'path',
											{
												fill: '#fff',
												d: 'M0 0h18v18H0z',
											}
										)
									)
								) )
					);
				};

				/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
					'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4IiBmaWxsPSJub25lIj4NCiAgPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzExODlfMTgzMTUpIj4NCiAgICA8cGF0aCBkPSJNOSA2QzguNDA2NjYgNiA3LjgyNjY0IDYuMTc1OTUgNy4zMzMyOSA2LjUwNTU5QzYuODM5OTQgNi44MzUyNCA2LjQ1NTQzIDcuMzAzNzcgNi4yMjgzNiA3Ljg1MTk1QzYuMDAxMyA4LjQwMDEzIDUuOTQxODkgOS4wMDMzMyA2LjA1NzY1IDkuNTg1MjdDNi4xNzM0IDEwLjE2NzIgNi40NTkxMiAxMC43MDE4IDYuODc4NjggMTEuMTIxM0M3LjI5ODI0IDExLjU0MDkgNy44MzI3OSAxMS44MjY2IDguNDE0NzMgMTEuOTQyNEM4Ljk5NjY3IDEyLjA1ODEgOS41OTk4NyAxMS45OTg3IDEwLjE0ODEgMTEuNzcxNkMxMC42OTYyIDExLjU0NDYgMTEuMTY0OCAxMS4xNjAxIDExLjQ5NDQgMTAuNjY2N0MxMS44MjQxIDEwLjE3MzQgMTIgOS41OTMzNCAxMiA5QzEyIDguMjA0MzUgMTEuNjgzOSA3LjQ0MTI5IDExLjEyMTMgNi44Nzg2OEMxMC41NTg3IDYuMzE2MDcgOS43OTU2NSA2IDkgNlpNOSAxMC41QzguNzAzMzMgMTAuNSA4LjQxMzMyIDEwLjQxMiA4LjE2NjY1IDEwLjI0NzJDNy45MTk5NyAxMC4wODI0IDcuNzI3NzEgOS44NDgxMSA3LjYxNDE4IDkuNTc0MDJDNy41MDA2NSA5LjI5OTk0IDcuNDcwOTUgOC45OTgzNCA3LjUyODgyIDguNzA3MzZDNy41ODY3IDguNDE2MzkgNy43Mjk1NiA4LjE0OTEyIDcuOTM5MzQgNy45MzkzNEM4LjE0OTEyIDcuNzI5NTYgOC40MTYzOSA3LjU4NjcgOC43MDczNyA3LjUyODgyQzguOTk4MzQgNy40NzA5NCA5LjI5OTk0IDcuNTAwNjUgOS41NzQwMyA3LjYxNDE4QzkuODQ4MTIgNy43Mjc3MSAxMC4wODI0IDcuOTE5OTcgMTAuMjQ3MiA4LjE2NjY0QzEwLjQxMiA4LjQxMzMyIDEwLjUgOC43MDMzMyAxMC41IDlDMTAuNSA5LjM5NzgyIDEwLjM0MiA5Ljc3OTM2IDEwLjA2MDcgMTAuMDYwN0M5Ljc3OTM2IDEwLjM0MiA5LjM5NzgzIDEwLjUgOSAxMC41WiIgZmlsbD0iIzc0N0M4OSIvPg0KICAgIDxwYXRoIGQ9Ik0xNS45NzA2IDEwLjQyNUwxNS42Mzc2IDEwLjIzM0MxNS43ODc1IDkuNDE3MzMgMTUuNzg3NSA4LjU4MTE3IDE1LjYzNzYgNy43NjU1TDE1Ljk3MDYgNy41NzM1QzE2LjIyNjcgNy40MjU3NiAxNi40NTExIDcuMjI5MDMgMTYuNjMxMiA2Ljk5NDU1QzE2LjgxMTIgNi43NjAwNiAxNi45NDMzIDYuNDkyNCAxNy4wMTk5IDYuMjA2ODZDMTcuMDk2NiA1LjkyMTMyIDE3LjExNjIgNS42MjM0OSAxNy4wNzc3IDUuMzMwMzdDMTcuMDM5MiA1LjAzNzI1IDE2Ljk0MzMgNC43NTQ1OCAxNi43OTU2IDQuNDk4NUMxNi42NDc5IDQuMjQyNDIgMTYuNDUxMSA0LjAxNzk1IDE2LjIxNjYgMy44Mzc5QzE1Ljk4MjIgMy42NTc4NSAxNS43MTQ1IDMuNTI1NzUgMTUuNDI5IDMuNDQ5MTVDMTUuMTQzNCAzLjM3MjU0IDE0Ljg0NTYgMy4zNTI5MiAxNC41NTI1IDMuMzkxNDJDMTQuMjU5MyAzLjQyOTkxIDEzLjk3NjcgMy41MjU3NiAxMy43MjA2IDMuNjczNUwxMy4zODY4IDMuODY2MjVDMTIuNzU2NSAzLjMyNzY5IDEyLjAzMjEgMi45MTAxOSAxMS4yNTAxIDIuNjM0NzVWMi4yNUMxMS4yNTAxIDEuNjUzMjYgMTEuMDEzIDEuMDgwOTcgMTAuNTkxMSAwLjY1OTAxQzEwLjE2OTEgMC4yMzcwNTMgOS41OTY4MyAwIDkuMDAwMDkgMEM4LjQwMzM2IDAgNy44MzEwNiAwLjIzNzA1MyA3LjQwOTEgMC42NTkwMUM2Ljk4NzE1IDEuMDgwOTcgNi43NTAwOSAxLjY1MzI2IDYuNzUwMDkgMi4yNVYyLjYzNDc1QzUuOTY4MTMgMi45MTExOCA1LjI0Mzk4IDMuMzI5NyA0LjYxNDA5IDMuODY5MjVMNC4yNzg4NCAzLjY3NUMzLjc2MTY3IDMuMzc2NjMgMy4xNDcxNSAzLjI5NTkzIDIuNTcwNDggMy40NTA2NUMxLjk5MzgxIDMuNjA1MzYgMS41MDIyMSAzLjk4MjgzIDEuMjAzODQgNC41QzAuOTA1NDc1IDUuMDE3MTcgMC44MjQ3NzIgNS42MzE2OSAwLjk3OTQ5IDYuMjA4MzZDMS4xMzQyMSA2Ljc4NTA0IDEuNTExNjcgNy4yNzY2MyAyLjAyODg0IDcuNTc1TDIuMzYxODQgNy43NjdDMi4yMTE5MyA4LjU4MjY3IDIuMjExOTMgOS40MTg4MyAyLjM2MTg0IDEwLjIzNDVMMi4wMjg4NCAxMC40MjY1QzEuNTExNjcgMTAuNzI0OSAxLjEzNDIxIDExLjIxNjUgMC45Nzk0OSAxMS43OTMxQzAuODI0NzcyIDEyLjM2OTggMC45MDU0NzUgMTIuOTg0MyAxLjIwMzg0IDEzLjUwMTVDMS41MDIyMSAxNC4wMTg3IDEuOTkzODEgMTQuMzk2MSAyLjU3MDQ4IDE0LjU1MDlDMy4xNDcxNSAxNC43MDU2IDMuNzYxNjcgMTQuNjI0OSA0LjI3ODg0IDE0LjMyNjVMNC42MTI1OSAxNC4xMzM3QzUuMjQzMTcgMTQuNjcyNCA1Ljk2NzgzIDE1LjA4OTkgNi43NTAwOSAxNS4zNjUyVjE1Ljc1QzYuNzUwMDkgMTYuMzQ2NyA2Ljk4NzE1IDE2LjkxOSA3LjQwOTEgMTcuMzQxQzcuODMxMDYgMTcuNzYyOSA4LjQwMzM2IDE4IDkuMDAwMDkgMThDOS41OTY4MyAxOCAxMC4xNjkxIDE3Ljc2MjkgMTAuNTkxMSAxNy4zNDFDMTEuMDEzIDE2LjkxOSAxMS4yNTAxIDE2LjM0NjcgMTEuMjUwMSAxNS43NVYxNS4zNjUyQzEyLjAzMjEgMTUuMDg4OCAxMi43NTYyIDE0LjY3MDMgMTMuMzg2MSAxNC4xMzA3TDEzLjcyMTMgMTQuMzI0M0MxNC4yMzg1IDE0LjYyMjYgMTQuODUzIDE0LjcwMzMgMTUuNDI5NyAxNC41NDg2QzE2LjAwNjQgMTQuMzkzOSAxNi40OTggMTQuMDE2NCAxNi43OTYzIDEzLjQ5OTNDMTcuMDk0NyAxMi45ODIxIDE3LjE3NTQgMTIuMzY3NiAxNy4wMjA3IDExLjc5MDlDMTYuODY2IDExLjIxNDIgMTYuNDg4NSAxMC43MjI2IDE1Ljk3MTMgMTAuNDI0MkwxNS45NzA2IDEwLjQyNVpNMTQuMDU5NiA3LjU5M0MxNC4zMTM2IDguNTEzMyAxNC4zMTM2IDkuNDg1MiAxNC4wNTk2IDEwLjQwNTVDMTQuMDE1MiAxMC41NjU3IDE0LjAyNTQgMTAuNzM2MSAxNC4wODgzIDEwLjg4OTlDMTQuMTUxMyAxMS4wNDM3IDE0LjI2MzYgMTEuMTcyMiAxNC40MDc2IDExLjI1NTJMMTUuMjIwNiAxMS43MjQ4QzE1LjM5MyAxMS44MjQyIDE1LjUxODcgMTEuOTg4MSAxNS41NzAzIDEyLjE4MDNDMTUuNjIxOCAxMi4zNzI1IDE1LjU5NDkgMTIuNTc3MyAxNS40OTU1IDEyLjc0OTZDMTUuMzk2IDEyLjkyMiAxNS4yMzIyIDEzLjA0NzggMTUuMDQgMTMuMDk5M0MxNC44NDc4IDEzLjE1MDkgMTQuNjQzIDEzLjEyNCAxNC40NzA2IDEzLjAyNDVMMTMuNjU2MSAxMi41NTM1QzEzLjUxMiAxMi40NzAxIDEzLjM0NDMgMTIuNDM2OSAxMy4xNzkzIDEyLjQ1OTNDMTMuMDE0MyAxMi40ODE3IDEyLjg2MTUgMTIuNTU4NCAxMi43NDQ4IDEyLjY3NzJDMTIuMDc3MyAxMy4zNTg3IDExLjIzNjMgMTMuODQ1IDEwLjMxMjYgMTQuMDgzNUMxMC4xNTE0IDE0LjEyNSAxMC4wMDg1IDE0LjIxODkgOS45MDY1NCAxNC4zNTA0QzkuODA0NTYgMTQuNDgyIDkuNzQ5MjYgMTQuNjQzOCA5Ljc0OTM0IDE0LjgxMDJWMTUuNzVDOS43NDkzNCAxNS45NDg5IDkuNjcwMzMgMTYuMTM5NyA5LjUyOTY3IDE2LjI4MDNDOS4zODkwMiAxNi40MjEgOS4xOTgyNiAxNi41IDguOTk5MzQgMTYuNUM4LjgwMDQzIDE2LjUgOC42MDk2NyAxNi40MjEgOC40NjkwMSAxNi4yODAzQzguMzI4MzYgMTYuMTM5NyA4LjI0OTM0IDE1Ljk0ODkgOC4yNDkzNCAxNS43NVYxNC44MTFDOC4yNDk0MyAxNC42NDQ1IDguMTk0MTIgMTQuNDgyOCA4LjA5MjE1IDE0LjM1MTJDNy45OTAxNyAxNC4yMTk2IDcuODQ3MzIgMTQuMTI1NyA3LjY4NjA5IDE0LjA4NDJDNi43NjIzNSAxMy44NDQ4IDUuOTIxNTkgMTMuMzU3NSA1LjI1NDU5IDEyLjY3NUM1LjEzNzk5IDEyLjU1NjEgNC45ODUxNSAxMi40Nzk1IDQuODIwMTYgMTIuNDU3MUM0LjY1NTE3IDEyLjQzNDcgNC40ODc0MiAxMi40Njc4IDQuMzQzMzQgMTIuNTUxM0wzLjUzMDM0IDEzLjAyMTVDMy40NDUwMSAxMy4wNzE1IDMuMzUwNjQgMTMuMTA0MiAzLjI1MjY0IDEzLjExNzZDMy4xNTQ2NCAxMy4xMzEgMy4wNTQ5NiAxMy4xMjQ5IDIuOTU5MzMgMTMuMDk5NkMyLjg2MzcxIDEzLjA3NDMgMi43NzQwMyAxMy4wMzAzIDIuNjk1NDYgMTIuOTcwM0MyLjYxNjg5IDEyLjkxMDIgMi41NTA5OCAxMi44MzUyIDIuNTAxNTIgMTIuNzQ5NUMyLjQ1MjA2IDEyLjY2MzggMi40MjAwNCAxMi41NjkyIDIuNDA3MjkgMTIuNDcxMkMyLjM5NDU0IDEyLjM3MzEgMi40MDEzMiAxMi4yNzM0IDIuNDI3MjQgMTIuMTc4QzIuNDUzMTUgMTIuMDgyNSAyLjQ5NzY5IDExLjk5MzEgMi41NTgyOSAxMS45MTVDMi42MTg4OSAxMS44MzY4IDIuNjk0MzYgMTEuNzcxNCAyLjc4MDM0IDExLjcyMjVMMy41OTMzNCAxMS4yNTNDMy43MzczIDExLjE2OTkgMy44NDk2IDExLjA0MTQgMy45MTI1OSAxMC44ODc2QzMuOTc1NTggMTAuNzMzOCAzLjk4NTY5IDEwLjU2MzQgMy45NDEzNCAxMC40MDMyQzMuNjg3MzYgOS40ODI5NSAzLjY4NzM2IDguNTExMDUgMy45NDEzNCA3LjU5MDc1QzMuOTg0ODkgNy40MzA5MSAzLjk3NDMgNy4yNjExNSAzLjkxMTIgNy4xMDc5N0MzLjg0ODExIDYuOTU0NzkgMy43MzYwOCA2LjgyNjggMy41OTI1OSA2Ljc0NEwyLjc3OTU5IDYuMjc0NUMyLjYwNzI0IDYuMTc1MDQgMi40ODE0NSA2LjAxMTE5IDIuNDI5OSA1LjgxODk5QzIuMzc4MzUgNS42MjY3OSAyLjQwNTI2IDUuNDIxOTggMi41MDQ3MiA1LjI0OTYyQzIuNjA0MTcgNS4wNzcyNyAyLjc2ODAzIDQuOTUxNDggMi45NjAyMyA0Ljg5OTkzQzMuMTUyNDMgNC44NDgzOCAzLjM1NzI0IDQuODc1MjkgMy41Mjk1OSA0Ljk3NDc1TDQuMzQ0MDkgNS40NDU3NUM0LjQ4Nzc4IDUuNTI5MzkgNC42NTUxOCA1LjU2MjkxIDQuODE5OTkgNS41NDEwNUM0Ljk4NDggNS41MTkxOSA1LjEzNzY4IDUuNDQzMiA1LjI1NDU5IDUuMzI1QzUuOTIyMTYgNC42NDM1MSA2Ljc2MzE2IDQuMTU3MjcgNy42ODY4NCAzLjkxODc1QzcuODQ4NTcgMy44NzcxNyA3Ljk5MTc5IDMuNzgyODEgOC4wOTM4MiAzLjY1MDYzQzguMTk1ODUgMy41MTg0NCA4LjI1MDg0IDMuMzU1OTggOC4yNTAwOSAzLjE4OVYyLjI1QzguMjUwMDkgMi4wNTEwOSA4LjMyOTExIDEuODYwMzIgOC40Njk3NiAxLjcxOTY3QzguNjEwNDIgMS41NzkwMiA4LjgwMTE4IDEuNSA5LjAwMDA5IDEuNUM5LjE5OTAxIDEuNSA5LjM4OTc3IDEuNTc5MDIgOS41MzA0MiAxLjcxOTY3QzkuNjcxMDggMS44NjAzMiA5Ljc1MDA5IDIuMDUxMDkgOS43NTAwOSAyLjI1VjMuMTg5QzkuNzUwMDEgMy4zNTU0NyA5LjgwNTMxIDMuNTE3MjMgOS45MDcyOSAzLjY0ODgxQzEwLjAwOTMgMy43ODAzOSAxMC4xNTIxIDMuODc0MyAxMC4zMTMzIDMuOTE1NzVDMTEuMjM3NCA0LjE1NTExIDEyLjA3ODQgNC42NDI0MSAxMi43NDU2IDUuMzI1QzEyLjg2MjIgNS40NDM4NSAxMy4wMTUgNS41MjA1MiAxMy4xOCA1LjU0MjkyQzEzLjM0NSA1LjU2NTMzIDEzLjUxMjggNS41MzIyIDEzLjY1NjggNS40NDg3NUwxNC40Njk4IDQuOTc4NUMxNC41NTUyIDQuOTI4NDggMTQuNjQ5NiA0Ljg5NTgzIDE0Ljc0NzYgNC44ODI0M0MxNC44NDU1IDQuODY5MDMgMTQuOTQ1MiA0Ljg3NTE0IDE1LjA0MDkgNC45MDA0M0MxNS4xMzY1IDQuOTI1NzEgMTUuMjI2MiA0Ljk2OTY1IDE1LjMwNDcgNS4wMjk3NEMxNS4zODMzIDUuMDg5ODIgMTUuNDQ5MiA1LjE2NDg1IDE1LjQ5ODcgNS4yNTA1QzE1LjU0ODEgNS4zMzYxNiAxNS41ODAxIDUuNDMwNzYgMTUuNTkyOSA1LjUyODg0QzE1LjYwNTYgNS42MjY5MyAxNS41OTg5IDUuNzI2NTYgMTUuNTczIDUuODIyMDJDMTUuNTQ3IDUuOTE3NDcgMTUuNTAyNSA2LjAwNjg2IDE1LjQ0MTkgNi4wODUwM0MxNS4zODEzIDYuMTYzMiAxNS4zMDU4IDYuMjI4NjEgMTUuMjE5OCA2LjI3NzVMMTQuNDA2OCA2Ljc0N0MxNC4yNjM2IDYuODMwMDMgMTQuMTUxOSA2Ljk1ODExIDE0LjA4OTEgNy4xMTEyN0MxNC4wMjYzIDcuMjY0NDMgMTQuMDE1OSA3LjQzNDA3IDE0LjA1OTYgNy41OTM3NVY3LjU5M1oiIGZpbGw9IiM3NDdDODkiLz4NCiAgPC9nPg0KICA8ZGVmcz4NCiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAwXzExODlfMTgzMTUiPg0KICAgICAgPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiBmaWxsPSJ3aGl0ZSIvPg0KICAgIDwvY2xpcFBhdGg+DQogIDwvZGVmcz4NCjwvc3ZnPg==';

				/***/
			},

		/***/ './resources/svg/icons/dots-move.svg':
			/*!*******************************************!*\
  !*** ./resources/svg/icons/dots-move.svg ***!
  \*******************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ ReactComponent: () =>
							/* binding */ SvgDotsMove,
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

				var SvgDotsMove = function SvgDotsMove( props ) {
					return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
						'svg',
						_extends(
							{
								xmlns: 'http://www.w3.org/2000/svg',
								width: 8,
								height: 14,
								fill: 'none',
							},
							props
						),
						_path ||
							( _path =
								/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
									'path',
									{
										fill: '#D2D6DB',
										d: 'M.937 10.36h1.168c.248 0 .487.104.662.288.176.183.275.432.275.692v1.224c0 .26-.099.508-.275.692a.92.92 0 0 1-.662.287H.937a.9.9 0 0 1-.359-.075.9.9 0 0 1-.304-.212A1.018 1.018 0 0 1 0 12.563v-1.224c0-.26.1-.508.275-.692a.92.92 0 0 1 .662-.286M.937 5.179h1.168c.248 0 .487.103.662.287.176.183.275.432.275.692v1.224a1.02 1.02 0 0 1-.275.692.902.902 0 0 1-.662.287H.937a.9.9 0 0 1-.663-.287A1.018 1.018 0 0 1 0 7.38V6.157c0-.26.1-.508.275-.692a.92.92 0 0 1 .662-.286M.937 0h1.168c.248 0 .487.103.662.287.176.183.275.432.275.692V2.2c0 .26-.099.509-.275.692a.92.92 0 0 1-.662.287H.937a.92.92 0 0 1-.663-.287A1 1 0 0 1 0 2.2V.979C0 .719.099.47.274.287A.92.92 0 0 1 .937 0M5.892 10.36h1.171c.249 0 .487.104.663.288.175.183.274.432.274.692v1.224c0 .26-.099.508-.274.692a.92.92 0 0 1-.663.287h-1.17a.92.92 0 0 1-.663-.287 1 1 0 0 1-.275-.692V11.34c0-.26.099-.509.275-.692a.92.92 0 0 1 .662-.287M5.892 5.179h1.171c.249 0 .487.103.663.287.175.183.274.432.274.692v1.224a1.02 1.02 0 0 1-.274.692.902.902 0 0 1-.662.287H5.891a.9.9 0 0 1-.662-.287 1.017 1.017 0 0 1-.274-.692V6.158c0-.26.098-.509.274-.692a.92.92 0 0 1 .662-.287M5.892 0h1.171c.249 0 .487.103.663.287C7.9.47 8 .719 8 .979V2.2c0 .26-.099.509-.274.692a.92.92 0 0 1-.663.287h-1.17a.92.92 0 0 1-.663-.287 1 1 0 0 1-.275-.692V.979c0-.26.099-.509.275-.692A.92.92 0 0 1 5.892 0',
									}
								) )
					);
				};

				/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
					'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjE0IiB2aWV3Qm94PSIwIDAgOCAxNCIgZmlsbD0ibm9uZSI+DQogIDxwYXRoIGQ9Ik0wLjkzNjczNSAxMC4zNjA4SDIuMTA1MDJDMi4zNTM0NiAxMC4zNjA4IDIuNTkxNzIgMTAuNDY0IDIuNzY3MzkgMTAuNjQ3NkMyLjk0MzA2IDEwLjgzMTIgMy4wNDE3NiAxMS4wODAyIDMuMDQxNzYgMTEuMzM5OFYxMi41NjM4QzMuMDQxNzYgMTIuODIzNSAyLjk0MzA2IDEzLjA3MjUgMi43NjczOSAxMy4yNTYxQzIuNTkxNzIgMTMuNDM5NyAyLjM1MzQ2IDEzLjU0MjggMi4xMDUwMiAxMy41NDI4SDAuOTM2NzM1QzAuODEzNjQxIDEzLjU0MjggMC42OTE3NTMgMTMuNTE3NSAwLjU3ODA0MSAxMy40NjgyQzAuNDY0MzI5IDEzLjQxODkgMC4zNjEwMjEgMTMuMzQ2OCAwLjI3NDAyNSAxMy4yNTU3QzAuMTg3MDI5IDEzLjE2NDcgMC4xMTgwNDkgMTMuMDU2NyAwLjA3MTAzMDMgMTIuOTM3OEMwLjAyNDAxMTMgMTIuODE4OSAtMC4wMDAxMjUyNDYgMTIuNjkxNSA0Ljg4NzIxZS0wNyAxMi41NjI4VjExLjMzODhDMC4wMDAyNTQwODYgMTEuMDc5NCAwLjA5OTA1NzQgMTAuODMwNiAwLjI3NDcwMiAxMC42NDcyQzAuNDUwMzQ2IDEwLjQ2MzggMC42ODg0NjMgMTAuMzYwOCAwLjkzNjczNSAxMC4zNjA4WiIgZmlsbD0iI0QyRDZEQiIvPg0KICA8cGF0aCBkPSJNMC45MzY3MzUgNS4xNzg5NkgyLjEwNTAyQzIuMzUzNDYgNS4xNzg5NiAyLjU5MTcyIDUuMjgyMDggMi43NjczOSA1LjQ2NTY4QzIuOTQzMDYgNS42NDkyOCAzLjA0MTc2IDUuODk4MyAzLjA0MTc2IDYuMTU3OTRWNy4zODE5NEMzLjA0MTc2IDcuNTEwNTEgMy4wMTc1MyA3LjYzNzgxIDIuOTcwNDUgNy43NTY1OUMyLjkyMzM4IDcuODc1MzcgMi44NTQzOCA3Ljk4MzI5IDIuNzY3MzkgOC4wNzQyQzIuNjgwNDEgOC4xNjUxMSAyLjU3NzE0IDguMjM3MjIgMi40NjM0OSA4LjI4NjQyQzIuMzQ5ODQgOC4zMzU2MiAyLjIyODA0IDguMzYwOTUgMi4xMDUwMiA4LjM2MDk1SDAuOTM2NzM1QzAuODEzNjQxIDguMzYwOTUgMC42OTE3NTMgOC4zMzU1OSAwLjU3ODA0MSA4LjI4NjMzQzAuNDY0MzI5IDguMjM3MDcgMC4zNjEwMjEgOC4xNjQ4NyAwLjI3NDAyNSA4LjA3Mzg1QzAuMTg3MDI5IDcuOTgyODQgMC4xMTgwNDkgNy44NzQ4IDAuMDcxMDMwMyA3Ljc1NTkxQzAuMDI0MDExMyA3LjYzNzAxIC0wLjAwMDEyNTI0NiA3LjUwOTYgNC44ODcyMWUtMDcgNy4zODA5NVY2LjE1Njk1QzAuMDAwMjU0MDg2IDUuODk3NDggMC4wOTkwNTc0IDUuNjQ4NzEgMC4yNzQ3MDIgNS40NjUzM0MwLjQ1MDM0NiA1LjI4MTk1IDAuNjg4NDYzIDUuMTc4OTUgMC45MzY3MzUgNS4xNzg5NloiIGZpbGw9IiNEMkQ2REIiLz4NCiAgPHBhdGggZD0iTTAuOTM2NzM0IDBIMi4xMDUwMkMyLjM1MzQ2IDAgMi41OTE3MiAwLjEwMzE0NCAyLjc2NzM5IDAuMjg2NzQyQzIuOTQzMDYgMC40NzAzNDEgMy4wNDE3NiAwLjcxOTM1MyAzLjA0MTc2IDAuOTc5VjIuMkMzLjA0MTc2IDIuNDU5NjUgMi45NDMwNiAyLjcwODY2IDIuNzY3MzkgMi44OTIyNkMyLjU5MTcyIDMuMDc1ODYgMi4zNTM0NiAzLjE3OSAyLjEwNTAyIDMuMTc5SDAuOTM2NzM0QzAuNjg4Mjk3IDMuMTc5IDAuNDUwMDM1IDMuMDc1ODYgMC4yNzQzNjMgMi44OTIyNkMwLjA5ODY5MTQgMi43MDg2NiAwIDIuNDU5NjUgMCAyLjJMMCAwLjk3OUMwIDAuNzE5MzUzIDAuMDk4NjkxNCAwLjQ3MDM0MSAwLjI3NDM2MyAwLjI4Njc0MkMwLjQ1MDAzNSAwLjEwMzE0NCAwLjY4ODI5NyAwIDAuOTM2NzM0IDBaIiBmaWxsPSIjRDJENkRCIi8+DQogIDxwYXRoIGQ9Ik01Ljg5MjA2IDEwLjM2MDhINy4wNjMyMkM3LjMxMTY1IDEwLjM2MDggNy41NDk5MiAxMC40NjQgNy43MjU1OSAxMC42NDc2QzcuOTAxMjYgMTAuODMxMiA3Ljk5OTk1IDExLjA4MDIgNy45OTk5NSAxMS4zMzk4VjEyLjU2MzhDNy45OTk5NSAxMi44MjM1IDcuOTAxMjYgMTMuMDcyNSA3LjcyNTU5IDEzLjI1NjFDNy41NDk5MiAxMy40Mzk3IDcuMzExNjUgMTMuNTQyOCA3LjA2MzIyIDEzLjU0MjhINS44OTIwNkM1LjY0MzYyIDEzLjU0MjggNS40MDUzNiAxMy40Mzk3IDUuMjI5NjkgMTMuMjU2MUM1LjA1NDAxIDEzLjA3MjUgNC45NTUzMiAxMi44MjM1IDQuOTU1MzIgMTIuNTYzOFYxMS4zMzk4QzQuOTU1MzIgMTEuMDgwMiA1LjA1NDAxIDEwLjgzMTIgNS4yMjk2OSAxMC42NDc2QzUuNDA1MzYgMTAuNDY0IDUuNjQzNjIgMTAuMzYwOCA1Ljg5MjA2IDEwLjM2MDhaIiBmaWxsPSIjRDJENkRCIi8+DQogIDxwYXRoIGQ9Ik01Ljg5MjA2IDUuMTc4OTZINy4wNjMyMkM3LjMxMTY1IDUuMTc4OTYgNy41NDk5MiA1LjI4MjA4IDcuNzI1NTkgNS40NjU2OEM3LjkwMTI2IDUuNjQ5MjggNy45OTk5NSA1Ljg5ODMgNy45OTk5NSA2LjE1Nzk0VjcuMzgxOTRDNy45OTk5NSA3LjUxMDUxIDcuOTc1NzIgNy42Mzc4MSA3LjkyODY1IDcuNzU2NTlDNy44ODE1NyA3Ljg3NTM3IDcuODEyNTcgNy45ODMyOSA3LjcyNTU5IDguMDc0MkM3LjYzODYxIDguMTY1MTEgNy41MzUzNCA4LjIzNzIyIDcuNDIxNjkgOC4yODY0MkM3LjMwODA0IDguMzM1NjIgNy4xODYyMyA4LjM2MDk1IDcuMDYzMjIgOC4zNjA5NUg1Ljg5MjA2QzUuNzY5MDUgOC4zNjA5NSA1LjY0NzI0IDguMzM1NjIgNS41MzM1OSA4LjI4NjQyQzUuNDE5OTQgOC4yMzcyMiA1LjMxNjY3IDguMTY1MTEgNS4yMjk2OSA4LjA3NDJDNS4xNDI3IDcuOTgzMjkgNS4wNzM3IDcuODc1MzcgNS4wMjY2MyA3Ljc1NjU5QzQuOTc5NTUgNy42Mzc4MSA0Ljk1NTMyIDcuNTEwNTEgNC45NTUzMiA3LjM4MTk0VjYuMTU3OTRDNC45NTUzMiA1Ljg5ODMgNS4wNTQwMSA1LjY0OTI4IDUuMjI5NjkgNS40NjU2OEM1LjQwNTM2IDUuMjgyMDggNS42NDM2MiA1LjE3ODk2IDUuODkyMDYgNS4xNzg5NloiIGZpbGw9IiNEMkQ2REIiLz4NCiAgPHBhdGggZD0iTTUuODkyMDYgMEg3LjA2MzIyQzcuMzExNjUgMCA3LjU0OTkyIDAuMTAzMTQ0IDcuNzI1NTkgMC4yODY3NDJDNy45MDEyNiAwLjQ3MDM0MSA3Ljk5OTk1IDAuNzE5MzUzIDcuOTk5OTUgMC45NzlWMi4yQzcuOTk5OTUgMi40NTk2NSA3LjkwMTI2IDIuNzA4NjYgNy43MjU1OSAyLjg5MjI2QzcuNTQ5OTIgMy4wNzU4NiA3LjMxMTY1IDMuMTc5IDcuMDYzMjIgMy4xNzlINS44OTIwNkM1LjY0MzYyIDMuMTc5IDUuNDA1MzYgMy4wNzU4NiA1LjIyOTY5IDIuODkyMjZDNS4wNTQwMSAyLjcwODY2IDQuOTU1MzIgMi40NTk2NSA0Ljk1NTMyIDIuMlYwLjk3OUM0Ljk1NTMyIDAuNzE5MzUzIDUuMDU0MDEgMC40NzAzNDEgNS4yMjk2OSAwLjI4Njc0MkM1LjQwNTM2IDAuMTAzMTQ0IDUuNjQzNjIgMCA1Ljg5MjA2IDBaIiBmaWxsPSIjRDJENkRCIi8+DQo8L3N2Zz4=';

				/***/
			},

		/***/ './resources/svg/icons/edit.svg':
			/*!**************************************!*\
  !*** ./resources/svg/icons/edit.svg ***!
  \**************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ ReactComponent: () =>
							/* binding */ SvgEdit,
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

				var SvgEdit = function SvgEdit( props ) {
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
										d: 'M11 4H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 6.28 2 7.12 2 8.8v8.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 22 5.12 22 6.8 22h8.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C20 19.72 20 18.88 20 17.2V13M8 16h1.675c.489 0 .733 0 .963-.055.204-.05.4-.13.579-.24.201-.123.374-.296.72-.642L21.5 5.5a2.121 2.121 0 0 0-3-3l-9.563 9.563c-.346.346-.519.519-.642.72a2 2 0 0 0-.24.579c-.055.23-.055.474-.055.963z',
									}
								) )
					);
				};

				/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
					'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogPHBhdGggZD0iTTExIDMuOTk5OThINi44QzUuMTE5ODQgMy45OTk5OCA0LjI3OTc2IDMuOTk5OTggMy42MzgwMyA0LjMyNjk2QzMuMDczNTQgNC42MTQ1OCAyLjYxNDYgNS4wNzM1MyAyLjMyNjk4IDUuNjM4MDFDMiA2LjI3OTc1IDIgNy4xMTk4MyAyIDguNzk5OThWMTcuMkMyIDE4Ljg4MDEgMiAxOS43MjAyIDIuMzI2OTggMjAuMzYyQzIuNjE0NiAyMC45MjY0IDMuMDczNTQgMjEuMzg1NCAzLjYzODAzIDIxLjY3M0M0LjI3OTc2IDIyIDUuMTE5ODQgMjIgNi44IDIySDE1LjJDMTYuODgwMiAyMiAxNy43MjAyIDIyIDE4LjM2MiAyMS42NzNDMTguOTI2NSAyMS4zODU0IDE5LjM4NTQgMjAuOTI2NCAxOS42NzMgMjAuMzYyQzIwIDE5LjcyMDIgMjAgMTguODgwMSAyMCAxNy4yVjEzTTcuOTk5OTcgMTZIOS42NzQ1MkMxMC4xNjM3IDE2IDEwLjQwODMgMTYgMTAuNjM4NSAxNS45NDQ3QzEwLjg0MjUgMTUuODk1NyAxMS4wMzc2IDE1LjgxNDkgMTEuMjE2NiAxNS43MDUzQzExLjQxODQgMTUuNTgxNiAxMS41OTE0IDE1LjQwODYgMTEuOTM3MyAxNS4wNjI3TDIxLjUgNS40OTk5OEMyMi4zMjg0IDQuNjcxNTYgMjIuMzI4NCAzLjMyODQxIDIxLjUgMi40OTk5OEMyMC42NzE2IDEuNjcxNTYgMTkuMzI4NCAxLjY3MTU1IDE4LjUgMi40OTk5OEw4LjkzNzIzIDEyLjA2MjdDOC41OTEzMyAxMi40MDg2IDguNDE4MzggMTIuNTgxNiA4LjI5NDY5IDEyLjc4MzRDOC4xODUwNCAxMi45NjI0IDguMTA0MjMgMTMuMTU3NCA4LjA1NTIzIDEzLjM2MTVDNy45OTk5NyAxMy41OTE3IDcuOTk5OTcgMTMuODM2MyA3Ljk5OTk3IDE0LjMyNTVWMTZaIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCiA8L3N2Zz4=';

				/***/
			},

		/***/ './resources/svg/icons/ellipsis-h.svg':
			/*!********************************************!*\
  !*** ./resources/svg/icons/ellipsis-h.svg ***!
  \********************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ ReactComponent: () =>
							/* binding */ SvgEllipsisH,
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

				var SvgEllipsisH = function SvgEllipsisH( props ) {
					return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
						'svg',
						_extends(
							{
								xmlns: 'http://www.w3.org/2000/svg',
								width: 20,
								height: 20,
								fill: 'none',
							},
							props
						),
						_path ||
							( _path =
								/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement(
									'path',
									{
										fill: '#747C89',
										fillRule: 'evenodd',
										d: 'M2.5 10a1.667 1.667 0 1 1 3.333 0A1.667 1.667 0 0 1 2.5 10m5.833 0a1.667 1.667 0 1 1 3.334 0 1.667 1.667 0 0 1-3.334 0m5.834 0a1.667 1.667 0 1 1 3.333 0 1.667 1.667 0 0 1-3.333 0',
										clipRule: 'evenodd',
									}
								) )
					);
				};

				/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
					'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIiBmaWxsPSJub25lIj4NCiAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yLjUgMTBDMi41IDkuMDc5NTIgMy4yNDYxOSA4LjMzMzMzIDQuMTY2NjcgOC4zMzMzM0M1LjA4NzE0IDguMzMzMzMgNS44MzMzMyA5LjA3OTUyIDUuODMzMzMgMTBDNS44MzMzMyAxMC45MjA1IDUuMDg3MTQgMTEuNjY2NyA0LjE2NjY3IDExLjY2NjdDMy4yNDYxOSAxMS42NjY3IDIuNSAxMC45MjA1IDIuNSAxMFpNOC4zMzMzMyAxMEM4LjMzMzMzIDkuMDc5NTIgOS4wNzk1MyA4LjMzMzMzIDEwIDguMzMzMzNDMTAuOTIwNSA4LjMzMzMzIDExLjY2NjcgOS4wNzk1MiAxMS42NjY3IDEwQzExLjY2NjcgMTAuOTIwNSAxMC45MjA1IDExLjY2NjcgMTAgMTEuNjY2N0M5LjA3OTUzIDExLjY2NjcgOC4zMzMzMyAxMC45MjA1IDguMzMzMzMgMTBaTTE0LjE2NjcgMTBDMTQuMTY2NyA5LjA3OTUyIDE0LjkxMjkgOC4zMzMzMyAxNS44MzMzIDguMzMzMzNDMTYuNzUzOCA4LjMzMzMzIDE3LjUgOS4wNzk1MiAxNy41IDEwQzE3LjUgMTAuOTIwNSAxNi43NTM4IDExLjY2NjcgMTUuODMzMyAxMS42NjY3QzE0LjkxMjkgMTEuNjY2NyAxNC4xNjY3IDEwLjkyMDUgMTQuMTY2NyAxMFoiIGZpbGw9IiM3NDdDODkiLz4NCjwvc3ZnPg==';

				/***/
			},

		/***/ './resources/blocks/Controls.js':
			/*!**************************************!*\
  !*** ./resources/blocks/Controls.js ***!
  \**************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ Controls,
						/* harmony export */
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__( /*! react */ 'react' );
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(
						react__WEBPACK_IMPORTED_MODULE_0__
					);
				/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! @wordpress/components */ '@wordpress/components'
					);
				/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_components__WEBPACK_IMPORTED_MODULE_1__
					);
				/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! @wordpress/block-editor */ '@wordpress/block-editor'
					);
				/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__
					);
				/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						/*! @wordpress/element */ '@wordpress/element'
					);
				/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_element__WEBPACK_IMPORTED_MODULE_3__
					);
				/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						/*! @wordpress/hooks */ '@wordpress/hooks'
					);
				/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_4___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__
					);
				/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ =
					__webpack_require__(
						/*! styled-components */ './node_modules/styled-components/dist/styled-components.browser.esm.js'
					);
				/* harmony import */ var _controls_Repeater__WEBPACK_IMPORTED_MODULE_5__ =
					__webpack_require__(
						/*! ./controls/Repeater */ './resources/blocks/controls/Repeater.js'
					);
				/* harmony import */ var _controls_DefaultValue__WEBPACK_IMPORTED_MODULE_6__ =
					__webpack_require__(
						/*! ./controls/DefaultValue */ './resources/blocks/controls/DefaultValue.js'
					);
				/* harmony import */ var _controls_ColorPicker__WEBPACK_IMPORTED_MODULE_7__ =
					__webpack_require__(
						/*! ./controls/ColorPicker */ './resources/blocks/controls/ColorPicker.js'
					);
				/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ =
					__webpack_require__( /*! lodash */ 'lodash' );
				/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default =
					/*#__PURE__*/ __webpack_require__.n(
						lodash__WEBPACK_IMPORTED_MODULE_8__
					);

				const StyledInput = ( 0,
				styled_components__WEBPACK_IMPORTED_MODULE_9__[ 'default' ] )(
					( 0,
					_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl )
				)`
	${ ( props ) => {
		if ( props.isInvalid ) {
			return ( 0, styled_components__WEBPACK_IMPORTED_MODULE_9__.css )`
				.components-input-control__backdrop {
					border-color: red !important;
				}

				.components-base-control__help {
					color: red !important;
				}
			`;
		}
	} }
`;
				const StyledBlockEditorControl = styled_components__WEBPACK_IMPORTED_MODULE_9__[
					'default'
				].div`
	margin-bottom: 24px;
`;
				const controlGenerators = {
					panel: function ( {
						control,
						attributes,
						setAttributes,
						metaData,
					} ) {
						return ( 0,
						react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
							_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody,
							{
								title: control.label,
							},
							( 0,
							react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
								Controls,
								{
									controls: control.children,
									attributes: attributes,
									setAttributes: setAttributes,
									metaData: metaData,
								}
							)
						);
					},
					text: function ( {
						attr_key,
						control,
						attributes,
						setAttributes,
						metaData,
					} ) {
						const props = ( 0,
						_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useMemo )( () => {
							return ( 0,
							_wordpress_hooks__WEBPACK_IMPORTED_MODULE_4__.applyFilters )(
								'formgent-field-text-control',
								{
									isInvalid: false,
									help: '',
									attr_key,
									attributes,
									metaData,
								}
							);
						}, [ attributes ] );
						( 0,
						_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useEffect )( () => {
							setAttributes( {
								...attributes,
								isInvalid: props.isInvalid,
							} );
						}, [ props.isInvalid ] );
						return ( 0,
						react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
							StyledInput,
							{
								isInvalid: props.isInvalid,
								label: control.label,
								value: attributes[ attr_key ],
								help: props.help,
								size: '__unstable-large',
								type: control?.inputType,
								onChange: function ( value ) {
									// Update the attribute value in the block's attributes
									setAttributes( {
										[ attr_key ]: value,
									} );
								},
							}
						);
					},
					number: function ( {
						attr_key,
						control,
						attributes,
						setAttributes,
					} ) {
						const handleChange = ( value ) => {
							if (
								( 0,
								lodash__WEBPACK_IMPORTED_MODULE_8__.isUndefined )(
									control.precision
								) ||
								control.precision
							) {
								setAttributes( {
									[ attr_key ]: value,
								} );
								return;
							}
							const integerValue = parseInt( value, 10 );
							if ( ! isNaN( integerValue ) ) {
								setAttributes( {
									[ attr_key ]: integerValue,
								} );
							}
						};
						return ( 0,
						react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
							_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalNumberControl,
							{
								label: control.label,
								value: attributes[ attr_key ],
								size: '__unstable-large',
								step: 1,
								onChange: handleChange,
							}
						);
					},
					select: function ( {
						attr_key,
						control,
						attributes,
						setAttributes,
					} ) {
						return ( 0,
						react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
							_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl,
							{
								label: control.label,
								value: attributes[ attr_key ],
								options: control.options,
								onChange: function ( value ) {
									// Update the attribute value in the block's attributes
									setAttributes( {
										[ attr_key ]: value,
									} );
								},
								size: '__unstable-large',
							}
						);
					},
					checkbox: function ( {
						attr_key,
						control,
						attributes,
						setAttributes,
					} ) {
						return ( 0,
						react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
							_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.CheckboxControl,
							{
								label: control.label,
								checked: attributes[ attr_key ],
								onChange: function ( value ) {
									// Update the attribute value in the block's attributes
									setAttributes( {
										[ attr_key ]: value,
									} );
								},
							}
						);
					},
					switch: function ( {
						attr_key,
						control,
						attributes,
						setAttributes,
					} ) {
						return ( 0,
						react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
							_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl,
							{
								label: control.label,
								checked: attributes[ attr_key ],
								onChange: function ( value ) {
									// Update the attribute value in the block's attributes
									setAttributes( {
										[ attr_key ]: value,
									} );
								},
							}
						);
					},
					height: function ( {
						attr_key,
						control,
						attributes,
						setAttributes,
					} ) {
						return ( 0,
						react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
							StyledBlockEditorControl,
							null,
							( 0,
							react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
								_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.HeightControl,
								{
									label: control.label,
									value: attributes[ attr_key ],
									onChange: function ( value ) {
										setAttributes( {
											[ attr_key ]: value,
										} );
									},
								}
							)
						);
					},
					dimension: function ( {
						attr_key,
						control,
						setAttributes,
					} ) {
						const [ values, setValues ] = ( 0,
						_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState )(
							control.values
						);
						return ( 0,
						react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
							_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalBoxControl,
							{
								label: control.label,
								values: values,
								onChange: function ( value ) {
									// Update dimension values
									setValues( value );
									// Update the attribute value in the block's attributes
									setAttributes( {
										[ attr_key ]: value,
									} );
								},
							}
						);
					},
					repeater:
						_controls_Repeater__WEBPACK_IMPORTED_MODULE_5__[
							'default'
						],
					toggle_group: function ( {
						attr_key,
						control,
						attributes,
						setAttributes,
					} ) {
						const toggleOptions = control.options;
						return ( 0,
						react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
							_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControl,
							{
								label: control.label,
								isBlock: true,
								value: attributes[ attr_key ],
								onChange: function ( value ) {
									// Update the attribute value in the block's attributes
									setAttributes( {
										[ attr_key ]: value,
									} );
								},
								size: '__unstable-large',
							},
							toggleOptions.map( ( option, index ) => {
								return ( 0,
								react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
									_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalToggleGroupControlOption,
									{
										key: index,
										value: option.value,
										label: option.label,
									}
								);
							} )
						);
					},
					default_value:
						_controls_DefaultValue__WEBPACK_IMPORTED_MODULE_6__[
							'default'
						],
					color: _controls_ColorPicker__WEBPACK_IMPORTED_MODULE_7__[
						'default'
					],
				};
				function Controls( {
					controls,
					attributes,
					setAttributes,
					metaData,
				} ) {
					return Object.keys( controls ).map( ( key ) => {
						const control = controls[ key ];
						const ControlView =
							controlGenerators[ control[ 'type' ] ];
						if (
							control?.condition &&
							! control.condition( attributes )
						) {
							return false;
						}
						return ( 0,
						react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
							ControlView,
							{
								key: key,
								attr_key: key,
								control: control,
								attributes: attributes,
								metaData: metaData,
								setAttributes: setAttributes,
							}
						);
					} );
				}

				/***/
			},

		/***/ './resources/blocks/controls/ColorPicker.js':
			/*!**************************************************!*\
  !*** ./resources/blocks/controls/ColorPicker.js ***!
  \**************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ PickColor,
						/* harmony export */
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__( /*! react */ 'react' );
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(
						react__WEBPACK_IMPORTED_MODULE_0__
					);
				/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! @wordpress/components */ '@wordpress/components'
					);
				/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_components__WEBPACK_IMPORTED_MODULE_1__
					);
				/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! @wordpress/compose */ '@wordpress/compose'
					);
				/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__
					);

				function PickColor( {
					attr_key,
					control,
					attributes,
					setAttributes,
				} ) {
					function dropdownProps() {
						const isMobile = ( 0,
						_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useViewportMatch )(
							'medium',
							'<'
						);
						return ! isMobile
							? {
									placement: 'left-start',
									offset: 148,
							  }
							: {};
					}
					return ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
						'div',
						{
							className: 'formgent-control-color-picker',
						},
						( 0, react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
							'span',
							{
								className: 'formgent-control-label',
							},
							control.label
						),
						( 0, react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
							_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown,
							{
								className:
									'formgent-control-color-picker-dropdown',
								contentClassName:
									'formgent-control-color-picker-dropdown-content',
								popoverProps: dropdownProps(),
								renderToggle: ( { isOpen, onToggle } ) =>
									( 0,
									react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
										_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button,
										{
											onClick: onToggle,
											'aria-expanded': isOpen,
											className:
												'formgent-control-color-picker-trigger',
										},
										( 0,
										react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
											'span',
											{
												className:
													'formgent-control-color-picker-value',
											},
											attributes[ attr_key ]
										),
										( 0,
										react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
											'span',
											{
												className:
													'formgent-control-color-picker-color',
												style: {
													background:
														attributes[ attr_key ],
												},
											}
										)
									),
								renderContent: () =>
									( 0,
									react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
										'div',
										{
											className:
												'formgent-control-color-picker-input',
										},
										( 0,
										react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
											_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker,
											{
												color: attributes[ attr_key ],
												onChange: function ( value ) {
													setAttributes( {
														[ attr_key ]: value,
													} );
												},
											}
										)
									),
							}
						)
					);
				}

				/***/
			},

		/***/ './resources/blocks/controls/DefaultValue.js':
			/*!***************************************************!*\
  !*** ./resources/blocks/controls/DefaultValue.js ***!
  \***************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ DefaultValue,
						/* harmony export */
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__( /*! react */ 'react' );
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(
						react__WEBPACK_IMPORTED_MODULE_0__
					);
				/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! @wordpress/components */ '@wordpress/components'
					);
				/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_components__WEBPACK_IMPORTED_MODULE_1__
					);
				/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! @wordpress/compose */ '@wordpress/compose'
					);
				/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_2___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__
					);
				/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						/*! @wordpress/i18n */ '@wordpress/i18n'
					);
				/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__
					);
				/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_5__ =
					__webpack_require__(
						/*! react-inlinesvg */ './node_modules/react-inlinesvg/dist/index.mjs'
					);
				/* harmony import */ var _icon_ellipsis_h_svg__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						/*! @icon/ellipsis-h.svg */ './resources/svg/icons/ellipsis-h.svg'
					);

				function dropdownProps() {
					const isMobile = ( 0,
					_wordpress_compose__WEBPACK_IMPORTED_MODULE_2__.useViewportMatch )(
						'medium',
						'<'
					);
					return ! isMobile
						? {
								placement: 'left-start',
								offset: 248,
						  }
						: {};
				}
				function DefaultValue( {
					attr_key,
					control,
					attributes,
					setAttributes,
				} ) {
					const defaultValues = [
						{
							label: ( 0,
							_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__ )(
								'IP Address',
								'formgent'
							),
							value: '{ip}',
						},
						{
							label: ( 0,
							_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__ )(
								'Site URL',
								'formgent'
							),
							value: '{site_url}',
						},
						{
							label: ( 0,
							_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__ )(
								'Site Title',
								'formgent'
							),
							value: '{site_title}',
						},
						{
							label: ( 0,
							_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__ )(
								'User ID',
								'formgent'
							),
							value: '{user.ID}',
						},
						{
							label: ( 0,
							_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__ )(
								'User First Name',
								'formgent'
							),
							value: '{user.first_name}',
						},
						{
							label: ( 0,
							_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__ )(
								'User Last Name',
								'formgent'
							),
							value: '{user.last_name}',
						},
						{
							label: ( 0,
							_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__ )(
								'User Email',
								'formgent'
							),
							value: '{user.user_email}',
						},
						{
							label: ( 0,
							_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__ )(
								'User Username',
								'formgent'
							),
							value: '{user.user_login}',
						},
					];
					function handleAddValue( item ) {
						const currentValue = attributes[ attr_key ] || '';
						const newValue = `${ currentValue }${ item.value }`;
						setAttributes( {
							[ attr_key ]: newValue,
						} );
					}
					return ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
						'div',
						{
							className: 'formgent-control-default-value-wrapper',
						},
						( 0, react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
							'div',
							{
								className: 'formgent-control-default-value',
							},
							( 0,
							react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
								_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.__experimentalInputControl,
								{
									label: control.label,
									value: attributes[ attr_key ],
									size: '__unstable-large',
									onChange: function ( value ) {
										// Update the attribute value in the block's attributes
										setAttributes( {
											[ attr_key ]: value,
										} );
									},
								}
							),
							( 0,
							react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
								_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Dropdown,
								{
									className:
										'formgent-control-default-value-list',
									contentClassName:
										'formgent-control-default-value-list-content',
									popoverProps: dropdownProps(),
									renderToggle: ( { isOpen, onToggle } ) =>
										( 0,
										react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
											_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button,
											{
												onClick: onToggle,
												'aria-expanded': isOpen,
											},
											( 0,
											react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
												react_inlinesvg__WEBPACK_IMPORTED_MODULE_5__[
													'default'
												],
												{
													src: _icon_ellipsis_h_svg__WEBPACK_IMPORTED_MODULE_4__[
														'default'
													],
												}
											)
										),
									renderContent: () =>
										( 0,
										react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
											'div',
											null,
											defaultValues.map(
												( item, index ) => {
													return ( 0,
													react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
														'span',
														{
															key: index,
															onClick: () =>
																handleAddValue(
																	item
																),
														},
														item.label
													);
												}
											)
										),
								}
							)
						)
					);
				}

				/***/
			},

		/***/ './resources/blocks/controls/Repeater.js':
			/*!***********************************************!*\
  !*** ./resources/blocks/controls/Repeater.js ***!
  \***********************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ Repeater,
						/* harmony export */
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__( /*! react */ 'react' );
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(
						react__WEBPACK_IMPORTED_MODULE_0__
					);
				/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! @wordpress/components */ '@wordpress/components'
					);
				/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_components__WEBPACK_IMPORTED_MODULE_1__
					);
				/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! @wordpress/element */ '@wordpress/element'
					);
				/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_element__WEBPACK_IMPORTED_MODULE_2__
					);
				/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_6__ =
					__webpack_require__(
						/*! nanoid */ './node_modules/nanoid/index.browser.js'
					);
				/* harmony import */ var react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__ =
					__webpack_require__(
						/*! react-beautiful-dnd */ './node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js'
					);
				/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_8__ =
					__webpack_require__(
						/*! react-inlinesvg */ './node_modules/react-inlinesvg/dist/index.mjs'
					);
				/* harmony import */ var _icon_dots_move_svg__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						/*! @icon/dots-move.svg */ './resources/svg/icons/dots-move.svg'
					);
				/* harmony import */ var _icon_close_solid_circle_svg__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						/*! @icon/close-solid-circle.svg */ './resources/svg/icons/close-solid-circle.svg'
					);
				/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_5__ =
					__webpack_require__(
						/*! ../Controls */ './resources/blocks/Controls.js'
					);

				function Repeater( {
					attr_key,
					control,
					attributes,
					setAttributes,
				} ) {
					const [ openIndex, setOpenIndex ] = ( 0,
					_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useState )(
						null
					);
					const options = attributes[ attr_key ];

					// Handle drag and drop reordering
					const onDragEnd = (
						{ destination, source },
						sortableArray
					) => {
						if (
							! destination ||
							( destination.droppableId === source.droppableId &&
								destination.index === source.index )
						) {
							return;
						}
						const [ removedItem ] = sortableArray.splice(
							source.index,
							1
						);
						sortableArray.splice(
							destination.index,
							0,
							removedItem
						);
						setAttributes( {
							[ attr_key ]: sortableArray,
						} );
					};

					//handle repeater field remove
					const handleRemoveField = ( id ) => {
						const newFields = options.filter(
							( item ) => item.id !== id
						);
						if ( newFields.length > 0 ) {
							setAttributes( {
								[ attr_key ]: newFields,
							} );
						}
					};

					//handle add repeater field
					const handleAddField = () => {
						const newField = {
							id: ( 0,
							nanoid__WEBPACK_IMPORTED_MODULE_6__.nanoid )(),
							label: 'New Option',
							value: ( 0,
							nanoid__WEBPACK_IMPORTED_MODULE_6__.nanoid )(),
						};
						const newFields = [ ...options, newField ];
						setAttributes( {
							[ attr_key ]: newFields,
						} );
						setOpenIndex( newFields.length - 1 );
					};

					//handle repeater field accordion
					const toggleFieldContent = ( index ) => {
						setOpenIndex( openIndex === index ? null : index );
					};

					//update repeater field value to block attributes
					const handleChange = ( id, fieldKey, value ) => {
						if ( typeof control.onChange === 'function' ) {
							control.onChange(
								id,
								fieldKey,
								value,
								attr_key,
								attributes,
								setAttributes
							);
						} else {
							const newFields = options.map( ( item ) => {
								if ( item.id === id ) {
									return {
										...item,
										[ fieldKey ]: value,
									};
								}
								return item;
							} );
							setAttributes( {
								[ attr_key ]: newFields,
							} );
						}
					};
					const showActions =
						typeof control.show_actions === 'undefined' ||
						control.show_actions;
					return ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
						'div',
						{
							className: 'formgent-repeater-control',
						},
						( 0, react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
							'label',
							{
								className: 'formgent-control-label',
							},
							control.label
						),
						( 0, react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
							react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.DragDropContext,
							{
								onDragEnd: ( results ) =>
									onDragEnd( results, options ),
							},
							( 0,
							react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
								react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Droppable,
								{
									droppableId: 'formgent-droppable-options',
									type: 'formgent-options',
								},
								( provided ) =>
									( 0,
									react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
										'div',
										{
											ref: provided.innerRef,
											...provided.droppableProps,
											className:
												'formgent-droppable-options',
										},
										options &&
											options.map( ( field, index ) => {
												const labelKey =
													control.label_key;
												return ( 0,
												react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
													react_beautiful_dnd__WEBPACK_IMPORTED_MODULE_7__.Draggable,
													{
														draggableId: field.id,
														index: index,
														key: field.id,
													},
													( provided ) =>
														( 0,
														react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
															'div',
															{
																key: field.id,
																className: `formgent-repeater-field ${
																	openIndex ===
																	index
																		? 'formgent-repeater-field--expanded'
																		: ''
																}`,
															},
															( 0,
															react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
																'div',
																{
																	className:
																		'formgent-repeater-field-control',
																	ref: provided.innerRef,
																	...provided.draggableProps,
																	...provided.dragHandleProps,
																},
																( 0,
																react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
																	'div',
																	{
																		className:
																			'formgent-repeater-field-control-actions',
																	},
																	( 0,
																	react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
																		'div',
																		{
																			className:
																				'formgent-repeater-field-title',
																			onClick:
																				() =>
																					toggleFieldContent(
																						index
																					),
																		},
																		typeof field[
																			labelKey
																		] ===
																			'undefined'
																			? control
																					.fields[
																					control
																						.label_key
																			  ]
																					?.label
																			: field[
																					labelKey
																			  ]
																	),
																	showActions
																		? ( 0,
																		  react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
																				'span',
																				{
																					onClick:
																						() =>
																							handleRemoveField(
																								field.id
																							),
																					className:
																						'formgent-repeater-field-remove',
																				},
																				( 0,
																				react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
																					react_inlinesvg__WEBPACK_IMPORTED_MODULE_8__[
																						'default'
																					],
																					{
																						src: _icon_close_solid_circle_svg__WEBPACK_IMPORTED_MODULE_4__[
																							'default'
																						],
																					}
																				)
																		  )
																		: ''
																),
																( 0,
																react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
																	'div',
																	{
																		className:
																			'formgent-repeater-field-control-move',
																	},
																	( 0,
																	react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
																		react_inlinesvg__WEBPACK_IMPORTED_MODULE_8__[
																			'default'
																		],
																		{
																			src: _icon_dots_move_svg__WEBPACK_IMPORTED_MODULE_3__[
																				'default'
																			],
																		}
																	)
																)
															),
															openIndex ===
																index &&
																( 0,
																react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
																	'div',
																	{
																		className:
																			'formgent-repeater-field-control-content',
																	},
																	( 0,
																	react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
																		_Controls__WEBPACK_IMPORTED_MODULE_5__[
																			'default'
																		],
																		{
																			controls:
																				control.fields,
																			attributes:
																				field,
																			setAttributes:
																				(
																					updatedField
																				) => {
																					Object.keys(
																						updatedField
																					).forEach(
																						(
																							fieldKey
																						) => {
																							handleChange(
																								field.id,
																								fieldKey,
																								updatedField[
																									fieldKey
																								]
																							);
																						}
																					);
																				},
																		}
																	)
																)
														)
												);
											} )
									)
							)
						),
						( 0, react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
							'div',
							{
								className: 'formgent-repeater__add-item',
							},
							showActions
								? ( 0,
								  react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
										'span',
										{
											className:
												'formgent-repeater__add-item__link',
											onClick: handleAddField,
										},
										( 0,
										react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
											_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon,
											{
												icon: 'plus',
											}
										),
										' ',
										( 0,
										react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
											'span',
											null,
											control.add_button_text
										)
								  )
								: ''
						)
					);
				}

				/***/
			},

		/***/ './resources/blocks/single-choice/Edit.js':
			/*!************************************************!*\
  !*** ./resources/blocks/single-choice/Edit.js ***!
  \************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
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
				/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! @wordpress/element */ '@wordpress/element'
					);
				/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_element__WEBPACK_IMPORTED_MODULE_2__
					);
				/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						/*! @wordpress/i18n */ '@wordpress/i18n'
					);
				/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__
					);
				/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_5__ =
					__webpack_require__(
						/*! nanoid */ './node_modules/nanoid/index.browser.js'
					);
				/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						/*! ./editor.scss */ './resources/blocks/single-choice/editor.scss'
					);

				function Edit( { attributes, setAttributes } ) {
					function handleClick( e ) {
						e.preventDefault(); // Prevents the default action
						e.stopPropagation(); // Stops the event from propagating
					}
					function handleAddOption() {
						const newField = {
							id: ( 0,
							nanoid__WEBPACK_IMPORTED_MODULE_5__.nanoid )(),
							label: 'New Option',
							value: ( 0,
							nanoid__WEBPACK_IMPORTED_MODULE_5__.nanoid )(),
						};
						const newFields = [ ...attributes.options, newField ];
						setAttributes( {
							options: newFields,
						} );
					}
					function handleDeleteOption( id ) {
						const newOptions = attributes.options.filter(
							( option ) => option.id !== id
						);
						if ( newOptions.length > 0 ) {
							setAttributes( {
								options: newOptions,
							} );
						}
					}
					( 0,
					_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect )( () => {
						if ( attributes.options.length === 0 ) {
							handleAddOption();
						}
					}, [] );
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
										'Select your choice'
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
									'formgent-editor-block-list__single__wrapper formgent-editor-block-list__single__wrapper--single-choice',
							},
							( 0,
							react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
								'div',
								{
									className:
										'formgent-editor-block-list__single__box',
								},
								attributes.options.map( ( option, index ) =>
									( 0,
									react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
										'div',
										{
											key: index,
											className: `formgent-editor-block-list__single__box__choice ${
												attributes.options.length === 1
													? 'disable'
													: ''
											} formgent-editor-block-list__single__box__choice--${
												attributes.style
											}`,
										},
										( 0,
										react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
											'input',
											{
												className:
													'formgent-editor-block-list__single__input formgent-editor-block-list__single__input--radio',
												type: 'radio',
												id: option.id,
												name: attributes.name,
												value: option.value,
												checked:
													attributes.value ===
													option.value,
												onChange: () => {},
												onClick: ( e ) =>
													handleClick( e ),
											}
										),
										( 0,
										react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
											'label',
											{
												htmlFor: option.id,
												className:
													'formgent-editor-block-list__single__label',
											},
											option.label
										),
										( 0,
										react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
											'button',
											{
												className:
													'formgent-editor-block-list__single__box__choice__delete',
												onClick: () => {
													handleDeleteOption(
														option.id
													);
												},
											},
											( 0,
											react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
												'svg',
												{
													width: '16',
													height: '16',
													viewBox: '0 0 24 24',
													fill: 'none',
													xmlns: 'http://www.w3.org/2000/svg',
												},
												( 0,
												react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
													'path',
													{
														d: 'M17 7L7 17M7 7L17 17',
														stroke: 'currentColor',
														strokeWidth: '2',
														strokeLinecap: 'round',
														strokeLinejoin: 'round',
													}
												)
											)
										)
									)
								),
								( 0,
								react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
									'button',
									{
										className:
											'formgent-editor-block-list__single__box__add',
										onClick: () => {
											handleAddOption();
										},
									},
									( 0,
									react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
										'span',
										{
											className:
												'formgent-editor-block-list__single__box__add__icon',
										},
										( 0,
										react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
											'svg',
											{
												width: '16',
												height: '16',
												viewBox: '0 0 24 24',
												fill: 'none',
												xmlns: 'http://www.w3.org/2000/svg',
											},
											( 0,
											react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
												'path',
												{
													d: 'M12 5V19M5 12H19',
													stroke: 'currentColor',
													strokeWidth: '2',
													strokeLinecap: 'round',
													strokeLinejoin: 'round',
												}
											)
										)
									),
									'Add Option'
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

		/***/ './resources/blocks/single-choice/index.js':
			/*!*************************************************!*\
  !*** ./resources/blocks/single-choice/index.js ***!
  \*************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
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
				/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! ../utils */ './resources/blocks/utils.js'
					);
				/* harmony import */ var _Edit__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						/*! ./Edit */ './resources/blocks/single-choice/Edit.js'
					);
				/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						/*! ./block.json */ './resources/blocks/single-choice/block.json'
					);
				/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ =
					__webpack_require__(
						/*! ./style.scss */ './resources/blocks/single-choice/style.scss'
					);
				/**
				 * wordpress dependencies
				 */

				/**
				 * Internal dependencies
				 */

				const exampleAttributes = {};
				const generalControls = {
					general: {
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
							style: {
								type: 'toggle_group',
								label: ( 0,
								_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
									'Style',
									'formgent'
								),
								options: [
									{
										label: ( 0,
										_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
											'Frame',
											'formgent'
										),
										value: 'frame',
									},
									{
										label: ( 0,
										_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
											'Standard',
											'formgent'
										),
										value: 'standard',
									},
								],
							},
							options: {
								type: 'repeater',
								label: ( 0,
								_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
									'Single Choice Items',
									'formgent'
								),
								label_key: 'label',
								add_button_text: 'Add Item',
								onChange:
									_utils__WEBPACK_IMPORTED_MODULE_2__.onChangeChoiceOptions,
								fields: {
									label: {
										type: 'text',
										label: ( 0,
										_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
											'Label',
											'formgent'
										),
									},
								},
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
							options: {
								type: 'repeater',
								label: ( 0,
								_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
									'Options value',
									'formgent'
								),
								label_key: 'label',
								show_actions: false,
								onChange:
									_utils__WEBPACK_IMPORTED_MODULE_2__.onChangeChoiceOptions,
								fields: {
									value: {
										type: 'text',
										label: ( 0,
										_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__ )(
											'Value',
											'formgent'
										),
									},
								},
							},
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
					_block_json__WEBPACK_IMPORTED_MODULE_4__,
					controls,
					_Edit__WEBPACK_IMPORTED_MODULE_3__[ 'default' ],
					'smiley',
					exampleAttributes
				);

				/***/
			},

		/***/ './resources/blocks/utils.js':
			/*!***********************************!*\
  !*** ./resources/blocks/utils.js ***!
  \***********************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ onChangeChoiceOptions: () =>
							/* binding */ onChangeChoiceOptions,
						/* harmony export */ registerBlock: () =>
							/* binding */ registerBlock,
						/* harmony export */
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__( /*! react */ 'react' );
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(
						react__WEBPACK_IMPORTED_MODULE_0__
					);
				/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! @wordpress/i18n */ '@wordpress/i18n'
					);
				/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__
					);
				/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! @wordpress/block-editor */ '@wordpress/block-editor'
					);
				/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__
					);
				/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						/*! ./Controls */ './resources/blocks/Controls.js'
					);
				/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						/*! @wordpress/element */ '@wordpress/element'
					);
				/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_element__WEBPACK_IMPORTED_MODULE_4__
					);
				/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_11__ =
					__webpack_require__(
						/*! nanoid */ './node_modules/nanoid/index.browser.js'
					);
				/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ =
					__webpack_require__(
						/*! @wordpress/data */ '@wordpress/data'
					);
				/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_data__WEBPACK_IMPORTED_MODULE_5__
					);
				/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__ =
					__webpack_require__(
						/*! @wordpress/hooks */ '@wordpress/hooks'
					);
				/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__
					);
				/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__ =
					__webpack_require__(
						/*! @wordpress/blocks */ '@wordpress/blocks'
					);
				/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_7___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__
					);
				/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ =
					__webpack_require__(
						/*! @wordpress/components */ '@wordpress/components'
					);
				/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default =
					/*#__PURE__*/ __webpack_require__.n(
						_wordpress_components__WEBPACK_IMPORTED_MODULE_8__
					);
				/* harmony import */ var react_inlinesvg__WEBPACK_IMPORTED_MODULE_12__ =
					__webpack_require__(
						/*! react-inlinesvg */ './node_modules/react-inlinesvg/dist/index.mjs'
					);
				/* harmony import */ var _icon_edit_svg__WEBPACK_IMPORTED_MODULE_9__ =
					__webpack_require__(
						/*! @icon/edit.svg */ './resources/svg/icons/edit.svg'
					);
				/* harmony import */ var _icon_cog_svg__WEBPACK_IMPORTED_MODULE_10__ =
					__webpack_require__(
						/*! @icon/cog.svg */ './resources/svg/icons/cog.svg'
					);

				/**
				 * Internal dependencies
				 */

				const AdvancedControls = () => {
					const fills = ( 0,
					_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.__experimentalUseSlotFills )(
						_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__
							.InspectorAdvancedControls.slotName
					);
					const hasFills = Boolean( fills && fills.length );
					if ( ! hasFills ) {
						return null;
					}
					return ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
						_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.PanelBody,
						{
							className:
								'block-editor-block-inspector__advanced formgent-advanced',
							title: ( 0,
							_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__ )(
								'Block Advanced',
								'formgent'
							),
							initialOpen: false,
						},
						( 0, react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
							_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__
								.InspectorControls.Slot,
							{
								group: 'advanced',
							}
						)
					);
				};
				function generateUniqueKey( baseKey, blocks ) {
					// Regex to match baseKey and any variations like baseKey, baseKey-1, baseKey-2, etc.
					const regex = new RegExp( `^${ baseKey }(?:-(\\d+))?$` );
					// Extract all matching names and their suffix numbers
					const suffixes = blocks
						.map( ( block ) => {
							if ( block.attributes && block.attributes.name ) {
								const match =
									block.attributes.name.match( regex );
								return match
									? match[ 1 ]
										? parseInt( match[ 1 ], 10 )
										: 0
									: null;
							}
							return null;
						} )
						.filter( ( suffix ) => suffix !== null );
					// If no suffixes are found, return the baseKey
					if ( suffixes.length === 0 ) {
						return baseKey;
					}

					// Find the highest suffix used
					const maxSuffix = Math.max( ...suffixes );

					// Return baseKey with an incremented suffix (baseKey-1, baseKey-2, etc.)
					return `${ baseKey }-${ maxSuffix + 1 }`;
				}
				function editorBlockValidation( props ) {
					const { attr_key, attributes, metaData } = props;
					//Only validate if the attribute key is 'name'
					if ( attr_key !== 'name' ) {
						return props;
					}
					const blockEditorStore = ( 0,
					_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.select )(
						'core/block-editor'
					);
					const selectedBlock = blockEditorStore.getSelectedBlock();
					const blocks = blockEditorStore.getBlocks();

					// Return early if no block is selected
					if ( ! selectedBlock ) {
						return props;
					}
					const parentIds = blockEditorStore.getBlockParents(
						selectedBlock.clientId
					);
					const maturedParent = blockEditorStore.getBlocksByClientId(
						parentIds[ parentIds.length - 1 ]
					);
					let allBlocksToCheck = [];
					if ( ! maturedParent.includes( null ) ) {
						let leafBlock = [];
						let siblingBlocks = [];
						if (
							! maturedParent[ 0 ].name.includes( 'formgent/' )
						) {
							blocks.forEach( ( block ) => {
								if ( block.innerBlocks.length === 0 ) {
									leafBlock.push( block );
								} else {
									siblingBlocks.push( block );
								}
							} );
							allBlocksToCheck = [
								...leafBlock,
								...mergeSiblingsBlocks(
									mergeInnerBlocks(
										maturedParent[ 0 ],
										parentIds
									)
								),
								...mergeSiblingsBlocks( siblingBlocks ),
							];
						} else {
							allBlocksToCheck = [
								...mergeSiblingsBlocks(
									mergeInnerBlocks(
										maturedParent[ 0 ],
										parentIds
									)
								),
							];
						}
					} else {
						let leafBlock = [];
						let siblingBlocks = [];
						let hostBlocks = [];
						blocks.forEach( ( block ) => {
							if ( block.innerBlocks.length === 0 ) {
								leafBlock.push( block );
							} else if ( block.name.includes( 'formgent/' ) ) {
								hostBlocks.push( block );
							} else {
								siblingBlocks.push( block );
							}
						} );
						allBlocksToCheck = leafBlock.concat(
							mergeSiblingsBlocks( siblingBlocks ),
							hostBlocks
						);
					}
					const isNameUsed = allBlocksToCheck
						.filter(
							( block ) =>
								block.clientId !== selectedBlock.clientId
						)
						.some(
							( block ) =>
								block.attributes.name === attributes[ attr_key ]
						);
					if ( isNameUsed ) {
						props.help = ( 0,
						_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__ )(
							'This name is already used.',
							'doatmail'
						);
						props.isInvalid = true;
					}
					return props;
				}
				( 0, _wordpress_hooks__WEBPACK_IMPORTED_MODULE_6__.addFilter )(
					'formgent-field-text-control',
					'formgent',
					function ( props ) {
						const { attr_key } = props;
						return editorBlockValidation( props );
					}
				);
				function mergeSiblingsBlocks( blocks ) {
					let mergedBlocks = [];
					blocks.forEach( ( block ) => {
						if (
							! block.name.includes( 'formgent/' ) ||
							block.innerBlocks.length !== 0
						) {
							// Recursively merge inner blocks
							const innerMergedBlocks = mergeSiblingsBlocks(
								block.innerBlocks
							);
							innerMergedBlocks.forEach( ( innerBlock ) => {
								if (
									! mergedBlocks.some(
										( existingBlock ) =>
											existingBlock.clientId ===
											innerBlock.clientId
									)
								) {
									mergedBlocks.push( innerBlock );
								}
							} );
							//mergedBlocks = mergedBlocks.concat(mergeSiblingsBlocks(block.innerBlocks));
						} else {
							// Only add the block if it's not already in mergedBlocks
							if (
								! mergedBlocks.some(
									( existingBlock ) =>
										existingBlock.clientId ===
										block.clientId
								)
							) {
								mergedBlocks.push( block );
							}
							//mergedBlocks.push(block);
						}
					} );
					return mergedBlocks;
				}
				const mergeInnerBlocks = ( block, blockParentIds ) => {
					let mergeBlocks = [];
					const blockEditorStore = ( 0,
					_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.select )(
						'core/block-editor'
					);
					if ( block.innerBlocks ) {
						mergeBlocks = [ ...block.innerBlocks ];

						// Recursively merge innerBlocks of each block
						block.innerBlocks.forEach( ( innerBlock ) => {
							mergeBlocks = mergeBlocks.concat(
								mergeInnerBlocks( innerBlock )
							);
						} );
					}
					if ( blockParentIds && blockParentIds.length > 1 ) {
						mergeBlocks = mergeParentBlocks(
							blockParentIds,
							mergeBlocks,
							blockEditorStore
						);
					}
					return mergeBlocks.filter(
						( block ) => block.name !== 'core/group'
					);
				};
				function mergeParentBlocks(
					blockParentIds,
					mergeBlocks,
					blockEditorStore
				) {
					let mergedParentBlocks = [ ...mergeBlocks ];
					for ( let i = blockParentIds.length - 1; i >= 0; i-- ) {
						const parent = blockEditorStore.getBlocksByClientId(
							blockParentIds[ i ]
						);
						if ( ! parent[ 0 ].name.includes( 'formgent/' ) ) {
							const innerBlocksClientIds =
								parent[ 0 ].innerBlocks.map(
									( block ) => block.clientId
								);
							mergedParentBlocks = mergeParentBlocks(
								innerBlocksClientIds,
								mergedParentBlocks,
								blockEditorStore
							);
						} else {
							const isAlreadyMerged = mergedParentBlocks.some(
								( block ) =>
									block.clientId === parent[ 0 ].clientId
							);
							if ( ! isAlreadyMerged ) {
								mergedParentBlocks =
									mergedParentBlocks.concat( parent );
							}
						}
					}
					return mergedParentBlocks;
				}
				const updateBlockAttributtes = (
					blockId,
					name,
					filteredBlocks
				) => {
					( 0,
					_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.dispatch )(
						'core/block-editor'
					).updateBlockAttributes( blockId, {
						id: ( 0, nanoid__WEBPACK_IMPORTED_MODULE_11__.nanoid )(
							12
						),
						name: generateUniqueKey( name, filteredBlocks ),
					} );
				};
				const getFilteredBlocks = ( blocksArray, id ) => {
					return blocksArray.filter(
						( block ) => block.clientId !== id
					);
				};
				function Block( {
					controls,
					Edit,
					attributes,
					setAttributes,
					metaData,
					clientId,
				} ) {
					const blockProps = ( 0,
					_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps )();
					const [ draggingEnded, setDraggingEnded ] = ( 0,
					_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState )(
						false
					);
					const [ selectedTab, setSelectedTab ] = ( 0,
					_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState )(
						''
					);
					const isBeingDragged = ( 0,
					_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.useSelect )(
						( select ) => {
							const { isBlockBeingDragged } =
								select( 'core/block-editor' );
							return isBlockBeingDragged( clientId );
						},
						[ clientId ]
					);
					( 0,
					_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect )( () => {
						// When dragging state changes
						if ( isBeingDragged ) {
							// Dragging started
							setDraggingEnded( false );
						} else if ( draggingEnded === false ) {
							// Dragging has ended
							setDraggingEnded( true );
						}
					}, [ isBeingDragged ] );

					// The value you need when dragging ends
					( 0,
					_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect )( () => {
						if ( draggingEnded ) {
							editorBlockValidation( {
								isInvalid: false,
								help: '',
								attr_key: 'name',
								attributes,
								metaData,
							} );
						}
					}, [ draggingEnded ] );
					( 0,
					_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect )( () => {
						const blockEditorStore = ( 0,
						_wordpress_data__WEBPACK_IMPORTED_MODULE_5__.select )(
							'core/block-editor'
						);
						const blocks = blockEditorStore.getBlocks();
						const parentIds = blockEditorStore.getBlockParents(
							blockProps[ 'data-block' ]
						);
						const maturedParent =
							blockEditorStore.getBlocksByClientId(
								parentIds[ parentIds.length - 1 ]
							);
						const blockName = metaData.name;
						const currentId = attributes.id;
						const isNewBlock =
							! currentId || currentId.length === 0;
						if ( isNewBlock ) {
							// If Parent blocks having child (Address, Name Block)
							if ( ! maturedParent.includes( null ) ) {
								let leafBlock = [];
								let siblingBlocks = [];
								let allBlocksToCheck = [];
								if (
									! maturedParent[ 0 ].name.includes(
										'formgent/'
									)
								) {
									blocks.forEach( ( block ) => {
										if ( block.innerBlocks.length === 0 ) {
											leafBlock.push( block );
										} else {
											siblingBlocks.push( block );
										}
									} );
									allBlocksToCheck = [
										...leafBlock,
										...mergeSiblingsBlocks(
											mergeInnerBlocks(
												maturedParent[ 0 ],
												parentIds
											)
										),
										...mergeSiblingsBlocks( siblingBlocks ),
									];
								} else {
									allBlocksToCheck = [
										...mergeSiblingsBlocks(
											mergeInnerBlocks(
												maturedParent[ 0 ],
												parentIds
											)
										),
									];
								}
								const filteredChildBlocks = getFilteredBlocks(
									allBlocksToCheck,
									blockProps[ 'data-block' ]
								);
								setAttributes( {
									id: ( 0,
									nanoid__WEBPACK_IMPORTED_MODULE_11__.nanoid )(
										12
									),
									name: generateUniqueKey(
										attributes.name.replace( /-\d+$/, '' ),
										filteredChildBlocks
									),
								} );
							} else {
								let leafBlock = [];
								let siblingBlocks = [];
								let hostBlocks = [];
								blocks.forEach( ( block ) => {
									if ( block.innerBlocks.length === 0 ) {
										leafBlock.push( block );
									} else if (
										block.name.includes( 'formgent/' )
									) {
										hostBlocks.push( block );
									} else {
										siblingBlocks.push( block );
									}
								} );
								const allBlocksToCheck = leafBlock.concat(
									mergeSiblingsBlocks( siblingBlocks ),
									hostBlocks
								);

								//Hiving no child
								// All blocks of the same type, excluding the current block
								const filteredBlocks = getFilteredBlocks(
									allBlocksToCheck,
									blockProps[ 'data-block' ]
								);
								setAttributes( {
									id: ( 0,
									nanoid__WEBPACK_IMPORTED_MODULE_11__.nanoid )(
										12
									),
									name: generateUniqueKey(
										blockName.substring(
											'formgent/'.length
										),
										filteredBlocks
									),
								} );
							}
						} else {
							const selectedBlock =
								blockEditorStore.getSelectedBlock();
							//If Blocks are duplicated
							// If Parent blocks having child (Address, Name Block)
							if ( ! maturedParent.includes( null ) ) {
								if (
									selectedBlock &&
									selectedBlock.name.includes( 'formgent/' )
								) {
									const duplicatedChildBlocks =
										maturedParent[ 0 ].innerBlocks.filter(
											( childBlock ) =>
												childBlock.attributes.id ===
												currentId
										);
									if ( duplicatedChildBlocks[ 1 ] ) {
										//skip current duplicated block
										const filteredChildBlocks =
											getFilteredBlocks(
												blocks,
												duplicatedChildBlocks[ 1 ]
													.clientId
											);
										updateBlockAttributtes(
											duplicatedChildBlocks[ 1 ].clientId,
											attributes.name.replace(
												/-\d+$/,
												''
											),
											filteredChildBlocks
										);
									}
								} else {
									const duplicatedChildBlocks = blocks.filter(
										( childBlock ) =>
											childBlock.attributes.id ===
											currentId
									);
								}
								//Filter duplicated blocks
							} else {
								//Hiving no child
								//Filter duplicated blocks
								const duplicateBlocks = blocks.filter(
									( block ) =>
										block.attributes.id === currentId
								);
								if ( duplicateBlocks[ 1 ] ) {
									//skip current duplicated block
									const filteredBlocks = getFilteredBlocks(
										blocks,
										duplicateBlocks[ 1 ].clientId
									);
									updateBlockAttributtes(
										duplicateBlocks[ 1 ].clientId,
										blockName.substring(
											'formgent/'.length
										),
										filteredBlocks
									);
								}
							}
						}
					}, [] );
					const [ isSelectedInput, setIsSelectedInput ] = ( 0,
					_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState )(
						false
					);
					return ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
						_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment,
						null,
						( 0, react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
							'div',
							{
								...blockProps,
							},
							( 0,
							react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
								Edit,
								{
									attributes: attributes,
									setAttributes: setAttributes,
									inputProps: {
										onFocus: () =>
											setIsSelectedInput( true ),
										// Set focus on RichText
										onBlur: () =>
											setIsSelectedInput( false ), // Reset focus on blur
									},
								}
							)
						),
						! isSelectedInput &&
							( 0,
							react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
								_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls,
								null,
								( 0,
								react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
									_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.ToolbarGroup,
									null,
									( 0,
									react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
										_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Button,
										{
											variant: 'secondary',
										},
										'100%'
									),
									( 0,
									react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
										_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Button,
										{
											variant: 'secondary',
										},
										'75%'
									),
									( 0,
									react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
										_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Button,
										{
											variant: 'secondary',
										},
										'50%'
									),
									( 0,
									react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
										_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Button,
										{
											variant: 'secondary',
										},
										'33%'
									),
									( 0,
									react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
										_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Button,
										{
											variant: 'secondary',
										},
										'25%'
									)
								)
							),
						( 0, react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
							_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls,
							null,
							( 0,
							react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
								'div',
								{
									className: 'formgent',
								},
								( 0,
								react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
									_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.TabPanel,
									{
										className: `control-tabs control-tabs--${ selectedTab }`,
										tabs: [
											{
												name: 'general',
												icon: ( 0,
												react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
													'span',
													{
														className:
															'formgent-control-tab-icon',
													},
													( 0,
													react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
														react_inlinesvg__WEBPACK_IMPORTED_MODULE_12__[
															'default'
														],
														{
															src: _icon_edit_svg__WEBPACK_IMPORTED_MODULE_9__[
																'default'
															],
														}
													),
													' ',
													( 0,
													_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__ )(
														'General',
														'formgent'
													)
												),
											},
											{
												name: 'advanced',
												icon: ( 0,
												react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
													'span',
													{
														className:
															'formgent-control-tab-icon',
													},
													( 0,
													react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
														react_inlinesvg__WEBPACK_IMPORTED_MODULE_12__[
															'default'
														],
														{
															src: _icon_cog_svg__WEBPACK_IMPORTED_MODULE_10__[
																'default'
															],
														}
													),
													' ',
													( 0,
													_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__ )(
														'Advanced',
														'formgent'
													)
												),
											},
										],
										onSelect: ( tabName ) => {
											setSelectedTab( tabName );
										},
									},
									( tab ) => {
										if ( tab.name === 'general' ) {
											return ( 0,
											react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
												_Controls__WEBPACK_IMPORTED_MODULE_3__[
													'default'
												],
												{
													controls:
														controls.generalControls,
													attributes: attributes,
													setAttributes:
														setAttributes,
													metaData: metaData,
												}
											);
										}
										if ( tab.name === 'advanced' ) {
											return ( 0,
											react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
												_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.Fragment,
												null,
												( 0,
												react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
													_Controls__WEBPACK_IMPORTED_MODULE_3__[
														'default'
													],
													{
														controls:
															controls.advancedControls,
														attributes: attributes,
														setAttributes:
															setAttributes,
														metaData: metaData,
													}
												),
												( 0,
												react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
													AdvancedControls,
													null
												)
											);
										}
										return null;
									}
								)
							)
						)
					);
				}
				function registerBlock(
					metadata,
					controls,
					Edit,
					icon = 'smiley',
					exampleAttributes = {},
					props = {}
				) {
					if ( 'formgent_form' === typenow ) {
						( 0,
						_wordpress_blocks__WEBPACK_IMPORTED_MODULE_7__.registerBlockType )(
							metadata.name,
							{
								icon,
								example: {
									attributes: exampleAttributes,
								},
								edit: function ( {
									attributes,
									setAttributes,
									clientId,
								} ) {
									return ( 0,
									react__WEBPACK_IMPORTED_MODULE_0__.createElement )(
										Block,
										{
											controls: controls,
											Edit: Edit,
											attributes: attributes,
											setAttributes: setAttributes,
											metaData: metadata,
											clientId: clientId,
										}
									);
								},
								...props,
							}
						);
					}
				}
				const onChangeChoiceOptions = (
					id,
					fieldKey,
					value,
					attr_key,
					attributes,
					setAttributes
				) => {
					const newFields = attributes[ attr_key ].map( ( item ) => {
						if ( item.id !== id ) {
							return item;
						}
						const values = {
							...item,
							[ fieldKey ]: value,
						};
						if ( 'label' === fieldKey && ! values.isCustomValue ) {
							values[ 'value' ] = value
								.trim()
								.toLowerCase()
								.replace( ' ', '-' );
						} else if ( 'value' === fieldKey ) {
							values[ 'isCustomValue' ] = true;
						}
						return values;
					} );
					setAttributes( {
						[ attr_key ]: newFields,
					} );
				};

				/***/
			},

		/***/ './node_modules/css-box-model/dist/css-box-model.esm.js':
			/*!**************************************************************!*\
  !*** ./node_modules/css-box-model/dist/css-box-model.esm.js ***!
  \**************************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ calculateBox: () =>
							/* binding */ calculateBox,
						/* harmony export */ createBox: () =>
							/* binding */ createBox,
						/* harmony export */ expand: () => /* binding */ expand,
						/* harmony export */ getBox: () => /* binding */ getBox,
						/* harmony export */ getRect: () =>
							/* binding */ getRect,
						/* harmony export */ offset: () => /* binding */ offset,
						/* harmony export */ shrink: () => /* binding */ shrink,
						/* harmony export */ withScroll: () =>
							/* binding */ withScroll,
						/* harmony export */
					}
				);
				/* harmony import */ var tiny_invariant__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! tiny-invariant */ './node_modules/tiny-invariant/dist/esm/tiny-invariant.js'
					);

				var getRect = function getRect( _ref ) {
					var top = _ref.top,
						right = _ref.right,
						bottom = _ref.bottom,
						left = _ref.left;
					var width = right - left;
					var height = bottom - top;
					var rect = {
						top: top,
						right: right,
						bottom: bottom,
						left: left,
						width: width,
						height: height,
						x: left,
						y: top,
						center: {
							x: ( right + left ) / 2,
							y: ( bottom + top ) / 2,
						},
					};
					return rect;
				};
				var expand = function expand( target, expandBy ) {
					return {
						top: target.top - expandBy.top,
						left: target.left - expandBy.left,
						bottom: target.bottom + expandBy.bottom,
						right: target.right + expandBy.right,
					};
				};
				var shrink = function shrink( target, shrinkBy ) {
					return {
						top: target.top + shrinkBy.top,
						left: target.left + shrinkBy.left,
						bottom: target.bottom - shrinkBy.bottom,
						right: target.right - shrinkBy.right,
					};
				};

				var shift = function shift( target, shiftBy ) {
					return {
						top: target.top + shiftBy.y,
						left: target.left + shiftBy.x,
						bottom: target.bottom + shiftBy.y,
						right: target.right + shiftBy.x,
					};
				};

				var noSpacing = {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
				};
				var createBox = function createBox( _ref2 ) {
					var borderBox = _ref2.borderBox,
						_ref2$margin = _ref2.margin,
						margin =
							_ref2$margin === void 0 ? noSpacing : _ref2$margin,
						_ref2$border = _ref2.border,
						border =
							_ref2$border === void 0 ? noSpacing : _ref2$border,
						_ref2$padding = _ref2.padding,
						padding =
							_ref2$padding === void 0
								? noSpacing
								: _ref2$padding;
					var marginBox = getRect( expand( borderBox, margin ) );
					var paddingBox = getRect( shrink( borderBox, border ) );
					var contentBox = getRect( shrink( paddingBox, padding ) );
					return {
						marginBox: marginBox,
						borderBox: getRect( borderBox ),
						paddingBox: paddingBox,
						contentBox: contentBox,
						margin: margin,
						border: border,
						padding: padding,
					};
				};

				var parse = function parse( raw ) {
					var value = raw.slice( 0, -2 );
					var suffix = raw.slice( -2 );

					if ( suffix !== 'px' ) {
						return 0;
					}

					var result = Number( value );
					!! isNaN( result )
						? true
							? ( 0,
							  tiny_invariant__WEBPACK_IMPORTED_MODULE_0__[
									'default'
							  ] )(
									false,
									'Could not parse value [raw: ' +
										raw +
										', without suffix: ' +
										value +
										']'
							  )
							: 0
						: void 0;
					return result;
				};

				var getWindowScroll = function getWindowScroll() {
					return {
						x: window.pageXOffset,
						y: window.pageYOffset,
					};
				};

				var offset = function offset( original, change ) {
					var borderBox = original.borderBox,
						border = original.border,
						margin = original.margin,
						padding = original.padding;
					var shifted = shift( borderBox, change );
					return createBox( {
						borderBox: shifted,
						border: border,
						margin: margin,
						padding: padding,
					} );
				};
				var withScroll = function withScroll( original, scroll ) {
					if ( scroll === void 0 ) {
						scroll = getWindowScroll();
					}

					return offset( original, scroll );
				};
				var calculateBox = function calculateBox( borderBox, styles ) {
					var margin = {
						top: parse( styles.marginTop ),
						right: parse( styles.marginRight ),
						bottom: parse( styles.marginBottom ),
						left: parse( styles.marginLeft ),
					};
					var padding = {
						top: parse( styles.paddingTop ),
						right: parse( styles.paddingRight ),
						bottom: parse( styles.paddingBottom ),
						left: parse( styles.paddingLeft ),
					};
					var border = {
						top: parse( styles.borderTopWidth ),
						right: parse( styles.borderRightWidth ),
						bottom: parse( styles.borderBottomWidth ),
						left: parse( styles.borderLeftWidth ),
					};
					return createBox( {
						borderBox: borderBox,
						margin: margin,
						padding: padding,
						border: border,
					} );
				};
				var getBox = function getBox( el ) {
					var borderBox = el.getBoundingClientRect();
					var styles = window.getComputedStyle( el );
					return calculateBox( borderBox, styles );
				};

				/***/
			},

		/***/ './node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js':
			/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
			/***/ ( module, __unused_webpack_exports, __webpack_require__ ) => {
				'use strict';

				var reactIs = __webpack_require__(
					/*! react-is */ './node_modules/react-is/index.js'
				);

				/**
				 * Copyright 2015, Yahoo! Inc.
				 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
				 */
				var REACT_STATICS = {
					childContextTypes: true,
					contextType: true,
					contextTypes: true,
					defaultProps: true,
					displayName: true,
					getDefaultProps: true,
					getDerivedStateFromError: true,
					getDerivedStateFromProps: true,
					mixins: true,
					propTypes: true,
					type: true,
				};
				var KNOWN_STATICS = {
					name: true,
					length: true,
					prototype: true,
					caller: true,
					callee: true,
					arguments: true,
					arity: true,
				};
				var FORWARD_REF_STATICS = {
					$$typeof: true,
					render: true,
					defaultProps: true,
					displayName: true,
					propTypes: true,
				};
				var MEMO_STATICS = {
					$$typeof: true,
					compare: true,
					defaultProps: true,
					displayName: true,
					propTypes: true,
					type: true,
				};
				var TYPE_STATICS = {};
				TYPE_STATICS[ reactIs.ForwardRef ] = FORWARD_REF_STATICS;
				TYPE_STATICS[ reactIs.Memo ] = MEMO_STATICS;

				function getStatics( component ) {
					// React v16.11 and below
					if ( reactIs.isMemo( component ) ) {
						return MEMO_STATICS;
					} // React v16.12 and above

					return (
						TYPE_STATICS[ component[ '$$typeof' ] ] || REACT_STATICS
					);
				}

				var defineProperty = Object.defineProperty;
				var getOwnPropertyNames = Object.getOwnPropertyNames;
				var getOwnPropertySymbols = Object.getOwnPropertySymbols;
				var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
				var getPrototypeOf = Object.getPrototypeOf;
				var objectPrototype = Object.prototype;
				function hoistNonReactStatics(
					targetComponent,
					sourceComponent,
					blacklist
				) {
					if ( typeof sourceComponent !== 'string' ) {
						// don't hoist over string (html) components
						if ( objectPrototype ) {
							var inheritedComponent =
								getPrototypeOf( sourceComponent );

							if (
								inheritedComponent &&
								inheritedComponent !== objectPrototype
							) {
								hoistNonReactStatics(
									targetComponent,
									inheritedComponent,
									blacklist
								);
							}
						}

						var keys = getOwnPropertyNames( sourceComponent );

						if ( getOwnPropertySymbols ) {
							keys = keys.concat(
								getOwnPropertySymbols( sourceComponent )
							);
						}

						var targetStatics = getStatics( targetComponent );
						var sourceStatics = getStatics( sourceComponent );

						for ( var i = 0; i < keys.length; ++i ) {
							var key = keys[ i ];

							if (
								! KNOWN_STATICS[ key ] &&
								! ( blacklist && blacklist[ key ] ) &&
								! ( sourceStatics && sourceStatics[ key ] ) &&
								! ( targetStatics && targetStatics[ key ] )
							) {
								var descriptor = getOwnPropertyDescriptor(
									sourceComponent,
									key
								);

								try {
									// Avoid failures from read-only properties
									defineProperty(
										targetComponent,
										key,
										descriptor
									);
								} catch ( e ) {}
							}
						}
					}

					return targetComponent;
				}

				module.exports = hoistNonReactStatics;

				/***/
			},

		/***/ './node_modules/memoize-one/dist/memoize-one.esm.js':
			/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							__WEBPACK_DEFAULT_EXPORT__,
						/* harmony export */
					}
				);
				var safeIsNaN =
					Number.isNaN ||
					function ponyfill( value ) {
						return typeof value === 'number' && value !== value;
					};
				function isEqual( first, second ) {
					if ( first === second ) {
						return true;
					}
					if ( safeIsNaN( first ) && safeIsNaN( second ) ) {
						return true;
					}
					return false;
				}
				function areInputsEqual( newInputs, lastInputs ) {
					if ( newInputs.length !== lastInputs.length ) {
						return false;
					}
					for ( var i = 0; i < newInputs.length; i++ ) {
						if ( ! isEqual( newInputs[ i ], lastInputs[ i ] ) ) {
							return false;
						}
					}
					return true;
				}

				function memoizeOne( resultFn, isEqual ) {
					if ( isEqual === void 0 ) {
						isEqual = areInputsEqual;
					}
					var lastThis;
					var lastArgs = [];
					var lastResult;
					var calledOnce = false;
					function memoized() {
						var newArgs = [];
						for ( var _i = 0; _i < arguments.length; _i++ ) {
							newArgs[ _i ] = arguments[ _i ];
						}
						if (
							calledOnce &&
							lastThis === this &&
							isEqual( newArgs, lastArgs )
						) {
							return lastResult;
						}
						lastResult = resultFn.apply( this, newArgs );
						calledOnce = true;
						lastThis = this;
						lastArgs = newArgs;
						return lastResult;
					}
					return memoized;
				}

				/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
					memoizeOne;

				/***/
			},

		/***/ './resources/blocks/single-choice/editor.scss':
			/*!****************************************************!*\
  !*** ./resources/blocks/single-choice/editor.scss ***!
  \****************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				// extracted by mini-css-extract-plugin

				/***/
			},

		/***/ './resources/blocks/single-choice/style.scss':
			/*!***************************************************!*\
  !*** ./resources/blocks/single-choice/style.scss ***!
  \***************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				// extracted by mini-css-extract-plugin

				/***/
			},

		/***/ './node_modules/object-assign/index.js':
			/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
			/***/ ( module ) => {
				'use strict';
				/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

				/* eslint-disable no-unused-vars */
				var getOwnPropertySymbols = Object.getOwnPropertySymbols;
				var hasOwnProperty = Object.prototype.hasOwnProperty;
				var propIsEnumerable = Object.prototype.propertyIsEnumerable;

				function toObject( val ) {
					if ( val === null || val === undefined ) {
						throw new TypeError(
							'Object.assign cannot be called with null or undefined'
						);
					}

					return Object( val );
				}

				function shouldUseNative() {
					try {
						if ( ! Object.assign ) {
							return false;
						}

						// Detect buggy property enumeration order in older V8 versions.

						// https://bugs.chromium.org/p/v8/issues/detail?id=4118
						var test1 = new String( 'abc' ); // eslint-disable-line no-new-wrappers
						test1[ 5 ] = 'de';
						if (
							Object.getOwnPropertyNames( test1 )[ 0 ] === '5'
						) {
							return false;
						}

						// https://bugs.chromium.org/p/v8/issues/detail?id=3056
						var test2 = {};
						for ( var i = 0; i < 10; i++ ) {
							test2[ '_' + String.fromCharCode( i ) ] = i;
						}
						var order2 = Object.getOwnPropertyNames( test2 ).map(
							function ( n ) {
								return test2[ n ];
							}
						);
						if ( order2.join( '' ) !== '0123456789' ) {
							return false;
						}

						// https://bugs.chromium.org/p/v8/issues/detail?id=3056
						var test3 = {};
						'abcdefghijklmnopqrst'
							.split( '' )
							.forEach( function ( letter ) {
								test3[ letter ] = letter;
							} );
						if (
							Object.keys( Object.assign( {}, test3 ) ).join(
								''
							) !== 'abcdefghijklmnopqrst'
						) {
							return false;
						}

						return true;
					} catch ( err ) {
						// We don't expect any of the above to throw, but better to be safe.
						return false;
					}
				}

				module.exports = shouldUseNative()
					? Object.assign
					: function ( target, source ) {
							var from;
							var to = toObject( target );
							var symbols;

							for ( var s = 1; s < arguments.length; s++ ) {
								from = Object( arguments[ s ] );

								for ( var key in from ) {
									if ( hasOwnProperty.call( from, key ) ) {
										to[ key ] = from[ key ];
									}
								}

								if ( getOwnPropertySymbols ) {
									symbols = getOwnPropertySymbols( from );
									for ( var i = 0; i < symbols.length; i++ ) {
										if (
											propIsEnumerable.call(
												from,
												symbols[ i ]
											)
										) {
											to[ symbols[ i ] ] =
												from[ symbols[ i ] ];
										}
									}
								}
							}

							return to;
					  };

				/***/
			},

		/***/ './node_modules/prop-types/checkPropTypes.js':
			/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
			/***/ ( module, __unused_webpack_exports, __webpack_require__ ) => {
				'use strict';
				/**
				 * Copyright (c) 2013-present, Facebook, Inc.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */

				var printWarning = function () {};

				if ( true ) {
					var ReactPropTypesSecret = __webpack_require__(
						/*! ./lib/ReactPropTypesSecret */ './node_modules/prop-types/lib/ReactPropTypesSecret.js'
					);
					var loggedTypeFailures = {};
					var has = __webpack_require__(
						/*! ./lib/has */ './node_modules/prop-types/lib/has.js'
					);

					printWarning = function ( text ) {
						var message = 'Warning: ' + text;
						if ( typeof console !== 'undefined' ) {
							console.error( message );
						}
						try {
							// --- Welcome to debugging React ---
							// This error was thrown as a convenience so that you can use this stack
							// to find the callsite that caused this warning to fire.
							throw new Error( message );
						} catch ( x ) {
							/**/
						}
					};
				}

				/**
				 * Assert that the values match with the type specs.
				 * Error messages are memorized and will only be shown once.
				 *
				 * @param {object} typeSpecs Map of name to a ReactPropType
				 * @param {object} values Runtime values that need to be type-checked
				 * @param {string} location e.g. "prop", "context", "child context"
				 * @param {string} componentName Name of the component for error messages.
				 * @param {?Function} getStack Returns the component stack.
				 * @private
				 */
				function checkPropTypes(
					typeSpecs,
					values,
					location,
					componentName,
					getStack
				) {
					if ( true ) {
						for ( var typeSpecName in typeSpecs ) {
							if ( has( typeSpecs, typeSpecName ) ) {
								var error;
								// Prop type validation may throw. In case they do, we don't want to
								// fail the render phase where it didn't fail before. So we log it.
								// After these have been cleaned up, we'll let them throw.
								try {
									// This is intentionally an invariant that gets caught. It's the same
									// behavior as without this statement except with a better message.
									if (
										typeof typeSpecs[ typeSpecName ] !==
										'function'
									) {
										var err = Error(
											( componentName || 'React class' ) +
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
										err.name = 'Invariant Violation';
										throw err;
									}
									error = typeSpecs[ typeSpecName ](
										values,
										typeSpecName,
										componentName,
										location,
										null,
										ReactPropTypesSecret
									);
								} catch ( ex ) {
									error = ex;
								}
								if ( error && ! ( error instanceof Error ) ) {
									printWarning(
										( componentName || 'React class' ) +
											': type specification of ' +
											location +
											' `' +
											typeSpecName +
											'` is invalid; the type checker ' +
											'function must return `null` or an `Error` but returned a ' +
											typeof error +
											'. ' +
											'You may have forgotten to pass an argument to the type checker ' +
											'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
											'shape all require an argument).'
									);
								}
								if (
									error instanceof Error &&
									! ( error.message in loggedTypeFailures )
								) {
									// Only monitor this failure once because there tends to be a lot of the
									// same error.
									loggedTypeFailures[ error.message ] = true;

									var stack = getStack ? getStack() : '';

									printWarning(
										'Failed ' +
											location +
											' type: ' +
											error.message +
											( stack != null ? stack : '' )
									);
								}
							}
						}
					}
				}

				/**
				 * Resets warning cache when testing.
				 *
				 * @private
				 */
				checkPropTypes.resetWarningCache = function () {
					if ( true ) {
						loggedTypeFailures = {};
					}
				};

				module.exports = checkPropTypes;

				/***/
			},

		/***/ './node_modules/prop-types/factoryWithTypeCheckers.js':
			/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
			/***/ ( module, __unused_webpack_exports, __webpack_require__ ) => {
				'use strict';
				/**
				 * Copyright (c) 2013-present, Facebook, Inc.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */

				var ReactIs = __webpack_require__(
					/*! react-is */ './node_modules/react-is/index.js'
				);
				var assign = __webpack_require__(
					/*! object-assign */ './node_modules/object-assign/index.js'
				);

				var ReactPropTypesSecret = __webpack_require__(
					/*! ./lib/ReactPropTypesSecret */ './node_modules/prop-types/lib/ReactPropTypesSecret.js'
				);
				var has = __webpack_require__(
					/*! ./lib/has */ './node_modules/prop-types/lib/has.js'
				);
				var checkPropTypes = __webpack_require__(
					/*! ./checkPropTypes */ './node_modules/prop-types/checkPropTypes.js'
				);

				var printWarning = function () {};

				if ( true ) {
					printWarning = function ( text ) {
						var message = 'Warning: ' + text;
						if ( typeof console !== 'undefined' ) {
							console.error( message );
						}
						try {
							// --- Welcome to debugging React ---
							// This error was thrown as a convenience so that you can use this stack
							// to find the callsite that caused this warning to fire.
							throw new Error( message );
						} catch ( x ) {}
					};
				}

				function emptyFunctionThatReturnsNull() {
					return null;
				}

				module.exports = function (
					isValidElement,
					throwOnDirectAccess
				) {
					/* global Symbol */
					var ITERATOR_SYMBOL =
						typeof Symbol === 'function' && Symbol.iterator;
					var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

					/**
					 * Returns the iterator method function contained on the iterable object.
					 *
					 * Be sure to invoke the function with the iterable as context:
					 *
					 *     var iteratorFn = getIteratorFn(myIterable);
					 *     if (iteratorFn) {
					 *       var iterator = iteratorFn.call(myIterable);
					 *       ...
					 *     }
					 *
					 * @param {?object} maybeIterable
					 * @return {?function}
					 */
					function getIteratorFn( maybeIterable ) {
						var iteratorFn =
							maybeIterable &&
							( ( ITERATOR_SYMBOL &&
								maybeIterable[ ITERATOR_SYMBOL ] ) ||
								maybeIterable[ FAUX_ITERATOR_SYMBOL ] );
						if ( typeof iteratorFn === 'function' ) {
							return iteratorFn;
						}
					}

					/**
					 * Collection of methods that allow declaration and validation of props that are
					 * supplied to React components. Example usage:
					 *
					 *   var Props = require('ReactPropTypes');
					 *   var MyArticle = React.createClass({
					 *     propTypes: {
					 *       // An optional string prop named "description".
					 *       description: Props.string,
					 *
					 *       // A required enum prop named "category".
					 *       category: Props.oneOf(['News','Photos']).isRequired,
					 *
					 *       // A prop named "dialog" that requires an instance of Dialog.
					 *       dialog: Props.instanceOf(Dialog).isRequired
					 *     },
					 *     render: function() { ... }
					 *   });
					 *
					 * A more formal specification of how these methods are used:
					 *
					 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
					 *   decl := ReactPropTypes.{type}(.isRequired)?
					 *
					 * Each and every declaration produces a function with the same signature. This
					 * allows the creation of custom validation functions. For example:
					 *
					 *  var MyLink = React.createClass({
					 *    propTypes: {
					 *      // An optional string or URI prop named "href".
					 *      href: function(props, propName, componentName) {
					 *        var propValue = props[propName];
					 *        if (propValue != null && typeof propValue !== 'string' &&
					 *            !(propValue instanceof URI)) {
					 *          return new Error(
					 *            'Expected a string or an URI for ' + propName + ' in ' +
					 *            componentName
					 *          );
					 *        }
					 *      }
					 *    },
					 *    render: function() {...}
					 *  });
					 *
					 * @internal
					 */

					var ANONYMOUS = '<<anonymous>>';

					// Important!
					// Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
					var ReactPropTypes = {
						array: createPrimitiveTypeChecker( 'array' ),
						bigint: createPrimitiveTypeChecker( 'bigint' ),
						bool: createPrimitiveTypeChecker( 'boolean' ),
						func: createPrimitiveTypeChecker( 'function' ),
						number: createPrimitiveTypeChecker( 'number' ),
						object: createPrimitiveTypeChecker( 'object' ),
						string: createPrimitiveTypeChecker( 'string' ),
						symbol: createPrimitiveTypeChecker( 'symbol' ),

						any: createAnyTypeChecker(),
						arrayOf: createArrayOfTypeChecker,
						element: createElementTypeChecker(),
						elementType: createElementTypeTypeChecker(),
						instanceOf: createInstanceTypeChecker,
						node: createNodeChecker(),
						objectOf: createObjectOfTypeChecker,
						oneOf: createEnumTypeChecker,
						oneOfType: createUnionTypeChecker,
						shape: createShapeTypeChecker,
						exact: createStrictShapeTypeChecker,
					};

					/**
					 * inlined Object.is polyfill to avoid requiring consumers ship their own
					 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
					 */
					/*eslint-disable no-self-compare*/
					function is( x, y ) {
						// SameValue algorithm
						if ( x === y ) {
							// Steps 1-5, 7-10
							// Steps 6.b-6.e: +0 != -0
							return x !== 0 || 1 / x === 1 / y;
						} else {
							// Step 6.a: NaN == NaN
							return x !== x && y !== y;
						}
					}
					/*eslint-enable no-self-compare*/

					/**
					 * We use an Error-like object for backward compatibility as people may call
					 * PropTypes directly and inspect their output. However, we don't use real
					 * Errors anymore. We don't inspect their stack anyway, and creating them
					 * is prohibitively expensive if they are created too often, such as what
					 * happens in oneOfType() for any type before the one that matched.
					 */
					function PropTypeError( message, data ) {
						this.message = message;
						this.data =
							data && typeof data === 'object' ? data : {};
						this.stack = '';
					}
					// Make `instanceof Error` still work for returned errors.
					PropTypeError.prototype = Error.prototype;

					function createChainableTypeChecker( validate ) {
						if ( true ) {
							var manualPropTypeCallCache = {};
							var manualPropTypeWarningCount = 0;
						}
						function checkType(
							isRequired,
							props,
							propName,
							componentName,
							location,
							propFullName,
							secret
						) {
							componentName = componentName || ANONYMOUS;
							propFullName = propFullName || propName;

							if ( secret !== ReactPropTypesSecret ) {
								if ( throwOnDirectAccess ) {
									// New behavior only for users of `prop-types` package
									var err = new Error(
										'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
											'Use `PropTypes.checkPropTypes()` to call them. ' +
											'Read more at http://fb.me/use-check-prop-types'
									);
									err.name = 'Invariant Violation';
									throw err;
								} else if (
									true &&
									typeof console !== 'undefined'
								) {
									// Old behavior for people using React.PropTypes
									var cacheKey =
										componentName + ':' + propName;
									if (
										! manualPropTypeCallCache[ cacheKey ] &&
										// Avoid spamming the console because they are often not actionable except for lib authors
										manualPropTypeWarningCount < 3
									) {
										printWarning(
											'You are manually calling a React.PropTypes validation ' +
												'function for the `' +
												propFullName +
												'` prop on `' +
												componentName +
												'`. This is deprecated ' +
												'and will throw in the standalone `prop-types` package. ' +
												'You may be seeing this warning due to a third-party PropTypes ' +
												'library. See https://fb.me/react-warning-dont-call-proptypes ' +
												'for details.'
										);
										manualPropTypeCallCache[
											cacheKey
										] = true;
										manualPropTypeWarningCount++;
									}
								}
							}
							if ( props[ propName ] == null ) {
								if ( isRequired ) {
									if ( props[ propName ] === null ) {
										return new PropTypeError(
											'The ' +
												location +
												' `' +
												propFullName +
												'` is marked as required ' +
												( 'in `' +
													componentName +
													'`, but its value is `null`.' )
										);
									}
									return new PropTypeError(
										'The ' +
											location +
											' `' +
											propFullName +
											'` is marked as required in ' +
											( '`' +
												componentName +
												'`, but its value is `undefined`.' )
									);
								}
								return null;
							} else {
								return validate(
									props,
									propName,
									componentName,
									location,
									propFullName
								);
							}
						}

						var chainedCheckType = checkType.bind( null, false );
						chainedCheckType.isRequired = checkType.bind(
							null,
							true
						);

						return chainedCheckType;
					}

					function createPrimitiveTypeChecker( expectedType ) {
						function validate(
							props,
							propName,
							componentName,
							location,
							propFullName,
							secret
						) {
							var propValue = props[ propName ];
							var propType = getPropType( propValue );
							if ( propType !== expectedType ) {
								// `propValue` being instance of, say, date/regexp, pass the 'object'
								// check, but we can offer a more precise error message here rather than
								// 'of type `object`'.
								var preciseType = getPreciseType( propValue );

								return new PropTypeError(
									'Invalid ' +
										location +
										' `' +
										propFullName +
										'` of type ' +
										( '`' +
											preciseType +
											'` supplied to `' +
											componentName +
											'`, expected ' ) +
										( '`' + expectedType + '`.' ),
									{ expectedType: expectedType }
								);
							}
							return null;
						}
						return createChainableTypeChecker( validate );
					}

					function createAnyTypeChecker() {
						return createChainableTypeChecker(
							emptyFunctionThatReturnsNull
						);
					}

					function createArrayOfTypeChecker( typeChecker ) {
						function validate(
							props,
							propName,
							componentName,
							location,
							propFullName
						) {
							if ( typeof typeChecker !== 'function' ) {
								return new PropTypeError(
									'Property `' +
										propFullName +
										'` of component `' +
										componentName +
										'` has invalid PropType notation inside arrayOf.'
								);
							}
							var propValue = props[ propName ];
							if ( ! Array.isArray( propValue ) ) {
								var propType = getPropType( propValue );
								return new PropTypeError(
									'Invalid ' +
										location +
										' `' +
										propFullName +
										'` of type ' +
										( '`' +
											propType +
											'` supplied to `' +
											componentName +
											'`, expected an array.' )
								);
							}
							for ( var i = 0; i < propValue.length; i++ ) {
								var error = typeChecker(
									propValue,
									i,
									componentName,
									location,
									propFullName + '[' + i + ']',
									ReactPropTypesSecret
								);
								if ( error instanceof Error ) {
									return error;
								}
							}
							return null;
						}
						return createChainableTypeChecker( validate );
					}

					function createElementTypeChecker() {
						function validate(
							props,
							propName,
							componentName,
							location,
							propFullName
						) {
							var propValue = props[ propName ];
							if ( ! isValidElement( propValue ) ) {
								var propType = getPropType( propValue );
								return new PropTypeError(
									'Invalid ' +
										location +
										' `' +
										propFullName +
										'` of type ' +
										( '`' +
											propType +
											'` supplied to `' +
											componentName +
											'`, expected a single ReactElement.' )
								);
							}
							return null;
						}
						return createChainableTypeChecker( validate );
					}

					function createElementTypeTypeChecker() {
						function validate(
							props,
							propName,
							componentName,
							location,
							propFullName
						) {
							var propValue = props[ propName ];
							if ( ! ReactIs.isValidElementType( propValue ) ) {
								var propType = getPropType( propValue );
								return new PropTypeError(
									'Invalid ' +
										location +
										' `' +
										propFullName +
										'` of type ' +
										( '`' +
											propType +
											'` supplied to `' +
											componentName +
											'`, expected a single ReactElement type.' )
								);
							}
							return null;
						}
						return createChainableTypeChecker( validate );
					}

					function createInstanceTypeChecker( expectedClass ) {
						function validate(
							props,
							propName,
							componentName,
							location,
							propFullName
						) {
							if (
								! ( props[ propName ] instanceof expectedClass )
							) {
								var expectedClassName =
									expectedClass.name || ANONYMOUS;
								var actualClassName = getClassName(
									props[ propName ]
								);
								return new PropTypeError(
									'Invalid ' +
										location +
										' `' +
										propFullName +
										'` of type ' +
										( '`' +
											actualClassName +
											'` supplied to `' +
											componentName +
											'`, expected ' ) +
										( 'instance of `' +
											expectedClassName +
											'`.' )
								);
							}
							return null;
						}
						return createChainableTypeChecker( validate );
					}

					function createEnumTypeChecker( expectedValues ) {
						if ( ! Array.isArray( expectedValues ) ) {
							if ( true ) {
								if ( arguments.length > 1 ) {
									printWarning(
										'Invalid arguments supplied to oneOf, expected an array, got ' +
											arguments.length +
											' arguments. ' +
											'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
									);
								} else {
									printWarning(
										'Invalid argument supplied to oneOf, expected an array.'
									);
								}
							}
							return emptyFunctionThatReturnsNull;
						}

						function validate(
							props,
							propName,
							componentName,
							location,
							propFullName
						) {
							var propValue = props[ propName ];
							for ( var i = 0; i < expectedValues.length; i++ ) {
								if ( is( propValue, expectedValues[ i ] ) ) {
									return null;
								}
							}

							var valuesString = JSON.stringify(
								expectedValues,
								function replacer( key, value ) {
									var type = getPreciseType( value );
									if ( type === 'symbol' ) {
										return String( value );
									}
									return value;
								}
							);
							return new PropTypeError(
								'Invalid ' +
									location +
									' `' +
									propFullName +
									'` of value `' +
									String( propValue ) +
									'` ' +
									( 'supplied to `' +
										componentName +
										'`, expected one of ' +
										valuesString +
										'.' )
							);
						}
						return createChainableTypeChecker( validate );
					}

					function createObjectOfTypeChecker( typeChecker ) {
						function validate(
							props,
							propName,
							componentName,
							location,
							propFullName
						) {
							if ( typeof typeChecker !== 'function' ) {
								return new PropTypeError(
									'Property `' +
										propFullName +
										'` of component `' +
										componentName +
										'` has invalid PropType notation inside objectOf.'
								);
							}
							var propValue = props[ propName ];
							var propType = getPropType( propValue );
							if ( propType !== 'object' ) {
								return new PropTypeError(
									'Invalid ' +
										location +
										' `' +
										propFullName +
										'` of type ' +
										( '`' +
											propType +
											'` supplied to `' +
											componentName +
											'`, expected an object.' )
								);
							}
							for ( var key in propValue ) {
								if ( has( propValue, key ) ) {
									var error = typeChecker(
										propValue,
										key,
										componentName,
										location,
										propFullName + '.' + key,
										ReactPropTypesSecret
									);
									if ( error instanceof Error ) {
										return error;
									}
								}
							}
							return null;
						}
						return createChainableTypeChecker( validate );
					}

					function createUnionTypeChecker( arrayOfTypeCheckers ) {
						if ( ! Array.isArray( arrayOfTypeCheckers ) ) {
							true
								? printWarning(
										'Invalid argument supplied to oneOfType, expected an instance of array.'
								  )
								: 0;
							return emptyFunctionThatReturnsNull;
						}

						for ( var i = 0; i < arrayOfTypeCheckers.length; i++ ) {
							var checker = arrayOfTypeCheckers[ i ];
							if ( typeof checker !== 'function' ) {
								printWarning(
									'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
										'received ' +
										getPostfixForTypeWarning( checker ) +
										' at index ' +
										i +
										'.'
								);
								return emptyFunctionThatReturnsNull;
							}
						}

						function validate(
							props,
							propName,
							componentName,
							location,
							propFullName
						) {
							var expectedTypes = [];
							for (
								var i = 0;
								i < arrayOfTypeCheckers.length;
								i++
							) {
								var checker = arrayOfTypeCheckers[ i ];
								var checkerResult = checker(
									props,
									propName,
									componentName,
									location,
									propFullName,
									ReactPropTypesSecret
								);
								if ( checkerResult == null ) {
									return null;
								}
								if (
									checkerResult.data &&
									has( checkerResult.data, 'expectedType' )
								) {
									expectedTypes.push(
										checkerResult.data.expectedType
									);
								}
							}
							var expectedTypesMessage =
								expectedTypes.length > 0
									? ', expected one of type [' +
									  expectedTypes.join( ', ' ) +
									  ']'
									: '';
							return new PropTypeError(
								'Invalid ' +
									location +
									' `' +
									propFullName +
									'` supplied to ' +
									( '`' +
										componentName +
										'`' +
										expectedTypesMessage +
										'.' )
							);
						}
						return createChainableTypeChecker( validate );
					}

					function createNodeChecker() {
						function validate(
							props,
							propName,
							componentName,
							location,
							propFullName
						) {
							if ( ! isNode( props[ propName ] ) ) {
								return new PropTypeError(
									'Invalid ' +
										location +
										' `' +
										propFullName +
										'` supplied to ' +
										( '`' +
											componentName +
											'`, expected a ReactNode.' )
								);
							}
							return null;
						}
						return createChainableTypeChecker( validate );
					}

					function invalidValidatorError(
						componentName,
						location,
						propFullName,
						key,
						type
					) {
						return new PropTypeError(
							( componentName || 'React class' ) +
								': ' +
								location +
								' type `' +
								propFullName +
								'.' +
								key +
								'` is invalid; ' +
								'it must be a function, usually from the `prop-types` package, but received `' +
								type +
								'`.'
						);
					}

					function createShapeTypeChecker( shapeTypes ) {
						function validate(
							props,
							propName,
							componentName,
							location,
							propFullName
						) {
							var propValue = props[ propName ];
							var propType = getPropType( propValue );
							if ( propType !== 'object' ) {
								return new PropTypeError(
									'Invalid ' +
										location +
										' `' +
										propFullName +
										'` of type `' +
										propType +
										'` ' +
										( 'supplied to `' +
											componentName +
											'`, expected `object`.' )
								);
							}
							for ( var key in shapeTypes ) {
								var checker = shapeTypes[ key ];
								if ( typeof checker !== 'function' ) {
									return invalidValidatorError(
										componentName,
										location,
										propFullName,
										key,
										getPreciseType( checker )
									);
								}
								var error = checker(
									propValue,
									key,
									componentName,
									location,
									propFullName + '.' + key,
									ReactPropTypesSecret
								);
								if ( error ) {
									return error;
								}
							}
							return null;
						}
						return createChainableTypeChecker( validate );
					}

					function createStrictShapeTypeChecker( shapeTypes ) {
						function validate(
							props,
							propName,
							componentName,
							location,
							propFullName
						) {
							var propValue = props[ propName ];
							var propType = getPropType( propValue );
							if ( propType !== 'object' ) {
								return new PropTypeError(
									'Invalid ' +
										location +
										' `' +
										propFullName +
										'` of type `' +
										propType +
										'` ' +
										( 'supplied to `' +
											componentName +
											'`, expected `object`.' )
								);
							}
							// We need to check all keys in case some are required but missing from props.
							var allKeys = assign(
								{},
								props[ propName ],
								shapeTypes
							);
							for ( var key in allKeys ) {
								var checker = shapeTypes[ key ];
								if (
									has( shapeTypes, key ) &&
									typeof checker !== 'function'
								) {
									return invalidValidatorError(
										componentName,
										location,
										propFullName,
										key,
										getPreciseType( checker )
									);
								}
								if ( ! checker ) {
									return new PropTypeError(
										'Invalid ' +
											location +
											' `' +
											propFullName +
											'` key `' +
											key +
											'` supplied to `' +
											componentName +
											'`.' +
											'\nBad object: ' +
											JSON.stringify(
												props[ propName ],
												null,
												'  '
											) +
											'\nValid keys: ' +
											JSON.stringify(
												Object.keys( shapeTypes ),
												null,
												'  '
											)
									);
								}
								var error = checker(
									propValue,
									key,
									componentName,
									location,
									propFullName + '.' + key,
									ReactPropTypesSecret
								);
								if ( error ) {
									return error;
								}
							}
							return null;
						}

						return createChainableTypeChecker( validate );
					}

					function isNode( propValue ) {
						switch ( typeof propValue ) {
							case 'number':
							case 'string':
							case 'undefined':
								return true;
							case 'boolean':
								return ! propValue;
							case 'object':
								if ( Array.isArray( propValue ) ) {
									return propValue.every( isNode );
								}
								if (
									propValue === null ||
									isValidElement( propValue )
								) {
									return true;
								}

								var iteratorFn = getIteratorFn( propValue );
								if ( iteratorFn ) {
									var iterator = iteratorFn.call( propValue );
									var step;
									if ( iteratorFn !== propValue.entries ) {
										while (
											! ( step = iterator.next() ).done
										) {
											if ( ! isNode( step.value ) ) {
												return false;
											}
										}
									} else {
										// Iterator will provide entry [k,v] tuples rather than values.
										while (
											! ( step = iterator.next() ).done
										) {
											var entry = step.value;
											if ( entry ) {
												if ( ! isNode( entry[ 1 ] ) ) {
													return false;
												}
											}
										}
									}
								} else {
									return false;
								}

								return true;
							default:
								return false;
						}
					}

					function isSymbol( propType, propValue ) {
						// Native Symbol.
						if ( propType === 'symbol' ) {
							return true;
						}

						// falsy value can't be a Symbol
						if ( ! propValue ) {
							return false;
						}

						// 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
						if ( propValue[ '@@toStringTag' ] === 'Symbol' ) {
							return true;
						}

						// Fallback for non-spec compliant Symbols which are polyfilled.
						if (
							typeof Symbol === 'function' &&
							propValue instanceof Symbol
						) {
							return true;
						}

						return false;
					}

					// Equivalent of `typeof` but with special handling for array and regexp.
					function getPropType( propValue ) {
						var propType = typeof propValue;
						if ( Array.isArray( propValue ) ) {
							return 'array';
						}
						if ( propValue instanceof RegExp ) {
							// Old webkits (at least until Android 4.0) return 'function' rather than
							// 'object' for typeof a RegExp. We'll normalize this here so that /bla/
							// passes PropTypes.object.
							return 'object';
						}
						if ( isSymbol( propType, propValue ) ) {
							return 'symbol';
						}
						return propType;
					}

					// This handles more types than `getPropType`. Only used for error messages.
					// See `createPrimitiveTypeChecker`.
					function getPreciseType( propValue ) {
						if (
							typeof propValue === 'undefined' ||
							propValue === null
						) {
							return '' + propValue;
						}
						var propType = getPropType( propValue );
						if ( propType === 'object' ) {
							if ( propValue instanceof Date ) {
								return 'date';
							} else if ( propValue instanceof RegExp ) {
								return 'regexp';
							}
						}
						return propType;
					}

					// Returns a string that is postfixed to a warning about an invalid type.
					// For example, "undefined" or "of type array"
					function getPostfixForTypeWarning( value ) {
						var type = getPreciseType( value );
						switch ( type ) {
							case 'array':
							case 'object':
								return 'an ' + type;
							case 'boolean':
							case 'date':
							case 'regexp':
								return 'a ' + type;
							default:
								return type;
						}
					}

					// Returns class name of the object, if any.
					function getClassName( propValue ) {
						if (
							! propValue.constructor ||
							! propValue.constructor.name
						) {
							return ANONYMOUS;
						}
						return propValue.constructor.name;
					}

					ReactPropTypes.checkPropTypes = checkPropTypes;
					ReactPropTypes.resetWarningCache =
						checkPropTypes.resetWarningCache;
					ReactPropTypes.PropTypes = ReactPropTypes;

					return ReactPropTypes;
				};

				/***/
			},

		/***/ './node_modules/prop-types/index.js':
			/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
			/***/ ( module, __unused_webpack_exports, __webpack_require__ ) => {
				/**
				 * Copyright (c) 2013-present, Facebook, Inc.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */

				if ( true ) {
					var ReactIs = __webpack_require__(
						/*! react-is */ './node_modules/react-is/index.js'
					);

					// By explicitly using `prop-types` you are opting into new development behavior.
					// http://fb.me/prop-types-in-prod
					var throwOnDirectAccess = true;
					module.exports = __webpack_require__(
						/*! ./factoryWithTypeCheckers */ './node_modules/prop-types/factoryWithTypeCheckers.js'
					)( ReactIs.isElement, throwOnDirectAccess );
				} else {
				}

				/***/
			},

		/***/ './node_modules/prop-types/lib/ReactPropTypesSecret.js':
			/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
			/***/ ( module ) => {
				'use strict';
				/**
				 * Copyright (c) 2013-present, Facebook, Inc.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */

				var ReactPropTypesSecret =
					'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

				module.exports = ReactPropTypesSecret;

				/***/
			},

		/***/ './node_modules/prop-types/lib/has.js':
			/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
			/***/ ( module ) => {
				module.exports = Function.call.bind(
					Object.prototype.hasOwnProperty
				);

				/***/
			},

		/***/ './node_modules/raf-schd/dist/raf-schd.esm.js':
			/*!****************************************************!*\
  !*** ./node_modules/raf-schd/dist/raf-schd.esm.js ***!
  \****************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							__WEBPACK_DEFAULT_EXPORT__,
						/* harmony export */
					}
				);
				var rafSchd = function rafSchd( fn ) {
					var lastArgs = [];
					var frameId = null;

					var wrapperFn = function wrapperFn() {
						for (
							var _len = arguments.length,
								args = new Array( _len ),
								_key = 0;
							_key < _len;
							_key++
						) {
							args[ _key ] = arguments[ _key ];
						}

						lastArgs = args;

						if ( frameId ) {
							return;
						}

						frameId = requestAnimationFrame( function () {
							frameId = null;
							fn.apply( void 0, lastArgs );
						} );
					};

					wrapperFn.cancel = function () {
						if ( ! frameId ) {
							return;
						}

						cancelAnimationFrame( frameId );
						frameId = null;
					};

					return wrapperFn;
				};

				/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
					rafSchd;

				/***/
			},

		/***/ './node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js':
			/*!**************************************************************************!*\
  !*** ./node_modules/react-beautiful-dnd/dist/react-beautiful-dnd.esm.js ***!
  \**************************************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ DragDropContext: () =>
							/* binding */ DragDropContext,
						/* harmony export */ Draggable: () =>
							/* binding */ PublicDraggable,
						/* harmony export */ Droppable: () =>
							/* binding */ ConnectedDroppable,
						/* harmony export */ resetServerContext: () =>
							/* binding */ resetServerContext,
						/* harmony export */ useKeyboardSensor: () =>
							/* binding */ useKeyboardSensor,
						/* harmony export */ useMouseSensor: () =>
							/* binding */ useMouseSensor,
						/* harmony export */ useTouchSensor: () =>
							/* binding */ useTouchSensor,
						/* harmony export */
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__( /*! react */ 'react' );
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(
						react__WEBPACK_IMPORTED_MODULE_0__
					);
				/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! @babel/runtime/helpers/esm/inheritsLoose */ './node_modules/@babel/runtime/helpers/esm/inheritsLoose.js'
					);
				/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! @babel/runtime/helpers/esm/extends */ './node_modules/@babel/runtime/helpers/esm/extends.js'
					);
				/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ =
					__webpack_require__(
						/*! redux */ './node_modules/redux/es/redux.js'
					);
				/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						/*! react-redux */ './node_modules/react-redux/es/index.js'
					);
				/* harmony import */ var use_memo_one__WEBPACK_IMPORTED_MODULE_9__ =
					__webpack_require__(
						/*! use-memo-one */ './node_modules/use-memo-one/dist/use-memo-one.esm.js'
					);
				/* harmony import */ var css_box_model__WEBPACK_IMPORTED_MODULE_5__ =
					__webpack_require__(
						/*! css-box-model */ './node_modules/css-box-model/dist/css-box-model.esm.js'
					);
				/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_6__ =
					__webpack_require__(
						/*! memoize-one */ './node_modules/memoize-one/dist/memoize-one.esm.js'
					);
				/* harmony import */ var raf_schd__WEBPACK_IMPORTED_MODULE_7__ =
					__webpack_require__(
						/*! raf-schd */ './node_modules/raf-schd/dist/raf-schd.esm.js'
					);
				/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__( /*! react-dom */ 'react-dom' );
				/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default =
					/*#__PURE__*/ __webpack_require__.n(
						react_dom__WEBPACK_IMPORTED_MODULE_4__
					);

				var isProduction = 'development' === 'production';
				var spacesAndTabs = /[ \t]{2,}/g;
				var lineStartWithSpaces = /^[ \t]*/gm;

				var clean = function clean( value ) {
					return value
						.replace( spacesAndTabs, ' ' )
						.replace( lineStartWithSpaces, '' )
						.trim();
				};

				var getDevMessage = function getDevMessage( message ) {
					return clean(
						'\n  %creact-beautiful-dnd\n\n  %c' +
							clean( message ) +
							'\n\n  %c\uD83D\uDC77\u200D This is a development only message. It will be removed in production builds.\n'
					);
				};

				var getFormattedMessage = function getFormattedMessage(
					message
				) {
					return [
						getDevMessage( message ),
						'color: #00C584; font-size: 1.2em; font-weight: bold;',
						'line-height: 1.5',
						'color: #723874;',
					];
				};
				var isDisabledFlag =
					'__react-beautiful-dnd-disable-dev-warnings';
				function log( type, message ) {
					var _console;

					if ( isProduction ) {
						return;
					}

					if (
						typeof window !== 'undefined' &&
						window[ isDisabledFlag ]
					) {
						return;
					}

					( _console = console )[ type ].apply(
						_console,
						getFormattedMessage( message )
					);
				}
				var warning = log.bind( null, 'warn' );
				var error = log.bind( null, 'error' );

				function noop() {}

				function getOptions( shared, fromBinding ) {
					return ( 0,
					_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
						'default'
					] )( {}, shared, {}, fromBinding );
				}

				function bindEvents( el, bindings, sharedOptions ) {
					var unbindings = bindings.map( function ( binding ) {
						var options = getOptions(
							sharedOptions,
							binding.options
						);
						el.addEventListener(
							binding.eventName,
							binding.fn,
							options
						);
						return function unbind() {
							el.removeEventListener(
								binding.eventName,
								binding.fn,
								options
							);
						};
					} );
					return function unbindAll() {
						unbindings.forEach( function ( unbind ) {
							unbind();
						} );
					};
				}

				var isProduction$1 = 'development' === 'production';
				var prefix = 'Invariant failed';
				function RbdInvariant( message ) {
					this.message = message;
				}

				RbdInvariant.prototype.toString = function toString() {
					return this.message;
				};

				function invariant( condition, message ) {
					if ( condition ) {
						return;
					}

					if ( isProduction$1 ) {
						throw new RbdInvariant( prefix );
					} else {
						throw new RbdInvariant(
							prefix + ': ' + ( message || '' )
						);
					}
				}

				var ErrorBoundary = ( function ( _React$Component ) {
					( 0,
					_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[
						'default'
					] )( ErrorBoundary, _React$Component );

					function ErrorBoundary() {
						var _this;

						for (
							var _len = arguments.length,
								args = new Array( _len ),
								_key = 0;
							_key < _len;
							_key++
						) {
							args[ _key ] = arguments[ _key ];
						}

						_this =
							_React$Component.call.apply(
								_React$Component,
								[ this ].concat( args )
							) || this;
						_this.callbacks = null;
						_this.unbind = noop;

						_this.onWindowError = function ( event ) {
							var callbacks = _this.getCallbacks();

							if ( callbacks.isDragging() ) {
								callbacks.tryAbort();
								true
									? warning(
											"\n        An error was caught by our window 'error' event listener while a drag was occurring.\n        The active drag has been aborted.\n      "
									  )
									: 0;
							}

							var err = event.error;

							if ( err instanceof RbdInvariant ) {
								event.preventDefault();

								if ( true ) {
									error( err.message );
								}
							}
						};

						_this.getCallbacks = function () {
							if ( ! _this.callbacks ) {
								throw new Error(
									'Unable to find AppCallbacks in <ErrorBoundary/>'
								);
							}

							return _this.callbacks;
						};

						_this.setCallbacks = function ( callbacks ) {
							_this.callbacks = callbacks;
						};

						return _this;
					}

					var _proto = ErrorBoundary.prototype;

					_proto.componentDidMount = function componentDidMount() {
						this.unbind = bindEvents( window, [
							{
								eventName: 'error',
								fn: this.onWindowError,
							},
						] );
					};

					_proto.componentDidCatch = function componentDidCatch(
						err
					) {
						if ( err instanceof RbdInvariant ) {
							if ( true ) {
								error( err.message );
							}

							this.setState( {} );
							return;
						}

						throw err;
					};

					_proto.componentWillUnmount =
						function componentWillUnmount() {
							this.unbind();
						};

					_proto.render = function render() {
						return this.props.children( this.setCallbacks );
					};

					return ErrorBoundary;
				} )( react__WEBPACK_IMPORTED_MODULE_0___default().Component );

				var dragHandleUsageInstructions =
					'\n  Press space bar to start a drag.\n  When dragging you can use the arrow keys to move the item around and escape to cancel.\n  Some screen readers may require you to be in focus mode or to use your pass through key\n';

				var position = function position( index ) {
					return index + 1;
				};

				var onDragStart = function onDragStart( start ) {
					return (
						'\n  You have lifted an item in position ' +
						position( start.source.index ) +
						'\n'
					);
				};

				var withLocation = function withLocation(
					source,
					destination
				) {
					var isInHomeList =
						source.droppableId === destination.droppableId;
					var startPosition = position( source.index );
					var endPosition = position( destination.index );

					if ( isInHomeList ) {
						return (
							'\n      You have moved the item from position ' +
							startPosition +
							'\n      to position ' +
							endPosition +
							'\n    '
						);
					}

					return (
						'\n    You have moved the item from position ' +
						startPosition +
						'\n    in list ' +
						source.droppableId +
						'\n    to list ' +
						destination.droppableId +
						'\n    in position ' +
						endPosition +
						'\n  '
					);
				};

				var withCombine = function withCombine( id, source, combine ) {
					var inHomeList = source.droppableId === combine.droppableId;

					if ( inHomeList ) {
						return (
							'\n      The item ' +
							id +
							'\n      has been combined with ' +
							combine.draggableId
						);
					}

					return (
						'\n      The item ' +
						id +
						'\n      in list ' +
						source.droppableId +
						'\n      has been combined with ' +
						combine.draggableId +
						'\n      in list ' +
						combine.droppableId +
						'\n    '
					);
				};

				var onDragUpdate = function onDragUpdate( update ) {
					var location = update.destination;

					if ( location ) {
						return withLocation( update.source, location );
					}

					var combine = update.combine;

					if ( combine ) {
						return withCombine(
							update.draggableId,
							update.source,
							combine
						);
					}

					return 'You are over an area that cannot be dropped on';
				};

				var returnedToStart = function returnedToStart( source ) {
					return (
						'\n  The item has returned to its starting position\n  of ' +
						position( source.index ) +
						'\n'
					);
				};

				var onDragEnd = function onDragEnd( result ) {
					if ( result.reason === 'CANCEL' ) {
						return (
							'\n      Movement cancelled.\n      ' +
							returnedToStart( result.source ) +
							'\n    '
						);
					}

					var location = result.destination;
					var combine = result.combine;

					if ( location ) {
						return (
							'\n      You have dropped the item.\n      ' +
							withLocation( result.source, location ) +
							'\n    '
						);
					}

					if ( combine ) {
						return (
							'\n      You have dropped the item.\n      ' +
							withCombine(
								result.draggableId,
								result.source,
								combine
							) +
							'\n    '
						);
					}

					return (
						'\n    The item has been dropped while not over a drop area.\n    ' +
						returnedToStart( result.source ) +
						'\n  '
					);
				};

				var preset = {
					dragHandleUsageInstructions: dragHandleUsageInstructions,
					onDragStart: onDragStart,
					onDragUpdate: onDragUpdate,
					onDragEnd: onDragEnd,
				};

				var origin = {
					x: 0,
					y: 0,
				};
				var add = function add( point1, point2 ) {
					return {
						x: point1.x + point2.x,
						y: point1.y + point2.y,
					};
				};
				var subtract = function subtract( point1, point2 ) {
					return {
						x: point1.x - point2.x,
						y: point1.y - point2.y,
					};
				};
				var isEqual = function isEqual( point1, point2 ) {
					return point1.x === point2.x && point1.y === point2.y;
				};
				var negate = function negate( point ) {
					return {
						x: point.x !== 0 ? -point.x : 0,
						y: point.y !== 0 ? -point.y : 0,
					};
				};
				var patch = function patch( line, value, otherValue ) {
					var _ref;

					if ( otherValue === void 0 ) {
						otherValue = 0;
					}

					return (
						( _ref = {} ),
						( _ref[ line ] = value ),
						( _ref[ line === 'x' ? 'y' : 'x' ] = otherValue ),
						_ref
					);
				};
				var distance = function distance( point1, point2 ) {
					return Math.sqrt(
						Math.pow( point2.x - point1.x, 2 ) +
							Math.pow( point2.y - point1.y, 2 )
					);
				};
				var closest = function closest( target, points ) {
					return Math.min.apply(
						Math,
						points.map( function ( point ) {
							return distance( target, point );
						} )
					);
				};
				var apply = function apply( fn ) {
					return function ( point ) {
						return {
							x: fn( point.x ),
							y: fn( point.y ),
						};
					};
				};

				var executeClip = function ( frame, subject ) {
					var result = ( 0,
					css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect )( {
						top: Math.max( subject.top, frame.top ),
						right: Math.min( subject.right, frame.right ),
						bottom: Math.min( subject.bottom, frame.bottom ),
						left: Math.max( subject.left, frame.left ),
					} );

					if ( result.width <= 0 || result.height <= 0 ) {
						return null;
					}

					return result;
				};

				var offsetByPosition = function offsetByPosition(
					spacing,
					point
				) {
					return {
						top: spacing.top + point.y,
						left: spacing.left + point.x,
						bottom: spacing.bottom + point.y,
						right: spacing.right + point.x,
					};
				};
				var getCorners = function getCorners( spacing ) {
					return [
						{
							x: spacing.left,
							y: spacing.top,
						},
						{
							x: spacing.right,
							y: spacing.top,
						},
						{
							x: spacing.left,
							y: spacing.bottom,
						},
						{
							x: spacing.right,
							y: spacing.bottom,
						},
					];
				};
				var noSpacing = {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0,
				};

				var scroll = function scroll( target, frame ) {
					if ( ! frame ) {
						return target;
					}

					return offsetByPosition(
						target,
						frame.scroll.diff.displacement
					);
				};

				var increase = function increase(
					target,
					axis,
					withPlaceholder
				) {
					if ( withPlaceholder && withPlaceholder.increasedBy ) {
						var _extends2;

						return ( 0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
							'default'
						] )(
							{},
							target,
							( ( _extends2 = {} ),
							( _extends2[ axis.end ] =
								target[ axis.end ] +
								withPlaceholder.increasedBy[ axis.line ] ),
							_extends2 )
						);
					}

					return target;
				};

				var clip = function clip( target, frame ) {
					if ( frame && frame.shouldClipSubject ) {
						return executeClip( frame.pageMarginBox, target );
					}

					return ( 0,
					css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect )(
						target
					);
				};

				var getSubject = function ( _ref ) {
					var page = _ref.page,
						withPlaceholder = _ref.withPlaceholder,
						axis = _ref.axis,
						frame = _ref.frame;
					var scrolled = scroll( page.marginBox, frame );
					var increased = increase( scrolled, axis, withPlaceholder );
					var clipped = clip( increased, frame );
					return {
						page: page,
						withPlaceholder: withPlaceholder,
						active: clipped,
					};
				};

				var scrollDroppable = function ( droppable, newScroll ) {
					! droppable.frame
						? true
							? invariant( false )
							: 0
						: void 0;
					var scrollable = droppable.frame;
					var scrollDiff = subtract(
						newScroll,
						scrollable.scroll.initial
					);
					var scrollDisplacement = negate( scrollDiff );

					var frame = ( 0,
					_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
						'default'
					] )( {}, scrollable, {
						scroll: {
							initial: scrollable.scroll.initial,
							current: newScroll,
							diff: {
								value: scrollDiff,
								displacement: scrollDisplacement,
							},
							max: scrollable.scroll.max,
						},
					} );

					var subject = getSubject( {
						page: droppable.subject.page,
						withPlaceholder: droppable.subject.withPlaceholder,
						axis: droppable.axis,
						frame: frame,
					} );

					var result = ( 0,
					_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
						'default'
					] )( {}, droppable, {
						frame: frame,
						subject: subject,
					} );

					return result;
				};

				function isInteger( value ) {
					if ( Number.isInteger ) {
						return Number.isInteger( value );
					}

					return (
						typeof value === 'number' &&
						isFinite( value ) &&
						Math.floor( value ) === value
					);
				}
				function values( map ) {
					if ( Object.values ) {
						return Object.values( map );
					}

					return Object.keys( map ).map( function ( key ) {
						return map[ key ];
					} );
				}
				function findIndex( list, predicate ) {
					if ( list.findIndex ) {
						return list.findIndex( predicate );
					}

					for ( var i = 0; i < list.length; i++ ) {
						if ( predicate( list[ i ] ) ) {
							return i;
						}
					}

					return -1;
				}
				function find( list, predicate ) {
					if ( list.find ) {
						return list.find( predicate );
					}

					var index = findIndex( list, predicate );

					if ( index !== -1 ) {
						return list[ index ];
					}

					return undefined;
				}
				function toArray( list ) {
					return Array.prototype.slice.call( list );
				}

				var toDroppableMap = ( 0,
				memoize_one__WEBPACK_IMPORTED_MODULE_6__[ 'default' ] )(
					function ( droppables ) {
						return droppables.reduce( function (
							previous,
							current
						) {
							previous[ current.descriptor.id ] = current;
							return previous;
						}, {} );
					}
				);
				var toDraggableMap = ( 0,
				memoize_one__WEBPACK_IMPORTED_MODULE_6__[ 'default' ] )(
					function ( draggables ) {
						return draggables.reduce( function (
							previous,
							current
						) {
							previous[ current.descriptor.id ] = current;
							return previous;
						}, {} );
					}
				);
				var toDroppableList = ( 0,
				memoize_one__WEBPACK_IMPORTED_MODULE_6__[ 'default' ] )(
					function ( droppables ) {
						return values( droppables );
					}
				);
				var toDraggableList = ( 0,
				memoize_one__WEBPACK_IMPORTED_MODULE_6__[ 'default' ] )(
					function ( draggables ) {
						return values( draggables );
					}
				);

				var getDraggablesInsideDroppable = ( 0,
				memoize_one__WEBPACK_IMPORTED_MODULE_6__[ 'default' ] )(
					function ( droppableId, draggables ) {
						var result = toDraggableList( draggables )
							.filter( function ( draggable ) {
								return (
									droppableId ===
									draggable.descriptor.droppableId
								);
							} )
							.sort( function ( a, b ) {
								return a.descriptor.index - b.descriptor.index;
							} );
						return result;
					}
				);

				function tryGetDestination( impact ) {
					if ( impact.at && impact.at.type === 'REORDER' ) {
						return impact.at.destination;
					}

					return null;
				}
				function tryGetCombine( impact ) {
					if ( impact.at && impact.at.type === 'COMBINE' ) {
						return impact.at.combine;
					}

					return null;
				}

				var removeDraggableFromList = ( 0,
				memoize_one__WEBPACK_IMPORTED_MODULE_6__[ 'default' ] )(
					function ( remove, list ) {
						return list.filter( function ( item ) {
							return item.descriptor.id !== remove.descriptor.id;
						} );
					}
				);

				var moveToNextCombine = function ( _ref ) {
					var isMovingForward = _ref.isMovingForward,
						draggable = _ref.draggable,
						destination = _ref.destination,
						insideDestination = _ref.insideDestination,
						previousImpact = _ref.previousImpact;

					if ( ! destination.isCombineEnabled ) {
						return null;
					}

					var location = tryGetDestination( previousImpact );

					if ( ! location ) {
						return null;
					}

					function getImpact( target ) {
						var at = {
							type: 'COMBINE',
							combine: {
								draggableId: target,
								droppableId: destination.descriptor.id,
							},
						};
						return ( 0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
							'default'
						] )( {}, previousImpact, {
							at: at,
						} );
					}

					var all = previousImpact.displaced.all;
					var closestId = all.length ? all[ 0 ] : null;

					if ( isMovingForward ) {
						return closestId ? getImpact( closestId ) : null;
					}

					var withoutDraggable = removeDraggableFromList(
						draggable,
						insideDestination
					);

					if ( ! closestId ) {
						if ( ! withoutDraggable.length ) {
							return null;
						}

						var last =
							withoutDraggable[ withoutDraggable.length - 1 ];
						return getImpact( last.descriptor.id );
					}

					var indexOfClosest = findIndex(
						withoutDraggable,
						function ( d ) {
							return d.descriptor.id === closestId;
						}
					);
					! ( indexOfClosest !== -1 )
						? true
							? invariant(
									false,
									'Could not find displaced item in set'
							  )
							: 0
						: void 0;
					var proposedIndex = indexOfClosest - 1;

					if ( proposedIndex < 0 ) {
						return null;
					}

					var before = withoutDraggable[ proposedIndex ];
					return getImpact( before.descriptor.id );
				};

				var isHomeOf = function ( draggable, destination ) {
					return (
						draggable.descriptor.droppableId ===
						destination.descriptor.id
					);
				};

				var noDisplacedBy = {
					point: origin,
					value: 0,
				};
				var emptyGroups = {
					invisible: {},
					visible: {},
					all: [],
				};
				var noImpact = {
					displaced: emptyGroups,
					displacedBy: noDisplacedBy,
					at: null,
				};

				var isWithin = function ( lowerBound, upperBound ) {
					return function ( value ) {
						return lowerBound <= value && value <= upperBound;
					};
				};

				var isPartiallyVisibleThroughFrame = function ( frame ) {
					var isWithinVertical = isWithin( frame.top, frame.bottom );
					var isWithinHorizontal = isWithin(
						frame.left,
						frame.right
					);
					return function ( subject ) {
						var isContained =
							isWithinVertical( subject.top ) &&
							isWithinVertical( subject.bottom ) &&
							isWithinHorizontal( subject.left ) &&
							isWithinHorizontal( subject.right );

						if ( isContained ) {
							return true;
						}

						var isPartiallyVisibleVertically =
							isWithinVertical( subject.top ) ||
							isWithinVertical( subject.bottom );
						var isPartiallyVisibleHorizontally =
							isWithinHorizontal( subject.left ) ||
							isWithinHorizontal( subject.right );
						var isPartiallyContained =
							isPartiallyVisibleVertically &&
							isPartiallyVisibleHorizontally;

						if ( isPartiallyContained ) {
							return true;
						}

						var isBiggerVertically =
							subject.top < frame.top &&
							subject.bottom > frame.bottom;
						var isBiggerHorizontally =
							subject.left < frame.left &&
							subject.right > frame.right;
						var isTargetBiggerThanFrame =
							isBiggerVertically && isBiggerHorizontally;

						if ( isTargetBiggerThanFrame ) {
							return true;
						}

						var isTargetBiggerOnOneAxis =
							( isBiggerVertically &&
								isPartiallyVisibleHorizontally ) ||
							( isBiggerHorizontally &&
								isPartiallyVisibleVertically );
						return isTargetBiggerOnOneAxis;
					};
				};

				var isTotallyVisibleThroughFrame = function ( frame ) {
					var isWithinVertical = isWithin( frame.top, frame.bottom );
					var isWithinHorizontal = isWithin(
						frame.left,
						frame.right
					);
					return function ( subject ) {
						var isContained =
							isWithinVertical( subject.top ) &&
							isWithinVertical( subject.bottom ) &&
							isWithinHorizontal( subject.left ) &&
							isWithinHorizontal( subject.right );
						return isContained;
					};
				};

				var vertical = {
					direction: 'vertical',
					line: 'y',
					crossAxisLine: 'x',
					start: 'top',
					end: 'bottom',
					size: 'height',
					crossAxisStart: 'left',
					crossAxisEnd: 'right',
					crossAxisSize: 'width',
				};
				var horizontal = {
					direction: 'horizontal',
					line: 'x',
					crossAxisLine: 'y',
					start: 'left',
					end: 'right',
					size: 'width',
					crossAxisStart: 'top',
					crossAxisEnd: 'bottom',
					crossAxisSize: 'height',
				};

				var isTotallyVisibleThroughFrameOnAxis = function ( axis ) {
					return function ( frame ) {
						var isWithinVertical = isWithin(
							frame.top,
							frame.bottom
						);
						var isWithinHorizontal = isWithin(
							frame.left,
							frame.right
						);
						return function ( subject ) {
							if ( axis === vertical ) {
								return (
									isWithinVertical( subject.top ) &&
									isWithinVertical( subject.bottom )
								);
							}

							return (
								isWithinHorizontal( subject.left ) &&
								isWithinHorizontal( subject.right )
							);
						};
					};
				};

				var getDroppableDisplaced = function getDroppableDisplaced(
					target,
					destination
				) {
					var displacement = destination.frame
						? destination.frame.scroll.diff.displacement
						: origin;
					return offsetByPosition( target, displacement );
				};

				var isVisibleInDroppable = function isVisibleInDroppable(
					target,
					destination,
					isVisibleThroughFrameFn
				) {
					if ( ! destination.subject.active ) {
						return false;
					}

					return isVisibleThroughFrameFn(
						destination.subject.active
					)( target );
				};

				var isVisibleInViewport = function isVisibleInViewport(
					target,
					viewport,
					isVisibleThroughFrameFn
				) {
					return isVisibleThroughFrameFn( viewport )( target );
				};

				var isVisible = function isVisible( _ref ) {
					var toBeDisplaced = _ref.target,
						destination = _ref.destination,
						viewport = _ref.viewport,
						withDroppableDisplacement =
							_ref.withDroppableDisplacement,
						isVisibleThroughFrameFn = _ref.isVisibleThroughFrameFn;
					var displacedTarget = withDroppableDisplacement
						? getDroppableDisplaced( toBeDisplaced, destination )
						: toBeDisplaced;
					return (
						isVisibleInDroppable(
							displacedTarget,
							destination,
							isVisibleThroughFrameFn
						) &&
						isVisibleInViewport(
							displacedTarget,
							viewport,
							isVisibleThroughFrameFn
						)
					);
				};

				var isPartiallyVisible = function isPartiallyVisible( args ) {
					return isVisible(
						( 0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
							'default'
						] )( {}, args, {
							isVisibleThroughFrameFn:
								isPartiallyVisibleThroughFrame,
						} )
					);
				};
				var isTotallyVisible = function isTotallyVisible( args ) {
					return isVisible(
						( 0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
							'default'
						] )( {}, args, {
							isVisibleThroughFrameFn:
								isTotallyVisibleThroughFrame,
						} )
					);
				};
				var isTotallyVisibleOnAxis = function isTotallyVisibleOnAxis(
					args
				) {
					return isVisible(
						( 0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
							'default'
						] )( {}, args, {
							isVisibleThroughFrameFn:
								isTotallyVisibleThroughFrameOnAxis(
									args.destination.axis
								),
						} )
					);
				};

				var getShouldAnimate = function getShouldAnimate(
					id,
					last,
					forceShouldAnimate
				) {
					if ( typeof forceShouldAnimate === 'boolean' ) {
						return forceShouldAnimate;
					}

					if ( ! last ) {
						return true;
					}

					var invisible = last.invisible,
						visible = last.visible;

					if ( invisible[ id ] ) {
						return false;
					}

					var previous = visible[ id ];
					return previous ? previous.shouldAnimate : true;
				};

				function getTarget( draggable, displacedBy ) {
					var marginBox = draggable.page.marginBox;
					var expandBy = {
						top: displacedBy.point.y,
						right: 0,
						bottom: 0,
						left: displacedBy.point.x,
					};
					return ( 0,
					css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect )(
						( 0,
						css_box_model__WEBPACK_IMPORTED_MODULE_5__.expand )(
							marginBox,
							expandBy
						)
					);
				}

				function getDisplacementGroups( _ref ) {
					var afterDragging = _ref.afterDragging,
						destination = _ref.destination,
						displacedBy = _ref.displacedBy,
						viewport = _ref.viewport,
						forceShouldAnimate = _ref.forceShouldAnimate,
						last = _ref.last;
					return afterDragging.reduce(
						function process( groups, draggable ) {
							var target = getTarget( draggable, displacedBy );
							var id = draggable.descriptor.id;
							groups.all.push( id );
							var isVisible = isPartiallyVisible( {
								target: target,
								destination: destination,
								viewport: viewport,
								withDroppableDisplacement: true,
							} );

							if ( ! isVisible ) {
								groups.invisible[
									draggable.descriptor.id
								] = true;
								return groups;
							}

							var shouldAnimate = getShouldAnimate(
								id,
								last,
								forceShouldAnimate
							);
							var displacement = {
								draggableId: id,
								shouldAnimate: shouldAnimate,
							};
							groups.visible[ id ] = displacement;
							return groups;
						},
						{
							all: [],
							visible: {},
							invisible: {},
						}
					);
				}

				function getIndexOfLastItem( draggables, options ) {
					if ( ! draggables.length ) {
						return 0;
					}

					var indexOfLastItem =
						draggables[ draggables.length - 1 ].descriptor.index;
					return options.inHomeList
						? indexOfLastItem
						: indexOfLastItem + 1;
				}

				function goAtEnd( _ref ) {
					var insideDestination = _ref.insideDestination,
						inHomeList = _ref.inHomeList,
						displacedBy = _ref.displacedBy,
						destination = _ref.destination;
					var newIndex = getIndexOfLastItem( insideDestination, {
						inHomeList: inHomeList,
					} );
					return {
						displaced: emptyGroups,
						displacedBy: displacedBy,
						at: {
							type: 'REORDER',
							destination: {
								droppableId: destination.descriptor.id,
								index: newIndex,
							},
						},
					};
				}

				function calculateReorderImpact( _ref2 ) {
					var draggable = _ref2.draggable,
						insideDestination = _ref2.insideDestination,
						destination = _ref2.destination,
						viewport = _ref2.viewport,
						displacedBy = _ref2.displacedBy,
						last = _ref2.last,
						index = _ref2.index,
						forceShouldAnimate = _ref2.forceShouldAnimate;
					var inHomeList = isHomeOf( draggable, destination );

					if ( index == null ) {
						return goAtEnd( {
							insideDestination: insideDestination,
							inHomeList: inHomeList,
							displacedBy: displacedBy,
							destination: destination,
						} );
					}

					var match = find( insideDestination, function ( item ) {
						return item.descriptor.index === index;
					} );

					if ( ! match ) {
						return goAtEnd( {
							insideDestination: insideDestination,
							inHomeList: inHomeList,
							displacedBy: displacedBy,
							destination: destination,
						} );
					}

					var withoutDragging = removeDraggableFromList(
						draggable,
						insideDestination
					);
					var sliceFrom = insideDestination.indexOf( match );
					var impacted = withoutDragging.slice( sliceFrom );
					var displaced = getDisplacementGroups( {
						afterDragging: impacted,
						destination: destination,
						displacedBy: displacedBy,
						last: last,
						viewport: viewport.frame,
						forceShouldAnimate: forceShouldAnimate,
					} );
					return {
						displaced: displaced,
						displacedBy: displacedBy,
						at: {
							type: 'REORDER',
							destination: {
								droppableId: destination.descriptor.id,
								index: index,
							},
						},
					};
				}

				function didStartAfterCritical( draggableId, afterCritical ) {
					return Boolean( afterCritical.effected[ draggableId ] );
				}

				var fromCombine = function ( _ref ) {
					var isMovingForward = _ref.isMovingForward,
						destination = _ref.destination,
						draggables = _ref.draggables,
						combine = _ref.combine,
						afterCritical = _ref.afterCritical;

					if ( ! destination.isCombineEnabled ) {
						return null;
					}

					var combineId = combine.draggableId;
					var combineWith = draggables[ combineId ];
					var combineWithIndex = combineWith.descriptor.index;
					var didCombineWithStartAfterCritical =
						didStartAfterCritical( combineId, afterCritical );

					if ( didCombineWithStartAfterCritical ) {
						if ( isMovingForward ) {
							return combineWithIndex;
						}

						return combineWithIndex - 1;
					}

					if ( isMovingForward ) {
						return combineWithIndex + 1;
					}

					return combineWithIndex;
				};

				var fromReorder = function ( _ref ) {
					var isMovingForward = _ref.isMovingForward,
						isInHomeList = _ref.isInHomeList,
						insideDestination = _ref.insideDestination,
						location = _ref.location;

					if ( ! insideDestination.length ) {
						return null;
					}

					var currentIndex = location.index;
					var proposedIndex = isMovingForward
						? currentIndex + 1
						: currentIndex - 1;
					var firstIndex = insideDestination[ 0 ].descriptor.index;
					var lastIndex =
						insideDestination[ insideDestination.length - 1 ]
							.descriptor.index;
					var upperBound = isInHomeList ? lastIndex : lastIndex + 1;

					if ( proposedIndex < firstIndex ) {
						return null;
					}

					if ( proposedIndex > upperBound ) {
						return null;
					}

					return proposedIndex;
				};

				var moveToNextIndex = function ( _ref ) {
					var isMovingForward = _ref.isMovingForward,
						isInHomeList = _ref.isInHomeList,
						draggable = _ref.draggable,
						draggables = _ref.draggables,
						destination = _ref.destination,
						insideDestination = _ref.insideDestination,
						previousImpact = _ref.previousImpact,
						viewport = _ref.viewport,
						afterCritical = _ref.afterCritical;
					var wasAt = previousImpact.at;
					! wasAt
						? true
							? invariant(
									false,
									'Cannot move in direction without previous impact location'
							  )
							: 0
						: void 0;

					if ( wasAt.type === 'REORDER' ) {
						var _newIndex = fromReorder( {
							isMovingForward: isMovingForward,
							isInHomeList: isInHomeList,
							location: wasAt.destination,
							insideDestination: insideDestination,
						} );

						if ( _newIndex == null ) {
							return null;
						}

						return calculateReorderImpact( {
							draggable: draggable,
							insideDestination: insideDestination,
							destination: destination,
							viewport: viewport,
							last: previousImpact.displaced,
							displacedBy: previousImpact.displacedBy,
							index: _newIndex,
						} );
					}

					var newIndex = fromCombine( {
						isMovingForward: isMovingForward,
						destination: destination,
						displaced: previousImpact.displaced,
						draggables: draggables,
						combine: wasAt.combine,
						afterCritical: afterCritical,
					} );

					if ( newIndex == null ) {
						return null;
					}

					return calculateReorderImpact( {
						draggable: draggable,
						insideDestination: insideDestination,
						destination: destination,
						viewport: viewport,
						last: previousImpact.displaced,
						displacedBy: previousImpact.displacedBy,
						index: newIndex,
					} );
				};

				var getCombinedItemDisplacement = function ( _ref ) {
					var displaced = _ref.displaced,
						afterCritical = _ref.afterCritical,
						combineWith = _ref.combineWith,
						displacedBy = _ref.displacedBy;
					var isDisplaced = Boolean(
						displaced.visible[ combineWith ] ||
							displaced.invisible[ combineWith ]
					);

					if ( didStartAfterCritical( combineWith, afterCritical ) ) {
						return isDisplaced
							? origin
							: negate( displacedBy.point );
					}

					return isDisplaced ? displacedBy.point : origin;
				};

				var whenCombining = function ( _ref ) {
					var afterCritical = _ref.afterCritical,
						impact = _ref.impact,
						draggables = _ref.draggables;
					var combine = tryGetCombine( impact );
					! combine ? ( true ? invariant( false ) : 0 ) : void 0;
					var combineWith = combine.draggableId;
					var center =
						draggables[ combineWith ].page.borderBox.center;
					var displaceBy = getCombinedItemDisplacement( {
						displaced: impact.displaced,
						afterCritical: afterCritical,
						combineWith: combineWith,
						displacedBy: impact.displacedBy,
					} );
					return add( center, displaceBy );
				};

				var distanceFromStartToBorderBoxCenter =
					function distanceFromStartToBorderBoxCenter( axis, box ) {
						return (
							box.margin[ axis.start ] +
							box.borderBox[ axis.size ] / 2
						);
					};

				var distanceFromEndToBorderBoxCenter =
					function distanceFromEndToBorderBoxCenter( axis, box ) {
						return (
							box.margin[ axis.end ] +
							box.borderBox[ axis.size ] / 2
						);
					};

				var getCrossAxisBorderBoxCenter =
					function getCrossAxisBorderBoxCenter(
						axis,
						target,
						isMoving
					) {
						return (
							target[ axis.crossAxisStart ] +
							isMoving.margin[ axis.crossAxisStart ] +
							isMoving.borderBox[ axis.crossAxisSize ] / 2
						);
					};

				var goAfter = function goAfter( _ref ) {
					var axis = _ref.axis,
						moveRelativeTo = _ref.moveRelativeTo,
						isMoving = _ref.isMoving;
					return patch(
						axis.line,
						moveRelativeTo.marginBox[ axis.end ] +
							distanceFromStartToBorderBoxCenter(
								axis,
								isMoving
							),
						getCrossAxisBorderBoxCenter(
							axis,
							moveRelativeTo.marginBox,
							isMoving
						)
					);
				};
				var goBefore = function goBefore( _ref2 ) {
					var axis = _ref2.axis,
						moveRelativeTo = _ref2.moveRelativeTo,
						isMoving = _ref2.isMoving;
					return patch(
						axis.line,
						moveRelativeTo.marginBox[ axis.start ] -
							distanceFromEndToBorderBoxCenter( axis, isMoving ),
						getCrossAxisBorderBoxCenter(
							axis,
							moveRelativeTo.marginBox,
							isMoving
						)
					);
				};
				var goIntoStart = function goIntoStart( _ref3 ) {
					var axis = _ref3.axis,
						moveInto = _ref3.moveInto,
						isMoving = _ref3.isMoving;
					return patch(
						axis.line,
						moveInto.contentBox[ axis.start ] +
							distanceFromStartToBorderBoxCenter(
								axis,
								isMoving
							),
						getCrossAxisBorderBoxCenter(
							axis,
							moveInto.contentBox,
							isMoving
						)
					);
				};

				var whenReordering = function ( _ref ) {
					var impact = _ref.impact,
						draggable = _ref.draggable,
						draggables = _ref.draggables,
						droppable = _ref.droppable,
						afterCritical = _ref.afterCritical;
					var insideDestination = getDraggablesInsideDroppable(
						droppable.descriptor.id,
						draggables
					);
					var draggablePage = draggable.page;
					var axis = droppable.axis;

					if ( ! insideDestination.length ) {
						return goIntoStart( {
							axis: axis,
							moveInto: droppable.page,
							isMoving: draggablePage,
						} );
					}

					var displaced = impact.displaced,
						displacedBy = impact.displacedBy;
					var closestAfter = displaced.all[ 0 ];

					if ( closestAfter ) {
						var closest = draggables[ closestAfter ];

						if (
							didStartAfterCritical( closestAfter, afterCritical )
						) {
							return goBefore( {
								axis: axis,
								moveRelativeTo: closest.page,
								isMoving: draggablePage,
							} );
						}

						var withDisplacement = ( 0,
						css_box_model__WEBPACK_IMPORTED_MODULE_5__.offset )(
							closest.page,
							displacedBy.point
						);
						return goBefore( {
							axis: axis,
							moveRelativeTo: withDisplacement,
							isMoving: draggablePage,
						} );
					}

					var last =
						insideDestination[ insideDestination.length - 1 ];

					if ( last.descriptor.id === draggable.descriptor.id ) {
						return draggablePage.borderBox.center;
					}

					if (
						didStartAfterCritical(
							last.descriptor.id,
							afterCritical
						)
					) {
						var page = ( 0,
						css_box_model__WEBPACK_IMPORTED_MODULE_5__.offset )(
							last.page,
							negate( afterCritical.displacedBy.point )
						);
						return goAfter( {
							axis: axis,
							moveRelativeTo: page,
							isMoving: draggablePage,
						} );
					}

					return goAfter( {
						axis: axis,
						moveRelativeTo: last.page,
						isMoving: draggablePage,
					} );
				};

				var withDroppableDisplacement = function ( droppable, point ) {
					var frame = droppable.frame;

					if ( ! frame ) {
						return point;
					}

					return add( point, frame.scroll.diff.displacement );
				};

				var getResultWithoutDroppableDisplacement =
					function getResultWithoutDroppableDisplacement( _ref ) {
						var impact = _ref.impact,
							draggable = _ref.draggable,
							droppable = _ref.droppable,
							draggables = _ref.draggables,
							afterCritical = _ref.afterCritical;
						var original = draggable.page.borderBox.center;
						var at = impact.at;

						if ( ! droppable ) {
							return original;
						}

						if ( ! at ) {
							return original;
						}

						if ( at.type === 'REORDER' ) {
							return whenReordering( {
								impact: impact,
								draggable: draggable,
								draggables: draggables,
								droppable: droppable,
								afterCritical: afterCritical,
							} );
						}

						return whenCombining( {
							impact: impact,
							draggables: draggables,
							afterCritical: afterCritical,
						} );
					};

				var getPageBorderBoxCenterFromImpact = function ( args ) {
					var withoutDisplacement =
						getResultWithoutDroppableDisplacement( args );
					var droppable = args.droppable;
					var withDisplacement = droppable
						? withDroppableDisplacement(
								droppable,
								withoutDisplacement
						  )
						: withoutDisplacement;
					return withDisplacement;
				};

				var scrollViewport = function ( viewport, newScroll ) {
					var diff = subtract( newScroll, viewport.scroll.initial );
					var displacement = negate( diff );
					var frame = ( 0,
					css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect )( {
						top: newScroll.y,
						bottom: newScroll.y + viewport.frame.height,
						left: newScroll.x,
						right: newScroll.x + viewport.frame.width,
					} );
					var updated = {
						frame: frame,
						scroll: {
							initial: viewport.scroll.initial,
							max: viewport.scroll.max,
							current: newScroll,
							diff: {
								value: diff,
								displacement: displacement,
							},
						},
					};
					return updated;
				};

				function getDraggables( ids, draggables ) {
					return ids.map( function ( id ) {
						return draggables[ id ];
					} );
				}

				function tryGetVisible( id, groups ) {
					for ( var i = 0; i < groups.length; i++ ) {
						var displacement = groups[ i ].visible[ id ];

						if ( displacement ) {
							return displacement;
						}
					}

					return null;
				}

				var speculativelyIncrease = function ( _ref ) {
					var impact = _ref.impact,
						viewport = _ref.viewport,
						destination = _ref.destination,
						draggables = _ref.draggables,
						maxScrollChange = _ref.maxScrollChange;
					var scrolledViewport = scrollViewport(
						viewport,
						add( viewport.scroll.current, maxScrollChange )
					);
					var scrolledDroppable = destination.frame
						? scrollDroppable(
								destination,
								add(
									destination.frame.scroll.current,
									maxScrollChange
								)
						  )
						: destination;
					var last = impact.displaced;
					var withViewportScroll = getDisplacementGroups( {
						afterDragging: getDraggables( last.all, draggables ),
						destination: destination,
						displacedBy: impact.displacedBy,
						viewport: scrolledViewport.frame,
						last: last,
						forceShouldAnimate: false,
					} );
					var withDroppableScroll = getDisplacementGroups( {
						afterDragging: getDraggables( last.all, draggables ),
						destination: scrolledDroppable,
						displacedBy: impact.displacedBy,
						viewport: viewport.frame,
						last: last,
						forceShouldAnimate: false,
					} );
					var invisible = {};
					var visible = {};
					var groups = [
						last,
						withViewportScroll,
						withDroppableScroll,
					];
					last.all.forEach( function ( id ) {
						var displacement = tryGetVisible( id, groups );

						if ( displacement ) {
							visible[ id ] = displacement;
							return;
						}

						invisible[ id ] = true;
					} );

					var newImpact = ( 0,
					_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
						'default'
					] )( {}, impact, {
						displaced: {
							all: last.all,
							invisible: invisible,
							visible: visible,
						},
					} );

					return newImpact;
				};

				var withViewportDisplacement = function ( viewport, point ) {
					return add( viewport.scroll.diff.displacement, point );
				};

				var getClientFromPageBorderBoxCenter = function ( _ref ) {
					var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
						draggable = _ref.draggable,
						viewport = _ref.viewport;
					var withoutPageScrollChange = withViewportDisplacement(
						viewport,
						pageBorderBoxCenter
					);
					var offset = subtract(
						withoutPageScrollChange,
						draggable.page.borderBox.center
					);
					return add( draggable.client.borderBox.center, offset );
				};

				var isTotallyVisibleInNewLocation = function ( _ref ) {
					var draggable = _ref.draggable,
						destination = _ref.destination,
						newPageBorderBoxCenter = _ref.newPageBorderBoxCenter,
						viewport = _ref.viewport,
						withDroppableDisplacement =
							_ref.withDroppableDisplacement,
						_ref$onlyOnMainAxis = _ref.onlyOnMainAxis,
						onlyOnMainAxis =
							_ref$onlyOnMainAxis === void 0
								? false
								: _ref$onlyOnMainAxis;
					var changeNeeded = subtract(
						newPageBorderBoxCenter,
						draggable.page.borderBox.center
					);
					var shifted = offsetByPosition(
						draggable.page.borderBox,
						changeNeeded
					);
					var args = {
						target: shifted,
						destination: destination,
						withDroppableDisplacement: withDroppableDisplacement,
						viewport: viewport,
					};
					return onlyOnMainAxis
						? isTotallyVisibleOnAxis( args )
						: isTotallyVisible( args );
				};

				var moveToNextPlace = function ( _ref ) {
					var isMovingForward = _ref.isMovingForward,
						draggable = _ref.draggable,
						destination = _ref.destination,
						draggables = _ref.draggables,
						previousImpact = _ref.previousImpact,
						viewport = _ref.viewport,
						previousPageBorderBoxCenter =
							_ref.previousPageBorderBoxCenter,
						previousClientSelection = _ref.previousClientSelection,
						afterCritical = _ref.afterCritical;

					if ( ! destination.isEnabled ) {
						return null;
					}

					var insideDestination = getDraggablesInsideDroppable(
						destination.descriptor.id,
						draggables
					);
					var isInHomeList = isHomeOf( draggable, destination );
					var impact =
						moveToNextCombine( {
							isMovingForward: isMovingForward,
							draggable: draggable,
							destination: destination,
							insideDestination: insideDestination,
							previousImpact: previousImpact,
						} ) ||
						moveToNextIndex( {
							isMovingForward: isMovingForward,
							isInHomeList: isInHomeList,
							draggable: draggable,
							draggables: draggables,
							destination: destination,
							insideDestination: insideDestination,
							previousImpact: previousImpact,
							viewport: viewport,
							afterCritical: afterCritical,
						} );

					if ( ! impact ) {
						return null;
					}

					var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact(
						{
							impact: impact,
							draggable: draggable,
							droppable: destination,
							draggables: draggables,
							afterCritical: afterCritical,
						}
					);
					var isVisibleInNewLocation = isTotallyVisibleInNewLocation(
						{
							draggable: draggable,
							destination: destination,
							newPageBorderBoxCenter: pageBorderBoxCenter,
							viewport: viewport.frame,
							withDroppableDisplacement: false,
							onlyOnMainAxis: true,
						}
					);

					if ( isVisibleInNewLocation ) {
						var clientSelection = getClientFromPageBorderBoxCenter(
							{
								pageBorderBoxCenter: pageBorderBoxCenter,
								draggable: draggable,
								viewport: viewport,
							}
						);
						return {
							clientSelection: clientSelection,
							impact: impact,
							scrollJumpRequest: null,
						};
					}

					var distance = subtract(
						pageBorderBoxCenter,
						previousPageBorderBoxCenter
					);
					var cautious = speculativelyIncrease( {
						impact: impact,
						viewport: viewport,
						destination: destination,
						draggables: draggables,
						maxScrollChange: distance,
					} );
					return {
						clientSelection: previousClientSelection,
						impact: cautious,
						scrollJumpRequest: distance,
					};
				};

				var getKnownActive = function getKnownActive( droppable ) {
					var rect = droppable.subject.active;
					! rect
						? true
							? invariant(
									false,
									'Cannot get clipped area from droppable'
							  )
							: 0
						: void 0;
					return rect;
				};

				var getBestCrossAxisDroppable = function ( _ref ) {
					var isMovingForward = _ref.isMovingForward,
						pageBorderBoxCenter = _ref.pageBorderBoxCenter,
						source = _ref.source,
						droppables = _ref.droppables,
						viewport = _ref.viewport;
					var active = source.subject.active;

					if ( ! active ) {
						return null;
					}

					var axis = source.axis;
					var isBetweenSourceClipped = isWithin(
						active[ axis.start ],
						active[ axis.end ]
					);
					var candidates = toDroppableList( droppables )
						.filter( function ( droppable ) {
							return droppable !== source;
						} )
						.filter( function ( droppable ) {
							return droppable.isEnabled;
						} )
						.filter( function ( droppable ) {
							return Boolean( droppable.subject.active );
						} )
						.filter( function ( droppable ) {
							return isPartiallyVisibleThroughFrame(
								viewport.frame
							)( getKnownActive( droppable ) );
						} )
						.filter( function ( droppable ) {
							var activeOfTarget = getKnownActive( droppable );

							if ( isMovingForward ) {
								return (
									active[ axis.crossAxisEnd ] <
									activeOfTarget[ axis.crossAxisEnd ]
								);
							}

							return (
								activeOfTarget[ axis.crossAxisStart ] <
								active[ axis.crossAxisStart ]
							);
						} )
						.filter( function ( droppable ) {
							var activeOfTarget = getKnownActive( droppable );
							var isBetweenDestinationClipped = isWithin(
								activeOfTarget[ axis.start ],
								activeOfTarget[ axis.end ]
							);
							return (
								isBetweenSourceClipped(
									activeOfTarget[ axis.start ]
								) ||
								isBetweenSourceClipped(
									activeOfTarget[ axis.end ]
								) ||
								isBetweenDestinationClipped(
									active[ axis.start ]
								) ||
								isBetweenDestinationClipped(
									active[ axis.end ]
								)
							);
						} )
						.sort( function ( a, b ) {
							var first =
								getKnownActive( a )[ axis.crossAxisStart ];
							var second =
								getKnownActive( b )[ axis.crossAxisStart ];

							if ( isMovingForward ) {
								return first - second;
							}

							return second - first;
						} )
						.filter( function ( droppable, index, array ) {
							return (
								getKnownActive( droppable )[
									axis.crossAxisStart
								] ===
								getKnownActive( array[ 0 ] )[
									axis.crossAxisStart
								]
							);
						} );

					if ( ! candidates.length ) {
						return null;
					}

					if ( candidates.length === 1 ) {
						return candidates[ 0 ];
					}

					var contains = candidates.filter( function ( droppable ) {
						var isWithinDroppable = isWithin(
							getKnownActive( droppable )[ axis.start ],
							getKnownActive( droppable )[ axis.end ]
						);
						return isWithinDroppable(
							pageBorderBoxCenter[ axis.line ]
						);
					} );

					if ( contains.length === 1 ) {
						return contains[ 0 ];
					}

					if ( contains.length > 1 ) {
						return contains.sort( function ( a, b ) {
							return (
								getKnownActive( a )[ axis.start ] -
								getKnownActive( b )[ axis.start ]
							);
						} )[ 0 ];
					}

					return candidates.sort( function ( a, b ) {
						var first = closest(
							pageBorderBoxCenter,
							getCorners( getKnownActive( a ) )
						);
						var second = closest(
							pageBorderBoxCenter,
							getCorners( getKnownActive( b ) )
						);

						if ( first !== second ) {
							return first - second;
						}

						return (
							getKnownActive( a )[ axis.start ] -
							getKnownActive( b )[ axis.start ]
						);
					} )[ 0 ];
				};

				var getCurrentPageBorderBoxCenter =
					function getCurrentPageBorderBoxCenter(
						draggable,
						afterCritical
					) {
						var original = draggable.page.borderBox.center;
						return didStartAfterCritical(
							draggable.descriptor.id,
							afterCritical
						)
							? subtract(
									original,
									afterCritical.displacedBy.point
							  )
							: original;
					};
				var getCurrentPageBorderBox = function getCurrentPageBorderBox(
					draggable,
					afterCritical
				) {
					var original = draggable.page.borderBox;
					return didStartAfterCritical(
						draggable.descriptor.id,
						afterCritical
					)
						? offsetByPosition(
								original,
								negate( afterCritical.displacedBy.point )
						  )
						: original;
				};

				var getClosestDraggable = function ( _ref ) {
					var pageBorderBoxCenter = _ref.pageBorderBoxCenter,
						viewport = _ref.viewport,
						destination = _ref.destination,
						insideDestination = _ref.insideDestination,
						afterCritical = _ref.afterCritical;
					var sorted = insideDestination
						.filter( function ( draggable ) {
							return isTotallyVisible( {
								target: getCurrentPageBorderBox(
									draggable,
									afterCritical
								),
								destination: destination,
								viewport: viewport.frame,
								withDroppableDisplacement: true,
							} );
						} )
						.sort( function ( a, b ) {
							var distanceToA = distance(
								pageBorderBoxCenter,
								withDroppableDisplacement(
									destination,
									getCurrentPageBorderBoxCenter(
										a,
										afterCritical
									)
								)
							);
							var distanceToB = distance(
								pageBorderBoxCenter,
								withDroppableDisplacement(
									destination,
									getCurrentPageBorderBoxCenter(
										b,
										afterCritical
									)
								)
							);

							if ( distanceToA < distanceToB ) {
								return -1;
							}

							if ( distanceToB < distanceToA ) {
								return 1;
							}

							return a.descriptor.index - b.descriptor.index;
						} );
					return sorted[ 0 ] || null;
				};

				var getDisplacedBy = ( 0,
				memoize_one__WEBPACK_IMPORTED_MODULE_6__[ 'default' ] )(
					function getDisplacedBy( axis, displaceBy ) {
						var displacement = displaceBy[ axis.line ];
						return {
							value: displacement,
							point: patch( axis.line, displacement ),
						};
					}
				);

				var getRequiredGrowthForPlaceholder =
					function getRequiredGrowthForPlaceholder(
						droppable,
						placeholderSize,
						draggables
					) {
						var axis = droppable.axis;

						if ( droppable.descriptor.mode === 'virtual' ) {
							return patch(
								axis.line,
								placeholderSize[ axis.line ]
							);
						}

						var availableSpace =
							droppable.subject.page.contentBox[ axis.size ];
						var insideDroppable = getDraggablesInsideDroppable(
							droppable.descriptor.id,
							draggables
						);
						var spaceUsed = insideDroppable.reduce( function (
							sum,
							dimension
						) {
							return (
								sum + dimension.client.marginBox[ axis.size ]
							);
						}, 0 );
						var requiredSpace =
							spaceUsed + placeholderSize[ axis.line ];
						var needsToGrowBy = requiredSpace - availableSpace;

						if ( needsToGrowBy <= 0 ) {
							return null;
						}

						return patch( axis.line, needsToGrowBy );
					};

				var withMaxScroll = function withMaxScroll( frame, max ) {
					return ( 0,
					_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
						'default'
					] )( {}, frame, {
						scroll: ( 0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
							'default'
						] )( {}, frame.scroll, {
							max: max,
						} ),
					} );
				};

				var addPlaceholder = function addPlaceholder(
					droppable,
					draggable,
					draggables
				) {
					var frame = droppable.frame;
					!! isHomeOf( draggable, droppable )
						? true
							? invariant(
									false,
									'Should not add placeholder space to home list'
							  )
							: 0
						: void 0;
					!! droppable.subject.withPlaceholder
						? true
							? invariant(
									false,
									'Cannot add placeholder size to a subject when it already has one'
							  )
							: 0
						: void 0;
					var placeholderSize = getDisplacedBy(
						droppable.axis,
						draggable.displaceBy
					).point;
					var requiredGrowth = getRequiredGrowthForPlaceholder(
						droppable,
						placeholderSize,
						draggables
					);
					var added = {
						placeholderSize: placeholderSize,
						increasedBy: requiredGrowth,
						oldFrameMaxScroll: droppable.frame
							? droppable.frame.scroll.max
							: null,
					};

					if ( ! frame ) {
						var _subject = getSubject( {
							page: droppable.subject.page,
							withPlaceholder: added,
							axis: droppable.axis,
							frame: droppable.frame,
						} );

						return ( 0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
							'default'
						] )( {}, droppable, {
							subject: _subject,
						} );
					}

					var maxScroll = requiredGrowth
						? add( frame.scroll.max, requiredGrowth )
						: frame.scroll.max;
					var newFrame = withMaxScroll( frame, maxScroll );
					var subject = getSubject( {
						page: droppable.subject.page,
						withPlaceholder: added,
						axis: droppable.axis,
						frame: newFrame,
					} );
					return ( 0,
					_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
						'default'
					] )( {}, droppable, {
						subject: subject,
						frame: newFrame,
					} );
				};
				var removePlaceholder = function removePlaceholder(
					droppable
				) {
					var added = droppable.subject.withPlaceholder;
					! added
						? true
							? invariant(
									false,
									'Cannot remove placeholder form subject when there was none'
							  )
							: 0
						: void 0;
					var frame = droppable.frame;

					if ( ! frame ) {
						var _subject2 = getSubject( {
							page: droppable.subject.page,
							axis: droppable.axis,
							frame: null,
							withPlaceholder: null,
						} );

						return ( 0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
							'default'
						] )( {}, droppable, {
							subject: _subject2,
						} );
					}

					var oldMaxScroll = added.oldFrameMaxScroll;
					! oldMaxScroll
						? true
							? invariant(
									false,
									'Expected droppable with frame to have old max frame scroll when removing placeholder'
							  )
							: 0
						: void 0;
					var newFrame = withMaxScroll( frame, oldMaxScroll );
					var subject = getSubject( {
						page: droppable.subject.page,
						axis: droppable.axis,
						frame: newFrame,
						withPlaceholder: null,
					} );
					return ( 0,
					_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
						'default'
					] )( {}, droppable, {
						subject: subject,
						frame: newFrame,
					} );
				};

				var moveToNewDroppable = function ( _ref ) {
					var previousPageBorderBoxCenter =
							_ref.previousPageBorderBoxCenter,
						moveRelativeTo = _ref.moveRelativeTo,
						insideDestination = _ref.insideDestination,
						draggable = _ref.draggable,
						draggables = _ref.draggables,
						destination = _ref.destination,
						viewport = _ref.viewport,
						afterCritical = _ref.afterCritical;

					if ( ! moveRelativeTo ) {
						if ( insideDestination.length ) {
							return null;
						}

						var proposed = {
							displaced: emptyGroups,
							displacedBy: noDisplacedBy,
							at: {
								type: 'REORDER',
								destination: {
									droppableId: destination.descriptor.id,
									index: 0,
								},
							},
						};
						var proposedPageBorderBoxCenter =
							getPageBorderBoxCenterFromImpact( {
								impact: proposed,
								draggable: draggable,
								droppable: destination,
								draggables: draggables,
								afterCritical: afterCritical,
							} );
						var withPlaceholder = isHomeOf( draggable, destination )
							? destination
							: addPlaceholder(
									destination,
									draggable,
									draggables
							  );
						var isVisibleInNewLocation =
							isTotallyVisibleInNewLocation( {
								draggable: draggable,
								destination: withPlaceholder,
								newPageBorderBoxCenter:
									proposedPageBorderBoxCenter,
								viewport: viewport.frame,
								withDroppableDisplacement: false,
								onlyOnMainAxis: true,
							} );
						return isVisibleInNewLocation ? proposed : null;
					}

					var isGoingBeforeTarget = Boolean(
						previousPageBorderBoxCenter[ destination.axis.line ] <=
							moveRelativeTo.page.borderBox.center[
								destination.axis.line
							]
					);

					var proposedIndex = ( function () {
						var relativeTo = moveRelativeTo.descriptor.index;

						if (
							moveRelativeTo.descriptor.id ===
							draggable.descriptor.id
						) {
							return relativeTo;
						}

						if ( isGoingBeforeTarget ) {
							return relativeTo;
						}

						return relativeTo + 1;
					} )();

					var displacedBy = getDisplacedBy(
						destination.axis,
						draggable.displaceBy
					);
					return calculateReorderImpact( {
						draggable: draggable,
						insideDestination: insideDestination,
						destination: destination,
						viewport: viewport,
						displacedBy: displacedBy,
						last: emptyGroups,
						index: proposedIndex,
					} );
				};

				var moveCrossAxis = function ( _ref ) {
					var isMovingForward = _ref.isMovingForward,
						previousPageBorderBoxCenter =
							_ref.previousPageBorderBoxCenter,
						draggable = _ref.draggable,
						isOver = _ref.isOver,
						draggables = _ref.draggables,
						droppables = _ref.droppables,
						viewport = _ref.viewport,
						afterCritical = _ref.afterCritical;
					var destination = getBestCrossAxisDroppable( {
						isMovingForward: isMovingForward,
						pageBorderBoxCenter: previousPageBorderBoxCenter,
						source: isOver,
						droppables: droppables,
						viewport: viewport,
					} );

					if ( ! destination ) {
						return null;
					}

					var insideDestination = getDraggablesInsideDroppable(
						destination.descriptor.id,
						draggables
					);
					var moveRelativeTo = getClosestDraggable( {
						pageBorderBoxCenter: previousPageBorderBoxCenter,
						viewport: viewport,
						destination: destination,
						insideDestination: insideDestination,
						afterCritical: afterCritical,
					} );
					var impact = moveToNewDroppable( {
						previousPageBorderBoxCenter:
							previousPageBorderBoxCenter,
						destination: destination,
						draggable: draggable,
						draggables: draggables,
						moveRelativeTo: moveRelativeTo,
						insideDestination: insideDestination,
						viewport: viewport,
						afterCritical: afterCritical,
					} );

					if ( ! impact ) {
						return null;
					}

					var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact(
						{
							impact: impact,
							draggable: draggable,
							droppable: destination,
							draggables: draggables,
							afterCritical: afterCritical,
						}
					);
					var clientSelection = getClientFromPageBorderBoxCenter( {
						pageBorderBoxCenter: pageBorderBoxCenter,
						draggable: draggable,
						viewport: viewport,
					} );
					return {
						clientSelection: clientSelection,
						impact: impact,
						scrollJumpRequest: null,
					};
				};

				var whatIsDraggedOver = function ( impact ) {
					var at = impact.at;

					if ( ! at ) {
						return null;
					}

					if ( at.type === 'REORDER' ) {
						return at.destination.droppableId;
					}

					return at.combine.droppableId;
				};

				var getDroppableOver = function getDroppableOver(
					impact,
					droppables
				) {
					var id = whatIsDraggedOver( impact );
					return id ? droppables[ id ] : null;
				};

				var moveInDirection = function ( _ref ) {
					var state = _ref.state,
						type = _ref.type;
					var isActuallyOver = getDroppableOver(
						state.impact,
						state.dimensions.droppables
					);
					var isMainAxisMovementAllowed = Boolean( isActuallyOver );
					var home =
						state.dimensions.droppables[
							state.critical.droppable.id
						];
					var isOver = isActuallyOver || home;
					var direction = isOver.axis.direction;
					var isMovingOnMainAxis =
						( direction === 'vertical' &&
							( type === 'MOVE_UP' || type === 'MOVE_DOWN' ) ) ||
						( direction === 'horizontal' &&
							( type === 'MOVE_LEFT' || type === 'MOVE_RIGHT' ) );

					if ( isMovingOnMainAxis && ! isMainAxisMovementAllowed ) {
						return null;
					}

					var isMovingForward =
						type === 'MOVE_DOWN' || type === 'MOVE_RIGHT';
					var draggable =
						state.dimensions.draggables[
							state.critical.draggable.id
						];
					var previousPageBorderBoxCenter =
						state.current.page.borderBoxCenter;
					var _state$dimensions = state.dimensions,
						draggables = _state$dimensions.draggables,
						droppables = _state$dimensions.droppables;
					return isMovingOnMainAxis
						? moveToNextPlace( {
								isMovingForward: isMovingForward,
								previousPageBorderBoxCenter:
									previousPageBorderBoxCenter,
								draggable: draggable,
								destination: isOver,
								draggables: draggables,
								viewport: state.viewport,
								previousClientSelection:
									state.current.client.selection,
								previousImpact: state.impact,
								afterCritical: state.afterCritical,
						  } )
						: moveCrossAxis( {
								isMovingForward: isMovingForward,
								previousPageBorderBoxCenter:
									previousPageBorderBoxCenter,
								draggable: draggable,
								isOver: isOver,
								draggables: draggables,
								droppables: droppables,
								viewport: state.viewport,
								afterCritical: state.afterCritical,
						  } );
				};

				function isMovementAllowed( state ) {
					return (
						state.phase === 'DRAGGING' ||
						state.phase === 'COLLECTING'
					);
				}

				function isPositionInFrame( frame ) {
					var isWithinVertical = isWithin( frame.top, frame.bottom );
					var isWithinHorizontal = isWithin(
						frame.left,
						frame.right
					);
					return function run( point ) {
						return (
							isWithinVertical( point.y ) &&
							isWithinHorizontal( point.x )
						);
					};
				}

				function getHasOverlap( first, second ) {
					return (
						first.left < second.right &&
						first.right > second.left &&
						first.top < second.bottom &&
						first.bottom > second.top
					);
				}

				function getFurthestAway( _ref ) {
					var pageBorderBox = _ref.pageBorderBox,
						draggable = _ref.draggable,
						candidates = _ref.candidates;
					var startCenter = draggable.page.borderBox.center;
					var sorted = candidates
						.map( function ( candidate ) {
							var axis = candidate.axis;
							var target = patch(
								candidate.axis.line,
								pageBorderBox.center[ axis.line ],
								candidate.page.borderBox.center[
									axis.crossAxisLine
								]
							);
							return {
								id: candidate.descriptor.id,
								distance: distance( startCenter, target ),
							};
						} )
						.sort( function ( a, b ) {
							return b.distance - a.distance;
						} );
					return sorted[ 0 ] ? sorted[ 0 ].id : null;
				}

				function getDroppableOver$1( _ref2 ) {
					var pageBorderBox = _ref2.pageBorderBox,
						draggable = _ref2.draggable,
						droppables = _ref2.droppables;
					var candidates = toDroppableList( droppables ).filter(
						function ( item ) {
							if ( ! item.isEnabled ) {
								return false;
							}

							var active = item.subject.active;

							if ( ! active ) {
								return false;
							}

							if ( ! getHasOverlap( pageBorderBox, active ) ) {
								return false;
							}

							if (
								isPositionInFrame( active )(
									pageBorderBox.center
								)
							) {
								return true;
							}

							var axis = item.axis;
							var childCenter =
								active.center[ axis.crossAxisLine ];
							var crossAxisStart =
								pageBorderBox[ axis.crossAxisStart ];
							var crossAxisEnd =
								pageBorderBox[ axis.crossAxisEnd ];
							var isContained = isWithin(
								active[ axis.crossAxisStart ],
								active[ axis.crossAxisEnd ]
							);
							var isStartContained =
								isContained( crossAxisStart );
							var isEndContained = isContained( crossAxisEnd );

							if ( ! isStartContained && ! isEndContained ) {
								return true;
							}

							if ( isStartContained ) {
								return crossAxisStart < childCenter;
							}

							return crossAxisEnd > childCenter;
						}
					);

					if ( ! candidates.length ) {
						return null;
					}

					if ( candidates.length === 1 ) {
						return candidates[ 0 ].descriptor.id;
					}

					return getFurthestAway( {
						pageBorderBox: pageBorderBox,
						draggable: draggable,
						candidates: candidates,
					} );
				}

				var offsetRectByPosition = function offsetRectByPosition(
					rect,
					point
				) {
					return ( 0,
					css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect )(
						offsetByPosition( rect, point )
					);
				};

				var withDroppableScroll = function ( droppable, area ) {
					var frame = droppable.frame;

					if ( ! frame ) {
						return area;
					}

					return offsetRectByPosition(
						area,
						frame.scroll.diff.value
					);
				};

				function getIsDisplaced( _ref ) {
					var displaced = _ref.displaced,
						id = _ref.id;
					return Boolean(
						displaced.visible[ id ] || displaced.invisible[ id ]
					);
				}

				function atIndex( _ref ) {
					var draggable = _ref.draggable,
						closest = _ref.closest,
						inHomeList = _ref.inHomeList;

					if ( ! closest ) {
						return null;
					}

					if ( ! inHomeList ) {
						return closest.descriptor.index;
					}

					if (
						closest.descriptor.index > draggable.descriptor.index
					) {
						return closest.descriptor.index - 1;
					}

					return closest.descriptor.index;
				}

				var getReorderImpact = function ( _ref2 ) {
					var targetRect = _ref2.pageBorderBoxWithDroppableScroll,
						draggable = _ref2.draggable,
						destination = _ref2.destination,
						insideDestination = _ref2.insideDestination,
						last = _ref2.last,
						viewport = _ref2.viewport,
						afterCritical = _ref2.afterCritical;
					var axis = destination.axis;
					var displacedBy = getDisplacedBy(
						destination.axis,
						draggable.displaceBy
					);
					var displacement = displacedBy.value;
					var targetStart = targetRect[ axis.start ];
					var targetEnd = targetRect[ axis.end ];
					var withoutDragging = removeDraggableFromList(
						draggable,
						insideDestination
					);
					var closest = find( withoutDragging, function ( child ) {
						var id = child.descriptor.id;
						var childCenter =
							child.page.borderBox.center[ axis.line ];
						var didStartAfterCritical$1 = didStartAfterCritical(
							id,
							afterCritical
						);
						var isDisplaced = getIsDisplaced( {
							displaced: last,
							id: id,
						} );

						if ( didStartAfterCritical$1 ) {
							if ( isDisplaced ) {
								return targetEnd <= childCenter;
							}

							return targetStart < childCenter - displacement;
						}

						if ( isDisplaced ) {
							return targetEnd <= childCenter + displacement;
						}

						return targetStart < childCenter;
					} );
					var newIndex = atIndex( {
						draggable: draggable,
						closest: closest,
						inHomeList: isHomeOf( draggable, destination ),
					} );
					return calculateReorderImpact( {
						draggable: draggable,
						insideDestination: insideDestination,
						destination: destination,
						viewport: viewport,
						last: last,
						displacedBy: displacedBy,
						index: newIndex,
					} );
				};

				var combineThresholdDivisor = 4;
				var getCombineImpact = function ( _ref ) {
					var draggable = _ref.draggable,
						targetRect = _ref.pageBorderBoxWithDroppableScroll,
						previousImpact = _ref.previousImpact,
						destination = _ref.destination,
						insideDestination = _ref.insideDestination,
						afterCritical = _ref.afterCritical;

					if ( ! destination.isCombineEnabled ) {
						return null;
					}

					var axis = destination.axis;
					var displacedBy = getDisplacedBy(
						destination.axis,
						draggable.displaceBy
					);
					var displacement = displacedBy.value;
					var targetStart = targetRect[ axis.start ];
					var targetEnd = targetRect[ axis.end ];
					var withoutDragging = removeDraggableFromList(
						draggable,
						insideDestination
					);
					var combineWith = find(
						withoutDragging,
						function ( child ) {
							var id = child.descriptor.id;
							var childRect = child.page.borderBox;
							var childSize = childRect[ axis.size ];
							var threshold = childSize / combineThresholdDivisor;
							var didStartAfterCritical$1 = didStartAfterCritical(
								id,
								afterCritical
							);
							var isDisplaced = getIsDisplaced( {
								displaced: previousImpact.displaced,
								id: id,
							} );

							if ( didStartAfterCritical$1 ) {
								if ( isDisplaced ) {
									return (
										targetEnd >
											childRect[ axis.start ] +
												threshold &&
										targetEnd <
											childRect[ axis.end ] - threshold
									);
								}

								return (
									targetStart >
										childRect[ axis.start ] -
											displacement +
											threshold &&
									targetStart <
										childRect[ axis.end ] -
											displacement -
											threshold
								);
							}

							if ( isDisplaced ) {
								return (
									targetEnd >
										childRect[ axis.start ] +
											displacement +
											threshold &&
									targetEnd <
										childRect[ axis.end ] +
											displacement -
											threshold
								);
							}

							return (
								targetStart >
									childRect[ axis.start ] + threshold &&
								targetStart < childRect[ axis.end ] - threshold
							);
						}
					);

					if ( ! combineWith ) {
						return null;
					}

					var impact = {
						displacedBy: displacedBy,
						displaced: previousImpact.displaced,
						at: {
							type: 'COMBINE',
							combine: {
								draggableId: combineWith.descriptor.id,
								droppableId: destination.descriptor.id,
							},
						},
					};
					return impact;
				};

				var getDragImpact = function ( _ref ) {
					var pageOffset = _ref.pageOffset,
						draggable = _ref.draggable,
						draggables = _ref.draggables,
						droppables = _ref.droppables,
						previousImpact = _ref.previousImpact,
						viewport = _ref.viewport,
						afterCritical = _ref.afterCritical;
					var pageBorderBox = offsetRectByPosition(
						draggable.page.borderBox,
						pageOffset
					);
					var destinationId = getDroppableOver$1( {
						pageBorderBox: pageBorderBox,
						draggable: draggable,
						droppables: droppables,
					} );

					if ( ! destinationId ) {
						return noImpact;
					}

					var destination = droppables[ destinationId ];
					var insideDestination = getDraggablesInsideDroppable(
						destination.descriptor.id,
						draggables
					);
					var pageBorderBoxWithDroppableScroll = withDroppableScroll(
						destination,
						pageBorderBox
					);
					return (
						getCombineImpact( {
							pageBorderBoxWithDroppableScroll:
								pageBorderBoxWithDroppableScroll,
							draggable: draggable,
							previousImpact: previousImpact,
							destination: destination,
							insideDestination: insideDestination,
							afterCritical: afterCritical,
						} ) ||
						getReorderImpact( {
							pageBorderBoxWithDroppableScroll:
								pageBorderBoxWithDroppableScroll,
							draggable: draggable,
							destination: destination,
							insideDestination: insideDestination,
							last: previousImpact.displaced,
							viewport: viewport,
							afterCritical: afterCritical,
						} )
					);
				};

				var patchDroppableMap = function ( droppables, updated ) {
					var _extends2;

					return ( 0,
					_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
						'default'
					] )(
						{},
						droppables,
						( ( _extends2 = {} ),
						( _extends2[ updated.descriptor.id ] = updated ),
						_extends2 )
					);
				};

				var clearUnusedPlaceholder = function clearUnusedPlaceholder(
					_ref
				) {
					var previousImpact = _ref.previousImpact,
						impact = _ref.impact,
						droppables = _ref.droppables;
					var last = whatIsDraggedOver( previousImpact );
					var now = whatIsDraggedOver( impact );

					if ( ! last ) {
						return droppables;
					}

					if ( last === now ) {
						return droppables;
					}

					var lastDroppable = droppables[ last ];

					if ( ! lastDroppable.subject.withPlaceholder ) {
						return droppables;
					}

					var updated = removePlaceholder( lastDroppable );
					return patchDroppableMap( droppables, updated );
				};

				var recomputePlaceholders = function ( _ref2 ) {
					var draggable = _ref2.draggable,
						draggables = _ref2.draggables,
						droppables = _ref2.droppables,
						previousImpact = _ref2.previousImpact,
						impact = _ref2.impact;
					var cleaned = clearUnusedPlaceholder( {
						previousImpact: previousImpact,
						impact: impact,
						droppables: droppables,
					} );
					var isOver = whatIsDraggedOver( impact );

					if ( ! isOver ) {
						return cleaned;
					}

					var droppable = droppables[ isOver ];

					if ( isHomeOf( draggable, droppable ) ) {
						return cleaned;
					}

					if ( droppable.subject.withPlaceholder ) {
						return cleaned;
					}

					var patched = addPlaceholder(
						droppable,
						draggable,
						draggables
					);
					return patchDroppableMap( cleaned, patched );
				};

				var update = function ( _ref ) {
					var state = _ref.state,
						forcedClientSelection = _ref.clientSelection,
						forcedDimensions = _ref.dimensions,
						forcedViewport = _ref.viewport,
						forcedImpact = _ref.impact,
						scrollJumpRequest = _ref.scrollJumpRequest;
					var viewport = forcedViewport || state.viewport;
					var dimensions = forcedDimensions || state.dimensions;
					var clientSelection =
						forcedClientSelection || state.current.client.selection;
					var offset = subtract(
						clientSelection,
						state.initial.client.selection
					);
					var client = {
						offset: offset,
						selection: clientSelection,
						borderBoxCenter: add(
							state.initial.client.borderBoxCenter,
							offset
						),
					};
					var page = {
						selection: add(
							client.selection,
							viewport.scroll.current
						),
						borderBoxCenter: add(
							client.borderBoxCenter,
							viewport.scroll.current
						),
						offset: add(
							client.offset,
							viewport.scroll.diff.value
						),
					};
					var current = {
						client: client,
						page: page,
					};

					if ( state.phase === 'COLLECTING' ) {
						return ( 0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
							'default'
						] )(
							{
								phase: 'COLLECTING',
							},
							state,
							{
								dimensions: dimensions,
								viewport: viewport,
								current: current,
							}
						);
					}

					var draggable =
						dimensions.draggables[ state.critical.draggable.id ];
					var newImpact =
						forcedImpact ||
						getDragImpact( {
							pageOffset: page.offset,
							draggable: draggable,
							draggables: dimensions.draggables,
							droppables: dimensions.droppables,
							previousImpact: state.impact,
							viewport: viewport,
							afterCritical: state.afterCritical,
						} );
					var withUpdatedPlaceholders = recomputePlaceholders( {
						draggable: draggable,
						impact: newImpact,
						previousImpact: state.impact,
						draggables: dimensions.draggables,
						droppables: dimensions.droppables,
					} );

					var result = ( 0,
					_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
						'default'
					] )( {}, state, {
						current: current,
						dimensions: {
							draggables: dimensions.draggables,
							droppables: withUpdatedPlaceholders,
						},
						impact: newImpact,
						viewport: viewport,
						scrollJumpRequest: scrollJumpRequest || null,
						forceShouldAnimate: scrollJumpRequest ? false : null,
					} );

					return result;
				};

				function getDraggables$1( ids, draggables ) {
					return ids.map( function ( id ) {
						return draggables[ id ];
					} );
				}

				var recompute = function ( _ref ) {
					var impact = _ref.impact,
						viewport = _ref.viewport,
						draggables = _ref.draggables,
						destination = _ref.destination,
						forceShouldAnimate = _ref.forceShouldAnimate;
					var last = impact.displaced;
					var afterDragging = getDraggables$1( last.all, draggables );
					var displaced = getDisplacementGroups( {
						afterDragging: afterDragging,
						destination: destination,
						displacedBy: impact.displacedBy,
						viewport: viewport.frame,
						forceShouldAnimate: forceShouldAnimate,
						last: last,
					} );
					return ( 0,
					_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
						'default'
					] )( {}, impact, {
						displaced: displaced,
					} );
				};

				var getClientBorderBoxCenter = function ( _ref ) {
					var impact = _ref.impact,
						draggable = _ref.draggable,
						droppable = _ref.droppable,
						draggables = _ref.draggables,
						viewport = _ref.viewport,
						afterCritical = _ref.afterCritical;
					var pageBorderBoxCenter = getPageBorderBoxCenterFromImpact(
						{
							impact: impact,
							draggable: draggable,
							draggables: draggables,
							droppable: droppable,
							afterCritical: afterCritical,
						}
					);
					return getClientFromPageBorderBoxCenter( {
						pageBorderBoxCenter: pageBorderBoxCenter,
						draggable: draggable,
						viewport: viewport,
					} );
				};

				var refreshSnap = function ( _ref ) {
					var state = _ref.state,
						forcedDimensions = _ref.dimensions,
						forcedViewport = _ref.viewport;
					! ( state.movementMode === 'SNAP' )
						? true
							? invariant( false )
							: 0
						: void 0;
					var needsVisibilityCheck = state.impact;
					var viewport = forcedViewport || state.viewport;
					var dimensions = forcedDimensions || state.dimensions;
					var draggables = dimensions.draggables,
						droppables = dimensions.droppables;
					var draggable = draggables[ state.critical.draggable.id ];
					var isOver = whatIsDraggedOver( needsVisibilityCheck );
					! isOver
						? true
							? invariant(
									false,
									'Must be over a destination in SNAP movement mode'
							  )
							: 0
						: void 0;
					var destination = droppables[ isOver ];
					var impact = recompute( {
						impact: needsVisibilityCheck,
						viewport: viewport,
						destination: destination,
						draggables: draggables,
					} );
					var clientSelection = getClientBorderBoxCenter( {
						impact: impact,
						draggable: draggable,
						droppable: destination,
						draggables: draggables,
						viewport: viewport,
						afterCritical: state.afterCritical,
					} );
					return update( {
						impact: impact,
						clientSelection: clientSelection,
						state: state,
						dimensions: dimensions,
						viewport: viewport,
					} );
				};

				var getHomeLocation = function ( descriptor ) {
					return {
						index: descriptor.index,
						droppableId: descriptor.droppableId,
					};
				};

				var getLiftEffect = function ( _ref ) {
					var draggable = _ref.draggable,
						home = _ref.home,
						draggables = _ref.draggables,
						viewport = _ref.viewport;
					var displacedBy = getDisplacedBy(
						home.axis,
						draggable.displaceBy
					);
					var insideHome = getDraggablesInsideDroppable(
						home.descriptor.id,
						draggables
					);
					var rawIndex = insideHome.indexOf( draggable );
					! ( rawIndex !== -1 )
						? true
							? invariant(
									false,
									'Expected draggable to be inside home list'
							  )
							: 0
						: void 0;
					var afterDragging = insideHome.slice( rawIndex + 1 );
					var effected = afterDragging.reduce( function (
						previous,
						item
					) {
						previous[ item.descriptor.id ] = true;
						return previous;
					}, {} );
					var afterCritical = {
						inVirtualList: home.descriptor.mode === 'virtual',
						displacedBy: displacedBy,
						effected: effected,
					};
					var displaced = getDisplacementGroups( {
						afterDragging: afterDragging,
						destination: home,
						displacedBy: displacedBy,
						last: null,
						viewport: viewport.frame,
						forceShouldAnimate: false,
					} );
					var impact = {
						displaced: displaced,
						displacedBy: displacedBy,
						at: {
							type: 'REORDER',
							destination: getHomeLocation(
								draggable.descriptor
							),
						},
					};
					return {
						impact: impact,
						afterCritical: afterCritical,
					};
				};

				var patchDimensionMap = function ( dimensions, updated ) {
					return {
						draggables: dimensions.draggables,
						droppables: patchDroppableMap(
							dimensions.droppables,
							updated
						),
					};
				};

				var start = function start( key ) {
					if ( true ) {
						{
							return;
						}
					}
				};
				var finish = function finish( key ) {
					if ( true ) {
						{
							return;
						}
					}
				};

				var offsetDraggable = function ( _ref ) {
					var draggable = _ref.draggable,
						offset$1 = _ref.offset,
						initialWindowScroll = _ref.initialWindowScroll;
					var client = ( 0,
					css_box_model__WEBPACK_IMPORTED_MODULE_5__.offset )(
						draggable.client,
						offset$1
					);
					var page = ( 0,
					css_box_model__WEBPACK_IMPORTED_MODULE_5__.withScroll )(
						client,
						initialWindowScroll
					);

					var moved = ( 0,
					_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
						'default'
					] )( {}, draggable, {
						placeholder: ( 0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
							'default'
						] )( {}, draggable.placeholder, {
							client: client,
						} ),
						client: client,
						page: page,
					} );

					return moved;
				};

				var getFrame = function ( droppable ) {
					var frame = droppable.frame;
					! frame
						? true
							? invariant(
									false,
									'Expected Droppable to have a frame'
							  )
							: 0
						: void 0;
					return frame;
				};

				var adjustAdditionsForScrollChanges = function ( _ref ) {
					var additions = _ref.additions,
						updatedDroppables = _ref.updatedDroppables,
						viewport = _ref.viewport;
					var windowScrollChange = viewport.scroll.diff.value;
					return additions.map( function ( draggable ) {
						var droppableId = draggable.descriptor.droppableId;
						var modified = updatedDroppables[ droppableId ];
						var frame = getFrame( modified );
						var droppableScrollChange = frame.scroll.diff.value;
						var totalChange = add(
							windowScrollChange,
							droppableScrollChange
						);
						var moved = offsetDraggable( {
							draggable: draggable,
							offset: totalChange,
							initialWindowScroll: viewport.scroll.initial,
						} );
						return moved;
					} );
				};

				var publishWhileDraggingInVirtual = function ( _ref ) {
					var state = _ref.state,
						published = _ref.published;
					start();
					var withScrollChange = published.modified.map(
						function ( update ) {
							var existing =
								state.dimensions.droppables[
									update.droppableId
								];
							var scrolled = scrollDroppable(
								existing,
								update.scroll
							);
							return scrolled;
						}
					);

					var droppables = ( 0,
					_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
						'default'
					] )(
						{},
						state.dimensions.droppables,
						{},
						toDroppableMap( withScrollChange )
					);

					var updatedAdditions = toDraggableMap(
						adjustAdditionsForScrollChanges( {
							additions: published.additions,
							updatedDroppables: droppables,
							viewport: state.viewport,
						} )
					);

					var draggables = ( 0,
					_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
						'default'
					] )(
						{},
						state.dimensions.draggables,
						{},
						updatedAdditions
					);

					published.removals.forEach( function ( id ) {
						delete draggables[ id ];
					} );
					var dimensions = {
						droppables: droppables,
						draggables: draggables,
					};
					var wasOverId = whatIsDraggedOver( state.impact );
					var wasOver = wasOverId
						? dimensions.droppables[ wasOverId ]
						: null;
					var draggable =
						dimensions.draggables[ state.critical.draggable.id ];
					var home =
						dimensions.droppables[ state.critical.droppable.id ];

					var _getLiftEffect = getLiftEffect( {
							draggable: draggable,
							home: home,
							draggables: draggables,
							viewport: state.viewport,
						} ),
						onLiftImpact = _getLiftEffect.impact,
						afterCritical = _getLiftEffect.afterCritical;

					var previousImpact =
						wasOver && wasOver.isCombineEnabled
							? state.impact
							: onLiftImpact;
					var impact = getDragImpact( {
						pageOffset: state.current.page.offset,
						draggable:
							dimensions.draggables[
								state.critical.draggable.id
							],
						draggables: dimensions.draggables,
						droppables: dimensions.droppables,
						previousImpact: previousImpact,
						viewport: state.viewport,
						afterCritical: afterCritical,
					} );
					finish();

					var draggingState = ( 0,
					_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
						'default'
					] )(
						{
							phase: 'DRAGGING',
						},
						state,
						{
							phase: 'DRAGGING',
							impact: impact,
							onLiftImpact: onLiftImpact,
							dimensions: dimensions,
							afterCritical: afterCritical,
							forceShouldAnimate: false,
						}
					);

					if ( state.phase === 'COLLECTING' ) {
						return draggingState;
					}

					var dropPending = ( 0,
					_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
						'default'
					] )(
						{
							phase: 'DROP_PENDING',
						},
						draggingState,
						{
							phase: 'DROP_PENDING',
							reason: state.reason,
							isWaiting: false,
						}
					);

					return dropPending;
				};

				var isSnapping = function isSnapping( state ) {
					return state.movementMode === 'SNAP';
				};

				var postDroppableChange = function postDroppableChange(
					state,
					updated,
					isEnabledChanging
				) {
					var dimensions = patchDimensionMap(
						state.dimensions,
						updated
					);

					if ( ! isSnapping( state ) || isEnabledChanging ) {
						return update( {
							state: state,
							dimensions: dimensions,
						} );
					}

					return refreshSnap( {
						state: state,
						dimensions: dimensions,
					} );
				};

				function removeScrollJumpRequest( state ) {
					if ( state.isDragging && state.movementMode === 'SNAP' ) {
						return ( 0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
							'default'
						] )(
							{
								phase: 'DRAGGING',
							},
							state,
							{
								scrollJumpRequest: null,
							}
						);
					}

					return state;
				}

				var idle = {
					phase: 'IDLE',
					completed: null,
					shouldFlush: false,
				};
				var reducer = function ( state, action ) {
					if ( state === void 0 ) {
						state = idle;
					}

					if ( action.type === 'FLUSH' ) {
						return ( 0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
							'default'
						] )( {}, idle, {
							shouldFlush: true,
						} );
					}

					if ( action.type === 'INITIAL_PUBLISH' ) {
						! ( state.phase === 'IDLE' )
							? true
								? invariant(
										false,
										'INITIAL_PUBLISH must come after a IDLE phase'
								  )
								: 0
							: void 0;
						var _action$payload = action.payload,
							critical = _action$payload.critical,
							clientSelection = _action$payload.clientSelection,
							viewport = _action$payload.viewport,
							dimensions = _action$payload.dimensions,
							movementMode = _action$payload.movementMode;
						var draggable =
							dimensions.draggables[ critical.draggable.id ];
						var home =
							dimensions.droppables[ critical.droppable.id ];
						var client = {
							selection: clientSelection,
							borderBoxCenter: draggable.client.borderBox.center,
							offset: origin,
						};
						var initial = {
							client: client,
							page: {
								selection: add(
									client.selection,
									viewport.scroll.initial
								),
								borderBoxCenter: add(
									client.selection,
									viewport.scroll.initial
								),
								offset: add(
									client.selection,
									viewport.scroll.diff.value
								),
							},
						};
						var isWindowScrollAllowed = toDroppableList(
							dimensions.droppables
						).every( function ( item ) {
							return ! item.isFixedOnPage;
						} );

						var _getLiftEffect = getLiftEffect( {
								draggable: draggable,
								home: home,
								draggables: dimensions.draggables,
								viewport: viewport,
							} ),
							impact = _getLiftEffect.impact,
							afterCritical = _getLiftEffect.afterCritical;

						var result = {
							phase: 'DRAGGING',
							isDragging: true,
							critical: critical,
							movementMode: movementMode,
							dimensions: dimensions,
							initial: initial,
							current: initial,
							isWindowScrollAllowed: isWindowScrollAllowed,
							impact: impact,
							afterCritical: afterCritical,
							onLiftImpact: impact,
							viewport: viewport,
							scrollJumpRequest: null,
							forceShouldAnimate: null,
						};
						return result;
					}

					if ( action.type === 'COLLECTION_STARTING' ) {
						if (
							state.phase === 'COLLECTING' ||
							state.phase === 'DROP_PENDING'
						) {
							return state;
						}

						! ( state.phase === 'DRAGGING' )
							? true
								? invariant(
										false,
										'Collection cannot start from phase ' +
											state.phase
								  )
								: 0
							: void 0;

						var _result = ( 0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
							'default'
						] )(
							{
								phase: 'COLLECTING',
							},
							state,
							{
								phase: 'COLLECTING',
							}
						);

						return _result;
					}

					if ( action.type === 'PUBLISH_WHILE_DRAGGING' ) {
						! (
							state.phase === 'COLLECTING' ||
							state.phase === 'DROP_PENDING'
						)
							? true
								? invariant(
										false,
										'Unexpected ' +
											action.type +
											' received in phase ' +
											state.phase
								  )
								: 0
							: void 0;
						return publishWhileDraggingInVirtual( {
							state: state,
							published: action.payload,
						} );
					}

					if ( action.type === 'MOVE' ) {
						if ( state.phase === 'DROP_PENDING' ) {
							return state;
						}

						! isMovementAllowed( state )
							? true
								? invariant(
										false,
										action.type +
											' not permitted in phase ' +
											state.phase
								  )
								: 0
							: void 0;
						var _clientSelection = action.payload.client;

						if (
							isEqual(
								_clientSelection,
								state.current.client.selection
							)
						) {
							return state;
						}

						return update( {
							state: state,
							clientSelection: _clientSelection,
							impact: isSnapping( state ) ? state.impact : null,
						} );
					}

					if ( action.type === 'UPDATE_DROPPABLE_SCROLL' ) {
						if ( state.phase === 'DROP_PENDING' ) {
							return removeScrollJumpRequest( state );
						}

						if ( state.phase === 'COLLECTING' ) {
							return removeScrollJumpRequest( state );
						}

						! isMovementAllowed( state )
							? true
								? invariant(
										false,
										action.type +
											' not permitted in phase ' +
											state.phase
								  )
								: 0
							: void 0;
						var _action$payload2 = action.payload,
							id = _action$payload2.id,
							newScroll = _action$payload2.newScroll;
						var target = state.dimensions.droppables[ id ];

						if ( ! target ) {
							return state;
						}

						var scrolled = scrollDroppable( target, newScroll );
						return postDroppableChange( state, scrolled, false );
					}

					if ( action.type === 'UPDATE_DROPPABLE_IS_ENABLED' ) {
						if ( state.phase === 'DROP_PENDING' ) {
							return state;
						}

						! isMovementAllowed( state )
							? true
								? invariant(
										false,
										'Attempting to move in an unsupported phase ' +
											state.phase
								  )
								: 0
							: void 0;
						var _action$payload3 = action.payload,
							_id = _action$payload3.id,
							isEnabled = _action$payload3.isEnabled;
						var _target = state.dimensions.droppables[ _id ];
						! _target
							? true
								? invariant(
										false,
										'Cannot find Droppable[id: ' +
											_id +
											'] to toggle its enabled state'
								  )
								: 0
							: void 0;
						! ( _target.isEnabled !== isEnabled )
							? true
								? invariant(
										false,
										'Trying to set droppable isEnabled to ' +
											String( isEnabled ) +
											'\n      but it is already ' +
											String( _target.isEnabled )
								  )
								: 0
							: void 0;

						var updated = ( 0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
							'default'
						] )( {}, _target, {
							isEnabled: isEnabled,
						} );

						return postDroppableChange( state, updated, true );
					}

					if (
						action.type === 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED'
					) {
						if ( state.phase === 'DROP_PENDING' ) {
							return state;
						}

						! isMovementAllowed( state )
							? true
								? invariant(
										false,
										'Attempting to move in an unsupported phase ' +
											state.phase
								  )
								: 0
							: void 0;
						var _action$payload4 = action.payload,
							_id2 = _action$payload4.id,
							isCombineEnabled =
								_action$payload4.isCombineEnabled;
						var _target2 = state.dimensions.droppables[ _id2 ];
						! _target2
							? true
								? invariant(
										false,
										'Cannot find Droppable[id: ' +
											_id2 +
											'] to toggle its isCombineEnabled state'
								  )
								: 0
							: void 0;
						! ( _target2.isCombineEnabled !== isCombineEnabled )
							? true
								? invariant(
										false,
										'Trying to set droppable isCombineEnabled to ' +
											String( isCombineEnabled ) +
											'\n      but it is already ' +
											String( _target2.isCombineEnabled )
								  )
								: 0
							: void 0;

						var _updated = ( 0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
							'default'
						] )( {}, _target2, {
							isCombineEnabled: isCombineEnabled,
						} );

						return postDroppableChange( state, _updated, true );
					}

					if ( action.type === 'MOVE_BY_WINDOW_SCROLL' ) {
						if (
							state.phase === 'DROP_PENDING' ||
							state.phase === 'DROP_ANIMATING'
						) {
							return state;
						}

						! isMovementAllowed( state )
							? true
								? invariant(
										false,
										'Cannot move by window in phase ' +
											state.phase
								  )
								: 0
							: void 0;
						! state.isWindowScrollAllowed
							? true
								? invariant(
										false,
										'Window scrolling is currently not supported for fixed lists'
								  )
								: 0
							: void 0;
						var _newScroll = action.payload.newScroll;

						if (
							isEqual( state.viewport.scroll.current, _newScroll )
						) {
							return removeScrollJumpRequest( state );
						}

						var _viewport = scrollViewport(
							state.viewport,
							_newScroll
						);

						if ( isSnapping( state ) ) {
							return refreshSnap( {
								state: state,
								viewport: _viewport,
							} );
						}

						return update( {
							state: state,
							viewport: _viewport,
						} );
					}

					if ( action.type === 'UPDATE_VIEWPORT_MAX_SCROLL' ) {
						if ( ! isMovementAllowed( state ) ) {
							return state;
						}

						var maxScroll = action.payload.maxScroll;

						if ( isEqual( maxScroll, state.viewport.scroll.max ) ) {
							return state;
						}

						var withMaxScroll = ( 0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
							'default'
						] )( {}, state.viewport, {
							scroll: ( 0,
							_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
								'default'
							] )( {}, state.viewport.scroll, {
								max: maxScroll,
							} ),
						} );

						return ( 0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
							'default'
						] )(
							{
								phase: 'DRAGGING',
							},
							state,
							{
								viewport: withMaxScroll,
							}
						);
					}

					if (
						action.type === 'MOVE_UP' ||
						action.type === 'MOVE_DOWN' ||
						action.type === 'MOVE_LEFT' ||
						action.type === 'MOVE_RIGHT'
					) {
						if (
							state.phase === 'COLLECTING' ||
							state.phase === 'DROP_PENDING'
						) {
							return state;
						}

						! ( state.phase === 'DRAGGING' )
							? true
								? invariant(
										false,
										action.type +
											' received while not in DRAGGING phase'
								  )
								: 0
							: void 0;

						var _result2 = moveInDirection( {
							state: state,
							type: action.type,
						} );

						if ( ! _result2 ) {
							return state;
						}

						return update( {
							state: state,
							impact: _result2.impact,
							clientSelection: _result2.clientSelection,
							scrollJumpRequest: _result2.scrollJumpRequest,
						} );
					}

					if ( action.type === 'DROP_PENDING' ) {
						var reason = action.payload.reason;
						! ( state.phase === 'COLLECTING' )
							? true
								? invariant(
										false,
										'Can only move into the DROP_PENDING phase from the COLLECTING phase'
								  )
								: 0
							: void 0;

						var newState = ( 0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
							'default'
						] )(
							{
								phase: 'DROP_PENDING',
							},
							state,
							{
								phase: 'DROP_PENDING',
								isWaiting: true,
								reason: reason,
							}
						);

						return newState;
					}

					if ( action.type === 'DROP_ANIMATE' ) {
						var _action$payload5 = action.payload,
							completed = _action$payload5.completed,
							dropDuration = _action$payload5.dropDuration,
							newHomeClientOffset =
								_action$payload5.newHomeClientOffset;
						! (
							state.phase === 'DRAGGING' ||
							state.phase === 'DROP_PENDING'
						)
							? true
								? invariant(
										false,
										'Cannot animate drop from phase ' +
											state.phase
								  )
								: 0
							: void 0;
						var _result3 = {
							phase: 'DROP_ANIMATING',
							completed: completed,
							dropDuration: dropDuration,
							newHomeClientOffset: newHomeClientOffset,
							dimensions: state.dimensions,
						};
						return _result3;
					}

					if ( action.type === 'DROP_COMPLETE' ) {
						var _completed = action.payload.completed;
						return {
							phase: 'IDLE',
							completed: _completed,
							shouldFlush: false,
						};
					}

					return state;
				};

				var beforeInitialCapture = function beforeInitialCapture(
					args
				) {
					return {
						type: 'BEFORE_INITIAL_CAPTURE',
						payload: args,
					};
				};
				var lift = function lift( args ) {
					return {
						type: 'LIFT',
						payload: args,
					};
				};
				var initialPublish = function initialPublish( args ) {
					return {
						type: 'INITIAL_PUBLISH',
						payload: args,
					};
				};
				var publishWhileDragging = function publishWhileDragging(
					args
				) {
					return {
						type: 'PUBLISH_WHILE_DRAGGING',
						payload: args,
					};
				};
				var collectionStarting = function collectionStarting() {
					return {
						type: 'COLLECTION_STARTING',
						payload: null,
					};
				};
				var updateDroppableScroll = function updateDroppableScroll(
					args
				) {
					return {
						type: 'UPDATE_DROPPABLE_SCROLL',
						payload: args,
					};
				};
				var updateDroppableIsEnabled =
					function updateDroppableIsEnabled( args ) {
						return {
							type: 'UPDATE_DROPPABLE_IS_ENABLED',
							payload: args,
						};
					};
				var updateDroppableIsCombineEnabled =
					function updateDroppableIsCombineEnabled( args ) {
						return {
							type: 'UPDATE_DROPPABLE_IS_COMBINE_ENABLED',
							payload: args,
						};
					};
				var move = function move( args ) {
					return {
						type: 'MOVE',
						payload: args,
					};
				};
				var moveByWindowScroll = function moveByWindowScroll( args ) {
					return {
						type: 'MOVE_BY_WINDOW_SCROLL',
						payload: args,
					};
				};
				var updateViewportMaxScroll = function updateViewportMaxScroll(
					args
				) {
					return {
						type: 'UPDATE_VIEWPORT_MAX_SCROLL',
						payload: args,
					};
				};
				var moveUp = function moveUp() {
					return {
						type: 'MOVE_UP',
						payload: null,
					};
				};
				var moveDown = function moveDown() {
					return {
						type: 'MOVE_DOWN',
						payload: null,
					};
				};
				var moveRight = function moveRight() {
					return {
						type: 'MOVE_RIGHT',
						payload: null,
					};
				};
				var moveLeft = function moveLeft() {
					return {
						type: 'MOVE_LEFT',
						payload: null,
					};
				};
				var flush = function flush() {
					return {
						type: 'FLUSH',
						payload: null,
					};
				};
				var animateDrop = function animateDrop( args ) {
					return {
						type: 'DROP_ANIMATE',
						payload: args,
					};
				};
				var completeDrop = function completeDrop( args ) {
					return {
						type: 'DROP_COMPLETE',
						payload: args,
					};
				};
				var drop = function drop( args ) {
					return {
						type: 'DROP',
						payload: args,
					};
				};
				var dropPending = function dropPending( args ) {
					return {
						type: 'DROP_PENDING',
						payload: args,
					};
				};
				var dropAnimationFinished = function dropAnimationFinished() {
					return {
						type: 'DROP_ANIMATION_FINISHED',
						payload: null,
					};
				};

				function checkIndexes( insideDestination ) {
					if ( insideDestination.length <= 1 ) {
						return;
					}

					var indexes = insideDestination.map( function ( d ) {
						return d.descriptor.index;
					} );
					var errors = {};

					for ( var i = 1; i < indexes.length; i++ ) {
						var current = indexes[ i ];
						var previous = indexes[ i - 1 ];

						if ( current !== previous + 1 ) {
							errors[ current ] = true;
						}
					}

					if ( ! Object.keys( errors ).length ) {
						return;
					}

					var formatted = indexes
						.map( function ( index ) {
							var hasError = Boolean( errors[ index ] );
							return hasError
								? '[\uD83D\uDD25' + index + ']'
								: '' + index;
						} )
						.join( ', ' );
					true
						? warning(
								'\n    Detected non-consecutive <Draggable /> indexes.\n\n    (This can cause unexpected bugs)\n\n    ' +
									formatted +
									'\n  '
						  )
						: 0;
				}

				function validateDimensions( critical, dimensions ) {
					if ( true ) {
						var insideDestination = getDraggablesInsideDroppable(
							critical.droppable.id,
							dimensions.draggables
						);
						checkIndexes( insideDestination );
					}
				}

				var lift$1 = function ( marshal ) {
					return function ( _ref ) {
						var getState = _ref.getState,
							dispatch = _ref.dispatch;
						return function ( next ) {
							return function ( action ) {
								if ( action.type !== 'LIFT' ) {
									next( action );
									return;
								}

								var _action$payload = action.payload,
									id = _action$payload.id,
									clientSelection =
										_action$payload.clientSelection,
									movementMode = _action$payload.movementMode;
								var initial = getState();

								if ( initial.phase === 'DROP_ANIMATING' ) {
									dispatch(
										completeDrop( {
											completed: initial.completed,
										} )
									);
								}

								! ( getState().phase === 'IDLE' )
									? true
										? invariant(
												false,
												'Unexpected phase to start a drag'
										  )
										: 0
									: void 0;
								dispatch( flush() );
								dispatch(
									beforeInitialCapture( {
										draggableId: id,
										movementMode: movementMode,
									} )
								);
								var scrollOptions = {
									shouldPublishImmediately:
										movementMode === 'SNAP',
								};
								var request = {
									draggableId: id,
									scrollOptions: scrollOptions,
								};

								var _marshal$startPublish =
										marshal.startPublishing( request ),
									critical = _marshal$startPublish.critical,
									dimensions =
										_marshal$startPublish.dimensions,
									viewport = _marshal$startPublish.viewport;

								validateDimensions( critical, dimensions );
								dispatch(
									initialPublish( {
										critical: critical,
										dimensions: dimensions,
										clientSelection: clientSelection,
										movementMode: movementMode,
										viewport: viewport,
									} )
								);
							};
						};
					};
				};

				var style = function ( marshal ) {
					return function () {
						return function ( next ) {
							return function ( action ) {
								if ( action.type === 'INITIAL_PUBLISH' ) {
									marshal.dragging();
								}

								if ( action.type === 'DROP_ANIMATE' ) {
									marshal.dropping(
										action.payload.completed.result.reason
									);
								}

								if (
									action.type === 'FLUSH' ||
									action.type === 'DROP_COMPLETE'
								) {
									marshal.resting();
								}

								next( action );
							};
						};
					};
				};

				var curves = {
					outOfTheWay: 'cubic-bezier(0.2, 0, 0, 1)',
					drop: 'cubic-bezier(.2,1,.1,1)',
				};
				var combine = {
					opacity: {
						drop: 0,
						combining: 0.7,
					},
					scale: {
						drop: 0.75,
					},
				};
				var timings = {
					outOfTheWay: 0.2,
					minDropTime: 0.33,
					maxDropTime: 0.55,
				};
				var outOfTheWayTiming =
					timings.outOfTheWay + 's ' + curves.outOfTheWay;
				var transitions = {
					fluid: 'opacity ' + outOfTheWayTiming,
					snap:
						'transform ' +
						outOfTheWayTiming +
						', opacity ' +
						outOfTheWayTiming,
					drop: function drop( duration ) {
						var timing = duration + 's ' + curves.drop;
						return 'transform ' + timing + ', opacity ' + timing;
					},
					outOfTheWay: 'transform ' + outOfTheWayTiming,
					placeholder:
						'height ' +
						outOfTheWayTiming +
						', width ' +
						outOfTheWayTiming +
						', margin ' +
						outOfTheWayTiming,
				};

				var moveTo = function moveTo( offset ) {
					return isEqual( offset, origin )
						? null
						: 'translate(' + offset.x + 'px, ' + offset.y + 'px)';
				};

				var transforms = {
					moveTo: moveTo,
					drop: function drop( offset, isCombining ) {
						var translate = moveTo( offset );

						if ( ! translate ) {
							return null;
						}

						if ( ! isCombining ) {
							return translate;
						}

						return translate + ' scale(' + combine.scale.drop + ')';
					},
				};

				var minDropTime = timings.minDropTime,
					maxDropTime = timings.maxDropTime;
				var dropTimeRange = maxDropTime - minDropTime;
				var maxDropTimeAtDistance = 1500;
				var cancelDropModifier = 0.6;
				var getDropDuration = function ( _ref ) {
					var current = _ref.current,
						destination = _ref.destination,
						reason = _ref.reason;
					var distance$1 = distance( current, destination );

					if ( distance$1 <= 0 ) {
						return minDropTime;
					}

					if ( distance$1 >= maxDropTimeAtDistance ) {
						return maxDropTime;
					}

					var percentage = distance$1 / maxDropTimeAtDistance;
					var duration = minDropTime + dropTimeRange * percentage;
					var withDuration =
						reason === 'CANCEL'
							? duration * cancelDropModifier
							: duration;
					return Number( withDuration.toFixed( 2 ) );
				};

				var getNewHomeClientOffset = function ( _ref ) {
					var impact = _ref.impact,
						draggable = _ref.draggable,
						dimensions = _ref.dimensions,
						viewport = _ref.viewport,
						afterCritical = _ref.afterCritical;
					var draggables = dimensions.draggables,
						droppables = dimensions.droppables;
					var droppableId = whatIsDraggedOver( impact );
					var destination = droppableId
						? droppables[ droppableId ]
						: null;
					var home = droppables[ draggable.descriptor.droppableId ];
					var newClientCenter = getClientBorderBoxCenter( {
						impact: impact,
						draggable: draggable,
						draggables: draggables,
						afterCritical: afterCritical,
						droppable: destination || home,
						viewport: viewport,
					} );
					var offset = subtract(
						newClientCenter,
						draggable.client.borderBox.center
					);
					return offset;
				};

				var getDropImpact = function ( _ref ) {
					var draggables = _ref.draggables,
						reason = _ref.reason,
						lastImpact = _ref.lastImpact,
						home = _ref.home,
						viewport = _ref.viewport,
						onLiftImpact = _ref.onLiftImpact;

					if ( ! lastImpact.at || reason !== 'DROP' ) {
						var recomputedHomeImpact = recompute( {
							draggables: draggables,
							impact: onLiftImpact,
							destination: home,
							viewport: viewport,
							forceShouldAnimate: true,
						} );
						return {
							impact: recomputedHomeImpact,
							didDropInsideDroppable: false,
						};
					}

					if ( lastImpact.at.type === 'REORDER' ) {
						return {
							impact: lastImpact,
							didDropInsideDroppable: true,
						};
					}

					var withoutMovement = ( 0,
					_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
						'default'
					] )( {}, lastImpact, {
						displaced: emptyGroups,
					} );

					return {
						impact: withoutMovement,
						didDropInsideDroppable: true,
					};
				};

				var drop$1 = function ( _ref ) {
					var getState = _ref.getState,
						dispatch = _ref.dispatch;
					return function ( next ) {
						return function ( action ) {
							if ( action.type !== 'DROP' ) {
								next( action );
								return;
							}

							var state = getState();
							var reason = action.payload.reason;

							if ( state.phase === 'COLLECTING' ) {
								dispatch(
									dropPending( {
										reason: reason,
									} )
								);
								return;
							}

							if ( state.phase === 'IDLE' ) {
								return;
							}

							var isWaitingForDrop =
								state.phase === 'DROP_PENDING' &&
								state.isWaiting;
							!! isWaitingForDrop
								? true
									? invariant(
											false,
											'A DROP action occurred while DROP_PENDING and still waiting'
									  )
									: 0
								: void 0;
							! (
								state.phase === 'DRAGGING' ||
								state.phase === 'DROP_PENDING'
							)
								? true
									? invariant(
											false,
											'Cannot drop in phase: ' +
												state.phase
									  )
									: 0
								: void 0;
							var critical = state.critical;
							var dimensions = state.dimensions;
							var draggable =
								dimensions.draggables[
									state.critical.draggable.id
								];

							var _getDropImpact = getDropImpact( {
									reason: reason,
									lastImpact: state.impact,
									afterCritical: state.afterCritical,
									onLiftImpact: state.onLiftImpact,
									home: state.dimensions.droppables[
										state.critical.droppable.id
									],
									viewport: state.viewport,
									draggables: state.dimensions.draggables,
								} ),
								impact = _getDropImpact.impact,
								didDropInsideDroppable =
									_getDropImpact.didDropInsideDroppable;

							var destination = didDropInsideDroppable
								? tryGetDestination( impact )
								: null;
							var combine = didDropInsideDroppable
								? tryGetCombine( impact )
								: null;
							var source = {
								index: critical.draggable.index,
								droppableId: critical.droppable.id,
							};
							var result = {
								draggableId: draggable.descriptor.id,
								type: draggable.descriptor.type,
								source: source,
								reason: reason,
								mode: state.movementMode,
								destination: destination,
								combine: combine,
							};
							var newHomeClientOffset = getNewHomeClientOffset( {
								impact: impact,
								draggable: draggable,
								dimensions: dimensions,
								viewport: state.viewport,
								afterCritical: state.afterCritical,
							} );
							var completed = {
								critical: state.critical,
								afterCritical: state.afterCritical,
								result: result,
								impact: impact,
							};
							var isAnimationRequired =
								! isEqual(
									state.current.client.offset,
									newHomeClientOffset
								) || Boolean( result.combine );

							if ( ! isAnimationRequired ) {
								dispatch(
									completeDrop( {
										completed: completed,
									} )
								);
								return;
							}

							var dropDuration = getDropDuration( {
								current: state.current.client.offset,
								destination: newHomeClientOffset,
								reason: reason,
							} );
							var args = {
								newHomeClientOffset: newHomeClientOffset,
								dropDuration: dropDuration,
								completed: completed,
							};
							dispatch( animateDrop( args ) );
						};
					};
				};

				var getWindowScroll = function () {
					return {
						x: window.pageXOffset,
						y: window.pageYOffset,
					};
				};

				function getWindowScrollBinding( update ) {
					return {
						eventName: 'scroll',
						options: {
							passive: true,
							capture: false,
						},
						fn: function fn( event ) {
							if (
								event.target !== window &&
								event.target !== window.document
							) {
								return;
							}

							update();
						},
					};
				}

				function getScrollListener( _ref ) {
					var onWindowScroll = _ref.onWindowScroll;

					function updateScroll() {
						onWindowScroll( getWindowScroll() );
					}

					var scheduled = ( 0,
					raf_schd__WEBPACK_IMPORTED_MODULE_7__[ 'default' ] )(
						updateScroll
					);
					var binding = getWindowScrollBinding( scheduled );
					var unbind = noop;

					function isActive() {
						return unbind !== noop;
					}

					function start() {
						!! isActive()
							? true
								? invariant(
										false,
										'Cannot start scroll listener when already active'
								  )
								: 0
							: void 0;
						unbind = bindEvents( window, [ binding ] );
					}

					function stop() {
						! isActive()
							? true
								? invariant(
										false,
										'Cannot stop scroll listener when not active'
								  )
								: 0
							: void 0;
						scheduled.cancel();
						unbind();
						unbind = noop;
					}

					return {
						start: start,
						stop: stop,
						isActive: isActive,
					};
				}

				var shouldEnd = function shouldEnd( action ) {
					return (
						action.type === 'DROP_COMPLETE' ||
						action.type === 'DROP_ANIMATE' ||
						action.type === 'FLUSH'
					);
				};

				var scrollListener = function ( store ) {
					var listener = getScrollListener( {
						onWindowScroll: function onWindowScroll( newScroll ) {
							store.dispatch(
								moveByWindowScroll( {
									newScroll: newScroll,
								} )
							);
						},
					} );
					return function ( next ) {
						return function ( action ) {
							if (
								! listener.isActive() &&
								action.type === 'INITIAL_PUBLISH'
							) {
								listener.start();
							}

							if ( listener.isActive() && shouldEnd( action ) ) {
								listener.stop();
							}

							next( action );
						};
					};
				};

				var getExpiringAnnounce = function ( announce ) {
					var wasCalled = false;
					var isExpired = false;
					var timeoutId = setTimeout( function () {
						isExpired = true;
					} );

					var result = function result( message ) {
						if ( wasCalled ) {
							true
								? warning(
										'Announcement already made. Not making a second announcement'
								  )
								: 0;
							return;
						}

						if ( isExpired ) {
							true
								? warning(
										'\n        Announcements cannot be made asynchronously.\n        Default message has already been announced.\n      '
								  )
								: 0;
							return;
						}

						wasCalled = true;
						announce( message );
						clearTimeout( timeoutId );
					};

					result.wasCalled = function () {
						return wasCalled;
					};

					return result;
				};

				var getAsyncMarshal = function () {
					var entries = [];

					var execute = function execute( timerId ) {
						var index = findIndex( entries, function ( item ) {
							return item.timerId === timerId;
						} );
						! ( index !== -1 )
							? true
								? invariant( false, 'Could not find timer' )
								: 0
							: void 0;

						var _entries$splice = entries.splice( index, 1 ),
							entry = _entries$splice[ 0 ];

						entry.callback();
					};

					var add = function add( fn ) {
						var timerId = setTimeout( function () {
							return execute( timerId );
						} );
						var entry = {
							timerId: timerId,
							callback: fn,
						};
						entries.push( entry );
					};

					var flush = function flush() {
						if ( ! entries.length ) {
							return;
						}

						var shallow = [].concat( entries );
						entries.length = 0;
						shallow.forEach( function ( entry ) {
							clearTimeout( entry.timerId );
							entry.callback();
						} );
					};

					return {
						add: add,
						flush: flush,
					};
				};

				var areLocationsEqual = function areLocationsEqual(
					first,
					second
				) {
					if ( first == null && second == null ) {
						return true;
					}

					if ( first == null || second == null ) {
						return false;
					}

					return (
						first.droppableId === second.droppableId &&
						first.index === second.index
					);
				};
				var isCombineEqual = function isCombineEqual( first, second ) {
					if ( first == null && second == null ) {
						return true;
					}

					if ( first == null || second == null ) {
						return false;
					}

					return (
						first.draggableId === second.draggableId &&
						first.droppableId === second.droppableId
					);
				};
				var isCriticalEqual = function isCriticalEqual(
					first,
					second
				) {
					if ( first === second ) {
						return true;
					}

					var isDraggableEqual =
						first.draggable.id === second.draggable.id &&
						first.draggable.droppableId ===
							second.draggable.droppableId &&
						first.draggable.type === second.draggable.type &&
						first.draggable.index === second.draggable.index;
					var isDroppableEqual =
						first.droppable.id === second.droppable.id &&
						first.droppable.type === second.droppable.type;
					return isDraggableEqual && isDroppableEqual;
				};

				var withTimings = function withTimings( key, fn ) {
					start();
					fn();
					finish();
				};

				var getDragStart = function getDragStart( critical, mode ) {
					return {
						draggableId: critical.draggable.id,
						type: critical.droppable.type,
						source: {
							droppableId: critical.droppable.id,
							index: critical.draggable.index,
						},
						mode: mode,
					};
				};

				var execute = function execute(
					responder,
					data,
					announce,
					getDefaultMessage
				) {
					if ( ! responder ) {
						announce( getDefaultMessage( data ) );
						return;
					}

					var willExpire = getExpiringAnnounce( announce );
					var provided = {
						announce: willExpire,
					};
					responder( data, provided );

					if ( ! willExpire.wasCalled() ) {
						announce( getDefaultMessage( data ) );
					}
				};

				var getPublisher = function ( getResponders, announce ) {
					var asyncMarshal = getAsyncMarshal();
					var dragging = null;

					var beforeCapture = function beforeCapture(
						draggableId,
						mode
					) {
						!! dragging
							? true
								? invariant(
										false,
										'Cannot fire onBeforeCapture as a drag start has already been published'
								  )
								: 0
							: void 0;
						withTimings( 'onBeforeCapture', function () {
							var fn = getResponders().onBeforeCapture;

							if ( fn ) {
								var before = {
									draggableId: draggableId,
									mode: mode,
								};
								fn( before );
							}
						} );
					};

					var beforeStart = function beforeStart( critical, mode ) {
						!! dragging
							? true
								? invariant(
										false,
										'Cannot fire onBeforeDragStart as a drag start has already been published'
								  )
								: 0
							: void 0;
						withTimings( 'onBeforeDragStart', function () {
							var fn = getResponders().onBeforeDragStart;

							if ( fn ) {
								fn( getDragStart( critical, mode ) );
							}
						} );
					};

					var start = function start( critical, mode ) {
						!! dragging
							? true
								? invariant(
										false,
										'Cannot fire onBeforeDragStart as a drag start has already been published'
								  )
								: 0
							: void 0;
						var data = getDragStart( critical, mode );
						dragging = {
							mode: mode,
							lastCritical: critical,
							lastLocation: data.source,
							lastCombine: null,
						};
						asyncMarshal.add( function () {
							withTimings( 'onDragStart', function () {
								return execute(
									getResponders().onDragStart,
									data,
									announce,
									preset.onDragStart
								);
							} );
						} );
					};

					var update = function update( critical, impact ) {
						var location = tryGetDestination( impact );
						var combine = tryGetCombine( impact );
						! dragging
							? true
								? invariant(
										false,
										'Cannot fire onDragMove when onDragStart has not been called'
								  )
								: 0
							: void 0;
						var hasCriticalChanged = ! isCriticalEqual(
							critical,
							dragging.lastCritical
						);

						if ( hasCriticalChanged ) {
							dragging.lastCritical = critical;
						}

						var hasLocationChanged = ! areLocationsEqual(
							dragging.lastLocation,
							location
						);

						if ( hasLocationChanged ) {
							dragging.lastLocation = location;
						}

						var hasGroupingChanged = ! isCombineEqual(
							dragging.lastCombine,
							combine
						);

						if ( hasGroupingChanged ) {
							dragging.lastCombine = combine;
						}

						if (
							! hasCriticalChanged &&
							! hasLocationChanged &&
							! hasGroupingChanged
						) {
							return;
						}

						var data = ( 0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
							'default'
						] )( {}, getDragStart( critical, dragging.mode ), {
							combine: combine,
							destination: location,
						} );

						asyncMarshal.add( function () {
							withTimings( 'onDragUpdate', function () {
								return execute(
									getResponders().onDragUpdate,
									data,
									announce,
									preset.onDragUpdate
								);
							} );
						} );
					};

					var flush = function flush() {
						! dragging
							? true
								? invariant(
										false,
										'Can only flush responders while dragging'
								  )
								: 0
							: void 0;
						asyncMarshal.flush();
					};

					var drop = function drop( result ) {
						! dragging
							? true
								? invariant(
										false,
										'Cannot fire onDragEnd when there is no matching onDragStart'
								  )
								: 0
							: void 0;
						dragging = null;
						withTimings( 'onDragEnd', function () {
							return execute(
								getResponders().onDragEnd,
								result,
								announce,
								preset.onDragEnd
							);
						} );
					};

					var abort = function abort() {
						if ( ! dragging ) {
							return;
						}

						var result = ( 0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
							'default'
						] )(
							{},
							getDragStart(
								dragging.lastCritical,
								dragging.mode
							),
							{
								combine: null,
								destination: null,
								reason: 'CANCEL',
							}
						);

						drop( result );
					};

					return {
						beforeCapture: beforeCapture,
						beforeStart: beforeStart,
						start: start,
						update: update,
						flush: flush,
						drop: drop,
						abort: abort,
					};
				};

				var responders = function ( getResponders, announce ) {
					var publisher = getPublisher( getResponders, announce );
					return function ( store ) {
						return function ( next ) {
							return function ( action ) {
								if (
									action.type === 'BEFORE_INITIAL_CAPTURE'
								) {
									publisher.beforeCapture(
										action.payload.draggableId,
										action.payload.movementMode
									);
									return;
								}

								if ( action.type === 'INITIAL_PUBLISH' ) {
									var critical = action.payload.critical;
									publisher.beforeStart(
										critical,
										action.payload.movementMode
									);
									next( action );
									publisher.start(
										critical,
										action.payload.movementMode
									);
									return;
								}

								if ( action.type === 'DROP_COMPLETE' ) {
									var result =
										action.payload.completed.result;
									publisher.flush();
									next( action );
									publisher.drop( result );
									return;
								}

								next( action );

								if ( action.type === 'FLUSH' ) {
									publisher.abort();
									return;
								}

								var state = store.getState();

								if ( state.phase === 'DRAGGING' ) {
									publisher.update(
										state.critical,
										state.impact
									);
								}
							};
						};
					};
				};

				var dropAnimationFinish = function ( store ) {
					return function ( next ) {
						return function ( action ) {
							if ( action.type !== 'DROP_ANIMATION_FINISHED' ) {
								next( action );
								return;
							}

							var state = store.getState();
							! ( state.phase === 'DROP_ANIMATING' )
								? true
									? invariant(
											false,
											'Cannot finish a drop animating when no drop is occurring'
									  )
									: 0
								: void 0;
							store.dispatch(
								completeDrop( {
									completed: state.completed,
								} )
							);
						};
					};
				};

				var dropAnimationFlushOnScroll = function ( store ) {
					var unbind = null;
					var frameId = null;

					function clear() {
						if ( frameId ) {
							cancelAnimationFrame( frameId );
							frameId = null;
						}

						if ( unbind ) {
							unbind();
							unbind = null;
						}
					}

					return function ( next ) {
						return function ( action ) {
							if (
								action.type === 'FLUSH' ||
								action.type === 'DROP_COMPLETE' ||
								action.type === 'DROP_ANIMATION_FINISHED'
							) {
								clear();
							}

							next( action );

							if ( action.type !== 'DROP_ANIMATE' ) {
								return;
							}

							var binding = {
								eventName: 'scroll',
								options: {
									capture: true,
									passive: false,
									once: true,
								},
								fn: function flushDropAnimation() {
									var state = store.getState();

									if ( state.phase === 'DROP_ANIMATING' ) {
										store.dispatch(
											dropAnimationFinished()
										);
									}
								},
							};
							frameId = requestAnimationFrame( function () {
								frameId = null;
								unbind = bindEvents( window, [ binding ] );
							} );
						};
					};
				};

				var dimensionMarshalStopper = function ( marshal ) {
					return function () {
						return function ( next ) {
							return function ( action ) {
								if (
									action.type === 'DROP_COMPLETE' ||
									action.type === 'FLUSH' ||
									action.type === 'DROP_ANIMATE'
								) {
									marshal.stopPublishing();
								}

								next( action );
							};
						};
					};
				};

				var focus = function ( marshal ) {
					var isWatching = false;
					return function () {
						return function ( next ) {
							return function ( action ) {
								if ( action.type === 'INITIAL_PUBLISH' ) {
									isWatching = true;
									marshal.tryRecordFocus(
										action.payload.critical.draggable.id
									);
									next( action );
									marshal.tryRestoreFocusRecorded();
									return;
								}

								next( action );

								if ( ! isWatching ) {
									return;
								}

								if ( action.type === 'FLUSH' ) {
									isWatching = false;
									marshal.tryRestoreFocusRecorded();
									return;
								}

								if ( action.type === 'DROP_COMPLETE' ) {
									isWatching = false;
									var result =
										action.payload.completed.result;

									if ( result.combine ) {
										marshal.tryShiftRecord(
											result.draggableId,
											result.combine.draggableId
										);
									}

									marshal.tryRestoreFocusRecorded();
								}
							};
						};
					};
				};

				var shouldStop = function shouldStop( action ) {
					return (
						action.type === 'DROP_COMPLETE' ||
						action.type === 'DROP_ANIMATE' ||
						action.type === 'FLUSH'
					);
				};

				var autoScroll = function ( autoScroller ) {
					return function ( store ) {
						return function ( next ) {
							return function ( action ) {
								if ( shouldStop( action ) ) {
									autoScroller.stop();
									next( action );
									return;
								}

								if ( action.type === 'INITIAL_PUBLISH' ) {
									next( action );
									var state = store.getState();
									! ( state.phase === 'DRAGGING' )
										? true
											? invariant(
													false,
													'Expected phase to be DRAGGING after INITIAL_PUBLISH'
											  )
											: 0
										: void 0;
									autoScroller.start( state );
									return;
								}

								next( action );
								autoScroller.scroll( store.getState() );
							};
						};
					};
				};

				var pendingDrop = function ( store ) {
					return function ( next ) {
						return function ( action ) {
							next( action );

							if ( action.type !== 'PUBLISH_WHILE_DRAGGING' ) {
								return;
							}

							var postActionState = store.getState();

							if ( postActionState.phase !== 'DROP_PENDING' ) {
								return;
							}

							if ( postActionState.isWaiting ) {
								return;
							}

							store.dispatch(
								drop( {
									reason: postActionState.reason,
								} )
							);
						};
					};
				};

				var composeEnhancers =
					true &&
					typeof window !== 'undefined' &&
					window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
						? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__( {
								name: 'react-beautiful-dnd',
						  } )
						: redux__WEBPACK_IMPORTED_MODULE_8__.compose;
				var createStore = function ( _ref ) {
					var dimensionMarshal = _ref.dimensionMarshal,
						focusMarshal = _ref.focusMarshal,
						styleMarshal = _ref.styleMarshal,
						getResponders = _ref.getResponders,
						announce = _ref.announce,
						autoScroller = _ref.autoScroller;
					return ( 0,
					redux__WEBPACK_IMPORTED_MODULE_8__.createStore )(
						reducer,
						composeEnhancers(
							( 0,
							redux__WEBPACK_IMPORTED_MODULE_8__.applyMiddleware )(
								style( styleMarshal ),
								dimensionMarshalStopper( dimensionMarshal ),
								lift$1( dimensionMarshal ),
								drop$1,
								dropAnimationFinish,
								dropAnimationFlushOnScroll,
								pendingDrop,
								autoScroll( autoScroller ),
								scrollListener,
								focus( focusMarshal ),
								responders( getResponders, announce )
							)
						)
					);
				};

				var clean$1 = function clean() {
					return {
						additions: {},
						removals: {},
						modified: {},
					};
				};
				function createPublisher( _ref ) {
					var registry = _ref.registry,
						callbacks = _ref.callbacks;
					var staging = clean$1();
					var frameId = null;

					var collect = function collect() {
						if ( frameId ) {
							return;
						}

						callbacks.collectionStarting();
						frameId = requestAnimationFrame( function () {
							frameId = null;
							start();
							var _staging = staging,
								additions = _staging.additions,
								removals = _staging.removals,
								modified = _staging.modified;
							var added = Object.keys( additions )
								.map( function ( id ) {
									return registry.draggable
										.getById( id )
										.getDimension( origin );
								} )
								.sort( function ( a, b ) {
									return (
										a.descriptor.index - b.descriptor.index
									);
								} );
							var updated = Object.keys( modified ).map(
								function ( id ) {
									var entry =
										registry.droppable.getById( id );
									var scroll =
										entry.callbacks.getScrollWhileDragging();
									return {
										droppableId: id,
										scroll: scroll,
									};
								}
							);
							var result = {
								additions: added,
								removals: Object.keys( removals ),
								modified: updated,
							};
							staging = clean$1();
							finish();
							callbacks.publish( result );
						} );
					};

					var add = function add( entry ) {
						var id = entry.descriptor.id;
						staging.additions[ id ] = entry;
						staging.modified[ entry.descriptor.droppableId ] = true;

						if ( staging.removals[ id ] ) {
							delete staging.removals[ id ];
						}

						collect();
					};

					var remove = function remove( entry ) {
						var descriptor = entry.descriptor;
						staging.removals[ descriptor.id ] = true;
						staging.modified[ descriptor.droppableId ] = true;

						if ( staging.additions[ descriptor.id ] ) {
							delete staging.additions[ descriptor.id ];
						}

						collect();
					};

					var stop = function stop() {
						if ( ! frameId ) {
							return;
						}

						cancelAnimationFrame( frameId );
						frameId = null;
						staging = clean$1();
					};

					return {
						add: add,
						remove: remove,
						stop: stop,
					};
				}

				var getMaxScroll = function ( _ref ) {
					var scrollHeight = _ref.scrollHeight,
						scrollWidth = _ref.scrollWidth,
						height = _ref.height,
						width = _ref.width;
					var maxScroll = subtract(
						{
							x: scrollWidth,
							y: scrollHeight,
						},
						{
							x: width,
							y: height,
						}
					);
					var adjustedMaxScroll = {
						x: Math.max( 0, maxScroll.x ),
						y: Math.max( 0, maxScroll.y ),
					};
					return adjustedMaxScroll;
				};

				var getDocumentElement = function () {
					var doc = document.documentElement;
					! doc
						? true
							? invariant(
									false,
									'Cannot find document.documentElement'
							  )
							: 0
						: void 0;
					return doc;
				};

				var getMaxWindowScroll = function () {
					var doc = getDocumentElement();
					var maxScroll = getMaxScroll( {
						scrollHeight: doc.scrollHeight,
						scrollWidth: doc.scrollWidth,
						width: doc.clientWidth,
						height: doc.clientHeight,
					} );
					return maxScroll;
				};

				var getViewport = function () {
					var scroll = getWindowScroll();
					var maxScroll = getMaxWindowScroll();
					var top = scroll.y;
					var left = scroll.x;
					var doc = getDocumentElement();
					var width = doc.clientWidth;
					var height = doc.clientHeight;
					var right = left + width;
					var bottom = top + height;
					var frame = ( 0,
					css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect )( {
						top: top,
						left: left,
						right: right,
						bottom: bottom,
					} );
					var viewport = {
						frame: frame,
						scroll: {
							initial: scroll,
							current: scroll,
							max: maxScroll,
							diff: {
								value: origin,
								displacement: origin,
							},
						},
					};
					return viewport;
				};

				var getInitialPublish = function ( _ref ) {
					var critical = _ref.critical,
						scrollOptions = _ref.scrollOptions,
						registry = _ref.registry;
					start();
					var viewport = getViewport();
					var windowScroll = viewport.scroll.current;
					var home = critical.droppable;
					var droppables = registry.droppable
						.getAllByType( home.type )
						.map( function ( entry ) {
							return entry.callbacks.getDimensionAndWatchScroll(
								windowScroll,
								scrollOptions
							);
						} );
					var draggables = registry.draggable
						.getAllByType( critical.draggable.type )
						.map( function ( entry ) {
							return entry.getDimension( windowScroll );
						} );
					var dimensions = {
						draggables: toDraggableMap( draggables ),
						droppables: toDroppableMap( droppables ),
					};
					finish();
					var result = {
						dimensions: dimensions,
						critical: critical,
						viewport: viewport,
					};
					return result;
				};

				function shouldPublishUpdate( registry, dragging, entry ) {
					if ( entry.descriptor.id === dragging.id ) {
						return false;
					}

					if ( entry.descriptor.type !== dragging.type ) {
						return false;
					}

					var home = registry.droppable.getById(
						entry.descriptor.droppableId
					);

					if ( home.descriptor.mode !== 'virtual' ) {
						true
							? warning(
									'\n      You are attempting to add or remove a Draggable [id: ' +
										entry.descriptor.id +
										']\n      while a drag is occurring. This is only supported for virtual lists.\n\n      See https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/patterns/virtual-lists.md\n    '
							  )
							: 0;
						return false;
					}

					return true;
				}

				var createDimensionMarshal = function ( registry, callbacks ) {
					var collection = null;
					var publisher = createPublisher( {
						callbacks: {
							publish: callbacks.publishWhileDragging,
							collectionStarting: callbacks.collectionStarting,
						},
						registry: registry,
					} );

					var updateDroppableIsEnabled =
						function updateDroppableIsEnabled( id, isEnabled ) {
							! registry.droppable.exists( id )
								? true
									? invariant(
											false,
											'Cannot update is enabled flag of Droppable ' +
												id +
												' as it is not registered'
									  )
									: 0
								: void 0;

							if ( ! collection ) {
								return;
							}

							callbacks.updateDroppableIsEnabled( {
								id: id,
								isEnabled: isEnabled,
							} );
						};

					var updateDroppableIsCombineEnabled =
						function updateDroppableIsCombineEnabled(
							id,
							isCombineEnabled
						) {
							if ( ! collection ) {
								return;
							}

							! registry.droppable.exists( id )
								? true
									? invariant(
											false,
											'Cannot update isCombineEnabled flag of Droppable ' +
												id +
												' as it is not registered'
									  )
									: 0
								: void 0;
							callbacks.updateDroppableIsCombineEnabled( {
								id: id,
								isCombineEnabled: isCombineEnabled,
							} );
						};

					var updateDroppableScroll = function updateDroppableScroll(
						id,
						newScroll
					) {
						if ( ! collection ) {
							return;
						}

						! registry.droppable.exists( id )
							? true
								? invariant(
										false,
										'Cannot update the scroll on Droppable ' +
											id +
											' as it is not registered'
								  )
								: 0
							: void 0;
						callbacks.updateDroppableScroll( {
							id: id,
							newScroll: newScroll,
						} );
					};

					var scrollDroppable = function scrollDroppable(
						id,
						change
					) {
						if ( ! collection ) {
							return;
						}

						registry.droppable
							.getById( id )
							.callbacks.scroll( change );
					};

					var stopPublishing = function stopPublishing() {
						if ( ! collection ) {
							return;
						}

						publisher.stop();
						var home = collection.critical.droppable;
						registry.droppable
							.getAllByType( home.type )
							.forEach( function ( entry ) {
								return entry.callbacks.dragStopped();
							} );
						collection.unsubscribe();
						collection = null;
					};

					var subscriber = function subscriber( event ) {
						! collection
							? true
								? invariant(
										false,
										'Should only be subscribed when a collection is occurring'
								  )
								: 0
							: void 0;
						var dragging = collection.critical.draggable;

						if ( event.type === 'ADDITION' ) {
							if (
								shouldPublishUpdate(
									registry,
									dragging,
									event.value
								)
							) {
								publisher.add( event.value );
							}
						}

						if ( event.type === 'REMOVAL' ) {
							if (
								shouldPublishUpdate(
									registry,
									dragging,
									event.value
								)
							) {
								publisher.remove( event.value );
							}
						}
					};

					var startPublishing = function startPublishing( request ) {
						!! collection
							? true
								? invariant(
										false,
										'Cannot start capturing critical dimensions as there is already a collection'
								  )
								: 0
							: void 0;
						var entry = registry.draggable.getById(
							request.draggableId
						);
						var home = registry.droppable.getById(
							entry.descriptor.droppableId
						);
						var critical = {
							draggable: entry.descriptor,
							droppable: home.descriptor,
						};
						var unsubscribe = registry.subscribe( subscriber );
						collection = {
							critical: critical,
							unsubscribe: unsubscribe,
						};
						return getInitialPublish( {
							critical: critical,
							registry: registry,
							scrollOptions: request.scrollOptions,
						} );
					};

					var marshal = {
						updateDroppableIsEnabled: updateDroppableIsEnabled,
						updateDroppableIsCombineEnabled:
							updateDroppableIsCombineEnabled,
						scrollDroppable: scrollDroppable,
						updateDroppableScroll: updateDroppableScroll,
						startPublishing: startPublishing,
						stopPublishing: stopPublishing,
					};
					return marshal;
				};

				var canStartDrag = function ( state, id ) {
					if ( state.phase === 'IDLE' ) {
						return true;
					}

					if ( state.phase !== 'DROP_ANIMATING' ) {
						return false;
					}

					if ( state.completed.result.draggableId === id ) {
						return false;
					}

					return state.completed.result.reason === 'DROP';
				};

				var scrollWindow = function ( change ) {
					window.scrollBy( change.x, change.y );
				};

				var getScrollableDroppables = ( 0,
				memoize_one__WEBPACK_IMPORTED_MODULE_6__[ 'default' ] )(
					function ( droppables ) {
						return toDroppableList( droppables ).filter(
							function ( droppable ) {
								if ( ! droppable.isEnabled ) {
									return false;
								}

								if ( ! droppable.frame ) {
									return false;
								}

								return true;
							}
						);
					}
				);

				var getScrollableDroppableOver =
					function getScrollableDroppableOver( target, droppables ) {
						var maybe = find(
							getScrollableDroppables( droppables ),
							function ( droppable ) {
								! droppable.frame
									? true
										? invariant( false, 'Invalid result' )
										: 0
									: void 0;
								return isPositionInFrame(
									droppable.frame.pageMarginBox
								)( target );
							}
						);
						return maybe;
					};

				var getBestScrollableDroppable = function ( _ref ) {
					var center = _ref.center,
						destination = _ref.destination,
						droppables = _ref.droppables;

					if ( destination ) {
						var _dimension = droppables[ destination ];

						if ( ! _dimension.frame ) {
							return null;
						}

						return _dimension;
					}

					var dimension = getScrollableDroppableOver(
						center,
						droppables
					);
					return dimension;
				};

				var config = {
					startFromPercentage: 0.25,
					maxScrollAtPercentage: 0.05,
					maxPixelScroll: 28,
					ease: function ease( percentage ) {
						return Math.pow( percentage, 2 );
					},
					durationDampening: {
						stopDampeningAt: 1200,
						accelerateAt: 360,
					},
				};

				var getDistanceThresholds = function ( container, axis ) {
					var startScrollingFrom =
						container[ axis.size ] * config.startFromPercentage;
					var maxScrollValueAt =
						container[ axis.size ] * config.maxScrollAtPercentage;
					var thresholds = {
						startScrollingFrom: startScrollingFrom,
						maxScrollValueAt: maxScrollValueAt,
					};
					return thresholds;
				};

				var getPercentage = function ( _ref ) {
					var startOfRange = _ref.startOfRange,
						endOfRange = _ref.endOfRange,
						current = _ref.current;
					var range = endOfRange - startOfRange;

					if ( range === 0 ) {
						true
							? warning(
									'\n      Detected distance range of 0 in the fluid auto scroller\n      This is unexpected and would cause a divide by 0 issue.\n      Not allowing an auto scroll\n    '
							  )
							: 0;
						return 0;
					}

					var currentInRange = current - startOfRange;
					var percentage = currentInRange / range;
					return percentage;
				};

				var minScroll = 1;

				var getValueFromDistance = function (
					distanceToEdge,
					thresholds
				) {
					if ( distanceToEdge > thresholds.startScrollingFrom ) {
						return 0;
					}

					if ( distanceToEdge <= thresholds.maxScrollValueAt ) {
						return config.maxPixelScroll;
					}

					if ( distanceToEdge === thresholds.startScrollingFrom ) {
						return minScroll;
					}

					var percentageFromMaxScrollValueAt = getPercentage( {
						startOfRange: thresholds.maxScrollValueAt,
						endOfRange: thresholds.startScrollingFrom,
						current: distanceToEdge,
					} );
					var percentageFromStartScrollingFrom =
						1 - percentageFromMaxScrollValueAt;
					var scroll =
						config.maxPixelScroll *
						config.ease( percentageFromStartScrollingFrom );
					return Math.ceil( scroll );
				};

				var accelerateAt = config.durationDampening.accelerateAt;
				var stopAt = config.durationDampening.stopDampeningAt;
				var dampenValueByTime = function (
					proposedScroll,
					dragStartTime
				) {
					var startOfRange = dragStartTime;
					var endOfRange = stopAt;
					var now = Date.now();
					var runTime = now - startOfRange;

					if ( runTime >= stopAt ) {
						return proposedScroll;
					}

					if ( runTime < accelerateAt ) {
						return minScroll;
					}

					var betweenAccelerateAtAndStopAtPercentage = getPercentage(
						{
							startOfRange: accelerateAt,
							endOfRange: endOfRange,
							current: runTime,
						}
					);
					var scroll =
						proposedScroll *
						config.ease( betweenAccelerateAtAndStopAtPercentage );
					return Math.ceil( scroll );
				};

				var getValue = function ( _ref ) {
					var distanceToEdge = _ref.distanceToEdge,
						thresholds = _ref.thresholds,
						dragStartTime = _ref.dragStartTime,
						shouldUseTimeDampening = _ref.shouldUseTimeDampening;
					var scroll = getValueFromDistance(
						distanceToEdge,
						thresholds
					);

					if ( scroll === 0 ) {
						return 0;
					}

					if ( ! shouldUseTimeDampening ) {
						return scroll;
					}

					return Math.max(
						dampenValueByTime( scroll, dragStartTime ),
						minScroll
					);
				};

				var getScrollOnAxis = function ( _ref ) {
					var container = _ref.container,
						distanceToEdges = _ref.distanceToEdges,
						dragStartTime = _ref.dragStartTime,
						axis = _ref.axis,
						shouldUseTimeDampening = _ref.shouldUseTimeDampening;
					var thresholds = getDistanceThresholds( container, axis );
					var isCloserToEnd =
						distanceToEdges[ axis.end ] <
						distanceToEdges[ axis.start ];

					if ( isCloserToEnd ) {
						return getValue( {
							distanceToEdge: distanceToEdges[ axis.end ],
							thresholds: thresholds,
							dragStartTime: dragStartTime,
							shouldUseTimeDampening: shouldUseTimeDampening,
						} );
					}

					return (
						-1 *
						getValue( {
							distanceToEdge: distanceToEdges[ axis.start ],
							thresholds: thresholds,
							dragStartTime: dragStartTime,
							shouldUseTimeDampening: shouldUseTimeDampening,
						} )
					);
				};

				var adjustForSizeLimits = function ( _ref ) {
					var container = _ref.container,
						subject = _ref.subject,
						proposedScroll = _ref.proposedScroll;
					var isTooBigVertically = subject.height > container.height;
					var isTooBigHorizontally = subject.width > container.width;

					if ( ! isTooBigHorizontally && ! isTooBigVertically ) {
						return proposedScroll;
					}

					if ( isTooBigHorizontally && isTooBigVertically ) {
						return null;
					}

					return {
						x: isTooBigHorizontally ? 0 : proposedScroll.x,
						y: isTooBigVertically ? 0 : proposedScroll.y,
					};
				};

				var clean$2 = apply( function ( value ) {
					return value === 0 ? 0 : value;
				} );
				var getScroll = function ( _ref ) {
					var dragStartTime = _ref.dragStartTime,
						container = _ref.container,
						subject = _ref.subject,
						center = _ref.center,
						shouldUseTimeDampening = _ref.shouldUseTimeDampening;
					var distanceToEdges = {
						top: center.y - container.top,
						right: container.right - center.x,
						bottom: container.bottom - center.y,
						left: center.x - container.left,
					};
					var y = getScrollOnAxis( {
						container: container,
						distanceToEdges: distanceToEdges,
						dragStartTime: dragStartTime,
						axis: vertical,
						shouldUseTimeDampening: shouldUseTimeDampening,
					} );
					var x = getScrollOnAxis( {
						container: container,
						distanceToEdges: distanceToEdges,
						dragStartTime: dragStartTime,
						axis: horizontal,
						shouldUseTimeDampening: shouldUseTimeDampening,
					} );
					var required = clean$2( {
						x: x,
						y: y,
					} );

					if ( isEqual( required, origin ) ) {
						return null;
					}

					var limited = adjustForSizeLimits( {
						container: container,
						subject: subject,
						proposedScroll: required,
					} );

					if ( ! limited ) {
						return null;
					}

					return isEqual( limited, origin ) ? null : limited;
				};

				var smallestSigned = apply( function ( value ) {
					if ( value === 0 ) {
						return 0;
					}

					return value > 0 ? 1 : -1;
				} );
				var getOverlap = ( function () {
					var getRemainder = function getRemainder( target, max ) {
						if ( target < 0 ) {
							return target;
						}

						if ( target > max ) {
							return target - max;
						}

						return 0;
					};

					return function ( _ref ) {
						var current = _ref.current,
							max = _ref.max,
							change = _ref.change;
						var targetScroll = add( current, change );
						var overlap = {
							x: getRemainder( targetScroll.x, max.x ),
							y: getRemainder( targetScroll.y, max.y ),
						};

						if ( isEqual( overlap, origin ) ) {
							return null;
						}

						return overlap;
					};
				} )();
				var canPartiallyScroll = function canPartiallyScroll( _ref2 ) {
					var rawMax = _ref2.max,
						current = _ref2.current,
						change = _ref2.change;
					var max = {
						x: Math.max( current.x, rawMax.x ),
						y: Math.max( current.y, rawMax.y ),
					};
					var smallestChange = smallestSigned( change );
					var overlap = getOverlap( {
						max: max,
						current: current,
						change: smallestChange,
					} );

					if ( ! overlap ) {
						return true;
					}

					if ( smallestChange.x !== 0 && overlap.x === 0 ) {
						return true;
					}

					if ( smallestChange.y !== 0 && overlap.y === 0 ) {
						return true;
					}

					return false;
				};
				var canScrollWindow = function canScrollWindow(
					viewport,
					change
				) {
					return canPartiallyScroll( {
						current: viewport.scroll.current,
						max: viewport.scroll.max,
						change: change,
					} );
				};
				var getWindowOverlap = function getWindowOverlap(
					viewport,
					change
				) {
					if ( ! canScrollWindow( viewport, change ) ) {
						return null;
					}

					var max = viewport.scroll.max;
					var current = viewport.scroll.current;
					return getOverlap( {
						current: current,
						max: max,
						change: change,
					} );
				};
				var canScrollDroppable = function canScrollDroppable(
					droppable,
					change
				) {
					var frame = droppable.frame;

					if ( ! frame ) {
						return false;
					}

					return canPartiallyScroll( {
						current: frame.scroll.current,
						max: frame.scroll.max,
						change: change,
					} );
				};
				var getDroppableOverlap = function getDroppableOverlap(
					droppable,
					change
				) {
					var frame = droppable.frame;

					if ( ! frame ) {
						return null;
					}

					if ( ! canScrollDroppable( droppable, change ) ) {
						return null;
					}

					return getOverlap( {
						current: frame.scroll.current,
						max: frame.scroll.max,
						change: change,
					} );
				};

				var getWindowScrollChange = function ( _ref ) {
					var viewport = _ref.viewport,
						subject = _ref.subject,
						center = _ref.center,
						dragStartTime = _ref.dragStartTime,
						shouldUseTimeDampening = _ref.shouldUseTimeDampening;
					var scroll = getScroll( {
						dragStartTime: dragStartTime,
						container: viewport.frame,
						subject: subject,
						center: center,
						shouldUseTimeDampening: shouldUseTimeDampening,
					} );
					return scroll && canScrollWindow( viewport, scroll )
						? scroll
						: null;
				};

				var getDroppableScrollChange = function ( _ref ) {
					var droppable = _ref.droppable,
						subject = _ref.subject,
						center = _ref.center,
						dragStartTime = _ref.dragStartTime,
						shouldUseTimeDampening = _ref.shouldUseTimeDampening;
					var frame = droppable.frame;

					if ( ! frame ) {
						return null;
					}

					var scroll = getScroll( {
						dragStartTime: dragStartTime,
						container: frame.pageMarginBox,
						subject: subject,
						center: center,
						shouldUseTimeDampening: shouldUseTimeDampening,
					} );
					return scroll && canScrollDroppable( droppable, scroll )
						? scroll
						: null;
				};

				var scroll$1 = function ( _ref ) {
					var state = _ref.state,
						dragStartTime = _ref.dragStartTime,
						shouldUseTimeDampening = _ref.shouldUseTimeDampening,
						scrollWindow = _ref.scrollWindow,
						scrollDroppable = _ref.scrollDroppable;
					var center = state.current.page.borderBoxCenter;
					var draggable =
						state.dimensions.draggables[
							state.critical.draggable.id
						];
					var subject = draggable.page.marginBox;

					if ( state.isWindowScrollAllowed ) {
						var viewport = state.viewport;

						var _change = getWindowScrollChange( {
							dragStartTime: dragStartTime,
							viewport: viewport,
							subject: subject,
							center: center,
							shouldUseTimeDampening: shouldUseTimeDampening,
						} );

						if ( _change ) {
							scrollWindow( _change );
							return;
						}
					}

					var droppable = getBestScrollableDroppable( {
						center: center,
						destination: whatIsDraggedOver( state.impact ),
						droppables: state.dimensions.droppables,
					} );

					if ( ! droppable ) {
						return;
					}

					var change = getDroppableScrollChange( {
						dragStartTime: dragStartTime,
						droppable: droppable,
						subject: subject,
						center: center,
						shouldUseTimeDampening: shouldUseTimeDampening,
					} );

					if ( change ) {
						scrollDroppable( droppable.descriptor.id, change );
					}
				};

				var createFluidScroller = function ( _ref ) {
					var scrollWindow = _ref.scrollWindow,
						scrollDroppable = _ref.scrollDroppable;
					var scheduleWindowScroll = ( 0,
					raf_schd__WEBPACK_IMPORTED_MODULE_7__[ 'default' ] )(
						scrollWindow
					);
					var scheduleDroppableScroll = ( 0,
					raf_schd__WEBPACK_IMPORTED_MODULE_7__[ 'default' ] )(
						scrollDroppable
					);
					var dragging = null;

					var tryScroll = function tryScroll( state ) {
						! dragging
							? true
								? invariant(
										false,
										'Cannot fluid scroll if not dragging'
								  )
								: 0
							: void 0;
						var _dragging = dragging,
							shouldUseTimeDampening =
								_dragging.shouldUseTimeDampening,
							dragStartTime = _dragging.dragStartTime;
						scroll$1( {
							state: state,
							scrollWindow: scheduleWindowScroll,
							scrollDroppable: scheduleDroppableScroll,
							dragStartTime: dragStartTime,
							shouldUseTimeDampening: shouldUseTimeDampening,
						} );
					};

					var start$1 = function start$1( state ) {
						start();
						!! dragging
							? true
								? invariant(
										false,
										'Cannot start auto scrolling when already started'
								  )
								: 0
							: void 0;
						var dragStartTime = Date.now();
						var wasScrollNeeded = false;

						var fakeScrollCallback = function fakeScrollCallback() {
							wasScrollNeeded = true;
						};

						scroll$1( {
							state: state,
							dragStartTime: 0,
							shouldUseTimeDampening: false,
							scrollWindow: fakeScrollCallback,
							scrollDroppable: fakeScrollCallback,
						} );
						dragging = {
							dragStartTime: dragStartTime,
							shouldUseTimeDampening: wasScrollNeeded,
						};
						finish();

						if ( wasScrollNeeded ) {
							tryScroll( state );
						}
					};

					var stop = function stop() {
						if ( ! dragging ) {
							return;
						}

						scheduleWindowScroll.cancel();
						scheduleDroppableScroll.cancel();
						dragging = null;
					};

					return {
						start: start$1,
						stop: stop,
						scroll: tryScroll,
					};
				};

				var createJumpScroller = function ( _ref ) {
					var move = _ref.move,
						scrollDroppable = _ref.scrollDroppable,
						scrollWindow = _ref.scrollWindow;

					var moveByOffset = function moveByOffset( state, offset ) {
						var client = add(
							state.current.client.selection,
							offset
						);
						move( {
							client: client,
						} );
					};

					var scrollDroppableAsMuchAsItCan =
						function scrollDroppableAsMuchAsItCan(
							droppable,
							change
						) {
							if ( ! canScrollDroppable( droppable, change ) ) {
								return change;
							}

							var overlap = getDroppableOverlap(
								droppable,
								change
							);

							if ( ! overlap ) {
								scrollDroppable(
									droppable.descriptor.id,
									change
								);
								return null;
							}

							var whatTheDroppableCanScroll = subtract(
								change,
								overlap
							);
							scrollDroppable(
								droppable.descriptor.id,
								whatTheDroppableCanScroll
							);
							var remainder = subtract(
								change,
								whatTheDroppableCanScroll
							);
							return remainder;
						};

					var scrollWindowAsMuchAsItCan =
						function scrollWindowAsMuchAsItCan(
							isWindowScrollAllowed,
							viewport,
							change
						) {
							if ( ! isWindowScrollAllowed ) {
								return change;
							}

							if ( ! canScrollWindow( viewport, change ) ) {
								return change;
							}

							var overlap = getWindowOverlap( viewport, change );

							if ( ! overlap ) {
								scrollWindow( change );
								return null;
							}

							var whatTheWindowCanScroll = subtract(
								change,
								overlap
							);
							scrollWindow( whatTheWindowCanScroll );
							var remainder = subtract(
								change,
								whatTheWindowCanScroll
							);
							return remainder;
						};

					var jumpScroller = function jumpScroller( state ) {
						var request = state.scrollJumpRequest;

						if ( ! request ) {
							return;
						}

						var destination = whatIsDraggedOver( state.impact );
						! destination
							? true
								? invariant(
										false,
										'Cannot perform a jump scroll when there is no destination'
								  )
								: 0
							: void 0;
						var droppableRemainder = scrollDroppableAsMuchAsItCan(
							state.dimensions.droppables[ destination ],
							request
						);

						if ( ! droppableRemainder ) {
							return;
						}

						var viewport = state.viewport;
						var windowRemainder = scrollWindowAsMuchAsItCan(
							state.isWindowScrollAllowed,
							viewport,
							droppableRemainder
						);

						if ( ! windowRemainder ) {
							return;
						}

						moveByOffset( state, windowRemainder );
					};

					return jumpScroller;
				};

				var createAutoScroller = function ( _ref ) {
					var scrollDroppable = _ref.scrollDroppable,
						scrollWindow = _ref.scrollWindow,
						move = _ref.move;
					var fluidScroller = createFluidScroller( {
						scrollWindow: scrollWindow,
						scrollDroppable: scrollDroppable,
					} );
					var jumpScroll = createJumpScroller( {
						move: move,
						scrollWindow: scrollWindow,
						scrollDroppable: scrollDroppable,
					} );

					var scroll = function scroll( state ) {
						if ( state.phase !== 'DRAGGING' ) {
							return;
						}

						if ( state.movementMode === 'FLUID' ) {
							fluidScroller.scroll( state );
							return;
						}

						if ( ! state.scrollJumpRequest ) {
							return;
						}

						jumpScroll( state );
					};

					var scroller = {
						scroll: scroll,
						start: fluidScroller.start,
						stop: fluidScroller.stop,
					};
					return scroller;
				};

				var prefix$1 = 'data-rbd';
				var dragHandle = ( function () {
					var base = prefix$1 + '-drag-handle';
					return {
						base: base,
						draggableId: base + '-draggable-id',
						contextId: base + '-context-id',
					};
				} )();
				var draggable = ( function () {
					var base = prefix$1 + '-draggable';
					return {
						base: base,
						contextId: base + '-context-id',
						id: base + '-id',
					};
				} )();
				var droppable = ( function () {
					var base = prefix$1 + '-droppable';
					return {
						base: base,
						contextId: base + '-context-id',
						id: base + '-id',
					};
				} )();
				var scrollContainer = {
					contextId: prefix$1 + '-scroll-container-context-id',
				};

				var makeGetSelector = function makeGetSelector( context ) {
					return function ( attribute ) {
						return '[' + attribute + '="' + context + '"]';
					};
				};

				var getStyles = function getStyles( rules, property ) {
					return rules
						.map( function ( rule ) {
							var value = rule.styles[ property ];

							if ( ! value ) {
								return '';
							}

							return rule.selector + ' { ' + value + ' }';
						} )
						.join( ' ' );
				};

				var noPointerEvents = 'pointer-events: none;';
				var getStyles$1 = function ( contextId ) {
					var getSelector = makeGetSelector( contextId );

					var dragHandle$1 = ( function () {
						var grabCursor =
							'\n      cursor: -webkit-grab;\n      cursor: grab;\n    ';
						return {
							selector: getSelector( dragHandle.contextId ),
							styles: {
								always: '\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ',
								resting: grabCursor,
								dragging: noPointerEvents,
								dropAnimating: grabCursor,
							},
						};
					} )();

					var draggable$1 = ( function () {
						var transition =
							'\n      transition: ' +
							transitions.outOfTheWay +
							';\n    ';
						return {
							selector: getSelector( draggable.contextId ),
							styles: {
								dragging: transition,
								dropAnimating: transition,
								userCancel: transition,
							},
						};
					} )();

					var droppable$1 = {
						selector: getSelector( droppable.contextId ),
						styles: {
							always: 'overflow-anchor: none;',
						},
					};
					var body = {
						selector: 'body',
						styles: {
							dragging:
								'\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      ',
						},
					};
					var rules = [
						draggable$1,
						dragHandle$1,
						droppable$1,
						body,
					];
					return {
						always: getStyles( rules, 'always' ),
						resting: getStyles( rules, 'resting' ),
						dragging: getStyles( rules, 'dragging' ),
						dropAnimating: getStyles( rules, 'dropAnimating' ),
						userCancel: getStyles( rules, 'userCancel' ),
					};
				};

				var useIsomorphicLayoutEffect =
					typeof window !== 'undefined' &&
					typeof window.document !== 'undefined' &&
					typeof window.document.createElement !== 'undefined'
						? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect
						: react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

				var getHead = function getHead() {
					var head = document.querySelector( 'head' );
					! head
						? true
							? invariant(
									false,
									'Cannot find the head to append a style to'
							  )
							: 0
						: void 0;
					return head;
				};

				var createStyleEl = function createStyleEl( nonce ) {
					var el = document.createElement( 'style' );

					if ( nonce ) {
						el.setAttribute( 'nonce', nonce );
					}

					el.type = 'text/css';
					return el;
				};

				function useStyleMarshal( contextId, nonce ) {
					var styles = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return getStyles$1( contextId );
						},
						[ contextId ]
					);
					var alwaysRef = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )( null );
					var dynamicRef = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )( null );
					var setDynamicStyle = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						( 0,
						memoize_one__WEBPACK_IMPORTED_MODULE_6__[ 'default' ] )(
							function ( proposed ) {
								var el = dynamicRef.current;
								! el
									? true
										? invariant(
												false,
												'Cannot set dynamic style element if it is not set'
										  )
										: 0
									: void 0;
								el.textContent = proposed;
							}
						),
						[]
					);
					var setAlwaysStyle = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function ( proposed ) {
							var el = alwaysRef.current;
							! el
								? true
									? invariant(
											false,
											'Cannot set dynamic style element if it is not set'
									  )
									: 0
								: void 0;
							el.textContent = proposed;
						},
						[]
					);
					useIsomorphicLayoutEffect(
						function () {
							! ( ! alwaysRef.current && ! dynamicRef.current )
								? true
									? invariant(
											false,
											'style elements already mounted'
									  )
									: 0
								: void 0;
							var always = createStyleEl( nonce );
							var dynamic = createStyleEl( nonce );
							alwaysRef.current = always;
							dynamicRef.current = dynamic;
							always.setAttribute(
								prefix$1 + '-always',
								contextId
							);
							dynamic.setAttribute(
								prefix$1 + '-dynamic',
								contextId
							);
							getHead().appendChild( always );
							getHead().appendChild( dynamic );
							setAlwaysStyle( styles.always );
							setDynamicStyle( styles.resting );
							return function () {
								var remove = function remove( ref ) {
									var current = ref.current;
									! current
										? true
											? invariant(
													false,
													'Cannot unmount ref as it is not set'
											  )
											: 0
										: void 0;
									getHead().removeChild( current );
									ref.current = null;
								};

								remove( alwaysRef );
								remove( dynamicRef );
							};
						},
						[
							nonce,
							setAlwaysStyle,
							setDynamicStyle,
							styles.always,
							styles.resting,
							contextId,
						]
					);
					var dragging = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function () {
							return setDynamicStyle( styles.dragging );
						},
						[ setDynamicStyle, styles.dragging ]
					);
					var dropping = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function ( reason ) {
							if ( reason === 'DROP' ) {
								setDynamicStyle( styles.dropAnimating );
								return;
							}

							setDynamicStyle( styles.userCancel );
						},
						[
							setDynamicStyle,
							styles.dropAnimating,
							styles.userCancel,
						]
					);
					var resting = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function () {
							if ( ! dynamicRef.current ) {
								return;
							}

							setDynamicStyle( styles.resting );
						},
						[ setDynamicStyle, styles.resting ]
					);
					var marshal = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return {
								dragging: dragging,
								dropping: dropping,
								resting: resting,
							};
						},
						[ dragging, dropping, resting ]
					);
					return marshal;
				}

				var getWindowFromEl = function ( el ) {
					return el && el.ownerDocument
						? el.ownerDocument.defaultView
						: window;
				};

				function isHtmlElement( el ) {
					return el instanceof getWindowFromEl( el ).HTMLElement;
				}

				function findDragHandle( contextId, draggableId ) {
					var selector =
						'[' + dragHandle.contextId + '="' + contextId + '"]';
					var possible = toArray(
						document.querySelectorAll( selector )
					);

					if ( ! possible.length ) {
						true
							? warning(
									'Unable to find any drag handles in the context "' +
										contextId +
										'"'
							  )
							: 0;
						return null;
					}

					var handle = find( possible, function ( el ) {
						return (
							el.getAttribute( dragHandle.draggableId ) ===
							draggableId
						);
					} );

					if ( ! handle ) {
						true
							? warning(
									'Unable to find drag handle with id "' +
										draggableId +
										'" as no handle with a matching id was found'
							  )
							: 0;
						return null;
					}

					if ( ! isHtmlElement( handle ) ) {
						true
							? warning( 'drag handle needs to be a HTMLElement' )
							: 0;
						return null;
					}

					return handle;
				}

				function useFocusMarshal( contextId ) {
					var entriesRef = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )( {} );
					var recordRef = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )( null );
					var restoreFocusFrameRef = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )( null );
					var isMountedRef = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )( false );
					var register = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function register( id, focus ) {
							var entry = {
								id: id,
								focus: focus,
							};
							entriesRef.current[ id ] = entry;
							return function unregister() {
								var entries = entriesRef.current;
								var current = entries[ id ];

								if ( current !== entry ) {
									delete entries[ id ];
								}
							};
						},
						[]
					);
					var tryGiveFocus = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function tryGiveFocus( tryGiveFocusTo ) {
							var handle = findDragHandle(
								contextId,
								tryGiveFocusTo
							);

							if ( handle && handle !== document.activeElement ) {
								handle.focus();
							}
						},
						[ contextId ]
					);
					var tryShiftRecord = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function tryShiftRecord( previous, redirectTo ) {
							if ( recordRef.current === previous ) {
								recordRef.current = redirectTo;
							}
						},
						[]
					);
					var tryRestoreFocusRecorded = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function tryRestoreFocusRecorded() {
							if ( restoreFocusFrameRef.current ) {
								return;
							}

							if ( ! isMountedRef.current ) {
								return;
							}

							restoreFocusFrameRef.current =
								requestAnimationFrame( function () {
									restoreFocusFrameRef.current = null;
									var record = recordRef.current;

									if ( record ) {
										tryGiveFocus( record );
									}
								} );
						},
						[ tryGiveFocus ]
					);
					var tryRecordFocus = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function tryRecordFocus( id ) {
							recordRef.current = null;
							var focused = document.activeElement;

							if ( ! focused ) {
								return;
							}

							if (
								focused.getAttribute(
									dragHandle.draggableId
								) !== id
							) {
								return;
							}

							recordRef.current = id;
						},
						[]
					);
					useIsomorphicLayoutEffect( function () {
						isMountedRef.current = true;
						return function clearFrameOnUnmount() {
							isMountedRef.current = false;
							var frameId = restoreFocusFrameRef.current;

							if ( frameId ) {
								cancelAnimationFrame( frameId );
							}
						};
					}, [] );
					var marshal = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return {
								register: register,
								tryRecordFocus: tryRecordFocus,
								tryRestoreFocusRecorded:
									tryRestoreFocusRecorded,
								tryShiftRecord: tryShiftRecord,
							};
						},
						[
							register,
							tryRecordFocus,
							tryRestoreFocusRecorded,
							tryShiftRecord,
						]
					);
					return marshal;
				}

				function createRegistry() {
					var entries = {
						draggables: {},
						droppables: {},
					};
					var subscribers = [];

					function subscribe( cb ) {
						subscribers.push( cb );
						return function unsubscribe() {
							var index = subscribers.indexOf( cb );

							if ( index === -1 ) {
								return;
							}

							subscribers.splice( index, 1 );
						};
					}

					function notify( event ) {
						if ( subscribers.length ) {
							subscribers.forEach( function ( cb ) {
								return cb( event );
							} );
						}
					}

					function findDraggableById( id ) {
						return entries.draggables[ id ] || null;
					}

					function getDraggableById( id ) {
						var entry = findDraggableById( id );
						! entry
							? true
								? invariant(
										false,
										'Cannot find draggable entry with id [' +
											id +
											']'
								  )
								: 0
							: void 0;
						return entry;
					}

					var draggableAPI = {
						register: function register( entry ) {
							entries.draggables[ entry.descriptor.id ] = entry;
							notify( {
								type: 'ADDITION',
								value: entry,
							} );
						},
						update: function update( entry, last ) {
							var current =
								entries.draggables[ last.descriptor.id ];

							if ( ! current ) {
								return;
							}

							if ( current.uniqueId !== entry.uniqueId ) {
								return;
							}

							delete entries.draggables[ last.descriptor.id ];
							entries.draggables[ entry.descriptor.id ] = entry;
						},
						unregister: function unregister( entry ) {
							var draggableId = entry.descriptor.id;
							var current = findDraggableById( draggableId );

							if ( ! current ) {
								return;
							}

							if ( entry.uniqueId !== current.uniqueId ) {
								return;
							}

							delete entries.draggables[ draggableId ];
							notify( {
								type: 'REMOVAL',
								value: entry,
							} );
						},
						getById: getDraggableById,
						findById: findDraggableById,
						exists: function exists( id ) {
							return Boolean( findDraggableById( id ) );
						},
						getAllByType: function getAllByType( type ) {
							return values( entries.draggables ).filter(
								function ( entry ) {
									return entry.descriptor.type === type;
								}
							);
						},
					};

					function findDroppableById( id ) {
						return entries.droppables[ id ] || null;
					}

					function getDroppableById( id ) {
						var entry = findDroppableById( id );
						! entry
							? true
								? invariant(
										false,
										'Cannot find droppable entry with id [' +
											id +
											']'
								  )
								: 0
							: void 0;
						return entry;
					}

					var droppableAPI = {
						register: function register( entry ) {
							entries.droppables[ entry.descriptor.id ] = entry;
						},
						unregister: function unregister( entry ) {
							var current = findDroppableById(
								entry.descriptor.id
							);

							if ( ! current ) {
								return;
							}

							if ( entry.uniqueId !== current.uniqueId ) {
								return;
							}

							delete entries.droppables[ entry.descriptor.id ];
						},
						getById: getDroppableById,
						findById: findDroppableById,
						exists: function exists( id ) {
							return Boolean( findDroppableById( id ) );
						},
						getAllByType: function getAllByType( type ) {
							return values( entries.droppables ).filter(
								function ( entry ) {
									return entry.descriptor.type === type;
								}
							);
						},
					};

					function clean() {
						entries.draggables = {};
						entries.droppables = {};
						subscribers.length = 0;
					}

					return {
						draggable: draggableAPI,
						droppable: droppableAPI,
						subscribe: subscribe,
						clean: clean,
					};
				}

				function useRegistry() {
					var registry = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						createRegistry,
						[]
					);
					( 0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect )(
						function () {
							return function unmount() {
								requestAnimationFrame( registry.clean );
							};
						},
						[ registry ]
					);
					return registry;
				}

				var StoreContext =
					react__WEBPACK_IMPORTED_MODULE_0___default().createContext(
						null
					);

				var getBodyElement = function () {
					var body = document.body;
					! body
						? true
							? invariant( false, 'Cannot find document.body' )
							: 0
						: void 0;
					return body;
				};

				var visuallyHidden = {
					position: 'absolute',
					width: '1px',
					height: '1px',
					margin: '-1px',
					border: '0',
					padding: '0',
					overflow: 'hidden',
					clip: 'rect(0 0 0 0)',
					'clip-path': 'inset(100%)',
				};

				var getId = function getId( contextId ) {
					return 'rbd-announcement-' + contextId;
				};
				function useAnnouncer( contextId ) {
					var id = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return getId( contextId );
						},
						[ contextId ]
					);
					var ref = ( 0, react__WEBPACK_IMPORTED_MODULE_0__.useRef )(
						null
					);
					( 0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect )(
						function setup() {
							var el = document.createElement( 'div' );
							ref.current = el;
							el.id = id;
							el.setAttribute( 'aria-live', 'assertive' );
							el.setAttribute( 'aria-atomic', 'true' );

							( 0,
							_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
								'default'
							] )( el.style, visuallyHidden );

							getBodyElement().appendChild( el );
							return function cleanup() {
								setTimeout( function remove() {
									var body = getBodyElement();

									if ( body.contains( el ) ) {
										body.removeChild( el );
									}

									if ( el === ref.current ) {
										ref.current = null;
									}
								} );
							};
						},
						[ id ]
					);
					var announce = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function ( message ) {
							var el = ref.current;

							if ( el ) {
								el.textContent = message;
								return;
							}

							true
								? warning(
										'\n      A screen reader message was trying to be announced but it was unable to do so.\n      This can occur if you unmount your <DragDropContext /> in your onDragEnd.\n      Consider calling provided.announce() before the unmount so that the instruction will\n      not be lost for users relying on a screen reader.\n\n      Message not passed to screen reader:\n\n      "' +
											message +
											'"\n    '
								  )
								: 0;
						},
						[]
					);
					return announce;
				}

				var count = 0;
				var defaults = {
					separator: '::',
				};
				function reset() {
					count = 0;
				}
				function useUniqueId( prefix, options ) {
					if ( options === void 0 ) {
						options = defaults;
					}

					return ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return '' + prefix + options.separator + count++;
						},
						[ options.separator, prefix ]
					);
				}

				function getElementId( _ref ) {
					var contextId = _ref.contextId,
						uniqueId = _ref.uniqueId;
					return 'rbd-hidden-text-' + contextId + '-' + uniqueId;
				}
				function useHiddenTextElement( _ref2 ) {
					var contextId = _ref2.contextId,
						text = _ref2.text;
					var uniqueId = useUniqueId( 'hidden-text', {
						separator: '-',
					} );
					var id = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return getElementId( {
								contextId: contextId,
								uniqueId: uniqueId,
							} );
						},
						[ uniqueId, contextId ]
					);
					( 0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect )(
						function mount() {
							var el = document.createElement( 'div' );
							el.id = id;
							el.textContent = text;
							el.style.display = 'none';
							getBodyElement().appendChild( el );
							return function unmount() {
								var body = getBodyElement();

								if ( body.contains( el ) ) {
									body.removeChild( el );
								}
							};
						},
						[ id, text ]
					);
					return id;
				}

				var AppContext =
					react__WEBPACK_IMPORTED_MODULE_0___default().createContext(
						null
					);

				var peerDependencies = {
					react: '^16.8.5 || ^17.0.0 || ^18.0.0',
					'react-dom': '^16.8.5 || ^17.0.0 || ^18.0.0',
				};

				var semver = /(\d+)\.(\d+)\.(\d+)/;

				var getVersion = function getVersion( value ) {
					var result = semver.exec( value );
					! ( result != null )
						? true
							? invariant(
									false,
									'Unable to parse React version ' + value
							  )
							: 0
						: void 0;
					var major = Number( result[ 1 ] );
					var minor = Number( result[ 2 ] );
					var patch = Number( result[ 3 ] );
					return {
						major: major,
						minor: minor,
						patch: patch,
						raw: value,
					};
				};

				var isSatisfied = function isSatisfied( expected, actual ) {
					if ( actual.major > expected.major ) {
						return true;
					}

					if ( actual.major < expected.major ) {
						return false;
					}

					if ( actual.minor > expected.minor ) {
						return true;
					}

					if ( actual.minor < expected.minor ) {
						return false;
					}

					return actual.patch >= expected.patch;
				};

				var checkReactVersion = function ( peerDepValue, actualValue ) {
					var peerDep = getVersion( peerDepValue );
					var actual = getVersion( actualValue );

					if ( isSatisfied( peerDep, actual ) ) {
						return;
					}

					true
						? warning(
								'\n    React version: [' +
									actual.raw +
									']\n    does not satisfy expected peer dependency version: [' +
									peerDep.raw +
									']\n\n    This can result in run time bugs, and even fatal crashes\n  '
						  )
						: 0;
				};

				var suffix =
					'\n  We expect a html5 doctype: <!doctype html>\n  This is to ensure consistent browser layout and measurement\n\n  More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/doctype.md\n';
				var checkDoctype = function ( doc ) {
					var doctype = doc.doctype;

					if ( ! doctype ) {
						true
							? warning(
									'\n      No <!doctype html> found.\n\n      ' +
										suffix +
										'\n    '
							  )
							: 0;
						return;
					}

					if ( doctype.name.toLowerCase() !== 'html' ) {
						true
							? warning(
									'\n      Unexpected <!doctype> found: (' +
										doctype.name +
										')\n\n      ' +
										suffix +
										'\n    '
							  )
							: 0;
					}

					if ( doctype.publicId !== '' ) {
						true
							? warning(
									'\n      Unexpected <!doctype> publicId found: (' +
										doctype.publicId +
										')\n      A html5 doctype does not have a publicId\n\n      ' +
										suffix +
										'\n    '
							  )
							: 0;
					}
				};

				function useDev( useHook ) {
					if ( true ) {
						useHook();
					}
				}

				function useDevSetupWarning( fn, inputs ) {
					useDev( function () {
						( 0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect )(
							function () {
								try {
									fn();
								} catch ( e ) {
									error(
										'\n          A setup problem was encountered.\n\n          > ' +
											e.message +
											'\n        '
									);
								}
							},
							inputs
						);
					} );
				}

				function useStartupValidation() {
					useDevSetupWarning( function () {
						checkReactVersion(
							peerDependencies.react,
							react__WEBPACK_IMPORTED_MODULE_0___default().version
						);
						checkDoctype( document );
					}, [] );
				}

				function usePrevious( current ) {
					var ref = ( 0, react__WEBPACK_IMPORTED_MODULE_0__.useRef )(
						current
					);
					( 0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect )(
						function () {
							ref.current = current;
						}
					);
					return ref;
				}

				function create() {
					var lock = null;

					function isClaimed() {
						return Boolean( lock );
					}

					function isActive( value ) {
						return value === lock;
					}

					function claim( abandon ) {
						!! lock
							? true
								? invariant(
										false,
										'Cannot claim lock as it is already claimed'
								  )
								: 0
							: void 0;
						var newLock = {
							abandon: abandon,
						};
						lock = newLock;
						return newLock;
					}

					function release() {
						! lock
							? true
								? invariant(
										false,
										'Cannot release lock when there is no lock'
								  )
								: 0
							: void 0;
						lock = null;
					}

					function tryAbandon() {
						if ( lock ) {
							lock.abandon();
							release();
						}
					}

					return {
						isClaimed: isClaimed,
						isActive: isActive,
						claim: claim,
						release: release,
						tryAbandon: tryAbandon,
					};
				}

				var tab = 9;
				var enter = 13;
				var escape = 27;
				var space = 32;
				var pageUp = 33;
				var pageDown = 34;
				var end = 35;
				var home = 36;
				var arrowLeft = 37;
				var arrowUp = 38;
				var arrowRight = 39;
				var arrowDown = 40;

				var _preventedKeys;
				var preventedKeys =
					( ( _preventedKeys = {} ),
					( _preventedKeys[ enter ] = true ),
					( _preventedKeys[ tab ] = true ),
					_preventedKeys );
				var preventStandardKeyEvents = function ( event ) {
					if ( preventedKeys[ event.keyCode ] ) {
						event.preventDefault();
					}
				};

				var supportedEventName = ( function () {
					var base = 'visibilitychange';

					if ( typeof document === 'undefined' ) {
						return base;
					}

					var candidates = [
						base,
						'ms' + base,
						'webkit' + base,
						'moz' + base,
						'o' + base,
					];
					var supported = find( candidates, function ( eventName ) {
						return 'on' + eventName in document;
					} );
					return supported || base;
				} )();

				var primaryButton = 0;
				var sloppyClickThreshold = 5;

				function isSloppyClickThresholdExceeded( original, current ) {
					return (
						Math.abs( current.x - original.x ) >=
							sloppyClickThreshold ||
						Math.abs( current.y - original.y ) >=
							sloppyClickThreshold
					);
				}

				var idle$1 = {
					type: 'IDLE',
				};

				function getCaptureBindings( _ref ) {
					var cancel = _ref.cancel,
						completed = _ref.completed,
						getPhase = _ref.getPhase,
						setPhase = _ref.setPhase;
					return [
						{
							eventName: 'mousemove',
							fn: function fn( event ) {
								var button = event.button,
									clientX = event.clientX,
									clientY = event.clientY;

								if ( button !== primaryButton ) {
									return;
								}

								var point = {
									x: clientX,
									y: clientY,
								};
								var phase = getPhase();

								if ( phase.type === 'DRAGGING' ) {
									event.preventDefault();
									phase.actions.move( point );
									return;
								}

								! ( phase.type === 'PENDING' )
									? true
										? invariant( false, 'Cannot be IDLE' )
										: 0
									: void 0;
								var pending = phase.point;

								if (
									! isSloppyClickThresholdExceeded(
										pending,
										point
									)
								) {
									return;
								}

								event.preventDefault();
								var actions = phase.actions.fluidLift( point );
								setPhase( {
									type: 'DRAGGING',
									actions: actions,
								} );
							},
						},
						{
							eventName: 'mouseup',
							fn: function fn( event ) {
								var phase = getPhase();

								if ( phase.type !== 'DRAGGING' ) {
									cancel();
									return;
								}

								event.preventDefault();
								phase.actions.drop( {
									shouldBlockNextClick: true,
								} );
								completed();
							},
						},
						{
							eventName: 'mousedown',
							fn: function fn( event ) {
								if ( getPhase().type === 'DRAGGING' ) {
									event.preventDefault();
								}

								cancel();
							},
						},
						{
							eventName: 'keydown',
							fn: function fn( event ) {
								var phase = getPhase();

								if ( phase.type === 'PENDING' ) {
									cancel();
									return;
								}

								if ( event.keyCode === escape ) {
									event.preventDefault();
									cancel();
									return;
								}

								preventStandardKeyEvents( event );
							},
						},
						{
							eventName: 'resize',
							fn: cancel,
						},
						{
							eventName: 'scroll',
							options: {
								passive: true,
								capture: false,
							},
							fn: function fn() {
								if ( getPhase().type === 'PENDING' ) {
									cancel();
								}
							},
						},
						{
							eventName: 'webkitmouseforcedown',
							fn: function fn( event ) {
								var phase = getPhase();
								! ( phase.type !== 'IDLE' )
									? true
										? invariant( false, 'Unexpected phase' )
										: 0
									: void 0;

								if ( phase.actions.shouldRespectForcePress() ) {
									cancel();
									return;
								}

								event.preventDefault();
							},
						},
						{
							eventName: supportedEventName,
							fn: cancel,
						},
					];
				}

				function useMouseSensor( api ) {
					var phaseRef = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )( idle$1 );
					var unbindEventsRef = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )( noop );
					var startCaptureBinding = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return {
								eventName: 'mousedown',
								fn: function onMouseDown( event ) {
									if ( event.defaultPrevented ) {
										return;
									}

									if ( event.button !== primaryButton ) {
										return;
									}

									if (
										event.ctrlKey ||
										event.metaKey ||
										event.shiftKey ||
										event.altKey
									) {
										return;
									}

									var draggableId =
										api.findClosestDraggableId( event );

									if ( ! draggableId ) {
										return;
									}

									var actions = api.tryGetLock(
										draggableId,
										stop,
										{
											sourceEvent: event,
										}
									);

									if ( ! actions ) {
										return;
									}

									event.preventDefault();
									var point = {
										x: event.clientX,
										y: event.clientY,
									};
									unbindEventsRef.current();
									startPendingDrag( actions, point );
								},
							};
						},
						[ api ]
					);
					var preventForcePressBinding = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return {
								eventName: 'webkitmouseforcewillbegin',
								fn: function fn( event ) {
									if ( event.defaultPrevented ) {
										return;
									}

									var id =
										api.findClosestDraggableId( event );

									if ( ! id ) {
										return;
									}

									var options =
										api.findOptionsForDraggable( id );

									if ( ! options ) {
										return;
									}

									if ( options.shouldRespectForcePress ) {
										return;
									}

									if ( ! api.canGetLock( id ) ) {
										return;
									}

									event.preventDefault();
								},
							};
						},
						[ api ]
					);
					var listenForCapture = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function listenForCapture() {
							var options = {
								passive: false,
								capture: true,
							};
							unbindEventsRef.current = bindEvents(
								window,
								[
									preventForcePressBinding,
									startCaptureBinding,
								],
								options
							);
						},
						[ preventForcePressBinding, startCaptureBinding ]
					);
					var stop = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function () {
							var current = phaseRef.current;

							if ( current.type === 'IDLE' ) {
								return;
							}

							phaseRef.current = idle$1;
							unbindEventsRef.current();
							listenForCapture();
						},
						[ listenForCapture ]
					);
					var cancel = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function () {
							var phase = phaseRef.current;
							stop();

							if ( phase.type === 'DRAGGING' ) {
								phase.actions.cancel( {
									shouldBlockNextClick: true,
								} );
							}

							if ( phase.type === 'PENDING' ) {
								phase.actions.abort();
							}
						},
						[ stop ]
					);
					var bindCapturingEvents = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function bindCapturingEvents() {
							var options = {
								capture: true,
								passive: false,
							};
							var bindings = getCaptureBindings( {
								cancel: cancel,
								completed: stop,
								getPhase: function getPhase() {
									return phaseRef.current;
								},
								setPhase: function setPhase( phase ) {
									phaseRef.current = phase;
								},
							} );
							unbindEventsRef.current = bindEvents(
								window,
								bindings,
								options
							);
						},
						[ cancel, stop ]
					);
					var startPendingDrag = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function startPendingDrag( actions, point ) {
							! ( phaseRef.current.type === 'IDLE' )
								? true
									? invariant(
											false,
											'Expected to move from IDLE to PENDING drag'
									  )
									: 0
								: void 0;
							phaseRef.current = {
								type: 'PENDING',
								point: point,
								actions: actions,
							};
							bindCapturingEvents();
						},
						[ bindCapturingEvents ]
					);
					useIsomorphicLayoutEffect(
						function mount() {
							listenForCapture();
							return function unmount() {
								unbindEventsRef.current();
							};
						},
						[ listenForCapture ]
					);
				}

				var _scrollJumpKeys;

				function noop$1() {}

				var scrollJumpKeys =
					( ( _scrollJumpKeys = {} ),
					( _scrollJumpKeys[ pageDown ] = true ),
					( _scrollJumpKeys[ pageUp ] = true ),
					( _scrollJumpKeys[ home ] = true ),
					( _scrollJumpKeys[ end ] = true ),
					_scrollJumpKeys );

				function getDraggingBindings( actions, stop ) {
					function cancel() {
						stop();
						actions.cancel();
					}

					function drop() {
						stop();
						actions.drop();
					}

					return [
						{
							eventName: 'keydown',
							fn: function fn( event ) {
								if ( event.keyCode === escape ) {
									event.preventDefault();
									cancel();
									return;
								}

								if ( event.keyCode === space ) {
									event.preventDefault();
									drop();
									return;
								}

								if ( event.keyCode === arrowDown ) {
									event.preventDefault();
									actions.moveDown();
									return;
								}

								if ( event.keyCode === arrowUp ) {
									event.preventDefault();
									actions.moveUp();
									return;
								}

								if ( event.keyCode === arrowRight ) {
									event.preventDefault();
									actions.moveRight();
									return;
								}

								if ( event.keyCode === arrowLeft ) {
									event.preventDefault();
									actions.moveLeft();
									return;
								}

								if ( scrollJumpKeys[ event.keyCode ] ) {
									event.preventDefault();
									return;
								}

								preventStandardKeyEvents( event );
							},
						},
						{
							eventName: 'mousedown',
							fn: cancel,
						},
						{
							eventName: 'mouseup',
							fn: cancel,
						},
						{
							eventName: 'click',
							fn: cancel,
						},
						{
							eventName: 'touchstart',
							fn: cancel,
						},
						{
							eventName: 'resize',
							fn: cancel,
						},
						{
							eventName: 'wheel',
							fn: cancel,
							options: {
								passive: true,
							},
						},
						{
							eventName: supportedEventName,
							fn: cancel,
						},
					];
				}

				function useKeyboardSensor( api ) {
					var unbindEventsRef = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )( noop$1 );
					var startCaptureBinding = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return {
								eventName: 'keydown',
								fn: function onKeyDown( event ) {
									if ( event.defaultPrevented ) {
										return;
									}

									if ( event.keyCode !== space ) {
										return;
									}

									var draggableId =
										api.findClosestDraggableId( event );

									if ( ! draggableId ) {
										return;
									}

									var preDrag = api.tryGetLock(
										draggableId,
										stop,
										{
											sourceEvent: event,
										}
									);

									if ( ! preDrag ) {
										return;
									}

									event.preventDefault();
									var isCapturing = true;
									var actions = preDrag.snapLift();
									unbindEventsRef.current();

									function stop() {
										! isCapturing
											? true
												? invariant(
														false,
														'Cannot stop capturing a keyboard drag when not capturing'
												  )
												: 0
											: void 0;
										isCapturing = false;
										unbindEventsRef.current();
										listenForCapture();
									}

									unbindEventsRef.current = bindEvents(
										window,
										getDraggingBindings( actions, stop ),
										{
											capture: true,
											passive: false,
										}
									);
								},
							};
						},
						[ api ]
					);
					var listenForCapture = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function tryStartCapture() {
							var options = {
								passive: false,
								capture: true,
							};
							unbindEventsRef.current = bindEvents(
								window,
								[ startCaptureBinding ],
								options
							);
						},
						[ startCaptureBinding ]
					);
					useIsomorphicLayoutEffect(
						function mount() {
							listenForCapture();
							return function unmount() {
								unbindEventsRef.current();
							};
						},
						[ listenForCapture ]
					);
				}

				var idle$2 = {
					type: 'IDLE',
				};
				var timeForLongPress = 120;
				var forcePressThreshold = 0.15;

				function getWindowBindings( _ref ) {
					var cancel = _ref.cancel,
						getPhase = _ref.getPhase;
					return [
						{
							eventName: 'orientationchange',
							fn: cancel,
						},
						{
							eventName: 'resize',
							fn: cancel,
						},
						{
							eventName: 'contextmenu',
							fn: function fn( event ) {
								event.preventDefault();
							},
						},
						{
							eventName: 'keydown',
							fn: function fn( event ) {
								if ( getPhase().type !== 'DRAGGING' ) {
									cancel();
									return;
								}

								if ( event.keyCode === escape ) {
									event.preventDefault();
								}

								cancel();
							},
						},
						{
							eventName: supportedEventName,
							fn: cancel,
						},
					];
				}

				function getHandleBindings( _ref2 ) {
					var cancel = _ref2.cancel,
						completed = _ref2.completed,
						getPhase = _ref2.getPhase;
					return [
						{
							eventName: 'touchmove',
							options: {
								capture: false,
							},
							fn: function fn( event ) {
								var phase = getPhase();

								if ( phase.type !== 'DRAGGING' ) {
									cancel();
									return;
								}

								phase.hasMoved = true;
								var _event$touches$ = event.touches[ 0 ],
									clientX = _event$touches$.clientX,
									clientY = _event$touches$.clientY;
								var point = {
									x: clientX,
									y: clientY,
								};
								event.preventDefault();
								phase.actions.move( point );
							},
						},
						{
							eventName: 'touchend',
							fn: function fn( event ) {
								var phase = getPhase();

								if ( phase.type !== 'DRAGGING' ) {
									cancel();
									return;
								}

								event.preventDefault();
								phase.actions.drop( {
									shouldBlockNextClick: true,
								} );
								completed();
							},
						},
						{
							eventName: 'touchcancel',
							fn: function fn( event ) {
								if ( getPhase().type !== 'DRAGGING' ) {
									cancel();
									return;
								}

								event.preventDefault();
								cancel();
							},
						},
						{
							eventName: 'touchforcechange',
							fn: function fn( event ) {
								var phase = getPhase();
								! ( phase.type !== 'IDLE' )
									? true
										? invariant( false )
										: 0
									: void 0;
								var touch = event.touches[ 0 ];

								if ( ! touch ) {
									return;
								}

								var isForcePress =
									touch.force >= forcePressThreshold;

								if ( ! isForcePress ) {
									return;
								}

								var shouldRespect =
									phase.actions.shouldRespectForcePress();

								if ( phase.type === 'PENDING' ) {
									if ( shouldRespect ) {
										cancel();
									}

									return;
								}

								if ( shouldRespect ) {
									if ( phase.hasMoved ) {
										event.preventDefault();
										return;
									}

									cancel();
									return;
								}

								event.preventDefault();
							},
						},
						{
							eventName: supportedEventName,
							fn: cancel,
						},
					];
				}

				function useTouchSensor( api ) {
					var phaseRef = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )( idle$2 );
					var unbindEventsRef = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )( noop );
					var getPhase = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function getPhase() {
							return phaseRef.current;
						},
						[]
					);
					var setPhase = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function setPhase( phase ) {
							phaseRef.current = phase;
						},
						[]
					);
					var startCaptureBinding = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return {
								eventName: 'touchstart',
								fn: function onTouchStart( event ) {
									if ( event.defaultPrevented ) {
										return;
									}

									var draggableId =
										api.findClosestDraggableId( event );

									if ( ! draggableId ) {
										return;
									}

									var actions = api.tryGetLock(
										draggableId,
										stop,
										{
											sourceEvent: event,
										}
									);

									if ( ! actions ) {
										return;
									}

									var touch = event.touches[ 0 ];
									var clientX = touch.clientX,
										clientY = touch.clientY;
									var point = {
										x: clientX,
										y: clientY,
									};
									unbindEventsRef.current();
									startPendingDrag( actions, point );
								},
							};
						},
						[ api ]
					);
					var listenForCapture = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function listenForCapture() {
							var options = {
								capture: true,
								passive: false,
							};
							unbindEventsRef.current = bindEvents(
								window,
								[ startCaptureBinding ],
								options
							);
						},
						[ startCaptureBinding ]
					);
					var stop = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function () {
							var current = phaseRef.current;

							if ( current.type === 'IDLE' ) {
								return;
							}

							if ( current.type === 'PENDING' ) {
								clearTimeout( current.longPressTimerId );
							}

							setPhase( idle$2 );
							unbindEventsRef.current();
							listenForCapture();
						},
						[ listenForCapture, setPhase ]
					);
					var cancel = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function () {
							var phase = phaseRef.current;
							stop();

							if ( phase.type === 'DRAGGING' ) {
								phase.actions.cancel( {
									shouldBlockNextClick: true,
								} );
							}

							if ( phase.type === 'PENDING' ) {
								phase.actions.abort();
							}
						},
						[ stop ]
					);
					var bindCapturingEvents = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function bindCapturingEvents() {
							var options = {
								capture: true,
								passive: false,
							};
							var args = {
								cancel: cancel,
								completed: stop,
								getPhase: getPhase,
							};
							var unbindTarget = bindEvents(
								window,
								getHandleBindings( args ),
								options
							);
							var unbindWindow = bindEvents(
								window,
								getWindowBindings( args ),
								options
							);

							unbindEventsRef.current = function unbindAll() {
								unbindTarget();
								unbindWindow();
							};
						},
						[ cancel, getPhase, stop ]
					);
					var startDragging = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function startDragging() {
							var phase = getPhase();
							! ( phase.type === 'PENDING' )
								? true
									? invariant(
											false,
											'Cannot start dragging from phase ' +
												phase.type
									  )
									: 0
								: void 0;
							var actions = phase.actions.fluidLift(
								phase.point
							);
							setPhase( {
								type: 'DRAGGING',
								actions: actions,
								hasMoved: false,
							} );
						},
						[ getPhase, setPhase ]
					);
					var startPendingDrag = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function startPendingDrag( actions, point ) {
							! ( getPhase().type === 'IDLE' )
								? true
									? invariant(
											false,
											'Expected to move from IDLE to PENDING drag'
									  )
									: 0
								: void 0;
							var longPressTimerId = setTimeout(
								startDragging,
								timeForLongPress
							);
							setPhase( {
								type: 'PENDING',
								point: point,
								actions: actions,
								longPressTimerId: longPressTimerId,
							} );
							bindCapturingEvents();
						},
						[
							bindCapturingEvents,
							getPhase,
							setPhase,
							startDragging,
						]
					);
					useIsomorphicLayoutEffect(
						function mount() {
							listenForCapture();
							return function unmount() {
								unbindEventsRef.current();
								var phase = getPhase();

								if ( phase.type === 'PENDING' ) {
									clearTimeout( phase.longPressTimerId );
									setPhase( idle$2 );
								}
							};
						},
						[ getPhase, listenForCapture, setPhase ]
					);
					useIsomorphicLayoutEffect( function webkitHack() {
						var unbind = bindEvents( window, [
							{
								eventName: 'touchmove',
								fn: function fn() {},
								options: {
									capture: false,
									passive: false,
								},
							},
						] );
						return unbind;
					}, [] );
				}

				function useValidateSensorHooks( sensorHooks ) {
					useDev( function () {
						var previousRef = usePrevious( sensorHooks );
						useDevSetupWarning( function () {
							! (
								previousRef.current.length ===
								sensorHooks.length
							)
								? true
									? invariant(
											false,
											'Cannot change the amount of sensor hooks after mounting'
									  )
									: 0
								: void 0;
						} );
					} );
				}

				var interactiveTagNames = {
					input: true,
					button: true,
					textarea: true,
					select: true,
					option: true,
					optgroup: true,
					video: true,
					audio: true,
				};

				function isAnInteractiveElement( parent, current ) {
					if ( current == null ) {
						return false;
					}

					var hasAnInteractiveTag = Boolean(
						interactiveTagNames[ current.tagName.toLowerCase() ]
					);

					if ( hasAnInteractiveTag ) {
						return true;
					}

					var attribute = current.getAttribute( 'contenteditable' );

					if ( attribute === 'true' || attribute === '' ) {
						return true;
					}

					if ( current === parent ) {
						return false;
					}

					return isAnInteractiveElement(
						parent,
						current.parentElement
					);
				}

				function isEventInInteractiveElement( draggable, event ) {
					var target = event.target;

					if ( ! isHtmlElement( target ) ) {
						return false;
					}

					return isAnInteractiveElement( draggable, target );
				}

				var getBorderBoxCenterPosition = function ( el ) {
					return ( 0,
					css_box_model__WEBPACK_IMPORTED_MODULE_5__.getRect )(
						el.getBoundingClientRect()
					).center;
				};

				function isElement( el ) {
					return el instanceof getWindowFromEl( el ).Element;
				}

				var supportedMatchesName = ( function () {
					var base = 'matches';

					if ( typeof document === 'undefined' ) {
						return base;
					}

					var candidates = [
						base,
						'msMatchesSelector',
						'webkitMatchesSelector',
					];
					var value = find( candidates, function ( name ) {
						return name in Element.prototype;
					} );
					return value || base;
				} )();

				function closestPonyfill( el, selector ) {
					if ( el == null ) {
						return null;
					}

					if ( el[ supportedMatchesName ]( selector ) ) {
						return el;
					}

					return closestPonyfill( el.parentElement, selector );
				}

				function closest$1( el, selector ) {
					if ( el.closest ) {
						return el.closest( selector );
					}

					return closestPonyfill( el, selector );
				}

				function getSelector( contextId ) {
					return '[' + dragHandle.contextId + '="' + contextId + '"]';
				}

				function findClosestDragHandleFromEvent( contextId, event ) {
					var target = event.target;

					if ( ! isElement( target ) ) {
						true ? warning( 'event.target must be a Element' ) : 0;
						return null;
					}

					var selector = getSelector( contextId );
					var handle = closest$1( target, selector );

					if ( ! handle ) {
						return null;
					}

					if ( ! isHtmlElement( handle ) ) {
						true
							? warning( 'drag handle must be a HTMLElement' )
							: 0;
						return null;
					}

					return handle;
				}

				function tryGetClosestDraggableIdFromEvent( contextId, event ) {
					var handle = findClosestDragHandleFromEvent(
						contextId,
						event
					);

					if ( ! handle ) {
						return null;
					}

					return handle.getAttribute( dragHandle.draggableId );
				}

				function findDraggable( contextId, draggableId ) {
					var selector =
						'[' + draggable.contextId + '="' + contextId + '"]';
					var possible = toArray(
						document.querySelectorAll( selector )
					);
					var draggable$1 = find( possible, function ( el ) {
						return el.getAttribute( draggable.id ) === draggableId;
					} );

					if ( ! draggable$1 ) {
						return null;
					}

					if ( ! isHtmlElement( draggable$1 ) ) {
						true
							? warning(
									'Draggable element is not a HTMLElement'
							  )
							: 0;
						return null;
					}

					return draggable$1;
				}

				function preventDefault( event ) {
					event.preventDefault();
				}

				function _isActive( _ref ) {
					var expected = _ref.expected,
						phase = _ref.phase,
						isLockActive = _ref.isLockActive,
						shouldWarn = _ref.shouldWarn;

					if ( ! isLockActive() ) {
						if ( shouldWarn ) {
							true
								? warning(
										'\n        Cannot perform action.\n        The sensor no longer has an action lock.\n\n        Tips:\n\n        - Throw away your action handlers when forceStop() is called\n        - Check actions.isActive() if you really need to\n      '
								  )
								: 0;
						}

						return false;
					}

					if ( expected !== phase ) {
						if ( shouldWarn ) {
							true
								? warning(
										'\n        Cannot perform action.\n        The actions you used belong to an outdated phase\n\n        Current phase: ' +
											expected +
											'\n        You called an action from outdated phase: ' +
											phase +
											'\n\n        Tips:\n\n        - Do not use preDragActions actions after calling preDragActions.lift()\n      '
								  )
								: 0;
						}

						return false;
					}

					return true;
				}

				function canStart( _ref2 ) {
					var lockAPI = _ref2.lockAPI,
						store = _ref2.store,
						registry = _ref2.registry,
						draggableId = _ref2.draggableId;

					if ( lockAPI.isClaimed() ) {
						return false;
					}

					var entry = registry.draggable.findById( draggableId );

					if ( ! entry ) {
						true
							? warning(
									'Unable to find draggable with id: ' +
										draggableId
							  )
							: 0;
						return false;
					}

					if ( ! entry.options.isEnabled ) {
						return false;
					}

					if ( ! canStartDrag( store.getState(), draggableId ) ) {
						return false;
					}

					return true;
				}

				function tryStart( _ref3 ) {
					var lockAPI = _ref3.lockAPI,
						contextId = _ref3.contextId,
						store = _ref3.store,
						registry = _ref3.registry,
						draggableId = _ref3.draggableId,
						forceSensorStop = _ref3.forceSensorStop,
						sourceEvent = _ref3.sourceEvent;
					var shouldStart = canStart( {
						lockAPI: lockAPI,
						store: store,
						registry: registry,
						draggableId: draggableId,
					} );

					if ( ! shouldStart ) {
						return null;
					}

					var entry = registry.draggable.getById( draggableId );
					var el = findDraggable( contextId, entry.descriptor.id );

					if ( ! el ) {
						true
							? warning(
									'Unable to find draggable element with id: ' +
										draggableId
							  )
							: 0;
						return null;
					}

					if (
						sourceEvent &&
						! entry.options.canDragInteractiveElements &&
						isEventInInteractiveElement( el, sourceEvent )
					) {
						return null;
					}

					var lock = lockAPI.claim( forceSensorStop || noop );
					var phase = 'PRE_DRAG';

					function getShouldRespectForcePress() {
						return entry.options.shouldRespectForcePress;
					}

					function isLockActive() {
						return lockAPI.isActive( lock );
					}

					function tryDispatch( expected, getAction ) {
						if (
							_isActive( {
								expected: expected,
								phase: phase,
								isLockActive: isLockActive,
								shouldWarn: true,
							} )
						) {
							store.dispatch( getAction() );
						}
					}

					var tryDispatchWhenDragging = tryDispatch.bind(
						null,
						'DRAGGING'
					);

					function lift$1( args ) {
						function completed() {
							lockAPI.release();
							phase = 'COMPLETED';
						}

						if ( phase !== 'PRE_DRAG' ) {
							completed();
							! ( phase === 'PRE_DRAG' )
								? true
									? invariant(
											false,
											'Cannot lift in phase ' + phase
									  )
									: 0
								: void 0;
						}

						store.dispatch( lift( args.liftActionArgs ) );
						phase = 'DRAGGING';

						function finish( reason, options ) {
							if ( options === void 0 ) {
								options = {
									shouldBlockNextClick: false,
								};
							}

							args.cleanup();

							if ( options.shouldBlockNextClick ) {
								var unbind = bindEvents( window, [
									{
										eventName: 'click',
										fn: preventDefault,
										options: {
											once: true,
											passive: false,
											capture: true,
										},
									},
								] );
								setTimeout( unbind );
							}

							completed();
							store.dispatch(
								drop( {
									reason: reason,
								} )
							);
						}

						return ( 0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
							'default'
						] )(
							{
								isActive: function isActive() {
									return _isActive( {
										expected: 'DRAGGING',
										phase: phase,
										isLockActive: isLockActive,
										shouldWarn: false,
									} );
								},
								shouldRespectForcePress:
									getShouldRespectForcePress,
								drop: function drop( options ) {
									return finish( 'DROP', options );
								},
								cancel: function cancel( options ) {
									return finish( 'CANCEL', options );
								},
							},
							args.actions
						);
					}

					function fluidLift( clientSelection ) {
						var move$1 = ( 0,
						raf_schd__WEBPACK_IMPORTED_MODULE_7__[ 'default' ] )(
							function ( client ) {
								tryDispatchWhenDragging( function () {
									return move( {
										client: client,
									} );
								} );
							}
						);
						var api = lift$1( {
							liftActionArgs: {
								id: draggableId,
								clientSelection: clientSelection,
								movementMode: 'FLUID',
							},
							cleanup: function cleanup() {
								return move$1.cancel();
							},
							actions: {
								move: move$1,
							},
						} );
						return ( 0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
							'default'
						] )( {}, api, {
							move: move$1,
						} );
					}

					function snapLift() {
						var actions = {
							moveUp: function moveUp$1() {
								return tryDispatchWhenDragging( moveUp );
							},
							moveRight: function moveRight$1() {
								return tryDispatchWhenDragging( moveRight );
							},
							moveDown: function moveDown$1() {
								return tryDispatchWhenDragging( moveDown );
							},
							moveLeft: function moveLeft$1() {
								return tryDispatchWhenDragging( moveLeft );
							},
						};
						return lift$1( {
							liftActionArgs: {
								id: draggableId,
								clientSelection:
									getBorderBoxCenterPosition( el ),
								movementMode: 'SNAP',
							},
							cleanup: noop,
							actions: actions,
						} );
					}

					function abortPreDrag() {
						var shouldRelease = _isActive( {
							expected: 'PRE_DRAG',
							phase: phase,
							isLockActive: isLockActive,
							shouldWarn: true,
						} );

						if ( shouldRelease ) {
							lockAPI.release();
						}
					}

					var preDrag = {
						isActive: function isActive() {
							return _isActive( {
								expected: 'PRE_DRAG',
								phase: phase,
								isLockActive: isLockActive,
								shouldWarn: false,
							} );
						},
						shouldRespectForcePress: getShouldRespectForcePress,
						fluidLift: fluidLift,
						snapLift: snapLift,
						abort: abortPreDrag,
					};
					return preDrag;
				}

				var defaultSensors = [
					useMouseSensor,
					useKeyboardSensor,
					useTouchSensor,
				];
				function useSensorMarshal( _ref4 ) {
					var contextId = _ref4.contextId,
						store = _ref4.store,
						registry = _ref4.registry,
						customSensors = _ref4.customSensors,
						enableDefaultSensors = _ref4.enableDefaultSensors;
					var useSensors = [].concat(
						enableDefaultSensors ? defaultSensors : [],
						customSensors || []
					);
					var lockAPI = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useState )( function () {
						return create();
					} )[ 0 ];
					var tryAbandonLock = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function tryAbandonLock( previous, current ) {
							if ( previous.isDragging && ! current.isDragging ) {
								lockAPI.tryAbandon();
							}
						},
						[ lockAPI ]
					);
					useIsomorphicLayoutEffect(
						function listenToStore() {
							var previous = store.getState();
							var unsubscribe = store.subscribe( function () {
								var current = store.getState();
								tryAbandonLock( previous, current );
								previous = current;
							} );
							return unsubscribe;
						},
						[ lockAPI, store, tryAbandonLock ]
					);
					useIsomorphicLayoutEffect(
						function () {
							return lockAPI.tryAbandon;
						},
						[ lockAPI.tryAbandon ]
					);
					var canGetLock = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function ( draggableId ) {
							return canStart( {
								lockAPI: lockAPI,
								registry: registry,
								store: store,
								draggableId: draggableId,
							} );
						},
						[ lockAPI, registry, store ]
					);
					var tryGetLock = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function ( draggableId, forceStop, options ) {
							return tryStart( {
								lockAPI: lockAPI,
								registry: registry,
								contextId: contextId,
								store: store,
								draggableId: draggableId,
								forceSensorStop: forceStop,
								sourceEvent:
									options && options.sourceEvent
										? options.sourceEvent
										: null,
							} );
						},
						[ contextId, lockAPI, registry, store ]
					);
					var findClosestDraggableId = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function ( event ) {
							return tryGetClosestDraggableIdFromEvent(
								contextId,
								event
							);
						},
						[ contextId ]
					);
					var findOptionsForDraggable = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function ( id ) {
							var entry = registry.draggable.findById( id );
							return entry ? entry.options : null;
						},
						[ registry.draggable ]
					);
					var tryReleaseLock = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function tryReleaseLock() {
							if ( ! lockAPI.isClaimed() ) {
								return;
							}

							lockAPI.tryAbandon();

							if ( store.getState().phase !== 'IDLE' ) {
								store.dispatch( flush() );
							}
						},
						[ lockAPI, store ]
					);
					var isLockClaimed = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						lockAPI.isClaimed,
						[ lockAPI ]
					);
					var api = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return {
								canGetLock: canGetLock,
								tryGetLock: tryGetLock,
								findClosestDraggableId: findClosestDraggableId,
								findOptionsForDraggable:
									findOptionsForDraggable,
								tryReleaseLock: tryReleaseLock,
								isLockClaimed: isLockClaimed,
							};
						},
						[
							canGetLock,
							tryGetLock,
							findClosestDraggableId,
							findOptionsForDraggable,
							tryReleaseLock,
							isLockClaimed,
						]
					);
					useValidateSensorHooks( useSensors );

					for ( var i = 0; i < useSensors.length; i++ ) {
						useSensors[ i ]( api );
					}
				}

				var createResponders = function createResponders( props ) {
					return {
						onBeforeCapture: props.onBeforeCapture,
						onBeforeDragStart: props.onBeforeDragStart,
						onDragStart: props.onDragStart,
						onDragEnd: props.onDragEnd,
						onDragUpdate: props.onDragUpdate,
					};
				};

				function getStore( lazyRef ) {
					! lazyRef.current
						? true
							? invariant(
									false,
									'Could not find store from lazy ref'
							  )
							: 0
						: void 0;
					return lazyRef.current;
				}

				function App( props ) {
					var contextId = props.contextId,
						setCallbacks = props.setCallbacks,
						sensors = props.sensors,
						nonce = props.nonce,
						dragHandleUsageInstructions =
							props.dragHandleUsageInstructions;
					var lazyStoreRef = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )( null );
					useStartupValidation();
					var lastPropsRef = usePrevious( props );
					var getResponders = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function () {
							return createResponders( lastPropsRef.current );
						},
						[ lastPropsRef ]
					);
					var announce = useAnnouncer( contextId );
					var dragHandleUsageInstructionsId = useHiddenTextElement( {
						contextId: contextId,
						text: dragHandleUsageInstructions,
					} );
					var styleMarshal = useStyleMarshal( contextId, nonce );
					var lazyDispatch = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function ( action ) {
							getStore( lazyStoreRef ).dispatch( action );
						},
						[]
					);
					var marshalCallbacks = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return ( 0,
							redux__WEBPACK_IMPORTED_MODULE_8__.bindActionCreators )(
								{
									publishWhileDragging: publishWhileDragging,
									updateDroppableScroll:
										updateDroppableScroll,
									updateDroppableIsEnabled:
										updateDroppableIsEnabled,
									updateDroppableIsCombineEnabled:
										updateDroppableIsCombineEnabled,
									collectionStarting: collectionStarting,
								},
								lazyDispatch
							);
						},
						[ lazyDispatch ]
					);
					var registry = useRegistry();
					var dimensionMarshal = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return createDimensionMarshal(
								registry,
								marshalCallbacks
							);
						},
						[ registry, marshalCallbacks ]
					);
					var autoScroller = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return createAutoScroller(
								( 0,
								_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
									'default'
								] )(
									{
										scrollWindow: scrollWindow,
										scrollDroppable:
											dimensionMarshal.scrollDroppable,
									},
									( 0,
									redux__WEBPACK_IMPORTED_MODULE_8__.bindActionCreators )(
										{
											move: move,
										},
										lazyDispatch
									)
								)
							);
						},
						[ dimensionMarshal.scrollDroppable, lazyDispatch ]
					);
					var focusMarshal = useFocusMarshal( contextId );
					var store = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return createStore( {
								announce: announce,
								autoScroller: autoScroller,
								dimensionMarshal: dimensionMarshal,
								focusMarshal: focusMarshal,
								getResponders: getResponders,
								styleMarshal: styleMarshal,
							} );
						},
						[
							announce,
							autoScroller,
							dimensionMarshal,
							focusMarshal,
							getResponders,
							styleMarshal,
						]
					);

					if ( true ) {
						if (
							lazyStoreRef.current &&
							lazyStoreRef.current !== store
						) {
							true ? warning( 'unexpected store change' ) : 0;
						}
					}

					lazyStoreRef.current = store;
					var tryResetStore = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function () {
							var current = getStore( lazyStoreRef );
							var state = current.getState();

							if ( state.phase !== 'IDLE' ) {
								current.dispatch( flush() );
							}
						},
						[]
					);
					var isDragging = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function () {
							var state = getStore( lazyStoreRef ).getState();
							return (
								state.isDragging ||
								state.phase === 'DROP_ANIMATING'
							);
						},
						[]
					);
					var appCallbacks = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return {
								isDragging: isDragging,
								tryAbort: tryResetStore,
							};
						},
						[ isDragging, tryResetStore ]
					);
					setCallbacks( appCallbacks );
					var getCanLift = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function ( id ) {
							return canStartDrag(
								getStore( lazyStoreRef ).getState(),
								id
							);
						},
						[]
					);
					var getIsMovementAllowed = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function () {
							return isMovementAllowed(
								getStore( lazyStoreRef ).getState()
							);
						},
						[]
					);
					var appContext = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return {
								marshal: dimensionMarshal,
								focus: focusMarshal,
								contextId: contextId,
								canLift: getCanLift,
								isMovementAllowed: getIsMovementAllowed,
								dragHandleUsageInstructionsId:
									dragHandleUsageInstructionsId,
								registry: registry,
							};
						},
						[
							contextId,
							dimensionMarshal,
							dragHandleUsageInstructionsId,
							focusMarshal,
							getCanLift,
							getIsMovementAllowed,
							registry,
						]
					);
					useSensorMarshal( {
						contextId: contextId,
						store: store,
						registry: registry,
						customSensors: sensors,
						enableDefaultSensors:
							props.enableDefaultSensors !== false,
					} );
					( 0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect )(
						function () {
							return tryResetStore;
						},
						[ tryResetStore ]
					);
					return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
						AppContext.Provider,
						{
							value: appContext,
						},
						react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
							react_redux__WEBPACK_IMPORTED_MODULE_3__.Provider,
							{
								context: StoreContext,
								store: store,
							},
							props.children
						)
					);
				}

				var count$1 = 0;
				function reset$1() {
					count$1 = 0;
				}
				function useInstanceCount() {
					return ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return '' + count$1++;
						},
						[]
					);
				}

				function resetServerContext() {
					reset$1();
					reset();
				}
				function DragDropContext( props ) {
					var contextId = useInstanceCount();
					var dragHandleUsageInstructions =
						props.dragHandleUsageInstructions ||
						preset.dragHandleUsageInstructions;
					return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
						ErrorBoundary,
						null,
						function ( setCallbacks ) {
							return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
								App,
								{
									nonce: props.nonce,
									contextId: contextId,
									setCallbacks: setCallbacks,
									dragHandleUsageInstructions:
										dragHandleUsageInstructions,
									enableDefaultSensors:
										props.enableDefaultSensors,
									sensors: props.sensors,
									onBeforeCapture: props.onBeforeCapture,
									onBeforeDragStart: props.onBeforeDragStart,
									onDragStart: props.onDragStart,
									onDragUpdate: props.onDragUpdate,
									onDragEnd: props.onDragEnd,
								},
								props.children
							);
						}
					);
				}

				var isEqual$1 = function isEqual( base ) {
					return function ( value ) {
						return base === value;
					};
				};

				var isScroll = isEqual$1( 'scroll' );
				var isAuto = isEqual$1( 'auto' );
				var isVisible$1 = isEqual$1( 'visible' );

				var isEither = function isEither( overflow, fn ) {
					return fn( overflow.overflowX ) || fn( overflow.overflowY );
				};

				var isBoth = function isBoth( overflow, fn ) {
					return fn( overflow.overflowX ) && fn( overflow.overflowY );
				};

				var isElementScrollable = function isElementScrollable( el ) {
					var style = window.getComputedStyle( el );
					var overflow = {
						overflowX: style.overflowX,
						overflowY: style.overflowY,
					};
					return (
						isEither( overflow, isScroll ) ||
						isEither( overflow, isAuto )
					);
				};

				var isBodyScrollable = function isBodyScrollable() {
					if ( false ) {
					}

					var body = getBodyElement();
					var html = document.documentElement;
					! html ? ( true ? invariant( false ) : 0 ) : void 0;

					if ( ! isElementScrollable( body ) ) {
						return false;
					}

					var htmlStyle = window.getComputedStyle( html );
					var htmlOverflow = {
						overflowX: htmlStyle.overflowX,
						overflowY: htmlStyle.overflowY,
					};

					if ( isBoth( htmlOverflow, isVisible$1 ) ) {
						return false;
					}

					true
						? warning(
								'\n    We have detected that your <body> element might be a scroll container.\n    We have found no reliable way of detecting whether the <body> element is a scroll container.\n    Under most circumstances a <body> scroll bar will be on the <html> element (document.documentElement)\n\n    Because we cannot determine if the <body> is a scroll container, and generally it is not one,\n    we will be treating the <body> as *not* a scroll container\n\n    More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/how-we-detect-scroll-containers.md\n  '
						  )
						: 0;
					return false;
				};

				var getClosestScrollable = function getClosestScrollable( el ) {
					if ( el == null ) {
						return null;
					}

					if ( el === document.body ) {
						return isBodyScrollable() ? el : null;
					}

					if ( el === document.documentElement ) {
						return null;
					}

					if ( ! isElementScrollable( el ) ) {
						return getClosestScrollable( el.parentElement );
					}

					return el;
				};

				var checkForNestedScrollContainers = function ( scrollable ) {
					if ( ! scrollable ) {
						return;
					}

					var anotherScrollParent = getClosestScrollable(
						scrollable.parentElement
					);

					if ( ! anotherScrollParent ) {
						return;
					}

					true
						? warning(
								'\n    Droppable: unsupported nested scroll container detected.\n    A Droppable can only have one scroll parent (which can be itself)\n    Nested scroll containers are currently not supported.\n\n    We hope to support nested scroll containers soon: https://github.com/atlassian/react-beautiful-dnd/issues/131\n  '
						  )
						: 0;
				};

				var getScroll$1 = function ( el ) {
					return {
						x: el.scrollLeft,
						y: el.scrollTop,
					};
				};

				var getIsFixed = function getIsFixed( el ) {
					if ( ! el ) {
						return false;
					}

					var style = window.getComputedStyle( el );

					if ( style.position === 'fixed' ) {
						return true;
					}

					return getIsFixed( el.parentElement );
				};

				var getEnv = function ( start ) {
					var closestScrollable = getClosestScrollable( start );
					var isFixedOnPage = getIsFixed( start );
					return {
						closestScrollable: closestScrollable,
						isFixedOnPage: isFixedOnPage,
					};
				};

				var getDroppableDimension = function ( _ref ) {
					var descriptor = _ref.descriptor,
						isEnabled = _ref.isEnabled,
						isCombineEnabled = _ref.isCombineEnabled,
						isFixedOnPage = _ref.isFixedOnPage,
						direction = _ref.direction,
						client = _ref.client,
						page = _ref.page,
						closest = _ref.closest;

					var frame = ( function () {
						if ( ! closest ) {
							return null;
						}

						var scrollSize = closest.scrollSize,
							frameClient = closest.client;
						var maxScroll = getMaxScroll( {
							scrollHeight: scrollSize.scrollHeight,
							scrollWidth: scrollSize.scrollWidth,
							height: frameClient.paddingBox.height,
							width: frameClient.paddingBox.width,
						} );
						return {
							pageMarginBox: closest.page.marginBox,
							frameClient: frameClient,
							scrollSize: scrollSize,
							shouldClipSubject: closest.shouldClipSubject,
							scroll: {
								initial: closest.scroll,
								current: closest.scroll,
								max: maxScroll,
								diff: {
									value: origin,
									displacement: origin,
								},
							},
						};
					} )();

					var axis = direction === 'vertical' ? vertical : horizontal;
					var subject = getSubject( {
						page: page,
						withPlaceholder: null,
						axis: axis,
						frame: frame,
					} );
					var dimension = {
						descriptor: descriptor,
						isCombineEnabled: isCombineEnabled,
						isFixedOnPage: isFixedOnPage,
						axis: axis,
						isEnabled: isEnabled,
						client: client,
						page: page,
						frame: frame,
						subject: subject,
					};
					return dimension;
				};

				var getClient = function getClient(
					targetRef,
					closestScrollable
				) {
					var base = ( 0,
					css_box_model__WEBPACK_IMPORTED_MODULE_5__.getBox )(
						targetRef
					);

					if ( ! closestScrollable ) {
						return base;
					}

					if ( targetRef !== closestScrollable ) {
						return base;
					}

					var top = base.paddingBox.top - closestScrollable.scrollTop;
					var left =
						base.paddingBox.left - closestScrollable.scrollLeft;
					var bottom = top + closestScrollable.scrollHeight;
					var right = left + closestScrollable.scrollWidth;
					var paddingBox = {
						top: top,
						right: right,
						bottom: bottom,
						left: left,
					};
					var borderBox = ( 0,
					css_box_model__WEBPACK_IMPORTED_MODULE_5__.expand )(
						paddingBox,
						base.border
					);
					var client = ( 0,
					css_box_model__WEBPACK_IMPORTED_MODULE_5__.createBox )( {
						borderBox: borderBox,
						margin: base.margin,
						border: base.border,
						padding: base.padding,
					} );
					return client;
				};

				var getDimension = function ( _ref ) {
					var ref = _ref.ref,
						descriptor = _ref.descriptor,
						env = _ref.env,
						windowScroll = _ref.windowScroll,
						direction = _ref.direction,
						isDropDisabled = _ref.isDropDisabled,
						isCombineEnabled = _ref.isCombineEnabled,
						shouldClipSubject = _ref.shouldClipSubject;
					var closestScrollable = env.closestScrollable;
					var client = getClient( ref, closestScrollable );
					var page = ( 0,
					css_box_model__WEBPACK_IMPORTED_MODULE_5__.withScroll )(
						client,
						windowScroll
					);

					var closest = ( function () {
						if ( ! closestScrollable ) {
							return null;
						}

						var frameClient = ( 0,
						css_box_model__WEBPACK_IMPORTED_MODULE_5__.getBox )(
							closestScrollable
						);
						var scrollSize = {
							scrollHeight: closestScrollable.scrollHeight,
							scrollWidth: closestScrollable.scrollWidth,
						};
						return {
							client: frameClient,
							page: ( 0,
							css_box_model__WEBPACK_IMPORTED_MODULE_5__.withScroll )(
								frameClient,
								windowScroll
							),
							scroll: getScroll$1( closestScrollable ),
							scrollSize: scrollSize,
							shouldClipSubject: shouldClipSubject,
						};
					} )();

					var dimension = getDroppableDimension( {
						descriptor: descriptor,
						isEnabled: ! isDropDisabled,
						isCombineEnabled: isCombineEnabled,
						isFixedOnPage: env.isFixedOnPage,
						direction: direction,
						client: client,
						page: page,
						closest: closest,
					} );
					return dimension;
				};

				var immediate = {
					passive: false,
				};
				var delayed = {
					passive: true,
				};
				var getListenerOptions = function ( options ) {
					return options.shouldPublishImmediately
						? immediate
						: delayed;
				};

				function useRequiredContext( Context ) {
					var result = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useContext )( Context );
					! result
						? true
							? invariant(
									false,
									'Could not find required context'
							  )
							: 0
						: void 0;
					return result;
				}

				var getClosestScrollableFromDrag =
					function getClosestScrollableFromDrag( dragging ) {
						return (
							( dragging && dragging.env.closestScrollable ) ||
							null
						);
					};

				function useDroppablePublisher( args ) {
					var whileDraggingRef = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )( null );
					var appContext = useRequiredContext( AppContext );
					var uniqueId = useUniqueId( 'droppable' );
					var registry = appContext.registry,
						marshal = appContext.marshal;
					var previousRef = usePrevious( args );
					var descriptor = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return {
								id: args.droppableId,
								type: args.type,
								mode: args.mode,
							};
						},
						[ args.droppableId, args.mode, args.type ]
					);
					var publishedDescriptorRef = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )( descriptor );
					var memoizedUpdateScroll = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return ( 0,
							memoize_one__WEBPACK_IMPORTED_MODULE_6__[
								'default'
							] )( function ( x, y ) {
								! whileDraggingRef.current
									? true
										? invariant(
												false,
												'Can only update scroll when dragging'
										  )
										: 0
									: void 0;
								var scroll = {
									x: x,
									y: y,
								};
								marshal.updateDroppableScroll(
									descriptor.id,
									scroll
								);
							} );
						},
						[ descriptor.id, marshal ]
					);
					var getClosestScroll = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function () {
							var dragging = whileDraggingRef.current;

							if (
								! dragging ||
								! dragging.env.closestScrollable
							) {
								return origin;
							}

							return getScroll$1(
								dragging.env.closestScrollable
							);
						},
						[]
					);
					var updateScroll = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function () {
							var scroll = getClosestScroll();
							memoizedUpdateScroll( scroll.x, scroll.y );
						},
						[ getClosestScroll, memoizedUpdateScroll ]
					);
					var scheduleScrollUpdate = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return ( 0,
							raf_schd__WEBPACK_IMPORTED_MODULE_7__[
								'default'
							] )( updateScroll );
						},
						[ updateScroll ]
					);
					var onClosestScroll = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function () {
							var dragging = whileDraggingRef.current;
							var closest =
								getClosestScrollableFromDrag( dragging );
							! ( dragging && closest )
								? true
									? invariant(
											false,
											'Could not find scroll options while scrolling'
									  )
									: 0
								: void 0;
							var options = dragging.scrollOptions;

							if ( options.shouldPublishImmediately ) {
								updateScroll();
								return;
							}

							scheduleScrollUpdate();
						},
						[ scheduleScrollUpdate, updateScroll ]
					);
					var getDimensionAndWatchScroll = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function ( windowScroll, options ) {
							!! whileDraggingRef.current
								? true
									? invariant(
											false,
											'Cannot collect a droppable while a drag is occurring'
									  )
									: 0
								: void 0;
							var previous = previousRef.current;
							var ref = previous.getDroppableRef();
							! ref
								? true
									? invariant(
											false,
											'Cannot collect without a droppable ref'
									  )
									: 0
								: void 0;
							var env = getEnv( ref );
							var dragging = {
								ref: ref,
								descriptor: descriptor,
								env: env,
								scrollOptions: options,
							};
							whileDraggingRef.current = dragging;
							var dimension = getDimension( {
								ref: ref,
								descriptor: descriptor,
								env: env,
								windowScroll: windowScroll,
								direction: previous.direction,
								isDropDisabled: previous.isDropDisabled,
								isCombineEnabled: previous.isCombineEnabled,
								shouldClipSubject:
									! previous.ignoreContainerClipping,
							} );
							var scrollable = env.closestScrollable;

							if ( scrollable ) {
								scrollable.setAttribute(
									scrollContainer.contextId,
									appContext.contextId
								);
								scrollable.addEventListener(
									'scroll',
									onClosestScroll,
									getListenerOptions( dragging.scrollOptions )
								);

								if ( true ) {
									checkForNestedScrollContainers(
										scrollable
									);
								}
							}

							return dimension;
						},
						[
							appContext.contextId,
							descriptor,
							onClosestScroll,
							previousRef,
						]
					);
					var getScrollWhileDragging = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function () {
							var dragging = whileDraggingRef.current;
							var closest =
								getClosestScrollableFromDrag( dragging );
							! ( dragging && closest )
								? true
									? invariant(
											false,
											'Can only recollect Droppable client for Droppables that have a scroll container'
									  )
									: 0
								: void 0;
							return getScroll$1( closest );
						},
						[]
					);
					var dragStopped = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function () {
							var dragging = whileDraggingRef.current;
							! dragging
								? true
									? invariant(
											false,
											'Cannot stop drag when no active drag'
									  )
									: 0
								: void 0;
							var closest =
								getClosestScrollableFromDrag( dragging );
							whileDraggingRef.current = null;

							if ( ! closest ) {
								return;
							}

							scheduleScrollUpdate.cancel();
							closest.removeAttribute(
								scrollContainer.contextId
							);
							closest.removeEventListener(
								'scroll',
								onClosestScroll,
								getListenerOptions( dragging.scrollOptions )
							);
						},
						[ onClosestScroll, scheduleScrollUpdate ]
					);
					var scroll = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function ( change ) {
							var dragging = whileDraggingRef.current;
							! dragging
								? true
									? invariant(
											false,
											'Cannot scroll when there is no drag'
									  )
									: 0
								: void 0;
							var closest =
								getClosestScrollableFromDrag( dragging );
							! closest
								? true
									? invariant(
											false,
											'Cannot scroll a droppable with no closest scrollable'
									  )
									: 0
								: void 0;
							closest.scrollTop += change.y;
							closest.scrollLeft += change.x;
						},
						[]
					);
					var callbacks = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return {
								getDimensionAndWatchScroll:
									getDimensionAndWatchScroll,
								getScrollWhileDragging: getScrollWhileDragging,
								dragStopped: dragStopped,
								scroll: scroll,
							};
						},
						[
							dragStopped,
							getDimensionAndWatchScroll,
							getScrollWhileDragging,
							scroll,
						]
					);
					var entry = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return {
								uniqueId: uniqueId,
								descriptor: descriptor,
								callbacks: callbacks,
							};
						},
						[ callbacks, descriptor, uniqueId ]
					);
					useIsomorphicLayoutEffect(
						function () {
							publishedDescriptorRef.current = entry.descriptor;
							registry.droppable.register( entry );
							return function () {
								if ( whileDraggingRef.current ) {
									true
										? warning(
												'Unsupported: changing the droppableId or type of a Droppable during a drag'
										  )
										: 0;
									dragStopped();
								}

								registry.droppable.unregister( entry );
							};
						},
						[
							callbacks,
							descriptor,
							dragStopped,
							entry,
							marshal,
							registry.droppable,
						]
					);
					useIsomorphicLayoutEffect(
						function () {
							if ( ! whileDraggingRef.current ) {
								return;
							}

							marshal.updateDroppableIsEnabled(
								publishedDescriptorRef.current.id,
								! args.isDropDisabled
							);
						},
						[ args.isDropDisabled, marshal ]
					);
					useIsomorphicLayoutEffect(
						function () {
							if ( ! whileDraggingRef.current ) {
								return;
							}

							marshal.updateDroppableIsCombineEnabled(
								publishedDescriptorRef.current.id,
								args.isCombineEnabled
							);
						},
						[ args.isCombineEnabled, marshal ]
					);
				}

				function noop$2() {}

				var empty = {
					width: 0,
					height: 0,
					margin: noSpacing,
				};

				var getSize = function getSize( _ref ) {
					var isAnimatingOpenOnMount = _ref.isAnimatingOpenOnMount,
						placeholder = _ref.placeholder,
						animate = _ref.animate;

					if ( isAnimatingOpenOnMount ) {
						return empty;
					}

					if ( animate === 'close' ) {
						return empty;
					}

					return {
						height: placeholder.client.borderBox.height,
						width: placeholder.client.borderBox.width,
						margin: placeholder.client.margin,
					};
				};

				var getStyle = function getStyle( _ref2 ) {
					var isAnimatingOpenOnMount = _ref2.isAnimatingOpenOnMount,
						placeholder = _ref2.placeholder,
						animate = _ref2.animate;
					var size = getSize( {
						isAnimatingOpenOnMount: isAnimatingOpenOnMount,
						placeholder: placeholder,
						animate: animate,
					} );
					return {
						display: placeholder.display,
						boxSizing: 'border-box',
						width: size.width,
						height: size.height,
						marginTop: size.margin.top,
						marginRight: size.margin.right,
						marginBottom: size.margin.bottom,
						marginLeft: size.margin.left,
						flexShrink: '0',
						flexGrow: '0',
						pointerEvents: 'none',
						transition:
							animate !== 'none' ? transitions.placeholder : null,
					};
				};

				function Placeholder( props ) {
					var animateOpenTimerRef = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )( null );
					var tryClearAnimateOpenTimer = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function () {
							if ( ! animateOpenTimerRef.current ) {
								return;
							}

							clearTimeout( animateOpenTimerRef.current );
							animateOpenTimerRef.current = null;
						},
						[]
					);
					var animate = props.animate,
						onTransitionEnd = props.onTransitionEnd,
						onClose = props.onClose,
						contextId = props.contextId;

					var _useState = ( 0,
						react__WEBPACK_IMPORTED_MODULE_0__.useState )(
							props.animate === 'open'
						),
						isAnimatingOpenOnMount = _useState[ 0 ],
						setIsAnimatingOpenOnMount = _useState[ 1 ];

					( 0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect )(
						function () {
							if ( ! isAnimatingOpenOnMount ) {
								return noop$2;
							}

							if ( animate !== 'open' ) {
								tryClearAnimateOpenTimer();
								setIsAnimatingOpenOnMount( false );
								return noop$2;
							}

							if ( animateOpenTimerRef.current ) {
								return noop$2;
							}

							animateOpenTimerRef.current = setTimeout(
								function () {
									animateOpenTimerRef.current = null;
									setIsAnimatingOpenOnMount( false );
								}
							);
							return tryClearAnimateOpenTimer;
						},
						[
							animate,
							isAnimatingOpenOnMount,
							tryClearAnimateOpenTimer,
						]
					);
					var onSizeChangeEnd = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function ( event ) {
							if ( event.propertyName !== 'height' ) {
								return;
							}

							onTransitionEnd();

							if ( animate === 'close' ) {
								onClose();
							}
						},
						[ animate, onClose, onTransitionEnd ]
					);
					var style = getStyle( {
						isAnimatingOpenOnMount: isAnimatingOpenOnMount,
						animate: props.animate,
						placeholder: props.placeholder,
					} );
					return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
						props.placeholder.tagName,
						{
							style: style,
							'data-rbd-placeholder-context-id': contextId,
							onTransitionEnd: onSizeChangeEnd,
							ref: props.innerRef,
						}
					);
				}

				var Placeholder$1 =
					react__WEBPACK_IMPORTED_MODULE_0___default().memo(
						Placeholder
					);

				var DroppableContext =
					react__WEBPACK_IMPORTED_MODULE_0___default().createContext(
						null
					);

				function checkIsValidInnerRef( el ) {
					! ( el && isHtmlElement( el ) )
						? true
							? invariant(
									false,
									'\n    provided.innerRef has not been provided with a HTMLElement.\n\n    You can find a guide on using the innerRef callback functions at:\n    https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md\n  '
							  )
							: 0
						: void 0;
				}

				function isBoolean( value ) {
					return typeof value === 'boolean';
				}

				function runChecks( args, checks ) {
					checks.forEach( function ( check ) {
						return check( args );
					} );
				}

				var shared = [
					function required( _ref ) {
						var props = _ref.props;
						! props.droppableId
							? true
								? invariant(
										false,
										'A Droppable requires a droppableId prop'
								  )
								: 0
							: void 0;
						! ( typeof props.droppableId === 'string' )
							? true
								? invariant(
										false,
										'A Droppable requires a [string] droppableId. Provided: [' +
											typeof props.droppableId +
											']'
								  )
								: 0
							: void 0;
					},
					function _boolean( _ref2 ) {
						var props = _ref2.props;
						! isBoolean( props.isDropDisabled )
							? true
								? invariant(
										false,
										'isDropDisabled must be a boolean'
								  )
								: 0
							: void 0;
						! isBoolean( props.isCombineEnabled )
							? true
								? invariant(
										false,
										'isCombineEnabled must be a boolean'
								  )
								: 0
							: void 0;
						! isBoolean( props.ignoreContainerClipping )
							? true
								? invariant(
										false,
										'ignoreContainerClipping must be a boolean'
								  )
								: 0
							: void 0;
					},
					function ref( _ref3 ) {
						var getDroppableRef = _ref3.getDroppableRef;
						checkIsValidInnerRef( getDroppableRef() );
					},
				];
				var standard = [
					function placeholder( _ref4 ) {
						var props = _ref4.props,
							getPlaceholderRef = _ref4.getPlaceholderRef;

						if ( ! props.placeholder ) {
							return;
						}

						var ref = getPlaceholderRef();

						if ( ref ) {
							return;
						}

						true
							? warning(
									'\n      Droppable setup issue [droppableId: "' +
										props.droppableId +
										'"]:\n      DroppableProvided > placeholder could not be found.\n\n      Please be sure to add the {provided.placeholder} React Node as a child of your Droppable.\n      More information: https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/droppable.md\n    '
							  )
							: 0;
					},
				];
				var virtual = [
					function hasClone( _ref5 ) {
						var props = _ref5.props;
						! props.renderClone
							? true
								? invariant(
										false,
										'Must provide a clone render function (renderClone) for virtual lists'
								  )
								: 0
							: void 0;
					},
					function hasNoPlaceholder( _ref6 ) {
						var getPlaceholderRef = _ref6.getPlaceholderRef;
						!! getPlaceholderRef()
							? true
								? invariant(
										false,
										'Expected virtual list to not have a placeholder'
								  )
								: 0
							: void 0;
					},
				];
				function useValidation( args ) {
					useDevSetupWarning( function () {
						runChecks( args, shared );

						if ( args.props.mode === 'standard' ) {
							runChecks( args, standard );
						}

						if ( args.props.mode === 'virtual' ) {
							runChecks( args, virtual );
						}
					} );
				}

				var AnimateInOut = ( function ( _React$PureComponent ) {
					( 0,
					_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__[
						'default'
					] )( AnimateInOut, _React$PureComponent );

					function AnimateInOut() {
						var _this;

						for (
							var _len = arguments.length,
								args = new Array( _len ),
								_key = 0;
							_key < _len;
							_key++
						) {
							args[ _key ] = arguments[ _key ];
						}

						_this =
							_React$PureComponent.call.apply(
								_React$PureComponent,
								[ this ].concat( args )
							) || this;
						_this.state = {
							isVisible: Boolean( _this.props.on ),
							data: _this.props.on,
							animate:
								_this.props.shouldAnimate && _this.props.on
									? 'open'
									: 'none',
						};

						_this.onClose = function () {
							if ( _this.state.animate !== 'close' ) {
								return;
							}

							_this.setState( {
								isVisible: false,
							} );
						};

						return _this;
					}

					AnimateInOut.getDerivedStateFromProps =
						function getDerivedStateFromProps( props, state ) {
							if ( ! props.shouldAnimate ) {
								return {
									isVisible: Boolean( props.on ),
									data: props.on,
									animate: 'none',
								};
							}

							if ( props.on ) {
								return {
									isVisible: true,
									data: props.on,
									animate: 'open',
								};
							}

							if ( state.isVisible ) {
								return {
									isVisible: true,
									data: state.data,
									animate: 'close',
								};
							}

							return {
								isVisible: false,
								animate: 'close',
								data: null,
							};
						};

					var _proto = AnimateInOut.prototype;

					_proto.render = function render() {
						if ( ! this.state.isVisible ) {
							return null;
						}

						var provided = {
							onClose: this.onClose,
							data: this.state.data,
							animate: this.state.animate,
						};
						return this.props.children( provided );
					};

					return AnimateInOut;
				} )(
					react__WEBPACK_IMPORTED_MODULE_0___default().PureComponent
				);

				var zIndexOptions = {
					dragging: 5000,
					dropAnimating: 4500,
				};

				var getDraggingTransition = function getDraggingTransition(
					shouldAnimateDragMovement,
					dropping
				) {
					if ( dropping ) {
						return transitions.drop( dropping.duration );
					}

					if ( shouldAnimateDragMovement ) {
						return transitions.snap;
					}

					return transitions.fluid;
				};

				var getDraggingOpacity = function getDraggingOpacity(
					isCombining,
					isDropAnimating
				) {
					if ( ! isCombining ) {
						return null;
					}

					return isDropAnimating
						? combine.opacity.drop
						: combine.opacity.combining;
				};

				var getShouldDraggingAnimate =
					function getShouldDraggingAnimate( dragging ) {
						if ( dragging.forceShouldAnimate != null ) {
							return dragging.forceShouldAnimate;
						}

						return dragging.mode === 'SNAP';
					};

				function getDraggingStyle( dragging ) {
					var dimension = dragging.dimension;
					var box = dimension.client;
					var offset = dragging.offset,
						combineWith = dragging.combineWith,
						dropping = dragging.dropping;
					var isCombining = Boolean( combineWith );
					var shouldAnimate = getShouldDraggingAnimate( dragging );
					var isDropAnimating = Boolean( dropping );
					var transform = isDropAnimating
						? transforms.drop( offset, isCombining )
						: transforms.moveTo( offset );
					var style = {
						position: 'fixed',
						top: box.marginBox.top,
						left: box.marginBox.left,
						boxSizing: 'border-box',
						width: box.borderBox.width,
						height: box.borderBox.height,
						transition: getDraggingTransition(
							shouldAnimate,
							dropping
						),
						transform: transform,
						opacity: getDraggingOpacity(
							isCombining,
							isDropAnimating
						),
						zIndex: isDropAnimating
							? zIndexOptions.dropAnimating
							: zIndexOptions.dragging,
						pointerEvents: 'none',
					};
					return style;
				}

				function getSecondaryStyle( secondary ) {
					return {
						transform: transforms.moveTo( secondary.offset ),
						transition: secondary.shouldAnimateDisplacement
							? null
							: 'none',
					};
				}

				function getStyle$1( mapped ) {
					return mapped.type === 'DRAGGING'
						? getDraggingStyle( mapped )
						: getSecondaryStyle( mapped );
				}

				function getDimension$1( descriptor, el, windowScroll ) {
					if ( windowScroll === void 0 ) {
						windowScroll = origin;
					}

					var computedStyles = window.getComputedStyle( el );
					var borderBox = el.getBoundingClientRect();
					var client = ( 0,
					css_box_model__WEBPACK_IMPORTED_MODULE_5__.calculateBox )(
						borderBox,
						computedStyles
					);
					var page = ( 0,
					css_box_model__WEBPACK_IMPORTED_MODULE_5__.withScroll )(
						client,
						windowScroll
					);
					var placeholder = {
						client: client,
						tagName: el.tagName.toLowerCase(),
						display: computedStyles.display,
					};
					var displaceBy = {
						x: client.marginBox.width,
						y: client.marginBox.height,
					};
					var dimension = {
						descriptor: descriptor,
						placeholder: placeholder,
						displaceBy: displaceBy,
						client: client,
						page: page,
					};
					return dimension;
				}

				function useDraggablePublisher( args ) {
					var uniqueId = useUniqueId( 'draggable' );
					var descriptor = args.descriptor,
						registry = args.registry,
						getDraggableRef = args.getDraggableRef,
						canDragInteractiveElements =
							args.canDragInteractiveElements,
						shouldRespectForcePress = args.shouldRespectForcePress,
						isEnabled = args.isEnabled;
					var options = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return {
								canDragInteractiveElements:
									canDragInteractiveElements,
								shouldRespectForcePress:
									shouldRespectForcePress,
								isEnabled: isEnabled,
							};
						},
						[
							canDragInteractiveElements,
							isEnabled,
							shouldRespectForcePress,
						]
					);
					var getDimension = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function ( windowScroll ) {
							var el = getDraggableRef();
							! el
								? true
									? invariant(
											false,
											'Cannot get dimension when no ref is set'
									  )
									: 0
								: void 0;
							return getDimension$1(
								descriptor,
								el,
								windowScroll
							);
						},
						[ descriptor, getDraggableRef ]
					);
					var entry = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return {
								uniqueId: uniqueId,
								descriptor: descriptor,
								options: options,
								getDimension: getDimension,
							};
						},
						[ descriptor, getDimension, options, uniqueId ]
					);
					var publishedRef = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )( entry );
					var isFirstPublishRef = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )( true );
					useIsomorphicLayoutEffect(
						function () {
							registry.draggable.register( publishedRef.current );
							return function () {
								return registry.draggable.unregister(
									publishedRef.current
								);
							};
						},
						[ registry.draggable ]
					);
					useIsomorphicLayoutEffect(
						function () {
							if ( isFirstPublishRef.current ) {
								isFirstPublishRef.current = false;
								return;
							}

							var last = publishedRef.current;
							publishedRef.current = entry;
							registry.draggable.update( entry, last );
						},
						[ entry, registry.draggable ]
					);
				}

				function useValidation$1( props, contextId, getRef ) {
					useDevSetupWarning( function () {
						function prefix( id ) {
							return 'Draggable[id: ' + id + ']: ';
						}

						var id = props.draggableId;
						! id
							? true
								? invariant(
										false,
										'Draggable requires a draggableId'
								  )
								: 0
							: void 0;
						! ( typeof id === 'string' )
							? true
								? invariant(
										false,
										'Draggable requires a [string] draggableId.\n      Provided: [type: ' +
											typeof id +
											'] (value: ' +
											id +
											')'
								  )
								: 0
							: void 0;
						! isInteger( props.index )
							? true
								? invariant(
										false,
										prefix( id ) +
											' requires an integer index prop'
								  )
								: 0
							: void 0;

						if ( props.mapped.type === 'DRAGGING' ) {
							return;
						}

						checkIsValidInnerRef( getRef() );

						if ( props.isEnabled ) {
							! findDragHandle( contextId, id )
								? true
									? invariant(
											false,
											prefix( id ) +
												' Unable to find drag handle'
									  )
									: 0
								: void 0;
						}
					} );
				}
				function useClonePropValidation( isClone ) {
					useDev( function () {
						var initialRef = ( 0,
						react__WEBPACK_IMPORTED_MODULE_0__.useRef )( isClone );
						useDevSetupWarning(
							function () {
								! ( isClone === initialRef.current )
									? true
										? invariant(
												false,
												'Draggable isClone prop value changed during component life'
										  )
										: 0
									: void 0;
							},
							[ isClone ]
						);
					} );
				}

				function preventHtml5Dnd( event ) {
					event.preventDefault();
				}

				function Draggable( props ) {
					var ref = ( 0, react__WEBPACK_IMPORTED_MODULE_0__.useRef )(
						null
					);
					var setRef = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function ( el ) {
							ref.current = el;
						},
						[]
					);
					var getRef = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function () {
							return ref.current;
						},
						[]
					);

					var _useRequiredContext = useRequiredContext( AppContext ),
						contextId = _useRequiredContext.contextId,
						dragHandleUsageInstructionsId =
							_useRequiredContext.dragHandleUsageInstructionsId,
						registry = _useRequiredContext.registry;

					var _useRequiredContext2 =
							useRequiredContext( DroppableContext ),
						type = _useRequiredContext2.type,
						droppableId = _useRequiredContext2.droppableId;

					var descriptor = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return {
								id: props.draggableId,
								index: props.index,
								type: type,
								droppableId: droppableId,
							};
						},
						[ props.draggableId, props.index, type, droppableId ]
					);
					var children = props.children,
						draggableId = props.draggableId,
						isEnabled = props.isEnabled,
						shouldRespectForcePress = props.shouldRespectForcePress,
						canDragInteractiveElements =
							props.canDragInteractiveElements,
						isClone = props.isClone,
						mapped = props.mapped,
						dropAnimationFinishedAction =
							props.dropAnimationFinished;
					useValidation$1( props, contextId, getRef );
					useClonePropValidation( isClone );

					if ( ! isClone ) {
						var forPublisher = ( 0,
						use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
							function () {
								return {
									descriptor: descriptor,
									registry: registry,
									getDraggableRef: getRef,
									canDragInteractiveElements:
										canDragInteractiveElements,
									shouldRespectForcePress:
										shouldRespectForcePress,
									isEnabled: isEnabled,
								};
							},
							[
								descriptor,
								registry,
								getRef,
								canDragInteractiveElements,
								shouldRespectForcePress,
								isEnabled,
							]
						);
						useDraggablePublisher( forPublisher );
					}

					var dragHandleProps = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return isEnabled
								? {
										tabIndex: 0,
										role: 'button',
										'aria-describedby':
											dragHandleUsageInstructionsId,
										'data-rbd-drag-handle-draggable-id':
											draggableId,
										'data-rbd-drag-handle-context-id':
											contextId,
										draggable: false,
										onDragStart: preventHtml5Dnd,
								  }
								: null;
						},
						[
							contextId,
							dragHandleUsageInstructionsId,
							draggableId,
							isEnabled,
						]
					);
					var onMoveEnd = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function ( event ) {
							if ( mapped.type !== 'DRAGGING' ) {
								return;
							}

							if ( ! mapped.dropping ) {
								return;
							}

							if ( event.propertyName !== 'transform' ) {
								return;
							}

							dropAnimationFinishedAction();
						},
						[ dropAnimationFinishedAction, mapped ]
					);
					var provided = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							var style = getStyle$1( mapped );
							var onTransitionEnd =
								mapped.type === 'DRAGGING' && mapped.dropping
									? onMoveEnd
									: null;
							var result = {
								innerRef: setRef,
								draggableProps: {
									'data-rbd-draggable-context-id': contextId,
									'data-rbd-draggable-id': draggableId,
									style: style,
									onTransitionEnd: onTransitionEnd,
								},
								dragHandleProps: dragHandleProps,
							};
							return result;
						},
						[
							contextId,
							dragHandleProps,
							draggableId,
							mapped,
							onMoveEnd,
							setRef,
						]
					);
					var rubric = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return {
								draggableId: descriptor.id,
								type: descriptor.type,
								source: {
									index: descriptor.index,
									droppableId: descriptor.droppableId,
								},
							};
						},
						[
							descriptor.droppableId,
							descriptor.id,
							descriptor.index,
							descriptor.type,
						]
					);
					return children( provided, mapped.snapshot, rubric );
				}

				var isStrictEqual = function ( a, b ) {
					return a === b;
				};

				var whatIsDraggedOverFromResult = function ( result ) {
					var combine = result.combine,
						destination = result.destination;

					if ( destination ) {
						return destination.droppableId;
					}

					if ( combine ) {
						return combine.droppableId;
					}

					return null;
				};

				var getCombineWithFromResult =
					function getCombineWithFromResult( result ) {
						return result.combine
							? result.combine.draggableId
							: null;
					};

				var getCombineWithFromImpact =
					function getCombineWithFromImpact( impact ) {
						return impact.at && impact.at.type === 'COMBINE'
							? impact.at.combine.draggableId
							: null;
					};

				function getDraggableSelector() {
					var memoizedOffset = ( 0,
					memoize_one__WEBPACK_IMPORTED_MODULE_6__[ 'default' ] )(
						function ( x, y ) {
							return {
								x: x,
								y: y,
							};
						}
					);
					var getMemoizedSnapshot = ( 0,
					memoize_one__WEBPACK_IMPORTED_MODULE_6__[ 'default' ] )(
						function (
							mode,
							isClone,
							draggingOver,
							combineWith,
							dropping
						) {
							return {
								isDragging: true,
								isClone: isClone,
								isDropAnimating: Boolean( dropping ),
								dropAnimation: dropping,
								mode: mode,
								draggingOver: draggingOver,
								combineWith: combineWith,
								combineTargetFor: null,
							};
						}
					);
					var getMemoizedProps = ( 0,
					memoize_one__WEBPACK_IMPORTED_MODULE_6__[ 'default' ] )(
						function (
							offset,
							mode,
							dimension,
							isClone,
							draggingOver,
							combineWith,
							forceShouldAnimate
						) {
							return {
								mapped: {
									type: 'DRAGGING',
									dropping: null,
									draggingOver: draggingOver,
									combineWith: combineWith,
									mode: mode,
									offset: offset,
									dimension: dimension,
									forceShouldAnimate: forceShouldAnimate,
									snapshot: getMemoizedSnapshot(
										mode,
										isClone,
										draggingOver,
										combineWith,
										null
									),
								},
							};
						}
					);

					var selector = function selector( state, ownProps ) {
						if ( state.isDragging ) {
							if (
								state.critical.draggable.id !==
								ownProps.draggableId
							) {
								return null;
							}

							var offset = state.current.client.offset;
							var dimension =
								state.dimensions.draggables[
									ownProps.draggableId
								];
							var draggingOver = whatIsDraggedOver(
								state.impact
							);
							var combineWith = getCombineWithFromImpact(
								state.impact
							);
							var forceShouldAnimate = state.forceShouldAnimate;
							return getMemoizedProps(
								memoizedOffset( offset.x, offset.y ),
								state.movementMode,
								dimension,
								ownProps.isClone,
								draggingOver,
								combineWith,
								forceShouldAnimate
							);
						}

						if ( state.phase === 'DROP_ANIMATING' ) {
							var completed = state.completed;

							if (
								completed.result.draggableId !==
								ownProps.draggableId
							) {
								return null;
							}

							var isClone = ownProps.isClone;
							var _dimension =
								state.dimensions.draggables[
									ownProps.draggableId
								];
							var result = completed.result;
							var mode = result.mode;

							var _draggingOver =
								whatIsDraggedOverFromResult( result );

							var _combineWith =
								getCombineWithFromResult( result );

							var duration = state.dropDuration;
							var dropping = {
								duration: duration,
								curve: curves.drop,
								moveTo: state.newHomeClientOffset,
								opacity: _combineWith
									? combine.opacity.drop
									: null,
								scale: _combineWith ? combine.scale.drop : null,
							};
							return {
								mapped: {
									type: 'DRAGGING',
									offset: state.newHomeClientOffset,
									dimension: _dimension,
									dropping: dropping,
									draggingOver: _draggingOver,
									combineWith: _combineWith,
									mode: mode,
									forceShouldAnimate: null,
									snapshot: getMemoizedSnapshot(
										mode,
										isClone,
										_draggingOver,
										_combineWith,
										dropping
									),
								},
							};
						}

						return null;
					};

					return selector;
				}

				function getSecondarySnapshot( combineTargetFor ) {
					return {
						isDragging: false,
						isDropAnimating: false,
						isClone: false,
						dropAnimation: null,
						mode: null,
						draggingOver: null,
						combineTargetFor: combineTargetFor,
						combineWith: null,
					};
				}

				var atRest = {
					mapped: {
						type: 'SECONDARY',
						offset: origin,
						combineTargetFor: null,
						shouldAnimateDisplacement: true,
						snapshot: getSecondarySnapshot( null ),
					},
				};

				function getSecondarySelector() {
					var memoizedOffset = ( 0,
					memoize_one__WEBPACK_IMPORTED_MODULE_6__[ 'default' ] )(
						function ( x, y ) {
							return {
								x: x,
								y: y,
							};
						}
					);
					var getMemoizedSnapshot = ( 0,
					memoize_one__WEBPACK_IMPORTED_MODULE_6__[ 'default' ] )(
						getSecondarySnapshot
					);
					var getMemoizedProps = ( 0,
					memoize_one__WEBPACK_IMPORTED_MODULE_6__[ 'default' ] )(
						function (
							offset,
							combineTargetFor,
							shouldAnimateDisplacement
						) {
							if ( combineTargetFor === void 0 ) {
								combineTargetFor = null;
							}

							return {
								mapped: {
									type: 'SECONDARY',
									offset: offset,
									combineTargetFor: combineTargetFor,
									shouldAnimateDisplacement:
										shouldAnimateDisplacement,
									snapshot:
										getMemoizedSnapshot( combineTargetFor ),
								},
							};
						}
					);

					var getFallback = function getFallback( combineTargetFor ) {
						return combineTargetFor
							? getMemoizedProps( origin, combineTargetFor, true )
							: null;
					};

					var getProps = function getProps(
						ownId,
						draggingId,
						impact,
						afterCritical
					) {
						var visualDisplacement =
							impact.displaced.visible[ ownId ];
						var isAfterCriticalInVirtualList = Boolean(
							afterCritical.inVirtualList &&
								afterCritical.effected[ ownId ]
						);
						var combine = tryGetCombine( impact );
						var combineTargetFor =
							combine && combine.draggableId === ownId
								? draggingId
								: null;

						if ( ! visualDisplacement ) {
							if ( ! isAfterCriticalInVirtualList ) {
								return getFallback( combineTargetFor );
							}

							if ( impact.displaced.invisible[ ownId ] ) {
								return null;
							}

							var change = negate(
								afterCritical.displacedBy.point
							);

							var _offset = memoizedOffset( change.x, change.y );

							return getMemoizedProps(
								_offset,
								combineTargetFor,
								true
							);
						}

						if ( isAfterCriticalInVirtualList ) {
							return getFallback( combineTargetFor );
						}

						var displaceBy = impact.displacedBy.point;
						var offset = memoizedOffset(
							displaceBy.x,
							displaceBy.y
						);
						return getMemoizedProps(
							offset,
							combineTargetFor,
							visualDisplacement.shouldAnimate
						);
					};

					var selector = function selector( state, ownProps ) {
						if ( state.isDragging ) {
							if (
								state.critical.draggable.id ===
								ownProps.draggableId
							) {
								return null;
							}

							return getProps(
								ownProps.draggableId,
								state.critical.draggable.id,
								state.impact,
								state.afterCritical
							);
						}

						if ( state.phase === 'DROP_ANIMATING' ) {
							var completed = state.completed;

							if (
								completed.result.draggableId ===
								ownProps.draggableId
							) {
								return null;
							}

							return getProps(
								ownProps.draggableId,
								completed.result.draggableId,
								completed.impact,
								completed.afterCritical
							);
						}

						return null;
					};

					return selector;
				}

				var makeMapStateToProps = function makeMapStateToProps() {
					var draggingSelector = getDraggableSelector();
					var secondarySelector = getSecondarySelector();

					var selector = function selector( state, ownProps ) {
						return (
							draggingSelector( state, ownProps ) ||
							secondarySelector( state, ownProps ) ||
							atRest
						);
					};

					return selector;
				};
				var mapDispatchToProps = {
					dropAnimationFinished: dropAnimationFinished,
				};
				var ConnectedDraggable = ( 0,
				react_redux__WEBPACK_IMPORTED_MODULE_3__.connect )(
					makeMapStateToProps,
					mapDispatchToProps,
					null,
					{
						context: StoreContext,
						pure: true,
						areStatePropsEqual: isStrictEqual,
					}
				)( Draggable );

				function PrivateDraggable( props ) {
					var droppableContext =
						useRequiredContext( DroppableContext );
					var isUsingCloneFor = droppableContext.isUsingCloneFor;

					if (
						isUsingCloneFor === props.draggableId &&
						! props.isClone
					) {
						return null;
					}

					return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
						ConnectedDraggable,
						props
					);
				}
				function PublicDraggable( props ) {
					var isEnabled =
						typeof props.isDragDisabled === 'boolean'
							? ! props.isDragDisabled
							: true;
					var canDragInteractiveElements = Boolean(
						props.disableInteractiveElementBlocking
					);
					var shouldRespectForcePress = Boolean(
						props.shouldRespectForcePress
					);
					return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
						PrivateDraggable,
						( 0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
							'default'
						] )( {}, props, {
							isClone: false,
							isEnabled: isEnabled,
							canDragInteractiveElements:
								canDragInteractiveElements,
							shouldRespectForcePress: shouldRespectForcePress,
						} )
					);
				}

				function Droppable( props ) {
					var appContext = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useContext )(
						AppContext
					);
					! appContext
						? true
							? invariant( false, 'Could not find app context' )
							: 0
						: void 0;
					var contextId = appContext.contextId,
						isMovementAllowed = appContext.isMovementAllowed;
					var droppableRef = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )( null );
					var placeholderRef = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )( null );
					var children = props.children,
						droppableId = props.droppableId,
						type = props.type,
						mode = props.mode,
						direction = props.direction,
						ignoreContainerClipping = props.ignoreContainerClipping,
						isDropDisabled = props.isDropDisabled,
						isCombineEnabled = props.isCombineEnabled,
						snapshot = props.snapshot,
						useClone = props.useClone,
						updateViewportMaxScroll = props.updateViewportMaxScroll,
						getContainerForClone = props.getContainerForClone;
					var getDroppableRef = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function () {
							return droppableRef.current;
						},
						[]
					);
					var setDroppableRef = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function ( value ) {
							droppableRef.current = value;
						},
						[]
					);
					var getPlaceholderRef = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function () {
							return placeholderRef.current;
						},
						[]
					);
					var setPlaceholderRef = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function ( value ) {
							placeholderRef.current = value;
						},
						[]
					);
					useValidation( {
						props: props,
						getDroppableRef: getDroppableRef,
						getPlaceholderRef: getPlaceholderRef,
					} );
					var onPlaceholderTransitionEnd = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useCallback )(
						function () {
							if ( isMovementAllowed() ) {
								updateViewportMaxScroll( {
									maxScroll: getMaxWindowScroll(),
								} );
							}
						},
						[ isMovementAllowed, updateViewportMaxScroll ]
					);
					useDroppablePublisher( {
						droppableId: droppableId,
						type: type,
						mode: mode,
						direction: direction,
						isDropDisabled: isDropDisabled,
						isCombineEnabled: isCombineEnabled,
						ignoreContainerClipping: ignoreContainerClipping,
						getDroppableRef: getDroppableRef,
					} );
					var placeholder =
						react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
							AnimateInOut,
							{
								on: props.placeholder,
								shouldAnimate: props.shouldAnimatePlaceholder,
							},
							function ( _ref ) {
								var onClose = _ref.onClose,
									data = _ref.data,
									animate = _ref.animate;
								return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
									Placeholder$1,
									{
										placeholder: data,
										onClose: onClose,
										innerRef: setPlaceholderRef,
										animate: animate,
										contextId: contextId,
										onTransitionEnd:
											onPlaceholderTransitionEnd,
									}
								);
							}
						);
					var provided = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return {
								innerRef: setDroppableRef,
								placeholder: placeholder,
								droppableProps: {
									'data-rbd-droppable-id': droppableId,
									'data-rbd-droppable-context-id': contextId,
								},
							};
						},
						[ contextId, droppableId, placeholder, setDroppableRef ]
					);
					var isUsingCloneFor = useClone
						? useClone.dragging.draggableId
						: null;
					var droppableContext = ( 0,
					use_memo_one__WEBPACK_IMPORTED_MODULE_9__.useMemo )(
						function () {
							return {
								droppableId: droppableId,
								type: type,
								isUsingCloneFor: isUsingCloneFor,
							};
						},
						[ droppableId, isUsingCloneFor, type ]
					);

					function getClone() {
						if ( ! useClone ) {
							return null;
						}

						var dragging = useClone.dragging,
							render = useClone.render;
						var node =
							react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
								PrivateDraggable,
								{
									draggableId: dragging.draggableId,
									index: dragging.source.index,
									isClone: true,
									isEnabled: true,
									shouldRespectForcePress: false,
									canDragInteractiveElements: true,
								},
								function (
									draggableProvided,
									draggableSnapshot
								) {
									return render(
										draggableProvided,
										draggableSnapshot,
										dragging
									);
								}
							);
						return react_dom__WEBPACK_IMPORTED_MODULE_4___default().createPortal(
							node,
							getContainerForClone()
						);
					}

					return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
						DroppableContext.Provider,
						{
							value: droppableContext,
						},
						children( provided, snapshot ),
						getClone()
					);
				}

				var isMatchingType = function isMatchingType( type, critical ) {
					return type === critical.droppable.type;
				};

				var getDraggable = function getDraggable(
					critical,
					dimensions
				) {
					return dimensions.draggables[ critical.draggable.id ];
				};

				var makeMapStateToProps$1 = function makeMapStateToProps() {
					var idleWithAnimation = {
						placeholder: null,
						shouldAnimatePlaceholder: true,
						snapshot: {
							isDraggingOver: false,
							draggingOverWith: null,
							draggingFromThisWith: null,
							isUsingPlaceholder: false,
						},
						useClone: null,
					};

					var idleWithoutAnimation = ( 0,
					_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__[
						'default'
					] )( {}, idleWithAnimation, {
						shouldAnimatePlaceholder: false,
					} );

					var getDraggableRubric = ( 0,
					memoize_one__WEBPACK_IMPORTED_MODULE_6__[ 'default' ] )(
						function ( descriptor ) {
							return {
								draggableId: descriptor.id,
								type: descriptor.type,
								source: {
									index: descriptor.index,
									droppableId: descriptor.droppableId,
								},
							};
						}
					);
					var getMapProps = ( 0,
					memoize_one__WEBPACK_IMPORTED_MODULE_6__[ 'default' ] )(
						function (
							id,
							isEnabled,
							isDraggingOverForConsumer,
							isDraggingOverForImpact,
							dragging,
							renderClone
						) {
							var draggableId = dragging.descriptor.id;
							var isHome = dragging.descriptor.droppableId === id;

							if ( isHome ) {
								var useClone = renderClone
									? {
											render: renderClone,
											dragging: getDraggableRubric(
												dragging.descriptor
											),
									  }
									: null;
								var _snapshot = {
									isDraggingOver: isDraggingOverForConsumer,
									draggingOverWith: isDraggingOverForConsumer
										? draggableId
										: null,
									draggingFromThisWith: draggableId,
									isUsingPlaceholder: true,
								};
								return {
									placeholder: dragging.placeholder,
									shouldAnimatePlaceholder: false,
									snapshot: _snapshot,
									useClone: useClone,
								};
							}

							if ( ! isEnabled ) {
								return idleWithoutAnimation;
							}

							if ( ! isDraggingOverForImpact ) {
								return idleWithAnimation;
							}

							var snapshot = {
								isDraggingOver: isDraggingOverForConsumer,
								draggingOverWith: draggableId,
								draggingFromThisWith: null,
								isUsingPlaceholder: true,
							};
							return {
								placeholder: dragging.placeholder,
								shouldAnimatePlaceholder: true,
								snapshot: snapshot,
								useClone: null,
							};
						}
					);

					var selector = function selector( state, ownProps ) {
						var id = ownProps.droppableId;
						var type = ownProps.type;
						var isEnabled = ! ownProps.isDropDisabled;
						var renderClone = ownProps.renderClone;

						if ( state.isDragging ) {
							var critical = state.critical;

							if ( ! isMatchingType( type, critical ) ) {
								return idleWithoutAnimation;
							}

							var dragging = getDraggable(
								critical,
								state.dimensions
							);
							var isDraggingOver =
								whatIsDraggedOver( state.impact ) === id;
							return getMapProps(
								id,
								isEnabled,
								isDraggingOver,
								isDraggingOver,
								dragging,
								renderClone
							);
						}

						if ( state.phase === 'DROP_ANIMATING' ) {
							var completed = state.completed;

							if (
								! isMatchingType( type, completed.critical )
							) {
								return idleWithoutAnimation;
							}

							var _dragging = getDraggable(
								completed.critical,
								state.dimensions
							);

							return getMapProps(
								id,
								isEnabled,
								whatIsDraggedOverFromResult(
									completed.result
								) === id,
								whatIsDraggedOver( completed.impact ) === id,
								_dragging,
								renderClone
							);
						}

						if (
							state.phase === 'IDLE' &&
							state.completed &&
							! state.shouldFlush
						) {
							var _completed = state.completed;

							if (
								! isMatchingType( type, _completed.critical )
							) {
								return idleWithoutAnimation;
							}

							var wasOver =
								whatIsDraggedOver( _completed.impact ) === id;
							var wasCombining = Boolean(
								_completed.impact.at &&
									_completed.impact.at.type === 'COMBINE'
							);
							var isHome =
								_completed.critical.droppable.id === id;

							if ( wasOver ) {
								return wasCombining
									? idleWithAnimation
									: idleWithoutAnimation;
							}

							if ( isHome ) {
								return idleWithAnimation;
							}

							return idleWithoutAnimation;
						}

						return idleWithoutAnimation;
					};

					return selector;
				};
				var mapDispatchToProps$1 = {
					updateViewportMaxScroll: updateViewportMaxScroll,
				};

				function getBody() {
					! document.body
						? true
							? invariant( false, 'document.body is not ready' )
							: 0
						: void 0;
					return document.body;
				}

				var defaultProps = {
					mode: 'standard',
					type: 'DEFAULT',
					direction: 'vertical',
					isDropDisabled: false,
					isCombineEnabled: false,
					ignoreContainerClipping: false,
					renderClone: null,
					getContainerForClone: getBody,
				};
				var ConnectedDroppable = ( 0,
				react_redux__WEBPACK_IMPORTED_MODULE_3__.connect )(
					makeMapStateToProps$1,
					mapDispatchToProps$1,
					null,
					{
						context: StoreContext,
						pure: true,
						areStatePropsEqual: isStrictEqual,
					}
				)( Droppable );
				ConnectedDroppable.defaultProps = defaultProps;

				/***/
			},

		/***/ './node_modules/react-is/cjs/react-is.development.js':
			/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
			/***/ ( __unused_webpack_module, exports ) => {
				'use strict';
				/** @license React v16.13.1
				 * react-is.development.js
				 *
				 * Copyright (c) Facebook, Inc. and its affiliates.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */

				if ( true ) {
					( function () {
						'use strict';

						// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
						// nor polyfill, then a plain number is used for performance.
						var hasSymbol =
							typeof Symbol === 'function' && Symbol.for;
						var REACT_ELEMENT_TYPE = hasSymbol
							? Symbol.for( 'react.element' )
							: 0xeac7;
						var REACT_PORTAL_TYPE = hasSymbol
							? Symbol.for( 'react.portal' )
							: 0xeaca;
						var REACT_FRAGMENT_TYPE = hasSymbol
							? Symbol.for( 'react.fragment' )
							: 0xeacb;
						var REACT_STRICT_MODE_TYPE = hasSymbol
							? Symbol.for( 'react.strict_mode' )
							: 0xeacc;
						var REACT_PROFILER_TYPE = hasSymbol
							? Symbol.for( 'react.profiler' )
							: 0xead2;
						var REACT_PROVIDER_TYPE = hasSymbol
							? Symbol.for( 'react.provider' )
							: 0xeacd;
						var REACT_CONTEXT_TYPE = hasSymbol
							? Symbol.for( 'react.context' )
							: 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
						// (unstable) APIs that have been removed. Can we remove the symbols?

						var REACT_ASYNC_MODE_TYPE = hasSymbol
							? Symbol.for( 'react.async_mode' )
							: 0xeacf;
						var REACT_CONCURRENT_MODE_TYPE = hasSymbol
							? Symbol.for( 'react.concurrent_mode' )
							: 0xeacf;
						var REACT_FORWARD_REF_TYPE = hasSymbol
							? Symbol.for( 'react.forward_ref' )
							: 0xead0;
						var REACT_SUSPENSE_TYPE = hasSymbol
							? Symbol.for( 'react.suspense' )
							: 0xead1;
						var REACT_SUSPENSE_LIST_TYPE = hasSymbol
							? Symbol.for( 'react.suspense_list' )
							: 0xead8;
						var REACT_MEMO_TYPE = hasSymbol
							? Symbol.for( 'react.memo' )
							: 0xead3;
						var REACT_LAZY_TYPE = hasSymbol
							? Symbol.for( 'react.lazy' )
							: 0xead4;
						var REACT_BLOCK_TYPE = hasSymbol
							? Symbol.for( 'react.block' )
							: 0xead9;
						var REACT_FUNDAMENTAL_TYPE = hasSymbol
							? Symbol.for( 'react.fundamental' )
							: 0xead5;
						var REACT_RESPONDER_TYPE = hasSymbol
							? Symbol.for( 'react.responder' )
							: 0xead6;
						var REACT_SCOPE_TYPE = hasSymbol
							? Symbol.for( 'react.scope' )
							: 0xead7;

						function isValidElementType( type ) {
							return (
								typeof type === 'string' ||
								typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
								type === REACT_FRAGMENT_TYPE ||
								type === REACT_CONCURRENT_MODE_TYPE ||
								type === REACT_PROFILER_TYPE ||
								type === REACT_STRICT_MODE_TYPE ||
								type === REACT_SUSPENSE_TYPE ||
								type === REACT_SUSPENSE_LIST_TYPE ||
								( typeof type === 'object' &&
									type !== null &&
									( type.$$typeof === REACT_LAZY_TYPE ||
										type.$$typeof === REACT_MEMO_TYPE ||
										type.$$typeof === REACT_PROVIDER_TYPE ||
										type.$$typeof === REACT_CONTEXT_TYPE ||
										type.$$typeof ===
											REACT_FORWARD_REF_TYPE ||
										type.$$typeof ===
											REACT_FUNDAMENTAL_TYPE ||
										type.$$typeof ===
											REACT_RESPONDER_TYPE ||
										type.$$typeof === REACT_SCOPE_TYPE ||
										type.$$typeof === REACT_BLOCK_TYPE ) )
							);
						}

						function typeOf( object ) {
							if (
								typeof object === 'object' &&
								object !== null
							) {
								var $$typeof = object.$$typeof;

								switch ( $$typeof ) {
									case REACT_ELEMENT_TYPE:
										var type = object.type;

										switch ( type ) {
											case REACT_ASYNC_MODE_TYPE:
											case REACT_CONCURRENT_MODE_TYPE:
											case REACT_FRAGMENT_TYPE:
											case REACT_PROFILER_TYPE:
											case REACT_STRICT_MODE_TYPE:
											case REACT_SUSPENSE_TYPE:
												return type;

											default:
												var $$typeofType =
													type && type.$$typeof;

												switch ( $$typeofType ) {
													case REACT_CONTEXT_TYPE:
													case REACT_FORWARD_REF_TYPE:
													case REACT_LAZY_TYPE:
													case REACT_MEMO_TYPE:
													case REACT_PROVIDER_TYPE:
														return $$typeofType;

													default:
														return $$typeof;
												}
										}

									case REACT_PORTAL_TYPE:
										return $$typeof;
								}
							}

							return undefined;
						} // AsyncMode is deprecated along with isAsyncMode

						var AsyncMode = REACT_ASYNC_MODE_TYPE;
						var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
						var ContextConsumer = REACT_CONTEXT_TYPE;
						var ContextProvider = REACT_PROVIDER_TYPE;
						var Element = REACT_ELEMENT_TYPE;
						var ForwardRef = REACT_FORWARD_REF_TYPE;
						var Fragment = REACT_FRAGMENT_TYPE;
						var Lazy = REACT_LAZY_TYPE;
						var Memo = REACT_MEMO_TYPE;
						var Portal = REACT_PORTAL_TYPE;
						var Profiler = REACT_PROFILER_TYPE;
						var StrictMode = REACT_STRICT_MODE_TYPE;
						var Suspense = REACT_SUSPENSE_TYPE;
						var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

						function isAsyncMode( object ) {
							{
								if ( ! hasWarnedAboutDeprecatedIsAsyncMode ) {
									hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

									console[ 'warn' ](
										'The ReactIs.isAsyncMode() alias has been deprecated, ' +
											'and will be removed in React 17+. Update your code to use ' +
											'ReactIs.isConcurrentMode() instead. It has the exact same API.'
									);
								}
							}

							return (
								isConcurrentMode( object ) ||
								typeOf( object ) === REACT_ASYNC_MODE_TYPE
							);
						}
						function isConcurrentMode( object ) {
							return (
								typeOf( object ) === REACT_CONCURRENT_MODE_TYPE
							);
						}
						function isContextConsumer( object ) {
							return typeOf( object ) === REACT_CONTEXT_TYPE;
						}
						function isContextProvider( object ) {
							return typeOf( object ) === REACT_PROVIDER_TYPE;
						}
						function isElement( object ) {
							return (
								typeof object === 'object' &&
								object !== null &&
								object.$$typeof === REACT_ELEMENT_TYPE
							);
						}
						function isForwardRef( object ) {
							return typeOf( object ) === REACT_FORWARD_REF_TYPE;
						}
						function isFragment( object ) {
							return typeOf( object ) === REACT_FRAGMENT_TYPE;
						}
						function isLazy( object ) {
							return typeOf( object ) === REACT_LAZY_TYPE;
						}
						function isMemo( object ) {
							return typeOf( object ) === REACT_MEMO_TYPE;
						}
						function isPortal( object ) {
							return typeOf( object ) === REACT_PORTAL_TYPE;
						}
						function isProfiler( object ) {
							return typeOf( object ) === REACT_PROFILER_TYPE;
						}
						function isStrictMode( object ) {
							return typeOf( object ) === REACT_STRICT_MODE_TYPE;
						}
						function isSuspense( object ) {
							return typeOf( object ) === REACT_SUSPENSE_TYPE;
						}

						exports.AsyncMode = AsyncMode;
						exports.ConcurrentMode = ConcurrentMode;
						exports.ContextConsumer = ContextConsumer;
						exports.ContextProvider = ContextProvider;
						exports.Element = Element;
						exports.ForwardRef = ForwardRef;
						exports.Fragment = Fragment;
						exports.Lazy = Lazy;
						exports.Memo = Memo;
						exports.Portal = Portal;
						exports.Profiler = Profiler;
						exports.StrictMode = StrictMode;
						exports.Suspense = Suspense;
						exports.isAsyncMode = isAsyncMode;
						exports.isConcurrentMode = isConcurrentMode;
						exports.isContextConsumer = isContextConsumer;
						exports.isContextProvider = isContextProvider;
						exports.isElement = isElement;
						exports.isForwardRef = isForwardRef;
						exports.isFragment = isFragment;
						exports.isLazy = isLazy;
						exports.isMemo = isMemo;
						exports.isPortal = isPortal;
						exports.isProfiler = isProfiler;
						exports.isStrictMode = isStrictMode;
						exports.isSuspense = isSuspense;
						exports.isValidElementType = isValidElementType;
						exports.typeOf = typeOf;
					} )();
				}

				/***/
			},

		/***/ './node_modules/react-is/index.js':
			/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
			/***/ ( module, __unused_webpack_exports, __webpack_require__ ) => {
				'use strict';

				if ( false ) {
				} else {
					module.exports = __webpack_require__(
						/*! ./cjs/react-is.development.js */ './node_modules/react-is/cjs/react-is.development.js'
					);
				}

				/***/
			},

		/***/ './node_modules/react-redux/es/components/Context.js':
			/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/components/Context.js ***!
  \***********************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ ReactReduxContext: () =>
							/* binding */ ReactReduxContext,
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

				var ReactReduxContext =
					/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createContext(
						null
					);

				if ( true ) {
					ReactReduxContext.displayName = 'ReactRedux';
				}

				/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
					ReactReduxContext;

				/***/
			},

		/***/ './node_modules/react-redux/es/components/Provider.js':
			/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/components/Provider.js ***!
  \************************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
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
				/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						/*! prop-types */ './node_modules/prop-types/index.js'
					);
				/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default =
					/*#__PURE__*/ __webpack_require__.n(
						prop_types__WEBPACK_IMPORTED_MODULE_4__
					);
				/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! ./Context */ './node_modules/react-redux/es/components/Context.js'
					);
				/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! ../utils/Subscription */ './node_modules/react-redux/es/utils/Subscription.js'
					);
				/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						/*! ../utils/useIsomorphicLayoutEffect */ './node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js'
					);

				function Provider( _ref ) {
					var store = _ref.store,
						context = _ref.context,
						children = _ref.children;
					var contextValue = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useMemo )(
						function () {
							var subscription = ( 0,
							_utils_Subscription__WEBPACK_IMPORTED_MODULE_2__.createSubscription )(
								store
							);
							return {
								store: store,
								subscription: subscription,
							};
						},
						[ store ]
					);
					var previousState = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useMemo )(
						function () {
							return store.getState();
						},
						[ store ]
					);
					( 0,
					_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect )(
						function () {
							var subscription = contextValue.subscription;
							subscription.onStateChange =
								subscription.notifyNestedSubs;
							subscription.trySubscribe();

							if ( previousState !== store.getState() ) {
								subscription.notifyNestedSubs();
							}

							return function () {
								subscription.tryUnsubscribe();
								subscription.onStateChange = null;
							};
						},
						[ contextValue, previousState ]
					);
					var Context =
						context ||
						_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext;
					return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0___default().createElement(
						Context.Provider,
						{
							value: contextValue,
						},
						children
					);
				}

				if ( true ) {
					Provider.propTypes = {
						store: prop_types__WEBPACK_IMPORTED_MODULE_4___default().shape(
							{
								subscribe:
									prop_types__WEBPACK_IMPORTED_MODULE_4___default()
										.func.isRequired,
								dispatch:
									prop_types__WEBPACK_IMPORTED_MODULE_4___default()
										.func.isRequired,
								getState:
									prop_types__WEBPACK_IMPORTED_MODULE_4___default()
										.func.isRequired,
							}
						),
						context:
							prop_types__WEBPACK_IMPORTED_MODULE_4___default()
								.object,
						children:
							prop_types__WEBPACK_IMPORTED_MODULE_4___default()
								.any,
					};
				}

				/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
					Provider;

				/***/
			},

		/***/ './node_modules/react-redux/es/components/connectAdvanced.js':
			/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/components/connectAdvanced.js ***!
  \*******************************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ connectAdvanced,
						/* harmony export */
					}
				);
				/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! @babel/runtime/helpers/esm/extends */ './node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js'
					);
				/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ './node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'
					);
				/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! hoist-non-react-statics */ './node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js'
					);
				/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default =
					/*#__PURE__*/ __webpack_require__.n(
						hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2__
					);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__( /*! react */ 'react' );
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default =
					/*#__PURE__*/ __webpack_require__.n(
						react__WEBPACK_IMPORTED_MODULE_3__
					);
				/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						/*! react-is */ './node_modules/react-redux/node_modules/react-is/index.js'
					);
				/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_5__ =
					__webpack_require__(
						/*! ../utils/Subscription */ './node_modules/react-redux/es/utils/Subscription.js'
					);
				/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__ =
					__webpack_require__(
						/*! ../utils/useIsomorphicLayoutEffect */ './node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js'
					);
				/* harmony import */ var _Context__WEBPACK_IMPORTED_MODULE_7__ =
					__webpack_require__(
						/*! ./Context */ './node_modules/react-redux/es/components/Context.js'
					);

				var _excluded = [
						'getDisplayName',
						'methodName',
						'renderCountProp',
						'shouldHandleStateChanges',
						'storeKey',
						'withRef',
						'forwardRef',
						'context',
					],
					_excluded2 = [ 'reactReduxForwardedRef' ];

				// Define some constant arrays just to avoid re-creating these

				var EMPTY_ARRAY = [];
				var NO_SUBSCRIPTION_ARRAY = [ null, null ];

				var stringifyComponent = function stringifyComponent( Comp ) {
					try {
						return JSON.stringify( Comp );
					} catch ( err ) {
						return String( Comp );
					}
				};

				function storeStateUpdatesReducer( state, action ) {
					var updateCount = state[ 1 ];
					return [ action.payload, updateCount + 1 ];
				}

				function useIsomorphicLayoutEffectWithArgs(
					effectFunc,
					effectArgs,
					dependencies
				) {
					( 0,
					_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_6__.useIsomorphicLayoutEffect )(
						function () {
							return effectFunc.apply( void 0, effectArgs );
						},
						dependencies
					);
				}

				function captureWrapperProps(
					lastWrapperProps,
					lastChildProps,
					renderIsScheduled,
					wrapperProps,
					actualChildProps,
					childPropsFromStoreUpdate,
					notifyNestedSubs
				) {
					// We want to capture the wrapper props and child props we used for later comparisons
					lastWrapperProps.current = wrapperProps;
					lastChildProps.current = actualChildProps;
					renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

					if ( childPropsFromStoreUpdate.current ) {
						childPropsFromStoreUpdate.current = null;
						notifyNestedSubs();
					}
				}

				function subscribeUpdates(
					shouldHandleStateChanges,
					store,
					subscription,
					childPropsSelector,
					lastWrapperProps,
					lastChildProps,
					renderIsScheduled,
					childPropsFromStoreUpdate,
					notifyNestedSubs,
					forceComponentUpdateDispatch
				) {
					// If we're not subscribed to the store, nothing to do here
					if ( ! shouldHandleStateChanges ) return; // Capture values for checking if and when this component unmounts

					var didUnsubscribe = false;
					var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

					var checkForUpdates = function checkForUpdates() {
						if ( didUnsubscribe ) {
							// Don't run stale listeners.
							// Redux doesn't guarantee unsubscriptions happen until next dispatch.
							return;
						}

						var latestStoreState = store.getState();
						var newChildProps, error;

						try {
							// Actually run the selector with the most recent store state and wrapper props
							// to determine what the child props should be
							newChildProps = childPropsSelector(
								latestStoreState,
								lastWrapperProps.current
							);
						} catch ( e ) {
							error = e;
							lastThrownError = e;
						}

						if ( ! error ) {
							lastThrownError = null;
						} // If the child props haven't changed, nothing to do here - cascade the subscription update

						if ( newChildProps === lastChildProps.current ) {
							if ( ! renderIsScheduled.current ) {
								notifyNestedSubs();
							}
						} else {
							// Save references to the new child props.  Note that we track the "child props from store update"
							// as a ref instead of a useState/useReducer because we need a way to determine if that value has
							// been processed.  If this went into useState/useReducer, we couldn't clear out the value without
							// forcing another re-render, which we don't want.
							lastChildProps.current = newChildProps;
							childPropsFromStoreUpdate.current = newChildProps;
							renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

							forceComponentUpdateDispatch( {
								type: 'STORE_UPDATED',
								payload: {
									error: error,
								},
							} );
						}
					}; // Actually subscribe to the nearest connected ancestor (or store)

					subscription.onStateChange = checkForUpdates;
					subscription.trySubscribe(); // Pull data from the store after first render in case the store has
					// changed since we began.

					checkForUpdates();

					var unsubscribeWrapper = function unsubscribeWrapper() {
						didUnsubscribe = true;
						subscription.tryUnsubscribe();
						subscription.onStateChange = null;

						if ( lastThrownError ) {
							// It's possible that we caught an error due to a bad mapState function, but the
							// parent re-rendered without this component and we're about to unmount.
							// This shouldn't happen as long as we do top-down subscriptions correctly, but
							// if we ever do those wrong, this throw will surface the error in our tests.
							// In that case, throw the error from here so it doesn't get lost.
							throw lastThrownError;
						}
					};

					return unsubscribeWrapper;
				}

				var initStateUpdates = function initStateUpdates() {
					return [ null, 0 ];
				};

				function connectAdvanced(
					/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
      export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
    Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
    Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
					selectorFactory, // options object:
					_ref
				) {
					if ( _ref === void 0 ) {
						_ref = {};
					}

					var _ref2 = _ref,
						_ref2$getDisplayName = _ref2.getDisplayName,
						getDisplayName =
							_ref2$getDisplayName === void 0
								? function ( name ) {
										return 'ConnectAdvanced(' + name + ')';
								  }
								: _ref2$getDisplayName,
						_ref2$methodName = _ref2.methodName,
						methodName =
							_ref2$methodName === void 0
								? 'connectAdvanced'
								: _ref2$methodName,
						_ref2$renderCountProp = _ref2.renderCountProp,
						renderCountProp =
							_ref2$renderCountProp === void 0
								? undefined
								: _ref2$renderCountProp,
						_ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
						shouldHandleStateChanges =
							_ref2$shouldHandleSta === void 0
								? true
								: _ref2$shouldHandleSta,
						_ref2$storeKey = _ref2.storeKey,
						storeKey =
							_ref2$storeKey === void 0
								? 'store'
								: _ref2$storeKey,
						_ref2$withRef = _ref2.withRef,
						withRef =
							_ref2$withRef === void 0 ? false : _ref2$withRef,
						_ref2$forwardRef = _ref2.forwardRef,
						forwardRef =
							_ref2$forwardRef === void 0
								? false
								: _ref2$forwardRef,
						_ref2$context = _ref2.context,
						context =
							_ref2$context === void 0
								? _Context__WEBPACK_IMPORTED_MODULE_7__.ReactReduxContext
								: _ref2$context,
						connectOptions = ( 0,
						_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[
							'default'
						] )( _ref2, _excluded );

					if ( true ) {
						if ( renderCountProp !== undefined ) {
							throw new Error(
								'renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension'
							);
						}

						if ( withRef ) {
							throw new Error(
								'withRef is removed. To access the wrapped instance, use a ref on the connected component'
							);
						}

						var customStoreWarningMessage =
							'To use a custom Redux store for specific components, create a custom React context with ' +
							"React.createContext(), and pass the context object to React Redux's Provider and specific components" +
							' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' +
							'You may also pass a {context : MyContext} option to connect';

						if ( storeKey !== 'store' ) {
							throw new Error(
								'storeKey has been removed and does not do anything. ' +
									customStoreWarningMessage
							);
						}
					}

					var Context = context;
					return function wrapWithConnect( WrappedComponent ) {
						if (
							true &&
							! ( 0,
							react_is__WEBPACK_IMPORTED_MODULE_4__.isValidElementType )(
								WrappedComponent
							)
						) {
							throw new Error(
								'You must pass a component to the function returned by ' +
									( methodName +
										'. Instead received ' +
										stringifyComponent( WrappedComponent ) )
							);
						}

						var wrappedComponentName =
							WrappedComponent.displayName ||
							WrappedComponent.name ||
							'Component';
						var displayName =
							getDisplayName( wrappedComponentName );

						var selectorFactoryOptions = ( 0,
						_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
							'default'
						] )( {}, connectOptions, {
							getDisplayName: getDisplayName,
							methodName: methodName,
							renderCountProp: renderCountProp,
							shouldHandleStateChanges: shouldHandleStateChanges,
							storeKey: storeKey,
							displayName: displayName,
							wrappedComponentName: wrappedComponentName,
							WrappedComponent: WrappedComponent,
						} );

						var pure = connectOptions.pure;

						function createChildSelector( store ) {
							return selectorFactory(
								store.dispatch,
								selectorFactoryOptions
							);
						} // If we aren't running in "pure" mode, we don't want to memoize values.
						// To avoid conditionally calling hooks, we fall back to a tiny wrapper
						// that just executes the given callback immediately.

						var usePureOnlyMemo = pure
							? react__WEBPACK_IMPORTED_MODULE_3__.useMemo
							: function ( callback ) {
									return callback();
							  };

						function ConnectFunction( props ) {
							var _useMemo = ( 0,
								react__WEBPACK_IMPORTED_MODULE_3__.useMemo )(
									function () {
										// Distinguish between actual "data" props that were passed to the wrapper component,
										// and values needed to control behavior (forwarded refs, alternate context instances).
										// To maintain the wrapperProps object reference, memoize this destructuring.
										var reactReduxForwardedRef =
												props.reactReduxForwardedRef,
											wrapperProps = ( 0,
											_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[
												'default'
											] )( props, _excluded2 );

										return [
											props.context,
											reactReduxForwardedRef,
											wrapperProps,
										];
									},
									[ props ]
								),
								propsContext = _useMemo[ 0 ],
								reactReduxForwardedRef = _useMemo[ 1 ],
								wrapperProps = _useMemo[ 2 ];

							var ContextToUse = ( 0,
							react__WEBPACK_IMPORTED_MODULE_3__.useMemo )(
								function () {
									// Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
									// Memoize the check that determines which context instance we should use.
									return propsContext &&
										propsContext.Consumer &&
										( 0,
										react_is__WEBPACK_IMPORTED_MODULE_4__.isContextConsumer )(
											/*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(
												propsContext.Consumer,
												null
											)
										)
										? propsContext
										: Context;
								},
								[ propsContext, Context ]
							); // Retrieve the store and ancestor subscription via context, if available

							var contextValue = ( 0,
							react__WEBPACK_IMPORTED_MODULE_3__.useContext )(
								ContextToUse
							); // The store _must_ exist as either a prop or in context.
							// We'll check to see if it _looks_ like a Redux store first.
							// This allows us to pass through a `store` prop that is just a plain value.

							var didStoreComeFromProps =
								Boolean( props.store ) &&
								Boolean( props.store.getState ) &&
								Boolean( props.store.dispatch );
							var didStoreComeFromContext =
								Boolean( contextValue ) &&
								Boolean( contextValue.store );

							if (
								true &&
								! didStoreComeFromProps &&
								! didStoreComeFromContext
							) {
								throw new Error(
									'Could not find "store" in the context of ' +
										( '"' +
											displayName +
											'". Either wrap the root component in a <Provider>, ' ) +
										'or pass a custom React context provider to <Provider> and the corresponding ' +
										( 'React context consumer to ' +
											displayName +
											' in connect options.' )
								);
							} // Based on the previous check, one of these must be true

							var store = didStoreComeFromProps
								? props.store
								: contextValue.store;
							var childPropsSelector = ( 0,
							react__WEBPACK_IMPORTED_MODULE_3__.useMemo )(
								function () {
									// The child props selector needs the store reference as an input.
									// Re-create this selector whenever the store changes.
									return createChildSelector( store );
								},
								[ store ]
							);

							var _useMemo2 = ( 0,
								react__WEBPACK_IMPORTED_MODULE_3__.useMemo )(
									function () {
										if ( ! shouldHandleStateChanges )
											return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
										// connected to the store via props shouldn't use subscription from context, or vice versa.

										// This Subscription's source should match where store came from: props vs. context. A component
										// connected to the store via props shouldn't use subscription from context, or vice versa.
										var subscription = ( 0,
										_utils_Subscription__WEBPACK_IMPORTED_MODULE_5__.createSubscription )(
											store,
											didStoreComeFromProps
												? null
												: contextValue.subscription
										); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
										// the middle of the notification loop, where `subscription` will then be null. This can
										// probably be avoided if Subscription's listeners logic is changed to not call listeners
										// that have been unsubscribed in the  middle of the notification loop.

										// `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
										// the middle of the notification loop, where `subscription` will then be null. This can
										// probably be avoided if Subscription's listeners logic is changed to not call listeners
										// that have been unsubscribed in the  middle of the notification loop.
										var notifyNestedSubs =
											subscription.notifyNestedSubs.bind(
												subscription
											);
										return [
											subscription,
											notifyNestedSubs,
										];
									},
									[
										store,
										didStoreComeFromProps,
										contextValue,
									]
								),
								subscription = _useMemo2[ 0 ],
								notifyNestedSubs = _useMemo2[ 1 ]; // Determine what {store, subscription} value should be put into nested context, if necessary,
							// and memoize that value to avoid unnecessary context updates.

							var overriddenContextValue = ( 0,
							react__WEBPACK_IMPORTED_MODULE_3__.useMemo )(
								function () {
									if ( didStoreComeFromProps ) {
										// This component is directly subscribed to a store from props.
										// We don't want descendants reading from this store - pass down whatever
										// the existing context value is from the nearest connected ancestor.
										return contextValue;
									} // Otherwise, put this component's subscription instance into context, so that
									// connected descendants won't update until after this component is done

									return ( 0,
									_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
										'default'
									] )( {}, contextValue, {
										subscription: subscription,
									} );
								},
								[
									didStoreComeFromProps,
									contextValue,
									subscription,
								]
							); // We need to force this wrapper component to re-render whenever a Redux store update
							// causes a change to the calculated child component props (or we caught an error in mapState)

							var _useReducer = ( 0,
								react__WEBPACK_IMPORTED_MODULE_3__.useReducer )(
									storeStateUpdatesReducer,
									EMPTY_ARRAY,
									initStateUpdates
								),
								_useReducer$ = _useReducer[ 0 ],
								previousStateUpdateResult = _useReducer$[ 0 ],
								forceComponentUpdateDispatch = _useReducer[ 1 ]; // Propagate any mapState/mapDispatch errors upwards

							if (
								previousStateUpdateResult &&
								previousStateUpdateResult.error
							) {
								throw previousStateUpdateResult.error;
							} // Set up refs to coordinate values between the subscription effect and the render logic

							var lastChildProps = ( 0,
							react__WEBPACK_IMPORTED_MODULE_3__.useRef )();
							var lastWrapperProps = ( 0,
							react__WEBPACK_IMPORTED_MODULE_3__.useRef )(
								wrapperProps
							);
							var childPropsFromStoreUpdate = ( 0,
							react__WEBPACK_IMPORTED_MODULE_3__.useRef )();
							var renderIsScheduled = ( 0,
							react__WEBPACK_IMPORTED_MODULE_3__.useRef )(
								false
							);
							var actualChildProps = usePureOnlyMemo(
								function () {
									// Tricky logic here:
									// - This render may have been triggered by a Redux store update that produced new child props
									// - However, we may have gotten new wrapper props after that
									// If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
									// But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
									// So, we'll use the child props from store update only if the wrapper props are the same as last time.
									if (
										childPropsFromStoreUpdate.current &&
										wrapperProps ===
											lastWrapperProps.current
									) {
										return childPropsFromStoreUpdate.current;
									} // TODO We're reading the store directly in render() here. Bad idea?
									// This will likely cause Bad Things (TM) to happen in Concurrent Mode.
									// Note that we do this because on renders _not_ caused by store updates, we need the latest store state
									// to determine what the child props should be.

									return childPropsSelector(
										store.getState(),
										wrapperProps
									);
								},
								[
									store,
									previousStateUpdateResult,
									wrapperProps,
								]
							); // We need this to execute synchronously every time we re-render. However, React warns
							// about useLayoutEffect in SSR, so we try to detect environment and fall back to
							// just useEffect instead to avoid the warning, since neither will run anyway.

							useIsomorphicLayoutEffectWithArgs(
								captureWrapperProps,
								[
									lastWrapperProps,
									lastChildProps,
									renderIsScheduled,
									wrapperProps,
									actualChildProps,
									childPropsFromStoreUpdate,
									notifyNestedSubs,
								]
							); // Our re-subscribe logic only runs when the store/subscription setup changes

							useIsomorphicLayoutEffectWithArgs(
								subscribeUpdates,
								[
									shouldHandleStateChanges,
									store,
									subscription,
									childPropsSelector,
									lastWrapperProps,
									lastChildProps,
									renderIsScheduled,
									childPropsFromStoreUpdate,
									notifyNestedSubs,
									forceComponentUpdateDispatch,
								],
								[ store, subscription, childPropsSelector ]
							); // Now that all that's done, we can finally try to actually render the child component.
							// We memoize the elements for the rendered child component as an optimization.

							var renderedWrappedComponent = ( 0,
							react__WEBPACK_IMPORTED_MODULE_3__.useMemo )(
								function () {
									return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(
										WrappedComponent,
										( 0,
										_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
											'default'
										] )( {}, actualChildProps, {
											ref: reactReduxForwardedRef,
										} )
									);
								},
								[
									reactReduxForwardedRef,
									WrappedComponent,
									actualChildProps,
								]
							); // If React sees the exact same element reference as last time, it bails out of re-rendering
							// that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

							var renderedChild = ( 0,
							react__WEBPACK_IMPORTED_MODULE_3__.useMemo )(
								function () {
									if ( shouldHandleStateChanges ) {
										// If this component is subscribed to store updates, we need to pass its own
										// subscription instance down to our descendants. That means rendering the same
										// Context instance, and putting a different value into the context.
										return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(
											ContextToUse.Provider,
											{
												value: overriddenContextValue,
											},
											renderedWrappedComponent
										);
									}

									return renderedWrappedComponent;
								},
								[
									ContextToUse,
									renderedWrappedComponent,
									overriddenContextValue,
								]
							);
							return renderedChild;
						} // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.

						var Connect = pure
							? react__WEBPACK_IMPORTED_MODULE_3___default().memo(
									ConnectFunction
							  )
							: ConnectFunction;
						Connect.WrappedComponent = WrappedComponent;
						Connect.displayName = ConnectFunction.displayName =
							displayName;

						if ( forwardRef ) {
							var forwarded =
								react__WEBPACK_IMPORTED_MODULE_3___default().forwardRef(
									function forwardConnectRef( props, ref ) {
										return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createElement(
											Connect,
											( 0,
											_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
												'default'
											] )( {}, props, {
												reactReduxForwardedRef: ref,
											} )
										);
									}
								);
							forwarded.displayName = displayName;
							forwarded.WrappedComponent = WrappedComponent;
							return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(
								forwarded,
								WrappedComponent
							);
						}

						return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_2___default()(
							Connect,
							WrappedComponent
						);
					};
				}

				/***/
			},

		/***/ './node_modules/react-redux/es/connect/connect.js':
			/*!********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/connect.js ***!
  \********************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ createConnect: () =>
							/* binding */ createConnect,
						/* harmony export */ default: () =>
							__WEBPACK_DEFAULT_EXPORT__,
						/* harmony export */
					}
				);
				/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! @babel/runtime/helpers/esm/extends */ './node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js'
					);
				/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ './node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'
					);
				/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! ../components/connectAdvanced */ './node_modules/react-redux/es/components/connectAdvanced.js'
					);
				/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						/*! ../utils/shallowEqual */ './node_modules/react-redux/es/utils/shallowEqual.js'
					);
				/* harmony import */ var _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						/*! ./mapDispatchToProps */ './node_modules/react-redux/es/connect/mapDispatchToProps.js'
					);
				/* harmony import */ var _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__ =
					__webpack_require__(
						/*! ./mapStateToProps */ './node_modules/react-redux/es/connect/mapStateToProps.js'
					);
				/* harmony import */ var _mergeProps__WEBPACK_IMPORTED_MODULE_6__ =
					__webpack_require__(
						/*! ./mergeProps */ './node_modules/react-redux/es/connect/mergeProps.js'
					);
				/* harmony import */ var _selectorFactory__WEBPACK_IMPORTED_MODULE_7__ =
					__webpack_require__(
						/*! ./selectorFactory */ './node_modules/react-redux/es/connect/selectorFactory.js'
					);

				var _excluded = [
					'pure',
					'areStatesEqual',
					'areOwnPropsEqual',
					'areStatePropsEqual',
					'areMergedPropsEqual',
				];

				/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

				function match( arg, factories, name ) {
					for ( var i = factories.length - 1; i >= 0; i-- ) {
						var result = factories[ i ]( arg );
						if ( result ) return result;
					}

					return function ( dispatch, options ) {
						throw new Error(
							'Invalid value of type ' +
								typeof arg +
								' for ' +
								name +
								' argument when connecting component ' +
								options.wrappedComponentName +
								'.'
						);
					};
				}

				function strictEqual( a, b ) {
					return a === b;
				} // createConnect with default args builds the 'official' connect behavior. Calling it with
				// different options opens up some testing and extensibility scenarios

				function createConnect( _temp ) {
					var _ref = _temp === void 0 ? {} : _temp,
						_ref$connectHOC = _ref.connectHOC,
						connectHOC =
							_ref$connectHOC === void 0
								? _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_2__[
										'default'
								  ]
								: _ref$connectHOC,
						_ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
						mapStateToPropsFactories =
							_ref$mapStateToPropsF === void 0
								? _mapStateToProps__WEBPACK_IMPORTED_MODULE_5__[
										'default'
								  ]
								: _ref$mapStateToPropsF,
						_ref$mapDispatchToPro =
							_ref.mapDispatchToPropsFactories,
						mapDispatchToPropsFactories =
							_ref$mapDispatchToPro === void 0
								? _mapDispatchToProps__WEBPACK_IMPORTED_MODULE_4__[
										'default'
								  ]
								: _ref$mapDispatchToPro,
						_ref$mergePropsFactor = _ref.mergePropsFactories,
						mergePropsFactories =
							_ref$mergePropsFactor === void 0
								? _mergeProps__WEBPACK_IMPORTED_MODULE_6__[
										'default'
								  ]
								: _ref$mergePropsFactor,
						_ref$selectorFactory = _ref.selectorFactory,
						selectorFactory =
							_ref$selectorFactory === void 0
								? _selectorFactory__WEBPACK_IMPORTED_MODULE_7__[
										'default'
								  ]
								: _ref$selectorFactory;

					return function connect(
						mapStateToProps,
						mapDispatchToProps,
						mergeProps,
						_ref2
					) {
						if ( _ref2 === void 0 ) {
							_ref2 = {};
						}

						var _ref3 = _ref2,
							_ref3$pure = _ref3.pure,
							pure = _ref3$pure === void 0 ? true : _ref3$pure,
							_ref3$areStatesEqual = _ref3.areStatesEqual,
							areStatesEqual =
								_ref3$areStatesEqual === void 0
									? strictEqual
									: _ref3$areStatesEqual,
							_ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
							areOwnPropsEqual =
								_ref3$areOwnPropsEqua === void 0
									? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__[
											'default'
									  ]
									: _ref3$areOwnPropsEqua,
							_ref3$areStatePropsEq = _ref3.areStatePropsEqual,
							areStatePropsEqual =
								_ref3$areStatePropsEq === void 0
									? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__[
											'default'
									  ]
									: _ref3$areStatePropsEq,
							_ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
							areMergedPropsEqual =
								_ref3$areMergedPropsE === void 0
									? _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_3__[
											'default'
									  ]
									: _ref3$areMergedPropsE,
							extraOptions = ( 0,
							_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__[
								'default'
							] )( _ref3, _excluded );

						var initMapStateToProps = match(
							mapStateToProps,
							mapStateToPropsFactories,
							'mapStateToProps'
						);
						var initMapDispatchToProps = match(
							mapDispatchToProps,
							mapDispatchToPropsFactories,
							'mapDispatchToProps'
						);
						var initMergeProps = match(
							mergeProps,
							mergePropsFactories,
							'mergeProps'
						);
						return connectHOC(
							selectorFactory,
							( 0,
							_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
								'default'
							] )(
								{
									// used in error messages
									methodName: 'connect',
									// used to compute Connect's displayName from the wrapped component's displayName.
									getDisplayName: function getDisplayName(
										name
									) {
										return 'Connect(' + name + ')';
									},
									// if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
									shouldHandleStateChanges:
										Boolean( mapStateToProps ),
									// passed through to selectorFactory
									initMapStateToProps: initMapStateToProps,
									initMapDispatchToProps:
										initMapDispatchToProps,
									initMergeProps: initMergeProps,
									pure: pure,
									areStatesEqual: areStatesEqual,
									areOwnPropsEqual: areOwnPropsEqual,
									areStatePropsEqual: areStatePropsEqual,
									areMergedPropsEqual: areMergedPropsEqual,
								},
								extraOptions
							)
						);
					};
				}
				/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
					/*#__PURE__*/ createConnect();

				/***/
			},

		/***/ './node_modules/react-redux/es/connect/mapDispatchToProps.js':
			/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapDispatchToProps.js ***!
  \*******************************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							__WEBPACK_DEFAULT_EXPORT__,
						/* harmony export */ whenMapDispatchToPropsIsFunction:
							() =>
								/* binding */ whenMapDispatchToPropsIsFunction,
						/* harmony export */ whenMapDispatchToPropsIsMissing:
							() => /* binding */ whenMapDispatchToPropsIsMissing,
						/* harmony export */ whenMapDispatchToPropsIsObject:
							() => /* binding */ whenMapDispatchToPropsIsObject,
						/* harmony export */
					}
				);
				/* harmony import */ var _utils_bindActionCreators__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! ../utils/bindActionCreators */ './node_modules/react-redux/es/utils/bindActionCreators.js'
					);
				/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! ./wrapMapToProps */ './node_modules/react-redux/es/connect/wrapMapToProps.js'
					);

				function whenMapDispatchToPropsIsFunction(
					mapDispatchToProps
				) {
					return typeof mapDispatchToProps === 'function'
						? ( 0,
						  _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__.wrapMapToPropsFunc )(
								mapDispatchToProps,
								'mapDispatchToProps'
						  )
						: undefined;
				}
				function whenMapDispatchToPropsIsMissing( mapDispatchToProps ) {
					return ! mapDispatchToProps
						? ( 0,
						  _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__.wrapMapToPropsConstant )(
								function ( dispatch ) {
									return {
										dispatch: dispatch,
									};
								}
						  )
						: undefined;
				}
				function whenMapDispatchToPropsIsObject( mapDispatchToProps ) {
					return mapDispatchToProps &&
						typeof mapDispatchToProps === 'object'
						? ( 0,
						  _wrapMapToProps__WEBPACK_IMPORTED_MODULE_1__.wrapMapToPropsConstant )(
								function ( dispatch ) {
									return ( 0,
									_utils_bindActionCreators__WEBPACK_IMPORTED_MODULE_0__[
										'default'
									] )( mapDispatchToProps, dispatch );
								}
						  )
						: undefined;
				}
				/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
					[
						whenMapDispatchToPropsIsFunction,
						whenMapDispatchToPropsIsMissing,
						whenMapDispatchToPropsIsObject,
					];

				/***/
			},

		/***/ './node_modules/react-redux/es/connect/mapStateToProps.js':
			/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mapStateToProps.js ***!
  \****************************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							__WEBPACK_DEFAULT_EXPORT__,
						/* harmony export */ whenMapStateToPropsIsFunction:
							() => /* binding */ whenMapStateToPropsIsFunction,
						/* harmony export */ whenMapStateToPropsIsMissing: () =>
							/* binding */ whenMapStateToPropsIsMissing,
						/* harmony export */
					}
				);
				/* harmony import */ var _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! ./wrapMapToProps */ './node_modules/react-redux/es/connect/wrapMapToProps.js'
					);

				function whenMapStateToPropsIsFunction( mapStateToProps ) {
					return typeof mapStateToProps === 'function'
						? ( 0,
						  _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsFunc )(
								mapStateToProps,
								'mapStateToProps'
						  )
						: undefined;
				}
				function whenMapStateToPropsIsMissing( mapStateToProps ) {
					return ! mapStateToProps
						? ( 0,
						  _wrapMapToProps__WEBPACK_IMPORTED_MODULE_0__.wrapMapToPropsConstant )(
								function () {
									return {};
								}
						  )
						: undefined;
				}
				/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
					[
						whenMapStateToPropsIsFunction,
						whenMapStateToPropsIsMissing,
					];

				/***/
			},

		/***/ './node_modules/react-redux/es/connect/mergeProps.js':
			/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/connect/mergeProps.js ***!
  \***********************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							__WEBPACK_DEFAULT_EXPORT__,
						/* harmony export */ defaultMergeProps: () =>
							/* binding */ defaultMergeProps,
						/* harmony export */ whenMergePropsIsFunction: () =>
							/* binding */ whenMergePropsIsFunction,
						/* harmony export */ whenMergePropsIsOmitted: () =>
							/* binding */ whenMergePropsIsOmitted,
						/* harmony export */ wrapMergePropsFunc: () =>
							/* binding */ wrapMergePropsFunc,
						/* harmony export */
					}
				);
				/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! @babel/runtime/helpers/esm/extends */ './node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js'
					);
				/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! ../utils/verifyPlainObject */ './node_modules/react-redux/es/utils/verifyPlainObject.js'
					);

				function defaultMergeProps(
					stateProps,
					dispatchProps,
					ownProps
				) {
					return ( 0,
					_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
						'default'
					] )( {}, ownProps, stateProps, dispatchProps );
				}
				function wrapMergePropsFunc( mergeProps ) {
					return function initMergePropsProxy( dispatch, _ref ) {
						var displayName = _ref.displayName,
							pure = _ref.pure,
							areMergedPropsEqual = _ref.areMergedPropsEqual;
						var hasRunOnce = false;
						var mergedProps;
						return function mergePropsProxy(
							stateProps,
							dispatchProps,
							ownProps
						) {
							var nextMergedProps = mergeProps(
								stateProps,
								dispatchProps,
								ownProps
							);

							if ( hasRunOnce ) {
								if (
									! pure ||
									! areMergedPropsEqual(
										nextMergedProps,
										mergedProps
									)
								)
									mergedProps = nextMergedProps;
							} else {
								hasRunOnce = true;
								mergedProps = nextMergedProps;
								if ( true )
									( 0,
									_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_1__[
										'default'
									] )(
										mergedProps,
										displayName,
										'mergeProps'
									);
							}

							return mergedProps;
						};
					};
				}
				function whenMergePropsIsFunction( mergeProps ) {
					return typeof mergeProps === 'function'
						? wrapMergePropsFunc( mergeProps )
						: undefined;
				}
				function whenMergePropsIsOmitted( mergeProps ) {
					return ! mergeProps
						? function () {
								return defaultMergeProps;
						  }
						: undefined;
				}
				/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
					[ whenMergePropsIsFunction, whenMergePropsIsOmitted ];

				/***/
			},

		/***/ './node_modules/react-redux/es/connect/selectorFactory.js':
			/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/selectorFactory.js ***!
  \****************************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ finalPropsSelectorFactory,
						/* harmony export */ impureFinalPropsSelectorFactory:
							() => /* binding */ impureFinalPropsSelectorFactory,
						/* harmony export */ pureFinalPropsSelectorFactory:
							() => /* binding */ pureFinalPropsSelectorFactory,
						/* harmony export */
					}
				);
				/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ './node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js'
					);
				/* harmony import */ var _verifySubselectors__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! ./verifySubselectors */ './node_modules/react-redux/es/connect/verifySubselectors.js'
					);

				var _excluded = [
					'initMapStateToProps',
					'initMapDispatchToProps',
					'initMergeProps',
				];

				function impureFinalPropsSelectorFactory(
					mapStateToProps,
					mapDispatchToProps,
					mergeProps,
					dispatch
				) {
					return function impureFinalPropsSelector(
						state,
						ownProps
					) {
						return mergeProps(
							mapStateToProps( state, ownProps ),
							mapDispatchToProps( dispatch, ownProps ),
							ownProps
						);
					};
				}
				function pureFinalPropsSelectorFactory(
					mapStateToProps,
					mapDispatchToProps,
					mergeProps,
					dispatch,
					_ref
				) {
					var areStatesEqual = _ref.areStatesEqual,
						areOwnPropsEqual = _ref.areOwnPropsEqual,
						areStatePropsEqual = _ref.areStatePropsEqual;
					var hasRunAtLeastOnce = false;
					var state;
					var ownProps;
					var stateProps;
					var dispatchProps;
					var mergedProps;

					function handleFirstCall( firstState, firstOwnProps ) {
						state = firstState;
						ownProps = firstOwnProps;
						stateProps = mapStateToProps( state, ownProps );
						dispatchProps = mapDispatchToProps(
							dispatch,
							ownProps
						);
						mergedProps = mergeProps(
							stateProps,
							dispatchProps,
							ownProps
						);
						hasRunAtLeastOnce = true;
						return mergedProps;
					}

					function handleNewPropsAndNewState() {
						stateProps = mapStateToProps( state, ownProps );
						if ( mapDispatchToProps.dependsOnOwnProps )
							dispatchProps = mapDispatchToProps(
								dispatch,
								ownProps
							);
						mergedProps = mergeProps(
							stateProps,
							dispatchProps,
							ownProps
						);
						return mergedProps;
					}

					function handleNewProps() {
						if ( mapStateToProps.dependsOnOwnProps )
							stateProps = mapStateToProps( state, ownProps );
						if ( mapDispatchToProps.dependsOnOwnProps )
							dispatchProps = mapDispatchToProps(
								dispatch,
								ownProps
							);
						mergedProps = mergeProps(
							stateProps,
							dispatchProps,
							ownProps
						);
						return mergedProps;
					}

					function handleNewState() {
						var nextStateProps = mapStateToProps( state, ownProps );
						var statePropsChanged = ! areStatePropsEqual(
							nextStateProps,
							stateProps
						);
						stateProps = nextStateProps;
						if ( statePropsChanged )
							mergedProps = mergeProps(
								stateProps,
								dispatchProps,
								ownProps
							);
						return mergedProps;
					}

					function handleSubsequentCalls( nextState, nextOwnProps ) {
						var propsChanged = ! areOwnPropsEqual(
							nextOwnProps,
							ownProps
						);
						var stateChanged = ! areStatesEqual(
							nextState,
							state,
							nextOwnProps,
							ownProps
						);
						state = nextState;
						ownProps = nextOwnProps;
						if ( propsChanged && stateChanged )
							return handleNewPropsAndNewState();
						if ( propsChanged ) return handleNewProps();
						if ( stateChanged ) return handleNewState();
						return mergedProps;
					}

					return function pureFinalPropsSelector(
						nextState,
						nextOwnProps
					) {
						return hasRunAtLeastOnce
							? handleSubsequentCalls( nextState, nextOwnProps )
							: handleFirstCall( nextState, nextOwnProps );
					};
				} // TODO: Add more comments
				// If pure is true, the selector returned by selectorFactory will memoize its results,
				// allowing connectAdvanced's shouldComponentUpdate to return false if final
				// props have not changed. If false, the selector will always return a new
				// object and shouldComponentUpdate will always return true.

				function finalPropsSelectorFactory( dispatch, _ref2 ) {
					var initMapStateToProps = _ref2.initMapStateToProps,
						initMapDispatchToProps = _ref2.initMapDispatchToProps,
						initMergeProps = _ref2.initMergeProps,
						options = ( 0,
						_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__[
							'default'
						] )( _ref2, _excluded );

					var mapStateToProps = initMapStateToProps(
						dispatch,
						options
					);
					var mapDispatchToProps = initMapDispatchToProps(
						dispatch,
						options
					);
					var mergeProps = initMergeProps( dispatch, options );

					if ( true ) {
						( 0,
						_verifySubselectors__WEBPACK_IMPORTED_MODULE_1__[
							'default'
						] )(
							mapStateToProps,
							mapDispatchToProps,
							mergeProps,
							options.displayName
						);
					}

					var selectorFactory = options.pure
						? pureFinalPropsSelectorFactory
						: impureFinalPropsSelectorFactory;
					return selectorFactory(
						mapStateToProps,
						mapDispatchToProps,
						mergeProps,
						dispatch,
						options
					);
				}

				/***/
			},

		/***/ './node_modules/react-redux/es/connect/verifySubselectors.js':
			/*!*******************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/verifySubselectors.js ***!
  \*******************************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ verifySubselectors,
						/* harmony export */
					}
				);
				/* harmony import */ var _utils_warning__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! ../utils/warning */ './node_modules/react-redux/es/utils/warning.js'
					);

				function verify( selector, methodName, displayName ) {
					if ( ! selector ) {
						throw new Error(
							'Unexpected value for ' +
								methodName +
								' in ' +
								displayName +
								'.'
						);
					} else if (
						methodName === 'mapStateToProps' ||
						methodName === 'mapDispatchToProps'
					) {
						if (
							! Object.prototype.hasOwnProperty.call(
								selector,
								'dependsOnOwnProps'
							)
						) {
							( 0,
							_utils_warning__WEBPACK_IMPORTED_MODULE_0__[
								'default'
							] )(
								'The selector for ' +
									methodName +
									' of ' +
									displayName +
									' did not specify a value for dependsOnOwnProps.'
							);
						}
					}
				}

				function verifySubselectors(
					mapStateToProps,
					mapDispatchToProps,
					mergeProps,
					displayName
				) {
					verify( mapStateToProps, 'mapStateToProps', displayName );
					verify(
						mapDispatchToProps,
						'mapDispatchToProps',
						displayName
					);
					verify( mergeProps, 'mergeProps', displayName );
				}

				/***/
			},

		/***/ './node_modules/react-redux/es/connect/wrapMapToProps.js':
			/*!***************************************************************!*\
  !*** ./node_modules/react-redux/es/connect/wrapMapToProps.js ***!
  \***************************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ getDependsOnOwnProps: () =>
							/* binding */ getDependsOnOwnProps,
						/* harmony export */ wrapMapToPropsConstant: () =>
							/* binding */ wrapMapToPropsConstant,
						/* harmony export */ wrapMapToPropsFunc: () =>
							/* binding */ wrapMapToPropsFunc,
						/* harmony export */
					}
				);
				/* harmony import */ var _utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! ../utils/verifyPlainObject */ './node_modules/react-redux/es/utils/verifyPlainObject.js'
					);

				function wrapMapToPropsConstant( getConstant ) {
					return function initConstantSelector( dispatch, options ) {
						var constant = getConstant( dispatch, options );

						function constantSelector() {
							return constant;
						}

						constantSelector.dependsOnOwnProps = false;
						return constantSelector;
					};
				} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
				// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
				// whether mapToProps needs to be invoked when props have changed.
				//
				// A length of one signals that mapToProps does not depend on props from the parent component.
				// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
				// therefore not reporting its length accurately..

				function getDependsOnOwnProps( mapToProps ) {
					return mapToProps.dependsOnOwnProps !== null &&
						mapToProps.dependsOnOwnProps !== undefined
						? Boolean( mapToProps.dependsOnOwnProps )
						: mapToProps.length !== 1;
				} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
				// this function wraps mapToProps in a proxy function which does several things:
				//
				//  * Detects whether the mapToProps function being called depends on props, which
				//    is used by selectorFactory to decide if it should reinvoke on props changes.
				//
				//  * On first call, handles mapToProps if returns another function, and treats that
				//    new function as the true mapToProps for subsequent calls.
				//
				//  * On first call, verifies the first result is a plain object, in order to warn
				//    the developer that their mapToProps function is not returning a valid result.
				//

				function wrapMapToPropsFunc( mapToProps, methodName ) {
					return function initProxySelector( dispatch, _ref ) {
						var displayName = _ref.displayName;

						var proxy = function mapToPropsProxy(
							stateOrDispatch,
							ownProps
						) {
							return proxy.dependsOnOwnProps
								? proxy.mapToProps( stateOrDispatch, ownProps )
								: proxy.mapToProps( stateOrDispatch );
						}; // allow detectFactoryAndVerify to get ownProps

						proxy.dependsOnOwnProps = true;

						proxy.mapToProps = function detectFactoryAndVerify(
							stateOrDispatch,
							ownProps
						) {
							proxy.mapToProps = mapToProps;
							proxy.dependsOnOwnProps =
								getDependsOnOwnProps( mapToProps );
							var props = proxy( stateOrDispatch, ownProps );

							if ( typeof props === 'function' ) {
								proxy.mapToProps = props;
								proxy.dependsOnOwnProps =
									getDependsOnOwnProps( props );
								props = proxy( stateOrDispatch, ownProps );
							}

							if ( true )
								( 0,
								_utils_verifyPlainObject__WEBPACK_IMPORTED_MODULE_0__[
									'default'
								] )( props, displayName, methodName );
							return props;
						};

						return proxy;
					};
				}

				/***/
			},

		/***/ './node_modules/react-redux/es/exports.js':
			/*!************************************************!*\
  !*** ./node_modules/react-redux/es/exports.js ***!
  \************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ Provider: () =>
							/* reexport safe */ _components_Provider__WEBPACK_IMPORTED_MODULE_0__[
								'default'
							],
						/* harmony export */ ReactReduxContext: () =>
							/* reexport safe */ _components_Context__WEBPACK_IMPORTED_MODULE_2__.ReactReduxContext,
						/* harmony export */ connect: () =>
							/* reexport safe */ _connect_connect__WEBPACK_IMPORTED_MODULE_3__[
								'default'
							],
						/* harmony export */ connectAdvanced: () =>
							/* reexport safe */ _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__[
								'default'
							],
						/* harmony export */ createDispatchHook: () =>
							/* reexport safe */ _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__.createDispatchHook,
						/* harmony export */ createSelectorHook: () =>
							/* reexport safe */ _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__.createSelectorHook,
						/* harmony export */ createStoreHook: () =>
							/* reexport safe */ _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__.createStoreHook,
						/* harmony export */ shallowEqual: () =>
							/* reexport safe */ _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_7__[
								'default'
							],
						/* harmony export */ useDispatch: () =>
							/* reexport safe */ _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__.useDispatch,
						/* harmony export */ useSelector: () =>
							/* reexport safe */ _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__.useSelector,
						/* harmony export */ useStore: () =>
							/* reexport safe */ _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__.useStore,
						/* harmony export */
					}
				);
				/* harmony import */ var _components_Provider__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! ./components/Provider */ './node_modules/react-redux/es/components/Provider.js'
					);
				/* harmony import */ var _components_connectAdvanced__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! ./components/connectAdvanced */ './node_modules/react-redux/es/components/connectAdvanced.js'
					);
				/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! ./components/Context */ './node_modules/react-redux/es/components/Context.js'
					);
				/* harmony import */ var _connect_connect__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						/*! ./connect/connect */ './node_modules/react-redux/es/connect/connect.js'
					);
				/* harmony import */ var _hooks_useDispatch__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						/*! ./hooks/useDispatch */ './node_modules/react-redux/es/hooks/useDispatch.js'
					);
				/* harmony import */ var _hooks_useSelector__WEBPACK_IMPORTED_MODULE_5__ =
					__webpack_require__(
						/*! ./hooks/useSelector */ './node_modules/react-redux/es/hooks/useSelector.js'
					);
				/* harmony import */ var _hooks_useStore__WEBPACK_IMPORTED_MODULE_6__ =
					__webpack_require__(
						/*! ./hooks/useStore */ './node_modules/react-redux/es/hooks/useStore.js'
					);
				/* harmony import */ var _utils_shallowEqual__WEBPACK_IMPORTED_MODULE_7__ =
					__webpack_require__(
						/*! ./utils/shallowEqual */ './node_modules/react-redux/es/utils/shallowEqual.js'
					);

				/***/
			},

		/***/ './node_modules/react-redux/es/hooks/useDispatch.js':
			/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useDispatch.js ***!
  \**********************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ createDispatchHook: () =>
							/* binding */ createDispatchHook,
						/* harmony export */ useDispatch: () =>
							/* binding */ useDispatch,
						/* harmony export */
					}
				);
				/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! ../components/Context */ './node_modules/react-redux/es/components/Context.js'
					);
				/* harmony import */ var _useStore__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! ./useStore */ './node_modules/react-redux/es/hooks/useStore.js'
					);

				/**
				 * Hook factory, which creates a `useDispatch` hook bound to a given context.
				 *
				 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
				 * @returns {Function} A `useDispatch` hook bound to the specified context.
				 */

				function createDispatchHook( context ) {
					if ( context === void 0 ) {
						context =
							_components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext;
					}

					var useStore =
						context ===
						_components_Context__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext
							? _useStore__WEBPACK_IMPORTED_MODULE_1__.useStore
							: ( 0,
							  _useStore__WEBPACK_IMPORTED_MODULE_1__.createStoreHook )(
									context
							  );
					return function useDispatch() {
						var store = useStore();
						return store.dispatch;
					};
				}
				/**
				 * A hook to access the redux `dispatch` function.
				 *
				 * @returns {any|function} redux store's `dispatch` function
				 *
				 * @example
				 *
				 * import React, { useCallback } from 'react'
				 * import { useDispatch } from 'react-redux'
				 *
				 * export const CounterComponent = ({ value }) => {
				 *   const dispatch = useDispatch()
				 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
				 *   return (
				 *     <div>
				 *       <span>{value}</span>
				 *       <button onClick={increaseCounter}>Increase counter</button>
				 *     </div>
				 *   )
				 * }
				 */

				var useDispatch = /*#__PURE__*/ createDispatchHook();

				/***/
			},

		/***/ './node_modules/react-redux/es/hooks/useReduxContext.js':
			/*!**************************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useReduxContext.js ***!
  \**************************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ useReduxContext: () =>
							/* binding */ useReduxContext,
						/* harmony export */
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__( /*! react */ 'react' );
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(
						react__WEBPACK_IMPORTED_MODULE_0__
					);
				/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! ../components/Context */ './node_modules/react-redux/es/components/Context.js'
					);

				/**
				 * A hook to access the value of the `ReactReduxContext`. This is a low-level
				 * hook that you should usually not need to call directly.
				 *
				 * @returns {any} the value of the `ReactReduxContext`
				 *
				 * @example
				 *
				 * import React from 'react'
				 * import { useReduxContext } from 'react-redux'
				 *
				 * export const CounterComponent = ({ value }) => {
				 *   const { store } = useReduxContext()
				 *   return <div>{store.getState()}</div>
				 * }
				 */

				function useReduxContext() {
					var contextValue = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useContext )(
						_components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext
					);

					if ( true && ! contextValue ) {
						throw new Error(
							'could not find react-redux context value; please ensure the component is wrapped in a <Provider>'
						);
					}

					return contextValue;
				}

				/***/
			},

		/***/ './node_modules/react-redux/es/hooks/useSelector.js':
			/*!**********************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useSelector.js ***!
  \**********************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ createSelectorHook: () =>
							/* binding */ createSelectorHook,
						/* harmony export */ useSelector: () =>
							/* binding */ useSelector,
						/* harmony export */
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__( /*! react */ 'react' );
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(
						react__WEBPACK_IMPORTED_MODULE_0__
					);
				/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! ./useReduxContext */ './node_modules/react-redux/es/hooks/useReduxContext.js'
					);
				/* harmony import */ var _utils_Subscription__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! ../utils/Subscription */ './node_modules/react-redux/es/utils/Subscription.js'
					);
				/* harmony import */ var _utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						/*! ../utils/useIsomorphicLayoutEffect */ './node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js'
					);
				/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						/*! ../components/Context */ './node_modules/react-redux/es/components/Context.js'
					);

				var refEquality = function refEquality( a, b ) {
					return a === b;
				};

				function useSelectorWithStoreAndSubscription(
					selector,
					equalityFn,
					store,
					contextSub
				) {
					var _useReducer = ( 0,
						react__WEBPACK_IMPORTED_MODULE_0__.useReducer )(
							function ( s ) {
								return s + 1;
							},
							0
						),
						forceRender = _useReducer[ 1 ];

					var subscription = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useMemo )(
						function () {
							return ( 0,
							_utils_Subscription__WEBPACK_IMPORTED_MODULE_2__.createSubscription )(
								store,
								contextSub
							);
						},
						[ store, contextSub ]
					);
					var latestSubscriptionCallbackError = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )();
					var latestSelector = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )();
					var latestStoreState = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )();
					var latestSelectedState = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )();
					var storeState = store.getState();
					var selectedState;

					try {
						if (
							selector !== latestSelector.current ||
							storeState !== latestStoreState.current ||
							latestSubscriptionCallbackError.current
						) {
							var newSelectedState = selector( storeState ); // ensure latest selected state is reused so that a custom equality function can result in identical references

							if (
								latestSelectedState.current === undefined ||
								! equalityFn(
									newSelectedState,
									latestSelectedState.current
								)
							) {
								selectedState = newSelectedState;
							} else {
								selectedState = latestSelectedState.current;
							}
						} else {
							selectedState = latestSelectedState.current;
						}
					} catch ( err ) {
						if ( latestSubscriptionCallbackError.current ) {
							err.message +=
								'\nThe error may be correlated with this previous error:\n' +
								latestSubscriptionCallbackError.current.stack +
								'\n\n';
						}

						throw err;
					}

					( 0,
					_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect )(
						function () {
							latestSelector.current = selector;
							latestStoreState.current = storeState;
							latestSelectedState.current = selectedState;
							latestSubscriptionCallbackError.current = undefined;
						}
					);
					( 0,
					_utils_useIsomorphicLayoutEffect__WEBPACK_IMPORTED_MODULE_3__.useIsomorphicLayoutEffect )(
						function () {
							function checkForUpdates() {
								try {
									var newStoreState = store.getState(); // Avoid calling selector multiple times if the store's state has not changed

									if (
										newStoreState ===
										latestStoreState.current
									) {
										return;
									}

									var _newSelectedState =
										latestSelector.current( newStoreState );

									if (
										equalityFn(
											_newSelectedState,
											latestSelectedState.current
										)
									) {
										return;
									}

									latestSelectedState.current =
										_newSelectedState;
									latestStoreState.current = newStoreState;
								} catch ( err ) {
									// we ignore all errors here, since when the component
									// is re-rendered, the selectors are called again, and
									// will throw again, if neither props nor store state
									// changed
									latestSubscriptionCallbackError.current =
										err;
								}

								forceRender();
							}

							subscription.onStateChange = checkForUpdates;
							subscription.trySubscribe();
							checkForUpdates();
							return function () {
								return subscription.tryUnsubscribe();
							};
						},
						[ store, subscription ]
					);
					return selectedState;
				}
				/**
				 * Hook factory, which creates a `useSelector` hook bound to a given context.
				 *
				 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
				 * @returns {Function} A `useSelector` hook bound to the specified context.
				 */

				function createSelectorHook( context ) {
					if ( context === void 0 ) {
						context =
							_components_Context__WEBPACK_IMPORTED_MODULE_4__.ReactReduxContext;
					}

					var useReduxContext =
						context ===
						_components_Context__WEBPACK_IMPORTED_MODULE_4__.ReactReduxContext
							? _useReduxContext__WEBPACK_IMPORTED_MODULE_1__.useReduxContext
							: function () {
									return ( 0,
									react__WEBPACK_IMPORTED_MODULE_0__.useContext )(
										context
									);
							  };
					return function useSelector( selector, equalityFn ) {
						if ( equalityFn === void 0 ) {
							equalityFn = refEquality;
						}

						if ( true ) {
							if ( ! selector ) {
								throw new Error(
									'You must pass a selector to useSelector'
								);
							}

							if ( typeof selector !== 'function' ) {
								throw new Error(
									'You must pass a function as a selector to useSelector'
								);
							}

							if ( typeof equalityFn !== 'function' ) {
								throw new Error(
									'You must pass a function as an equality function to useSelector'
								);
							}
						}

						var _useReduxContext = useReduxContext(),
							store = _useReduxContext.store,
							contextSub = _useReduxContext.subscription;

						var selectedState = useSelectorWithStoreAndSubscription(
							selector,
							equalityFn,
							store,
							contextSub
						);
						( 0, react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue )(
							selectedState
						);
						return selectedState;
					};
				}
				/**
				 * A hook to access the redux store's state. This hook takes a selector function
				 * as an argument. The selector is called with the store state.
				 *
				 * This hook takes an optional equality comparison function as the second parameter
				 * that allows you to customize the way the selected state is compared to determine
				 * whether the component needs to be re-rendered.
				 *
				 * @param {Function} selector the selector function
				 * @param {Function=} equalityFn the function that will be used to determine equality
				 *
				 * @returns {any} the selected state
				 *
				 * @example
				 *
				 * import React from 'react'
				 * import { useSelector } from 'react-redux'
				 *
				 * export const CounterComponent = () => {
				 *   const counter = useSelector(state => state.counter)
				 *   return <div>{counter}</div>
				 * }
				 */

				var useSelector = /*#__PURE__*/ createSelectorHook();

				/***/
			},

		/***/ './node_modules/react-redux/es/hooks/useStore.js':
			/*!*******************************************************!*\
  !*** ./node_modules/react-redux/es/hooks/useStore.js ***!
  \*******************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ createStoreHook: () =>
							/* binding */ createStoreHook,
						/* harmony export */ useStore: () =>
							/* binding */ useStore,
						/* harmony export */
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__( /*! react */ 'react' );
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(
						react__WEBPACK_IMPORTED_MODULE_0__
					);
				/* harmony import */ var _components_Context__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! ../components/Context */ './node_modules/react-redux/es/components/Context.js'
					);
				/* harmony import */ var _useReduxContext__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! ./useReduxContext */ './node_modules/react-redux/es/hooks/useReduxContext.js'
					);

				/**
				 * Hook factory, which creates a `useStore` hook bound to a given context.
				 *
				 * @param {React.Context} [context=ReactReduxContext] Context passed to your `<Provider>`.
				 * @returns {Function} A `useStore` hook bound to the specified context.
				 */

				function createStoreHook( context ) {
					if ( context === void 0 ) {
						context =
							_components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext;
					}

					var useReduxContext =
						context ===
						_components_Context__WEBPACK_IMPORTED_MODULE_1__.ReactReduxContext
							? _useReduxContext__WEBPACK_IMPORTED_MODULE_2__.useReduxContext
							: function () {
									return ( 0,
									react__WEBPACK_IMPORTED_MODULE_0__.useContext )(
										context
									);
							  };
					return function useStore() {
						var _useReduxContext = useReduxContext(),
							store = _useReduxContext.store;

						return store;
					};
				}
				/**
				 * A hook to access the redux store.
				 *
				 * @returns {any} the redux store
				 *
				 * @example
				 *
				 * import React from 'react'
				 * import { useStore } from 'react-redux'
				 *
				 * export const ExampleComponent = () => {
				 *   const store = useStore()
				 *   return <div>{store.getState()}</div>
				 * }
				 */

				var useStore = /*#__PURE__*/ createStoreHook();

				/***/
			},

		/***/ './node_modules/react-redux/es/index.js':
			/*!**********************************************!*\
  !*** ./node_modules/react-redux/es/index.js ***!
  \**********************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ Provider: () =>
							/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.Provider,
						/* harmony export */ ReactReduxContext: () =>
							/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.ReactReduxContext,
						/* harmony export */ batch: () =>
							/* reexport safe */ _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates,
						/* harmony export */ connect: () =>
							/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.connect,
						/* harmony export */ connectAdvanced: () =>
							/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.connectAdvanced,
						/* harmony export */ createDispatchHook: () =>
							/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.createDispatchHook,
						/* harmony export */ createSelectorHook: () =>
							/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.createSelectorHook,
						/* harmony export */ createStoreHook: () =>
							/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.createStoreHook,
						/* harmony export */ shallowEqual: () =>
							/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.shallowEqual,
						/* harmony export */ useDispatch: () =>
							/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.useDispatch,
						/* harmony export */ useSelector: () =>
							/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.useSelector,
						/* harmony export */ useStore: () =>
							/* reexport safe */ _exports__WEBPACK_IMPORTED_MODULE_0__.useStore,
						/* harmony export */
					}
				);
				/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! ./exports */ './node_modules/react-redux/es/exports.js'
					);
				/* harmony import */ var _utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! ./utils/reactBatchedUpdates */ './node_modules/react-redux/es/utils/reactBatchedUpdates.js'
					);
				/* harmony import */ var _utils_batch__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! ./utils/batch */ './node_modules/react-redux/es/utils/batch.js'
					);

				// Enable batched updates in our subscriptions for use
				// with standard React renderers (ReactDOM, React Native)

				( 0, _utils_batch__WEBPACK_IMPORTED_MODULE_2__.setBatch )(
					_utils_reactBatchedUpdates__WEBPACK_IMPORTED_MODULE_1__.unstable_batchedUpdates
				);

				/***/
			},

		/***/ './node_modules/react-redux/es/utils/Subscription.js':
			/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/Subscription.js ***!
  \***********************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ createSubscription: () =>
							/* binding */ createSubscription,
						/* harmony export */
					}
				);
				/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! ./batch */ './node_modules/react-redux/es/utils/batch.js'
					);
				// encapsulates the subscription logic for connecting a component to the redux store, as
				// well as nesting subscriptions of descendant components, so that we can ensure the
				// ancestor components re-render before descendants

				function createListenerCollection() {
					var batch = ( 0,
					_batch__WEBPACK_IMPORTED_MODULE_0__.getBatch )();
					var first = null;
					var last = null;
					return {
						clear: function clear() {
							first = null;
							last = null;
						},
						notify: function notify() {
							batch( function () {
								var listener = first;

								while ( listener ) {
									listener.callback();
									listener = listener.next;
								}
							} );
						},
						get: function get() {
							var listeners = [];
							var listener = first;

							while ( listener ) {
								listeners.push( listener );
								listener = listener.next;
							}

							return listeners;
						},
						subscribe: function subscribe( callback ) {
							var isSubscribed = true;
							var listener = ( last = {
								callback: callback,
								next: null,
								prev: last,
							} );

							if ( listener.prev ) {
								listener.prev.next = listener;
							} else {
								first = listener;
							}

							return function unsubscribe() {
								if ( ! isSubscribed || first === null ) return;
								isSubscribed = false;

								if ( listener.next ) {
									listener.next.prev = listener.prev;
								} else {
									last = listener.prev;
								}

								if ( listener.prev ) {
									listener.prev.next = listener.next;
								} else {
									first = listener.next;
								}
							};
						},
					};
				}

				var nullListeners = {
					notify: function notify() {},
					get: function get() {
						return [];
					},
				};
				function createSubscription( store, parentSub ) {
					var unsubscribe;
					var listeners = nullListeners;

					function addNestedSub( listener ) {
						trySubscribe();
						return listeners.subscribe( listener );
					}

					function notifyNestedSubs() {
						listeners.notify();
					}

					function handleChangeWrapper() {
						if ( subscription.onStateChange ) {
							subscription.onStateChange();
						}
					}

					function isSubscribed() {
						return Boolean( unsubscribe );
					}

					function trySubscribe() {
						if ( ! unsubscribe ) {
							unsubscribe = parentSub
								? parentSub.addNestedSub( handleChangeWrapper )
								: store.subscribe( handleChangeWrapper );
							listeners = createListenerCollection();
						}
					}

					function tryUnsubscribe() {
						if ( unsubscribe ) {
							unsubscribe();
							unsubscribe = undefined;
							listeners.clear();
							listeners = nullListeners;
						}
					}

					var subscription = {
						addNestedSub: addNestedSub,
						notifyNestedSubs: notifyNestedSubs,
						handleChangeWrapper: handleChangeWrapper,
						isSubscribed: isSubscribed,
						trySubscribe: trySubscribe,
						tryUnsubscribe: tryUnsubscribe,
						getListeners: function getListeners() {
							return listeners;
						},
					};
					return subscription;
				}

				/***/
			},

		/***/ './node_modules/react-redux/es/utils/batch.js':
			/*!****************************************************!*\
  !*** ./node_modules/react-redux/es/utils/batch.js ***!
  \****************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ getBatch: () =>
							/* binding */ getBatch,
						/* harmony export */ setBatch: () =>
							/* binding */ setBatch,
						/* harmony export */
					}
				);
				// Default to a dummy "batch" implementation that just runs the callback
				function defaultNoopBatch( callback ) {
					callback();
				}

				var batch = defaultNoopBatch; // Allow injecting another batching function later

				var setBatch = function setBatch( newBatch ) {
					return ( batch = newBatch );
				}; // Supply a getter just to skip dealing with ESM bindings

				var getBatch = function getBatch() {
					return batch;
				};

				/***/
			},

		/***/ './node_modules/react-redux/es/utils/bindActionCreators.js':
			/*!*****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/bindActionCreators.js ***!
  \*****************************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ bindActionCreators,
						/* harmony export */
					}
				);
				function bindActionCreators( actionCreators, dispatch ) {
					var boundActionCreators = {};

					var _loop = function _loop( key ) {
						var actionCreator = actionCreators[ key ];

						if ( typeof actionCreator === 'function' ) {
							boundActionCreators[ key ] = function () {
								return dispatch(
									actionCreator.apply( void 0, arguments )
								);
							};
						}
					};

					for ( var key in actionCreators ) {
						_loop( key );
					}

					return boundActionCreators;
				}

				/***/
			},

		/***/ './node_modules/react-redux/es/utils/isPlainObject.js':
			/*!************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/isPlainObject.js ***!
  \************************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ isPlainObject,
						/* harmony export */
					}
				);
				/**
				 * @param {any} obj The object to inspect.
				 * @returns {boolean} True if the argument appears to be a plain object.
				 */
				function isPlainObject( obj ) {
					if ( typeof obj !== 'object' || obj === null ) return false;
					var proto = Object.getPrototypeOf( obj );
					if ( proto === null ) return true;
					var baseProto = proto;

					while ( Object.getPrototypeOf( baseProto ) !== null ) {
						baseProto = Object.getPrototypeOf( baseProto );
					}

					return proto === baseProto;
				}

				/***/
			},

		/***/ './node_modules/react-redux/es/utils/reactBatchedUpdates.js':
			/*!******************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/reactBatchedUpdates.js ***!
  \******************************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ unstable_batchedUpdates: () =>
							/* reexport safe */ react_dom__WEBPACK_IMPORTED_MODULE_0__.unstable_batchedUpdates,
						/* harmony export */
					}
				);
				/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__( /*! react-dom */ 'react-dom' );
				/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(
						react_dom__WEBPACK_IMPORTED_MODULE_0__
					);
				/* eslint-disable import/no-unresolved */

				/***/
			},

		/***/ './node_modules/react-redux/es/utils/shallowEqual.js':
			/*!***********************************************************!*\
  !*** ./node_modules/react-redux/es/utils/shallowEqual.js ***!
  \***********************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ shallowEqual,
						/* harmony export */
					}
				);
				function is( x, y ) {
					if ( x === y ) {
						return x !== 0 || y !== 0 || 1 / x === 1 / y;
					} else {
						return x !== x && y !== y;
					}
				}

				function shallowEqual( objA, objB ) {
					if ( is( objA, objB ) ) return true;

					if (
						typeof objA !== 'object' ||
						objA === null ||
						typeof objB !== 'object' ||
						objB === null
					) {
						return false;
					}

					var keysA = Object.keys( objA );
					var keysB = Object.keys( objB );
					if ( keysA.length !== keysB.length ) return false;

					for ( var i = 0; i < keysA.length; i++ ) {
						if (
							! Object.prototype.hasOwnProperty.call(
								objB,
								keysA[ i ]
							) ||
							! is( objA[ keysA[ i ] ], objB[ keysA[ i ] ] )
						) {
							return false;
						}
					}

					return true;
				}

				/***/
			},

		/***/ './node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js':
			/*!************************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js ***!
  \************************************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ useIsomorphicLayoutEffect: () =>
							/* binding */ useIsomorphicLayoutEffect,
						/* harmony export */
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__( /*! react */ 'react' );
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(
						react__WEBPACK_IMPORTED_MODULE_0__
					);
				// React currently throws a warning when using useLayoutEffect on the server.
				// To get around it, we can conditionally useEffect on the server (no-op) and
				// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
				// subscription callback always has the selector from the latest render commit
				// available, otherwise a store update may happen between render and the effect,
				// which may cause missed updates; we also must ensure the store subscription
				// is created synchronously, otherwise a store update may occur before the
				// subscription is created and an inconsistent state may be observed

				var useIsomorphicLayoutEffect =
					typeof window !== 'undefined' &&
					typeof window.document !== 'undefined' &&
					typeof window.document.createElement !== 'undefined'
						? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect
						: react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

				/***/
			},

		/***/ './node_modules/react-redux/es/utils/verifyPlainObject.js':
			/*!****************************************************************!*\
  !*** ./node_modules/react-redux/es/utils/verifyPlainObject.js ***!
  \****************************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ verifyPlainObject,
						/* harmony export */
					}
				);
				/* harmony import */ var _isPlainObject__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! ./isPlainObject */ './node_modules/react-redux/es/utils/isPlainObject.js'
					);
				/* harmony import */ var _warning__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! ./warning */ './node_modules/react-redux/es/utils/warning.js'
					);

				function verifyPlainObject( value, displayName, methodName ) {
					if (
						! ( 0,
						_isPlainObject__WEBPACK_IMPORTED_MODULE_0__[
							'default'
						] )( value )
					) {
						( 0,
						_warning__WEBPACK_IMPORTED_MODULE_1__[ 'default' ] )(
							methodName +
								'() in ' +
								displayName +
								' must return a plain object. Instead received ' +
								value +
								'.'
						);
					}
				}

				/***/
			},

		/***/ './node_modules/react-redux/es/utils/warning.js':
			/*!******************************************************!*\
  !*** ./node_modules/react-redux/es/utils/warning.js ***!
  \******************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ warning,
						/* harmony export */
					}
				);
				/**
				 * Prints a warning in the console if it exists.
				 *
				 * @param {String} message The warning message.
				 * @returns {void}
				 */
				function warning( message ) {
					/* eslint-disable no-console */
					if (
						typeof console !== 'undefined' &&
						typeof console.error === 'function'
					) {
						console.error( message );
					}
					/* eslint-enable no-console */

					try {
						// This error was thrown as a convenience so that if you enable
						// "break on all exceptions" in your console,
						// it would pause the execution at this line.
						throw new Error( message );
						/* eslint-disable no-empty */
					} catch ( e ) {}
					/* eslint-enable no-empty */
				}

				/***/
			},

		/***/ './node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js':
			/*!************************************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************************************/
			/***/ ( __unused_webpack_module, exports ) => {
				'use strict';
				/** @license React v17.0.2
				 * react-is.development.js
				 *
				 * Copyright (c) Facebook, Inc. and its affiliates.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */

				if ( true ) {
					( function () {
						'use strict';

						// ATTENTION
						// When adding new symbols to this file,
						// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
						// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
						// nor polyfill, then a plain number is used for performance.
						var REACT_ELEMENT_TYPE = 0xeac7;
						var REACT_PORTAL_TYPE = 0xeaca;
						var REACT_FRAGMENT_TYPE = 0xeacb;
						var REACT_STRICT_MODE_TYPE = 0xeacc;
						var REACT_PROFILER_TYPE = 0xead2;
						var REACT_PROVIDER_TYPE = 0xeacd;
						var REACT_CONTEXT_TYPE = 0xeace;
						var REACT_FORWARD_REF_TYPE = 0xead0;
						var REACT_SUSPENSE_TYPE = 0xead1;
						var REACT_SUSPENSE_LIST_TYPE = 0xead8;
						var REACT_MEMO_TYPE = 0xead3;
						var REACT_LAZY_TYPE = 0xead4;
						var REACT_BLOCK_TYPE = 0xead9;
						var REACT_SERVER_BLOCK_TYPE = 0xeada;
						var REACT_FUNDAMENTAL_TYPE = 0xead5;
						var REACT_SCOPE_TYPE = 0xead7;
						var REACT_OPAQUE_ID_TYPE = 0xeae0;
						var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
						var REACT_OFFSCREEN_TYPE = 0xeae2;
						var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

						if ( typeof Symbol === 'function' && Symbol.for ) {
							var symbolFor = Symbol.for;
							REACT_ELEMENT_TYPE = symbolFor( 'react.element' );
							REACT_PORTAL_TYPE = symbolFor( 'react.portal' );
							REACT_FRAGMENT_TYPE = symbolFor( 'react.fragment' );
							REACT_STRICT_MODE_TYPE =
								symbolFor( 'react.strict_mode' );
							REACT_PROFILER_TYPE = symbolFor( 'react.profiler' );
							REACT_PROVIDER_TYPE = symbolFor( 'react.provider' );
							REACT_CONTEXT_TYPE = symbolFor( 'react.context' );
							REACT_FORWARD_REF_TYPE =
								symbolFor( 'react.forward_ref' );
							REACT_SUSPENSE_TYPE = symbolFor( 'react.suspense' );
							REACT_SUSPENSE_LIST_TYPE = symbolFor(
								'react.suspense_list'
							);
							REACT_MEMO_TYPE = symbolFor( 'react.memo' );
							REACT_LAZY_TYPE = symbolFor( 'react.lazy' );
							REACT_BLOCK_TYPE = symbolFor( 'react.block' );
							REACT_SERVER_BLOCK_TYPE =
								symbolFor( 'react.server.block' );
							REACT_FUNDAMENTAL_TYPE =
								symbolFor( 'react.fundamental' );
							REACT_SCOPE_TYPE = symbolFor( 'react.scope' );
							REACT_OPAQUE_ID_TYPE =
								symbolFor( 'react.opaque.id' );
							REACT_DEBUG_TRACING_MODE_TYPE = symbolFor(
								'react.debug_trace_mode'
							);
							REACT_OFFSCREEN_TYPE =
								symbolFor( 'react.offscreen' );
							REACT_LEGACY_HIDDEN_TYPE = symbolFor(
								'react.legacy_hidden'
							);
						}

						// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

						var enableScopeAPI = false; // Experimental Create Event Handle API.

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
								type === REACT_DEBUG_TRACING_MODE_TYPE ||
								type === REACT_STRICT_MODE_TYPE ||
								type === REACT_SUSPENSE_TYPE ||
								type === REACT_SUSPENSE_LIST_TYPE ||
								type === REACT_LEGACY_HIDDEN_TYPE ||
								enableScopeAPI
							) {
								return true;
							}

							if ( typeof type === 'object' && type !== null ) {
								if (
									type.$$typeof === REACT_LAZY_TYPE ||
									type.$$typeof === REACT_MEMO_TYPE ||
									type.$$typeof === REACT_PROVIDER_TYPE ||
									type.$$typeof === REACT_CONTEXT_TYPE ||
									type.$$typeof === REACT_FORWARD_REF_TYPE ||
									type.$$typeof === REACT_FUNDAMENTAL_TYPE ||
									type.$$typeof === REACT_BLOCK_TYPE ||
									type[ 0 ] === REACT_SERVER_BLOCK_TYPE
								) {
									return true;
								}
							}

							return false;
						}

						function typeOf( object ) {
							if (
								typeof object === 'object' &&
								object !== null
							) {
								var $$typeof = object.$$typeof;

								switch ( $$typeof ) {
									case REACT_ELEMENT_TYPE:
										var type = object.type;

										switch ( type ) {
											case REACT_FRAGMENT_TYPE:
											case REACT_PROFILER_TYPE:
											case REACT_STRICT_MODE_TYPE:
											case REACT_SUSPENSE_TYPE:
											case REACT_SUSPENSE_LIST_TYPE:
												return type;

											default:
												var $$typeofType =
													type && type.$$typeof;

												switch ( $$typeofType ) {
													case REACT_CONTEXT_TYPE:
													case REACT_FORWARD_REF_TYPE:
													case REACT_LAZY_TYPE:
													case REACT_MEMO_TYPE:
													case REACT_PROVIDER_TYPE:
														return $$typeofType;

													default:
														return $$typeof;
												}
										}

									case REACT_PORTAL_TYPE:
										return $$typeof;
								}
							}

							return undefined;
						}
						var ContextConsumer = REACT_CONTEXT_TYPE;
						var ContextProvider = REACT_PROVIDER_TYPE;
						var Element = REACT_ELEMENT_TYPE;
						var ForwardRef = REACT_FORWARD_REF_TYPE;
						var Fragment = REACT_FRAGMENT_TYPE;
						var Lazy = REACT_LAZY_TYPE;
						var Memo = REACT_MEMO_TYPE;
						var Portal = REACT_PORTAL_TYPE;
						var Profiler = REACT_PROFILER_TYPE;
						var StrictMode = REACT_STRICT_MODE_TYPE;
						var Suspense = REACT_SUSPENSE_TYPE;
						var hasWarnedAboutDeprecatedIsAsyncMode = false;
						var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

						function isAsyncMode( object ) {
							{
								if ( ! hasWarnedAboutDeprecatedIsAsyncMode ) {
									hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

									console[ 'warn' ](
										'The ReactIs.isAsyncMode() alias has been deprecated, ' +
											'and will be removed in React 18+.'
									);
								}
							}

							return false;
						}
						function isConcurrentMode( object ) {
							{
								if (
									! hasWarnedAboutDeprecatedIsConcurrentMode
								) {
									hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

									console[ 'warn' ](
										'The ReactIs.isConcurrentMode() alias has been deprecated, ' +
											'and will be removed in React 18+.'
									);
								}
							}

							return false;
						}
						function isContextConsumer( object ) {
							return typeOf( object ) === REACT_CONTEXT_TYPE;
						}
						function isContextProvider( object ) {
							return typeOf( object ) === REACT_PROVIDER_TYPE;
						}
						function isElement( object ) {
							return (
								typeof object === 'object' &&
								object !== null &&
								object.$$typeof === REACT_ELEMENT_TYPE
							);
						}
						function isForwardRef( object ) {
							return typeOf( object ) === REACT_FORWARD_REF_TYPE;
						}
						function isFragment( object ) {
							return typeOf( object ) === REACT_FRAGMENT_TYPE;
						}
						function isLazy( object ) {
							return typeOf( object ) === REACT_LAZY_TYPE;
						}
						function isMemo( object ) {
							return typeOf( object ) === REACT_MEMO_TYPE;
						}
						function isPortal( object ) {
							return typeOf( object ) === REACT_PORTAL_TYPE;
						}
						function isProfiler( object ) {
							return typeOf( object ) === REACT_PROFILER_TYPE;
						}
						function isStrictMode( object ) {
							return typeOf( object ) === REACT_STRICT_MODE_TYPE;
						}
						function isSuspense( object ) {
							return typeOf( object ) === REACT_SUSPENSE_TYPE;
						}

						exports.ContextConsumer = ContextConsumer;
						exports.ContextProvider = ContextProvider;
						exports.Element = Element;
						exports.ForwardRef = ForwardRef;
						exports.Fragment = Fragment;
						exports.Lazy = Lazy;
						exports.Memo = Memo;
						exports.Portal = Portal;
						exports.Profiler = Profiler;
						exports.StrictMode = StrictMode;
						exports.Suspense = Suspense;
						exports.isAsyncMode = isAsyncMode;
						exports.isConcurrentMode = isConcurrentMode;
						exports.isContextConsumer = isContextConsumer;
						exports.isContextProvider = isContextProvider;
						exports.isElement = isElement;
						exports.isForwardRef = isForwardRef;
						exports.isFragment = isFragment;
						exports.isLazy = isLazy;
						exports.isMemo = isMemo;
						exports.isPortal = isPortal;
						exports.isProfiler = isProfiler;
						exports.isStrictMode = isStrictMode;
						exports.isSuspense = isSuspense;
						exports.isValidElementType = isValidElementType;
						exports.typeOf = typeOf;
					} )();
				}

				/***/
			},

		/***/ './node_modules/react-redux/node_modules/react-is/index.js':
			/*!*****************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/react-is/index.js ***!
  \*****************************************************************/
			/***/ ( module, __unused_webpack_exports, __webpack_require__ ) => {
				'use strict';

				if ( false ) {
				} else {
					module.exports = __webpack_require__(
						/*! ./cjs/react-is.development.js */ './node_modules/react-redux/node_modules/react-is/cjs/react-is.development.js'
					);
				}

				/***/
			},

		/***/ './node_modules/react/cjs/react-jsx-runtime.development.js':
			/*!*****************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.development.js ***!
  \*****************************************************************/
			/***/ ( __unused_webpack_module, exports, __webpack_require__ ) => {
				'use strict';
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
				'use strict';

				if ( false ) {
				} else {
					module.exports = __webpack_require__(
						/*! ./cjs/react-jsx-runtime.development.js */ './node_modules/react/cjs/react-jsx-runtime.development.js'
					);
				}

				/***/
			},

		/***/ './node_modules/redux/es/redux.js':
			/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ __DO_NOT_USE__ActionTypes: () =>
							/* binding */ ActionTypes,
						/* harmony export */ applyMiddleware: () =>
							/* binding */ applyMiddleware,
						/* harmony export */ bindActionCreators: () =>
							/* binding */ bindActionCreators,
						/* harmony export */ combineReducers: () =>
							/* binding */ combineReducers,
						/* harmony export */ compose: () =>
							/* binding */ compose,
						/* harmony export */ createStore: () =>
							/* binding */ createStore,
						/* harmony export */ legacy_createStore: () =>
							/* binding */ legacy_createStore,
						/* harmony export */
					}
				);
				/* harmony import */ var _babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! @babel/runtime/helpers/esm/objectSpread2 */ './node_modules/@babel/runtime/helpers/esm/objectSpread2.js'
					);

				/**
				 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
				 *
				 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
				 * during build.
				 * @param {number} code
				 */
				function formatProdErrorMessage( code ) {
					return (
						'Minified Redux error #' +
						code +
						'; visit https://redux.js.org/Errors?code=' +
						code +
						' for the full message or ' +
						'use the non-minified dev environment for full errors. '
					);
				}

				// Inlined version of the `symbol-observable` polyfill
				var $$observable = ( function () {
					return (
						( typeof Symbol === 'function' && Symbol.observable ) ||
						'@@observable'
					);
				} )();

				/**
				 * These are private action types reserved by Redux.
				 * For any unknown actions, you must return the current state.
				 * If the current state is undefined, you must return the initial state.
				 * Do not reference these action types directly in your code.
				 */
				var randomString = function randomString() {
					return Math.random()
						.toString( 36 )
						.substring( 7 )
						.split( '' )
						.join( '.' );
				};

				var ActionTypes = {
					INIT: '@@redux/INIT' + randomString(),
					REPLACE: '@@redux/REPLACE' + randomString(),
					PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
						return '@@redux/PROBE_UNKNOWN_ACTION' + randomString();
					},
				};

				/**
				 * @param {any} obj The object to inspect.
				 * @returns {boolean} True if the argument appears to be a plain object.
				 */
				function isPlainObject( obj ) {
					if ( typeof obj !== 'object' || obj === null ) return false;
					var proto = obj;

					while ( Object.getPrototypeOf( proto ) !== null ) {
						proto = Object.getPrototypeOf( proto );
					}

					return Object.getPrototypeOf( obj ) === proto;
				}

				// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
				function miniKindOf( val ) {
					if ( val === void 0 ) return 'undefined';
					if ( val === null ) return 'null';
					var type = typeof val;

					switch ( type ) {
						case 'boolean':
						case 'string':
						case 'number':
						case 'symbol':
						case 'function': {
							return type;
						}
					}

					if ( Array.isArray( val ) ) return 'array';
					if ( isDate( val ) ) return 'date';
					if ( isError( val ) ) return 'error';
					var constructorName = ctorName( val );

					switch ( constructorName ) {
						case 'Symbol':
						case 'Promise':
						case 'WeakMap':
						case 'WeakSet':
						case 'Map':
						case 'Set':
							return constructorName;
					} // other

					return type
						.slice( 8, -1 )
						.toLowerCase()
						.replace( /\s/g, '' );
				}

				function ctorName( val ) {
					return typeof val.constructor === 'function'
						? val.constructor.name
						: null;
				}

				function isError( val ) {
					return (
						val instanceof Error ||
						( typeof val.message === 'string' &&
							val.constructor &&
							typeof val.constructor.stackTraceLimit ===
								'number' )
					);
				}

				function isDate( val ) {
					if ( val instanceof Date ) return true;
					return (
						typeof val.toDateString === 'function' &&
						typeof val.getDate === 'function' &&
						typeof val.setDate === 'function'
					);
				}

				function kindOf( val ) {
					var typeOfVal = typeof val;

					if ( true ) {
						typeOfVal = miniKindOf( val );
					}

					return typeOfVal;
				}

				/**
				 * @deprecated
				 *
				 * **We recommend using the `configureStore` method
				 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
				 *
				 * Redux Toolkit is our recommended approach for writing Redux logic today,
				 * including store setup, reducers, data fetching, and more.
				 *
				 * **For more details, please read this Redux docs page:**
				 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
				 *
				 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
				 * simplifies setup and helps avoid common bugs.
				 *
				 * You should not be using the `redux` core package by itself today, except for learning purposes.
				 * The `createStore` method from the core `redux` package will not be removed, but we encourage
				 * all users to migrate to using Redux Toolkit for all Redux code.
				 *
				 * If you want to use `createStore` without this visual deprecation warning, use
				 * the `legacy_createStore` import instead:
				 *
				 * `import { legacy_createStore as createStore} from 'redux'`
				 *
				 */

				function createStore( reducer, preloadedState, enhancer ) {
					var _ref2;

					if (
						( typeof preloadedState === 'function' &&
							typeof enhancer === 'function' ) ||
						( typeof enhancer === 'function' &&
							typeof arguments[ 3 ] === 'function' )
					) {
						throw new Error(
							false
								? 0
								: 'It looks like you are passing several store enhancers to ' +
								  'createStore(). This is not supported. Instead, compose them ' +
								  'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.'
						);
					}

					if (
						typeof preloadedState === 'function' &&
						typeof enhancer === 'undefined'
					) {
						enhancer = preloadedState;
						preloadedState = undefined;
					}

					if ( typeof enhancer !== 'undefined' ) {
						if ( typeof enhancer !== 'function' ) {
							throw new Error(
								false
									? 0
									: "Expected the enhancer to be a function. Instead, received: '" +
									  kindOf( enhancer ) +
									  "'"
							);
						}

						return enhancer( createStore )(
							reducer,
							preloadedState
						);
					}

					if ( typeof reducer !== 'function' ) {
						throw new Error(
							false
								? 0
								: "Expected the root reducer to be a function. Instead, received: '" +
								  kindOf( reducer ) +
								  "'"
						);
					}

					var currentReducer = reducer;
					var currentState = preloadedState;
					var currentListeners = [];
					var nextListeners = currentListeners;
					var isDispatching = false;
					/**
					 * This makes a shallow copy of currentListeners so we can use
					 * nextListeners as a temporary list while dispatching.
					 *
					 * This prevents any bugs around consumers calling
					 * subscribe/unsubscribe in the middle of a dispatch.
					 */

					function ensureCanMutateNextListeners() {
						if ( nextListeners === currentListeners ) {
							nextListeners = currentListeners.slice();
						}
					}
					/**
					 * Reads the state tree managed by the store.
					 *
					 * @returns {any} The current state tree of your application.
					 */

					function getState() {
						if ( isDispatching ) {
							throw new Error(
								false
									? 0
									: 'You may not call store.getState() while the reducer is executing. ' +
									  'The reducer has already received the state as an argument. ' +
									  'Pass it down from the top reducer instead of reading it from the store.'
							);
						}

						return currentState;
					}
					/**
					 * Adds a change listener. It will be called any time an action is dispatched,
					 * and some part of the state tree may potentially have changed. You may then
					 * call `getState()` to read the current state tree inside the callback.
					 *
					 * You may call `dispatch()` from a change listener, with the following
					 * caveats:
					 *
					 * 1. The subscriptions are snapshotted just before every `dispatch()` call.
					 * If you subscribe or unsubscribe while the listeners are being invoked, this
					 * will not have any effect on the `dispatch()` that is currently in progress.
					 * However, the next `dispatch()` call, whether nested or not, will use a more
					 * recent snapshot of the subscription list.
					 *
					 * 2. The listener should not expect to see all state changes, as the state
					 * might have been updated multiple times during a nested `dispatch()` before
					 * the listener is called. It is, however, guaranteed that all subscribers
					 * registered before the `dispatch()` started will be called with the latest
					 * state by the time it exits.
					 *
					 * @param {Function} listener A callback to be invoked on every dispatch.
					 * @returns {Function} A function to remove this change listener.
					 */

					function subscribe( listener ) {
						if ( typeof listener !== 'function' ) {
							throw new Error(
								false
									? 0
									: "Expected the listener to be a function. Instead, received: '" +
									  kindOf( listener ) +
									  "'"
							);
						}

						if ( isDispatching ) {
							throw new Error(
								false
									? 0
									: 'You may not call store.subscribe() while the reducer is executing. ' +
									  'If you would like to be notified after the store has been updated, subscribe from a ' +
									  'component and invoke store.getState() in the callback to access the latest state. ' +
									  'See https://redux.js.org/api/store#subscribelistener for more details.'
							);
						}

						var isSubscribed = true;
						ensureCanMutateNextListeners();
						nextListeners.push( listener );
						return function unsubscribe() {
							if ( ! isSubscribed ) {
								return;
							}

							if ( isDispatching ) {
								throw new Error(
									false
										? 0
										: 'You may not unsubscribe from a store listener while the reducer is executing. ' +
										  'See https://redux.js.org/api/store#subscribelistener for more details.'
								);
							}

							isSubscribed = false;
							ensureCanMutateNextListeners();
							var index = nextListeners.indexOf( listener );
							nextListeners.splice( index, 1 );
							currentListeners = null;
						};
					}
					/**
					 * Dispatches an action. It is the only way to trigger a state change.
					 *
					 * The `reducer` function, used to create the store, will be called with the
					 * current state tree and the given `action`. Its return value will
					 * be considered the **next** state of the tree, and the change listeners
					 * will be notified.
					 *
					 * The base implementation only supports plain object actions. If you want to
					 * dispatch a Promise, an Observable, a thunk, or something else, you need to
					 * wrap your store creating function into the corresponding middleware. For
					 * example, see the documentation for the `redux-thunk` package. Even the
					 * middleware will eventually dispatch plain object actions using this method.
					 *
					 * @param {Object} action A plain object representing “what changed”. It is
					 * a good idea to keep actions serializable so you can record and replay user
					 * sessions, or use the time travelling `redux-devtools`. An action must have
					 * a `type` property which may not be `undefined`. It is a good idea to use
					 * string constants for action types.
					 *
					 * @returns {Object} For convenience, the same action object you dispatched.
					 *
					 * Note that, if you use a custom middleware, it may wrap `dispatch()` to
					 * return something else (for example, a Promise you can await).
					 */

					function dispatch( action ) {
						if ( ! isPlainObject( action ) ) {
							throw new Error(
								false
									? 0
									: "Actions must be plain objects. Instead, the actual type was: '" +
									  kindOf( action ) +
									  "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples."
							);
						}

						if ( typeof action.type === 'undefined' ) {
							throw new Error(
								false
									? 0
									: 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.'
							);
						}

						if ( isDispatching ) {
							throw new Error(
								false ? 0 : 'Reducers may not dispatch actions.'
							);
						}

						try {
							isDispatching = true;
							currentState = currentReducer(
								currentState,
								action
							);
						} finally {
							isDispatching = false;
						}

						var listeners = ( currentListeners = nextListeners );

						for ( var i = 0; i < listeners.length; i++ ) {
							var listener = listeners[ i ];
							listener();
						}

						return action;
					}
					/**
					 * Replaces the reducer currently used by the store to calculate the state.
					 *
					 * You might need this if your app implements code splitting and you want to
					 * load some of the reducers dynamically. You might also need this if you
					 * implement a hot reloading mechanism for Redux.
					 *
					 * @param {Function} nextReducer The reducer for the store to use instead.
					 * @returns {void}
					 */

					function replaceReducer( nextReducer ) {
						if ( typeof nextReducer !== 'function' ) {
							throw new Error(
								false
									? 0
									: "Expected the nextReducer to be a function. Instead, received: '" +
									  kindOf( nextReducer )
							);
						}

						currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
						// Any reducers that existed in both the new and old rootReducer
						// will receive the previous state. This effectively populates
						// the new state tree with any relevant data from the old one.

						dispatch( {
							type: ActionTypes.REPLACE,
						} );
					}
					/**
					 * Interoperability point for observable/reactive libraries.
					 * @returns {observable} A minimal observable of state changes.
					 * For more information, see the observable proposal:
					 * https://github.com/tc39/proposal-observable
					 */

					function observable() {
						var _ref;

						var outerSubscribe = subscribe;
						return (
							( _ref = {
								/**
								 * The minimal observable subscription method.
								 * @param {Object} observer Any object that can be used as an observer.
								 * The observer object should have a `next` method.
								 * @returns {subscription} An object with an `unsubscribe` method that can
								 * be used to unsubscribe the observable from the store, and prevent further
								 * emission of values from the observable.
								 */
								subscribe: function subscribe( observer ) {
									if (
										typeof observer !== 'object' ||
										observer === null
									) {
										throw new Error(
											false
												? 0
												: "Expected the observer to be an object. Instead, received: '" +
												  kindOf( observer ) +
												  "'"
										);
									}

									function observeState() {
										if ( observer.next ) {
											observer.next( getState() );
										}
									}

									observeState();
									var unsubscribe =
										outerSubscribe( observeState );
									return {
										unsubscribe: unsubscribe,
									};
								},
							} ),
							( _ref[ $$observable ] = function () {
								return this;
							} ),
							_ref
						);
					} // When a store is created, an "INIT" action is dispatched so that every
					// reducer returns their initial state. This effectively populates
					// the initial state tree.

					dispatch( {
						type: ActionTypes.INIT,
					} );
					return (
						( _ref2 = {
							dispatch: dispatch,
							subscribe: subscribe,
							getState: getState,
							replaceReducer: replaceReducer,
						} ),
						( _ref2[ $$observable ] = observable ),
						_ref2
					);
				}
				/**
				 * Creates a Redux store that holds the state tree.
				 *
				 * **We recommend using `configureStore` from the
				 * `@reduxjs/toolkit` package**, which replaces `createStore`:
				 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
				 *
				 * The only way to change the data in the store is to call `dispatch()` on it.
				 *
				 * There should only be a single store in your app. To specify how different
				 * parts of the state tree respond to actions, you may combine several reducers
				 * into a single reducer function by using `combineReducers`.
				 *
				 * @param {Function} reducer A function that returns the next state tree, given
				 * the current state tree and the action to handle.
				 *
				 * @param {any} [preloadedState] The initial state. You may optionally specify it
				 * to hydrate the state from the server in universal apps, or to restore a
				 * previously serialized user session.
				 * If you use `combineReducers` to produce the root reducer function, this must be
				 * an object with the same shape as `combineReducers` keys.
				 *
				 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
				 * to enhance the store with third-party capabilities such as middleware,
				 * time travel, persistence, etc. The only store enhancer that ships with Redux
				 * is `applyMiddleware()`.
				 *
				 * @returns {Store} A Redux store that lets you read the state, dispatch actions
				 * and subscribe to changes.
				 */

				var legacy_createStore = createStore;

				/**
				 * Prints a warning in the console if it exists.
				 *
				 * @param {String} message The warning message.
				 * @returns {void}
				 */
				function warning( message ) {
					/* eslint-disable no-console */
					if (
						typeof console !== 'undefined' &&
						typeof console.error === 'function'
					) {
						console.error( message );
					}
					/* eslint-enable no-console */

					try {
						// This error was thrown as a convenience so that if you enable
						// "break on all exceptions" in your console,
						// it would pause the execution at this line.
						throw new Error( message );
					} catch ( e ) {} // eslint-disable-line no-empty
				}

				function getUnexpectedStateShapeWarningMessage(
					inputState,
					reducers,
					action,
					unexpectedKeyCache
				) {
					var reducerKeys = Object.keys( reducers );
					var argumentName =
						action && action.type === ActionTypes.INIT
							? 'preloadedState argument passed to createStore'
							: 'previous state received by the reducer';

					if ( reducerKeys.length === 0 ) {
						return (
							'Store does not have a valid reducer. Make sure the argument passed ' +
							'to combineReducers is an object whose values are reducers.'
						);
					}

					if ( ! isPlainObject( inputState ) ) {
						return (
							'The ' +
							argumentName +
							' has unexpected type of "' +
							kindOf( inputState ) +
							'". Expected argument to be an object with the following ' +
							( 'keys: "' + reducerKeys.join( '", "' ) + '"' )
						);
					}

					var unexpectedKeys = Object.keys( inputState ).filter(
						function ( key ) {
							return (
								! reducers.hasOwnProperty( key ) &&
								! unexpectedKeyCache[ key ]
							);
						}
					);
					unexpectedKeys.forEach( function ( key ) {
						unexpectedKeyCache[ key ] = true;
					} );
					if ( action && action.type === ActionTypes.REPLACE ) return;

					if ( unexpectedKeys.length > 0 ) {
						return (
							'Unexpected ' +
							( unexpectedKeys.length > 1 ? 'keys' : 'key' ) +
							' ' +
							( '"' +
								unexpectedKeys.join( '", "' ) +
								'" found in ' +
								argumentName +
								'. ' ) +
							'Expected to find one of the known reducer keys instead: ' +
							( '"' +
								reducerKeys.join( '", "' ) +
								'". Unexpected keys will be ignored.' )
						);
					}
				}

				function assertReducerShape( reducers ) {
					Object.keys( reducers ).forEach( function ( key ) {
						var reducer = reducers[ key ];
						var initialState = reducer( undefined, {
							type: ActionTypes.INIT,
						} );

						if ( typeof initialState === 'undefined' ) {
							throw new Error(
								false
									? 0
									: 'The slice reducer for key "' +
									  key +
									  '" returned undefined during initialization. ' +
									  'If the state passed to the reducer is undefined, you must ' +
									  'explicitly return the initial state. The initial state may ' +
									  "not be undefined. If you don't want to set a value for this reducer, " +
									  'you can use null instead of undefined.'
							);
						}

						if (
							typeof reducer( undefined, {
								type: ActionTypes.PROBE_UNKNOWN_ACTION(),
							} ) === 'undefined'
						) {
							throw new Error(
								false
									? 0
									: 'The slice reducer for key "' +
									  key +
									  '" returned undefined when probed with a random type. ' +
									  ( "Don't try to handle '" +
											ActionTypes.INIT +
											'\' or other actions in "redux/*" ' ) +
									  'namespace. They are considered private. Instead, you must return the ' +
									  'current state for any unknown actions, unless it is undefined, ' +
									  'in which case you must return the initial state, regardless of the ' +
									  'action type. The initial state may not be undefined, but can be null.'
							);
						}
					} );
				}
				/**
				 * Turns an object whose values are different reducer functions, into a single
				 * reducer function. It will call every child reducer, and gather their results
				 * into a single state object, whose keys correspond to the keys of the passed
				 * reducer functions.
				 *
				 * @param {Object} reducers An object whose values correspond to different
				 * reducer functions that need to be combined into one. One handy way to obtain
				 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
				 * undefined for any action. Instead, they should return their initial state
				 * if the state passed to them was undefined, and the current state for any
				 * unrecognized action.
				 *
				 * @returns {Function} A reducer function that invokes every reducer inside the
				 * passed object, and builds a state object with the same shape.
				 */

				function combineReducers( reducers ) {
					var reducerKeys = Object.keys( reducers );
					var finalReducers = {};

					for ( var i = 0; i < reducerKeys.length; i++ ) {
						var key = reducerKeys[ i ];

						if ( true ) {
							if ( typeof reducers[ key ] === 'undefined' ) {
								warning(
									'No reducer provided for key "' + key + '"'
								);
							}
						}

						if ( typeof reducers[ key ] === 'function' ) {
							finalReducers[ key ] = reducers[ key ];
						}
					}

					var finalReducerKeys = Object.keys( finalReducers ); // This is used to make sure we don't warn about the same
					// keys multiple times.

					var unexpectedKeyCache;

					if ( true ) {
						unexpectedKeyCache = {};
					}

					var shapeAssertionError;

					try {
						assertReducerShape( finalReducers );
					} catch ( e ) {
						shapeAssertionError = e;
					}

					return function combination( state, action ) {
						if ( state === void 0 ) {
							state = {};
						}

						if ( shapeAssertionError ) {
							throw shapeAssertionError;
						}

						if ( true ) {
							var warningMessage =
								getUnexpectedStateShapeWarningMessage(
									state,
									finalReducers,
									action,
									unexpectedKeyCache
								);

							if ( warningMessage ) {
								warning( warningMessage );
							}
						}

						var hasChanged = false;
						var nextState = {};

						for ( var _i = 0; _i < finalReducerKeys.length; _i++ ) {
							var _key = finalReducerKeys[ _i ];
							var reducer = finalReducers[ _key ];
							var previousStateForKey = state[ _key ];
							var nextStateForKey = reducer(
								previousStateForKey,
								action
							);

							if ( typeof nextStateForKey === 'undefined' ) {
								var actionType = action && action.type;
								throw new Error(
									false
										? 0
										: 'When called with an action of type ' +
										  ( actionType
												? '"' +
												  String( actionType ) +
												  '"'
												: '(unknown type)' ) +
										  ', the slice reducer for key "' +
										  _key +
										  '" returned undefined. ' +
										  'To ignore an action, you must explicitly return the previous state. ' +
										  'If you want this reducer to hold no value, you can return null instead of undefined.'
								);
							}

							nextState[ _key ] = nextStateForKey;
							hasChanged =
								hasChanged ||
								nextStateForKey !== previousStateForKey;
						}

						hasChanged =
							hasChanged ||
							finalReducerKeys.length !==
								Object.keys( state ).length;
						return hasChanged ? nextState : state;
					};
				}

				function bindActionCreator( actionCreator, dispatch ) {
					return function () {
						return dispatch(
							actionCreator.apply( this, arguments )
						);
					};
				}
				/**
				 * Turns an object whose values are action creators, into an object with the
				 * same keys, but with every function wrapped into a `dispatch` call so they
				 * may be invoked directly. This is just a convenience method, as you can call
				 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
				 *
				 * For convenience, you can also pass an action creator as the first argument,
				 * and get a dispatch wrapped function in return.
				 *
				 * @param {Function|Object} actionCreators An object whose values are action
				 * creator functions. One handy way to obtain it is to use ES6 `import * as`
				 * syntax. You may also pass a single function.
				 *
				 * @param {Function} dispatch The `dispatch` function available on your Redux
				 * store.
				 *
				 * @returns {Function|Object} The object mimicking the original object, but with
				 * every action creator wrapped into the `dispatch` call. If you passed a
				 * function as `actionCreators`, the return value will also be a single
				 * function.
				 */

				function bindActionCreators( actionCreators, dispatch ) {
					if ( typeof actionCreators === 'function' ) {
						return bindActionCreator( actionCreators, dispatch );
					}

					if (
						typeof actionCreators !== 'object' ||
						actionCreators === null
					) {
						throw new Error(
							false
								? 0
								: "bindActionCreators expected an object or a function, but instead received: '" +
								  kindOf( actionCreators ) +
								  "'. " +
								  'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
						);
					}

					var boundActionCreators = {};

					for ( var key in actionCreators ) {
						var actionCreator = actionCreators[ key ];

						if ( typeof actionCreator === 'function' ) {
							boundActionCreators[ key ] = bindActionCreator(
								actionCreator,
								dispatch
							);
						}
					}

					return boundActionCreators;
				}

				/**
				 * Composes single-argument functions from right to left. The rightmost
				 * function can take multiple arguments as it provides the signature for
				 * the resulting composite function.
				 *
				 * @param {...Function} funcs The functions to compose.
				 * @returns {Function} A function obtained by composing the argument functions
				 * from right to left. For example, compose(f, g, h) is identical to doing
				 * (...args) => f(g(h(...args))).
				 */
				function compose() {
					for (
						var _len = arguments.length,
							funcs = new Array( _len ),
							_key = 0;
						_key < _len;
						_key++
					) {
						funcs[ _key ] = arguments[ _key ];
					}

					if ( funcs.length === 0 ) {
						return function ( arg ) {
							return arg;
						};
					}

					if ( funcs.length === 1 ) {
						return funcs[ 0 ];
					}

					return funcs.reduce( function ( a, b ) {
						return function () {
							return a( b.apply( void 0, arguments ) );
						};
					} );
				}

				/**
				 * Creates a store enhancer that applies middleware to the dispatch method
				 * of the Redux store. This is handy for a variety of tasks, such as expressing
				 * asynchronous actions in a concise manner, or logging every action payload.
				 *
				 * See `redux-thunk` package as an example of the Redux middleware.
				 *
				 * Because middleware is potentially asynchronous, this should be the first
				 * store enhancer in the composition chain.
				 *
				 * Note that each middleware will be given the `dispatch` and `getState` functions
				 * as named arguments.
				 *
				 * @param {...Function} middlewares The middleware chain to be applied.
				 * @returns {Function} A store enhancer applying the middleware.
				 */

				function applyMiddleware() {
					for (
						var _len = arguments.length,
							middlewares = new Array( _len ),
							_key = 0;
						_key < _len;
						_key++
					) {
						middlewares[ _key ] = arguments[ _key ];
					}

					return function ( createStore ) {
						return function () {
							var store = createStore.apply( void 0, arguments );

							var _dispatch = function dispatch() {
								throw new Error(
									false
										? 0
										: 'Dispatching while constructing your middleware is not allowed. ' +
										  'Other middleware would not be applied to this dispatch.'
								);
							};

							var middlewareAPI = {
								getState: store.getState,
								dispatch: function dispatch() {
									return _dispatch.apply( void 0, arguments );
								},
							};
							var chain = middlewares.map(
								function ( middleware ) {
									return middleware( middlewareAPI );
								}
							);
							_dispatch = compose.apply(
								void 0,
								chain
							)( store.dispatch );
							return ( 0,
							_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[
								'default'
							] )(
								( 0,
								_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[
									'default'
								] )( {}, store ),
								{},
								{
									dispatch: _dispatch,
								}
							);
						};
					};
				}

				/***/
			},

		/***/ './node_modules/shallowequal/index.js':
			/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
			/***/ ( module ) => {
				//

				module.exports = function shallowEqual(
					objA,
					objB,
					compare,
					compareContext
				) {
					var ret = compare
						? compare.call( compareContext, objA, objB )
						: void 0;

					if ( ret !== void 0 ) {
						return !! ret;
					}

					if ( objA === objB ) {
						return true;
					}

					if (
						typeof objA !== 'object' ||
						! objA ||
						typeof objB !== 'object' ||
						! objB
					) {
						return false;
					}

					var keysA = Object.keys( objA );
					var keysB = Object.keys( objB );

					if ( keysA.length !== keysB.length ) {
						return false;
					}

					var bHasOwnProperty =
						Object.prototype.hasOwnProperty.bind( objB );

					// Test for A's keys different from B.
					for ( var idx = 0; idx < keysA.length; idx++ ) {
						var key = keysA[ idx ];

						if ( ! bHasOwnProperty( key ) ) {
							return false;
						}

						var valueA = objA[ key ];
						var valueB = objB[ key ];

						ret = compare
							? compare.call(
									compareContext,
									valueA,
									valueB,
									key
							  )
							: void 0;

						if (
							ret === false ||
							( ret === void 0 && valueA !== valueB )
						) {
							return false;
						}
					}

					return true;
				};

				/***/
			},

		/***/ './node_modules/styled-components/dist/styled-components.browser.esm.js':
			/*!******************************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.browser.esm.js ***!
  \******************************************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ ServerStyleSheet: () =>
							/* binding */ vt,
						/* harmony export */ StyleSheetConsumer: () =>
							/* binding */ Be,
						/* harmony export */ StyleSheetContext: () =>
							/* binding */ $e,
						/* harmony export */ StyleSheetManager: () =>
							/* binding */ Ye,
						/* harmony export */ ThemeConsumer: () =>
							/* binding */ tt,
						/* harmony export */ ThemeContext: () =>
							/* binding */ et,
						/* harmony export */ ThemeProvider: () =>
							/* binding */ ot,
						/* harmony export */ __PRIVATE__: () =>
							/* binding */ gt,
						/* harmony export */ createGlobalStyle: () =>
							/* binding */ ft,
						/* harmony export */ css: () => /* binding */ lt,
						/* harmony export */ default: () => /* binding */ dt,
						/* harmony export */ isStyledComponent: () =>
							/* binding */ se,
						/* harmony export */ keyframes: () => /* binding */ mt,
						/* harmony export */ styled: () => /* binding */ dt,
						/* harmony export */ useTheme: () => /* binding */ nt,
						/* harmony export */ version: () => /* binding */ v,
						/* harmony export */ withTheme: () => /* binding */ yt,
						/* harmony export */
					}
				);
				/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						/*! tslib */ './node_modules/styled-components/node_modules/tslib/tslib.es6.mjs'
					);
				/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! @emotion/is-prop-valid */ './node_modules/@emotion/is-prop-valid/dist/emotion-is-prop-valid.esm.js'
					);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__( /*! react */ 'react' );
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default =
					/*#__PURE__*/ __webpack_require__.n(
						react__WEBPACK_IMPORTED_MODULE_1__
					);
				/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! shallowequal */ './node_modules/shallowequal/index.js'
					);
				/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default =
					/*#__PURE__*/ __webpack_require__.n(
						shallowequal__WEBPACK_IMPORTED_MODULE_2__
					);
				/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_5__ =
					__webpack_require__(
						/*! stylis */ './node_modules/stylis/src/Enum.js'
					);
				/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_6__ =
					__webpack_require__(
						/*! stylis */ './node_modules/stylis/src/Middleware.js'
					);
				/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_7__ =
					__webpack_require__(
						/*! stylis */ './node_modules/stylis/src/Serializer.js'
					);
				/* harmony import */ var stylis__WEBPACK_IMPORTED_MODULE_8__ =
					__webpack_require__(
						/*! stylis */ './node_modules/stylis/src/Parser.js'
					);
				/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						/*! @emotion/unitless */ './node_modules/@emotion/unitless/dist/emotion-unitless.esm.js'
					);
				var f =
						( 'undefined' != typeof process &&
							void 0 !== process.env &&
							( process.env.REACT_APP_SC_ATTR ||
								process.env.SC_ATTR ) ) ||
						'data-styled',
					m = 'active',
					y = 'data-styled-version',
					v = '6.1.12',
					g = '/*!sc*/\n',
					S = 'undefined' != typeof window && 'HTMLElement' in window,
					w = Boolean(
						'boolean' == typeof SC_DISABLE_SPEEDY
							? SC_DISABLE_SPEEDY
							: 'undefined' != typeof process &&
							  void 0 !== process.env &&
							  void 0 !==
									process.env.REACT_APP_SC_DISABLE_SPEEDY &&
							  '' !== process.env.REACT_APP_SC_DISABLE_SPEEDY
							? 'false' !==
									process.env.REACT_APP_SC_DISABLE_SPEEDY &&
							  process.env.REACT_APP_SC_DISABLE_SPEEDY
							: 'undefined' != typeof process &&
							  void 0 !== process.env &&
							  void 0 !== process.env.SC_DISABLE_SPEEDY &&
							  '' !== process.env.SC_DISABLE_SPEEDY
							? 'false' !== process.env.SC_DISABLE_SPEEDY &&
							  process.env.SC_DISABLE_SPEEDY
							: 'production' !== 'development'
					),
					b = {},
					E = /invalid hook call/i,
					N = new Set(),
					P = function ( t, n ) {
						if ( true ) {
							var o = n
									? ' with the id of "'.concat( n, '"' )
									: '',
								s =
									'The component '
										.concat( t )
										.concat(
											o,
											' has been created dynamically.\n'
										) +
									"You may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",
								i = console.error;
							try {
								var a = ! 0;
								( console.error = function ( t ) {
									for (
										var n = [], o = 1;
										o < arguments.length;
										o++
									)
										n[ o - 1 ] = arguments[ o ];
									E.test( t )
										? ( ( a = ! 1 ), N.delete( s ) )
										: i.apply(
												void 0,
												( 0,
												tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray )(
													[ t ],
													n,
													! 1
												)
										  );
								} ),
									( 0,
									react__WEBPACK_IMPORTED_MODULE_1__.useRef )(),
									a &&
										! N.has( s ) &&
										( console.warn( s ), N.add( s ) );
							} catch ( e ) {
								E.test( e.message ) && N.delete( s );
							} finally {
								console.error = i;
							}
						}
					},
					_ = Object.freeze( [] ),
					C = Object.freeze( {} );
				function I( e, t, n ) {
					return (
						void 0 === n && ( n = C ),
						( e.theme !== n.theme && e.theme ) || t || n.theme
					);
				}
				var A = new Set( [
						'a',
						'abbr',
						'address',
						'area',
						'article',
						'aside',
						'audio',
						'b',
						'base',
						'bdi',
						'bdo',
						'big',
						'blockquote',
						'body',
						'br',
						'button',
						'canvas',
						'caption',
						'cite',
						'code',
						'col',
						'colgroup',
						'data',
						'datalist',
						'dd',
						'del',
						'details',
						'dfn',
						'dialog',
						'div',
						'dl',
						'dt',
						'em',
						'embed',
						'fieldset',
						'figcaption',
						'figure',
						'footer',
						'form',
						'h1',
						'h2',
						'h3',
						'h4',
						'h5',
						'h6',
						'header',
						'hgroup',
						'hr',
						'html',
						'i',
						'iframe',
						'img',
						'input',
						'ins',
						'kbd',
						'keygen',
						'label',
						'legend',
						'li',
						'link',
						'main',
						'map',
						'mark',
						'menu',
						'menuitem',
						'meta',
						'meter',
						'nav',
						'noscript',
						'object',
						'ol',
						'optgroup',
						'option',
						'output',
						'p',
						'param',
						'picture',
						'pre',
						'progress',
						'q',
						'rp',
						'rt',
						'ruby',
						's',
						'samp',
						'script',
						'section',
						'select',
						'small',
						'source',
						'span',
						'strong',
						'style',
						'sub',
						'summary',
						'sup',
						'table',
						'tbody',
						'td',
						'textarea',
						'tfoot',
						'th',
						'thead',
						'time',
						'tr',
						'track',
						'u',
						'ul',
						'use',
						'var',
						'video',
						'wbr',
						'circle',
						'clipPath',
						'defs',
						'ellipse',
						'foreignObject',
						'g',
						'image',
						'line',
						'linearGradient',
						'marker',
						'mask',
						'path',
						'pattern',
						'polygon',
						'polyline',
						'radialGradient',
						'rect',
						'stop',
						'svg',
						'text',
						'tspan',
					] ),
					O = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
					D = /(^-|-$)/g;
				function R( e ) {
					return e.replace( O, '-' ).replace( D, '' );
				}
				var T = /(a)(d)/gi,
					k = 52,
					j = function ( e ) {
						return String.fromCharCode( e + ( e > 25 ? 39 : 97 ) );
					};
				function x( e ) {
					var t,
						n = '';
					for ( t = Math.abs( e ); t > k; t = ( t / k ) | 0 )
						n = j( t % k ) + n;
					return ( j( t % k ) + n ).replace( T, '$1-$2' );
				}
				var V,
					F = 5381,
					M = function ( e, t ) {
						for ( var n = t.length; n;  )
							e = ( 33 * e ) ^ t.charCodeAt( --n );
						return e;
					},
					z = function ( e ) {
						return M( F, e );
					};
				function $( e ) {
					return x( z( e ) >>> 0 );
				}
				function B( e ) {
					return (
						( true && 'string' == typeof e && e ) ||
						e.displayName ||
						e.name ||
						'Component'
					);
				}
				function L( e ) {
					return (
						'string' == typeof e &&
						( false ||
							e.charAt( 0 ) === e.charAt( 0 ).toLowerCase() )
					);
				}
				var G = 'function' == typeof Symbol && Symbol.for,
					Y = G ? Symbol.for( 'react.memo' ) : 60115,
					W = G ? Symbol.for( 'react.forward_ref' ) : 60112,
					q = {
						childContextTypes: ! 0,
						contextType: ! 0,
						contextTypes: ! 0,
						defaultProps: ! 0,
						displayName: ! 0,
						getDefaultProps: ! 0,
						getDerivedStateFromError: ! 0,
						getDerivedStateFromProps: ! 0,
						mixins: ! 0,
						propTypes: ! 0,
						type: ! 0,
					},
					H = {
						name: ! 0,
						length: ! 0,
						prototype: ! 0,
						caller: ! 0,
						callee: ! 0,
						arguments: ! 0,
						arity: ! 0,
					},
					U = {
						$$typeof: ! 0,
						compare: ! 0,
						defaultProps: ! 0,
						displayName: ! 0,
						propTypes: ! 0,
						type: ! 0,
					},
					J =
						( ( ( V = {} )[ W ] = {
							$$typeof: ! 0,
							render: ! 0,
							defaultProps: ! 0,
							displayName: ! 0,
							propTypes: ! 0,
						} ),
						( V[ Y ] = U ),
						V );
				function X( e ) {
					return ( 'type' in ( t = e ) && t.type.$$typeof ) === Y
						? U
						: '$$typeof' in e
						? J[ e.$$typeof ]
						: q;
					var t;
				}
				var Z = Object.defineProperty,
					K = Object.getOwnPropertyNames,
					Q = Object.getOwnPropertySymbols,
					ee = Object.getOwnPropertyDescriptor,
					te = Object.getPrototypeOf,
					ne = Object.prototype;
				function oe( e, t, n ) {
					if ( 'string' != typeof t ) {
						if ( ne ) {
							var o = te( t );
							o && o !== ne && oe( e, o, n );
						}
						var r = K( t );
						Q && ( r = r.concat( Q( t ) ) );
						for (
							var s = X( e ), i = X( t ), a = 0;
							a < r.length;
							++a
						) {
							var c = r[ a ];
							if (
								! (
									c in H ||
									( n && n[ c ] ) ||
									( i && c in i ) ||
									( s && c in s )
								)
							) {
								var l = ee( t, c );
								try {
									Z( e, c, l );
								} catch ( e ) {}
							}
						}
					}
					return e;
				}
				function re( e ) {
					return 'function' == typeof e;
				}
				function se( e ) {
					return 'object' == typeof e && 'styledComponentId' in e;
				}
				function ie( e, t ) {
					return e && t
						? ''.concat( e, ' ' ).concat( t )
						: e || t || '';
				}
				function ae( e, t ) {
					if ( 0 === e.length ) return '';
					for ( var n = e[ 0 ], o = 1; o < e.length; o++ )
						n += t ? t + e[ o ] : e[ o ];
					return n;
				}
				function ce( e ) {
					return (
						null !== e &&
						'object' == typeof e &&
						e.constructor.name === Object.name &&
						! ( 'props' in e && e.$$typeof )
					);
				}
				function le( e, t, n ) {
					if (
						( void 0 === n && ( n = ! 1 ),
						! n && ! ce( e ) && ! Array.isArray( e ) )
					)
						return t;
					if ( Array.isArray( t ) )
						for ( var o = 0; o < t.length; o++ )
							e[ o ] = le( e[ o ], t[ o ] );
					else if ( ce( t ) )
						for ( var o in t ) e[ o ] = le( e[ o ], t[ o ] );
					return e;
				}
				function ue( e, t ) {
					Object.defineProperty( e, 'toString', { value: t } );
				}
				var pe = true
					? {
							1: 'Cannot create styled-component for component: %s.\n\n',
							2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
							3: 'Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n',
							4: 'The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n',
							5: 'The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n',
							6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
							7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
							8: 'ThemeProvider: Please make your "theme" prop an object.\n\n',
							9: 'Missing document `<head>`\n\n',
							10: 'Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n',
							11: '_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n',
							12: 'It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n',
							13: '%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n',
							14: 'ThemeProvider: "theme" prop is required.\n\n',
							15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
							16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
							17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n",
							18: 'ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`',
					  }
					: 0;
				function de() {
					for ( var e = [], t = 0; t < arguments.length; t++ )
						e[ t ] = arguments[ t ];
					for (
						var n = e[ 0 ], o = [], r = 1, s = e.length;
						r < s;
						r += 1
					)
						o.push( e[ r ] );
					return (
						o.forEach( function ( e ) {
							n = n.replace( /%[a-z]/, e );
						} ),
						n
					);
				}
				function he( t ) {
					for ( var n = [], o = 1; o < arguments.length; o++ )
						n[ o - 1 ] = arguments[ o ];
					return false
						? 0
						: new Error(
								de
									.apply(
										void 0,
										( 0,
										tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray )(
											[ pe[ t ] ],
											n,
											! 1
										)
									)
									.trim()
						  );
				}
				var fe = ( function () {
						function e( e ) {
							( this.groupSizes = new Uint32Array( 512 ) ),
								( this.length = 512 ),
								( this.tag = e );
						}
						return (
							( e.prototype.indexOfGroup = function ( e ) {
								for ( var t = 0, n = 0; n < e; n++ )
									t += this.groupSizes[ n ];
								return t;
							} ),
							( e.prototype.insertRules = function ( e, t ) {
								if ( e >= this.groupSizes.length ) {
									for (
										var n = this.groupSizes,
											o = n.length,
											r = o;
										e >= r;

									)
										if ( ( r <<= 1 ) < 0 )
											throw he( 16, ''.concat( e ) );
									( this.groupSizes = new Uint32Array( r ) ),
										this.groupSizes.set( n ),
										( this.length = r );
									for ( var s = o; s < r; s++ )
										this.groupSizes[ s ] = 0;
								}
								for (
									var i = this.indexOfGroup( e + 1 ),
										a = ( ( s = 0 ), t.length );
									s < a;
									s++
								)
									this.tag.insertRule( i, t[ s ] ) &&
										( this.groupSizes[ e ]++, i++ );
							} ),
							( e.prototype.clearGroup = function ( e ) {
								if ( e < this.length ) {
									var t = this.groupSizes[ e ],
										n = this.indexOfGroup( e ),
										o = n + t;
									this.groupSizes[ e ] = 0;
									for ( var r = n; r < o; r++ )
										this.tag.deleteRule( n );
								}
							} ),
							( e.prototype.getGroup = function ( e ) {
								var t = '';
								if (
									e >= this.length ||
									0 === this.groupSizes[ e ]
								)
									return t;
								for (
									var n = this.groupSizes[ e ],
										o = this.indexOfGroup( e ),
										r = o + n,
										s = o;
									s < r;
									s++
								)
									t += ''
										.concat( this.tag.getRule( s ) )
										.concat( g );
								return t;
							} ),
							e
						);
					} )(),
					me = 1 << 30,
					ye = new Map(),
					ve = new Map(),
					ge = 1,
					Se = function ( e ) {
						if ( ye.has( e ) ) return ye.get( e );
						for ( ; ve.has( ge );  ) ge++;
						var t = ge++;
						if ( true && ( ( 0 | t ) < 0 || t > me ) )
							throw he( 16, ''.concat( t ) );
						return ye.set( e, t ), ve.set( t, e ), t;
					},
					we = function ( e, t ) {
						( ge = t + 1 ), ye.set( e, t ), ve.set( t, e );
					},
					be = 'style['
						.concat( f, '][' )
						.concat( y, '="' )
						.concat( v, '"]' ),
					Ee = new RegExp(
						'^'.concat(
							f,
							'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'
						)
					),
					Ne = function ( e, t, n ) {
						for (
							var o, r = n.split( ',' ), s = 0, i = r.length;
							s < i;
							s++
						)
							( o = r[ s ] ) && e.registerName( t, o );
					},
					Pe = function ( e, t ) {
						for (
							var n,
								o = (
									null !== ( n = t.textContent ) &&
									void 0 !== n
										? n
										: ''
								).split( g ),
								r = [],
								s = 0,
								i = o.length;
							s < i;
							s++
						) {
							var a = o[ s ].trim();
							if ( a ) {
								var c = a.match( Ee );
								if ( c ) {
									var l = 0 | parseInt( c[ 1 ], 10 ),
										u = c[ 2 ];
									0 !== l &&
										( we( u, l ),
										Ne( e, u, c[ 3 ] ),
										e.getTag().insertRules( l, r ) ),
										( r.length = 0 );
								} else r.push( a );
							}
						}
					},
					_e = function ( e ) {
						for (
							var t = document.querySelectorAll( be ),
								n = 0,
								o = t.length;
							n < o;
							n++
						) {
							var r = t[ n ];
							r &&
								r.getAttribute( f ) !== m &&
								( Pe( e, r ),
								r.parentNode && r.parentNode.removeChild( r ) );
						}
					};
				function Ce() {
					return true ? __webpack_require__.nc : 0;
				}
				var Ie = function ( e ) {
						var t = document.head,
							n = e || t,
							o = document.createElement( 'style' ),
							r = ( function ( e ) {
								var t = Array.from(
									e.querySelectorAll(
										'style['.concat( f, ']' )
									)
								);
								return t[ t.length - 1 ];
							} )( n ),
							s = void 0 !== r ? r.nextSibling : null;
						o.setAttribute( f, m ), o.setAttribute( y, v );
						var i = Ce();
						return (
							i && o.setAttribute( 'nonce', i ),
							n.insertBefore( o, s ),
							o
						);
					},
					Ae = ( function () {
						function e( e ) {
							( this.element = Ie( e ) ),
								this.element.appendChild(
									document.createTextNode( '' )
								),
								( this.sheet = ( function ( e ) {
									if ( e.sheet ) return e.sheet;
									for (
										var t = document.styleSheets,
											n = 0,
											o = t.length;
										n < o;
										n++
									) {
										var r = t[ n ];
										if ( r.ownerNode === e ) return r;
									}
									throw he( 17 );
								} )( this.element ) ),
								( this.length = 0 );
						}
						return (
							( e.prototype.insertRule = function ( e, t ) {
								try {
									return (
										this.sheet.insertRule( t, e ),
										this.length++,
										! 0
									);
								} catch ( e ) {
									return ! 1;
								}
							} ),
							( e.prototype.deleteRule = function ( e ) {
								this.sheet.deleteRule( e ), this.length--;
							} ),
							( e.prototype.getRule = function ( e ) {
								var t = this.sheet.cssRules[ e ];
								return t && t.cssText ? t.cssText : '';
							} ),
							e
						);
					} )(),
					Oe = ( function () {
						function e( e ) {
							( this.element = Ie( e ) ),
								( this.nodes = this.element.childNodes ),
								( this.length = 0 );
						}
						return (
							( e.prototype.insertRule = function ( e, t ) {
								if ( e <= this.length && e >= 0 ) {
									var n = document.createTextNode( t );
									return (
										this.element.insertBefore(
											n,
											this.nodes[ e ] || null
										),
										this.length++,
										! 0
									);
								}
								return ! 1;
							} ),
							( e.prototype.deleteRule = function ( e ) {
								this.element.removeChild( this.nodes[ e ] ),
									this.length--;
							} ),
							( e.prototype.getRule = function ( e ) {
								return e < this.length
									? this.nodes[ e ].textContent
									: '';
							} ),
							e
						);
					} )(),
					De = ( function () {
						function e( e ) {
							( this.rules = [] ), ( this.length = 0 );
						}
						return (
							( e.prototype.insertRule = function ( e, t ) {
								return (
									e <= this.length &&
									( this.rules.splice( e, 0, t ),
									this.length++,
									! 0 )
								);
							} ),
							( e.prototype.deleteRule = function ( e ) {
								this.rules.splice( e, 1 ), this.length--;
							} ),
							( e.prototype.getRule = function ( e ) {
								return e < this.length ? this.rules[ e ] : '';
							} ),
							e
						);
					} )(),
					Re = S,
					Te = { isServer: ! S, useCSSOMInjection: ! w },
					ke = ( function () {
						function e( e, n, o ) {
							void 0 === e && ( e = C ),
								void 0 === n && ( n = {} );
							var r = this;
							( this.options = ( 0,
							tslib__WEBPACK_IMPORTED_MODULE_4__.__assign )(
								( 0,
								tslib__WEBPACK_IMPORTED_MODULE_4__.__assign )(
									{},
									Te
								),
								e
							) ),
								( this.gs = n ),
								( this.names = new Map( o ) ),
								( this.server = !! e.isServer ),
								! this.server &&
									S &&
									Re &&
									( ( Re = ! 1 ), _e( this ) ),
								ue( this, function () {
									return ( function ( e ) {
										for (
											var t = e.getTag(),
												n = t.length,
												o = '',
												r = function ( n ) {
													var r = ( function ( e ) {
														return ve.get( e );
													} )( n );
													if ( void 0 === r )
														return 'continue';
													var s = e.names.get( r ),
														i = t.getGroup( n );
													if (
														void 0 === s ||
														! s.size ||
														0 === i.length
													)
														return 'continue';
													var a = ''
															.concat( f, '.g' )
															.concat(
																n,
																'[id="'
															)
															.concat( r, '"]' ),
														c = '';
													void 0 !== s &&
														s.forEach(
															function ( e ) {
																e.length > 0 &&
																	( c +=
																		''.concat(
																			e,
																			','
																		) );
															}
														),
														( o += ''
															.concat( i )
															.concat(
																a,
																'{content:"'
															)
															.concat( c, '"}' )
															.concat( g ) );
												},
												s = 0;
											s < n;
											s++
										)
											r( s );
										return o;
									} )( r );
								} );
						}
						return (
							( e.registerId = function ( e ) {
								return Se( e );
							} ),
							( e.prototype.rehydrate = function () {
								! this.server && S && _e( this );
							} ),
							( e.prototype.reconstructWithOptions = function (
								n,
								o
							) {
								return (
									void 0 === o && ( o = ! 0 ),
									new e(
										( 0,
										tslib__WEBPACK_IMPORTED_MODULE_4__.__assign )(
											( 0,
											tslib__WEBPACK_IMPORTED_MODULE_4__.__assign )(
												{},
												this.options
											),
											n
										),
										this.gs,
										( o && this.names ) || void 0
									)
								);
							} ),
							( e.prototype.allocateGSInstance = function ( e ) {
								return ( this.gs[ e ] =
									( this.gs[ e ] || 0 ) + 1 );
							} ),
							( e.prototype.getTag = function () {
								return (
									this.tag ||
									( this.tag =
										( ( e = ( function ( e ) {
											var t = e.useCSSOMInjection,
												n = e.target;
											return e.isServer
												? new De( n )
												: t
												? new Ae( n )
												: new Oe( n );
										} )( this.options ) ),
										new fe( e ) ) )
								);
								var e;
							} ),
							( e.prototype.hasNameForId = function ( e, t ) {
								return (
									this.names.has( e ) &&
									this.names.get( e ).has( t )
								);
							} ),
							( e.prototype.registerName = function ( e, t ) {
								if ( ( Se( e ), this.names.has( e ) ) )
									this.names.get( e ).add( t );
								else {
									var n = new Set();
									n.add( t ), this.names.set( e, n );
								}
							} ),
							( e.prototype.insertRules = function ( e, t, n ) {
								this.registerName( e, t ),
									this.getTag().insertRules( Se( e ), n );
							} ),
							( e.prototype.clearNames = function ( e ) {
								this.names.has( e ) &&
									this.names.get( e ).clear();
							} ),
							( e.prototype.clearRules = function ( e ) {
								this.getTag().clearGroup( Se( e ) ),
									this.clearNames( e );
							} ),
							( e.prototype.clearTag = function () {
								this.tag = void 0;
							} ),
							e
						);
					} )(),
					je = /&/g,
					xe = /^\s*\/\/.*$/gm;
				function Ve( e, t ) {
					return e.map( function ( e ) {
						return (
							'rule' === e.type &&
								( ( e.value = ''
									.concat( t, ' ' )
									.concat( e.value ) ),
								( e.value = e.value.replaceAll(
									',',
									','.concat( t, ' ' )
								) ),
								( e.props = e.props.map( function ( e ) {
									return ''.concat( t, ' ' ).concat( e );
								} ) ) ),
							Array.isArray( e.children ) &&
								'@keyframes' !== e.type &&
								( e.children = Ve( e.children, t ) ),
							e
						);
					} );
				}
				function Fe( e ) {
					var t,
						n,
						o,
						r = void 0 === e ? C : e,
						s = r.options,
						i = void 0 === s ? C : s,
						a = r.plugins,
						c = void 0 === a ? _ : a,
						l = function ( e, o, r ) {
							return r.startsWith( n ) &&
								r.endsWith( n ) &&
								r.replaceAll( n, '' ).length > 0
								? '.'.concat( t )
								: e;
						},
						u = c.slice();
					u.push( function ( e ) {
						e.type ===
							stylis__WEBPACK_IMPORTED_MODULE_5__.RULESET &&
							e.value.includes( '&' ) &&
							( e.props[ 0 ] = e.props[ 0 ]
								.replace( je, n )
								.replace( o, l ) );
					} ),
						i.prefix &&
							u.push(
								stylis__WEBPACK_IMPORTED_MODULE_6__.prefixer
							),
						u.push( stylis__WEBPACK_IMPORTED_MODULE_7__.stringify );
					var p = function ( e, r, s, a ) {
						void 0 === r && ( r = '' ),
							void 0 === s && ( s = '' ),
							void 0 === a && ( a = '&' ),
							( t = a ),
							( n = r ),
							( o = new RegExp( '\\'.concat( n, '\\b' ), 'g' ) );
						var c = e.replace( xe, '' ),
							l = stylis__WEBPACK_IMPORTED_MODULE_8__.compile(
								s || r
									? ''
											.concat( s, ' ' )
											.concat( r, ' { ' )
											.concat( c, ' }' )
									: c
							);
						i.namespace && ( l = Ve( l, i.namespace ) );
						var p = [];
						return (
							stylis__WEBPACK_IMPORTED_MODULE_7__.serialize(
								l,
								stylis__WEBPACK_IMPORTED_MODULE_6__.middleware(
									u.concat(
										stylis__WEBPACK_IMPORTED_MODULE_6__.rulesheet(
											function ( e ) {
												return p.push( e );
											}
										)
									)
								)
							),
							p
						);
					};
					return (
						( p.hash = c.length
							? c
									.reduce( function ( e, t ) {
										return (
											t.name || he( 15 ), M( e, t.name )
										);
									}, F )
									.toString()
							: '' ),
						p
					);
				}
				var Me = new ke(),
					ze = Fe(),
					$e =
						react__WEBPACK_IMPORTED_MODULE_1___default().createContext(
							{
								shouldForwardProp: void 0,
								styleSheet: Me,
								stylis: ze,
							}
						),
					Be = $e.Consumer,
					Le =
						react__WEBPACK_IMPORTED_MODULE_1___default().createContext(
							void 0
						);
				function Ge() {
					return ( 0, react__WEBPACK_IMPORTED_MODULE_1__.useContext )(
						$e
					);
				}
				function Ye( e ) {
					var t = ( 0, react__WEBPACK_IMPORTED_MODULE_1__.useState )(
							e.stylisPlugins
						),
						n = t[ 0 ],
						r = t[ 1 ],
						c = Ge().styleSheet,
						l = ( 0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo )(
							function () {
								var t = c;
								return (
									e.sheet
										? ( t = e.sheet )
										: e.target &&
										  ( t = t.reconstructWithOptions(
												{ target: e.target },
												! 1
										  ) ),
									e.disableCSSOMInjection &&
										( t = t.reconstructWithOptions( {
											useCSSOMInjection: ! 1,
										} ) ),
									t
								);
							},
							[ e.disableCSSOMInjection, e.sheet, e.target, c ]
						),
						u = ( 0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo )(
							function () {
								return Fe( {
									options: {
										namespace: e.namespace,
										prefix: e.enableVendorPrefixes,
									},
									plugins: n,
								} );
							},
							[ e.enableVendorPrefixes, e.namespace, n ]
						);
					( 0, react__WEBPACK_IMPORTED_MODULE_1__.useEffect )(
						function () {
							shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(
								n,
								e.stylisPlugins
							) || r( e.stylisPlugins );
						},
						[ e.stylisPlugins ]
					);
					var d = ( 0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo )(
						function () {
							return {
								shouldForwardProp: e.shouldForwardProp,
								styleSheet: l,
								stylis: u,
							};
						},
						[ e.shouldForwardProp, l, u ]
					);
					return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
						$e.Provider,
						{ value: d },
						react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
							Le.Provider,
							{ value: u },
							e.children
						)
					);
				}
				var We = ( function () {
						function e( e, t ) {
							var n = this;
							( this.inject = function ( e, t ) {
								void 0 === t && ( t = ze );
								var o = n.name + t.hash;
								e.hasNameForId( n.id, o ) ||
									e.insertRules(
										n.id,
										o,
										t( n.rules, o, '@keyframes' )
									);
							} ),
								( this.name = e ),
								( this.id = 'sc-keyframes-'.concat( e ) ),
								( this.rules = t ),
								ue( this, function () {
									throw he( 12, String( n.name ) );
								} );
						}
						return (
							( e.prototype.getName = function ( e ) {
								return (
									void 0 === e && ( e = ze ),
									this.name + e.hash
								);
							} ),
							e
						);
					} )(),
					qe = function ( e ) {
						return e >= 'A' && e <= 'Z';
					};
				function He( e ) {
					for ( var t = '', n = 0; n < e.length; n++ ) {
						var o = e[ n ];
						if ( 1 === n && '-' === o && '-' === e[ 0 ] ) return e;
						qe( o ) ? ( t += '-' + o.toLowerCase() ) : ( t += o );
					}
					return t.startsWith( 'ms-' ) ? '-' + t : t;
				}
				var Ue = function ( e ) {
						return null == e || ! 1 === e || '' === e;
					},
					Je = function ( t ) {
						var n,
							o,
							r = [];
						for ( var s in t ) {
							var i = t[ s ];
							t.hasOwnProperty( s ) &&
								! Ue( i ) &&
								( ( Array.isArray( i ) && i.isCss ) || re( i )
									? r.push(
											''.concat( He( s ), ':' ),
											i,
											';'
									  )
									: ce( i )
									? r.push.apply(
											r,
											( 0,
											tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray )(
												( 0,
												tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray )(
													[ ''.concat( s, ' {' ) ],
													Je( i ),
													! 1
												),
												[ '}' ],
												! 1
											)
									  )
									: r.push(
											''
												.concat( He( s ), ': ' )
												.concat(
													( ( n = s ),
													null == ( o = i ) ||
													'boolean' == typeof o ||
													'' === o
														? ''
														: 'number' !=
																typeof o ||
														  0 === o ||
														  n in
																_emotion_unitless__WEBPACK_IMPORTED_MODULE_3__[
																	'default'
																] ||
														  n.startsWith( '--' )
														? String( o ).trim()
														: ''.concat(
																o,
																'px'
														  ) ),
													';'
												)
									  ) );
						}
						return r;
					};
				function Xe( e, t, n, o ) {
					if ( Ue( e ) ) return [];
					if ( se( e ) ) return [ '.'.concat( e.styledComponentId ) ];
					if ( re( e ) ) {
						if (
							! re( ( s = e ) ) ||
							( s.prototype && s.prototype.isReactComponent ) ||
							! t
						)
							return [ e ];
						var r = e( t );
						return (
							false ||
								'object' != typeof r ||
								Array.isArray( r ) ||
								r instanceof We ||
								ce( r ) ||
								null === r ||
								console.error(
									''.concat(
										B( e ),
										' is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.'
									)
								),
							Xe( r, t, n, o )
						);
					}
					var s;
					return e instanceof We
						? n
							? ( e.inject( n, o ), [ e.getName( o ) ] )
							: [ e ]
						: ce( e )
						? Je( e )
						: Array.isArray( e )
						? Array.prototype.concat.apply(
								_,
								e.map( function ( e ) {
									return Xe( e, t, n, o );
								} )
						  )
						: [ e.toString() ];
				}
				function Ze( e ) {
					for ( var t = 0; t < e.length; t += 1 ) {
						var n = e[ t ];
						if ( re( n ) && ! se( n ) ) return ! 1;
					}
					return ! 0;
				}
				var Ke = z( v ),
					Qe = ( function () {
						function e( e, t, n ) {
							( this.rules = e ),
								( this.staticRulesId = '' ),
								( this.isStatic = false && 0 ),
								( this.componentId = t ),
								( this.baseHash = M( Ke, t ) ),
								( this.baseStyle = n ),
								ke.registerId( t );
						}
						return (
							( e.prototype.generateAndInjectStyles = function (
								e,
								t,
								n
							) {
								var o = this.baseStyle
									? this.baseStyle.generateAndInjectStyles(
											e,
											t,
											n
									  )
									: '';
								if ( this.isStatic && ! n.hash )
									if (
										this.staticRulesId &&
										t.hasNameForId(
											this.componentId,
											this.staticRulesId
										)
									)
										o = ie( o, this.staticRulesId );
									else {
										var r = ae( Xe( this.rules, e, t, n ) ),
											s = x(
												M( this.baseHash, r ) >>> 0
											);
										if (
											! t.hasNameForId(
												this.componentId,
												s
											)
										) {
											var i = n(
												r,
												'.'.concat( s ),
												void 0,
												this.componentId
											);
											t.insertRules(
												this.componentId,
												s,
												i
											);
										}
										( o = ie( o, s ) ),
											( this.staticRulesId = s );
									}
								else {
									for (
										var a = M( this.baseHash, n.hash ),
											c = '',
											l = 0;
										l < this.rules.length;
										l++
									) {
										var u = this.rules[ l ];
										if ( 'string' == typeof u )
											( c += u ),
												true && ( a = M( a, u ) );
										else if ( u ) {
											var p = ae( Xe( u, e, t, n ) );
											( a = M( a, p + l ) ), ( c += p );
										}
									}
									if ( c ) {
										var d = x( a >>> 0 );
										t.hasNameForId( this.componentId, d ) ||
											t.insertRules(
												this.componentId,
												d,
												n(
													c,
													'.'.concat( d ),
													void 0,
													this.componentId
												)
											),
											( o = ie( o, d ) );
									}
								}
								return o;
							} ),
							e
						);
					} )(),
					et =
						react__WEBPACK_IMPORTED_MODULE_1___default().createContext(
							void 0
						),
					tt = et.Consumer;
				function nt() {
					var e = ( 0,
					react__WEBPACK_IMPORTED_MODULE_1__.useContext )( et );
					if ( ! e ) throw he( 18 );
					return e;
				}
				function ot( e ) {
					var n =
							react__WEBPACK_IMPORTED_MODULE_1___default().useContext(
								et
							),
						r = ( 0, react__WEBPACK_IMPORTED_MODULE_1__.useMemo )(
							function () {
								return ( function ( e, n ) {
									if ( ! e ) throw he( 14 );
									if ( re( e ) ) {
										var o = e( n );
										if (
											true &&
											( null === o ||
												Array.isArray( o ) ||
												'object' != typeof o )
										)
											throw he( 7 );
										return o;
									}
									if (
										Array.isArray( e ) ||
										'object' != typeof e
									)
										throw he( 8 );
									return n
										? ( 0,
										  tslib__WEBPACK_IMPORTED_MODULE_4__.__assign )(
												( 0,
												tslib__WEBPACK_IMPORTED_MODULE_4__.__assign )(
													{},
													n
												),
												e
										  )
										: e;
								} )( e.theme, n );
							},
							[ e.theme, n ]
						);
					return e.children
						? react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
								et.Provider,
								{ value: r },
								e.children
						  )
						: null;
				}
				var rt = {},
					st = new Set();
				function it( e, r, s ) {
					var i = se( e ),
						a = e,
						c = ! L( e ),
						p = r.attrs,
						d = void 0 === p ? _ : p,
						h = r.componentId,
						f =
							void 0 === h
								? ( function ( e, t ) {
										var n =
											'string' != typeof e
												? 'sc'
												: R( e );
										rt[ n ] = ( rt[ n ] || 0 ) + 1;
										var o = ''
											.concat( n, '-' )
											.concat( $( v + n + rt[ n ] ) );
										return t
											? ''.concat( t, '-' ).concat( o )
											: o;
								  } )( r.displayName, r.parentComponentId )
								: h,
						m = r.displayName,
						y =
							void 0 === m
								? ( function ( e ) {
										return L( e )
											? 'styled.'.concat( e )
											: 'Styled('.concat( B( e ), ')' );
								  } )( e )
								: m,
						g =
							r.displayName && r.componentId
								? ''
										.concat( R( r.displayName ), '-' )
										.concat( r.componentId )
								: r.componentId || f,
						S =
							i && a.attrs
								? a.attrs.concat( d ).filter( Boolean )
								: d,
						w = r.shouldForwardProp;
					if ( i && a.shouldForwardProp ) {
						var b = a.shouldForwardProp;
						if ( r.shouldForwardProp ) {
							var E = r.shouldForwardProp;
							w = function ( e, t ) {
								return b( e, t ) && E( e, t );
							};
						} else w = b;
					}
					var N = new Qe( s, g, i ? a.componentStyle : void 0 );
					function O( e, r ) {
						return ( function ( e, r, s ) {
							var i = e.attrs,
								a = e.componentStyle,
								c = e.defaultProps,
								p = e.foldedComponentIds,
								d = e.styledComponentId,
								h = e.target,
								f =
									react__WEBPACK_IMPORTED_MODULE_1___default().useContext(
										et
									),
								m = Ge(),
								y = e.shouldForwardProp || m.shouldForwardProp;
							true &&
								( 0,
								react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue )(
									d
								);
							var v = I( r, f, c ) || C,
								g = ( function ( e, n, o ) {
									for (
										var r,
											s = ( 0,
											tslib__WEBPACK_IMPORTED_MODULE_4__.__assign )(
												( 0,
												tslib__WEBPACK_IMPORTED_MODULE_4__.__assign )(
													{},
													n
												),
												{ className: void 0, theme: o }
											),
											i = 0;
										i < e.length;
										i += 1
									) {
										var a = re( ( r = e[ i ] ) )
											? r( s )
											: r;
										for ( var c in a )
											s[ c ] =
												'className' === c
													? ie( s[ c ], a[ c ] )
													: 'style' === c
													? ( 0,
													  tslib__WEBPACK_IMPORTED_MODULE_4__.__assign )(
															( 0,
															tslib__WEBPACK_IMPORTED_MODULE_4__.__assign )(
																{},
																s[ c ]
															),
															a[ c ]
													  )
													: a[ c ];
									}
									return (
										n.className &&
											( s.className = ie(
												s.className,
												n.className
											) ),
										s
									);
								} )( i, r, v ),
								S = g.as || h,
								w = {};
							for ( var b in g )
								void 0 === g[ b ] ||
									'$' === b[ 0 ] ||
									'as' === b ||
									( 'theme' === b && g.theme === v ) ||
									( 'forwardedAs' === b
										? ( w.as = g.forwardedAs )
										: ( y && ! y( b, S ) ) ||
										  ( ( w[ b ] = g[ b ] ),
										  y ||
												'development' !==
													'development' ||
												( 0,
												_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_0__[
													'default'
												] )( b ) ||
												st.has( b ) ||
												! A.has( S ) ||
												( st.add( b ),
												console.warn(
													'styled-components: it looks like an unknown prop "'.concat(
														b,
														'" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)'
													)
												) ) ) );
							var E = ( function ( e, t ) {
								var n = Ge(),
									o = e.generateAndInjectStyles(
										t,
										n.styleSheet,
										n.stylis
									);
								return (
									true &&
										( 0,
										react__WEBPACK_IMPORTED_MODULE_1__.useDebugValue )(
											o
										),
									o
								);
							} )( a, g );
							true &&
								e.warnTooManyClasses &&
								e.warnTooManyClasses( E );
							var N = ie( p, d );
							return (
								E && ( N += ' ' + E ),
								g.className && ( N += ' ' + g.className ),
								( w[
									L( S ) && ! A.has( S )
										? 'class'
										: 'className'
								] = N ),
								( w.ref = s ),
								( 0,
								react__WEBPACK_IMPORTED_MODULE_1__.createElement )(
									S,
									w
								)
							);
						} )( D, e, r );
					}
					O.displayName = y;
					var D =
						react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(
							O
						);
					return (
						( D.attrs = S ),
						( D.componentStyle = N ),
						( D.displayName = y ),
						( D.shouldForwardProp = w ),
						( D.foldedComponentIds = i
							? ie( a.foldedComponentIds, a.styledComponentId )
							: '' ),
						( D.styledComponentId = g ),
						( D.target = i ? a.target : e ),
						Object.defineProperty( D, 'defaultProps', {
							get: function () {
								return this._foldedDefaultProps;
							},
							set: function ( e ) {
								this._foldedDefaultProps = i
									? ( function ( e ) {
											for (
												var t = [], n = 1;
												n < arguments.length;
												n++
											)
												t[ n - 1 ] = arguments[ n ];
											for (
												var o = 0, r = t;
												o < r.length;
												o++
											)
												le( e, r[ o ], ! 0 );
											return e;
									  } )( {}, a.defaultProps, e )
									: e;
							},
						} ),
						true &&
							( P( y, g ),
							( D.warnTooManyClasses = ( function ( e, t ) {
								var n = {},
									o = ! 1;
								return function ( r ) {
									if (
										! o &&
										( ( n[ r ] = ! 0 ),
										Object.keys( n ).length >= 200 )
									) {
										var s = t
											? ' with the id of "'.concat(
													t,
													'"'
											  )
											: '';
										console.warn(
											'Over '
												.concat(
													200,
													' classes were generated for component '
												)
												.concat( e )
												.concat( s, '.\n' ) +
												'Consider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />'
										),
											( o = ! 0 ),
											( n = {} );
									}
								};
							} )( y, g ) ) ),
						ue( D, function () {
							return '.'.concat( D.styledComponentId );
						} ),
						c &&
							oe( D, e, {
								attrs: ! 0,
								componentStyle: ! 0,
								displayName: ! 0,
								foldedComponentIds: ! 0,
								shouldForwardProp: ! 0,
								styledComponentId: ! 0,
								target: ! 0,
							} ),
						D
					);
				}
				function at( e, t ) {
					for (
						var n = [ e[ 0 ] ], o = 0, r = t.length;
						o < r;
						o += 1
					)
						n.push( t[ o ], e[ o + 1 ] );
					return n;
				}
				var ct = function ( e ) {
					return Object.assign( e, { isCss: ! 0 } );
				};
				function lt( t ) {
					for ( var n = [], o = 1; o < arguments.length; o++ )
						n[ o - 1 ] = arguments[ o ];
					if ( re( t ) || ce( t ) )
						return ct(
							Xe(
								at(
									_,
									( 0,
									tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray )(
										[ t ],
										n,
										! 0
									)
								)
							)
						);
					var r = t;
					return 0 === n.length &&
						1 === r.length &&
						'string' == typeof r[ 0 ]
						? Xe( r )
						: ct( Xe( at( r, n ) ) );
				}
				function ut( n, o, r ) {
					if ( ( void 0 === r && ( r = C ), ! o ) ) throw he( 1, o );
					var s = function ( t ) {
						for ( var s = [], i = 1; i < arguments.length; i++ )
							s[ i - 1 ] = arguments[ i ];
						return n(
							o,
							r,
							lt.apply(
								void 0,
								( 0,
								tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray )(
									[ t ],
									s,
									! 1
								)
							)
						);
					};
					return (
						( s.attrs = function ( e ) {
							return ut(
								n,
								o,
								( 0,
								tslib__WEBPACK_IMPORTED_MODULE_4__.__assign )(
									( 0,
									tslib__WEBPACK_IMPORTED_MODULE_4__.__assign )(
										{},
										r
									),
									{
										attrs: Array.prototype
											.concat( r.attrs, e )
											.filter( Boolean ),
									}
								)
							);
						} ),
						( s.withConfig = function ( e ) {
							return ut(
								n,
								o,
								( 0,
								tslib__WEBPACK_IMPORTED_MODULE_4__.__assign )(
									( 0,
									tslib__WEBPACK_IMPORTED_MODULE_4__.__assign )(
										{},
										r
									),
									e
								)
							);
						} ),
						s
					);
				}
				var pt = function ( e ) {
						return ut( it, e );
					},
					dt = pt;
				A.forEach( function ( e ) {
					dt[ e ] = pt( e );
				} );
				var ht = ( function () {
					function e( e, t ) {
						( this.rules = e ),
							( this.componentId = t ),
							( this.isStatic = Ze( e ) ),
							ke.registerId( this.componentId + 1 );
					}
					return (
						( e.prototype.createStyles = function ( e, t, n, o ) {
							var r = o( ae( Xe( this.rules, t, n, o ) ), '' ),
								s = this.componentId + e;
							n.insertRules( s, s, r );
						} ),
						( e.prototype.removeStyles = function ( e, t ) {
							t.clearRules( this.componentId + e );
						} ),
						( e.prototype.renderStyles = function ( e, t, n, o ) {
							e > 2 && ke.registerId( this.componentId + e ),
								this.removeStyles( e, n ),
								this.createStyles( e, t, n, o );
						} ),
						e
					);
				} )();
				function ft( n ) {
					for ( var r = [], s = 1; s < arguments.length; s++ )
						r[ s - 1 ] = arguments[ s ];
					var i = lt.apply(
							void 0,
							( 0,
							tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray )(
								[ n ],
								r,
								! 1
							)
						),
						a = 'sc-global-'.concat( $( JSON.stringify( i ) ) ),
						c = new ht( i, a );
					true && P( a );
					var l = function ( e ) {
						var t = Ge(),
							n =
								react__WEBPACK_IMPORTED_MODULE_1___default().useContext(
									et
								),
							r =
								react__WEBPACK_IMPORTED_MODULE_1___default().useRef(
									t.styleSheet.allocateGSInstance( a )
								).current;
						return (
							true &&
								react__WEBPACK_IMPORTED_MODULE_1___default().Children.count(
									e.children
								) &&
								console.warn(
									'The global style component '.concat(
										a,
										' was given child JSX. createGlobalStyle does not render children.'
									)
								),
							true &&
								i.some( function ( e ) {
									return (
										'string' == typeof e &&
										-1 !== e.indexOf( '@import' )
									);
								} ) &&
								console.warn(
									'Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app.'
								),
							t.styleSheet.server &&
								u( r, e, t.styleSheet, n, t.stylis ),
							react__WEBPACK_IMPORTED_MODULE_1___default().useLayoutEffect(
								function () {
									if ( ! t.styleSheet.server )
										return (
											u(
												r,
												e,
												t.styleSheet,
												n,
												t.stylis
											),
											function () {
												return c.removeStyles(
													r,
													t.styleSheet
												);
											}
										);
								},
								[ r, e, t.styleSheet, n, t.stylis ]
							),
							null
						);
					};
					function u( e, n, o, r, s ) {
						if ( c.isStatic ) c.renderStyles( e, b, o, s );
						else {
							var i = ( 0,
							tslib__WEBPACK_IMPORTED_MODULE_4__.__assign )(
								( 0,
								tslib__WEBPACK_IMPORTED_MODULE_4__.__assign )(
									{},
									n
								),
								{ theme: I( n, r, l.defaultProps ) }
							);
							c.renderStyles( e, i, o, s );
						}
					}
					return react__WEBPACK_IMPORTED_MODULE_1___default().memo(
						l
					);
				}
				function mt( t ) {
					for ( var n = [], o = 1; o < arguments.length; o++ )
						n[ o - 1 ] = arguments[ o ];
					true &&
						'undefined' != typeof navigator &&
						'ReactNative' === navigator.product &&
						console.warn(
							'`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.'
						);
					var r = ae(
							lt.apply(
								void 0,
								( 0,
								tslib__WEBPACK_IMPORTED_MODULE_4__.__spreadArray )(
									[ t ],
									n,
									! 1
								)
							)
						),
						s = $( r );
					return new We( s, r );
				}
				function yt( e ) {
					var n =
						react__WEBPACK_IMPORTED_MODULE_1___default().forwardRef(
							function ( n, r ) {
								var s = I(
									n,
									react__WEBPACK_IMPORTED_MODULE_1___default().useContext(
										et
									),
									e.defaultProps
								);
								return (
									true &&
										void 0 === s &&
										console.warn(
											'[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "'.concat(
												B( e ),
												'"'
											)
										),
									react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
										e,
										( 0,
										tslib__WEBPACK_IMPORTED_MODULE_4__.__assign )(
											{},
											n,
											{ theme: s, ref: r }
										)
									)
								);
							}
						);
					return (
						( n.displayName = 'WithTheme('.concat( B( e ), ')' ) ),
						oe( n, e )
					);
				}
				var vt = ( function () {
						function e() {
							var e = this;
							( this._emitSheetCSS = function () {
								var t = e.instance.toString();
								if ( ! t ) return '';
								var n = Ce(),
									o = ae(
										[
											n && 'nonce="'.concat( n, '"' ),
											''.concat( f, '="true"' ),
											''
												.concat( y, '="' )
												.concat( v, '"' ),
										].filter( Boolean ),
										' '
									);
								return '<style '
									.concat( o, '>' )
									.concat( t, '</style>' );
							} ),
								( this.getStyleTags = function () {
									if ( e.sealed ) throw he( 2 );
									return e._emitSheetCSS();
								} ),
								( this.getStyleElement = function () {
									var n;
									if ( e.sealed ) throw he( 2 );
									var r = e.instance.toString();
									if ( ! r ) return [];
									var s =
											( ( ( n = {} )[ f ] = '' ),
											( n[ y ] = v ),
											( n.dangerouslySetInnerHTML = {
												__html: r,
											} ),
											n ),
										i = Ce();
									return (
										i && ( s.nonce = i ),
										[
											react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
												'style',
												( 0,
												tslib__WEBPACK_IMPORTED_MODULE_4__.__assign )(
													{},
													s,
													{ key: 'sc-0-0' }
												)
											),
										]
									);
								} ),
								( this.seal = function () {
									e.sealed = ! 0;
								} ),
								( this.instance = new ke( { isServer: ! 0 } ) ),
								( this.sealed = ! 1 );
						}
						return (
							( e.prototype.collectStyles = function ( e ) {
								if ( this.sealed ) throw he( 2 );
								return react__WEBPACK_IMPORTED_MODULE_1___default().createElement(
									Ye,
									{ sheet: this.instance },
									e
								);
							} ),
							( e.prototype.interleaveWithNodeStream = function (
								e
							) {
								throw he( 3 );
							} ),
							e
						);
					} )(),
					gt = { StyleSheet: ke, mainSheet: Me };
				true &&
					'undefined' != typeof navigator &&
					'ReactNative' === navigator.product &&
					console.warn(
						"It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"
					);
				var St = '__sc-'.concat( f, '__' );
				true &&
					'undefined' != typeof window &&
					( window[ St ] || ( window[ St ] = 0 ),
					1 === window[ St ] &&
						console.warn(
							"It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."
						),
					( window[ St ] += 1 ) );
				//# sourceMappingURL=styled-components.browser.esm.js.map

				/***/
			},

		/***/ './node_modules/use-memo-one/dist/use-memo-one.esm.js':
			/*!************************************************************!*\
  !*** ./node_modules/use-memo-one/dist/use-memo-one.esm.js ***!
  \************************************************************/
			/***/ (
				__unused_webpack_module,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ useCallback: () =>
							/* binding */ useCallback,
						/* harmony export */ useCallbackOne: () =>
							/* binding */ useCallbackOne,
						/* harmony export */ useMemo: () =>
							/* binding */ useMemo,
						/* harmony export */ useMemoOne: () =>
							/* binding */ useMemoOne,
						/* harmony export */
					}
				);
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__( /*! react */ 'react' );
				/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(
						react__WEBPACK_IMPORTED_MODULE_0__
					);

				function areInputsEqual( newInputs, lastInputs ) {
					if ( newInputs.length !== lastInputs.length ) {
						return false;
					}

					for ( var i = 0; i < newInputs.length; i++ ) {
						if ( newInputs[ i ] !== lastInputs[ i ] ) {
							return false;
						}
					}

					return true;
				}

				function useMemoOne( getResult, inputs ) {
					var initial = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useState )( function () {
						return {
							inputs: inputs,
							result: getResult(),
						};
					} )[ 0 ];
					var isFirstRun = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )( true );
					var committed = ( 0,
					react__WEBPACK_IMPORTED_MODULE_0__.useRef )( initial );
					var useCache =
						isFirstRun.current ||
						Boolean(
							inputs &&
								committed.current.inputs &&
								areInputsEqual(
									inputs,
									committed.current.inputs
								)
						);
					var cache = useCache
						? committed.current
						: {
								inputs: inputs,
								result: getResult(),
						  };
					( 0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect )(
						function () {
							isFirstRun.current = false;
							committed.current = cache;
						},
						[ cache ]
					);
					return cache.result;
				}
				function useCallbackOne( callback, inputs ) {
					return useMemoOne( function () {
						return callback;
					}, inputs );
				}
				var useMemo = useMemoOne;
				var useCallback = useCallbackOne;

				/***/
			},

		/***/ react:
			/*!************************!*\
  !*** external "React" ***!
  \************************/
			/***/ ( module ) => {
				'use strict';
				module.exports = window[ 'React' ];

				/***/
			},

		/***/ 'react-dom':
			/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
			/***/ ( module ) => {
				'use strict';
				module.exports = window[ 'ReactDOM' ];

				/***/
			},

		/***/ lodash:
			/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
			/***/ ( module ) => {
				'use strict';
				module.exports = window[ 'lodash' ];

				/***/
			},

		/***/ '@formgent/modules':
			/*!***************************************!*\
  !*** external ["formgent","modules"] ***!
  \***************************************/
			/***/ ( module ) => {
				'use strict';
				module.exports = window[ 'formgent' ][ 'modules' ];

				/***/
			},

		/***/ '@wordpress/block-editor':
			/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
			/***/ ( module ) => {
				'use strict';
				module.exports = window[ 'wp' ][ 'blockEditor' ];

				/***/
			},

		/***/ '@wordpress/blocks':
			/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
			/***/ ( module ) => {
				'use strict';
				module.exports = window[ 'wp' ][ 'blocks' ];

				/***/
			},

		/***/ '@wordpress/components':
			/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
			/***/ ( module ) => {
				'use strict';
				module.exports = window[ 'wp' ][ 'components' ];

				/***/
			},

		/***/ '@wordpress/compose':
			/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
			/***/ ( module ) => {
				'use strict';
				module.exports = window[ 'wp' ][ 'compose' ];

				/***/
			},

		/***/ '@wordpress/data':
			/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
			/***/ ( module ) => {
				'use strict';
				module.exports = window[ 'wp' ][ 'data' ];

				/***/
			},

		/***/ '@wordpress/element':
			/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
			/***/ ( module ) => {
				'use strict';
				module.exports = window[ 'wp' ][ 'element' ];

				/***/
			},

		/***/ '@wordpress/hooks':
			/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
			/***/ ( module ) => {
				'use strict';
				module.exports = window[ 'wp' ][ 'hooks' ];

				/***/
			},

		/***/ '@wordpress/i18n':
			/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
			/***/ ( module ) => {
				'use strict';
				module.exports = window[ 'wp' ][ 'i18n' ];

				/***/
			},

		/***/ './node_modules/@babel/runtime/helpers/esm/defineProperty.js':
			/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
			/***/ (
				__unused_webpack___webpack_module__,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ _defineProperty,
						/* harmony export */
					}
				);
				/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! ./toPropertyKey.js */ './node_modules/@babel/runtime/helpers/esm/toPropertyKey.js'
					);

				function _defineProperty( e, r, t ) {
					return (
						( r = ( 0,
						_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[
							'default'
						] )( r ) ) in e
							? Object.defineProperty( e, r, {
									value: t,
									enumerable: ! 0,
									configurable: ! 0,
									writable: ! 0,
							  } )
							: ( e[ r ] = t ),
						e
					);
				}

				/***/
			},

		/***/ './node_modules/@babel/runtime/helpers/esm/extends.js':
			/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
			/***/ (
				__unused_webpack___webpack_module__,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ _extends,
						/* harmony export */
					}
				);
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

				/***/
			},

		/***/ './node_modules/@babel/runtime/helpers/esm/inheritsLoose.js':
			/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
			/***/ (
				__unused_webpack___webpack_module__,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ _inheritsLoose,
						/* harmony export */
					}
				);
				/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! ./setPrototypeOf.js */ './node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js'
					);

				function _inheritsLoose( t, o ) {
					( t.prototype = Object.create( o.prototype ) ),
						( t.prototype.constructor = t ),
						( 0,
						_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__[
							'default'
						] )( t, o );
				}

				/***/
			},

		/***/ './node_modules/@babel/runtime/helpers/esm/objectSpread2.js':
			/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
			/***/ (
				__unused_webpack___webpack_module__,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ _objectSpread2,
						/* harmony export */
					}
				);
				/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! ./defineProperty.js */ './node_modules/@babel/runtime/helpers/esm/defineProperty.js'
					);

				function ownKeys( e, r ) {
					var t = Object.keys( e );
					if ( Object.getOwnPropertySymbols ) {
						var o = Object.getOwnPropertySymbols( e );
						r &&
							( o = o.filter( function ( r ) {
								return Object.getOwnPropertyDescriptor( e, r )
									.enumerable;
							} ) ),
							t.push.apply( t, o );
					}
					return t;
				}
				function _objectSpread2( e ) {
					for ( var r = 1; r < arguments.length; r++ ) {
						var t = null != arguments[ r ] ? arguments[ r ] : {};
						r % 2
							? ownKeys( Object( t ), ! 0 ).forEach(
									function ( r ) {
										( 0,
										_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__[
											'default'
										] )( e, r, t[ r ] );
									}
							  )
							: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									e,
									Object.getOwnPropertyDescriptors( t )
							  )
							: ownKeys( Object( t ) ).forEach( function ( r ) {
									Object.defineProperty(
										e,
										r,
										Object.getOwnPropertyDescriptor( t, r )
									);
							  } );
					}
					return e;
				}

				/***/
			},

		/***/ './node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js':
			/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
			/***/ (
				__unused_webpack___webpack_module__,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ _setPrototypeOf,
						/* harmony export */
					}
				);
				function _setPrototypeOf( t, e ) {
					return (
						( _setPrototypeOf = Object.setPrototypeOf
							? Object.setPrototypeOf.bind()
							: function ( t, e ) {
									return ( t.__proto__ = e ), t;
							  } ),
						_setPrototypeOf( t, e )
					);
				}

				/***/
			},

		/***/ './node_modules/@babel/runtime/helpers/esm/toPrimitive.js':
			/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
			/***/ (
				__unused_webpack___webpack_module__,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ toPrimitive,
						/* harmony export */
					}
				);
				/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! ./typeof.js */ './node_modules/@babel/runtime/helpers/esm/typeof.js'
					);

				function toPrimitive( t, r ) {
					if (
						'object' !=
							( 0,
							_typeof_js__WEBPACK_IMPORTED_MODULE_0__[
								'default'
							] )( t ) ||
						! t
					)
						return t;
					var e = t[ Symbol.toPrimitive ];
					if ( void 0 !== e ) {
						var i = e.call( t, r || 'default' );
						if (
							'object' !=
							( 0,
							_typeof_js__WEBPACK_IMPORTED_MODULE_0__[
								'default'
							] )( i )
						)
							return i;
						throw new TypeError(
							'@@toPrimitive must return a primitive value.'
						);
					}
					return ( 'string' === r ? String : Number )( t );
				}

				/***/
			},

		/***/ './node_modules/@babel/runtime/helpers/esm/toPropertyKey.js':
			/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
			/***/ (
				__unused_webpack___webpack_module__,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ toPropertyKey,
						/* harmony export */
					}
				);
				/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! ./typeof.js */ './node_modules/@babel/runtime/helpers/esm/typeof.js'
					);
				/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! ./toPrimitive.js */ './node_modules/@babel/runtime/helpers/esm/toPrimitive.js'
					);

				function toPropertyKey( t ) {
					var i = ( 0,
					_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[ 'default' ] )(
						t,
						'string'
					);
					return 'symbol' ==
						( 0,
						_typeof_js__WEBPACK_IMPORTED_MODULE_0__[ 'default' ] )(
							i
						)
						? i
						: i + '';
				}

				/***/
			},

		/***/ './node_modules/@babel/runtime/helpers/esm/typeof.js':
			/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
			/***/ (
				__unused_webpack___webpack_module__,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ _typeof,
						/* harmony export */
					}
				);
				function _typeof( o ) {
					'@babel/helpers - typeof';

					return (
						( _typeof =
							'function' == typeof Symbol &&
							'symbol' == typeof Symbol.iterator
								? function ( o ) {
										return typeof o;
								  }
								: function ( o ) {
										return o &&
											'function' == typeof Symbol &&
											o.constructor === Symbol &&
											o !== Symbol.prototype
											? 'symbol'
											: typeof o;
								  } ),
						_typeof( o )
					);
				}

				/***/
			},

		/***/ './node_modules/nanoid/index.browser.js':
			/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
			/***/ (
				__unused_webpack___webpack_module__,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ customAlphabet: () =>
							/* binding */ customAlphabet,
						/* harmony export */ customRandom: () =>
							/* binding */ customRandom,
						/* harmony export */ nanoid: () => /* binding */ nanoid,
						/* harmony export */ random: () => /* binding */ random,
						/* harmony export */ urlAlphabet: () =>
							/* reexport safe */ _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__.urlAlphabet,
						/* harmony export */
					}
				);
				/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! ./url-alphabet/index.js */ './node_modules/nanoid/url-alphabet/index.js'
					);

				let random = ( bytes ) =>
					crypto.getRandomValues( new Uint8Array( bytes ) );
				let customRandom = ( alphabet, defaultSize, getRandom ) => {
					let mask =
						( 2 <<
							( Math.log( alphabet.length - 1 ) / Math.LN2 ) ) -
						1;
					let step = -~(
						( 1.6 * mask * defaultSize ) /
						alphabet.length
					);
					return ( size = defaultSize ) => {
						let id = '';
						while ( true ) {
							let bytes = getRandom( step );
							let j = step;
							while ( j-- ) {
								id += alphabet[ bytes[ j ] & mask ] || '';
								if ( id.length === size ) return id;
							}
						}
					};
				};
				let customAlphabet = ( alphabet, size = 21 ) =>
					customRandom( alphabet, size, random );
				let nanoid = ( size = 21 ) => {
					let id = '';
					let bytes = crypto.getRandomValues(
						new Uint8Array( size )
					);
					while ( size-- ) {
						id +=
							_url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__
								.urlAlphabet[ bytes[ size ] & 63 ];
					}
					return id;
				};

				/***/
			},

		/***/ './node_modules/nanoid/url-alphabet/index.js':
			/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
			/***/ (
				__unused_webpack___webpack_module__,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ urlAlphabet: () =>
							/* binding */ urlAlphabet,
						/* harmony export */
					}
				);
				const urlAlphabet =
					'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';

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
				'use strict';
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
				'use strict';
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

		/***/ './node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js':
			/*!*************************************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*************************************************************************************/
			/***/ (
				__unused_webpack___webpack_module__,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ _extends,
						/* harmony export */
					}
				);
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

				/***/
			},

		/***/ './node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js':
			/*!**********************************************************************************************************!*\
  !*** ./node_modules/react-redux/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \**********************************************************************************************************/
			/***/ (
				__unused_webpack___webpack_module__,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ _objectWithoutPropertiesLoose,
						/* harmony export */
					}
				);
				function _objectWithoutPropertiesLoose( r, e ) {
					if ( null == r ) return {};
					var t = {};
					for ( var n in r )
						if ( {}.hasOwnProperty.call( r, n ) ) {
							if ( e.includes( n ) ) continue;
							t[ n ] = r[ n ];
						}
					return t;
				}

				/***/
			},

		/***/ './node_modules/styled-components/node_modules/tslib/tslib.es6.mjs':
			/*!*************************************************************************!*\
  !*** ./node_modules/styled-components/node_modules/tslib/tslib.es6.mjs ***!
  \*************************************************************************/
			/***/ (
				__unused_webpack___webpack_module__,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ __addDisposableResource: () =>
							/* binding */ __addDisposableResource,
						/* harmony export */ __assign: () =>
							/* binding */ __assign,
						/* harmony export */ __asyncDelegator: () =>
							/* binding */ __asyncDelegator,
						/* harmony export */ __asyncGenerator: () =>
							/* binding */ __asyncGenerator,
						/* harmony export */ __asyncValues: () =>
							/* binding */ __asyncValues,
						/* harmony export */ __await: () =>
							/* binding */ __await,
						/* harmony export */ __awaiter: () =>
							/* binding */ __awaiter,
						/* harmony export */ __classPrivateFieldGet: () =>
							/* binding */ __classPrivateFieldGet,
						/* harmony export */ __classPrivateFieldIn: () =>
							/* binding */ __classPrivateFieldIn,
						/* harmony export */ __classPrivateFieldSet: () =>
							/* binding */ __classPrivateFieldSet,
						/* harmony export */ __createBinding: () =>
							/* binding */ __createBinding,
						/* harmony export */ __decorate: () =>
							/* binding */ __decorate,
						/* harmony export */ __disposeResources: () =>
							/* binding */ __disposeResources,
						/* harmony export */ __esDecorate: () =>
							/* binding */ __esDecorate,
						/* harmony export */ __exportStar: () =>
							/* binding */ __exportStar,
						/* harmony export */ __extends: () =>
							/* binding */ __extends,
						/* harmony export */ __generator: () =>
							/* binding */ __generator,
						/* harmony export */ __importDefault: () =>
							/* binding */ __importDefault,
						/* harmony export */ __importStar: () =>
							/* binding */ __importStar,
						/* harmony export */ __makeTemplateObject: () =>
							/* binding */ __makeTemplateObject,
						/* harmony export */ __metadata: () =>
							/* binding */ __metadata,
						/* harmony export */ __param: () =>
							/* binding */ __param,
						/* harmony export */ __propKey: () =>
							/* binding */ __propKey,
						/* harmony export */ __read: () => /* binding */ __read,
						/* harmony export */ __rest: () => /* binding */ __rest,
						/* harmony export */ __runInitializers: () =>
							/* binding */ __runInitializers,
						/* harmony export */ __setFunctionName: () =>
							/* binding */ __setFunctionName,
						/* harmony export */ __spread: () =>
							/* binding */ __spread,
						/* harmony export */ __spreadArray: () =>
							/* binding */ __spreadArray,
						/* harmony export */ __spreadArrays: () =>
							/* binding */ __spreadArrays,
						/* harmony export */ __values: () =>
							/* binding */ __values,
						/* harmony export */ default: () =>
							__WEBPACK_DEFAULT_EXPORT__,
						/* harmony export */
					}
				);
				/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
				/* global Reflect, Promise, SuppressedError, Symbol */

				var extendStatics = function ( d, b ) {
					extendStatics =
						Object.setPrototypeOf ||
						( { __proto__: [] } instanceof Array &&
							function ( d, b ) {
								d.__proto__ = b;
							} ) ||
						function ( d, b ) {
							for ( var p in b )
								if (
									Object.prototype.hasOwnProperty.call( b, p )
								)
									d[ p ] = b[ p ];
						};
					return extendStatics( d, b );
				};

				function __extends( d, b ) {
					if ( typeof b !== 'function' && b !== null )
						throw new TypeError(
							'Class extends value ' +
								String( b ) +
								' is not a constructor or null'
						);
					extendStatics( d, b );
					function __() {
						this.constructor = d;
					}
					d.prototype =
						b === null
							? Object.create( b )
							: ( ( __.prototype = b.prototype ), new __() );
				}

				var __assign = function () {
					__assign =
						Object.assign ||
						function __assign( t ) {
							for (
								var s, i = 1, n = arguments.length;
								i < n;
								i++
							) {
								s = arguments[ i ];
								for ( var p in s )
									if (
										Object.prototype.hasOwnProperty.call(
											s,
											p
										)
									)
										t[ p ] = s[ p ];
							}
							return t;
						};
					return __assign.apply( this, arguments );
				};

				function __rest( s, e ) {
					var t = {};
					for ( var p in s )
						if (
							Object.prototype.hasOwnProperty.call( s, p ) &&
							e.indexOf( p ) < 0
						)
							t[ p ] = s[ p ];
					if (
						s != null &&
						typeof Object.getOwnPropertySymbols === 'function'
					)
						for (
							var i = 0, p = Object.getOwnPropertySymbols( s );
							i < p.length;
							i++
						) {
							if (
								e.indexOf( p[ i ] ) < 0 &&
								Object.prototype.propertyIsEnumerable.call(
									s,
									p[ i ]
								)
							)
								t[ p[ i ] ] = s[ p[ i ] ];
						}
					return t;
				}

				function __decorate( decorators, target, key, desc ) {
					var c = arguments.length,
						r =
							c < 3
								? target
								: desc === null
								? ( desc = Object.getOwnPropertyDescriptor(
										target,
										key
								  ) )
								: desc,
						d;
					if (
						typeof Reflect === 'object' &&
						typeof Reflect.decorate === 'function'
					)
						r = Reflect.decorate( decorators, target, key, desc );
					else
						for ( var i = decorators.length - 1; i >= 0; i-- )
							if ( ( d = decorators[ i ] ) )
								r =
									( c < 3
										? d( r )
										: c > 3
										? d( target, key, r )
										: d( target, key ) ) || r;
					return (
						c > 3 && r && Object.defineProperty( target, key, r ), r
					);
				}

				function __param( paramIndex, decorator ) {
					return function ( target, key ) {
						decorator( target, key, paramIndex );
					};
				}

				function __esDecorate(
					ctor,
					descriptorIn,
					decorators,
					contextIn,
					initializers,
					extraInitializers
				) {
					function accept( f ) {
						if ( f !== void 0 && typeof f !== 'function' )
							throw new TypeError( 'Function expected' );
						return f;
					}
					var kind = contextIn.kind,
						key =
							kind === 'getter'
								? 'get'
								: kind === 'setter'
								? 'set'
								: 'value';
					var target =
						! descriptorIn && ctor
							? contextIn[ 'static' ]
								? ctor
								: ctor.prototype
							: null;
					var descriptor =
						descriptorIn ||
						( target
							? Object.getOwnPropertyDescriptor(
									target,
									contextIn.name
							  )
							: {} );
					var _,
						done = false;
					for ( var i = decorators.length - 1; i >= 0; i-- ) {
						var context = {};
						for ( var p in contextIn )
							context[ p ] = p === 'access' ? {} : contextIn[ p ];
						for ( var p in contextIn.access )
							context.access[ p ] = contextIn.access[ p ];
						context.addInitializer = function ( f ) {
							if ( done )
								throw new TypeError(
									'Cannot add initializers after decoration has completed'
								);
							extraInitializers.push( accept( f || null ) );
						};
						var result = ( 0, decorators[ i ] )(
							kind === 'accessor'
								? { get: descriptor.get, set: descriptor.set }
								: descriptor[ key ],
							context
						);
						if ( kind === 'accessor' ) {
							if ( result === void 0 ) continue;
							if ( result === null || typeof result !== 'object' )
								throw new TypeError( 'Object expected' );
							if ( ( _ = accept( result.get ) ) )
								descriptor.get = _;
							if ( ( _ = accept( result.set ) ) )
								descriptor.set = _;
							if ( ( _ = accept( result.init ) ) )
								initializers.unshift( _ );
						} else if ( ( _ = accept( result ) ) ) {
							if ( kind === 'field' ) initializers.unshift( _ );
							else descriptor[ key ] = _;
						}
					}
					if ( target )
						Object.defineProperty(
							target,
							contextIn.name,
							descriptor
						);
					done = true;
				}

				function __runInitializers( thisArg, initializers, value ) {
					var useValue = arguments.length > 2;
					for ( var i = 0; i < initializers.length; i++ ) {
						value = useValue
							? initializers[ i ].call( thisArg, value )
							: initializers[ i ].call( thisArg );
					}
					return useValue ? value : void 0;
				}

				function __propKey( x ) {
					return typeof x === 'symbol' ? x : ''.concat( x );
				}

				function __setFunctionName( f, name, prefix ) {
					if ( typeof name === 'symbol' )
						name = name.description
							? '['.concat( name.description, ']' )
							: '';
					return Object.defineProperty( f, 'name', {
						configurable: true,
						value: prefix ? ''.concat( prefix, ' ', name ) : name,
					} );
				}

				function __metadata( metadataKey, metadataValue ) {
					if (
						typeof Reflect === 'object' &&
						typeof Reflect.metadata === 'function'
					)
						return Reflect.metadata( metadataKey, metadataValue );
				}

				function __awaiter( thisArg, _arguments, P, generator ) {
					function adopt( value ) {
						return value instanceof P
							? value
							: new P( function ( resolve ) {
									resolve( value );
							  } );
					}
					return new ( P || ( P = Promise ) )( function (
						resolve,
						reject
					) {
						function fulfilled( value ) {
							try {
								step( generator.next( value ) );
							} catch ( e ) {
								reject( e );
							}
						}
						function rejected( value ) {
							try {
								step( generator[ 'throw' ]( value ) );
							} catch ( e ) {
								reject( e );
							}
						}
						function step( result ) {
							result.done
								? resolve( result.value )
								: adopt( result.value ).then(
										fulfilled,
										rejected
								  );
						}
						step(
							( generator = generator.apply(
								thisArg,
								_arguments || []
							) ).next()
						);
					} );
				}

				function __generator( thisArg, body ) {
					var _ = {
							label: 0,
							sent: function () {
								if ( t[ 0 ] & 1 ) throw t[ 1 ];
								return t[ 1 ];
							},
							trys: [],
							ops: [],
						},
						f,
						y,
						t,
						g;
					return (
						( g = {
							next: verb( 0 ),
							throw: verb( 1 ),
							return: verb( 2 ),
						} ),
						typeof Symbol === 'function' &&
							( g[ Symbol.iterator ] = function () {
								return this;
							} ),
						g
					);
					function verb( n ) {
						return function ( v ) {
							return step( [ n, v ] );
						};
					}
					function step( op ) {
						if ( f )
							throw new TypeError(
								'Generator is already executing.'
							);
						while (
							( g && ( ( g = 0 ), op[ 0 ] && ( _ = 0 ) ), _ )
						)
							try {
								if (
									( ( f = 1 ),
									y &&
										( t =
											op[ 0 ] & 2
												? y[ 'return' ]
												: op[ 0 ]
												? y[ 'throw' ] ||
												  ( ( t = y[ 'return' ] ) &&
														t.call( y ),
												  0 )
												: y.next ) &&
										! ( t = t.call( y, op[ 1 ] ) ).done )
								)
									return t;
								if ( ( ( y = 0 ), t ) )
									op = [ op[ 0 ] & 2, t.value ];
								switch ( op[ 0 ] ) {
									case 0:
									case 1:
										t = op;
										break;
									case 4:
										_.label++;
										return { value: op[ 1 ], done: false };
									case 5:
										_.label++;
										y = op[ 1 ];
										op = [ 0 ];
										continue;
									case 7:
										op = _.ops.pop();
										_.trys.pop();
										continue;
									default:
										if (
											! ( ( t = _.trys ),
											( t =
												t.length > 0 &&
												t[ t.length - 1 ] ) ) &&
											( op[ 0 ] === 6 || op[ 0 ] === 2 )
										) {
											_ = 0;
											continue;
										}
										if (
											op[ 0 ] === 3 &&
											( ! t ||
												( op[ 1 ] > t[ 0 ] &&
													op[ 1 ] < t[ 3 ] ) )
										) {
											_.label = op[ 1 ];
											break;
										}
										if (
											op[ 0 ] === 6 &&
											_.label < t[ 1 ]
										) {
											_.label = t[ 1 ];
											t = op;
											break;
										}
										if ( t && _.label < t[ 2 ] ) {
											_.label = t[ 2 ];
											_.ops.push( op );
											break;
										}
										if ( t[ 2 ] ) _.ops.pop();
										_.trys.pop();
										continue;
								}
								op = body.call( thisArg, _ );
							} catch ( e ) {
								op = [ 6, e ];
								y = 0;
							} finally {
								f = t = 0;
							}
						if ( op[ 0 ] & 5 ) throw op[ 1 ];
						return {
							value: op[ 0 ] ? op[ 1 ] : void 0,
							done: true,
						};
					}
				}

				var __createBinding = Object.create
					? function ( o, m, k, k2 ) {
							if ( k2 === undefined ) k2 = k;
							var desc = Object.getOwnPropertyDescriptor( m, k );
							if (
								! desc ||
								( 'get' in desc
									? ! m.__esModule
									: desc.writable || desc.configurable )
							) {
								desc = {
									enumerable: true,
									get: function () {
										return m[ k ];
									},
								};
							}
							Object.defineProperty( o, k2, desc );
					  }
					: function ( o, m, k, k2 ) {
							if ( k2 === undefined ) k2 = k;
							o[ k2 ] = m[ k ];
					  };

				function __exportStar( m, o ) {
					for ( var p in m )
						if (
							p !== 'default' &&
							! Object.prototype.hasOwnProperty.call( o, p )
						)
							__createBinding( o, m, p );
				}

				function __values( o ) {
					var s = typeof Symbol === 'function' && Symbol.iterator,
						m = s && o[ s ],
						i = 0;
					if ( m ) return m.call( o );
					if ( o && typeof o.length === 'number' )
						return {
							next: function () {
								if ( o && i >= o.length ) o = void 0;
								return { value: o && o[ i++ ], done: ! o };
							},
						};
					throw new TypeError(
						s
							? 'Object is not iterable.'
							: 'Symbol.iterator is not defined.'
					);
				}

				function __read( o, n ) {
					var m =
						typeof Symbol === 'function' && o[ Symbol.iterator ];
					if ( ! m ) return o;
					var i = m.call( o ),
						r,
						ar = [],
						e;
					try {
						while (
							( n === void 0 || n-- > 0 ) &&
							! ( r = i.next() ).done
						)
							ar.push( r.value );
					} catch ( error ) {
						e = { error: error };
					} finally {
						try {
							if ( r && ! r.done && ( m = i[ 'return' ] ) )
								m.call( i );
						} finally {
							if ( e ) throw e.error;
						}
					}
					return ar;
				}

				/** @deprecated */
				function __spread() {
					for ( var ar = [], i = 0; i < arguments.length; i++ )
						ar = ar.concat( __read( arguments[ i ] ) );
					return ar;
				}

				/** @deprecated */
				function __spreadArrays() {
					for ( var s = 0, i = 0, il = arguments.length; i < il; i++ )
						s += arguments[ i ].length;
					for ( var r = Array( s ), k = 0, i = 0; i < il; i++ )
						for (
							var a = arguments[ i ], j = 0, jl = a.length;
							j < jl;
							j++, k++
						)
							r[ k ] = a[ j ];
					return r;
				}

				function __spreadArray( to, from, pack ) {
					if ( pack || arguments.length === 2 )
						for ( var i = 0, l = from.length, ar; i < l; i++ ) {
							if ( ar || ! ( i in from ) ) {
								if ( ! ar )
									ar = Array.prototype.slice.call(
										from,
										0,
										i
									);
								ar[ i ] = from[ i ];
							}
						}
					return to.concat(
						ar || Array.prototype.slice.call( from )
					);
				}

				function __await( v ) {
					return this instanceof __await
						? ( ( this.v = v ), this )
						: new __await( v );
				}

				function __asyncGenerator( thisArg, _arguments, generator ) {
					if ( ! Symbol.asyncIterator )
						throw new TypeError(
							'Symbol.asyncIterator is not defined.'
						);
					var g = generator.apply( thisArg, _arguments || [] ),
						i,
						q = [];
					return (
						( i = {} ),
						verb( 'next' ),
						verb( 'throw' ),
						verb( 'return' ),
						( i[ Symbol.asyncIterator ] = function () {
							return this;
						} ),
						i
					);
					function verb( n ) {
						if ( g[ n ] )
							i[ n ] = function ( v ) {
								return new Promise( function ( a, b ) {
									q.push( [ n, v, a, b ] ) > 1 ||
										resume( n, v );
								} );
							};
					}
					function resume( n, v ) {
						try {
							step( g[ n ]( v ) );
						} catch ( e ) {
							settle( q[ 0 ][ 3 ], e );
						}
					}
					function step( r ) {
						r.value instanceof __await
							? Promise.resolve( r.value.v ).then(
									fulfill,
									reject
							  )
							: settle( q[ 0 ][ 2 ], r );
					}
					function fulfill( value ) {
						resume( 'next', value );
					}
					function reject( value ) {
						resume( 'throw', value );
					}
					function settle( f, v ) {
						if ( ( f( v ), q.shift(), q.length ) )
							resume( q[ 0 ][ 0 ], q[ 0 ][ 1 ] );
					}
				}

				function __asyncDelegator( o ) {
					var i, p;
					return (
						( i = {} ),
						verb( 'next' ),
						verb( 'throw', function ( e ) {
							throw e;
						} ),
						verb( 'return' ),
						( i[ Symbol.iterator ] = function () {
							return this;
						} ),
						i
					);
					function verb( n, f ) {
						i[ n ] = o[ n ]
							? function ( v ) {
									return ( p = ! p )
										? {
												value: __await( o[ n ]( v ) ),
												done: false,
										  }
										: f
										? f( v )
										: v;
							  }
							: f;
					}
				}

				function __asyncValues( o ) {
					if ( ! Symbol.asyncIterator )
						throw new TypeError(
							'Symbol.asyncIterator is not defined.'
						);
					var m = o[ Symbol.asyncIterator ],
						i;
					return m
						? m.call( o )
						: ( ( o =
								typeof __values === 'function'
									? __values( o )
									: o[ Symbol.iterator ]() ),
						  ( i = {} ),
						  verb( 'next' ),
						  verb( 'throw' ),
						  verb( 'return' ),
						  ( i[ Symbol.asyncIterator ] = function () {
								return this;
						  } ),
						  i );
					function verb( n ) {
						i[ n ] =
							o[ n ] &&
							function ( v ) {
								return new Promise( function (
									resolve,
									reject
								) {
									( v = o[ n ]( v ) ),
										settle(
											resolve,
											reject,
											v.done,
											v.value
										);
								} );
							};
					}
					function settle( resolve, reject, d, v ) {
						Promise.resolve( v ).then( function ( v ) {
							resolve( { value: v, done: d } );
						}, reject );
					}
				}

				function __makeTemplateObject( cooked, raw ) {
					if ( Object.defineProperty ) {
						Object.defineProperty( cooked, 'raw', { value: raw } );
					} else {
						cooked.raw = raw;
					}
					return cooked;
				}

				var __setModuleDefault = Object.create
					? function ( o, v ) {
							Object.defineProperty( o, 'default', {
								enumerable: true,
								value: v,
							} );
					  }
					: function ( o, v ) {
							o[ 'default' ] = v;
					  };

				function __importStar( mod ) {
					if ( mod && mod.__esModule ) return mod;
					var result = {};
					if ( mod != null )
						for ( var k in mod )
							if (
								k !== 'default' &&
								Object.prototype.hasOwnProperty.call( mod, k )
							)
								__createBinding( result, mod, k );
					__setModuleDefault( result, mod );
					return result;
				}

				function __importDefault( mod ) {
					return mod && mod.__esModule ? mod : { default: mod };
				}

				function __classPrivateFieldGet( receiver, state, kind, f ) {
					if ( kind === 'a' && ! f )
						throw new TypeError(
							'Private accessor was defined without a getter'
						);
					if (
						typeof state === 'function'
							? receiver !== state || ! f
							: ! state.has( receiver )
					)
						throw new TypeError(
							'Cannot read private member from an object whose class did not declare it'
						);
					return kind === 'm'
						? f
						: kind === 'a'
						? f.call( receiver )
						: f
						? f.value
						: state.get( receiver );
				}

				function __classPrivateFieldSet(
					receiver,
					state,
					value,
					kind,
					f
				) {
					if ( kind === 'm' )
						throw new TypeError( 'Private method is not writable' );
					if ( kind === 'a' && ! f )
						throw new TypeError(
							'Private accessor was defined without a setter'
						);
					if (
						typeof state === 'function'
							? receiver !== state || ! f
							: ! state.has( receiver )
					)
						throw new TypeError(
							'Cannot write private member to an object whose class did not declare it'
						);
					return (
						kind === 'a'
							? f.call( receiver, value )
							: f
							? ( f.value = value )
							: state.set( receiver, value ),
						value
					);
				}

				function __classPrivateFieldIn( state, receiver ) {
					if (
						receiver === null ||
						( typeof receiver !== 'object' &&
							typeof receiver !== 'function' )
					)
						throw new TypeError(
							"Cannot use 'in' operator on non-object"
						);
					return typeof state === 'function'
						? receiver === state
						: state.has( receiver );
				}

				function __addDisposableResource( env, value, async ) {
					if ( value !== null && value !== void 0 ) {
						if (
							typeof value !== 'object' &&
							typeof value !== 'function'
						)
							throw new TypeError( 'Object expected.' );
						var dispose;
						if ( async ) {
							if ( ! Symbol.asyncDispose )
								throw new TypeError(
									'Symbol.asyncDispose is not defined.'
								);
							dispose = value[ Symbol.asyncDispose ];
						}
						if ( dispose === void 0 ) {
							if ( ! Symbol.dispose )
								throw new TypeError(
									'Symbol.dispose is not defined.'
								);
							dispose = value[ Symbol.dispose ];
						}
						if ( typeof dispose !== 'function' )
							throw new TypeError( 'Object not disposable.' );
						env.stack.push( {
							value: value,
							dispose: dispose,
							async: async,
						} );
					} else if ( async ) {
						env.stack.push( { async: true } );
					}
					return value;
				}

				var _SuppressedError =
					typeof SuppressedError === 'function'
						? SuppressedError
						: function ( error, suppressed, message ) {
								var e = new Error( message );
								return (
									( e.name = 'SuppressedError' ),
									( e.error = error ),
									( e.suppressed = suppressed ),
									e
								);
						  };

				function __disposeResources( env ) {
					function fail( e ) {
						env.error = env.hasError
							? new _SuppressedError(
									e,
									env.error,
									'An error was suppressed during disposal.'
							  )
							: e;
						env.hasError = true;
					}
					function next() {
						while ( env.stack.length ) {
							var rec = env.stack.pop();
							try {
								var result =
									rec.dispose &&
									rec.dispose.call( rec.value );
								if ( rec.async )
									return Promise.resolve( result ).then(
										next,
										function ( e ) {
											fail( e );
											return next();
										}
									);
							} catch ( e ) {
								fail( e );
							}
						}
						if ( env.hasError ) throw env.error;
					}
					return next();
				}

				/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
					{
						__extends,
						__assign,
						__rest,
						__decorate,
						__param,
						__metadata,
						__awaiter,
						__generator,
						__createBinding,
						__exportStar,
						__values,
						__read,
						__spread,
						__spreadArrays,
						__spreadArray,
						__await,
						__asyncGenerator,
						__asyncDelegator,
						__asyncValues,
						__makeTemplateObject,
						__importStar,
						__importDefault,
						__classPrivateFieldGet,
						__classPrivateFieldSet,
						__classPrivateFieldIn,
						__addDisposableResource,
						__disposeResources,
					};

				/***/
			},

		/***/ './node_modules/stylis/src/Enum.js':
			/*!*****************************************!*\
  !*** ./node_modules/stylis/src/Enum.js ***!
  \*****************************************/
			/***/ (
				__unused_webpack___webpack_module__,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ CHARSET: () =>
							/* binding */ CHARSET,
						/* harmony export */ COMMENT: () =>
							/* binding */ COMMENT,
						/* harmony export */ COUNTER_STYLE: () =>
							/* binding */ COUNTER_STYLE,
						/* harmony export */ DECLARATION: () =>
							/* binding */ DECLARATION,
						/* harmony export */ DOCUMENT: () =>
							/* binding */ DOCUMENT,
						/* harmony export */ FONT_FACE: () =>
							/* binding */ FONT_FACE,
						/* harmony export */ FONT_FEATURE_VALUES: () =>
							/* binding */ FONT_FEATURE_VALUES,
						/* harmony export */ IMPORT: () => /* binding */ IMPORT,
						/* harmony export */ KEYFRAMES: () =>
							/* binding */ KEYFRAMES,
						/* harmony export */ LAYER: () => /* binding */ LAYER,
						/* harmony export */ MEDIA: () => /* binding */ MEDIA,
						/* harmony export */ MOZ: () => /* binding */ MOZ,
						/* harmony export */ MS: () => /* binding */ MS,
						/* harmony export */ NAMESPACE: () =>
							/* binding */ NAMESPACE,
						/* harmony export */ PAGE: () => /* binding */ PAGE,
						/* harmony export */ RULESET: () =>
							/* binding */ RULESET,
						/* harmony export */ SCOPE: () => /* binding */ SCOPE,
						/* harmony export */ SUPPORTS: () =>
							/* binding */ SUPPORTS,
						/* harmony export */ VIEWPORT: () =>
							/* binding */ VIEWPORT,
						/* harmony export */ WEBKIT: () => /* binding */ WEBKIT,
						/* harmony export */
					}
				);
				var MS = '-ms-';
				var MOZ = '-moz-';
				var WEBKIT = '-webkit-';

				var COMMENT = 'comm';
				var RULESET = 'rule';
				var DECLARATION = 'decl';

				var PAGE = '@page';
				var MEDIA = '@media';
				var IMPORT = '@import';
				var CHARSET = '@charset';
				var VIEWPORT = '@viewport';
				var SUPPORTS = '@supports';
				var DOCUMENT = '@document';
				var NAMESPACE = '@namespace';
				var KEYFRAMES = '@keyframes';
				var FONT_FACE = '@font-face';
				var COUNTER_STYLE = '@counter-style';
				var FONT_FEATURE_VALUES = '@font-feature-values';
				var LAYER = '@layer';
				var SCOPE = '@scope';

				/***/
			},

		/***/ './node_modules/stylis/src/Middleware.js':
			/*!***********************************************!*\
  !*** ./node_modules/stylis/src/Middleware.js ***!
  \***********************************************/
			/***/ (
				__unused_webpack___webpack_module__,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ middleware: () =>
							/* binding */ middleware,
						/* harmony export */ namespace: () =>
							/* binding */ namespace,
						/* harmony export */ prefixer: () =>
							/* binding */ prefixer,
						/* harmony export */ rulesheet: () =>
							/* binding */ rulesheet,
						/* harmony export */
					}
				);
				/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! ./Enum.js */ './node_modules/stylis/src/Enum.js'
					);
				/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! ./Utility.js */ './node_modules/stylis/src/Utility.js'
					);
				/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__ =
					__webpack_require__(
						/*! ./Tokenizer.js */ './node_modules/stylis/src/Tokenizer.js'
					);
				/* harmony import */ var _Serializer_js__WEBPACK_IMPORTED_MODULE_3__ =
					__webpack_require__(
						/*! ./Serializer.js */ './node_modules/stylis/src/Serializer.js'
					);
				/* harmony import */ var _Prefixer_js__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! ./Prefixer.js */ './node_modules/stylis/src/Prefixer.js'
					);

				/**
				 * @param {function[]} collection
				 * @return {function}
				 */
				function middleware( collection ) {
					var length = ( 0,
					_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof )(
						collection
					);

					return function ( element, index, children, callback ) {
						var output = '';

						for ( var i = 0; i < length; i++ )
							output +=
								collection[ i ](
									element,
									index,
									children,
									callback
								) || '';

						return output;
					};
				}

				/**
				 * @param {function} callback
				 * @return {function}
				 */
				function rulesheet( callback ) {
					return function ( element ) {
						if ( ! element.root )
							if ( ( element = element.return ) )
								callback( element );
					};
				}

				/**
				 * @param {object} element
				 * @param {number} index
				 * @param {object[]} children
				 * @param {function} callback
				 */
				function prefixer( element, index, children, callback ) {
					if ( element.length > -1 )
						if ( ! element.return )
							switch ( element.type ) {
								case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.DECLARATION:
									element.return = ( 0,
									_Prefixer_js__WEBPACK_IMPORTED_MODULE_2__.prefix )(
										element.value,
										element.length,
										children
									);
									return;
								case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.KEYFRAMES:
									return ( 0,
									_Serializer_js__WEBPACK_IMPORTED_MODULE_3__.serialize )(
										[
											( 0,
											_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy )(
												element,
												{
													value: ( 0,
													_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
														element.value,
														'@',
														'@' +
															_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT
													),
												}
											),
										],
										callback
									);
								case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
									if ( element.length )
										return ( 0,
										_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine )(
											( children = element.props ),
											function ( value ) {
												switch (
													( 0,
													_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match )(
														value,
														( callback =
															/(::plac\w+|:read-\w+)/ )
													)
												) {
													// :read-(only|write)
													case ':read-only':
													case ':read-write':
														( 0,
														_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift )(
															( 0,
															_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy )(
																element,
																{
																	props: [
																		( 0,
																		_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
																			value,
																			/:(read-\w+)/,
																			':' +
																				_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ +
																				'$1'
																		),
																	],
																}
															)
														);
														( 0,
														_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift )(
															( 0,
															_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy )(
																element,
																{
																	props: [
																		value,
																	],
																}
															)
														);
														( 0,
														_Utility_js__WEBPACK_IMPORTED_MODULE_0__.assign )(
															element,
															{
																props: ( 0,
																_Utility_js__WEBPACK_IMPORTED_MODULE_0__.filter )(
																	children,
																	callback
																),
															}
														);
														break;
													// :placeholder
													case '::placeholder':
														( 0,
														_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift )(
															( 0,
															_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy )(
																element,
																{
																	props: [
																		( 0,
																		_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
																			value,
																			/:(plac\w+)/,
																			':' +
																				_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
																				'input-$1'
																		),
																	],
																}
															)
														);
														( 0,
														_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift )(
															( 0,
															_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy )(
																element,
																{
																	props: [
																		( 0,
																		_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
																			value,
																			/:(plac\w+)/,
																			':' +
																				_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ +
																				'$1'
																		),
																	],
																}
															)
														);
														( 0,
														_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift )(
															( 0,
															_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy )(
																element,
																{
																	props: [
																		( 0,
																		_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
																			value,
																			/:(plac\w+)/,
																			_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS +
																				'input-$1'
																		),
																	],
																}
															)
														);
														( 0,
														_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.lift )(
															( 0,
															_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.copy )(
																element,
																{
																	props: [
																		value,
																	],
																}
															)
														);
														( 0,
														_Utility_js__WEBPACK_IMPORTED_MODULE_0__.assign )(
															element,
															{
																props: ( 0,
																_Utility_js__WEBPACK_IMPORTED_MODULE_0__.filter )(
																	children,
																	callback
																),
															}
														);
														break;
												}

												return '';
											}
										);
							}
				}

				/**
				 * @param {object} element
				 * @param {number} index
				 * @param {object[]} children
				 */
				function namespace( element ) {
					switch ( element.type ) {
						case _Enum_js__WEBPACK_IMPORTED_MODULE_1__.RULESET:
							element.props = element.props.map(
								function ( value ) {
									return ( 0,
									_Utility_js__WEBPACK_IMPORTED_MODULE_0__.combine )(
										( 0,
										_Tokenizer_js__WEBPACK_IMPORTED_MODULE_4__.tokenize )(
											value
										),
										function ( value, index, children ) {
											switch (
												( 0,
												_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat )(
													value,
													0
												)
											) {
												// \f
												case 12:
													return ( 0,
													_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr )(
														value,
														1,
														( 0,
														_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen )(
															value
														)
													);
												// \0 ( + > ~
												case 0:
												case 40:
												case 43:
												case 62:
												case 126:
													return value;
												// :
												case 58:
													if (
														children[ ++index ] ===
														'global'
													)
														( children[ index ] =
															'' ),
															( children[
																++index
															] =
																'\f' +
																( 0,
																_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr )(
																	children[
																		index
																	],
																	( index = 1 ),
																	-1
																) );
												// \s
												case 32:
													return index === 1
														? ''
														: value;
												default:
													switch ( index ) {
														case 0:
															element = value;
															return ( 0,
															_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof )(
																children
															) > 1
																? ''
																: value;
														case ( index =
															( 0,
															_Utility_js__WEBPACK_IMPORTED_MODULE_0__.sizeof )(
																children
															) - 1 ):
														case 2:
															return index === 2
																? value +
																		element +
																		element
																: value +
																		element;
														default:
															return value;
													}
											}
										}
									);
								}
							);
					}
				}

				/***/
			},

		/***/ './node_modules/stylis/src/Parser.js':
			/*!*******************************************!*\
  !*** ./node_modules/stylis/src/Parser.js ***!
  \*******************************************/
			/***/ (
				__unused_webpack___webpack_module__,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ comment: () =>
							/* binding */ comment,
						/* harmony export */ compile: () =>
							/* binding */ compile,
						/* harmony export */ declaration: () =>
							/* binding */ declaration,
						/* harmony export */ parse: () => /* binding */ parse,
						/* harmony export */ ruleset: () =>
							/* binding */ ruleset,
						/* harmony export */
					}
				);
				/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_2__ =
					__webpack_require__(
						/*! ./Enum.js */ './node_modules/stylis/src/Enum.js'
					);
				/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! ./Utility.js */ './node_modules/stylis/src/Utility.js'
					);
				/* harmony import */ var _Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! ./Tokenizer.js */ './node_modules/stylis/src/Tokenizer.js'
					);

				/**
				 * @param {string} value
				 * @return {object[]}
				 */
				function compile( value ) {
					return ( 0,
					_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.dealloc )(
						parse(
							'',
							null,
							null,
							null,
							[ '' ],
							( value = ( 0,
							_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.alloc )(
								value
							) ),
							0,
							[ 0 ],
							value
						)
					);
				}

				/**
				 * @param {string} value
				 * @param {object} root
				 * @param {object?} parent
				 * @param {string[]} rule
				 * @param {string[]} rules
				 * @param {string[]} rulesets
				 * @param {number[]} pseudo
				 * @param {number[]} points
				 * @param {string[]} declarations
				 * @return {object}
				 */
				function parse(
					value,
					root,
					parent,
					rule,
					rules,
					rulesets,
					pseudo,
					points,
					declarations
				) {
					var index = 0;
					var offset = 0;
					var length = pseudo;
					var atrule = 0;
					var property = 0;
					var previous = 0;
					var variable = 1;
					var scanning = 1;
					var ampersand = 1;
					var character = 0;
					var type = '';
					var props = rules;
					var children = rulesets;
					var reference = rule;
					var characters = type;

					while ( scanning )
						switch (
							( ( previous = character ),
							( character = ( 0,
							_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next )() ) )
						) {
							// (
							case 40:
								if (
									previous != 108 &&
									( 0,
									_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat )(
										characters,
										length - 1
									) == 58
								) {
									if (
										( 0,
										_Utility_js__WEBPACK_IMPORTED_MODULE_1__.indexof )(
											( characters += ( 0,
											_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace )(
												( 0,
												_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit )(
													character
												),
												'&',
												'&\f'
											) ),
											'&\f',
											( 0,
											_Utility_js__WEBPACK_IMPORTED_MODULE_1__.abs )(
												index ? points[ index - 1 ] : 0
											)
										) != -1
									)
										ampersand = -1;
									break;
								}
							// " ' [
							case 34:
							case 39:
							case 91:
								characters += ( 0,
								_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit )(
									character
								);
								break;
							// \t \n \r \s
							case 9:
							case 10:
							case 13:
							case 32:
								characters += ( 0,
								_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.whitespace )(
									previous
								);
								break;
							// \
							case 92:
								characters += ( 0,
								_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.escaping )(
									( 0,
									_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret )() -
										1,
									7
								);
								continue;
							// /
							case 47:
								switch (
									( 0,
									_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek )()
								) {
									case 42:
									case 47:
										( 0,
										_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append )(
											comment(
												( 0,
												_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.commenter )(
													( 0,
													_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next )(),
													( 0,
													_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret )()
												),
												root,
												parent,
												declarations
											),
											declarations
										);
										break;
									default:
										characters += '/';
								}
								break;
							// {
							case 123 * variable:
								points[ index++ ] =
									( 0,
									_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen )(
										characters
									) * ampersand;
							// } ; \0
							case 125 * variable:
							case 59:
							case 0:
								switch ( character ) {
									// \0 }
									case 0:
									case 125:
										scanning = 0;
									// ;
									case 59 + offset:
										if ( ampersand == -1 )
											characters = ( 0,
											_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace )(
												characters,
												/\f/g,
												''
											);
										if (
											property > 0 &&
											( 0,
											_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen )(
												characters
											) - length
										)
											( 0,
											_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append )(
												property > 32
													? declaration(
															characters + ';',
															rule,
															parent,
															length - 1,
															declarations
													  )
													: declaration(
															( 0,
															_Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace )(
																characters,
																' ',
																''
															) + ';',
															rule,
															parent,
															length - 2,
															declarations
													  ),
												declarations
											);
										break;
									// @ ;
									case 59:
										characters += ';';
									// { rule/at-rule
									default:
										( 0,
										_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append )(
											( reference = ruleset(
												characters,
												root,
												parent,
												index,
												offset,
												rules,
												points,
												type,
												( props = [] ),
												( children = [] ),
												length,
												rulesets
											) ),
											rulesets
										);

										if ( character === 123 )
											if ( offset === 0 )
												parse(
													characters,
													root,
													reference,
													reference,
													props,
													rulesets,
													length,
													points,
													children
												);
											else
												switch (
													atrule === 99 &&
													( 0,
													_Utility_js__WEBPACK_IMPORTED_MODULE_1__.charat )(
														characters,
														3
													) === 110
														? 100
														: atrule
												) {
													// d l m s
													case 100:
													case 108:
													case 109:
													case 115:
														parse(
															value,
															reference,
															reference,
															rule &&
																( 0,
																_Utility_js__WEBPACK_IMPORTED_MODULE_1__.append )(
																	ruleset(
																		value,
																		reference,
																		reference,
																		0,
																		0,
																		rules,
																		points,
																		type,
																		rules,
																		( props =
																			[] ),
																		length,
																		children
																	),
																	children
																),
															rules,
															children,
															length,
															points,
															rule
																? props
																: children
														);
														break;
													default:
														parse(
															characters,
															reference,
															reference,
															reference,
															[ '' ],
															children,
															0,
															points,
															children
														);
												}
								}

								( index = offset = property = 0 ),
									( variable = ampersand = 1 ),
									( type = characters = '' ),
									( length = pseudo );
								break;
							// :
							case 58:
								( length =
									1 +
									( 0,
									_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen )(
										characters
									) ),
									( property = previous );
							default:
								if ( variable < 1 )
									if ( character == 123 ) --variable;
									else if (
										character == 125 &&
										variable++ == 0 &&
										( 0,
										_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.prev )() ==
											125
									)
										continue;

								switch (
									( ( characters += ( 0,
									_Utility_js__WEBPACK_IMPORTED_MODULE_1__.from )(
										character
									) ),
									character * variable )
								) {
									// &
									case 38:
										ampersand =
											offset > 0
												? 1
												: ( ( characters += '\f' ),
												  -1 );
										break;
									// ,
									case 44:
										( points[ index++ ] =
											( ( 0,
											_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen )(
												characters
											) -
												1 ) *
											ampersand ),
											( ampersand = 1 );
										break;
									// @
									case 64:
										// -
										if (
											( 0,
											_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek )() ===
											45
										)
											characters += ( 0,
											_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.delimit )(
												( 0,
												_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.next )()
											);

										( atrule = ( 0,
										_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.peek )() ),
											( offset = length =
												( 0,
												_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen )(
													( type = characters +=
														( 0,
														_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.identifier )(
															( 0,
															_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.caret )()
														) )
												) ),
											character++;
										break;
									// -
									case 45:
										if (
											previous === 45 &&
											( 0,
											_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen )(
												characters
											) == 2
										)
											variable = 0;
								}
						}

					return rulesets;
				}

				/**
				 * @param {string} value
				 * @param {object} root
				 * @param {object?} parent
				 * @param {number} index
				 * @param {number} offset
				 * @param {string[]} rules
				 * @param {number[]} points
				 * @param {string} type
				 * @param {string[]} props
				 * @param {string[]} children
				 * @param {number} length
				 * @param {object[]} siblings
				 * @return {object}
				 */
				function ruleset(
					value,
					root,
					parent,
					index,
					offset,
					rules,
					points,
					type,
					props,
					children,
					length,
					siblings
				) {
					var post = offset - 1;
					var rule = offset === 0 ? rules : [ '' ];
					var size = ( 0,
					_Utility_js__WEBPACK_IMPORTED_MODULE_1__.sizeof )( rule );

					for ( var i = 0, j = 0, k = 0; i < index; ++i )
						for (
							var x = 0,
								y = ( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr )(
									value,
									post + 1,
									( post = ( 0,
									_Utility_js__WEBPACK_IMPORTED_MODULE_1__.abs )(
										( j = points[ i ] )
									) )
								),
								z = value;
							x < size;
							++x
						)
							if (
								( z = ( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_1__.trim )(
									j > 0
										? rule[ x ] + ' ' + y
										: ( 0,
										  _Utility_js__WEBPACK_IMPORTED_MODULE_1__.replace )(
												y,
												/&\f/g,
												rule[ x ]
										  )
								) )
							)
								props[ k++ ] = z;

					return ( 0,
					_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node )(
						value,
						root,
						parent,
						offset === 0
							? _Enum_js__WEBPACK_IMPORTED_MODULE_2__.RULESET
							: type,
						props,
						children,
						length,
						siblings
					);
				}

				/**
				 * @param {number} value
				 * @param {object} root
				 * @param {object?} parent
				 * @param {object[]} siblings
				 * @return {object}
				 */
				function comment( value, root, parent, siblings ) {
					return ( 0,
					_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node )(
						value,
						root,
						parent,
						_Enum_js__WEBPACK_IMPORTED_MODULE_2__.COMMENT,
						( 0, _Utility_js__WEBPACK_IMPORTED_MODULE_1__.from )(
							( 0,
							_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.char )()
						),
						( 0, _Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr )(
							value,
							2,
							-2
						),
						0,
						siblings
					);
				}

				/**
				 * @param {string} value
				 * @param {object} root
				 * @param {object?} parent
				 * @param {number} length
				 * @param {object[]} siblings
				 * @return {object}
				 */
				function declaration( value, root, parent, length, siblings ) {
					return ( 0,
					_Tokenizer_js__WEBPACK_IMPORTED_MODULE_0__.node )(
						value,
						root,
						parent,
						_Enum_js__WEBPACK_IMPORTED_MODULE_2__.DECLARATION,
						( 0, _Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr )(
							value,
							0,
							length
						),
						( 0, _Utility_js__WEBPACK_IMPORTED_MODULE_1__.substr )(
							value,
							length + 1,
							-1
						),
						length,
						siblings
					);
				}

				/***/
			},

		/***/ './node_modules/stylis/src/Prefixer.js':
			/*!*********************************************!*\
  !*** ./node_modules/stylis/src/Prefixer.js ***!
  \*********************************************/
			/***/ (
				__unused_webpack___webpack_module__,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ prefix: () => /* binding */ prefix,
						/* harmony export */
					}
				);
				/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! ./Enum.js */ './node_modules/stylis/src/Enum.js'
					);
				/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! ./Utility.js */ './node_modules/stylis/src/Utility.js'
					);

				/**
				 * @param {string} value
				 * @param {number} length
				 * @param {object[]} children
				 * @return {string}
				 */
				function prefix( value, length, children ) {
					switch (
						( 0, _Utility_js__WEBPACK_IMPORTED_MODULE_0__.hash )(
							value,
							length
						)
					) {
						// color-adjust
						case 5103:
							return (
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
								'print-' +
								value +
								value
							);
						// animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
						case 5737:
						case 4201:
						case 3177:
						case 3433:
						case 1641:
						case 4457:
						case 2921:
						// text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
						case 5572:
						case 6356:
						case 5844:
						case 3191:
						case 6645:
						case 3005:
						// mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
						case 6391:
						case 5879:
						case 5623:
						case 6135:
						case 4599:
						case 4855:
						// background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
						case 4215:
						case 6389:
						case 5109:
						case 5365:
						case 5621:
						case 3829:
							return (
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
								value +
								value
							);
						// tab-size
						case 4789:
							return (
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ +
								value +
								value
							);
						// appearance, user-select, transform, hyphens, text-size-adjust
						case 5349:
						case 4246:
						case 4810:
						case 6968:
						case 2756:
							return (
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
								value +
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ +
								value +
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS +
								value +
								value
							);
						// writing-mode
						case 5936:
							switch (
								( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat )(
									value,
									length + 11
								)
							) {
								// vertical-l(r)
								case 114:
									return (
										_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
										value +
										_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS +
										( 0,
										_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
											value,
											/[svh]\w+-[tblr]{2}/,
											'tb'
										) +
										value
									);
								// vertical-r(l)
								case 108:
									return (
										_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
										value +
										_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS +
										( 0,
										_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
											value,
											/[svh]\w+-[tblr]{2}/,
											'tb-rl'
										) +
										value
									);
								// horizontal(-)tb
								case 45:
									return (
										_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
										value +
										_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS +
										( 0,
										_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
											value,
											/[svh]\w+-[tblr]{2}/,
											'lr'
										) +
										value
									);
								// default: fallthrough to below
							}
						// flex, flex-direction, scroll-snap-type, writing-mode
						case 6828:
						case 4268:
						case 2903:
							return (
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
								value +
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS +
								value +
								value
							);
						// order
						case 6165:
							return (
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
								value +
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS +
								'flex-' +
								value +
								value
							);
						// align-items
						case 5187:
							return (
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
								value +
								( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
									value,
									/(\w+).+(:[^]+)/,
									_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
										'box-$1$2' +
										_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS +
										'flex-$1$2'
								) +
								value
							);
						// align-self
						case 5443:
							return (
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
								value +
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS +
								'flex-item-' +
								( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
									value,
									/flex-|-self/g,
									''
								) +
								( ! ( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match )(
									value,
									/flex-|baseline/
								)
									? _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS +
									  'grid-row-' +
									  ( 0,
									  _Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
											value,
											/flex-|-self/g,
											''
									  )
									: '' ) +
								value
							);
						// align-content
						case 4675:
							return (
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
								value +
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS +
								'flex-line-pack' +
								( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
									value,
									/align-content|flex-|-self/g,
									''
								) +
								value
							);
						// flex-shrink
						case 5548:
							return (
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
								value +
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS +
								( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
									value,
									'shrink',
									'negative'
								) +
								value
							);
						// flex-basis
						case 5292:
							return (
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
								value +
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS +
								( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
									value,
									'basis',
									'preferred-size'
								) +
								value
							);
						// flex-grow
						case 6060:
							return (
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
								'box-' +
								( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
									value,
									'-grow',
									''
								) +
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
								value +
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS +
								( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
									value,
									'grow',
									'positive'
								) +
								value
							);
						// transition
						case 4554:
							return (
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
								( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
									value,
									/([^-])(transform)/g,
									'$1' +
										_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
										'$2'
								) +
								value
							);
						// cursor
						case 6187:
							return (
								( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
									( 0,
									_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
										( 0,
										_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
											value,
											/(zoom-|grab)/,
											_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
												'$1'
										),
										/(image-set)/,
										_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
											'$1'
									),
									value,
									''
								) + value
							);
						// background, background-image
						case 5495:
						case 3959:
							return ( 0,
							_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
								value,
								/(image-set\([^]*)/,
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
									'$1' +
									'$`$1'
							);
						// justify-content
						case 4968:
							return (
								( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
									( 0,
									_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
										value,
										/(.+:)(flex-)?(.*)/,
										_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
											'box-pack:$3' +
											_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS +
											'flex-pack:$3'
									),
									/s.+-b[^;]+/,
									'justify'
								) +
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
								value +
								value
							);
						// justify-self
						case 4200:
							if (
								! ( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match )(
									value,
									/flex-|baseline/
								)
							)
								return (
									_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS +
									'grid-column-align' +
									( 0,
									_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr )(
										value,
										length
									) +
									value
								);
							break;
						// grid-template-(columns|rows)
						case 2592:
						case 3360:
							return (
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS +
								( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
									value,
									'template-',
									''
								) +
								value
							);
						// grid-(row|column)-start
						case 4384:
						case 3616:
							if (
								children &&
								children.some( function ( element, index ) {
									return (
										( length = index ),
										( 0,
										_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match )(
											element.props,
											/grid-\w+-end/
										)
									);
								} )
							) {
								return ~( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof )(
									value +
										( children = children[ length ].value ),
									'span',
									0
								)
									? value
									: _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS +
											( 0,
											_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
												value,
												'-start',
												''
											) +
											value +
											_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS +
											'grid-row-span:' +
											( ~( 0,
											_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof )(
												children,
												'span',
												0
											)
												? ( 0,
												  _Utility_js__WEBPACK_IMPORTED_MODULE_0__.match )(
														children,
														/\d+/
												  )
												: +( 0,
												  _Utility_js__WEBPACK_IMPORTED_MODULE_0__.match )(
														children,
														/\d+/
												  ) -
												  +( 0,
												  _Utility_js__WEBPACK_IMPORTED_MODULE_0__.match )(
														value,
														/\d+/
												  ) ) +
											';';
							}
							return (
								_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS +
								( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
									value,
									'-start',
									''
								) +
								value
							);
						// grid-(row|column)-end
						case 4896:
						case 4128:
							return children &&
								children.some( function ( element ) {
									return ( 0,
									_Utility_js__WEBPACK_IMPORTED_MODULE_0__.match )(
										element.props,
										/grid-\w+-start/
									);
								} )
								? value
								: _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS +
										( 0,
										_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
											( 0,
											_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
												value,
												'-end',
												'-span'
											),
											'span ',
											''
										) +
										value;
						// (margin|padding)-inline-(start|end)
						case 4095:
						case 3583:
						case 4068:
						case 2532:
							return (
								( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
									value,
									/(.+)-inline(.+)/,
									_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
										'$1$2'
								) + value
							);
						// (min|max)?(width|height|inline-size|block-size)
						case 8116:
						case 7059:
						case 5753:
						case 5535:
						case 5445:
						case 5701:
						case 4933:
						case 4677:
						case 5533:
						case 5789:
						case 5021:
						case 4765:
							// stretch, max-content, min-content, fill-available
							if (
								( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen )(
									value
								) -
									1 -
									length >
								6
							)
								switch (
									( 0,
									_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat )(
										value,
										length + 1
									)
								) {
									// (m)ax-content, (m)in-content
									case 109:
										// -
										if (
											( 0,
											_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat )(
												value,
												length + 4
											) !== 45
										)
											break;
									// (f)ill-available, (f)it-content
									case 102:
										return (
											( 0,
											_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
												value,
												/(.+:)(.+)-([^]+)/,
												'$1' +
													_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
													'$2-$3' +
													'$1' +
													_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MOZ +
													( ( 0,
													_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat )(
														value,
														length + 3
													) == 108
														? '$3'
														: '$2-$3' )
											) + value
										);
									// (s)tretch
									case 115:
										return ~( 0,
										_Utility_js__WEBPACK_IMPORTED_MODULE_0__.indexof )(
											value,
											'stretch',
											0
										)
											? prefix(
													( 0,
													_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
														value,
														'stretch',
														'fill-available'
													),
													length,
													children
											  ) + value
											: value;
								}
							break;
						// grid-(column|row)
						case 5152:
						case 5920:
							return ( 0,
							_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
								value,
								/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
								function ( _, a, b, c, d, e, f ) {
									return (
										_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS +
										a +
										':' +
										b +
										f +
										( c
											? _Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS +
											  a +
											  '-span:' +
											  ( d ? e : +e - +b ) +
											  f
											: '' ) +
										value
									);
								}
							);
						// position: sticky
						case 4949:
							// stick(y)?
							if (
								( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat )(
									value,
									length + 6
								) === 121
							)
								return (
									( 0,
									_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
										value,
										':',
										':' +
											_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT
									) + value
								);
							break;
						// display: (flex|inline-flex|grid|inline-grid)
						case 6444:
							switch (
								( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat )(
									value,
									( 0,
									_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat )(
										value,
										14
									) === 45
										? 18
										: 11
								)
							) {
								// (inline-)?fle(x)
								case 120:
									return (
										( 0,
										_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
											value,
											/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
											'$1' +
												_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
												( ( 0,
												_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat )(
													value,
													14
												) === 45
													? 'inline-'
													: '' ) +
												'box$3' +
												'$1' +
												_Enum_js__WEBPACK_IMPORTED_MODULE_1__.WEBKIT +
												'$2$3' +
												'$1' +
												_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS +
												'$2box$3'
										) + value
									);
								// (inline-)?gri(d)
								case 100:
									return (
										( 0,
										_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
											value,
											':',
											':' +
												_Enum_js__WEBPACK_IMPORTED_MODULE_1__.MS
										) + value
									);
							}
							break;
						// scroll-margin, scroll-margin-(top|right|bottom|left)
						case 5719:
						case 2647:
						case 2135:
						case 3927:
						case 2391:
							return (
								( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_0__.replace )(
									value,
									'scroll-',
									'scroll-snap-'
								) + value
							);
					}

					return value;
				}

				/***/
			},

		/***/ './node_modules/stylis/src/Serializer.js':
			/*!***********************************************!*\
  !*** ./node_modules/stylis/src/Serializer.js ***!
  \***********************************************/
			/***/ (
				__unused_webpack___webpack_module__,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ serialize: () =>
							/* binding */ serialize,
						/* harmony export */ stringify: () =>
							/* binding */ stringify,
						/* harmony export */
					}
				);
				/* harmony import */ var _Enum_js__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! ./Enum.js */ './node_modules/stylis/src/Enum.js'
					);
				/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_1__ =
					__webpack_require__(
						/*! ./Utility.js */ './node_modules/stylis/src/Utility.js'
					);

				/**
				 * @param {object[]} children
				 * @param {function} callback
				 * @return {string}
				 */
				function serialize( children, callback ) {
					var output = '';

					for ( var i = 0; i < children.length; i++ )
						output +=
							callback( children[ i ], i, children, callback ) ||
							'';

					return output;
				}

				/**
				 * @param {object} element
				 * @param {number} index
				 * @param {object[]} children
				 * @param {function} callback
				 * @return {string}
				 */
				function stringify( element, index, children, callback ) {
					switch ( element.type ) {
						case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.LAYER:
							if ( element.children.length ) break;
						case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.IMPORT:
						case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.DECLARATION:
							return ( element.return =
								element.return || element.value );
						case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.COMMENT:
							return '';
						case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.KEYFRAMES:
							return ( element.return =
								element.value +
								'{' +
								serialize( element.children, callback ) +
								'}' );
						case _Enum_js__WEBPACK_IMPORTED_MODULE_0__.RULESET:
							if (
								! ( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen )(
									( element.value =
										element.props.join( ',' ) )
								)
							)
								return '';
					}

					return ( 0,
					_Utility_js__WEBPACK_IMPORTED_MODULE_1__.strlen )(
						( children = serialize( element.children, callback ) )
					)
						? ( element.return =
								element.value + '{' + children + '}' )
						: '';
				}

				/***/
			},

		/***/ './node_modules/stylis/src/Tokenizer.js':
			/*!**********************************************!*\
  !*** ./node_modules/stylis/src/Tokenizer.js ***!
  \**********************************************/
			/***/ (
				__unused_webpack___webpack_module__,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ alloc: () => /* binding */ alloc,
						/* harmony export */ caret: () => /* binding */ caret,
						/* harmony export */ char: () => /* binding */ char,
						/* harmony export */ character: () =>
							/* binding */ character,
						/* harmony export */ characters: () =>
							/* binding */ characters,
						/* harmony export */ column: () => /* binding */ column,
						/* harmony export */ commenter: () =>
							/* binding */ commenter,
						/* harmony export */ copy: () => /* binding */ copy,
						/* harmony export */ dealloc: () =>
							/* binding */ dealloc,
						/* harmony export */ delimit: () =>
							/* binding */ delimit,
						/* harmony export */ delimiter: () =>
							/* binding */ delimiter,
						/* harmony export */ escaping: () =>
							/* binding */ escaping,
						/* harmony export */ identifier: () =>
							/* binding */ identifier,
						/* harmony export */ length: () => /* binding */ length,
						/* harmony export */ lift: () => /* binding */ lift,
						/* harmony export */ line: () => /* binding */ line,
						/* harmony export */ next: () => /* binding */ next,
						/* harmony export */ node: () => /* binding */ node,
						/* harmony export */ peek: () => /* binding */ peek,
						/* harmony export */ position: () =>
							/* binding */ position,
						/* harmony export */ prev: () => /* binding */ prev,
						/* harmony export */ slice: () => /* binding */ slice,
						/* harmony export */ token: () => /* binding */ token,
						/* harmony export */ tokenize: () =>
							/* binding */ tokenize,
						/* harmony export */ tokenizer: () =>
							/* binding */ tokenizer,
						/* harmony export */ whitespace: () =>
							/* binding */ whitespace,
						/* harmony export */
					}
				);
				/* harmony import */ var _Utility_js__WEBPACK_IMPORTED_MODULE_0__ =
					__webpack_require__(
						/*! ./Utility.js */ './node_modules/stylis/src/Utility.js'
					);

				var line = 1;
				var column = 1;
				var length = 0;
				var position = 0;
				var character = 0;
				var characters = '';

				/**
				 * @param {string} value
				 * @param {object | null} root
				 * @param {object | null} parent
				 * @param {string} type
				 * @param {string[] | string} props
				 * @param {object[] | string} children
				 * @param {object[]} siblings
				 * @param {number} length
				 */
				function node(
					value,
					root,
					parent,
					type,
					props,
					children,
					length,
					siblings
				) {
					return {
						value: value,
						root: root,
						parent: parent,
						type: type,
						props: props,
						children: children,
						line: line,
						column: column,
						length: length,
						return: '',
						siblings: siblings,
					};
				}

				/**
				 * @param {object} root
				 * @param {object} props
				 * @return {object}
				 */
				function copy( root, props ) {
					return ( 0,
					_Utility_js__WEBPACK_IMPORTED_MODULE_0__.assign )(
						node(
							'',
							null,
							null,
							'',
							null,
							null,
							0,
							root.siblings
						),
						root,
						{ length: -root.length },
						props
					);
				}

				/**
				 * @param {object} root
				 */
				function lift( root ) {
					while ( root.root )
						root = copy( root.root, { children: [ root ] } );
					( 0, _Utility_js__WEBPACK_IMPORTED_MODULE_0__.append )(
						root,
						root.siblings
					);
				}

				/**
				 * @return {number}
				 */
				function char() {
					return character;
				}

				/**
				 * @return {number}
				 */
				function prev() {
					character =
						position > 0
							? ( 0,
							  _Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat )(
									characters,
									--position
							  )
							: 0;

					if ( ( column--, character === 10 ) )
						( column = 1 ), line--;

					return character;
				}

				/**
				 * @return {number}
				 */
				function next() {
					character =
						position < length
							? ( 0,
							  _Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat )(
									characters,
									position++
							  )
							: 0;

					if ( ( column++, character === 10 ) )
						( column = 1 ), line++;

					return character;
				}

				/**
				 * @return {number}
				 */
				function peek() {
					return ( 0,
					_Utility_js__WEBPACK_IMPORTED_MODULE_0__.charat )(
						characters,
						position
					);
				}

				/**
				 * @return {number}
				 */
				function caret() {
					return position;
				}

				/**
				 * @param {number} begin
				 * @param {number} end
				 * @return {string}
				 */
				function slice( begin, end ) {
					return ( 0,
					_Utility_js__WEBPACK_IMPORTED_MODULE_0__.substr )(
						characters,
						begin,
						end
					);
				}

				/**
				 * @param {number} type
				 * @return {number}
				 */
				function token( type ) {
					switch ( type ) {
						// \0 \t \n \r \s whitespace token
						case 0:
						case 9:
						case 10:
						case 13:
						case 32:
							return 5;
						// ! + , / > @ ~ isolate token
						case 33:
						case 43:
						case 44:
						case 47:
						case 62:
						case 64:
						case 126:
						// ; { } breakpoint token
						case 59:
						case 123:
						case 125:
							return 4;
						// : accompanied token
						case 58:
							return 3;
						// " ' ( [ opening delimit token
						case 34:
						case 39:
						case 40:
						case 91:
							return 2;
						// ) ] closing delimit token
						case 41:
						case 93:
							return 1;
					}

					return 0;
				}

				/**
				 * @param {string} value
				 * @return {any[]}
				 */
				function alloc( value ) {
					return (
						( line = column = 1 ),
						( length = ( 0,
						_Utility_js__WEBPACK_IMPORTED_MODULE_0__.strlen )(
							( characters = value )
						) ),
						( position = 0 ),
						[]
					);
				}

				/**
				 * @param {any} value
				 * @return {any}
				 */
				function dealloc( value ) {
					return ( characters = '' ), value;
				}

				/**
				 * @param {number} type
				 * @return {string}
				 */
				function delimit( type ) {
					return ( 0, _Utility_js__WEBPACK_IMPORTED_MODULE_0__.trim )(
						slice(
							position - 1,
							delimiter(
								type === 91
									? type + 2
									: type === 40
									? type + 1
									: type
							)
						)
					);
				}

				/**
				 * @param {string} value
				 * @return {string[]}
				 */
				function tokenize( value ) {
					return dealloc( tokenizer( alloc( value ) ) );
				}

				/**
				 * @param {number} type
				 * @return {string}
				 */
				function whitespace( type ) {
					while ( ( character = peek() ) )
						if ( character < 33 ) next();
						else break;

					return token( type ) > 2 || token( character ) > 3
						? ''
						: ' ';
				}

				/**
				 * @param {string[]} children
				 * @return {string[]}
				 */
				function tokenizer( children ) {
					while ( next() )
						switch ( token( character ) ) {
							case 0:
								( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append )(
									identifier( position - 1 ),
									children
								);
								break;
							case 2:
								( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append )(
									delimit( character ),
									children
								);
								break;
							default:
								( 0,
								_Utility_js__WEBPACK_IMPORTED_MODULE_0__.append )(
									( 0,
									_Utility_js__WEBPACK_IMPORTED_MODULE_0__.from )(
										character
									),
									children
								);
						}

					return children;
				}

				/**
				 * @param {number} index
				 * @param {number} count
				 * @return {string}
				 */
				function escaping( index, count ) {
					while ( --count && next() )
						// not 0-9 A-F a-f
						if (
							character < 48 ||
							character > 102 ||
							( character > 57 && character < 65 ) ||
							( character > 70 && character < 97 )
						)
							break;

					return slice(
						index,
						caret() + ( count < 6 && peek() == 32 && next() == 32 )
					);
				}

				/**
				 * @param {number} type
				 * @return {number}
				 */
				function delimiter( type ) {
					while ( next() )
						switch ( character ) {
							// ] ) " '
							case type:
								return position;
							// " '
							case 34:
							case 39:
								if ( type !== 34 && type !== 39 )
									delimiter( character );
								break;
							// (
							case 40:
								if ( type === 41 ) delimiter( type );
								break;
							// \
							case 92:
								next();
								break;
						}

					return position;
				}

				/**
				 * @param {number} type
				 * @param {number} index
				 * @return {number}
				 */
				function commenter( type, index ) {
					while ( next() )
						// //
						if ( type + character === 47 + 10 ) break;
						// /*
						else if (
							type + character === 42 + 42 &&
							peek() === 47
						)
							break;

					return (
						'/*' +
						slice( index, position - 1 ) +
						'*' +
						( 0, _Utility_js__WEBPACK_IMPORTED_MODULE_0__.from )(
							type === 47 ? type : next()
						)
					);
				}

				/**
				 * @param {number} index
				 * @return {string}
				 */
				function identifier( index ) {
					while ( ! token( peek() ) ) next();

					return slice( index, position );
				}

				/***/
			},

		/***/ './node_modules/stylis/src/Utility.js':
			/*!********************************************!*\
  !*** ./node_modules/stylis/src/Utility.js ***!
  \********************************************/
			/***/ (
				__unused_webpack___webpack_module__,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ abs: () => /* binding */ abs,
						/* harmony export */ append: () => /* binding */ append,
						/* harmony export */ assign: () => /* binding */ assign,
						/* harmony export */ charat: () => /* binding */ charat,
						/* harmony export */ combine: () =>
							/* binding */ combine,
						/* harmony export */ filter: () => /* binding */ filter,
						/* harmony export */ from: () => /* binding */ from,
						/* harmony export */ hash: () => /* binding */ hash,
						/* harmony export */ indexof: () =>
							/* binding */ indexof,
						/* harmony export */ match: () => /* binding */ match,
						/* harmony export */ replace: () =>
							/* binding */ replace,
						/* harmony export */ sizeof: () => /* binding */ sizeof,
						/* harmony export */ strlen: () => /* binding */ strlen,
						/* harmony export */ substr: () => /* binding */ substr,
						/* harmony export */ trim: () => /* binding */ trim,
						/* harmony export */
					}
				);
				/**
				 * @param {number}
				 * @return {number}
				 */
				var abs = Math.abs;

				/**
				 * @param {number}
				 * @return {string}
				 */
				var from = String.fromCharCode;

				/**
				 * @param {object}
				 * @return {object}
				 */
				var assign = Object.assign;

				/**
				 * @param {string} value
				 * @param {number} length
				 * @return {number}
				 */
				function hash( value, length ) {
					return charat( value, 0 ) ^ 45
						? ( ( ( ( ( ( ( length << 2 ) ^ charat( value, 0 ) ) <<
								2 ) ^
								charat( value, 1 ) ) <<
								2 ) ^
								charat( value, 2 ) ) <<
								2 ) ^
								charat( value, 3 )
						: 0;
				}

				/**
				 * @param {string} value
				 * @return {string}
				 */
				function trim( value ) {
					return value.trim();
				}

				/**
				 * @param {string} value
				 * @param {RegExp} pattern
				 * @return {string?}
				 */
				function match( value, pattern ) {
					return ( value = pattern.exec( value ) )
						? value[ 0 ]
						: value;
				}

				/**
				 * @param {string} value
				 * @param {(string|RegExp)} pattern
				 * @param {string} replacement
				 * @return {string}
				 */
				function replace( value, pattern, replacement ) {
					return value.replace( pattern, replacement );
				}

				/**
				 * @param {string} value
				 * @param {string} search
				 * @param {number} position
				 * @return {number}
				 */
				function indexof( value, search, position ) {
					return value.indexOf( search, position );
				}

				/**
				 * @param {string} value
				 * @param {number} index
				 * @return {number}
				 */
				function charat( value, index ) {
					return value.charCodeAt( index ) | 0;
				}

				/**
				 * @param {string} value
				 * @param {number} begin
				 * @param {number} end
				 * @return {string}
				 */
				function substr( value, begin, end ) {
					return value.slice( begin, end );
				}

				/**
				 * @param {string} value
				 * @return {number}
				 */
				function strlen( value ) {
					return value.length;
				}

				/**
				 * @param {any[]} value
				 * @return {number}
				 */
				function sizeof( value ) {
					return value.length;
				}

				/**
				 * @param {any} value
				 * @param {any[]} array
				 * @return {any}
				 */
				function append( value, array ) {
					return array.push( value ), value;
				}

				/**
				 * @param {string[]} array
				 * @param {function} callback
				 * @return {string}
				 */
				function combine( array, callback ) {
					return array.map( callback ).join( '' );
				}

				/**
				 * @param {string[]} array
				 * @param {RegExp} pattern
				 * @return {string[]}
				 */
				function filter( array, pattern ) {
					return array.filter( function ( value ) {
						return ! match( value, pattern );
					} );
				}

				/***/
			},

		/***/ './node_modules/tiny-invariant/dist/esm/tiny-invariant.js':
			/*!****************************************************************!*\
  !*** ./node_modules/tiny-invariant/dist/esm/tiny-invariant.js ***!
  \****************************************************************/
			/***/ (
				__unused_webpack___webpack_module__,
				__webpack_exports__,
				__webpack_require__
			) => {
				'use strict';
				__webpack_require__.r( __webpack_exports__ );
				/* harmony export */ __webpack_require__.d(
					__webpack_exports__,
					{
						/* harmony export */ default: () =>
							/* binding */ invariant,
						/* harmony export */
					}
				);
				var isProduction = 'development' === 'production';
				var prefix = 'Invariant failed';
				function invariant( condition, message ) {
					if ( condition ) {
						return;
					}
					if ( isProduction ) {
						throw new Error( prefix );
					}
					var provided =
						typeof message === 'function' ? message() : message;
					var value = provided
						? ''.concat( prefix, ': ' ).concat( provided )
						: prefix;
					throw new Error( value );
				}

				/***/
			},

		/***/ './resources/blocks/single-choice/block.json':
			/*!***************************************************!*\
  !*** ./resources/blocks/single-choice/block.json ***!
  \***************************************************/
			/***/ ( module ) => {
				'use strict';
				module.exports = /*#__PURE__*/ JSON.parse(
					'{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"formgent/single-choice","title":"Single Choice","category":"formgent","description":"FormGent Single Choice field.","textdomain":"formgent","attributes":{"id":{"type":"string","default":""},"name":{"type":"string","default":"single-choice"},"value":{"type":"string","default":""},"options":{"type":"array","default":[]},"label":{"type":"string","default":"Single Choice"},"label_alignment":{"type":"string","default":"top"},"sub_label":{"type":"string","default":""},"style":{"type":"string","default":"frame"},"required":{"type":"boolean","default":false}},"supports":{"interactivity":true},"editorScript":"file:index.js","style":"file:style-index.css","editorStyle":"file:index.css","render":"file:render.php"}'
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
			/******/ 'single-choice/index': 0,
			/******/ 'single-choice/style-index': 0,
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
	/******/ /* webpack/runtime/nonce */
	/******/ ( () => {
		/******/ __webpack_require__.nc = undefined;
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
		[ 'single-choice/style-index' ],
		() => __webpack_require__( './resources/blocks/single-choice/index.js' )
	);
	/******/ __webpack_exports__ = __webpack_require__.O( __webpack_exports__ );
	/******/
	/******/
} )();
//# sourceMappingURL=index.js.map
