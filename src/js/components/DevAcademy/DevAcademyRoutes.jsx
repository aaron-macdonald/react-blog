import React from 'react'
import {Route, Switch} from 'react-router-dom'

import DevAcademy from './DevAcademy.jsx'
import NavBar from '../Shared/NavBar.jsx'
import { getDevAcademy } from '../../client-api'

class DevAcademyRoutes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      devAcademy: [],
    }
  }
  async componentDidMount() {
    try {
      await this.fetchDevAcademy()
      this.setState({loaded: true})
    }
    catch (err) {
      this.setState({ errorMessage: err.message });
    }
  }

  async fetchDevAcademy () {
    try {
      const devAcademy = await getDevAcademy();
      this.setState({ devAcademy: devAcademy });
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
            navItems={this.state.devAcademy}
          />
        </div>
        <div className="col s12 m9 l10">
          <Switch>
            <Route exact path='/devacademy' render={ (props) =>
              <DevAcademy
                devAcademy={this.state.devAcademy}
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

export default DevAcademyRoutes
