import { Route, Routes } from 'react-router-dom'
import React, { Component } from 'react'
import DashboardNavigation from './components/DashboardNavigation/DashboardNavigation'

import "./style.css"
import Map from './pages/Map/Map'
import Room from './pages/Room/Room'

export default class Dashboard extends Component {
  render() {
    return (
      <div id="Dashboard">
        <div id="content">
          <Routes>
            {/* <Route path="/" element={<Map />}/> */}
            <Route path="/" element={<a href='dashboard/room'>Room test</a>}/>
            <Route path="room" element={<Room/>}/>
            <Route path="onderhoud" element={<div>onderhoud</div>}/>
          </Routes>
        </div>
        <DashboardNavigation />
      </div>
    )
  }
}
