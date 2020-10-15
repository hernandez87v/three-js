import React from 'react';
import { Box, OrbitControls } from 'drei';
import { Canvas } from 'react-three-fiber';
// import * as THREE from 'three';
// import './Home.css';
import { BackSide } from 'three';

export default function Home() {
  const BoxGlow = () => {
    return (
      <mesh>
        <boxBufferGeometry attach="geometry" />
        <meshBasicMaterial color={0xfff1ef} attach="material" />
      </mesh>
    );
  };

  return (
    <>
      <div className="home-grid">
        <Canvas
          // camera={{
          //   position: [0, 5, 1],
          // }}
          colorManagement
          shadowMap
        >
          <ambientLight intensity={0.3} />
          <directionalLight
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <OrbitControls autoRotate />
          <group>
            <mesh receiveShadow position={[0, -5, 1]}>
              <perspectiveCamera fov={45} aspect={2} near={0.1} far={100}>
                <planeBufferGeometry
                  receiveShadw
                  attach="geometry"
                  args={[10, 10]}

                  // rotateX={-0.5 * Math.PI}
                  //   shadowMaterial={{ transparent: true, opacity: [0.5] }}
                />
                <meshStandardMaterial
                  color={0xd2452b}
                  attach="material"
                  side={BackSide}
                  metalness={0.4}
                />
                <BoxGlow />
                <gridHelper />
              </perspectiveCamera>
            </mesh>
          </group>
        </Canvas>
      </div>
    </>
  );
}
