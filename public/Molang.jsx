import React, { useRef } from 'react'
import {useGLTF, PerspectiveCamera}  from '@react-three/drei'

const ColoredMesh = ({ geometry, material, position, rotation, scale   }) => {
  return (
    <mesh geometry={geometry} material={material} position={position} rotation={rotation} scale={scale} >
      <meshBasicMaterial color={"brown"}/>
    </mesh>
  );
};
export default function Model (props) {
  const { nodes, materials } = useGLTF('/molang_3_d_copy.gltf')

  return (
    
    <group {...props} dispose={null}>
      <group scale={0.01} >
        <group position={[55.182, 3.613, 219.636]} rotation={[-0.113, -0.595, -0.054]}>
          <ColoredMesh geometry={nodes.Cube_8.geometry} material={nodes.Cube_8.material} position={[0.152, -9.575, 9.859]} color={"yellow"}/>
          
          <ColoredMesh geometry={nodes.Sphere_5.geometry} material={nodes.Sphere_5.material} position={[30.831, 24.036, 60.607]} scale={0.776} color={"brown"} />
            
          <ColoredMesh geometry={nodes.Sphere_4.geometry} material={nodes.Sphere_4.material} position={[-29.556, 24.036, 60.607]} scale={0.776} />
          <ColoredMesh geometry={nodes.Cube_14.geometry} material={nodes.Cube_14.material} position={[-62.232, -26.563, 32.583]} rotation={[-2.9, -0.169, 0.473]} scale={0.269} />
          <ColoredMesh geometry={nodes.Cube_13.geometry} material={nodes.Cube_13.material} position={[60.878, -22.674, 32.915]} rotation={[-3.116, 0.252, -0.469]} scale={0.269} />
          <ColoredMesh geometry={nodes.Cube_12.geometry} material={nodes.Cube_12.material} position={[28.307, -66.415, 22.503]} rotation={[3.024, -0.035, -0.453]} scale={0.269} />
          <ColoredMesh geometry={nodes.Cube_12_1.geometry} material={nodes.Cube_12_1.material} position={[-29.902, -66.219, 24.163]} rotation={[3.024, -0.035, 0.129]} scale={0.269} />
          <ColoredMesh geometry={nodes.Cube_11.geometry} material={nodes.Cube_11.material} position={[1.087, 8.832, 64.435]} rotation={[1.155, 0.495, 0.615]} scale={[0.96, 1.036, 0.925]} />
          <ColoredMesh geometry={nodes.Cube_10.geometry} material={nodes.Cube_10.material} position={[0.52, 15.391, 65.025]} rotation={[-0.09, 0.848, 1.193]} scale={[0.876, 0.969, 0.997]} />
          <ColoredMesh geometry={nodes.Cube_9.geometry} material={nodes.Cube_9.material} position={[-1.402, 60.953, 25.991]} rotation={[0.675, 0.263, 0.622]} />
        </group>
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
        <directionalLight intensity={0.7} decay={2} rotation={[-0.506, 0.629, 0.756]} />
        <PerspectiveCamera makeDefault={false} far={100000} near={70} fov={45} position={[738.069, 117.167, 1500.403]} rotation={[-0.013, 0.519, 0.007]} />
        {/* <mesh geometry={nodes.Floor.geometry} material={nodes.Floor.material} position={[21.443, -244.755, 111.187]} rotation={[-Math.PI / 2, 0, 0]} /> */}
      </group>
    </group>
  )
}

useGLTF.preload('/molang_3_d_copy.gltf')

// import * as BufferGeometryUtils from './jsm/utils/BufferGeometryUtils.js'
// import useSpline from '@splinetool/r3f-spline'
// import { OrthographicCamera } from '@react-three/drei'

// export default function Scene({ ...props }) {
//   const { nodes, materials } = useSpline('https://prod.spline.design/OzM84JrbXTehEQwc/scene.splinecode')
//   return (
//     <>
//       <color attach="background" args={['#feeaea']} />
//       <group {...props} dispose={null}>
//         <scene name="Scene">
//           <directionalLight
//             name="Directional Light"
//             intensity={0.7}
//             shadow-mapSize-width={1024}
//             shadow-mapSize-height={1024}
//             shadow-camera-near={-10000}
//             shadow-camera-far={100000}
//             shadow-camera-left={-1250}
//             shadow-camera-right={1250}
//             shadow-camera-top={1250}
//             shadow-camera-bottom={-1250}
//             position={[200, 300, 300]}
//           />
//           <mesh
//             name="Floor"
//             geometry={nodes.Floor.geometry}
//             material={materials['Floor Material']}
//             castShadow
//             receiveShadow
//             position={[21.44, -244.76, 111.19]}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={1}
//           />
//           <group name="Little" position={[55.18, 3.61, 219.64]} rotation={[-0.11, -0.6, -0.05]} scale={1}>
//             <mesh
//               name="Cube 8"
//               geometry={nodes['Cube 8'].geometry}
//               material={materials['Little Body']}
//               castShadow
//               receiveShadow
//               position={[0.15, -9.58, 9.86]}
//             />
//             <mesh
//               name="Sphere 5"
//               geometry={nodes['Sphere 5'].geometry}
//               material={materials.Eyes}
//               castShadow
//               receiveShadow
//               position={[30.83, 24.04, 60.61]}
//               scale={0.78}
//             />
//             <mesh
//               name="Sphere 4"
//               geometry={nodes['Sphere 4'].geometry}
//               material={materials.Eyes}
//               castShadow
//               receiveShadow
//               position={[-29.56, 24.04, 60.61]}
//               scale={0.78}
//             />
//             <mesh
//               name="Cube 14"
//               geometry={nodes['Cube 14'].geometry}
//               material={materials['Little Body']}
//               castShadow
//               receiveShadow
//               position={[-62.23, -26.56, 32.58]}
//               rotation={[-2.9, -0.17, 0.47]}
//               scale={0.27}
//             />
//             <mesh
//               name="Cube 13"
//               geometry={nodes['Cube 13'].geometry}
//               material={materials['Little Body']}
//               castShadow
//               receiveShadow
//               position={[60.88, -22.67, 32.91]}
//               rotation={[-3.12, 0.25, -0.47]}
//               scale={0.27}
//             />
//             <mesh
//               name="Cube 12"
//               geometry={nodes['Cube 12'].geometry}
//               material={materials['Little orange']}
//               castShadow
//               receiveShadow
//               position={[28.31, -66.41, 22.5]}
//               rotation={[3.02, -0.03, -0.45]}
//               scale={0.27}
//             />
//             <mesh
//               name="Cube 121"
//               geometry={nodes['Cube 121'].geometry}
//               material={materials['Little orange']}
//               castShadow
//               receiveShadow
//               position={[-29.9, -66.22, 24.16]}
//               rotation={[3.02, -0.03, 0.13]}
//               scale={0.27}
//             />
//             <mesh
//               name="Cube 11"
//               geometry={nodes['Cube 11'].geometry}
//               material={materials['Little orange']}
//               castShadow
//               receiveShadow
//               position={[1.09, 8.83, 64.44]}
//               rotation={[1.16, 0.5, 0.61]}
//               scale={[0.96, 1.04, 0.93]}
//             />
//             <mesh
//               name="Cube 10"
//               geometry={nodes['Cube 10'].geometry}
//               material={materials['Little orange']}
//               castShadow
//               receiveShadow
//               position={[0.52, 15.39, 65.03]}
//               rotation={[-0.09, 0.85, 1.19]}
//               scale={[0.88, 0.97, 1]}
//             />
//             <mesh
//               name="Cube 9"
//               geometry={nodes['Cube 9'].geometry}
//               material={materials['Little Body']}
//               castShadow
//               receiveShadow
//               position={[-1.4, 60.95, 25.99]}
//               rotation={[0.68, 0.26, 0.62]}
//               scale={1}
//             />
//           </group>
//           <group name="Big" position={[1.1, 11.41, 23.19]}>
//             <mesh
//               name="Body"
//               geometry={nodes.Body.geometry}
//               material={materials['Big Body']}
//               castShadow
//               receiveShadow
//               position={[-19.44, -31.2, -23.27]}
//               rotation={[0, 0, 0.09]}
//               scale={1}
//             />
//             <group name="Group" position={[-14.18, 77.12, 147.58]} rotation={[-0.22, 0, 0]} scale={0.51}>
//               <mesh
//                 name="Cylinder"
//                 geometry={nodes.Cylinder.geometry}
//                 material={materials.Eyes}
//                 castShadow
//                 receiveShadow
//                 position={[-24.8, 21.54, 0.39]}
//                 rotation={[0, -0.02, 0.08]}
//                 scale={1}
//               />
//               <mesh
//                 name="Torus 2"
//                 geometry={nodes['Torus 2'].geometry}
//                 material={materials.Eyes}
//                 castShadow
//                 receiveShadow
//                 position={[-47.51, 17.38, 0]}
//                 rotation={[0, -0.02, 2.2]}
//                 scale={1}
//               />
//               <mesh
//                 name="Torus"
//                 geometry={nodes.Torus.geometry}
//                 material={materials.Eyes}
//                 castShadow
//                 receiveShadow
//                 position={[-1.89, 20.99, 0.87]}
//                 rotation={[0, -0.02, 2.2]}
//                 scale={1}
//               />
//             </group>
//             <mesh
//               name="Sphere 3"
//               geometry={nodes['Sphere 3'].geometry}
//               material={materials.Eyes}
//               castShadow
//               receiveShadow
//               position={[51.11, 82.72, 117.21]}
//               rotation={[0, 0, 0.09]}
//             />
//             <mesh
//               name="Sphere 2"
//               geometry={nodes['Sphere 2'].geometry}
//               material={materials.Eyes}
//               castShadow
//               receiveShadow
//               position={[-112.82, 68.48, 117.21]}
//               rotation={[0, 0, 0.09]}
//             />
//             <mesh
//               name="Sphere"
//               geometry={nodes.Sphere.geometry}
//               material={materials['Big Body']}
//               castShadow
//               receiveShadow
//               position={[-8.1, -165.45, -186.91]}
//               rotation={[-Math.PI, 0, -Math.PI]}
//             />
//             <mesh
//               name="Cube 5"
//               geometry={nodes['Cube 5'].geometry}
//               material={materials['Big Body']}
//               castShadow
//               receiveShadow
//               position={[107.53, -78.29, 146.64]}
//               rotation={[1.67, 0, -0.16]}
//               scale={0.8}
//             />
//             <mesh
//               name="Cube 7"
//               geometry={nodes['Cube 7'].geometry}
//               material={materials['Big Body']}
//               castShadow
//               receiveShadow
//               position={[71.21, -197.72, 36.96]}
//               rotation={[3.02, -0.03, -0.45]}
//               scale={0.8}
//             />
//             <mesh
//               name="Cube 6"
//               geometry={nodes['Cube 6'].geometry}
//               material={materials['Big Body']}
//               castShadow
//               receiveShadow
//               position={[-101.62, -197.14, 41.89]}
//               rotation={[3.02, -0.03, 0.13]}
//               scale={0.8}
//             />
//             <mesh
//               name="Cube 4"
//               geometry={nodes['Cube 4'].geometry}
//               material={materials['Big Body']}
//               castShadow
//               receiveShadow
//               position={[-30.17, -83.07, 168.16]}
//               rotation={[1.67, 0, -0.4]}
//               scale={0.8}
//             />
//             <mesh
//               name="Cube 3"
//               geometry={nodes['Cube 3'].geometry}
//               material={materials['Big Body']}
//               castShadow
//               receiveShadow
//               position={[-17.23, 215.12, -8.87]}
//               rotation={[0, 0, 0.38]}
//               scale={0.93}
//             />
//             <mesh
//               name="Cube 2"
//               geometry={nodes['Cube 2'].geometry}
//               material={materials['Big Body']}
//               castShadow
//               receiveShadow
//               position={[-69.75, 208.7, -8.87]}
//               rotation={[0, 0, -0.18]}
//               scale={0.93}
//             />
//           </group>
//           <OrthographicCamera name="1" makeDefault={true} far={10000} near={-50000} />
//           <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
//         </scene>
//       </group>
//     </>
//   )
// }
