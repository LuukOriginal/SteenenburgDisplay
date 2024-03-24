import React from "react";

import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";

import { ColorModeContext } from "../../../../components/ThemeManager/ThemeManager";
import { ScreenSaverContext } from "../../../../components/ScreenSaver/ScreenSaverManager";
import { InputLabel, MenuItem, Select } from "@mui/material";

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
                label="Aan/Uit"
              />
              <FormControl sx={1} size="small" style={{ marginTop: "10px" }}>
                <InputLabel id="screen-time-out-label">
                  Time-out scherm
                </InputLabel>
                <Select
                  labelId="screen-time-out-label"
                  label="Time-out scherm"
                  disabled={!isScreenSaverEnabled}
                  value={screenSaverInterval}
                  onChange={(e) => {
                    setScreenSaverInterval(e.target.value);
                    screenSaveManager.setIdleTime(e.target.value);
                  }}
                >
                  <MenuItem value={30}>30 seconden</MenuItem>
                  <MenuItem value={1 * 60}>1 minuut</MenuItem>
                  <MenuItem value={5 * 60}>5 minuten</MenuItem>
                  <MenuItem value={10 * 60}>10 minuten</MenuItem>
                  <MenuItem value={30 * 60}>30 minuten</MenuItem>
                  <MenuItem value={60 * 60}>1 uur</MenuItem>
                </Select>
              </FormControl>
            </FormGroup>
          </Container>
        </Paper>
      </Container>
    </div>
  );
}
