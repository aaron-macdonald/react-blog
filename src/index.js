import "@babel/polyfill";
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'

import Layout from "./js/components/Layout.jsx"

const placeToMount = document.getElementById('root')

ReactDOM.render(
  <Router>
    <Layout />
  </Router>,
  placeToMount
)
