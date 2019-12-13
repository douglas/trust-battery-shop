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
        className: "jsx-3876655744" + " " + "track",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3876655744",
        __self: this
      }, "div.track.jsx-3876655744{margin:0 0 20px 0;padding-bottom:20px;border-bottom:2px solid #ccc;}h2.jsx-3876655744{margin:0 0 10px 0;}p.track-description.jsx-3876655744{margin-top:0;padding-bottom:20px;border-bottom:2px solid #ccc;}table.jsx-3876655744{border-spacing:3px;}td.milestone.jsx-3876655744{line-height:50px;width:50px;text-align:center;font-weight:bold;font-size:24px;border-radius:3px;cursor:pointer;}td.milestone-text.jsx-3876655744{font-style:italic;color:#808080;}ul.jsx-3876655744{line-height:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvVHJhY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0JvQixBQUcrQixBQUtBLEFBR0wsQUFLTSxBQUdGLEFBU0MsQUFJQSxhQXBCRSxJQVFULENBaEJTLEFBS3RCLEFBcUJELEFBR0MsQ0FoQkEsU0FJb0IsSUFTcEIsQ0FqQitCLEtBUkEsUUFpQlosZ0JBUm5CLENBU2lCLElBakJqQixXQWtCb0Isa0JBQ0gsZUFDakIiLCJmaWxlIjoiL1VzZXJzL3N3YXRpL3NyYy9zbm93Zmxha2UvY29tcG9uZW50cy9UcmFjay5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCB7IHNjb3JlcywgY2F0ZWdvcnlDb2xvclNjYWxlIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cydcbmltcG9ydCB7IHRyYWNrcyB9IGZyb20gJy4uL2NvbnN0YW50cy90cmFja3MnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IE1pbGVzdG9uZU1hcCwgTWlsZXN0b25lIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cydcbmltcG9ydCB0eXBlIHsgVHJhY2tJZCB9IGZyb20gJy4uL2NvbnN0YW50cy90cmFja3MnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIG1pbGVzdG9uZUJ5VHJhY2s6IE1pbGVzdG9uZU1hcCxcbiAgdHJhY2tJZDogVHJhY2tJZCxcbiAgaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2VGbjogKFRyYWNrSWQsIE1pbGVzdG9uZSkgPT4gdm9pZFxufVxuXG5jbGFzcyBUcmFjayBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICBcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHRyYWNrID0gdHJhY2tzW3RoaXMucHJvcHMudHJhY2tJZF1cbiAgICBjb25zdCBjdXJyZW50TWlsZXN0b25lSWQgPSB0aGlzLnByb3BzLm1pbGVzdG9uZUJ5VHJhY2tbdGhpcy5wcm9wcy50cmFja0lkXVxuICAgIGZ1bmN0aW9uIGdldE1pbGVzdG9uZVRleHQobWlsZXN0b25lKSB7XG4gICAgICBzd2l0Y2gobWlsZXN0b25lKSB7XG4gICAgICAgIGNhc2UgMDogcmV0dXJuICdOZXZlcidcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gJ1JhcmVseSdcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gJ1NvbWV0aW1lcydcbiAgICAgICAgY2FzZSAzOiByZXR1cm4gJ09mdGVuJ1xuICAgICAgICBjYXNlIDQ6IHJldHVybiAnQWx3YXlzJ1xuICAgICAgICBkZWZhdWx0OiByZXR1cm4gJ05ldmVyJ1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmFja1wiPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgZGl2LnRyYWNrIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDIwcHggMDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcC50cmFjay1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgdGFibGUge1xuICAgICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDNweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGQubWlsZXN0b25lIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGQubWlsZXN0b25lLXRleHQge1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgY29sb3I6ICM4MDgwODBcbiAgICAgICAgICB9XG4gICAgICAgICAgdWwge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8aDI+e3RyYWNrLmRpc3BsYXlOYW1lfTwvaDI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRyYWNrLWRlc2NyaXB0aW9uXCI+e3RyYWNrLmRlc2NyaXB0aW9uLnNob3J0fTwvcD5cbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxuICAgICAgICAgIDx0YWJsZSBzdHlsZT17e2ZsZXg6IDAsIG1hcmdpblJpZ2h0OiA1MH19PlxuICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICB7c2NvcmVzLnNsaWNlKCkucmV2ZXJzZSgpLm1hcCgobWlsZXN0b25lKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXNNZXQgPSBtaWxlc3RvbmUgPD0gY3VycmVudE1pbGVzdG9uZUlkXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e21pbGVzdG9uZX0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J21pbGVzdG9uZScgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZUZuKHRoaXMucHJvcHMudHJhY2tJZCwgbWlsZXN0b25lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyOiBgNHB4IHNvbGlkICR7bWlsZXN0b25lID09PSBjdXJyZW50TWlsZXN0b25lSWQgPyAnIzAwMCcgOiBpc01ldCA/IGNhdGVnb3J5Q29sb3JTY2FsZSh0cmFjay5jYXRlZ29yeSkgOiAnI2VlZSd9YCwgYmFja2dyb3VuZDogaXNNZXQgPyBjYXRlZ29yeUNvbG9yU2NhbGUodHJhY2suY2F0ZWdvcnkpIDogJyNlZWUnfX0+XG4gICAgICAgICAgICAgICAgICAgICAge21pbGVzdG9uZX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0nbWlsZXN0b25lLXRleHQnPlxuICAgICAgICAgICAgICAgICAgICAgIHtnZXRNaWxlc3RvbmVUZXh0KG1pbGVzdG9uZSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDogMX19PlxuICAgICAgICAgICAgICA8aDM+e3RyYWNrLmRlc2NyaXB0aW9uLmRldGFpbGVkfTwvaDM+XG4gICAgICAgICAgICAgIDxoND5FeGFtcGxlIGJlaGF2aW91cnM6PC9oND5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHt0cmFjay5leGFtcGxlcy5tYXAoKGV4YW1wbGUsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PntleGFtcGxlfTwvbGk+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhY2tcbiJdfQ== */\n/*@ sourceURL=/Users/swati/src/snowflake/components/Track.js */"), __jsx("h2", {
        className: "jsx-3876655744",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, track.displayName), __jsx("p", {
        className: "jsx-3876655744" + " " + "track-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, track.description["short"]), __jsx("div", {
        style: {
          display: 'flex'
        },
        className: "jsx-3876655744",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, __jsx("table", {
        style: {
          flex: 0,
          marginRight: 50
        },
        className: "jsx-3876655744",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, __jsx("tbody", {
        className: "jsx-3876655744",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, _constants_constants__WEBPACK_IMPORTED_MODULE_6__["scores"].slice().reverse().map(function (milestone) {
        var isMet = milestone <= currentMilestoneId;
        return __jsx("tr", {
          key: milestone,
          className: "jsx-3876655744",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
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
          className: "jsx-3876655744" + " " + 'milestone',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, milestone), __jsx("td", {
          className: "jsx-3876655744" + " " + 'milestone-text',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, getMilestoneText(milestone)));
      }))), __jsx("div", {
        style: {
          flex: 1
        },
        className: "jsx-3876655744",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx("h3", {
        className: "jsx-3876655744",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, track.description.detailed), __jsx("h4", {
        className: "jsx-3876655744",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Example behaviours:"), __jsx("ul", {
        className: "jsx-3876655744",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, track.examples.map(function (example, i) {
        return __jsx("li", {
          key: i,
          className: "jsx-3876655744",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
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
//# sourceMappingURL=index.js.b753d4703930e9daf513.hot-update.js.map