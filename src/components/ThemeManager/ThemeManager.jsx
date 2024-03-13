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

export default function ThemeManager({ children }) {
  const [mode, setMode] = React.useState(
    localStorage.getItem("theme") === "auto"
      ? "dark"
      : localStorage.getItem("theme") || "dark"
  );

  function StartAutoInterval() {
    return setInterval(() => {
      console.log("Looping!");
      const currentTime = new Date().getHours();
      if (currentTime >= 6 && currentTime <= 18) {
        setMode("light");
      } else {
        setMode("dark");
      }
    }, 1000);
  }

  const [autoInterval, setAutoInterval] = React.useState();

  useEffect(() => {
    if (localStorage.getItem("theme") === "auto") {
      setAutoInterval(StartAutoInterval());
    }
  }, []);

  const colorMode = {
    set: (mode) => {
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
