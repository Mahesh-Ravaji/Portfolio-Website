import { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

function ProjectCube({ position, imageUrl, title }: any) {
  const meshRef = useRef<THREE.Mesh>();
  const texture = useLoader(THREE.TextureLoader, imageUrl);

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onPointerOver={(e) => {
          document.body.style.cursor = 'pointer';
          if (meshRef.current) {
            meshRef.current.scale.set(1.2, 1.2, 1.2);
          }
        }}
        onPointerOut={(e) => {
          document.body.style.cursor = 'default';
          if (meshRef.current) {
            meshRef.current.scale.set(1, 1, 1);
          }
        }}
      >
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>
    </group>
  );
}

function Scene() {
  const projects = [
    {
      title: "E-Commerce Platform",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=400&fit=crop",
      position: [-4, 0, 0]
    },
    {
      title: "DevOps 3 Tier applicaiton deployment using CI/CD Pipeline ",
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=800&h=400&fit=crop",
      position: [0, 0, 0]
    },
    {
      title: "2 Tier application deployment on Docker ",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      position: [4, 0, 0]
    },
    {
      title: "2 Tier application deployment on DockerHub ",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
      position: [4, 0, 0]
    }
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {projects.map((project, index) => (
        <ProjectCube
          key={index}
          position={project.position}
          imageUrl={project.image}
          title={project.title}
        />
      ))}
    </>
  );
}

export function ThreeDProjects() {
  return (
    <div className="h-[50vh] w-full">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}