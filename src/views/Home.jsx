import React, { Component } from 'react'
import LeftNav from './LeftNav' 

import './Home.scss'

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
      <LeftNav />
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}
