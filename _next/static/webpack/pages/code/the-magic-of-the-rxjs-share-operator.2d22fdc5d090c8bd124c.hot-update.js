webpackHotUpdate_N_E("pages/code/the-magic-of-the-rxjs-share-operator",{

/***/ "./pages/code/the-magic-of-the-rxjs-share-operator.js":
/*!************************************************************!*\
  !*** ./pages/code/the-magic-of-the-rxjs-share-operator.js ***!
  \************************************************************/
/*! exports provided: CodePost1, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CodePost1\", function() { return CodePost1; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/rachel.kat/conste11ations.github.io/pages/code/the-magic-of-the-rxjs-share-operator.js\";\n\n\nfunction CodePost1() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        children: \"The magic of the RxJS share operators\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"There are two main ways to reap the benefits of the RxJS share/shareReplay operators:\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ol\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n              children: \"Share reduces repeated computations\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 16,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                children: \"With multiple subscribers to the same observable, you can process computations (side-effects) once, broadcast the results to whoever is listening.\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 18,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 17,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 15,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n              children: \"ShareReplay = share + making sure \\\"everyone's on the same page\\\"\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 26,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                children: \"When there are multiple subscribers, and you want to make sure they all get the same data, at the same time\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 30,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 29,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 14,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          children: \"1. Reduce Repeated Computations\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n            children: \"Without share()\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"code\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n            className: \"grey\",\n            children: \"import { interval } from 'rxjs';\\nimport { share, map } from 'rxjs/operators';\\n  \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n            children: \"const source = interval(1000)\\n   .pipe(\\n         map((x: number) => {\\n             console.log('INTENSE computation for: ', x)\\n             return x * x;\\n         })\\n );\\n\\nsource.subscribe(x => console.log('subscription 1: ', x));\\nsource.subscribe(x => console.log('subscription 2: ', x));\\n \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 47,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n            className: \"grey\",\n            children: \"// Console:\\n// INTENSE computation for:  0\\n// subscription 1:  0\\n// INTENSE computation for:  0\\n// subscription 2:  0\\n// INTENSE computation for:  1\\n// subscription 1:  1\\n// INTENSE computation for:  1\\n// subscription 2:  1\\n// INTENSE computation for:  2\\n// subscription 1:  4\\n// INTENSE computation for:  2\\n// subscription 2:  4\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n            children: \"With share()\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"code\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n            className: \"grey\",\n            children: \"import { interval } from 'rxjs';\\nimport { share, map } from 'rxjs/operators';\\n  \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n            children: \"const source$ = interval(1000)\\n   .pipe(\\n         map((x: number) => {\\n             console.log('Heavy-duty computation for: ', x)\\n             return x * x;\\n         })\\n\\nsource$.subscribe(x => console.log('subscription 1: ', x));\\nsource$.subscribe(x => console.log('subscription 2: ', x));\\n );\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n            className: \"grey\",\n            children: \"// Console:\\n// INTENSE computation for:  0\\n// subscription 1:  0\\n// subscription 2:  0\\n// INTENSE computation for:  1\\n// subscription 1:  1\\n// subscription 2:  1\\n// INTENSE computation for:  2\\n// subscription 1:  4\\n// subscription 2:  4\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 95,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          children: \"2. Everyone's On the Same Page\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"code\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n            className: \"grey\",\n            children: \"import { Component } from \\\"@angular/core\\\";\\nimport { Observable, of } from \\\"rxjs\\\";\\nimport { delay, share, shareReplay, tap } from \\\"rxjs/operators\\\";\\n\\n  @Component({\\n    selector: \\\"my-app\\\",\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n            children: \"templateUrl: `\\n    <div *ngIf=\\\"(source$ | async)\\\">\\n      <div *ngIf=\\\"(source$ | async)\\\">\\n        <div>{{ source$ | async }}1</div>\\n      </div>\\n    </div>\\n    <div *ngIf=\\\"(source$ | async)\\\">\\n      <div>{{ source$ | async }}2</div>\\n    </div>\\n  `,\\n})\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n            className: \"grey\",\n            children: \"\\nexport class AppComponent {\\n  source$: Observable<any>;\\n\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 129,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n            children: \"\\n  ngOnInit() {\\n\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 133,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n            className: \"yellow\",\n            children: \"     this.source$ = this.getData();\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 138,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"pre\", {\n            children: \" }\\n\\n  getData() {\\n    // Fake Slow Async Data\\n    return of(\\\"here is data\\\").pipe(\\n      tap(() => console.log(\\\"side-effect\\\")),\\n      delay(2000)\\n    );\\n  }\\n}\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 139,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n            children: [\"If the yellow line was\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"code\", {\n              children: \"this.source$ = this.getData()\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 155,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 153,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 152,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n            children: [\"If the yellow line was\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"code\", {\n              children: \"this.source$ = this.getData(share())\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 161,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 159,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 158,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n            children: [\"If the yellow line was\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"code\", {\n              children: \"this.source$ = this.getData(shareReplay(1))\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 167,\n              columnNumber: 15\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 165,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 164,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.footer,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"b\", {\n        children: \"Reference documentation\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 173,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: \"https://github.com/ReactiveX/rxjs/blob/master/src/internal/operators/share.ts\",\n            className: \"underlined-link\",\n            children: \"RxJS source code (caution: check your version as the share operator has undergone changes between versions)\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 176,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 175,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: \"https://medium.com/@mikesnare/angular-async-pipes-beware-the-share-bcc9c1cd849d\",\n            className: \"underlined-link\",\n            children: \"Beware the Share by Mike Snare\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 185,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 184,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: \"https://netbasal.com/understanding-rxjs-multicast-operators-77b3f60af0a2\",\n            className: \"underlined-link\",\n            children: \"Understanding multicast operators by Netanel Basal\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 193,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 192,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: \"https://itnext.io/the-magic-of-rxjs-sharing-operators-and-their-differences-3a03d699d255\",\n            className: \"underlined-link\",\n            children: \"The magic of RXJS sharing operators and their differences by ITNEXT\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 201,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 200,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n            href: \"https://coryrylan.com/blog/angular-async-data-binding-with-ng-if-and-ng-else#async-pipe-and-the-share-operator\",\n            className: \"underlined-link\",\n            children: \"Angular Async Data Binding with ngIf and ngElse by Cory Rylan\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 210,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 209,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 174,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 172,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n_c = CodePost1;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CodePost1);\n\nvar _c;\n\n$RefreshReg$(_c, \"CodePost1\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29kZS90aGUtbWFnaWMtb2YtdGhlLXJ4anMtc2hhcmUtb3BlcmF0b3IuanM/ODg3NiJdLCJuYW1lcyI6WyJDb2RlUG9zdDEiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwiZm9vdGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxTQUFTQSxTQUFULEdBQXFCO0FBQzFCLHNCQUNFO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVDLDhEQUFNLENBQUNDLFNBQXZCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUssaUJBQVMsRUFBRUQsOERBQU0sQ0FBQ0UsSUFBdkI7QUFBQSxnQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUtFO0FBQUEsa0NBQ0U7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQUEscUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQVdFO0FBQUEsb0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsZUFJRTtBQUFBLHFDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUxGLGVBNEJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTVCRixlQTZCRTtBQUFBLGlDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkE3QkYsZUFnQ0U7QUFBQSxr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Z0JBQUksRUFBQywwRkFEUDtBQUVFLHFCQUFTLEVBQUMsaUJBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTFCRixlQW1DRTtBQUFBLGlDQUNFO0FBQ0UsZ0JBQUksRUFBQyxnSEFEUDtBQUVFLHFCQUFTLEVBQUMsaUJBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQW5DRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF0S0Y7QUFBQSxrQkFERjtBQXdORDtLQXpOZUosUztBQTJOREEsd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb2RlL3RoZS1tYWdpYy1vZi10aGUtcnhqcy1zaGFyZS1vcGVyYXRvci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIENvZGVQb3N0MSgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8aDE+VGhlIG1hZ2ljIG9mIHRoZSBSeEpTIHNoYXJlIG9wZXJhdG9yczwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBUaGVyZSBhcmUgdHdvIG1haW4gd2F5cyB0byByZWFwIHRoZSBiZW5lZml0cyBvZiB0aGUgUnhKU1xuICAgICAgICAgICAgc2hhcmUvc2hhcmVSZXBsYXkgb3BlcmF0b3JzOlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8b2w+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxiPlNoYXJlIHJlZHVjZXMgcmVwZWF0ZWQgY29tcHV0YXRpb25zPC9iPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgV2l0aCBtdWx0aXBsZSBzdWJzY3JpYmVycyB0byB0aGUgc2FtZSBvYnNlcnZhYmxlLCB5b3UgY2FuXG4gICAgICAgICAgICAgICAgICBwcm9jZXNzIGNvbXB1dGF0aW9ucyAoc2lkZS1lZmZlY3RzKSBvbmNlLCBicm9hZGNhc3QgdGhlXG4gICAgICAgICAgICAgICAgICByZXN1bHRzIHRvIHdob2V2ZXIgaXMgbGlzdGVuaW5nLlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgICBTaGFyZVJlcGxheSA9IHNoYXJlICsgbWFraW5nIHN1cmUgXCJldmVyeW9uZSdzIG9uIHRoZSBzYW1lIHBhZ2VcIlxuICAgICAgICAgICAgICA8L2I+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICBXaGVuIHRoZXJlIGFyZSBtdWx0aXBsZSBzdWJzY3JpYmVycywgYW5kIHlvdSB3YW50IHRvIG1ha2Ugc3VyZVxuICAgICAgICAgICAgICAgICAgdGhleSBhbGwgZ2V0IHRoZSBzYW1lIGRhdGEsIGF0IHRoZSBzYW1lIHRpbWVcbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L29sPlxuICAgICAgICAgIDxoMj4xLiBSZWR1Y2UgUmVwZWF0ZWQgQ29tcHV0YXRpb25zPC9oMj5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxiPldpdGhvdXQgc2hhcmUoKTwvYj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGNvZGU+XG4gICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cImdyZXlcIj5cbiAgICAgICAgICAgICAge2BpbXBvcnQgeyBpbnRlcnZhbCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc2hhcmUsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbiAgYH1cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgPHByZT5cbiAgICAgICAgICAgICAge2Bjb25zdCBzb3VyY2UgPSBpbnRlcnZhbCgxMDAwKVxuICAgLnBpcGUoXG4gICAgICAgICBtYXAoKHg6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdJTlRFTlNFIGNvbXB1dGF0aW9uIGZvcjogJywgeClcbiAgICAgICAgICAgICByZXR1cm4geCAqIHg7XG4gICAgICAgICB9KVxuICk7XG5cbnNvdXJjZS5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZygnc3Vic2NyaXB0aW9uIDE6ICcsIHgpKTtcbnNvdXJjZS5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZygnc3Vic2NyaXB0aW9uIDI6ICcsIHgpKTtcbiBgfVxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cImdyZXlcIj57YC8vIENvbnNvbGU6XG4vLyBJTlRFTlNFIGNvbXB1dGF0aW9uIGZvcjogIDBcbi8vIHN1YnNjcmlwdGlvbiAxOiAgMFxuLy8gSU5URU5TRSBjb21wdXRhdGlvbiBmb3I6ICAwXG4vLyBzdWJzY3JpcHRpb24gMjogIDBcbi8vIElOVEVOU0UgY29tcHV0YXRpb24gZm9yOiAgMVxuLy8gc3Vic2NyaXB0aW9uIDE6ICAxXG4vLyBJTlRFTlNFIGNvbXB1dGF0aW9uIGZvcjogIDFcbi8vIHN1YnNjcmlwdGlvbiAyOiAgMVxuLy8gSU5URU5TRSBjb21wdXRhdGlvbiBmb3I6ICAyXG4vLyBzdWJzY3JpcHRpb24gMTogIDRcbi8vIElOVEVOU0UgY29tcHV0YXRpb24gZm9yOiAgMlxuLy8gc3Vic2NyaXB0aW9uIDI6ICA0YH08L3ByZT5cbiAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8Yj5XaXRoIHNoYXJlKCk8L2I+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxjb2RlPlxuICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJncmV5XCI+XG4gICAgICAgICAgICAgIHtgaW1wb3J0IHsgaW50ZXJ2YWwgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHNoYXJlLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG4gIGB9XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAgIHtgY29uc3Qgc291cmNlJCA9IGludGVydmFsKDEwMDApXG4gICAucGlwZShcbiAgICAgICAgIG1hcCgoeDogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgY29uc29sZS5sb2coJ0hlYXZ5LWR1dHkgY29tcHV0YXRpb24gZm9yOiAnLCB4KVxuICAgICAgICAgICAgIHJldHVybiB4ICogeDtcbiAgICAgICAgIH0pXG5cbnNvdXJjZSQuc3Vic2NyaWJlKHggPT4gY29uc29sZS5sb2coJ3N1YnNjcmlwdGlvbiAxOiAnLCB4KSk7XG5zb3VyY2UkLnN1YnNjcmliZSh4ID0+IGNvbnNvbGUubG9nKCdzdWJzY3JpcHRpb24gMjogJywgeCkpO1xuICk7YH1cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJncmV5XCI+e2AvLyBDb25zb2xlOlxuLy8gSU5URU5TRSBjb21wdXRhdGlvbiBmb3I6ICAwXG4vLyBzdWJzY3JpcHRpb24gMTogIDBcbi8vIHN1YnNjcmlwdGlvbiAyOiAgMFxuLy8gSU5URU5TRSBjb21wdXRhdGlvbiBmb3I6ICAxXG4vLyBzdWJzY3JpcHRpb24gMTogIDFcbi8vIHN1YnNjcmlwdGlvbiAyOiAgMVxuLy8gSU5URU5TRSBjb21wdXRhdGlvbiBmb3I6ICAyXG4vLyBzdWJzY3JpcHRpb24gMTogIDRcbi8vIHN1YnNjcmlwdGlvbiAyOiAgNGB9PC9wcmU+XG4gICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgIDxoMj4yLiBFdmVyeW9uZSdzIE9uIHRoZSBTYW1lIFBhZ2U8L2gyPlxuICAgICAgICAgIDxjb2RlPlxuICAgICAgICAgICAgPHByZSBjbGFzc05hbWU9XCJncmV5XCI+XG4gICAgICAgICAgICAgIHtgaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IGRlbGF5LCBzaGFyZSwgc2hhcmVSZXBsYXksIHRhcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG4gIEBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LWFwcFwiLGB9XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgIDxwcmU+XG4gICAgICAgICAgICAgIHtgdGVtcGxhdGVVcmw6IFxcYFxuICAgIDxkaXYgKm5nSWY9XCIoc291cmNlJCB8IGFzeW5jKVwiPlxuICAgICAgPGRpdiAqbmdJZj1cIihzb3VyY2UkIHwgYXN5bmMpXCI+XG4gICAgICAgIDxkaXY+e3sgc291cmNlJCB8IGFzeW5jIH19MTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiAqbmdJZj1cIihzb3VyY2UkIHwgYXN5bmMpXCI+XG4gICAgICA8ZGl2Pnt7IHNvdXJjZSQgfCBhc3luYyB9fTI8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgXFxgLFxufSlgfVxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgICAgICA8cHJlIGNsYXNzTmFtZT1cImdyZXlcIj57YFxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIHNvdXJjZSQ6IE9ic2VydmFibGU8YW55PjtcbmB9PC9wcmU+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICB7YFxuICBuZ09uSW5pdCgpIHtcbmB9XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgIDxwcmUgY2xhc3NOYW1lPVwieWVsbG93XCI+e2AgICAgIHRoaXMuc291cmNlJCA9IHRoaXMuZ2V0RGF0YSgpO2B9PC9wcmU+XG4gICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICB7YCB9XG5cbiAgZ2V0RGF0YSgpIHtcbiAgICAvLyBGYWtlIFNsb3cgQXN5bmMgRGF0YVxuICAgIHJldHVybiBvZihcImhlcmUgaXMgZGF0YVwiKS5waXBlKFxuICAgICAgdGFwKCgpID0+IGNvbnNvbGUubG9nKFwic2lkZS1lZmZlY3RcIikpLFxuICAgICAgZGVsYXkoMjAwMClcbiAgICApO1xuICB9XG59YH1cbiAgICAgICAgICAgIDwvcHJlPlxuICAgICAgICAgIDwvY29kZT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICBJZiB0aGUgeWVsbG93IGxpbmUgd2FzXG4gICAgICAgICAgICAgIDxjb2RlPnRoaXMuc291cmNlJCA9IHRoaXMuZ2V0RGF0YSgpPC9jb2RlPlxuICAgICAgICAgICAgPC9iPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxiPlxuICAgICAgICAgICAgICBJZiB0aGUgeWVsbG93IGxpbmUgd2FzXG4gICAgICAgICAgICAgIDxjb2RlPnRoaXMuc291cmNlJCA9IHRoaXMuZ2V0RGF0YShzaGFyZSgpKTwvY29kZT5cbiAgICAgICAgICAgIDwvYj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8Yj5cbiAgICAgICAgICAgICAgSWYgdGhlIHllbGxvdyBsaW5lIHdhc1xuICAgICAgICAgICAgICA8Y29kZT50aGlzLnNvdXJjZSQgPSB0aGlzLmdldERhdGEoc2hhcmVSZXBsYXkoMSkpPC9jb2RlPlxuICAgICAgICAgICAgPC9iPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGI+UmVmZXJlbmNlIGRvY3VtZW50YXRpb248L2I+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL1JlYWN0aXZlWC9yeGpzL2Jsb2IvbWFzdGVyL3NyYy9pbnRlcm5hbC9vcGVyYXRvcnMvc2hhcmUudHNcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmVkLWxpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSeEpTIHNvdXJjZSBjb2RlIChjYXV0aW9uOiBjaGVjayB5b3VyIHZlcnNpb24gYXMgdGhlIHNoYXJlXG4gICAgICAgICAgICAgIG9wZXJhdG9yIGhhcyB1bmRlcmdvbmUgY2hhbmdlcyBiZXR3ZWVuIHZlcnNpb25zKVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWVkaXVtLmNvbS9AbWlrZXNuYXJlL2FuZ3VsYXItYXN5bmMtcGlwZXMtYmV3YXJlLXRoZS1zaGFyZS1iY2M5YzFjZDg0OWRcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmVkLWxpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBCZXdhcmUgdGhlIFNoYXJlIGJ5IE1pa2UgU25hcmVcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL25ldGJhc2FsLmNvbS91bmRlcnN0YW5kaW5nLXJ4anMtbXVsdGljYXN0LW9wZXJhdG9ycy03N2IzZjYwYWYwYTJcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmVkLWxpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBVbmRlcnN0YW5kaW5nIG11bHRpY2FzdCBvcGVyYXRvcnMgYnkgTmV0YW5lbCBCYXNhbFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vaXRuZXh0LmlvL3RoZS1tYWdpYy1vZi1yeGpzLXNoYXJpbmctb3BlcmF0b3JzLWFuZC10aGVpci1kaWZmZXJlbmNlcy0zYTAzZDY5OWQyNTVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmVkLWxpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBUaGUgbWFnaWMgb2YgUlhKUyBzaGFyaW5nIG9wZXJhdG9ycyBhbmQgdGhlaXIgZGlmZmVyZW5jZXMgYnlcbiAgICAgICAgICAgICAgSVRORVhUXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jb3J5cnlsYW4uY29tL2Jsb2cvYW5ndWxhci1hc3luYy1kYXRhLWJpbmRpbmctd2l0aC1uZy1pZi1hbmQtbmctZWxzZSNhc3luYy1waXBlLWFuZC10aGUtc2hhcmUtb3BlcmF0b3JcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1bmRlcmxpbmVkLWxpbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBbmd1bGFyIEFzeW5jIERhdGEgQmluZGluZyB3aXRoIG5nSWYgYW5kIG5nRWxzZSBieSBDb3J5IFJ5bGFuXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb2RlUG9zdDE7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/code/the-magic-of-the-rxjs-share-operator.js\n");

/***/ })

})