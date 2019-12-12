webpackHotUpdate("static/development/pages/index.js",{

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

/***/ })

})
//# sourceMappingURL=index.js.b360b79695b86a4669fd.hot-update.js.map