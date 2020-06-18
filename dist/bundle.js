/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/api.js":
/*!***********************!*\
  !*** ./src/js/api.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nasync function getWeather({city, units}){\n  const API_KEY = '2f0babefc06cd96c45df8d19d2f9a2e4';\n  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;\n   \n  let response = await fetch(url);\n  let data = await response.json();\n  return data;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getWeather);\n\n\n//# sourceURL=webpack:///./src/js/api.js?");

/***/ }),

/***/ "./src/js/display.js":
/*!***************************!*\
  !*** ./src/js/display.js ***!
  \***************************/
/*! exports provided: searchSuggestions, clear, weather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"searchSuggestions\", function() { return searchSuggestions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clear\", function() { return clear; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"weather\", function() { return weather; });\nfunction searchSuggestions() {\n  const input = document.getElementById('location-input');\n  const options = [\"New York\", \"Paris\", \"Berlin\", \"Buenos Aires\", \"London\"];\n  input.setAttribute('placeholder', options[options.length-1]);\n\n  let counter = 0;\n  let interval = setInterval(() => {\n    input.setAttribute('placeholder', options[counter]);\n    counter = counter == options.length-1 ? 0 : counter+1;\n  },1500);\n}\n\nfunction clear(){\n  const cityPlaceholder = document.getElementById('location');\n  const temperaturePlaceholder = document.getElementById('temp');\n  const descriptionPlaceholder = document.getElementById('description');\n  const feelsPlaceholder = document.getElementById('feels');\n  const cloudsPlaceholder = document.getElementById('clouds');\n  const humidityPlaceholder = document.getElementById('humidity');\n  const pressurePlaceholder = document.getElementById('pressure');\n\n  cityPlaceholder.innerHTML = '';\n  temperaturePlaceholder.innerHTML = '';\n  descriptionPlaceholder.innerHTML = '';\n  feelsPlaceholder.innerHTML = '';\n  cloudsPlaceholder.innerHTML = '';\n  humidityPlaceholder.innerHTML = '';\n  pressurePlaceholder.innerHTML = '';\n}\n\nfunction weather({locationName, temperature, description, feels, clouds, humidity, pressure}){\n  const cityPlaceholder = document.getElementById('location');\n  const temperaturePlaceholder = document.getElementById('temp');\n  const descriptionPlaceholder = document.getElementById('description');\n  const feelsPlaceholder = document.getElementById('feels');\n  const cloudsPlaceholder = document.getElementById('clouds');\n  const humidityPlaceholder = document.getElementById('humidity');\n  const pressurePlaceholder = document.getElementById('pressure');\n\n  cityPlaceholder.innerHTML = locationName;\n  temperaturePlaceholder.innerHTML = temperature;\n  descriptionPlaceholder.innerHTML = description;\n  feelsPlaceholder.innerHTML = feels;\n  cloudsPlaceholder.innerHTML = clouds;\n  humidityPlaceholder.innerHTML = humidity;\n  pressurePlaceholder.innerHTML = pressure;\n}\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/display.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/js/display.js\");\n/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listeners */ \"./src/js/listeners.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ \"./src/js/api.js\");\n\n\n\n\n// Aux function\nfunction parser(data, unitsCharacter){\n  let degreeCharacter = String.fromCharCode(176);\n  return {\n    locationName: `${data.name}, ${data.sys.country}`,\n    temperature: `${parseInt(data.main.temp)}${degreeCharacter} ${unitsCharacter}`,\n    description: `${data.weather[0].main}`,\n    feels: `Feels like: ${parseInt(data.main.feels_like)}${degreeCharacter} ${unitsCharacter}`,\n    clouds: `Clouds: ${data.clouds.all}%`,\n    humidity: `Humidity: ${data.main.humidity}%`,\n    pressure: `Pressure: ${data.main.pressure} hPa`, \n  }\n}\n\n(function setup() {\n  _display__WEBPACK_IMPORTED_MODULE_0__[\"searchSuggestions\"]();\n\n  let printer = (data) => { console.log(data) };\n  Object(_listeners__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(printer);\n\n // getWeather({city: 'Medellin', units: 'metric'})\n //   .then(data => Display.weather(parser(data,'c')));\n})();\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/listeners.js":
/*!*****************************!*\
  !*** ./src/js/listeners.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction onSearch(functionToCall) {\n  const searchIcon = document.getElementById(\"search-icon\");\n  const locationInput = document.getElementById(\"location-input\");\n\n  searchIcon.onclick = () => { functionToCall(locationInput.value) };\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (onSearch);\n\n\n//# sourceURL=webpack:///./src/js/listeners.js?");

/***/ })

/******/ });