import { useRef, useState,Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import Molang from '../public/Molang'
import Home from '../public/Home'
import { damp } from 'three/src/math/MathUtils'

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
          <directionalLight position={[0,2,0]} intensity={1}  />
        <Molang />
        {/* <Home /> */}
        <Environment preset="park"   background/>
        <OrbitControls/>
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
