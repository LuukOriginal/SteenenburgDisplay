import React from "react";

import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function DeviceButton(props) {
  const { device } = props;

  const [enabled, setEnabled] = React.useState(device.enabled);

  return (
    <Box
      p={1}
      sx={{
        bgcolor: `success.${enabled ? "dark" : "light"}`,
        color: `#fff`,
        borderRadius: 1,
        transition: "background-color 0.2s ease-in-out",
        cursor: "pointer",
      }}
      onClick={() => setEnabled(!enabled)}
    >
      {device.icon}
      <Typography variant="subtitle2">{device.name}</Typography>
      <Typography variant="body2">{enabled ? "On" : "Off"}</Typography>
    </Box>
  );
}
