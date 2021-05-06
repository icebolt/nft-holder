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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/my/win.ts");
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

/***/ "./pages/api/my/win.ts":
/*!*****************************!*\
  !*** ./pages/api/my/win.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/session */ \"./lib/session.ts\");\n\n\nconst sellingHandler = async (req, res) => {\n  const {\n    method,\n    query,\n    session\n  } = req;\n  const {\n    id\n  } = query;\n  const sessionToken = session === null || session === void 0 ? void 0 : session.get('token');\n\n  if (!sessionToken) {\n    res.status(401).end();\n    return;\n  }\n\n  switch (method) {\n    case 'GET':\n      {\n        const result = await fetch(`${process.env.API_BASE}/api/v1/user/order/blog?bid=${id}`, {\n          headers: {\n            authorization: sessionToken.token\n          }\n        });\n        let data = null;\n\n        try {\n          data = await result.json();\n        } catch (error) {\n          console.error(error);\n        }\n\n        if (!result.ok) {\n          res.status(result.status).json(data);\n          return;\n        }\n\n        res.status(200).json(data ? {\n          result: true,\n          price: data.amount,\n          expire: data.time * 1000,\n          orderId: data.order_id\n        } : {\n          result: false\n        });\n        break;\n      }\n\n    default:\n      res.setHeader('Allow', ['GET']);\n      res.status(405).end(`Method ${method} Not Allowed`);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_session__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(sellingHandler));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbXkvd2luLnRzPzA3YWYiXSwibmFtZXMiOlsic2VsbGluZ0hhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJxdWVyeSIsInNlc3Npb24iLCJpZCIsInNlc3Npb25Ub2tlbiIsImdldCIsInN0YXR1cyIsImVuZCIsInJlc3VsdCIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIkFQSV9CQVNFIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJ0b2tlbiIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwib2siLCJwcmljZSIsImFtb3VudCIsImV4cGlyZSIsInRpbWUiLCJvcmRlcklkIiwib3JkZXJfaWQiLCJzZXRIZWFkZXIiLCJ3aXRoU2Vzc2lvbiJdLCJtYXBwaW5ncyI6IkFBR0E7QUFBQTtBQUFBOztBQUlBLE1BQU1BLGNBQWMsR0FBRyxPQUNyQkMsR0FEcUIsRUFFckJDLEdBRnFCLEtBR2xCO0FBQ0gsUUFBTTtBQUFFQyxVQUFGO0FBQVVDLFNBQVY7QUFBaUJDO0FBQWpCLE1BQTZCSixHQUFuQztBQUNBLFFBQU07QUFBRUs7QUFBRixNQUFTRixLQUFmO0FBRUEsUUFBTUcsWUFBWSxHQUFHRixPQUFILGFBQUdBLE9BQUgsdUJBQUdBLE9BQU8sQ0FBRUcsR0FBVCxDQUE4QixPQUE5QixDQUFyQjs7QUFDQSxNQUFJLENBQUNELFlBQUwsRUFBbUI7QUFDakJMLE9BQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCO0FBQ0E7QUFDRDs7QUFFRCxVQUFRUCxNQUFSO0FBQ0UsU0FBSyxLQUFMO0FBQVk7QUFDVixjQUFNUSxNQUFNLEdBQUcsTUFBTUMsS0FBSyxDQUN2QixHQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBUywrQkFBOEJULEVBQUcsRUFEakMsRUFFeEI7QUFDRVUsaUJBQU8sRUFBRTtBQUNQQyx5QkFBYSxFQUFFVixZQUFZLENBQUNXO0FBRHJCO0FBRFgsU0FGd0IsQ0FBMUI7QUFRQSxZQUFJQyxJQUFJLEdBQUcsSUFBWDs7QUFDQSxZQUFJO0FBQ0ZBLGNBQUksR0FBRyxNQUFNUixNQUFNLENBQUNTLElBQVAsRUFBYjtBQUNELFNBRkQsQ0FFRSxPQUFPQyxLQUFQLEVBQWM7QUFDZEMsaUJBQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7O0FBQ0QsWUFBSSxDQUFDVixNQUFNLENBQUNZLEVBQVosRUFBZ0I7QUFDZHJCLGFBQUcsQ0FBQ08sTUFBSixDQUFXRSxNQUFNLENBQUNGLE1BQWxCLEVBQTBCVyxJQUExQixDQUErQkQsSUFBL0I7QUFDQTtBQUNEOztBQUNEakIsV0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQlcsSUFBaEIsQ0FDRUQsSUFBSSxHQUNBO0FBQ0VSLGdCQUFNLEVBQUUsSUFEVjtBQUVFYSxlQUFLLEVBQUVMLElBQUksQ0FBQ00sTUFGZDtBQUdFQyxnQkFBTSxFQUFFUCxJQUFJLENBQUNRLElBQUwsR0FBWSxJQUh0QjtBQUlFQyxpQkFBTyxFQUFFVCxJQUFJLENBQUNVO0FBSmhCLFNBREEsR0FPQTtBQUFFbEIsZ0JBQU0sRUFBRTtBQUFWLFNBUk47QUFVQTtBQUNEOztBQUNEO0FBQ0VULFNBQUcsQ0FBQzRCLFNBQUosQ0FBYyxPQUFkLEVBQXVCLENBQUMsS0FBRCxDQUF2QjtBQUNBNUIsU0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsR0FBaEIsQ0FBcUIsVUFBU1AsTUFBTyxjQUFyQztBQWxDSjtBQW9DRCxDQWpERDs7QUFtRGU0QiwySEFBVyxDQUFDL0IsY0FBRCxDQUExQiIsImZpbGUiOiIuL3BhZ2VzL2FwaS9teS93aW4udHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tICduZXh0LWlyb24tc2Vzc2lvbidcblxuaW1wb3J0IHdpdGhTZXNzaW9uIGZyb20gJy4uLy4uLy4uL2xpYi9zZXNzaW9uJ1xuaW1wb3J0IHsgQWNjZXNzVG9rZW5JbmZvIH0gZnJvbSAnLi4vLi4vLi4vdHlwaW5ncy91c2VyJ1xuaW1wb3J0IHsgV2luUmVzdWx0VHlwZSB9IGZyb20gJy4uLy4uLy4uL3R5cGluZ3MvcmVjb3JkJ1xuXG5jb25zdCBzZWxsaW5nSGFuZGxlciA9IGFzeW5jIChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCAmIHsgc2Vzc2lvbj86IFNlc3Npb24gfSxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8V2luUmVzdWx0VHlwZT5cbikgPT4ge1xuICBjb25zdCB7IG1ldGhvZCwgcXVlcnksIHNlc3Npb24gfSA9IHJlcVxuICBjb25zdCB7IGlkIH0gPSBxdWVyeVxuXG4gIGNvbnN0IHNlc3Npb25Ub2tlbiA9IHNlc3Npb24/LmdldDxBY2Nlc3NUb2tlbkluZm8+KCd0b2tlbicpXG4gIGlmICghc2Vzc2lvblRva2VuKSB7XG4gICAgcmVzLnN0YXR1cyg0MDEpLmVuZCgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgJ0dFVCc6IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgJHtwcm9jZXNzLmVudi5BUElfQkFTRX0vYXBpL3YxL3VzZXIvb3JkZXIvYmxvZz9iaWQ9JHtpZH1gLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogc2Vzc2lvblRva2VuLnRva2VuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgICBsZXQgZGF0YSA9IG51bGxcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBhd2FpdCByZXN1bHQuanNvbigpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgfVxuICAgICAgaWYgKCFyZXN1bHQub2spIHtcbiAgICAgICAgcmVzLnN0YXR1cyhyZXN1bHQuc3RhdHVzKS5qc29uKGRhdGEpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oXG4gICAgICAgIGRhdGFcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgcmVzdWx0OiB0cnVlLFxuICAgICAgICAgICAgICBwcmljZTogZGF0YS5hbW91bnQsXG4gICAgICAgICAgICAgIGV4cGlyZTogZGF0YS50aW1lICogMTAwMCxcbiAgICAgICAgICAgICAgb3JkZXJJZDogZGF0YS5vcmRlcl9pZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIDogeyByZXN1bHQ6IGZhbHNlIH1cbiAgICAgIClcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJ10pXG4gICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHttZXRob2R9IE5vdCBBbGxvd2VkYClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2Vzc2lvbihzZWxsaW5nSGFuZGxlcilcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/my/win.ts\n");

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