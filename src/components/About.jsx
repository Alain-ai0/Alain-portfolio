import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant} from '../utils/motion';
import { SectionWrapper } from '../hoc'

// Card component that shows one service (icon + title)
// It uses Tilt for a 3D hover effect and Framer Motion for animation
const ServiceCard = ({ index, title, icon}) => {
    return (
        // Tilt wrapper gives the card a parallax/tilt effect on hover
        <Tilt className="xs:w-[250px] w-full">
            {/* Animated container: fade in from the right staggered by index */}
            <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
                {/* Inner card with tilt options and layout */}
                <div options={{max:45, scale: 1, speed: 450}} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
                    {/* Service icon image */}
                    <img src={icon} alt={title} className="w-16 h-16 object-contain" />
                    
                    {/* service title text */}
                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    )
}

// About section of the portfolio
// Displays an introduction, overview text, and a grid of service cards
const About = () => {
    return (
        <>
            {/* Section heading with animated text */}
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            {/* Overview paragraph with fade-in animation */}
            <motion.p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]" variants={fadeIn("", "", 0.1, 1)}>
                I am an aspiring software engineering student passionate about building modern, scalable applications. My interests include React, Vite, Tailwind CSS, ESLint, and Prettier for clean web development, alongside 3D visualization with Three.js and React Three Fiber for interactive experiences. I am also exploring artificial intelligence, machine learning, and game development, aiming to combine creativity with technical depth while mastering Git workflows, documentation, and deployment practices that showcase long‑term reliability.
            </motion.p>

            {/* Grid of service cards generated from the services array */}  
            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    // Render one ServiceCard per service object
                    <ServiceCard key={service.title} index={index} {...service}/>
                ))}
            </div>
        </>
    )
}

// Export About wrapped in SectionWrapper
// SectionWrapper adds layout styling and anchors the section with the id "about"
export default SectionWrapper(About, "about")
