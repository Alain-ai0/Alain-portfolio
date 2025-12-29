// BallCanvas renders each technology icon inside a 3D spinning ball
import { BallCanvas } from "./canvas";

// Wraps the section with consistent layout + animation
import { SectionWrapper } from "../hoc";

// Array of technology objects (name + icon)
import { technologies } from "../constants";

// Tech section: displays all technologies as 3D balls
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        // Each technology rendered inside a fixed-size container
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} /> {/* 3D ball with tech icon */}
        </div>
      ))}
    </div>
  )
};

// Export wrapped Tech section (no id anchor provided here)
export default SectionWrapper(Tech, "");
