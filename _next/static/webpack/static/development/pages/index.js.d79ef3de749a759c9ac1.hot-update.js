webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants */ "./constants.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "/Users/swati/src/snowflake/components/Track.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



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

      var track = _constants__WEBPACK_IMPORTED_MODULE_6__["tracks"][this.props.trackId];
      var currentMilestoneId = this.props.milestoneByTrack[this.props.trackId];
      var currentMilestone = track.milestones[currentMilestoneId - 1];
      return __jsx("div", {
        className: "jsx-2815140849" + " " + "track",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2815140849",
        __self: this
      }, "div.track.jsx-2815140849{margin:0 0 20px 0;padding-bottom:20px;border-bottom:2px solid #ccc;}h2.jsx-2815140849{margin:0 0 10px 0;}p.track-description.jsx-2815140849{margin-top:0;padding-bottom:20px;border-bottom:2px solid #ccc;}table.jsx-2815140849{border-spacing:3px;}td.jsx-2815140849{line-height:50px;width:50px;text-align:center;background:#eee;font-weight:bold;font-size:24px;border-radius:3px;cursor:pointer;}ul.jsx-2815140849{line-height:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvVHJhY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJvQixBQUcrQixBQUtBLEFBR0wsQUFLTSxBQUdGLEFBVUMsYUFqQkUsSUFRVCxDQWhCUyxBQUt0QixBQXFCQSxDQWJBLFNBSW9CLEtBUlcsS0FSQSxRQWlCYixnQkFSbEIsQUFTbUIsS0FqQm5CLFlBa0JpQixlQUNHLGtCQUNILGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvVHJhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgeyB0cmFja3MsIHNjb3JlcywgY2F0ZWdvcnlDb2xvclNjYWxlIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBNaWxlc3RvbmVNYXAsIFRyYWNrSWQsIE1pbGVzdG9uZSB9IGZyb20gJy4uL2NvbnN0YW50cydcblxudHlwZSBQcm9wcyA9IHtcbiAgbWlsZXN0b25lQnlUcmFjazogTWlsZXN0b25lTWFwLFxuICB0cmFja0lkOiBUcmFja0lkLFxuICBoYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZUZuOiAoVHJhY2tJZCwgTWlsZXN0b25lKSA9PiB2b2lkXG59XG5cbmNsYXNzIFRyYWNrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0cmFjayA9IHRyYWNrc1t0aGlzLnByb3BzLnRyYWNrSWRdXG4gICAgY29uc3QgY3VycmVudE1pbGVzdG9uZUlkID0gdGhpcy5wcm9wcy5taWxlc3RvbmVCeVRyYWNrW3RoaXMucHJvcHMudHJhY2tJZF1cbiAgICBjb25zdCBjdXJyZW50TWlsZXN0b25lID0gdHJhY2subWlsZXN0b25lc1tjdXJyZW50TWlsZXN0b25lSWQgLSAxXVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNrXCI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBkaXYudHJhY2sge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwLnRyYWNrLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICBib3JkZXItc3BhY2luZzogM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxoMj57dHJhY2suZGlzcGxheU5hbWV9PC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJhY2stZGVzY3JpcHRpb25cIj57dHJhY2suZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG4gICAgICAgICAgPHRhYmxlIHN0eWxlPXt7ZmxleDogMCwgbWFyZ2luUmlnaHQ6IDUwfX0+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtzY29yZXMuc2xpY2UoKS5yZXZlcnNlKCkubWFwKChtaWxlc3RvbmUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc01ldCA9IG1pbGVzdG9uZSA8PSBjdXJyZW50TWlsZXN0b25lSWRcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17bWlsZXN0b25lfT5cbiAgICAgICAgICAgICAgICAgICAgPHRkIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2VGbih0aGlzLnByb3BzLnRyYWNrSWQsIG1pbGVzdG9uZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JvcmRlcjogYDRweCBzb2xpZCAke21pbGVzdG9uZSA9PT0gY3VycmVudE1pbGVzdG9uZUlkID8gJyMwMDAnIDogaXNNZXQgPyBjYXRlZ29yeUNvbG9yU2NhbGUodHJhY2suY2F0ZWdvcnkpIDogJyNlZWUnfWAsIGJhY2tncm91bmQ6IGlzTWV0ID8gY2F0ZWdvcnlDb2xvclNjYWxlKHRyYWNrLmNhdGVnb3J5KSA6IHVuZGVmaW5lZH19PlxuICAgICAgICAgICAgICAgICAgICAgIHttaWxlc3RvbmV9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAge2N1cnJlbnRNaWxlc3RvbmUgPyAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDogMX19PlxuICAgICAgICAgICAgICA8aDM+e2N1cnJlbnRNaWxlc3RvbmUuc3VtbWFyeX08L2gzPlxuICAgICAgICAgICAgICA8aDQ+RXhhbXBsZSBiZWhhdmlvcnM6PC9oND5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtjdXJyZW50TWlsZXN0b25lLnNpZ25hbHMubWFwKChzaWduYWwsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PntzaWduYWx9PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPGg0PkV4YW1wbGUgdGFza3M6PC9oND5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtjdXJyZW50TWlsZXN0b25lLmV4YW1wbGVzLm1hcCgoZXhhbXBsZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+e2V4YW1wbGV9PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFja1xuIl19 */\n/*@ sourceURL=/Users/swati/src/snowflake/components/Track.js */"), __jsx("h2", {
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, track.displayName), __jsx("p", {
        className: "jsx-2815140849" + " " + "track-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, track.description), __jsx("div", {
        style: {
          display: 'flex'
        },
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
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
          lineNumber: 54
        },
        __self: this
      }, __jsx("tbody", {
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, _constants__WEBPACK_IMPORTED_MODULE_6__["scores"].slice().reverse().map(function (milestone) {
        var isMet = milestone <= currentMilestoneId;
        return __jsx("tr", {
          key: milestone,
          className: "jsx-2815140849",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, __jsx("td", {
          onClick: function onClick() {
            return _this.props.handleTrackMilestoneChangeFn(_this.props.trackId, milestone);
          },
          style: {
            border: "4px solid ".concat(milestone === currentMilestoneId ? '#000' : isMet ? Object(_constants__WEBPACK_IMPORTED_MODULE_6__["categoryColorScale"])(track.category) : '#eee'),
            background: isMet ? Object(_constants__WEBPACK_IMPORTED_MODULE_6__["categoryColorScale"])(track.category) : undefined
          },
          className: "jsx-2815140849",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
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
          lineNumber: 70
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, currentMilestone.summary), __jsx("h4", {
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Example behaviors:"), __jsx("ul", {
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, currentMilestone.signals.map(function (signal, i) {
        return __jsx("li", {
          key: i,
          className: "jsx-2815140849",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, signal);
      })), __jsx("h4", {
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Example tasks:"), __jsx("ul", {
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, currentMilestone.examples.map(function (example, i) {
        return __jsx("li", {
          key: i,
          className: "jsx-2815140849",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, example);
      }))) : null));
    }
  }]);

  return Track;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Track);

/***/ })

})
//# sourceMappingURL=index.js.d79ef3de749a759c9ac1.hot-update.js.map