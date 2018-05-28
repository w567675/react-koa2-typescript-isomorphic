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

var _main = __webpack_require__(/*! ../client/main */ "./src/client/main.jsx");

var _main2 = _interopRequireDefault(_main);

var _home = __webpack_require__(/*! ../client/home */ "./src/client/home.jsx");

var _home2 = _interopRequireDefault(_home);

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

// const Main = Loadable({
//     loader: () => import('./main'),
//     loading,
// })
// const Home = Loadable({
//     loader: () => import('./home'),
//     loading,
// });


var About = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.resolve(/*! import() */).then(function() { var module = __webpack_require__(/*! ../client/about */ "./src/client/about.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
    },
    loading: loading
});

var AboutDetail = (0, _reactLoadable2.default)({
    loader: function loader() {
        return Promise.resolve(/*! import() */).then(function() { var module = __webpack_require__(/*! ../client/aboutDetail */ "./src/client/aboutDetail.jsx"); return typeof module === "object" && module && module.__esModule ? module : Object.assign({/* fake namespace object */}, typeof module === "object" && module, { "default": module }); });
    },
    loading: loading
});

var routes = [{
    component: _main2.default,
    routes: [{
        path: '/',
        component: _home2.default,
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
    component: _home2.default
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
    var enterModule = __webpack_require__(/*! react-hot-loader */ "react-hot-loader").enterModule;

    enterModule && enterModule(module);
})();

var _default = function _default() {
    var app = new _koa2.default();
    app.use(function () {
        var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(ctx) {
            var originalUrl, history, _asyncMatchRoutes, components, store, modules, component, content;

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

                            console.log(modules);
                            ctx.body = content;

                        case 9:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x) {
            return _ref.apply(this, arguments);
        };
    }());
    app.listen(3000, function () {
        console.info('server is start port: 3000');
    });
};

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