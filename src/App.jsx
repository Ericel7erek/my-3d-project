import { useRef, useState,Suspense, useEffect } from 'react'
import './App.css'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { CameraControls, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Molang from '../public/Molang'
import Molango from '../public/Molango'
import Home from '../public/Home'
import { usePlane, Physics, useCylinder, useBox } from '@react-three/cannon'
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

const Momo = () => {
  const [ref] = useCylinder(()=> ({
    mass: 10,
    position: [0,5,0],
    args: [1,1,5],
  }))

  return(
    <mesh castShadow ref={ref}>
    <Molango />
    {/* <cylinderGeometry /> */}
    <meshStandardMaterial color={"red"} />
    </mesh>
  )
}


const Ball = () =>{
    const [ref] = useBox(()=> ({
      mass: 50,
      position:[0,10,0],
      args:[2,2,2]
    }))
  // const ref = useRef()
  // useFrame((state, delta) => {
  //   ref.current.rotation.x += delta
  //   ref.current.rotation.y += delta * 2.0
  //   ref.current.position.z = Math.sin(state.clock.elapsedTime) * 3
  //   console.log(state.clock.elapsedTime);
  // })
  return(
      <mesh castShadow ref={ref}>
      <sphereGeometry />
      <meshPhysicalMaterial color={"green"}/>
      </mesh>
      )}

	const Plane = () => {
		const [ref,api] = usePlane(() => ({
			mass: 1,
			position: [0, 0, 0],
			rotation: [-Math.PI / 2, 0, 0],
      type: 'Static',
		}));
	  useFrame(({pointer})=> {
    api.position.set(0+ pointer.x*20,0+pointer.y*20,0)
    console.log(api.rotation);
  })
		return (
<mesh
scale={1}
ref={ref}
rotation={[-Math.PI / 2, 0, 0]}
castShadow
>
  <planeGeometry attach="geometry" args={[50, 50]} />
  <meshStandardMaterial />
</mesh>
		);
	};

  const ResizeHandler = () => {
  const { camera, gl } = useThree();

  useEffect(() => {
    const handleResize = () => {
      // Update the aspect ratio
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      // Update the size of the renderer
      gl.setSize(window.innerWidth, window.innerHeight);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [camera, gl]);

  return null;
};


function App() {
  return (
    <div>
      <Canvas camera={{ position: [10, 10, 20] }}>
        <Suspense fallback={null}>
        <ResizeHandler />
        <directionalLight  intensity={1} position={[10,5,10]}/>
        <ambientLight  intensity={0.2}/>
        <Physics>
        <Plane/>
        <Ball />
        <Momo />
        <Molang />
        </Physics>
        <PerspectiveCamera />
        <OrbitControls  />
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
