import Tilt from 'react-tilt'; // 3D tilt effect on project cards
import { motion } from 'framer-motion'; // Animations

import { styles } from '../styles'; // Custom Tailwind + style definitions
import { github } from '../assets'; // Github icon asset
import { SectionWrapper } from '../hoc'; // Wrapper for consistent layout + animation
import { projects } from '../constants'; // Array of project data
import { fadeIn, textVariant } from '../utils/motion'; // Animation variants

// Single project card with tilt, animation, and Github link
const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        {/* Project image with GitHub link overlay */}
        <div className="relative w-full h-[230px]">
          <img 
            src={image}
            alt={name}
            className="w-full h-full object-contain rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain" 
              />
            </div>
          </div>
        </div>

        {/* Project tile, description, and tags */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

// Works section: heading, intro text, and project cards grid
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      {/* Render all project cards */}
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.id || project.name}
            index={index}
            {...project}
          /> 
        ))}
      </div>
    </>
  )
};

// Export wrapped Works section
export default SectionWrapper(Works, "works");
