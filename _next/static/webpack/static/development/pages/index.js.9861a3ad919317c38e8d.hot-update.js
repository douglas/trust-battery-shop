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
/* harmony import */ var _components_Wordmark__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Wordmark */ "./components/Wordmark.js");
/* harmony import */ var _components_LevelThermometer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/LevelThermometer */ "./components/LevelThermometer.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constants */ "./constants.js");
/* harmony import */ var _components_PointSummaries__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/PointSummaries */ "./components/PointSummaries.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _components_TitleSelector__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/TitleSelector */ "./components/TitleSelector.js");





var _jsxFileName = "/Users/swati/src/snowflake/components/SnowflakeApp.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_14___default.a.createElement;











var hashToState = function hashToState(hash) {
  if (!hash) return null;
  var result = defaultState();
  var hashValues = hash.split('#')[1].split(',');
  if (!hashValues) return null;
  _constants__WEBPACK_IMPORTED_MODULE_12__["trackIds"].forEach(function (trackId, i) {
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
  var values = _constants__WEBPACK_IMPORTED_MODULE_12__["trackIds"].map(function (trackId) {
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
          lineNumber: 130
        },
        __self: this
      }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
        id: "2126963245",
        __self: this
      }, "body{font-family:Helvetica;}main{width:960px;margin:0 auto;}.name-input{border:none;display:block;border-bottom:2px solid #fff;font-size:30px;line-height:40px;font-weight:bold;width:380px;margin-bottom:10px;}.name-input:hover,.name-input:focus{border-bottom:2px solid #ccc;outline:0;}a{color:#888;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvU25vd2ZsYWtlQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtJMkIsQUFHbUMsQUFHVixBQUlBLEFBVWlCLEFBSWxCLFdBQ1UsQ0FsQlAsQUFJQSxVQVBoQixJQUlBLEFBSStCLEdBU25CLFVBQ1osZ0JBVGlCLE1BYWpCLFNBWm1CLGlCQUNBLGlCQUNMLFlBQ08sbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9zd2F0aS9zcmMvc25vd2ZsYWtlL2NvbXBvbmVudHMvU25vd2ZsYWtlQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuaW1wb3J0IFRyYWNrU2VsZWN0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9UcmFja1NlbGVjdG9yJ1xuaW1wb3J0IE5pZ2h0aW5nYWxlQ2hhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9OaWdodGluZ2FsZUNoYXJ0J1xuaW1wb3J0IEtleWJvYXJkTGlzdGVuZXIgZnJvbSAnLi4vY29tcG9uZW50cy9LZXlib2FyZExpc3RlbmVyJ1xuaW1wb3J0IFRyYWNrIGZyb20gJy4uL2NvbXBvbmVudHMvVHJhY2snXG5pbXBvcnQgV29yZG1hcmsgZnJvbSAnLi4vY29tcG9uZW50cy9Xb3JkbWFyaydcbmltcG9ydCBMZXZlbFRoZXJtb21ldGVyIGZyb20gJy4uL2NvbXBvbmVudHMvTGV2ZWxUaGVybW9tZXRlcidcbmltcG9ydCB7IGVsaWdpYmxlVGl0bGVzLCB0cmFja0lkcywgbWlsZXN0b25lcywgbWlsZXN0b25lVG9Qb2ludHMgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgUG9pbnRTdW1tYXJpZXMgZnJvbSAnLi4vY29tcG9uZW50cy9Qb2ludFN1bW1hcmllcydcbmltcG9ydCB0eXBlIHsgTWlsZXN0b25lLCBNaWxlc3RvbmVNYXAsIFRyYWNrSWQgfSBmcm9tICcuLi9jb25zdGFudHMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgVGl0bGVTZWxlY3RvciBmcm9tICcuLi9jb21wb25lbnRzL1RpdGxlU2VsZWN0b3InXG5cbnR5cGUgU25vd2ZsYWtlQXBwU3RhdGUgPSB7XG4gIG1pbGVzdG9uZUJ5VHJhY2s6IE1pbGVzdG9uZU1hcCxcbiAgbmFtZTogc3RyaW5nLFxuICB0aXRsZTogc3RyaW5nLFxuICBmb2N1c2VkVHJhY2tJZDogVHJhY2tJZCxcbn1cblxuY29uc3QgaGFzaFRvU3RhdGUgPSAoaGFzaDogU3RyaW5nKTogP1Nub3dmbGFrZUFwcFN0YXRlID0+IHtcbiAgaWYgKCFoYXNoKSByZXR1cm4gbnVsbFxuICBjb25zdCByZXN1bHQgPSBkZWZhdWx0U3RhdGUoKVxuICBjb25zdCBoYXNoVmFsdWVzID0gaGFzaC5zcGxpdCgnIycpWzFdLnNwbGl0KCcsJylcbiAgaWYgKCFoYXNoVmFsdWVzKSByZXR1cm4gbnVsbFxuICB0cmFja0lkcy5mb3JFYWNoKCh0cmFja0lkLCBpKSA9PiB7XG4gICAgcmVzdWx0Lm1pbGVzdG9uZUJ5VHJhY2tbdHJhY2tJZF0gPSBjb2VyY2VNaWxlc3RvbmUoTnVtYmVyKGhhc2hWYWx1ZXNbaV0pKVxuICB9KVxuICBpZiAoaGFzaFZhbHVlc1sxNl0pIHJlc3VsdC5uYW1lID0gZGVjb2RlVVJJKGhhc2hWYWx1ZXNbMTZdKVxuICBpZiAoaGFzaFZhbHVlc1sxN10pIHJlc3VsdC50aXRsZSA9IGRlY29kZVVSSShoYXNoVmFsdWVzWzE3XSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5jb25zdCBjb2VyY2VNaWxlc3RvbmUgPSAodmFsdWU6IG51bWJlcik6IE1pbGVzdG9uZSA9PiB7XG4gIC8vIEhBQ0sgSSBrbm93IHRoaXMgaXMgZ29vZnkgYnV0IGknbSBkZWFsaW5nIHdpdGggZmxvdyB0eXBpbmdcbiAgc3dpdGNoKHZhbHVlKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gMFxuICAgIGNhc2UgMTogcmV0dXJuIDFcbiAgICBjYXNlIDI6IHJldHVybiAyXG4gICAgY2FzZSAzOiByZXR1cm4gM1xuICAgIGNhc2UgNDogcmV0dXJuIDRcbiAgICBjYXNlIDU6IHJldHVybiA1XG4gICAgZGVmYXVsdDogcmV0dXJuIDBcbiAgfVxufVxuXG5jb25zdCBlbXB0eVN0YXRlID0gKCk6IFNub3dmbGFrZUFwcFN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnJyxcbiAgICB0aXRsZTogJycsXG4gICAgbWlsZXN0b25lQnlUcmFjazoge1xuICAgICAgJ01PQklMRSc6IDAsXG4gICAgICAnV0VCX0NMSUVOVCc6IDAsXG4gICAgICAnRk9VTkRBVElPTlMnOiAwLFxuICAgICAgJ1NFUlZFUlMnOiAwLFxuICAgICAgJ1BST0pFQ1RfTUFOQUdFTUVOVCc6IDAsXG4gICAgICAnQ09NTVVOSUNBVElPTic6IDAsXG4gICAgICAnQ1JBRlQnOiAwLFxuICAgICAgJ0lOSVRJQVRJVkUnOiAwLFxuICAgICAgJ0NBUkVFUl9ERVZFTE9QTUVOVCc6IDAsXG4gICAgICAnT1JHX0RFU0lHTic6IDAsXG4gICAgICAnV0VMTEJFSU5HJzogMCxcbiAgICAgICdBQ0NPTVBMSVNITUVOVCc6IDAsXG4gICAgICAnTUVOVE9SU0hJUCc6IDAsXG4gICAgICAnRVZBTkdFTElTTSc6IDAsXG4gICAgICAnUkVDUlVJVElORyc6IDAsXG4gICAgICAnQ09NTVVOSVRZJzogMFxuICAgIH0sXG4gICAgZm9jdXNlZFRyYWNrSWQ6ICdNT0JJTEUnXG4gIH1cbn1cblxuY29uc3QgZGVmYXVsdFN0YXRlID0gKCk6IFNub3dmbGFrZUFwcFN0YXRlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnQ2Vyc2VpIExhbm5pc3RlcicsXG4gICAgdGl0bGU6ICdTdGFmZiBFbmdpbmVlcicsXG4gICAgbWlsZXN0b25lQnlUcmFjazoge1xuICAgICAgJ01PQklMRSc6IDEsXG4gICAgICAnV0VCX0NMSUVOVCc6IDIsXG4gICAgICAnRk9VTkRBVElPTlMnOiAzLFxuICAgICAgJ1NFUlZFUlMnOiAyLFxuICAgICAgJ1BST0pFQ1RfTUFOQUdFTUVOVCc6IDQsXG4gICAgICAnQ09NTVVOSUNBVElPTic6IDEsXG4gICAgICAnQ1JBRlQnOiAxLFxuICAgICAgJ0lOSVRJQVRJVkUnOiA0LFxuICAgICAgJ0NBUkVFUl9ERVZFTE9QTUVOVCc6IDMsXG4gICAgICAnT1JHX0RFU0lHTic6IDIsXG4gICAgICAnV0VMTEJFSU5HJzogMCxcbiAgICAgICdBQ0NPTVBMSVNITUVOVCc6IDQsXG4gICAgICAnTUVOVE9SU0hJUCc6IDIsXG4gICAgICAnRVZBTkdFTElTTSc6IDIsXG4gICAgICAnUkVDUlVJVElORyc6IDMsXG4gICAgICAnQ09NTVVOSVRZJzogMFxuICAgIH0sXG4gICAgZm9jdXNlZFRyYWNrSWQ6ICdNT0JJTEUnXG4gIH1cbn1cblxuY29uc3Qgc3RhdGVUb0hhc2ggPSAoc3RhdGU6IFNub3dmbGFrZUFwcFN0YXRlKSA9PiB7XG4gIGlmICghc3RhdGUgfHwgIXN0YXRlLm1pbGVzdG9uZUJ5VHJhY2spIHJldHVybiBudWxsXG4gIGNvbnN0IHZhbHVlcyA9IHRyYWNrSWRzLm1hcCh0cmFja0lkID0+IHN0YXRlLm1pbGVzdG9uZUJ5VHJhY2tbdHJhY2tJZF0pLmNvbmNhdChlbmNvZGVVUkkoc3RhdGUubmFtZSksIGVuY29kZVVSSShzdGF0ZS50aXRsZSkpXG4gIHJldHVybiB2YWx1ZXMuam9pbignLCcpXG59XG5cbnR5cGUgUHJvcHMgPSB7fVxuXG5jbGFzcyBTbm93Zmxha2VBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFNub3dmbGFrZUFwcFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSBlbXB0eVN0YXRlKClcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBjb25zdCBoYXNoID0gc3RhdGVUb0hhc2godGhpcy5zdGF0ZSlcbiAgICBpZiAoaGFzaCkgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UoYCMke2hhc2h9YClcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHN0YXRlID0gaGFzaFRvU3RhdGUod2luZG93LmxvY2F0aW9uLmhhc2gpXG4gICAgaWYgKHN0YXRlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHN0YXRlKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFN0YXRlKGRlZmF1bHRTdGF0ZSgpKVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xuICAgICAgICAgIH1cbiAgICAgICAgICBtYWluIHtcbiAgICAgICAgICAgIHdpZHRoOiA5NjBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubmFtZS1pbnB1dCB7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHdpZHRoOiAzODBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5uYW1lLWlucHV0OmhvdmVyLCAubmFtZS1pbnB1dDpmb2N1cyB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbiAgICAgICAgICAgIG91dGxpbmU6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6ICM4ODg7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXYgc3R5bGU9e3ttYXJnaW46ICcxOXB4IGF1dG8gMCcsIHdpZHRoOiAxNDJ9fT5cbiAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cuc2hvcGlmeS5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgIDxXb3JkbWFyayAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDogMX19PlxuICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgIHsvKiA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hbWUtaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuc2V0U3RhdGUoe25hbWU6IGUudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgLz4gKi99XG4gICAgICAgICAgICAgIDxUaXRsZVNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICBtaWxlc3RvbmVCeVRyYWNrPXt0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2t9XG4gICAgICAgICAgICAgICAgICBjdXJyZW50VGl0bGU9e3RoaXMuc3RhdGUudGl0bGV9XG4gICAgICAgICAgICAgICAgICBzZXRUaXRsZUZuPXsodGl0bGUpID0+IHRoaXMuc2V0VGl0bGUodGl0bGUpfSAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPFBvaW50U3VtbWFyaWVzIG1pbGVzdG9uZUJ5VHJhY2s9e3RoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja30gLz5cbiAgICAgICAgICAgIDxMZXZlbFRoZXJtb21ldGVyIG1pbGVzdG9uZUJ5VHJhY2s9e3RoaXMuc3RhdGUubWlsZXN0b25lQnlUcmFja30gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7ZmxleDogMH19PlxuICAgICAgICAgICAgPE5pZ2h0aW5nYWxlQ2hhcnRcbiAgICAgICAgICAgICAgICBtaWxlc3RvbmVCeVRyYWNrPXt0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2t9XG4gICAgICAgICAgICAgICAgZm9jdXNlZFRyYWNrSWQ9e3RoaXMuc3RhdGUuZm9jdXNlZFRyYWNrSWR9XG4gICAgICAgICAgICAgICAgaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2VGbj17KHRyYWNrLCBtaWxlc3RvbmUpID0+IHRoaXMuaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2UodHJhY2ssIG1pbGVzdG9uZSl9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VHJhY2tTZWxlY3RvclxuICAgICAgICAgICAgbWlsZXN0b25lQnlUcmFjaz17dGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrfVxuICAgICAgICAgICAgZm9jdXNlZFRyYWNrSWQ9e3RoaXMuc3RhdGUuZm9jdXNlZFRyYWNrSWR9XG4gICAgICAgICAgICBzZXRGb2N1c2VkVHJhY2tJZEZuPXt0aGlzLnNldEZvY3VzZWRUcmFja0lkLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDxLZXlib2FyZExpc3RlbmVyXG4gICAgICAgICAgICBzZWxlY3ROZXh0VHJhY2tGbj17dGhpcy5zaGlmdEZvY3VzZWRUcmFjay5iaW5kKHRoaXMsIDEpfVxuICAgICAgICAgICAgc2VsZWN0UHJldlRyYWNrRm49e3RoaXMuc2hpZnRGb2N1c2VkVHJhY2suYmluZCh0aGlzLCAtMSl9XG4gICAgICAgICAgICBpbmNyZWFzZUZvY3VzZWRNaWxlc3RvbmVGbj17dGhpcy5zaGlmdEZvY3VzZWRUcmFja01pbGVzdG9uZUJ5RGVsdGEuYmluZCh0aGlzLCAxKX1cbiAgICAgICAgICAgIGRlY3JlYXNlRm9jdXNlZE1pbGVzdG9uZUZuPXt0aGlzLnNoaWZ0Rm9jdXNlZFRyYWNrTWlsZXN0b25lQnlEZWx0YS5iaW5kKHRoaXMsIC0xKX0gLz5cbiAgICAgICAgPFRyYWNrXG4gICAgICAgICAgICBtaWxlc3RvbmVCeVRyYWNrPXt0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2t9XG4gICAgICAgICAgICB0cmFja0lkPXt0aGlzLnN0YXRlLmZvY3VzZWRUcmFja0lkfVxuICAgICAgICAgICAgaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2VGbj17KHRyYWNrLCBtaWxlc3RvbmUpID0+IHRoaXMuaGFuZGxlVHJhY2tNaWxlc3RvbmVDaGFuZ2UodHJhY2ssIG1pbGVzdG9uZSl9IC8+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvbWFpbj5cbiAgICApXG4gIH1cblxuICBoYW5kbGVUcmFja01pbGVzdG9uZUNoYW5nZSh0cmFja0lkOiBUcmFja0lkLCBtaWxlc3RvbmU6IE1pbGVzdG9uZSkge1xuICAgIGNvbnN0IG1pbGVzdG9uZUJ5VHJhY2sgPSB0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2tcbiAgICBtaWxlc3RvbmVCeVRyYWNrW3RyYWNrSWRdID0gbWlsZXN0b25lXG5cbiAgICBjb25zdCB0aXRsZXMgPSBlbGlnaWJsZVRpdGxlcyhtaWxlc3RvbmVCeVRyYWNrKVxuICAgIGNvbnN0IHRpdGxlID0gdGl0bGVzLmluZGV4T2YodGhpcy5zdGF0ZS50aXRsZSkgPT09IC0xID8gdGl0bGVzWzBdIDogdGhpcy5zdGF0ZS50aXRsZVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG1pbGVzdG9uZUJ5VHJhY2ssIGZvY3VzZWRUcmFja0lkOiB0cmFja0lkLCB0aXRsZSB9KVxuICB9XG5cbiAgc2hpZnRGb2N1c2VkVHJhY2soZGVsdGE6IG51bWJlcikge1xuICAgIGxldCBpbmRleCA9IHRyYWNrSWRzLmluZGV4T2YodGhpcy5zdGF0ZS5mb2N1c2VkVHJhY2tJZClcbiAgICBpbmRleCA9IChpbmRleCArIGRlbHRhICsgdHJhY2tJZHMubGVuZ3RoKSAlIHRyYWNrSWRzLmxlbmd0aFxuICAgIGNvbnN0IGZvY3VzZWRUcmFja0lkID0gdHJhY2tJZHNbaW5kZXhdXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRUcmFja0lkIH0pXG4gIH1cblxuICBzZXRGb2N1c2VkVHJhY2tJZCh0cmFja0lkOiBUcmFja0lkKSB7XG4gICAgbGV0IGluZGV4ID0gdHJhY2tJZHMuaW5kZXhPZih0cmFja0lkKVxuICAgIGNvbnN0IGZvY3VzZWRUcmFja0lkID0gdHJhY2tJZHNbaW5kZXhdXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvY3VzZWRUcmFja0lkIH0pXG4gIH1cblxuICBzaGlmdEZvY3VzZWRUcmFja01pbGVzdG9uZUJ5RGVsdGEoZGVsdGE6IG51bWJlcikge1xuICAgIGxldCBwcmV2TWlsZXN0b25lID0gdGhpcy5zdGF0ZS5taWxlc3RvbmVCeVRyYWNrW3RoaXMuc3RhdGUuZm9jdXNlZFRyYWNrSWRdXG4gICAgbGV0IG1pbGVzdG9uZSA9IHByZXZNaWxlc3RvbmUgKyBkZWx0YVxuICAgIGlmIChtaWxlc3RvbmUgPCAwKSBtaWxlc3RvbmUgPSAwXG4gICAgaWYgKG1pbGVzdG9uZSA+IDUpIG1pbGVzdG9uZSA9IDVcbiAgICB0aGlzLmhhbmRsZVRyYWNrTWlsZXN0b25lQ2hhbmdlKHRoaXMuc3RhdGUuZm9jdXNlZFRyYWNrSWQsICgobWlsZXN0b25lOiBhbnkpOiBNaWxlc3RvbmUpKVxuICB9XG5cbiAgc2V0VGl0bGUodGl0bGU6IHN0cmluZykge1xuICAgIGxldCB0aXRsZXMgPSBlbGlnaWJsZVRpdGxlcyh0aGlzLnN0YXRlLm1pbGVzdG9uZUJ5VHJhY2spXG4gICAgdGl0bGUgPSB0aXRsZXMuaW5kZXhPZih0aXRsZSkgPT0gLTEgPyB0aXRsZXNbMF0gOiB0aXRsZVxuICAgIHRoaXMuc2V0U3RhdGUoeyB0aXRsZSB9KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNub3dmbGFrZUFwcFxuIl19 */\n/*@ sourceURL=/Users/swati/src/snowflake/components/SnowflakeApp.js */"), __jsx("div", {
        style: {
          margin: '19px auto 0',
          width: 142
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }, __jsx("a", {
        href: "https://www.shopify.com",
        target: "_blank",
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, __jsx(_components_Wordmark__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }))), __jsx("div", {
        style: {
          display: 'flex'
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, __jsx("div", {
        style: {
          flex: 1
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, __jsx("form", {
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, __jsx(_components_TitleSelector__WEBPACK_IMPORTED_MODULE_15__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        currentTitle: this.state.title,
        setTitleFn: function setTitleFn(title) {
          return _this2.setTitle(title);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      })), __jsx(_components_PointSummaries__WEBPACK_IMPORTED_MODULE_13__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      }), __jsx(_components_LevelThermometer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      })), __jsx("div", {
        style: {
          flex: 0
        },
        className: "jsx-2126963245",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
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
          lineNumber: 182
        },
        __self: this
      }))), __jsx(_components_TrackSelector__WEBPACK_IMPORTED_MODULE_6__["default"], {
        milestoneByTrack: this.state.milestoneByTrack,
        focusedTrackId: this.state.focusedTrackId,
        setFocusedTrackIdFn: this.setFocusedTrackId.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }), __jsx(_components_KeyboardListener__WEBPACK_IMPORTED_MODULE_8__["default"], {
        selectNextTrackFn: this.shiftFocusedTrack.bind(this, 1),
        selectPrevTrackFn: this.shiftFocusedTrack.bind(this, -1),
        increaseFocusedMilestoneFn: this.shiftFocusedTrackMilestoneByDelta.bind(this, 1),
        decreaseFocusedMilestoneFn: this.shiftFocusedTrackMilestoneByDelta.bind(this, -1),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
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
          lineNumber: 197
        },
        __self: this
      }), __jsx(Footer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }));
    }
  }, {
    key: "handleTrackMilestoneChange",
    value: function handleTrackMilestoneChange(trackId, milestone) {
      var milestoneByTrack = this.state.milestoneByTrack;
      milestoneByTrack[trackId] = milestone;
      var titles = Object(_constants__WEBPACK_IMPORTED_MODULE_12__["eligibleTitles"])(milestoneByTrack);
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
      var index = _constants__WEBPACK_IMPORTED_MODULE_12__["trackIds"].indexOf(this.state.focusedTrackId);
      index = (index + delta + _constants__WEBPACK_IMPORTED_MODULE_12__["trackIds"].length) % _constants__WEBPACK_IMPORTED_MODULE_12__["trackIds"].length;
      var focusedTrackId = _constants__WEBPACK_IMPORTED_MODULE_12__["trackIds"][index];
      this.setState({
        focusedTrackId: focusedTrackId
      });
    }
  }, {
    key: "setFocusedTrackId",
    value: function setFocusedTrackId(trackId) {
      var index = _constants__WEBPACK_IMPORTED_MODULE_12__["trackIds"].indexOf(trackId);
      var focusedTrackId = _constants__WEBPACK_IMPORTED_MODULE_12__["trackIds"][index];
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
      var titles = Object(_constants__WEBPACK_IMPORTED_MODULE_12__["eligibleTitles"])(this.state.milestoneByTrack);
      title = titles.indexOf(title) == -1 ? titles[0] : title;
      this.setState({
        title: title
      });
    }
  }]);

  return SnowflakeApp;
}(react__WEBPACK_IMPORTED_MODULE_14___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SnowflakeApp);

/***/ })

})
//# sourceMappingURL=index.js.9861a3ad919317c38e8d.hot-update.js.map