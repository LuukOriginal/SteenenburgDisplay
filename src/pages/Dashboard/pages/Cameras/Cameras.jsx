import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Backdrop, ClickAwayListener } from "@mui/material";

const cameras = [
  {
    url: "http://109.233.191.228:8090/cam_1.cgi",
    name: "Camera 1",
  },
  {
    url: "http://109.233.191.228:8090/cam_5.cgi",
    name: "Camera 5",
  },
  {
    url: "http://109.233.191.228:8090/cam_6.cgi",
    name: "Camera 6",
  },
  {
    url: "http://109.233.191.228:8090/cam_7.cgi",
    name: "Camera 7",
  },
  {
    url: "http://109.233.191.228:8090/cam_8.cgi",
    name: "Camera 8",
  },
  {
    url: "http://109.233.191.228:8090/cam_9.cgi",
    name: "Camera 9",
  },
  {
    url: "http://68.112.39.99/mjpg/video.mjpg",
    name: "Camera 10",
  },
];

export default function Cameras() {
  const [cameraPage, setCameraPage] = useState(1);
  const [cameraPopup, setCameraPopup] = useState();

  function openCameraPopup(camera) {
    return (
      <Backdrop
        open
        style={{
          zIndex: 1,
          display: "flex",
          position: "fixed",
        }}
      >
        <ClickAwayListener onClickAway={() => setCameraPopup()}>
          <Box display={"flex"} m={"auto"}>
            <Typography
              variant="h6"
              ml={"1vh"}
              mt={"1vh"}
              style={{
                position: "fixed",
              }}
            >
              {camera.name}
            </Typography>
            <img
              id="camera-popup"
              src={camera.url}
              alt=""
              style={{
                width: "60vw",
                height: "60vh",
                margin: "auto",
                objectFit: "contain",
              }}
            />
          </Box>
        </ClickAwayListener>
      </Backdrop>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      {cameraPopup && openCameraPopup(cameraPopup)}
      <Grid container spacing={3}>
        {cameras.map((camera, index) => {
          if (index < (cameraPage - 1) * 6 || index >= cameraPage * 6) return;
          return (
            <Grid item xs={12} md={4} lg={4} key={index}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  // height: 337.5,
                  height: "calc(47.5vh - 100px - 12px)",
                }}
              >
                <Box display={"flex"} alignItems={"center"}>
                  <Typography variant="h6" ml={1}>
                    {camera.name}
                  </Typography>
                </Box>
                <img
                  onClick={() => setCameraPopup(camera)}
                  src={camera.url}
                  alt=""
                  width={"100%"}
                  style={{
                    height: "calc(100% - 32px)",
                    objectFit: "contain",
                    cursor: "pointer",
                  }}
                />
              </Paper>
            </Grid>
          );
        })}
        <Grid item xs={12} md={12} lg={12} display={"flex"}>
          <Pagination
            count={Math.ceil(cameras.length / 6)}
            style={{ margin: "auto" }}
            page={cameraPage}
            onChange={(e, page) => setCameraPage(page)}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
