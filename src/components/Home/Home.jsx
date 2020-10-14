import React from 'react';
import { Box, OrbitControls } from 'drei';
import { Canvas } from 'react-three-fiber';
// import * as THREE from 'three';

export default function Home() {
  return (
    <>
      <div>
        <Canvas
          //   colorManagement
          shadowMap
        >
          <perspectiveCamera
            position={(45, 2, 0.1, 100)}
            camera={(0, 5, 1)}
            updateProjectionMatrix
          />
          <ambientLight intensity={0.3} />
          <directionalLight
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <OrbitControls autoRotate />

          <group>
            <mesh receiveShadow position={[0, -5, 0]}>
              <planeBufferGeometry
                rotateX={[-0.5 * Math.PI]}
                attach="geometry"
                args={[10, 10]}
              />
              <shadowMaterial receiveShadow transparent opacity={0.5} />
              <Box attach="material" color="blue" />
            </mesh>
          </group>
        </Canvas>
      </div>
    </>
  );
}
