import React from 'react'

function Resume (props) {
  const {section} = props
  return (
    <div className="">
      <div className='row'>
        <h1 className="col s12">{ section.heading }</h1>
        <h4 className="col s12">{ section.intro }</h4>
        <p className="col s12">{ section.content }</p>
      </div>
    </div>
  )
}

export default Resume
