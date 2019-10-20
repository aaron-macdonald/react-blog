import React from 'react'

function Footer (props) {
  const {copyright, author} = {
    copyright: '2017-2019',
    author: 'A. D. Macdonald'
  }
  return (
    <div className='footer'>
      <div>&copy; {copyright}</div>
      <div>{author}</div>
    </div>
  )
}

export default Footer
