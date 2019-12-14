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
    _this.bottomAxisFn = d3__WEBPACK_IMPORTED_MODULE_6__["axisBottom"]().scale(_this.pointScale).tickValues(_constants_constants__WEBPACK_IMPORTED_MODULE_7__["thermometerIncrements"]).tickFormat(function (points) {
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
        className: "jsx-1180054621",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1180054621",
        __self: this
      }, "figure.jsx-1180054621{margin:0 0 0 -10px;}svg.jsx-1180054621{width:".concat(width, "px;height:").concat(height + 10, "px;}div.jsx-1180054621{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvTGV2ZWxUaGVybW9tZXRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRW9CLEFBR2dDLEFBR2tCLEFBS25CLGtCQUNwQixDQVJBLGtCQUd3QyxzQ0FDeEMiLCJmaWxlIjoiL1VzZXJzL3N3YXRpL3NyYy9zbm93Zmxha2UvY29tcG9uZW50cy9MZXZlbFRoZXJtb21ldGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0ICogYXMgZDMgZnJvbSAnZDMnXG5pbXBvcnQgeyBjYXRlZ29yeVBvaW50c0Zyb21NaWxlc3RvbmVNYXAsIGNhdGVnb3J5Q29sb3JTY2FsZSwgY2F0ZWdvcnlJZHMsIHRoZXJtb21ldGVySW5jcmVtZW50cywgY2FsY3VsYXRlQ2F0ZWdvcnlTY29yZSB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IE1pbGVzdG9uZU1hcCB9IGZyb20gJy4uL2NvbnN0YW50cydcblxuY29uc3QgbWFyZ2lucyA9IHtcbiAgdG9wOiAzMCxcbiAgcmlnaHQ6IDIwLFxuICBib3R0b206IDMwLFxuICBsZWZ0OiAxMFxufVxuY29uc3QgaGVpZ2h0ID0gMTUwXG5jb25zdCB3aWR0aCA9IDU1MFxuXG50eXBlIFByb3BzID0ge1xuICBtaWxlc3RvbmVCeVRyYWNrOiBNaWxlc3RvbmVNYXAsXG59XG5cbmNsYXNzIExldmVsVGhlcm1vbWV0ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgcG9pbnRTY2FsZTogYW55XG4gIHRvcEF4aXNGbjogYW55XG4gIGJvdHRvbUF4aXNGbjogYW55XG4gIHRvcEF4aXM6ICpcbiAgYm90dG9tQXhpczogKlxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiAqKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnBvaW50U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpXG4gICAgICAuZG9tYWluKFswLCAxMDBdKVxuICAgICAgLnJhbmdlUm91bmQoWzAsIHdpZHRoIC0gbWFyZ2lucy5sZWZ0IC0gbWFyZ2lucy5yaWdodF0pO1xuXG4gICAgdGhpcy5ib3R0b21BeGlzRm4gPSBkMy5heGlzQm90dG9tKClcbiAgICAgIC5zY2FsZSh0aGlzLnBvaW50U2NhbGUpXG4gICAgICAudGlja1ZhbHVlcyh0aGVybW9tZXRlckluY3JlbWVudHMpXG4gICAgICAudGlja0Zvcm1hdChwb2ludHMgPT4gcG9pbnRzICsgJyUnKVxuXG4gICAgdGhpcy50b3BBeGlzRm4gPSB0aGlzLmJvdHRvbUF4aXNGblxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZDMuc2VsZWN0KHRoaXMudG9wQXhpcykuY2FsbCh0aGlzLnRvcEF4aXNGbilcbiAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgLmF0dHIoXCJ5XCIsIDApXG4gICAgICAuYXR0cihcInhcIiwgLTI1KVxuICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoOTApXCIpXG4gICAgICAuYXR0cihcImR5XCIsIFwiLjM1ZW1cIilcbiAgICAgIC5zdHlsZSgnZm9udC1zaXplJywgJzEycHgnKVxuICAgICAgLnN0eWxlKCd0ZXh0LWFuY2hvcicsICdzdGFydCcpXG4gICAgZDMuc2VsZWN0KHRoaXMuYm90dG9tQXhpcykuY2FsbCh0aGlzLmJvdHRvbUF4aXNGbilcbiAgICAgIC5zZWxlY3RBbGwoJ3RleHQnKVxuICAgICAgLmF0dHIoXCJ5XCIsIDApXG4gICAgICAuYXR0cihcInhcIiwgMTApXG4gICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSg5MClcIilcbiAgICAgIC5hdHRyKFwiZHlcIiwgXCIuMzVlbVwiKVxuICAgICAgLnN0eWxlKCdmb250LXNpemUnLCAnMTJweCcpXG4gICAgICAuc3R5bGUoJ3RleHQtYW5jaG9yJywgJ3N0YXJ0JylcbiAgfVxuXG4gIHJpZ2h0Um91bmRlZFJlY3QoeDogKiwgeTogKiwgd2lkdGg6ICosIGhlaWdodDogKiwgcmFkaXVzOiAqKSB7XG4gICAgcmV0dXJuIFwiTVwiICsgeCArIFwiLFwiICsgeVxuICAgICAgICAgKyBcImhcIiArICh3aWR0aCAtIHJhZGl1cylcbiAgICAgICAgICsgXCJhXCIgKyByYWRpdXMgKyBcIixcIiArIHJhZGl1cyArIFwiIDAgMCAxIFwiICsgcmFkaXVzICsgXCIsXCIgKyByYWRpdXNcbiAgICAgICAgICsgXCJ2XCIgKyAoaGVpZ2h0IC0gMiAqIHJhZGl1cylcbiAgICAgICAgICsgXCJhXCIgKyByYWRpdXMgKyBcIixcIiArIHJhZGl1cyArIFwiIDAgMCAxIFwiICsgLXJhZGl1cyArIFwiLFwiICsgcmFkaXVzXG4gICAgICAgICArIFwiaFwiICsgKHJhZGl1cyAtIHdpZHRoKVxuICAgICAgICAgKyBcInpcIjtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNhdGVnb3J5UG9pbnRzID0gY2F0ZWdvcnlQb2ludHNGcm9tTWlsZXN0b25lTWFwKHRoaXMucHJvcHMubWlsZXN0b25lQnlUcmFjaylcbiAgICBsZXQgbGFzdENhdGVnb3J5SW5kZXggPSAwXG4gICAgY2F0ZWdvcnlQb2ludHMuZm9yRWFjaCgoY2F0ZWdvcnlQb2ludCwgaSkgPT4ge1xuICAgICAgaWYgKGNhdGVnb3J5UG9pbnQucG9pbnRzKSBsYXN0Q2F0ZWdvcnlJbmRleCA9IGlcbiAgICB9KVxuICAgIGxldCBjdW11bGF0aXZlUG9pbnRzID0gMFxuICAgIHJldHVybiAoXG4gICAgICA8ZmlndXJlPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZmlndXJlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDAgLTEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICB3aWR0aDogJHt3aWR0aH1weDtcbiAgICAgICAgICAgIGhlaWdodDogJHtoZWlnaHQgKyAxMH1weDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXYge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3ZnPlxuICAgICAgICAgIDxnIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke21hcmdpbnMubGVmdH0sJHttYXJnaW5zLnRvcH0pYH0+XG4gICAgICAgICAgICB7Y2F0ZWdvcnlQb2ludHMuc2xpY2UoMCwgMykubWFwKChjYXRlZ29yeVBvaW50LCBpKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHggPSB0aGlzLnBvaW50U2NhbGUoY3VtdWxhdGl2ZVBvaW50cylcbiAgICAgICAgICAgICAgY29uc3QgY2F0ZWdvcnlQZXJjZW50ID0gY2FsY3VsYXRlQ2F0ZWdvcnlTY29yZShjYXRlZ29yeVBvaW50LnBvaW50cywgY2F0ZWdvcnlQb2ludHNbM10ucG9pbnRzKVxuICAgICAgICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMucG9pbnRTY2FsZShjdW11bGF0aXZlUG9pbnRzICsgY2F0ZWdvcnlQZXJjZW50KSAtIHhcbiAgICAgICAgICAgICAgY3VtdWxhdGl2ZVBvaW50cyArPSBjYXRlZ29yeVBlcmNlbnRcbiAgICAgICAgICAgICAgcmV0dXJuIChpICE9IGxhc3RDYXRlZ29yeUluZGV4ID9cbiAgICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgICAgICBrZXk9e2NhdGVnb3J5UG9pbnQuY2F0ZWdvcnlJZH1cbiAgICAgICAgICAgICAgICAgICAgeD17eH1cbiAgICAgICAgICAgICAgICAgICAgeT17MH1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9e3dpZHRofVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e2hlaWdodCAtIG1hcmdpbnMudG9wIC0gbWFyZ2lucy5ib3R0b219XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZmlsbDogY2F0ZWdvcnlDb2xvclNjYWxlKGNhdGVnb3J5UG9pbnQuY2F0ZWdvcnlJZCksIGJvcmRlclJpZ2h0OiBcIjFweCBzb2xpZCAjMDAwXCJ9fVxuICAgICAgICAgICAgICAgICAgICAvPiA6XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAga2V5PXtjYXRlZ29yeVBvaW50LmNhdGVnb3J5SWR9XG4gICAgICAgICAgICAgICAgICAgIGQ9e3RoaXMucmlnaHRSb3VuZGVkUmVjdCh4LCAwLCB3aWR0aCwgaGVpZ2h0IC0gbWFyZ2lucy50b3AgLSBtYXJnaW5zLmJvdHRvbSwgMyl9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZmlsbDogY2F0ZWdvcnlDb2xvclNjYWxlKGNhdGVnb3J5UG9pbnQuY2F0ZWdvcnlJZCl9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDxnIHJlZj17cmVmID0+IHRoaXMudG9wQXhpcyA9IHJlZn0gY2xhc3NOYW1lPVwidG9wLWF4aXNcIlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgwLCAtMilgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZyByZWY9e3JlZiA9PiB0aGlzLmJvdHRvbUF4aXMgPSByZWZ9IGNsYXNzTmFtZT1cImJvdHRvbS1heGlzXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoMCwke2hlaWdodCAtIG1hcmdpbnMudG9wIC0gbWFyZ2lucy5ib3R0b20gKyAxfSlgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9XCIuL3N0YXRpYy90cnVzdC1lcXVhdGlvbi1mdWxsLnBuZ1wiIGFsdD1cInRydXN0IGVxdWF0aW9uXCIgd2lkdGg9XCI0MDBcIiAvPjwvZGl2PlxuICAgICAgPC9maWd1cmU+XG4gICAgICBcbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTGV2ZWxUaGVybW9tZXRlclxuIl19 */\n/*@ sourceURL=/Users/swati/src/snowflake/components/LevelThermometer.js */")), __jsx("svg", {
        className: "jsx-1180054621",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx("g", {
        transform: "translate(".concat(margins.left, ",").concat(margins.top, ")"),
        className: "jsx-1180054621",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, categoryPoints.slice(0, 3).map(function (categoryPoint, i) {
        var x = _this2.pointScale(cumulativePoints);

        var categoryPercent = Object(_constants_constants__WEBPACK_IMPORTED_MODULE_7__["calculateCategoryScore"])(categoryPoint.points, categoryPoints[3].points);
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
          className: "jsx-1180054621",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101
          },
          __self: this
        }) : __jsx("path", {
          key: categoryPoint.categoryId,
          d: _this2.rightRoundedRect(x, 0, width, height - margins.top - margins.bottom, 3),
          style: {
            fill: Object(_constants_constants__WEBPACK_IMPORTED_MODULE_7__["categoryColorScale"])(categoryPoint.categoryId)
          },
          className: "jsx-1180054621",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        });
      }), __jsx("g", {
        ref: function ref(_ref) {
          return _this2.topAxis = _ref;
        },
        transform: "translate(0, -2)",
        className: "jsx-1180054621" + " " + "top-axis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }), __jsx("g", {
        ref: function ref(_ref2) {
          return _this2.bottomAxis = _ref2;
        },
        transform: "translate(0,".concat(height - margins.top - margins.bottom + 1, ")"),
        className: "jsx-1180054621" + " " + "bottom-axis",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }))), __jsx("div", {
        className: "jsx-1180054621",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, __jsx("img", {
        src: "./static/trust-equation-full.png",
        alt: "trust equation",
        width: "400",
        className: "jsx-1180054621",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      })));
    }
  }]);

  return LevelThermometer;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LevelThermometer);

/***/ })

})
//# sourceMappingURL=index.js.f8de896f5a7ea9be6f0d.hot-update.js.map