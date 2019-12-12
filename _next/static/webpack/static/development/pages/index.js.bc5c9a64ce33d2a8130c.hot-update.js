webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/TitleSelector.js":
/*!*************************************!*\
  !*** ./components/TitleSelector.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/constants */ "./constants/constants.js");





var _jsxFileName = "/Users/swati/src/snowflake/components/TitleSelector.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;



var TitleSelector =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TitleSelector, _React$Component);

  function TitleSelector() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TitleSelector);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TitleSelector).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TitleSelector, [{
    key: "render",
    value: function render() {
      var _this = this;

      var titles = Object(_constants_constants__WEBPACK_IMPORTED_MODULE_7__["eligibleTitles"])(this.props.milestoneByTrack);
      return __jsx("select", {
        value: this.props.currentTitle,
        onChange: function onChange(e) {
          return _this.props.setTitleFn(e.target.value);
        },
        className: "jsx-2295457571",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2295457571",
        __self: this
      }, "select.jsx-2295457571{font-size:20px;line-height:20px;margin-bottom:20px;min-width:300px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvVGl0bGVTZWxlY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmtCLEFBRzBCLGVBQ0UsaUJBQ0UsbUJBQ0gsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvVGl0bGVTZWxlY3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGVsaWdpYmxlVGl0bGVzIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cydcbmltcG9ydCB0eXBlIHsgTWlsZXN0b25lTWFwIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cydcblxudHlwZSBQcm9wcyA9IHtcbiAgbWlsZXN0b25lQnlUcmFjazogTWlsZXN0b25lTWFwLFxuICBjdXJyZW50VGl0bGU6IHN0cmluZyxcbiAgc2V0VGl0bGVGbjogKHN0cmluZykgPT4gdm9pZFxufVxuXG5jbGFzcyBUaXRsZVNlbGVjdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0aXRsZXMgPSBlbGlnaWJsZVRpdGxlcyh0aGlzLnByb3BzLm1pbGVzdG9uZUJ5VHJhY2spXG4gICAgcmV0dXJuIDxzZWxlY3QgdmFsdWU9e3RoaXMucHJvcHMuY3VycmVudFRpdGxlfSBvbkNoYW5nZT17ZSA9PiB0aGlzLnByb3BzLnNldFRpdGxlRm4oZS50YXJnZXQudmFsdWUpfT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgc2VsZWN0IHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICBtaW4td2lkdGg6IDMwMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgICB7Lyoge3RpdGxlcy5tYXAodGl0bGUgPT4gKFxuICAgICAgICA8b3B0aW9uIGtleT17dGl0bGV9PlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9vcHRpb24+XG4gICAgICApKX0gKi99XG4gICAgPC9zZWxlY3Q+XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGl0bGVTZWxlY3RvclxuIl19 */\n/*@ sourceURL=/Users/swati/src/snowflake/components/TitleSelector.js */"));
    }
  }]);

  return TitleSelector;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TitleSelector);

/***/ })

})
//# sourceMappingURL=index.js.bc5c9a64ce33d2a8130c.hot-update.js.map