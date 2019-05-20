import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Games from './Games.jsx'
import Game from './Game.jsx'
import { getGames } from '../../client-api'
import { getGameData } from '../../client-api'



class GameRoutes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      games: [],
      gamedata: [],
      errorMessage: ''
    }
    this.fetchGames = this.fetchGames.bind(this)
    this.fetchGameData = this.fetchGameData.bind(this)
  }
  componentWillMount() {
    this.fetchGames()
  }
  fetchGames() {
    return getGames()
      .then(games => {
        this.setState({ games: games })
      })
      .catch(err => {
        this.setState({ errorMessage: err.message })
      })
  }
  fetchGameData(id) {
    return getGameData(id)
      .then(gamedata => {
        this.setState({ gamedata: gamedata })
      })
      .catch(err => {
        this.setState({ errorMessage: err.message })
      })
  }
  render() {
    return (
      <div className="game-routes">
        <Switch>
          <Route exact path='/games' render={ props =>
            <Games
              games={this.state.games}
                {...props}
            />
          }/>
          <Route exact path='/games/game/:id' render={ props =>
            <Game
              game={this.state.games.find(game =>
                game.id === Number(props.match.params.id))}
              fetchGameData={this.fetchGameData}
              gamedata={this.state.gamedata.filter(gdata =>
                gdata.game_id === Number(props.match.params.id))}
                {...props}
            />
          }/>
        </Switch>
        {this.state.errorMessage &&
          <h1>{this.state.errorMessage}</h1>}
      </div>
    )
  }
}
export default GameRoutes
