import React from 'react'

import AboutMeSection from './AboutMeSection.jsx'

function AboutMe (props) {
  const {aboutMe} = props
  
  return (
    aboutMe.map(aboutMeSection => {
      return (
        <div className="container" key={aboutMeSection.id}>
          <AboutMeSection aboutMeSection={aboutMeSection} />
        </div>
      )
    })
  )
}

export default AboutMe
