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

/***/ "./pages/Footer.tsx":
/*!**************************!*\
  !*** ./pages/Footer.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Footer\": () => (/* binding */ Footer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nconst Footer = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"footer\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Footer\"\n        }, void 0, false, {\n            fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/Footer.tsx\",\n            lineNumber: 3,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/Footer.tsx\",\n        lineNumber: 2,\n        columnNumber: 29\n    }, undefined);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Gb290ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNBO0FBQU8sTUFBTUEsU0FBUyxrQkFBTSw4REFBQ0M7UUFBSUMsSUFBRztrQkFDaEMsNEVBQUNDO3NCQUFHOzs7Ozs7Ozs7O2tCQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXNsYWFtLWRhdGFiYXNlLWRvdC1jb20vLi9wYWdlcy9Gb290ZXIudHN4PzBiMmQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKCkgPT4gPGRpdiBpZD1cImZvb3RlclwiPlxuICAgIDxoMT5Gb290ZXI8L2gxPlxuPC9kaXY+O1xuIl0sIm5hbWVzIjpbIkZvb3RlciIsImRpdiIsImlkIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Footer.tsx\n");

/***/ }),

/***/ "./pages/Layout.tsx":
/*!**************************!*\
  !*** ./pages/Layout.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ \"./pages/Footer.tsx\");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ \"./pages/Navbar.tsx\");\n/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserContext */ \"./pages/UserContext.tsx\");\n\n\n\n\n\nconst Layout = ({ children  })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetch(\"/api/me\").then(async (r)=>{\n            const me = await r.json();\n            setUser(me);\n        });\n    }, []);\n    const onLogin = (username, password)=>fetch(\"/api/login\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                username,\n                password\n            })\n        }).then(async (r)=>{\n            if (r.status !== 200) return window.alert(await r.text());\n            setUser(await r.json());\n        });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserContext__WEBPACK_IMPORTED_MODULE_4__.UserContext.Provider, {\n        value: user,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n                onLogin: onLogin\n            }, void 0, false, {\n                fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/Layout.tsx\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    padding: \"0 1rem\"\n                },\n                children: children\n            }, void 0, false, {\n                fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/Layout.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_2__.Footer, {}, void 0, false, {\n                fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/Layout.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/Layout.tsx\",\n        lineNumber: 29,\n        columnNumber: 12\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9MYXlvdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEM7QUFDVjtBQUNBO0FBQ1U7QUFNckMsTUFBTUssU0FBUyxDQUFDLEVBQUVDLFNBQVEsRUFBUyxHQUFLO0lBQzNDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUE7SUFFaENELGdEQUFTQSxDQUFDLElBQU07UUFDWlMsTUFBTSxXQUFXQyxJQUFJLENBQUMsT0FBTUMsSUFBSztZQUM3QixNQUFNQyxLQUFLLE1BQU1ELEVBQUVFLElBQUk7WUFDdkJMLFFBQVFJO1FBQ1o7SUFDSixHQUFHLEVBQUU7SUFFTCxNQUFNRSxVQUFVLENBQUNDLFVBQWtCQyxXQUFxQlAsTUFBTSxjQUFjO1lBQ3hFUSxRQUFRO1lBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUw7Z0JBQVVDO1lBQVM7UUFDOUMsR0FDS04sSUFBSSxDQUFDLE9BQU1DLElBQUs7WUFDYixJQUFJQSxFQUFFVSxNQUFNLEtBQUssS0FBSyxPQUFPQyxPQUFPQyxLQUFLLENBQUMsTUFBTVosRUFBRWEsSUFBSTtZQUN0RGhCLFFBQVEsTUFBTUcsRUFBRUUsSUFBSTtRQUN4QjtJQUVKLHFCQUFPLDhEQUFDVCw4REFBb0I7UUFBQ3NCLE9BQU9uQjs7MEJBQ2hDLDhEQUFDSiwyQ0FBTUE7Z0JBQUNXLFNBQVNBOzs7Ozs7MEJBQ2pCLDhEQUFDYTtnQkFBSUMsT0FBTztvQkFBRUMsU0FBUztnQkFBUzswQkFDM0J2Qjs7Ozs7OzBCQUVMLDhEQUFDSiwyQ0FBTUE7Ozs7Ozs7Ozs7O0FBRWYsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2lzbGFhbS1kYXRhYmFzZS1kb3QtY29tLy4vcGFnZXMvTGF5b3V0LnRzeD8xNzRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuL0Zvb3RlclwiO1xuaW1wb3J0IHsgTmF2YmFyIH0gZnJvbSBcIi4vTmF2YmFyXCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuL1VzZXJDb250ZXh0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgY2hpbGRyZW46IEpTWC5FbGVtZW50O1xufVxuXG5leHBvcnQgY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4gfTogUHJvcHMpID0+IHtcbiAgICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyPigpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2goXCIvYXBpL21lXCIpLnRoZW4oYXN5bmMgciA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZSA9IGF3YWl0IHIuanNvbigpO1xuICAgICAgICAgICAgc2V0VXNlcihtZSk7XG4gICAgICAgIH0pXG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgb25Mb2dpbiA9ICh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiBmZXRjaChcIi9hcGkvbG9naW5cIiwge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHVzZXJuYW1lLCBwYXNzd29yZCB9KSxcbiAgICB9KVxuICAgICAgICAudGhlbihhc3luYyByID0+IHtcbiAgICAgICAgICAgIGlmIChyLnN0YXR1cyAhPT0gMjAwKSByZXR1cm4gd2luZG93LmFsZXJ0KGF3YWl0IHIudGV4dCgpKTtcbiAgICAgICAgICAgIHNldFVzZXIoYXdhaXQgci5qc29uKCkgYXMgVXNlcik7XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIDxVc2VyQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17dXNlcn0+XG4gICAgICAgIDxOYXZiYXIgb25Mb2dpbj17b25Mb2dpbn0gLz5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjAgMXJlbVwiIH19PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgIDwvVXNlckNvbnRleHQuUHJvdmlkZXI+O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkZvb3RlciIsIk5hdmJhciIsIlVzZXJDb250ZXh0IiwiTGF5b3V0IiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImZldGNoIiwidGhlbiIsInIiLCJtZSIsImpzb24iLCJvbkxvZ2luIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RhdHVzIiwid2luZG93IiwiYWxlcnQiLCJ0ZXh0IiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImRpdiIsInN0eWxlIiwicGFkZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Layout.tsx\n");

/***/ }),

/***/ "./pages/Navbar.tsx":
/*!**************************!*\
  !*** ./pages/Navbar.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navbar\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserContext */ \"./pages/UserContext.tsx\");\n\n\n\nconst Navbar = ({ onLogin  })=>{\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const user = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_UserContext__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"navbar\",\n        onClick: ()=>setIsOpen(!isOpen),\n        children: [\n            isOpen ? \"open\" : \"closed\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Navbar\"\n            }, void 0, false, {\n                fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/Navbar.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined),\n            user ? user.username : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>onLogin(window.prompt(\"Username\", \"askyous\") || \"\", window.prompt(\"Password\", \"password\") || \"\"),\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/Navbar.tsx\",\n                lineNumber: 14,\n                columnNumber: 33\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/Navbar.tsx\",\n        lineNumber: 11,\n        columnNumber: 12\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9OYXZiYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTZDO0FBQ0Q7QUFNckMsTUFBTUcsU0FBUyxDQUFDLEVBQUVDLFFBQU8sRUFBUyxHQUFLO0lBQzFDLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzFDLE1BQU1NLE9BQU9QLGlEQUFVQSxDQUFDRSxxREFBV0E7SUFDbkMscUJBQU8sOERBQUNNO1FBQUlDLElBQUc7UUFBU0MsU0FBUyxJQUFNSixVQUFVLENBQUNEOztZQUM3Q0EsU0FBUyxTQUFTLFFBQVE7MEJBQzNCLDhEQUFDTTswQkFBRzs7Ozs7O1lBQ0hKLE9BQU9BLEtBQUtLLFFBQVEsaUJBQUcsOERBQUNDO2dCQUFPSCxTQUFTLElBQU1OLFFBQzNDVSxPQUFPQyxNQUFNLENBQUMsWUFBWSxjQUFjLElBQ3hDRCxPQUFPQyxNQUFNLENBQUMsWUFBWSxlQUFlOzBCQUMxQzs7Ozs7eUJBQWM7Ozs7Ozs7QUFFekIsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2lzbGFhbS1kYXRhYmFzZS1kb3QtY29tLy4vcGFnZXMvTmF2YmFyLnRzeD9hNmFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBVc2VyQ29udGV4dCB9IGZyb20gXCIuL1VzZXJDb250ZXh0XCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gICAgb25Mb2dpbjogKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpID0+IGFueTtcbn1cblxuZXhwb3J0IGNvbnN0IE5hdmJhciA9ICh7IG9uTG9naW4gfTogUHJvcHMpID0+IHtcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHVzZXIgPSB1c2VDb250ZXh0KFVzZXJDb250ZXh0KTtcbiAgICByZXR1cm4gPGRpdiBpZD1cIm5hdmJhclwiIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbighaXNPcGVuKX0+XG4gICAgICAgIHtpc09wZW4gPyBcIm9wZW5cIiA6IFwiY2xvc2VkXCJ9XG4gICAgICAgIDxoMT5OYXZiYXI8L2gxPlxuICAgICAgICB7dXNlciA/IHVzZXIudXNlcm5hbWUgOiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uTG9naW4oXG4gICAgICAgICAgICB3aW5kb3cucHJvbXB0KFwiVXNlcm5hbWVcIiwgXCJhc2t5b3VzXCIpIHx8IFwiXCIsXG4gICAgICAgICAgICB3aW5kb3cucHJvbXB0KFwiUGFzc3dvcmRcIiwgXCJwYXNzd29yZFwiKSB8fCBcIlwiLFxuICAgICAgICApfT5Mb2dpbjwvYnV0dG9uPn1cbiAgICA8L2Rpdj47XG59O1xuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIlVzZXJDb250ZXh0IiwiTmF2YmFyIiwib25Mb2dpbiIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZXIiLCJkaXYiLCJpZCIsIm9uQ2xpY2siLCJoMSIsInVzZXJuYW1lIiwiYnV0dG9uIiwid2luZG93IiwicHJvbXB0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Navbar.tsx\n");

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