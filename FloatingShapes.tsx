import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

export function FloatingShapes() {
  return (
    <group>
      {/* Main Torus */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[2, 1, -2]} scale={0.8}>
          <torusGeometry args={[1, 0.3, 32, 64]} />
          <MeshDistortMaterial
            color="#8b5cf6"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
      </Float>

      {/* Icosahedron */}
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
        <mesh position={[-2.5, -1, -1]} scale={0.6}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#06b6d4"
            attach="material"
            distort={0.2}
            speed={3}
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>
      </Float>

      {/* Octahedron */}
      <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.8}>
        <mesh position={[0, 2, -3]} scale={0.5}>
          <octahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            color="#c084fc"
            attach="material"
            distort={0.4}
            speed={1.5}
            roughness={0.1}
            metalness={0.9}
          />
        </mesh>
      </Float>

      {/* Dodecahedron */}
      <Float speed={2.2} rotationIntensity={0.6} floatIntensity={2}>
        <mesh position={[-1, -2, -2]} scale={0.4}>
          <dodecahedronGeometry args={[1, 0]} />
          <MeshDistortMaterial
            color="#22d3ee"
            attach="material"
            distort={0.25}
            speed={2.5}
            roughness={0.4}
            metalness={0.6}
          />
        </mesh>
      </Float>

      {/* Small spheres */}
      {[...Array(8)].map((_, i) => (
        <Float
          key={i}
          speed={1 + Math.random()}
          rotationIntensity={0.3}
          floatIntensity={1}
        >
          <mesh
            position={[
              (Math.random() - 0.5) * 8,
              (Math.random() - 0.5) * 6,
              (Math.random() - 0.5) * 4 - 2,
            ]}
            scale={0.1 + Math.random() * 0.15}
          >
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? '#8b5cf6' : '#06b6d4'}
              roughness={0.2}
              metalness={0.8}
              emissive={i % 2 === 0 ? '#8b5cf6' : '#06b6d4'}
              emissiveIntensity={0.3}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}