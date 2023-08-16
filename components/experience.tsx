"use client";

import * as THREE from "three";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, ThreeElements } from "@react-three/fiber";
import { Cactoro } from "@/components/models/cactoro";

const Experience = (props: ThreeElements["mesh"]) => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const map = useRef("textures")
  return (
    <>
      <OrbitControls />
      <mesh {...props} ref={meshRef}>
        <Cactoro scale={0.45} />
      </mesh>
    </>
  );
};

interface MonsterStageProps {
    children: React.ReactNode;
    texture: string;
    color: string;
    name: string;
    active: boolean;
    setActive: boolean;
    hovered: boolean;
    setHovered: string;
}

function MonsterStage({
  children,
  texture,
  color,
  name,
  active,
  setActive,
  hovered,
  setHovered,
  ...props
}: MonsterStageProps) {

}

export const ExperienceCanvas = () => {
  return (
    <Canvas camera={{ position: [3, 3, 3], fov: 30 }}>
      <ambientLight intensity={1} />

      <color attach="background" args={["#ececec"]} />
      <Experience />
    </Canvas>
  );
};
