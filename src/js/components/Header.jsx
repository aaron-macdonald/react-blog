import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <div className="navbar-fixed">
      <nav className="teal">
        <div className="nav-wrapper">
          {/* <Link to="/" className="brand-logo">Ziggys Poker</Link> */}
          <div className="brand-logo">Ziggys Poker</div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {/* <li><Link to="/players">Players</Link></li>
            <li><Link to="/games">Games</Link></li>
            <li><Link to="/table">Table</Link></li> */}
            <li>Players</li>
            <li>Games</li>
            <li>Table</li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Header
