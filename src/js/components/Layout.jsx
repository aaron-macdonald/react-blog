import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './Home.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import PlayerRoutes from './Players/PlayerRoutes.jsx'
import GameRoutes from './Games/GameRoutes.jsx'
import TableRoutes from './Table/TableRoutes.jsx'

function Layout() {
  return (
    <div className="layout">
      <div className="header">
        <Header />
      </div>
      <div className="container">
        <Switch>
          <Route
            exact
            path='/'
            render={() =>
              <Home />}
          />
          <Route
            path='/players'
            component={PlayerRoutes}
          />
          <Route
            path='/games'
            component={GameRoutes}
          />
          <Route
            path='/table'
            component={TableRoutes}
          />
        </Switch>
      </div>
      <div className="footer center">
        <Footer />
      </div>
    </div>
  )
}
export default Layout
