import React from "react";

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
                }}
              >
                <Box display={"flex"} alignItems={"center"}>
                  <ErrorOutlineIcon />
                  <Typography variant="h6" ml={1}>
                    Log
                  </Typography>
                </Box>
              </Paper>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  // height: 337.5,
                  overflow: "hidden",
                  height: "calc(47.5vh - 75px - 12px)",
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
                  mt={3}
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
                <Button variant="outlined" startIcon={<SpeedIcon />}>
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
