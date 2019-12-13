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
        className: "jsx-1388567651" + " " + "track",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "1388567651",
        __self: this
      }, "div.track.jsx-1388567651{margin:0 0 20px 0;padding-bottom:20px;border-bottom:2px solid #ccc;}h2.jsx-1388567651{margin:0 0 10px 0;}p.track-description.jsx-1388567651{margin-top:0;padding-bottom:20px;border-bottom:2px solid #ccc;}table.jsx-1388567651{border-spacing:3px;}td.milestone.jsx-1388567651{line-height:50px;width:50px;text-align:center;font-weight:bold;font-size:24px;border-radius:3px;cursor:pointer;}td.milestone-text.jsx-1388567651{color:#808080;}ul.jsx-1388567651{line-height:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvVHJhY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JvQixBQUcrQixBQUtBLEFBR0wsQUFLTSxBQUdGLEFBU0gsQUFHSSxhQW5CRSxDQWlCdEIsR0FUYSxDQWhCUyxBQUt0QixBQXVCQSxDQWZBLFNBSW9CLEtBUlcsS0FSQSxRQWlCWixnQkFSbkIsQ0FTaUIsSUFqQmpCLFdBa0JvQixrQkFDSCxlQUNqQiIsImZpbGUiOiIvVXNlcnMvc3dhdGkvc3JjL3Nub3dmbGFrZS9jb21wb25lbnRzL1RyYWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IHsgc2NvcmVzLCBjYXRlZ29yeUNvbG9yU2NhbGUgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzJ1xuaW1wb3J0IHsgdHJhY2tzIH0gZnJvbSAnLi4vY29uc3RhbnRzL3RyYWNrcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB0eXBlIHsgTWlsZXN0b25lTWFwLCBNaWxlc3RvbmUgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzJ1xuaW1wb3J0IHR5cGUgeyBUcmFja0lkIH0gZnJvbSAnLi4vY29uc3RhbnRzL3RyYWNrcydcblxudHlwZSBQcm9wcyA9IHtcbiAgbWlsZXN0b25lQnlUcmFjazogTWlsZXN0b25lTWFwLFxuICB0cmFja0lkOiBUcmFja0lkLFxuICBoYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZUZuOiAoVHJhY2tJZCwgTWlsZXN0b25lKSA9PiB2b2lkXG59XG5cbmNsYXNzIFRyYWNrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIFxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdHJhY2sgPSB0cmFja3NbdGhpcy5wcm9wcy50cmFja0lkXVxuICAgIGNvbnN0IGN1cnJlbnRNaWxlc3RvbmVJZCA9IHRoaXMucHJvcHMubWlsZXN0b25lQnlUcmFja1t0aGlzLnByb3BzLnRyYWNrSWRdXG4gICAgZnVuY3Rpb24gZ2V0TWlsZXN0b25lVGV4dChtaWxlc3RvbmUpIHtcbiAgICAgIHN3aXRjaChtaWxlc3RvbmUpIHtcbiAgICAgICAgY2FzZSAwOiByZXR1cm4gJ05ldmVyJ1xuICAgICAgICBjYXNlIDE6IHJldHVybiAnUmFyZWx5J1xuICAgICAgICBjYXNlIDI6IHJldHVybiAnU29tZXRpbWVzJ1xuICAgICAgICBjYXNlIDM6IHJldHVybiAnT2Z0ZW4nXG4gICAgICAgIGNhc2UgNDogcmV0dXJuICdBbHdheXMnXG4gICAgICAgIGRlZmF1bHQ6IHJldHVybiAnTmV2ZXInXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNrXCI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBkaXYudHJhY2sge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwLnRyYWNrLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICBib3JkZXItc3BhY2luZzogM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZC5taWxlc3RvbmUge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZC5taWxlc3RvbmUtdGV4dCB7XG4gICAgICAgICAgICBjb2xvcjogIzgwODA4MDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8aDI+e3RyYWNrLmRpc3BsYXlOYW1lfTwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRyYWNrLWRlc2NyaXB0aW9uXCI+e3RyYWNrLmRlc2NyaXB0aW9uLnNob3J0fTwvcD5cbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxuICAgICAgICAgIDx0YWJsZSBzdHlsZT17e2ZsZXg6IDAsIG1hcmdpblJpZ2h0OiA1MH19PlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7c2NvcmVzLnNsaWNlKCkucmV2ZXJzZSgpLm1hcCgobWlsZXN0b25lKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNNZXQgPSBtaWxlc3RvbmUgPD0gY3VycmVudE1pbGVzdG9uZUlkXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e21pbGVzdG9uZX0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J21pbGVzdG9uZScgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZUZuKHRoaXMucHJvcHMudHJhY2tJZCwgbWlsZXN0b25lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyOiBgNHB4IHNvbGlkICR7bWlsZXN0b25lID09PSBjdXJyZW50TWlsZXN0b25lSWQgPyAnIzAwMCcgOiBpc01ldCA/IGNhdGVnb3J5Q29sb3JTY2FsZSh0cmFjay5jYXRlZ29yeSkgOiAnI2VlZSd9YCwgYmFja2dyb3VuZDogaXNNZXQgPyBjYXRlZ29yeUNvbG9yU2NhbGUodHJhY2suY2F0ZWdvcnkpIDogJyNlZWUnfX0+XG4gICAgICAgICAgICAgICAgICAgICAge21pbGVzdG9uZX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0nbWlsZXN0b25lLXRleHQnPlxuICAgICAgICAgICAgICAgICAgICAgIHtnZXRNaWxlc3RvbmVUZXh0KG1pbGVzdG9uZSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDogMX19PlxuICAgICAgICAgICAgICA8aDM+e3RyYWNrLmRlc2NyaXB0aW9uLmRldGFpbGVkfTwvaDM+XG4gICAgICAgICAgICAgIDxoND5FeGFtcGxlIGJlaGF2aW91cnM6PC9oND5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt0cmFjay5leGFtcGxlcy5tYXAoKGV4YW1wbGUsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PntleGFtcGxlfTwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhY2tcbiJdfQ== */\n/*@ sourceURL=/Users/swati/src/snowflake/components/Track.js */"), __jsx("h2", {
        className: "jsx-1388567651",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, track.displayName), __jsx("p", {
        className: "jsx-1388567651" + " " + "track-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, track.description["short"]), __jsx("div", {
        style: {
          display: 'flex'
        },
        className: "jsx-1388567651",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx("table", {
        style: {
          flex: 0,
          marginRight: 50
        },
        className: "jsx-1388567651",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx("tbody", {
        className: "jsx-1388567651",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, _constants_constants__WEBPACK_IMPORTED_MODULE_6__["scores"].slice().reverse().map(function (milestone) {
        var isMet = milestone <= currentMilestoneId;
        return __jsx("tr", {
          key: milestone,
          className: "jsx-1388567651",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, __jsx("td", {
          onClick: function onClick() {
            return _this.props.handleTrackMilestoneChangeFn(_this.props.trackId, milestone);
          },
          style: {
            border: "4px solid ".concat(milestone === currentMilestoneId ? '#000' : isMet ? Object(_constants_constants__WEBPACK_IMPORTED_MODULE_6__["categoryColorScale"])(track.category) : '#eee'),
            background: isMet ? Object(_constants_constants__WEBPACK_IMPORTED_MODULE_6__["categoryColorScale"])(track.category) : '#eee'
          },
          className: "jsx-1388567651" + " " + 'milestone',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, milestone), __jsx("td", {
          className: "jsx-1388567651" + " " + 'milestone-text',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 78
          },
          __self: this
        }, getMilestoneText(milestone)));
      }))), __jsx("div", {
        style: {
          flex: 1
        },
        className: "jsx-1388567651",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-1388567651",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, track.description.detailed), __jsx("h4", {
        className: "jsx-1388567651",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Example behaviours:"), __jsx("ul", {
        className: "jsx-1388567651",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, track.examples.map(function (example, i) {
        return __jsx("li", {
          key: i,
          className: "jsx-1388567651",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
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
//# sourceMappingURL=index.js.84748426d6b55812b279.hot-update.js.map