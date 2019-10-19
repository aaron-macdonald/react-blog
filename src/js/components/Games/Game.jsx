import React from 'react'
import GameData from './GameData.jsx'

class Game extends React.Component {
  componentDidMount() {
    this.props.fetchGameData()
  }
  render() {
    const { id, date, location } = this.props.game
    return (
      <div className="row">
        <div className="col s12 m10 offset-m1">
          <div className="card">
            <div className="card-action">
              <div className="center">
                <h5 className="">Game Detail</h5>
              </div>
            </div>
            <div className="card-content">
              <table className="striped">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Date</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{id}</td>
                    <td>{date}</td>
                    <td>{location}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <GameData id ={id} fetchGameData={this.props.fetchGameData}
            gamedata={this.props.gamedata}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Game
