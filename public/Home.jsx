
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Home.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.mesh.geometry} material={materials.main} />
    </group>
  )
}

useGLTF.preload('/Home.gltf')
