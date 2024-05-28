import { Box } from "@react-three/drei";

type CubeProps = {
    position: number[];
    color: string
}

export default function Cube({ position, color }: CubeProps) {
    return (
        // @ts-expect-error - 
        // Passing a num array as opposed to a Vector3 
        // is acceptable and the referenced method in the documentation
        <Box position={position} args={[0.3, 0.3, 0.3]}>
            <meshStandardMaterial
                emissive={color}
                emissiveIntensity={0.5}
                roughness={0.5}
                color={color}
            />
        </Box>
    );
};