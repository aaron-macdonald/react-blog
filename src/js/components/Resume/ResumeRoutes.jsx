import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Resume from './Resume.jsx'
import { getResume } from '../../client-api'

class ResumeRoutes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      resume: [],
    }
  }

  async componentDidMount() {
    try {
      await this.fetchResume()
      this.setState({loaded: true})
    }
    catch (err) {
      this.setState({ errorMessage: err.message });
    }
  }

  async fetchResume () {
    try {
      const resume = await getResume();
      this.setState({ resume: resume });
    }
    catch (err) {
      this.setState({ errorMessage: err.message });
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
