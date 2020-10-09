import React, { useRef } from 'react';
import './Second.css';
import { Canvas, useFrame } from 'react-three-fiber';
import { softShadows, MeshWobbleMaterial, OrbitControls } from 'drei';

softShadows();

const Box = ({ position, color, args, speed }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh castShadow position={position} ref={mesh}>
      <boxBufferGeometry attach="geometry" args={args} />
      <MeshWobbleMaterial
        attach="material"
        color={color}
        speed={speed}
        factor={.7}
      />
    </mesh>
  );
};

export default function Second() {
  return (
    <>
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 2, 10], fov: 60 }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight
          position={[0, 10, 0]}
          intensity={1.5}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <group>
          <mesh
            receiveShadow
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
          <Box position={[0, 1, 0]} color="orange" args={[3, 2, 1]} speed={.8} />
          <Box position={[-2, 1, -3]} color="red" speed={4} />
          <Box position={[3, 1, -2]} color="cyan" speed={4} />
          <Box position={[0, 5, 0]} color="orange"  speed={4} />
          <Box position={[6, 5, -2]} color="red" args={[3, 2, 1]} speed={.8} />
          <Box position={[-2, 5, -6]} color="cyan" args={[3, 2, 1]} speed={.8} />
          <Box position={[12, 8, -2]} color="cyan" speed={4} />
          <Box position={[-5, 7, -6]} color="red" speed={4}/>
        </group>

        <OrbitControls />
      </Canvas>
    </>
  );
}
