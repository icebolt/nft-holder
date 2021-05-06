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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/me.ts");
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

/***/ "./pages/api/me.ts":
/*!*************************!*\
  !*** ./pages/api/me.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_session__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/session */ \"./lib/session.ts\");\n\n\nconst meHandler = async (req, res) => {\n  const {\n    method,\n    session\n  } = req;\n\n  switch (method) {\n    case 'GET':\n      {\n        const sessionToken = session === null || session === void 0 ? void 0 : session.get('token');\n\n        if (sessionToken) {\n          const result = await fetch(`${process.env.API_BASE}/api/v1/user/show?uid=${sessionToken.uid}`, {\n            headers: {\n              authorization: sessionToken.token\n            }\n          });\n          let data = null;\n\n          try {\n            data = await result.json();\n          } catch (error) {\n            console.error(error);\n          }\n\n          if (!result.ok) {\n            session === null || session === void 0 ? void 0 : session.unset('token');\n            await (session === null || session === void 0 ? void 0 : session.save());\n            res.status(result.status).json(data);\n            return;\n          }\n\n          res.status(200).json({\n            id: data.uid.toString(),\n            name: data.screenName,\n            avatar: data.avatar,\n            gender: data.gender,\n            credit: data.credit,\n            isLoggedIn: true\n          });\n        } else {\n          res.status(200).json({\n            isLoggedIn: false\n          });\n        }\n\n        break;\n      }\n\n    default:\n      res.setHeader('Allow', ['GET']);\n      res.status(405).end(`Method ${method} Not Allowed`);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_lib_session__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(meHandler));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbWUudHM/MDZiYyJdLCJuYW1lcyI6WyJtZUhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzZXNzaW9uIiwic2Vzc2lvblRva2VuIiwiZ2V0IiwicmVzdWx0IiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiQVBJX0JBU0UiLCJ1aWQiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInRva2VuIiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJvayIsInVuc2V0Iiwic2F2ZSIsInN0YXR1cyIsImlkIiwidG9TdHJpbmciLCJuYW1lIiwic2NyZWVuTmFtZSIsImF2YXRhciIsImdlbmRlciIsImNyZWRpdCIsImlzTG9nZ2VkSW4iLCJzZXRIZWFkZXIiLCJlbmQiLCJ3aXRoU2Vzc2lvbiJdLCJtYXBwaW5ncyI6IkFBR0E7QUFBQTtBQUFBOztBQUdBLE1BQU1BLFNBQVMsR0FBRyxPQUNoQkMsR0FEZ0IsRUFFaEJDLEdBRmdCLEtBR2I7QUFDSCxRQUFNO0FBQUVDLFVBQUY7QUFBVUM7QUFBVixNQUFzQkgsR0FBNUI7O0FBRUEsVUFBUUUsTUFBUjtBQUNFLFNBQUssS0FBTDtBQUFZO0FBQ1YsY0FBTUUsWUFBWSxHQUFHRCxPQUFILGFBQUdBLE9BQUgsdUJBQUdBLE9BQU8sQ0FBRUUsR0FBVCxDQUE4QixPQUE5QixDQUFyQjs7QUFDQSxZQUFJRCxZQUFKLEVBQWtCO0FBQ2hCLGdCQUFNRSxNQUFNLEdBQUcsTUFBTUMsS0FBSyxDQUN2QixHQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsUUFBUyx5QkFBd0JOLFlBQVksQ0FBQ08sR0FBSSxFQUR6QyxFQUV4QjtBQUFFQyxtQkFBTyxFQUFFO0FBQUVDLDJCQUFhLEVBQUVULFlBQVksQ0FBQ1U7QUFBOUI7QUFBWCxXQUZ3QixDQUExQjtBQUlBLGNBQUlDLElBQUksR0FBRyxJQUFYOztBQUNBLGNBQUk7QUFDRkEsZ0JBQUksR0FBRyxNQUFNVCxNQUFNLENBQUNVLElBQVAsRUFBYjtBQUNELFdBRkQsQ0FFRSxPQUFPQyxLQUFQLEVBQWM7QUFDZEMsbUJBQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7O0FBQ0QsY0FBSSxDQUFDWCxNQUFNLENBQUNhLEVBQVosRUFBZ0I7QUFDZGhCLG1CQUFPLFNBQVAsSUFBQUEsT0FBTyxXQUFQLFlBQUFBLE9BQU8sQ0FBRWlCLEtBQVQsQ0FBZSxPQUFmO0FBQ0EsbUJBQU1qQixPQUFOLGFBQU1BLE9BQU4sdUJBQU1BLE9BQU8sQ0FBRWtCLElBQVQsRUFBTjtBQUNBcEIsZUFBRyxDQUFDcUIsTUFBSixDQUFXaEIsTUFBTSxDQUFDZ0IsTUFBbEIsRUFBMEJOLElBQTFCLENBQStCRCxJQUEvQjtBQUNBO0FBQ0Q7O0FBQ0RkLGFBQUcsQ0FBQ3FCLE1BQUosQ0FBVyxHQUFYLEVBQWdCTixJQUFoQixDQUFxQjtBQUNuQk8sY0FBRSxFQUFFUixJQUFJLENBQUNKLEdBQUwsQ0FBU2EsUUFBVCxFQURlO0FBRW5CQyxnQkFBSSxFQUFFVixJQUFJLENBQUNXLFVBRlE7QUFHbkJDLGtCQUFNLEVBQUVaLElBQUksQ0FBQ1ksTUFITTtBQUluQkMsa0JBQU0sRUFBRWIsSUFBSSxDQUFDYSxNQUpNO0FBS25CQyxrQkFBTSxFQUFFZCxJQUFJLENBQUNjLE1BTE07QUFNbkJDLHNCQUFVLEVBQUU7QUFOTyxXQUFyQjtBQVFELFNBekJELE1BeUJPO0FBQ0w3QixhQUFHLENBQUNxQixNQUFKLENBQVcsR0FBWCxFQUFnQk4sSUFBaEIsQ0FBcUI7QUFBRWMsc0JBQVUsRUFBRTtBQUFkLFdBQXJCO0FBQ0Q7O0FBQ0Q7QUFDRDs7QUFDRDtBQUNFN0IsU0FBRyxDQUFDOEIsU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxLQUFELENBQXZCO0FBQ0E5QixTQUFHLENBQUNxQixNQUFKLENBQVcsR0FBWCxFQUFnQlUsR0FBaEIsQ0FBcUIsVUFBUzlCLE1BQU8sY0FBckM7QUFuQ0o7QUFxQ0QsQ0EzQ0Q7O0FBNkNlK0IsMkhBQVcsQ0FBQ2xDLFNBQUQsQ0FBMUIiLCJmaWxlIjoiLi9wYWdlcy9hcGkvbWUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpUmVzcG9uc2UsIE5leHRBcGlSZXF1ZXN0IH0gZnJvbSAnbmV4dCdcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tICduZXh0LWlyb24tc2Vzc2lvbidcblxuaW1wb3J0IHdpdGhTZXNzaW9uIGZyb20gJy4uLy4uL2xpYi9zZXNzaW9uJ1xuaW1wb3J0IHsgQWNjZXNzVG9rZW5JbmZvLCBVc2VyVHlwZSB9IGZyb20gJy4uLy4uL3R5cGluZ3MvdXNlcidcblxuY29uc3QgbWVIYW5kbGVyID0gYXN5bmMgKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0ICYgeyBzZXNzaW9uPzogU2Vzc2lvbiB9LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxVc2VyVHlwZT5cbikgPT4ge1xuICBjb25zdCB7IG1ldGhvZCwgc2Vzc2lvbiB9ID0gcmVxXG5cbiAgc3dpdGNoIChtZXRob2QpIHtcbiAgICBjYXNlICdHRVQnOiB7XG4gICAgICBjb25zdCBzZXNzaW9uVG9rZW4gPSBzZXNzaW9uPy5nZXQ8QWNjZXNzVG9rZW5JbmZvPigndG9rZW4nKVxuICAgICAgaWYgKHNlc3Npb25Ub2tlbikge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICBgJHtwcm9jZXNzLmVudi5BUElfQkFTRX0vYXBpL3YxL3VzZXIvc2hvdz91aWQ9JHtzZXNzaW9uVG9rZW4udWlkfWAsXG4gICAgICAgICAgeyBoZWFkZXJzOiB7IGF1dGhvcml6YXRpb246IHNlc3Npb25Ub2tlbi50b2tlbiB9IH1cbiAgICAgICAgKVxuICAgICAgICBsZXQgZGF0YSA9IG51bGxcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBkYXRhID0gYXdhaXQgcmVzdWx0Lmpzb24oKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXN1bHQub2spIHtcbiAgICAgICAgICBzZXNzaW9uPy51bnNldCgndG9rZW4nKVxuICAgICAgICAgIGF3YWl0IHNlc3Npb24/LnNhdmUoKVxuICAgICAgICAgIHJlcy5zdGF0dXMocmVzdWx0LnN0YXR1cykuanNvbihkYXRhKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgICBpZDogZGF0YS51aWQudG9TdHJpbmcoKSxcbiAgICAgICAgICBuYW1lOiBkYXRhLnNjcmVlbk5hbWUsXG4gICAgICAgICAgYXZhdGFyOiBkYXRhLmF2YXRhcixcbiAgICAgICAgICBnZW5kZXI6IGRhdGEuZ2VuZGVyLFxuICAgICAgICAgIGNyZWRpdDogZGF0YS5jcmVkaXQsXG4gICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZVxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBpc0xvZ2dlZEluOiBmYWxzZSB9KVxuICAgICAgfVxuICAgICAgYnJlYWtcbiAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlcy5zZXRIZWFkZXIoJ0FsbG93JywgWydHRVQnXSlcbiAgICAgIHJlcy5zdGF0dXMoNDA1KS5lbmQoYE1ldGhvZCAke21ldGhvZH0gTm90IEFsbG93ZWRgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTZXNzaW9uKG1lSGFuZGxlcilcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/me.ts\n");

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