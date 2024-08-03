import React from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import Polyhedron from "./Polyhedron";

export default function Scene() {
  const d = 0.5;
  const p = 1;
  const polyhedron = [
    new THREE.BoxGeometry(d, d, d),
    new THREE.SphereGeometry(d),
    new THREE.ConeGeometry(d),
  ];

  return (
    <div className="fixed  left-[50%] top-[50%] h-full w-full -translate-x-[50%] -translate-y-[50%]">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <Polyhedron position={[0, 0, 1.7]} polyhedron={polyhedron} />
        <Polyhedron position={[-p, -p, 0]} polyhedron={polyhedron} />
        <Polyhedron position={[p, -p, 0]} polyhedron={polyhedron} />
        <Polyhedron position={[-p, p, 0]} polyhedron={polyhedron} />
        <Polyhedron position={[p, p, 0]} polyhedron={polyhedron} />
        {/* <Stats /> */}
      </Canvas>
    </div>
  );
}
