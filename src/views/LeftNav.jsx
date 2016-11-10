import React, { Component } from 'react'

import './LeftNav.scss'

export default class LeftNav extends Component { 

  render() { 
    return (
            <nav> 
                <div className="left-nav"> 
                    <img className="logo" alt="TMDB Frontend" href="#" />
                    <ul>
                        <li>First</li>
                        <li>Second</li> 
                    </ul>
                </div>
            </nav>
        )
    }
}
