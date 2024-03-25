import React from "react";
import { useParams } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import DevicesOtherIcon from "@mui/icons-material/DevicesOther";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import TvIcon from "@mui/icons-material/Tv";
import DeviceButton from "./components/DeviceButton/DeviceButton";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import InfoIcon from "@mui/icons-material/Info";
export default function Room() {
  let { roomId } = useParams();

  const roomData = {
    id: roomId,
    name: "Kamer " + roomId,
    floor: 3,

    size: 18,
    bedCount: 2,
    roomCount: 1,

    temperature: 18,
    airHumidity: 35,
    devices: [
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
    ],
  };

  const guestData = {
    name: "Jeroen Janssen",
    phone: "06-12345678",
    email: "jeroenjanssen@example.com",

    peopleCount: 2,

    arrivalDate: "2022-05-01",
    departureDate: "2022-05-02",
    arrivalTime: "08:00",
    departureTime: "12:00",
  };

  function infoValue(name, value) {
    return (
      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography variant="body1" ml={1}>
          {name}:
        </Typography>
        <Typography variant="body1" ml={1}>
          {value}
        </Typography>
      </Box>
    );
  }

  const [temperature, setTemperature] = React.useState(roomData.temperature);
  const [airHumidity, setAirHumidity] = React.useState(roomData.airHumidity);
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
                <InfoIcon />
                <Typography variant="h6" ml={1}>
                  Informatie
                </Typography>
              </Box>

              <Stack spacing={1} p={1}>
                <Paper elevation={4} sx={{ p: 1 }}>
                  <Typography variant="subtitle2" ml={1}>
                    kamer
                  </Typography>
                  {infoValue("Naam", roomData.name)}
                  {infoValue("Verdieping", roomData.floor)}

                  {infoValue("Aantal kamers", roomData.roomCount)}
                  {infoValue("Aantal bedden", roomData.bedCount)}
                  {infoValue("Oppervlakte", roomData.size + "m²")}
                </Paper>
                <Paper elevation={4} sx={{ p: 1 }}>
                  <Typography variant="subtitle2" ml={1}>
                    Gasten
                  </Typography>
                  {infoValue("Naam", guestData.name)}
                  {infoValue("Telfoon", guestData.phone)}

                  {infoValue("Aantal personen", guestData.peopleCount)}

                  {infoValue(
                    "Aankomst",
                    `${guestData.arrivalDate} ${guestData.arrivalTime}`
                  )}
                  {infoValue(
                    "Vertrek",
                    `${guestData.departureDate} ${guestData.departureTime}`
                  )}
                </Paper>
              </Stack>
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
                {roomData.devices.map((category, i) => (
                  <Paper key={i} elevation={4} sx={{ p: 1 }}>
                    <Typography variant="subtitle1">
                      {category.title}
                    </Typography>
                    <Grid container spacing={1}>
                      {category.devices.map((device, i) => (
                        <Grid key={i} item xs={12} md={4} lg={4}>
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
