import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
import Room from "./pages/Room/Room";
import Settings from "./pages/Settings/Settings";
import Maintenance from "./pages/Maintenance/Maintenance";
import ProgressTestRemove from "./pages/progressTestREMOVE/REMOVE";
import NotFound from "../NotFound/NotFound";
import Cameras from "./pages/Cameras/Cameras";
import LogoTopBar from "../../components/LogoTopBar/LogoTopBar";
import Map from "./pages/Map/Map";

export default function Dashboard() {
  return (
    <div id="Dashboard">
      <LogoTopBar />
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="room/:roomId" element={<Room />} />
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
