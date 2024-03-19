import React from "react";

import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { ColorModeContext } from "../../../../components/ThemeManager/ThemeManager";
import { ScreenSaverContext } from "../../../../components/ScreenSaver/ScreenSaverManager";

export default function Settings() {
  const colorMode = React.useContext(ColorModeContext);
  const screenSaveManager = React.useContext(ScreenSaverContext);

  const isAuto = colorMode.getIsAuto();
  const [alignment, setAlignment] = React.useState(
    isAuto ? "auto" : colorMode.get()
  );

  const [isScreenSaverEnabled, setIsScreenSaverEnabled] = React.useState(
    screenSaveManager.getEnabled()
  );

  const [screenSaverInterval, setScreenSaverInterval] = React.useState(
    screenSaveManager.getIdleTime()
  );

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      colorMode.set(newAlignment);
    }
  };

  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4, py: 3 }}>
            <Typography variant="h4">Settings</Typography>
            <FormGroup>
              <Typography variant="h6">Theme</Typography>
              <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
                aria-label="Theme"
                size="small"
              >
                <ToggleButton value="dark">Dark</ToggleButton>
                <ToggleButton value="light">Light</ToggleButton>
                <ToggleButton value="auto">Auto</ToggleButton>
              </ToggleButtonGroup>

              <Typography variant="h6">Screensaver</Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={isScreenSaverEnabled}
                    onChange={(e) => {
                      setIsScreenSaverEnabled(e.target.checked);
                      screenSaveManager.setEnabled(e.target.checked);
                    }}
                  />
                }
                label="Label"
              />
              <FormControlLabel
                control={
                  <TextField
                    type="number"
                    variant="standard"
                    value={screenSaverInterval}
                    onBlur={(e) => {
                      const value = parseInt(
                        screenSaverInterval.replaceAll(" ", "")
                      );
                      if (isNaN(value) || screenSaverInterval < 1)
                        setScreenSaverInterval(1);

                      console.log("Setting screensaver to " + value);

                      screenSaveManager.setIdleTime(value);
                    }}
                    onChange={(e) => {
                      // let value = parseInt(e.target.value);
                      // if (isNaN(value) && e.target.value.trim() !== "") return;
                      const pattern = /^(|\d+)$/;
                      const valid = e.target.value
                        .replaceAll(" ", "") //todo prevent e, E, -, + etc
                        .match(pattern);
                      if (!valid) {
                        e.preventDefault();
                        return;
                      }

                      console.log(e.target.value);

                      setScreenSaverInterval(e.target.value);
                    }}
                    disabled={!isScreenSaverEnabled} //TODO, add  checking on input, and set the actual value in the manager
                  />
                }
                label="Idle time (Minutes)"
              />
            </FormGroup>
          </Container>
        </Paper>
      </Container>
    </div>
  );
}
