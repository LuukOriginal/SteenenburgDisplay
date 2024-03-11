import React, { Component } from 'react'
import "./style.css"
import ProgressBar from './Components/ProgressBar.tsx';

export default class Room extends Component {
  state = {
    Progress: 50
  }
  updateValue(e) {
    this.setState({Progress: e.target.value});
  }
  render() {
    return (
      <div id="room-page">
        <div id="room-container-left">
          <div className='room-card'>
          <ProgressBar
            id="testprogress"
            radius={50}
            radiusOverwrite={100}
            progress={this.state.Progress}
            strokeWidth={10}
            strokeColor="#a0d468"
            strokeLinecap="round"
            trackStrokeWidth={10}
            cut={120}
            rotate={-210}
          >
            <div className="progress-text">
                <div>{this.state.Progress}%</div>
            </div>
          </ProgressBar>
          </div>
          <div className='room-card'>
            info 2
          </div>
        </div>
        <div id="room-container-center">
          center
        </div>
        <div id="room-container-right">
          <input type="range" min="1" max="100" value={this.state.Progress} className="slider" onChange={(e) => this.updateValue(e)}/>
          right
        </div>
      </div>
    )
  }
}
