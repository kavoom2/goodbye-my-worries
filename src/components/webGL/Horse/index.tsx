/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useAnimations, useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Beta_Joints: THREE.SkinnedMesh
    Beta_Surface: THREE.SkinnedMesh
    mixamorigHips: THREE.Bone
  }
  materials: {
    Beta_Joints_MAT: THREE.MeshStandardMaterial
    ['asdf1:Beta_HighLimbsGeoSG2']: THREE.MeshStandardMaterial
  }
}

type ActionName = 'agree' | 'headShake' | 'idle' | 'run' | 'sad_pose' | 'sneak_pose' | 'walk'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

function Horse(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group>()
  const { nodes, materials, animations } = useGLTF('/models/gltf/Xbot.glb') as GLTFResult
  const { actions } = useAnimations<GLTFActions>(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group name='Armature' scale={0.01}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name='Beta_Joints'
            geometry={nodes.Beta_Joints.geometry}
            material={materials.Beta_Joints_MAT}
            skeleton={nodes.Beta_Joints.skeleton}
          />
          <skinnedMesh
            name='Beta_Surface'
            geometry={nodes.Beta_Surface.geometry}
            material={materials['asdf1:Beta_HighLimbsGeoSG2']}
            skeleton={nodes.Beta_Surface.skeleton}
          />
        </group>
      </group>
    </group>
  )
}

export default Horse

useGLTF.preload('/models/gltf/Xbot.glb')