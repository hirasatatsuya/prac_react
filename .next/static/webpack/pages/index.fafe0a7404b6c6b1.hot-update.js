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

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction Header(param) {\n    var title = param.title;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"/Users/apple/workspace/prac_react/pages/index.jsx\",\n        lineNumber: 3,\n        columnNumber: 10\n    }, this);\n}\n_c = Header;\nfunction HomePage() {\n    var _this = this;\n    var handleClick = function handleClick() {\n        setLikes(likes + 1);\n    };\n    _s();\n    var names = [\n        \"平佐達也\",\n        \"平佐竜也\",\n        \"Ada Lovelace\",\n        \"Grace Hopper\",\n        \"Margaret Hamilton\"\n    ];\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), likes = ref[0], setLikes = ref[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"Develop. Preview. Ship. \\uD83D\\uDE80\"\n            }, void 0, false, {\n                fileName: \"/Users/apple/workspace/prac_react/pages/index.jsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: names.map(function(name) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: name\n                    }, name, false, {\n                        fileName: \"/Users/apple/workspace/prac_react/pages/index.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/apple/workspace/prac_react/pages/index.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                children: [\n                    \"Like (\",\n                    likes,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/apple/workspace/prac_react/pages/index.jsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apple/workspace/prac_react/pages/index.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n} // <html>\n //   <body>\n //     <div id=\"app\"></div>\n //     <script src=\"https://unpkg.com/react@17/umd/react.development.js\"></script>\n //     <script src=\"https://unpkg.com/react-dom@17/umd/react-dom.development.js\"></script>\n //     <script src=\"https://unpkg.com/@babel/standalone/babel.min.js\"></script>\n //     <script type=\"text/jsx\">\n //       const app = document.getElementById(\"app\")\n //       function Header({ title }) {\n //         return <h1>{title ? title : \"Default title\"}</h1>\n //       }\n //       function HomePage() {\n //         const names = [\"Ada Lovelace\", \"Grace Hopper\", \"Margaret Hamilton\"]\n //         const [likes, setLikes] = React.useState(0)\n //         function handleClick() {\n //           setLikes(likes + 1)\n //         }\n //         return (\n //           <div>\n //             <Header title=\"Develop. Preview. Ship. 🚀\" />\n //             <ul>\n //               {names.map((name) => (\n //                 <li key={name}>{name}</li>\n //               ))}\n //             </ul>\n //             <button onClick={handleClick}>Like ({likes})</button>\n //           </div>\n //         )\n //       }\n //       ReactDOM.render(<HomePage />, app)\n //     </script>\n //   </body>\n // </html>\n_s(HomePage, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c1 = HomePage;\nvar _c, _c1;\n$RefreshReg$(_c, \"Header\");\n$RefreshReg$(_c1, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBaUM7QUFDakMsU0FBU0MsTUFBTSxDQUFDLEtBQVMsRUFBRTtRQUFYLEtBQU8sR0FBUCxLQUFTLENBQVBDLEtBQUs7SUFDckIscUJBQU8sOERBQUNDLElBQUU7a0JBQUVELEtBQUssR0FBR0EsS0FBSyxHQUFHLGVBQWU7Ozs7O1lBQU0sQ0FBQztBQUNwRCxDQUFDO0FBRlFELEtBQUFBLE1BQU07QUFJQSxTQUFTRyxRQUFRLEdBQUc7O1FBS3hCQyxXQUFXLEdBQXBCLFNBQVNBLFdBQVcsR0FBRztRQUNyQkMsUUFBUSxDQUFDQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7SUFORCxJQUFNQyxLQUFLLEdBQUc7UUFBQyxNQUFNO1FBQUUsTUFBTTtRQUFFLGNBQWM7UUFBRSxjQUFjO1FBQUUsbUJBQW1CO0tBQUM7SUFFbkYsSUFBMEJSLEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsRUFBOUJPLEtBQUssR0FBY1AsR0FBVyxHQUF6QixFQUFFTSxRQUFRLEdBQUlOLEdBQVcsR0FBZjtJQU10QixxQkFDRSw4REFBQ1MsS0FBRzs7MEJBQ0YsOERBQUNSLE1BQU07Z0JBQUNDLEtBQUssRUFBQyxzQ0FBMkI7Ozs7O29CQUFHOzBCQUM1Qyw4REFBQ1EsSUFBRTswQkFDQUYsS0FBSyxDQUFDRyxHQUFHLENBQUMsU0FBQ0MsSUFBSTt5Q0FDZCw4REFBQ0MsSUFBRTtrQ0FBYUQsSUFBSTt1QkFBWEEsSUFBSTs7Ozs2QkFBYTtpQkFDM0IsQ0FBQzs7Ozs7b0JBQ0M7MEJBRUwsOERBQUNFLFFBQU07Z0JBQUNDLE9BQU8sRUFBRVYsV0FBVzs7b0JBQUUsUUFBTTtvQkFBQ0UsS0FBSztvQkFBQyxHQUFDOzs7Ozs7b0JBQVM7Ozs7OztZQUNqRCxDQUNOO0FBQ0osQ0FBQyxDQUdELFNBQVM7Q0FDVCxXQUFXO0NBQ1gsMkJBQTJCO0NBRTNCLGtGQUFrRjtDQUNsRiwwRkFBMEY7Q0FDMUYsK0VBQStFO0NBRS9FLCtCQUErQjtDQUMvQixtREFBbUQ7Q0FFbkQscUNBQXFDO0NBQ3JDLDREQUE0RDtDQUM1RCxVQUFVO0NBRVYsOEJBQThCO0NBQzlCLDhFQUE4RTtDQUU5RSxzREFBc0Q7Q0FFdEQsbUNBQW1DO0NBQ25DLGdDQUFnQztDQUNoQyxZQUFZO0NBRVosbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQiwyREFBMkQ7Q0FDM0QsbUJBQW1CO0NBQ25CLHVDQUF1QztDQUN2Qyw2Q0FBNkM7Q0FDN0Msb0JBQW9CO0NBQ3BCLG9CQUFvQjtDQUVwQixvRUFBb0U7Q0FDcEUsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixVQUFVO0NBRVYsMkNBQTJDO0NBQzNDLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osVUFBVTtHQWpFY0gsUUFBUTtBQUFSQSxNQUFBQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzeD83ZmZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuZnVuY3Rpb24gSGVhZGVyKHsgdGl0bGUgfSkge1xuICByZXR1cm4gPGgxPnt0aXRsZSA/IHRpdGxlIDogJ0RlZmF1bHQgdGl0bGUnfTwvaDE+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgbmFtZXMgPSBbJ+W5s+S9kOmBlOS5nycsICflubPkvZDnq5zkuZ8nLCAnQWRhIExvdmVsYWNlJywgJ0dyYWNlIEhvcHBlcicsICdNYXJnYXJldCBIYW1pbHRvbiddO1xuXG4gIGNvbnN0IFtsaWtlcywgc2V0TGlrZXNdID0gdXNlU3RhdGUoMCk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgc2V0TGlrZXMobGlrZXMgKyAxKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIgdGl0bGU9XCJEZXZlbG9wLiBQcmV2aWV3LiBTaGlwLiDwn5qAXCIgLz5cbiAgICAgIDx1bD5cbiAgICAgICAge25hbWVzLm1hcCgobmFtZSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e25hbWV9PntuYW1lfTwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cblxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+TGlrZSAoe2xpa2VzfSk8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuXG4vLyA8aHRtbD5cbi8vICAgPGJvZHk+XG4vLyAgICAgPGRpdiBpZD1cImFwcFwiPjwvZGl2PlxuXG4vLyAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS9yZWFjdEAxNy91bWQvcmVhY3QuZGV2ZWxvcG1lbnQuanNcIj48L3NjcmlwdD5cbi8vICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8vdW5wa2cuY29tL3JlYWN0LWRvbUAxNy91bWQvcmVhY3QtZG9tLmRldmVsb3BtZW50LmpzXCI+PC9zY3JpcHQ+XG4vLyAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL3VucGtnLmNvbS9AYmFiZWwvc3RhbmRhbG9uZS9iYWJlbC5taW4uanNcIj48L3NjcmlwdD5cblxuLy8gICAgIDxzY3JpcHQgdHlwZT1cInRleHQvanN4XCI+XG4vLyAgICAgICBjb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFwcFwiKVxuXG4vLyAgICAgICBmdW5jdGlvbiBIZWFkZXIoeyB0aXRsZSB9KSB7XG4vLyAgICAgICAgIHJldHVybiA8aDE+e3RpdGxlID8gdGl0bGUgOiBcIkRlZmF1bHQgdGl0bGVcIn08L2gxPlxuLy8gICAgICAgfVxuXG4vLyAgICAgICBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbi8vICAgICAgICAgY29uc3QgbmFtZXMgPSBbXCJBZGEgTG92ZWxhY2VcIiwgXCJHcmFjZSBIb3BwZXJcIiwgXCJNYXJnYXJldCBIYW1pbHRvblwiXVxuXG4vLyAgICAgICAgIGNvbnN0IFtsaWtlcywgc2V0TGlrZXNdID0gUmVhY3QudXNlU3RhdGUoMClcblxuLy8gICAgICAgICBmdW5jdGlvbiBoYW5kbGVDbGljaygpIHtcbi8vICAgICAgICAgICBzZXRMaWtlcyhsaWtlcyArIDEpXG4vLyAgICAgICAgIH1cblxuLy8gICAgICAgICByZXR1cm4gKFxuLy8gICAgICAgICAgIDxkaXY+XG4vLyAgICAgICAgICAgICA8SGVhZGVyIHRpdGxlPVwiRGV2ZWxvcC4gUHJldmlldy4gU2hpcC4g8J+agFwiIC8+XG4vLyAgICAgICAgICAgICA8dWw+XG4vLyAgICAgICAgICAgICAgIHtuYW1lcy5tYXAoKG5hbWUpID0+IChcbi8vICAgICAgICAgICAgICAgICA8bGkga2V5PXtuYW1lfT57bmFtZX08L2xpPlxuLy8gICAgICAgICAgICAgICApKX1cbi8vICAgICAgICAgICAgIDwvdWw+XG5cbi8vICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9Pkxpa2UgKHtsaWtlc30pPC9idXR0b24+XG4vLyAgICAgICAgICAgPC9kaXY+XG4vLyAgICAgICAgIClcbi8vICAgICAgIH1cblxuLy8gICAgICAgUmVhY3RET00ucmVuZGVyKDxIb21lUGFnZSAvPiwgYXBwKVxuLy8gICAgIDwvc2NyaXB0PlxuLy8gICA8L2JvZHk+XG4vLyA8L2h0bWw+Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGVhZGVyIiwidGl0bGUiLCJoMSIsIkhvbWVQYWdlIiwiaGFuZGxlQ2xpY2siLCJzZXRMaWtlcyIsImxpa2VzIiwibmFtZXMiLCJkaXYiLCJ1bCIsIm1hcCIsIm5hbWUiLCJsaSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});