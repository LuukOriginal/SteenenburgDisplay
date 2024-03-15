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

export default function Maintenance() {
  return (
    <div id="Maintenance">
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }} style={{ height: "1vh" }}>
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
                  height: "calc(50vh - 75px - 12px)",
                }}
              >
                <Box display={"flex"}>
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
                  flexDirection: "row",
                  // height: 337.5,
                  height: "calc(50vh - 75px - 12px)",
                }}
              >
                <Box display={"flex"}>
                  <QueryStatsIcon />
                  <Typography ml={1} variant="h6">
                    Prestaties
                  </Typography>
                </Box>
                <Grid item xs={6} md={12} lg={6}>
                  <Grid item xs={6} md={6} lg={6}>
                    <Paper va>Baguette1</Paper>
                  </Grid>
                  <Grid item xs={6} md={6} lg={6}>
                    <Paper>Baguette2</Paper>
                  </Grid>
                </Grid>
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
                height: "calc(100vh - 150px)",
                // height: 700,
              }}
            >
              <Box display={"flex"}>
                <NotificationsNoneIcon />
                <Typography variant="h6" ml={1}>
                  Meldingen
                </Typography>
              </Box>
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
                height: "calc(50vh - 75px - 12px)",
                // minHeight: "100px",
              }}
            >
              <Box display={"flex"}>
                <RestartAltIcon />
                <Typography variant="h6" ml={1}>
                  Herstarten en afsluiten
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
