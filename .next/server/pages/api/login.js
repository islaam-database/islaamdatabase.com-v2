"use strict";
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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "(api)/./pages/api/login.ts":
/*!****************************!*\
  !*** ./pages/api/login.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n/** cookie ID, username */ const sessions = new Map();\nfunction handler(req, res) {\n    const { username , password  } = JSON.parse(req.body);\n    console.log(req.cookies);\n    if (username == \"askyous\" && password == \"printery\") return res.status(200).json({\n        name: \"Yousef Shanawany\"\n    });\n    return res.status(401).send({\n        message: \"Wrong username or password\"\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLDZFQUE2RTtBQUc3RSx3QkFBd0IsR0FDeEIsTUFBTUEsV0FBVyxJQUFJQztBQUVOLFNBQVNDLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDekUsTUFBTSxFQUFFQyxTQUFRLEVBQUVDLFNBQVEsRUFBRSxHQUFHQyxLQUFLQyxLQUFLLENBQUNMLElBQUlNLElBQUk7SUFDbERDLFFBQVFDLEdBQUcsQ0FBQ1IsSUFBSVMsT0FBTztJQUN2QixJQUFJUCxZQUFZLGFBQWFDLFlBQVksWUFDdkMsT0FBT0YsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFQyxNQUFNO0lBQW1CO0lBQ3pELE9BQU9YLElBQUlTLE1BQU0sQ0FBQyxLQUFLRyxJQUFJLENBQUM7UUFBRUMsU0FBUztJQUE2QjtBQUN0RSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaXNsYWFtLWRhdGFiYXNlLWRvdC1jb20vLi9wYWdlcy9hcGkvbG9naW4udHM/YzEyMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuLyoqIGNvb2tpZSBJRCwgdXNlcm5hbWUgKi9cbmNvbnN0IHNlc3Npb25zID0gbmV3IE1hcDxzdHJpbmcsIHN0cmluZz4oKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gSlNPTi5wYXJzZShyZXEuYm9keSk7XG4gIGNvbnNvbGUubG9nKHJlcS5jb29raWVzKTtcbiAgaWYgKHVzZXJuYW1lID09IFwiYXNreW91c1wiICYmIHBhc3N3b3JkID09IFwicHJpbnRlcnlcIilcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBuYW1lOiBcIllvdXNlZiBTaGFuYXdhbnlcIiB9KTtcbiAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgbWVzc2FnZTogXCJXcm9uZyB1c2VybmFtZSBvciBwYXNzd29yZFwiIH0pO1xufVxuIl0sIm5hbWVzIjpbInNlc3Npb25zIiwiTWFwIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJKU09OIiwicGFyc2UiLCJib2R5IiwiY29uc29sZSIsImxvZyIsImNvb2tpZXMiLCJzdGF0dXMiLCJqc29uIiwibmFtZSIsInNlbmQiLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.ts"));
module.exports = __webpack_exports__;

})();