module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"server": 0
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

    enterModule && enterModule(module);
})();

var _default = {
    assetsPath: '//127.0.0.1:3001'
};
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, 'default', 'D:/zhanghaiyang/works/github/react-koa2-typescript-isomorphic/config/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./dist/react-loadable.json":
/*!**********************************!*\
  !*** ./dist/react-loadable.json ***!
  \**********************************/
/*! exports provided: ./about.css, undefined, ./app, ../component/provider, ../redux/createStore, ./src/client/index.jsx, ./app.css, ../routes, ../client/main, ../client/home, ../component/head, ../client/about, ../client/aboutDetail, ../static/test.jpg, ./head.css, ansi-html, ansi-regex, events, fast-levenshtein, fbjs/lib/EventListener, fbjs/lib/ExecutionEnvironment, ./camelize, fbjs/lib/camelizeStyleName, fbjs/lib/containsNode, fbjs/lib/emptyFunction, fbjs/lib/emptyObject, fbjs/lib/focusNode, fbjs/lib/getActiveElement, ./hyphenate, fbjs/lib/hyphenateStyleName, fbjs/lib/invariant, ./isNode, ./isTextNode, fbjs/lib/shallowEqual, fbjs/lib/warning, ./DOMUtils, ./LocationUtils, ./PathUtils, history/createBrowserHistory, history/createHashHistory, history/createMemoryHistory, ./createTransitionManager, ./createBrowserHistory, ./createHashHistory, ./createMemoryHistory, history, hoist-non-react-statics, html-entities, ./lib/html4-entities.js, ./lib/html5-entities.js, ./lib/xml-entities.js, invariant, ./_Symbol.js, ./_baseGetTag.js, ./_freeGlobal.js, ./_getPrototype.js, ./_getRawTag.js, ./_objectToString.js, ./_overArg.js, ./_root.js, ./isObjectLike.js, lodash-es/isPlainObject, loglevel, object-assign, path-to-regexp, isarray, prop-types/checkPropTypes, ./factoryWithTypeCheckers, prop-types, ./lib/ReactPropTypesSecret, punycode, ./decode, ./encode, querystring, ./cjs/react-dom.development.js, react-dom, ./dist/react-hot-loader.development.js, react-hot-loader, ./checkPropTypes, react-lifecycles-compat, react-loadable, ./components/Provider, ./components/connectAdvanced, ./connect/connect, ./mapDispatchToProps, ./mapStateToProps, ./mergeProps, ./selectorFactory, ./verifySubselectors, ./wrapMapToProps, react-redux, ../utils/PropTypes, ../utils/Subscription, ../utils/shallowEqual, ../utils/verifyPlainObject, ../utils/warning, react-router-config, ./matchRoutes, ./renderRoutes, ./BrowserRouter, ./HashRouter, ./Link, ./MemoryRouter, ./NavLink, ./Prompt, ./Redirect, ./Route, ./Router, ./StaticRouter, ./Switch, react-router-dom, ./matchPath, ./withRouter, ./ConnectedRouter, ./actions, react-router-redux, ./middleware, ./reducer, ./selectors, react-router/Route, react-router/Router, react-router/Switch, react-router/es/MemoryRouter, react-router/es/Prompt, react-router/es/Redirect, react-router/es/Route, react-router/es/Router, react-router/es/StaticRouter, react-router/es/Switch, react-router, react-router/es/matchPath, react-router/es/withRouter, react-router/matchPath, ./cjs/react.development.js, react, ./applyMiddleware, ./bindActionCreators, ./combineReducers, ./compose, ./createStore, redux, ./utils/warning, resolve-pathname, shallowequal, sockjs-client/dist/sockjs, strip-ansi, symbol-observable, ./ponyfill.js, url, ./util, value-equal, warning, D:\zhanghaiyang\works\github\react-koa2-typescript-isomorphic\node_modules\webpack-dev-server\client\index.js?http://localhost:3001, ./overlay, ./socket, !!webpack amd define, !!webpack amd options, ./../webpack/buildin/global.js, ./../../webpack/buildin/harmony-module.js, ./../../node_modules/webpack/buildin/module.js, webpack/hot/dev-server, ./emitter, ./log-apply-result, ./log, default */
/***/ (function(module) {

module.exports = {"./about.css":[{"id":"./src/client/about.css","name":"./src/client/about.css","file":"index-fb17344e13b871b4fbe3.css","publicPath":"//127.0.0.1:3001/index-fb17344e13b871b4fbe3.css"},{"id":"./src/client/about.css","name":"./src/client/about.css","file":"index.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/index.77296b88a4e72b9b76e4.js"},{"id":"./src/client/about.css","name":"./src/client/about.css","file":"index.5fb9599bde901e327362.hot-update.js","publicPath":"//127.0.0.1:3001/index.5fb9599bde901e327362.hot-update.js"}],"undefined":[{"id":0,"name":null,"file":"index-fb17344e13b871b4fbe3.css","publicPath":"//127.0.0.1:3001/index-fb17344e13b871b4fbe3.css"},{"id":2,"name":null,"file":"index-fb17344e13b871b4fbe3.css","publicPath":"//127.0.0.1:3001/index-fb17344e13b871b4fbe3.css"},{"id":3,"name":null,"file":"index-fb17344e13b871b4fbe3.css","publicPath":"//127.0.0.1:3001/index-fb17344e13b871b4fbe3.css"},{"id":"./node_modules/webpack/hot sync ^\\.\\/log$","name":"./node_modules/webpack/hot sync ^\\.\\/log$","file":"index-fb17344e13b871b4fbe3.css","publicPath":"//127.0.0.1:3001/index-fb17344e13b871b4fbe3.css"},{"id":0,"name":null,"file":"index.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/index.77296b88a4e72b9b76e4.js"},{"id":2,"name":null,"file":"index.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/index.77296b88a4e72b9b76e4.js"},{"id":3,"name":null,"file":"index.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/index.77296b88a4e72b9b76e4.js"},{"id":"./node_modules/webpack/hot sync ^\\.\\/log$","name":"./node_modules/webpack/hot sync ^\\.\\/log$","file":"index.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/index.77296b88a4e72b9b76e4.js"},{"id":0,"name":null,"file":"index.5fb9599bde901e327362.hot-update.js","publicPath":"//127.0.0.1:3001/index.5fb9599bde901e327362.hot-update.js"},{"id":2,"name":null,"file":"index.5fb9599bde901e327362.hot-update.js","publicPath":"//127.0.0.1:3001/index.5fb9599bde901e327362.hot-update.js"},{"id":3,"name":null,"file":"index.5fb9599bde901e327362.hot-update.js","publicPath":"//127.0.0.1:3001/index.5fb9599bde901e327362.hot-update.js"},{"id":"./node_modules/webpack/hot sync ^\\.\\/log$","name":"./node_modules/webpack/hot sync ^\\.\\/log$","file":"index.5fb9599bde901e327362.hot-update.js","publicPath":"//127.0.0.1:3001/index.5fb9599bde901e327362.hot-update.js"},{"id":1,"name":null,"file":"4-e4e95be1eac511926f7e.css","publicPath":"//127.0.0.1:3001/4-e4e95be1eac511926f7e.css"},{"id":1,"name":null,"file":"4.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/4.77296b88a4e72b9b76e4.js"}],"./app":[{"id":"./src/client/app.jsx","name":"./src/client/app.jsx","file":"index-fb17344e13b871b4fbe3.css","publicPath":"//127.0.0.1:3001/index-fb17344e13b871b4fbe3.css"},{"id":"./src/client/app.jsx","name":"./src/client/app.jsx","file":"index.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/index.77296b88a4e72b9b76e4.js"},{"id":"./src/client/app.jsx","name":"./src/client/app.jsx","file":"index.5fb9599bde901e327362.hot-update.js","publicPath":"//127.0.0.1:3001/index.5fb9599bde901e327362.hot-update.js"}],"../component/provider":[{"id":"./src/component/provider.jsx","name":"./src/component/provider.jsx","file":"index-fb17344e13b871b4fbe3.css","publicPath":"//127.0.0.1:3001/index-fb17344e13b871b4fbe3.css"},{"id":"./src/component/provider.jsx","name":"./src/component/provider.jsx","file":"index.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/index.77296b88a4e72b9b76e4.js"},{"id":"./src/component/provider.jsx","name":"./src/component/provider.jsx","file":"index.5fb9599bde901e327362.hot-update.js","publicPath":"//127.0.0.1:3001/index.5fb9599bde901e327362.hot-update.js"}],"../redux/createStore":[{"id":"./src/redux/createStore.js","name":"./src/redux/createStore.js","file":"index-fb17344e13b871b4fbe3.css","publicPath":"//127.0.0.1:3001/index-fb17344e13b871b4fbe3.css"},{"id":"./src/redux/createStore.js","name":"./src/redux/createStore.js","file":"index.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/index.77296b88a4e72b9b76e4.js"},{"id":"./src/redux/createStore.js","name":"./src/redux/createStore.js","file":"index.5fb9599bde901e327362.hot-update.js","publicPath":"//127.0.0.1:3001/index.5fb9599bde901e327362.hot-update.js"}],"./src/client/index.jsx":[{"id":"./src/client/index.jsx","name":"./src/client/index.jsx","file":"index-fb17344e13b871b4fbe3.css","publicPath":"//127.0.0.1:3001/index-fb17344e13b871b4fbe3.css"},{"id":"./src/client/index.jsx","name":"./src/client/index.jsx","file":"index.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/index.77296b88a4e72b9b76e4.js"},{"id":"./src/client/index.jsx","name":"./src/client/index.jsx","file":"index.5fb9599bde901e327362.hot-update.js","publicPath":"//127.0.0.1:3001/index.5fb9599bde901e327362.hot-update.js"}],"./app.css":[{"id":"./src/client/app.css","name":"./src/client/app.css","file":"index-fb17344e13b871b4fbe3.css","publicPath":"//127.0.0.1:3001/index-fb17344e13b871b4fbe3.css"},{"id":"./src/client/app.css","name":"./src/client/app.css","file":"index.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/index.77296b88a4e72b9b76e4.js"},{"id":"./src/client/app.css","name":"./src/client/app.css","file":"index.5fb9599bde901e327362.hot-update.js","publicPath":"//127.0.0.1:3001/index.5fb9599bde901e327362.hot-update.js"}],"../routes":[{"id":"./src/routes/index.js","name":"./src/routes/index.js","file":"index-fb17344e13b871b4fbe3.css","publicPath":"//127.0.0.1:3001/index-fb17344e13b871b4fbe3.css"},{"id":"./src/routes/index.js","name":"./src/routes/index.js","file":"index.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/index.77296b88a4e72b9b76e4.js"},{"id":"./src/routes/index.js","name":"./src/routes/index.js","file":"index.5fb9599bde901e327362.hot-update.js","publicPath":"//127.0.0.1:3001/index.5fb9599bde901e327362.hot-update.js"}],"../client/main":[{"id":"./src/client/main.jsx","name":"./src/client/main.jsx","file":"0.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/0.77296b88a4e72b9b76e4.js"}],"../client/home":[{"id":"./src/client/home.jsx","name":"./src/client/home.jsx","file":"1.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/1.77296b88a4e72b9b76e4.js"}],"../component/head":[{"id":"./src/component/head.jsx","name":"./src/component/head.jsx","file":"1.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/1.77296b88a4e72b9b76e4.js"},{"id":"./src/component/head.jsx","name":"./src/component/head.jsx","file":"2.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/2.77296b88a4e72b9b76e4.js"}],"../client/about":[{"id":"./src/client/about.jsx","name":"./src/client/about.jsx","file":"2.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/2.77296b88a4e72b9b76e4.js"}],"../client/aboutDetail":[{"id":"./src/client/aboutDetail.jsx","name":"./src/client/aboutDetail.jsx","file":"3.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/3.77296b88a4e72b9b76e4.js"}],"../static/test.jpg":[{"id":"./src/static/test.jpg","name":"./src/static/test.jpg","file":"3.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/3.77296b88a4e72b9b76e4.js"}],"./head.css":[{"id":"./src/component/head.css","name":"./src/component/head.css","file":"4-e4e95be1eac511926f7e.css","publicPath":"//127.0.0.1:3001/4-e4e95be1eac511926f7e.css"},{"id":"./src/component/head.css","name":"./src/component/head.css","file":"4.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/4.77296b88a4e72b9b76e4.js"}],"ansi-html":[{"id":"./node_modules/ansi-html/index.js","name":"./node_modules/ansi-html/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"ansi-regex":[{"id":"./node_modules/ansi-regex/index.js","name":"./node_modules/ansi-regex/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"events":[{"id":"./node_modules/events/events.js","name":"./node_modules/events/events.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"fast-levenshtein":[{"id":"./node_modules/fast-levenshtein/levenshtein.js","name":"./node_modules/fast-levenshtein/levenshtein.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"fbjs/lib/EventListener":[{"id":"./node_modules/fbjs/lib/EventListener.js","name":"./node_modules/fbjs/lib/EventListener.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"fbjs/lib/ExecutionEnvironment":[{"id":"./node_modules/fbjs/lib/ExecutionEnvironment.js","name":"./node_modules/fbjs/lib/ExecutionEnvironment.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./camelize":[{"id":"./node_modules/fbjs/lib/camelize.js","name":"./node_modules/fbjs/lib/camelize.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"fbjs/lib/camelizeStyleName":[{"id":"./node_modules/fbjs/lib/camelizeStyleName.js","name":"./node_modules/fbjs/lib/camelizeStyleName.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"fbjs/lib/containsNode":[{"id":"./node_modules/fbjs/lib/containsNode.js","name":"./node_modules/fbjs/lib/containsNode.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"fbjs/lib/emptyFunction":[{"id":"./node_modules/fbjs/lib/emptyFunction.js","name":"./node_modules/fbjs/lib/emptyFunction.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"fbjs/lib/emptyObject":[{"id":"./node_modules/fbjs/lib/emptyObject.js","name":"./node_modules/fbjs/lib/emptyObject.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"fbjs/lib/focusNode":[{"id":"./node_modules/fbjs/lib/focusNode.js","name":"./node_modules/fbjs/lib/focusNode.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"fbjs/lib/getActiveElement":[{"id":"./node_modules/fbjs/lib/getActiveElement.js","name":"./node_modules/fbjs/lib/getActiveElement.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./hyphenate":[{"id":"./node_modules/fbjs/lib/hyphenate.js","name":"./node_modules/fbjs/lib/hyphenate.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"fbjs/lib/hyphenateStyleName":[{"id":"./node_modules/fbjs/lib/hyphenateStyleName.js","name":"./node_modules/fbjs/lib/hyphenateStyleName.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"fbjs/lib/invariant":[{"id":"./node_modules/fbjs/lib/invariant.js","name":"./node_modules/fbjs/lib/invariant.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./isNode":[{"id":"./node_modules/fbjs/lib/isNode.js","name":"./node_modules/fbjs/lib/isNode.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./isTextNode":[{"id":"./node_modules/fbjs/lib/isTextNode.js","name":"./node_modules/fbjs/lib/isTextNode.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"fbjs/lib/shallowEqual":[{"id":"./node_modules/fbjs/lib/shallowEqual.js","name":"./node_modules/fbjs/lib/shallowEqual.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"fbjs/lib/warning":[{"id":"./node_modules/fbjs/lib/warning.js","name":"./node_modules/fbjs/lib/warning.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./DOMUtils":[{"id":"./node_modules/history/DOMUtils.js","name":"./node_modules/history/DOMUtils.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"},{"id":"./node_modules/history/es/DOMUtils.js","name":"./node_modules/history/es/DOMUtils.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./LocationUtils":[{"id":"./node_modules/history/LocationUtils.js","name":"./node_modules/history/LocationUtils.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"},{"id":"./node_modules/history/es/LocationUtils.js","name":"./node_modules/history/es/LocationUtils.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./PathUtils":[{"id":"./node_modules/history/PathUtils.js","name":"./node_modules/history/PathUtils.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"},{"id":"./node_modules/history/es/PathUtils.js","name":"./node_modules/history/es/PathUtils.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"history/createBrowserHistory":[{"id":"./node_modules/history/createBrowserHistory.js","name":"./node_modules/history/createBrowserHistory.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"history/createHashHistory":[{"id":"./node_modules/history/createHashHistory.js","name":"./node_modules/history/createHashHistory.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"history/createMemoryHistory":[{"id":"./node_modules/history/createMemoryHistory.js","name":"./node_modules/history/createMemoryHistory.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./createTransitionManager":[{"id":"./node_modules/history/createTransitionManager.js","name":"./node_modules/history/createTransitionManager.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"},{"id":"./node_modules/history/es/createTransitionManager.js","name":"./node_modules/history/es/createTransitionManager.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./createBrowserHistory":[{"id":"./node_modules/history/es/createBrowserHistory.js","name":"./node_modules/history/es/createBrowserHistory.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./createHashHistory":[{"id":"./node_modules/history/es/createHashHistory.js","name":"./node_modules/history/es/createHashHistory.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./createMemoryHistory":[{"id":"./node_modules/history/es/createMemoryHistory.js","name":"./node_modules/history/es/createMemoryHistory.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"history":[{"id":"./node_modules/history/es/index.js","name":"./node_modules/history/es/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"hoist-non-react-statics":[{"id":"./node_modules/hoist-non-react-statics/index.js","name":"./node_modules/hoist-non-react-statics/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"},{"id":"./node_modules/react-hot-loader/node_modules/hoist-non-react-statics/index.js","name":"./node_modules/react-hot-loader/node_modules/hoist-non-react-statics/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"html-entities":[{"id":"./node_modules/html-entities/index.js","name":"./node_modules/html-entities/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./lib/html4-entities.js":[{"id":"./node_modules/html-entities/lib/html4-entities.js","name":"./node_modules/html-entities/lib/html4-entities.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./lib/html5-entities.js":[{"id":"./node_modules/html-entities/lib/html5-entities.js","name":"./node_modules/html-entities/lib/html5-entities.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./lib/xml-entities.js":[{"id":"./node_modules/html-entities/lib/xml-entities.js","name":"./node_modules/html-entities/lib/xml-entities.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"invariant":[{"id":"./node_modules/invariant/browser.js","name":"./node_modules/invariant/browser.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./_Symbol.js":[{"id":"./node_modules/lodash-es/_Symbol.js","name":"./node_modules/lodash-es/_Symbol.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./_baseGetTag.js":[{"id":"./node_modules/lodash-es/_baseGetTag.js","name":"./node_modules/lodash-es/_baseGetTag.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./_freeGlobal.js":[{"id":"./node_modules/lodash-es/_freeGlobal.js","name":"./node_modules/lodash-es/_freeGlobal.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./_getPrototype.js":[{"id":"./node_modules/lodash-es/_getPrototype.js","name":"./node_modules/lodash-es/_getPrototype.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./_getRawTag.js":[{"id":"./node_modules/lodash-es/_getRawTag.js","name":"./node_modules/lodash-es/_getRawTag.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./_objectToString.js":[{"id":"./node_modules/lodash-es/_objectToString.js","name":"./node_modules/lodash-es/_objectToString.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./_overArg.js":[{"id":"./node_modules/lodash-es/_overArg.js","name":"./node_modules/lodash-es/_overArg.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./_root.js":[{"id":"./node_modules/lodash-es/_root.js","name":"./node_modules/lodash-es/_root.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./isObjectLike.js":[{"id":"./node_modules/lodash-es/isObjectLike.js","name":"./node_modules/lodash-es/isObjectLike.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"lodash-es/isPlainObject":[{"id":"./node_modules/lodash-es/isPlainObject.js","name":"./node_modules/lodash-es/isPlainObject.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"loglevel":[{"id":"./node_modules/loglevel/lib/loglevel.js","name":"./node_modules/loglevel/lib/loglevel.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"object-assign":[{"id":"./node_modules/object-assign/index.js","name":"./node_modules/object-assign/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"path-to-regexp":[{"id":"./node_modules/path-to-regexp/index.js","name":"./node_modules/path-to-regexp/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"isarray":[{"id":"./node_modules/path-to-regexp/node_modules/isarray/index.js","name":"./node_modules/path-to-regexp/node_modules/isarray/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"prop-types/checkPropTypes":[{"id":"./node_modules/prop-types/checkPropTypes.js","name":"./node_modules/prop-types/checkPropTypes.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./factoryWithTypeCheckers":[{"id":"./node_modules/prop-types/factoryWithTypeCheckers.js","name":"./node_modules/prop-types/factoryWithTypeCheckers.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"},{"id":"./node_modules/react-hot-loader/node_modules/prop-types/factoryWithTypeCheckers.js","name":"./node_modules/react-hot-loader/node_modules/prop-types/factoryWithTypeCheckers.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"prop-types":[{"id":"./node_modules/prop-types/index.js","name":"./node_modules/prop-types/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"},{"id":"./node_modules/react-hot-loader/node_modules/prop-types/index.js","name":"./node_modules/react-hot-loader/node_modules/prop-types/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./lib/ReactPropTypesSecret":[{"id":"./node_modules/prop-types/lib/ReactPropTypesSecret.js","name":"./node_modules/prop-types/lib/ReactPropTypesSecret.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"},{"id":"./node_modules/react-hot-loader/node_modules/prop-types/lib/ReactPropTypesSecret.js","name":"./node_modules/react-hot-loader/node_modules/prop-types/lib/ReactPropTypesSecret.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"punycode":[{"id":"./node_modules/punycode/punycode.js","name":"./node_modules/punycode/punycode.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./decode":[{"id":"./node_modules/querystring-es3/decode.js","name":"./node_modules/querystring-es3/decode.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./encode":[{"id":"./node_modules/querystring-es3/encode.js","name":"./node_modules/querystring-es3/encode.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"querystring":[{"id":"./node_modules/querystring-es3/index.js","name":"./node_modules/querystring-es3/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./cjs/react-dom.development.js":[{"id":"./node_modules/react-dom/cjs/react-dom.development.js","name":"./node_modules/react-dom/cjs/react-dom.development.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"react-dom":[{"id":"./node_modules/react-dom/index.js","name":"./node_modules/react-dom/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./dist/react-hot-loader.development.js":[{"id":"./node_modules/react-hot-loader/dist/react-hot-loader.development.js","name":"./node_modules/react-hot-loader/dist/react-hot-loader.development.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"react-hot-loader":[{"id":"./node_modules/react-hot-loader/index.js","name":"./node_modules/react-hot-loader/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./checkPropTypes":[{"id":"./node_modules/react-hot-loader/node_modules/prop-types/checkPropTypes.js","name":"./node_modules/react-hot-loader/node_modules/prop-types/checkPropTypes.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"react-lifecycles-compat":[{"id":"./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js","name":"./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"react-loadable":[{"id":"./node_modules/react-loadable/lib/index.js","name":"./node_modules/react-loadable/lib/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./components/Provider":[{"id":"./node_modules/react-redux/es/components/Provider.js","name":"./node_modules/react-redux/es/components/Provider.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./components/connectAdvanced":[{"id":"./node_modules/react-redux/es/components/connectAdvanced.js","name":"./node_modules/react-redux/es/components/connectAdvanced.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./connect/connect":[{"id":"./node_modules/react-redux/es/connect/connect.js","name":"./node_modules/react-redux/es/connect/connect.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./mapDispatchToProps":[{"id":"./node_modules/react-redux/es/connect/mapDispatchToProps.js","name":"./node_modules/react-redux/es/connect/mapDispatchToProps.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./mapStateToProps":[{"id":"./node_modules/react-redux/es/connect/mapStateToProps.js","name":"./node_modules/react-redux/es/connect/mapStateToProps.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./mergeProps":[{"id":"./node_modules/react-redux/es/connect/mergeProps.js","name":"./node_modules/react-redux/es/connect/mergeProps.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./selectorFactory":[{"id":"./node_modules/react-redux/es/connect/selectorFactory.js","name":"./node_modules/react-redux/es/connect/selectorFactory.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./verifySubselectors":[{"id":"./node_modules/react-redux/es/connect/verifySubselectors.js","name":"./node_modules/react-redux/es/connect/verifySubselectors.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./wrapMapToProps":[{"id":"./node_modules/react-redux/es/connect/wrapMapToProps.js","name":"./node_modules/react-redux/es/connect/wrapMapToProps.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"react-redux":[{"id":"./node_modules/react-redux/es/index.js","name":"./node_modules/react-redux/es/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"../utils/PropTypes":[{"id":"./node_modules/react-redux/es/utils/PropTypes.js","name":"./node_modules/react-redux/es/utils/PropTypes.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"../utils/Subscription":[{"id":"./node_modules/react-redux/es/utils/Subscription.js","name":"./node_modules/react-redux/es/utils/Subscription.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"../utils/shallowEqual":[{"id":"./node_modules/react-redux/es/utils/shallowEqual.js","name":"./node_modules/react-redux/es/utils/shallowEqual.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"../utils/verifyPlainObject":[{"id":"./node_modules/react-redux/es/utils/verifyPlainObject.js","name":"./node_modules/react-redux/es/utils/verifyPlainObject.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"../utils/warning":[{"id":"./node_modules/react-redux/es/utils/warning.js","name":"./node_modules/react-redux/es/utils/warning.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"react-router-config":[{"id":"./node_modules/react-router-config/es/index.js","name":"./node_modules/react-router-config/es/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./matchRoutes":[{"id":"./node_modules/react-router-config/es/matchRoutes.js","name":"./node_modules/react-router-config/es/matchRoutes.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./renderRoutes":[{"id":"./node_modules/react-router-config/es/renderRoutes.js","name":"./node_modules/react-router-config/es/renderRoutes.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./BrowserRouter":[{"id":"./node_modules/react-router-dom/es/BrowserRouter.js","name":"./node_modules/react-router-dom/es/BrowserRouter.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./HashRouter":[{"id":"./node_modules/react-router-dom/es/HashRouter.js","name":"./node_modules/react-router-dom/es/HashRouter.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./Link":[{"id":"./node_modules/react-router-dom/es/Link.js","name":"./node_modules/react-router-dom/es/Link.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./MemoryRouter":[{"id":"./node_modules/react-router-dom/es/MemoryRouter.js","name":"./node_modules/react-router-dom/es/MemoryRouter.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./NavLink":[{"id":"./node_modules/react-router-dom/es/NavLink.js","name":"./node_modules/react-router-dom/es/NavLink.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./Prompt":[{"id":"./node_modules/react-router-dom/es/Prompt.js","name":"./node_modules/react-router-dom/es/Prompt.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./Redirect":[{"id":"./node_modules/react-router-dom/es/Redirect.js","name":"./node_modules/react-router-dom/es/Redirect.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./Route":[{"id":"./node_modules/react-router-dom/es/Route.js","name":"./node_modules/react-router-dom/es/Route.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./Router":[{"id":"./node_modules/react-router-dom/es/Router.js","name":"./node_modules/react-router-dom/es/Router.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./StaticRouter":[{"id":"./node_modules/react-router-dom/es/StaticRouter.js","name":"./node_modules/react-router-dom/es/StaticRouter.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./Switch":[{"id":"./node_modules/react-router-dom/es/Switch.js","name":"./node_modules/react-router-dom/es/Switch.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"react-router-dom":[{"id":"./node_modules/react-router-dom/es/index.js","name":"./node_modules/react-router-dom/es/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./matchPath":[{"id":"./node_modules/react-router-dom/es/matchPath.js","name":"./node_modules/react-router-dom/es/matchPath.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./withRouter":[{"id":"./node_modules/react-router-dom/es/withRouter.js","name":"./node_modules/react-router-dom/es/withRouter.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./ConnectedRouter":[{"id":"./node_modules/react-router-redux/es/ConnectedRouter.js","name":"./node_modules/react-router-redux/es/ConnectedRouter.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./actions":[{"id":"./node_modules/react-router-redux/es/actions.js","name":"./node_modules/react-router-redux/es/actions.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"react-router-redux":[{"id":"./node_modules/react-router-redux/es/index.js","name":"./node_modules/react-router-redux/es/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./middleware":[{"id":"./node_modules/react-router-redux/es/middleware.js","name":"./node_modules/react-router-redux/es/middleware.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./reducer":[{"id":"./node_modules/react-router-redux/es/reducer.js","name":"./node_modules/react-router-redux/es/reducer.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./selectors":[{"id":"./node_modules/react-router-redux/es/selectors.js","name":"./node_modules/react-router-redux/es/selectors.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"react-router/Route":[{"id":"./node_modules/react-router/Route.js","name":"./node_modules/react-router/Route.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"react-router/Router":[{"id":"./node_modules/react-router/Router.js","name":"./node_modules/react-router/Router.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"react-router/Switch":[{"id":"./node_modules/react-router/Switch.js","name":"./node_modules/react-router/Switch.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"react-router/es/MemoryRouter":[{"id":"./node_modules/react-router/es/MemoryRouter.js","name":"./node_modules/react-router/es/MemoryRouter.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"react-router/es/Prompt":[{"id":"./node_modules/react-router/es/Prompt.js","name":"./node_modules/react-router/es/Prompt.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"react-router/es/Redirect":[{"id":"./node_modules/react-router/es/Redirect.js","name":"./node_modules/react-router/es/Redirect.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"react-router/es/Route":[{"id":"./node_modules/react-router/es/Route.js","name":"./node_modules/react-router/es/Route.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"react-router/es/Router":[{"id":"./node_modules/react-router/es/Router.js","name":"./node_modules/react-router/es/Router.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"react-router/es/StaticRouter":[{"id":"./node_modules/react-router/es/StaticRouter.js","name":"./node_modules/react-router/es/StaticRouter.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"react-router/es/Switch":[{"id":"./node_modules/react-router/es/Switch.js","name":"./node_modules/react-router/es/Switch.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"react-router":[{"id":"./node_modules/react-router/es/index.js","name":"./node_modules/react-router/es/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"react-router/es/matchPath":[{"id":"./node_modules/react-router/es/matchPath.js","name":"./node_modules/react-router/es/matchPath.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"react-router/es/withRouter":[{"id":"./node_modules/react-router/es/withRouter.js","name":"./node_modules/react-router/es/withRouter.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"react-router/matchPath":[{"id":"./node_modules/react-router/matchPath.js","name":"./node_modules/react-router/matchPath.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./cjs/react.development.js":[{"id":"./node_modules/react/cjs/react.development.js","name":"./node_modules/react/cjs/react.development.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"react":[{"id":"./node_modules/react/index.js","name":"./node_modules/react/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./applyMiddleware":[{"id":"./node_modules/redux/es/applyMiddleware.js","name":"./node_modules/redux/es/applyMiddleware.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./bindActionCreators":[{"id":"./node_modules/redux/es/bindActionCreators.js","name":"./node_modules/redux/es/bindActionCreators.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./combineReducers":[{"id":"./node_modules/redux/es/combineReducers.js","name":"./node_modules/redux/es/combineReducers.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./compose":[{"id":"./node_modules/redux/es/compose.js","name":"./node_modules/redux/es/compose.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./createStore":[{"id":"./node_modules/redux/es/createStore.js","name":"./node_modules/redux/es/createStore.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"redux":[{"id":"./node_modules/redux/es/index.js","name":"./node_modules/redux/es/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./utils/warning":[{"id":"./node_modules/redux/es/utils/warning.js","name":"./node_modules/redux/es/utils/warning.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"resolve-pathname":[{"id":"./node_modules/resolve-pathname/index.js","name":"./node_modules/resolve-pathname/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"shallowequal":[{"id":"./node_modules/shallowequal/index.js","name":"./node_modules/shallowequal/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"sockjs-client/dist/sockjs":[{"id":"./node_modules/sockjs-client/dist/sockjs.js","name":"./node_modules/sockjs-client/dist/sockjs.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"strip-ansi":[{"id":"./node_modules/strip-ansi/index.js","name":"./node_modules/strip-ansi/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"symbol-observable":[{"id":"./node_modules/symbol-observable/es/index.js","name":"./node_modules/symbol-observable/es/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./ponyfill.js":[{"id":"./node_modules/symbol-observable/es/ponyfill.js","name":"./node_modules/symbol-observable/es/ponyfill.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"url":[{"id":"./node_modules/url/url.js","name":"./node_modules/url/url.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./util":[{"id":"./node_modules/url/util.js","name":"./node_modules/url/util.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"value-equal":[{"id":"./node_modules/value-equal/index.js","name":"./node_modules/value-equal/index.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"warning":[{"id":"./node_modules/warning/browser.js","name":"./node_modules/warning/browser.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"D:\\zhanghaiyang\\works\\github\\react-koa2-typescript-isomorphic\\node_modules\\webpack-dev-server\\client\\index.js?http://localhost:3001":[{"id":"./node_modules/webpack-dev-server/client/index.js?http://localhost:3001","name":"./node_modules/webpack-dev-server/client/index.js?http://localhost:3001","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./overlay":[{"id":"./node_modules/webpack-dev-server/client/overlay.js","name":"./node_modules/webpack-dev-server/client/overlay.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./socket":[{"id":"./node_modules/webpack-dev-server/client/socket.js","name":"./node_modules/webpack-dev-server/client/socket.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"!!webpack amd define":[{"id":"./node_modules/webpack/buildin/amd-define.js","name":"./node_modules/webpack/buildin/amd-define.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"!!webpack amd options":[{"id":"./node_modules/webpack/buildin/amd-options.js","name":"./node_modules/webpack/buildin/amd-options.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./../webpack/buildin/global.js":[{"id":"./node_modules/webpack/buildin/global.js","name":"./node_modules/webpack/buildin/global.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./../../webpack/buildin/harmony-module.js":[{"id":"./node_modules/webpack/buildin/harmony-module.js","name":"./node_modules/webpack/buildin/harmony-module.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./../../node_modules/webpack/buildin/module.js":[{"id":"./node_modules/webpack/buildin/module.js","name":"./node_modules/webpack/buildin/module.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"webpack/hot/dev-server":[{"id":"./node_modules/webpack/hot/dev-server.js","name":"./node_modules/webpack/hot/dev-server.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./emitter":[{"id":"./node_modules/webpack/hot/emitter.js","name":"./node_modules/webpack/hot/emitter.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./log-apply-result":[{"id":"./node_modules/webpack/hot/log-apply-result.js","name":"./node_modules/webpack/hot/log-apply-result.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}],"./log":[{"id":"./node_modules/webpack/hot/log.js","name":"./node_modules/webpack/hot/log.js","file":"vendors.77296b88a4e72b9b76e4.js","publicPath":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"}]};

/***/ }),

/***/ "./dist/webpack-chunks.json":
/*!**********************************!*\
  !*** ./dist/webpack-chunks.json ***!
  \**********************************/
/*! exports provided: javascript, styles, default */
/***/ (function(module) {

module.exports = {"javascript":{"index":"//127.0.0.1:3001/index.77296b88a4e72b9b76e4.js","manifest":"//127.0.0.1:3001/manifest.77296b88a4e72b9b76e4.js","vendors":"//127.0.0.1:3001/vendors.77296b88a4e72b9b76e4.js"},"styles":{"index":"//127.0.0.1:3001/index-fb17344e13b871b4fbe3.css"}};

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/client/about.css":
/*!******************************!*\
  !*** ./src/client/about.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/client/about.jsx":
/*!******************************!*\
  !*** ./src/client/about.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(/*! ../component/head */ "./src/component/head.jsx");

var _head2 = _interopRequireDefault(_head);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactRouterConfig = __webpack_require__(/*! react-router-config */ "react-router-config");

__webpack_require__(/*! ./about.css */ "./src/client/about.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

    enterModule && enterModule(module);
})();

var _default = function _default(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_head2.default, null),
        'about',
        _react2.default.createElement(
            'div',
            { className: 'about' },
            _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/about/111/detail' },
                'about/:id/detail'
            )
        ),
        (0, _reactRouterConfig.renderRoutes)(props.route.routes)
    );
};

exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, 'default', 'D:/zhanghaiyang/works/github/react-koa2-typescript-isomorphic/src/client/about.jsx');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/client/aboutDetail.jsx":
/*!************************************!*\
  !*** ./src/client/aboutDetail.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _test = __webpack_require__(/*! ../static/test.jpg */ "./src/static/test.jpg");

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

    enterModule && enterModule(module);
})();

var _default = function _default() {
    return _react2.default.createElement(
        'div',
        null,
        'aboutDetail',
        _react2.default.createElement('img', { src: _test2.default, alt: 'x' })
    );
};

exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, 'default', 'D:/zhanghaiyang/works/github/react-koa2-typescript-isomorphic/src/client/aboutDetail.jsx');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/client/home.jsx":
/*!*****************************!*\
  !*** ./src/client/home.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(/*! ../component/head */ "./src/component/head.jsx");

var _head2 = _interopRequireDefault(_head);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _reactRouterConfig = __webpack_require__(/*! react-router-config */ "react-router-config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

    enterModule && enterModule(module);
})();

var _default = function _default(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_head2.default, null),
        'home'
    );
};

exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, 'default', 'D:/zhanghaiyang/works/github/react-koa2-typescript-isomorphic/src/client/home.jsx');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/client/main.jsx":
/*!*****************************!*\
  !*** ./src/client/main.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(/*! react-router-config */ "react-router-config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

    enterModule && enterModule(module);
})();

var _default = function _default(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        'div',
        null,
        'main',
        (0, _reactRouterConfig.renderRoutes)(route.routes)
    );
};

exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, 'default', 'D:/zhanghaiyang/works/github/react-koa2-typescript-isomorphic/src/client/main.jsx');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/component/Html.jsx":
/*!********************************!*\
  !*** ./src/component/Html.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _config = __webpack_require__(/*! ../../config */ "./config/index.js");

var _config2 = _interopRequireDefault(_config);

var _webpackChunks = __webpack_require__(/*! ../../dist/webpack-chunks.json */ "./dist/webpack-chunks.json");

var _webpackChunks2 = _interopRequireDefault(_webpackChunks);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

    enterModule && enterModule(module);
})();

var assetsPath = _config2.default.assetsPath;


console.log(assetsPath);

var _default = function _default(_ref) {
    var bundles = _ref.bundles,
        content = _ref.content,
        assets = _ref.assets;

    var style = [];
    if (_webpackChunks2.default && _webpackChunks2.default.styles) {
        for (var key in _webpackChunks2.default.styles) {
            var href = '' + _webpackChunks2.default.styles[key];
            style.push(_react2.default.createElement('link', {
                href: href,
                key: key,
                media: 'screen, projection',
                rel: 'stylesheet',
                type: 'text/css',
                charSet: 'UTF-8'
            }));
        }
    }

    return _react2.default.createElement(
        'html',
        null,
        _react2.default.createElement(
            'head',
            null,
            style
        ),
        _react2.default.createElement(
            'body',
            null,
            _react2.default.createElement('div', { id: 'root', dangerouslySetInnerHTML: { __html: content } }),
            _webpackChunks2.default.javascript.manifest && _react2.default.createElement('script', { src: '' + _webpackChunks2.default.javascript.manifest }),
            _webpackChunks2.default.javascript.vendors && _react2.default.createElement('script', { src: '' + _webpackChunks2.default.javascript.vendors }),
            _webpackChunks2.default.javascript.index && _react2.default.createElement('script', { src: '' + _webpackChunks2.default.javascript.index }),
            bundles && bundles.map(function (value) {
                return value && _react2.default.createElement('script', { src: assetsPath + '/' + value.file });
            })
        )
    );
};

exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(assetsPath, 'assetsPath', 'D:/zhanghaiyang/works/github/react-koa2-typescript-isomorphic/src/component/Html.jsx');
    reactHotLoader.register(_default, 'default', 'D:/zhanghaiyang/works/github/react-koa2-typescript-isomorphic/src/component/Html.jsx');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/component/head.css":
/*!********************************!*\
  !*** ./src/component/head.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/component/head.jsx":
/*!********************************!*\
  !*** ./src/component/head.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./head.css */ "./src/component/head.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

    enterModule && enterModule(module);
})();

var _default = function _default(props) {
    return _react2.default.createElement(
        'div',
        { className: 'head' },
        'head'
    );
};

exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, 'default', 'D:/zhanghaiyang/works/github/react-koa2-typescript-isomorphic/src/component/head.jsx');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/component/provider.jsx":
/*!************************************!*\
  !*** ./src/component/provider.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

var _default = _reactRedux.Provider;
exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', 'D:/zhanghaiyang/works/github/react-koa2-typescript-isomorphic/src/component/provider.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/redux/createStore.js":
/*!**********************************!*\
  !*** ./src/redux/createStore.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createBrowserHistory = __webpack_require__(/*! history/createBrowserHistory */ "history/createBrowserHistory");

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "react-router-redux");

var _redux = __webpack_require__(/*! redux */ "redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

    enterModule && enterModule(module);
})();

var _default = function _default(_ref) {
    var history = _ref.history;

    var middleware = (0, _reactRouterRedux.routerMiddleware)(history);
    var store = (0, _redux.createStore)((0, _redux.combineReducers)({
        router: _reactRouterRedux.routerReducer
    }), (0, _redux.applyMiddleware)(middleware));
    return store;
};

exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, 'default', 'D:/zhanghaiyang/works/github/react-koa2-typescript-isomorphic/src/redux/createStore.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactLoadable = __webpack_require__(/*! react-loadable */ "react-loadable");

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

    enterModule && enterModule(module);
})();

var loading = function loading(_ref) {
    var error = _ref.error,
        pastDelay = _ref.pastDelay,
        retry = _ref.retry;

    if (error) {
        return _react2.default.createElement(
            'div',
            null,
            'Error! ',
            _react2.default.createElement(
                'button',
                { onClick: retry },
                'Retry'
            )
        );
    } else if (pastDelay) {
        return _react2.default.createElement(
            'div',
            null,
            'Loading...'
        );
    } else {
        return null;
    }
    return _react2.default.createElement(
        'div',
        null,
        'loading'
    );
};
// import Main from '../client/main';
// import Home from '../client/home';
// import home from '../client/home';
var Main = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.resolve(/*! import() */).then(function() { var module = __webpack_require__(/*! ../client/main */ "./src/client/main.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
    },
    modules: ['../client/main'],
    webpack: function webpack() {
        return [/*require.resolve*/(/*! ../client/main */ "./src/client/main.jsx")];
    },
    loading: loading
});
var Home = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.resolve(/*! import() */).then(function() { var module = __webpack_require__(/*! ../client/home */ "./src/client/home.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
    },
    modules: ['../client/home'],
    webpack: function webpack() {
        return [/*require.resolve*/(/*! ../client/home */ "./src/client/home.jsx")];
    },
    loading: loading
});

var About = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.resolve(/*! import() */).then(function() { var module = __webpack_require__(/*! ../client/about */ "./src/client/about.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
    },
    modules: ['../client/about'],
    webpack: function webpack() {
        return [/*require.resolve*/(/*! ../client/about */ "./src/client/about.jsx")];
    },
    loading: loading
});

var AboutDetail = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.resolve(/*! import() */).then(function() { var module = __webpack_require__(/*! ../client/aboutDetail */ "./src/client/aboutDetail.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
    },
    modules: ['../client/aboutDetail'],
    webpack: function webpack() {
        return [/*require.resolve*/(/*! ../client/aboutDetail */ "./src/client/aboutDetail.jsx")];
    },
    loading: loading
});

var routes = [{
    component: Main,
    routes: [{
        path: '/',
        component: Home,
        loadData: function loadData() {
            return 1;
        },
        exact: true
    }, {
        path: '/about',
        component: About,
        routes: [{
            path: '/about/:id/detail',
            component: AboutDetail
        }]
    }]
}, {
    path: '/x',
    component: Home
}];

var _default = routes;
exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(loading, 'loading', 'D:/zhanghaiyang/works/github/react-koa2-typescript-isomorphic/src/routes/index.js');
    reactHotLoader.register(Main, 'Main', 'D:/zhanghaiyang/works/github/react-koa2-typescript-isomorphic/src/routes/index.js');
    reactHotLoader.register(Home, 'Home', 'D:/zhanghaiyang/works/github/react-koa2-typescript-isomorphic/src/routes/index.js');
    reactHotLoader.register(About, 'About', 'D:/zhanghaiyang/works/github/react-koa2-typescript-isomorphic/src/routes/index.js');
    reactHotLoader.register(AboutDetail, 'AboutDetail', 'D:/zhanghaiyang/works/github/react-koa2-typescript-isomorphic/src/routes/index.js');
    reactHotLoader.register(routes, 'routes', 'D:/zhanghaiyang/works/github/react-koa2-typescript-isomorphic/src/routes/index.js');
    reactHotLoader.register(_default, 'default', 'D:/zhanghaiyang/works/github/react-koa2-typescript-isomorphic/src/routes/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _koa = __webpack_require__(/*! koa */ "koa");

var _koa2 = _interopRequireDefault(_koa);

var _koaViews = __webpack_require__(/*! koa-views */ "koa-views");

var _koaViews2 = _interopRequireDefault(_koaViews);

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");

var _server2 = _interopRequireDefault(_server);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");

var _routes = __webpack_require__(/*! ./routes */ "./src/server/routes/index.ts");

var _routes2 = _interopRequireDefault(_routes);

var _reactRouterConfig = __webpack_require__(/*! react-router-config */ "react-router-config");

var _asyncMatchRoutes2 = __webpack_require__(/*! ../util/asyncMatchRoutes */ "./src/util/asyncMatchRoutes.js");

var _asyncMatchRoutes3 = _interopRequireDefault(_asyncMatchRoutes2);

var _routes3 = __webpack_require__(/*! ../routes */ "./src/routes/index.js");

var _routes4 = _interopRequireDefault(_routes3);

var _createStore = __webpack_require__(/*! ../redux/createStore */ "./src/redux/createStore.js");

var _createStore2 = _interopRequireDefault(_createStore);

var _provider = __webpack_require__(/*! ../component/provider */ "./src/component/provider.jsx");

var _provider2 = _interopRequireDefault(_provider);

var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ "react-router-redux");

var _createMemoryHistory = __webpack_require__(/*! history/createMemoryHistory */ "history/createMemoryHistory");

var _createMemoryHistory2 = _interopRequireDefault(_createMemoryHistory);

var _reactLoadable = __webpack_require__(/*! react-loadable */ "react-loadable");

var _reactLoadable2 = _interopRequireDefault(_reactLoadable);

var _webpack = __webpack_require__(/*! react-loadable/webpack */ "react-loadable/webpack");

var _reactLoadable3 = __webpack_require__(/*! ../../dist/react-loadable.json */ "./dist/react-loadable.json");

var _reactLoadable4 = _interopRequireDefault(_reactLoadable3);

var _Html = __webpack_require__(/*! ../component/Html */ "./src/component/Html.jsx");

var _Html2 = _interopRequireDefault(_Html);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

    enterModule && enterModule(module);
})();

var _default = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var app;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        app = new _koa2.default();

                        app.use(function () {
                            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
                                var originalUrl, history, _asyncMatchRoutes, components, store, modules, component, content, bundles;

                                return _regenerator2.default.wrap(function _callee$(_context) {
                                    while (1) {
                                        switch (_context.prev = _context.next) {
                                            case 0:
                                                originalUrl = ctx.originalUrl;
                                                history = (0, _createMemoryHistory2.default)({ initialEntries: [originalUrl] });
                                                _asyncMatchRoutes = (0, _asyncMatchRoutes3.default)(_routes4.default, originalUrl), components = _asyncMatchRoutes.components;
                                                store = (0, _createStore2.default)({ history: history });
                                                modules = [];
                                                component = _react2.default.createElement(
                                                    _reactLoadable2.default.Capture,
                                                    { report: function report(moduleName) {
                                                            return modules.push(moduleName);
                                                        } },
                                                    _react2.default.createElement(
                                                        _provider2.default,
                                                        { store: store },
                                                        _react2.default.createElement(
                                                            _reactRouterRedux.ConnectedRouter,
                                                            { history: history },
                                                            _react2.default.createElement(
                                                                _reactRouterDom.StaticRouter,
                                                                { location: originalUrl },
                                                                (0, _reactRouterConfig.renderRoutes)(_routes4.default)
                                                            )
                                                        )
                                                    )
                                                );
                                                content = _server2.default.renderToString(component);
                                                bundles = (0, _webpack.getBundles)(_reactLoadable4.default, modules);

                                                console.log(bundles);
                                                ctx.body = _server2.default.renderToString(_react2.default.createElement(_Html2.default, { bundles: bundles, content: content }));

                                            case 10:
                                            case 'end':
                                                return _context.stop();
                                        }
                                    }
                                }, _callee, undefined);
                            }));

                            return function (_x) {
                                return _ref2.apply(this, arguments);
                            };
                        }());
                        _context2.next = 4;
                        return _reactLoadable2.default.preloadAll();

                    case 4:
                        app.listen(3000, function () {
                            console.log('Running on http://localhost:3000/');
                        });

                    case 5:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function _default() {
        return _ref.apply(this, arguments);
    };
}();

exports.default = _default;
;

(function () {
    var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

    var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

    if (!reactHotLoader) {
        return;
    }

    reactHotLoader.register(_default, 'default', 'D:/zhanghaiyang/works/github/react-koa2-typescript-isomorphic/src/server/index.js');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/server/routes lazy recursive ^\\.\\/.*$":
/*!**********************************************************!*\
  !*** ./src/server/routes lazy ^\.\/.*$ namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./": [
		"./src/server/routes/index.ts"
	],
	"./index": [
		"./src/server/routes/index.ts"
	],
	"./index.ts": [
		"./src/server/routes/index.ts"
	],
	"./user": [
		"./src/server/routes/user.ts",
		"server"
	],
	"./user.ts": [
		"./src/server/routes/user.ts",
		"server"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/server/routes lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_2__);



const router = new koa_router__WEBPACK_IMPORTED_MODULE_2__({prefix: '/api'});

fs__WEBPACK_IMPORTED_MODULE_0__["readdirSync"](__dirname)
    .filter(filename => filename !== path__WEBPACK_IMPORTED_MODULE_1__["basename"](__filename))
    .forEach(async (filename) => {
        let subRouter = await __webpack_require__("./src/server/routes lazy recursive ^\\.\\/.*$")(`./${filename}`);
        router.use(subRouter.default.routes(), subRouter.default.allowedMethods())
    });

/* harmony default export */ __webpack_exports__["default"] = (router);



/***/ }),

/***/ "./src/server/routes/user.ts":
/*!***********************************!*\
  !*** ./src/server/routes/user.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa-router */ "koa-router");
/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_0__);

const router = new koa_router__WEBPACK_IMPORTED_MODULE_0__({prefix: '/user'});

router.get('/getUserInfo', async (ctx) => {
    ctx.body = {
        name: 'xxxx',
    }
})
console.log(router.allowedMethods)
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./src/static/test.jpg":
/*!*****************************!*\
  !*** ./src/static/test.jpg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e4ba37e756254d56c4c1fd8d8184ab4d.jpg";

/***/ }),

/***/ "./src/util/asyncMatchRoutes.js":
/*!**************************************!*\
  !*** ./src/util/asyncMatchRoutes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(/*! babel-runtime/helpers/extends */ "babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = __webpack_require__(/*! babel-runtime/regenerator */ "babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = __webpack_require__(/*! babel-runtime/helpers/toConsumableArray */ "babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _asyncToGenerator2 = __webpack_require__(/*! babel-runtime/helpers/asyncToGenerator */ "babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _reactRouterConfig = __webpack_require__(/*! react-router-config */ "react-router-config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

  enterModule && enterModule(module);
})();

function getComponents(matchComponentsArray) {
  var _this = this;

  return matchComponentsArray.map(function (matchComponent) {
    return matchComponent.route.component;
  }).reduce(function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(result, component) {
      var res, ret;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!component.preload) {
                _context.next = 14;
                break;
              }

              _context.next = 3;
              return component.preload();

            case 3:
              res = _context.sent;
              _context.t0 = [];
              _context.t1 = _toConsumableArray3.default;
              _context.next = 8;
              return result;

            case 8:
              _context.t2 = _context.sent;
              _context.t3 = (0, _context.t1)(_context.t2);
              _context.t4 = [component];
              _context.t5 = (0, _toConsumableArray3.default)([].concat(res));
              ret = _context.t0.concat.call(_context.t0, _context.t3, _context.t4, _context.t5);
              return _context.abrupt('return', ret);

            case 14:
              _context.t6 = [];
              _context.t7 = _toConsumableArray3.default;
              _context.next = 18;
              return result;

            case 18:
              _context.t8 = _context.sent;
              _context.t9 = (0, _context.t7)(_context.t8);
              _context.t10 = [component];
              return _context.abrupt('return', _context.t6.concat.call(_context.t6, _context.t9, _context.t10));

            case 22:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }(), []);
}

function getParams(match) {
  return match.reduce(function (result, component) {
    if (component.match && component.match.params) {
      return (0, _extends3.default)({}, result, component.match.params);
    }
    return result;
  }, {});
}

var _default = function () {
  var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(routes, pathname) {
    var match, params, components;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            match = (0, _reactRouterConfig.matchRoutes)(routes, pathname);
            params = getParams(match);
            _context2.next = 4;
            return getComponents(match);

          case 4:
            components = _context2.sent;
            return _context2.abrupt('return', { components: components, match: match, params: params });

          case 6:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function _default(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.default = _default;
;

(function () {
  var reactHotLoader = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").default;

  var leaveModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(getComponents, 'getComponents', 'D:/zhanghaiyang/works/github/react-koa2-typescript-isomorphic/src/util/asyncMatchRoutes.js');
  reactHotLoader.register(getParams, 'getParams', 'D:/zhanghaiyang/works/github/react-koa2-typescript-isomorphic/src/util/asyncMatchRoutes.js');
  reactHotLoader.register(_default, 'default', 'D:/zhanghaiyang/works/github/react-koa2-typescript-isomorphic/src/util/asyncMatchRoutes.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "babel-runtime/helpers/asyncToGenerator":
/*!*********************************************************!*\
  !*** external "babel-runtime/helpers/asyncToGenerator" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "babel-runtime/helpers/extends":
/*!************************************************!*\
  !*** external "babel-runtime/helpers/extends" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),

/***/ "babel-runtime/helpers/toConsumableArray":
/*!**********************************************************!*\
  !*** external "babel-runtime/helpers/toConsumableArray" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ }),

/***/ "babel-runtime/regenerator":
/*!********************************************!*\
  !*** external "babel-runtime/regenerator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "history/createBrowserHistory":
/*!***********************************************!*\
  !*** external "history/createBrowserHistory" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("history/createBrowserHistory");

/***/ }),

/***/ "history/createMemoryHistory":
/*!**********************************************!*\
  !*** external "history/createMemoryHistory" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("history/createMemoryHistory");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),

/***/ "koa-views":
/*!****************************!*\
  !*** external "koa-views" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("koa-views");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-hot-loader":
/*!***********************************!*\
  !*** external "react-hot-loader" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loadable");

/***/ }),

/***/ "react-loadable/webpack":
/*!*****************************************!*\
  !*** external "react-loadable/webpack" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loadable/webpack");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-redux":
/*!*************************************!*\
  !*** external "react-router-redux" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });
//# sourceMappingURL=server.js.map