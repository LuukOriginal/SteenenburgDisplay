import React, { useContext } from "react";

import WarningImage from "./assets/images/warning.png";
import InfoImage from "./assets/images/info.png";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemButton from "@mui/material/ListItemButton";
import Button from "@mui/material/Button";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SpeedIcon from "@mui/icons-material/Speed";
import Performance from "./components/Performance/Performance";
import { Popupcontext } from "../../../../components/PopupMessage/PopupManager";
const messages = [
  {
    id: 1,
    primary: "Rookmelder",
    secondary:
      "De rookmelder in kamer 5 heeft een lege batterij, deze moet vervangen worden",
    person: WarningImage,
  },
  {
    id: 2,
    primary: "Apparaat toegevoegd",
    secondary:
      "Er is een nieuw apparaat toegevoegd aan de kamer 2: Philips HUE - Lamp3",
    person: InfoImage,
  },
];

export default function Maintenance() {
  const Popup = useContext(Popupcontext);
  return (
    <div id="Maintenance">
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={4}>
            <Stack spacing={3} display="flex">
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  // height: 337.5,
                  height: "calc(47.5vh - 75px - 12px)",
                  overflow: "hidden",
                }}
              >
                <Box display={"flex"} alignItems={"center"}>
                  <ErrorOutlineIcon />
                  <Typography variant="h6" ml={1}>
                    Log
                  </Typography>
                </Box>
                <Paper
                  elevation={4}
                  sx={{ p: 2, height: "100%", overflowY: "scroll" }}
                >
                  08:15:03 Living Room Motion Sensor: Motion detected in Couch
                  Area. <br />
                  08:20:17 Kitchen Light Switch: Light turned on. <br />
                  08:22:34 Kitchen Dimmer Switch: Brightness adjusted to 50%.{" "}
                  <br />
                  08:31:12 Main Thermostat: Temperature reached target of 22°C.{" "}
                  <br />
                  09:00:02 Bedroom Door Lock: Unlocked by John Doe (Pin code).{" "}
                  <br />
                  10:15:43 Smoke Detector (Kitchen): Low battery detected.{" "}
                  <br />
                  12:30:17 Front Door Lock: Attempted entry with invalid code.{" "}
                  <br />
                  12:30:18 Front Door Lock: Sent security alert to phone. <br />
                  15:42:07 Living Room Motion Sensor: No motion detected for
                  past 2 hours. Switching off hallway light (automated rule).{" "}
                  <br />
                  17:15:04 Kitchen Door Sensor: Door opened. <br />
                  17:16:23 Kitchen Light Switch: Light turned on automatically.{" "}
                  <br />
                  19:30:12 Bedroom Light Switch: Light turned off by voice
                  command. <br />
                  20:00:15 Living Room Motion Sensor: Motion detected. Turning
                  on living room lights (automated rule). <br />
                  22:15:03 Bedroom Door Lock: Locked by Jane Doe (Fingerprint).
                  <br />
                </Paper>
              </Paper>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  // height: 337.5,
                  flexGrow: 1,
                  height: "calc(47.5vh - 75px - 12px)",
                  overflow: "hidden",
                  //height: "calc(47.5vh - 75px - 12px)",
                }}
              >
                <Box display={"flex"} alignItems={"center"}>
                  <QueryStatsIcon />
                  <Typography ml={1} variant="h6">
                    Prestaties
                  </Typography>
                </Box>
                <Box
                  display={"flex"}
                  mt={2}
                  textAlign={"center"}
                  height={"calc(100% - 23px)"}
                >
                  <Performance />
                </Box>
              </Paper>
            </Stack>
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
                <NotificationsNoneIcon />
                <Typography variant="h6" ml={1}>
                  Meldingen
                </Typography>
              </Box>
              <List sx={{ mb: 2 }}>
                {messages.map(({ id, primary, secondary, person }) => (
                  <React.Fragment key={id}>
                    <ListItemButton>
                      <ListItemAvatar>
                        <Avatar alt="Profile Picture" src={person} />
                      </ListItemAvatar>
                      <ListItemText primary={primary} secondary={secondary} />
                    </ListItemButton>
                  </React.Fragment>
                ))}
              </List>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                // height: 500,
                // height: "calc(50vh - 75px)",
                height: "calc(47.5vh - 75px - 12px)",
                // minHeight: "100px",
                alignItems: "center",
              }}
            >
              <Box display={"flex"} alignItems={"center"}>
                <EngineeringIcon />
                <Typography variant="h6" ml={1}>
                  Systeem onderhoud
                </Typography>
              </Box>
              <Stack spacing={1} p={2}>
                <Button
                  variant="outlined"
                  color="warning"
                  startIcon={<RestartAltIcon />}
                >
                  Herstarten
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<PowerSettingsNewIcon />}
                >
                  Afsluiten
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<SpeedIcon />}
                  onClick={() => {
                    const options = [
                      {
                        text: "volgende",
                        onClick: () => {
                          Popup.show(
                            "Test Melding",
                            "dit is nog een test melding",
                            [
                              {
                                text: "OK",
                              },
                            ]
                          );
                        },
                      },
                      {
                        text: "OK",
                      },
                    ];

                    Popup.show(
                      "Test Melding",
                      "Dit is een testmelding",
                      options
                    );
                  }}
                >
                  Test Meldingen
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
