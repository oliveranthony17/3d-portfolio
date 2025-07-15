import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="mx-auto xs:w-[250px]">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-[250px] green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1.1,
            speed: 1000,
            transition: true,
            axis: null,
            reset: true
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-20 h-20 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-white text-[17px] max-w-6xl leading-[30px]"
      >
        <p className="mb-5">
          I am originally from Manchester, England, and I have been living in Luzern, Switzerland for
          the last 3 years.
        </p>
        <p className="mb-5">
          Since 2023, I have been working as a Software Engineer
          at <a href="https://www.renuo.ch" className="underline" target="_blank">Renuo AG</a>, delivering responsive
          web applications in an agency setting. I have worked on a variety of projects, predominantly based in Ruby on
          Rails, but also using React, Svelte, and a number of other frameworks.
        </p>
        <strong>I have a Swiss work permit and German language at a B1 level (but still learning!).</strong>
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
