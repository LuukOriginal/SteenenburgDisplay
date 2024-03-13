import React from "react";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

export default function Maintenance() {
  return (
    <div id="Maintenance">
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} lg={4}>
            <Stack spacing={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 337.5,
                }}
              >
                <ErrorOutlineIcon />
                <Typography>Log</Typography>
              </Paper>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 337.5,
                }}
              >
                Prestaties
              </Paper>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 700,
              }}
            >
              Meldingen
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 337.5,
              }}
            >
              Opstarten, enz.
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
