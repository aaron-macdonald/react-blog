import React from 'react'

import ResumeSection from './ResumeSection.jsx'

function Resume (props) {
  const {resume} = props
  
  return (
    resume.map(resumeSection => {
      return (
        <div key={resumeSection.id}>
          <ResumeSection resumeSection={resumeSection} />
        </div>
      )
    })
  )
}

export default Resume
