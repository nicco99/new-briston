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

/***/ "(app-pages-browser)/./components/DataDisplay/Jobcard/index.jsx":
/*!**************************************************!*\
  !*** ./components/DataDisplay/Jobcard/index.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst JobCard = (param)=>{\n    let { updateState, job, id, title, description, created_at, deadline } = param;\n    _s();\n    const token = localStorage.getItem(\"token\");\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleDelete = (id)=>{\n        setLoading(true);\n        fetch(\"https://bristol.onrender.com/jobs/\".concat(parseInt(id)), {\n            method: \"DELETE\",\n            headers: {\n                \"content-type\": \"application/json\"\n            }\n        }).then((res)=>{\n            updateState(job);\n            setLoading(false);\n        });\n    };\n    const handleEdit = (id)=>{\n        router.push(\"/dashboard/job-edit/\".concat(id));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-[#ffffff] lg:shadow-md p-3\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-[600]\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"mailto:consult@bristonhr.com\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"bg-blue-500 p-2 mt-3 rounded-md text-[#ffffff]\",\n                            children: \"Easy apply\"\n                        }, void 0, false, {\n                            fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-right mb-5\",\n                        children: [\n                            \"Post date: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-[700]\",\n                                children: created_at\n                            }, void 0, false, {\n                                fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                                lineNumber: 47,\n                                columnNumber: 22\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-left mb-5\",\n                        children: [\n                            \"Application deadline: \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"font-[700]\",\n                                children: deadline\n                            }, void 0, false, {\n                                fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 33\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    token && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"lg:w-2/3 mx-auto flex justify-between\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>setShowModal(true),\n                                className: \"bg-red-500 px-2 rounded-sm text-[#ffffff]\",\n                                children: loading ? \"Deleting...\" : \"Delete\"\n                            }, void 0, false, {\n                                fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: ()=>handleEdit(id),\n                                className: \"bg-green-600 px-2 rounded-sm text-[#ffffff]\",\n                                children: \"Edit\"\n                            }, void 0, false, {\n                                fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                                lineNumber: 59,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: showModal ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"justify-center  items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"relative w-auto my-6 mx-auto max-w-3xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"border-0 p-5 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-start justify-between  rounded-t\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                    className: \"text-3xl font-semibold\",\n                                                    children: \"Are you sure you want to delete?\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none\",\n                                                    onClick: ()=>setShowModal(false),\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none\",\n                                                        children: \"\\xd7\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                                                        lineNumber: 83,\n                                                        columnNumber: 23\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                                            lineNumber: 76,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"relative p-6 flex-auto\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"my-4 text-blueGray-500 text-lg leading-relaxed\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                                                lineNumber: 90,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                                            lineNumber: 89,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"flex items-center justify-end p-1 border-t  rounded-b\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                    type: \"button\",\n                                                    onClick: ()=>setShowModal(false),\n                                                    children: \"cancel\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                                                    lineNumber: 94,\n                                                    columnNumber: 21\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    onClick: ()=>handleDelete(id),\n                                                    className: \"bg-red-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150\",\n                                                    type: \"button\",\n                                                    children: \"Delete\"\n                                                }, void 0, false, {\n                                                    fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                                                    lineNumber: 100,\n                                                    columnNumber: 21\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                                            lineNumber: 93,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"opacity-25 fixed inset-0 z-40 bg-black\"\n                        }, void 0, false, {\n                            fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                            lineNumber: 110,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true) : null\n            }, void 0, false, {\n                fileName: \"/home/nicco/personal-projects/work_projects/Hi-Nex/new bristol/new-briston/components/DataDisplay/Jobcard/index.jsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(JobCard, \"fZ1xlXiEcObhrCeJIkCS9cFaqpw=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = JobCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JobCard);\nvar _c;\n$RefreshReg$(_c, \"JobCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvRGF0YURpc3BsYXkvSm9iY2FyZC9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFFNEM7QUFDWDtBQUVqQyxNQUFNRSxVQUFVO1FBQUMsRUFDZkMsV0FBVyxFQUNYQyxHQUFHLEVBQ0hDLEVBQUUsRUFDRkMsS0FBSyxFQUNMQyxXQUFXLEVBQ1hDLFVBQVUsRUFDVkMsUUFBUSxFQUNUOztJQUNDLE1BQU1DLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztJQUNuQyxNQUFNQyxTQUFTYiwwREFBU0E7SUFDeEIsTUFBTSxDQUFDYyxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ2UsV0FBV0MsYUFBYSxHQUFHaEIsK0NBQVFBLENBQUM7SUFDM0MsTUFBTWlCLGVBQWUsQ0FBQ2I7UUFDcEJVLFdBQVc7UUFDWEksTUFBTSxxQ0FBa0QsT0FBYkMsU0FBU2YsTUFBTztZQUN6RGdCLFFBQVE7WUFDUkMsU0FBUztnQkFDUCxnQkFBZ0I7WUFDbEI7UUFDRixHQUFHQyxJQUFJLENBQUMsQ0FBQ0M7WUFDUHJCLFlBQVlDO1lBQ1pXLFdBQVc7UUFDYjtJQUNGO0lBRUEsTUFBTVUsYUFBYSxDQUFDcEI7UUFDbEJRLE9BQU9hLElBQUksQ0FBQyx1QkFBMEIsT0FBSHJCO0lBQ3JDO0lBRUEscUJBQ0U7OzBCQUNFLDhEQUFDc0I7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBRUQsV0FBVTtrQ0FBY3RCOzs7Ozs7a0NBQzNCLDhEQUFDdUI7a0NBQUd0Qjs7Ozs7O2tDQUNKLDhEQUFDdUI7d0JBQUVDLE1BQUs7a0NBQ04sNEVBQUNDOzRCQUFPSixXQUFVO3NDQUFpRDs7Ozs7Ozs7Ozs7a0NBSXJFLDhEQUFDQzt3QkFBRUQsV0FBVTs7NEJBQWtCOzBDQUNsQiw4REFBQ0s7Z0NBQUtMLFdBQVU7MENBQWNwQjs7Ozs7Ozs7Ozs7O2tDQUUzQyw4REFBQ3FCO3dCQUFFRCxXQUFVOzs0QkFBaUI7MENBQ04sOERBQUNLO2dDQUFLTCxXQUFVOzBDQUFjbkI7Ozs7Ozs7Ozs7OztvQkFFckRDLHVCQUNDLDhEQUFDaUI7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDSTtnQ0FDQ0UsU0FBUyxJQUFNakIsYUFBYTtnQ0FDNUJXLFdBQVU7MENBQ1RkLFVBQVUsZ0JBQWdCOzs7Ozs7MENBRTdCLDhEQUFDa0I7Z0NBQ0NFLFNBQVMsSUFBTVQsV0FBV3BCO2dDQUMxQnVCLFdBQVU7MENBQThDOzs7Ozs7Ozs7Ozs7a0NBSzlELDhEQUFDTzs7Ozs7Ozs7Ozs7MEJBRUgsOERBQUNSOzBCQUNFWCwwQkFDQzs7c0NBQ0UsOERBQUNXOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRDtnQ0FBSUMsV0FBVTswQ0FFYiw0RUFBQ0Q7b0NBQUlDLFdBQVU7O3NEQUViLDhEQUFDRDs0Q0FBSUMsV0FBVTs7OERBQ2IsOERBQUNRO29EQUFHUixXQUFVOzhEQUF5Qjs7Ozs7OzhEQUd2Qyw4REFBQ0k7b0RBQ0NKLFdBQVU7b0RBQ1ZNLFNBQVMsSUFBTWpCLGFBQWE7OERBQzVCLDRFQUFDZ0I7d0RBQUtMLFdBQVU7a0VBQTZGOzs7Ozs7Ozs7Ozs7Ozs7OztzREFNakgsOERBQUNEOzRDQUFJQyxXQUFVO3NEQUNiLDRFQUFDQztnREFBRUQsV0FBVTs7Ozs7Ozs7Ozs7c0RBR2YsOERBQUNEOzRDQUFJQyxXQUFVOzs4REFDYiw4REFBQ0k7b0RBQ0NKLFdBQVU7b0RBQ1ZTLE1BQUs7b0RBQ0xILFNBQVMsSUFBTWpCLGFBQWE7OERBQVE7Ozs7Ozs4REFHdEMsOERBQUNlO29EQUNDRSxTQUFTLElBQU1oQixhQUFhYjtvREFDNUJ1QixXQUFVO29EQUNWUyxNQUFLOzhEQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQU94Qiw4REFBQ1Y7NEJBQUlDLFdBQVU7Ozs7Ozs7bUNBRWY7Ozs7Ozs7O0FBSVo7R0E5R00xQjs7UUFVV0Ysc0RBQVNBOzs7S0FWcEJFO0FBZ0hOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRGF0YURpc3BsYXkvSm9iY2FyZC9pbmRleC5qc3g/ZmI1MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgSm9iQ2FyZCA9ICh7XG4gIHVwZGF0ZVN0YXRlLFxuICBqb2IsXG4gIGlkLFxuICB0aXRsZSxcbiAgZGVzY3JpcHRpb24sXG4gIGNyZWF0ZWRfYXQsXG4gIGRlYWRsaW5lLFxufSkgPT4ge1xuICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpZCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgZmV0Y2goYGh0dHBzOi8vYnJpc3RvbC5vbnJlbmRlci5jb20vam9icy8ke3BhcnNlSW50KGlkKX1gLCB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIHVwZGF0ZVN0YXRlKGpvYik7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVFZGl0ID0gKGlkKSA9PiB7XG4gICAgcm91dGVyLnB1c2goYC9kYXNoYm9hcmQvam9iLWVkaXQvJHtpZH1gKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLVsjZmZmZmZmXSBsZzpzaGFkb3ctbWQgcC0zXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtWzYwMF1cIj57dGl0bGV9PC9wPlxuICAgICAgICA8cD57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8YSBocmVmPVwibWFpbHRvOmNvbnN1bHRAYnJpc3RvbmhyLmNvbVwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgcC0yIG10LTMgcm91bmRlZC1tZCB0ZXh0LVsjZmZmZmZmXVwiPlxuICAgICAgICAgICAgRWFzeSBhcHBseVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcmlnaHQgbWItNVwiPlxuICAgICAgICAgIFBvc3QgZGF0ZTogPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1bNzAwXVwiPntjcmVhdGVkX2F0fTwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxlZnQgbWItNVwiPlxuICAgICAgICAgIEFwcGxpY2F0aW9uIGRlYWRsaW5lOiA8c3BhbiBjbGFzc05hbWU9XCJmb250LVs3MDBdXCI+e2RlYWRsaW5lfTwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICB7dG9rZW4gJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dy0yLzMgbXgtYXV0byBmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgcHgtMiByb3VuZGVkLXNtIHRleHQtWyNmZmZmZmZdXCI+XG4gICAgICAgICAgICAgIHtsb2FkaW5nID8gXCJEZWxldGluZy4uLlwiIDogXCJEZWxldGVcIn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFZGl0KGlkKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JlZW4tNjAwIHB4LTIgcm91bmRlZC1zbSB0ZXh0LVsjZmZmZmZmXVwiPlxuICAgICAgICAgICAgICBFZGl0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgPGhyPjwvaHI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHtzaG93TW9kYWwgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgIGl0ZW1zLWNlbnRlciBmbGV4IG92ZXJmbG93LXgtaGlkZGVuIG92ZXJmbG93LXktYXV0byBmaXhlZCBpbnNldC0wIHotNTAgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctYXV0byBteS02IG14LWF1dG8gbWF4LXctM3hsXCI+XG4gICAgICAgICAgICAgICAgey8qY29udGVudCovfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLTAgcC01IHJvdW5kZWQtbGcgc2hhZG93LWxnIHJlbGF0aXZlIGZsZXggZmxleC1jb2wgdy1mdWxsIGJnLXdoaXRlIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIj5cbiAgICAgICAgICAgICAgICAgIHsvKmhlYWRlciovfVxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlbiAgcm91bmRlZC10XCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LXNlbWlib2xkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZT9cbiAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMSBtbC1hdXRvIGJnLXRyYW5zcGFyZW50IGJvcmRlci0wIHRleHQtYmxhY2sgb3BhY2l0eS01IGZsb2F0LXJpZ2h0IHRleHQtM3hsIGxlYWRpbmctbm9uZSBmb250LXNlbWlib2xkIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9PlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IHRleHQtYmxhY2sgb3BhY2l0eS01IGgtNiB3LTYgdGV4dC0yeGwgYmxvY2sgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgw5dcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICB7Lypib2R5Ki99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHAtNiBmbGV4LWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXktNCB0ZXh0LWJsdWVHcmF5LTUwMCB0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZFwiPjwvcD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgey8qZm9vdGVyKi99XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIHAtMSBib3JkZXItdCAgcm91bmRlZC1iXCI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgYmFja2dyb3VuZC10cmFuc3BhcmVudCBmb250LWJvbGQgdXBwZXJjYXNlIHB4LTYgcHktMiB0ZXh0LXNtIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgbXItMSBtYi0xIGVhc2UtbGluZWFyIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTE1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgY2FuY2VsXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKGlkKX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHRleHQtd2hpdGUgYWN0aXZlOmJnLXJlZC02MDAgZm9udC1ib2xkIHVwcGVyY2FzZSB0ZXh0LXNtIHB4LTYgcHktMyByb3VuZGVkIHNoYWRvdyBob3ZlcjpzaGFkb3ctbGcgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBtci0xIG1iLTEgZWFzZS1saW5lYXIgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTUwXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wYWNpdHktMjUgZml4ZWQgaW5zZXQtMCB6LTQwIGJnLWJsYWNrXCI+PC9kaXY+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBKb2JDYXJkO1xuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsInVzZVN0YXRlIiwiSm9iQ2FyZCIsInVwZGF0ZVN0YXRlIiwiam9iIiwiaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY3JlYXRlZF9hdCIsImRlYWRsaW5lIiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicm91dGVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJoYW5kbGVEZWxldGUiLCJmZXRjaCIsInBhcnNlSW50IiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJoYW5kbGVFZGl0IiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJhIiwiaHJlZiIsImJ1dHRvbiIsInNwYW4iLCJvbkNsaWNrIiwiaHIiLCJoMyIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/DataDisplay/Jobcard/index.jsx\n"));

/***/ })

});