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
          camera={{ position: [0, 5, 1] }}
          //   camera={{ position: [45, 2, 0.1, 100] }}
        >
          <perspectiveCamera
            // fov={45}
            // aspect={2}
            // near={0.1}
            // far={100}
            // position={[45, 2, 0.1, 100]}
            aspect
            // camera={(0, 5, 1)}
            // camera={{
            //   fov: [45],
            //   aspect: [2],
            //   near: [0.1],
            //   far: [100],
            // }}
            updateProjectionMatrix
          >
            <ambientLight intensity={0.3} />
            <directionalLight
              castShadow={true}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
            />
            <OrbitControls autoRotate />

            <group>
              <mesh receiveShadow>
                <planeBufferGeometry
                  receiveShadw
                  rotateX={[-0.5 * Math.PI]}
                  attach="geometry"
                  args={[10, 10]}
                  //   shadowMaterial={{ transparent: true, opacity: [0.5] }}
                />
                <Box attach="material" color="blue" />
              </mesh>
            </group>
          </perspectiveCamera>
        </Canvas>
      </div>
    </>
  );
}
