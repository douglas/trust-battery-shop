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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants */ "./constants.js");
/* harmony import */ var _constants_tracks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants/tracks */ "./constants/tracks.js");





var _jsxFileName = "/Users/swati/src/snowflake/components/NightingaleChart.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var width = 400;
var arcMilestones = _constants__WEBPACK_IMPORTED_MODULE_8__["scores"].slice(1); // we'll draw the '0' milestone with a circle, not an arc.

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
      }, "figure.jsx-3023698355{margin:0;}svg.jsx-3023698355{width:".concat(width, "px;height:").concat(width, "px;}.track-milestone.jsx-3023698355{fill:#eee;cursor:pointer;}.track-milestone-current.jsx-3023698355,.track-milestone.jsx-3023698355:hover{stroke:#000;stroke-width:4px;stroke-linejoin:round;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvTmlnaHRpbmdhbGVDaGFydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRG9CLEFBR3NCLEFBRzRCLEFBSTNCLEFBSUUsU0FWZCxDQU9pQixFQUlFLGFBSG5CLElBSXdCLFFBVGdCLGNBVXhDLHdCQVRBIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvTmlnaHRpbmdhbGVDaGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IHsgc2NvcmVzLCBjYXRlZ29yeUNvbG9yU2NhbGUgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgdHlwZSB7IE1pbGVzdG9uZSwgTWlsZXN0b25lTWFwIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgdHJhY2tJZHMsIHRyYWNrcyB9IGZyb20gJy4uL2NvbnN0YW50cy90cmFja3MnXG5pbXBvcnQgdHlwZSB7IFRyYWNrSWQgfSBmcm9tICcuLi9jb25zdGFudHMvdHJhY2tzJ1xuXG5jb25zdCB3aWR0aCA9IDQwMFxuY29uc3QgYXJjTWlsZXN0b25lcyA9IHNjb3Jlcy5zbGljZSgxKSAvLyB3ZSdsbCBkcmF3IHRoZSAnMCcgbWlsZXN0b25lIHdpdGggYSBjaXJjbGUsIG5vdCBhbiBhcmMuXG5cbnR5cGUgUHJvcHMgPSB7XG4gIG1pbGVzdG9uZUJ5VHJhY2s6IE1pbGVzdG9uZU1hcCxcbiAgZm9jdXNlZFRyYWNrSWQ6IFRyYWNrSWQsXG4gIGhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlRm46IChUcmFja0lkLCBNaWxlc3RvbmUpID0+IHZvaWRcbn1cblxuY2xhc3MgTmlnaHRpbmdhbGVDaGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICBjb2xvclNjYWxlOiBhbnlcbiAgcmFkaXVzU2NhbGU6IGFueVxuICBhcmNGbjogYW55XG5cbiAgY29uc3RydWN0b3IocHJvcHM6ICopIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuY29sb3JTY2FsZSA9IGQzLnNjYWxlU2VxdWVudGlhbChkMy5pbnRlcnBvbGF0ZVdhcm0pXG4gICAgICAuZG9tYWluKFswLCA1XSlcblxuICAgIHRoaXMucmFkaXVzU2NhbGUgPSBkMy5zY2FsZUJhbmQoKVxuICAgICAgLmRvbWFpbihhcmNNaWxlc3RvbmVzKVxuICAgICAgLnJhbmdlKFsuMTUgKiB3aWR0aCwgLjQ1ICogd2lkdGhdKVxuICAgICAgLnBhZGRpbmdJbm5lcigwLjEpXG5cbiAgICB0aGlzLmFyY0ZuID0gZDMuYXJjKClcbiAgICAgIC5pbm5lclJhZGl1cyhtaWxlc3RvbmUgPT4gdGhpcy5yYWRpdXNTY2FsZShtaWxlc3RvbmUpKVxuICAgICAgLm91dGVyUmFkaXVzKG1pbGVzdG9uZSA9PiB0aGlzLnJhZGl1c1NjYWxlKG1pbGVzdG9uZSkgKyB0aGlzLnJhZGl1c1NjYWxlLmJhbmR3aWR0aCgpKVxuICAgICAgLnN0YXJ0QW5nbGUoLSBNYXRoLlBJIC8gdHJhY2tJZHMubGVuZ3RoKVxuICAgICAgLmVuZEFuZ2xlKE1hdGguUEkgLyB0cmFja0lkcy5sZW5ndGgpXG4gICAgICAucGFkQW5nbGUoTWF0aC5QSSAvIDIwMClcbiAgICAgIC5wYWRSYWRpdXMoLjQ1ICogd2lkdGgpXG4gICAgICAuY29ybmVyUmFkaXVzKDIpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY3VycmVudE1pbGVzdG9uZUlkID0gdGhpcy5wcm9wcy5taWxlc3RvbmVCeVRyYWNrW3RoaXMucHJvcHMuZm9jdXNlZFRyYWNrSWRdXG4gICAgcmV0dXJuIChcbiAgICAgIDxmaWd1cmU+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBmaWd1cmUge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgd2lkdGg6ICR7d2lkdGh9cHg7XG4gICAgICAgICAgICBoZWlnaHQ6ICR7d2lkdGh9cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC50cmFjay1taWxlc3RvbmUge1xuICAgICAgICAgICAgZmlsbDogI2VlZTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRyYWNrLW1pbGVzdG9uZS1jdXJyZW50LCAudHJhY2stbWlsZXN0b25lOmhvdmVyIHtcbiAgICAgICAgICAgIHN0cm9rZTogIzAwMDtcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aDogNHB4O1xuICAgICAgICAgICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPHN2Zz5cbiAgICAgICAgICA8ZyB0cmFuc2Zvcm09e2B0cmFuc2xhdGUoJHt3aWR0aC8yfSwke3dpZHRoLzJ9KSByb3RhdGUoLTMzLjc1KWB9PlxuICAgICAgICAgICAge3RyYWNrSWRzLm1hcCgodHJhY2tJZCwgaSkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpc0N1cnJlbnRUcmFjayA9IHRyYWNrSWQgPT0gdGhpcy5wcm9wcy5mb2N1c2VkVHJhY2tJZFxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxnIGtleT17dHJhY2tJZH0gdHJhbnNmb3JtPXtgcm90YXRlKCR7aSAqIDM2MCAvIHRyYWNrSWRzLmxlbmd0aH0pYH0+XG4gICAgICAgICAgICAgICAgICB7YXJjTWlsZXN0b25lcy5tYXAoKG1pbGVzdG9uZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0N1cnJlbnRNaWxlc3RvbmUgPSBpc0N1cnJlbnRUcmFjayAmJiBtaWxlc3RvbmUgPT0gY3VycmVudE1pbGVzdG9uZUlkXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzTWV0ID0gdGhpcy5wcm9wcy5taWxlc3RvbmVCeVRyYWNrW3RyYWNrSWRdID49IG1pbGVzdG9uZSB8fCBtaWxlc3RvbmUgPT0gMFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bWlsZXN0b25lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9eyd0cmFjay1taWxlc3RvbmUgJyArIChpc01ldCA/ICdpcy1tZXQgJyA6ICcgJykgKyAoaXNDdXJyZW50TWlsZXN0b25lID8gJ3RyYWNrLW1pbGVzdG9uZS1jdXJyZW50JyA6ICcnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZUZuKHRyYWNrSWQsIG1pbGVzdG9uZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGQ9e3RoaXMuYXJjRm4obWlsZXN0b25lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tmaWxsOiBpc01ldCA/IGNhdGVnb3J5Q29sb3JTY2FsZSh0cmFja3NbdHJhY2tJZF0uY2F0ZWdvcnkpIDogdW5kZWZpbmVkfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICAgICAgcj1cIjhcIlxuICAgICAgICAgICAgICAgICAgICAgIGN4PVwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgY3k9XCItNTBcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7ZmlsbDogY2F0ZWdvcnlDb2xvclNjYWxlKHRyYWNrc1t0cmFja0lkXS5jYXRlZ29yeSl9fVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJ0cmFjay1taWxlc3RvbmUgXCIgKyAoaXNDdXJyZW50VHJhY2sgJiYgIWN1cnJlbnRNaWxlc3RvbmVJZCA/IFwidHJhY2stbWlsZXN0b25lLWN1cnJlbnRcIiA6IFwiXCIpfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2VGbih0cmFja0lkLCAwKX0gLz5cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICApfSl9XG4gICAgICAgICAgPC9nPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvZmlndXJlPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBOaWdodGluZ2FsZUNoYXJ0XG4iXX0= */\n/*@ sourceURL=/Users/swati/src/snowflake/components/NightingaleChart.js */")), __jsx("svg", {
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
              fill: isMet ? Object(_constants__WEBPACK_IMPORTED_MODULE_8__["categoryColorScale"])(_constants_tracks__WEBPACK_IMPORTED_MODULE_9__["tracks"][trackId].category) : undefined
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
            fill: Object(_constants__WEBPACK_IMPORTED_MODULE_8__["categoryColorScale"])(_constants_tracks__WEBPACK_IMPORTED_MODULE_9__["tracks"][trackId].category)
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

/***/ }),

/***/ "./components/SnowflakeApp.js":
/*!************************************!*\
  !*** ./components/SnowflakeApp.js ***!
  \************************************/
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
/* harmony import */ var _components_TrackSelector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TrackSelector */ "./components/TrackSelector.js");
/* harmony import */ var _components_NightingaleChart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NightingaleChart */ "./components/NightingaleChart.js");
/* harmony import */ var _components_KeyboardListener__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/KeyboardListener */ "./components/KeyboardListener.js");
/* harmony import */ var _components_Track__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Track */ "./components/Track.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var _components_Wordmark__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Wordmark */ "./components/Wordmark.js");
/* harmony import */ var _components_LevelThermometer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/LevelThermometer */ "./components/LevelThermometer.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constants */ "./constants.js");
/* harmony import */ var _constants_tracks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../constants/tracks */ "./constants/tracks.js");
/* harmony import */ var _components_PointSummaries__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/PointSummaries */ "./components/PointSummaries.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_TitleSelector__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/TitleSelector */ "./components/TitleSelector.js");





var _jsxFileName = "/Users/swati/src/snowflake/components/SnowflakeApp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_16___default.a.createElement;













var hashToState = function hashToState(hash) {
  if (!hash) return null;
  var result = defaultState();
  var hashValues = hash.split('#')[1].split(',');
  if (!hashValues) return null;
  _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"].forEach(function (trackId, i) {
    result.milestoneByTrack[trackId] = coerceMilestone(Number(hashValues[i]));
  });
  if (hashValues[16]) result.name = decodeURI(hashValues[16]);
  if (hashValues[17]) result.title = decodeURI(hashValues[17]);
  return result;
};

var coerceMilestone = function coerceMilestone(value) {
  // HACK I know this is goofy but i'm dealing with flow typing
  switch (value) {
    case 0:
      return 0;

    case 1:
      return 1;

    case 2:
      return 2;

    case 3:
      return 3;

    case 4:
      return 4;

    case 5:
      return 5;

    default:
      return 0;
  }
};

var emptyState = function emptyState() {
  return {
    name: '',
    title: '',
    milestoneByTrack: {
      'MOBILE': 0,
      'WEB_CLIENT': 0,
      'FOUNDATIONS': 0,
      'SERVERS': 0,
      'PROJECT_MANAGEMENT': 0,
      'COMMUNICATION': 0,
      'CRAFT': 0,
      'INITIATIVE': 0,
      'CAREER_DEVELOPMENT': 0,
      'ORG_DESIGN': 0,
      'WELLBEING': 0,
      'ACCOMPLISHMENT': 0,
      'MENTORSHIP': 0,
      'EVANGELISM': 0,
      'RECRUITING': 0,
      'COMMUNITY': 0
    },
    focusedTrackId: 'MOBILE'
  };
};

var defaultState = function defaultState() {
  return {
    name: 'Cersei Lannister',
    title: 'Staff Engineer',
    milestoneByTrack: {
      'MOBILE': 1,
      'WEB_CLIENT': 2,
      'FOUNDATIONS': 3,
      'SERVERS': 2,
      'PROJECT_MANAGEMENT': 4,
      'COMMUNICATION': 1,
      'CRAFT': 1,
      'INITIATIVE': 4,
      'CAREER_DEVELOPMENT': 3,
      'ORG_DESIGN': 2,
      'WELLBEING': 0,
      'ACCOMPLISHMENT': 4,
      'MENTORSHIP': 2,
      'EVANGELISM': 2,
      'RECRUITING': 3,
      'COMMUNITY': 0
    },
    focusedTrackId: 'MOBILE'
  };
};

var stateToHash = function stateToHash(state) {
  if (!state || !state.milestoneByTrack) return null;
  var values = _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"].map(function (trackId) {
    return state.milestoneByTrack[trackId];
  }).concat(encodeURI(state.name), encodeURI(state.title));
  return values.join(',');
};

var SnowflakeApp =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SnowflakeApp, _React$Component);

  function SnowflakeApp(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SnowflakeApp);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(SnowflakeApp).call(this, props));
    _this.state = emptyState();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SnowflakeApp, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var hash = stateToHash(this.state);
      if (hash) window.location.replace("#".concat(hash));
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var state = hashToState(window.location.hash);

      if (state) {
        this.setState(state);
      } else {
        this.setState(defaultState());
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("main", {
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2126963245",
        __self: this
      }, "body{font-family:Helvetica;}main{width:960px;margin:0 auto;}.name-input{border:none;display:block;border-bottom:2px solid #fff;font-size:30px;line-height:40px;font-weight:bold;width:380px;margin-bottom:10px;}.name-input:hover,.name-input:focus{border-bottom:2px solid #ccc;outline:0;}a{color:#888;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvU25vd2ZsYWtlQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9JMkIsQUFHbUMsQUFHVixBQUlBLEFBVWlCLEFBSWxCLFdBQ1UsQ0FsQlAsQUFJQSxVQVBoQixJQUlBLEFBSStCLEdBU25CLFVBQ1osZ0JBVGlCLE1BYWpCLFNBWm1CLGlCQUNBLGlCQUNMLFlBQ08sbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvU25vd2ZsYWtlQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFRyYWNrU2VsZWN0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9UcmFja1NlbGVjdG9yJ1xuaW1wb3J0IE5pZ2h0aW5nYWxlQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9OaWdodGluZ2FsZUNoYXJ0J1xuaW1wb3J0IEtleWJvYXJkTGlzdGVuZXIgZnJvbSAnLi4vY29tcG9uZW50cy9LZXlib2FyZExpc3RlbmVyJ1xuaW1wb3J0IFRyYWNrIGZyb20gJy4uL2NvbXBvbmVudHMvVHJhY2snXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IFdvcmRtYXJrIGZyb20gJy4uL2NvbXBvbmVudHMvV29yZG1hcmsnXG5pbXBvcnQgTGV2ZWxUaGVybW9tZXRlciBmcm9tICcuLi9jb21wb25lbnRzL0xldmVsVGhlcm1vbWV0ZXInXG5pbXBvcnQgeyBlbGlnaWJsZVRpdGxlcywgbWlsZXN0b25lcyB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCB7IHRyYWNrSWRzLCB0cmFja3MgfSBmcm9tICcuLi9jb25zdGFudHMvdHJhY2tzJ1xuaW1wb3J0IFBvaW50U3VtbWFyaWVzIGZyb20gJy4uL2NvbXBvbmVudHMvUG9pbnRTdW1tYXJpZXMnXG5pbXBvcnQgdHlwZSB7IE1pbGVzdG9uZSwgTWlsZXN0b25lTWFwLCBUcmFja0lkIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRpdGxlU2VsZWN0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9UaXRsZVNlbGVjdG9yJ1xuXG50eXBlIFNub3dmbGFrZUFwcFN0YXRlID0ge1xuICBtaWxlc3RvbmVCeVRyYWNrOiBNaWxlc3RvbmVNYXAsXG4gIG5hbWU6IHN0cmluZyxcbiAgdGl0bGU6IHN0cmluZyxcbiAgZm9jdXNlZFRyYWNrSWQ6IFRyYWNrSWQsXG59XG5cbmNvbnN0IGhhc2hUb1N0YXRlID0gKGhhc2g6IFN0cmluZyk6ID9Tbm93Zmxha2VBcHBTdGF0ZSA9PiB7XG4gIGlmICghaGFzaCkgcmV0dXJuIG51bGxcbiAgY29uc3QgcmVzdWx0ID0gZGVmYXVsdFN0YXRlKClcbiAgY29uc3QgaGFzaFZhbHVlcyA9IGhhc2guc3BsaXQoJyMnKVsxXS5zcGxpdCgnLCcpXG4gIGlmICghaGFzaFZhbHVlcykgcmV0dXJuIG51bGxcbiAgdHJhY2tJZHMuZm9yRWFjaCgodHJhY2tJZCwgaSkgPT4ge1xuICAgIHJlc3VsdC5taWxlc3RvbmVCeVRyYWNrW3RyYWNrSWRdID0gY29lcmNlTWlsZXN0b25lKE51bWJlcihoYXNoVmFsdWVzW2ldKSlcbiAgfSlcbiAgaWYgKGhhc2hWYWx1ZXNbMTZdKSByZXN1bHQubmFtZSA9IGRlY29kZVVSSShoYXNoVmFsdWVzWzE2XSlcbiAgaWYgKGhhc2hWYWx1ZXNbMTddKSByZXN1bHQudGl0bGUgPSBkZWNvZGVVUkkoaGFzaFZhbHVlc1sxN10pXG4gIHJldHVybiByZXN1bHRcbn1cblxuY29uc3QgY29lcmNlTWlsZXN0b25lID0gKHZhbHVlOiBudW1iZXIpOiBNaWxlc3RvbmUgPT4ge1xuICAvLyBIQUNLIEkga25vdyB0aGlzIGlzIGdvb2Z5IGJ1dCBpJ20gZGVhbGluZyB3aXRoIGZsb3cgdHlwaW5nXG4gIHN3aXRjaCh2YWx1ZSkge1xuICAgIGNhc2UgMDogcmV0dXJuIDBcbiAgICBjYXNlIDE6IHJldHVybiAxXG4gICAgY2FzZSAyOiByZXR1cm4gMlxuICAgIGNhc2UgMzogcmV0dXJuIDNcbiAgICBjYXNlIDQ6IHJldHVybiA0XG4gICAgY2FzZSA1OiByZXR1cm4gNVxuICAgIGRlZmF1bHQ6IHJldHVybiAwXG4gIH1cbn1cblxuY29uc3QgZW1wdHlTdGF0ZSA9ICgpOiBTbm93Zmxha2VBcHBTdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIG1pbGVzdG9uZUJ5VHJhY2s6IHtcbiAgICAgICdNT0JJTEUnOiAwLFxuICAgICAgJ1dFQl9DTElFTlQnOiAwLFxuICAgICAgJ0ZPVU5EQVRJT05TJzogMCxcbiAgICAgICdTRVJWRVJTJzogMCxcbiAgICAgICdQUk9KRUNUX01BTkFHRU1FTlQnOiAwLFxuICAgICAgJ0NPTU1VTklDQVRJT04nOiAwLFxuICAgICAgJ0NSQUZUJzogMCxcbiAgICAgICdJTklUSUFUSVZFJzogMCxcbiAgICAgICdDQVJFRVJfREVWRUxPUE1FTlQnOiAwLFxuICAgICAgJ09SR19ERVNJR04nOiAwLFxuICAgICAgJ1dFTExCRUlORyc6IDAsXG4gICAgICAnQUNDT01QTElTSE1FTlQnOiAwLFxuICAgICAgJ01FTlRPUlNISVAnOiAwLFxuICAgICAgJ0VWQU5HRUxJU00nOiAwLFxuICAgICAgJ1JFQ1JVSVRJTkcnOiAwLFxuICAgICAgJ0NPTU1VTklUWSc6IDBcbiAgICB9LFxuICAgIGZvY3VzZWRUcmFja0lkOiAnTU9CSUxFJ1xuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9ICgpOiBTbm93Zmxha2VBcHBTdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0NlcnNlaSBMYW5uaXN0ZXInLFxuICAgIHRpdGxlOiAnU3RhZmYgRW5naW5lZXInLFxuICAgIG1pbGVzdG9uZUJ5VHJhY2s6IHtcbiAgICAgICdNT0JJTEUnOiAxLFxuICAgICAgJ1dFQl9DTElFTlQnOiAyLFxuICAgICAgJ0ZPVU5EQVRJT05TJzogMyxcbiAgICAgICdTRVJWRVJTJzogMixcbiAgICAgICdQUk9KRUNUX01BTkFHRU1FTlQnOiA0LFxuICAgICAgJ0NPTU1VTklDQVRJT04nOiAxLFxuICAgICAgJ0NSQUZUJzogMSxcbiAgICAgICdJTklUSUFUSVZFJzogNCxcbiAgICAgICdDQVJFRVJfREVWRUxPUE1FTlQnOiAzLFxuICAgICAgJ09SR19ERVNJR04nOiAyLFxuICAgICAgJ1dFTExCRUlORyc6IDAsXG4gICAgICAnQUNDT01QTElTSE1FTlQnOiA0LFxuICAgICAgJ01FTlRPUlNISVAnOiAyLFxuICAgICAgJ0VWQU5HRUxJU00nOiAyLFxuICAgICAgJ1JFQ1JVSVRJTkcnOiAzLFxuICAgICAgJ0NPTU1VTklUWSc6IDBcbiAgICB9LFxuICAgIGZvY3VzZWRUcmFja0lkOiAnTU9CSUxFJ1xuICB9XG59XG5cbmNvbnN0IHN0YXRlVG9IYXNoID0gKHN0YXRlOiBTbm93Zmxha2VBcHBTdGF0ZSkgPT4ge1xuICBpZiAoIXN0YXRlIHx8ICFzdGF0ZS5taWxlc3RvbmVCeVRyYWNrKSByZXR1cm4gbnVsbFxuICBjb25zdCB2YWx1ZXMgPSB0cmFja0lkcy5tYXAodHJhY2tJZCA9PiBzdGF0ZS5taWxlc3RvbmVCeVRyYWNrW3RyYWNrSWRdKS5jb25jYXQoZW5jb2RlVVJJKHN0YXRlLm5hbWUpLCBlbmNvZGVVUkkoc3RhdGUudGl0bGUpKVxuICByZXR1cm4gdmFsdWVzLmpvaW4oJywnKVxufVxuXG50eXBlIFByb3BzID0ge31cblxuY2xhc3MgU25vd2ZsYWtlQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTbm93Zmxha2VBcHBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0gZW1wdHlTdGF0ZSgpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgY29uc3QgaGFzaCA9IHN0YXRlVG9IYXNoKHRoaXMuc3RhdGUpXG4gICAgaWYgKGhhc2gpIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGAjJHtoYXNofWApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IGhhc2hUb1N0YXRlKHdpbmRvdy5sb2NhdGlvbi5oYXNoKVxuICAgIGlmIChzdGF0ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZShkZWZhdWx0U3RhdGUoKSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICB3aWR0aDogOTYwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hbWUtaW5wdXQge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB3aWR0aDogMzgwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmFtZS1pbnB1dDpob3ZlciwgLm5hbWUtaW5wdXQ6Zm9jdXMge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOiAnMTlweCBhdXRvIDAnLCB3aWR0aDogMTQyfX0+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnNob3BpZnkuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICA8V29yZG1hcmsgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6IDF9fT5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICB7LyogPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYW1lLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtuYW1lOiBlLnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgICA8VGl0bGVTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgbWlsZXN0b25lQnlUcmFjaz17dGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrfVxuICAgICAgICAgICAgICAgICAgY3VycmVudFRpdGxlPXt0aGlzLnN0YXRlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgc2V0VGl0bGVGbj17KHRpdGxlKSA9PiB0aGlzLnNldFRpdGxlKHRpdGxlKX0gLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxQb2ludFN1bW1hcmllcyBtaWxlc3RvbmVCeVRyYWNrPXt0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2t9IC8+XG4gICAgICAgICAgICA8TGV2ZWxUaGVybW9tZXRlciBtaWxlc3RvbmVCeVRyYWNrPXt0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2t9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6IDB9fT5cbiAgICAgICAgICAgIDxOaWdodGluZ2FsZUNoYXJ0XG4gICAgICAgICAgICAgICAgbWlsZXN0b25lQnlUcmFjaz17dGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrfVxuICAgICAgICAgICAgICAgIGZvY3VzZWRUcmFja0lkPXt0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkfVxuICAgICAgICAgICAgICAgIGhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlRm49eyh0cmFjaywgbWlsZXN0b25lKSA9PiB0aGlzLmhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlKHRyYWNrLCBtaWxlc3RvbmUpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFRyYWNrU2VsZWN0b3JcbiAgICAgICAgICAgIG1pbGVzdG9uZUJ5VHJhY2s9e3RoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja31cbiAgICAgICAgICAgIGZvY3VzZWRUcmFja0lkPXt0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkfVxuICAgICAgICAgICAgc2V0Rm9jdXNlZFRyYWNrSWRGbj17dGhpcy5zZXRGb2N1c2VkVHJhY2tJZC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8S2V5Ym9hcmRMaXN0ZW5lclxuICAgICAgICAgICAgc2VsZWN0TmV4dFRyYWNrRm49e3RoaXMuc2hpZnRGb2N1c2VkVHJhY2suYmluZCh0aGlzLCAxKX1cbiAgICAgICAgICAgIHNlbGVjdFByZXZUcmFja0ZuPXt0aGlzLnNoaWZ0Rm9jdXNlZFRyYWNrLmJpbmQodGhpcywgLTEpfVxuICAgICAgICAgICAgaW5jcmVhc2VGb2N1c2VkTWlsZXN0b25lRm49e3RoaXMuc2hpZnRGb2N1c2VkVHJhY2tNaWxlc3RvbmVCeURlbHRhLmJpbmQodGhpcywgMSl9XG4gICAgICAgICAgICBkZWNyZWFzZUZvY3VzZWRNaWxlc3RvbmVGbj17dGhpcy5zaGlmdEZvY3VzZWRUcmFja01pbGVzdG9uZUJ5RGVsdGEuYmluZCh0aGlzLCAtMSl9IC8+XG4gICAgICAgIDxUcmFja1xuICAgICAgICAgICAgbWlsZXN0b25lQnlUcmFjaz17dGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrfVxuICAgICAgICAgICAgdHJhY2tJZD17dGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZH1cbiAgICAgICAgICAgIGhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlRm49eyh0cmFjaywgbWlsZXN0b25lKSA9PiB0aGlzLmhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlKHRyYWNrLCBtaWxlc3RvbmUpfSAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L21haW4+XG4gICAgKVxuICB9XG5cbiAgaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2UodHJhY2tJZDogVHJhY2tJZCwgbWlsZXN0b25lOiBNaWxlc3RvbmUpIHtcbiAgICBjb25zdCBtaWxlc3RvbmVCeVRyYWNrID0gdGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrXG4gICAgbWlsZXN0b25lQnlUcmFja1t0cmFja0lkXSA9IG1pbGVzdG9uZVxuXG4gICAgY29uc3QgdGl0bGVzID0gZWxpZ2libGVUaXRsZXMobWlsZXN0b25lQnlUcmFjaylcbiAgICBjb25zdCB0aXRsZSA9IHRpdGxlcy5pbmRleE9mKHRoaXMuc3RhdGUudGl0bGUpID09PSAtMSA/IHRpdGxlc1swXSA6IHRoaXMuc3RhdGUudGl0bGVcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBtaWxlc3RvbmVCeVRyYWNrLCBmb2N1c2VkVHJhY2tJZDogdHJhY2tJZCwgdGl0bGUgfSlcbiAgfVxuXG4gIHNoaWZ0Rm9jdXNlZFRyYWNrKGRlbHRhOiBudW1iZXIpIHtcbiAgICBsZXQgaW5kZXggPSB0cmFja0lkcy5pbmRleE9mKHRoaXMuc3RhdGUuZm9jdXNlZFRyYWNrSWQpXG4gICAgaW5kZXggPSAoaW5kZXggKyBkZWx0YSArIHRyYWNrSWRzLmxlbmd0aCkgJSB0cmFja0lkcy5sZW5ndGhcbiAgICBjb25zdCBmb2N1c2VkVHJhY2tJZCA9IHRyYWNrSWRzW2luZGV4XVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkVHJhY2tJZCB9KVxuICB9XG5cbiAgc2V0Rm9jdXNlZFRyYWNrSWQodHJhY2tJZDogVHJhY2tJZCkge1xuICAgIGxldCBpbmRleCA9IHRyYWNrSWRzLmluZGV4T2YodHJhY2tJZClcbiAgICBjb25zdCBmb2N1c2VkVHJhY2tJZCA9IHRyYWNrSWRzW2luZGV4XVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkVHJhY2tJZCB9KVxuICB9XG5cbiAgc2hpZnRGb2N1c2VkVHJhY2tNaWxlc3RvbmVCeURlbHRhKGRlbHRhOiBudW1iZXIpIHtcbiAgICBsZXQgcHJldk1pbGVzdG9uZSA9IHRoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja1t0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkXVxuICAgIGxldCBtaWxlc3RvbmUgPSBwcmV2TWlsZXN0b25lICsgZGVsdGFcbiAgICBpZiAobWlsZXN0b25lIDwgMCkgbWlsZXN0b25lID0gMFxuICAgIGlmIChtaWxlc3RvbmUgPiA1KSBtaWxlc3RvbmUgPSA1XG4gICAgdGhpcy5oYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZSh0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkLCAoKG1pbGVzdG9uZTogYW55KTogTWlsZXN0b25lKSlcbiAgfVxuXG4gIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICBsZXQgdGl0bGVzID0gZWxpZ2libGVUaXRsZXModGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrKVxuICAgIHRpdGxlID0gdGl0bGVzLmluZGV4T2YodGl0bGUpID09IC0xID8gdGl0bGVzWzBdIDogdGl0bGVcbiAgICB0aGlzLnNldFN0YXRlKHsgdGl0bGUgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbm93Zmxha2VBcHBcbiJdfQ== */\n/*@ sourceURL=/Users/swati/src/snowflake/components/SnowflakeApp.js */"), __jsx("div", {
        style: {
          margin: '19px auto 0',
          width: 142
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, __jsx("a", {
        href: "https://www.shopify.com",
        target: "_blank",
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, __jsx(_components_Wordmark__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }))), __jsx("div", {
        style: {
          display: 'flex'
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, __jsx("div", {
        style: {
          flex: 1
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, __jsx("form", {
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, __jsx(_components_TitleSelector__WEBPACK_IMPORTED_MODULE_17__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        currentTitle: this.state.title,
        setTitleFn: function setTitleFn(title) {
          return _this2.setTitle(title);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175
        },
        __self: this
      })), __jsx(_components_PointSummaries__WEBPACK_IMPORTED_MODULE_15__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }), __jsx(_components_LevelThermometer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      })), __jsx("div", {
        style: {
          flex: 0
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, __jsx(_components_NightingaleChart__WEBPACK_IMPORTED_MODULE_7__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        focusedTrackId: this.state.focusedTrackId,
        handleTrackMilestoneChangeFn: function handleTrackMilestoneChangeFn(track, milestone) {
          return _this2.handleTrackMilestoneChange(track, milestone);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }))), __jsx(_components_TrackSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        focusedTrackId: this.state.focusedTrackId,
        setFocusedTrackIdFn: this.setFocusedTrackId.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }), __jsx(_components_KeyboardListener__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectNextTrackFn: this.shiftFocusedTrack.bind(this, 1),
        selectPrevTrackFn: this.shiftFocusedTrack.bind(this, -1),
        increaseFocusedMilestoneFn: this.shiftFocusedTrackMilestoneByDelta.bind(this, 1),
        decreaseFocusedMilestoneFn: this.shiftFocusedTrackMilestoneByDelta.bind(this, -1),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      }), __jsx(_components_Track__WEBPACK_IMPORTED_MODULE_9__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        trackId: this.state.focusedTrackId,
        handleTrackMilestoneChangeFn: function handleTrackMilestoneChangeFn(track, milestone) {
          return _this2.handleTrackMilestoneChange(track, milestone);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: this
      }));
    }
  }, {
    key: "handleTrackMilestoneChange",
    value: function handleTrackMilestoneChange(trackId, milestone) {
      var milestoneByTrack = this.state.milestoneByTrack;
      milestoneByTrack[trackId] = milestone;
      var titles = Object(_constants__WEBPACK_IMPORTED_MODULE_13__["eligibleTitles"])(milestoneByTrack);
      var title = titles.indexOf(this.state.title) === -1 ? titles[0] : this.state.title;
      this.setState({
        milestoneByTrack: milestoneByTrack,
        focusedTrackId: trackId,
        title: title
      });
    }
  }, {
    key: "shiftFocusedTrack",
    value: function shiftFocusedTrack(delta) {
      var index = _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"].indexOf(this.state.focusedTrackId);
      index = (index + delta + _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"].length) % _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"].length;
      var focusedTrackId = _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"][index];
      this.setState({
        focusedTrackId: focusedTrackId
      });
    }
  }, {
    key: "setFocusedTrackId",
    value: function setFocusedTrackId(trackId) {
      var index = _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"].indexOf(trackId);
      var focusedTrackId = _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"][index];
      this.setState({
        focusedTrackId: focusedTrackId
      });
    }
  }, {
    key: "shiftFocusedTrackMilestoneByDelta",
    value: function shiftFocusedTrackMilestoneByDelta(delta) {
      var prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId];
      var milestone = prevMilestone + delta;
      if (milestone < 0) milestone = 0;
      if (milestone > 5) milestone = 5;
      this.handleTrackMilestoneChange(this.state.focusedTrackId, milestone);
    }
  }, {
    key: "setTitle",
    value: function setTitle(title) {
      var titles = Object(_constants__WEBPACK_IMPORTED_MODULE_13__["eligibleTitles"])(this.state.milestoneByTrack);
      title = titles.indexOf(title) == -1 ? titles[0] : title;
      this.setState({
        title: title
      });
    }
  }]);

  return SnowflakeApp;
}(react__WEBPACK_IMPORTED_MODULE_16___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SnowflakeApp);

/***/ }),

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
      }, "div.track.jsx-2815140849{margin:0 0 20px 0;padding-bottom:20px;border-bottom:2px solid #ccc;}h2.jsx-2815140849{margin:0 0 10px 0;}p.track-description.jsx-2815140849{margin-top:0;padding-bottom:20px;border-bottom:2px solid #ccc;}table.jsx-2815140849{border-spacing:3px;}td.jsx-2815140849{line-height:50px;width:50px;text-align:center;background:#eee;font-weight:bold;font-size:24px;border-radius:3px;cursor:pointer;}ul.jsx-2815140849{line-height:1.5em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvVHJhY2suanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJvQixBQUcrQixBQUtBLEFBR0wsQUFLTSxBQUdGLEFBVUMsYUFqQkUsSUFRVCxDQWhCUyxBQUt0QixBQXFCQSxDQWJBLFNBSW9CLEtBUlcsS0FSQSxRQWlCYixnQkFSbEIsQUFTbUIsS0FqQm5CLFlBa0JpQixlQUNHLGtCQUNILGVBQ2pCIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvVHJhY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAZmxvd1xuXG5pbXBvcnQgeyBzY29yZXMsIGNhdGVnb3J5Q29sb3JTY2FsZSB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCB7IHRyYWNrcyB9IGZyb20gJy4uL2NvbnN0YW50cy90cmFja3MnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgdHlwZSB7IE1pbGVzdG9uZU1hcCwgTWlsZXN0b25lIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IHR5cGUgeyBUcmFja0lkIH0gZnJvbSAnLi4vY29uc3RhbnRzL3RyYWNrcydcblxudHlwZSBQcm9wcyA9IHtcbiAgbWlsZXN0b25lQnlUcmFjazogTWlsZXN0b25lTWFwLFxuICB0cmFja0lkOiBUcmFja0lkLFxuICBoYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZUZuOiAoVHJhY2tJZCwgTWlsZXN0b25lKSA9PiB2b2lkXG59XG5cbmNsYXNzIFRyYWNrIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB0cmFjayA9IHRyYWNrc1t0aGlzLnByb3BzLnRyYWNrSWRdXG4gICAgY29uc3QgY3VycmVudE1pbGVzdG9uZUlkID0gdGhpcy5wcm9wcy5taWxlc3RvbmVCeVRyYWNrW3RoaXMucHJvcHMudHJhY2tJZF1cbiAgICBjb25zdCBjdXJyZW50TWlsZXN0b25lID0gdHJhY2subWlsZXN0b25lc1tjdXJyZW50TWlsZXN0b25lSWQgLSAxXVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyYWNrXCI+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBkaXYudHJhY2sge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBwLnRyYWNrLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICBib3JkZXItc3BhY2luZzogM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZCB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICB1bCB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxoMj57dHJhY2suZGlzcGxheU5hbWV9PC9oMj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidHJhY2stZGVzY3JpcHRpb25cIj57dHJhY2suZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG4gICAgICAgICAgPHRhYmxlIHN0eWxlPXt7ZmxleDogMCwgbWFyZ2luUmlnaHQ6IDUwfX0+XG4gICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgIHtzY29yZXMuc2xpY2UoKS5yZXZlcnNlKCkubWFwKChtaWxlc3RvbmUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpc01ldCA9IG1pbGVzdG9uZSA8PSBjdXJyZW50TWlsZXN0b25lSWRcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17bWlsZXN0b25lfT5cbiAgICAgICAgICAgICAgICAgICAgPHRkIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2VGbih0aGlzLnByb3BzLnRyYWNrSWQsIG1pbGVzdG9uZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e2JvcmRlcjogYDRweCBzb2xpZCAke21pbGVzdG9uZSA9PT0gY3VycmVudE1pbGVzdG9uZUlkID8gJyMwMDAnIDogaXNNZXQgPyBjYXRlZ29yeUNvbG9yU2NhbGUodHJhY2suY2F0ZWdvcnkpIDogJyNlZWUnfWAsIGJhY2tncm91bmQ6IGlzTWV0ID8gY2F0ZWdvcnlDb2xvclNjYWxlKHRyYWNrLmNhdGVnb3J5KSA6IHVuZGVmaW5lZH19PlxuICAgICAgICAgICAgICAgICAgICAgIHttaWxlc3RvbmV9XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAge2N1cnJlbnRNaWxlc3RvbmUgPyAoXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDogMX19PlxuICAgICAgICAgICAgICA8aDM+e2N1cnJlbnRNaWxlc3RvbmUuc3VtbWFyeX08L2gzPlxuICAgICAgICAgICAgICA8aDQ+RXhhbXBsZSBiZWhhdmlvcnM6PC9oND5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtjdXJyZW50TWlsZXN0b25lLnNpZ25hbHMubWFwKChzaWduYWwsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2l9PntzaWduYWx9PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPGg0PkV4YW1wbGUgdGFza3M6PC9oND5cbiAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgIHtjdXJyZW50TWlsZXN0b25lLmV4YW1wbGVzLm1hcCgoZXhhbXBsZSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgPGxpIGtleT17aX0+e2V4YW1wbGV9PC9saT5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFja1xuIl19 */\n/*@ sourceURL=/Users/swati/src/snowflake/components/Track.js */"), __jsx("h2", {
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
      }, _constants__WEBPACK_IMPORTED_MODULE_6__["scores"].slice().reverse().map(function (milestone) {
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
            border: "4px solid ".concat(milestone === currentMilestoneId ? '#000' : isMet ? Object(_constants__WEBPACK_IMPORTED_MODULE_6__["categoryColorScale"])(track.category) : '#eee'),
            background: isMet ? Object(_constants__WEBPACK_IMPORTED_MODULE_6__["categoryColorScale"])(track.category) : undefined
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
      }, currentMilestone.summary), __jsx("h4", {
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Example behaviors:"), __jsx("ul", {
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, currentMilestone.signals.map(function (signal, i) {
        return __jsx("li", {
          key: i,
          className: "jsx-2815140849",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, signal);
      })), __jsx("h4", {
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Example tasks:"), __jsx("ul", {
        className: "jsx-2815140849",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, currentMilestone.examples.map(function (example, i) {
        return __jsx("li", {
          key: i,
          className: "jsx-2815140849",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        }, example);
      }))) : null));
    }
  }]);

  return Track;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Track);

/***/ }),

/***/ "./components/TrackSelector.js":
/*!*************************************!*\
  !*** ./components/TrackSelector.js ***!
  \*************************************/
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
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants */ "./constants.js");
/* harmony import */ var _constants_tracks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/tracks */ "./constants/tracks.js");





var _jsxFileName = "/Users/swati/src/snowflake/components/TrackSelector.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;




var TrackSelector =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(TrackSelector, _React$Component);

  function TrackSelector() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, TrackSelector);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(TrackSelector).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(TrackSelector, [{
    key: "render",
    value: function render() {
      var _this = this;

      return __jsx("table", {
        className: "jsx-886021826",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "886021826",
        __self: this
      }, "table.jsx-886021826{width:100%;border-spacing:3px;border-bottom:2px solid #ccc;padding-bottom:20px;margin-bottom:20px;margin-left:-3px;}.track-selector-value.jsx-886021826{line-height:50px;width:50px;text-align:center;background:#eee;font-weight:bold;font-size:24px;border-radius:3px;cursor:pointer;}.track-selector-label.jsx-886021826{text-align:center;font-size:9px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvVHJhY2tTZWxlY3Rvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQm9CLEFBR3dCLEFBUU0sQUFVQyxXQWpCQyxNQVFSLENBVUcsVUFUSSxFQVJXLEVBa0IvQixjQVRrQixhQVJJLEdBU0gsaUJBUkUsQUFTSixlQUNHLElBVEQsY0FVRixHQVRqQixZQVVBIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvVHJhY2tTZWxlY3Rvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEBmbG93XG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGNhdGVnb3J5Q29sb3JTY2FsZSB9IGZyb20gJy4uL2NvbnN0YW50cydcbmltcG9ydCB7IHRyYWNrSWRzLCB0cmFja3MgfSBmcm9tICcuLi9jb25zdGFudHMvdHJhY2tzJ1xuaW1wb3J0IHR5cGUgeyBNaWxlc3RvbmVNYXAsIFRyYWNrSWQgfSBmcm9tICcuLi9jb25zdGFudHMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIG1pbGVzdG9uZUJ5VHJhY2s6IE1pbGVzdG9uZU1hcCxcbiAgZm9jdXNlZFRyYWNrSWQ6IFRyYWNrSWQsXG4gIHNldEZvY3VzZWRUcmFja0lkRm46IChUcmFja0lkKSA9PiB2b2lkXG59XG5cbmNsYXNzIFRyYWNrU2VsZWN0b3IgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dGFibGU+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAtM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudHJhY2stc2VsZWN0b3ItdmFsdWUge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRyYWNrLXNlbGVjdG9yLWxhYmVsIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAge3RyYWNrSWRzLm1hcCh0cmFja0lkID0+IChcbiAgICAgICAgICAgICAgPHRkIGtleT17dHJhY2tJZH0gY2xhc3NOYW1lPVwidHJhY2stc2VsZWN0b3ItbGFiZWxcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnNldEZvY3VzZWRUcmFja0lkRm4odHJhY2tJZCl9PlxuICAgICAgICAgICAgICAgIHt0cmFja3NbdHJhY2tJZF0uZGlzcGxheU5hbWV9XG4gICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIHt0cmFja0lkcy5tYXAodHJhY2tJZCA9PiAoXG4gICAgICAgICAgICAgIDx0ZCBrZXk9e3RyYWNrSWR9IGNsYXNzTmFtZT1cInRyYWNrLXNlbGVjdG9yLXZhbHVlXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7Ym9yZGVyOiAnNHB4IHNvbGlkICcgKyAodHJhY2tJZCA9PSB0aGlzLnByb3BzLmZvY3VzZWRUcmFja0lkID8gJyMwMDAnOiBjYXRlZ29yeUNvbG9yU2NhbGUodHJhY2tzW3RyYWNrSWRdLmNhdGVnb3J5KSksIGJhY2tncm91bmQ6IGNhdGVnb3J5Q29sb3JTY2FsZSh0cmFja3NbdHJhY2tJZF0uY2F0ZWdvcnkpfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuc2V0Rm9jdXNlZFRyYWNrSWRGbih0cmFja0lkKX0+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMubWlsZXN0b25lQnlUcmFja1t0cmFja0lkXX1cbiAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFja1NlbGVjdG9yXG4iXX0= */\n/*@ sourceURL=/Users/swati/src/snowflake/components/TrackSelector.js */"), __jsx("tbody", {
        className: "jsx-886021826",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("tr", {
        className: "jsx-886021826",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, _constants_tracks__WEBPACK_IMPORTED_MODULE_8__["trackIds"].map(function (trackId) {
        return __jsx("td", {
          key: trackId,
          onClick: function onClick() {
            return _this.props.setFocusedTrackIdFn(trackId);
          },
          className: "jsx-886021826" + " " + "track-selector-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, _constants_tracks__WEBPACK_IMPORTED_MODULE_8__["tracks"][trackId].displayName);
      })), __jsx("tr", {
        className: "jsx-886021826",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, _constants_tracks__WEBPACK_IMPORTED_MODULE_8__["trackIds"].map(function (trackId) {
        return __jsx("td", {
          key: trackId,
          style: {
            border: '4px solid ' + (trackId == _this.props.focusedTrackId ? '#000' : Object(_constants__WEBPACK_IMPORTED_MODULE_7__["categoryColorScale"])(_constants_tracks__WEBPACK_IMPORTED_MODULE_8__["tracks"][trackId].category)),
            background: Object(_constants__WEBPACK_IMPORTED_MODULE_7__["categoryColorScale"])(_constants_tracks__WEBPACK_IMPORTED_MODULE_8__["tracks"][trackId].category)
          },
          onClick: function onClick() {
            return _this.props.setFocusedTrackIdFn(trackId);
          },
          className: "jsx-886021826" + " " + "track-selector-value",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, _this.props.milestoneByTrack[trackId]);
      }))));
    }
  }]);

  return TrackSelector;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (TrackSelector);

/***/ }),

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/*! exports provided: scores, milestones, pointsToLevels, maxLevel, categoryIds, categoryPointsFromMilestoneMap, totalPointsFromMilestoneMap, categoryColorScale, titles, eligibleTitles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scores", function() { return scores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "milestones", function() { return milestones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pointsToLevels", function() { return pointsToLevels; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxLevel", function() { return maxLevel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryIds", function() { return categoryIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryPointsFromMilestoneMap", function() { return categoryPointsFromMilestoneMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalPointsFromMilestoneMap", function() { return totalPointsFromMilestoneMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryColorScale", function() { return categoryColorScale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titles", function() { return titles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eligibleTitles", function() { return eligibleTitles; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _constants_tracks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/tracks */ "./constants/tracks.js");





var scores = [0, 1, 2, 3, 4];
var milestones = {
  0: {
    level: 0,
    description: 'Never',
    points: 0
  },
  1: {
    level: 1,
    description: 'Rarely',
    points: 1
  },
  2: {
    level: 2,
    description: 'Sometimes',
    points: 3
  },
  3: {
    level: 3,
    description: 'Often',
    points: 6
  },
  4: {
    level: 4,
    description: 'Always',
    points: 12
  }
};
var pointsToLevels = {
  '0': '1.1',
  '5': '1.2',
  '11': '1.3',
  '17': '2.1',
  '23': '2.2',
  '29': '2.3',
  '36': '3.1',
  '43': '3.2',
  '50': '3.3',
  '58': '4.1',
  '66': '4.2',
  '74': '4.3',
  '90': '5.1',
  '110': '5.2',
  '135': '5.3'
};
var maxLevel = 135;
var categoryIds = _constants_tracks__WEBPACK_IMPORTED_MODULE_4__["trackIds"].reduce(function (set, trackId) {
  set.add(tracks[trackId].category);
  return set;
}, new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2___default.a());
var categoryPointsFromMilestoneMap = function categoryPointsFromMilestoneMap(milestoneMap) {
  var pointsByCategory = new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1___default.a();
  _constants_tracks__WEBPACK_IMPORTED_MODULE_4__["trackIds"].forEach(function (trackId) {
    var milestone = milestoneMap[trackId];
    var categoryId = tracks[trackId].category;
    var currentPoints = pointsByCategory.get(categoryId) || 0;
    pointsByCategory.set(categoryId, currentPoints + milestones[milestone].points);
  });
  return _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(categoryIds.values()).map(function (categoryId) {
    var points = pointsByCategory.get(categoryId);
    return {
      categoryId: categoryId,
      points: pointsByCategory.get(categoryId) || 0
    };
  });
};
var totalPointsFromMilestoneMap = function totalPointsFromMilestoneMap(milestoneMap) {
  return _constants_tracks__WEBPACK_IMPORTED_MODULE_4__["trackIds"].map(function (trackId) {
    return milestones[milestoneMap[trackId]].points;
  }).reduce(function (sum, addend) {
    return sum + addend;
  }, 0);
};
var categoryColorScale = d3__WEBPACK_IMPORTED_MODULE_3__["scaleOrdinal"]().domain(categoryIds).range(['#47C1BF', '#006FBB', '#EEC200', '#F49342']);
var titles = [{
  label: 'Engineer I',
  minPoints: 0,
  maxPoints: 16
}, {
  label: 'Engineer II',
  minPoints: 17,
  maxPoints: 35
}, {
  label: 'Senior Engineer',
  minPoints: 36,
  maxPoints: 57
}, {
  label: 'Group Lead',
  minPoints: 36,
  maxPoints: 57
}, {
  label: 'Staff Engineer',
  minPoints: 58,
  maxPoints: 89
}, {
  label: 'Senior Group Lead',
  minPoints: 58,
  maxPoints: 89
}, {
  label: 'Principal Engineer',
  minPoints: 90
}, {
  label: 'Director of Engineering',
  minPoints: 90
}];
var eligibleTitles = function eligibleTitles(milestoneMap) {
  var totalPoints = totalPointsFromMilestoneMap(milestoneMap);
  return titles.filter(function (title) {
    return (title.minPoints === undefined || totalPoints >= title.minPoints) && (title.maxPoints === undefined || totalPoints <= title.maxPoints);
  }).map(function (title) {
    return title.label;
  });
};

/***/ }),

/***/ "./constants/tracks.js":
/*!*****************************!*\
  !*** ./constants/tracks.js ***!
  \*****************************/
/*! exports provided: tracks, trackIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tracks", function() { return tracks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trackIds", function() { return trackIds; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

var tracks = {
  "MOBILE": {
    "displayName": "Keeps Promises",
    "category": "A",
    "description": "Does what they said they will do",
    "milestones": [{
      "summary": "Works effectively within established iOS or Android architectures, following current best practices",
      "signals": ["Delivers features requiring simple local modifications", "Adds simple actions that call server endpoints", "Reuses existing components appropriately"],
      "examples": ["Added existing button to a different iOS surface", "Add follow button for publications on Android", "Fetched and displayed a new stream, using existing stream item styles"]
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": ["Defines new useful and appropriate proto-generated objects", "Creates simple new activities on Android", "Migrates code from old patterns to new patterns"],
      "examples": ["Upgraded SDWebImage to a new major version", "Added support for rendering a new type of stream item", "Prototyped a simple new feature quickly"]
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of mobile platform constraints",
      "signals": ["Implements complex features with a large product surface area", "Works effectively with  Android reactive programming framework", "Adds support for new iOS features after a major iOS version upgrade"],
      "examples": ["Designed iOS caching strategy for offline reading", "Built series reader on Android", "Informed the team about recent best practice changes and deprecations"]
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": ["Pioneers architecture migration strategies that reduce programmer burden", "Fixes subtle memory management issues", "Implements interactive dismissals that bring delight"],
      "examples": ["Upgraded CocoaPods to a new major version", "Designed architecture for fetching and rendering stream items", "Migrated Android persistance layer to reactive programming"]
    }, {
      "summary": "Is an industry-leading expert in mobile engineering or sets strategic mobile direction for an eng team",
      "signals": ["Defines long-term goals and ensures active projects are in service of them", "Designs and builds innovative, industry-leading UI interactions", "Invents new techniques to responsibly stretch limits of the Android platform"],
      "examples": ["Defined and drove complete migration plan to Swift or Kotlin", "Implemented Android recycler views before platform support existed", "Pioneered application-level abstractions for multi-app environment"]
    }]
  },
  "WEB_CLIENT": {
    "displayName": "Meets Deadlines",
    "category": "A",
    "description": "Commits realistic timelines for deliverables and sticks to them",
    "milestones": [{
      "summary": "Works effectively within established web client architectures, following current best practices",
      "signals": ["Makes minor modifications to existing screens", "Fixes simple design quality issues", "Uses CSS appropriately, following style guide"],
      "examples": ["Implemented sticky footer on the post page", "Hooked up the action to dismiss a post from a stream", "Built PaymentHistory screen using ResponseScreen"]
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": ["Makes sensible abstractions based on template and code patterns", "Specs and builds interactive components independently", "Prototypes simple new features quickly"],
      "examples": ["Built credit card input component", "Created shared buttons template", "Built modal system"]
    }, {
      "summary": "Designs major new features and demonstrates a nuanced understanding of browser constraints",
      "signals": ["Provides useful design feedback and suggests feasible alternatives", "Performs systemic tasks to significantly minimise bundle size", "Acts a caretaker for all of web client code"],
      "examples": ["Designed font loading strategy for Medium", "Researched utility of service workers for Medium", "Designed and implemented ResponseScreen"]
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
      "signals": ["Pioneers architecture migrations that reduce programmer burden", "Implements complex UI transitions that bring delight", "Makes architectural decisions that eliminate entire classes of bugs"],
      "examples": ["Designed Medium's post morpher and delta system", "Implemented Medium's scrolling text over image blur", "Designed and pioneered proto-based model storage"]
    }, {
      "summary": "Is an industry-leading expert in web client or sets strategic web client direction for an eng team",
      "signals": ["Invents new techniques to innovate and overcome browser constraints", "Identifies and solved systemic problems with current architecture", "Defines a long-term vision for web client and ensures projects are in service of it"],
      "examples": ["Invented CSS in JS", "Defined and drove migration strategy to Lite", "Implemented unidirectional data flow to completion"]
    }]
  },
  "FOUNDATIONS": {
    "displayName": "On Time",
    "category": "A",
    "description": "Develops expertise in foundational systems, such as deployments, pipelines, databases and machine learning",
    "milestones": [{
      "summary": "Works effectively within established structures, following current best practices",
      "signals": ["Writes thorough postmortems for service outages", "Makes simple configuration changes to services", "Performs backfills safely and effectively, without causing pages"],
      "examples": ["Made safe and effective Ansible changes", "Implemented new ETL pipelines based on existing ones", "Resolved out of disk errors independently"]
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": ["Made minor version upgrades to technologies", "Builds machine learning jobs within the ML framework", "Triages service issues correctly and independently"],
      "examples": ["Upgraded NodeJS from 8.0 to 8.1.1", "Built custom packages for RPMs", "Improved ETL efficiency by improving Dynamo to S3 loading"]
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": ["Acts as primary maintainer for existing critical systems", "Designs moderately complex systems", "Makes major version upgrades to libraries"],
      "examples": ["Designed Ansible configuration management", "Built Medium's realtime stats pipeline", "Designed flexible framework for writing machine learning jobs"]
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": ["Designs complex projects that encompass multiple systems and technologies", "Demonstrates deep knowledge of foundational systems", "Introduces new databases and technologies to meet underserved needs"],
      "examples": ["Designed and built BBFD", "Designed AWS configuration management", "Introduced Kinesis and pioneered streaming events pipeline"]
    }, {
      "summary": "Is an industry-leading expert in foundational engineering or sets strategic foundational direction for an eng team",
      "signals": ["Designs transformational projects in service of long-term goals", "Defines the strategic vision for foundational work and supporting technologies", "Invents industry-leading techniques to solve complex problems"],
      "examples": ["Invented a novel ML technique that advanced the state of the art", "Defined and developed Medium's continuous delivery strategy", "Developed and implemented HA strategy"]
    }]
  },
  "SERVERS": {
    "displayName": "Dependable",
    "category": "A",
    "description": "Develops expertise in server side engineering, using technologies such as Go, NodeJS, or Scala",
    "milestones": [{
      "summary": "Works effectively within established server side frameworks, following current best practices",
      "signals": ["Adds NodeJS endpoints using layers architecture", "Adds golang endpoints using Gotham architecture", "Makes minor server changes to support client needs"],
      "examples": ["Added IFTTT trigger for new bookmark to medium2", "Added delete audio route to Buggle", "Queried a Dynamo LSI appropriately"]
    }, {
      "summary": "Develops new instances of existing architecture, or minor improvements to existing architecture",
      "signals": ["Assesses correctness and utility of existing code and avoids blind copy-pasting", "Generalizes code when appropriate", "Determines data needs from product requirements"],
      "examples": ["Identified need for new index on Dynamo", "Acted as caretaker for routes protos", "Updated Facebook API version and codebase dependencies"]
    }, {
      "summary": "Designs standalone systems of moderate complexity, or major new features in existing systems",
      "signals": ["Acts as primary maintainer for existing critical systems", "Integrates third party services effectively", "Writes playbooks for new service maintenance"],
      "examples": ["Implemented Google Auth login to Medium", "Implemented payments integration with Stripe", "Built Textshots server"]
    }, {
      "summary": "Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
      "signals": ["Delivers complex systems that achieve their goals", "Avoids subtle architectural mistakes when considering new systems", "Makes appropriate buy vs build choices"],
      "examples": ["Designed Medium's ranked feed architecture", "Designed custom domains architecture", "Created Gotham framework for creating Go services"]
    }, {
      "summary": "Is an industry-leading expert in server side engineering or sets strategic server side direction for an eng team",
      "signals": ["Designs transformational projects of significant complexity and scope", "Makes decisions that have positive, long term, wide ranging consequences", "Identifies and solves systemic problems with current architecture"],
      "examples": ["Researched, vetted, and selected Go as Medium's statically typed language", "Defined microservices architecture and medium2 migration plan", "Defined and implemented proprietary IP core to the company's success"]
    }]
  },
  "PROJECT_MANAGEMENT": {
    "displayName": "Context expertise",
    "category": "B",
    "description": "Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
    "milestones": [{
      "summary": "Effectively delivers individual tasks",
      "signals": ["Estimates small tasks accurately", "Delivers tightly-scoped projects efficiently", "Writes effective technical specs outlining approach"],
      "examples": ["Wrote the technical spec for featured post images", "Delivered stream item support for email digests", "Delivered payment history dashboard"]
    }, {
      "summary": "Effectively delivers small personal projects",
      "signals": ["Performs research and considers alternative approaches", "Balances pragmatism and polish appropriately", "Defines and hits interim milestones"],
      "examples": ["Delivered promo editor", "Delivered audio uploading for web client", "Executed the recommends to claps backfill"]
    }, {
      "summary": "Effectively delivers projects through a small team",
      "signals": ["Delegates tasks to others appropriately", "Integrates business needs into project planning", "Chooses appropriate project management strategy based on context"],
      "examples": ["Ran project retro to assess improvement opportunities", "Completed launch checklist unprompted for well controlled rollout", "Facilitated project kickoff meeting to get buy-in"]
    }, {
      "summary": "Effectively delivers projects through a large team, or with a significant amount of stakeholders or complexity",
      "signals": ["Finds ways to deliver requested scope faster, and prioritizes backlog", "Manages dependencies on other projects and teams", "Leverages recognition of repeated project patterns"],
      "examples": ["Oversaw technical delivery of Hightower", "Managed infrastructure migration to VPC", "Involved marketing, legal, and appropriate functions at project start"]
    }, {
      "summary": "Manages major company pushes delivered by multiple teams",
      "signals": ["Considers external constraints and business objectives when planning", "Leads teams of teams, and coordinates effective cross-functional collaboration", "Owns a key company metric"],
      "examples": ["Managed technical migration to SOA", "Lead technical delivery of 10/7", "Delivered multi-month engineering project on time"]
    }]
  },
  "COMMUNICATION": {
    "displayName": "Passion",
    "category": "B",
    "description": "Shares the right amount of information with the right people, at the right time, and listens effectively",
    "milestones": [{
      "summary": "Communicates effectively to close stakeholders when called upon, and incorporates constructive feedback",
      "signals": ["Communicates project status clearly and effectively", "Collaborates with others with empathy", "Asks for help at the appropriate juncture"],
      "examples": ["Updated The Watch before running a backfill", "Updated project status changes in Asana promptly", "Gave thoughtful check-in and check-out comments"]
    }, {
      "summary": "Communicates with the wider team appropriately, focusing on timeliness and good quality conversations",
      "signals": ["Practises active listening and suspension of attention", "Ensures stakeholders are aware of current blockers", "Chooses the appropriate tools for accurate and timely communication"],
      "examples": ["Received and integrated critical feedback positively", "Created cross-team Slack channel for payments work", "Spoke to domain experts before writing spec"]
    }, {
      "summary": "Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders",
      "signals": ["Resolves communication difficulties between others", "Anticipates and shares schedule deviations in plenty of time", "Manages project stakeholder expectations effectively"],
      "examples": ["Directed team response effectively during outages", "Gave a substantial Eng All Hands presentation on React", "Gave notice of upcoming related work in Eng Briefing"]
    }, {
      "summary": "Communicates complex ideas skillfully and with nuance, and establishes alignment within the wider organization",
      "signals": ["Communicates project risk and tradeoffs skillfully and with nuance", "Contextualizes and clarifies ambiguous direction and strategy for others", "Negotiates resourcing compromises with other teams"],
      "examples": ["Lead off-site workshop on interviewing", "Wrote Medium's growth framework and rationale", "Aligned the entire organization around claps"]
    }, {
      "summary": "Influences outcomes at the highest level, moves beyond mere broadcasting, and sets best practices for others",
      "signals": ["Defines processes for clear communication for the entire team", "Shares the right amount of information with the right people, at the right time", "Develops and delivers plans to execs, the board, and outside investors"],
      "examples": ["Organized half year check-in company offsite", "Created the communication plan for a large organizational change", "Presented to the board about key company metrics and projects"]
    }]
  },
  "CRAFT": {
    "displayName": "Challenges Customers",
    "category": "B",
    "description": "Embodies and promotes practices to ensure excellent quality products and services",
    "milestones": [{
      "summary": "Delivers consistently good quality work",
      "signals": ["Tests new code thoroughly, both locally, and in production once shipped", "Writes tests for every new feature and bug fix", "Writes clear comments and documentation"],
      "examples": ["Caught a bug on Hatch before it went live", "Landed non-trivial PR with no caretaker comments", "Wrote hermetic tests for the happy and sad cases"]
    }, {
      "summary": "Increases the robustness and reliability of codebases, and devotes time to polishing products and systems",
      "signals": ["Refactors existing code to make it more testable", "Adds tests for uncovered areas", "Deletes unnecessary code and deprecates proactively when safe to do so"],
      "examples": ["Requested tests for a PR when acting as reviewer", "Reduced the number of zelda fitzgerald exceptions", "Fixed a TODO for someone else in the codebase"]
    }, {
      "summary": "Improves others' ability to deliver great quality work",
      "signals": ["Implements systems that enable better testing", "Gives thoughtful code reviews as a domain expert", "Adds tooling to improve code quality"],
      "examples": ["Improved PRB to run the same volume of tests faster", "Simplified hermetic test data modification", "Created fixture system for visual quality"]
    }, {
      "summary": "Advocates for and models great quality with proactive actions, and tackles difficult and subtle system issues",
      "signals": ["Builds systems so as to eliminate entire classes of programmer error", "Focuses the team on quality with regular reminders", "Coordinates Watch priorities and projects"],
      "examples": ["Added code coverage reporting to iOS CI pipeline", "Iterated repeatedly to develop Medium's underlines solution", "Defined and oversaw plan for closing Heartbleed vulnerability"]
    }, {
      "summary": "Enables and encourages the entire organization to make quality a central part of the development process",
      "signals": ["Defines policies for the engineering org that encourage quality work", "Identifies and eliminates single points of failure throughout the organization", "Secures time and resources from execs to support great quality"],
      "examples": ["Negotiated resources for Fix-It week with exec team", "Instituted and ensured success of a 20% time policy", "Started The Watch"]
    }]
  },
  "INITIATIVE": {
    "displayName": "Humility",
    "category": "B",
    "description": "Challenges the status quo and effects positive organizational change outside of mandated work",
    "milestones": [{
      "summary": "Identifies opportunities for organizational change or product improvements",
      "signals": ["Writes Hatch posts about improvement opportunities", "Raises meaningful tensions in tactical meetings", "Asks leadership team probing questions at FAM"],
      "examples": ["Wrote about problems with TTR on Hatch", "Wrote about content policy problems on Hatch", "Reported a site issue in Github"]
    }, {
      "summary": "Causes change to positively impact a few individuals or minor improvement to an existing product or service",
      "signals": ["Picks bugs off the backlog proactively when blocked elsewhere", "Makes design quality improvements unprompted", "Takes on trust and safety tasks proactively when blocked elsewhere"],
      "examples": ["Advocated on own behalf for a change in role", "Implemented flow typing for promises", "Audited web client performance in Chrome and proposed fixes"]
    }, {
      "summary": "Causes change to positively impact an entire team or instigates a minor feature or service",
      "signals": ["Demonstrates concepts proactively with prototypes", "Fixes complicated bugs outside of regular domain", "Takes ownership of systems that nobody owns or wants"],
      "examples": ["Defined style guide to resolve style arguments", "Proposed and implemented at-mentions prototype", "Implemented video for Android independently, unprompted"]
    }, {
      "summary": "Effects change that has a substantial positive impact on the engineering organization or a major product impact",
      "signals": ["Champions and pioneers new technologies to solve new classes of problem", "Exemplifies grit and determination in the face of persistent obstacles", "Instigates major new features, services, or architectures"],
      "examples": ["Created the interviewing rubric and booklet", "Implemented and secured support for native login", "Migrated medium2 to mono repo and bazel"]
    }, {
      "summary": "Effects change that has a substantial positive impact on the whole company",
      "signals": ["Creates a new function to solve systemic issues", "Galvanizes the entire company and garners buy in for a new strategy", "Changes complex organizational processes"],
      "examples": ["Migrated the organization from Holacracy", "Built Medium Android prototype and convinced execs to fund it", "Convinced leadership and engineering org to move to Medium Lite architecture"]
    }]
  },
  "CAREER_DEVELOPMENT": {
    "displayName": "Accepting",
    "category": "C",
    "description": "Provides strategic support to engineers to help them build the career they want",
    "milestones": [{
      "summary": "Gives insight into opportunities and helps identify individuals' strengths and weaknesses",
      "signals": ["Advocates on behalf and in defense of a group member", "Shares opportunities for improvements and recognises achievements", "Explains appropriate available industry paths"],
      "examples": ["Collected and delivered feedback", "Discussed career options and areas of interest informally", "Hosted a Floodgate Academy intern"]
    }, {
      "summary": "Formally supports and advocates for one person and provides tools to help them solve career problems",
      "signals": ["Ensure a group member has an appropriate role on their team", "Offers effective career advice to group members, without being prescriptive", "Creates space for people to talk through challenges"],
      "examples": ["Set up and attended regular, constructive 1:1s", "Provided coaching on how to have difficult conversations", "Taught group members the GROW model"]
    }, {
      "summary": "Inspires and retains a small group of people and actively pushes them to stretch themselves",
      "signals": ["Discusses paths, and creates plans for personal and professional growth", "Advocates to align people with appropriate roles within organization", "Works with team leads to elevate emerging leaders"],
      "examples": ["Reviewed individual group member progression every 6 weeks", "Suggested appropriate group member for Tech Lead position", "Arranged a requested switch of discipline for a group member"]
    }, {
      "summary": "Manages interactions and processes between groups, promoting best practices and setting a positive example",
      "signals": ["Manages team transitions smoothly, respecting team and individual needs", "Develops best practices for conflict resolution", "Ensures all group members' roles are meeting their career needs"],
      "examples": ["Completed training on situational leadership", "Built a resourcing plan based on company, team, and individual goals", "Prevented regretted attrition with intentional, targeted intervention"]
    }, {
      "summary": "Supports the development of a signficant part of the engineering org, and widely viewed as a trusted advisor",
      "signals": ["Supports and develops senior leaders", "Identified leadership training opportunities for senior leadership", "Pushes everyone to be as good as they can be, with empathy"],
      "examples": ["Provided coaching to group leads", "Devised Pathwise curriculum for group leads", "Advocated to execs for engineer development resources and programs"]
    }]
  },
  "ORG_DESIGN": {
    "displayName": "Open",
    "category": "C",
    "description": "Defines processes and structures that enables the strong growth and execution of a diverse eng organization",
    "milestones": [{
      "summary": "Respects and participates in processes, giving meaningful feedback to help the organization improve",
      "signals": ["Reflects on meetings that leave them inspired or frustrated", "Teaches others about existing processes", "Actively participates and makes contributions within organizational processes"],
      "examples": ["Facilitated effective tactical meeting with empathy", "Explained tactical meeting format to a new hire", "Provided feedback on sprint planning meeting"]
    }, {
      "summary": "Identifies opportunities to improve existing processes and makes changes that positively affect the local team",
      "signals": ["Defines meeting structure and cadence that meets team needs", "Engages in organizational systems thinking", "Advocates for improved diversity and inclusion, and proposes ideas to help"],
      "examples": ["Defined Frankenmeeting structure for small team", "Improved Watch on-call rotation scheduling", "Defined standard channels for inter-team communication"]
    }, {
      "summary": "Develops processes to solve ongoing organizational problems",
      "signals": ["Creates programs that meaningfully improve organizational diversity", "Solves long-standing organizational problems", "Reallocates resources to meet organizational needs"],
      "examples": ["Developed baseline team templates for consistency", "Created bug-rotation program to address ongoing quality issues", "Defined Guilds manifesto and charter"]
    }, {
      "summary": "Thinks deeply about organizational issues and identifies hidden dynamics that contribute to them",
      "signals": ["Evaluates incentive structures and their effect on execution", "Analyzes existing processes for bias and shortfall", "Ties abstract concerns to concrete organizational actions or norms"],
      "examples": ["Connected mobile recruiting difficulties to focus on excellence", "Raised leadership level change discrepancies", "Analyzed the hiring rubric for false negative potential"]
    }, {
      "summary": "Leads initiatives to address issues stemming from hidden dynamics and company norms",
      "signals": ["Builds programs to train leadership in desired skills", "Creates new structures that provide unique growth opportunities", "Leads planning and communication for reorgs"],
      "examples": ["Lead efforts to increase number of mobile engineers", "Directed resources to meaningfully improve diversity at all levels", "Built the growth framework rubric"]
    }]
  },
  "WELLBEING": {
    "displayName": "Emotionally honest",
    "category": "C",
    "description": "Supports the emotional well-being of group members in difficult times, and celebrates their successes",
    "milestones": [{
      "summary": "Uses tools and processes to help ensure colleagues are healthy and happy",
      "signals": ["Keeps confidences unless legally or morally obliged to do otherwise", "Applies the reasonable person principle to others", "Avoids blame and focuses on positive change"],
      "examples": ["Ensured group members were taking enough vacation", "Put themself in another's shoes to understand their perspective", "Checked in with colleague showing signs of burnout"]
    }, {
      "summary": "Creates a positive, supportive, engaging team environment for group members",
      "signals": ["Sheds light on other experiences to build empathy and compassion", "Validates ongoing work and sustains motivation", "Proposes solutions when teams get bogged down or lose momentum"],
      "examples": ["Coordinated a small celebration for a project launch", "Connected tedious A|B testing project with overall company goals", "Noted a team without a recent win and suggested some easy quick wins"]
    }, {
      "summary": "Manages expectations across peers, leads in the org, promotes calm, and prevents consensus building",
      "signals": ["Trains group members to separate stimulus from response", "Maintains a pulse on individual and team morale", "Helps group members approach problems with curiosity"],
      "examples": ["Completed training on transference and counter transference", "Completed training on compromise and negotiation techniques", "Reframed a problem as a challenge, instead of a barrier, when appropriate"]
    }, {
      "summary": "Advocates for the needs of teams and group members, and proactively works to calm the organization",
      "signals": ["Ensures team environments are safe and inclusive, proactively", "Grounds group member anxieties in reality", "Tracks team retention actively and proposes solutions to strengthen it"],
      "examples": ["Relieved org tension around product direction by providing extra context", "Encouraged group members to focus on what they can control", "Guided people through complex organizational change"]
    }, {
      "summary": "Manages narratives, channels negativity into inspiration and motivation, and protects the entire team",
      "signals": ["Recognizes and points out narratives when appropriate", "Works to reshape narratives from victimization to ownership", "Increases the psychological safety of the entire team"],
      "examples": ["Converted group member from a problem haver to a problem solver", "Challenged false narrative and redirected to compassion and empathy", "Cultivated and championed a culture of empathy within the entire team"]
    }]
  },
  "ACCOMPLISHMENT": {
    "displayName": "Authenticity",
    "category": "C",
    "description": "Inspires day to day excellence, maximises potential and effectively resolves performance issues with compassion",
    "milestones": [{
      "summary": "Helps individuals identify blockers and helps them identify next steps for resolution",
      "signals": ["Notices when someone is stuck and reaches out", "Helps others break down problems into feasible, tangible next steps", "Talks through problems non-judgmentally"],
      "examples": ["Completed training on diagnosing problems", "Unblocked a group member", "Reinforces and affirms positive feedback for good work"]
    }, {
      "summary": "Helps individuals resolve difficult performance issues, with insight, compassion, and skill",
      "signals": ["Gathers context outside the immediate problem", "Recognizes issues within local environment and suggests change", "Works to encourage ownership of actions and responsibilities"],
      "examples": ["Completed training on decision making", "Convinced a group member to solve a problem directly, rather than doing it for them", "Gave honest feedback about poor performance, with compassion"]
    }, {
      "summary": "Intervenes in long-standing performance issues with targeted behavior change or performance plans",
      "signals": ["Aggregates signals of poor performance and creates process for improvement", "Investigates motivation and externalities for consistent poor performance", "Puts together comprehensive, achievable performance plans"],
      "examples": ["Worked with group member to address persistent communication failures", "Arranged a transfer to another team, resulting in improved performance", "Managed group member closely to maximise chances of PIP success"]
    }, {
      "summary": "Mediates escalated situations, empowers underperforming teams, and resolves conflict",
      "signals": ["Recognizes heightened situations and toxic or aggressive interactions", "Inserts themself into conflict where appropriate to calm and mediate", "Encourages open dialog and builds trust between parties in conflict"],
      "examples": ["Empowered a team to drive forward amidst uncertainty", "Protected team from externalities so they could focus on goals", "Mediated sit-down between team members to address tension"]
    }, {
      "summary": "Resolves complex organizational dysfunction, or persistent conflict at senior levels",
      "signals": ["Takes control of dysfunctional teams to organise chaos", "Repairs broken team dynamics and builds harmony", "Presides over a well-oiled team of teams"],
      "examples": ["Turned around the performance of a problematic team", "De-escalated serious tensions between teams", "Rebuilt trust between senior team leads"]
    }]
  },
  "MENTORSHIP": {
    "displayName": "Focuses on others",
    "category": "D",
    "description": "Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
    "milestones": [{
      "summary": "Informally mentors individuals in an ad-hoc way, supports new hires, and conveys institutional knowledge",
      "signals": ["Makes themself available for informal support and advice", "Acts as sounding board for peers and more junior members", "Provides sound advice when asked"],
      "examples": ["Acted as an onboarding buddy", "Paired with an engineer to help them with an unfamiliar area", "Helped a colleague understand their feelings"]
    }, {
      "summary": "Mentors people proactively, and guides people to realizations rather than providing the answer",
      "signals": ["Takes time to explain concepts and best practices", "Asks questions to illuminate concepts, rather than stating them", "Allows others to lead efforts when it will help their development"],
      "examples": ["Shared interesting article with a team member to help with their growth", "Offered unprompted feedback to help growth, with empathy", "Lead from behind to support someone new to a leadership role"]
    }, {
      "summary": "Teaches small groups of engineers and contributes to Medium's shared knowledge base",
      "signals": ["Avoids siloing information when it can be usefully shared with others", "Works to increase the bus factor of systems", "Finds tools that work best for a team member's personality"],
      "examples": ["Gave a brown bag presentation on payments", "Wrote Hatch post on avoiding RDS backfill issues", "Wrote Medium-U content module"]
    }, {
      "summary": "Encourages people to mentor each other, and creates ways for them to do so",
      "signals": ["Defines an entire curriculum for a discipline", "Draws positive attention to well-modeled mentor and teaching behaviours", "Creates brown bag series and lines up speakers"],
      "examples": ["Created and lead Medium's Women in Eng group", "Organized an Eng All Hands with an outside speaker", "Designed and taught web client guild curriculum"]
    }, {
      "summary": "Instills and promotes a culture of learning and development within the team",
      "signals": ["Sets incentive structures to recognise and reward mentorship", "Empowers team members to develop themselves", "Role models productive and healthy mentor relationships"],
      "examples": ["Instituted the professional education budget for engineers", "Mentored mentors", "Started the eng advisor program and lined up external mentors"]
    }]
  },
  "EVANGELISM": {
    "displayName": "Listens",
    "category": "D",
    "description": "Promotes Medium to the outside world and establishes it as an attractive and thoughtful place to work",
    "milestones": [{
      "summary": "Represents Medium well externally, and influences individuals positively",
      "signals": ["Shares personal and organizational successes with their network", "Attends Medium-hosted events and talks with guests", "Communicates genuine and honest excitement about their work externally"],
      "examples": ["Shared a Medium product launch post on Facebook", "Acted as a guide for a non-friend visitor to the office", "Supported PR efforts by giving a quote or having a photo taken"]
    }, {
      "summary": "Participates more centrally in small events, and takes simple actions that positively influence groups of people",
      "signals": ["Takes meaningful action to introduce people to Medium", "Joined public Slack group and represented Medium appropriately, and well", "Organizes positive small- or medium-sized events that bring people to Medium"],
      "examples": ["Volunteered as a helper for CODE2040 writing workshop", "Organized a short tour of the office by college students", "Talked at a Women Who Code event hosted at Medium"]
    }, {
      "summary": "Works hard to positively influence large groups of people on their views of Medium",
      "signals": ["Mentors or participates in a high visibility way in an external organization", "Builds fruitful partnerships with external organizations", "Writes blog posts about Medium that receive moderate traffic"],
      "examples": ["Represented Medium on a panel at a conference of industry experts", "Established close ties with Creative Commons", "Built a durable, long-standing relationship with Code2040"]
    }, {
      "summary": "Establishes Medium as an great, innovative company and workplace to the whole industry",
      "signals": ["Establishes themself as an industry thought leader who attracts talent", "Publishes material about Medium's organizational or technical innovations", "Leverages significant following to evangelise Medium"],
      "examples": ["Published a paper on Medium technology in a peer-reviewed journal", "Authored joint-press release with EFF on DNT", "Published “Why Content Editable Is Terrible” on the Medium engineering blog"]
    }, {
      "summary": "Introduces Medium in a positive light to a wider audience outside the industry",
      "signals": ["Delivers key messages to broad, mainstream audiences", "Influences people with large audiences to talk about Medium positively", "Drives recognition and adoption of Medium in significant numbers"],
      "examples": ["Published or interviewed in a mainstream newspaper or website outside tech", "Keynoted a conference with international attention", "Represented Medium in national televised media"]
    }]
  },
  "RECRUITING": {
    "displayName": "Caring and Compassionate",
    "category": "D",
    "description": "Strengthens Medium's team by bringing in excellent staff members",
    "milestones": [{
      "summary": "Brings new candidates into the pipeline and understands how to evaluate candidates at Medium",
      "signals": ["Reviews existing network for hiring leads regularly", "Shadows interviews to gain familiarity with process", "Reviews current job postings regularly"],
      "examples": ["Completed interview calibration", "Set up casual sessions to practice asking questions", "Referred appropriate individuals for open positions"]
    }, {
      "summary": "Interviews regularly, helps the team make meaningful hiring decisions, and helps build a diverse pipeline",
      "signals": ["Uses interview rubric to provide clear, objective feedback on candidates", "Interviews candidates with empathy and treats them all with equal respect", "Researches approaches for sourcing candidates and diversifying hiring"],
      "examples": ["Added observable evidence for every rating", "Started a monthly brunch for candidates to meet Medium employees", "Tested a new service for quality and diversity of candidates"]
    }, {
      "summary": "Maintains and strengthens the integrity of the current process, and regularly brings in great candidates",
      "signals": ["Teaches new interviewers how to interview with empathy", "Models great interview technique and feedback when shadowed", "Reverse shadows trainees and helps calibrate their feedback"],
      "examples": ["Wrote new interview question which meets our question quality criteria", "Brought candidates into our pipeline proactively, with a high conversion rate", "Proposed useful, tangible improvements to the interview process"]
    }, {
      "summary": "Actively contributes to and leads hiring decisions, and goes to great lengths to source great candidates",
      "signals": ["Documents subtle cues in interviews that indicate values alignment", "Makes hiring decisions, resolving discrepancies between conflicting reports", "Top-grades candidates and teases out character traits"],
      "examples": ["Planned engineering summit on interview process and training", "Organized and lead Medium's presence at a recruitment fair", "Started CODE2040 internship program"]
    }, {
      "summary": "Sets recruitment strategy, invests in long-term relationships for critical roles, and recruits at scale",
      "signals": ["Sets the tone, policy and goals around building a diverse, high-quality team", "Identifies and brings in promising acquisitions", "Tracks industry activity, identifying opportunities for critical roles"],
      "examples": ["Talked with a senior candidate over many months to fill a critical role", "Organized efforts around convincing acquired engineers to join and stay", "Set goals, then tracked and reported metrics on team demographics over time"]
    }]
  },
  "COMMUNITY": {
    "displayName": "Collaborative",
    "category": "D",
    "description": "Builds community internally, gives of themself to the team, and champions and extols company values",
    "milestones": [{
      "summary": "Is available and present on current teams, and works to contribute positively to company culture",
      "signals": ["Participates in team activities and offsites", "Treats colleagues and clients with respect", "Joins groups or committees outside regular duties"],
      "examples": ["Joined and actively participated in the web client guild", "Brought a small gift back from vacation for the team", "Wrote entertaining and informative Prod Ops writeups on Hatch"]
    }, {
      "summary": "Steps up, builds connectedness, and takes concrete actions to promote an inclusive culture",
      "signals": ["Makes space for others to participate", "Collaborates with other engineers outside direct responsibilities", "Finds ways to ramp up and engage new hires quickly"],
      "examples": ["Created onboarding bingo", "Brought shy and introverted people into a dominant conversation", "Volunteered as secretary for a team"]
    }, {
      "summary": "Contributes to improving team relatedness, and helps build a culture of lending support",
      "signals": ["Takes on additional Watch shifts at short notice", "Pitches in to help other teams hit deadlines, without missing own deadlines", "Uses position to raise difficult issues on someone's behalf"],
      "examples": ["Lead Watch cycles with little support while still contributing to projects", "Started and drove the LGBTQIA ERG", "Stayed positive and improved team morale during period after layoffs"]
    }, {
      "summary": "Exemplifies selflessness for the team without compromising responsibilities, and lifts everyone up",
      "signals": ["Goes above and beyond on the Watch, serving the team without complaint", "Implements concrete programs to signficantly improve team inclusivity", "Takes on large amounts of tedious grunt work for the team without being asked"],
      "examples": ["Devoted large amount of time to helping outside direct responsibilities", "Refactored hundreds of legacy Shepherd nodes", "Acted as sole maintainer of Boxen for years"]
    }, {
      "summary": "Lives the company values, guards positive culture, and defines policies that support relatedness between teams",
      "signals": ["Brings separate teams together to build relatedness", "Holds individuals, teams, and leadership accountable to Medium's values", "Sets the tone, policy, and goals around maintaining an inclusive company"],
      "examples": ["Organized wine and olive tasting offsite to Napa for the whole engineering org", "Devised, delivered and acted on findings from an engineer happiness survey", "Challenged and corrected exclusionary behaviour or policies"]
    }]
  }
};
var trackIds = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(tracks);

/***/ })

})
//# sourceMappingURL=index.js.4528e4473aae3af2641d.hot-update.js.map