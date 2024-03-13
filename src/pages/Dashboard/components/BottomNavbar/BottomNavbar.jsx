import React from "react";
import { useNavigate } from "react-router-dom";

import { navigationData } from "./NavigationData";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";

export default function BottomNavbar() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  return (
    <div id="BottomNavbar">
      <Box sx={{ width: 500 }}>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            {navigationData.map((item) => (
              <BottomNavigationAction
                label={item.title}
                icon={item.icon}
                onClick={() => navigate(item.path)}
              />
            ))}
          </BottomNavigation>
        </Paper>
      </Box>
    </div>
  );
}
