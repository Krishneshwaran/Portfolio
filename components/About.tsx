'use client'
import React, { useEffect } from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

const About = () => {
  const { ref } = useSectionInView('About')

  return <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28' id='about'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    ref={ref}
  >
    <SectionHeading>
      about
    </SectionHeading>
    <p className='mb-3'>
    My journey began with a deep interest in emerging technologies, leading me to pursue programming and software development. {" "}
      <span className="font-medium"></span>, I built a strong foundation through online courses and hands-on projects in{" "}
      <span className="italic">Python programming, Machine learning, and Android development</span>.{" "}
      <span className="italic">My passion for </span>AI and Data Science fueled my work on projects like machine defect prediction using LSTM models and concentration drop analysis in manufacturing processes.
      </p>
      <p>
       I also contributed to open-source projects and developed a custom{" "}
      <span className="font-medium">
      AOSP ROM, Andromeda OS
      </span>
      . I enjoy problem-solving, and my favorite part of programming is the challenge of developing innovative solutions. I am continuously learning new technologies, with a keen focus on AI advancements. Currently, I am pursuing my{" "}
      <span className="font-medium">B.Tech in Artificial Intelligence and Data Science</span> as a frontend web development.
    </p>
    <p>
      I enjoy exploring new technologies, contributing to{" "}
      <span className="font-medium">open-source projects</span>.  and staying updated on the latest advancements in{" "}
      <span className="font-medium">AI and automation</span>.
    </p>
  </motion.section>
}

export default About