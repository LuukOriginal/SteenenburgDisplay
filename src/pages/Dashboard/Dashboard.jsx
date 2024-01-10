import { Route, Routes } from 'react-router-dom'
import React, { Component } from 'react'
import DashboardNavigation from './components/DashboardNavigation/DashboardNavigation'

import "./style.css"

export default class Dashboard extends Component {
  render() {
    return (
      <div id="Dashboard">
        <div id="content">
          <Routes>
            <Route path="/" element={<div>plattegrond</div>}/>
            <Route path="onderhoud" element={<div>onderhoud</div>}/>
          </Routes>
        </div>
        <DashboardNavigation />
      </div>
    )
  }
}
