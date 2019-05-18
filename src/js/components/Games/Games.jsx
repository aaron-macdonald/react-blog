import React from 'react'
import { Link } from 'react-router-dom'

function Games (props) {
  const { games } = props
  return (
    <div className='games'>
      <div className='row valign-wrapper'>
        <h4 className='col s12'>Games</h4>
      </div>
      <table className="striped centered">
        <thead>
          <tr>
            <th><h5>Game Id</h5></th>
            <th><h5>Date</h5></th>
            <th><h5>Location</h5></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {games.map(game => {
            const {id, date, location} = game
            return <tr key={id}>
              <td><h5>{id}</h5></td>
              <td><h5>{date}</h5></td>
              <td><h5>{location}</h5></td>
                <td>
                  <Link to={`/games/game/${id}`}>
                    <div className="waves-effect waves-light btn">
                      View Game
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
export default Games
