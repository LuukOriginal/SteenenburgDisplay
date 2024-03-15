import MapIcon from "@mui/icons-material/Map";
import EngineeringIcon from "@mui/icons-material/Engineering";
import SettingsIcon from "@mui/icons-material/Settings";
import LinkedCameraIcon from "@mui/icons-material/LinkedCamera";

export const navigationData = [
  {
    title: "Plattegrond",
    path: "",
    icon: <MapIcon />,
  },
  {
    title: "Camera's",
    path: "cameras",
    icon: <LinkedCameraIcon />,
  },
  {
    title: "Onderhoud",
    path: "maintenance",
    icon: <EngineeringIcon />,
  },
  {
    title: "Instellingen",
    path: "settings",
    icon: <SettingsIcon />,
  },
];
