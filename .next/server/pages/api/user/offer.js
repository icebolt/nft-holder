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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/user/offer.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/fetch-my-offer.ts":
/*!*******************************!*\
  !*** ./lib/fetch-my-offer.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fetchMyOffer; });\nasync function fetchMyOffer(uid, token, pageSize = 10, current = 1) {\n  const result = await fetch(`${process.env.API_BASE}/api/v1/user/offered?uid=${uid}&pageSize=${pageSize}&current=${current}`, {\n    headers: {\n      authorization: token\n    }\n  });\n\n  if (!result.ok) {\n    const error = new Error(result.statusText);\n    error.info = await result.json();\n    error.status = result.status;\n    throw error;\n  }\n\n  return await result.json();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZmV0Y2gtbXktb2ZmZXIudHM/MmI2MiJdLCJuYW1lcyI6WyJmZXRjaE15T2ZmZXIiLCJ1aWQiLCJ0b2tlbiIsInBhZ2VTaXplIiwiY3VycmVudCIsInJlc3VsdCIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIkFQSV9CQVNFIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJvayIsImVycm9yIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiaW5mbyIsImpzb24iLCJzdGF0dXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZSxlQUFlQSxZQUFmLENBQ2JDLEdBRGEsRUFFYkMsS0FGYSxFQUdiQyxRQUFnQixHQUFHLEVBSE4sRUFJYkMsT0FBZSxHQUFHLENBSkwsRUFLQztBQUNkLFFBQU1DLE1BQU0sR0FBRyxNQUFNQyxLQUFLLENBQ3ZCLEdBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFTLDRCQUEyQlIsR0FBSSxhQUFZRSxRQUFTLFlBQVdDLE9BQVEsRUFEdkUsRUFFeEI7QUFDRU0sV0FBTyxFQUFFO0FBQ1BDLG1CQUFhLEVBQUVUO0FBRFI7QUFEWCxHQUZ3QixDQUExQjs7QUFRQSxNQUFJLENBQUNHLE1BQU0sQ0FBQ08sRUFBWixFQUFnQjtBQUNkLFVBQU1DLEtBQUssR0FBRyxJQUFJQyxLQUFKLENBQVVULE1BQU0sQ0FBQ1UsVUFBakIsQ0FBZDtBQUNBRixTQUFLLENBQUNHLElBQU4sR0FBYSxNQUFNWCxNQUFNLENBQUNZLElBQVAsRUFBbkI7QUFDQUosU0FBSyxDQUFDSyxNQUFOLEdBQWViLE1BQU0sQ0FBQ2EsTUFBdEI7QUFDQSxVQUFNTCxLQUFOO0FBQ0Q7O0FBQ0QsU0FBTyxNQUFNUixNQUFNLENBQUNZLElBQVAsRUFBYjtBQUNEIiwiZmlsZSI6Ii4vbGliL2ZldGNoLW15LW9mZmVyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hNeU9mZmVyKFxuICB1aWQ6IHN0cmluZyxcbiAgdG9rZW46IHN0cmluZyxcbiAgcGFnZVNpemU6IG51bWJlciA9IDEwLFxuICBjdXJyZW50OiBudW1iZXIgPSAxXG4pOiBQcm9taXNlPGFueT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChcbiAgICBgJHtwcm9jZXNzLmVudi5BUElfQkFTRX0vYXBpL3YxL3VzZXIvb2ZmZXJlZD91aWQ9JHt1aWR9JnBhZ2VTaXplPSR7cGFnZVNpemV9JmN1cnJlbnQ9JHtjdXJyZW50fWAsXG4gICAge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICBhdXRob3JpemF0aW9uOiB0b2tlblxuICAgICAgfVxuICAgIH1cbiAgKVxuICBpZiAoIXJlc3VsdC5vaykge1xuICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKHJlc3VsdC5zdGF0dXNUZXh0KVxuICAgIGVycm9yLmluZm8gPSBhd2FpdCByZXN1bHQuanNvbigpXG4gICAgZXJyb3Iuc3RhdHVzID0gcmVzdWx0LnN0YXR1c1xuICAgIHRocm93IGVycm9yXG4gIH1cbiAgcmV0dXJuIGF3YWl0IHJlc3VsdC5qc29uKClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/fetch-my-offer.ts\n");

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

/***/ "./pages/api/user/offer.ts":
/*!*********************************!*\
  !*** ./pages/api/user/offer.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/session */ \"./lib/session.ts\");\n/* harmony import */ var _lib_fetch_my_offer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../lib/fetch-my-offer */ \"./lib/fetch-my-offer.ts\");\n\n\n\nconst recordsHandler = async (req, res) => {\n  const {\n    method,\n    query,\n    session\n  } = req;\n  const {\n    pageSize = 10,\n    current = 1\n  } = query;\n  const sessionToken = session === null || session === void 0 ? void 0 : session.get('token');\n\n  if (!sessionToken) {\n    res.status(401).end();\n    return;\n  }\n\n  switch (method) {\n    case 'GET':\n      {\n        try {\n          const data = await Object(_lib_fetch_my_offer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(sessionToken.uid, sessionToken.token, Number(pageSize), Number(current));\n\n          if (data.list) {\n            res.status(200).json([...data.list.map(item => ({\n              id: item.data.data.id,\n              creator: {\n                id: item.data.data.user.id.toString(),\n                avatar: item.data.data.user.profile_image_url,\n                name: item.data.data.user.screen_name\n              },\n              quotedPrice: {\n                top: item.amount\n              },\n              content: item.data.data.text,\n              thumbnails: item.data.data.pics ? item.data.data.pics.map(item => item.url) : [],\n              repostsCount: item.data.data.reposts_count,\n              commentsCount: item.data.data.comments_count,\n              attitudesCount: item.data.data.attitudes_count\n            }))]);\n            return;\n          }\n\n          res.status(204).end();\n        } catch (error) {\n          console.error(error);\n          res.status(error.status).end();\n        }\n\n        break;\n      }\n\n    default:\n      res.setHeader('Allow', ['GET']);\n      res.status(405).end(`Method ${method} Not Allowed`);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_session__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(recordsHandler));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdXNlci9vZmZlci50cz9jM2QzIl0sIm5hbWVzIjpbInJlY29yZHNIYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicXVlcnkiLCJzZXNzaW9uIiwicGFnZVNpemUiLCJjdXJyZW50Iiwic2Vzc2lvblRva2VuIiwiZ2V0Iiwic3RhdHVzIiwiZW5kIiwiZGF0YSIsImZldGNoTXlPZmZlciIsInVpZCIsInRva2VuIiwiTnVtYmVyIiwibGlzdCIsImpzb24iLCJtYXAiLCJpdGVtIiwiaWQiLCJjcmVhdG9yIiwidXNlciIsInRvU3RyaW5nIiwiYXZhdGFyIiwicHJvZmlsZV9pbWFnZV91cmwiLCJuYW1lIiwic2NyZWVuX25hbWUiLCJxdW90ZWRQcmljZSIsInRvcCIsImFtb3VudCIsImNvbnRlbnQiLCJ0ZXh0IiwidGh1bWJuYWlscyIsInBpY3MiLCJ1cmwiLCJyZXBvc3RzQ291bnQiLCJyZXBvc3RzX2NvdW50IiwiY29tbWVudHNDb3VudCIsImNvbW1lbnRzX2NvdW50IiwiYXR0aXR1ZGVzQ291bnQiLCJhdHRpdHVkZXNfY291bnQiLCJlcnJvciIsImNvbnNvbGUiLCJzZXRIZWFkZXIiLCJ3aXRoU2Vzc2lvbiJdLCJtYXBwaW5ncyI6IkFBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFJQSxNQUFNQSxjQUFjLEdBQUcsT0FDckJDLEdBRHFCLEVBRXJCQyxHQUZxQixLQUdsQjtBQUNILFFBQU07QUFBRUMsVUFBRjtBQUFVQyxTQUFWO0FBQWlCQztBQUFqQixNQUE2QkosR0FBbkM7QUFDQSxRQUFNO0FBQUVLLFlBQVEsR0FBRyxFQUFiO0FBQWlCQyxXQUFPLEdBQUc7QUFBM0IsTUFBaUNILEtBQXZDO0FBRUEsUUFBTUksWUFBWSxHQUFHSCxPQUFILGFBQUdBLE9BQUgsdUJBQUdBLE9BQU8sQ0FBRUksR0FBVCxDQUE4QixPQUE5QixDQUFyQjs7QUFDQSxNQUFJLENBQUNELFlBQUwsRUFBbUI7QUFDakJOLE9BQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCO0FBQ0E7QUFDRDs7QUFFRCxVQUFRUixNQUFSO0FBQ0UsU0FBSyxLQUFMO0FBQVk7QUFDVixZQUFJO0FBQ0YsZ0JBQU1TLElBQUksR0FBRyxNQUFNQyxtRUFBWSxDQUM3QkwsWUFBWSxDQUFDTSxHQURnQixFQUU3Qk4sWUFBWSxDQUFDTyxLQUZnQixFQUc3QkMsTUFBTSxDQUFDVixRQUFELENBSHVCLEVBSTdCVSxNQUFNLENBQUNULE9BQUQsQ0FKdUIsQ0FBL0I7O0FBTUEsY0FBSUssSUFBSSxDQUFDSyxJQUFULEVBQWU7QUFDYmYsZUFBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQlEsSUFBaEIsQ0FBcUIsQ0FDbkIsR0FBR04sSUFBSSxDQUFDSyxJQUFMLENBQVVFLEdBQVYsQ0FBZUMsSUFBRCxLQUFnQjtBQUMvQkMsZ0JBQUUsRUFBRUQsSUFBSSxDQUFDUixJQUFMLENBQVVBLElBQVYsQ0FBZVMsRUFEWTtBQUUvQkMscUJBQU8sRUFBRTtBQUNQRCxrQkFBRSxFQUFFRCxJQUFJLENBQUNSLElBQUwsQ0FBVUEsSUFBVixDQUFlVyxJQUFmLENBQW9CRixFQUFwQixDQUF1QkcsUUFBdkIsRUFERztBQUVQQyxzQkFBTSxFQUFFTCxJQUFJLENBQUNSLElBQUwsQ0FBVUEsSUFBVixDQUFlVyxJQUFmLENBQW9CRyxpQkFGckI7QUFHUEMsb0JBQUksRUFBRVAsSUFBSSxDQUFDUixJQUFMLENBQVVBLElBQVYsQ0FBZVcsSUFBZixDQUFvQks7QUFIbkIsZUFGc0I7QUFPL0JDLHlCQUFXLEVBQUU7QUFBRUMsbUJBQUcsRUFBRVYsSUFBSSxDQUFDVztBQUFaLGVBUGtCO0FBUS9CQyxxQkFBTyxFQUFFWixJQUFJLENBQUNSLElBQUwsQ0FBVUEsSUFBVixDQUFlcUIsSUFSTztBQVMvQkMsd0JBQVUsRUFBRWQsSUFBSSxDQUFDUixJQUFMLENBQVVBLElBQVYsQ0FBZXVCLElBQWYsR0FDUmYsSUFBSSxDQUFDUixJQUFMLENBQVVBLElBQVYsQ0FBZXVCLElBQWYsQ0FBb0JoQixHQUFwQixDQUF5QkMsSUFBRCxJQUFlQSxJQUFJLENBQUNnQixHQUE1QyxDQURRLEdBRVIsRUFYMkI7QUFZL0JDLDBCQUFZLEVBQUVqQixJQUFJLENBQUNSLElBQUwsQ0FBVUEsSUFBVixDQUFlMEIsYUFaRTtBQWEvQkMsMkJBQWEsRUFBRW5CLElBQUksQ0FBQ1IsSUFBTCxDQUFVQSxJQUFWLENBQWU0QixjQWJDO0FBYy9CQyw0QkFBYyxFQUFFckIsSUFBSSxDQUFDUixJQUFMLENBQVVBLElBQVYsQ0FBZThCO0FBZEEsYUFBaEIsQ0FBZCxDQURnQixDQUFyQjtBQWtCQTtBQUNEOztBQUNEeEMsYUFBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsR0FBaEI7QUFDRCxTQTdCRCxDQTZCRSxPQUFPZ0MsS0FBUCxFQUFjO0FBQ2RDLGlCQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZDtBQUNBekMsYUFBRyxDQUFDUSxNQUFKLENBQVdpQyxLQUFLLENBQUNqQyxNQUFqQixFQUF5QkMsR0FBekI7QUFDRDs7QUFDRDtBQUNEOztBQUNEO0FBQ0VULFNBQUcsQ0FBQzJDLFNBQUosQ0FBYyxPQUFkLEVBQXVCLENBQUMsS0FBRCxDQUF2QjtBQUNBM0MsU0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsR0FBaEIsQ0FBcUIsVUFBU1IsTUFBTyxjQUFyQztBQXZDSjtBQXlDRCxDQXRERDs7QUF3RGUyQywySEFBVyxDQUFDOUMsY0FBRCxDQUExQiIsImZpbGUiOiIuL3BhZ2VzL2FwaS91c2VyL29mZmVyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSAnbmV4dC1pcm9uLXNlc3Npb24nXG5cbmltcG9ydCB3aXRoU2Vzc2lvbiBmcm9tICcuLi8uLi8uLi9saWIvc2Vzc2lvbidcbmltcG9ydCBmZXRjaE15T2ZmZXIgZnJvbSAnLi4vLi4vLi4vbGliL2ZldGNoLW15LW9mZmVyJ1xuaW1wb3J0IHsgQWNjZXNzVG9rZW5JbmZvIH0gZnJvbSAnLi4vLi4vLi4vdHlwaW5ncy91c2VyJ1xuaW1wb3J0IHsgTXlDYXJkc0l0ZW1UeXBlIH0gZnJvbSAnLi4vLi4vLi4vdHlwaW5ncy9jYXJkJ1xuXG5jb25zdCByZWNvcmRzSGFuZGxlciA9IGFzeW5jIChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCAmIHsgc2Vzc2lvbj86IFNlc3Npb24gfSxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8TXlDYXJkc0l0ZW1UeXBlW10+XG4pID0+IHtcbiAgY29uc3QgeyBtZXRob2QsIHF1ZXJ5LCBzZXNzaW9uIH0gPSByZXFcbiAgY29uc3QgeyBwYWdlU2l6ZSA9IDEwLCBjdXJyZW50ID0gMSB9ID0gcXVlcnlcblxuICBjb25zdCBzZXNzaW9uVG9rZW4gPSBzZXNzaW9uPy5nZXQ8QWNjZXNzVG9rZW5JbmZvPigndG9rZW4nKVxuICBpZiAoIXNlc3Npb25Ub2tlbikge1xuICAgIHJlcy5zdGF0dXMoNDAxKS5lbmQoKVxuICAgIHJldHVyblxuICB9XG5cbiAgc3dpdGNoIChtZXRob2QpIHtcbiAgICBjYXNlICdHRVQnOiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hNeU9mZmVyKFxuICAgICAgICAgIHNlc3Npb25Ub2tlbi51aWQsXG4gICAgICAgICAgc2Vzc2lvblRva2VuLnRva2VuLFxuICAgICAgICAgIE51bWJlcihwYWdlU2l6ZSksXG4gICAgICAgICAgTnVtYmVyKGN1cnJlbnQpXG4gICAgICAgIClcbiAgICAgICAgaWYgKGRhdGEubGlzdCkge1xuICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKFtcbiAgICAgICAgICAgIC4uLmRhdGEubGlzdC5tYXAoKGl0ZW06IGFueSkgPT4gKHtcbiAgICAgICAgICAgICAgaWQ6IGl0ZW0uZGF0YS5kYXRhLmlkLFxuICAgICAgICAgICAgICBjcmVhdG9yOiB7XG4gICAgICAgICAgICAgICAgaWQ6IGl0ZW0uZGF0YS5kYXRhLnVzZXIuaWQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgICAgICBhdmF0YXI6IGl0ZW0uZGF0YS5kYXRhLnVzZXIucHJvZmlsZV9pbWFnZV91cmwsXG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS5kYXRhLmRhdGEudXNlci5zY3JlZW5fbmFtZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBxdW90ZWRQcmljZTogeyB0b3A6IGl0ZW0uYW1vdW50IH0sXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGl0ZW0uZGF0YS5kYXRhLnRleHQsXG4gICAgICAgICAgICAgIHRodW1ibmFpbHM6IGl0ZW0uZGF0YS5kYXRhLnBpY3NcbiAgICAgICAgICAgICAgICA/IGl0ZW0uZGF0YS5kYXRhLnBpY3MubWFwKChpdGVtOiBhbnkpID0+IGl0ZW0udXJsKVxuICAgICAgICAgICAgICAgIDogW10sXG4gICAgICAgICAgICAgIHJlcG9zdHNDb3VudDogaXRlbS5kYXRhLmRhdGEucmVwb3N0c19jb3VudCxcbiAgICAgICAgICAgICAgY29tbWVudHNDb3VudDogaXRlbS5kYXRhLmRhdGEuY29tbWVudHNfY291bnQsXG4gICAgICAgICAgICAgIGF0dGl0dWRlc0NvdW50OiBpdGVtLmRhdGEuZGF0YS5hdHRpdHVkZXNfY291bnRcbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIF0pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgcmVzLnN0YXR1cygyMDQpLmVuZCgpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICByZXMuc3RhdHVzKGVycm9yLnN0YXR1cykuZW5kKClcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJ10pXG4gICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHttZXRob2R9IE5vdCBBbGxvd2VkYClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2Vzc2lvbihyZWNvcmRzSGFuZGxlcilcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/user/offer.ts\n");

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