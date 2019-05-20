import React from 'react'
import { Link } from 'react-router-dom'

function Players (props) {
  const players = props.players
  
  return (
    <div className='players'>
      <div className='row valign-wrapper'>
        <h4 className="col s12">Players</h4>
          <Link to='/players/player/add'>
            <div className="waves-effect waves-light btn">
              Add Player
            </div>
          </Link>
      </div>
      <table className="striped centered">
        <thead>
          <tr>
            <th><h5>Name</h5></th>
            <th><h5>Image</h5></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {players.map(player => {
            const {id, firstName, surName, knickName, favHand, favHeadsUp, leastFavHeadsUp, image} = player
            return <tr key={id} className='player'>
              <td><h5>{firstName} {surName}</h5></td>
              <td><img src={image} alt="" height="100" width="100"></img></td>
              <td>
                <Link to={`/players/player/${id}`}>
                  <div className="waves-effect waves-light btn">
                    View Player
                  </div>
                </Link>
              </td>
            </tr>
          })}
        </tbody>
      </table>
    </div>
  )
}
Players.defaultProps = {
  players: []
}
export default Players
