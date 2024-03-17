import React from "react";
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
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import Button from "@mui/material/Button";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import EngineeringIcon from "@mui/icons-material/Engineering";

const messages = [
  {
    id: 1,
    primary: "Error",
    secondary:
      "I'll be in the neighbourhood this week. Let's grab a bite to eat",
    person: "/static/images/avatar/5.jpg",
  },
  {
    id: 2,
    primary: "Birthday Gift",
    secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
    person: "/static/images/avatar/1.jpg",
  },
  {
    id: 3,
    primary: "Recipe to try",
    secondary:
      "I am try out this new BBQ recipe, I think this might be amazing",
    person: "/static/images/avatar/2.jpg",
  },
  {
    id: 4,
    primary: "Yes!",
    secondary: "I have the tickets to the ReactConf for this year.",
    person: "/static/images/avatar/3.jpg",
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
                  height: "calc(47.5vh - 75px - 12px)",
                }}
              >
                <Box display={"flex"} alignItems={"center"}>
                  <QueryStatsIcon />
                  <Typography ml={1} variant="h6">
                    Prestaties
                  </Typography>
                </Box>
              </Paper>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4} lg={4}>
            <Paper
              // style={{
              //   height: "calc(100vh - 150px)",
              //   minHeight: "100px",
              //   maxHeight: "700px",
              // }}
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
                    {id === 1 && (
                      <ListSubheader sx={{ bgcolor: "background.paper" }}>
                        Today
                      </ListSubheader>
                    )}
                    {id === 3 && (
                      <ListSubheader sx={{ bgcolor: "background.paper" }}>
                        Yesterday
                      </ListSubheader>
                    )}
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
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
