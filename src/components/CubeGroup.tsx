import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import { pointsInner, pointsOuter } from "@/shared/utils";
import Cube from "./Cube";

export default function CubeGroup() {
    const ref = useRef<Group | null>(null);

    useFrame(({ clock }) => {
        if (ref.current?.rotation) {
            ref.current.rotation.z = clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <group ref={ref}>
            {pointsInner.map((point: any) => (
                <Cube key={point.idx} position={point.position} color={point.color} />
            ))}
            {pointsOuter.map((point: any) => (
                <Cube key={point.idx} position={point.position} color={point.color} />
            ))}
        </group>
    );
};
