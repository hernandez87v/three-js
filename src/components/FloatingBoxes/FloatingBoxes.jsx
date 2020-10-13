import React, { useRef } from 'react';
import './FloatingBoxes.css';
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
        factor={0.7}
      />
    </mesh>
  );
};

export default function FloatingBoxes() {
  return (
    <>
      <h1 className="page-title">F L O A T I N G - B O X E S</h1>
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [-5, 2, 15], fov: 50 }}
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
            position={[0, -5, 0]}
          >
            <planeBufferGeometry attach="geometry" args={[100, 100]} />
            <shadowMaterial attach="material" opacity={0.3} />
          </mesh>
          <Box
            position={[0, 1, 0]}
            color="#FFC300"
            args={[3, 2, 1]}
            speed={0.8}
          />
          <Box position={[-2, 1, -3]} color="#d3022c" speed={-4} />
          <Box position={[3, 1, -2]} color="#FF5733" speed={-4} />
          <Box position={[0, 5, 0]} color="#FFC300" speed={-4} />
          <Box
            position={[6, 5, -2]}
            color="#d3022c"
            args={[3, 2, 1]}
            speed={0.8}
          />
          <Box
            position={[-2, 5, -6]}
            color="#FF5733"
            args={[3, 2, 1]}
            speed={0.8}
          />
          <Box position={[7, 8, -2]} color="#FF5733" speed={4} />
          <Box position={[-5, 8, -6]} color="#d3022c" speed={4} />
        </group>

        <OrbitControls />
      </Canvas>
      <div className="dep-description">
      <h3>Dependancies</h3>
      <h4>react-three-fiber</h4>
        <h4>drei</h4>
        </div>
    </>
  );
}
