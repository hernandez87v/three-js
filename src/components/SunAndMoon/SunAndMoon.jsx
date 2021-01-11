import { OrbitControls } from 'drei';
import React, { Suspense, lazy } from 'react';
import { Canvas } from 'react-three-fiber';
import './SunAndMoon.css';

const Welcome = lazy(() => import('./Welcome'));

export default function SunAndMoon() {
  return (
    <div className="SunAndMoon">
      <Suspense fallback={null}>
        <Welcome />
        <Canvas
          colorManagement
          camera={{ position: [100, 30, 100], fov: 100 }}
        >
          <OrbitControls
          />
        </Canvas>
      </Suspense>
    </div>
  );
}