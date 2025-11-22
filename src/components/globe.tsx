"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import { Group, Vector3 } from "three";

const AnimatedGlobe = () => {
    const globeRef = useRef<Group>(null);

    useFrame(({ clock }) => {
        if (globeRef.current) {
            globeRef.current.rotation.y = clock.getElapsedTime() * 0.2;
        }
    });

    return (
        <group ref={globeRef}>
            <Sphere args={[1, 32, 32]} scale={2.5}>
                <meshStandardMaterial
                    color="#ffffff"
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </Sphere>
            <Sphere args={[1, 32, 32]} scale={2.4}>
                <meshBasicMaterial color="#000000" />
            </Sphere>
        </group>
    );
};

export function Globe() {
    return (
        <div className="h-full w-full min-h-[10rem] flex items-center justify-center relative overflow-hidden rounded-xl bg-zinc-900">
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black/60 pointer-events-none" />
            <Canvas className="h-full w-full">
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <AnimatedGlobe />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
            <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-xl font-bold text-white">Remote Work</h3>
                <p className="text-sm text-zinc-300">Available for global collaboration</p>
            </div>
        </div>
    );
}
