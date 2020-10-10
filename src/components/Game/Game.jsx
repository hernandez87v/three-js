import React from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { Physics, useSphere, useBox, usePlane } from 'use-cannon';
import { MeshWobbleMaterial } from 'drei';
import './Game.css';

function Ball({ args = [0.5, 32, 32] }) {
  const { viewport } = useThree();
  const [ref, api] = useSphere(() => ({ args: 0.5, mass: 1 }));

  usePlane(() => ({
    position: [0, -viewport.height, 0],
    rotation: [-Math.PI / 2, 0, 0],
    onCollide: () => {
      api.position.set(0, 0, 0);
      api.velocity.set(0, 10, 0);
    },
  }));
  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={args} />
      <meshStandardMaterial color="#f0544f" />
    </mesh>
  );
}

function Paddle({ args = [3, 0.5, 1] }) {
  const [ref, api] = useBox(() => ({ args }));

  useFrame((state) => {
    api.position.set(
      (state.mouse.x * state.viewport.width) / 2,
      -state.viewport.height / 2,
      0
    );
    api.rotation.set(0, 0, 0);
  });
  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={args} />
      <meshStandardMaterial color="#3a3335" />
    </mesh>
  );
}

function Enemy({ args = [2, 0.5, 1], color, ...props }) {
  const [ref] = useBox(() => ({ args, ...props }));
  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={2}
        factor={0.7}
      />
    </mesh>
  );
}

export default function Game() {
  return (
    <>
      <h1 className="page-title">G A M E</h1>
      <Canvas camera={{ position: [0, 5, 12], fov: 50 }}>
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 5]} />
        <pointLight position={[-10, -10, -5]} />
        <Physics
          gravity={[0, -20, 0]}
          defaultContactMaterial={{ restitution: 1.1 }}
        >
          <Ball />
          <Paddle />
          <Enemy color="#d81e5b" position={[2, 4.3, 0]} />
          <Enemy color="#fdf0d5" position={[-3, 4.5, 0]} />
          <Enemy color="#c6d8d3" position={[4, 2, 0]} />
          <Enemy color="#f7a292" position={[-2, 1, 0]} />
        </Physics>
      </Canvas>
    </>
  );
}
