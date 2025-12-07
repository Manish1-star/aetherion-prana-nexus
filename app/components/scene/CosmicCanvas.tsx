import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Text } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function LivingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    // Breathing animation
    meshRef.current.scale.setScalar(1 + Math.sin(t * 0.5) * 0.1);
    // Rotation
    meshRef.current.rotation.x = t * 0.2;
    meshRef.current.rotation.y = t * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.5, 2]} />
        <meshStandardMaterial 
          color="#26619C" 
          wireframe 
          emissive="#FF7722"
          emissiveIntensity={0.5}
          roughness={0}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

export default function CosmicCanvas() {
  return (
    <div className="absolute inset-0 -z-10 opacity-60">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#FFD700" />
        <LivingGeometry />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <fog attach="fog" args={['#050505', 5, 20]} />
      </Canvas>
    </div>
  );
}
