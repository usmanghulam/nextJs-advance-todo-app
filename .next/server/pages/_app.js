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

/***/ "./components/Home/actions.ts":
/*!************************************!*\
  !*** ./components/Home/actions.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SET_TODOS\": () => (/* binding */ SET_TODOS),\n/* harmony export */   \"setTodos\": () => (/* binding */ setTodos),\n/* harmony export */   \"fetchAllTodos\": () => (/* binding */ fetchAllTodos)\n/* harmony export */ });\nconst SET_TODOS = \"SET_TODOS\";\nconst setTodos = (todos)=>({\n        type: SET_TODOS,\n        todos\n    })\n;\nconst fetchAllTodos = ()=>async (dispatch)=>{\n        try {\n            const response = await fetch(\"https://jsonplaceholder.typicode.com/posts\");\n            const todos = await response.json();\n            console.log({\n                todos\n            });\n        } catch (error) {\n            console.log(error);\n        }\n    }\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hvbWUvYWN0aW9ucy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBTyxLQUFLLENBQUNBLFNBQVMsR0FBRyxDQUFXO0FBRTdCLEtBQUssQ0FBQ0MsUUFBUSxJQUFJQyxLQUFVLElBQU0sQ0FBQztRQUFDQyxJQUFJLEVBQUVILFNBQVM7UUFBRUUsS0FBSztJQUFDLENBQUM7O0FBRTVELEtBQUssQ0FBQ0UsYUFBYSxjQUFnQkMsUUFBYSxHQUFLLENBQUM7UUFDM0QsR0FBRyxDQUFDLENBQUM7WUFDSCxLQUFLLENBQUNDLFFBQVEsR0FBRyxLQUFLLENBQUNDLEtBQUssQ0FBQyxDQUE0QztZQUN6RSxLQUFLLENBQUNMLEtBQUssR0FBRyxLQUFLLENBQUNJLFFBQVEsQ0FBQ0UsSUFBSTtZQUNqQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBQztnQkFBQ1IsS0FBSztZQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLEtBQUssRUFBRVMsS0FBSyxFQUFFLENBQUM7WUFDZkYsT0FBTyxDQUFDQyxHQUFHLENBQUNDLEtBQUs7UUFDbkIsQ0FBQztJQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9jb21wb25lbnRzL0hvbWUvYWN0aW9ucy50cz81ODQ3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBTRVRfVE9ET1MgPSBcIlNFVF9UT0RPU1wiO1xuXG5leHBvcnQgY29uc3Qgc2V0VG9kb3MgPSAodG9kb3M6IGFueSkgPT4gKHsgdHlwZTogU0VUX1RPRE9TLCB0b2RvcyB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQWxsVG9kb3MgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2g6IGFueSkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIik7XG4gICAgY29uc3QgdG9kb3MgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coeyB0b2RvcyB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiU0VUX1RPRE9TIiwic2V0VG9kb3MiLCJ0b2RvcyIsInR5cGUiLCJmZXRjaEFsbFRvZG9zIiwiZGlzcGF0Y2giLCJyZXNwb25zZSIsImZldGNoIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Home/actions.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/store */ \"./store/store.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst MyApp = ({ Component , pageProps  })=>{\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        var ref;\n        // Remove the server-side injected CSS.\n        const jssStyles = document === null || document === void 0 ? void 0 : document.querySelector('#jss-server-side');\n        if (jssStyles) jssStyles === null || jssStyles === void 0 ? void 0 : (ref = jssStyles.parentElement) === null || ref === void 0 ? void 0 : ref.removeChild(jssStyles);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n        ...pageProps\n    }, void 0, false, {\n        fileName: \"/home/musman/Practice/nextJs-advance-todo-app/pages/_app.tsx\",\n        lineNumber: 12,\n        columnNumber: 10\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_store_store__WEBPACK_IMPORTED_MODULE_2__.wrapper.withRedux(MyApp));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBOEI7QUFFVTtBQUNQO0FBRWpDLEtBQUssQ0FBQ0UsS0FBSyxJQUFJLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQVcsQ0FBQyxHQUFLLENBQUM7SUFDckRILGdEQUFTLEtBQU8sQ0FBQztZQUdBSSxHQUF3QjtRQUZ2QyxFQUF1QztRQUN2QyxLQUFLLENBQUNBLFNBQVMsR0FBUUMsUUFBUSxhQUFSQSxRQUFRLEtBQVJBLElBQUksQ0FBSkEsQ0FBdUIsR0FBdkJBLElBQUksQ0FBSkEsQ0FBdUIsR0FBdkJBLFFBQVEsQ0FBRUMsYUFBYSxDQUFDLENBQWtCO1FBQ2pFLEVBQUUsRUFBRUYsU0FBUyxFQUFFQSxTQUFTLGFBQVRBLFNBQVMsS0FBVEEsSUFBSSxDQUFKQSxDQUF3QixHQUF4QkEsSUFBSSxDQUFKQSxDQUF3QixJQUF4QkEsR0FBd0IsR0FBeEJBLFNBQVMsQ0FBRUcsYUFBYSxjQUF4QkgsR0FBd0IsS0FBeEJBLElBQUksQ0FBSkEsQ0FBd0IsR0FBeEJBLElBQUksQ0FBSkEsQ0FBd0IsR0FBeEJBLEdBQXdCLENBQUVJLFdBQVcsQ0FBQ0osU0FBUztJQUNoRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ0wsTUFBTSw2RUFBRUYsU0FBUztXQUFLQyxTQUFTOzs7Ozs7QUFDakMsQ0FBQztBQUVELGlFQUFlSiwyREFBaUIsQ0FBQ0UsS0FBSyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy9nbG9iYWxzLmNzc1wiO1xuaW1wb3J0IHR5cGUgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgd3JhcHBlciB9IGZyb20gXCIuLi9zdG9yZS9zdG9yZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gUmVtb3ZlIHRoZSBzZXJ2ZXItc2lkZSBpbmplY3RlZCBDU1MuXG4gICAgY29uc3QganNzU3R5bGVzOiBhbnkgPSBkb2N1bWVudD8ucXVlcnlTZWxlY3RvcignI2pzcy1zZXJ2ZXItc2lkZScpO1xuICAgIGlmIChqc3NTdHlsZXMpIGpzc1N0eWxlcz8ucGFyZW50RWxlbWVudD8ucmVtb3ZlQ2hpbGQoanNzU3R5bGVzKTtcbiAgfSwgW10pO1xuICByZXR1cm4gPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KE15QXBwKTsiXSwibmFtZXMiOlsid3JhcHBlciIsInVzZUVmZmVjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwid2l0aFJlZHV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./store/rootReducer.ts":
/*!******************************!*\
  !*** ./store/rootReducer.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"rootReducer\": () => (/* binding */ rootReducer)\n/* harmony export */ });\n/* harmony import */ var _components_Home_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Home/actions */ \"./components/Home/actions.ts\");\n\nconst intial_state = {\n    todos: []\n};\nconst rootReducer = (state = intial_state, action)=>{\n    switch(action.type){\n        case _components_Home_actions__WEBPACK_IMPORTED_MODULE_0__.SET_TODOS:\n            return {\n                ...state,\n                todos: action.todos\n            };\n    }\n    return state;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yb290UmVkdWNlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFpRDtBQUNqRCxLQUFLLENBQUNDLFlBQVksR0FBRyxDQUFDO0lBQ2xCQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUNNLEtBQUssQ0FBQ0MsV0FBVyxJQUFJQyxLQUFLLEdBQUdILFlBQVksRUFBRUksTUFBVyxHQUFLLENBQUM7SUFDL0QsTUFBTSxDQUFFQSxNQUFNLENBQUNDLElBQUk7UUFDZixJQUFJLENBQUNOLCtEQUFhO1lBQ2QsTUFBTSxDQUFDLENBQUM7bUJBQ0RJLEtBQUs7Z0JBQ1JGLEtBQUssRUFBRUcsTUFBTSxDQUFDSCxLQUFLO1lBQ3ZCLENBQUM7O0lBRVQsTUFBTSxDQUFDRSxLQUFLO0FBQ2hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zdG9yZS9yb290UmVkdWNlci50cz8yOGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGN4dCBmcm9tICcuLi9jb21wb25lbnRzL0hvbWUvYWN0aW9ucydcbmNvbnN0IGludGlhbF9zdGF0ZSA9IHtcbiAgICB0b2RvczogW10sXG59XG5leHBvcnQgY29uc3Qgcm9vdFJlZHVjZXIgPSAoc3RhdGUgPSBpbnRpYWxfc3RhdGUsIGFjdGlvbjogYW55KSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIGN4dC5TRVRfVE9ET1M6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIHRvZG9zOiBhY3Rpb24udG9kb3MsXG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbn0iXSwibmFtZXMiOlsiY3h0IiwiaW50aWFsX3N0YXRlIiwidG9kb3MiLCJyb290UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsIlNFVF9UT0RPUyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/rootReducer.ts\n");

/***/ }),

/***/ "./store/store.ts":
/*!************************!*\
  !*** ./store/store.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _rootReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rootReducer */ \"./store/rootReducer.ts\");\n\n\n\n\n\nconst bindMiddleware = (middleware)=>{\n    if (true) {\n        return (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(...middleware));\n    }\n    return (0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(...middleware);\n};\nconst reducer = (state, action)=>{\n    if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE) {\n        const nextState = {\n            ...state,\n            ...action.payload\n        };\n        return nextState;\n    }\n    return (0,_rootReducer__WEBPACK_IMPORTED_MODULE_4__.rootReducer)(state, action);\n};\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(()=>(0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(reducer, bindMiddleware([\n        (redux_thunk__WEBPACK_IMPORTED_MODULE_3___default())\n    ]))\n, {\n    debug: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zdG9yZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQTJEO0FBQ1A7QUFDVTtBQUMvQjtBQUVZO0FBRTNDLEtBQUssQ0FBQ08sY0FBYyxJQUFJQyxVQUFvQixHQUFLLENBQUM7SUFDaEQsRUFBRSxFQVJKLElBUTJDLEVBQUUsQ0FBQztRQUMxQyxNQUFNLENBQUNKLDZFQUFtQixDQUFDRCxzREFBZSxJQUFJSyxVQUFVO0lBQzFELENBQUM7SUFDRCxNQUFNLENBQUNMLHNEQUFlLElBQUlLLFVBQVU7QUFDdEMsQ0FBQztBQUVELEtBQUssQ0FBQ0MsT0FBTyxJQUFJQyxLQUFVLEVBQUVDLE1BQVcsR0FBSyxDQUFDO0lBQzVDLEVBQUUsRUFBRUEsTUFBTSxDQUFDQyxJQUFJLEtBQUtaLHVEQUFPLEVBQUUsQ0FBQztRQUM1QixLQUFLLENBQUNhLFNBQVMsR0FBRyxDQUFDO2VBQ2RILEtBQUs7ZUFDTEMsTUFBTSxDQUFDRyxPQUFPO1FBQ25CLENBQUM7UUFDRCxNQUFNLENBQUNELFNBQVM7SUFDbEIsQ0FBQztJQUNELE1BQU0sQ0FBQ1AseURBQVcsQ0FBQ0ksS0FBSyxFQUFFQyxNQUFNO0FBQ2xDLENBQUM7QUFFTSxLQUFLLENBQUNJLE9BQU8sR0FBR2QsaUVBQWEsS0FBT0Msa0RBQVcsQ0FBQ08sT0FBTyxFQUFFRixjQUFjLENBQUMsQ0FBQ0Y7UUFBQUEsb0RBQUs7SUFBQSxDQUFDO0VBQUksQ0FBQztJQUFDVyxLQUFLLEVBQUUsSUFBSTtBQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zdG9yZS9zdG9yZS50cz8xMmU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhZRFJBVEUsIGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xuXG5pbXBvcnQgeyByb290UmVkdWNlciB9IGZyb20gXCIuL3Jvb3RSZWR1Y2VyXCI7XG5cbmNvbnN0IGJpbmRNaWRkbGV3YXJlID0gKG1pZGRsZXdhcmU6IFtdIHwgYW55KSA9PiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICByZXR1cm4gY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSkpO1xuICB9XG4gIHJldHVybiBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSk7XG59O1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlOiBhbnksIGFjdGlvbjogYW55KSA9PiB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gSFlEUkFURSkge1xuICAgIGNvbnN0IG5leHRTdGF0ZSA9IHtcbiAgICAgIC4uLnN0YXRlLCAvLyB1c2UgcHJldmlvdXMgc3RhdGVcbiAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLCAvLyBhcHBseSBkZWx0YSBmcm9tIGh5ZHJhdGlvblxuICAgIH07XG4gICAgcmV0dXJuIG5leHRTdGF0ZTtcbiAgfVxuICByZXR1cm4gcm9vdFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG59O1xuXG5leHBvcnQgY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoKCkgPT4gY3JlYXRlU3RvcmUocmVkdWNlciwgYmluZE1pZGRsZXdhcmUoW3RodW5rXSkpLCB7IGRlYnVnOiB0cnVlIH0pO1xuIl0sIm5hbWVzIjpbIkhZRFJBVEUiLCJjcmVhdGVXcmFwcGVyIiwiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwidGh1bmsiLCJyb290UmVkdWNlciIsImJpbmRNaWRkbGV3YXJlIiwibWlkZGxld2FyZSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJuZXh0U3RhdGUiLCJwYXlsb2FkIiwid3JhcHBlciIsImRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/store.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

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

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-thunk");

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