// @flow
import * as d3 from 'd3'
import { tracks, trackIds } from '../constants/tracks'
import type { TrackId } from '../constants/tracks'

export type Score = 0 | 1 | 2 | 3 | 4
export const scores = [0, 1, 2, 3, 4]

export type MilestoneMap = {
  'KEEP_PROMISES': Milestone,
  'MEET_DEADLINES': Milestone,
  'ON_TIME': Milestone,
  'DEPENDABLE': Milestone,
  'CONTENT_EXPERTISE': Milestone,
  'PASSION': Milestone,
  'CHALLENGE_CUSTOMERS': Milestone,
  'HUMILITY': Milestone,
  'ACCEPTANCE': Milestone,
  'OPENNESS': Milestone,
  'EMOTIONAL_HONESTY': Milestone,
  'AUTHENTICITY': Milestone,
  'FOCUSSING_ON_OTHERS': Milestone,
  'LISTENING': Milestone,
  'COMPASSION': Milestone,
  'COLLABORATION': Milestone
}

export type Milestone = {
  level: Number,
  description: string,
  points: Number
}

type Milestones = {|
  0: Milestone,
  1: Milestone,
  2: Milestone,
  3: Milestone,
  4: Milestone
|}

export const milestones: Milestones = {
  0: { level: 0, description: 'Never', points: 0 },
  1: { level: 1, description: 'Rarely', points: 1 },
  2: { level: 2, description: 'Sometimes', points: 2 },
  3: { level: 3, description: 'Often', points: 3 },
  4: { level: 4, description: 'Always', points: 4 }
}

export const thermometerIncrements = [10, 20, 30, 40, 50, 60, 70, 80, 85, 90, 95, 100]
export const maxPoints = 64

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestones[milestone].points)
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId) || 0
    return { categoryId, points: points }
  })
}

function calculateScore(reliability, credibility, intimacy, self_orientation) {
  let max_numerator = 16 * 3
  let max_denominator = 16
  let coefficient = max_numerator * max_denominator
  return (reliability + credibility + intimacy) / (coefficient / self_orientation)
}

function getCategoryPoints(allPoints, categoryId) {
  let pointsObj = allPoints.find(category => category.categoryId == categoryId)
  if (pointsObj) {
    return pointsObj.points
  }
  return 0
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number => {
  let allCategoryPoints = categoryPointsFromMilestoneMap(milestoneMap)
  let reliability = getCategoryPoints(allCategoryPoints, 'A')
  let credibility = getCategoryPoints(allCategoryPoints, 'B')
  let intimacy = getCategoryPoints(allCategoryPoints, 'C')
  let self_orientation = getCategoryPoints(allCategoryPoints, 'D')
  
  return (calculateScore(reliability, credibility, intimacy, self_orientation) * 100).toFixed(0)
}


  

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#47C1BF', '#006FBB', '#EEC200', '#F49342'])
