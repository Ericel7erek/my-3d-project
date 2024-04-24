import { useRef, useState,Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Molang from '../public/Molang'
import Molango from '../public/Molango'
import Home from '../public/Home'
import { usePlane, Physics, useSphere } from '@react-three/cannon'
import * as THREE from 'three'

const Cube = ({position, size, color}) =>{
  const ref = useRef()
  // useFrame((state, delta) => {
  //   ref.current.rotation.x += delta
  //   ref.current.rotation.y += delta * 2
  //   ref.current.rotation.z = Math.sin(state.clock.elapsedTime) * 2
  // })
  return(
      <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial blendColor={0x990001} color={color}/>
      </mesh>
)}

const Sphere = () => {
  const [ref] = useSphere(()=> ({
    mass: 10,
    position: [0,5,0]
  }))
  return(
    <mesh castShadow ref={ref}>
    <Molango />
    <meshStandardMaterial color={"red"}/>
    </mesh>
  )
}

	const Plane = () => {
		const [ref] = usePlane(() => ({
			mass: 10,
			position: [0, 0, 0],
			rotation: [-Math.PI / 2, 0, 0],
      type: 'static',
		}));
	
		return (
<mesh
scale={0.1}
ref={ref}
rotation={[-Math.PI / 2, 0, 0]}
castShadow
>
  <planeGeometry attach="geometry" args={[1000, 1000]} />
  <meshStandardMaterial color={"white"}/>
</mesh>
		);
	};

const Ball = ({position, size, color}) =>{
    const ref = useRef()
  // useFrame((state, delta) => {
  //   ref.current.rotation.x += delta
  //   ref.current.rotation.y += delta * 2.0
  //   ref.current.position.z = Math.sin(state.clock.elapsedTime) * 3
  //   console.log(state.clock.elapsedTime);
  // })
  return(
      <mesh position={position} ref={ref}>
      <sphereGeometry args={size}/>
      <meshPhysicalMaterial color={color}/>
      </mesh>
      )}

function App() {

  return (
    <div>
      <Canvas>
        <Suspense fallback={null}>  
        
        <Physics>
        <Plane/>
        <Sphere />
        <Molang />
        </Physics>
        <OrbitControls/>
        <ambientLight  intensity={100}/>
        </Suspense>
      </Canvas>
    {/* <Canvas>
      <directionalLight position={[0,0,1]} intensity={1}/>
      <ambientLight  intensity={1}/>
      <Ball color={"white"} />
      <Cube position={[0,0,0]} size={[1,1,1]} color={"red"}/>
      <Cube position={[-1,1,0]} size={[1,1,1]} color={"red"}/>
      <Cube position={[-1,-1,0]} size={[1,1,1]} color={"red"}/>
      <Cube position={[1,-1,0]} size={[1,1,1]} color={"red"}/>
      <OrbitControls/>
    </Canvas> */}
    </div>
  )
}

export default App
