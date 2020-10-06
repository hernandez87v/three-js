import React, { useState } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
// import { Physics, useSphere, useBox, usePlane } from 'use-cannon';
import './App.css';

function App() {
  return (
    <Canvas camera={{ position: [0, 5, 12], fov: 50 }}>
      <mesh>
        <sphereBufferGeometry />
        <meshStandardMaterial color="blue" />
      </mesh>
    </Canvas>
  );
}

export default App;
