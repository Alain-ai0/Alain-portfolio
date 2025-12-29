import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei'

import CanvasLoader from '../Loader';

// Ball component: renders a 3D floating ball with a texture decal (icon)
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]); // Load texture from the icon URL

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}> {/* Floating animation */}
      <ambientLight intensity={0.25}/> {/* Soft ambient light */}
      <directionalLight position={[0, 0, 0.05]} /> {/* Directional light for shading */}
      <mesh castShadow receiveShadow scale={2.75}> {/* Main ball mesh */}
        <icosahedronGeometry args={[1, 1]} /> {/* Ball geometry (20-sided polyhedron) */}
        <meshStandardMaterial 
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        /> {/* Material with flat shading */}
        <Decal 
          position={[0, 0, 1]}
          rotation={[ 2 * Math.PI, 0, 6.25]}
          map={decal} 
        /> {/* Apply icon texture as a decal on the ball */}
      </mesh>
    </Float>
  )
}

// BallCanvas: sets up the 3D canvas and renders the Ball with controls
const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}> {/* Show loader while assets load */}
        <OrbitControls enableZoom={false} /> {/* Allow rotation but disable zoom */}
        <Ball imgUrl={icon}/> {/* Render ball with passed icon */}
      </Suspense>

      <Preload all /> {/* Preload all assets for smoother experience */}
    </Canvas>
  )
}

export default BallCanvas; // Export for use in Tech section
