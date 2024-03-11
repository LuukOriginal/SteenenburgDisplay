import { Link, Route, Routes } from 'react-router-dom'
import React, { Component } from 'react'
import DashboardNavigation from './components/DashboardNavigation/DashboardNavigation'

import "./style.css"
import Map from './pages/Map/Map'
import Room from './pages/Room/Room'
import Settings from './pages/Settings/Settings'

export default class Dashboard extends Component {
  render() {
    return (
      <div id="Dashboard">
        <div id="content">
          <Routes>
            {/* <Route path="/" element={<Map />}/> */}
            <Route path="/" element={<Link to="room">Room test</Link>}/>
            <Route path="room" element={<Room/>}/>
            <Route path="onderhoud" element={<div>onderhoud</div>}/>
            <Route path="instellingen" element={<Settings/>}/>
          </Routes>
        </div>
        <DashboardNavigation />
      </div>
    )
  }
}
