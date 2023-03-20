import { motion } from 'framer-motion'

import { styles } from '../styles'
import { staggerContainer  } from '../utils/motion'

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden" // initial state is to be hidden
        whileInView="show" // when in view, animate to show
        viewport={{ once: true, amount: 0.25}} // show only once and animate for 0.25 seconds
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* scrolling to here when clicking button and then triggers animation */}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    )
  }

export default SectionWrapper
