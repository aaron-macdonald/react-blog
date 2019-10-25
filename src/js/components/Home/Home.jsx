import React from 'react'

import HomeSection from './HomeSection.jsx'

function Home (props) {
  const {home} = props
  
  return (
    home.map(homeSection => {
      return (
        <div key={homeSection.id}>
          <HomeSection homeSection={homeSection} />
        </div>
      )
    })
  )
}

export default Home
