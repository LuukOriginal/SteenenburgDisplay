import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'
import Home from './pages/Home/Home'
import NotFound from './pages/Home/NotFound'

import React, { Component } from 'react'

export default class App extends Component {
  componentDidMount() {
    const theme = localStorage.getItem('theme') || 'dark';

    switch (theme) {
      case "light":
          document.documentElement.className = "theme-light";
          break;
      case "dark":
          document.documentElement.className = "theme-dark";
          break;
      case "automatic":
          
          break;
      default:
          break;
  }
  }
  render() {
    return (
      <div id="App">
        <Router>
          <Routes>
            <Route 
              path="/" 
              element={<Home />} 
            />
            <Route
              path="dashboard/*"
              element={<Dashboard />}
            />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    )
  }
}