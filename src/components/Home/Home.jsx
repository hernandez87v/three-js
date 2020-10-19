// import * as THREE from 'three';
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { OrbitControls } from 'drei';
import Text from './Text';
import './Home.css';

function Jumbo() {
  const ref = useRef();
  useFrame(
    ({ clock }) =>
      (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z =
        Math.sin(clock.getElapsedTime()) * 0.3)
  );
  return (
    <group ref={ref}>
      <Text hAlign="center" position={[0, 10, 0]} children="ORBIT" />
      <Text hAlign="center" position={[0, 5, 0]} children="WITH" />
      <Text hAlign="center" position={[0, -1, 0]} children="MOUSE" />
      <Text hAlign="center" position={[0, -7.5, 0]} children="OR" size={1.5} />
      <Text hAlign="center" position={[0, -14, 0]} children="TOUCH" />
    </group>
  );
}

// let i = 0;

// This component was auto-generated from GLTF by: https://github.com/react-spring/gltfjsx

export default function Home() {
  return (
    <div className="home-bg">
      <Canvas camera={{ position: [0, 0, 35] }}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        <Suspense fallback={null}>
          <Jumbo />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

// import React from 'react';
// import './Home.css';

// export default function Home() {
//   return (
//     <div className="home-bg">
//       <div className="page-title">
//         <h1 className="neumorph">
//           <span role="img" aria-label="computer muse">
//             🖱
//           </span>
//           <span role="img" aria-label="index pointing up">
//             ☝
//           </span>
//         </h1>
//       </div>
//     </div>
//   );
// }
