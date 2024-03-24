import React, { useEffect } from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export const ColorModeContext = React.createContext({
  set: () => {},
  get: () => {},
});

if (localStorage.getItem("theme") === null) {
  localStorage.setItem("theme", "dark");
}

function GetAutoTheme() {
  console.log("getting auto  theme");
  const currentTime = new Date().getHours();
  if (currentTime >= 6 && currentTime < 18) {
    return "light";
  } else {
    return "dark";
  }
}

export default function ThemeManager({ children }) {
  const [mode, setMode] = React.useState(
    localStorage.getItem("theme") === "auto"
      ? GetAutoTheme()
      : localStorage.getItem("theme") || "dark"
  );

  const [autoInterval, setAutoInterval] = React.useState();

  function StartAutoInterval() {
    return setInterval(() => {
      console.log("changing theme");
      setMode(GetAutoTheme());
    }, 1000);
  }

  useEffect(() => {
    if (localStorage.getItem("theme") === "auto") {
      setAutoInterval(StartAutoInterval());
    }
  }, []);

  const colorMode = {
    set: (mode) => {
      console.log(mode);
      switch (mode) {
        case "dark" || "light":
          clearInterval(autoInterval);
          setMode(mode);
          break;
        case "auto":
          if (autoInterval) {
            clearInterval(autoInterval);
          }
          setAutoInterval(StartAutoInterval());
          break;
        default:
          clearInterval(autoInterval);
          setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
          break;
      }
      localStorage.setItem("theme", mode);
    },
    get: () => {
      return mode;
    },

    getIsAuto: () => {
      return autoInterval !== undefined;
    },
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
