    import React, { useRef, useState } from 'react'
    import {useGLTF, PerspectiveCamera}  from '@react-three/drei'
    import { useFrame } from '@react-three/fiber'

    export default function Molango (props) {
        const { nodes, materials } = useGLTF('/molang_3_d_copy.gltf')
        return (
    <group {...props} dispose={null}>
        <group scale={0.01} >
                <group position={[1.102, 11.408, 23.19]}>
            <group position={[-14.18, 77.124, 147.576]} rotation={[-0.22, 0, 0]} scale={0.512}>
                <mesh geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material} position={[-24.801, 21.542, 0.388]} rotation={[0.001, -0.019, 0.085]} />
                <mesh geometry={nodes.Torus_2.geometry} material={nodes.Torus_2.material} position={[-47.513, 17.383, 0.003]} rotation={[0.001, -0.019, 2.198]} />
                <mesh geometry={nodes.Torus.geometry} material={nodes.Torus.material} position={[-1.885, 20.987, 0.867]} rotation={[0.001, -0.019, 2.198]} />
            </group>
            <mesh geometry={nodes.Body.geometry} material={nodes.Body.material} position={[-19.443, -31.195, -23.267]} rotation={[0, 0, 0.087]} />
            <mesh geometry={nodes.Sphere_3.geometry} material={nodes.Sphere_3.material} position={[51.112, 82.724, 117.209]} rotation={[0, 0, 0.087]} />
            <mesh geometry={nodes.Sphere_2.geometry} material={nodes.Sphere_2.material} position={[-112.815, 68.478, 117.209]} rotation={[0, 0, 0.087]} />
            <mesh geometry={nodes.Sphere.geometry} material={nodes.Sphere.material} position={[-8.102, -165.449, -186.909]} rotation={[-Math.PI, 0, -Math.PI]} />
            <mesh geometry={nodes.Cube_5.geometry} material={nodes.Cube_5.material} position={[107.53, -78.294, 146.635]} rotation={[1.672, 0, -0.157]} scale={0.797} />
            <mesh geometry={nodes.Cube_7.geometry} material={nodes.Cube_7.material} position={[71.21, -197.724, 36.959]} rotation={[3.024, -0.035, -0.453]} scale={0.797} />
            <mesh geometry={nodes.Cube_6.geometry} material={nodes.Cube_6.material} position={[-101.618, -197.144, 41.887]} rotation={[3.024, -0.035, 0.129]} scale={0.797} />
            <mesh geometry={nodes.Cube_4.geometry} material={nodes.Cube_4.material} position={[-30.168, -83.071, 168.162]} rotation={[1.672, 0, -0.403]} scale={0.797} />
            <mesh geometry={nodes.Cube_3.geometry} material={nodes.Cube_3.material} position={[-17.231, 215.121, -8.87]} rotation={[0, 0, 0.383]} scale={0.928} />
            <mesh geometry={nodes.Cube_2.geometry} material={nodes.Cube_2.material} position={[-69.746, 208.695, -8.87]} rotation={[0, 0, -0.175]} scale={0.928} />
            </group>
        </group>
        </group>		
        )
    }

    useGLTF.preload('/molang_3_d_copy.gltf')