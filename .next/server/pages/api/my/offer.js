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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/my/offer.ts");
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

/***/ "./pages/api/my/offer.ts":
/*!*******************************!*\
  !*** ./pages/api/my/offer.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/session */ \"./lib/session.ts\");\n\n\nconst myOfferHandler = async (req, res) => {\n  const {\n    method,\n    query,\n    session\n  } = req;\n  const {\n    id\n  } = query;\n  const sessionToken = session === null || session === void 0 ? void 0 : session.get('token');\n\n  if (!sessionToken) {\n    res.status(401).end();\n    return;\n  }\n\n  switch (method) {\n    case 'GET':\n      {\n        const result = await fetch(`${process.env.API_BASE}/api/v1/user/offer/biggest?bid=${id}`, {\n          headers: {\n            authorization: sessionToken.token\n          }\n        });\n        let data = null;\n\n        try {\n          data = await result.json();\n        } catch (error) {\n          console.error(error);\n        }\n\n        if (!result.ok) {\n          res.status(result.status).json(data);\n          return;\n        }\n\n        if (!data.uid) {\n          res.status(204).end();\n          return;\n        }\n\n        res.status(200).json({\n          price: data.amount * 1,\n          expire: data.time * 1000\n        });\n        break;\n      }\n\n    default:\n      res.setHeader('Allow', ['GET']);\n      res.status(405).end(`Method ${method} Not Allowed`);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_session__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(myOfferHandler));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbXkvb2ZmZXIudHM/MjAwMCJdLCJuYW1lcyI6WyJteU9mZmVySGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInF1ZXJ5Iiwic2Vzc2lvbiIsImlkIiwic2Vzc2lvblRva2VuIiwiZ2V0Iiwic3RhdHVzIiwiZW5kIiwicmVzdWx0IiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiQVBJX0JBU0UiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInRva2VuIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJvayIsInVpZCIsInByaWNlIiwiYW1vdW50IiwiZXhwaXJlIiwidGltZSIsInNldEhlYWRlciIsIndpdGhTZXNzaW9uIl0sIm1hcHBpbmdzIjoiQUFHQTtBQUFBO0FBQUE7O0FBSUEsTUFBTUEsY0FBYyxHQUFHLE9BQ3JCQyxHQURxQixFQUVyQkMsR0FGcUIsS0FHbEI7QUFDSCxRQUFNO0FBQUVDLFVBQUY7QUFBVUMsU0FBVjtBQUFpQkM7QUFBakIsTUFBNkJKLEdBQW5DO0FBQ0EsUUFBTTtBQUFFSztBQUFGLE1BQVNGLEtBQWY7QUFFQSxRQUFNRyxZQUFZLEdBQUdGLE9BQUgsYUFBR0EsT0FBSCx1QkFBR0EsT0FBTyxDQUFFRyxHQUFULENBQThCLE9BQTlCLENBQXJCOztBQUNBLE1BQUksQ0FBQ0QsWUFBTCxFQUFtQjtBQUNqQkwsT0FBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsR0FBaEI7QUFDQTtBQUNEOztBQUVELFVBQVFQLE1BQVI7QUFDRSxTQUFLLEtBQUw7QUFBWTtBQUNWLGNBQU1RLE1BQU0sR0FBRyxNQUFNQyxLQUFLLENBQ3ZCLEdBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFTLGtDQUFpQ1QsRUFBRyxFQURwQyxFQUV4QjtBQUNFVSxpQkFBTyxFQUFFO0FBQ1BDLHlCQUFhLEVBQUVWLFlBQVksQ0FBQ1c7QUFEckI7QUFEWCxTQUZ3QixDQUExQjtBQVFBLFlBQUlDLElBQUksR0FBRyxJQUFYOztBQUNBLFlBQUk7QUFDRkEsY0FBSSxHQUFHLE1BQU1SLE1BQU0sQ0FBQ1MsSUFBUCxFQUFiO0FBQ0QsU0FGRCxDQUVFLE9BQU9DLEtBQVAsRUFBYztBQUNkQyxpQkFBTyxDQUFDRCxLQUFSLENBQWNBLEtBQWQ7QUFDRDs7QUFDRCxZQUFJLENBQUNWLE1BQU0sQ0FBQ1ksRUFBWixFQUFnQjtBQUNkckIsYUFBRyxDQUFDTyxNQUFKLENBQVdFLE1BQU0sQ0FBQ0YsTUFBbEIsRUFBMEJXLElBQTFCLENBQStCRCxJQUEvQjtBQUNBO0FBQ0Q7O0FBQ0QsWUFBSSxDQUFDQSxJQUFJLENBQUNLLEdBQVYsRUFBZTtBQUNidEIsYUFBRyxDQUFDTyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsR0FBaEI7QUFDQTtBQUNEOztBQUNEUixXQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCVyxJQUFoQixDQUFxQjtBQUNuQkssZUFBSyxFQUFFTixJQUFJLENBQUNPLE1BQUwsR0FBYyxDQURGO0FBRW5CQyxnQkFBTSxFQUFFUixJQUFJLENBQUNTLElBQUwsR0FBWTtBQUZELFNBQXJCO0FBSUE7QUFDRDs7QUFDRDtBQUNFMUIsU0FBRyxDQUFDMkIsU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxLQUFELENBQXZCO0FBQ0EzQixTQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxHQUFoQixDQUFxQixVQUFTUCxNQUFPLGNBQXJDO0FBaENKO0FBa0NELENBL0NEOztBQWlEZTJCLDJIQUFXLENBQUM5QixjQUFELENBQTFCIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL215L29mZmVyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSAnbmV4dC1pcm9uLXNlc3Npb24nXG5cbmltcG9ydCB3aXRoU2Vzc2lvbiBmcm9tICcuLi8uLi8uLi9saWIvc2Vzc2lvbidcbmltcG9ydCB7IEFjY2Vzc1Rva2VuSW5mbyB9IGZyb20gJy4uLy4uLy4uL3R5cGluZ3MvdXNlcidcbmltcG9ydCB7IE15T2ZmZXJUeXBlIH0gZnJvbSAnLi4vLi4vLi4vdHlwaW5ncy9yZWNvcmQnXG5cbmNvbnN0IG15T2ZmZXJIYW5kbGVyID0gYXN5bmMgKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0ICYgeyBzZXNzaW9uPzogU2Vzc2lvbiB9LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxNeU9mZmVyVHlwZT5cbikgPT4ge1xuICBjb25zdCB7IG1ldGhvZCwgcXVlcnksIHNlc3Npb24gfSA9IHJlcVxuICBjb25zdCB7IGlkIH0gPSBxdWVyeVxuXG4gIGNvbnN0IHNlc3Npb25Ub2tlbiA9IHNlc3Npb24/LmdldDxBY2Nlc3NUb2tlbkluZm8+KCd0b2tlbicpXG4gIGlmICghc2Vzc2lvblRva2VuKSB7XG4gICAgcmVzLnN0YXR1cyg0MDEpLmVuZCgpXG4gICAgcmV0dXJuXG4gIH1cblxuICBzd2l0Y2ggKG1ldGhvZCkge1xuICAgIGNhc2UgJ0dFVCc6IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgJHtwcm9jZXNzLmVudi5BUElfQkFTRX0vYXBpL3YxL3VzZXIvb2ZmZXIvYmlnZ2VzdD9iaWQ9JHtpZH1gLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgYXV0aG9yaXphdGlvbjogc2Vzc2lvblRva2VuLnRva2VuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgICBsZXQgZGF0YSA9IG51bGxcbiAgICAgIHRyeSB7XG4gICAgICAgIGRhdGEgPSBhd2FpdCByZXN1bHQuanNvbigpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgfVxuICAgICAgaWYgKCFyZXN1bHQub2spIHtcbiAgICAgICAgcmVzLnN0YXR1cyhyZXN1bHQuc3RhdHVzKS5qc29uKGRhdGEpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKCFkYXRhLnVpZCkge1xuICAgICAgICByZXMuc3RhdHVzKDIwNCkuZW5kKClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICAgIHByaWNlOiBkYXRhLmFtb3VudCAqIDEsXG4gICAgICAgIGV4cGlyZTogZGF0YS50aW1lICogMTAwMFxuICAgICAgfSlcbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJ10pXG4gICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHttZXRob2R9IE5vdCBBbGxvd2VkYClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU2Vzc2lvbihteU9mZmVySGFuZGxlcilcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/my/offer.ts\n");

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