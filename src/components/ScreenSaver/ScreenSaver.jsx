import React, { useEffect } from "react";
import "./style.css";

import Typography from "@mui/material/Typography";

import LogoTopBar from "../LogoTopBar/LogoTopBar";
import { Stack } from "@mui/material";

function importAll(r) {
  let images = [];

  r.keys().map((item, index) => {
    images.push(r(item));
  });

  return images;
}

const images = importAll(
  require.context("./assets/images", false, /\.(png|jpe?g|svg|webp)$/)
);

export default function ScreenSaver() {
  const [imageIndex, setImageIndex] = React.useState(0);
  const [currentDate, setCurrentDate] = React.useState(new Date());

  function getNextIndex() {
    if (imageIndex < images.length - 1) {
      return imageIndex + 1;
    } else {
      return 0;
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
      setImageIndex(getNextIndex());

      let newImage = document.getElementById("new-image");
      let oldImage = document.getElementById("old-image");

      if (newImage.classList.contains("hidden")) {
        newImage.src = images[imageIndex];
      } else {
        oldImage.src = images[imageIndex];
      }

      newImage.classList.toggle("hidden");
    }, 10000);
    return () => clearInterval(interval);
  }, [imageIndex]);

  return (
    <div id="ScreenSaver">
      <div>
        <img
          id="new-image"
          className={"screensaver-image"}
          src={images[0]}
          alt="screensaver"
          key={0}
        />
        <img
          id="old-image"
          className={"screensaver-image"}
          src={images[1]}
          alt="screensaver"
          key={1}
        />
      </div>
      <div id="screensaver-info-container">
        <LogoTopBar />
        <div id="screensaver-info-bottom">
          <Stack spacing={0} mr="4vw" mb="6vh" ml="auto">
            <Typography
              variant="h1"
              fontWeight={400}
              //   align="right"
              style={{ opacity: 0.7 }}
            >
              {currentDate.toLocaleTimeString(["nl-nl"], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Typography>
            <Typography variant="h4" align="right" style={{ opacity: 0.7 }}>
              {currentDate.toLocaleDateString()}
            </Typography>
          </Stack>
        </div>
      </div>
    </div>
  );
}
