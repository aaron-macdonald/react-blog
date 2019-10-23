import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Resume from './Resume.jsx'

class ResumeRoutes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      resume: [],
    }
  }

  render () {
    return (
      <div className="resume-routes">
        <Switch>
          <Route exact path='/resume' render={ (props) =>
             <Resume
               resume={this.state.resume}
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

export default ResumeRoutes
