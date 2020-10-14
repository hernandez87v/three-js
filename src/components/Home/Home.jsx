import React from 'react';
import { Box, OrbitControls } from 'drei';
import { Canvas } from 'react-three-fiber';
// import * as THREE from 'three';

export default function Home() {
  return (
    <>
      <div>
        <Canvas
          colorManagement
          shadowMap
          camera={{ position: [45, 2, 0.1, 100], fov: 50 }}
        >
          <OrbitControls />
          <Box />
        </Canvas>
      </div>
    </>
  );
}
