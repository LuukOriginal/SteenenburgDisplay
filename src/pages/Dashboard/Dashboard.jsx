import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import Room from "./pages/Room/Room";
import Settings from "./pages/Settings/Settings";
import Maintenance from "./pages/Maintenance/Maintenance";
import ProgressTestRemove from "./pages/progressTestREMOVE/REMOVE";
import NotFound from "../NotFound/NotFound";
import Cameras from "./pages/Cameras/Cameras";

export default function Dashboard() {
  return (
    <div id="Dashboard">
      <Routes>
        <Route path="/" element={<Link to="room">Room test</Link>} />
        <Route path="room" element={<Room />} />
        <Route path="maintenance" element={<Maintenance />} />
        <Route path="settings" element={<Settings />} />
        <Route path="testprogress" element={<ProgressTestRemove />} />
        <Route path="cameras" element={<Cameras />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <BottomNavbar />
    </div>
  );
}
