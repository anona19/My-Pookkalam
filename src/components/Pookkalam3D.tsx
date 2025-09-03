import { useRef, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

// Individual petal component
const Petal = ({ position, rotation, color, scale = 1 }: { 
  position: [number, number, number]; 
  rotation: [number, number, number]; 
  color: string;
  scale?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
      <cylinderGeometry args={[0.3, 0.1, 0.1, 8]} />
      <meshPhongMaterial color={color} />
    </mesh>
  );
};

// Ring component for concentric patterns
const PookkalamRing = ({ radius, petals, colors, yPosition = 0 }: {
  radius: number;
  petals: number;
  colors: string[];
  yPosition?: number;
}) => {
  const petalElements = useMemo(() => {
    const elements = [];
    for (let i = 0; i < petals; i++) {
      const angle = (i / petals) * Math.PI * 2;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const color = colors[i % colors.length];
      
      elements.push(
        <Petal
          key={i}
          position={[x, yPosition, z]}
          rotation={[0, angle, 0]}
          color={color}
          scale={0.8 + Math.sin(i * 0.5) * 0.3}
        />
      );
    }
    return elements;
  }, [radius, petals, colors, yPosition]);

  return <>{petalElements}</>;
};

// Central ornament
const CenterOrnament = () => {
  return (
    <group position={[0, 0.2, 0]}>
      {/* Central sphere */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshPhongMaterial color="#e74c3c" />
      </mesh>
      
      {/* Decorative points */}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x = Math.cos(angle) * 0.4;
        const z = Math.sin(angle) * 0.4;
        return (
          <mesh key={i} position={[x, 0.1, z]} rotation={[0, angle, 0]}>
            <coneGeometry args={[0.1, 0.3, 4]} />
            <meshPhongMaterial color="#f39c12" />
          </mesh>
        );
      })}
    </group>
  );
};

// Main 3D Pookkalam component
const Pookkalam3DScene = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Color palette from the original pookkalam
  const orangeShades = ["#ff6b35", "#ff8c42", "#ffa726"];
  const yellowShades = ["#ffd54f", "#ffeb3b", "#fff176"];
  const pinkShades = ["#e91e63", "#f06292", "#f48fb1"];
  const greenShades = ["#4caf50", "#66bb6a", "#81c784"];
  const redShades = ["#e74c3c", "#ef5350", "#f44336"];

  return (
    <group ref={groupRef}>
      {/* Outer ring - Orange petals */}
      <PookkalamRing radius={3} petals={16} colors={orangeShades} yPosition={0} />
      
      {/* Second ring - Yellow petals */}
      <PookkalamRing radius={2.3} petals={12} colors={yellowShades} yPosition={0.05} />
      
      {/* Third ring - Pink petals */}
      <PookkalamRing radius={1.7} petals={10} colors={pinkShades} yPosition={0.1} />
      
      {/* Fourth ring - Green petals */}
      <PookkalamRing radius={1.2} petals={8} colors={greenShades} yPosition={0.15} />
      
      {/* Inner ring - Red petals */}
      <PookkalamRing radius={0.8} petals={6} colors={redShades} yPosition={0.18} />
      
      {/* Center ornament */}
      <CenterOrnament />
      
      {/* Base platform */}
      <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[3.5, 32]} />
        <meshPhongMaterial color="#f5f5f5" transparent opacity={0.8} />
      </mesh>
    </group>
  );
};

// Main exported component
export const Pookkalam3D = () => {
  return (
    <div className="w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-muted to-background shadow-2xl">
      <Canvas camera={{ position: [5, 4, 5], fov: 60 }}>
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[0, 5, 0]} intensity={0.5} color="#ffd54f" />
        
        {/* 3D Pookkalam */}
        <Pookkalam3DScene />
        
        {/* Controls */}
        <OrbitControls 
          enablePan={false}
          enableZoom={true}
          minDistance={3}
          maxDistance={10}
          minPolarAngle={Math.PI / 6}
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={1}
        />
      </Canvas>
    </div>
  );
};