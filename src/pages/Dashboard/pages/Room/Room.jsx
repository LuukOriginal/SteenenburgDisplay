import React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Slider from "@mui/material/Slider";
import CircularProgress from "../../components/CircularProgress/CircularProgress";

export default function Room() {
  const [temperature, setTemperature] = React.useState(50);
  const [reduction, setReduction] = React.useState(0.25);
  return (
    <div id="Room">
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <Slider
                defaultValue={50}
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
              <Slider
                defaultValue={50}
                value={reduction}
                min={0}
                max={1}
                step={0.01}
                color="secondary"
                onChange={(e) => setReduction(e.target.value)}
                aria-label="Default"
                valueLabelDisplay="auto"
              />
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <CircularProgress
                progress={temperature}
                reduction={reduction}
                // transitionTimingFunction="cubic-bezier(0.4, 0, 0.2, 1)"
                transitionDuration={0.3}
              />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              Hoi3
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
