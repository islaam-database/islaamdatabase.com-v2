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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Layout\": () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ \"./pages/Footer.tsx\");\n/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar */ \"./pages/Navbar.tsx\");\n/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserContext */ \"./pages/UserContext.tsx\");\n\n\n\n\n\nconst Layout = ({ children  })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const onLogin = (username, password)=>fetch(\"/api/login\", {\n            method: \"POST\",\n            body: JSON.stringify({\n                username,\n                password\n            })\n        }).then(async (r)=>{\n            if (r.status !== 200) return window.alert(await r.text());\n            const { username , password , isLoggedIn  } = await r.json();\n            setUser(username);\n        });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_UserContext__WEBPACK_IMPORTED_MODULE_4__.UserContext.Provider, {\n        value: user,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"layout\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navbar__WEBPACK_IMPORTED_MODULE_3__.Navbar, {\n                        onLogin: onLogin\n                    }, void 0, false, {\n                        fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/Layout.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            padding: \"0 1rem\"\n                        },\n                        children: children\n                    }, void 0, false, {\n                        fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/Layout.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/Layout.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Footer__WEBPACK_IMPORTED_MODULE_2__.Footer, {}, void 0, false, {\n                fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/Layout.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/Layout.tsx\",\n        lineNumber: 22,\n        columnNumber: 12\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9MYXlvdXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBaUM7QUFDQztBQUNBO0FBQ1U7QUFNckMsTUFBTUksU0FBUyxDQUFDLEVBQUVDLFNBQVEsRUFBUyxHQUFLO0lBQzNDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHUCwrQ0FBUUE7SUFDaEMsTUFBTVEsVUFBVSxDQUFDQyxVQUFrQkMsV0FBcUJDLE1BQU0sY0FBYztZQUN4RUMsUUFBUTtZQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQUVOO2dCQUFVQztZQUFTO1FBQzlDLEdBQ0tNLElBQUksQ0FBQyxPQUFNQyxJQUFLO1lBQ2IsSUFBSUEsRUFBRUMsTUFBTSxLQUFLLEtBQUssT0FBT0MsT0FBT0MsS0FBSyxDQUFDLE1BQU1ILEVBQUVJLElBQUk7WUFDdEQsTUFBTSxFQUFFWixTQUFRLEVBQUVDLFNBQVEsRUFBRVksV0FBVSxFQUFFLEdBQUksTUFBTUwsRUFBRU0sSUFBSTtZQUN4RGhCLFFBQVFFO1FBQ1o7SUFFSixxQkFBTyw4REFBQ04sOERBQW9CO1FBQUNzQixPQUFPbkI7OzBCQUNoQyw4REFBQ29CO2dCQUFJQyxJQUFHOztrQ0FDSiw4REFBQ3pCLDJDQUFNQTt3QkFBQ00sU0FBU0E7Ozs7OztrQ0FDakIsOERBQUNrQjt3QkFBSUUsT0FBTzs0QkFBRUMsU0FBUzt3QkFBUztrQ0FDM0J4Qjs7Ozs7Ozs7Ozs7OzBCQUdULDhEQUFDSiwyQ0FBTUE7Ozs7Ozs7Ozs7O0FBRWYsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2lzbGFhbS1kYXRhYmFzZS1kb3QtY29tLy4vcGFnZXMvTGF5b3V0LnRzeD8xNzRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi9Gb290ZXJcIjtcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCIuL05hdmJhclwiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi9Vc2VyQ29udGV4dFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIGNoaWxkcmVuOiBKU1guRWxlbWVudDtcbn1cblxuZXhwb3J0IGNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuIH06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8c3RyaW5nPigpO1xuICAgIGNvbnN0IG9uTG9naW4gPSAodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykgPT4gZmV0Y2goXCIvYXBpL2xvZ2luXCIsIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSksXG4gICAgfSlcbiAgICAgICAgLnRoZW4oYXN5bmMgciA9PiB7XG4gICAgICAgICAgICBpZiAoci5zdGF0dXMgIT09IDIwMCkgcmV0dXJuIHdpbmRvdy5hbGVydChhd2FpdCByLnRleHQoKSk7XG4gICAgICAgICAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCwgaXNMb2dnZWRJbiB9ID0gKGF3YWl0IHIuanNvbigpKTtcbiAgICAgICAgICAgIHNldFVzZXIodXNlcm5hbWUpO1xuICAgICAgICB9KTtcblxuICAgIHJldHVybiA8VXNlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3VzZXJ9PlxuICAgICAgICA8ZGl2IGlkPVwibGF5b3V0XCI+XG4gICAgICAgICAgICA8TmF2YmFyIG9uTG9naW49e29uTG9naW59IC8+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMCAxcmVtXCIgfX0+XG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgPC9Vc2VyQ29udGV4dC5Qcm92aWRlcj47XG59O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiRm9vdGVyIiwiTmF2YmFyIiwiVXNlckNvbnRleHQiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInVzZXIiLCJzZXRVc2VyIiwib25Mb2dpbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInIiLCJzdGF0dXMiLCJ3aW5kb3ciLCJhbGVydCIsInRleHQiLCJpc0xvZ2dlZEluIiwianNvbiIsIlByb3ZpZGVyIiwidmFsdWUiLCJkaXYiLCJpZCIsInN0eWxlIiwicGFkZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Layout.tsx\n");

/***/ }),

/***/ "./pages/Navbar.tsx":
/*!**************************!*\
  !*** ./pages/Navbar.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Navbar\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserContext */ \"./pages/UserContext.tsx\");\n\n\n\nconst Navbar = ({ onLogin  })=>{\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const user = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_UserContext__WEBPACK_IMPORTED_MODULE_2__.UserContext);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"navbar\",\n        onClick: ()=>setIsOpen(!isOpen),\n        children: [\n            isOpen ? \"open\" : \"closed\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Navbar\"\n            }, void 0, false, {\n                fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/Navbar.tsx\",\n                lineNumber: 13,\n                columnNumber: 9\n            }, undefined),\n            user ? user : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>onLogin(window.prompt(\"Username\", \"askyous\") || \"\", window.prompt(\"Password\", \"password\") || \"\"),\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/Navbar.tsx\",\n                lineNumber: 14,\n                columnNumber: 24\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/Navbar.tsx\",\n        lineNumber: 11,\n        columnNumber: 12\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9OYXZiYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTZDO0FBQ0Q7QUFNckMsTUFBTUcsU0FBUyxDQUFDLEVBQUVDLFFBQU8sRUFBUyxHQUFLO0lBQzFDLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHTCwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzFDLE1BQU1NLE9BQU9QLGlEQUFVQSxDQUFDRSxxREFBV0E7SUFDbkMscUJBQU8sOERBQUNNO1FBQUlDLElBQUc7UUFBU0MsU0FBUyxJQUFNSixVQUFVLENBQUNEOztZQUM3Q0EsU0FBUyxTQUFTLFFBQVE7MEJBQzNCLDhEQUFDTTswQkFBRzs7Ozs7O1lBQ0hKLE9BQU9BLHFCQUFPLDhEQUFDSztnQkFBT0YsU0FBUyxJQUFNTixRQUNsQ1MsT0FBT0MsTUFBTSxDQUFDLFlBQVksY0FBYyxJQUN4Q0QsT0FBT0MsTUFBTSxDQUFDLFlBQVksZUFBZTswQkFDMUM7Ozs7O3lCQUFjOzs7Ozs7O0FBRXpCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pc2xhYW0tZGF0YWJhc2UtZG90LWNvbS8uL3BhZ2VzL05hdmJhci50c3g/YTZhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVXNlckNvbnRleHQgfSBmcm9tIFwiLi9Vc2VyQ29udGV4dFwiO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICAgIG9uTG9naW46ICh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSA9PiBhbnk7XG59XG5cbmV4cG9ydCBjb25zdCBOYXZiYXIgPSAoeyBvbkxvZ2luIH06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB1c2VyID0gdXNlQ29udGV4dChVc2VyQ29udGV4dCk7XG4gICAgcmV0dXJuIDxkaXYgaWQ9XCJuYXZiYXJcIiBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oIWlzT3Blbil9PlxuICAgICAgICB7aXNPcGVuID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifVxuICAgICAgICA8aDE+TmF2YmFyPC9oMT5cbiAgICAgICAge3VzZXIgPyB1c2VyIDogPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkxvZ2luKFxuICAgICAgICAgICAgd2luZG93LnByb21wdChcIlVzZXJuYW1lXCIsIFwiYXNreW91c1wiKSB8fCBcIlwiLFxuICAgICAgICAgICAgd2luZG93LnByb21wdChcIlBhc3N3b3JkXCIsIFwicGFzc3dvcmRcIikgfHwgXCJcIixcbiAgICAgICAgKX0+TG9naW48L2J1dHRvbj59XG4gICAgPC9kaXY+O1xufTtcbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJVc2VyQ29udGV4dCIsIk5hdmJhciIsIm9uTG9naW4iLCJpc09wZW4iLCJzZXRJc09wZW4iLCJ1c2VyIiwiZGl2IiwiaWQiLCJvbkNsaWNrIiwiaDEiLCJidXR0b24iLCJ3aW5kb3ciLCJwcm9tcHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Navbar.tsx\n");

/***/ }),

/***/ "./pages/UserContext.tsx":
/*!*******************************!*\
  !*** ./pages/UserContext.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserContext\": () => (/* binding */ UserContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(undefined);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Vc2VyQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRS9CLE1BQU1DLDRCQUFjRCxvREFBYUEsQ0FBcUJFLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pc2xhYW0tZGF0YWJhc2UtZG90LWNvbS8uL3BhZ2VzL1VzZXJDb250ZXh0LnRzeD81N2RlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGNvbnN0IFVzZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxzdHJpbmcgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsIlVzZXJDb250ZXh0IiwidW5kZWZpbmVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/UserContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Layout */ \"./pages/Layout.tsx\");\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/_app.tsx\",\n            lineNumber: 7,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/personal/Documents/GitHub/islaamdatabase.com-v2/pages/_app.tsx\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUVJO0FBRW5CLFNBQVNDLElBQUksRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQVksRUFBRTtJQUM5RCxxQkFBTyw4REFBQ0gsMkNBQU1BO2tCQUNaLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBRTVCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pc2xhYW0tZGF0YWJhc2UtZG90LWNvbS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi9MYXlvdXRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIDxMYXlvdXQ+XG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICA8L0xheW91dD47XG59XG5cbiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

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