import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <nav className="blue-grey darken-1">
      <div className="nav-wrapper container">
        <div className="col">
          <Link to="/" className="brand-logo">Aaron Macdonald</Link>
        </div>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/blog">Blogs</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
