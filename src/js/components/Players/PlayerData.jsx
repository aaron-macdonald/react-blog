import React from 'react'
import { Link } from 'react-router-dom'

class PlayerData extends React.Component {
  componentWillMount() {
    this.props.fetchPlayerData(this.props.id)
  }
  render () {
    return (
      <div className="card">
        <div className="card-action">
          <table className="stripped">
            <thead>
              <tr>
                <th>Game Id</th>
                <th>Date</th>
                <th>Buyin</th>
                <th>Rebuy</th>
                <th>Addon</th>
                <th>Position</th>
                <th>Prizemoney</th>
                <th>Profit/Loss</th>
              </tr>
            </thead>
            <tbody>
              {this.props.playerdata.map(gdata => {
                const {id, date, game_id, buyin, rebuys, addons, position, prizemoney} = gdata
                const profitLoss = (prizemoney - buyin - rebuys - addons)
                return <tr key={id}>
                  <td>{game_id}</td>
                  <td>{date}</td>
                  <td>{buyin}</td>
                  <td>{rebuys}</td>
                  <td>{addons}</td>
                  <td>{position}</td>
                  <td>{prizemoney}</td>
                  <td>{profitLoss}</td>
                </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
export default PlayerData
