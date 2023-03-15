import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row item-start gap-5`}>
        <div className="flex flex-col items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff]">Oliver</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a full-stack developer with an array of knowledge in many frontend and backend languages, responsive frameworks, databases, and best code practices. My objective is simply to be the best developer that I can be and to wake up every day excited to code.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[65px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            {/* below uses framer-motion to create "button" you can use to scroll */}
            <motion.div
              animate={{
                y: [0, 30, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
