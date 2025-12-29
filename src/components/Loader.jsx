import { Html, useProgress } from "@react-three/drei";
// Html: lets you render regular HTML elements inside the 3D canvas
// useProgress: hook that tracks the loading progress of 3D assets

const Loader = () => {
  const { progress } = useProgress();
  // progress gives you the percentage of assets loaded (0-100)

  return (
    // Html component centers the loader UI inside the canvas
    <Html center>
      {/* Custom span for a loading animation (styled in CSS) */}
      <span className="canvas-load"></span>

      {/* Text showing the current loading percentage */}
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

// Export Loader so it can be used as a fallback while 3D models/textures load
export default Loader;
