import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, Environment, Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const technologies = [
  { name: 'Abdul', color: '#8b5cf6', isCenter: true }, // Using theme primary color for center
  { name: 'TS', color: '#3178c6' },
  { name: 'React', color: '#61dafb' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'Tailwind', color: '#38bdf8' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Python', color: '#3776ab' },
  { name: 'SQL', color: '#4479a1' },
  { name: 'Git', color: '#f05032' },
  { name: 'MongoDB', color: '#47a248' },

];

const TechBall = ({ name, color, isCenter, orbitRadius, orbitSpeed, initialAngle, allBalls, index }) => {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const { viewport, mouse } = useThree();

  // Physics state
  const angle = useRef(initialAngle);
  const position = useMemo(() => new THREE.Vector3(
    isCenter ? 0 : Math.cos(initialAngle) * orbitRadius,
    isCenter ? 0 : Math.sin(initialAngle) * orbitRadius,
    0
  ), [isCenter, initialAngle, orbitRadius]);

  const velocity = useMemo(() => new THREE.Vector3(0, 0, 0), []);

  useFrame((state) => {
    if (!meshRef.current) return;

    if (isCenter) {
      meshRef.current.position.set(0, 0, 0);
    } else {
      // 1. Orbital Motion - Stateless, time-based positioning
      // This ensures perfect synchronization and no drift over time
      const elapsed = state.clock.getElapsedTime();
      const currentAngle = initialAngle + (orbitSpeed * elapsed);

      meshRef.current.position.x = Math.cos(currentAngle) * orbitRadius;
      meshRef.current.position.y = Math.sin(currentAngle) * orbitRadius;
      meshRef.current.position.z = 0;
    }

    // Update shared reference for shadows/other interactions (if any)
    if (allBalls.current) allBalls.current[index].copy(meshRef.current.position);

    // Subtle rotation disabled as per request
  });

  return (
    <mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      castShadow
    >
      <sphereGeometry args={[isCenter ? 0.8 : 0.55, 16, 16]} />
      <meshStandardMaterial
        color={color}
        wireframe={true}
        emissive={color}
        emissiveIntensity={hovered ? 1.0 : 0.4}
      />
      <Text
        position={[0, 0, 0]}
        fontSize={isCenter ? 0.25 : 0.18}
        color="white"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="black"
        fontWeight="bold"
      >
        {name}
      </Text>
    </mesh>
  );
};

const TechStack = () => {
  const balls = useMemo(() => {
    return technologies.map((tech, i) => {
      if (tech.isCenter) {
        return { ...tech, orbitRadius: 0, orbitSpeed: 0, initialAngle: 0 };
      }

      // Calculate orbits - Single tighter ring for all tech items
      const radius = 3.2; // Slightly increased for visibility of gaps
      const orbiters = technologies.filter(t => !t.isCenter).length;
      const angleStep = (Math.PI * 2) / orbiters;
      const orbiterIndex = i - 1; // Index among orbiters

      return {
        ...tech,
        orbitRadius: radius,
        orbitSpeed: 0.25, // Synchronized speed
        initialAngle: orbiterIndex * angleStep,
      };
    });
  }, []);

  // Shared reference for all ball positions for collision
  const ballsRef = useRef(balls.map(() => new THREE.Vector3()));

  return (
    <section id="tech-stack" className="tech-stack-section">
      <div className="container">
        <div className="section-header align-center">
          <h2 className="section-title">MY <span className="gradient-text">SKILLS</span></h2>
          <p className="section-subtitle align-center">Hover over the orbiting skills to interact.</p>
        </div>

        <div className="tech-scene-container">
          <Canvas
            camera={{ position: [0, 0, 12], fov: 35 }}
            dpr={[1, 2]}
            shadows
          >
            <React.Suspense fallback={null}>
              <ambientLight intensity={0.6} />
              <pointLight position={[10, 10, 10]} intensity={1.5} />
              <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />

              {balls.map((ball, i) => (
                <TechBall
                  key={i}
                  name={ball.name}
                  color={ball.color}
                  isCenter={ball.isCenter}
                  orbitRadius={ball.orbitRadius}
                  orbitSpeed={ball.orbitSpeed}
                  initialAngle={ball.initialAngle}
                  allBalls={ballsRef}
                  index={i}
                />
              ))}

              <Environment preset="city" />
              <ContactShadows
                position={[0, -5, 0]}
                opacity={0.4}
                scale={20}
                blur={2.5}
                far={10}
              />
            </React.Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
