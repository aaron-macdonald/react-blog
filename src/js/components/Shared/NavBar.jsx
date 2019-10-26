import React from 'react'
import { Link } from 'react-router-dom'

function NavBar (props) {
  const {navItems} = props
  
  return (
    <ul>
      {navItems.map(navItem => {
        return (
          <li key={navItem.id}><Link to={navItem.url}>{navItem.url}</Link></li>  
        )
      })}
    </ul>
  )
}

export default NavBar
