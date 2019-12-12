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
      }, "table.jsx-3403694977{border-spacing:3px;margin-bottom:20px;margin-left:-3px;}.point-summary-label.jsx-3403694977{font-size:12px;text-align:center;font-weight:normal;width:120px;}.point-summary-value.jsx-3403694977{width:120px;background:#eee;font-size:24px;font-weight:bold;line-height:50px;border-radius:2px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvUG9pbnRTdW1tYXJpZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUNvQixBQUdnQyxBQUtKLEFBTUgsWUFDSSxHQU5FLElBTEMsU0FZSixLQU5JLEtBTEYsS0FZQSxTQU5MLEdBTGQsS0FZbUIsSUFObkIsYUFPb0Isa0JBQ0Esa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvUG9pbnRTdW1tYXJpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgeyBwb2ludHNUb0xldmVscywgdHJhY2tJZHMsIHRvdGFsUG9pbnRzRnJvbU1pbGVzdG9uZU1hcCwgbWF4UG9pbnRzIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cydcbmltcG9ydCB0eXBlIHsgTWlsZXN0b25lTWFwIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxudHlwZSBQcm9wcyA9IHtcbiAgbWlsZXN0b25lQnlUcmFjazogTWlsZXN0b25lTWFwXG59XG5cbmNsYXNzIFBvaW50U3VtbWFyaWVzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0b3RhbFBvaW50cyA9ICh0b3RhbFBvaW50c0Zyb21NaWxlc3RvbmVNYXAodGhpcy5wcm9wcy5taWxlc3RvbmVCeVRyYWNrKSlcblxuICAgIGxldCBjdXJyZW50TGV2ZWwsIG5leHRMZXZlbFxuXG4gICAgbGV0IHBvaW50c0ZvckN1cnJlbnRMZXZlbCA9IHRvdGFsUG9pbnRzXG4gICAgd2hpbGUgKCEoY3VycmVudExldmVsID0gcG9pbnRzVG9MZXZlbHNbcG9pbnRzRm9yQ3VycmVudExldmVsXSkpIHtcbiAgICAgIHBvaW50c0ZvckN1cnJlbnRMZXZlbC0tXG4gICAgfVxuXG4gICAgbGV0IHBvaW50c1RvTmV4dExldmVsID0gMVxuICAgIHdoaWxlICghKG5leHRMZXZlbCA9IHBvaW50c1RvTGV2ZWxzW3RvdGFsUG9pbnRzICsgcG9pbnRzVG9OZXh0TGV2ZWxdKSkge1xuICAgICAgcG9pbnRzVG9OZXh0TGV2ZWwrK1xuICAgICAgaWYgKHBvaW50c1RvTmV4dExldmVsID4gMTM1KSB7XG4gICAgICAgIHBvaW50c1RvTmV4dExldmVsID0gJ04vQSdcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBibG9ja3MgPSBbXG4gICAgICB7XG4gICAgICAgIGxhYmVsOiAnVHJ1c3QgQmF0dGVyeScsXG4gICAgICAgIHZhbHVlOiB0b3RhbFBvaW50c1xuICAgICAgfVxuICAgIF1cblxuICAgIHJldHVybiAoXG4gICAgICA8dGFibGU+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICBib3JkZXItc3BhY2luZzogM3B4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9pbnQtc3VtbWFyeS1sYWJlbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucG9pbnQtc3VtbWFyeS12YWx1ZSB7XG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICB7YmxvY2tzLm1hcCgoe2xhYmVsfSwgaSkgPT4gKFxuICAgICAgICAgICAgPHRoIGtleT17aX0gY2xhc3NOYW1lPVwicG9pbnQtc3VtbWFyeS1sYWJlbFwiPlxuICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgIHtibG9ja3MubWFwKCh7dmFsdWV9LCBpKSA9PiAoXG4gICAgICAgICAgICA8dGQga2V5PXtpfSBjbGFzc05hbWU9XCJwb2ludC1zdW1tYXJ5LXZhbHVlXCI+XG4gICAgICAgICAgICAgIHt2YWx1ZX1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50U3VtbWFyaWVzXG4iXX0= */\n/*@ sourceURL=/Users/swati/src/snowflake/components/PointSummaries.js */"), __jsx("tbody", {
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
//# sourceMappingURL=index.js.3f20b486c620cc1e79be.hot-update.js.map