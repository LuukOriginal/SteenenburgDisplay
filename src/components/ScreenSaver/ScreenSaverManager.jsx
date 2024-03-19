import React, { useEffect } from "react";
import ScreenSaver from "./ScreenSaver";

export const ScreenSaverContext = React.createContext({
  setEnabled: (enabled) => {},
  getEnabled: () => {},

  setIdleTime: (minutes) => {},
  getIdleTime: () => {},

  setOpen: (open) => {},
  getOpen: () => {},
});

if (localStorage.getItem("screenSaverEnabled") === null) {
  localStorage.setItem("screenSaverEnabled", true);
}

if (localStorage.getItem("screenSaverIdleTime") === null) {
  localStorage.setItem("screenSaverIdleTime", 1);
}

export default function ScreenSaverManager({ children }) {
  const [screenSaverEnabled, setScreenSaverEnabled] = React.useState(
    localStorage.getItem("screenSaverEnabled") === "true"
  );

  const screenIdleInteger = parseInt(
    localStorage.getItem("screenSaverIdleTime")
  );

  const [screenSaverIdleTime, setScreenSaverIdleTime] = React.useState(
    isNaN(screenIdleInteger) ? 1 : screenIdleInteger
  );

  const [screenSaverOpen, setScreenSaverOpen] = React.useState(false);

  useEffect(() => {
    var idleCounter = 0; //time in seconds

    function resetCounter() {
      idleCounter = 0;
    }

    window.onmousemove = resetCounter;
    window.onmousedown = resetCounter;
    window.ontouchstart = resetCounter;
    window.ontouchmove = resetCounter;
    window.ontouchend = resetCounter;
    window.onkeydown = resetCounter;
    window.onkeyup = resetCounter;

    const idleInterval = setInterval(() => {
      idleCounter += 1;
      if (idleCounter >= screenSaverIdleTime * 60 && screenSaverEnabled) {
        console.log(idleCounter + "/" + screenSaverIdleTime);
        setScreenSaverOpen(true);
      } else {
        setScreenSaverOpen(false);
      }
    }, 1000);

    return () => clearInterval(idleInterval);
  }, [screenSaverEnabled, screenSaverIdleTime]);

  const ScreenSaverSetter = {
    setEnabled: (enabled) => {
      setScreenSaverEnabled(enabled);
      localStorage.setItem("screenSaverEnabled", enabled);
    },
    getEnabled: () => {
      return screenSaverEnabled;
    },

    setIdleTime: (minutes) => {
      setScreenSaverIdleTime(minutes);

      localStorage.setItem("screenSaverIdleTime", minutes);
    },
    getIdleTime: () => {
      return screenSaverIdleTime;
    },

    setOpen: (open) => {
      setScreenSaverOpen(open);
    },
    getOpen: () => {
      return screenSaverOpen;
    },
  };

  return (
    <ScreenSaverContext.Provider value={ScreenSaverSetter}>
      {screenSaverOpen && <ScreenSaver />}
      {children}
    </ScreenSaverContext.Provider>
  );
}
