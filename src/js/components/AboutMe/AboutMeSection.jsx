import React from 'react'

function AboutMeSection (props) {
  const {aboutMeSection} = props
  return (
    <div className="">
      <div className='row'>
        <h1 className="col s12">{ aboutMeSection.heading }</h1>
        <h4 className="col s12">{ aboutMeSection.intro }</h4>
        <p className="col s12">{ aboutMeSection.content }</p>
      </div>
    </div>
  )
}

export default AboutMeSection
