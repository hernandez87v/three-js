import React, { useState } from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { Physics, useSphere, useBox, usePlane } from 'use-cannon';
import './App.css';

function Ball({ args = [0.5, 32, 32] }) {
  const [ref] = useSphere(() => ({ args: 0.5, mass: 1 }))
  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={args} />
      <meshStandardMaterial color="blue" />
    </mesh>
  )
}

function Paddle({ args = [2, 0.5, 1] }) {
  return (
    <mesh>
      <sphereBufferGeometry args={args} />
      <meshStandardMaterial color="white" />
    </mesh>
  )
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 5, 12], fov: 50 }}>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -5]} />
      <Physics>
        <Ball />
        <Paddle />
      </Physics>
    </Canvas>
  );
}
