webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../constants/constants */ "./constants/constants.js");
/* harmony import */ var _constants_tracks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../constants/tracks */ "./constants/tracks.js");
/* harmony import */ var _components_PointSummaries__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/PointSummaries */ "./components/PointSummaries.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);





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
      'KEEP_PROMISES': 0,
      'MEET_DEADLINES': 0,
      'ON_TIME': 0,
      'DEPENDABLE': 0,
      'CONTENT_EXPERTISE': 0,
      'PASSION': 0,
      'CHALLENGE_CUSTOMERS': 0,
      'HUMILITY': 0,
      'ACCEPTANCE': 0,
      'OPENNESS': 0,
      'EMOTIONAL_HONESTY': 0,
      'AUTHENTICITY': 0,
      'FOCUSSING_ON_OTHERS': 0,
      'LISTENING': 0,
      'COMPASSION': 0,
      'COLLABORATION': 0
    },
    focusedTrackId: 'KEEP_PROMISES'
  };
};

var defaultState = function defaultState() {
  return {
    name: 'Cersei Lannister',
    title: 'Staff Engineer',
    milestoneByTrack: {
      'KEEP_PROMISES': 2,
      'MEET_DEADLINES': 3,
      'ON_TIME': 3,
      'DEPENDABLE': 3,
      'CONTENT_EXPERTISE': 4,
      'PASSION': 4,
      'CHALLENGE_CUSTOMERS': 3,
      'HUMILITY': 2,
      'ACCEPTANCE': 1,
      'OPENNESS': 4,
      'EMOTIONAL_HONESTY': 2,
      'AUTHENTICITY': 4,
      'FOCUSSING_ON_OTHERS': 2,
      'LISTENING': 2,
      'COMPASSION': 3,
      'COLLABORATION': 3
    },
    focusedTrackId: 'KEEP_PROMISES'
  };
};

var stateToHash = function stateToHash(state) {
  if (!state || !state.milestoneByTrack) return null;
  var values = _constants_tracks__WEBPACK_IMPORTED_MODULE_14__["trackIds"].map(function (trackId) {
    return state.milestoneByTrack[trackId];
  });
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
          lineNumber: 129
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2126963245",
        __self: this
      }, "body{font-family:Helvetica;}main{width:960px;margin:0 auto;}.name-input{border:none;display:block;border-bottom:2px solid #fff;font-size:30px;line-height:40px;font-weight:bold;width:380px;margin-bottom:10px;}.name-input:hover,.name-input:focus{border-bottom:2px solid #ccc;outline:0;}a{color:#888;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvU25vd2ZsYWtlQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlJMkIsQUFHbUMsQUFHVixBQUlBLEFBVWlCLEFBSWxCLFdBQ1UsQ0FsQlAsQUFJQSxVQVBoQixJQUlBLEFBSStCLEdBU25CLFVBQ1osZ0JBVGlCLE1BYWpCLFNBWm1CLGlCQUNBLGlCQUNMLFlBQ08sbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvU25vd2ZsYWtlQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFRyYWNrU2VsZWN0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9UcmFja1NlbGVjdG9yJ1xuaW1wb3J0IE5pZ2h0aW5nYWxlQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9OaWdodGluZ2FsZUNoYXJ0J1xuaW1wb3J0IEtleWJvYXJkTGlzdGVuZXIgZnJvbSAnLi4vY29tcG9uZW50cy9LZXlib2FyZExpc3RlbmVyJ1xuaW1wb3J0IFRyYWNrIGZyb20gJy4uL2NvbXBvbmVudHMvVHJhY2snXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IFdvcmRtYXJrIGZyb20gJy4uL2NvbXBvbmVudHMvV29yZG1hcmsnXG5pbXBvcnQgTGV2ZWxUaGVybW9tZXRlciBmcm9tICcuLi9jb21wb25lbnRzL0xldmVsVGhlcm1vbWV0ZXInXG5pbXBvcnQgeyBtaWxlc3RvbmVzIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cydcbmltcG9ydCB7IHRyYWNrSWRzLCB0cmFja3MgfSBmcm9tICcuLi9jb25zdGFudHMvdHJhY2tzJ1xuaW1wb3J0IFBvaW50U3VtbWFyaWVzIGZyb20gJy4uL2NvbXBvbmVudHMvUG9pbnRTdW1tYXJpZXMnXG5pbXBvcnQgdHlwZSB7IE1pbGVzdG9uZSwgTWlsZXN0b25lTWFwLCBUcmFja0lkIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxudHlwZSBTbm93Zmxha2VBcHBTdGF0ZSA9IHtcbiAgbWlsZXN0b25lQnlUcmFjazogTWlsZXN0b25lTWFwLFxuICBuYW1lOiBzdHJpbmcsXG4gIHRpdGxlOiBzdHJpbmcsXG4gIGZvY3VzZWRUcmFja0lkOiBUcmFja0lkLFxufVxuXG5jb25zdCBoYXNoVG9TdGF0ZSA9IChoYXNoOiBTdHJpbmcpOiA/U25vd2ZsYWtlQXBwU3RhdGUgPT4ge1xuICBpZiAoIWhhc2gpIHJldHVybiBudWxsXG4gIGNvbnN0IHJlc3VsdCA9IGRlZmF1bHRTdGF0ZSgpXG4gIGNvbnN0IGhhc2hWYWx1ZXMgPSBoYXNoLnNwbGl0KCcjJylbMV0uc3BsaXQoJywnKVxuICBpZiAoIWhhc2hWYWx1ZXMpIHJldHVybiBudWxsXG4gIHRyYWNrSWRzLmZvckVhY2goKHRyYWNrSWQsIGkpID0+IHtcbiAgICByZXN1bHQubWlsZXN0b25lQnlUcmFja1t0cmFja0lkXSA9IGNvZXJjZU1pbGVzdG9uZShOdW1iZXIoaGFzaFZhbHVlc1tpXSkpXG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuY29uc3QgY29lcmNlTWlsZXN0b25lID0gKHZhbHVlOiBudW1iZXIpOiBNaWxlc3RvbmUgPT4ge1xuICAvLyBIQUNLIEkga25vdyB0aGlzIGlzIGdvb2Z5IGJ1dCBpJ20gZGVhbGluZyB3aXRoIGZsb3cgdHlwaW5nXG4gIHN3aXRjaCh2YWx1ZSkge1xuICAgIGNhc2UgMDogcmV0dXJuIDBcbiAgICBjYXNlIDE6IHJldHVybiAxXG4gICAgY2FzZSAyOiByZXR1cm4gMlxuICAgIGNhc2UgMzogcmV0dXJuIDNcbiAgICBjYXNlIDQ6IHJldHVybiA0XG4gICAgY2FzZSA1OiByZXR1cm4gNVxuICAgIGRlZmF1bHQ6IHJldHVybiAwXG4gIH1cbn1cblxuY29uc3QgZW1wdHlTdGF0ZSA9ICgpOiBTbm93Zmxha2VBcHBTdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIG1pbGVzdG9uZUJ5VHJhY2s6IHtcbiAgICAgICdLRUVQX1BST01JU0VTJzogMCxcbiAgICAgICdNRUVUX0RFQURMSU5FUyc6IDAsXG4gICAgICAnT05fVElNRSc6IDAsXG4gICAgICAnREVQRU5EQUJMRSc6IDAsXG4gICAgICAnQ09OVEVOVF9FWFBFUlRJU0UnOiAwLFxuICAgICAgJ1BBU1NJT04nOiAwLFxuICAgICAgJ0NIQUxMRU5HRV9DVVNUT01FUlMnOiAwLFxuICAgICAgJ0hVTUlMSVRZJzogMCxcbiAgICAgICdBQ0NFUFRBTkNFJzogMCxcbiAgICAgICdPUEVOTkVTUyc6IDAsXG4gICAgICAnRU1PVElPTkFMX0hPTkVTVFknOiAwLFxuICAgICAgJ0FVVEhFTlRJQ0lUWSc6IDAsXG4gICAgICAnRk9DVVNTSU5HX09OX09USEVSUyc6IDAsXG4gICAgICAnTElTVEVOSU5HJzogMCxcbiAgICAgICdDT01QQVNTSU9OJzogMCxcbiAgICAgICdDT0xMQUJPUkFUSU9OJzogMFxuICAgIH0sXG4gICAgZm9jdXNlZFRyYWNrSWQ6ICdLRUVQX1BST01JU0VTJ1xuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9ICgpOiBTbm93Zmxha2VBcHBTdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0NlcnNlaSBMYW5uaXN0ZXInLFxuICAgIHRpdGxlOiAnU3RhZmYgRW5naW5lZXInLFxuICAgIG1pbGVzdG9uZUJ5VHJhY2s6IHtcbiAgICAgICdLRUVQX1BST01JU0VTJzogMixcbiAgICAgICdNRUVUX0RFQURMSU5FUyc6IDMsXG4gICAgICAnT05fVElNRSc6IDMsXG4gICAgICAnREVQRU5EQUJMRSc6IDMsXG4gICAgICAnQ09OVEVOVF9FWFBFUlRJU0UnOiA0LFxuICAgICAgJ1BBU1NJT04nOiA0LFxuICAgICAgJ0NIQUxMRU5HRV9DVVNUT01FUlMnOiAzLFxuICAgICAgJ0hVTUlMSVRZJzogMixcbiAgICAgICdBQ0NFUFRBTkNFJzogMSxcbiAgICAgICdPUEVOTkVTUyc6IDQsXG4gICAgICAnRU1PVElPTkFMX0hPTkVTVFknOiAyLFxuICAgICAgJ0FVVEhFTlRJQ0lUWSc6IDQsXG4gICAgICAnRk9DVVNTSU5HX09OX09USEVSUyc6IDIsXG4gICAgICAnTElTVEVOSU5HJzogMixcbiAgICAgICdDT01QQVNTSU9OJzogMyxcbiAgICAgICdDT0xMQUJPUkFUSU9OJzogM1xuICAgIH0sXG4gICAgZm9jdXNlZFRyYWNrSWQ6ICdLRUVQX1BST01JU0VTJ1xuICB9XG59XG5cbmNvbnN0IHN0YXRlVG9IYXNoID0gKHN0YXRlOiBTbm93Zmxha2VBcHBTdGF0ZSkgPT4ge1xuICBpZiAoIXN0YXRlIHx8ICFzdGF0ZS5taWxlc3RvbmVCeVRyYWNrKSByZXR1cm4gbnVsbFxuICBjb25zdCB2YWx1ZXMgPSB0cmFja0lkcy5tYXAodHJhY2tJZCA9PiBzdGF0ZS5taWxlc3RvbmVCeVRyYWNrW3RyYWNrSWRdKVxuICByZXR1cm4gdmFsdWVzLmpvaW4oJywnKVxufVxuXG50eXBlIFByb3BzID0ge31cblxuY2xhc3MgU25vd2ZsYWtlQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTbm93Zmxha2VBcHBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0gZW1wdHlTdGF0ZSgpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgY29uc3QgaGFzaCA9IHN0YXRlVG9IYXNoKHRoaXMuc3RhdGUpXG4gICAgaWYgKGhhc2gpIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGAjJHtoYXNofWApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IGhhc2hUb1N0YXRlKHdpbmRvdy5sb2NhdGlvbi5oYXNoKVxuICAgIGlmIChzdGF0ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZShkZWZhdWx0U3RhdGUoKSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICB3aWR0aDogOTYwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hbWUtaW5wdXQge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB3aWR0aDogMzgwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmFtZS1pbnB1dDpob3ZlciwgLm5hbWUtaW5wdXQ6Zm9jdXMge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOiAnMTlweCBhdXRvIDAnLCB3aWR0aDogMTQyfX0+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnNob3BpZnkuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICA8V29yZG1hcmsgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6IDF9fT5cbiAgICAgICAgICAgIDxQb2ludFN1bW1hcmllcyBtaWxlc3RvbmVCeVRyYWNrPXt0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2t9IC8+XG4gICAgICAgICAgICA8TGV2ZWxUaGVybW9tZXRlciBtaWxlc3RvbmVCeVRyYWNrPXt0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2t9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6IDB9fT5cbiAgICAgICAgICAgIDxOaWdodGluZ2FsZUNoYXJ0XG4gICAgICAgICAgICAgICAgbWlsZXN0b25lQnlUcmFjaz17dGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrfVxuICAgICAgICAgICAgICAgIGZvY3VzZWRUcmFja0lkPXt0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkfVxuICAgICAgICAgICAgICAgIGhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlRm49eyh0cmFjaywgbWlsZXN0b25lKSA9PiB0aGlzLmhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlKHRyYWNrLCBtaWxlc3RvbmUpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFRyYWNrU2VsZWN0b3JcbiAgICAgICAgICAgIG1pbGVzdG9uZUJ5VHJhY2s9e3RoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja31cbiAgICAgICAgICAgIGZvY3VzZWRUcmFja0lkPXt0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkfVxuICAgICAgICAgICAgc2V0Rm9jdXNlZFRyYWNrSWRGbj17dGhpcy5zZXRGb2N1c2VkVHJhY2tJZC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8S2V5Ym9hcmRMaXN0ZW5lclxuICAgICAgICAgICAgc2VsZWN0TmV4dFRyYWNrRm49e3RoaXMuc2hpZnRGb2N1c2VkVHJhY2suYmluZCh0aGlzLCAxKX1cbiAgICAgICAgICAgIHNlbGVjdFByZXZUcmFja0ZuPXt0aGlzLnNoaWZ0Rm9jdXNlZFRyYWNrLmJpbmQodGhpcywgLTEpfVxuICAgICAgICAgICAgaW5jcmVhc2VGb2N1c2VkTWlsZXN0b25lRm49e3RoaXMuc2hpZnRGb2N1c2VkVHJhY2tNaWxlc3RvbmVCeURlbHRhLmJpbmQodGhpcywgMSl9XG4gICAgICAgICAgICBkZWNyZWFzZUZvY3VzZWRNaWxlc3RvbmVGbj17dGhpcy5zaGlmdEZvY3VzZWRUcmFja01pbGVzdG9uZUJ5RGVsdGEuYmluZCh0aGlzLCAtMSl9IC8+XG4gICAgICAgIDxUcmFja1xuICAgICAgICAgICAgbWlsZXN0b25lQnlUcmFjaz17dGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrfVxuICAgICAgICAgICAgdHJhY2tJZD17dGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZH1cbiAgICAgICAgICAgIGhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlRm49eyh0cmFjaywgbWlsZXN0b25lKSA9PiB0aGlzLmhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlKHRyYWNrLCBtaWxlc3RvbmUpfSAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L21haW4+XG4gICAgKVxuICB9XG5cbiAgaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2UodHJhY2tJZDogVHJhY2tJZCwgbWlsZXN0b25lOiBNaWxlc3RvbmUpIHtcbiAgICBjb25zdCBtaWxlc3RvbmVCeVRyYWNrID0gdGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrXG4gICAgbWlsZXN0b25lQnlUcmFja1t0cmFja0lkXSA9IG1pbGVzdG9uZVxuXG4gICAgY29uc3QgdGl0bGVzID0gZWxpZ2libGVUaXRsZXMobWlsZXN0b25lQnlUcmFjaylcbiAgICBjb25zdCB0aXRsZSA9IHRpdGxlcy5pbmRleE9mKHRoaXMuc3RhdGUudGl0bGUpID09PSAtMSA/IHRpdGxlc1swXSA6IHRoaXMuc3RhdGUudGl0bGVcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBtaWxlc3RvbmVCeVRyYWNrLCBmb2N1c2VkVHJhY2tJZDogdHJhY2tJZCwgdGl0bGUgfSlcbiAgfVxuXG4gIHNoaWZ0Rm9jdXNlZFRyYWNrKGRlbHRhOiBudW1iZXIpIHtcbiAgICBsZXQgaW5kZXggPSB0cmFja0lkcy5pbmRleE9mKHRoaXMuc3RhdGUuZm9jdXNlZFRyYWNrSWQpXG4gICAgaW5kZXggPSAoaW5kZXggKyBkZWx0YSArIHRyYWNrSWRzLmxlbmd0aCkgJSB0cmFja0lkcy5sZW5ndGhcbiAgICBjb25zdCBmb2N1c2VkVHJhY2tJZCA9IHRyYWNrSWRzW2luZGV4XVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkVHJhY2tJZCB9KVxuICB9XG5cbiAgc2V0Rm9jdXNlZFRyYWNrSWQodHJhY2tJZDogVHJhY2tJZCkge1xuICAgIGxldCBpbmRleCA9IHRyYWNrSWRzLmluZGV4T2YodHJhY2tJZClcbiAgICBjb25zdCBmb2N1c2VkVHJhY2tJZCA9IHRyYWNrSWRzW2luZGV4XVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkVHJhY2tJZCB9KVxuICB9XG5cbiAgc2hpZnRGb2N1c2VkVHJhY2tNaWxlc3RvbmVCeURlbHRhKGRlbHRhOiBudW1iZXIpIHtcbiAgICBsZXQgcHJldk1pbGVzdG9uZSA9IHRoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja1t0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkXVxuICAgIGxldCBtaWxlc3RvbmUgPSBwcmV2TWlsZXN0b25lICsgZGVsdGFcbiAgICBpZiAobWlsZXN0b25lIDwgMCkgbWlsZXN0b25lID0gMFxuICAgIGlmIChtaWxlc3RvbmUgPiA0KSBtaWxlc3RvbmUgPSA0XG4gICAgdGhpcy5oYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZSh0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkLCAoKG1pbGVzdG9uZTogYW55KTogTWlsZXN0b25lKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbm93Zmxha2VBcHBcbiJdfQ== */\n/*@ sourceURL=/Users/swati/src/snowflake/components/SnowflakeApp.js */"), __jsx("div", {
        style: {
          margin: '19px auto 0',
          width: 142
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, __jsx("a", {
        href: "https://www.shopify.com",
        target: "_blank",
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, __jsx(_components_Wordmark__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }))), __jsx("div", {
        style: {
          display: 'flex'
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, __jsx("div", {
        style: {
          flex: 1
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, __jsx(_components_PointSummaries__WEBPACK_IMPORTED_MODULE_15__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }), __jsx(_components_LevelThermometer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      })), __jsx("div", {
        style: {
          flex: 0
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
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
          lineNumber: 168
        },
        __self: this
      }))), __jsx(_components_TrackSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        focusedTrackId: this.state.focusedTrackId,
        setFocusedTrackIdFn: this.setFocusedTrackId.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }), __jsx(_components_KeyboardListener__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectNextTrackFn: this.shiftFocusedTrack.bind(this, 1),
        selectPrevTrackFn: this.shiftFocusedTrack.bind(this, -1),
        increaseFocusedMilestoneFn: this.shiftFocusedTrackMilestoneByDelta.bind(this, 1),
        decreaseFocusedMilestoneFn: this.shiftFocusedTrackMilestoneByDelta.bind(this, -1),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
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
          lineNumber: 183
        },
        __self: this
      }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }));
    }
  }, {
    key: "handleTrackMilestoneChange",
    value: function handleTrackMilestoneChange(trackId, milestone) {
      var milestoneByTrack = this.state.milestoneByTrack;
      milestoneByTrack[trackId] = milestone;
      var titles = eligibleTitles(milestoneByTrack);
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
      if (milestone > 4) milestone = 4;
      this.handleTrackMilestoneChange(this.state.focusedTrackId, milestone);
    }
  }]);

  return SnowflakeApp;
}(react__WEBPACK_IMPORTED_MODULE_16___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SnowflakeApp);

/***/ }),

/***/ "./components/TitleSelector.js":
false,

/***/ "./constants/constants.js":
/*!********************************!*\
  !*** ./constants/constants.js ***!
  \********************************/
/*! exports provided: scores, milestones, thermometerIncrements, maxPoints, categoryIds, categoryPointsFromMilestoneMap, totalPointsFromMilestoneMap, categoryColorScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scores", function() { return scores; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "milestones", function() { return milestones; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thermometerIncrements", function() { return thermometerIncrements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxPoints", function() { return maxPoints; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryIds", function() { return categoryIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryPointsFromMilestoneMap", function() { return categoryPointsFromMilestoneMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "totalPointsFromMilestoneMap", function() { return totalPointsFromMilestoneMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categoryColorScale", function() { return categoryColorScale; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/set */ "./node_modules/@babel/runtime-corejs2/core-js/set.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! d3 */ "./node_modules/d3/index.js");
/* harmony import */ var _constants_tracks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/tracks */ "./constants/tracks.js");





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
    points: 2
  },
  3: {
    level: 3,
    description: 'Often',
    points: 3
  },
  4: {
    level: 4,
    description: 'Always',
    points: 4
  }
};
var thermometerIncrements = [10, 20, 30, 40, 50, 60, 70, 80, 85, 90, 95, 100];
var maxPoints = 64;
var categoryIds = _constants_tracks__WEBPACK_IMPORTED_MODULE_4__["trackIds"].reduce(function (set, trackId) {
  set.add(_constants_tracks__WEBPACK_IMPORTED_MODULE_4__["tracks"][trackId].category);
  return set;
}, new _babel_runtime_corejs2_core_js_set__WEBPACK_IMPORTED_MODULE_2___default.a());
var categoryPointsFromMilestoneMap = function categoryPointsFromMilestoneMap(milestoneMap) {
  var pointsByCategory = new _babel_runtime_corejs2_core_js_map__WEBPACK_IMPORTED_MODULE_1___default.a();
  _constants_tracks__WEBPACK_IMPORTED_MODULE_4__["trackIds"].forEach(function (trackId) {
    var milestone = milestoneMap[trackId];
    var categoryId = _constants_tracks__WEBPACK_IMPORTED_MODULE_4__["tracks"][trackId].category;
    var currentPoints = pointsByCategory.get(categoryId) || 0;
    pointsByCategory.set(categoryId, currentPoints + milestones[milestone].points);
  });
  return _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(categoryIds.values()).map(function (categoryId) {
    var points = pointsByCategory.get(categoryId) || 0;
    return {
      categoryId: categoryId,
      points: points
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

/***/ })

})
//# sourceMappingURL=index.js.f1824e3602ad43429ba7.hot-update.js.map