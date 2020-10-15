import React from 'react';
import { Box, OrbitControls } from 'drei';
import { Canvas } from 'react-three-fiber';
// import * as THREE from 'three';
// import './Home.css';

export default function Home() {
  return (
    <>
      <div className="home-grid">
        <Canvas colorManagement shadowMap perspectiveCamera={[45, 2, 0.1, 100]}>
          {/* <perspectiveCamera
            args={[45, 2, 0.1, 100]}
            updateProjectionMatrix
          > */}
          <ambientLight intensity={0.3} />
          <directionalLight
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <OrbitControls autoRotate />
          <group>
            <mesh receiveShadow rotateX={[-0.5 * Math.PI]} position={[0, 5, 1]}>
              <planeBufferGeometry
                receiveShadw
                attach="geometry"
                args={[10, 10]}
                //   shadowMaterial={{ transparent: true, opacity: [0.5] }}
              />
              <gridHelper />
              <Box attach="material" color="blue" />
            </mesh>
          </group>
        </Canvas>
      </div>
    </>
  );
}
