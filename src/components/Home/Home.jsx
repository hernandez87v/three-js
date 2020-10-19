// import * as THREE from 'three';
import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Text from './Text';

function Jumbo() {
  const ref = useRef();
  useFrame(
    ({ clock }) =>
      (ref.current.rotation.x = ref.current.rotation.y = ref.current.rotation.z =
        Math.sin(clock.getElapsedTime()) * 0.3)
  );
  return (
    <group ref={ref}>
      <Text hAlign="left" position={[0, 4.2, 0]} children="REACT" />
      <Text hAlign="left" position={[0, 0, 0]} children="THREE" />
      <Text hAlign="left" position={[0, -4.2, 0]} children="FIBER" />
      <Text hAlign="left" position={[12, 0, 0]} children="4" size={3} />
      <Text hAlign="left" position={[16.5, -4.2, 0]} children="X" />
    </group>
  );
}

// let i = 0;

// This component was auto-generated from GLTF by: https://github.com/react-spring/gltfjsx

export default function Home() {
  return (
    <Canvas camera={{ position: [0, 0, 35] }}>
      <ambientLight intensity={2} />
      <pointLight position={[40, 40, 40]} />
      <Suspense fallback={null}>
        <Jumbo />
      </Suspense>
    </Canvas>
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
