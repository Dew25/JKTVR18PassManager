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
/******/ 	return __webpack_require__(__webpack_require__.s = "./web/js/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./web/js/App.js":
/*!***********************!*\
  !*** ./web/js/App.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AuthModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthModule.js */ \"./web/js/AuthModule.js\");\n/* harmony import */ var _HttpModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpModule.js */ \"./web/js/HttpModule.js\");\n\r\n\r\n\r\n\r\ndocument.getElementById(\"showLogin\").onclick = function(){\r\n  toogleMenuActive(\"showLogin\");\r\n  _AuthModule_js__WEBPACK_IMPORTED_MODULE_0__[\"authModule\"].printLoginForm();\r\n};\r\ndocument.getElementById(\"showLogin\").onclick = function(){\r\n  toogleMenuActive(\"showLogin\");\r\n  _AuthModule_js__WEBPACK_IMPORTED_MODULE_0__[\"authModule\"].printLoginForm();\r\n};\r\n\r\nfunction toogleMenuActive(elementId){\r\n  let activeElement = document.getElementById(elementId);\r\n  let passiveElements = document.getElementsByClassName(\"nav-item\");\r\n  for(let i = 0; i < passiveElements.length; i++){\r\n    if(activeElement === passiveElements[i]){\r\n      passiveElements[i].classList.add(\"active\");\r\n    }else{\r\n      if(passiveElements[i].classList.contains(\"active\")){\r\n        passiveElements[i].classList.remove(\"active\");\r\n      }\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack:///./web/js/App.js?");

/***/ }),

/***/ "./web/js/AuthModule.js":
/*!******************************!*\
  !*** ./web/js/AuthModule.js ***!
  \******************************/
/*! exports provided: authModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authModule\", function() { return authModule; });\n/* harmony import */ var _UserModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserModule.js */ \"./web/js/UserModule.js\");\n/* harmony import */ var _HttpModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpModule.js */ \"./web/js/HttpModule.js\");\n\r\n\r\n\r\n\r\nclass AuthModule{\r\n  printLoginForm(){\r\n      document.getElementById('content').innerHTML =\r\n            `<div class=\"w-100 d-flex justify-content-center\">\r\n               <div class=\"card border-primary p-2\" style=\"max-width: 30rem;\">\r\n                  <div class=\"card-header text-center\">Введите логин и пароль</div>\r\n                  <div class=\"card-body\">\r\n                    <p class=\"card-text d-flex justify-content-between\">Логин: <input class=\"ml-2\" type=\"text\" id=\"login\"></p>\r\n                    <p class=\"card-text d-flex justify-content-between\">Пароль: <input class=\"ml-2\" type=\"text\" id=\"password\"></p>\r\n                    <p class=\"card-text\"><button class=\"btn btn-light w-100\" type=\"button\" id=\"btnEnter\">Войти</button</p>\r\n                  </div>\r\n                    <p class=\"text-center\">Нет учетной записи? <a id=\"registration\" href=\"#\">Зарегистрироваться</a></p>\r\n               </div>\r\n             </div>`;\r\n       document.getElementById('btnEnter').onclick=function (){\r\n            authModule.auth();\r\n       } \r\n       document.getElementById('registration').onclick=function (){\r\n            _UserModule_js__WEBPACK_IMPORTED_MODULE_0__[\"userModule\"].addNewUser();\r\n       }\r\n  }\r\n  auth(){\r\n      let login = document.getElementById('login').value;\r\n      let password = document.getElementById('password').value;\r\n      let credential = {\r\n          \"login\": login,\r\n          \"password\": password\r\n      }\r\n      _HttpModule_js__WEBPACK_IMPORTED_MODULE_1__[\"httpModule\"].http({url:'login', options: {method: 'POST', data: credential}})\r\n              .then(function(response){\r\n                  if(response !== null && response.authStatus === 'true'){\r\n                      sessionStorage.setItem('user',JSON.stringify(response.user));\r\n                      document.getElementById('info').innerHTML='Вы вошли как '+ response.user.login;\r\n                      document.getElementById('content').innerHTML='';\r\n                  }else{\r\n                      document.getElementById('info').innerHTML='Войти не удалось';\r\n                  }\r\n              });\r\n      authModule.authMenu();\r\n\r\n  }\r\n  logout(){\r\n    _HttpModule_js__WEBPACK_IMPORTED_MODULE_1__[\"httpModule\"].http({url:'logout', options: {method: 'GET'}})\r\n              .then(function(response){\r\n                  if(response !== null){\r\n                      if(sessionStorage.getItem('user') !== null){\r\n                        sessionStorage.removeItem('user');\r\n                      }\r\n                      authModule.authMenu();\r\n                      document.getElementById('info').innerHTML='Вы вышли';\r\n                      document.getElementById('content').innerHTML='';\r\n                  }else{\r\n                      document.getElementById('info').innerHTML='Выйти не удалось';\r\n                  }\r\n              });\r\n              \r\n  }\r\n  authMenu(){\r\n    let user = null;\r\n    if(sessionStorage.getItem('user') !== null){\r\n      user = JSON.parse(sessionStorage.getItem('user'));\r\n    }\r\n    if(user !== null){\r\n      document.getElementById(\"userProfile\").style.display = 'block';\r\n      document.getElementById(\"userPasswords\").style.display = 'block';\r\n      document.getElementById(\"sysout\").style.display = 'block';\r\n      document.getElementById(\"showLogin\").style.display = 'none';\r\n    }else{\r\n      document.getElementById(\"userProfile\").style.display = 'none';\r\n      document.getElementById(\"userPasswords\").style.display = 'none';\r\n      document.getElementById(\"sysout\").style.display = 'none';\r\n      document.getElementById(\"showLogin\").style.display = 'block';\r\n    }\r\n  }\r\n  \r\n}\r\nlet authModule = new AuthModule();\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./web/js/AuthModule.js?");

/***/ }),

/***/ "./web/js/HttpModule.js":
/*!******************************!*\
  !*** ./web/js/HttpModule.js ***!
  \******************************/
/*! exports provided: httpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"httpModule\", function() { return httpModule; });\n/*  fetch немножко параноик и по умолчанию не \r\n*   передаёт куки от сайта, на который \r\n*   отправляется запрос (а идентификатор \r\n*   сессии хранится в куке PHPSESSID, или JSESSIONID). \r\n*   За передачу кук и заголовков авторизации \r\n*   отвечает опция credentials, которая может \r\n*   иметь одно из следующих значений:\r\n*     'omit' (по умолчанию) — не передавать куки и заголовки авторизации;\r\n*     'same-origin' — передавать, только если домен, на который \r\n*       отправляется запрос, совпадает с доменом текущего сайта \r\n*       (точнее, origin; сложный случай, но текущего вопроса не касается, \r\n*       так что не буду его подробно описывать);\r\n*     'include' — передавать.\r\n*/\r\nclass HttpModule{\r\n    status(response) {  \r\n        if (response.status >= 200 && response.status < 300) {  \r\n          return Promise.resolve(response)  \r\n        } else {  \r\n          return Promise.reject(new Error(response.statusText))  \r\n        }  \r\n    }\r\n    json(response) {  \r\n        return response.json()  \r\n    }\r\n    parseOptions(opt){\r\n        if(opt.method === 'POST'){\r\n            return {\r\n                method: opt.method,\r\n                headers: {\r\n                    'Content-Type': 'application/json;charset=utf-8'\r\n                },\r\n                credentials: 'include',\r\n                body: JSON.stringify(opt.data)\r\n            };\r\n        }else{\r\n            return {\r\n                method: opt.method,\r\n                headers: {\r\n                    'Content-Type': 'application/json;charset=utf-8'\r\n                },\r\n                credentials: 'include'\r\n            };   \r\n        }\r\n    }\r\n    //POST запрос формат: httpModule.http({url:'createUser',options:{method:'POST',data:user}})\r\n    //GET запрос формае: httpModule.http({url:'listUsers',options:{method:'GET'}})\r\n    http(httpOptions){\r\n        let options = httpModule.parseOptions(httpOptions.options);\r\n        return fetch(httpOptions.url, options)\r\n                .then(httpModule.status)\r\n                .then(httpModule.json)\r\n                .catch((ex) => console.log(\"Получена ошибка от сервера: \", ex));\r\n    }\r\n}\r\nlet httpModule = new HttpModule();\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./web/js/HttpModule.js?");

/***/ }),

/***/ "./web/js/UserModule.js":
/*!******************************!*\
  !*** ./web/js/UserModule.js ***!
  \******************************/
/*! exports provided: userModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"userModule\", function() { return userModule; });\n/* harmony import */ var _HttpModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpModule.js */ \"./web/js/HttpModule.js\");\n/* harmony import */ var _authModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authModule.js */ \"./web/js/authModule.js\");\n \r\n\r\nclass UserModule{\r\n    addNewUser(){\r\n        document.getElementById('content').innerHTML =\r\n            `<div class=\"w-100 d-flex justify-content-center\">\r\n                <div class=\"card border-primary p-2\" style=\"max-width: 60em;\">\r\n                   <div class=\"card-header text-center\">Заполните все поля</div>\r\n                   <div class=\"card-body\">\r\n                     <p class=\"card-text d-flex justify-content-between\">Имя: <input class=\"ml-2\" type=\"text\" id=\"firstname\"></p>\r\n                     <p class=\"card-text d-flex justify-content-between\">Фамилия: <input class=\"ml-2\" type=\"text\" id=\"surname\"></p>\r\n                     <p class=\"card-text d-flex justify-content-between\">Email: <input class=\"ml-2\" type=\"text\" id=\"email\"></p>\r\n                     <p class=\"card-text d-flex justify-content-between\">Логин: <input class=\"ml-2\" type=\"text\" id=\"login\"></p>\r\n                     <p class=\"card-text d-flex justify-content-between\">Пароль: <input class=\"ml-2\" type=\"text\" id=\"password1\"></p>\r\n                     <p class=\"card-text d-flex justify-content-between\">Повторите пароль: <input class=\"ml-2\" type=\"text\" id=\"password2\"></p>\r\n                     <p class=\"card-text\"><button class=\"btn btn-light w-100\" type=\"button\" id=\"btnRegistration\">Зарегистрировать</button</p>\r\n                   </div>\r\n                </div>\r\n              </div>`;\r\n      document.getElementById('btnRegistration').onclick=function (){\r\n          userModule.createUser();\r\n      }        \r\n    }\r\n    createUser(){\r\n      let firstname = document.getElementById('firstname').value;\r\n      let surname = document.getElementById('surname').value;\r\n      let email = document.getElementById('email').value;\r\n      let login = document.getElementById('login').value;\r\n      let password1 = document.getElementById('password1').value;\r\n      let password2 = document.getElementById('password2').value;\r\n      if(password1 !== password2){\r\n        document.getElementById('info').innerHTML=\"Не совпадают пароли\";\r\n        document.getElementById('password1').value='';\r\n        document.getElementById('password2').value='';\r\n        return;\r\n      }\r\n      let newUser = {\r\n          \"firstname\": firstname,\r\n          \"surname\": surname,\r\n          \"email\": email,\r\n          \"login\": login,\r\n          \"password\": password1\r\n      }\r\n      _HttpModule_js__WEBPACK_IMPORTED_MODULE_0__[\"httpModule\"].http({url:'createUser', options: {method: 'POST', data: newUser}})\r\n              .then(function(response){\r\n                  if(response !== null && response.authStatus === 'true'){\r\n                      sessionStorage.setItem('user',JSON.stringify(response.user));\r\n                      document.getElementById('info').innerHTML='Вы вошли как '+ response.user.login;\r\n                      document.getElementById('content').innerHTML='';\r\n                  }else{\r\n                      if(response !== null){\r\n                        document.getElementById('info').innerHTML=\"Email или login уже используется\";\r\n                      }else{\r\n                        document.getElementById('info').innerHTML='Зарегистрироваться не удалось';\r\n                      }\r\n                  }\r\n              });\r\n      _authModule_js__WEBPACK_IMPORTED_MODULE_1__[\"authModule\"].authMenu();\r\n    }\r\n}\r\nlet userModule = new UserModule();\r\n\n\n//# sourceURL=webpack:///./web/js/UserModule.js?");

/***/ }),

/***/ "./web/js/authModule.js":
/*!******************************!*\
  !*** ./web/js/authModule.js ***!
  \******************************/
/*! exports provided: authModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"authModule\", function() { return authModule; });\n/* harmony import */ var _UserModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserModule.js */ \"./web/js/UserModule.js\");\n/* harmony import */ var _HttpModule_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HttpModule.js */ \"./web/js/HttpModule.js\");\n\r\n\r\n\r\n\r\nclass AuthModule{\r\n  printLoginForm(){\r\n      document.getElementById('content').innerHTML =\r\n            `<div class=\"w-100 d-flex justify-content-center\">\r\n               <div class=\"card border-primary p-2\" style=\"max-width: 30rem;\">\r\n                  <div class=\"card-header text-center\">Введите логин и пароль</div>\r\n                  <div class=\"card-body\">\r\n                    <p class=\"card-text d-flex justify-content-between\">Логин: <input class=\"ml-2\" type=\"text\" id=\"login\"></p>\r\n                    <p class=\"card-text d-flex justify-content-between\">Пароль: <input class=\"ml-2\" type=\"text\" id=\"password\"></p>\r\n                    <p class=\"card-text\"><button class=\"btn btn-light w-100\" type=\"button\" id=\"btnEnter\">Войти</button</p>\r\n                  </div>\r\n                    <p class=\"text-center\">Нет учетной записи? <a id=\"registration\" href=\"#\">Зарегистрироваться</a></p>\r\n               </div>\r\n             </div>`;\r\n       document.getElementById('btnEnter').onclick=function (){\r\n            authModule.auth();\r\n       } \r\n       document.getElementById('registration').onclick=function (){\r\n            _UserModule_js__WEBPACK_IMPORTED_MODULE_0__[\"userModule\"].addNewUser();\r\n       }\r\n  }\r\n  auth(){\r\n      let login = document.getElementById('login').value;\r\n      let password = document.getElementById('password').value;\r\n      let credential = {\r\n          \"login\": login,\r\n          \"password\": password\r\n      }\r\n      _HttpModule_js__WEBPACK_IMPORTED_MODULE_1__[\"httpModule\"].http({url:'login', options: {method: 'POST', data: credential}})\r\n              .then(function(response){\r\n                  if(response !== null && response.authStatus === 'true'){\r\n                      sessionStorage.setItem('user',JSON.stringify(response.user));\r\n                      document.getElementById('info').innerHTML='Вы вошли как '+ response.user.login;\r\n                      document.getElementById('content').innerHTML='';\r\n                  }else{\r\n                      document.getElementById('info').innerHTML='Войти не удалось';\r\n                  }\r\n              });\r\n      authModule.authMenu();\r\n\r\n  }\r\n  logout(){\r\n    _HttpModule_js__WEBPACK_IMPORTED_MODULE_1__[\"httpModule\"].http({url:'logout', options: {method: 'GET'}})\r\n              .then(function(response){\r\n                  if(response !== null){\r\n                      if(sessionStorage.getItem('user') !== null){\r\n                        sessionStorage.removeItem('user');\r\n                      }\r\n                      authModule.authMenu();\r\n                      document.getElementById('info').innerHTML='Вы вышли';\r\n                      document.getElementById('content').innerHTML='';\r\n                  }else{\r\n                      document.getElementById('info').innerHTML='Выйти не удалось';\r\n                  }\r\n              });\r\n              \r\n  }\r\n  authMenu(){\r\n    let user = null;\r\n    if(sessionStorage.getItem('user') !== null){\r\n      user = JSON.parse(sessionStorage.getItem('user'));\r\n    }\r\n    if(user !== null){\r\n      document.getElementById(\"userProfile\").style.display = 'block';\r\n      document.getElementById(\"userPasswords\").style.display = 'block';\r\n      document.getElementById(\"sysout\").style.display = 'block';\r\n      document.getElementById(\"showLogin\").style.display = 'none';\r\n    }else{\r\n      document.getElementById(\"userProfile\").style.display = 'none';\r\n      document.getElementById(\"userPasswords\").style.display = 'none';\r\n      document.getElementById(\"sysout\").style.display = 'none';\r\n      document.getElementById(\"showLogin\").style.display = 'block';\r\n    }\r\n  }\r\n  \r\n}\r\nlet authModule = new AuthModule();\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./web/js/authModule.js?");

/***/ })

/******/ });