
import { Canvas, } from "@react-three/fiber";
import { OrbitControls, } from "@react-three/drei";
import CubeGroup from "./CubeGroup";

export default function SectionCube() {
    return (
        <Canvas camera={{ position: [10, -7.5, -5] }} style={{ height: "100vh" }}  >
            <OrbitControls maxDistance={20} minDistance={10} />
            <directionalLight />
            <pointLight position={[-30, 0, -30]} power={10.0} />
            <CubeGroup />
        </Canvas>
    );
};
