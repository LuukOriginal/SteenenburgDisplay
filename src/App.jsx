import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Redirect from "./pages/Redirect/Redirect";
import ThemeManager from "./components/ThemeManager/ThemeManager";

function App() {
  return (
    <div className="App">
      <ThemeManager>
        <Router>
          <Routes>
            <Route path="/" element={<Redirect />} />
            <Route path="dashboard/*" element={<Dashboard />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </Router>
      </ThemeManager>
    </div>
  );
}

export default App;
