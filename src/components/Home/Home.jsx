import * as THREE from 'three';
import React, { useMemo } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';
import { Physics, usePlane, useBox } from 'use-cannon';
import niceColors from 'nice-color-palettes';
import { OrbitControls } from 'drei';
// import './Home.css';

export default function Home() {
  function Plane(props) {
    const [ref] = usePlane(() => ({ mass: 0, ...props }));
    return (
      <mesh ref={ref} receiveShadow>
        <planeBufferGeometry attach="geometry" args={[20, 20]} />
        <shadowMaterial attach="material" color="#171717" opacity={0.3} />
      </mesh>
    );
  }

  function Cubes({ number }) {
    const [ref, api] = useBox(() => ({
      mass: 1,
      args: [0.1, 0.1, 0.1],
      position: [Math.random() - 0.5, Math.random() * 2, Math.random() - 0.5],
    }));

    const colors = useMemo(() => {
      const array = new Float32Array(number * 3);
      const color = new THREE.Color();
      for (let i = 0; i < number; i++)
        color
          .set(niceColors[39][Math.floor(Math.random() * 5)])
          .convertSRGBToLinear()
          .toArray(array, i * 3);
      return array;
    }, [number]);

    useFrame(() =>
      api
        .at(Math.floor(Math.random() * number))
        .position.set(0, Math.random() * 2, 0)
    );
    return (
      <instancedMesh
        receiveShadow
        castShadow
        ref={ref}
        args={[null, null, number]}
      >
        <boxBufferGeometry attach="geometry" args={[0.1, 0.1, 0.1]}>
          <instancedBufferAttribute
            attachObject={['attributes', 'color']}
            args={[colors, 3]}
          />
        </boxBufferGeometry>
        <meshLambertMaterial
          attach="material"
          vertexColors={THREE.VertexColors}
        />
      </instancedMesh>
    );
  }

  return (
    <>
      <div className="page-title">
        <h1 className="neumorph">H O M E</h1>
      </div>
      <Canvas
        shadowMap
        colorManagement
        gl={{ alpha: false }}
        camera={{ position: [-1, 2, 2.5], fov: 50 }}
      >
        <color attach="background" args={['lightgreen']} />
        <hemisphereLight intensity={0.35} />
        <spotLight
          position={[5, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <Physics>
          <Plane rotation={[-Math.PI / 2, 0, 0]} />
          <Cubes number={500} />
        </Physics>
        <OrbitControls />
      </Canvas>
    </>
  );
}
