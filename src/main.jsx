import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory, IndexRedirect } from 'react-router'
import Home from './views/Home'


import './main.scss'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
    </Route>
  </Router>,
  document.getElementById('root')
);
