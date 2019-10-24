import React from 'react'
import {Route, Switch} from 'react-router-dom'

import DevAcademy from './DevAcademy.jsx'
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
      <div className="devacademy-routes">
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
    )
  }
}

export default DevAcademyRoutes
