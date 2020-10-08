import React from 'react';
import { Canvas, useFrame, useThree } from 'react-three-fiber';
import { Physics, useSphere, useBox, usePlane } from 'use-cannon';
import './Game.css';

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

export default function Game() {
    return (
        <Canvas camera={{ position: [0, 5, 12], fov: 50 }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 5]} />
            <pointLight position={[-10, -10, -5]} />
            <Physics gravity={[0, -20, 0]} defaultContactMaterial={{ restitution: 1.1 }}>
                <Ball />
                <Paddle />
                <Enemy color="red" position={[3, 5, 0]} />
                <Enemy color="cyan" position={[-3, 5, 0]} />
                <Enemy color="grey" position={[5, 3, 0]} />
                <Enemy color="green" position={[-3, 1, 0]} />
            </Physics>
        </Canvas>
    );
}