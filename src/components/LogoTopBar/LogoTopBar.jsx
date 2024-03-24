import React from "react";
import "./style.css";

import { ColorModeContext } from "..//ThemeManager/ThemeManager";

import Logo from "../../assets/images/logo.svg";
import LogoLight from "../../assets/images/logo-light.svg";

export default function LogoTopBar(props) {
  const colorMode = React.useContext(ColorModeContext);
  const theme = props.theme || colorMode.get();
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
