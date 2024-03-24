import React from "react";

import MapDark from "./assets/images/map_dark.png";
import MapLight from "./assets/images/map_light2.png";

import { ColorModeContext } from "../../../../components/ThemeManager/ThemeManager";

export default function Map() {
  const colorMode = React.useContext(ColorModeContext);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <img
        src={colorMode.get() === "dark" ? MapDark : MapLight}
        usemap="#image-map"
        style={{
          opacity: "0.65",
        }}
      />
      <map name="image-map">
        <area
          target=""
          alt="Kamer 1"
          title="Kamer 1"
          href="/dashboard/room/1"
          coords="193,320,74,80"
          shape="rect"
        />
        <area
          target=""
          alt="Kamer 2"
          title="Kamer 2"
          href="/dashboard/room/2"
          coords="195,80,317,319"
          shape="rect"
        />
        <area
          target=""
          alt="Kamer 3"
          title="Kamer 3"
          href="/dashboard/room/3"
          coords="319,81,437,320"
          shape="rect"
        />
        <area
          target=""
          alt="Kamer 4"
          title="Kamer 4"
          href="/dashboard/room/4"
          coords="438,82,558,320"
          shape="rect"
        />
        <area
          target=""
          alt="Kamer 5"
          title="Kamer 5"
          href="/dashboard/room/5"
          coords="560,81,682,320"
          shape="rect"
        />
        <area
          target=""
          alt="Kamer 6"
          title="Kamer 6"
          href="/dashboard/room/6"
          coords="682,81,803,320"
          shape="rect"
        />
        <area
          target=""
          alt="Kamer 7"
          title="Kamer 7"
          href="/dashboard/room/7"
          coords="805,82,925,320"
          shape="rect"
        />
        <area
          target=""
          alt="Kamer 8"
          title="Kamer 8"
          href="/dashboard/room/8"
          coords="926,80,1047,320"
          shape="rect"
        />
        <area
          target=""
          alt="Kamer 9"
          title="Kamer 9"
          href="/dashboard/room/9"
          coords="805,376,923,613"
          shape="rect"
        />
        <area
          target=""
          alt="Kamer 10"
          title="Kamer 10"
          href="/dashboard/room/10"
          coords="683,373,804,613"
          shape="rect"
        />
        <area
          target=""
          alt="Kamer 11"
          title="Kamer 11"
          href="/dashboard/room/11"
          coords="561,374,682,615"
          shape="rect"
        />
        <area
          target=""
          alt="Kamer 12"
          title="Kamer 12"
          href="/dashboard/room/12"
          coords="439,371,558,614"
          shape="rect"
        />
        <area
          target=""
          alt="Kamer 13"
          title="Kamer 13"
          href="/dashboard/room/13"
          coords="69,372,220,634"
          shape="rect"
        />
      </map>
    </div>
  );
}
