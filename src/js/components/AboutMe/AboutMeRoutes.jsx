import React from 'react'
import {Route, Switch} from 'react-router-dom'

import AboutMe from './AboutMe.jsx'
import NavBar from '../Shared/NavBar.jsx'
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
      <div className="row">  
        <div className="col s12 m3 l2">
          <NavBar 
            navItems={this.state.aboutMe}
          />
        </div>
        <div className="col s12 m9 l10">
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
      </div>
    )
  }
}

export default AboutMeRoutes
