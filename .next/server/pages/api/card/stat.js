module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/card/stat.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/session.ts":
/*!************************!*\
  !*** ./lib/session.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return withSession; });\n/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-iron-session */ \"next-iron-session\");\n/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_iron_session__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction withSession(handler) {\n  return Object(next_iron_session__WEBPACK_IMPORTED_MODULE_0__[\"withIronSession\"])(handler, {\n    password: process.env.SECRET_COOKIE_PASSWORD || '',\n    cookieName: 'nft-holder/session',\n    cookieOptions: {\n      secure: false\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvc2Vzc2lvbi50cz9mODk0Il0sIm5hbWVzIjpbIndpdGhTZXNzaW9uIiwiaGFuZGxlciIsIndpdGhJcm9uU2Vzc2lvbiIsInBhc3N3b3JkIiwicHJvY2VzcyIsImVudiIsIlNFQ1JFVF9DT09LSUVfUEFTU1dPUkQiLCJjb29raWVOYW1lIiwiY29va2llT3B0aW9ucyIsInNlY3VyZSJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlLFNBQVNBLFdBQVQsQ0FBcUJDLE9BQXJCLEVBQThDO0FBQzNELFNBQU9DLHlFQUFlLENBQUNELE9BQUQsRUFBVTtBQUM5QkUsWUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsc0JBQVosSUFBc0MsRUFEbEI7QUFFOUJDLGNBQVUsRUFBRSxvQkFGa0I7QUFHOUJDLGlCQUFhLEVBQUU7QUFDYkMsWUFBTSxFQUFFO0FBREs7QUFIZSxHQUFWLENBQXRCO0FBT0QiLCJmaWxlIjoiLi9saWIvc2Vzc2lvbi50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlIYW5kbGVyIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHdpdGhJcm9uU2Vzc2lvbiB9IGZyb20gJ25leHQtaXJvbi1zZXNzaW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoU2Vzc2lvbihoYW5kbGVyOiBOZXh0QXBpSGFuZGxlcikge1xuICByZXR1cm4gd2l0aElyb25TZXNzaW9uKGhhbmRsZXIsIHtcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuU0VDUkVUX0NPT0tJRV9QQVNTV09SRCB8fCAnJyxcbiAgICBjb29raWVOYW1lOiAnbmZ0LWhvbGRlci9zZXNzaW9uJyxcbiAgICBjb29raWVPcHRpb25zOiB7XG4gICAgICBzZWN1cmU6IGZhbHNlXG4gICAgfVxuICB9KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/session.ts\n");

/***/ }),

/***/ "./pages/api/card/stat.ts":
/*!********************************!*\
  !*** ./pages/api/card/stat.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/session */ \"./lib/session.ts\");\n\n\nconst cardStatHandler = async (req, res) => {\n  const {\n    method,\n    query\n  } = req;\n  const {\n    id\n  } = query;\n\n  switch (method) {\n    case 'GET':\n      {\n        const result = await fetch(`${process.env.API_BASE}/api/v1/stat/blog?bid=${id}`);\n        let data = null;\n\n        try {\n          data = await result.json();\n        } catch (error) {\n          console.error(error);\n        }\n\n        if (!result.ok) {\n          res.status(result.status).json(data);\n          return;\n        }\n\n        res.status(200).json({\n          offerTotal: data.number,\n          highPrice: data.max,\n          averagePrice: data.average\n        });\n        break;\n      }\n\n    default:\n      res.setHeader('Allow', ['GET']);\n      res.status(405).end(`Method ${method} Not Allowed`);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_session__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cardStatHandler));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2FyZC9zdGF0LnRzP2ZmYWIiXSwibmFtZXMiOlsiY2FyZFN0YXRIYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicXVlcnkiLCJpZCIsInJlc3VsdCIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIkFQSV9CQVNFIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJvayIsInN0YXR1cyIsIm9mZmVyVG90YWwiLCJudW1iZXIiLCJoaWdoUHJpY2UiLCJtYXgiLCJhdmVyYWdlUHJpY2UiLCJhdmVyYWdlIiwic2V0SGVhZGVyIiwiZW5kIiwid2l0aFNlc3Npb24iXSwibWFwcGluZ3MiOiJBQUdBO0FBQUE7QUFBQTs7QUFHQSxNQUFNQSxlQUFlLEdBQUcsT0FDdEJDLEdBRHNCLEVBRXRCQyxHQUZzQixLQUduQjtBQUNILFFBQU07QUFBRUMsVUFBRjtBQUFVQztBQUFWLE1BQW9CSCxHQUExQjtBQUNBLFFBQU07QUFBRUk7QUFBRixNQUFTRCxLQUFmOztBQUVBLFVBQVFELE1BQVI7QUFDRSxTQUFLLEtBQUw7QUFBWTtBQUNWLGNBQU1HLE1BQU0sR0FBRyxNQUFNQyxLQUFLLENBQ3ZCLEdBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFTLHlCQUF3QkwsRUFBRyxFQUQzQixDQUExQjtBQUdBLFlBQUlNLElBQUksR0FBRyxJQUFYOztBQUNBLFlBQUk7QUFDRkEsY0FBSSxHQUFHLE1BQU1MLE1BQU0sQ0FBQ00sSUFBUCxFQUFiO0FBQ0QsU0FGRCxDQUVFLE9BQU9DLEtBQVAsRUFBYztBQUNkQyxpQkFBTyxDQUFDRCxLQUFSLENBQWNBLEtBQWQ7QUFDRDs7QUFDRCxZQUFJLENBQUNQLE1BQU0sQ0FBQ1MsRUFBWixFQUFnQjtBQUNkYixhQUFHLENBQUNjLE1BQUosQ0FBV1YsTUFBTSxDQUFDVSxNQUFsQixFQUEwQkosSUFBMUIsQ0FBK0JELElBQS9CO0FBQ0E7QUFDRDs7QUFDRFQsV0FBRyxDQUFDYyxNQUFKLENBQVcsR0FBWCxFQUFnQkosSUFBaEIsQ0FBcUI7QUFDbkJLLG9CQUFVLEVBQUVOLElBQUksQ0FBQ08sTUFERTtBQUVuQkMsbUJBQVMsRUFBRVIsSUFBSSxDQUFDUyxHQUZHO0FBR25CQyxzQkFBWSxFQUFFVixJQUFJLENBQUNXO0FBSEEsU0FBckI7QUFLQTtBQUNEOztBQUNEO0FBQ0VwQixTQUFHLENBQUNxQixTQUFKLENBQWMsT0FBZCxFQUF1QixDQUFDLEtBQUQsQ0FBdkI7QUFDQXJCLFNBQUcsQ0FBQ2MsTUFBSixDQUFXLEdBQVgsRUFBZ0JRLEdBQWhCLENBQXFCLFVBQVNyQixNQUFPLGNBQXJDO0FBeEJKO0FBMEJELENBakNEOztBQW1DZXNCLDJIQUFXLENBQUN6QixlQUFELENBQTFCIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2NhcmQvc3RhdC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gJ25leHQtaXJvbi1zZXNzaW9uJ1xuXG5pbXBvcnQgd2l0aFNlc3Npb24gZnJvbSAnLi4vLi4vLi4vbGliL3Nlc3Npb24nXG5pbXBvcnQgeyBTdGF0RGF0YVR5cGUgfSBmcm9tICcuLi8uLi8uLi90eXBpbmdzL2NhcmQnXG5cbmNvbnN0IGNhcmRTdGF0SGFuZGxlciA9IGFzeW5jIChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCAmIHsgc2Vzc2lvbj86IFNlc3Npb24gfSxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8U3RhdERhdGFUeXBlPlxuKSA9PiB7XG4gIGNvbnN0IHsgbWV0aG9kLCBxdWVyeSB9ID0gcmVxXG4gIGNvbnN0IHsgaWQgfSA9IHF1ZXJ5XG5cbiAgc3dpdGNoIChtZXRob2QpIHtcbiAgICBjYXNlICdHRVQnOiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgYCR7cHJvY2Vzcy5lbnYuQVBJX0JBU0V9L2FwaS92MS9zdGF0L2Jsb2c/YmlkPSR7aWR9YFxuICAgICAgKVxuICAgICAgbGV0IGRhdGEgPSBudWxsXG4gICAgICB0cnkge1xuICAgICAgICBkYXRhID0gYXdhaXQgcmVzdWx0Lmpzb24oKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgIH1cbiAgICAgIGlmICghcmVzdWx0Lm9rKSB7XG4gICAgICAgIHJlcy5zdGF0dXMocmVzdWx0LnN0YXR1cykuanNvbihkYXRhKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgb2ZmZXJUb3RhbDogZGF0YS5udW1iZXIsXG4gICAgICAgIGhpZ2hQcmljZTogZGF0YS5tYXgsXG4gICAgICAgIGF2ZXJhZ2VQcmljZTogZGF0YS5hdmVyYWdlXG4gICAgICB9KVxuICAgICAgYnJlYWtcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydHRVQnXSlcbiAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke21ldGhvZH0gTm90IEFsbG93ZWRgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTZXNzaW9uKGNhcmRTdGF0SGFuZGxlcilcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/card/stat.ts\n");

/***/ }),

/***/ "next-iron-session":
/*!************************************!*\
  !*** external "next-iron-session" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-iron-session\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWlyb24tc2Vzc2lvblwiP2JlMWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC1pcm9uLXNlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWlyb24tc2Vzc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-iron-session\n");

/***/ })

/******/ });