'use client'

import { motion, useInView, easeOut } from 'framer-motion'
import { useRef } from 'react'
import { Lightbulb, Target, Heart } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  }

  return (
    <div ref={ref} className="section-padding bg-gradient-to-b from-slate-900/50 to-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gradient mb-6"
          >
            About Me
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="glass-effect rounded-2xl p-8 floating-card">
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate web developer with expertise in modern JavaScript frameworks and libraries. 
                I specialize in building dynamic and responsive web applications using React, NetxJS, Node.js, and 
                other cutting-edge technologies. With a strong foundation in backend development and a keen 
                eye for user-friendly interfaces, I strive to create seamless digital experiences.
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 floating-card">
              <h3 className="text-2xl font-bold text-white mb-4">What Drives Me</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm constantly learning and pushing my limits to deliver innovative solutions. 
                Every project is an opportunity to explore new technologies and create something 
                meaningful that makes a difference in people's lives.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div 
              variants={itemVariants}
              className="glass-effect rounded-2xl p-6 floating-card"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-primary-500/20 rounded-full">
                  <Lightbulb className="text-primary-400" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-white">Innovation</h4>
              </div>
              <p className="text-gray-300">
                Always exploring new technologies and creative solutions to solve complex problems.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="glass-effect rounded-2xl p-6 floating-card"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-accent-500/20 rounded-full">
                  <Target className="text-accent-400" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-white">Precision</h4>
              </div>
              <p className="text-gray-300">
                Focused on delivering high-quality code with attention to detail and best practices.
              </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="glass-effect rounded-2xl p-6 floating-card"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-green-500/20 rounded-full">
                  <Heart className="text-green-400" size={24} />
                </div>
                <h4 className="text-xl font-semibold text-white">Passion</h4>
              </div>
              <p className="text-gray-300">
                Genuinely love what I do and committed to continuous learning and improvement.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "15+", label: "Projects Completed" },
            { number: "1+", label: "Years Learning" },
            { number: "10+", label: "Technologies" },
            { number: "100%", label: "Dedication" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center glass-effect rounded-xl p-6 floating-card"
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-300 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default About