import React from "react";
import "./style.css";

import { ColorModeContext } from "..//ThemeManager/ThemeManager";

import Logo from "../../assets/images/logo.svg";
import LogoLight from "../../assets/images/logo-light.svg";

export default function LogoTopBar() {
  const colorMode = React.useContext(ColorModeContext);
  const theme = colorMode.get();
  return (
    <div id="topbar-logo-container">
      <img
        id="topbar-logo"
        src={theme === "light" ? LogoLight : Logo}
        alt="logo"
      />
    </div>
  );
}
