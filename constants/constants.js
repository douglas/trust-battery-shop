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

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestones[milestoneMap[trackId]].points).reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#47C1BF', '#006FBB', '#EEC200', '#F49342'])
