webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/LevelThermometer.js":
/*!****************************************!*\
  !*** ./components/LevelThermometer.js ***!
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
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/constants */ "./constants/constants.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/swati/src/snowflake/components/LevelThermometer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;



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
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(LevelThermometer, _React$Component);

  function LevelThermometer(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LevelThermometer);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(LevelThermometer).call(this, props));
    _this.pointScale = d3__WEBPACK_IMPORTED_MODULE_6__["scaleLinear"]().domain([0, 100]).rangeRound([0, width - margins.left - margins.right]);
    _this.bottomAxisFn = d3__WEBPACK_IMPORTED_MODULE_6__["axisBottom"]().scale(_this.pointScale).tickValues([5, 10, 25, 50, 75, 100]).tickFormat(function (points) {
      return points + '%';
    });
    _this.topAxisFn = _this.bottomAxisFn;
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LevelThermometer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      d3__WEBPACK_IMPORTED_MODULE_6__["select"](this.topAxis).call(this.topAxisFn).selectAll('text').attr("y", 0).attr("x", -25).attr("transform", "rotate(90)").attr("dy", ".35em").style('font-size', '12px').style('text-anchor', 'start');
      d3__WEBPACK_IMPORTED_MODULE_6__["select"](this.bottomAxis).call(this.bottomAxisFn).selectAll('text').attr("y", 0).attr("x", 10).attr("transform", "rotate(90)").attr("dy", ".35em").style('font-size', '12px').style('text-anchor', 'start');
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

      var categoryPoints = Object(_constants_constants__WEBPACK_IMPORTED_MODULE_7__["categoryPointsFromMilestoneMap"])(this.props.milestoneByTrack);
      var lastCategoryIndex = 0;
      categoryPoints.forEach(function (categoryPoint, i) {
        if (categoryPoint.points) lastCategoryIndex = i;
      });
      var cumulativePoints = 0;
      return __jsx("figure", {
        className: "jsx-2708482886",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2708482886",
        __self: this
      }, "figure.jsx-2708482886{margin:0 0 0 -10px;}svg.jsx-2708482886{width:".concat(width, "px;height:").concat(height + 10, "px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvTGV2ZWxUaGVybW9tZXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRW9CLEFBR2dDLEFBR2tCLG1CQUZ2QyxrQkFHd0Msc0NBQ3hDIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvTGV2ZWxUaGVybW9tZXRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgY2F0ZWdvcnlQb2ludHNGcm9tTWlsZXN0b25lTWFwLCBjYXRlZ29yeUNvbG9yU2NhbGUsIGNhdGVnb3J5SWRzLCBtYXhQb2ludHMgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBNaWxlc3RvbmVNYXAgfSBmcm9tICcuLi9jb25zdGFudHMnXG5cbmNvbnN0IG1hcmdpbnMgPSB7XG4gIHRvcDogMzAsXG4gIHJpZ2h0OiAyMCxcbiAgYm90dG9tOiAzMCxcbiAgbGVmdDogMTBcbn1cbmNvbnN0IGhlaWdodCA9IDE1MFxuY29uc3Qgd2lkdGggPSA1NTBcblxudHlwZSBQcm9wcyA9IHtcbiAgbWlsZXN0b25lQnlUcmFjazogTWlsZXN0b25lTWFwLFxufVxuXG5jbGFzcyBMZXZlbFRoZXJtb21ldGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIHBvaW50U2NhbGU6IGFueVxuICB0b3BBeGlzRm46IGFueVxuICBib3R0b21BeGlzRm46IGFueVxuICB0b3BBeGlzOiAqXG4gIGJvdHRvbUF4aXM6ICpcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogKikge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5wb2ludFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKVxuICAgICAgLmRvbWFpbihbMCwgMTAwXSlcbiAgICAgIC5yYW5nZVJvdW5kKFswLCB3aWR0aCAtIG1hcmdpbnMubGVmdCAtIG1hcmdpbnMucmlnaHRdKTtcblxuICAgIHRoaXMuYm90dG9tQXhpc0ZuID0gZDMuYXhpc0JvdHRvbSgpXG4gICAgICAuc2NhbGUodGhpcy5wb2ludFNjYWxlKVxuICAgICAgLnRpY2tWYWx1ZXMoWzUsIDEwLCAyNSwgNTAsIDc1LCAxMDBdKVxuICAgICAgLnRpY2tGb3JtYXQocG9pbnRzID0+IHBvaW50cyArICclJylcblxuICAgIHRoaXMudG9wQXhpc0ZuID0gdGhpcy5ib3R0b21BeGlzRm5cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGQzLnNlbGVjdCh0aGlzLnRvcEF4aXMpLmNhbGwodGhpcy50b3BBeGlzRm4pXG4gICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgIC5hdHRyKFwieVwiLCAwKVxuICAgICAgLmF0dHIoXCJ4XCIsIC0yNSlcbiAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKDkwKVwiKVxuICAgICAgLmF0dHIoXCJkeVwiLCBcIi4zNWVtXCIpXG4gICAgICAuc3R5bGUoJ2ZvbnQtc2l6ZScsICcxMnB4JylcbiAgICAgIC5zdHlsZSgndGV4dC1hbmNob3InLCAnc3RhcnQnKVxuICAgIGQzLnNlbGVjdCh0aGlzLmJvdHRvbUF4aXMpLmNhbGwodGhpcy5ib3R0b21BeGlzRm4pXG4gICAgICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgICAgIC5hdHRyKFwieVwiLCAwKVxuICAgICAgLmF0dHIoXCJ4XCIsIDEwKVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoOTApXCIpXG4gICAgICAuYXR0cihcImR5XCIsIFwiLjM1ZW1cIilcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzEycHgnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpXG4gIH1cblxuICByaWdodFJvdW5kZWRSZWN0KHg6ICosIHk6ICosIHdpZHRoOiAqLCBoZWlnaHQ6ICosIHJhZGl1czogKikge1xuICAgIHJldHVybiBcIk1cIiArIHggKyBcIixcIiArIHlcbiAgICAgICAgICsgXCJoXCIgKyAod2lkdGggLSByYWRpdXMpXG4gICAgICAgICArIFwiYVwiICsgcmFkaXVzICsgXCIsXCIgKyByYWRpdXMgKyBcIiAwIDAgMSBcIiArIHJhZGl1cyArIFwiLFwiICsgcmFkaXVzXG4gICAgICAgICArIFwidlwiICsgKGhlaWdodCAtIDIgKiByYWRpdXMpXG4gICAgICAgICArIFwiYVwiICsgcmFkaXVzICsgXCIsXCIgKyByYWRpdXMgKyBcIiAwIDAgMSBcIiArIC1yYWRpdXMgKyBcIixcIiArIHJhZGl1c1xuICAgICAgICAgKyBcImhcIiArIChyYWRpdXMgLSB3aWR0aClcbiAgICAgICAgICsgXCJ6XCI7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCBjYXRlZ29yeVBvaW50cyA9IGNhdGVnb3J5UG9pbnRzRnJvbU1pbGVzdG9uZU1hcCh0aGlzLnByb3BzLm1pbGVzdG9uZUJ5VHJhY2spXG4gICAgbGV0IGxhc3RDYXRlZ29yeUluZGV4ID0gMFxuICAgIGNhdGVnb3J5UG9pbnRzLmZvckVhY2goKGNhdGVnb3J5UG9pbnQsIGkpID0+IHtcbiAgICAgIGlmIChjYXRlZ29yeVBvaW50LnBvaW50cykgbGFzdENhdGVnb3J5SW5kZXggPSBpXG4gICAgfSlcbiAgICBsZXQgY3VtdWxhdGl2ZVBvaW50cyA9IDBcbiAgICByZXR1cm4gKFxuICAgICAgPGZpZ3VyZT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGZpZ3VyZSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwIC0xMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgd2lkdGg6ICR7d2lkdGh9cHg7XG4gICAgICAgICAgICBoZWlnaHQ6ICR7aGVpZ2h0ICsgMTB9cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdmc+XG4gICAgICAgICAgPGcgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKCR7bWFyZ2lucy5sZWZ0fSwke21hcmdpbnMudG9wfSlgfT5cbiAgICAgICAgICAgIHtjYXRlZ29yeVBvaW50cy5tYXAoKGNhdGVnb3J5UG9pbnQsIGkpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeCA9IHRoaXMucG9pbnRTY2FsZShjdW11bGF0aXZlUG9pbnRzKVxuICAgICAgICAgICAgICBjb25zdCBjYXRlZ29yeVBlcmNlbnQgPSAoY2F0ZWdvcnlQb2ludC5wb2ludHMgLyBtYXhQb2ludHMpICogMTAwXG4gICAgICAgICAgICAgIGNvbnN0IHdpZHRoID0gdGhpcy5wb2ludFNjYWxlKGN1bXVsYXRpdmVQb2ludHMgKyBjYXRlZ29yeVBlcmNlbnQpIC0geFxuICAgICAgICAgICAgICBjdW11bGF0aXZlUG9pbnRzICs9IGNhdGVnb3J5UGVyY2VudFxuICAgICAgICAgICAgICByZXR1cm4gKGkgIT0gbGFzdENhdGVnb3J5SW5kZXggP1xuICAgICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgICAgIGtleT17Y2F0ZWdvcnlQb2ludC5jYXRlZ29yeUlkfVxuICAgICAgICAgICAgICAgICAgICB4PXt4fVxuICAgICAgICAgICAgICAgICAgICB5PXswfVxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0IC0gbWFyZ2lucy50b3AgLSBtYXJnaW5zLmJvdHRvbX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmaWxsOiBjYXRlZ29yeUNvbG9yU2NhbGUoY2F0ZWdvcnlQb2ludC5jYXRlZ29yeUlkKSwgYm9yZGVyUmlnaHQ6IFwiMXB4IHNvbGlkICMwMDBcIn19XG4gICAgICAgICAgICAgICAgICAgIC8+IDpcbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2NhdGVnb3J5UG9pbnQuY2F0ZWdvcnlJZH1cbiAgICAgICAgICAgICAgICAgICAgZD17dGhpcy5yaWdodFJvdW5kZWRSZWN0KHgsIDAsIHdpZHRoLCBoZWlnaHQgLSBtYXJnaW5zLnRvcCAtIG1hcmdpbnMuYm90dG9tLCAzKX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmaWxsOiBjYXRlZ29yeUNvbG9yU2NhbGUoY2F0ZWdvcnlQb2ludC5jYXRlZ29yeUlkKX19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPGcgcmVmPXtyZWYgPT4gdGhpcy50b3BBeGlzID0gcmVmfSBjbGFzc05hbWU9XCJ0b3AtYXhpc1wiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPXtgdHJhbnNsYXRlKDAsIC0yKWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxnIHJlZj17cmVmID0+IHRoaXMuYm90dG9tQXhpcyA9IHJlZn0gY2xhc3NOYW1lPVwiYm90dG9tLWF4aXNcIlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgwLCR7aGVpZ2h0IC0gbWFyZ2lucy50b3AgLSBtYXJnaW5zLmJvdHRvbSArIDF9KWB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9maWd1cmU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExldmVsVGhlcm1vbWV0ZXJcbiJdfQ== */\n/*@ sourceURL=/Users/swati/src/snowflake/components/LevelThermometer.js */")), __jsx("svg", {
        className: "jsx-2708482886",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("g", {
        transform: "translate(".concat(margins.left, ",").concat(margins.top, ")"),
        className: "jsx-2708482886",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, categoryPoints.map(function (categoryPoint, i) {
        var x = _this2.pointScale(cumulativePoints);

        var categoryPercent = categoryPoint.points / _constants_constants__WEBPACK_IMPORTED_MODULE_7__["maxPoints"] * 100;
        var width = _this2.pointScale(cumulativePoints + categoryPercent) - x;
        cumulativePoints += categoryPercent;
        return i != lastCategoryIndex ? __jsx("rect", {
          key: categoryPoint.categoryId,
          x: x,
          y: 0,
          width: width,
          height: height - margins.top - margins.bottom,
          style: {
            fill: Object(_constants_constants__WEBPACK_IMPORTED_MODULE_7__["categoryColorScale"])(categoryPoint.categoryId),
            borderRight: "1px solid #000"
          },
          className: "jsx-2708482886",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }) : __jsx("path", {
          key: categoryPoint.categoryId,
          d: _this2.rightRoundedRect(x, 0, width, height - margins.top - margins.bottom, 3),
          style: {
            fill: Object(_constants_constants__WEBPACK_IMPORTED_MODULE_7__["categoryColorScale"])(categoryPoint.categoryId)
          },
          className: "jsx-2708482886",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
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
          lineNumber: 112
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
          lineNumber: 115
        },
        __self: this
      }))));
    }
  }]);

  return LevelThermometer;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LevelThermometer);

/***/ }),

/***/ "./constants/constants.js":
/*!********************************!*\
  !*** ./constants/constants.js ***!
  \********************************/
/*! exports provided: scores, milestones, pointsToLevels, maxPoints, categoryIds, categoryPointsFromMilestoneMap, totalPointsFromMilestoneMap, categoryColorScale, titles, eligibleTitles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scores", function() { return scores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "milestones", function() { return milestones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointsToLevels", function() { return pointsToLevels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxPoints", function() { return maxPoints; });
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
    points: 2
  },
  3: {
    level: 3,
    description: 'Often',
    points: 3
  },
  4: {
    level: 4,
    description: 'Always',
    points: 4
  }
};
var pointsToLevels = {
  '0': '1.1',
  '3': '1.2',
  '7': '1.3',
  '10': '2.1',
  '14': '2.2',
  '17': '2.3',
  '22': '3.1',
  '26': '3.2',
  '30': '3.3',
  '35': '4.1',
  '40': '4.2',
  '44': '4.3',
  '54': '5.1',
  '100': '5.2'
};
var maxPoints = 64;
var categoryIds = _constants_tracks__WEBPACK_IMPORTED_MODULE_4__["trackIds"].reduce(function (set, trackId) {
  set.add(_constants_tracks__WEBPACK_IMPORTED_MODULE_4__["tracks"][trackId].category);
  return set;
}, new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2___default.a());
var categoryPointsFromMilestoneMap = function categoryPointsFromMilestoneMap(milestoneMap) {
  var pointsByCategory = new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1___default.a();
  _constants_tracks__WEBPACK_IMPORTED_MODULE_4__["trackIds"].forEach(function (trackId) {
    var milestone = milestoneMap[trackId];
    var categoryId = _constants_tracks__WEBPACK_IMPORTED_MODULE_4__["tracks"][trackId].category;
    var currentPoints = pointsByCategory.get(categoryId) || 0;
    pointsByCategory.set(categoryId, currentPoints + milestones[milestone].points);
  });
  return _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(categoryIds.values()).map(function (categoryId) {
    var points = pointsByCategory.get(categoryId) || 0;
    return {
      categoryId: categoryId,
      points: points
    };
  });
};
var totalPointsFromMilestoneMap = function totalPointsFromMilestoneMap(milestoneMap) {
  return _constants_tracks__WEBPACK_IMPORTED_MODULE_4__["trackIds"].map(function (trackId) {
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
//# sourceMappingURL=index.js.0bc938064e96fb3c6cb5.hot-update.js.map