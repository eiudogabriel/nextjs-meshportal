"use client"

import * as THREE from 'three'
import React, { useRef, useEffect, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type ActionName = 'Bite_Front' | 'Dance' | 'Death' | 'HitRecieve' | 'Idle' | 'Jump' | 'No' | 'Walk' | 'Yes'
// type GLTFActions = Record<ActionName, THREE.AnimationAction>
interface GLTFActions extends THREE.AnimationClip {
  name: ActionName
}

type GLTFResult = GLTF & {
  nodes: {
    Cube146: THREE.SkinnedMesh
    Cube146_1: THREE.SkinnedMesh
    Cube000: THREE.SkinnedMesh
    Cube000_1: THREE.SkinnedMesh
    Cube000_2: THREE.SkinnedMesh
    Cube000_3: THREE.SkinnedMesh
    Cube000_4: THREE.SkinnedMesh
    Body: THREE.Bone
    Head: THREE.Bone
  }
  materials: {
    Cactoro_Main: THREE.MeshStandardMaterial
    Cactoro_Secondary: THREE.MeshStandardMaterial
    Cactoro_Red: THREE.MeshStandardMaterial
    Eye_Black: THREE.MeshStandardMaterial
    Eye_White: THREE.MeshStandardMaterial
  }
  animations: GLTFActions[];
}

export function Cactoro(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>(null!)
  const { nodes, materials, animations } = useGLTF('/models/Cactoro.gltf') as GLTFResult
  const { actions } = useAnimations(animations, group)
  const [isMounted, setIsMounted] = useState(null)
  console.log(actions)

  useEffect(() => {
    actions["Idle"]?.reset().fadeIn(0.5).play();
    return () => {
      actions["Idle"]?.fadeOut(0.5)
    };
  }, [])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="CharacterArmature">
          <primitive object={nodes.Body} />
          <primitive object={nodes.Head} />
          <group name="Cactoro_Blob">
            <skinnedMesh name="Cube146" geometry={nodes.Cube146.geometry} material={materials.Cactoro_Main} skeleton={nodes.Cube146.skeleton} />
            <skinnedMesh name="Cube146_1" geometry={nodes.Cube146_1.geometry} material={materials.Cactoro_Secondary} skeleton={nodes.Cube146_1.skeleton} />
          </group>
          <group name="Cactoro_Blob001">
            <skinnedMesh name="Cube000" geometry={nodes.Cube000.geometry} material={materials.Cactoro_Main} skeleton={nodes.Cube000.skeleton} />
            <skinnedMesh name="Cube000_1" geometry={nodes.Cube000_1.geometry} material={materials.Cactoro_Secondary} skeleton={nodes.Cube000_1.skeleton} />
            <skinnedMesh name="Cube000_2" geometry={nodes.Cube000_2.geometry} material={materials.Cactoro_Red} skeleton={nodes.Cube000_2.skeleton} />
            <skinnedMesh name="Cube000_3" geometry={nodes.Cube000_3.geometry} material={materials.Eye_Black} skeleton={nodes.Cube000_3.skeleton} />
            <skinnedMesh name="Cube000_4" geometry={nodes.Cube000_4.geometry} material={materials.Eye_White} skeleton={nodes.Cube000_4.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/Cactoro.gltf')
