import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard/Dashboard";
import Redirect from "./pages/Redirect/Redirect";
import ThemeManager from "./components/ThemeManager/ThemeManager";
import NotFound from "./pages/NotFound/NotFound";
import ScreenSaverManager from "./components/ScreenSaver/ScreenSaverManager";

function App() {
  return (
    <div className="App" style={{ height: "100%" }}>
      <ThemeManager>
        <ScreenSaverManager>
          <Router>
            <Routes>
              <Route path="/" element={<Redirect />} />
              <Route path="dashboard/*" element={<Dashboard />} />
              {/* <Route path="screensaver/*" element={<ScreenSaver />} /> */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </ScreenSaverManager>
      </ThemeManager>
    </div>
  );
}

export default App;
