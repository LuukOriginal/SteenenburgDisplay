import React, { Component } from 'react'
import "./style.css"

export default class Room extends Component {
  render() {
    return (
      <div id="room-page">
        <div id="room-container-left">
          <div className='room-card'>
            info 1
          </div>
          <div className='room-card'>
            info 2
          </div>
        </div>
        <div id="room-container-center">
          center
        </div>
        <div id="room-container-right">
          right
        </div>
      </div>
    )
  }
}
