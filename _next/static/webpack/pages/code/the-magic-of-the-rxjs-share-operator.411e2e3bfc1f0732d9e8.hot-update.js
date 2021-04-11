webpackHotUpdate_N_E("pages/code/the-magic-of-the-rxjs-share-operator",{

/***/ "./pages/code/the-magic-of-the-rxjs-share-operator.js":
/*!************************************************************!*\
  !*** ./pages/code/the-magic-of-the-rxjs-share-operator.js ***!
  \************************************************************/
/*! exports provided: CodePost1, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CodePost1\", function() { return CodePost1; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/rachel.kat/conste11ations.github.io/pages/code/the-magic-of-the-rxjs-share-operator.js\";\n\n\nfunction CodePost1() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"The magic of the RxJS share operator\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: [\"There are two main ways to reap the benefits of the RxJS share operator:\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n              children: \"Reduce repeated computations\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 14,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                children: \"When you have multiple subscribers to the same observable, you can process computations (side-effects) once, broadcast the results to whoever is listening.\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 16,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 15,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 13,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n              children: \"\\\"Everyone's on the same page\\\"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 24,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                children: \"When you have multiple subscribers and you want to make sure they all get the same thing\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 26,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 25,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n        children: \"1. Reduce Repeated Computations\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n          children: \"Without share()\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 36,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"code\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n          className: \"grey\",\n          children: \"import { interval } from 'rxjs';\\nimport { share, map } from 'rxjs/operators';\\n  \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n          children: \"const source = interval(1000)\\n   .pipe(\\n         map((x: number) => {\\n             console.log('Intense computation for: ', x)\\n             return x * x;\\n         })\\n );\\n\\nsource.subscribe(x => console.log('subscription 1: ', x));\\nsource.subscribe(x => console.log('subscription 2: ', x));\\n \\n \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n          className: \"grey\",\n          children: \"\\n// Console:\\n// Intense computation for:  0\\n// subscription 1:  0\\n// subscription 2:  0\\n// Intense computation for:  1\\n// subscription 1:  1\\n// subscription 2:  1\\n// Intense computation for:  2\\n// subscription 1:  4\\n// subscription 2:  4\\n          \\n          \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 58,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n          children: \"With share()\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"code\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n          className: \"grey\",\n          children: \"import { interval } from 'rxjs';\\nimport { share, map } from 'rxjs/operators';\\n  \"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n          children: \"const source = interval(1000)\\n   .pipe(\\n         map((x: number) => {\\n             console.log('Heavy-duty computation for: ', x)\\n             return x * x;\\n         })\\n );\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n        children: \"Reference documentation\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: \"https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/share.ts\",\n            className: \"underlined-link\",\n            children: \"RxJS source code (caution: check your version as the share operator has undergone changes between versions)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 96,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: \"https://medium.com/@mikesnare/angular-async-pipes-beware-the-share-bcc9c1cd849d\",\n            className: \"underlined-link\",\n            children: \"Beware the Share by Mike Snare\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 105,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 104,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n_c = CodePost1;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CodePost1);\n\nvar _c;\n\n$RefreshReg$(_c, \"CodePost1\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29kZS90aGUtbWFnaWMtb2YtdGhlLXJ4anMtc2hhcmUtb3BlcmF0b3IuanM/ODg3NiJdLCJuYW1lcyI6WyJDb2RlUG9zdDEiLCJzdHlsZXMiLCJjb250YWluZXIiLCJmb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLFNBQVNBLFNBQVQsR0FBcUI7QUFDMUIsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUMsOERBQU0sQ0FBQ0MsU0FBdkI7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBQSw0R0FHRTtBQUFBLGtDQUNFO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFFRTtBQUFBLHFDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsZUFXRTtBQUFBLG9DQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLGVBRUU7QUFBQSxxQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQTJCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTNCRixlQTRCRTtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTVCRixlQStCRTtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkYsZUFvQkU7QUFBSyxtQkFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQS9CRixlQWlFRTtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWpFRixlQW9FRTtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBcEVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBc0ZFO0FBQUssZUFBUyxFQUFFRCw4REFBTSxDQUFDRSxNQUF2QjtBQUFBLDhCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFFRTtBQUFBLGdDQUNFO0FBQUEsaUNBQ0U7QUFDRSxnQkFBSSxFQUFDLCtFQURQO0FBRUUscUJBQVMsRUFBQyxpQkFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFVRTtBQUFBLGlDQUNFO0FBQ0UsZ0JBQUksRUFBQyxpRkFEUDtBQUVFLHFCQUFTLEVBQUMsaUJBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRGRjtBQUFBLGtCQURGO0FBK0dEO0tBaEhlSCxTO0FBa0hEQSx3RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvZGUvdGhlLW1hZ2ljLW9mLXRoZS1yeGpzLXNoYXJlLW9wZXJhdG9yLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29kZVBvc3QxKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxoMT5UaGUgbWFnaWMgb2YgdGhlIFJ4SlMgc2hhcmUgb3BlcmF0b3I8L2gxPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGVyZSBhcmUgdHdvIG1haW4gd2F5cyB0byByZWFwIHRoZSBiZW5lZml0cyBvZiB0aGUgUnhKUyBzaGFyZVxuICAgICAgICAgIG9wZXJhdG9yOlxuICAgICAgICAgIDxvbD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGI+UmVkdWNlIHJlcGVhdGVkIGNvbXB1dGF0aW9uczwvYj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIFdoZW4geW91IGhhdmUgbXVsdGlwbGUgc3Vic2NyaWJlcnMgdG8gdGhlIHNhbWUgb2JzZXJ2YWJsZSwgeW91XG4gICAgICAgICAgICAgICAgICBjYW4gcHJvY2VzcyBjb21wdXRhdGlvbnMgKHNpZGUtZWZmZWN0cykgb25jZSwgYnJvYWRjYXN0IHRoZVxuICAgICAgICAgICAgICAgICAgcmVzdWx0cyB0byB3aG9ldmVyIGlzIGxpc3RlbmluZy5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGI+XCJFdmVyeW9uZSdzIG9uIHRoZSBzYW1lIHBhZ2VcIjwvYj5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIFdoZW4geW91IGhhdmUgbXVsdGlwbGUgc3Vic2NyaWJlcnMgYW5kIHlvdSB3YW50IHRvIG1ha2Ugc3VyZVxuICAgICAgICAgICAgICAgICAgdGhleSBhbGwgZ2V0IHRoZSBzYW1lIHRoaW5nXG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC9vbD5cbiAgICAgICAgPC9wPlxuICAgICAgICA8aDI+MS4gUmVkdWNlIFJlcGVhdGVkIENvbXB1dGF0aW9uczwvaDI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxiPldpdGhvdXQgc2hhcmUoKTwvYj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8Y29kZT5cbiAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cImdyZXlcIj5cbiAgICAgICAgICAgIHtgaW1wb3J0IHsgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHNoYXJlLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG4gIGB9XG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgPHByZT5cbiAgICAgICAgICAgIHtgY29uc3Qgc291cmNlID0gaW50ZXJ2YWwoMTAwMClcbiAgIC5waXBlKFxuICAgICAgICAgbWFwKCh4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICBjb25zb2xlLmxvZygnSW50ZW5zZSBjb21wdXRhdGlvbiBmb3I6ICcsIHgpXG4gICAgICAgICAgICAgcmV0dXJuIHggKiB4O1xuICAgICAgICAgfSlcbiApO1xuXG5zb3VyY2Uuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coJ3N1YnNjcmlwdGlvbiAxOiAnLCB4KSk7XG5zb3VyY2Uuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coJ3N1YnNjcmlwdGlvbiAyOiAnLCB4KSk7XG4gXG4gYH1cbiAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cImdyZXlcIj57YFxuLy8gQ29uc29sZTpcbi8vIEludGVuc2UgY29tcHV0YXRpb24gZm9yOiAgMFxuLy8gc3Vic2NyaXB0aW9uIDE6ICAwXG4vLyBzdWJzY3JpcHRpb24gMjogIDBcbi8vIEludGVuc2UgY29tcHV0YXRpb24gZm9yOiAgMVxuLy8gc3Vic2NyaXB0aW9uIDE6ICAxXG4vLyBzdWJzY3JpcHRpb24gMjogIDFcbi8vIEludGVuc2UgY29tcHV0YXRpb24gZm9yOiAgMlxuLy8gc3Vic2NyaXB0aW9uIDE6ICA0XG4vLyBzdWJzY3JpcHRpb24gMjogIDRcbiAgICAgICAgICBcbiAgICAgICAgICBgfTwvcHJlPlxuICAgICAgICA8L2NvZGU+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxiPldpdGggc2hhcmUoKTwvYj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8Y29kZT5cbiAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cImdyZXlcIj5cbiAgICAgICAgICAgIHtgaW1wb3J0IHsgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHNoYXJlLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG4gIGB9XG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgPHByZT5cbiAgICAgICAgICAgIHtgY29uc3Qgc291cmNlID0gaW50ZXJ2YWwoMTAwMClcbiAgIC5waXBlKFxuICAgICAgICAgbWFwKCh4OiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICBjb25zb2xlLmxvZygnSGVhdnktZHV0eSBjb21wdXRhdGlvbiBmb3I6ICcsIHgpXG4gICAgICAgICAgICAgcmV0dXJuIHggKiB4O1xuICAgICAgICAgfSlcbiApO2B9XG4gICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvY29kZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8Yj5SZWZlcmVuY2UgZG9jdW1lbnRhdGlvbjwvYj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vUmVhY3RpdmVYL3J4anMvYmxvYi9tYXN0ZXIvc3JjL2ludGVybmFsL29wZXJhdG9ycy9zaGFyZS50c1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuZGVybGluZWQtbGlua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJ4SlMgc291cmNlIGNvZGUgKGNhdXRpb246IGNoZWNrIHlvdXIgdmVyc2lvbiBhcyB0aGUgc2hhcmVcbiAgICAgICAgICAgICAgb3BlcmF0b3IgaGFzIHVuZGVyZ29uZSBjaGFuZ2VzIGJldHdlZW4gdmVyc2lvbnMpXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tZWRpdW0uY29tL0BtaWtlc25hcmUvYW5ndWxhci1hc3luYy1waXBlcy1iZXdhcmUtdGhlLXNoYXJlLWJjYzljMWNkODQ5ZFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVuZGVybGluZWQtbGlua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEJld2FyZSB0aGUgU2hhcmUgYnkgTWlrZSBTbmFyZVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29kZVBvc3QxO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/code/the-magic-of-the-rxjs-share-operator.js\n");

/***/ })

})