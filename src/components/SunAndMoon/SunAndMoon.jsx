import { OrbitControls, Stars } from 'drei';
import React, { Suspense, lazy } from 'react';
import { Canvas } from 'react-three-fiber';

const Welcome = lazy(() => import('./Welcome'));
// const SunMoon = lazy(() => import('./SunMoon/SunMoon'));

export default function Home() {
  return (
    <div className="Home">
          <Suspense fallback={<div>Loading...</div>}>
            <Canvas
              colorManagement
              camera={{ position: [100, 30, 100], fov: 100 }}
            >
              <OrbitControls
                enableZoom={false}
                enabled={false}
                autoRotate
                autoRotateSpeed={0.6}
              />
              <Stars radius={75} count={5000} />
            </Canvas>
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Welcome />
            {/* <SunMoon /> */}
          </Suspense>
    </div>
  );
}