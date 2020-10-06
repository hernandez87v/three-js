import ReactDOM from 'react-dom';
import React, { useRef, useState, Fragment } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

// import './styles.css';

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (hovered && !active) {
      mesh.current.rotation.z += 0.01;
      mesh.current.rotation.x += 0.01;
    }
    if (hovered && active) {
      mesh.current.rotation.y += 0.02;
      mesh.current.rotation.x += 0.06;
    }
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [6, 6, 6] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? 'hotpink' : 'orange'}
      />
    </mesh>
  );
}

ReactDOM.render(
  <Fragment>
    <h1>Hello, this is react-three-fiber!</h1>
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-2.2, 0, 0]} />
      <Box position={[2.2, 0, 0]} />
    </Canvas>
  </Fragment>,
  document.getElementById('root')
);
