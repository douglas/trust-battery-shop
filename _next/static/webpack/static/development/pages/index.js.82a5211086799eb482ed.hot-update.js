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
      }, "div.track.jsx-2815140849{margin:0 0 20px 0;padding-bottom:20px;border-bottom:2px solid #ccc;}h2.jsx-2815140849{margin:0 0 10px 0;}p.track-description.jsx-2815140849{margin-top:0;padding-bottom:20px;border-bottom:2px solid #ccc;}table.jsx-2815140849{border-spacing:3px;}td.jsx-2815140849{line-height:50px;width:50px;text-align:center;background:#eee;font-weight:bold;font-size:24px;border-radius:3px;cursor:pointer;}ul.jsx-2815140849{line-height:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvVHJhY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJvQixBQUcrQixBQUtBLEFBR0wsQUFLTSxBQUdGLEFBVUMsYUFqQkUsSUFRVCxDQWhCUyxBQUt0QixBQXFCQSxDQWJBLFNBSW9CLEtBUlcsS0FSQSxRQWlCYixnQkFSbEIsQUFTbUIsS0FqQm5CLFlBa0JpQixlQUNHLGtCQUNILGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvVHJhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgeyBzY29yZXMsIGNhdGVnb3J5Q29sb3JTY2FsZSB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnXG5pbXBvcnQgeyB0cmFja3MgfSBmcm9tICcuLi9jb25zdGFudHMvdHJhY2tzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBNaWxlc3RvbmVNYXAsIE1pbGVzdG9uZSB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnXG5pbXBvcnQgdHlwZSB7IFRyYWNrSWQgfSBmcm9tICcuLi9jb25zdGFudHMvdHJhY2tzJ1xuXG50eXBlIFByb3BzID0ge1xuICBtaWxlc3RvbmVCeVRyYWNrOiBNaWxlc3RvbmVNYXAsXG4gIHRyYWNrSWQ6IFRyYWNrSWQsXG4gIGhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlRm46IChUcmFja0lkLCBNaWxlc3RvbmUpID0+IHZvaWRcbn1cblxuY2xhc3MgVHJhY2sgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRyYWNrID0gdHJhY2tzW3RoaXMucHJvcHMudHJhY2tJZF1cbiAgICBjb25zdCBjdXJyZW50TWlsZXN0b25lSWQgPSB0aGlzLnByb3BzLm1pbGVzdG9uZUJ5VHJhY2tbdGhpcy5wcm9wcy50cmFja0lkXVxuICAgIGNvbnN0IGN1cnJlbnRNaWxlc3RvbmUgPSB0cmFjay5taWxlc3RvbmVzW2N1cnJlbnRNaWxlc3RvbmVJZCAtIDFdXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJhY2tcIj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGRpdi50cmFjayB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAyMHB4IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHAudHJhY2stZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRhYmxlIHtcbiAgICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRkIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGgyPnt0cmFjay5kaXNwbGF5TmFtZX08L2gyPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0cmFjay1kZXNjcmlwdGlvblwiPnt0cmFjay5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cbiAgICAgICAgICA8dGFibGUgc3R5bGU9e3tmbGV4OiAwLCBtYXJnaW5SaWdodDogNTB9fT5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge3Njb3Jlcy5zbGljZSgpLnJldmVyc2UoKS5tYXAoKG1pbGVzdG9uZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlzTWV0ID0gbWlsZXN0b25lIDw9IGN1cnJlbnRNaWxlc3RvbmVJZFxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8dHIga2V5PXttaWxlc3RvbmV9PlxuICAgICAgICAgICAgICAgICAgICA8dGQgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZUZuKHRoaXMucHJvcHMudHJhY2tJZCwgbWlsZXN0b25lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyOiBgNHB4IHNvbGlkICR7bWlsZXN0b25lID09PSBjdXJyZW50TWlsZXN0b25lSWQgPyAnIzAwMCcgOiBpc01ldCA/IGNhdGVnb3J5Q29sb3JTY2FsZSh0cmFjay5jYXRlZ29yeSkgOiAnI2VlZSd9YCwgYmFja2dyb3VuZDogaXNNZXQgPyBjYXRlZ29yeUNvbG9yU2NhbGUodHJhY2suY2F0ZWdvcnkpIDogdW5kZWZpbmVkfX0+XG4gICAgICAgICAgICAgICAgICAgICAge21pbGVzdG9uZX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICB7Y3VycmVudE1pbGVzdG9uZSA/IChcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OiAxfX0+XG4gICAgICAgICAgICAgIDxoMz57dHJhY2suc3VtbWFyeX08L2gzPlxuICAgICAgICAgICAgICA8aDQ+RXhhbXBsZSBiZWhhdmlvdXJzOjwvaDQ+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dHJhY2suZXhhbXBsZXMubWFwKChleGFtcGxlLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT57ZXhhbXBsZX08L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWNrXG4iXX0= */\n/*@ sourceURL=/Users/swati/src/snowflake/components/Track.js */"), __jsx("h2", {
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
      }, track.summary), __jsx("h4", {
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Example behaviours:"), __jsx("ul", {
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, track.examples.map(function (example, i) {
        return __jsx("li", {
          key: i,
          className: "jsx-2815140849",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, example);
      }))) : null));
    }
  }]);

  return Track;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Track);

/***/ })

})
//# sourceMappingURL=index.js.82a5211086799eb482ed.hot-update.js.map