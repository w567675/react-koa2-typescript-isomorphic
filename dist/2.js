exports.ids = [2];
exports.modules = {

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

    reactHotLoader.register(_default, 'default', 'E:/code/github/react-koa2-typescript-isomorphic/src/client/about.jsx');
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

    reactHotLoader.register(_default, 'default', 'E:/code/github/react-koa2-typescript-isomorphic/src/component/head.jsx');
    leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

};;
//# sourceMappingURL=2.js.map