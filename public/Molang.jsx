import React, { useRef, useState } from 'react'
import {useGLTF, PerspectiveCamera}  from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function Model (props){
	const { nodes, materials } = useGLTF('/molang_3_d_copy.gltf')
	const ref = useRef()
	const [hovered, isHovered]=useState(false)
	const [clicked, isClicked]=useState(false)

	useFrame((state, delta)=>{
		const speed = hovered? 0.2 : 2;
		// ref.current.rotation.x += delta * speed
		ref.current.position.y += Math.sin(state.clock.elapsedTime) * speed
		// ref.current.position.z += delta * speed
	})
	const ColoredMesh = ({ geometry, material, position, rotation, scale, color }) => {
		return (
			<mesh geometry={geometry} material={material} position={position} rotation={rotation} scale={scale} >
				<meshBasicMaterial color={color} />
			</mesh>
		);
	};
  return (
    
    <group {...props} dispose={null}>
      <group scale={0.01} >
        <group
				position={[55.182, 3.613, 219.636]} 
				rotation={[-0.113, -0.595, -0.054]} 
				ref={ref} 
				onPointerEnter={(e)=>(e.stopPropagation(), isHovered(true))}
				onPointerLeave={()=> isHovered(false)}
				onClick={()=> isClicked(!clicked)}
				scale={clicked ? 100:1}

				>
          <ColoredMesh  geometry={nodes.Cube_8.geometry} material={nodes.Cube_8.material} position={[0.152, -9.575, 9.859]} color={"yellow"}/>
          <ColoredMesh geometry={nodes.Sphere_5.geometry} material={nodes.Sphere_5.material} position={[30.831, 24.036, 60.607]} scale={0.776} color={"brown"} />
          <ColoredMesh geometry={nodes.Sphere_4.geometry} material={nodes.Sphere_4.material} position={[-29.556, 24.036, 60.607]} scale={0.776} color={"brown"} />
          <ColoredMesh geometry={nodes.Cube_14.geometry} material={nodes.Cube_14.material} position={[-62.232, -26.563, 32.583]} rotation={[-2.9, -0.169, 0.473]} scale={0.269} color={"brown"} />
          <ColoredMesh geometry={nodes.Cube_13.geometry} material={nodes.Cube_13.material} position={[60.878, -22.674, 32.915]} rotation={[-3.116, 0.252, -0.469]} scale={0.269} color={"brown"} />
          <ColoredMesh geometry={nodes.Cube_12.geometry} material={nodes.Cube_12.material} position={[28.307, -66.415, 22.503]} rotation={[3.024, -0.035, -0.453]} scale={0.269} color={"brown"} />
          <ColoredMesh geometry={nodes.Cube_12_1.geometry} material={nodes.Cube_12_1.material} position={[-29.902, -66.219, 24.163]} rotation={[3.024, -0.035, 0.129]} scale={0.269} color={"brown"} />
          <ColoredMesh geometry={nodes.Cube_11.geometry} material={nodes.Cube_11.material} position={[1.087, 8.832, 64.435]} rotation={[1.155, 0.495, 0.615]} scale={[0.96, 1.036, 0.925]} color={"brown"} />
          <ColoredMesh geometry={nodes.Cube_10.geometry} material={nodes.Cube_10.material} position={[0.52, 15.391, 65.025]} rotation={[-0.09, 0.848, 1.193]} scale={[0.876, 0.969, 0.997]} color={"brown"} />
          <ColoredMesh geometry={nodes.Cube_9.geometry} material={nodes.Cube_9.material} position={[-1.402, 60.953, 25.991]} rotation={[0.675, 0.263, 0.622]} color={"brown"} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/molang_3_d_copy.gltf')

