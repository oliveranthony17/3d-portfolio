import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies, othertechnologies } from '../constants';

import { motion } from 'framer-motion';
import { textVariant } from "../utils/motion";

import { styles } from '../styles';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have learnt so far</p>
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 my-5">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon}/>
          </div>
        ))}
      </div>

      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Other Tools.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 my-5">
        {othertechnologies.map((technology) => (
          <div className="w-28 h-28 bg-white rounded-full mx-auto my-auto flex">
            <img src={technology.icon} alt={technology.name} className="w-20 h-20 mx-auto my-auto rounded"/>
          </div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "");
