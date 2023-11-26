"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/jobs/page",{

/***/ "(app-pages-browser)/./app/dashboard/jobs/page.jsx":
/*!*************************************!*\
  !*** ./app/dashboard/jobs/page.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_DataDisplay_Jobcard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/DataDisplay/Jobcard */ \"(app-pages-browser)/./components/DataDisplay/Jobcard/index.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_layout_protectedRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/layout/protectedRoute */ \"(app-pages-browser)/./components/layout/protectedRoute.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Jobs = (param)=>{\n    let { jobList } = param;\n    var _jobs;\n    _s();\n    const [jobs, setJobs] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(jobList);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetch(\"https://bristol.onrender.com/jobs\").then((res)=>res.json()).then((data)=>setJobs(data.job));\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout_protectedRoute__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"lg:w-9/12 lg:mx-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row justify-between mt-12 mb-20\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"font-[600] \",\n                            children: \"Briston Jobs\"\n                        }, void 0, false, {\n                            fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/briston-hr/app/dashboard/jobs/page.jsx\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            href: \"/dashboard\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-blue-500 px-3 py-2  rounded-md text-[#ffffff]  mr-4\",\n                                children: \"Dashboard\"\n                            }, void 0, false, {\n                                fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/briston-hr/app/dashboard/jobs/page.jsx\",\n                                lineNumber: 21,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/briston-hr/app/dashboard/jobs/page.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/briston-hr/app/dashboard/jobs/page.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: (_jobs = jobs) === null || _jobs === void 0 ? void 0 : _jobs.map((job)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DataDisplay_Jobcard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            ...job\n                        }, void 0, false, {\n                            fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/briston-hr/app/dashboard/jobs/page.jsx\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/briston-hr/app/dashboard/jobs/page.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/briston-hr/app/dashboard/jobs/page.jsx\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/briston-hr/app/dashboard/jobs/page.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Jobs, \"05RuLxfCu3O4vudxmdfatFVqA6Y=\");\n_c = Jobs;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Jobs);\nvar _c;\n$RefreshReg$(_c, \"Jobs\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvam9icy9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3VEO0FBQzFCO0FBQ2U7QUFDb0I7QUFDaEUsTUFBTUssT0FBTztRQUFDLEVBQUVDLE9BQU8sRUFBRTtRQXNCZEM7O0lBckJULE1BQU0sQ0FBQ0EsTUFBTUMsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQ0k7SUFFakNILGdEQUFTQSxDQUFDO1FBQ1JNLE1BQU0scUNBQ0hDLElBQUksQ0FBQyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJLElBQ3RCRixJQUFJLENBQUMsQ0FBQ0csT0FBU0wsUUFBUUssS0FBS0MsR0FBRztJQUNwQyxHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1YseUVBQWNBO2tCQUNiLDRFQUFDVztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBR0QsV0FBVTtzQ0FBYzs7Ozs7O3NDQUM1Qiw4REFBQ2Ysa0RBQUlBOzRCQUFDaUIsTUFBSztzQ0FDVCw0RUFBQ0M7Z0NBQU9ILFdBQVU7MENBQXlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFNL0UsOERBQUNEO29CQUFJQyxXQUFVOytCQUNaVCxRQUFBQSxrQkFBQUEsNEJBQUFBLE1BQU1hLEdBQUcsQ0FBQyxDQUFDTixvQkFDViw4REFBQ2QsdUVBQU9BOzRCQUFFLEdBQUdjLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNNUI7R0E3Qk1UO0tBQUFBO0FBK0JOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9kYXNoYm9hcmQvam9icy9wYWdlLmpzeD83ZTgyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IEpvYkNhcmQgZnJvbSBcIkAvY29tcG9uZW50cy9EYXRhRGlzcGxheS9Kb2JjYXJkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvdGVjdGVkUm91dGUgZnJvbSBcIkAvY29tcG9uZW50cy9sYXlvdXQvcHJvdGVjdGVkUm91dGVcIjtcbmNvbnN0IEpvYnMgPSAoeyBqb2JMaXN0IH0pID0+IHtcbiAgY29uc3QgW2pvYnMsIHNldEpvYnNdID0gdXNlU3RhdGUoam9iTGlzdCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChcImh0dHBzOi8vYnJpc3RvbC5vbnJlbmRlci5jb20vam9ic1wiKVxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKChkYXRhKSA9PiBzZXRKb2JzKGRhdGEuam9iKSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxQcm90ZWN0ZWRSb3V0ZT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy05LzEyIGxnOm14LWF1dG9cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBtdC0xMiBtYi0yMFwiPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LVs2MDBdIFwiPkJyaXN0b24gSm9iczwvaDI+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgcHgtMyBweS0yICByb3VuZGVkLW1kIHRleHQtWyNmZmZmZmZdICBtci00XCI+XG4gICAgICAgICAgICAgIERhc2hib2FyZFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIHtqb2JzPy5tYXAoKGpvYikgPT4gKFxuICAgICAgICAgICAgPEpvYkNhcmQgey4uLmpvYn0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1Byb3RlY3RlZFJvdXRlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSm9icztcbiJdLCJuYW1lcyI6WyJKb2JDYXJkIiwiTGluayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiUHJvdGVjdGVkUm91dGUiLCJKb2JzIiwiam9iTGlzdCIsImpvYnMiLCJzZXRKb2JzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJqb2IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImhyZWYiLCJidXR0b24iLCJtYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/jobs/page.jsx\n"));

/***/ })

});