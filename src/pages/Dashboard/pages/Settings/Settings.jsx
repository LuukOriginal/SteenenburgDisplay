import React from "react";

import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";

import { ColorModeContext } from "../../../../components/ThemeManager/ThemeManager";

export default function Settings() {
  const colorMode = React.useContext(ColorModeContext);

  const isAuto = colorMode.getIsAuto();
  const [alignment, setAlignment] = React.useState(
    isAuto ? "auto" : colorMode.get()
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

              <Typography variant="h6">Other</Typography>
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Label"
              />
              <FormControlLabel
                control={<Switch defaultChecked />}
                label="Label"
              />
            </FormGroup>
          </Container>
        </Paper>
      </Container>
    </div>
  );
}
