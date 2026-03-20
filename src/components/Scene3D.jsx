import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const Shape = () => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Slow rotation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={hovered ? "#8b5cf6" : "#3b82f6"}
          speed={3}
          distort={0.4}
          radius={1}
          metalness={0.6}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="scene-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <PointLight color="#00e5ff" position={[-10, -10, -10]} intensity={1} />
        
        <Shape />
        
        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.4}
          scale={10}
          blur={2.5}
          far={4}
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

const PointLight = ({ color, ...props }) => {
  return <pointLight color={color} {...props} />
}

export default Scene3D;
