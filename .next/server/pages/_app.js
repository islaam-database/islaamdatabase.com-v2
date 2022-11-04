/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/Layout.tsx":
/*!**************************!*\
  !*** ./pages/Layout.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Footer */ \"./pages/components/Footer.tsx\");\n/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Navbar */ \"./pages/components/Navbar.tsx\");\n/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserContext */ \"./pages/UserContext.tsx\");\n\n\n\n\n\nconst Layout = ({ children  })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/me\").then(async (r)=>{\n            const me = await r.json();\n            setUser(me);\n        });\n    }, []);\n    const onLogin = (username, password)=>fetch(\"/api/login\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                username,\n                password\n            })\n        }).then(async (r)=>{\n            if (r.status !== 200) return window.alert(await r.text());\n            setUser(await r.json());\n        });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserContext__WEBPACK_IMPORTED_MODULE_4__.UserContext.Provider, {\n        value: user,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n                onLogin: onLogin\n            }, void 0, false, {\n                fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/Layout.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"0 1rem\"\n                },\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/Layout.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_2__.Footer, {}, void 0, false, {\n                fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/Layout.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/Layout.tsx\",\n        lineNumber: 29,\n        columnNumber: 12\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9MYXlvdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEM7QUFDQztBQUNBO0FBQ0Q7QUFNckMsTUFBTUssU0FBUyxDQUFDLEVBQUVDLFNBQVEsRUFBUyxHQUFLO0lBQzNDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUE7SUFFaENELGdEQUFTQSxDQUFDLElBQU07UUFDWlMsTUFBTSxXQUFXQyxJQUFJLENBQUMsT0FBTUMsSUFBSztZQUM3QixNQUFNQyxLQUFLLE1BQU1ELEVBQUVFLElBQUk7WUFDdkJMLFFBQVFJO1FBQ1o7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNRSxVQUFVLENBQUNDLFVBQWtCQyxXQUFxQlAsTUFBTSxjQUFjO1lBQ3hFUSxRQUFRO1lBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUw7Z0JBQVVDO1lBQVM7UUFDOUMsR0FDS04sSUFBSSxDQUFDLE9BQU1DLElBQUs7WUFDYixJQUFJQSxFQUFFVSxNQUFNLEtBQUssS0FBSyxPQUFPQyxPQUFPQyxLQUFLLENBQUMsTUFBTVosRUFBRWEsSUFBSTtZQUN0RGhCLFFBQVEsTUFBTUcsRUFBRUUsSUFBSTtRQUN4QjtJQUVKLHFCQUFPLDhEQUFDVCw4REFBb0I7UUFBQ3NCLE9BQU9uQjs7MEJBQ2hDLDhEQUFDSixzREFBTUE7Z0JBQUNXLFNBQVNBOzs7Ozs7MEJBQ2pCLDhEQUFDYTtnQkFBSUMsT0FBTztvQkFBRUMsU0FBUztnQkFBUzswQkFDM0J2Qjs7Ozs7OzBCQUVMLDhEQUFDSixzREFBTUE7Ozs7Ozs7Ozs7O0FBRWYsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2lzbGFhbS1kYXRhYmFzZS1kb3QtY29tLy4vcGFnZXMvTGF5b3V0LnRzeD8xNzRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgeyBOYXZiYXIgfSBmcm9tIFwiLi9jb21wb25lbnRzL05hdmJhclwiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi9Vc2VyQ29udGV4dFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGNoaWxkcmVuOiBKU1guRWxlbWVudDtcbn1cblxuZXhwb3J0IGNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlcj4oKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKFwiL2FwaS9tZVwiKS50aGVuKGFzeW5jIHIgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWUgPSBhd2FpdCByLmpzb24oKTtcbiAgICAgICAgICAgIHNldFVzZXIobWUpO1xuICAgICAgICB9KVxuICAgIH0sIFtdKTtcblxuICAgIGNvbnN0IG9uTG9naW4gPSAodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4gZmV0Y2goXCIvYXBpL2xvZ2luXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSksXG4gICAgfSlcbiAgICAgICAgLnRoZW4oYXN5bmMgciA9PiB7XG4gICAgICAgICAgICBpZiAoci5zdGF0dXMgIT09IDIwMCkgcmV0dXJuIHdpbmRvdy5hbGVydChhd2FpdCByLnRleHQoKSk7XG4gICAgICAgICAgICBzZXRVc2VyKGF3YWl0IHIuanNvbigpIGFzIFVzZXIpO1xuICAgICAgICB9KTtcblxuICAgIHJldHVybiA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3VzZXJ9PlxuICAgICAgICA8TmF2YmFyIG9uTG9naW49e29uTG9naW59IC8+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIwIDFyZW1cIiB9fT5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICA8L1VzZXJDb250ZXh0LlByb3ZpZGVyPjtcbn07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGb290ZXIiLCJOYXZiYXIiLCJVc2VyQ29udGV4dCIsIkxheW91dCIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJmZXRjaCIsInRoZW4iLCJyIiwibWUiLCJqc29uIiwib25Mb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInN0YXR1cyIsIndpbmRvdyIsImFsZXJ0IiwidGV4dCIsIlByb3ZpZGVyIiwidmFsdWUiLCJkaXYiLCJzdHlsZSIsInBhZGRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Layout.tsx\n");

/***/ }),

/***/ "./pages/UserContext.tsx":
/*!*******************************!*\
  !*** ./pages/UserContext.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Vc2VyQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRS9CLE1BQU1DLDRCQUFjRCxvREFBYUEsQ0FBbUJFLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pc2xhYW0tZGF0YWJhc2UtZG90LWNvbS8uL3BhZ2VzL1VzZXJDb250ZXh0LnRzeD81N2RlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxVc2VyIHwgdW5kZWZpbmVkPih1bmRlZmluZWQpO1xuIl0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJVc2VyQ29udGV4dCIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/UserContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ \"./pages/Layout.tsx\");\n/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\n/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout__WEBPACK_IMPORTED_MODULE_1__.Layout, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ2tDO0FBQ1Q7QUFDTTtBQUVoQixTQUFTQyxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQUU7SUFDOUQscUJBQU8sOERBQUNILDJDQUFNQTtrQkFDWiw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUU1QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXNsYWFtLWRhdGFiYXNlLWRvdC1jb20vLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCIuL0xheW91dFwiO1xuaW1wb3J0IFwicmVmbGVjdC1tZXRhZGF0YVwiXG5pbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIDxMYXlvdXQ+XG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICA8L0xheW91dD47XG59Il0sIm5hbWVzIjpbIkxheW91dCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/components/Footer.tsx":
/*!*************************************!*\
  !*** ./pages/components/Footer.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Footer\": () => (/* binding */ Footer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Footer = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"footer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Footer\"\n        }, void 0, false, {\n            fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/components/Footer.tsx\",\n            lineNumber: 3,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/components/Footer.tsx\",\n        lineNumber: 2,\n        columnNumber: 29\n    }, undefined);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0Zvb3Rlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0E7QUFBTyxNQUFNQSxTQUFTLGtCQUFNLDhEQUFDQztRQUFJQyxJQUFHO2tCQUNoQyw0RUFBQ0M7c0JBQUc7Ozs7Ozs7Ozs7a0JBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pc2xhYW0tZGF0YWJhc2UtZG90LWNvbS8uL3BhZ2VzL2NvbXBvbmVudHMvRm9vdGVyLnRzeD85ZGQyIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IDxkaXYgaWQ9XCJmb290ZXJcIj5cbiAgICA8aDE+Rm9vdGVyPC9oMT5cbjwvZGl2PjtcbiJdLCJuYW1lcyI6WyJGb290ZXIiLCJkaXYiLCJpZCIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/Footer.tsx\n");

/***/ }),

/***/ "./pages/components/Navbar.tsx":
/*!*************************************!*\
  !*** ./pages/components/Navbar.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navbar\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UserContext */ \"./pages/UserContext.tsx\");\n\n\n\nconst Navbar = ({ onLogin  })=>{\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const user = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_UserContext__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"navbar\",\n        onClick: ()=>setIsOpen(!isOpen),\n        children: [\n            isOpen ? \"open\" : \"closed\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Navbar\"\n            }, void 0, false, {\n                fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/components/Navbar.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined),\n            user ? user.username : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>onLogin(window.prompt(\"Username\", \"askyous\") || \"\", window.prompt(\"Password\", \"password\") || \"\"),\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/components/Navbar.tsx\",\n                lineNumber: 14,\n                columnNumber: 33\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/components/Navbar.tsx\",\n        lineNumber: 11,\n        columnNumber: 12\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL05hdmJhci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBNkM7QUFDQTtBQU10QyxNQUFNRyxTQUFTLENBQUMsRUFBRUMsUUFBTyxFQUFTLEdBQUs7SUFDMUMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdMLCtDQUFRQSxDQUFDLEtBQUs7SUFDMUMsTUFBTU0sT0FBT1AsaURBQVVBLENBQUNFLHFEQUFXQTtJQUNuQyxxQkFBTyw4REFBQ007UUFBSUMsSUFBRztRQUFTQyxTQUFTLElBQU1KLFVBQVUsQ0FBQ0Q7O1lBQzdDQSxTQUFTLFNBQVMsUUFBUTswQkFDM0IsOERBQUNNOzBCQUFHOzs7Ozs7WUFDSEosT0FBT0EsS0FBS0ssUUFBUSxpQkFBRyw4REFBQ0M7Z0JBQU9ILFNBQVMsSUFBTU4sUUFDM0NVLE9BQU9DLE1BQU0sQ0FBQyxZQUFZLGNBQWMsSUFDeENELE9BQU9DLE1BQU0sQ0FBQyxZQUFZLGVBQWU7MEJBQzFDOzs7Ozt5QkFBYzs7Ozs7OztBQUV6QixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXNsYWFtLWRhdGFiYXNlLWRvdC1jb20vLi9wYWdlcy9jb21wb25lbnRzL05hdmJhci50c3g/ZmQyMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi4vVXNlckNvbnRleHRcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgICBvbkxvZ2luOiAodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4gYW55O1xufVxuXG5leHBvcnQgY29uc3QgTmF2YmFyID0gKHsgb25Mb2dpbiB9OiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgdXNlciA9IHVzZUNvbnRleHQoVXNlckNvbnRleHQpO1xuICAgIHJldHVybiA8ZGl2IGlkPVwibmF2YmFyXCIgb25DbGljaz17KCkgPT4gc2V0SXNPcGVuKCFpc09wZW4pfT5cbiAgICAgICAge2lzT3BlbiA/IFwib3BlblwiIDogXCJjbG9zZWRcIn1cbiAgICAgICAgPGgxPk5hdmJhcjwvaDE+XG4gICAgICAgIHt1c2VyID8gdXNlci51c2VybmFtZSA6IDxidXR0b24gb25DbGljaz17KCkgPT4gb25Mb2dpbihcbiAgICAgICAgICAgIHdpbmRvdy5wcm9tcHQoXCJVc2VybmFtZVwiLCBcImFza3lvdXNcIikgfHwgXCJcIixcbiAgICAgICAgICAgIHdpbmRvdy5wcm9tcHQoXCJQYXNzd29yZFwiLCBcInBhc3N3b3JkXCIpIHx8IFwiXCIsXG4gICAgICAgICl9PkxvZ2luPC9idXR0b24+fVxuICAgIDwvZGl2Pjtcbn07XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsInVzZVN0YXRlIiwiVXNlckNvbnRleHQiLCJOYXZiYXIiLCJvbkxvZ2luIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXNlciIsImRpdiIsImlkIiwib25DbGljayIsImgxIiwidXNlcm5hbWUiLCJidXR0b24iLCJ3aW5kb3ciLCJwcm9tcHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Navbar.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("reflect-metadata");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();