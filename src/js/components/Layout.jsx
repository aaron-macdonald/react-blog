import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './Home.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import BlogRoutes from './Blog/BlogRoutes.jsx'
import ResumeRoutes from './Resume/ResumeRoutes.jsx'

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
              exact
              path='/'
              render={() =>
                <Home />}
            />
            <Route
              path='/blog'
              component={BlogRoutes}
            />
            <Route
              path='/resume'
              component={ResumeRoutes}
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
