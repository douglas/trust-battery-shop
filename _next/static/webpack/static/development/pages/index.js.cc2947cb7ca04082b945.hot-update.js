webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NightingaleChart.js":
/*!****************************************!*\
  !*** ./components/NightingaleChart.js ***!
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/constants */ "./constants/constants.js");
/* harmony import */ var _constants_tracks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants/tracks */ "./constants/tracks.js");





var _jsxFileName = "/Users/swati/src/snowflake/components/NightingaleChart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var width = 400;
var arcMilestones = _constants_constants__WEBPACK_IMPORTED_MODULE_8__["scores"].slice(1); // we'll draw the '0' milestone with a circle, not an arc.

var NightingaleChart =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(NightingaleChart, _React$Component);

  function NightingaleChart(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NightingaleChart);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NightingaleChart).call(this, props));
    _this.colorScale = d3__WEBPACK_IMPORTED_MODULE_7__["scaleSequential"](d3__WEBPACK_IMPORTED_MODULE_7__["interpolateWarm"]).domain([0, 5]);
    _this.radiusScale = d3__WEBPACK_IMPORTED_MODULE_7__["scaleBand"]().domain(arcMilestones).range([.15 * width, .45 * width]).paddingInner(0.1);
    _this.arcFn = d3__WEBPACK_IMPORTED_MODULE_7__["arc"]().innerRadius(function (milestone) {
      return _this.radiusScale(milestone);
    }).outerRadius(function (milestone) {
      return _this.radiusScale(milestone) + _this.radiusScale.bandwidth();
    }).startAngle(-Math.PI / _constants_tracks__WEBPACK_IMPORTED_MODULE_9__["trackIds"].length).endAngle(Math.PI / _constants_tracks__WEBPACK_IMPORTED_MODULE_9__["trackIds"].length).padAngle(Math.PI / 200).padRadius(.45 * width).cornerRadius(2);
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NightingaleChart, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var currentMilestoneId = this.props.milestoneByTrack[this.props.focusedTrackId];
      return __jsx("figure", {
        className: "jsx-3023698355",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "3023698355",
        __self: this
      }, "figure.jsx-3023698355{margin:0;}svg.jsx-3023698355{width:".concat(width, "px;height:").concat(width, "px;}.track-milestone.jsx-3023698355{fill:#eee;cursor:pointer;}.track-milestone-current.jsx-3023698355,.track-milestone.jsx-3023698355:hover{stroke:#000;stroke-width:4px;stroke-linejoin:round;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvTmlnaHRpbmdhbGVDaGFydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRG9CLEFBR3NCLEFBRzRCLEFBSTNCLEFBSUUsU0FWZCxDQU9pQixFQUlFLGFBSG5CLElBSXdCLFFBVGdCLGNBVXhDLHdCQVRBIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvTmlnaHRpbmdhbGVDaGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgc2NvcmVzLCBjYXRlZ29yeUNvbG9yU2NhbGUgfSBmcm9tICcuLi9jb25zdGFudHMvY29uc3RhbnRzJ1xuaW1wb3J0IHR5cGUgeyBNaWxlc3RvbmUsIE1pbGVzdG9uZU1hcCB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnXG5pbXBvcnQgeyB0cmFja0lkcywgdHJhY2tzIH0gZnJvbSAnLi4vY29uc3RhbnRzL3RyYWNrcydcbmltcG9ydCB0eXBlIHsgVHJhY2tJZCB9IGZyb20gJy4uL2NvbnN0YW50cy90cmFja3MnXG5cbmNvbnN0IHdpZHRoID0gNDAwXG5jb25zdCBhcmNNaWxlc3RvbmVzID0gc2NvcmVzLnNsaWNlKDEpIC8vIHdlJ2xsIGRyYXcgdGhlICcwJyBtaWxlc3RvbmUgd2l0aCBhIGNpcmNsZSwgbm90IGFuIGFyYy5cblxudHlwZSBQcm9wcyA9IHtcbiAgbWlsZXN0b25lQnlUcmFjazogTWlsZXN0b25lTWFwLFxuICBmb2N1c2VkVHJhY2tJZDogVHJhY2tJZCxcbiAgaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2VGbjogKFRyYWNrSWQsIE1pbGVzdG9uZSkgPT4gdm9pZFxufVxuXG5jbGFzcyBOaWdodGluZ2FsZUNoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIGNvbG9yU2NhbGU6IGFueVxuICByYWRpdXNTY2FsZTogYW55XG4gIGFyY0ZuOiBhbnlcblxuICBjb25zdHJ1Y3Rvcihwcm9wczogKikge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5jb2xvclNjYWxlID0gZDMuc2NhbGVTZXF1ZW50aWFsKGQzLmludGVycG9sYXRlV2FybSlcbiAgICAgIC5kb21haW4oWzAsIDVdKVxuXG4gICAgdGhpcy5yYWRpdXNTY2FsZSA9IGQzLnNjYWxlQmFuZCgpXG4gICAgICAuZG9tYWluKGFyY01pbGVzdG9uZXMpXG4gICAgICAucmFuZ2UoWy4xNSAqIHdpZHRoLCAuNDUgKiB3aWR0aF0pXG4gICAgICAucGFkZGluZ0lubmVyKDAuMSlcblxuICAgIHRoaXMuYXJjRm4gPSBkMy5hcmMoKVxuICAgICAgLmlubmVyUmFkaXVzKG1pbGVzdG9uZSA9PiB0aGlzLnJhZGl1c1NjYWxlKG1pbGVzdG9uZSkpXG4gICAgICAub3V0ZXJSYWRpdXMobWlsZXN0b25lID0+IHRoaXMucmFkaXVzU2NhbGUobWlsZXN0b25lKSArIHRoaXMucmFkaXVzU2NhbGUuYmFuZHdpZHRoKCkpXG4gICAgICAuc3RhcnRBbmdsZSgtIE1hdGguUEkgLyB0cmFja0lkcy5sZW5ndGgpXG4gICAgICAuZW5kQW5nbGUoTWF0aC5QSSAvIHRyYWNrSWRzLmxlbmd0aClcbiAgICAgIC5wYWRBbmdsZShNYXRoLlBJIC8gMjAwKVxuICAgICAgLnBhZFJhZGl1cyguNDUgKiB3aWR0aClcbiAgICAgIC5jb3JuZXJSYWRpdXMoMilcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjdXJyZW50TWlsZXN0b25lSWQgPSB0aGlzLnByb3BzLm1pbGVzdG9uZUJ5VHJhY2tbdGhpcy5wcm9wcy5mb2N1c2VkVHJhY2tJZF1cbiAgICByZXR1cm4gKFxuICAgICAgPGZpZ3VyZT5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIGZpZ3VyZSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHN2ZyB7XG4gICAgICAgICAgICB3aWR0aDogJHt3aWR0aH1weDtcbiAgICAgICAgICAgIGhlaWdodDogJHt3aWR0aH1weDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRyYWNrLW1pbGVzdG9uZSB7XG4gICAgICAgICAgICBmaWxsOiAjZWVlO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudHJhY2stbWlsZXN0b25lLWN1cnJlbnQsIC50cmFjay1taWxlc3RvbmU6aG92ZXIge1xuICAgICAgICAgICAgc3Ryb2tlOiAjMDAwO1xuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiA0cHg7XG4gICAgICAgICAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8c3ZnPlxuICAgICAgICAgIDxnIHRyYW5zZm9ybT17YHRyYW5zbGF0ZSgke3dpZHRoLzJ9LCR7d2lkdGgvMn0pIHJvdGF0ZSgtMzMuNzUpYH0+XG4gICAgICAgICAgICB7dHJhY2tJZHMubWFwKCh0cmFja0lkLCBpKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGlzQ3VycmVudFRyYWNrID0gdHJhY2tJZCA9PSB0aGlzLnByb3BzLmZvY3VzZWRUcmFja0lkXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGcga2V5PXt0cmFja0lkfSB0cmFuc2Zvcm09e2Byb3RhdGUoJHtpICogMzYwIC8gdHJhY2tJZHMubGVuZ3RofSlgfT5cbiAgICAgICAgICAgICAgICAgIHthcmNNaWxlc3RvbmVzLm1hcCgobWlsZXN0b25lKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQ3VycmVudE1pbGVzdG9uZSA9IGlzQ3VycmVudFRyYWNrICYmIG1pbGVzdG9uZSA9PSBjdXJyZW50TWlsZXN0b25lSWRcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNNZXQgPSB0aGlzLnByb3BzLm1pbGVzdG9uZUJ5VHJhY2tbdHJhY2tJZF0gPj0gbWlsZXN0b25lIHx8IG1pbGVzdG9uZSA9PSAwXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXttaWxlc3RvbmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17J3RyYWNrLW1pbGVzdG9uZSAnICsgKGlzTWV0ID8gJ2lzLW1ldCAnIDogJyAnKSArIChpc0N1cnJlbnRNaWxlc3RvbmUgPyAndHJhY2stbWlsZXN0b25lLWN1cnJlbnQnIDogJycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlRm4odHJhY2tJZCwgbWlsZXN0b25lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgZD17dGhpcy5hcmNGbihtaWxlc3RvbmUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2ZpbGw6IGlzTWV0ID8gY2F0ZWdvcnlDb2xvclNjYWxlKHRyYWNrc1t0cmFja0lkXS5jYXRlZ29yeSkgOiB1bmRlZmluZWR9fSAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDxjaXJjbGVcbiAgICAgICAgICAgICAgICAgICAgICByPVwiOFwiXG4gICAgICAgICAgICAgICAgICAgICAgY3g9XCIwXCJcbiAgICAgICAgICAgICAgICAgICAgICBjeT1cIi01MFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmaWxsOiBjYXRlZ29yeUNvbG9yU2NhbGUodHJhY2tzW3RyYWNrSWRdLmNhdGVnb3J5KX19XG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcInRyYWNrLW1pbGVzdG9uZSBcIiArIChpc0N1cnJlbnRUcmFjayAmJiAhY3VycmVudE1pbGVzdG9uZUlkID8gXCJ0cmFjay1taWxlc3RvbmUtY3VycmVudFwiIDogXCJcIil9XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZUZuKHRyYWNrSWQsIDApfSAvPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICl9KX1cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9maWd1cmU+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE5pZ2h0aW5nYWxlQ2hhcnRcbiJdfQ== */\n/*@ sourceURL=/Users/swati/src/snowflake/components/NightingaleChart.js */")), __jsx("svg", {
        className: "jsx-3023698355",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, __jsx("g", {
        transform: "translate(".concat(width / 2, ",").concat(width / 2, ") rotate(-33.75)"),
        className: "jsx-3023698355",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, _constants_tracks__WEBPACK_IMPORTED_MODULE_9__["trackIds"].map(function (trackId, i) {
        var isCurrentTrack = trackId == _this2.props.focusedTrackId;
        return __jsx("g", {
          key: trackId,
          transform: "rotate(".concat(i * 360 / _constants_tracks__WEBPACK_IMPORTED_MODULE_9__["trackIds"].length, ")"),
          className: "jsx-3023698355",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        }, arcMilestones.map(function (milestone) {
          var isCurrentMilestone = isCurrentTrack && milestone == currentMilestoneId;
          var isMet = _this2.props.milestoneByTrack[trackId] >= milestone || milestone == 0;
          return __jsx("path", {
            key: milestone,
            onClick: function onClick() {
              return _this2.props.handleTrackMilestoneChangeFn(trackId, milestone);
            },
            d: _this2.arcFn(milestone),
            style: {
              fill: isMet ? Object(_constants_constants__WEBPACK_IMPORTED_MODULE_8__["categoryColorScale"])(_constants_tracks__WEBPACK_IMPORTED_MODULE_9__["tracks"][trackId].category) : undefined
            },
            className: "jsx-3023698355" + " " + ('track-milestone ' + (isMet ? 'is-met ' : ' ') + (isCurrentMilestone ? 'track-milestone-current' : '') || false),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 77
            },
            __self: this
          });
        }), __jsx("circle", {
          r: "8",
          cx: "0",
          cy: "-50",
          style: {
            fill: Object(_constants_constants__WEBPACK_IMPORTED_MODULE_8__["categoryColorScale"])(_constants_tracks__WEBPACK_IMPORTED_MODULE_9__["tracks"][trackId].category)
          },
          onClick: function onClick() {
            return _this2.props.handleTrackMilestoneChangeFn(trackId, 0);
          },
          className: "jsx-3023698355" + " " + ("track-milestone " + (isCurrentTrack && !currentMilestoneId ? "track-milestone-current" : "") || false),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }));
      }))));
    }
  }]);

  return NightingaleChart;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (NightingaleChart);

/***/ })

})
//# sourceMappingURL=index.js.cc2947cb7ca04082b945.hot-update.js.map