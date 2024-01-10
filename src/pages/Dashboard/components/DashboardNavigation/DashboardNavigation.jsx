import React, { Component } from 'react'
import "./style.css"

export default class DashboardNavigation extends Component {
  render() {
    return (
      <div id="dashboard-navigation">
        <div id="dashboard-navigation-items">
          <button onClick={() => window.location.href = "/dashboard"} id="dashboard-navigation-item">
            Plattegrond
          </button>
          <button onClick={() => window.location.href = "/dashboard/onderhoud"} id="dashboard-navigation-item">
            Onderhoud
          </button>
          <button id="dashboard-navigation-item">
            Instellingen
          </button>
        </div>
      </div>
    )
  }
}
