import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './Home.jsx'
import NavBar from '../Shared/NavBar.jsx'
import { getHome } from '../../client-api'

class HomeRoutes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      home: [],
    }
  }

  async componentDidMount() {
    try {
      await this.fetchHome()
      this.setState({loaded: true})
    }
    catch (err) {
      this.setState({ errorMessage: err.message });
    }
  }

  async fetchHome () {
    try {
      const home = await getHome();
      this.setState({ home: home });
    }
    catch (err) {
      this.setState({ errorMessage: err.message });
    }
  }

  render () {
    return (
      <div className="row">  
        <div className="col s12 m3 l2">
          <NavBar 
            navItems={this.state.home}
          />
        </div>
        <div className="col s12 m9 l10">
          <Switch>
            <Route exact path='/' render={ (props) =>
              <Home
                home={this.state.home}
                {...props}
              />
            }/>
          </Switch>
          {this.state.errorMessage &&
            <h1>{this.state.errorMessage}</h1>}
        </div>
      </div>
    )
  }
}

export default HomeRoutes
