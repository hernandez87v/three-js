import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { Html, OrbitControls } from 'drei';
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
      <Text hAlign="center" position={[0, 12, 0]} children="ORBIT" size={1.5} />
      <Text hAlign="center" position={[0, 5.5, 0]} children="WITH" />
      <Text hAlign="center" position={[0, 0, 0]} children="MOUSE" size={1.5} />
      <Text hAlign="center" position={[0, -6, 0]} children="OR" />
      <Text
        hAlign="center"
        position={[0, -12, 0]}
        children="TOUCH"
        size={1.5}
      />
    </group>
  );
}

export default function Home() {
  return (
    <div className="home-bg">
      <Canvas camera={{ position: [0, 0, 35] }}>
        <ambientLight intensity={2} />
        <pointLight position={[40, 40, 40]} />
        <Suspense fallback={<Html>🔃Loading...</Html>}>
          <Jumbo />
          <OrbitControls />
        </Suspense>
      </Canvas>
    </div>
  );
}
