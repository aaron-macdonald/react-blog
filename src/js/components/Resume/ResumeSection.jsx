import React from 'react'

function ResumeSection (props) {
  const {resumeSection} = props
  return (
    <div className="">
      <div className='row'>
        <h1 className="col s12">{ resumeSection.heading }</h1>
        <h4 className="col s12">{ resumeSection.intro }</h4>
        <p className="col s12">{ resumeSection.content }</p>
      </div>
    </div>
  )
}

export default ResumeSection
