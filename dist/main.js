/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --primary-orange: #CAA285;\\n    --secondary-orange: #FAF6F3;\\n    --blue: #0038FF;\\n    --red: #AE0303;\\n    --text-grey: #C4BFB6;\\n    --text-green: #18211D; \\n}\\n\\n* {\\n    box-sizing: border-box;\\n    padding: 0;\\n    margin: 0;\\n}\\n\\nhtml {\\n    min-height: 100vh;\\n}\\n\\nbody {\\n    font-family: 'Jost', sans-serif;\\n    min-height: 100vh;\\n    display: grid;\\n    grid-template-rows: auto 1fr auto;\\n    grid-template-areas: \\n    \\\"header\\\"\\n    \\\"main\\\"\\n    \\\"footer\\\";\\n}\\n\\nbutton, input {\\n    border: none;\\n    outline: none;\\n    background: transparent;\\n}\\n\\ntextarea {\\n    border: none;\\n    outline: none;\\n    background: transparent;\\n    font-family: 'Jost', sans-serif;\\n}\\n\\nheader {\\n    grid-area: header;\\n}\\n\\nmain {\\n    grid-area: main;\\n}\\n\\nfooter {    \\n    grid-area: footer;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    gap: 5px;\\n    padding: 10px;\\n}\\n\\nul {\\n    list-style-type: none;\\n}\\n\\nh1, h2, h3, p {\\n    color: var(--text-green);\\n}\\n\\np {\\n    font-size: 13px;\\n}\\n\\ninput[type=\\\"date\\\"]:not(:valid)::-webkit-datetime-edit {\\n    color: var(--text-grey);\\n}\\n\\ninput[type=\\\"date\\\"] {\\n    font-family: 'Jost', sans-serif;\\n    color: black;\\n}\\n\\n/*--------------------------------------------------------------\\n# General\\n--------------------------------------------------------------*/\\n.right {\\n    margin: 15px 20px 10px 20px;\\n}\\n\\n.add-btn {\\n    display: flex;\\n    align-items: center;\\n    width: 100%;\\n    gap: 8px;\\n    padding: 10px 0 10px 0;\\n}\\n\\n.submit-btn, .close-btn {\\n    border-radius: 60px;\\n    padding: 10px 20px 10px 20px;\\n    color: white;\\n    background-color: var(--primary-orange);\\n}\\n\\n.close-btn {\\n    background-color: var(--red);\\n}\\n\\n.add-btn:hover {\\n    background-color: var(--secondary-orange);\\n}\\n\\n.title-input {\\n    background-color: white;\\n    border-radius: 8px;\\n    color: black;\\n    padding: 10px 20px 10px 8px;\\n    width: 95%;\\n    font-weight: 700;\\n}\\n\\n.hidden {\\n    position: absolute;\\n    max-height: 0;\\n    transition: max-height 1s ease-out, opacity 300ms ease;\\n    opacity: 0;\\n    top: 0;\\n    left: 0;\\n    z-index: -1;\\n}\\n\\n.active {\\n    max-height: 200px;\\n    transition: max-height 1s ease-out, opacity 300ms ease;\\n}\\n\\n/*--------------------------------------------------------------\\n# Navigation\\n--------------------------------------------------------------*/\\nheader {\\n    background-color: var(--primary-orange);\\n    padding: 10px 12px 10px 12px;\\n    display: flex;\\n    align-items: center;\\n    justify-content: space-between;\\n}\\n\\nheader * {\\n    color: white\\n}\\n\\n#logo {\\n    font-weight: 800;\\n}\\n\\nnav {\\n    background-color: var(--secondary-orange);\\n    padding: 15px;\\n    display: none;\\n}\\n\\nnav.open {\\n    display: block;\\n}\\n\\n#nav-links {\\n    margin-bottom: 10px;\\n}\\n\\n.nav-link {\\n    color: var(--text-green);\\n    display: flex;\\n    gap: 8px;\\n    align-items: center;\\n    font-weight: 600;\\n}\\n\\n#nav-projects {\\n    margin-top: 10px;\\n}\\n\\n#projectTitle:hover {\\n    box-shadow: 1px 1px 8px 1px; \\n}\\n\\n#submitProject {\\n    background-color: var(--primary-orange);\\n    color: white;\\n}\\n\\n.project-submit {\\n    width: 95%;\\n    display: flex;\\n    justify-content: flex-end;\\n    margin-top: 10px;\\n}\\n\\n#projectForm > .submit-wrapper {\\n    margin-top: 10px;\\n    display: flex;\\n    justify-content: flex-end;\\n    width: 95%;\\n}\\n\\n/*--------------------------------------------------------------\\n# Page\\n--------------------------------------------------------------*/\\n/* Task Form */\\n#addTaskForm {\\n    display: none;\\n    border: 2px var(--text-grey) solid;\\n    border-radius: 8px;\\n    padding: 20px 10px 20px 10px;\\n    color: var(--text-grey);\\n}\\n\\n#addTaskForm.active {\\n    display: block;\\n}\\n\\n#taskTitle, #taskDescription {\\n    width: 100%;\\n    padding: 0;\\n}\\n\\n.form-body {\\n    display: flex;\\n    gap: 10px;\\n}\\n\\n.form-footer {\\n    display: flex;\\n    justify-content: flex-end;\\n    gap: 15px;\\n    margin-top: 15px\\n}\\n\\n.project-list {\\n    display: none;\\n    background-color: var(--secondary-orange);\\n    padding: 10px 50px 10px 10px;\\n    width: inherit;\\n    border-radius: 8px;\\n    box-shadow: 1px 1px 8px 1px \\n}\\n\\n.project-list.active {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 5px;\\n    z-index: 10;\\n    position: absolute;\\n}\\n\\n.selected {\\n    font-size: 13px;\\n}\\n\\n/*--------------------------------------------------------------\\n# Task Card\\n--------------------------------------------------------------*/\\n.task-card {\\n    display: flex;\\n    flex-direction: column;\\n    border: 1px var(--text-green) solid;\\n    border-radius: 6px;\\n    padding: 11px 10px 11px 14px;\\n    margin: 10px 0 10px 0;\\n    gap: 4px;\\n}\\n\\n.task-header, .task-footer {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n}\\n\\n.task-footer {\\n    margin-top: 10px;\\n}\\n\\n.project-tag {\\n    border: 1px solid var(--primary-orange);\\n    color: var(--primary-orange);\\n    font-size: 10px;\\n    padding: 5px 14px 5px 14px;\\n    border-radius: 4px;\\n}\\n\\n.project-tag:hover {\\n    background-color: var(--primary-orange);\\n    color: white;\\n}\\n\\n\\n\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://friday-productivity-app/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://friday-productivity-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://friday-productivity-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/generate-unique-id/index.js":
/*!**************************************************!*\
  !*** ./node_modules/generate-unique-id/index.js ***!
  \**************************************************/
/***/ ((module) => {

eval("function getRandomNumber(limit) {\n  return Math.floor(Math.random() * limit).toString();\n}\n\nfunction filterSymbols(excludeSymbols, group) {\n  let newGroup = group;\n  excludeSymbols.forEach((symbol) => {\n    newGroup = newGroup.replace(symbol, '');\n  });\n\n  return newGroup;\n}\n\nfunction createId(availableChars, idLength) {\n  let id = '';\n\n  for (let i = 0; i < idLength; i += 1) {\n    id += availableChars[getRandomNumber(availableChars.length)];\n  }\n\n  return id;\n}\n\nfunction generateUniqueId({\n  length = 20,\n  useLetters = true,\n  useNumbers = true,\n  includeSymbols = [],\n  excludeSymbols = [],\n} = {}) {\n  let letters = 'abcdefghijklmnopqrstuvwxyz';\n  let numbers = '0123456789';\n  let availableChars = [];\n  let lettersArr = [];\n  let numbersArr = [];\n\n  if (useLetters) {\n    if (excludeSymbols.length) letters = filterSymbols(excludeSymbols, letters);\n    lettersArr = letters.split('');\n  }\n\n  if (useNumbers) {\n    if (excludeSymbols.length) numbers = filterSymbols(excludeSymbols, numbers);\n    numbersArr = numbers.split('');\n  }\n\n  availableChars = [...lettersArr, ...numbersArr, ...includeSymbols];\n\n  return createId(availableChars, length);\n}\n\nmodule.exports = generateUniqueId;\n\n\n//# sourceURL=webpack://friday-productivity-app/./node_modules/generate-unique-id/index.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://friday-productivity-app/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://friday-productivity-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://friday-productivity-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://friday-productivity-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://friday-productivity-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://friday-productivity-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://friday-productivity-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/domUtils.js":
/*!*************************!*\
  !*** ./src/domUtils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addGlobalEventListener\": () => (/* binding */ addGlobalEventListener),\n/* harmony export */   \"createElement\": () => (/* binding */ createElement),\n/* harmony export */   \"querySelector\": () => (/* binding */ querySelector),\n/* harmony export */   \"querySelectorAll\": () => (/* binding */ querySelectorAll),\n/* harmony export */   \"toggleClasses\": () => (/* binding */ toggleClasses)\n/* harmony export */ });\nfunction createElement(type, options = {}) {\n    const element = document.createElement(type);\n    Object.entries(options).forEach(([key, value]) => {\n      if (key === \"class\") {\n        element.classList.add(value)\n        return\n      }\n  \n      if (key === \"dataset\") {\n        Object.entries(value).forEach(([dataKey, dataValue]) => {\n          element.dataset[dataKey] = dataValue\n        })\n        return\n      }\n  \n      if (key === \"text\") {\n        element.textContent = value\n        return\n      }\n  \n      element.setAttribute(key, value)\n    })\n    return element\n};\n\nfunction querySelector(selector, parent = document) {\n  return parent.querySelector(selector)\n}\n\nfunction querySelectorAll(selector, parent = document) {\n  return [...parent.querySelectorAll(selector)]\n}\n\nfunction addGlobalEventListener(\n  type,\n  selector,\n  callback,\n  options,\n  parent = document\n) {\n  parent.addEventListener(\n    type,\n    e => {\n      if (e.target.matches(selector)) callback(e)\n    },\n    options\n  )\n};\n\nfunction toggleClasses(selector, currentClass, newClass) {\n  if(selector.classList.contains(currentClass)) {\n    selector.classList.remove(currentClass);\n    selector.classList.add(newClass);\n  } else {\n    selector.classList.remove(newClass);\n    selector.classList.add(currentClass);\n  }\n}\n\n//# sourceURL=webpack://friday-productivity-app/./src/domUtils.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domUtils */ \"./src/domUtils.js\");\n/* harmony import */ var _modules_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/nav */ \"./src/modules/nav.js\");\n/* harmony import */ var _modules_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/view */ \"./src/modules/view.js\");\n/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/storage */ \"./src/modules/storage.js\");\n\n\n\n\n\n\nwindow.addEventListener('DOMContentLoaded', () => {\n    (0,_modules_view__WEBPACK_IMPORTED_MODULE_3__.displayPage)('All Tasks');\n    (0,_modules_view__WEBPACK_IMPORTED_MODULE_3__.displayPageTasks)(_modules_storage__WEBPACK_IMPORTED_MODULE_4__.tasks, 'All Tasks');\n});\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://friday-productivity-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/nav.js":
/*!****************************!*\
  !*** ./src/modules/nav.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"navListeners\": () => (/* binding */ navListeners)\n/* harmony export */ });\n/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domUtils */ \"./src/domUtils.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n\n\nconst navListeners = (() => {\n    // Listener to open and close navbar\n    const hamburgerListener = () => {\n        const hamburger = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.querySelector)('#hamburger');\n        const navBar = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.querySelector)('nav')\n        hamburger.addEventListener('click', () => {\n            navBar.classList.toggle('open');\n        });\n    };\n\n    // Listener to open Add Project Form\n    const addProjectListener = () => {\n        const openProjectForm = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.querySelector)('#openProjectForm');\n        const projectForm = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.querySelector)('#projectForm');\n        openProjectForm.addEventListener('click', () => {\n            (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.toggleClasses)(projectForm, 'hidden', 'active');\n        });\n    };\n\n    // Listener to submit project\n    const submitProjectListener = () => {\n        const submitProject = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.querySelector)('#submitProject');\n        submitProject.addEventListener('click', () => {\n            (0,_project__WEBPACK_IMPORTED_MODULE_1__.addNewProject)();\n        });\n    }\n\n    // Listener for nav links\n    const navLinksListener = () => {\n        const navLinks = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.querySelectorAll)('.nav-link');\n        navLinks.forEach((navLink) => {\n            navLink.addEventListener('click', () => {\n\n            })\n        });\n    }\n    hamburgerListener();\n    addProjectListener();\n    // navLinksListener();\n    submitProjectListener();\n    return {\n        hamburgerListener,\n        addProjectListener,\n        submitProjectListener\n    }\n})();\n\n//# sourceURL=webpack://friday-productivity-app/./src/modules/nav.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewProject\": () => (/* binding */ addNewProject),\n/* harmony export */   \"createProjectDropdown\": () => (/* binding */ createProjectDropdown),\n/* harmony export */   \"getProjectName\": () => (/* binding */ getProjectName)\n/* harmony export */ });\n/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domUtils */ \"./src/domUtils.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n\n\nconst generateUniqueId = __webpack_require__(/*! generate-unique-id */ \"./node_modules/generate-unique-id/index.js\");\n\n// Factory function for project\nconst Project = (id, title, tasks) => {\n    return {id, title, tasks: []}\n}\n\n// Function to prefill selected project on dropdown\n// Input: Page Name String\nfunction getProjectName(pageName) {\n    let prefill = 'Select Project';\n    _storage__WEBPACK_IMPORTED_MODULE_1__.projects.forEach((project) => {\n        if(project.title === pageName) {\n            prefill = pageName;\n        }\n    });\n    return prefill\n}\n\n// Function to add a new project\nfunction addNewProject() {\n    const title = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.querySelector)('#projectTitle').value;\n    (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.querySelector)('#projectTitle').value = '';\n\n    let id = generateUniqueId({length: 2});\n\n    let newProject = Project(id, title);\n    _storage__WEBPACK_IMPORTED_MODULE_1__.projects.push(newProject);\n    _storage__WEBPACK_IMPORTED_MODULE_1__.projectStorage.saveProjects();\n}\n\n// Function to create project dropdown list\nfunction createProjectDropdown() {\n    const projectList = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class: 'project-list'});\n    _storage__WEBPACK_IMPORTED_MODULE_1__.projects.forEach((project, id) => {\n        let projectOption = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {class:'project-item', text: project.title, id: id});\n        projectList.append(projectOption);\n    });\n    return projectList\n}\n\n\n\n\n//# sourceURL=webpack://friday-productivity-app/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectStorage\": () => (/* binding */ projectStorage),\n/* harmony export */   \"projects\": () => (/* binding */ projects),\n/* harmony export */   \"taskStorage\": () => (/* binding */ taskStorage),\n/* harmony export */   \"tasks\": () => (/* binding */ tasks)\n/* harmony export */ });\nlet projects;\nlet tasks;\n\n// localStorage function for projects\nconst projectStorage = (() => {\n    const saveProjects = () => {\n        localStorage.setItem('projects', JSON.stringify(projects));\n    };\n    const getProjects = () => {\n        projects = JSON.parse(window.localStorage.getItem('projects'));\n    };\n    const reloadProjects = () => {\n        if(localStorage.getItem('projects')) {\n            projects = JSON.parse(localStorage.getItem('projects'));\n        } else {\n            projects = [];\n        }\n    }\n    reloadProjects();\n    saveProjects();\n\n    return {\n        saveProjects,\n        getProjects,\n        reloadProjects\n    }\n})();\n\n// localStorage function for all tasks\nconst taskStorage = (() => {\n    \n    const saveTasks = () => {\n        localStorage.setItem('tasks', JSON.stringify(tasks));\n    };\n    const getTasks = () => {\n        tasks = JSON.parse(window.localStorage.getItem('tasks'));\n    };\n    const reloadTasks = () => {\n        if(localStorage.getItem('tasks')) {\n            tasks = JSON.parse(localStorage.getItem('tasks'));\n        } else {\n            tasks = [];\n        }\n    }\n    reloadTasks();\n    saveTasks();\n\n    return {\n        saveTasks,\n        getTasks,\n        reloadTasks\n    }\n})();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://friday-productivity-app/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addNewTask\": () => (/* binding */ addNewTask),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask)\n/* harmony export */ });\n/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domUtils */ \"./src/domUtils.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"./src/modules/view.js\");\nconst generateUniqueId = __webpack_require__(/*! generate-unique-id */ \"./node_modules/generate-unique-id/index.js\");\n\n\n\n\n// Task Factory Function\nconst Task = (id, title, description, project, dueDate) => {\n    return {id, title, description, project, dueDate}\n}\n\n// Function to add new task\nfunction addNewTask() {\n    const id = generateUniqueId({length: 2});\n    const title = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.querySelector)('#taskTitle').value;\n    const description = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.querySelector)('#taskDescription').value;\n    const dueDate = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.querySelector)('#taskDate').value;\n    const project = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.querySelector)('.selected', parent = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.querySelector)('#project-select'));\n\n    let newTask = Task(id, title, description, project, dueDate);\n    _storage__WEBPACK_IMPORTED_MODULE_1__.tasks.push(newTask);\n    _storage__WEBPACK_IMPORTED_MODULE_1__.taskStorage.saveTasks();\n}\n\n// Function to delete task\n// Input: Integer id\nfunction deleteTask(id) {\n    let index = _storage__WEBPACK_IMPORTED_MODULE_1__.tasks.find(t => t.id === id);\n    _storage__WEBPACK_IMPORTED_MODULE_1__.tasks.splice(index, 1);\n    _storage__WEBPACK_IMPORTED_MODULE_1__.taskStorage.saveTasks();\n    (0,_view__WEBPACK_IMPORTED_MODULE_2__.displayPageTasks)(_storage__WEBPACK_IMPORTED_MODULE_1__.tasks)\n    \n    _storage__WEBPACK_IMPORTED_MODULE_1__.projects.forEach((project) => {\n        let index = project.tasks.find(t => t.id === id);\n        project.tasks.splice(index, 1);\n        projectStorage.saveProjects();\n    });\n}\n\n\n\n\n\n//# sourceURL=webpack://friday-productivity-app/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/view.js":
/*!*****************************!*\
  !*** ./src/modules/view.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayPage\": () => (/* binding */ displayPage),\n/* harmony export */   \"displayPageTasks\": () => (/* binding */ displayPageTasks)\n/* harmony export */ });\n/* harmony import */ var _domUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../domUtils */ \"./src/domUtils.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n\n\n\n\n\n// Function to display pages\n// Input: Page Name String\nconst rightScreen = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.querySelector)('.right');\nfunction displayPage(pageName) {\n    // Clear Data\n    rightScreen.innerHTML = '';\n\n    const page = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.createElement)('div');\n    page.innerHTML = `\n    <h2>${pageName}</h2>\n    <form id=\"addTaskForm\">\n        <div class=\"form-header\">\n            <input type=\"text\" class=\"title-input\" id=\"taskTitle\" placeholder=\"Untitled\" required>\n            <textarea class=\"description-input\" id=\"taskDescription\" placeholder=\"Description\" ></textarea>\n        </div>\n        <div class=\"form-body\">\n            <input type=\"date\" id=\"taskDate\" required>\n            <div id=\"project-select\">\n                <div class=\"selected\">${(0,_project__WEBPACK_IMPORTED_MODULE_1__.getProjectName)(pageName)}</div>\n                <div class=\"project-list\"></div>\n            </div>\n        </div>\n        <div class=\"form-footer\">\n            <button type=\"button\" class=\"close-btn\" id=\"closeTaskForm\">Cancel</button>\n            <button type=\"submit\" class=\"submit-btn\" id=\"submitTask\">Add Task</button>\n        </div>\n    </form>\n    <button class=\"add-btn\" id=\"openTaskForm\">\n        <i class=\"fa-solid fa-plus\"></i>\n        Add Task\n    </button>`;\n    rightScreen.append(page);\n\n    // Create dropdown and add to project list\n    const projectDropdown = (0,_project__WEBPACK_IMPORTED_MODULE_1__.createProjectDropdown)();\n    (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.querySelector)('.project-list').append(projectDropdown);\n\n    // Page Event Listeners\n    pageEventListeners(pageName);\n}\n\n// Function to display page tasks\n// Input: Array of Task Objects\nfunction displayPageTasks(taskArr, pageName) {\n    const taskList = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.createElement)('ul', {id: 'taskList'});\n    rightScreen.append(taskList);\n    taskList.innerHTML = '';\n    taskArr.forEach((task) => {\n        const taskCard = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.createElement)('li', {class: 'task-card', id: task.id});\n        taskCard.innerHTML = `\n        <div class=\"task-header\">\n            <h4 class='task-title'>${task.title}</h4>\n            <div class=\"header-right\">\n                <p class=\"due-date\"><i class=\"fa-regular fa-clock\"></i>${task.dueDate}</p>\n            </div>\n        </div>\n        <div class=\"task-content hidden\">\n            <p class=\"task-description\">${task.description}</p>\n            <div class=\"task-footer\">\n                <button class=\"project-tag\">${(0,_project__WEBPACK_IMPORTED_MODULE_1__.getProjectName)(pageName)}</button>\n                <div class=\"footer-right\">\n                    <button class=\"check-btn\" id=${task.id}><i class=\"fa-solid fa-check\"></i></button>\n                    <button class=\"edit-btn\" id=${task.id}><i class=\"fa-regular fa-pen-to-square\"></i></button>\n                </div>\n            </div>\n        </div>`;\n        taskList.append(taskCard);\n    });\n    taskCardEventListeners();\n}\n\n// Function for page event listeners\n// Input: String pagename\nconst pageEventListeners = (pageName) => {\n    const addTaskForm = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.querySelector)('#addTaskForm');\n    const openTaskFormListener = () => {\n        const openTaskForm = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.querySelector)('#openTaskForm');\n        openTaskForm.addEventListener('click', () => {\n            addTaskForm.classList.toggle('active');\n        });\n    };\n\n    const closeTaskFormListener = () => {\n        const closeTaskForm = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.querySelector)('#closeTaskForm');\n        closeTaskForm.addEventListener('click', () => {\n            addTaskForm.classList.remove('active');\n        });\n    }\n\n    const projectDropdownListener = () => {\n        const projectSelect = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.querySelector)('#project-select')\n        const projectList = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.querySelector)('.project-list', parent = projectSelect);\n        projectSelect.addEventListener('click', () => {\n            projectList.classList.toggle('active'); \n        });\n    };\n\n    const submitTaskListener = () => {\n        const submitTask = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.querySelector)('#submitTask');\n        submitTask.addEventListener('click', () => {\n            (0,_task__WEBPACK_IMPORTED_MODULE_2__.addNewTask)();\n            displayPageTasks(_storage__WEBPACK_IMPORTED_MODULE_3__.tasks, pageName);\n        });\n    }\n\n    openTaskFormListener();\n    closeTaskFormListener();\n    projectDropdownListener();\n    submitTaskListener();\n\n    return {\n        openTaskFormListener,\n        closeTaskFormListener,\n        projectDropdownListener,\n        submitTaskListener\n    }\n};\n\nconst taskCardEventListeners = () => {\n    const expandCardListener = () => {\n        const taskCards = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.querySelectorAll)('.task-card');\n        taskCards.forEach((taskCard) => {\n            taskCard.addEventListener('click', (e) => {\n                const taskContent = e.currentTarget.querySelector('.task-content');\n                (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.toggleClasses)(taskContent, 'hidden', 'active');\n            });\n        })\n    };\n\n    const completeTaskListener = () => {\n        const checkButtons = (0,_domUtils__WEBPACK_IMPORTED_MODULE_0__.querySelectorAll)('.check-btn');\n        checkButtons.forEach((checkButton) => {\n            checkButton.addEventListener('click', (e) => {\n                let id = e.currentTarget.id;\n                (0,_task__WEBPACK_IMPORTED_MODULE_2__.deleteTask)(id);\n                location.reload();\n            });\n        })\n    }\n    expandCardListener();\n    completeTaskListener();\n    return {\n        expandCardListener,\n        completeTaskListener\n    }\n};\n\n\n\n//# sourceURL=webpack://friday-productivity-app/./src/modules/view.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;