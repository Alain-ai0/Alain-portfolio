import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// Earth component: loads and renders the 3D Earth model
const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf"); // Load GLTF model

  return (
    <primitive
      object={earth.scene} // Render the loaded scene
      scale={2.5} // Resize the model
      position-y={0} // Position on Y-axis
      rotation-y={0} // Rotation on Y-axis
    />
  );
};

// Canvas setup for rendering Earth with controls and loader
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6], // Camera position
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {" "}
        {/* Show loader while model loads */}
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2} // Limit rotation vertically
          minPolarAngle={Math.PI / 2}
        />
        <Earth /> {/* Render Earth model */}
        <Preload all /> {/* Preload assets for smoother experience */}
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
