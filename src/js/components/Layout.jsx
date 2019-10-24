import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import HomeRoutes from './Home/HomeRoutes.jsx'
import AboutMeRoutes from './AboutMe/AboutMeRoutes.jsx'
import ResumeRoutes from './Resume/ResumeRoutes.jsx'
import DevAcademyRoutes from './DevAcademy/DevAcademyRoutes.jsx'

function Layout() {
  return (
    <div className="layout">
      <div className="header">
        <Header />
      </div>
      <div className="row">
        <div className="">
          <Switch>
            <Route
              exact path='/'
              component={HomeRoutes}
            />
            <Route
              path='/aboutme'
              component={AboutMeRoutes}
            />
            <Route
              path='/resume'
              component={ResumeRoutes}
            />
            <Route
              path='/devacademy'
              component={DevAcademyRoutes}
            />
          </Switch>
        </div>
      </div>

      <div className="footer center">
        <Footer />
      </div>
    </div>
  )
}
export default Layout
