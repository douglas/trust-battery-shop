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

      function getMilestoneText(milestone) {
        switch (milestone) {
          case 0:
            return 'Never';

          case 1:
            return 'Rarely';

          case 2:
            return 'Sometimes';

          case 3:
            return 'Often';

          case 4:
            return 'Always';

          default:
            return 'Never';
        }
      }

      return __jsx("div", {
        className: "jsx-3793649220" + " " + "track",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3793649220",
        __self: this
      }, "div.track.jsx-3793649220{margin:0 0 20px 0;padding-bottom:20px;border-bottom:2px solid #ccc;}h2.jsx-3793649220{margin:0 0 10px 0;}p.track-description.jsx-3793649220{margin-top:0;padding-bottom:20px;border-bottom:2px solid #ccc;}table.jsx-3793649220{border-spacing:3px;}td.milestone.jsx-3793649220{line-height:50px;width:50px;text-align:center;font-weight:bold;font-size:24px;border-radius:3px;cursor:pointer;}ul.jsx-3793649220{line-height:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvVHJhY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JvQixBQUcrQixBQUtBLEFBR0wsQUFLTSxBQUdGLEFBVUMsYUFqQkUsSUFRVCxDQWhCUyxBQUt0QixBQXFCQSxDQWJBLFNBSW9CLEtBUlcsS0FSQSxRQWlCWixnQkFSbkIsQ0FTaUIsSUFqQmpCLFdBa0JvQixrQkFDSCxlQUNqQiIsImZpbGUiOiIvVXNlcnMvc3dhdGkvc3JjL3Nub3dmbGFrZS9jb21wb25lbnRzL1RyYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IHsgc2NvcmVzLCBjYXRlZ29yeUNvbG9yU2NhbGUgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzJ1xuaW1wb3J0IHsgdHJhY2tzIH0gZnJvbSAnLi4vY29uc3RhbnRzL3RyYWNrcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgTWlsZXN0b25lTWFwLCBNaWxlc3RvbmUgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzJ1xuaW1wb3J0IHR5cGUgeyBUcmFja0lkIH0gZnJvbSAnLi4vY29uc3RhbnRzL3RyYWNrcydcblxudHlwZSBQcm9wcyA9IHtcbiAgbWlsZXN0b25lQnlUcmFjazogTWlsZXN0b25lTWFwLFxuICB0cmFja0lkOiBUcmFja0lkLFxuICBoYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZUZuOiAoVHJhY2tJZCwgTWlsZXN0b25lKSA9PiB2b2lkXG59XG5cbmNsYXNzIFRyYWNrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIFxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdHJhY2sgPSB0cmFja3NbdGhpcy5wcm9wcy50cmFja0lkXVxuICAgIGNvbnN0IGN1cnJlbnRNaWxlc3RvbmVJZCA9IHRoaXMucHJvcHMubWlsZXN0b25lQnlUcmFja1t0aGlzLnByb3BzLnRyYWNrSWRdXG4gICAgZnVuY3Rpb24gZ2V0TWlsZXN0b25lVGV4dChtaWxlc3RvbmUpIHtcbiAgICAgIHN3aXRjaChtaWxlc3RvbmUpIHtcbiAgICAgICAgY2FzZSAwOiByZXR1cm4gJ05ldmVyJ1xuICAgICAgICBjYXNlIDE6IHJldHVybiAnUmFyZWx5J1xuICAgICAgICBjYXNlIDI6IHJldHVybiAnU29tZXRpbWVzJ1xuICAgICAgICBjYXNlIDM6IHJldHVybiAnT2Z0ZW4nXG4gICAgICAgIGNhc2UgNDogcmV0dXJuICdBbHdheXMnXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiAnTmV2ZXInXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNrXCI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBkaXYudHJhY2sge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwLnRyYWNrLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICBib3JkZXItc3BhY2luZzogM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZC5taWxlc3RvbmUge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxoMj57dHJhY2suZGlzcGxheU5hbWV9PC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJhY2stZGVzY3JpcHRpb25cIj57dHJhY2suZGVzY3JpcHRpb24uc2hvcnR9PC9wPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG4gICAgICAgICAgPHRhYmxlIHN0eWxlPXt7ZmxleDogMCwgbWFyZ2luUmlnaHQ6IDUwfX0+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtzY29yZXMuc2xpY2UoKS5yZXZlcnNlKCkubWFwKChtaWxlc3RvbmUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc01ldCA9IG1pbGVzdG9uZSA8PSBjdXJyZW50TWlsZXN0b25lSWRcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17bWlsZXN0b25lfT5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzPSdtaWxlc3RvbmUnIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2VGbih0aGlzLnByb3BzLnRyYWNrSWQsIG1pbGVzdG9uZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JvcmRlcjogYDRweCBzb2xpZCAke21pbGVzdG9uZSA9PT0gY3VycmVudE1pbGVzdG9uZUlkID8gJyMwMDAnIDogaXNNZXQgPyBjYXRlZ29yeUNvbG9yU2NhbGUodHJhY2suY2F0ZWdvcnkpIDogJyNlZWUnfWAsIGJhY2tncm91bmQ6IGlzTWV0ID8gY2F0ZWdvcnlDb2xvclNjYWxlKHRyYWNrLmNhdGVnb3J5KSA6ICcjZWVlJ319PlxuICAgICAgICAgICAgICAgICAgICAgIHttaWxlc3RvbmV9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICB7Z2V0TWlsZXN0b25lVGV4dChtaWxlc3RvbmUpfVxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6IDF9fT5cbiAgICAgICAgICAgICAgPGgzPnt0cmFjay5kZXNjcmlwdGlvbi5kZXRhaWxlZH08L2gzPlxuICAgICAgICAgICAgICA8aDQ+RXhhbXBsZSBiZWhhdmlvdXJzOjwvaDQ+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICB7dHJhY2suZXhhbXBsZXMubWFwKChleGFtcGxlLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtpfT57ZXhhbXBsZX08L2xpPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYWNrXG4iXX0= */\n/*@ sourceURL=/Users/swati/src/snowflake/components/Track.js */"), __jsx("h2", {
        className: "jsx-3793649220",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, track.displayName), __jsx("p", {
        className: "jsx-3793649220" + " " + "track-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, track.description["short"]), __jsx("div", {
        style: {
          display: 'flex'
        },
        className: "jsx-3793649220",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("table", {
        style: {
          flex: 0,
          marginRight: 50
        },
        className: "jsx-3793649220",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx("tbody", {
        className: "jsx-3793649220",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, _constants_constants__WEBPACK_IMPORTED_MODULE_6__["scores"].slice().reverse().map(function (milestone) {
        var isMet = milestone <= currentMilestoneId;
        return __jsx("tr", {
          key: milestone,
          className: "jsx-3793649220",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, __jsx("td", {
          "class": "milestone",
          onClick: function onClick() {
            return _this.props.handleTrackMilestoneChangeFn(_this.props.trackId, milestone);
          },
          style: {
            border: "4px solid ".concat(milestone === currentMilestoneId ? '#000' : isMet ? Object(_constants_constants__WEBPACK_IMPORTED_MODULE_6__["categoryColorScale"])(track.category) : '#eee'),
            background: isMet ? Object(_constants_constants__WEBPACK_IMPORTED_MODULE_6__["categoryColorScale"])(track.category) : '#eee'
          },
          className: "jsx-3793649220",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, milestone), __jsx("td", {
          className: "jsx-3793649220",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 76
          },
          __self: this
        }, getMilestoneText(milestone)));
      }))), __jsx("div", {
        style: {
          flex: 1
        },
        className: "jsx-3793649220",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-3793649220",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, track.description.detailed), __jsx("h4", {
        className: "jsx-3793649220",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, "Example behaviours:"), __jsx("ul", {
        className: "jsx-3793649220",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, track.examples.map(function (example, i) {
        return __jsx("li", {
          key: i,
          className: "jsx-3793649220",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
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
//# sourceMappingURL=index.js.6da8c8db1167795eae49.hot-update.js.map