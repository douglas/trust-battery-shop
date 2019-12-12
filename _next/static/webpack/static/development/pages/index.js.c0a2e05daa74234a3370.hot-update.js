webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/LevelThermometer.js":
/*!****************************************!*\
  !*** ./components/LevelThermometer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/constants */ "./constants/constants.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);






var _jsxFileName = "/Users/swati/src/snowflake/components/LevelThermometer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;



var margins = {
  top: 30,
  right: 20,
  bottom: 30,
  left: 10
};
var height = 150;
var width = 550;

var LevelThermometer =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(LevelThermometer, _React$Component);

  function LevelThermometer(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, LevelThermometer);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(LevelThermometer).call(this, props));
    _this.pointScale = d3__WEBPACK_IMPORTED_MODULE_7__["scaleLinear"]().domain([0, 135]).rangeRound([0, width - margins.left - margins.right]);
    _this.topAxisFn = d3__WEBPACK_IMPORTED_MODULE_7__["axisTop"]().scale(_this.pointScale).tickValues(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_constants_constants__WEBPACK_IMPORTED_MODULE_8__["pointsToLevels"])).tickFormat(function (points) {
      return _constants_constants__WEBPACK_IMPORTED_MODULE_8__["pointsToLevels"][points];
    });
    _this.bottomAxisFn = d3__WEBPACK_IMPORTED_MODULE_7__["axisBottom"]().scale(_this.pointScale).tickValues(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_constants_constants__WEBPACK_IMPORTED_MODULE_8__["pointsToLevels"]));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(LevelThermometer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      d3__WEBPACK_IMPORTED_MODULE_7__["select"](this.topAxis).call(this.topAxisFn).selectAll('text').attr("y", 0).attr("x", -25).attr("transform", "rotate(90)").attr("dy", ".35em").style('font-size', '12px').style('text-anchor', 'start');
      d3__WEBPACK_IMPORTED_MODULE_7__["select"](this.bottomAxis).call(this.bottomAxisFn).selectAll('text').attr("y", 0).attr("x", 10).attr("transform", "rotate(90)").attr("dy", ".35em").style('font-size', '12px').style('text-anchor', 'start');
    }
  }, {
    key: "rightRoundedRect",
    value: function rightRoundedRect(x, y, width, height, radius) {
      return "M" + x + "," + y + "h" + (width - radius) + "a" + radius + "," + radius + " 0 0 1 " + radius + "," + radius + "v" + (height - 2 * radius) + "a" + radius + "," + radius + " 0 0 1 " + -radius + "," + radius + "h" + (radius - width) + "z";
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var categoryPoints = Object(_constants_constants__WEBPACK_IMPORTED_MODULE_8__["categoryPointsFromMilestoneMap"])(this.props.milestoneByTrack);
      var lastCategoryIndex = 0;
      categoryPoints.forEach(function (categoryPoint, i) {
        if (categoryPoint.points) lastCategoryIndex = i;
      });
      var cumulativePoints = 0;
      return __jsx("figure", {
        className: "jsx-2708482886",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
        id: "2708482886",
        __self: this
      }, "figure.jsx-2708482886{margin:0 0 0 -10px;}svg.jsx-2708482886{width:".concat(width, "px;height:").concat(height + 10, "px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvTGV2ZWxUaGVybW9tZXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRm9CLEFBR2dDLEFBR2tCLG1CQUZ2QyxrQkFHd0Msc0NBQ3hDIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvTGV2ZWxUaGVybW9tZXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgcG9pbnRzVG9MZXZlbHMsIGNhdGVnb3J5UG9pbnRzRnJvbU1pbGVzdG9uZU1hcCwgY2F0ZWdvcnlDb2xvclNjYWxlLCBjYXRlZ29yeUlkcyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IE1pbGVzdG9uZU1hcCB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuY29uc3QgbWFyZ2lucyA9IHtcbiAgdG9wOiAzMCxcbiAgcmlnaHQ6IDIwLFxuICBib3R0b206IDMwLFxuICBsZWZ0OiAxMFxufVxuY29uc3QgaGVpZ2h0ID0gMTUwXG5jb25zdCB3aWR0aCA9IDU1MFxuXG50eXBlIFByb3BzID0ge1xuICBtaWxlc3RvbmVCeVRyYWNrOiBNaWxlc3RvbmVNYXAsXG59XG5cbmNsYXNzIExldmVsVGhlcm1vbWV0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgcG9pbnRTY2FsZTogYW55XG4gIHRvcEF4aXNGbjogYW55XG4gIGJvdHRvbUF4aXNGbjogYW55XG4gIHRvcEF4aXM6ICpcbiAgYm90dG9tQXhpczogKlxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiAqKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnBvaW50U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKFswLCAxMzVdKVxuICAgICAgLnJhbmdlUm91bmQoWzAsIHdpZHRoIC0gbWFyZ2lucy5sZWZ0IC0gbWFyZ2lucy5yaWdodF0pO1xuXG4gICAgdGhpcy50b3BBeGlzRm4gPSBkMy5heGlzVG9wKClcbiAgICAgIC5zY2FsZSh0aGlzLnBvaW50U2NhbGUpXG4gICAgICAudGlja1ZhbHVlcyhPYmplY3Qua2V5cyhwb2ludHNUb0xldmVscykpXG4gICAgICAudGlja0Zvcm1hdChwb2ludHMgPT4gcG9pbnRzVG9MZXZlbHNbcG9pbnRzXSlcblxuICAgIHRoaXMuYm90dG9tQXhpc0ZuID0gZDMuYXhpc0JvdHRvbSgpXG4gICAgICAuc2NhbGUodGhpcy5wb2ludFNjYWxlKVxuICAgICAgLnRpY2tWYWx1ZXMoT2JqZWN0LmtleXMocG9pbnRzVG9MZXZlbHMpKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZDMuc2VsZWN0KHRoaXMudG9wQXhpcykuY2FsbCh0aGlzLnRvcEF4aXNGbilcbiAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgLmF0dHIoXCJ5XCIsIDApXG4gICAgICAuYXR0cihcInhcIiwgLTI1KVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoOTApXCIpXG4gICAgICAuYXR0cihcImR5XCIsIFwiLjM1ZW1cIilcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzEycHgnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpXG4gICAgZDMuc2VsZWN0KHRoaXMuYm90dG9tQXhpcykuY2FsbCh0aGlzLmJvdHRvbUF4aXNGbilcbiAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgLmF0dHIoXCJ5XCIsIDApXG4gICAgICAuYXR0cihcInhcIiwgMTApXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSg5MClcIilcbiAgICAgIC5hdHRyKFwiZHlcIiwgXCIuMzVlbVwiKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTJweCcpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcbiAgfVxuXG4gIHJpZ2h0Um91bmRlZFJlY3QoeDogKiwgeTogKiwgd2lkdGg6ICosIGhlaWdodDogKiwgcmFkaXVzOiAqKSB7XG4gICAgcmV0dXJuIFwiTVwiICsgeCArIFwiLFwiICsgeVxuICAgICAgICAgKyBcImhcIiArICh3aWR0aCAtIHJhZGl1cylcbiAgICAgICAgICsgXCJhXCIgKyByYWRpdXMgKyBcIixcIiArIHJhZGl1cyArIFwiIDAgMCAxIFwiICsgcmFkaXVzICsgXCIsXCIgKyByYWRpdXNcbiAgICAgICAgICsgXCJ2XCIgKyAoaGVpZ2h0IC0gMiAqIHJhZGl1cylcbiAgICAgICAgICsgXCJhXCIgKyByYWRpdXMgKyBcIixcIiArIHJhZGl1cyArIFwiIDAgMCAxIFwiICsgLXJhZGl1cyArIFwiLFwiICsgcmFkaXVzXG4gICAgICAgICArIFwiaFwiICsgKHJhZGl1cyAtIHdpZHRoKVxuICAgICAgICAgKyBcInpcIjtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNhdGVnb3J5UG9pbnRzID0gY2F0ZWdvcnlQb2ludHNGcm9tTWlsZXN0b25lTWFwKHRoaXMucHJvcHMubWlsZXN0b25lQnlUcmFjaylcbiAgICBsZXQgbGFzdENhdGVnb3J5SW5kZXggPSAwXG4gICAgY2F0ZWdvcnlQb2ludHMuZm9yRWFjaCgoY2F0ZWdvcnlQb2ludCwgaSkgPT4ge1xuICAgICAgaWYgKGNhdGVnb3J5UG9pbnQucG9pbnRzKSBsYXN0Q2F0ZWdvcnlJbmRleCA9IGlcbiAgICB9KVxuICAgIGxldCBjdW11bGF0aXZlUG9pbnRzID0gMFxuICAgIHJldHVybiAoXG4gICAgICA8ZmlndXJlPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZmlndXJlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgLTEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICB3aWR0aDogJHt3aWR0aH1weDtcbiAgICAgICAgICAgIGhlaWdodDogJHtoZWlnaHQgKyAxMH1weDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN2Zz5cbiAgICAgICAgICA8ZyB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHttYXJnaW5zLmxlZnR9LCR7bWFyZ2lucy50b3B9KWB9PlxuICAgICAgICAgICAge2NhdGVnb3J5UG9pbnRzLm1hcCgoY2F0ZWdvcnlQb2ludCwgaSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB4ID0gdGhpcy5wb2ludFNjYWxlKGN1bXVsYXRpdmVQb2ludHMpXG4gICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5wb2ludFNjYWxlKGN1bXVsYXRpdmVQb2ludHMgKyBjYXRlZ29yeVBvaW50LnBvaW50cykgLSB4XG4gICAgICAgICAgICAgIGN1bXVsYXRpdmVQb2ludHMgKz0gY2F0ZWdvcnlQb2ludC5wb2ludHNcbiAgICAgICAgICAgICAgcmV0dXJuIChpICE9IGxhc3RDYXRlZ29yeUluZGV4ID9cbiAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2NhdGVnb3J5UG9pbnQuY2F0ZWdvcnlJZH1cbiAgICAgICAgICAgICAgICAgICAgeD17eH1cbiAgICAgICAgICAgICAgICAgICAgeT17MH1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodCAtIG1hcmdpbnMudG9wIC0gbWFyZ2lucy5ib3R0b219XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZmlsbDogY2F0ZWdvcnlDb2xvclNjYWxlKGNhdGVnb3J5UG9pbnQuY2F0ZWdvcnlJZCksIGJvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCAjMDAwXCJ9fVxuICAgICAgICAgICAgICAgICAgICAvPiA6XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAga2V5PXtjYXRlZ29yeVBvaW50LmNhdGVnb3J5SWR9XG4gICAgICAgICAgICAgICAgICAgIGQ9e3RoaXMucmlnaHRSb3VuZGVkUmVjdCh4LCAwLCB3aWR0aCwgaGVpZ2h0IC0gbWFyZ2lucy50b3AgLSBtYXJnaW5zLmJvdHRvbSwgMyl9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZmlsbDogY2F0ZWdvcnlDb2xvclNjYWxlKGNhdGVnb3J5UG9pbnQuY2F0ZWdvcnlJZCl9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDxnIHJlZj17cmVmID0+IHRoaXMudG9wQXhpcyA9IHJlZn0gY2xhc3NOYW1lPVwidG9wLWF4aXNcIlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgwLCAtMilgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZyByZWY9e3JlZiA9PiB0aGlzLmJvdHRvbUF4aXMgPSByZWZ9IGNsYXNzTmFtZT1cImJvdHRvbS1heGlzXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoMCwke2hlaWdodCAtIG1hcmdpbnMudG9wIC0gbWFyZ2lucy5ib3R0b20gKyAxfSlgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvZmlndXJlPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMZXZlbFRoZXJtb21ldGVyXG4iXX0= */\n/*@ sourceURL=/Users/swati/src/snowflake/components/LevelThermometer.js */")), __jsx("svg", {
        className: "jsx-2708482886",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx("g", {
        transform: "translate(".concat(margins.left, ",").concat(margins.top, ")"),
        className: "jsx-2708482886",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, categoryPoints.map(function (categoryPoint, i) {
        var x = _this2.pointScale(cumulativePoints);

        var width = _this2.pointScale(cumulativePoints + categoryPoint.points) - x;
        cumulativePoints += categoryPoint.points;
        return i != lastCategoryIndex ? __jsx("rect", {
          key: categoryPoint.categoryId,
          x: x,
          y: 0,
          width: width,
          height: height - margins.top - margins.bottom,
          style: {
            fill: Object(_constants_constants__WEBPACK_IMPORTED_MODULE_8__["categoryColorScale"])(categoryPoint.categoryId),
            borderRight: "1px solid #000"
          },
          className: "jsx-2708482886",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 98
          },
          __self: this
        }) : __jsx("path", {
          key: categoryPoint.categoryId,
          d: _this2.rightRoundedRect(x, 0, width, height - margins.top - margins.bottom, 3),
          style: {
            fill: Object(_constants_constants__WEBPACK_IMPORTED_MODULE_8__["categoryColorScale"])(categoryPoint.categoryId)
          },
          className: "jsx-2708482886",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        });
      }), __jsx("g", {
        ref: function ref(_ref) {
          return _this2.topAxis = _ref;
        },
        transform: "translate(0, -2)",
        className: "jsx-2708482886" + " " + "top-axis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }), __jsx("g", {
        ref: function ref(_ref2) {
          return _this2.bottomAxis = _ref2;
        },
        transform: "translate(0,".concat(height - margins.top - margins.bottom + 1, ")"),
        className: "jsx-2708482886" + " " + "bottom-axis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }))));
    }
  }]);

  return LevelThermometer;
}(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LevelThermometer);

/***/ }),

/***/ "./components/NightingaleChart.js":
/*!****************************************!*\
  !*** ./components/NightingaleChart.js ***!
  \****************************************/
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
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/constants */ "./constants/constants.js");
/* harmony import */ var _constants_tracks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants/tracks */ "./constants/tracks.js");





var _jsxFileName = "/Users/swati/src/snowflake/components/NightingaleChart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var width = 400;
var arcMilestones = _constants_constants__WEBPACK_IMPORTED_MODULE_8__["scores"].slice(1); // we'll draw the '0' milestone with a circle, not an arc.

var NightingaleChart =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NightingaleChart, _React$Component);

  function NightingaleChart(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NightingaleChart);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NightingaleChart).call(this, props));
    _this.colorScale = d3__WEBPACK_IMPORTED_MODULE_7__["scaleSequential"](d3__WEBPACK_IMPORTED_MODULE_7__["interpolateWarm"]).domain([0, 5]);
    _this.radiusScale = d3__WEBPACK_IMPORTED_MODULE_7__["scaleBand"]().domain(arcMilestones).range([.15 * width, .45 * width]).paddingInner(0.1);
    _this.arcFn = d3__WEBPACK_IMPORTED_MODULE_7__["arc"]().innerRadius(function (milestone) {
      return _this.radiusScale(milestone);
    }).outerRadius(function (milestone) {
      return _this.radiusScale(milestone) + _this.radiusScale.bandwidth();
    }).startAngle(-Math.PI / _constants_tracks__WEBPACK_IMPORTED_MODULE_9__["trackIds"].length).endAngle(Math.PI / _constants_tracks__WEBPACK_IMPORTED_MODULE_9__["trackIds"].length).padAngle(Math.PI / 200).padRadius(.45 * width).cornerRadius(2);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NightingaleChart, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var currentMilestoneId = this.props.milestoneByTrack[this.props.focusedTrackId];
      return __jsx("figure", {
        className: "jsx-3023698355",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3023698355",
        __self: this
      }, "figure.jsx-3023698355{margin:0;}svg.jsx-3023698355{width:".concat(width, "px;height:").concat(width, "px;}.track-milestone.jsx-3023698355{fill:#eee;cursor:pointer;}.track-milestone-current.jsx-3023698355,.track-milestone.jsx-3023698355:hover{stroke:#000;stroke-width:4px;stroke-linejoin:round;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvTmlnaHRpbmdhbGVDaGFydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRG9CLEFBR3NCLEFBRzRCLEFBSTNCLEFBSUUsU0FWZCxDQU9pQixFQUlFLGFBSG5CLElBSXdCLFFBVGdCLGNBVXhDLHdCQVRBIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvTmlnaHRpbmdhbGVDaGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgc2NvcmVzLCBjYXRlZ29yeUNvbG9yU2NhbGUgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzJ1xuaW1wb3J0IHR5cGUgeyBNaWxlc3RvbmUsIE1pbGVzdG9uZU1hcCB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCB7IHRyYWNrSWRzLCB0cmFja3MgfSBmcm9tICcuLi9jb25zdGFudHMvdHJhY2tzJ1xuaW1wb3J0IHR5cGUgeyBUcmFja0lkIH0gZnJvbSAnLi4vY29uc3RhbnRzL3RyYWNrcydcblxuY29uc3Qgd2lkdGggPSA0MDBcbmNvbnN0IGFyY01pbGVzdG9uZXMgPSBzY29yZXMuc2xpY2UoMSkgLy8gd2UnbGwgZHJhdyB0aGUgJzAnIG1pbGVzdG9uZSB3aXRoIGEgY2lyY2xlLCBub3QgYW4gYXJjLlxuXG50eXBlIFByb3BzID0ge1xuICBtaWxlc3RvbmVCeVRyYWNrOiBNaWxlc3RvbmVNYXAsXG4gIGZvY3VzZWRUcmFja0lkOiBUcmFja0lkLFxuICBoYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZUZuOiAoVHJhY2tJZCwgTWlsZXN0b25lKSA9PiB2b2lkXG59XG5cbmNsYXNzIE5pZ2h0aW5nYWxlQ2hhcnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgY29sb3JTY2FsZTogYW55XG4gIHJhZGl1c1NjYWxlOiBhbnlcbiAgYXJjRm46IGFueVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiAqKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLmNvbG9yU2NhbGUgPSBkMy5zY2FsZVNlcXVlbnRpYWwoZDMuaW50ZXJwb2xhdGVXYXJtKVxuICAgICAgLmRvbWFpbihbMCwgNV0pXG5cbiAgICB0aGlzLnJhZGl1c1NjYWxlID0gZDMuc2NhbGVCYW5kKClcbiAgICAgIC5kb21haW4oYXJjTWlsZXN0b25lcylcbiAgICAgIC5yYW5nZShbLjE1ICogd2lkdGgsIC40NSAqIHdpZHRoXSlcbiAgICAgIC5wYWRkaW5nSW5uZXIoMC4xKVxuXG4gICAgdGhpcy5hcmNGbiA9IGQzLmFyYygpXG4gICAgICAuaW5uZXJSYWRpdXMobWlsZXN0b25lID0+IHRoaXMucmFkaXVzU2NhbGUobWlsZXN0b25lKSlcbiAgICAgIC5vdXRlclJhZGl1cyhtaWxlc3RvbmUgPT4gdGhpcy5yYWRpdXNTY2FsZShtaWxlc3RvbmUpICsgdGhpcy5yYWRpdXNTY2FsZS5iYW5kd2lkdGgoKSlcbiAgICAgIC5zdGFydEFuZ2xlKC0gTWF0aC5QSSAvIHRyYWNrSWRzLmxlbmd0aClcbiAgICAgIC5lbmRBbmdsZShNYXRoLlBJIC8gdHJhY2tJZHMubGVuZ3RoKVxuICAgICAgLnBhZEFuZ2xlKE1hdGguUEkgLyAyMDApXG4gICAgICAucGFkUmFkaXVzKC40NSAqIHdpZHRoKVxuICAgICAgLmNvcm5lclJhZGl1cygyKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGN1cnJlbnRNaWxlc3RvbmVJZCA9IHRoaXMucHJvcHMubWlsZXN0b25lQnlUcmFja1t0aGlzLnByb3BzLmZvY3VzZWRUcmFja0lkXVxuICAgIHJldHVybiAoXG4gICAgICA8ZmlndXJlPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZmlndXJlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIHdpZHRoOiAke3dpZHRofXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAke3dpZHRofXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudHJhY2stbWlsZXN0b25lIHtcbiAgICAgICAgICAgIGZpbGw6ICNlZWU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50cmFjay1taWxlc3RvbmUtY3VycmVudCwgLnRyYWNrLW1pbGVzdG9uZTpob3ZlciB7XG4gICAgICAgICAgICBzdHJva2U6ICMwMDA7XG4gICAgICAgICAgICBzdHJva2Utd2lkdGg6IDRweDtcbiAgICAgICAgICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdmc+XG4gICAgICAgICAgPGcgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7d2lkdGgvMn0sJHt3aWR0aC8yfSkgcm90YXRlKC0zMy43NSlgfT5cbiAgICAgICAgICAgIHt0cmFja0lkcy5tYXAoKHRyYWNrSWQsIGkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50VHJhY2sgPSB0cmFja0lkID09IHRoaXMucHJvcHMuZm9jdXNlZFRyYWNrSWRcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZyBrZXk9e3RyYWNrSWR9IHRyYW5zZm9ybT17YHJvdGF0ZSgke2kgKiAzNjAgLyB0cmFja0lkcy5sZW5ndGh9KWB9PlxuICAgICAgICAgICAgICAgICAge2FyY01pbGVzdG9uZXMubWFwKChtaWxlc3RvbmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNDdXJyZW50TWlsZXN0b25lID0gaXNDdXJyZW50VHJhY2sgJiYgbWlsZXN0b25lID09IGN1cnJlbnRNaWxlc3RvbmVJZFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc01ldCA9IHRoaXMucHJvcHMubWlsZXN0b25lQnlUcmFja1t0cmFja0lkXSA+PSBtaWxlc3RvbmUgfHwgbWlsZXN0b25lID09IDBcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e21pbGVzdG9uZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXsndHJhY2stbWlsZXN0b25lICcgKyAoaXNNZXQgPyAnaXMtbWV0ICcgOiAnICcpICsgKGlzQ3VycmVudE1pbGVzdG9uZSA/ICd0cmFjay1taWxlc3RvbmUtY3VycmVudCcgOiAnJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2VGbih0cmFja0lkLCBtaWxlc3RvbmUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBkPXt0aGlzLmFyY0ZuKG1pbGVzdG9uZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZmlsbDogaXNNZXQgPyBjYXRlZ29yeUNvbG9yU2NhbGUodHJhY2tzW3RyYWNrSWRdLmNhdGVnb3J5KSA6IHVuZGVmaW5lZH19IC8+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICAgIHI9XCI4XCJcbiAgICAgICAgICAgICAgICAgICAgICBjeD1cIjBcIlxuICAgICAgICAgICAgICAgICAgICAgIGN5PVwiLTUwXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZpbGw6IGNhdGVnb3J5Q29sb3JTY2FsZSh0cmFja3NbdHJhY2tJZF0uY2F0ZWdvcnkpfX1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1widHJhY2stbWlsZXN0b25lIFwiICsgKGlzQ3VycmVudFRyYWNrICYmICFjdXJyZW50TWlsZXN0b25lSWQgPyBcInRyYWNrLW1pbGVzdG9uZS1jdXJyZW50XCIgOiBcIlwiKX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlRm4odHJhY2tJZCwgMCl9IC8+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgKX0pfVxuICAgICAgICAgIDwvZz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2ZpZ3VyZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmlnaHRpbmdhbGVDaGFydFxuIl19 */\n/*@ sourceURL=/Users/swati/src/snowflake/components/NightingaleChart.js */")), __jsx("svg", {
        className: "jsx-3023698355",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx("g", {
        transform: "translate(".concat(width / 2, ",").concat(width / 2, ") rotate(-33.75)"),
        className: "jsx-3023698355",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, _constants_tracks__WEBPACK_IMPORTED_MODULE_9__["trackIds"].map(function (trackId, i) {
        var isCurrentTrack = trackId == _this2.props.focusedTrackId;
        return __jsx("g", {
          key: trackId,
          transform: "rotate(".concat(i * 360 / _constants_tracks__WEBPACK_IMPORTED_MODULE_9__["trackIds"].length, ")"),
          className: "jsx-3023698355",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, arcMilestones.map(function (milestone) {
          var isCurrentMilestone = isCurrentTrack && milestone == currentMilestoneId;
          var isMet = _this2.props.milestoneByTrack[trackId] >= milestone || milestone == 0;
          return __jsx("path", {
            key: milestone,
            onClick: function onClick() {
              return _this2.props.handleTrackMilestoneChangeFn(trackId, milestone);
            },
            d: _this2.arcFn(milestone),
            style: {
              fill: isMet ? Object(_constants_constants__WEBPACK_IMPORTED_MODULE_8__["categoryColorScale"])(_constants_tracks__WEBPACK_IMPORTED_MODULE_9__["tracks"][trackId].category) : undefined
            },
            className: "jsx-3023698355" + " " + ('track-milestone ' + (isMet ? 'is-met ' : ' ') + (isCurrentMilestone ? 'track-milestone-current' : '') || false),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          });
        }), __jsx("circle", {
          r: "8",
          cx: "0",
          cy: "-50",
          style: {
            fill: Object(_constants_constants__WEBPACK_IMPORTED_MODULE_8__["categoryColorScale"])(_constants_tracks__WEBPACK_IMPORTED_MODULE_9__["tracks"][trackId].category)
          },
          onClick: function onClick() {
            return _this2.props.handleTrackMilestoneChangeFn(trackId, 0);
          },
          className: "jsx-3023698355" + " " + ("track-milestone " + (isCurrentTrack && !currentMilestoneId ? "track-milestone-current" : "") || false),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }));
      }))));
    }
  }]);

  return NightingaleChart;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NightingaleChart);

/***/ }),

/***/ "./components/PointSummaries.js":
/*!**************************************!*\
  !*** ./components/PointSummaries.js ***!
  \**************************************/
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
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/constants */ "./constants/constants.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/swati/src/snowflake/components/PointSummaries.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var PointSummaries =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PointSummaries, _React$Component);

  function PointSummaries() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PointSummaries);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PointSummaries).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PointSummaries, [{
    key: "render",
    value: function render() {
      var totalPoints = Object(_constants_constants__WEBPACK_IMPORTED_MODULE_6__["totalPointsFromMilestoneMap"])(this.props.milestoneByTrack);
      var currentLevel, nextLevel;
      var pointsForCurrentLevel = totalPoints;

      while (!(currentLevel = _constants_constants__WEBPACK_IMPORTED_MODULE_6__["pointsToLevels"][pointsForCurrentLevel])) {
        pointsForCurrentLevel--;
      }

      var pointsToNextLevel = 1;

      while (!(nextLevel = _constants_constants__WEBPACK_IMPORTED_MODULE_6__["pointsToLevels"][totalPoints + pointsToNextLevel])) {
        pointsToNextLevel++;

        if (pointsToNextLevel > 135) {
          pointsToNextLevel = 'N/A';
          break;
        }
      }

      var blocks = [{
        label: 'Current level',
        value: currentLevel
      }, {
        label: 'Total points',
        value: totalPoints
      }, {
        label: 'Points to next level',
        value: pointsToNextLevel
      }];
      return __jsx("table", {
        className: "jsx-3403694977",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3403694977",
        __self: this
      }, "table.jsx-3403694977{border-spacing:3px;margin-bottom:20px;margin-left:-3px;}.point-summary-label.jsx-3403694977{font-size:12px;text-align:center;font-weight:normal;width:120px;}.point-summary-value.jsx-3403694977{width:120px;background:#eee;font-size:24px;font-weight:bold;line-height:50px;border-radius:2px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvUG9pbnRTdW1tYXJpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NvQixBQUdnQyxBQUtKLEFBTUgsWUFDSSxHQU5FLElBTEMsU0FZSixLQU5JLEtBTEYsS0FZQSxTQU5MLEdBTGQsS0FZbUIsSUFObkIsYUFPb0Isa0JBQ0Esa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvUG9pbnRTdW1tYXJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgeyBwb2ludHNUb0xldmVscywgdHJhY2tJZHMsIHRvdGFsUG9pbnRzRnJvbU1pbGVzdG9uZU1hcCB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnXG5pbXBvcnQgdHlwZSB7IE1pbGVzdG9uZU1hcCB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxudHlwZSBQcm9wcyA9IHtcbiAgbWlsZXN0b25lQnlUcmFjazogTWlsZXN0b25lTWFwXG59XG5cbmNsYXNzIFBvaW50U3VtbWFyaWVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0b3RhbFBvaW50cyA9IHRvdGFsUG9pbnRzRnJvbU1pbGVzdG9uZU1hcCh0aGlzLnByb3BzLm1pbGVzdG9uZUJ5VHJhY2spXG5cbiAgICBsZXQgY3VycmVudExldmVsLCBuZXh0TGV2ZWxcblxuICAgIGxldCBwb2ludHNGb3JDdXJyZW50TGV2ZWwgPSB0b3RhbFBvaW50c1xuICAgIHdoaWxlICghKGN1cnJlbnRMZXZlbCA9IHBvaW50c1RvTGV2ZWxzW3BvaW50c0ZvckN1cnJlbnRMZXZlbF0pKSB7XG4gICAgICBwb2ludHNGb3JDdXJyZW50TGV2ZWwtLVxuICAgIH1cblxuICAgIGxldCBwb2ludHNUb05leHRMZXZlbCA9IDFcbiAgICB3aGlsZSAoIShuZXh0TGV2ZWwgPSBwb2ludHNUb0xldmVsc1t0b3RhbFBvaW50cyArIHBvaW50c1RvTmV4dExldmVsXSkpIHtcbiAgICAgIHBvaW50c1RvTmV4dExldmVsKytcbiAgICAgIGlmIChwb2ludHNUb05leHRMZXZlbCA+IDEzNSkge1xuICAgICAgICBwb2ludHNUb05leHRMZXZlbCA9ICdOL0EnXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYmxvY2tzID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ0N1cnJlbnQgbGV2ZWwnLFxuICAgICAgICB2YWx1ZTogY3VycmVudExldmVsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ1RvdGFsIHBvaW50cycsXG4gICAgICAgIHZhbHVlOiB0b3RhbFBvaW50c1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbGFiZWw6ICdQb2ludHMgdG8gbmV4dCBsZXZlbCcsXG4gICAgICAgIHZhbHVlOiBwb2ludHNUb05leHRMZXZlbFxuICAgICAgfVxuICAgIF1cblxuICAgIHJldHVybiAoXG4gICAgICA8dGFibGU+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICBib3JkZXItc3BhY2luZzogM3B4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9pbnQtc3VtbWFyeS1sYWJlbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9pbnQtc3VtbWFyeS12YWx1ZSB7XG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICB7YmxvY2tzLm1hcCgoe2xhYmVsfSwgaSkgPT4gKFxuICAgICAgICAgICAgPHRoIGtleT17aX0gY2xhc3NOYW1lPVwicG9pbnQtc3VtbWFyeS1sYWJlbFwiPlxuICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgIHtibG9ja3MubWFwKCh7dmFsdWV9LCBpKSA9PiAoXG4gICAgICAgICAgICA8dGQga2V5PXtpfSBjbGFzc05hbWU9XCJwb2ludC1zdW1tYXJ5LXZhbHVlXCI+XG4gICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50U3VtbWFyaWVzXG4iXX0= */\n/*@ sourceURL=/Users/swati/src/snowflake/components/PointSummaries.js */"), __jsx("tbody", {
        className: "jsx-3403694977",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx("tr", {
        className: "jsx-3403694977",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, blocks.map(function (_ref, i) {
        var label = _ref.label;
        return __jsx("th", {
          key: i,
          className: "jsx-3403694977" + " " + "point-summary-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, label);
      })), __jsx("tr", {
        className: "jsx-3403694977",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, blocks.map(function (_ref2, i) {
        var value = _ref2.value;
        return __jsx("td", {
          key: i,
          className: "jsx-3403694977" + " " + "point-summary-value",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80
          },
          __self: this
        }, value);
      }))));
    }
  }]);

  return PointSummaries;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PointSummaries);

/***/ }),

/***/ "./components/SnowflakeApp.js":
/*!************************************!*\
  !*** ./components/SnowflakeApp.js ***!
  \************************************/
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
/* harmony import */ var _components_TrackSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TrackSelector */ "./components/TrackSelector.js");
/* harmony import */ var _components_NightingaleChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NightingaleChart */ "./components/NightingaleChart.js");
/* harmony import */ var _components_KeyboardListener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/KeyboardListener */ "./components/KeyboardListener.js");
/* harmony import */ var _components_Track__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Track */ "./components/Track.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Wordmark__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Wordmark */ "./components/Wordmark.js");
/* harmony import */ var _components_LevelThermometer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/LevelThermometer */ "./components/LevelThermometer.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constants/constants */ "./constants/constants.js");
/* harmony import */ var _constants_tracks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../constants/tracks */ "./constants/tracks.js");
/* harmony import */ var _components_PointSummaries__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/PointSummaries */ "./components/PointSummaries.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_TitleSelector__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/TitleSelector */ "./components/TitleSelector.js");





var _jsxFileName = "/Users/swati/src/snowflake/components/SnowflakeApp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement;













var hashToState = function hashToState(hash) {
  if (!hash) return null;
  var result = defaultState();
  var hashValues = hash.split('#')[1].split(',');
  if (!hashValues) return null;
  _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"].forEach(function (trackId, i) {
    result.milestoneByTrack[trackId] = coerceMilestone(Number(hashValues[i]));
  });
  if (hashValues[16]) result.name = decodeURI(hashValues[16]);
  if (hashValues[17]) result.title = decodeURI(hashValues[17]);
  return result;
};

var coerceMilestone = function coerceMilestone(value) {
  // HACK I know this is goofy but i'm dealing with flow typing
  switch (value) {
    case 0:
      return 0;

    case 1:
      return 1;

    case 2:
      return 2;

    case 3:
      return 3;

    case 4:
      return 4;

    case 5:
      return 5;

    default:
      return 0;
  }
};

var emptyState = function emptyState() {
  return {
    name: '',
    title: '',
    milestoneByTrack: {
      'MOBILE': 0,
      'WEB_CLIENT': 0,
      'FOUNDATIONS': 0,
      'SERVERS': 0,
      'PROJECT_MANAGEMENT': 0,
      'COMMUNICATION': 0,
      'CRAFT': 0,
      'INITIATIVE': 0,
      'CAREER_DEVELOPMENT': 0,
      'ORG_DESIGN': 0,
      'WELLBEING': 0,
      'ACCOMPLISHMENT': 0,
      'MENTORSHIP': 0,
      'EVANGELISM': 0,
      'RECRUITING': 0,
      'COMMUNITY': 0
    },
    focusedTrackId: 'MOBILE'
  };
};

var defaultState = function defaultState() {
  return {
    name: 'Cersei Lannister',
    title: 'Staff Engineer',
    milestoneByTrack: {
      'MOBILE': 1,
      'WEB_CLIENT': 2,
      'FOUNDATIONS': 3,
      'SERVERS': 2,
      'PROJECT_MANAGEMENT': 4,
      'COMMUNICATION': 1,
      'CRAFT': 1,
      'INITIATIVE': 4,
      'CAREER_DEVELOPMENT': 3,
      'ORG_DESIGN': 2,
      'WELLBEING': 0,
      'ACCOMPLISHMENT': 4,
      'MENTORSHIP': 2,
      'EVANGELISM': 2,
      'RECRUITING': 3,
      'COMMUNITY': 0
    },
    focusedTrackId: 'MOBILE'
  };
};

var stateToHash = function stateToHash(state) {
  if (!state || !state.milestoneByTrack) return null;
  var values = _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"].map(function (trackId) {
    return state.milestoneByTrack[trackId];
  }).concat(encodeURI(state.name), encodeURI(state.title));
  return values.join(',');
};

var SnowflakeApp =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SnowflakeApp, _React$Component);

  function SnowflakeApp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SnowflakeApp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SnowflakeApp).call(this, props));
    _this.state = emptyState();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SnowflakeApp, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var hash = stateToHash(this.state);
      if (hash) window.location.replace("#".concat(hash));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var state = hashToState(window.location.hash);

      if (state) {
        this.setState(state);
      } else {
        this.setState(defaultState());
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("main", {
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2126963245",
        __self: this
      }, "body{font-family:Helvetica;}main{width:960px;margin:0 auto;}.name-input{border:none;display:block;border-bottom:2px solid #fff;font-size:30px;line-height:40px;font-weight:bold;width:380px;margin-bottom:10px;}.name-input:hover,.name-input:focus{border-bottom:2px solid #ccc;outline:0;}a{color:#888;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvU25vd2ZsYWtlQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9JMkIsQUFHbUMsQUFHVixBQUlBLEFBVWlCLEFBSWxCLFdBQ1UsQ0FsQlAsQUFJQSxVQVBoQixJQUlBLEFBSStCLEdBU25CLFVBQ1osZ0JBVGlCLE1BYWpCLFNBWm1CLGlCQUNBLGlCQUNMLFlBQ08sbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvU25vd2ZsYWtlQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFRyYWNrU2VsZWN0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9UcmFja1NlbGVjdG9yJ1xuaW1wb3J0IE5pZ2h0aW5nYWxlQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9OaWdodGluZ2FsZUNoYXJ0J1xuaW1wb3J0IEtleWJvYXJkTGlzdGVuZXIgZnJvbSAnLi4vY29tcG9uZW50cy9LZXlib2FyZExpc3RlbmVyJ1xuaW1wb3J0IFRyYWNrIGZyb20gJy4uL2NvbXBvbmVudHMvVHJhY2snXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IFdvcmRtYXJrIGZyb20gJy4uL2NvbXBvbmVudHMvV29yZG1hcmsnXG5pbXBvcnQgTGV2ZWxUaGVybW9tZXRlciBmcm9tICcuLi9jb21wb25lbnRzL0xldmVsVGhlcm1vbWV0ZXInXG5pbXBvcnQgeyBlbGlnaWJsZVRpdGxlcywgbWlsZXN0b25lcyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnXG5pbXBvcnQgeyB0cmFja0lkcywgdHJhY2tzIH0gZnJvbSAnLi4vY29uc3RhbnRzL3RyYWNrcydcbmltcG9ydCBQb2ludFN1bW1hcmllcyBmcm9tICcuLi9jb21wb25lbnRzL1BvaW50U3VtbWFyaWVzJ1xuaW1wb3J0IHR5cGUgeyBNaWxlc3RvbmUsIE1pbGVzdG9uZU1hcCwgVHJhY2tJZCB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBUaXRsZVNlbGVjdG9yIGZyb20gJy4uL2NvbXBvbmVudHMvVGl0bGVTZWxlY3RvcidcblxudHlwZSBTbm93Zmxha2VBcHBTdGF0ZSA9IHtcbiAgbWlsZXN0b25lQnlUcmFjazogTWlsZXN0b25lTWFwLFxuICBuYW1lOiBzdHJpbmcsXG4gIHRpdGxlOiBzdHJpbmcsXG4gIGZvY3VzZWRUcmFja0lkOiBUcmFja0lkLFxufVxuXG5jb25zdCBoYXNoVG9TdGF0ZSA9IChoYXNoOiBTdHJpbmcpOiA/U25vd2ZsYWtlQXBwU3RhdGUgPT4ge1xuICBpZiAoIWhhc2gpIHJldHVybiBudWxsXG4gIGNvbnN0IHJlc3VsdCA9IGRlZmF1bHRTdGF0ZSgpXG4gIGNvbnN0IGhhc2hWYWx1ZXMgPSBoYXNoLnNwbGl0KCcjJylbMV0uc3BsaXQoJywnKVxuICBpZiAoIWhhc2hWYWx1ZXMpIHJldHVybiBudWxsXG4gIHRyYWNrSWRzLmZvckVhY2goKHRyYWNrSWQsIGkpID0+IHtcbiAgICByZXN1bHQubWlsZXN0b25lQnlUcmFja1t0cmFja0lkXSA9IGNvZXJjZU1pbGVzdG9uZShOdW1iZXIoaGFzaFZhbHVlc1tpXSkpXG4gIH0pXG4gIGlmIChoYXNoVmFsdWVzWzE2XSkgcmVzdWx0Lm5hbWUgPSBkZWNvZGVVUkkoaGFzaFZhbHVlc1sxNl0pXG4gIGlmIChoYXNoVmFsdWVzWzE3XSkgcmVzdWx0LnRpdGxlID0gZGVjb2RlVVJJKGhhc2hWYWx1ZXNbMTddKVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnN0IGNvZXJjZU1pbGVzdG9uZSA9ICh2YWx1ZTogbnVtYmVyKTogTWlsZXN0b25lID0+IHtcbiAgLy8gSEFDSyBJIGtub3cgdGhpcyBpcyBnb29meSBidXQgaSdtIGRlYWxpbmcgd2l0aCBmbG93IHR5cGluZ1xuICBzd2l0Y2godmFsdWUpIHtcbiAgICBjYXNlIDA6IHJldHVybiAwXG4gICAgY2FzZSAxOiByZXR1cm4gMVxuICAgIGNhc2UgMjogcmV0dXJuIDJcbiAgICBjYXNlIDM6IHJldHVybiAzXG4gICAgY2FzZSA0OiByZXR1cm4gNFxuICAgIGNhc2UgNTogcmV0dXJuIDVcbiAgICBkZWZhdWx0OiByZXR1cm4gMFxuICB9XG59XG5cbmNvbnN0IGVtcHR5U3RhdGUgPSAoKTogU25vd2ZsYWtlQXBwU3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICcnLFxuICAgIHRpdGxlOiAnJyxcbiAgICBtaWxlc3RvbmVCeVRyYWNrOiB7XG4gICAgICAnTU9CSUxFJzogMCxcbiAgICAgICdXRUJfQ0xJRU5UJzogMCxcbiAgICAgICdGT1VOREFUSU9OUyc6IDAsXG4gICAgICAnU0VSVkVSUyc6IDAsXG4gICAgICAnUFJPSkVDVF9NQU5BR0VNRU5UJzogMCxcbiAgICAgICdDT01NVU5JQ0FUSU9OJzogMCxcbiAgICAgICdDUkFGVCc6IDAsXG4gICAgICAnSU5JVElBVElWRSc6IDAsXG4gICAgICAnQ0FSRUVSX0RFVkVMT1BNRU5UJzogMCxcbiAgICAgICdPUkdfREVTSUdOJzogMCxcbiAgICAgICdXRUxMQkVJTkcnOiAwLFxuICAgICAgJ0FDQ09NUExJU0hNRU5UJzogMCxcbiAgICAgICdNRU5UT1JTSElQJzogMCxcbiAgICAgICdFVkFOR0VMSVNNJzogMCxcbiAgICAgICdSRUNSVUlUSU5HJzogMCxcbiAgICAgICdDT01NVU5JVFknOiAwXG4gICAgfSxcbiAgICBmb2N1c2VkVHJhY2tJZDogJ01PQklMRSdcbiAgfVxufVxuXG5jb25zdCBkZWZhdWx0U3RhdGUgPSAoKTogU25vd2ZsYWtlQXBwU3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIG5hbWU6ICdDZXJzZWkgTGFubmlzdGVyJyxcbiAgICB0aXRsZTogJ1N0YWZmIEVuZ2luZWVyJyxcbiAgICBtaWxlc3RvbmVCeVRyYWNrOiB7XG4gICAgICAnTU9CSUxFJzogMSxcbiAgICAgICdXRUJfQ0xJRU5UJzogMixcbiAgICAgICdGT1VOREFUSU9OUyc6IDMsXG4gICAgICAnU0VSVkVSUyc6IDIsXG4gICAgICAnUFJPSkVDVF9NQU5BR0VNRU5UJzogNCxcbiAgICAgICdDT01NVU5JQ0FUSU9OJzogMSxcbiAgICAgICdDUkFGVCc6IDEsXG4gICAgICAnSU5JVElBVElWRSc6IDQsXG4gICAgICAnQ0FSRUVSX0RFVkVMT1BNRU5UJzogMyxcbiAgICAgICdPUkdfREVTSUdOJzogMixcbiAgICAgICdXRUxMQkVJTkcnOiAwLFxuICAgICAgJ0FDQ09NUExJU0hNRU5UJzogNCxcbiAgICAgICdNRU5UT1JTSElQJzogMixcbiAgICAgICdFVkFOR0VMSVNNJzogMixcbiAgICAgICdSRUNSVUlUSU5HJzogMyxcbiAgICAgICdDT01NVU5JVFknOiAwXG4gICAgfSxcbiAgICBmb2N1c2VkVHJhY2tJZDogJ01PQklMRSdcbiAgfVxufVxuXG5jb25zdCBzdGF0ZVRvSGFzaCA9IChzdGF0ZTogU25vd2ZsYWtlQXBwU3RhdGUpID0+IHtcbiAgaWYgKCFzdGF0ZSB8fCAhc3RhdGUubWlsZXN0b25lQnlUcmFjaykgcmV0dXJuIG51bGxcbiAgY29uc3QgdmFsdWVzID0gdHJhY2tJZHMubWFwKHRyYWNrSWQgPT4gc3RhdGUubWlsZXN0b25lQnlUcmFja1t0cmFja0lkXSkuY29uY2F0KGVuY29kZVVSSShzdGF0ZS5uYW1lKSwgZW5jb2RlVVJJKHN0YXRlLnRpdGxlKSlcbiAgcmV0dXJuIHZhbHVlcy5qb2luKCcsJylcbn1cblxudHlwZSBQcm9wcyA9IHt9XG5cbmNsYXNzIFNub3dmbGFrZUFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcywgU25vd2ZsYWtlQXBwU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IFByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IGVtcHR5U3RhdGUoKVxuICB9XG5cbiAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgIGNvbnN0IGhhc2ggPSBzdGF0ZVRvSGFzaCh0aGlzLnN0YXRlKVxuICAgIGlmIChoYXNoKSB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShgIyR7aGFzaH1gKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBoYXNoVG9TdGF0ZSh3aW5kb3cubG9jYXRpb24uaGFzaClcbiAgICBpZiAoc3RhdGUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoZGVmYXVsdFN0YXRlKCkpXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbj5cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XG4gICAgICAgICAgfVxuICAgICAgICAgIG1haW4ge1xuICAgICAgICAgICAgd2lkdGg6IDk2MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYW1lLWlucHV0IHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgd2lkdGg6IDM4MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hbWUtaW5wdXQ6aG92ZXIsIC5uYW1lLWlucHV0OmZvY3VzIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICAgICAgb3V0bGluZTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgYSB7XG4gICAgICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGRpdiBzdHlsZT17e21hcmdpbjogJzE5cHggYXV0byAwJywgd2lkdGg6IDE0Mn19PlxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5zaG9waWZ5LmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgPFdvcmRtYXJrIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OiAxfX0+XG4gICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgey8qIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmFtZS1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7bmFtZTogZS50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICAvPiAqL31cbiAgICAgICAgICAgICAgPFRpdGxlU2VsZWN0b3JcbiAgICAgICAgICAgICAgICAgIG1pbGVzdG9uZUJ5VHJhY2s9e3RoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja31cbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRUaXRsZT17dGhpcy5zdGF0ZS50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHNldFRpdGxlRm49eyh0aXRsZSkgPT4gdGhpcy5zZXRUaXRsZSh0aXRsZSl9IC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8UG9pbnRTdW1tYXJpZXMgbWlsZXN0b25lQnlUcmFjaz17dGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrfSAvPlxuICAgICAgICAgICAgPExldmVsVGhlcm1vbWV0ZXIgbWlsZXN0b25lQnlUcmFjaz17dGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OiAwfX0+XG4gICAgICAgICAgICA8TmlnaHRpbmdhbGVDaGFydFxuICAgICAgICAgICAgICAgIG1pbGVzdG9uZUJ5VHJhY2s9e3RoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja31cbiAgICAgICAgICAgICAgICBmb2N1c2VkVHJhY2tJZD17dGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZH1cbiAgICAgICAgICAgICAgICBoYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZUZuPXsodHJhY2ssIG1pbGVzdG9uZSkgPT4gdGhpcy5oYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZSh0cmFjaywgbWlsZXN0b25lKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxUcmFja1NlbGVjdG9yXG4gICAgICAgICAgICBtaWxlc3RvbmVCeVRyYWNrPXt0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2t9XG4gICAgICAgICAgICBmb2N1c2VkVHJhY2tJZD17dGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZH1cbiAgICAgICAgICAgIHNldEZvY3VzZWRUcmFja0lkRm49e3RoaXMuc2V0Rm9jdXNlZFRyYWNrSWQuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPEtleWJvYXJkTGlzdGVuZXJcbiAgICAgICAgICAgIHNlbGVjdE5leHRUcmFja0ZuPXt0aGlzLnNoaWZ0Rm9jdXNlZFRyYWNrLmJpbmQodGhpcywgMSl9XG4gICAgICAgICAgICBzZWxlY3RQcmV2VHJhY2tGbj17dGhpcy5zaGlmdEZvY3VzZWRUcmFjay5iaW5kKHRoaXMsIC0xKX1cbiAgICAgICAgICAgIGluY3JlYXNlRm9jdXNlZE1pbGVzdG9uZUZuPXt0aGlzLnNoaWZ0Rm9jdXNlZFRyYWNrTWlsZXN0b25lQnlEZWx0YS5iaW5kKHRoaXMsIDEpfVxuICAgICAgICAgICAgZGVjcmVhc2VGb2N1c2VkTWlsZXN0b25lRm49e3RoaXMuc2hpZnRGb2N1c2VkVHJhY2tNaWxlc3RvbmVCeURlbHRhLmJpbmQodGhpcywgLTEpfSAvPlxuICAgICAgICA8VHJhY2tcbiAgICAgICAgICAgIG1pbGVzdG9uZUJ5VHJhY2s9e3RoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja31cbiAgICAgICAgICAgIHRyYWNrSWQ9e3RoaXMuc3RhdGUuZm9jdXNlZFRyYWNrSWR9XG4gICAgICAgICAgICBoYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZUZuPXsodHJhY2ssIG1pbGVzdG9uZSkgPT4gdGhpcy5oYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZSh0cmFjaywgbWlsZXN0b25lKX0gLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9tYWluPlxuICAgIClcbiAgfVxuXG4gIGhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlKHRyYWNrSWQ6IFRyYWNrSWQsIG1pbGVzdG9uZTogTWlsZXN0b25lKSB7XG4gICAgY29uc3QgbWlsZXN0b25lQnlUcmFjayA9IHRoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja1xuICAgIG1pbGVzdG9uZUJ5VHJhY2tbdHJhY2tJZF0gPSBtaWxlc3RvbmVcblxuICAgIGNvbnN0IHRpdGxlcyA9IGVsaWdpYmxlVGl0bGVzKG1pbGVzdG9uZUJ5VHJhY2spXG4gICAgY29uc3QgdGl0bGUgPSB0aXRsZXMuaW5kZXhPZih0aGlzLnN0YXRlLnRpdGxlKSA9PT0gLTEgPyB0aXRsZXNbMF0gOiB0aGlzLnN0YXRlLnRpdGxlXG5cbiAgICB0aGlzLnNldFN0YXRlKHsgbWlsZXN0b25lQnlUcmFjaywgZm9jdXNlZFRyYWNrSWQ6IHRyYWNrSWQsIHRpdGxlIH0pXG4gIH1cblxuICBzaGlmdEZvY3VzZWRUcmFjayhkZWx0YTogbnVtYmVyKSB7XG4gICAgbGV0IGluZGV4ID0gdHJhY2tJZHMuaW5kZXhPZih0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkKVxuICAgIGluZGV4ID0gKGluZGV4ICsgZGVsdGEgKyB0cmFja0lkcy5sZW5ndGgpICUgdHJhY2tJZHMubGVuZ3RoXG4gICAgY29uc3QgZm9jdXNlZFRyYWNrSWQgPSB0cmFja0lkc1tpbmRleF1cbiAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZFRyYWNrSWQgfSlcbiAgfVxuXG4gIHNldEZvY3VzZWRUcmFja0lkKHRyYWNrSWQ6IFRyYWNrSWQpIHtcbiAgICBsZXQgaW5kZXggPSB0cmFja0lkcy5pbmRleE9mKHRyYWNrSWQpXG4gICAgY29uc3QgZm9jdXNlZFRyYWNrSWQgPSB0cmFja0lkc1tpbmRleF1cbiAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZFRyYWNrSWQgfSlcbiAgfVxuXG4gIHNoaWZ0Rm9jdXNlZFRyYWNrTWlsZXN0b25lQnlEZWx0YShkZWx0YTogbnVtYmVyKSB7XG4gICAgbGV0IHByZXZNaWxlc3RvbmUgPSB0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2tbdGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZF1cbiAgICBsZXQgbWlsZXN0b25lID0gcHJldk1pbGVzdG9uZSArIGRlbHRhXG4gICAgaWYgKG1pbGVzdG9uZSA8IDApIG1pbGVzdG9uZSA9IDBcbiAgICBpZiAobWlsZXN0b25lID4gNSkgbWlsZXN0b25lID0gNVxuICAgIHRoaXMuaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2UodGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZCwgKChtaWxlc3RvbmU6IGFueSk6IE1pbGVzdG9uZSkpXG4gIH1cblxuICBzZXRUaXRsZSh0aXRsZTogc3RyaW5nKSB7XG4gICAgbGV0IHRpdGxlcyA9IGVsaWdpYmxlVGl0bGVzKHRoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFjaylcbiAgICB0aXRsZSA9IHRpdGxlcy5pbmRleE9mKHRpdGxlKSA9PSAtMSA/IHRpdGxlc1swXSA6IHRpdGxlXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRpdGxlIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU25vd2ZsYWtlQXBwXG4iXX0= */\n/*@ sourceURL=/Users/swati/src/snowflake/components/SnowflakeApp.js */"), __jsx("div", {
        style: {
          margin: '19px auto 0',
          width: 142
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, __jsx("a", {
        href: "https://www.shopify.com",
        target: "_blank",
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, __jsx(_components_Wordmark__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }))), __jsx("div", {
        style: {
          display: 'flex'
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, __jsx("div", {
        style: {
          flex: 1
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, __jsx("form", {
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, __jsx(_components_TitleSelector__WEBPACK_IMPORTED_MODULE_17__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        currentTitle: this.state.title,
        setTitleFn: function setTitleFn(title) {
          return _this2.setTitle(title);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      })), __jsx(_components_PointSummaries__WEBPACK_IMPORTED_MODULE_15__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }), __jsx(_components_LevelThermometer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      })), __jsx("div", {
        style: {
          flex: 0
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, __jsx(_components_NightingaleChart__WEBPACK_IMPORTED_MODULE_7__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        focusedTrackId: this.state.focusedTrackId,
        handleTrackMilestoneChangeFn: function handleTrackMilestoneChangeFn(track, milestone) {
          return _this2.handleTrackMilestoneChange(track, milestone);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }))), __jsx(_components_TrackSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        focusedTrackId: this.state.focusedTrackId,
        setFocusedTrackIdFn: this.setFocusedTrackId.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }), __jsx(_components_KeyboardListener__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectNextTrackFn: this.shiftFocusedTrack.bind(this, 1),
        selectPrevTrackFn: this.shiftFocusedTrack.bind(this, -1),
        increaseFocusedMilestoneFn: this.shiftFocusedTrackMilestoneByDelta.bind(this, 1),
        decreaseFocusedMilestoneFn: this.shiftFocusedTrackMilestoneByDelta.bind(this, -1),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }), __jsx(_components_Track__WEBPACK_IMPORTED_MODULE_9__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        trackId: this.state.focusedTrackId,
        handleTrackMilestoneChangeFn: function handleTrackMilestoneChangeFn(track, milestone) {
          return _this2.handleTrackMilestoneChange(track, milestone);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }));
    }
  }, {
    key: "handleTrackMilestoneChange",
    value: function handleTrackMilestoneChange(trackId, milestone) {
      var milestoneByTrack = this.state.milestoneByTrack;
      milestoneByTrack[trackId] = milestone;
      var titles = Object(_constants_constants__WEBPACK_IMPORTED_MODULE_13__["eligibleTitles"])(milestoneByTrack);
      var title = titles.indexOf(this.state.title) === -1 ? titles[0] : this.state.title;
      this.setState({
        milestoneByTrack: milestoneByTrack,
        focusedTrackId: trackId,
        title: title
      });
    }
  }, {
    key: "shiftFocusedTrack",
    value: function shiftFocusedTrack(delta) {
      var index = _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"].indexOf(this.state.focusedTrackId);
      index = (index + delta + _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"].length) % _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"].length;
      var focusedTrackId = _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"][index];
      this.setState({
        focusedTrackId: focusedTrackId
      });
    }
  }, {
    key: "setFocusedTrackId",
    value: function setFocusedTrackId(trackId) {
      var index = _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"].indexOf(trackId);
      var focusedTrackId = _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"][index];
      this.setState({
        focusedTrackId: focusedTrackId
      });
    }
  }, {
    key: "shiftFocusedTrackMilestoneByDelta",
    value: function shiftFocusedTrackMilestoneByDelta(delta) {
      var prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId];
      var milestone = prevMilestone + delta;
      if (milestone < 0) milestone = 0;
      if (milestone > 5) milestone = 5;
      this.handleTrackMilestoneChange(this.state.focusedTrackId, milestone);
    }
  }, {
    key: "setTitle",
    value: function setTitle(title) {
      var titles = Object(_constants_constants__WEBPACK_IMPORTED_MODULE_13__["eligibleTitles"])(this.state.milestoneByTrack);
      title = titles.indexOf(title) == -1 ? titles[0] : title;
      this.setState({
        title: title
      });
    }
  }]);

  return SnowflakeApp;
}(react__WEBPACK_IMPORTED_MODULE_16___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SnowflakeApp);

/***/ }),

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
      }, "select.jsx-2295457571{font-size:20px;line-height:20px;margin-bottom:20px;min-width:300px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvVGl0bGVTZWxlY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQmtCLEFBRzBCLGVBQ0UsaUJBQ0UsbUJBQ0gsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvVGl0bGVTZWxlY3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGVsaWdpYmxlVGl0bGVzIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cydcbmltcG9ydCB0eXBlIHsgTWlsZXN0b25lTWFwIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuXG50eXBlIFByb3BzID0ge1xuICBtaWxlc3RvbmVCeVRyYWNrOiBNaWxlc3RvbmVNYXAsXG4gIGN1cnJlbnRUaXRsZTogc3RyaW5nLFxuICBzZXRUaXRsZUZuOiAoc3RyaW5nKSA9PiB2b2lkXG59XG5cbmNsYXNzIFRpdGxlU2VsZWN0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRpdGxlcyA9IGVsaWdpYmxlVGl0bGVzKHRoaXMucHJvcHMubWlsZXN0b25lQnlUcmFjaylcbiAgICByZXR1cm4gPHNlbGVjdCB2YWx1ZT17dGhpcy5wcm9wcy5jdXJyZW50VGl0bGV9IG9uQ2hhbmdlPXtlID0+IHRoaXMucHJvcHMuc2V0VGl0bGVGbihlLnRhcmdldC52YWx1ZSl9PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBzZWxlY3Qge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIG1pbi13aWR0aDogMzAwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICAgIHt0aXRsZXMubWFwKHRpdGxlID0+IChcbiAgICAgICAgPG9wdGlvbiBrZXk9e3RpdGxlfT5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvb3B0aW9uPlxuICAgICAgKSl9XG4gICAgPC9zZWxlY3Q+XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVGl0bGVTZWxlY3RvclxuIl19 */\n/*@ sourceURL=/Users/swati/src/snowflake/components/TitleSelector.js */"), titles.map(function (title) {
        return __jsx("option", {
          key: title,
          className: "jsx-2295457571",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, title);
      }));
    }
  }]);

  return TitleSelector;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TitleSelector);

/***/ }),

/***/ "./components/Track.js":
/*!*****************************!*\
  !*** ./components/Track.js ***!
  \*****************************/
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
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/constants */ "./constants/constants.js");
/* harmony import */ var _constants_tracks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/tracks */ "./constants/tracks.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/swati/src/snowflake/components/Track.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;




var Track =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Track, _React$Component);

  function Track() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Track);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Track).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Track, [{
    key: "render",
    value: function render() {
      var _this = this;

      var track = _constants_tracks__WEBPACK_IMPORTED_MODULE_7__["tracks"][this.props.trackId];
      var currentMilestoneId = this.props.milestoneByTrack[this.props.trackId];
      var currentMilestone = track.milestones[currentMilestoneId - 1];
      return __jsx("div", {
        className: "jsx-2815140849" + " " + "track",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2815140849",
        __self: this
      }, "div.track.jsx-2815140849{margin:0 0 20px 0;padding-bottom:20px;border-bottom:2px solid #ccc;}h2.jsx-2815140849{margin:0 0 10px 0;}p.track-description.jsx-2815140849{margin-top:0;padding-bottom:20px;border-bottom:2px solid #ccc;}table.jsx-2815140849{border-spacing:3px;}td.jsx-2815140849{line-height:50px;width:50px;text-align:center;background:#eee;font-weight:bold;font-size:24px;border-radius:3px;cursor:pointer;}ul.jsx-2815140849{line-height:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvVHJhY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJvQixBQUcrQixBQUtBLEFBR0wsQUFLTSxBQUdGLEFBVUMsYUFqQkUsSUFRVCxDQWhCUyxBQUt0QixBQXFCQSxDQWJBLFNBSW9CLEtBUlcsS0FSQSxRQWlCYixnQkFSbEIsQUFTbUIsS0FqQm5CLFlBa0JpQixlQUNHLGtCQUNILGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvVHJhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgeyBzY29yZXMsIGNhdGVnb3J5Q29sb3JTY2FsZSB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnXG5pbXBvcnQgeyB0cmFja3MgfSBmcm9tICcuLi9jb25zdGFudHMvdHJhY2tzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBNaWxlc3RvbmVNYXAsIE1pbGVzdG9uZSB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCB0eXBlIHsgVHJhY2tJZCB9IGZyb20gJy4uL2NvbnN0YW50cy90cmFja3MnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIG1pbGVzdG9uZUJ5VHJhY2s6IE1pbGVzdG9uZU1hcCxcbiAgdHJhY2tJZDogVHJhY2tJZCxcbiAgaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2VGbjogKFRyYWNrSWQsIE1pbGVzdG9uZSkgPT4gdm9pZFxufVxuXG5jbGFzcyBUcmFjayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdHJhY2sgPSB0cmFja3NbdGhpcy5wcm9wcy50cmFja0lkXVxuICAgIGNvbnN0IGN1cnJlbnRNaWxlc3RvbmVJZCA9IHRoaXMucHJvcHMubWlsZXN0b25lQnlUcmFja1t0aGlzLnByb3BzLnRyYWNrSWRdXG4gICAgY29uc3QgY3VycmVudE1pbGVzdG9uZSA9IHRyYWNrLm1pbGVzdG9uZXNbY3VycmVudE1pbGVzdG9uZUlkIC0gMV1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja1wiPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZGl2LnRyYWNrIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDIwcHggMDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcC50cmFjay1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDNweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGQge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8aDI+e3RyYWNrLmRpc3BsYXlOYW1lfTwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRyYWNrLWRlc2NyaXB0aW9uXCI+e3RyYWNrLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxuICAgICAgICAgIDx0YWJsZSBzdHlsZT17e2ZsZXg6IDAsIG1hcmdpblJpZ2h0OiA1MH19PlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7c2NvcmVzLnNsaWNlKCkucmV2ZXJzZSgpLm1hcCgobWlsZXN0b25lKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNNZXQgPSBtaWxlc3RvbmUgPD0gY3VycmVudE1pbGVzdG9uZUlkXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e21pbGVzdG9uZX0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlRm4odGhpcy5wcm9wcy50cmFja0lkLCBtaWxlc3RvbmUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tib3JkZXI6IGA0cHggc29saWQgJHttaWxlc3RvbmUgPT09IGN1cnJlbnRNaWxlc3RvbmVJZCA/ICcjMDAwJyA6IGlzTWV0ID8gY2F0ZWdvcnlDb2xvclNjYWxlKHRyYWNrLmNhdGVnb3J5KSA6ICcjZWVlJ31gLCBiYWNrZ3JvdW5kOiBpc01ldCA/IGNhdGVnb3J5Q29sb3JTY2FsZSh0cmFjay5jYXRlZ29yeSkgOiB1bmRlZmluZWR9fT5cbiAgICAgICAgICAgICAgICAgICAgICB7bWlsZXN0b25lfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgIHtjdXJyZW50TWlsZXN0b25lID8gKFxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6IDF9fT5cbiAgICAgICAgICAgICAgPGgzPntjdXJyZW50TWlsZXN0b25lLnN1bW1hcnl9PC9oMz5cbiAgICAgICAgICAgICAgPGg0PkV4YW1wbGUgYmVoYXZpb3JzOjwvaDQ+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7Y3VycmVudE1pbGVzdG9uZS5zaWduYWxzLm1hcCgoc2lnbmFsLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT57c2lnbmFsfTwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDxoND5FeGFtcGxlIHRhc2tzOjwvaDQ+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7Y3VycmVudE1pbGVzdG9uZS5leGFtcGxlcy5tYXAoKGV4YW1wbGUsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PntleGFtcGxlfTwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhY2tcbiJdfQ== */\n/*@ sourceURL=/Users/swati/src/snowflake/components/Track.js */"), __jsx("h2", {
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, track.displayName), __jsx("p", {
        className: "jsx-2815140849" + " " + "track-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, track.description), __jsx("div", {
        style: {
          display: 'flex'
        },
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("table", {
        style: {
          flex: 0,
          marginRight: 50
        },
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, __jsx("tbody", {
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, _constants_constants__WEBPACK_IMPORTED_MODULE_6__["scores"].slice().reverse().map(function (milestone) {
        var isMet = milestone <= currentMilestoneId;
        return __jsx("tr", {
          key: milestone,
          className: "jsx-2815140849",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }, __jsx("td", {
          onClick: function onClick() {
            return _this.props.handleTrackMilestoneChangeFn(_this.props.trackId, milestone);
          },
          style: {
            border: "4px solid ".concat(milestone === currentMilestoneId ? '#000' : isMet ? Object(_constants_constants__WEBPACK_IMPORTED_MODULE_6__["categoryColorScale"])(track.category) : '#eee'),
            background: isMet ? Object(_constants_constants__WEBPACK_IMPORTED_MODULE_6__["categoryColorScale"])(track.category) : undefined
          },
          className: "jsx-2815140849",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, milestone));
      }))), currentMilestone ? __jsx("div", {
        style: {
          flex: 1
        },
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, currentMilestone.summary), __jsx("h4", {
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Example behaviors:"), __jsx("ul", {
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, currentMilestone.signals.map(function (signal, i) {
        return __jsx("li", {
          key: i,
          className: "jsx-2815140849",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, signal);
      })), __jsx("h4", {
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Example tasks:"), __jsx("ul", {
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, currentMilestone.examples.map(function (example, i) {
        return __jsx("li", {
          key: i,
          className: "jsx-2815140849",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, example);
      }))) : null));
    }
  }]);

  return Track;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Track);

/***/ }),

/***/ "./components/TrackSelector.js":
/*!*************************************!*\
  !*** ./components/TrackSelector.js ***!
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
/* harmony import */ var _constants_tracks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/tracks */ "./constants/tracks.js");





var _jsxFileName = "/Users/swati/src/snowflake/components/TrackSelector.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var TrackSelector =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TrackSelector, _React$Component);

  function TrackSelector() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TrackSelector);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TrackSelector).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TrackSelector, [{
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx("table", {
        className: "jsx-886021826",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "886021826",
        __self: this
      }, "table.jsx-886021826{width:100%;border-spacing:3px;border-bottom:2px solid #ccc;padding-bottom:20px;margin-bottom:20px;margin-left:-3px;}.track-selector-value.jsx-886021826{line-height:50px;width:50px;text-align:center;background:#eee;font-weight:bold;font-size:24px;border-radius:3px;cursor:pointer;}.track-selector-label.jsx-886021826{text-align:center;font-size:9px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvVHJhY2tTZWxlY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQm9CLEFBR3dCLEFBUU0sQUFVQyxXQWpCQyxNQVFSLENBVUcsVUFUSSxFQVJXLEVBa0IvQixjQVRrQixhQVJJLEdBU0gsaUJBUkUsQUFTSixlQUNHLElBVEQsY0FVRixHQVRqQixZQVVBIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvVHJhY2tTZWxlY3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNhdGVnb3J5Q29sb3JTY2FsZSB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnXG5pbXBvcnQgeyB0cmFja0lkcywgdHJhY2tzIH0gZnJvbSAnLi4vY29uc3RhbnRzL3RyYWNrcydcbmltcG9ydCB0eXBlIHsgTWlsZXN0b25lTWFwLCBUcmFja0lkIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuXG50eXBlIFByb3BzID0ge1xuICBtaWxlc3RvbmVCeVRyYWNrOiBNaWxlc3RvbmVNYXAsXG4gIGZvY3VzZWRUcmFja0lkOiBUcmFja0lkLFxuICBzZXRGb2N1c2VkVHJhY2tJZEZuOiAoVHJhY2tJZCkgPT4gdm9pZFxufVxuXG5jbGFzcyBUcmFja1NlbGVjdG9yIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRhYmxlPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItc3BhY2luZzogM3B4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTNweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRyYWNrLXNlbGVjdG9yLXZhbHVlIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50cmFjay1zZWxlY3Rvci1sYWJlbCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDlweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIHt0cmFja0lkcy5tYXAodHJhY2tJZCA9PiAoXG4gICAgICAgICAgICAgIDx0ZCBrZXk9e3RyYWNrSWR9IGNsYXNzTmFtZT1cInRyYWNrLXNlbGVjdG9yLWxhYmVsXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5zZXRGb2N1c2VkVHJhY2tJZEZuKHRyYWNrSWQpfT5cbiAgICAgICAgICAgICAgICB7dHJhY2tzW3RyYWNrSWRdLmRpc3BsYXlOYW1lfVxuICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICB7dHJhY2tJZHMubWFwKHRyYWNrSWQgPT4gKFxuICAgICAgICAgICAgICA8dGQga2V5PXt0cmFja0lkfSBjbGFzc05hbWU9XCJ0cmFjay1zZWxlY3Rvci12YWx1ZVwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e2JvcmRlcjogJzRweCBzb2xpZCAnICsgKHRyYWNrSWQgPT0gdGhpcy5wcm9wcy5mb2N1c2VkVHJhY2tJZCA/ICcjMDAwJzogY2F0ZWdvcnlDb2xvclNjYWxlKHRyYWNrc1t0cmFja0lkXS5jYXRlZ29yeSkpLCBiYWNrZ3JvdW5kOiBjYXRlZ29yeUNvbG9yU2NhbGUodHJhY2tzW3RyYWNrSWRdLmNhdGVnb3J5KX19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnNldEZvY3VzZWRUcmFja0lkRm4odHJhY2tJZCl9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLm1pbGVzdG9uZUJ5VHJhY2tbdHJhY2tJZF19XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhY2tTZWxlY3RvclxuIl19 */\n/*@ sourceURL=/Users/swati/src/snowflake/components/TrackSelector.js */"), __jsx("tbody", {
        className: "jsx-886021826",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("tr", {
        className: "jsx-886021826",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, _constants_tracks__WEBPACK_IMPORTED_MODULE_8__["trackIds"].map(function (trackId) {
        return __jsx("td", {
          key: trackId,
          onClick: function onClick() {
            return _this.props.setFocusedTrackIdFn(trackId);
          },
          className: "jsx-886021826" + " " + "track-selector-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, _constants_tracks__WEBPACK_IMPORTED_MODULE_8__["tracks"][trackId].displayName);
      })), __jsx("tr", {
        className: "jsx-886021826",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, _constants_tracks__WEBPACK_IMPORTED_MODULE_8__["trackIds"].map(function (trackId) {
        return __jsx("td", {
          key: trackId,
          style: {
            border: '4px solid ' + (trackId == _this.props.focusedTrackId ? '#000' : Object(_constants_constants__WEBPACK_IMPORTED_MODULE_7__["categoryColorScale"])(_constants_tracks__WEBPACK_IMPORTED_MODULE_8__["tracks"][trackId].category)),
            background: Object(_constants_constants__WEBPACK_IMPORTED_MODULE_7__["categoryColorScale"])(_constants_tracks__WEBPACK_IMPORTED_MODULE_8__["tracks"][trackId].category)
          },
          onClick: function onClick() {
            return _this.props.setFocusedTrackIdFn(trackId);
          },
          className: "jsx-886021826" + " " + "track-selector-value",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, _this.props.milestoneByTrack[trackId]);
      }))));
    }
  }]);

  return TrackSelector;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TrackSelector);

/***/ }),

/***/ "./constants.js":
false,

/***/ "./constants/constants.js":
/*!********************************!*\
  !*** ./constants/constants.js ***!
  \********************************/
/*! exports provided: scores, milestones, pointsToLevels, maxLevel, categoryIds, categoryPointsFromMilestoneMap, totalPointsFromMilestoneMap, categoryColorScale, titles, eligibleTitles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scores", function() { return scores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "milestones", function() { return milestones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointsToLevels", function() { return pointsToLevels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLevel", function() { return maxLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryIds", function() { return categoryIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryPointsFromMilestoneMap", function() { return categoryPointsFromMilestoneMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalPointsFromMilestoneMap", function() { return totalPointsFromMilestoneMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryColorScale", function() { return categoryColorScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titles", function() { return titles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eligibleTitles", function() { return eligibleTitles; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _constants_tracks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/tracks */ "./constants/tracks.js");





var scores = [0, 1, 2, 3, 4];
var milestones = {
  0: {
    level: 0,
    description: 'Never',
    points: 0
  },
  1: {
    level: 1,
    description: 'Rarely',
    points: 1
  },
  2: {
    level: 2,
    description: 'Sometimes',
    points: 3
  },
  3: {
    level: 3,
    description: 'Often',
    points: 6
  },
  4: {
    level: 4,
    description: 'Always',
    points: 12
  }
};
var pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  '110': '5.2',
  '135': '5.3'
};
var maxLevel = 135;
var categoryIds = trackIds.reduce(function (set, trackId) {
  set.add(_constants_tracks__WEBPACK_IMPORTED_MODULE_4__["tracks"][trackId].category);
  return set;
}, new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2___default.a());
var categoryPointsFromMilestoneMap = function categoryPointsFromMilestoneMap(milestoneMap) {
  var pointsByCategory = new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1___default.a();
  trackIds.forEach(function (trackId) {
    var milestone = milestoneMap[trackId];
    var categoryId = _constants_tracks__WEBPACK_IMPORTED_MODULE_4__["tracks"][trackId].category;
    var currentPoints = pointsByCategory.get(categoryId) || 0;
    pointsByCategory.set(categoryId, currentPoints + milestones[milestone].points);
  });
  return _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(categoryIds.values()).map(function (categoryId) {
    var points = pointsByCategory.get(categoryId);
    return {
      categoryId: categoryId,
      points: pointsByCategory.get(categoryId) || 0
    };
  });
};
var totalPointsFromMilestoneMap = function totalPointsFromMilestoneMap(milestoneMap) {
  return trackIds.map(function (trackId) {
    return milestones[milestoneMap[trackId]].points;
  }).reduce(function (sum, addend) {
    return sum + addend;
  }, 0);
};
var categoryColorScale = d3__WEBPACK_IMPORTED_MODULE_3__["scaleOrdinal"]().domain(categoryIds).range(['#47C1BF', '#006FBB', '#EEC200', '#F49342']);
var titles = [{
  label: 'Engineer I',
  minPoints: 0,
  maxPoints: 16
}, {
  label: 'Engineer II',
  minPoints: 17,
  maxPoints: 35
}, {
  label: 'Senior Engineer',
  minPoints: 36,
  maxPoints: 57
}, {
  label: 'Group Lead',
  minPoints: 36,
  maxPoints: 57
}, {
  label: 'Staff Engineer',
  minPoints: 58,
  maxPoints: 89
}, {
  label: 'Senior Group Lead',
  minPoints: 58,
  maxPoints: 89
}, {
  label: 'Principal Engineer',
  minPoints: 90
}, {
  label: 'Director of Engineering',
  minPoints: 90
}];
var eligibleTitles = function eligibleTitles(milestoneMap) {
  var totalPoints = totalPointsFromMilestoneMap(milestoneMap);
  return titles.filter(function (title) {
    return (title.minPoints === undefined || totalPoints >= title.minPoints) && (title.maxPoints === undefined || totalPoints <= title.maxPoints);
  }).map(function (title) {
    return title.label;
  });
};

/***/ })

})
//# sourceMappingURL=index.js.c0a2e05daa74234a3370.hot-update.js.map