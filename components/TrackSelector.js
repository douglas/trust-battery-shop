// @flow

import React from 'react'
import { categoryColorScale } from '../constants/constants'
import { trackIds, tracks } from '../constants/tracks'
import type { MilestoneMap, TrackId } from '../constants/constants'

type Props = {
  milestoneByTrack: MilestoneMap,
  focusedTrackId: TrackId,
  setFocusedTrackIdFn: (TrackId) => void
}

class TrackSelector extends React.Component<Props> {
  render() {
    return (
      <table>
        <style jsx>{`
          table {
            width: 100%;
            border-spacing: 3px;
            border-bottom: 2px solid #ccc;
            padding-bottom: 20px;
            margin-bottom: 20px;
            margin-left: -3px;
          }
          .track-selector-value {
            line-height: 50px;
            width: 50px;
            text-align: center;
            background: #eee;
            font-weight: bold;
            font-size: 24px;
            border-radius: 3px;
            cursor: pointer;
          }
          .track-selector-label {
            text-align: center;
            font-size: 9px;
          }
          .track-selector-category-label {
            text-align: center;
            font-size: 11px;
          }
        `}</style>
        <tbody>
          <tr>
            {trackIds.map(trackId => (
              <td key={trackId} className="track-selector-label" onClick={() => this.props.setFocusedTrackIdFn(trackId)}>
                {tracks[trackId].displayName}
              </td>
            ))}
          </tr>
          <tr>
            {trackIds.map(trackId => (
              <td key={trackId} className="track-selector-value"
                  style={{border: '4px solid ' + (trackId == this.props.focusedTrackId ? '#000': categoryColorScale(tracks[trackId].category)), background: categoryColorScale(tracks[trackId].category)}}
                  onClick={() => this.props.setFocusedTrackIdFn(trackId)}>
                {this.props.milestoneByTrack[trackId]}
              </td>
            ))}
          </tr>
          <tr>
            <td colspan="4" className="track-selector-category-label" style={{color: categoryColorScale('A')}}>
              Reliability
            </td>
            <td colspan="4" className="track-selector-category-label" style={{color: categoryColorScale('B')}}>
              Credibility
            </td>
            <td colspan="4" className="track-selector-category-label" style={{color: categoryColorScale('C')}}>
              Intimacy
            </td>
            <td colspan="4" className="track-selector-category-label" style={{color: categoryColorScale('D')}}>
              Self-Orientation
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default TrackSelector
