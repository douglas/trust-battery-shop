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
      return __jsx("div", {
        className: "jsx-2815140849" + " " + "track",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2815140849",
        __self: this
      }, "div.track.jsx-2815140849{margin:0 0 20px 0;padding-bottom:20px;border-bottom:2px solid #ccc;}h2.jsx-2815140849{margin:0 0 10px 0;}p.track-description.jsx-2815140849{margin-top:0;padding-bottom:20px;border-bottom:2px solid #ccc;}table.jsx-2815140849{border-spacing:3px;}td.jsx-2815140849{line-height:50px;width:50px;text-align:center;background:#eee;font-weight:bold;font-size:24px;border-radius:3px;cursor:pointer;}ul.jsx-2815140849{line-height:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvVHJhY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JvQixBQUcrQixBQUtBLEFBR0wsQUFLTSxBQUdGLEFBVUMsYUFqQkUsSUFRVCxDQWhCUyxBQUt0QixBQXFCQSxDQWJBLFNBSW9CLEtBUlcsS0FSQSxRQWlCYixnQkFSbEIsQUFTbUIsS0FqQm5CLFlBa0JpQixlQUNHLGtCQUNILGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvVHJhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgeyBzY29yZXMsIGNhdGVnb3J5Q29sb3JTY2FsZSB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnXG5pbXBvcnQgeyB0cmFja3MgfSBmcm9tICcuLi9jb25zdGFudHMvdHJhY2tzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBNaWxlc3RvbmVNYXAsIE1pbGVzdG9uZSB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnXG5pbXBvcnQgdHlwZSB7IFRyYWNrSWQgfSBmcm9tICcuLi9jb25zdGFudHMvdHJhY2tzJ1xuXG50eXBlIFByb3BzID0ge1xuICBtaWxlc3RvbmVCeVRyYWNrOiBNaWxlc3RvbmVNYXAsXG4gIHRyYWNrSWQ6IFRyYWNrSWQsXG4gIGhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlRm46IChUcmFja0lkLCBNaWxlc3RvbmUpID0+IHZvaWRcbn1cblxuY2xhc3MgVHJhY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRyYWNrID0gdHJhY2tzW3RoaXMucHJvcHMudHJhY2tJZF1cbiAgICBjb25zdCBjdXJyZW50TWlsZXN0b25lSWQgPSB0aGlzLnByb3BzLm1pbGVzdG9uZUJ5VHJhY2tbdGhpcy5wcm9wcy50cmFja0lkXVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNrXCI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBkaXYudHJhY2sge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwLnRyYWNrLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICBib3JkZXItc3BhY2luZzogM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxoMj57dHJhY2suZGlzcGxheU5hbWV9PC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJhY2stZGVzY3JpcHRpb25cIj57dHJhY2suZGVzY3JpcHRpb24uc2hvcnR9PC9wPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG4gICAgICAgICAgPHRhYmxlIHN0eWxlPXt7ZmxleDogMCwgbWFyZ2luUmlnaHQ6IDUwfX0+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtzY29yZXMuc2xpY2UoKS5yZXZlcnNlKCkubWFwKChtaWxlc3RvbmUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc01ldCA9IG1pbGVzdG9uZSA8PSBjdXJyZW50TWlsZXN0b25lSWRcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17bWlsZXN0b25lfT5cbiAgICAgICAgICAgICAgICAgICAgPHRkIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2VGbih0aGlzLnByb3BzLnRyYWNrSWQsIG1pbGVzdG9uZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JvcmRlcjogYDRweCBzb2xpZCAke21pbGVzdG9uZSA9PT0gY3VycmVudE1pbGVzdG9uZUlkID8gJyMwMDAnIDogaXNNZXQgPyBjYXRlZ29yeUNvbG9yU2NhbGUodHJhY2suY2F0ZWdvcnkpIDogJyNlZWUnfWAsIGJhY2tncm91bmQ6IGlzTWV0ID8gY2F0ZWdvcnlDb2xvclNjYWxlKHRyYWNrLmNhdGVnb3J5KSA6IHVuZGVmaW5lZH19PlxuICAgICAgICAgICAgICAgICAgICAgIHttaWxlc3RvbmV9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDogMX19PlxuICAgICAgICAgICAgICA8aDM+e3RyYWNrLmRlc2NyaXB0aW9uLmRldGFpbGVkfTwvaDM+XG4gICAgICAgICAgICAgIDxoND5FeGFtcGxlIGJlaGF2aW91cnM6PC9oND5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt0cmFjay5leGFtcGxlcy5tYXAoKGV4YW1wbGUsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PntleGFtcGxlfTwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhY2tcbiJdfQ== */\n/*@ sourceURL=/Users/swati/src/snowflake/components/Track.js */"), __jsx("h2", {
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, track.displayName), __jsx("p", {
        className: "jsx-2815140849" + " " + "track-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, track.description["short"]), __jsx("div", {
        style: {
          display: 'flex'
        },
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
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
          lineNumber: 55
        },
        __self: this
      }, __jsx("tbody", {
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, _constants_constants__WEBPACK_IMPORTED_MODULE_6__["scores"].slice().reverse().map(function (milestone) {
        var isMet = milestone <= currentMilestoneId;
        return __jsx("tr", {
          key: milestone,
          className: "jsx-2815140849",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 60
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
            lineNumber: 61
          },
          __self: this
        }, milestone));
      }))), __jsx("div", {
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
      }, track.description.detailed), __jsx("h4", {
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "Example behaviours:"), __jsx("ul", {
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, track.examples.map(function (example, i) {
        return __jsx("li", {
          key: i,
          className: "jsx-2815140849",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, example);
      })))));
    }
  }]);

  return Track;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Track);

/***/ })

})
//# sourceMappingURL=index.js.47c30f689fbf43765b6e.hot-update.js.map