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
          lineNumber: 123
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2126963245",
        __self: this
      }, "body{font-family:Helvetica;}main{width:960px;margin:0 auto;}.name-input{border:none;display:block;border-bottom:2px solid #fff;font-size:30px;line-height:40px;font-weight:bold;width:380px;margin-bottom:10px;}.name-input:hover,.name-input:focus{border-bottom:2px solid #ccc;outline:0;}a{color:#888;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvU25vd2ZsYWtlQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJIMkIsQUFHbUMsQUFHVixBQUlBLEFBVWlCLEFBSWxCLFdBQ1UsQ0FsQlAsQUFJQSxVQVBoQixJQUlBLEFBSStCLEdBU25CLFVBQ1osZ0JBVGlCLE1BYWpCLFNBWm1CLGlCQUNBLGlCQUNMLFlBQ08sbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvU25vd2ZsYWtlQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFRyYWNrU2VsZWN0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9UcmFja1NlbGVjdG9yJ1xuaW1wb3J0IE5pZ2h0aW5nYWxlQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9OaWdodGluZ2FsZUNoYXJ0J1xuaW1wb3J0IEtleWJvYXJkTGlzdGVuZXIgZnJvbSAnLi4vY29tcG9uZW50cy9LZXlib2FyZExpc3RlbmVyJ1xuaW1wb3J0IFRyYWNrIGZyb20gJy4uL2NvbXBvbmVudHMvVHJhY2snXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJ1xuaW1wb3J0IFdvcmRtYXJrIGZyb20gJy4uL2NvbXBvbmVudHMvV29yZG1hcmsnXG5pbXBvcnQgTGV2ZWxUaGVybW9tZXRlciBmcm9tICcuLi9jb21wb25lbnRzL0xldmVsVGhlcm1vbWV0ZXInXG5pbXBvcnQgeyBtaWxlc3RvbmVzIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cydcbmltcG9ydCB7IHRyYWNrSWRzLCB0cmFja3MgfSBmcm9tICcuLi9jb25zdGFudHMvdHJhY2tzJ1xuaW1wb3J0IFBvaW50U3VtbWFyaWVzIGZyb20gJy4uL2NvbXBvbmVudHMvUG9pbnRTdW1tYXJpZXMnXG5pbXBvcnQgdHlwZSB7IE1pbGVzdG9uZSwgTWlsZXN0b25lTWFwLCBUcmFja0lkIH0gZnJvbSAnLi4vY29uc3RhbnRzL2NvbnN0YW50cydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxudHlwZSBTbm93Zmxha2VBcHBTdGF0ZSA9IHtcbiAgbWlsZXN0b25lQnlUcmFjazogTWlsZXN0b25lTWFwLFxuICBmb2N1c2VkVHJhY2tJZDogVHJhY2tJZCxcbn1cblxuY29uc3QgaGFzaFRvU3RhdGUgPSAoaGFzaDogU3RyaW5nKTogP1Nub3dmbGFrZUFwcFN0YXRlID0+IHtcbiAgaWYgKCFoYXNoKSByZXR1cm4gbnVsbFxuICBjb25zdCByZXN1bHQgPSBkZWZhdWx0U3RhdGUoKVxuICBjb25zdCBoYXNoVmFsdWVzID0gaGFzaC5zcGxpdCgnIycpWzFdLnNwbGl0KCcsJylcbiAgaWYgKCFoYXNoVmFsdWVzKSByZXR1cm4gbnVsbFxuICB0cmFja0lkcy5mb3JFYWNoKCh0cmFja0lkLCBpKSA9PiB7XG4gICAgcmVzdWx0Lm1pbGVzdG9uZUJ5VHJhY2tbdHJhY2tJZF0gPSBjb2VyY2VNaWxlc3RvbmUoTnVtYmVyKGhhc2hWYWx1ZXNbaV0pKVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmNvbnN0IGNvZXJjZU1pbGVzdG9uZSA9ICh2YWx1ZTogbnVtYmVyKTogTWlsZXN0b25lID0+IHtcbiAgLy8gSEFDSyBJIGtub3cgdGhpcyBpcyBnb29meSBidXQgaSdtIGRlYWxpbmcgd2l0aCBmbG93IHR5cGluZ1xuICBzd2l0Y2godmFsdWUpIHtcbiAgICBjYXNlIDA6IHJldHVybiAwXG4gICAgY2FzZSAxOiByZXR1cm4gMVxuICAgIGNhc2UgMjogcmV0dXJuIDJcbiAgICBjYXNlIDM6IHJldHVybiAzXG4gICAgY2FzZSA0OiByZXR1cm4gNFxuICAgIGNhc2UgNTogcmV0dXJuIDVcbiAgICBkZWZhdWx0OiByZXR1cm4gMFxuICB9XG59XG5cbmNvbnN0IGVtcHR5U3RhdGUgPSAoKTogU25vd2ZsYWtlQXBwU3RhdGUgPT4ge1xuICByZXR1cm4ge1xuICAgIG1pbGVzdG9uZUJ5VHJhY2s6IHtcbiAgICAgICdLRUVQX1BST01JU0VTJzogMCxcbiAgICAgICdNRUVUX0RFQURMSU5FUyc6IDAsXG4gICAgICAnT05fVElNRSc6IDAsXG4gICAgICAnREVQRU5EQUJMRSc6IDAsXG4gICAgICAnQ09OVEVOVF9FWFBFUlRJU0UnOiAwLFxuICAgICAgJ1BBU1NJT04nOiAwLFxuICAgICAgJ0NIQUxMRU5HRV9DVVNUT01FUlMnOiAwLFxuICAgICAgJ0hVTUlMSVRZJzogMCxcbiAgICAgICdBQ0NFUFRBTkNFJzogMCxcbiAgICAgICdPUEVOTkVTUyc6IDAsXG4gICAgICAnRU1PVElPTkFMX0hPTkVTVFknOiAwLFxuICAgICAgJ0FVVEhFTlRJQ0lUWSc6IDAsXG4gICAgICAnRk9DVVNTSU5HX09OX09USEVSUyc6IDAsXG4gICAgICAnTElTVEVOSU5HJzogMCxcbiAgICAgICdDT01QQVNTSU9OJzogMCxcbiAgICAgICdDT0xMQUJPUkFUSU9OJzogMFxuICAgIH0sXG4gICAgZm9jdXNlZFRyYWNrSWQ6ICdLRUVQX1BST01JU0VTJ1xuICB9XG59XG5cbmNvbnN0IGRlZmF1bHRTdGF0ZSA9ICgpOiBTbm93Zmxha2VBcHBTdGF0ZSA9PiB7XG4gIHJldHVybiB7XG4gICAgbWlsZXN0b25lQnlUcmFjazoge1xuICAgICAgJ0tFRVBfUFJPTUlTRVMnOiAyLFxuICAgICAgJ01FRVRfREVBRExJTkVTJzogMyxcbiAgICAgICdPTl9USU1FJzogMyxcbiAgICAgICdERVBFTkRBQkxFJzogMyxcbiAgICAgICdDT05URU5UX0VYUEVSVElTRSc6IDQsXG4gICAgICAnUEFTU0lPTic6IDQsXG4gICAgICAnQ0hBTExFTkdFX0NVU1RPTUVSUyc6IDMsXG4gICAgICAnSFVNSUxJVFknOiAyLFxuICAgICAgJ0FDQ0VQVEFOQ0UnOiAxLFxuICAgICAgJ09QRU5ORVNTJzogNCxcbiAgICAgICdFTU9USU9OQUxfSE9ORVNUWSc6IDIsXG4gICAgICAnQVVUSEVOVElDSVRZJzogNCxcbiAgICAgICdGT0NVU1NJTkdfT05fT1RIRVJTJzogMixcbiAgICAgICdMSVNURU5JTkcnOiAyLFxuICAgICAgJ0NPTVBBU1NJT04nOiAzLFxuICAgICAgJ0NPTExBQk9SQVRJT04nOiAzXG4gICAgfSxcbiAgICBmb2N1c2VkVHJhY2tJZDogJ0tFRVBfUFJPTUlTRVMnXG4gIH1cbn1cblxuY29uc3Qgc3RhdGVUb0hhc2ggPSAoc3RhdGU6IFNub3dmbGFrZUFwcFN0YXRlKSA9PiB7XG4gIGlmICghc3RhdGUgfHwgIXN0YXRlLm1pbGVzdG9uZUJ5VHJhY2spIHJldHVybiBudWxsXG4gIGNvbnN0IHZhbHVlcyA9IHRyYWNrSWRzLm1hcCh0cmFja0lkID0+IHN0YXRlLm1pbGVzdG9uZUJ5VHJhY2tbdHJhY2tJZF0pXG4gIHJldHVybiB2YWx1ZXMuam9pbignLCcpXG59XG5cbnR5cGUgUHJvcHMgPSB7fVxuXG5jbGFzcyBTbm93Zmxha2VBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFNub3dmbGFrZUFwcFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSBlbXB0eVN0YXRlKClcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBjb25zdCBoYXNoID0gc3RhdGVUb0hhc2godGhpcy5zdGF0ZSlcbiAgICBpZiAoaGFzaCkgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoYCMke2hhc2h9YClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHN0YXRlID0gaGFzaFRvU3RhdGUod2luZG93LmxvY2F0aW9uLmhhc2gpXG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKGRlZmF1bHRTdGF0ZSgpKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgIHdpZHRoOiA5NjBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmFtZS1pbnB1dCB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHdpZHRoOiAzODBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYW1lLWlucHV0OmhvdmVyLCAubmFtZS1pbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICM4ODg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46ICcxOXB4IGF1dG8gMCcsIHdpZHRoOiAxNDJ9fT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuc2hvcGlmeS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIDxXb3JkbWFyayAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDogMX19PlxuICAgICAgICAgICAgPFBvaW50U3VtbWFyaWVzIG1pbGVzdG9uZUJ5VHJhY2s9e3RoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja30gLz5cbiAgICAgICAgICAgIDxMZXZlbFRoZXJtb21ldGVyIG1pbGVzdG9uZUJ5VHJhY2s9e3RoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDogMH19PlxuICAgICAgICAgICAgPE5pZ2h0aW5nYWxlQ2hhcnRcbiAgICAgICAgICAgICAgICBtaWxlc3RvbmVCeVRyYWNrPXt0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2t9XG4gICAgICAgICAgICAgICAgZm9jdXNlZFRyYWNrSWQ9e3RoaXMuc3RhdGUuZm9jdXNlZFRyYWNrSWR9XG4gICAgICAgICAgICAgICAgaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2VGbj17KHRyYWNrLCBtaWxlc3RvbmUpID0+IHRoaXMuaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2UodHJhY2ssIG1pbGVzdG9uZSl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VHJhY2tTZWxlY3RvclxuICAgICAgICAgICAgbWlsZXN0b25lQnlUcmFjaz17dGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrfVxuICAgICAgICAgICAgZm9jdXNlZFRyYWNrSWQ9e3RoaXMuc3RhdGUuZm9jdXNlZFRyYWNrSWR9XG4gICAgICAgICAgICBzZXRGb2N1c2VkVHJhY2tJZEZuPXt0aGlzLnNldEZvY3VzZWRUcmFja0lkLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDxLZXlib2FyZExpc3RlbmVyXG4gICAgICAgICAgICBzZWxlY3ROZXh0VHJhY2tGbj17dGhpcy5zaGlmdEZvY3VzZWRUcmFjay5iaW5kKHRoaXMsIDEpfVxuICAgICAgICAgICAgc2VsZWN0UHJldlRyYWNrRm49e3RoaXMuc2hpZnRGb2N1c2VkVHJhY2suYmluZCh0aGlzLCAtMSl9XG4gICAgICAgICAgICBpbmNyZWFzZUZvY3VzZWRNaWxlc3RvbmVGbj17dGhpcy5zaGlmdEZvY3VzZWRUcmFja01pbGVzdG9uZUJ5RGVsdGEuYmluZCh0aGlzLCAxKX1cbiAgICAgICAgICAgIGRlY3JlYXNlRm9jdXNlZE1pbGVzdG9uZUZuPXt0aGlzLnNoaWZ0Rm9jdXNlZFRyYWNrTWlsZXN0b25lQnlEZWx0YS5iaW5kKHRoaXMsIC0xKX0gLz5cbiAgICAgICAgPFRyYWNrXG4gICAgICAgICAgICBtaWxlc3RvbmVCeVRyYWNrPXt0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2t9XG4gICAgICAgICAgICB0cmFja0lkPXt0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkfVxuICAgICAgICAgICAgaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2VGbj17KHRyYWNrLCBtaWxlc3RvbmUpID0+IHRoaXMuaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2UodHJhY2ssIG1pbGVzdG9uZSl9IC8+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvbWFpbj5cbiAgICApXG4gIH1cblxuICBoYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZSh0cmFja0lkOiBUcmFja0lkLCBtaWxlc3RvbmU6IE1pbGVzdG9uZSkge1xuICAgIGNvbnN0IG1pbGVzdG9uZUJ5VHJhY2sgPSB0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2tcbiAgICBtaWxlc3RvbmVCeVRyYWNrW3RyYWNrSWRdID0gbWlsZXN0b25lXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1pbGVzdG9uZUJ5VHJhY2ssIGZvY3VzZWRUcmFja0lkOiB0cmFja0lkIH0pXG4gIH1cblxuICBzaGlmdEZvY3VzZWRUcmFjayhkZWx0YTogbnVtYmVyKSB7XG4gICAgbGV0IGluZGV4ID0gdHJhY2tJZHMuaW5kZXhPZih0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkKVxuICAgIGluZGV4ID0gKGluZGV4ICsgZGVsdGEgKyB0cmFja0lkcy5sZW5ndGgpICUgdHJhY2tJZHMubGVuZ3RoXG4gICAgY29uc3QgZm9jdXNlZFRyYWNrSWQgPSB0cmFja0lkc1tpbmRleF1cbiAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZFRyYWNrSWQgfSlcbiAgfVxuXG4gIHNldEZvY3VzZWRUcmFja0lkKHRyYWNrSWQ6IFRyYWNrSWQpIHtcbiAgICBsZXQgaW5kZXggPSB0cmFja0lkcy5pbmRleE9mKHRyYWNrSWQpXG4gICAgY29uc3QgZm9jdXNlZFRyYWNrSWQgPSB0cmFja0lkc1tpbmRleF1cbiAgICB0aGlzLnNldFN0YXRlKHsgZm9jdXNlZFRyYWNrSWQgfSlcbiAgfVxuXG4gIHNoaWZ0Rm9jdXNlZFRyYWNrTWlsZXN0b25lQnlEZWx0YShkZWx0YTogbnVtYmVyKSB7XG4gICAgbGV0IHByZXZNaWxlc3RvbmUgPSB0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2tbdGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZF1cbiAgICBsZXQgbWlsZXN0b25lID0gcHJldk1pbGVzdG9uZSArIGRlbHRhXG4gICAgaWYgKG1pbGVzdG9uZSA8IDApIG1pbGVzdG9uZSA9IDBcbiAgICBpZiAobWlsZXN0b25lID4gNCkgbWlsZXN0b25lID0gNFxuICAgIHRoaXMuaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2UodGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZCwgKChtaWxlc3RvbmU6IGFueSk6IE1pbGVzdG9uZSkpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU25vd2ZsYWtlQXBwXG4iXX0= */\n/*@ sourceURL=/Users/swati/src/snowflake/components/SnowflakeApp.js */"), __jsx("div", {
        style: {
          margin: '19px auto 0',
          width: 142
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, __jsx("a", {
        href: "https://www.shopify.com",
        target: "_blank",
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, __jsx(_components_Wordmark__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }))), __jsx("div", {
        style: {
          display: 'flex'
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, __jsx("div", {
        style: {
          flex: 1
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, __jsx(_components_PointSummaries__WEBPACK_IMPORTED_MODULE_15__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }), __jsx(_components_LevelThermometer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      })), __jsx("div", {
        style: {
          flex: 0
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
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
          lineNumber: 162
        },
        __self: this
      }))), __jsx(_components_TrackSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        focusedTrackId: this.state.focusedTrackId,
        setFocusedTrackIdFn: this.setFocusedTrackId.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      }), __jsx(_components_KeyboardListener__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectNextTrackFn: this.shiftFocusedTrack.bind(this, 1),
        selectPrevTrackFn: this.shiftFocusedTrack.bind(this, -1),
        increaseFocusedMilestoneFn: this.shiftFocusedTrackMilestoneByDelta.bind(this, 1),
        decreaseFocusedMilestoneFn: this.shiftFocusedTrackMilestoneByDelta.bind(this, -1),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
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
          lineNumber: 177
        },
        __self: this
      }), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }));
    }
  }, {
    key: "handleTrackMilestoneChange",
    value: function handleTrackMilestoneChange(trackId, milestone) {
      var milestoneByTrack = this.state.milestoneByTrack;
      milestoneByTrack[trackId] = milestone;
      this.setState({
        milestoneByTrack: milestoneByTrack,
        focusedTrackId: trackId
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

/***/ })

})
//# sourceMappingURL=index.js.8e59a525729c81ea5b5e.hot-update.js.map