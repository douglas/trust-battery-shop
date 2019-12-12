webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/swati/src/snowflake/components/Footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx("div", {
    style: {
      display: 'flex',
      paddingBottom: '20px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, __jsx("div", {
    style: {
      flex: 1
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "Based on the ", __jsx("a", {
    href: "https://github.com/Medium/snowflake",
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "Snowflake Model"), " by Medium.."));
});

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
/* harmony import */ var _components_PointSummaries__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/PointSummaries */ "./components/PointSummaries.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_TitleSelector__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/TitleSelector */ "./components/TitleSelector.js");





var _jsxFileName = "/Users/swati/src/snowflake/components/SnowflakeApp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_15___default.a.createElement;












var hashToState = function hashToState(hash) {
  if (!hash) return null;
  var result = defaultState();
  var hashValues = hash.split('#')[1].split(',');
  if (!hashValues) return null;
  _constants__WEBPACK_IMPORTED_MODULE_13__["trackIds"].forEach(function (trackId, i) {
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
  var values = _constants__WEBPACK_IMPORTED_MODULE_13__["trackIds"].map(function (trackId) {
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
          lineNumber: 131
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2126963245",
        __self: this
      }, "body{font-family:Helvetica;}main{width:960px;margin:0 auto;}.name-input{border:none;display:block;border-bottom:2px solid #fff;font-size:30px;line-height:40px;font-weight:bold;width:380px;margin-bottom:10px;}.name-input:hover,.name-input:focus{border-bottom:2px solid #ccc;outline:0;}a{color:#888;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvU25vd2ZsYWtlQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1JMkIsQUFHbUMsQUFHVixBQUlBLEFBVWlCLEFBSWxCLFdBQ1UsQ0FsQlAsQUFJQSxVQVBoQixJQUlBLEFBSStCLEdBU25CLFVBQ1osZ0JBVGlCLE1BYWpCLFNBWm1CLGlCQUNBLGlCQUNMLFlBQ08sbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvU25vd2ZsYWtlQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFRyYWNrU2VsZWN0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9UcmFja1NlbGVjdG9yJ1xuaW1wb3J0IE5pZ2h0aW5nYWxlQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9OaWdodGluZ2FsZUNoYXJ0J1xuaW1wb3J0IEtleWJvYXJkTGlzdGVuZXIgZnJvbSAnLi4vY29tcG9uZW50cy9LZXlib2FyZExpc3RlbmVyJ1xuaW1wb3J0IFRyYWNrIGZyb20gJy4uL2NvbXBvbmVudHMvVHJhY2snXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IFdvcmRtYXJrIGZyb20gJy4uL2NvbXBvbmVudHMvV29yZG1hcmsnXG5pbXBvcnQgTGV2ZWxUaGVybW9tZXRlciBmcm9tICcuLi9jb21wb25lbnRzL0xldmVsVGhlcm1vbWV0ZXInXG5pbXBvcnQgeyBlbGlnaWJsZVRpdGxlcywgdHJhY2tJZHMsIG1pbGVzdG9uZXMsIG1pbGVzdG9uZVRvUG9pbnRzIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IFBvaW50U3VtbWFyaWVzIGZyb20gJy4uL2NvbXBvbmVudHMvUG9pbnRTdW1tYXJpZXMnXG5pbXBvcnQgdHlwZSB7IE1pbGVzdG9uZSwgTWlsZXN0b25lTWFwLCBUcmFja0lkIH0gZnJvbSAnLi4vY29uc3RhbnRzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRpdGxlU2VsZWN0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9UaXRsZVNlbGVjdG9yJ1xuXG50eXBlIFNub3dmbGFrZUFwcFN0YXRlID0ge1xuICBtaWxlc3RvbmVCeVRyYWNrOiBNaWxlc3RvbmVNYXAsXG4gIG5hbWU6IHN0cmluZyxcbiAgdGl0bGU6IHN0cmluZyxcbiAgZm9jdXNlZFRyYWNrSWQ6IFRyYWNrSWQsXG59XG5cbmNvbnN0IGhhc2hUb1N0YXRlID0gKGhhc2g6IFN0cmluZyk6ID9Tbm93Zmxha2VBcHBTdGF0ZSA9PiB7XG4gIGlmICghaGFzaCkgcmV0dXJuIG51bGxcbiAgY29uc3QgcmVzdWx0ID0gZGVmYXVsdFN0YXRlKClcbiAgY29uc3QgaGFzaFZhbHVlcyA9IGhhc2guc3BsaXQoJyMnKVsxXS5zcGxpdCgnLCcpXG4gIGlmICghaGFzaFZhbHVlcykgcmV0dXJuIG51bGxcbiAgdHJhY2tJZHMuZm9yRWFjaCgodHJhY2tJZCwgaSkgPT4ge1xuICAgIHJlc3VsdC5taWxlc3RvbmVCeVRyYWNrW3RyYWNrSWRdID0gY29lcmNlTWlsZXN0b25lKE51bWJlcihoYXNoVmFsdWVzW2ldKSlcbiAgfSlcbiAgaWYgKGhhc2hWYWx1ZXNbMTZdKSByZXN1bHQubmFtZSA9IGRlY29kZVVSSShoYXNoVmFsdWVzWzE2XSlcbiAgaWYgKGhhc2hWYWx1ZXNbMTddKSByZXN1bHQudGl0bGUgPSBkZWNvZGVVUkkoaGFzaFZhbHVlc1sxN10pXG4gIHJldHVybiByZXN1bHRcbn1cblxuY29uc3QgY29lcmNlTWlsZXN0b25lID0gKHZhbHVlOiBudW1iZXIpOiBNaWxlc3RvbmUgPT4ge1xuICAvLyBIQUNLIEkga25vdyB0aGlzIGlzIGdvb2Z5IGJ1dCBpJ20gZGVhbGluZyB3aXRoIGZsb3cgdHlwaW5nXG4gIHN3aXRjaCh2YWx1ZSkge1xuICAgIGNhc2UgMDogcmV0dXJuIDBcbiAgICBjYXNlIDE6IHJldHVybiAxXG4gICAgY2FzZSAyOiByZXR1cm4gMlxuICAgIGNhc2UgMzogcmV0dXJuIDNcbiAgICBjYXNlIDQ6IHJldHVybiA0XG4gICAgY2FzZSA1OiByZXR1cm4gNVxuICAgIGRlZmF1bHQ6IHJldHVybiAwXG4gIH1cbn1cblxuY29uc3QgZW1wdHlTdGF0ZSA9ICgpOiBTbm93Zmxha2VBcHBTdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJycsXG4gICAgdGl0bGU6ICcnLFxuICAgIG1pbGVzdG9uZUJ5VHJhY2s6IHtcbiAgICAgICdNT0JJTEUnOiAwLFxuICAgICAgJ1dFQl9DTElFTlQnOiAwLFxuICAgICAgJ0ZPVU5EQVRJT05TJzogMCxcbiAgICAgICdTRVJWRVJTJzogMCxcbiAgICAgICdQUk9KRUNUX01BTkFHRU1FTlQnOiAwLFxuICAgICAgJ0NPTU1VTklDQVRJT04nOiAwLFxuICAgICAgJ0NSQUZUJzogMCxcbiAgICAgICdJTklUSUFUSVZFJzogMCxcbiAgICAgICdDQVJFRVJfREVWRUxPUE1FTlQnOiAwLFxuICAgICAgJ09SR19ERVNJR04nOiAwLFxuICAgICAgJ1dFTExCRUlORyc6IDAsXG4gICAgICAnQUNDT01QTElTSE1FTlQnOiAwLFxuICAgICAgJ01FTlRPUlNISVAnOiAwLFxuICAgICAgJ0VWQU5HRUxJU00nOiAwLFxuICAgICAgJ1JFQ1JVSVRJTkcnOiAwLFxuICAgICAgJ0NPTU1VTklUWSc6IDBcbiAgICB9LFxuICAgIGZvY3VzZWRUcmFja0lkOiAnTU9CSUxFJ1xuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9ICgpOiBTbm93Zmxha2VBcHBTdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogJ0NlcnNlaSBMYW5uaXN0ZXInLFxuICAgIHRpdGxlOiAnU3RhZmYgRW5naW5lZXInLFxuICAgIG1pbGVzdG9uZUJ5VHJhY2s6IHtcbiAgICAgICdNT0JJTEUnOiAxLFxuICAgICAgJ1dFQl9DTElFTlQnOiAyLFxuICAgICAgJ0ZPVU5EQVRJT05TJzogMyxcbiAgICAgICdTRVJWRVJTJzogMixcbiAgICAgICdQUk9KRUNUX01BTkFHRU1FTlQnOiA0LFxuICAgICAgJ0NPTU1VTklDQVRJT04nOiAxLFxuICAgICAgJ0NSQUZUJzogMSxcbiAgICAgICdJTklUSUFUSVZFJzogNCxcbiAgICAgICdDQVJFRVJfREVWRUxPUE1FTlQnOiAzLFxuICAgICAgJ09SR19ERVNJR04nOiAyLFxuICAgICAgJ1dFTExCRUlORyc6IDAsXG4gICAgICAnQUNDT01QTElTSE1FTlQnOiA0LFxuICAgICAgJ01FTlRPUlNISVAnOiAyLFxuICAgICAgJ0VWQU5HRUxJU00nOiAyLFxuICAgICAgJ1JFQ1JVSVRJTkcnOiAzLFxuICAgICAgJ0NPTU1VTklUWSc6IDBcbiAgICB9LFxuICAgIGZvY3VzZWRUcmFja0lkOiAnTU9CSUxFJ1xuICB9XG59XG5cbmNvbnN0IHN0YXRlVG9IYXNoID0gKHN0YXRlOiBTbm93Zmxha2VBcHBTdGF0ZSkgPT4ge1xuICBpZiAoIXN0YXRlIHx8ICFzdGF0ZS5taWxlc3RvbmVCeVRyYWNrKSByZXR1cm4gbnVsbFxuICBjb25zdCB2YWx1ZXMgPSB0cmFja0lkcy5tYXAodHJhY2tJZCA9PiBzdGF0ZS5taWxlc3RvbmVCeVRyYWNrW3RyYWNrSWRdKS5jb25jYXQoZW5jb2RlVVJJKHN0YXRlLm5hbWUpLCBlbmNvZGVVUkkoc3RhdGUudGl0bGUpKVxuICByZXR1cm4gdmFsdWVzLmpvaW4oJywnKVxufVxuXG50eXBlIFByb3BzID0ge31cblxuY2xhc3MgU25vd2ZsYWtlQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzLCBTbm93Zmxha2VBcHBTdGF0ZT4ge1xuICBjb25zdHJ1Y3Rvcihwcm9wczogUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0gZW1wdHlTdGF0ZSgpXG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgY29uc3QgaGFzaCA9IHN0YXRlVG9IYXNoKHRoaXMuc3RhdGUpXG4gICAgaWYgKGhhc2gpIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKGAjJHtoYXNofWApXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IGhhc2hUb1N0YXRlKHdpbmRvdy5sb2NhdGlvbi5oYXNoKVxuICAgIGlmIChzdGF0ZSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZShkZWZhdWx0U3RhdGUoKSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluPlxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IEhlbHZldGljYTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWFpbiB7XG4gICAgICAgICAgICB3aWR0aDogOTYwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLm5hbWUtaW5wdXQge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB3aWR0aDogMzgwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmFtZS1pbnB1dDpob3ZlciwgLm5hbWUtaW5wdXQ6Zm9jdXMge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjY2M7XG4gICAgICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luOiAnMTlweCBhdXRvIDAnLCB3aWR0aDogMTQyfX0+XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnNob3BpZnkuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICA8V29yZG1hcmsgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnfX0+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6IDF9fT5cbiAgICAgICAgICAgIDxmb3JtPlxuICAgICAgICAgICAgICB7LyogPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYW1lLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtuYW1lOiBlLnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAgICA8VGl0bGVTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgbWlsZXN0b25lQnlUcmFjaz17dGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrfVxuICAgICAgICAgICAgICAgICAgY3VycmVudFRpdGxlPXt0aGlzLnN0YXRlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgc2V0VGl0bGVGbj17KHRpdGxlKSA9PiB0aGlzLnNldFRpdGxlKHRpdGxlKX0gLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDxQb2ludFN1bW1hcmllcyBtaWxlc3RvbmVCeVRyYWNrPXt0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2t9IC8+XG4gICAgICAgICAgICA8TGV2ZWxUaGVybW9tZXRlciBtaWxlc3RvbmVCeVRyYWNrPXt0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2t9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6IDB9fT5cbiAgICAgICAgICAgIDxOaWdodGluZ2FsZUNoYXJ0XG4gICAgICAgICAgICAgICAgbWlsZXN0b25lQnlUcmFjaz17dGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrfVxuICAgICAgICAgICAgICAgIGZvY3VzZWRUcmFja0lkPXt0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkfVxuICAgICAgICAgICAgICAgIGhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlRm49eyh0cmFjaywgbWlsZXN0b25lKSA9PiB0aGlzLmhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlKHRyYWNrLCBtaWxlc3RvbmUpfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFRyYWNrU2VsZWN0b3JcbiAgICAgICAgICAgIG1pbGVzdG9uZUJ5VHJhY2s9e3RoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja31cbiAgICAgICAgICAgIGZvY3VzZWRUcmFja0lkPXt0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkfVxuICAgICAgICAgICAgc2V0Rm9jdXNlZFRyYWNrSWRGbj17dGhpcy5zZXRGb2N1c2VkVHJhY2tJZC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICA8S2V5Ym9hcmRMaXN0ZW5lclxuICAgICAgICAgICAgc2VsZWN0TmV4dFRyYWNrRm49e3RoaXMuc2hpZnRGb2N1c2VkVHJhY2suYmluZCh0aGlzLCAxKX1cbiAgICAgICAgICAgIHNlbGVjdFByZXZUcmFja0ZuPXt0aGlzLnNoaWZ0Rm9jdXNlZFRyYWNrLmJpbmQodGhpcywgLTEpfVxuICAgICAgICAgICAgaW5jcmVhc2VGb2N1c2VkTWlsZXN0b25lRm49e3RoaXMuc2hpZnRGb2N1c2VkVHJhY2tNaWxlc3RvbmVCeURlbHRhLmJpbmQodGhpcywgMSl9XG4gICAgICAgICAgICBkZWNyZWFzZUZvY3VzZWRNaWxlc3RvbmVGbj17dGhpcy5zaGlmdEZvY3VzZWRUcmFja01pbGVzdG9uZUJ5RGVsdGEuYmluZCh0aGlzLCAtMSl9IC8+XG4gICAgICAgIDxUcmFja1xuICAgICAgICAgICAgbWlsZXN0b25lQnlUcmFjaz17dGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrfVxuICAgICAgICAgICAgdHJhY2tJZD17dGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZH1cbiAgICAgICAgICAgIGhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlRm49eyh0cmFjaywgbWlsZXN0b25lKSA9PiB0aGlzLmhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlKHRyYWNrLCBtaWxlc3RvbmUpfSAvPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L21haW4+XG4gICAgKVxuICB9XG5cbiAgaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2UodHJhY2tJZDogVHJhY2tJZCwgbWlsZXN0b25lOiBNaWxlc3RvbmUpIHtcbiAgICBjb25zdCBtaWxlc3RvbmVCeVRyYWNrID0gdGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrXG4gICAgbWlsZXN0b25lQnlUcmFja1t0cmFja0lkXSA9IG1pbGVzdG9uZVxuXG4gICAgY29uc3QgdGl0bGVzID0gZWxpZ2libGVUaXRsZXMobWlsZXN0b25lQnlUcmFjaylcbiAgICBjb25zdCB0aXRsZSA9IHRpdGxlcy5pbmRleE9mKHRoaXMuc3RhdGUudGl0bGUpID09PSAtMSA/IHRpdGxlc1swXSA6IHRoaXMuc3RhdGUudGl0bGVcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBtaWxlc3RvbmVCeVRyYWNrLCBmb2N1c2VkVHJhY2tJZDogdHJhY2tJZCwgdGl0bGUgfSlcbiAgfVxuXG4gIHNoaWZ0Rm9jdXNlZFRyYWNrKGRlbHRhOiBudW1iZXIpIHtcbiAgICBsZXQgaW5kZXggPSB0cmFja0lkcy5pbmRleE9mKHRoaXMuc3RhdGUuZm9jdXNlZFRyYWNrSWQpXG4gICAgaW5kZXggPSAoaW5kZXggKyBkZWx0YSArIHRyYWNrSWRzLmxlbmd0aCkgJSB0cmFja0lkcy5sZW5ndGhcbiAgICBjb25zdCBmb2N1c2VkVHJhY2tJZCA9IHRyYWNrSWRzW2luZGV4XVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkVHJhY2tJZCB9KVxuICB9XG5cbiAgc2V0Rm9jdXNlZFRyYWNrSWQodHJhY2tJZDogVHJhY2tJZCkge1xuICAgIGxldCBpbmRleCA9IHRyYWNrSWRzLmluZGV4T2YodHJhY2tJZClcbiAgICBjb25zdCBmb2N1c2VkVHJhY2tJZCA9IHRyYWNrSWRzW2luZGV4XVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmb2N1c2VkVHJhY2tJZCB9KVxuICB9XG5cbiAgc2hpZnRGb2N1c2VkVHJhY2tNaWxlc3RvbmVCeURlbHRhKGRlbHRhOiBudW1iZXIpIHtcbiAgICBsZXQgcHJldk1pbGVzdG9uZSA9IHRoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja1t0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkXVxuICAgIGxldCBtaWxlc3RvbmUgPSBwcmV2TWlsZXN0b25lICsgZGVsdGFcbiAgICBpZiAobWlsZXN0b25lIDwgMCkgbWlsZXN0b25lID0gMFxuICAgIGlmIChtaWxlc3RvbmUgPiA1KSBtaWxlc3RvbmUgPSA1XG4gICAgdGhpcy5oYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZSh0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkLCAoKG1pbGVzdG9uZTogYW55KTogTWlsZXN0b25lKSlcbiAgfVxuXG4gIHNldFRpdGxlKHRpdGxlOiBzdHJpbmcpIHtcbiAgICBsZXQgdGl0bGVzID0gZWxpZ2libGVUaXRsZXModGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrKVxuICAgIHRpdGxlID0gdGl0bGVzLmluZGV4T2YodGl0bGUpID09IC0xID8gdGl0bGVzWzBdIDogdGl0bGVcbiAgICB0aGlzLnNldFN0YXRlKHsgdGl0bGUgfSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTbm93Zmxha2VBcHBcbiJdfQ== */\n/*@ sourceURL=/Users/swati/src/snowflake/components/SnowflakeApp.js */"), __jsx("div", {
        style: {
          margin: '19px auto 0',
          width: 142
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, __jsx("a", {
        href: "https://www.shopify.com",
        target: "_blank",
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, __jsx(_components_Wordmark__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }))), __jsx("div", {
        style: {
          display: 'flex'
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, __jsx("div", {
        style: {
          flex: 1
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, __jsx("form", {
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, __jsx(_components_TitleSelector__WEBPACK_IMPORTED_MODULE_16__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        currentTitle: this.state.title,
        setTitleFn: function setTitleFn(title) {
          return _this2.setTitle(title);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      })), __jsx(_components_PointSummaries__WEBPACK_IMPORTED_MODULE_14__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }), __jsx(_components_LevelThermometer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      })), __jsx("div", {
        style: {
          flex: 0
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
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
          lineNumber: 183
        },
        __self: this
      }))), __jsx(_components_TrackSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        focusedTrackId: this.state.focusedTrackId,
        setFocusedTrackIdFn: this.setFocusedTrackId.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }), __jsx(_components_KeyboardListener__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectNextTrackFn: this.shiftFocusedTrack.bind(this, 1),
        selectPrevTrackFn: this.shiftFocusedTrack.bind(this, -1),
        increaseFocusedMilestoneFn: this.shiftFocusedTrackMilestoneByDelta.bind(this, 1),
        decreaseFocusedMilestoneFn: this.shiftFocusedTrackMilestoneByDelta.bind(this, -1),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
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
          lineNumber: 198
        },
        __self: this
      }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
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
      var index = _constants__WEBPACK_IMPORTED_MODULE_13__["trackIds"].indexOf(this.state.focusedTrackId);
      index = (index + delta + _constants__WEBPACK_IMPORTED_MODULE_13__["trackIds"].length) % _constants__WEBPACK_IMPORTED_MODULE_13__["trackIds"].length;
      var focusedTrackId = _constants__WEBPACK_IMPORTED_MODULE_13__["trackIds"][index];
      this.setState({
        focusedTrackId: focusedTrackId
      });
    }
  }, {
    key: "setFocusedTrackId",
    value: function setFocusedTrackId(trackId) {
      var index = _constants__WEBPACK_IMPORTED_MODULE_13__["trackIds"].indexOf(trackId);
      var focusedTrackId = _constants__WEBPACK_IMPORTED_MODULE_13__["trackIds"][index];
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
}(react__WEBPACK_IMPORTED_MODULE_15___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SnowflakeApp);

/***/ })

})
//# sourceMappingURL=index.js.c7c2a38413bf5d3a9997.hot-update.js.map