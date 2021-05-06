module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/offer.ts");
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

/***/ "./pages/api/offer.ts":
/*!****************************!*\
  !*** ./pages/api/offer.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/session */ \"./lib/session.ts\");\n\n\nconst offerHandler = async (req, res) => {\n  const {\n    method,\n    body,\n    session\n  } = req;\n  const {\n    id,\n    price\n  } = body;\n  const sessionToken = session === null || session === void 0 ? void 0 : session.get('token');\n\n  if (!sessionToken) {\n    res.status(401).end();\n    return;\n  }\n\n  switch (method) {\n    case 'POST':\n      {\n        const result = await fetch(`${process.env.API_BASE}/api/v1/user/offer`, {\n          method: 'POST',\n          body: JSON.stringify({\n            bid: id,\n            value: price\n          }),\n          headers: {\n            'Content-Type': 'application/json; charset=utf-8',\n            authorization: sessionToken.token\n          }\n        });\n\n        if (!result.ok) {\n          const data = await result.json();\n          res.status(result.status).json(data);\n          return;\n        }\n\n        res.status(200).end();\n        break;\n      }\n\n    default:\n      res.setHeader('Allow', ['POST']);\n      res.status(405).end(`Method ${method} Not Allowed`);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_session__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(offerHandler));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvb2ZmZXIudHM/ZTJkOSJdLCJuYW1lcyI6WyJvZmZlckhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJib2R5Iiwic2Vzc2lvbiIsImlkIiwicHJpY2UiLCJzZXNzaW9uVG9rZW4iLCJnZXQiLCJzdGF0dXMiLCJlbmQiLCJyZXN1bHQiLCJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJBUElfQkFTRSIsIkpTT04iLCJzdHJpbmdpZnkiLCJiaWQiLCJ2YWx1ZSIsImhlYWRlcnMiLCJhdXRob3JpemF0aW9uIiwidG9rZW4iLCJvayIsImRhdGEiLCJqc29uIiwic2V0SGVhZGVyIiwid2l0aFNlc3Npb24iXSwibWFwcGluZ3MiOiJBQUdBO0FBQUE7QUFBQTs7QUFHQSxNQUFNQSxZQUFZLEdBQUcsT0FDbkJDLEdBRG1CLEVBRW5CQyxHQUZtQixLQUdoQjtBQUNILFFBQU07QUFBRUMsVUFBRjtBQUFVQyxRQUFWO0FBQWdCQztBQUFoQixNQUE0QkosR0FBbEM7QUFDQSxRQUFNO0FBQUVLLE1BQUY7QUFBTUM7QUFBTixNQUFnQkgsSUFBdEI7QUFFQSxRQUFNSSxZQUFZLEdBQUdILE9BQUgsYUFBR0EsT0FBSCx1QkFBR0EsT0FBTyxDQUFFSSxHQUFULENBQThCLE9BQTlCLENBQXJCOztBQUNBLE1BQUksQ0FBQ0QsWUFBTCxFQUFtQjtBQUNqQk4sT0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsR0FBaEI7QUFDQTtBQUNEOztBQUVELFVBQVFSLE1BQVI7QUFDRSxTQUFLLE1BQUw7QUFBYTtBQUNYLGNBQU1TLE1BQU0sR0FBRyxNQUFNQyxLQUFLLENBQUUsR0FBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVMsb0JBQXpCLEVBQThDO0FBQ3RFYixnQkFBTSxFQUFFLE1BRDhEO0FBRXRFQyxjQUFJLEVBQUVhLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CQyxlQUFHLEVBQUViLEVBRGM7QUFFbkJjLGlCQUFLLEVBQUViO0FBRlksV0FBZixDQUZnRTtBQU10RWMsaUJBQU8sRUFBRTtBQUNQLDRCQUFnQixpQ0FEVDtBQUVQQyx5QkFBYSxFQUFFZCxZQUFZLENBQUNlO0FBRnJCO0FBTjZELFNBQTlDLENBQTFCOztBQVdBLFlBQUksQ0FBQ1gsTUFBTSxDQUFDWSxFQUFaLEVBQWdCO0FBQ2QsZ0JBQU1DLElBQUksR0FBRyxNQUFNYixNQUFNLENBQUNjLElBQVAsRUFBbkI7QUFDQXhCLGFBQUcsQ0FBQ1EsTUFBSixDQUFXRSxNQUFNLENBQUNGLE1BQWxCLEVBQTBCZ0IsSUFBMUIsQ0FBK0JELElBQS9CO0FBQ0E7QUFDRDs7QUFDRHZCLFdBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCO0FBQ0E7QUFDRDs7QUFDRDtBQUNFVCxTQUFHLENBQUN5QixTQUFKLENBQWMsT0FBZCxFQUF1QixDQUFDLE1BQUQsQ0FBdkI7QUFDQXpCLFNBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLEdBQWhCLENBQXFCLFVBQVNSLE1BQU8sY0FBckM7QUF2Qko7QUF5QkQsQ0F0Q0Q7O0FBd0NleUIsMkhBQVcsQ0FBQzVCLFlBQUQsQ0FBMUIiLCJmaWxlIjoiLi9wYWdlcy9hcGkvb2ZmZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tICduZXh0LWlyb24tc2Vzc2lvbidcblxuaW1wb3J0IHdpdGhTZXNzaW9uIGZyb20gJy4uLy4uL2xpYi9zZXNzaW9uJ1xuaW1wb3J0IHsgQWNjZXNzVG9rZW5JbmZvIH0gZnJvbSAnLi4vLi4vdHlwaW5ncy91c2VyJ1xuXG5jb25zdCBvZmZlckhhbmRsZXIgPSBhc3luYyAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QgJiB7IHNlc3Npb24/OiBTZXNzaW9uIH0sXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlXG4pID0+IHtcbiAgY29uc3QgeyBtZXRob2QsIGJvZHksIHNlc3Npb24gfSA9IHJlcVxuICBjb25zdCB7IGlkLCBwcmljZSB9ID0gYm9keVxuXG4gIGNvbnN0IHNlc3Npb25Ub2tlbiA9IHNlc3Npb24/LmdldDxBY2Nlc3NUb2tlbkluZm8+KCd0b2tlbicpXG4gIGlmICghc2Vzc2lvblRva2VuKSB7XG4gICAgcmVzLnN0YXR1cyg0MDEpLmVuZCgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgJ1BPU1QnOiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5BUElfQkFTRX0vYXBpL3YxL3VzZXIvb2ZmZXJgLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgYmlkOiBpZCxcbiAgICAgICAgICB2YWx1ZTogcHJpY2VcbiAgICAgICAgfSksXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLTgnLFxuICAgICAgICAgIGF1dGhvcml6YXRpb246IHNlc3Npb25Ub2tlbi50b2tlblxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgaWYgKCFyZXN1bHQub2spIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3VsdC5qc29uKClcbiAgICAgICAgcmVzLnN0YXR1cyhyZXN1bHQuc3RhdHVzKS5qc29uKGRhdGEpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgcmVzLnN0YXR1cygyMDApLmVuZCgpXG4gICAgICBicmVha1xuICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmVzLnNldEhlYWRlcignQWxsb3cnLCBbJ1BPU1QnXSlcbiAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke21ldGhvZH0gTm90IEFsbG93ZWRgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTZXNzaW9uKG9mZmVySGFuZGxlcilcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/offer.ts\n");

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