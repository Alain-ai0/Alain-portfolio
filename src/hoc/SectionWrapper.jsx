import { motion } from "framer-motion";
// motion: lets us animate React components

import { styles } from "../styles";
// styles: lets us animate React components

import { staggerContainer } from "../utils/motion";
// staggerContainer: animation variant that staggers child animations

// SectionWrapper Higher-Order Component (HOC)
// Wraps any section component with consistent layout, styling, and scroll-triggered animations
const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      // Animated section wrapper
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* Invisible span used for hash-based navigation (e.g. #about) */}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>

        {/* Render the actual component passed into the HOC */}
        <Component />
      </motion.section>
    );
  };

// Export the HOC so other sections (About, Hero, etc.) can be wrapped with consistent styling + animation
export default SectionWrapper;
