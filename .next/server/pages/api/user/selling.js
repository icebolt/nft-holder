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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/user/selling.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/fetch-my-selling.ts":
/*!*********************************!*\
  !*** ./lib/fetch-my-selling.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fetchMySelling; });\nasync function fetchMySelling(uid, token, pageSize = 10, current = 1) {\n  const result = await fetch(`${process.env.API_BASE}/api/v1/user/order?uid=${uid}&pageSize=${pageSize}&current=${current}`, {\n    headers: {\n      authorization: token\n    }\n  });\n\n  if (!result.ok) {\n    const error = new Error(result.statusText);\n    error.info = await result.json();\n    error.status = result.status;\n    throw error;\n  }\n\n  return await result.json();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZmV0Y2gtbXktc2VsbGluZy50cz8yYmNkIl0sIm5hbWVzIjpbImZldGNoTXlTZWxsaW5nIiwidWlkIiwidG9rZW4iLCJwYWdlU2l6ZSIsImN1cnJlbnQiLCJyZXN1bHQiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJBUElfQkFTRSIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwib2siLCJlcnJvciIsIkVycm9yIiwic3RhdHVzVGV4dCIsImluZm8iLCJqc29uIiwic3RhdHVzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWUsZUFBZUEsY0FBZixDQUNiQyxHQURhLEVBRWJDLEtBRmEsRUFHYkMsUUFBZ0IsR0FBRyxFQUhOLEVBSWJDLE9BQWUsR0FBRyxDQUpMLEVBS0M7QUFFZCxRQUFNQyxNQUFNLEdBQUcsTUFBTUMsS0FBSyxDQUN2QixHQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBUywwQkFBeUJSLEdBQUksYUFBWUUsUUFBUyxZQUFXQyxPQUFRLEVBRHJFLEVBRXhCO0FBQ0VNLFdBQU8sRUFBRTtBQUNQQyxtQkFBYSxFQUFFVDtBQURSO0FBRFgsR0FGd0IsQ0FBMUI7O0FBUUEsTUFBSSxDQUFDRyxNQUFNLENBQUNPLEVBQVosRUFBZ0I7QUFDZCxVQUFNQyxLQUFLLEdBQUcsSUFBSUMsS0FBSixDQUFVVCxNQUFNLENBQUNVLFVBQWpCLENBQWQ7QUFDQUYsU0FBSyxDQUFDRyxJQUFOLEdBQWEsTUFBTVgsTUFBTSxDQUFDWSxJQUFQLEVBQW5CO0FBQ0FKLFNBQUssQ0FBQ0ssTUFBTixHQUFlYixNQUFNLENBQUNhLE1BQXRCO0FBQ0EsVUFBTUwsS0FBTjtBQUNEOztBQUNELFNBQU8sTUFBTVIsTUFBTSxDQUFDWSxJQUFQLEVBQWI7QUFDRCIsImZpbGUiOiIuL2xpYi9mZXRjaC1teS1zZWxsaW5nLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hNeVNlbGxpbmcoXG4gIHVpZDogc3RyaW5nLFxuICB0b2tlbjogc3RyaW5nLFxuICBwYWdlU2l6ZTogbnVtYmVyID0gMTAsXG4gIGN1cnJlbnQ6IG51bWJlciA9IDFcbik6IFByb21pc2U8YW55PiB7XG5cbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7cHJvY2Vzcy5lbnYuQVBJX0JBU0V9L2FwaS92MS91c2VyL29yZGVyP3VpZD0ke3VpZH0mcGFnZVNpemU9JHtwYWdlU2l6ZX0mY3VycmVudD0ke2N1cnJlbnR9YCxcbiAgICB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIGF1dGhvcml6YXRpb246IHRva2VuXG4gICAgICB9XG4gICAgfVxuICApXG4gIGlmICghcmVzdWx0Lm9rKSB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IocmVzdWx0LnN0YXR1c1RleHQpXG4gICAgZXJyb3IuaW5mbyA9IGF3YWl0IHJlc3VsdC5qc29uKClcbiAgICBlcnJvci5zdGF0dXMgPSByZXN1bHQuc3RhdHVzXG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuICByZXR1cm4gYXdhaXQgcmVzdWx0Lmpzb24oKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/fetch-my-selling.ts\n");

/***/ }),

/***/ "./lib/session.ts":
/*!************************!*\
  !*** ./lib/session.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return withSession; });\n/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-iron-session */ \"next-iron-session\");\n/* harmony import */ var next_iron_session__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_iron_session__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction withSession(handler) {\n  return Object(next_iron_session__WEBPACK_IMPORTED_MODULE_0__[\"withIronSession\"])(handler, {\n    password: process.env.SECRET_COOKIE_PASSWORD || '',\n    cookieName: 'nft-holder/session',\n    cookieOptions: {\n      secure: false\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvc2Vzc2lvbi50cz9mODk0Il0sIm5hbWVzIjpbIndpdGhTZXNzaW9uIiwiaGFuZGxlciIsIndpdGhJcm9uU2Vzc2lvbiIsInBhc3N3b3JkIiwicHJvY2VzcyIsImVudiIsIlNFQ1JFVF9DT09LSUVfUEFTU1dPUkQiLCJjb29raWVOYW1lIiwiY29va2llT3B0aW9ucyIsInNlY3VyZSJdLCJtYXBwaW5ncyI6IkFBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlLFNBQVNBLFdBQVQsQ0FBcUJDLE9BQXJCLEVBQThDO0FBQzNELFNBQU9DLHlFQUFlLENBQUNELE9BQUQsRUFBVTtBQUM5QkUsWUFBUSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsc0JBQVosSUFBc0MsRUFEbEI7QUFFOUJDLGNBQVUsRUFBRSxvQkFGa0I7QUFHOUJDLGlCQUFhLEVBQUU7QUFDYkMsWUFBTSxFQUFFO0FBREs7QUFIZSxHQUFWLENBQXRCO0FBT0QiLCJmaWxlIjoiLi9saWIvc2Vzc2lvbi50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlIYW5kbGVyIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IHdpdGhJcm9uU2Vzc2lvbiB9IGZyb20gJ25leHQtaXJvbi1zZXNzaW9uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoU2Vzc2lvbihoYW5kbGVyOiBOZXh0QXBpSGFuZGxlcikge1xuICByZXR1cm4gd2l0aElyb25TZXNzaW9uKGhhbmRsZXIsIHtcbiAgICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuU0VDUkVUX0NPT0tJRV9QQVNTV09SRCB8fCAnJyxcbiAgICBjb29raWVOYW1lOiAnbmZ0LWhvbGRlci9zZXNzaW9uJyxcbiAgICBjb29raWVPcHRpb25zOiB7XG4gICAgICBzZWN1cmU6IGZhbHNlXG4gICAgfVxuICB9KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/session.ts\n");

/***/ }),

/***/ "./pages/api/user/selling.ts":
/*!***********************************!*\
  !*** ./pages/api/user/selling.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/session */ \"./lib/session.ts\");\n/* harmony import */ var _lib_fetch_my_selling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/fetch-my-selling */ \"./lib/fetch-my-selling.ts\");\n\n\n\nconst recordsHandler = async (req, res) => {\n  const {\n    method,\n    query,\n    session\n  } = req;\n  const {\n    pageSize = 10,\n    current = 1\n  } = query;\n  const sessionToken = session === null || session === void 0 ? void 0 : session.get('token');\n\n  if (!sessionToken) {\n    res.status(401).end();\n    return;\n  }\n\n  switch (method) {\n    case 'GET':\n      {\n        try {\n          const data = await Object(_lib_fetch_my_selling__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sessionToken.uid, sessionToken.token, Number(pageSize), Number(current));\n\n          if (data.list) {\n            console.log('========> selling');\n            console.log(data.list);\n            res.status(200).json([...data.list.map(item => ({\n              id: item.data.data.id,\n              creator: {\n                id: item.data.data.user.id.toString(),\n                avatar: item.data.data.user.profile_image_url,\n                name: item.data.data.user.screen_name\n              },\n              quotedPrice: {\n                top: item.amount\n              },\n              content: item.data.data.text,\n              thumbnails: item.data.data.pics ? item.data.data.pics.map(item => item.url) : [],\n              repostsCount: item.data.data.reposts_count,\n              commentsCount: item.data.data.comments_count,\n              attitudesCount: item.data.data.attitudes_count\n            }))]);\n            return;\n          }\n\n          res.status(204).end();\n        } catch (error) {\n          console.error(error);\n          res.status(error.status).end();\n        }\n\n        break;\n      }\n\n    default:\n      res.setHeader('Allow', ['GET']);\n      res.status(405).end(`Method ${method} Not Allowed`);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_session__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(recordsHandler));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlci9zZWxsaW5nLnRzPzQxYTQiXSwibmFtZXMiOlsicmVjb3Jkc0hhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJxdWVyeSIsInNlc3Npb24iLCJwYWdlU2l6ZSIsImN1cnJlbnQiLCJzZXNzaW9uVG9rZW4iLCJnZXQiLCJzdGF0dXMiLCJlbmQiLCJkYXRhIiwiZmV0Y2hNeVNlbGxpbmciLCJ1aWQiLCJ0b2tlbiIsIk51bWJlciIsImxpc3QiLCJjb25zb2xlIiwibG9nIiwianNvbiIsIm1hcCIsIml0ZW0iLCJpZCIsImNyZWF0b3IiLCJ1c2VyIiwidG9TdHJpbmciLCJhdmF0YXIiLCJwcm9maWxlX2ltYWdlX3VybCIsIm5hbWUiLCJzY3JlZW5fbmFtZSIsInF1b3RlZFByaWNlIiwidG9wIiwiYW1vdW50IiwiY29udGVudCIsInRleHQiLCJ0aHVtYm5haWxzIiwicGljcyIsInVybCIsInJlcG9zdHNDb3VudCIsInJlcG9zdHNfY291bnQiLCJjb21tZW50c0NvdW50IiwiY29tbWVudHNfY291bnQiLCJhdHRpdHVkZXNDb3VudCIsImF0dGl0dWRlc19jb3VudCIsImVycm9yIiwic2V0SGVhZGVyIiwid2l0aFNlc3Npb24iXSwibWFwcGluZ3MiOiJBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBSUEsTUFBTUEsY0FBYyxHQUFHLE9BQ3JCQyxHQURxQixFQUVyQkMsR0FGcUIsS0FHbEI7QUFDSCxRQUFNO0FBQUVDLFVBQUY7QUFBVUMsU0FBVjtBQUFpQkM7QUFBakIsTUFBNkJKLEdBQW5DO0FBQ0EsUUFBTTtBQUFFSyxZQUFRLEdBQUcsRUFBYjtBQUFpQkMsV0FBTyxHQUFHO0FBQTNCLE1BQWlDSCxLQUF2QztBQUVBLFFBQU1JLFlBQVksR0FBR0gsT0FBSCxhQUFHQSxPQUFILHVCQUFHQSxPQUFPLENBQUVJLEdBQVQsQ0FBOEIsT0FBOUIsQ0FBckI7O0FBQ0EsTUFBSSxDQUFDRCxZQUFMLEVBQW1CO0FBQ2pCTixPQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxHQUFoQjtBQUNBO0FBQ0Q7O0FBRUQsVUFBUVIsTUFBUjtBQUNFLFNBQUssS0FBTDtBQUFZO0FBQ1YsWUFBSTtBQUNGLGdCQUFNUyxJQUFJLEdBQUcsTUFBTUMscUVBQWMsQ0FDL0JMLFlBQVksQ0FBQ00sR0FEa0IsRUFFL0JOLFlBQVksQ0FBQ08sS0FGa0IsRUFHL0JDLE1BQU0sQ0FBQ1YsUUFBRCxDQUh5QixFQUkvQlUsTUFBTSxDQUFDVCxPQUFELENBSnlCLENBQWpDOztBQU1BLGNBQUlLLElBQUksQ0FBQ0ssSUFBVCxFQUFlO0FBQ2JDLG1CQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBRCxtQkFBTyxDQUFDQyxHQUFSLENBQVlQLElBQUksQ0FBQ0ssSUFBakI7QUFDQWYsZUFBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQlUsSUFBaEIsQ0FBcUIsQ0FDbkIsR0FBR1IsSUFBSSxDQUFDSyxJQUFMLENBQVVJLEdBQVYsQ0FBZUMsSUFBRCxLQUFnQjtBQUMvQkMsZ0JBQUUsRUFBRUQsSUFBSSxDQUFDVixJQUFMLENBQVVBLElBQVYsQ0FBZVcsRUFEWTtBQUUvQkMscUJBQU8sRUFBRTtBQUNQRCxrQkFBRSxFQUFFRCxJQUFJLENBQUNWLElBQUwsQ0FBVUEsSUFBVixDQUFlYSxJQUFmLENBQW9CRixFQUFwQixDQUF1QkcsUUFBdkIsRUFERztBQUVQQyxzQkFBTSxFQUFFTCxJQUFJLENBQUNWLElBQUwsQ0FBVUEsSUFBVixDQUFlYSxJQUFmLENBQW9CRyxpQkFGckI7QUFHUEMsb0JBQUksRUFBRVAsSUFBSSxDQUFDVixJQUFMLENBQVVBLElBQVYsQ0FBZWEsSUFBZixDQUFvQks7QUFIbkIsZUFGc0I7QUFPL0JDLHlCQUFXLEVBQUU7QUFBRUMsbUJBQUcsRUFBRVYsSUFBSSxDQUFDVztBQUFaLGVBUGtCO0FBUS9CQyxxQkFBTyxFQUFFWixJQUFJLENBQUNWLElBQUwsQ0FBVUEsSUFBVixDQUFldUIsSUFSTztBQVMvQkMsd0JBQVUsRUFBRWQsSUFBSSxDQUFDVixJQUFMLENBQVVBLElBQVYsQ0FBZXlCLElBQWYsR0FDUmYsSUFBSSxDQUFDVixJQUFMLENBQVVBLElBQVYsQ0FBZXlCLElBQWYsQ0FBb0JoQixHQUFwQixDQUF5QkMsSUFBRCxJQUFlQSxJQUFJLENBQUNnQixHQUE1QyxDQURRLEdBRVIsRUFYMkI7QUFZL0JDLDBCQUFZLEVBQUVqQixJQUFJLENBQUNWLElBQUwsQ0FBVUEsSUFBVixDQUFlNEIsYUFaRTtBQWEvQkMsMkJBQWEsRUFBRW5CLElBQUksQ0FBQ1YsSUFBTCxDQUFVQSxJQUFWLENBQWU4QixjQWJDO0FBYy9CQyw0QkFBYyxFQUFFckIsSUFBSSxDQUFDVixJQUFMLENBQVVBLElBQVYsQ0FBZWdDO0FBZEEsYUFBaEIsQ0FBZCxDQURnQixDQUFyQjtBQWtCQTtBQUNEOztBQUNEMUMsYUFBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsR0FBaEI7QUFDRCxTQS9CRCxDQStCRSxPQUFPa0MsS0FBUCxFQUFjO0FBQ2QzQixpQkFBTyxDQUFDMkIsS0FBUixDQUFjQSxLQUFkO0FBQ0EzQyxhQUFHLENBQUNRLE1BQUosQ0FBV21DLEtBQUssQ0FBQ25DLE1BQWpCLEVBQXlCQyxHQUF6QjtBQUNEOztBQUNEO0FBQ0Q7O0FBQ0Q7QUFDRVQsU0FBRyxDQUFDNEMsU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxLQUFELENBQXZCO0FBQ0E1QyxTQUFHLENBQUNRLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxHQUFoQixDQUFxQixVQUFTUixNQUFPLGNBQXJDO0FBekNKO0FBMkNELENBeEREOztBQTBEZTRDLDJIQUFXLENBQUMvQyxjQUFELENBQTFCIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3VzZXIvc2VsbGluZy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgU2Vzc2lvbiB9IGZyb20gJ25leHQtaXJvbi1zZXNzaW9uJ1xuXG5pbXBvcnQgd2l0aFNlc3Npb24gZnJvbSAnLi4vLi4vLi4vbGliL3Nlc3Npb24nXG5pbXBvcnQgZmV0Y2hNeVNlbGxpbmcgZnJvbSAnLi4vLi4vLi4vbGliL2ZldGNoLW15LXNlbGxpbmcnXG5pbXBvcnQgeyBBY2Nlc3NUb2tlbkluZm8gfSBmcm9tICcuLi8uLi8uLi90eXBpbmdzL3VzZXInXG5pbXBvcnQgeyBNeUNhcmRzSXRlbVR5cGUgfSBmcm9tICcuLi8uLi8uLi90eXBpbmdzL2NhcmQnXG5cbmNvbnN0IHJlY29yZHNIYW5kbGVyID0gYXN5bmMgKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0ICYgeyBzZXNzaW9uPzogU2Vzc2lvbiB9LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxNeUNhcmRzSXRlbVR5cGVbXT5cbikgPT4ge1xuICBjb25zdCB7IG1ldGhvZCwgcXVlcnksIHNlc3Npb24gfSA9IHJlcVxuICBjb25zdCB7IHBhZ2VTaXplID0gMTAsIGN1cnJlbnQgPSAxIH0gPSBxdWVyeVxuXG4gIGNvbnN0IHNlc3Npb25Ub2tlbiA9IHNlc3Npb24/LmdldDxBY2Nlc3NUb2tlbkluZm8+KCd0b2tlbicpXG4gIGlmICghc2Vzc2lvblRva2VuKSB7XG4gICAgcmVzLnN0YXR1cyg0MDEpLmVuZCgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgJ0dFVCc6IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaE15U2VsbGluZyhcbiAgICAgICAgICBzZXNzaW9uVG9rZW4udWlkLFxuICAgICAgICAgIHNlc3Npb25Ub2tlbi50b2tlbixcbiAgICAgICAgICBOdW1iZXIocGFnZVNpemUpLFxuICAgICAgICAgIE51bWJlcihjdXJyZW50KVxuICAgICAgICApXG4gICAgICAgIGlmIChkYXRhLmxpc3QpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnPT09PT09PT0+IHNlbGxpbmcnKVxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubGlzdClcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihbXG4gICAgICAgICAgICAuLi5kYXRhLmxpc3QubWFwKChpdGVtOiBhbnkpID0+ICh7XG4gICAgICAgICAgICAgIGlkOiBpdGVtLmRhdGEuZGF0YS5pZCxcbiAgICAgICAgICAgICAgY3JlYXRvcjoge1xuICAgICAgICAgICAgICAgIGlkOiBpdGVtLmRhdGEuZGF0YS51c2VyLmlkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgYXZhdGFyOiBpdGVtLmRhdGEuZGF0YS51c2VyLnByb2ZpbGVfaW1hZ2VfdXJsLFxuICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0uZGF0YS5kYXRhLnVzZXIuc2NyZWVuX25hbWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcXVvdGVkUHJpY2U6IHsgdG9wOiBpdGVtLmFtb3VudCB9LFxuICAgICAgICAgICAgICBjb250ZW50OiBpdGVtLmRhdGEuZGF0YS50ZXh0LFxuICAgICAgICAgICAgICB0aHVtYm5haWxzOiBpdGVtLmRhdGEuZGF0YS5waWNzXG4gICAgICAgICAgICAgICAgPyBpdGVtLmRhdGEuZGF0YS5waWNzLm1hcCgoaXRlbTogYW55KSA9PiBpdGVtLnVybClcbiAgICAgICAgICAgICAgICA6IFtdLFxuICAgICAgICAgICAgICByZXBvc3RzQ291bnQ6IGl0ZW0uZGF0YS5kYXRhLnJlcG9zdHNfY291bnQsXG4gICAgICAgICAgICAgIGNvbW1lbnRzQ291bnQ6IGl0ZW0uZGF0YS5kYXRhLmNvbW1lbnRzX2NvdW50LFxuICAgICAgICAgICAgICBhdHRpdHVkZXNDb3VudDogaXRlbS5kYXRhLmRhdGEuYXR0aXR1ZGVzX2NvdW50XG4gICAgICAgICAgICB9KSlcbiAgICAgICAgICBdKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHJlcy5zdGF0dXMoMjA0KS5lbmQoKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgcmVzLnN0YXR1cyhlcnJvci5zdGF0dXMpLmVuZCgpXG4gICAgICB9XG4gICAgICBicmVha1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ0dFVCddKVxuICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7bWV0aG9kfSBOb3QgQWxsb3dlZGApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNlc3Npb24ocmVjb3Jkc0hhbmRsZXIpXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/user/selling.ts\n");

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