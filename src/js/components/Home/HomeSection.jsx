import React from 'react'

function HomeSection (props) {
  const {homeSection} = props
  return (
    <div className="">
      <div className='row'>
        <h1 className="col s12">{ homeSection.heading }</h1>
        <h4 className="col s12">{ homeSection.intro }</h4>
        <p className="col s12">{ homeSection.content }</p>
      </div>
    </div>
  )
}

export default HomeSection
