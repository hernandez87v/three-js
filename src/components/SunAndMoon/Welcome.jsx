import React, { Suspense, useRef, useState } from 'react';
import './Welcome.css';
import { Canvas } from 'react-three-fiber';
import { FontLoader } from 'three';
import Modak from './Modak.json';
import { OrbitControls, useTextureLoader, Stars } from 'drei';
import sun_texture from './2kSun.jpg';
import moon_texture from './2kMoon.jpg';

function TextMesh({ args, position }) {
    const font = new FontLoader().parse(Modak);

    const textOptions = {
        font,
        size: 15,
        height: 3,
        curveSegments: 15,
        bevelEnabled: true,
        bevelThickness: 1.2,
        bevelSize: 1,
        bevelSegments: 2,
    };
    const ref = useRef(null);

    return (
        <mesh position={position} ref={ref}>
            <textBufferGeometry
                attach="geometry"
                args={[args, textOptions]}
                factor={0.7}
            />
            <meshPhysicalMaterial
                clearcoat={1}
                reflectivity={1}
                roughness={0.5}
                metalness={1}
                color="darkgray"
                attach="material"
            />
            <OrbitControls
                enableZoom={false}
                enabled={false}
                autoRotate
                autoRotateSpeed={0.2}
            />
        </mesh>
    );
}

function Planet({ args, position, map, ...props }) {
    const ref = useRef();

    return (
        <mesh position={position} {...props} ref={ref}>
            <sphereBufferGeometry attach="geometry" args={args} />
            <meshStandardMaterial map={map} />
        </mesh>
    );
}

export default function Welcome() {
    const date = new Date();
    const [hour] = useState(date);
    const [sun, moon] = useTextureLoader([sun_texture, moon_texture]);
    return (
        <div className="Welcome">
            <Canvas
                colorManagement
                camera={{ position: [0, 20, 100], fov: 100 }}
                gl={{
                    powerPreference: 'high-performance',
                }}
            >
                <ambientLight intensity={0.2} />
                <spotLight intensity={0.5} position={[200, 150, 150]} penumbra={1} />
                <spotLight intensity={0.5} position={[70, 0, 100]} penumbra={1} />
                <spotLight intensity={0.7} position={[-200, -150, -150]} penumbra={1} />
                <group>
                    <Suspense fallback={null}>
                        {hour.getHours() < 16 ? (
                            <Planet
                                args={[50, 32, 32]}
                                position={[-500, 400, -800]}
                                map={sun}
                            />
                        ) : (
                                <Planet args={[10, 32, 32]} position={[150, 50, 50]} map={moon} />
                            )}
                    </Suspense>
                    <TextMesh args="Hello," position={[-43, 30, 0]} />
                    <TextMesh args="my name" position={[-43, 10, 0]} />
                    <TextMesh args="is Vlad," position={[-43, -10, 0]} />
                    <TextMesh args=">Web" position={[-43, -30, 0]} />
                    <TextMesh args="Developer." position={[-43, -50, 0]} />
                    <OrbitControls
                    // enableZoom={false}
                    // enabled={false}
                    // autoRotate
                    // autoRotateSpeed={0.6}
                    />
                    <Stars radius={75} count={500} />
                </group>
            </Canvas>
        </div>
    );
}
