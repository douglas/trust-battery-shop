// @flow

import { scores, categoryColorScale, milestones } from '../constants/constants'
import { tracks } from '../constants/tracks'
import React from 'react'
import type { MilestoneMap, Milestone } from '../constants/constants'
import type { TrackId } from '../constants/tracks'

type Props = {
  milestoneByTrack: MilestoneMap,
  trackId: TrackId,
  handleTrackMilestoneChangeFn: (TrackId, Milestone) => void
}

class Track extends React.Component<Props> {
  
  render() {
    const track = tracks[this.props.trackId]
    const currentMilestoneId = this.props.milestoneByTrack[this.props.trackId]
    return (
      <div className="track">
        <style jsx>{`
          div.track {
            margin: 0 0 20px 0;
            padding-bottom: 20px;
            border-bottom: 2px solid #ccc;
          }
          h2 {
            margin: 0 0 10px 0;
          }
          p.track-description {
            margin-top: 0;
            padding-bottom: 20px;
            border-bottom: 2px solid #ccc;
          }
          table {
            border-spacing: 3px;
          }
          td.milestone {
            line-height: 50px;
            padding: 8px 24px 8px 24px;
            text-align: center;
            font-weight: bold;
            font-size: 24px;
            border-radius: 3px;
            cursor: pointer;
          }
          td.milestone-text {
            color: #808080;
          }
          ul {
            line-height: 1.5em;
          }
        `}</style>
        <h2>{track.displayName}</h2>
        <p className="track-description">{track.description.short}</p>
        <div style={{display: 'flex'}}>
          <table style={{flex: 0, marginRight: 50}}>
            <tbody>
              {scores.slice().reverse().map((milestone) => {
                const isMet = milestone <= currentMilestoneId
                return (
                  <tr key={milestone}>
                    <td className="milestone" onClick={() => this.props.handleTrackMilestoneChangeFn(this.props.trackId, milestone)}
                        style={{border: `4px solid ${milestone === currentMilestoneId ? '#000' : isMet ? categoryColorScale(track.category) : '#eee'}`, background: isMet ? categoryColorScale(track.category) : '#eee'}}>
                      {milestone}
                    </td>
                    <td className="milestone-text">
                      {milestones[milestone].description}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
            <div style={{flex: 1}}>
              <h3>{track.description.detailed}</h3>
              <h4>Example behaviours:</h4>
              <ul>
                {track.examples.map((example, i) => (
                  <li key={i}>{example}</li>
                ))}
              </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default Track
