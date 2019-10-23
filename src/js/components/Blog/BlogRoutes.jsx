import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Blogs from './Blog.jsx'

class BlogRoutes extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      blog: [],
    }
  }

  render () {
    return (
      <div className="blog-routes">
        <Switch>
          <Route exact path='/blog' render={ (props) =>
             <Blogs
               blog={this.state.blog}
               {...props}
             />
          }/>
        </Switch>
        {this.state.errorMessage &&
          <h1>{this.state.errorMessage}</h1>}
      </div>
    )
  }
}

export default BlogRoutes
