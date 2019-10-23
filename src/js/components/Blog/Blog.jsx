import React from 'react'

function Blog (props) {
  const blogs = props.blogs
  
  return (
    <div className="container">
      <div className='row'>
        <h1 className="col s12">Blog</h1>
        <h4 className="col s12">First Blog</h4>
      </div>
    </div>
  )
}

export default Blog
