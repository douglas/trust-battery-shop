// @flow

import { totalPointsFromMilestoneMap, maxPoints } from '../constants/constants'
import type { MilestoneMap } from '../constants/constants'
import React from 'react'

type Props = {
  milestoneByTrack: MilestoneMap
}

class PointSummaries extends React.Component<Props> {
  render() {
    const totalPoints = (((totalPointsFromMilestoneMap(this.props.milestoneByTrack)) / maxPoints) * 100).toFixed(0)

    const blocks = [
      {
        label: 'Trust Battery',
        value: totalPoints
      }
    ]

    return (
      <table>
        <style jsx>{`
          table {
            border-spacing: 3px;
            margin-bottom: 20px;
            margin-left: -3px;
          }
          .point-summary-label {
            font-size: 12px;
            text-align: center;
            font-weight: normal;
            width: 120px;
          }
          .point-summary-value {
            width: 120px;
            background: #eee;
            font-size: 24px;
            font-weight: bold;
            line-height: 50px;
            border-radius: 2px;
            text-align: center;
          }
        `}</style>
        <tbody>
          <tr>
          {blocks.map(({label}, i) => (
            <th key={i} className="point-summary-label">
              {label}
            </th>
          ))}
          </tr>
          <tr>
          {blocks.map(({value}, i) => (
            <td key={i} className="point-summary-value">
              {value}%
            </td>
          ))}
          </tr>
        </tbody>
      </table>
    )
  }
}

export default PointSummaries
