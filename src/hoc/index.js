// Import the SectionWrapper higher-order component (HOC)
// This HOC is used to wrap sections of your app with consistent layout/styling
import SectionWrapper from "./SectionWrapper";

// Re-export SectionWrapper so it can be imported easily from this folder
// Instead of writing `import SectionWrapper from './hoc/SectionWrapper'` everywhere,
// you can just do `import { SectionWrapper } from '../hoc'`
export { SectionWrapper }