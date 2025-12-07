import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function LivingGeometry() {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.scale.setScalar(1 + Math.sin(t * 0.5) * 0.1);
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
          emissiveIntensity={0.6}
          roughness={0}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
}

export default function CosmicBackground() {
  return (
    <div className="absolute inset-0 -z-10 opacity-70">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#FFD700" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#26619C" />
        <LivingGeometry />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <fog attach="fog" args={["#050505", 5, 25]} />
      </Canvas>
    </div>
  );
}
