import React from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { Physics, useSphere, useBox, usePlane } from 'use-cannon';
import Game from './components/Game/Game';
import Navigation from './components/navigation';
// import './App.css';

function Ball({ args = [0.5, 32, 32] }) {
  const { viewport } = useThree()
  const [ref, api] = useSphere(() => ({ args: 0.5, mass: 1 }))

  usePlane(() => (
    {
      position: [0, -viewport.height, 0],
      rotation: [-Math.PI / 2, 0, 0],
      onCollide: () => {
        api.position.set(0, 0, 0)
        api.velocity.set(0, 10, 0)
      }
    })
  )
  return (
    <mesh ref={ref}>
      <sphereBufferGeometry args={args} />
      <meshStandardMaterial color="blue" />
    </mesh>
  )
}

function Paddle({ args = [2, 0.5, 1] }) {
  const [ref, api] = useBox(() => ({ args }))

  useFrame((state) => {
    api.position.set(state.mouse.x * state.viewport.width / 2, -state.viewport.height / 2, 0)
    api.rotation.set(0, 0, 0)
  })
  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={args} />
      <meshStandardMaterial color="white" />
    </mesh>
  )
}

function Enemy({ args = [2, 0.5, 1], color, ...props }) {
  const [ref] = useBox(() => ({ args, ...props }))
  return (
    <mesh ref={ref}>
      <boxBufferGeometry args={args} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

export default function App() {
  return (
    <Navigation />
<Game/>
  );
}
