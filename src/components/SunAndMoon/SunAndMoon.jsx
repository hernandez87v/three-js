import { OrbitControls, Stars } from 'drei';
import React, { Suspense, lazy } from 'react';
import { Canvas } from 'react-three-fiber';
import './SunAndMoon.css';

const Welcome = lazy(() => import('./Welcome'));

// export default function SunAndMoon() {
//   return (
//     <div className="SunAndMoon">
//         <Suspense fallback={null}>
//       <Canvas
//         colorManagement
//         camera={{ position: [100, 30, 100], fov: 100 }}
//       >
//         <OrbitControls
//           enableZoom={false}
//           enabled={false}
//           autoRotate
//           autoRotateSpeed={0.6}
//         />
//         <Stars radius={75} count={5000} />
//       </Canvas>
//         <Welcome />
//       </Suspense>
//     </div>
//   );
// }

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
          // enableZoom={false}
          // enabled={false}
          // autoRotate
          // autoRotateSpeed={0.6}
          />
          <Stars radius={75} count={1000} />
        </Canvas>
      </Suspense>
    </div>
  );
}