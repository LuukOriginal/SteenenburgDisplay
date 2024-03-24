import React from "react";
import { useParams } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Slider from "@mui/material/Slider";
import CircularProgress from "../../components/CircularProgress/CircularProgress";
import Box from "@mui/material/Box";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import Typography from "@mui/material/Typography";
import { Button, Stack } from "@mui/material";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import TvIcon from "@mui/icons-material/Tv";
import DeviceButton from "./components/DeviceButton/DeviceButton";
import ThermostatIcon from "@mui/icons-material/Thermostat";
export default function Room() {
  const [temperature, setTemperature] = React.useState(50);
  const [airHumidity, setAirHumidity] = React.useState(40);

  let { roomId } = useParams();

  const apparaten = [
    {
      title: "Lampen",
      devices: [
        {
          name: "Slaapkamer lampen",
          icon: <LightbulbIcon />,
          enabled: true,
        },
        {
          name: "Badkamer lampen",
          icon: <LightbulbIcon />,
          enabled: false,
        },
        {
          name: "Nachtlampen",
          icon: <LightbulbIcon />,
          enabled: true,
        },
        {
          name: "Sfeerlampen",
          icon: <LightbulbIcon />,
          enabled: false,
        },
      ],
    },
    {
      title: "Tv's",
      devices: [
        {
          name: "Tv 1",
          icon: <TvIcon />,
        },
      ],
    },
  ];

  return (
    <div id="Room">
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={4}>
            <Paper
              style={{
                overflow: "hidden",
              }}
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: "calc(95vh - 150px)",
                // height: 700,
              }}
            >
              <Box display={"flex"} alignItems={"center"}>
                <Typography variant="h6" ml={1}>
                  Meldingen
                </Typography>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={4}>
            <Paper
              style={{
                overflow: "hidden",
              }}
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: "calc(95vh - 150px)",
                // height: 700,
              }}
            >
              <Box display={"flex"} alignItems={"center"}>
                <DevicesOtherIcon />
                <Typography variant="h6" ml={1}>
                  Apparaten
                </Typography>
              </Box>
              <Stack spacing={1} p={1}>
                {apparaten.map((category, i) => (
                  <Paper elevation={4} sx={{ p: 1 }}>
                    <Typography variant="subtitle1">
                      {category.title}
                    </Typography>
                    <Grid container spacing={1}>
                      {category.devices.map((device, i) => (
                        <Grid item xs={12} md={4} lg={4}>
                          <DeviceButton device={device} />
                        </Grid>
                      ))}
                    </Grid>
                  </Paper>
                ))}
              </Stack>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: "calc(47.5vh - 75px - 12px)",
              }}
            >
              <Box display={"flex"} alignItems={"center"}>
                <ThermostatIcon />
                <Typography variant="h6" ml={1}>
                  Klimaat
                </Typography>
              </Box>
              <Stack spacing={1} p={1}>
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography variant="body1">Temperatuur</Typography>
                  <Typography variant="body1">{temperature}°C</Typography>
                </Box>
                <Slider
                  value={temperature}
                  color="success"
                  onChange={(event, newValue) => {
                    setTemperature(newValue);
                  }}
                  min={2}
                  max={34}
                  aria-label="Temperature"
                  valueLabelDisplay="auto"
                />
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Typography variant="body1">Luchtvochtigheid</Typography>
                  <Typography variant="body1">{airHumidity}%</Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
