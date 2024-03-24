import React from "react";
import { useParams } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Slider from "@mui/material/Slider";
import CircularProgress from "../../components/CircularProgress/CircularProgress";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export default function Room() {
  const [temperature, setTemperature] = React.useState(50);
  const [reduction, setReduction] = React.useState(0.25);
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "#c2c2c2",
    "&:hover": {
      backgroundColor: "#979797",
    },
  }));

  let { roomId } = useParams();

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

          <Grid item xs={12} md={8} lg={3}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Box
                display={"flex"}
                flexDirection={"column"}
                alignItems={"stretch"}
              >
                <Typography>
                  Lamp 1
                  <Button variant="contained" endIcon={<LightModeIcon />}>
                    Aan
                  </Button>
                </Typography>
              </Box>
              <Box>
                <ColorButton variant="contained" endIcon={<DarkModeIcon />}>
                  Uit
                </ColorButton>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8} lg={9}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Slider
                defaultValue={50}
                value={temperature}
                onChange={(e) => setTemperature(e.target.value)}
                aria-label="Default"
                valueLabelDisplay="auto"
                orientation="vertical"
                style={{ height: "200px" }}
              />
              temperatuur
            </Paper>
          </Grid>

          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography fontSize={22} align="center">
                  Kamerinfo:
                </Typography>
              </Box>

              <Box>Kamernummer: {roomId}</Box>

              <Box>Kamertype: Luxe kamer</Box>

              <Box>Slot: Op slot</Box>

              <Box>Schoongemaakt in de afgelopen 6 uur: ja</Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="body1" gutterBottom>
                Energie verbruik in watt (Per uur)
              </Typography>
              <Box
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "4px 8px",
                  marginTop: "8px",
                }}
              >
                1312W
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              Luchtvochtigheid
              <Box
                sx={{
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  padding: "4px 8px",
                  marginTop: "8px",
                }}
              >
                0%
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
