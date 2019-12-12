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
    _this.bottomAxisFn = d3__WEBPACK_IMPORTED_MODULE_7__["axisBottom"]().scale(_this.pointScale).tickValues(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(_constants_constants__WEBPACK_IMPORTED_MODULE_8__["pointsToLevels"]) + '');
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
      }, "figure.jsx-2708482886{margin:0 0 0 -10px;}svg.jsx-2708482886{width:".concat(width, "px;height:").concat(height + 10, "px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvTGV2ZWxUaGVybW9tZXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRm9CLEFBR2dDLEFBR2tCLG1CQUZ2QyxrQkFHd0Msc0NBQ3hDIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvTGV2ZWxUaGVybW9tZXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgcG9pbnRzVG9MZXZlbHMsIGNhdGVnb3J5UG9pbnRzRnJvbU1pbGVzdG9uZU1hcCwgY2F0ZWdvcnlDb2xvclNjYWxlLCBjYXRlZ29yeUlkcyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IE1pbGVzdG9uZU1hcCB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuY29uc3QgbWFyZ2lucyA9IHtcbiAgdG9wOiAzMCxcbiAgcmlnaHQ6IDIwLFxuICBib3R0b206IDMwLFxuICBsZWZ0OiAxMFxufVxuY29uc3QgaGVpZ2h0ID0gMTUwXG5jb25zdCB3aWR0aCA9IDU1MFxuXG50eXBlIFByb3BzID0ge1xuICBtaWxlc3RvbmVCeVRyYWNrOiBNaWxlc3RvbmVNYXAsXG59XG5cbmNsYXNzIExldmVsVGhlcm1vbWV0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgcG9pbnRTY2FsZTogYW55XG4gIHRvcEF4aXNGbjogYW55XG4gIGJvdHRvbUF4aXNGbjogYW55XG4gIHRvcEF4aXM6ICpcbiAgYm90dG9tQXhpczogKlxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiAqKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnBvaW50U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKFswLCAxMzVdKVxuICAgICAgLnJhbmdlUm91bmQoWzAsIHdpZHRoIC0gbWFyZ2lucy5sZWZ0IC0gbWFyZ2lucy5yaWdodF0pO1xuXG4gICAgdGhpcy50b3BBeGlzRm4gPSBkMy5heGlzVG9wKClcbiAgICAgIC5zY2FsZSh0aGlzLnBvaW50U2NhbGUpXG4gICAgICAudGlja1ZhbHVlcyhPYmplY3Qua2V5cyhwb2ludHNUb0xldmVscykpXG4gICAgICAudGlja0Zvcm1hdChwb2ludHMgPT4gcG9pbnRzVG9MZXZlbHNbcG9pbnRzXSlcblxuICAgIHRoaXMuYm90dG9tQXhpc0ZuID0gZDMuYXhpc0JvdHRvbSgpXG4gICAgICAuc2NhbGUodGhpcy5wb2ludFNjYWxlKVxuICAgICAgLnRpY2tWYWx1ZXMoT2JqZWN0LmtleXMocG9pbnRzVG9MZXZlbHMpICsgJycpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBkMy5zZWxlY3QodGhpcy50b3BBeGlzKS5jYWxsKHRoaXMudG9wQXhpc0ZuKVxuICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAuYXR0cihcInlcIiwgMClcbiAgICAgIC5hdHRyKFwieFwiLCAtMjUpXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSg5MClcIilcbiAgICAgIC5hdHRyKFwiZHlcIiwgXCIuMzVlbVwiKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTJweCcpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcbiAgICBkMy5zZWxlY3QodGhpcy5ib3R0b21BeGlzKS5jYWxsKHRoaXMuYm90dG9tQXhpc0ZuKVxuICAgICAgLnNlbGVjdEFsbCgndGV4dCcpXG4gICAgICAuYXR0cihcInlcIiwgMClcbiAgICAgIC5hdHRyKFwieFwiLCAxMClcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKDkwKVwiKVxuICAgICAgLmF0dHIoXCJkeVwiLCBcIi4zNWVtXCIpXG4gICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcxMnB4JylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnc3RhcnQnKVxuICB9XG5cbiAgcmlnaHRSb3VuZGVkUmVjdCh4OiAqLCB5OiAqLCB3aWR0aDogKiwgaGVpZ2h0OiAqLCByYWRpdXM6ICopIHtcbiAgICByZXR1cm4gXCJNXCIgKyB4ICsgXCIsXCIgKyB5XG4gICAgICAgICArIFwiaFwiICsgKHdpZHRoIC0gcmFkaXVzKVxuICAgICAgICAgKyBcImFcIiArIHJhZGl1cyArIFwiLFwiICsgcmFkaXVzICsgXCIgMCAwIDEgXCIgKyByYWRpdXMgKyBcIixcIiArIHJhZGl1c1xuICAgICAgICAgKyBcInZcIiArIChoZWlnaHQgLSAyICogcmFkaXVzKVxuICAgICAgICAgKyBcImFcIiArIHJhZGl1cyArIFwiLFwiICsgcmFkaXVzICsgXCIgMCAwIDEgXCIgKyAtcmFkaXVzICsgXCIsXCIgKyByYWRpdXNcbiAgICAgICAgICsgXCJoXCIgKyAocmFkaXVzIC0gd2lkdGgpXG4gICAgICAgICArIFwielwiO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY2F0ZWdvcnlQb2ludHMgPSBjYXRlZ29yeVBvaW50c0Zyb21NaWxlc3RvbmVNYXAodGhpcy5wcm9wcy5taWxlc3RvbmVCeVRyYWNrKVxuICAgIGxldCBsYXN0Q2F0ZWdvcnlJbmRleCA9IDBcbiAgICBjYXRlZ29yeVBvaW50cy5mb3JFYWNoKChjYXRlZ29yeVBvaW50LCBpKSA9PiB7XG4gICAgICBpZiAoY2F0ZWdvcnlQb2ludC5wb2ludHMpIGxhc3RDYXRlZ29yeUluZGV4ID0gaVxuICAgIH0pXG4gICAgbGV0IGN1bXVsYXRpdmVQb2ludHMgPSAwXG4gICAgcmV0dXJuIChcbiAgICAgIDxmaWd1cmU+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBmaWd1cmUge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMCAtMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIHdpZHRoOiAke3dpZHRofXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAke2hlaWdodCArIDEwfXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3ZnPlxuICAgICAgICAgIDxnIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbnMubGVmdH0sJHttYXJnaW5zLnRvcH0pYH0+XG4gICAgICAgICAgICB7Y2F0ZWdvcnlQb2ludHMubWFwKChjYXRlZ29yeVBvaW50LCBpKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHggPSB0aGlzLnBvaW50U2NhbGUoY3VtdWxhdGl2ZVBvaW50cylcbiAgICAgICAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLnBvaW50U2NhbGUoY3VtdWxhdGl2ZVBvaW50cyArIGNhdGVnb3J5UG9pbnQucG9pbnRzKSAtIHhcbiAgICAgICAgICAgICAgY3VtdWxhdGl2ZVBvaW50cyArPSBjYXRlZ29yeVBvaW50LnBvaW50c1xuICAgICAgICAgICAgICByZXR1cm4gKGkgIT0gbGFzdENhdGVnb3J5SW5kZXggP1xuICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICAgIGtleT17Y2F0ZWdvcnlQb2ludC5jYXRlZ29yeUlkfVxuICAgICAgICAgICAgICAgICAgICB4PXt4fVxuICAgICAgICAgICAgICAgICAgICB5PXswfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0IC0gbWFyZ2lucy50b3AgLSBtYXJnaW5zLmJvdHRvbX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmaWxsOiBjYXRlZ29yeUNvbG9yU2NhbGUoY2F0ZWdvcnlQb2ludC5jYXRlZ29yeUlkKSwgYm9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkICMwMDBcIn19XG4gICAgICAgICAgICAgICAgICAgIC8+IDpcbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2NhdGVnb3J5UG9pbnQuY2F0ZWdvcnlJZH1cbiAgICAgICAgICAgICAgICAgICAgZD17dGhpcy5yaWdodFJvdW5kZWRSZWN0KHgsIDAsIHdpZHRoLCBoZWlnaHQgLSBtYXJnaW5zLnRvcCAtIG1hcmdpbnMuYm90dG9tLCAzKX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmaWxsOiBjYXRlZ29yeUNvbG9yU2NhbGUoY2F0ZWdvcnlQb2ludC5jYXRlZ29yeUlkKX19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPGcgcmVmPXtyZWYgPT4gdGhpcy50b3BBeGlzID0gcmVmfSBjbGFzc05hbWU9XCJ0b3AtYXhpc1wiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKDAsIC0yKWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxnIHJlZj17cmVmID0+IHRoaXMuYm90dG9tQXhpcyA9IHJlZn0gY2xhc3NOYW1lPVwiYm90dG9tLWF4aXNcIlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgwLCR7aGVpZ2h0IC0gbWFyZ2lucy50b3AgLSBtYXJnaW5zLmJvdHRvbSArIDF9KWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9maWd1cmU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExldmVsVGhlcm1vbWV0ZXJcbiJdfQ== */\n/*@ sourceURL=/Users/swati/src/snowflake/components/LevelThermometer.js */")), __jsx("svg", {
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

/***/ })

})
//# sourceMappingURL=index.js.9d943809554a0f337ba8.hot-update.js.map