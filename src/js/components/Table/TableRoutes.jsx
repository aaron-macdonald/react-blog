import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Table from './Table.jsx'
import { getTableData } from '../../client-api'
import { getPlayers } from '../../client-api'

class TableRoutes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      players: [],
      table: [],
      loaded: false,
      errorMessage: ''
    }
  }

  async componentDidMount() {
    try {
      await this.fetchPlayers()
      await this.fetchTable()
      this.setState({loaded: true})
    }
    catch (err) {
      this.setState({ errorMessage: err.message });
    }
  }

  async fetchPlayers () {
    try {
      const players = await getPlayers();
      this.setState({ players: players });
    }
    catch (err) {
      this.setState({ errorMessage: err.message });
    }
  }
  
  async fetchTable() {
    try {
      const table = await getTableData();
      this.setState({ table: table });
    }
    catch (err) {
      this.setState({ errorMessage: err.message });
    }
  }

  render() {
    const {table, players} = this.state
    const playerResults = players.map(player => {
// console.log('player: ', player)
      return table.filter(result => {
        return result.player_id === player.id
      })
    })
    const playerTable = playerResults.map(individualGameResults => {
      let 
        knickName = "",
        playerSummary = {},
        played = 0,
        buyin = 0,
        rebuys = 0,
        addons = 0,
        prizeMoney = 0
      
      individualGameResults.map(game => {
        knickName = game.knickName
        played = played + 1
        buyin = buyin + game.buyin
        rebuys = rebuys + game.rebuys
        addons = addons + game.addons
        prizeMoney = prizeMoney + game.prizemoney
      })
      
      let profitLoss = prizeMoney - buyin - rebuys - addons
      
      playerSummary = {
        knickName, played, buyin, rebuys, addons, prizeMoney, profitLoss
      }
      return playerSummary
    })

    if(!this.state.loaded) {
      return <div>Error</div>
    }else{
      return (
        <div className="table-routes">
          <Switch>
            <Route 
              path='/table'
              exact
              render={ () =>
                <Table playerTable={playerTable}
              />
            }/>
          </Switch>
          {this.state.errorMessage &&
            <h1>{this.state.errorMessage}</h1>}
        </div>
      )
    }

  }
}
export default TableRoutes


