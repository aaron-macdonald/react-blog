import React from 'react'

function DevAcademySection (props) {
  const {devAcademySection} = props
  return (
    <div className="">
      <div className='row'>
        <h1 className="col s12">{ devAcademySection.heading }</h1>
        <h4 className="col s12">{ devAcademySection.intro }</h4>
        <p className="col s12">{ devAcademySection.content }</p>
      </div>
    </div>
  )
}

export default DevAcademySection
