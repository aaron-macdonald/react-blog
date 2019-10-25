import React from 'react'

function NavBar (props) {
  const {navItems} = props
  
  return (
    <ul>
      {navItems.map(navItem => {
        return (
          <li key={navItem.id}>{navItem.heading}</li>  
        )
      })}
    </ul>
  )
}

export default NavBar
