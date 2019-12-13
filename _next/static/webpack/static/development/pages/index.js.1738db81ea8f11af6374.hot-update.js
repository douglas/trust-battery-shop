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
      }, "body{font-family:Helvetica;}main{width:960px;margin:0 auto;}.name-input{border:none;display:block;border-bottom:2px solid #fff;font-size:30px;line-height:40px;font-weight:bold;width:380px;margin-bottom:10px;}.name-input:hover,.name-input:focus{border-bottom:2px solid #ccc;outline:0;}a{color:#888;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvU25vd2ZsYWtlQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9JMkIsQUFHbUMsQUFHVixBQUlBLEFBVWlCLEFBSWxCLFdBQ1UsQ0FsQlAsQUFJQSxVQVBoQixJQUlBLEFBSStCLEdBU25CLFVBQ1osZ0JBVGlCLE1BYWpCLFNBWm1CLGlCQUNBLGlCQUNMLFlBQ08sbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvU25vd2ZsYWtlQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFRyYWNrU2VsZWN0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9UcmFja1NlbGVjdG9yJ1xuaW1wb3J0IE5pZ2h0aW5nYWxlQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9OaWdodGluZ2FsZUNoYXJ0J1xuaW1wb3J0IEtleWJvYXJkTGlzdGVuZXIgZnJvbSAnLi4vY29tcG9uZW50cy9LZXlib2FyZExpc3RlbmVyJ1xuaW1wb3J0IFRyYWNrIGZyb20gJy4uL2NvbXBvbmVudHMvVHJhY2snXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IFdvcmRtYXJrIGZyb20gJy4uL2NvbXBvbmVudHMvV29yZG1hcmsnXG5pbXBvcnQgTGV2ZWxUaGVybW9tZXRlciBmcm9tICcuLi9jb21wb25lbnRzL0xldmVsVGhlcm1vbWV0ZXInXG5pbXBvcnQgeyBlbGlnaWJsZVRpdGxlcywgbWlsZXN0b25lcyB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnXG5pbXBvcnQgeyB0cmFja0lkcywgdHJhY2tzIH0gZnJvbSAnLi4vY29uc3RhbnRzL3RyYWNrcydcbmltcG9ydCBQb2ludFN1bW1hcmllcyBmcm9tICcuLi9jb21wb25lbnRzL1BvaW50U3VtbWFyaWVzJ1xuaW1wb3J0IHR5cGUgeyBNaWxlc3RvbmUsIE1pbGVzdG9uZU1hcCwgVHJhY2tJZCB9IGZyb20gJy4uL2NvbnN0YW50cy9jb25zdGFudHMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVGl0bGVTZWxlY3RvciBmcm9tICcuLi9jb21wb25lbnRzL1RpdGxlU2VsZWN0b3InXG5cbnR5cGUgU25vd2ZsYWtlQXBwU3RhdGUgPSB7XG4gIG1pbGVzdG9uZUJ5VHJhY2s6IE1pbGVzdG9uZU1hcCxcbiAgbmFtZTogc3RyaW5nLFxuICB0aXRsZTogc3RyaW5nLFxuICBmb2N1c2VkVHJhY2tJZDogVHJhY2tJZCxcbn1cblxuY29uc3QgaGFzaFRvU3RhdGUgPSAoaGFzaDogU3RyaW5nKTogP1Nub3dmbGFrZUFwcFN0YXRlID0+IHtcbiAgaWYgKCFoYXNoKSByZXR1cm4gbnVsbFxuICBjb25zdCByZXN1bHQgPSBkZWZhdWx0U3RhdGUoKVxuICBjb25zdCBoYXNoVmFsdWVzID0gaGFzaC5zcGxpdCgnIycpWzFdLnNwbGl0KCcsJylcbiAgaWYgKCFoYXNoVmFsdWVzKSByZXR1cm4gbnVsbFxuICB0cmFja0lkcy5mb3JFYWNoKCh0cmFja0lkLCBpKSA9PiB7XG4gICAgcmVzdWx0Lm1pbGVzdG9uZUJ5VHJhY2tbdHJhY2tJZF0gPSBjb2VyY2VNaWxlc3RvbmUoTnVtYmVyKGhhc2hWYWx1ZXNbaV0pKVxuICB9KVxuICBpZiAoaGFzaFZhbHVlc1sxNl0pIHJlc3VsdC5uYW1lID0gZGVjb2RlVVJJKGhhc2hWYWx1ZXNbMTZdKVxuICBpZiAoaGFzaFZhbHVlc1sxN10pIHJlc3VsdC50aXRsZSA9IGRlY29kZVVSSShoYXNoVmFsdWVzWzE3XSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5jb25zdCBjb2VyY2VNaWxlc3RvbmUgPSAodmFsdWU6IG51bWJlcik6IE1pbGVzdG9uZSA9PiB7XG4gIC8vIEhBQ0sgSSBrbm93IHRoaXMgaXMgZ29vZnkgYnV0IGknbSBkZWFsaW5nIHdpdGggZmxvdyB0eXBpbmdcbiAgc3dpdGNoKHZhbHVlKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gMFxuICAgIGNhc2UgMTogcmV0dXJuIDFcbiAgICBjYXNlIDI6IHJldHVybiAyXG4gICAgY2FzZSAzOiByZXR1cm4gM1xuICAgIGNhc2UgNDogcmV0dXJuIDRcbiAgICBjYXNlIDU6IHJldHVybiA1XG4gICAgZGVmYXVsdDogcmV0dXJuIDBcbiAgfVxufVxuXG5jb25zdCBlbXB0eVN0YXRlID0gKCk6IFNub3dmbGFrZUFwcFN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnJyxcbiAgICB0aXRsZTogJycsXG4gICAgbWlsZXN0b25lQnlUcmFjazoge1xuICAgICAgJ0tFRVBfUFJPTUlTRVMnOiAwLFxuICAgICAgJ01FRVRfREVBRExJTkVTJzogMCxcbiAgICAgICdPTl9USU1FJzogMCxcbiAgICAgICdERVBFTkRBQkxFJzogMCxcbiAgICAgICdDT05URU5UX0VYUEVSVElTRSc6IDAsXG4gICAgICAnUEFTU0lPTic6IDAsXG4gICAgICAnQ0hBTExFTkdFX0NVU1RPTUVSUyc6IDAsXG4gICAgICAnSFVNSUxJVFknOiAwLFxuICAgICAgJ0FDQ0VQVEFOQ0UnOiAwLFxuICAgICAgJ09QRU5ORVNTJzogMCxcbiAgICAgICdFTU9USU9OQUxfSE9ORVNUWSc6IDAsXG4gICAgICAnQVVUSEVOVElDSVRZJzogMCxcbiAgICAgICdGT0NVU1NJTkdfT05fT1RIRVJTJzogMCxcbiAgICAgICdMSVNURU5JTkcnOiAwLFxuICAgICAgJ0NPTVBBU1NJT04nOiAwLFxuICAgICAgJ0NPTExBQk9SQVRJT04nOiAwXG4gICAgfSxcbiAgICBmb2N1c2VkVHJhY2tJZDogJ0tFRVBfUFJPTUlTRVMnXG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFN0YXRlID0gKCk6IFNub3dmbGFrZUFwcFN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnQ2Vyc2VpIExhbm5pc3RlcicsXG4gICAgdGl0bGU6ICdTdGFmZiBFbmdpbmVlcicsXG4gICAgbWlsZXN0b25lQnlUcmFjazoge1xuICAgICAgJ0tFRVBfUFJPTUlTRVMnOiAyLFxuICAgICAgJ01FRVRfREVBRExJTkVTJzogMyxcbiAgICAgICdPTl9USU1FJzogMyxcbiAgICAgICdERVBFTkRBQkxFJzogMyxcbiAgICAgICdDT05URU5UX0VYUEVSVElTRSc6IDQsXG4gICAgICAnUEFTU0lPTic6IDQsXG4gICAgICAnQ0hBTExFTkdFX0NVU1RPTUVSUyc6IDMsXG4gICAgICAnSFVNSUxJVFknOiAyLFxuICAgICAgJ0FDQ0VQVEFOQ0UnOiAxLFxuICAgICAgJ09QRU5ORVNTJzogNCxcbiAgICAgICdFTU9USU9OQUxfSE9ORVNUWSc6IDIsXG4gICAgICAnQVVUSEVOVElDSVRZJzogNCxcbiAgICAgICdGT0NVU1NJTkdfT05fT1RIRVJTJzogMixcbiAgICAgICdMSVNURU5JTkcnOiAyLFxuICAgICAgJ0NPTVBBU1NJT04nOiAzLFxuICAgICAgJ0NPTExBQk9SQVRJT04nOiAzXG4gICAgfSxcbiAgICBmb2N1c2VkVHJhY2tJZDogJ0tFRVBfUFJPTUlTRVMnXG4gIH1cbn1cblxuY29uc3Qgc3RhdGVUb0hhc2ggPSAoc3RhdGU6IFNub3dmbGFrZUFwcFN0YXRlKSA9PiB7XG4gIGlmICghc3RhdGUgfHwgIXN0YXRlLm1pbGVzdG9uZUJ5VHJhY2spIHJldHVybiBudWxsXG4gIGNvbnN0IHZhbHVlcyA9IHRyYWNrSWRzLm1hcCh0cmFja0lkID0+IHN0YXRlLm1pbGVzdG9uZUJ5VHJhY2tbdHJhY2tJZF0pLmNvbmNhdChlbmNvZGVVUkkoc3RhdGUubmFtZSksIGVuY29kZVVSSShzdGF0ZS50aXRsZSkpXG4gIHJldHVybiB2YWx1ZXMuam9pbignLCcpXG59XG5cbnR5cGUgUHJvcHMgPSB7fVxuXG5jbGFzcyBTbm93Zmxha2VBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFNub3dmbGFrZUFwcFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSBlbXB0eVN0YXRlKClcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBjb25zdCBoYXNoID0gc3RhdGVUb0hhc2godGhpcy5zdGF0ZSlcbiAgICBpZiAoaGFzaCkgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoYCMke2hhc2h9YClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHN0YXRlID0gaGFzaFRvU3RhdGUod2luZG93LmxvY2F0aW9uLmhhc2gpXG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKGRlZmF1bHRTdGF0ZSgpKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgIHdpZHRoOiA5NjBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmFtZS1pbnB1dCB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHdpZHRoOiAzODBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYW1lLWlucHV0OmhvdmVyLCAubmFtZS1pbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICM4ODg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46ICcxOXB4IGF1dG8gMCcsIHdpZHRoOiAxNDJ9fT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuc2hvcGlmeS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIDxXb3JkbWFyayAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDogMX19PlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgIHsvKiA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hbWUtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoe25hbWU6IGUudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICAgIHsvKiA8VGl0bGVTZWxlY3RvclxuICAgICAgICAgICAgICAgICAgbWlsZXN0b25lQnlUcmFjaz17dGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrfVxuICAgICAgICAgICAgICAgICAgY3VycmVudFRpdGxlPXt0aGlzLnN0YXRlLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgc2V0VGl0bGVGbj17KHRpdGxlKSA9PiB0aGlzLnNldFRpdGxlKHRpdGxlKX0gLz4gKi99XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8UG9pbnRTdW1tYXJpZXMgbWlsZXN0b25lQnlUcmFjaz17dGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrfSAvPlxuICAgICAgICAgICAgPExldmVsVGhlcm1vbWV0ZXIgbWlsZXN0b25lQnlUcmFjaz17dGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OiAwfX0+XG4gICAgICAgICAgICA8TmlnaHRpbmdhbGVDaGFydFxuICAgICAgICAgICAgICAgIG1pbGVzdG9uZUJ5VHJhY2s9e3RoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja31cbiAgICAgICAgICAgICAgICBmb2N1c2VkVHJhY2tJZD17dGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZH1cbiAgICAgICAgICAgICAgICBoYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZUZuPXsodHJhY2ssIG1pbGVzdG9uZSkgPT4gdGhpcy5oYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZSh0cmFjaywgbWlsZXN0b25lKX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxUcmFja1NlbGVjdG9yXG4gICAgICAgICAgICBtaWxlc3RvbmVCeVRyYWNrPXt0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2t9XG4gICAgICAgICAgICBmb2N1c2VkVHJhY2tJZD17dGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZH1cbiAgICAgICAgICAgIHNldEZvY3VzZWRUcmFja0lkRm49e3RoaXMuc2V0Rm9jdXNlZFRyYWNrSWQuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPEtleWJvYXJkTGlzdGVuZXJcbiAgICAgICAgICAgIHNlbGVjdE5leHRUcmFja0ZuPXt0aGlzLnNoaWZ0Rm9jdXNlZFRyYWNrLmJpbmQodGhpcywgMSl9XG4gICAgICAgICAgICBzZWxlY3RQcmV2VHJhY2tGbj17dGhpcy5zaGlmdEZvY3VzZWRUcmFjay5iaW5kKHRoaXMsIC0xKX1cbiAgICAgICAgICAgIGluY3JlYXNlRm9jdXNlZE1pbGVzdG9uZUZuPXt0aGlzLnNoaWZ0Rm9jdXNlZFRyYWNrTWlsZXN0b25lQnlEZWx0YS5iaW5kKHRoaXMsIDEpfVxuICAgICAgICAgICAgZGVjcmVhc2VGb2N1c2VkTWlsZXN0b25lRm49e3RoaXMuc2hpZnRGb2N1c2VkVHJhY2tNaWxlc3RvbmVCeURlbHRhLmJpbmQodGhpcywgLTEpfSAvPlxuICAgICAgICA8VHJhY2tcbiAgICAgICAgICAgIG1pbGVzdG9uZUJ5VHJhY2s9e3RoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja31cbiAgICAgICAgICAgIHRyYWNrSWQ9e3RoaXMuc3RhdGUuZm9jdXNlZFRyYWNrSWR9XG4gICAgICAgICAgICBoYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZUZuPXsodHJhY2ssIG1pbGVzdG9uZSkgPT4gdGhpcy5oYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZSh0cmFjaywgbWlsZXN0b25lKX0gLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9tYWluPlxuICAgIClcbiAgfVxuXG4gIGhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlKHRyYWNrSWQ6IFRyYWNrSWQsIG1pbGVzdG9uZTogTWlsZXN0b25lKSB7XG4gICAgY29uc3QgbWlsZXN0b25lQnlUcmFjayA9IHRoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja1xuICAgIG1pbGVzdG9uZUJ5VHJhY2tbdHJhY2tJZF0gPSBtaWxlc3RvbmVcblxuICAgIGNvbnN0IHRpdGxlcyA9IGVsaWdpYmxlVGl0bGVzKG1pbGVzdG9uZUJ5VHJhY2spXG4gICAgY29uc3QgdGl0bGUgPSB0aXRsZXMuaW5kZXhPZih0aGlzLnN0YXRlLnRpdGxlKSA9PT0gLTEgPyB0aXRsZXNbMF0gOiB0aGlzLnN0YXRlLnRpdGxlXG5cbiAgICB0aGlzLnNldFN0YXRlKHsgbWlsZXN0b25lQnlUcmFjaywgZm9jdXNlZFRyYWNrSWQ6IHRyYWNrSWQsIHRpdGxlIH0pXG4gIH1cblxuICBzaGlmdEZvY3VzZWRUcmFjayhkZWx0YTogbnVtYmVyKSB7XG4gICAgbGV0IGluZGV4ID0gdHJhY2tJZHMuaW5kZXhPZih0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkKVxuICAgIGluZGV4ID0gKGluZGV4ICsgZGVsdGEgKyB0cmFja0lkcy5sZW5ndGgpICUgdHJhY2tJZHMubGVuZ3RoXG4gICAgY29uc3QgZm9jdXNlZFRyYWNrSWQgPSB0cmFja0lkc1tpbmRleF1cbiAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZFRyYWNrSWQgfSlcbiAgfVxuXG4gIHNldEZvY3VzZWRUcmFja0lkKHRyYWNrSWQ6IFRyYWNrSWQpIHtcbiAgICBsZXQgaW5kZXggPSB0cmFja0lkcy5pbmRleE9mKHRyYWNrSWQpXG4gICAgY29uc3QgZm9jdXNlZFRyYWNrSWQgPSB0cmFja0lkc1tpbmRleF1cbiAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZFRyYWNrSWQgfSlcbiAgfVxuXG4gIHNoaWZ0Rm9jdXNlZFRyYWNrTWlsZXN0b25lQnlEZWx0YShkZWx0YTogbnVtYmVyKSB7XG4gICAgbGV0IHByZXZNaWxlc3RvbmUgPSB0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2tbdGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZF1cbiAgICBsZXQgbWlsZXN0b25lID0gcHJldk1pbGVzdG9uZSArIGRlbHRhXG4gICAgaWYgKG1pbGVzdG9uZSA8IDApIG1pbGVzdG9uZSA9IDBcbiAgICBpZiAobWlsZXN0b25lID4gNCkgbWlsZXN0b25lID0gNFxuICAgIHRoaXMuaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2UodGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZCwgKChtaWxlc3RvbmU6IGFueSk6IE1pbGVzdG9uZSkpXG4gIH1cblxuICBzZXRUaXRsZSh0aXRsZTogc3RyaW5nKSB7XG4gICAgbGV0IHRpdGxlcyA9IGVsaWdpYmxlVGl0bGVzKHRoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFjaylcbiAgICB0aXRsZSA9IHRpdGxlcy5pbmRleE9mKHRpdGxlKSA9PSAtMSA/IHRpdGxlc1swXSA6IHRpdGxlXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRpdGxlIH0pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU25vd2ZsYWtlQXBwXG4iXX0= */\n/*@ sourceURL=/Users/swati/src/snowflake/components/SnowflakeApp.js */"), __jsx("div", {
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
      }), __jsx(_components_PointSummaries__WEBPACK_IMPORTED_MODULE_15__["default"], {
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
      var titles = Object(_constants_constants__WEBPACK_IMPORTED_MODULE_13__["eligibleTitles"])(milestoneByTrack);
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
  }, {
    key: "setTitle",
    value: function setTitle(title) {
      var titles = Object(_constants_constants__WEBPACK_IMPORTED_MODULE_13__["eligibleTitles"])(this.state.milestoneByTrack);
      title = titles.indexOf(title) == -1 ? titles[0] : title;
      this.setState({
        title: title
      });
    }
  }]);

  return SnowflakeApp;
}(react__WEBPACK_IMPORTED_MODULE_16___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SnowflakeApp);

/***/ })

})
//# sourceMappingURL=index.js.1738db81ea8f11af6374.hot-update.js.map