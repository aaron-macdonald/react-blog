import React from 'react'
import ReactDOM from "react-dom";
import {Route, Switch} from 'react-router-dom'

import Header from './Header.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'

function Layout() {
  return (
    <div className="layout">  
      <div className="header">
        <Header />
      </div>
      <div className="home">
        <Home />
      </div>

      <div className="footer center">
        <Footer />
      </div>
    </div>
  )
}

export default Layout