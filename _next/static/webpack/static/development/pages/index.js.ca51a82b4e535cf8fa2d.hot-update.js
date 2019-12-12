webpackHotUpdate("static/development/pages/index.js",{

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
      var totalPoints = Object(_constants_constants__WEBPACK_IMPORTED_MODULE_6__["totalPointsFromMilestoneMap"])(this.props.milestoneByTrack) / maxPoints * 100;
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
        label: 'Trust Battery',
        value: totalPoints
      }];
      return __jsx("table", {
        className: "jsx-3403694977",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3403694977",
        __self: this
      }, "table.jsx-3403694977{border-spacing:3px;margin-bottom:20px;margin-left:-3px;}.point-summary-label.jsx-3403694977{font-size:12px;text-align:center;font-weight:normal;width:120px;}.point-summary-value.jsx-3403694977{width:120px;background:#eee;font-size:24px;font-weight:bold;line-height:50px;border-radius:2px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvUG9pbnRTdW1tYXJpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNvQixBQUdnQyxBQUtKLEFBTUgsWUFDSSxHQU5FLElBTEMsU0FZSixLQU5JLEtBTEYsS0FZQSxTQU5MLEdBTGQsS0FZbUIsSUFObkIsYUFPb0Isa0JBQ0Esa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvUG9pbnRTdW1tYXJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgeyBwb2ludHNUb0xldmVscywgdHJhY2tJZHMsIHRvdGFsUG9pbnRzRnJvbU1pbGVzdG9uZU1hcCB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnXG5pbXBvcnQgdHlwZSB7IE1pbGVzdG9uZU1hcCB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIG1pbGVzdG9uZUJ5VHJhY2s6IE1pbGVzdG9uZU1hcFxufVxuXG5jbGFzcyBQb2ludFN1bW1hcmllcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdG90YWxQb2ludHMgPSAodG90YWxQb2ludHNGcm9tTWlsZXN0b25lTWFwKHRoaXMucHJvcHMubWlsZXN0b25lQnlUcmFjaykgLyBtYXhQb2ludHMpICogMTAwXG5cbiAgICBsZXQgY3VycmVudExldmVsLCBuZXh0TGV2ZWxcblxuICAgIGxldCBwb2ludHNGb3JDdXJyZW50TGV2ZWwgPSB0b3RhbFBvaW50c1xuICAgIHdoaWxlICghKGN1cnJlbnRMZXZlbCA9IHBvaW50c1RvTGV2ZWxzW3BvaW50c0ZvckN1cnJlbnRMZXZlbF0pKSB7XG4gICAgICBwb2ludHNGb3JDdXJyZW50TGV2ZWwtLVxuICAgIH1cblxuICAgIGxldCBwb2ludHNUb05leHRMZXZlbCA9IDFcbiAgICB3aGlsZSAoIShuZXh0TGV2ZWwgPSBwb2ludHNUb0xldmVsc1t0b3RhbFBvaW50cyArIHBvaW50c1RvTmV4dExldmVsXSkpIHtcbiAgICAgIHBvaW50c1RvTmV4dExldmVsKytcbiAgICAgIGlmIChwb2ludHNUb05leHRMZXZlbCA+IDEzNSkge1xuICAgICAgICBwb2ludHNUb05leHRMZXZlbCA9ICdOL0EnXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYmxvY2tzID0gW1xuICAgICAge1xuICAgICAgICBsYWJlbDogJ1RydXN0IEJhdHRlcnknLFxuICAgICAgICB2YWx1ZTogdG90YWxQb2ludHNcbiAgICAgIH1cbiAgICBdXG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRhYmxlPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDNweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLTNweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvaW50LXN1bW1hcnktbGFiZWwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnBvaW50LXN1bW1hcnktdmFsdWUge1xuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAge2Jsb2Nrcy5tYXAoKHtsYWJlbH0sIGkpID0+IChcbiAgICAgICAgICAgIDx0aCBrZXk9e2l9IGNsYXNzTmFtZT1cInBvaW50LXN1bW1hcnktbGFiZWxcIj5cbiAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICB7YmxvY2tzLm1hcCgoe3ZhbHVlfSwgaSkgPT4gKFxuICAgICAgICAgICAgPHRkIGtleT17aX0gY2xhc3NOYW1lPVwicG9pbnQtc3VtbWFyeS12YWx1ZVwiPlxuICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb2ludFN1bW1hcmllc1xuIl19 */\n/*@ sourceURL=/Users/swati/src/snowflake/components/PointSummaries.js */"), __jsx("tbody", {
        className: "jsx-3403694977",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, __jsx("tr", {
        className: "jsx-3403694977",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, blocks.map(function (_ref, i) {
        var label = _ref.label;
        return __jsx("th", {
          key: i,
          className: "jsx-3403694977" + " " + "point-summary-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, label);
      })), __jsx("tr", {
        className: "jsx-3403694977",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, blocks.map(function (_ref2, i) {
        var value = _ref2.value;
        return __jsx("td", {
          key: i,
          className: "jsx-3403694977" + " " + "point-summary-value",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, value);
      }))));
    }
  }]);

  return PointSummaries;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PointSummaries);

/***/ })

})
//# sourceMappingURL=index.js.ca51a82b4e535cf8fa2d.hot-update.js.map