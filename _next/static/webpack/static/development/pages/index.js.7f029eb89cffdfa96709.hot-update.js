webpackHotUpdate("static/development/pages/index.js",{

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
var maxCategoryPoints = 16;
var numerator_categories = 3;
var coefficient = maxCategoryPoints * numerator_categories * max_denominator;
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

function calculateScore(reliability, credibility, intimacy, self_orientation) {
  var max_numerator = 16 * 3;
  var max_denominator = 16;
  var coefficient = max_numerator * max_denominator;
  return (reliability + credibility + intimacy) / (coefficient / self_orientation);
}

function getCategoryPoints(allPoints, categoryId) {
  var pointsObj = allPoints.find(function (category) {
    return category.categoryId == categoryId;
  });

  if (pointsObj) {
    return pointsObj.points;
  }

  return 0;
}

var totalPointsFromMilestoneMap = function totalPointsFromMilestoneMap(milestoneMap) {
  var allCategoryPoints = categoryPointsFromMilestoneMap(milestoneMap);
  var reliability = getCategoryPoints(allCategoryPoints, 'A');
  var credibility = getCategoryPoints(allCategoryPoints, 'B');
  var intimacy = getCategoryPoints(allCategoryPoints, 'C');
  var self_orientation = getCategoryPoints(allCategoryPoints, 'D');
  return (calculateScore(reliability, credibility, intimacy, self_orientation) * 100).toFixed(0);
};
var categoryColorScale = d3__WEBPACK_IMPORTED_MODULE_3__["scaleOrdinal"]().domain(categoryIds).range(['#47C1BF', '#006FBB', '#EEC200', '#F49342']);

/***/ })

})
//# sourceMappingURL=index.js.7f029eb89cffdfa96709.hot-update.js.map