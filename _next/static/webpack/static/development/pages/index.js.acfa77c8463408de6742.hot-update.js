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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./constants.js");
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
      var totalPoints = Object(_constants__WEBPACK_IMPORTED_MODULE_6__["totalPointsFromMilestoneMap"])(this.props.milestoneByTrack);
      var currentLevel, nextLevel;
      var pointsForCurrentLevel = totalPoints;

      while (!(currentLevel = _constants__WEBPACK_IMPORTED_MODULE_6__["pointsToLevels"][pointsForCurrentLevel])) {
        pointsForCurrentLevel--;
      }

      var pointsToNextLevel = 1;

      while (!(nextLevel = _constants__WEBPACK_IMPORTED_MODULE_6__["pointsToLevels"][totalPoints + pointsToNextLevel])) {
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
      }, "table.jsx-3403694977{border-spacing:3px;margin-bottom:20px;margin-left:-3px;}.point-summary-label.jsx-3403694977{font-size:12px;text-align:center;font-weight:normal;width:120px;}.point-summary-value.jsx-3403694977{width:120px;background:#eee;font-size:24px;font-weight:bold;line-height:50px;border-radius:2px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvUG9pbnRTdW1tYXJpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NvQixBQUdnQyxBQUtKLEFBTUgsWUFDSSxHQU5FLElBTEMsU0FZSixLQU5JLEtBTEYsS0FZQSxTQU5MLEdBTGQsS0FZbUIsSUFObkIsYUFPb0Isa0JBQ0Esa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvUG9pbnRTdW1tYXJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgeyBwb2ludHNUb0xldmVscywgdHJhY2tJZHMsIHRvdGFsUG9pbnRzRnJvbU1pbGVzdG9uZU1hcCB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCB0eXBlIHsgTWlsZXN0b25lTWFwIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG50eXBlIFByb3BzID0ge1xuICBtaWxlc3RvbmVCeVRyYWNrOiBNaWxlc3RvbmVNYXBcbn1cblxuY2xhc3MgUG9pbnRTdW1tYXJpZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRvdGFsUG9pbnRzID0gdG90YWxQb2ludHNGcm9tTWlsZXN0b25lTWFwKHRoaXMucHJvcHMubWlsZXN0b25lQnlUcmFjaylcblxuICAgIGxldCBjdXJyZW50TGV2ZWwsIG5leHRMZXZlbFxuXG4gICAgbGV0IHBvaW50c0ZvckN1cnJlbnRMZXZlbCA9IHRvdGFsUG9pbnRzXG4gICAgd2hpbGUgKCEoY3VycmVudExldmVsID0gcG9pbnRzVG9MZXZlbHNbcG9pbnRzRm9yQ3VycmVudExldmVsXSkpIHtcbiAgICAgIHBvaW50c0ZvckN1cnJlbnRMZXZlbC0tXG4gICAgfVxuXG4gICAgbGV0IHBvaW50c1RvTmV4dExldmVsID0gMVxuICAgIHdoaWxlICghKG5leHRMZXZlbCA9IHBvaW50c1RvTGV2ZWxzW3RvdGFsUG9pbnRzICsgcG9pbnRzVG9OZXh0TGV2ZWxdKSkge1xuICAgICAgcG9pbnRzVG9OZXh0TGV2ZWwrK1xuICAgICAgaWYgKHBvaW50c1RvTmV4dExldmVsID4gMTM1KSB7XG4gICAgICAgIHBvaW50c1RvTmV4dExldmVsID0gJ04vQSdcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBibG9ja3MgPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnQ3VycmVudCBsZXZlbCcsXG4gICAgICAgIHZhbHVlOiBjdXJyZW50TGV2ZWxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnVG90YWwgcG9pbnRzJyxcbiAgICAgICAgdmFsdWU6IHRvdGFsUG9pbnRzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBsYWJlbDogJ1BvaW50cyB0byBuZXh0IGxldmVsJyxcbiAgICAgICAgdmFsdWU6IHBvaW50c1RvTmV4dExldmVsXG4gICAgICB9XG4gICAgXVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2ludC1zdW1tYXJ5LWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wb2ludC1zdW1tYXJ5LXZhbHVlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgIHtibG9ja3MubWFwKCh7bGFiZWx9LCBpKSA9PiAoXG4gICAgICAgICAgICA8dGgga2V5PXtpfSBjbGFzc05hbWU9XCJwb2ludC1zdW1tYXJ5LWxhYmVsXCI+XG4gICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAge2Jsb2Nrcy5tYXAoKHt2YWx1ZX0sIGkpID0+IChcbiAgICAgICAgICAgIDx0ZCBrZXk9e2l9IGNsYXNzTmFtZT1cInBvaW50LXN1bW1hcnktdmFsdWVcIj5cbiAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICApKX1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRTdW1tYXJpZXNcbiJdfQ== */\n/*@ sourceURL=/Users/swati/src/snowflake/components/PointSummaries.js */"), __jsx("tbody", {
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

/***/ })

})
//# sourceMappingURL=index.js.acfa77c8463408de6742.hot-update.js.map