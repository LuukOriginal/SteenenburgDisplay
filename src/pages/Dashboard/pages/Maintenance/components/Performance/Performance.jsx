import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import StorageIcon from "@mui/icons-material/Storage";
import MemoryIcon from "@mui/icons-material/Memory";
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck";
import Crop169Icon from "@mui/icons-material/Crop169";

export default function Performance() {
  const [cpuPercentage, setCpuPercentage] = React.useState(14);
  const [memoryPercentage, setMemoryPercentage] = React.useState(40);
  const [diskPercentage, setDiskPercentage] = React.useState(0.2);
  const [networkPercentage, setNetworkPercentage] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCpuPercentage(Math.floor(Math.random() * 100));
      setMemoryPercentage(Math.floor(Math.random() * 100));
      setDiskPercentage(Math.floor(Math.random() * 100));
      setNetworkPercentage(Math.floor(Math.random() * 100));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const Statistics = [
    {
      title: "CPU",
      percentage: cpuPercentage,
      icon: <MemoryIcon />,
    },
    {
      title: "Memory",
      percentage: memoryPercentage,
      icon: <Crop169Icon />,
    },
    {
      title: "Disk",
      percentage: diskPercentage,
      icon: <StorageIcon />,
    },
    {
      title: "Network",
      percentage: networkPercentage,
      icon: <NetworkCheckIcon />,
    },
  ];

  return (
    <Grid container spacing={2}>
      {Statistics.map((statistic, index) => (
        <Grid key={index} item xs={12} md={6} lg={6}>
          <Paper
            elevation={4}
            style={{
              height: "calc(100% - 8px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              //   width: "calc(100% - 8px)",
            }}
          >
            <Typography>{statistic.icon}</Typography>
            <Typography>{statistic.title}</Typography>
            <Typography>{statistic.percentage}%</Typography>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
