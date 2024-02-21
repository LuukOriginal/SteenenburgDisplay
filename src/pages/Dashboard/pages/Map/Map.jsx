import React, { Component } from "react";
import { Canvas } from "@react-three/fiber";
import {
  MeshReflectorMaterial,
  OrbitControls,
  PresentationControls,
  Stage,
} from "@react-three/drei";

// import {Hotel} from "./Hotel";

import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import "./style.css";

function Hotel() {
  const gltf = useLoader(GLTFLoader, "hotelor.gltf");
  return <primitive object={gltf.scene} />;
}

export default class Map extends Component {
  render() {
    return (
      <div id="Map">
        <h1>Map</h1>
        <div id="canvas-container">
          <Canvas id="canvas">
            <>
              <PresentationControls
                speed={1.5}
                global
                polar={[-0.1, Math.PI / 4]}
                rotation={[Math.PI / 8, Math.PI / 4, 0]}
              >
                <Stage environment="city" intensity={0.6} castShadow={false}>
                  <Hotel/>
                </Stage>
                <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-3}>
                  <planeGeometry args={[170, 170]} />
                  {/* <MeshReflectorMaterial
                    blur={[300, 100]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={40}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#101010"
                    metalness={0.5}
                  /> */}
                </mesh>
              </PresentationControls>
            </>
            {/* <color attach="background" args={["#242424"]} />
            <fog attach="fog" args={["#242424", 15, 20]} />
            <OrbitControls enableZoom={true} enablePan={false} />
            <ambientLight intensity={0.1} />
            <mesh>
              <HouseModel />
              <meshNormalMaterial />
            </mesh> */}
          </Canvas>
        </div>
      </div>
    );
  }
}
