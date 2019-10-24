import React from 'react'
import {Route, Switch} from 'react-router-dom'

import AboutMe from './AboutMe.jsx'
import { getAboutMe } from '../../client-api'

class AboutMeRoutes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      aboutMe: [],
    }
  }

  async componentDidMount() {
    try {
      await this.fetchAboutMe()
      this.setState({loaded: true})
    }
    catch (err) {
      this.setState({ errorMessage: err.message });
    }
  }

  async fetchAboutMe () {
    try {
      const aboutMe = await getAboutMe();
      this.setState({ aboutMe: aboutMe });
    }
    catch (err) {
      this.setState({ errorMessage: err.message });
    }
  }

  render () {
    return (
      <div className="aboutme-routes">
        <Switch>
          <Route exact path='/aboutme' render={ (props) =>
             <AboutMe
               aboutMe={this.state.aboutMe}
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

export default AboutMeRoutes
