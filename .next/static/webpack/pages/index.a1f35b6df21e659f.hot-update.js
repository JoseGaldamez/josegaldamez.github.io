"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/sections/ListTechnologies/index.js":
/*!*******************************************************!*\
  !*** ./components/sections/ListTechnologies/index.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ListTechnologies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListTechnologies */ \"./components/sections/ListTechnologies/ListTechnologies.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_ListTechnologies__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlY3Rpb25zL0xpc3RUZWNobm9sb2dpZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBaUQ7QUFDakQsK0RBQWVBLHlEQUFnQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2VjdGlvbnMvTGlzdFRlY2hub2xvZ2llcy9pbmRleC5qcz9jMmZlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaXN0VGVjaG5vbG9naWVzIGZyb20gXCIuL0xpc3RUZWNobm9sb2dpZXNcIjtcclxuZXhwb3J0IGRlZmF1bHQgTGlzdFRlY2hub2xvZ2llczsiXSwibmFtZXMiOlsiTGlzdFRlY2hub2xvZ2llcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/sections/ListTechnologies/index.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_contactBanner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/contactBanner */ \"./components/contactBanner/index.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ \"./components/header/index.js\");\n/* harmony import */ var _components_personalblog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/personalblog */ \"./components/personalblog/index.js\");\n/* harmony import */ var _components_projects_Projects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/projects/Projects */ \"./components/projects/Projects.js\");\n/* harmony import */ var _components_sections_ListTechnologies__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/sections/ListTechnologies */ \"./components/sections/ListTechnologies/index.js\");\n/* harmony import */ var _components_sections_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/sections/main */ \"./components/sections/main/index.js\");\n/* harmony import */ var _components_sections_skills__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/sections/skills */ \"./components/sections/skills/index.js\");\n\n\n\n\n\n\n\n\n\n\nvar _this = undefined;\nvar HomePage = function() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Jose Galdamez | Developer\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Developer\\\\MyPersonalSiteOnline\\\\pages\\\\index.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        type: \"image/x-icon\",\n                        href: \"/assets/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\Developer\\\\MyPersonalSiteOnline\\\\pages\\\\index.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\Developer\\\\MyPersonalSiteOnline\\\\pages\\\\index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__.Header, {}, void 0, false, {\n                fileName: \"E:\\\\Developer\\\\MyPersonalSiteOnline\\\\pages\\\\index.js\",\n                lineNumber: 21,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sections_main__WEBPACK_IMPORTED_MODULE_8__.Principal, {}, void 0, false, {\n                fileName: \"E:\\\\Developer\\\\MyPersonalSiteOnline\\\\pages\\\\index.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sections_skills__WEBPACK_IMPORTED_MODULE_9__.Skills, {}, void 0, false, {\n                fileName: \"E:\\\\Developer\\\\MyPersonalSiteOnline\\\\pages\\\\index.js\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_sections_ListTechnologies__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Developer\\\\MyPersonalSiteOnline\\\\pages\\\\index.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_contactBanner__WEBPACK_IMPORTED_MODULE_3__.ContactBanner, {}, void 0, false, {\n                fileName: \"E:\\\\Developer\\\\MyPersonalSiteOnline\\\\pages\\\\index.js\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_projects_Projects__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Developer\\\\MyPersonalSiteOnline\\\\pages\\\\index.js\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_personalblog__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"E:\\\\Developer\\\\MyPersonalSiteOnline\\\\pages\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true));\n};\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDSDtBQUNrQztBQUVkO0FBQ1E7QUFDQztBQUNnQjtBQUNmO0FBQ0Q7O0FBR3RELEdBQUssQ0FBQ1MsUUFBUSxHQUFHLFFBQ2pCLEdBRHVCLENBQUM7SUFFdEIsTUFBTTs7d0ZBRURULGtEQUFJOztnR0FDRlUsQ0FBSztrQ0FBQyxDQUF5Qjs7Ozs7O2dHQUMvQkMsQ0FBSTt3QkFBQ0MsR0FBRyxFQUFDLENBQU07d0JBQUNDLElBQUksRUFBQyxDQUFjO3dCQUFDQyxJQUFJLEVBQUMsQ0FBcUI7Ozs7Ozs7Ozs7Ozt3RkFFOURYLHNEQUFNOzs7Ozt3RkFDTkksZ0VBQVM7Ozs7O3dGQUNUQywrREFBTTs7Ozs7d0ZBQ05GLDZFQUFnQjs7Ozs7d0ZBQ2hCSixvRUFBYTs7Ozs7d0ZBQ2JHLHFFQUFROzs7Ozt3RkFDUkQsZ0VBQVk7Ozs7Ozs7QUFHckIsQ0FBQztLQWpCS0ssUUFBUTtBQW1CZCwrREFBZUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ29udGFjdEJhbm5lciB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udGFjdEJhbm5lcic7XG5cbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBQZXJzb25hbEJsb2cgZnJvbSAnLi4vY29tcG9uZW50cy9wZXJzb25hbGJsb2cnO1xuaW1wb3J0IFByb2plY3RzIGZyb20gJy4uL2NvbXBvbmVudHMvcHJvamVjdHMvUHJvamVjdHMnO1xuaW1wb3J0IExpc3RUZWNobm9sb2dpZXMgZnJvbSAnLi4vY29tcG9uZW50cy9zZWN0aW9ucy9MaXN0VGVjaG5vbG9naWVzJztcbmltcG9ydCB7IFByaW5jaXBhbCB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2VjdGlvbnMvbWFpbic7XG5pbXBvcnQgeyBTa2lsbHMgfSBmcm9tICcuLi9jb21wb25lbnRzL3NlY3Rpb25zL3NraWxscyc7XG5cblxuY29uc3QgSG9tZVBhZ2UgPSAoKSA9PiB7XG5cbiAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkpvc2UgR2FsZGFtZXogfCBEZXZlbG9wZXI8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgdHlwZT1cImltYWdlL3gtaWNvblwiIGhyZWY9XCIvYXNzZXRzL2Zhdmljb24uaWNvXCI+PC9saW5rPlxuICAgICAgPC9IZWFkPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxQcmluY2lwYWwgLz5cbiAgICAgICAgPFNraWxscyAvPlxuICAgICAgICA8TGlzdFRlY2hub2xvZ2llcyAvPlxuICAgICAgICA8Q29udGFjdEJhbm5lciAvPlxuICAgICAgICA8UHJvamVjdHMgLz5cbiAgICAgICAgPFBlcnNvbmFsQmxvZyAvPlxuICAgICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwibmFtZXMiOlsiSGVhZCIsIlJlYWN0IiwiQ29udGFjdEJhbm5lciIsIkhlYWRlciIsIlBlcnNvbmFsQmxvZyIsIlByb2plY3RzIiwiTGlzdFRlY2hub2xvZ2llcyIsIlByaW5jaXBhbCIsIlNraWxscyIsIkhvbWVQYWdlIiwidGl0bGUiLCJsaW5rIiwicmVsIiwidHlwZSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});