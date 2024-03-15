import React, { useState } from "react";

export default function Cameras() {
  const [cam, setCam] = useState(1);
  return (
    <div id="Cameras">
      <img
        style={{ backgroundColor: "hsl(0, 0%, 25%)" }}
        src={`http://109.233.191.228:8090/cam_${cam}.cgi`}
        alt="cam"
        width="640"
        height="360"
      ></img>
      <button
        onClick={() => {
          let nCam = cam;
          if (nCam >= 9) {
            nCam = 1;
          } else {
            nCam = nCam + 1;
          }
          setCam(nCam);
        }}
      >
        Next ({cam})
      </button>
    </div>
  );
}
