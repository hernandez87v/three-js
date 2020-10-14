import React from 'react';
import { Box, OrbitControls } from 'drei';
import { Canvas } from 'react-three-fiber';
// import * as THREE from 'three';

export default function Home() {
  return (
    <>
      <div>
        <Canvas
          colorManagement
          shadowMap
          camera={{ position: [45, 2, 50], fov: 10 }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight
            // position={[0, 10, 0]}
            // intensity={1.5}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <group>
            <mesh
              receiveShadow
              //   rotation={[-Math.PI / 2, 0, 0]}
              position={[0, -5, 0]}
            >
              <shadowMaterial transparent opacity={0.5} />
              <planeBufferGeometry
                rotation={[-0.5 * Math.PI]}
                attach="geometry"
                args={[10, 10]}
              />
              <Box attach="geometry" color="blue" />
            </mesh>
          </group>
          <OrbitControls />
        </Canvas>
      </div>
    </>
  );
}
