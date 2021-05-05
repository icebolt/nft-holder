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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/records.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/fetch-records.ts":
/*!******************************!*\
  !*** ./lib/fetch-records.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return fetchRecords; });\nasync function fetchRecords(id, pageSize = 10, current = 1) {\n  const result = await fetch(`${process.env.API_BASE}/api/v1/blog/events?bid=${id}&pageSize=${pageSize}&current=${current}`);\n\n  if (!result.ok) {\n    const error = new Error(result.statusText);\n    error.info = await result.json();\n    error.status = result.status;\n    throw error;\n  }\n\n  return await result.json();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZmV0Y2gtcmVjb3Jkcy50cz9jMWNjIl0sIm5hbWVzIjpbImZldGNoUmVjb3JkcyIsImlkIiwicGFnZVNpemUiLCJjdXJyZW50IiwicmVzdWx0IiwiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiQVBJX0JBU0UiLCJvayIsImVycm9yIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwiaW5mbyIsImpzb24iLCJzdGF0dXMiXSwibWFwcGluZ3MiOiJBQVVBO0FBQUE7QUFBZSxlQUFlQSxZQUFmLENBQ2JDLEVBRGEsRUFFYkMsUUFBZ0IsR0FBRyxFQUZOLEVBR2JDLE9BQWUsR0FBRyxDQUhMLEVBSVc7QUFDeEIsUUFBTUMsTUFBTSxHQUFHLE1BQU1DLEtBQUssQ0FDdkIsR0FBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFFBQVMsMkJBQTBCUCxFQUFHLGFBQVlDLFFBQVMsWUFBV0MsT0FBUSxFQURyRSxDQUExQjs7QUFHQSxNQUFJLENBQUNDLE1BQU0sQ0FBQ0ssRUFBWixFQUFnQjtBQUNkLFVBQU1DLEtBQUssR0FBRyxJQUFJQyxLQUFKLENBQVVQLE1BQU0sQ0FBQ1EsVUFBakIsQ0FBZDtBQUNBRixTQUFLLENBQUNHLElBQU4sR0FBYSxNQUFNVCxNQUFNLENBQUNVLElBQVAsRUFBbkI7QUFDQUosU0FBSyxDQUFDSyxNQUFOLEdBQWVYLE1BQU0sQ0FBQ1csTUFBdEI7QUFDQSxVQUFNTCxLQUFOO0FBQ0Q7O0FBQ0QsU0FBTyxNQUFNTixNQUFNLENBQUNVLElBQVAsRUFBYjtBQUNEIiwiZmlsZSI6Ii4vbGliL2ZldGNoLXJlY29yZHMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIFJlY29yZHNSZXN1bHQge1xuICBjdXJyZW50OiBudW1iZXJcbiAgcGFnZVNpemU6IG51bWJlclxuICBsaXN0OiBhbnlbXSB8IG51bGxcbiAgb3duZXJJZD86IHN0cmluZ1xuICBvd25lck5hbWU/OiBzdHJpbmdcbiAgY3JlYXRvcklkPzogc3RyaW5nXG4gIGNyZWF0b3JOYW1lPzogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoUmVjb3JkcyhcbiAgaWQ6IHN0cmluZyxcbiAgcGFnZVNpemU6IG51bWJlciA9IDEwLFxuICBjdXJyZW50OiBudW1iZXIgPSAxXG4pOiBQcm9taXNlPFJlY29yZHNSZXN1bHQ+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7cHJvY2Vzcy5lbnYuQVBJX0JBU0V9L2FwaS92MS9ibG9nL2V2ZW50cz9iaWQ9JHtpZH0mcGFnZVNpemU9JHtwYWdlU2l6ZX0mY3VycmVudD0ke2N1cnJlbnR9YFxuICApXG4gIGlmICghcmVzdWx0Lm9rKSB7XG4gICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IocmVzdWx0LnN0YXR1c1RleHQpXG4gICAgZXJyb3IuaW5mbyA9IGF3YWl0IHJlc3VsdC5qc29uKClcbiAgICBlcnJvci5zdGF0dXMgPSByZXN1bHQuc3RhdHVzXG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuICByZXR1cm4gYXdhaXQgcmVzdWx0Lmpzb24oKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/fetch-records.ts\n");

/***/ }),

/***/ "./pages/api/records.ts":
/*!******************************!*\
  !*** ./pages/api/records.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_fetch_records__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/fetch-records */ \"./lib/fetch-records.ts\");\n\n\nconst recordsHandler = async (req, res) => {\n  const {\n    method,\n    query\n  } = req;\n  const {\n    id,\n    pageSize = 10,\n    current = 1\n  } = query;\n\n  switch (method) {\n    case 'GET':\n      {\n        try {\n          const data = await Object(_lib_fetch_records__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, Number(pageSize), Number(current));\n\n          if (data.list) {\n            res.status(200).json([...data.list.map(item => ({\n              id: item.id.toString(),\n              type: item.type === 'PAYED' ? 1 : 0,\n              expire: item.type === 'EXPIRE',\n              time: item.time * 1000,\n              price: item.amount * 1,\n              user: {\n                id: item.uid,\n                name: item.name\n              }\n            }))]);\n            return;\n          }\n\n          res.status(204).end();\n        } catch (error) {\n          console.error(error);\n          res.status(error.status).end();\n        }\n\n        break;\n      }\n\n    default:\n      res.setHeader('Allow', ['GET']);\n      res.status(405).end(`Method ${method} Not Allowed`);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (recordsHandler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcmVjb3Jkcy50cz9lMjAyIl0sIm5hbWVzIjpbInJlY29yZHNIYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwicXVlcnkiLCJpZCIsInBhZ2VTaXplIiwiY3VycmVudCIsImRhdGEiLCJmZXRjaFJlY29yZHMiLCJOdW1iZXIiLCJsaXN0Iiwic3RhdHVzIiwianNvbiIsIm1hcCIsIml0ZW0iLCJ0b1N0cmluZyIsInR5cGUiLCJleHBpcmUiLCJ0aW1lIiwicHJpY2UiLCJhbW91bnQiLCJ1c2VyIiwidWlkIiwibmFtZSIsImVuZCIsImVycm9yIiwiY29uc29sZSIsInNldEhlYWRlciJdLCJtYXBwaW5ncyI6IkFBRUE7QUFBQTtBQUFBOztBQUdBLE1BQU1BLGNBQW9ELEdBQUcsT0FDM0RDLEdBRDJELEVBRTNEQyxHQUYyRCxLQUd4RDtBQUNILFFBQU07QUFBRUMsVUFBRjtBQUFVQztBQUFWLE1BQW9CSCxHQUExQjtBQUNBLFFBQU07QUFBRUksTUFBRjtBQUFNQyxZQUFRLEdBQUcsRUFBakI7QUFBcUJDLFdBQU8sR0FBRztBQUEvQixNQUFxQ0gsS0FBM0M7O0FBRUEsVUFBUUQsTUFBUjtBQUNFLFNBQUssS0FBTDtBQUFZO0FBQ1YsWUFBSTtBQUNGLGdCQUFNSyxJQUFJLEdBQUcsTUFBTUMsa0VBQVksQ0FDN0JKLEVBRDZCLEVBRTdCSyxNQUFNLENBQUNKLFFBQUQsQ0FGdUIsRUFHN0JJLE1BQU0sQ0FBQ0gsT0FBRCxDQUh1QixDQUEvQjs7QUFLQSxjQUFJQyxJQUFJLENBQUNHLElBQVQsRUFBZTtBQUNiVCxlQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixDQUNuQixHQUFHTCxJQUFJLENBQUNHLElBQUwsQ0FBVUcsR0FBVixDQUFlQyxJQUFELEtBQVc7QUFDMUJWLGdCQUFFLEVBQUVVLElBQUksQ0FBQ1YsRUFBTCxDQUFRVyxRQUFSLEVBRHNCO0FBRTFCQyxrQkFBSSxFQUFHRixJQUFJLENBQUNFLElBQUwsS0FBYyxPQUFkLEdBQXdCLENBQXhCLEdBQTRCLENBRlQ7QUFHMUJDLG9CQUFNLEVBQUVILElBQUksQ0FBQ0UsSUFBTCxLQUFjLFFBSEk7QUFJMUJFLGtCQUFJLEVBQUVKLElBQUksQ0FBQ0ksSUFBTCxHQUFZLElBSlE7QUFLMUJDLG1CQUFLLEVBQUVMLElBQUksQ0FBQ00sTUFBTCxHQUFjLENBTEs7QUFNMUJDLGtCQUFJLEVBQUU7QUFDSmpCLGtCQUFFLEVBQUVVLElBQUksQ0FBQ1EsR0FETDtBQUVKQyxvQkFBSSxFQUFFVCxJQUFJLENBQUNTO0FBRlA7QUFOb0IsYUFBWCxDQUFkLENBRGdCLENBQXJCO0FBYUE7QUFDRDs7QUFDRHRCLGFBQUcsQ0FBQ1UsTUFBSixDQUFXLEdBQVgsRUFBZ0JhLEdBQWhCO0FBQ0QsU0F2QkQsQ0F1QkUsT0FBT0MsS0FBUCxFQUFjO0FBQ2RDLGlCQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZDtBQUNBeEIsYUFBRyxDQUFDVSxNQUFKLENBQVdjLEtBQUssQ0FBQ2QsTUFBakIsRUFBeUJhLEdBQXpCO0FBQ0Q7O0FBQ0Q7QUFDRDs7QUFDRDtBQUNFdkIsU0FBRyxDQUFDMEIsU0FBSixDQUFjLE9BQWQsRUFBdUIsQ0FBQyxLQUFELENBQXZCO0FBQ0ExQixTQUFHLENBQUNVLE1BQUosQ0FBVyxHQUFYLEVBQWdCYSxHQUFoQixDQUFxQixVQUFTdEIsTUFBTyxjQUFyQztBQWpDSjtBQW1DRCxDQTFDRDs7QUE0Q2VILDZFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3JlY29yZHMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXBpSGFuZGxlciB9IGZyb20gJ25leHQnXG5cbmltcG9ydCBmZXRjaFJlY29yZHMgZnJvbSAnLi4vLi4vbGliL2ZldGNoLXJlY29yZHMnXG5pbXBvcnQgeyBSZWNvcmRJdGVtRGF0YVR5cGUsIFJlY29yZEl0ZW1UeXBlIH0gZnJvbSAnLi4vLi4vdHlwaW5ncy9yZWNvcmQnXG5cbmNvbnN0IHJlY29yZHNIYW5kbGVyOiBOZXh0QXBpSGFuZGxlcjxSZWNvcmRJdGVtRGF0YVR5cGVbXT4gPSBhc3luYyAoXG4gIHJlcSxcbiAgcmVzXG4pID0+IHtcbiAgY29uc3QgeyBtZXRob2QsIHF1ZXJ5IH0gPSByZXFcbiAgY29uc3QgeyBpZCwgcGFnZVNpemUgPSAxMCwgY3VycmVudCA9IDEgfSA9IHF1ZXJ5XG5cbiAgc3dpdGNoIChtZXRob2QpIHtcbiAgICBjYXNlICdHRVQnOiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hSZWNvcmRzKFxuICAgICAgICAgIGlkIGFzIHN0cmluZyxcbiAgICAgICAgICBOdW1iZXIocGFnZVNpemUpLFxuICAgICAgICAgIE51bWJlcihjdXJyZW50KVxuICAgICAgICApXG4gICAgICAgIGlmIChkYXRhLmxpc3QpIHtcbiAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihbXG4gICAgICAgICAgICAuLi5kYXRhLmxpc3QubWFwKChpdGVtKSA9PiAoe1xuICAgICAgICAgICAgICBpZDogaXRlbS5pZC50b1N0cmluZygpLFxuICAgICAgICAgICAgICB0eXBlOiAoaXRlbS50eXBlID09PSAnUEFZRUQnID8gMSA6IDApIGFzIFJlY29yZEl0ZW1UeXBlLFxuICAgICAgICAgICAgICBleHBpcmU6IGl0ZW0udHlwZSA9PT0gJ0VYUElSRScsXG4gICAgICAgICAgICAgIHRpbWU6IGl0ZW0udGltZSAqIDEwMDAsXG4gICAgICAgICAgICAgIHByaWNlOiBpdGVtLmFtb3VudCAqIDEsXG4gICAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICBpZDogaXRlbS51aWQsXG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKVxuICAgICAgICAgIF0pXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgcmVzLnN0YXR1cygyMDQpLmVuZCgpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICByZXMuc3RhdHVzKGVycm9yLnN0YXR1cykuZW5kKClcbiAgICAgIH1cbiAgICAgIGJyZWFrXG4gICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXMuc2V0SGVhZGVyKCdBbGxvdycsIFsnR0VUJ10pXG4gICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKGBNZXRob2QgJHttZXRob2R9IE5vdCBBbGxvd2VkYClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZWNvcmRzSGFuZGxlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/records.ts\n");

/***/ })

/******/ });