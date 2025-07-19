'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Globe, Wrench, GraduationCap, Calendar } from 'lucide-react'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
        ease: "easeOut"
      }
    }
  }

  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Vite"]
    },
    {
      icon: <Database size={24} />,
      title: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "JWT", "RESTful APIs"]
    },
    {
      icon: <Globe size={24} />,
      title: "Web Technologies",
      skills: ["Git", "GitHub", "AWS", "GitHub Actions", "Responsive Design"]
    },
    {
      icon: <Wrench size={24} />,
      title: "Tools & Others",
      skills: ["C++", "Problem Solving", "System Design", "Agile Development"]
    }
  ]

  const education = [
    {
      logo: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg",
      title: "100xDevs",
      description: "Full Stack Web Development, DevOps and Web3 Bootcamp",
      duration: "2024-Present",
      icon: <GraduationCap size={20} />
    },
    {
      logo: "https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg",
      title: "Assam University, Silchar",
      description: "Bachelor of Electronics & Communication Engineering",
      duration: "2022-2026",
      icon: <GraduationCap size={20} />
    }
  ]

  return (
    <div ref={ref} className="section-padding">
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
            Skills & Education
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"
          />
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-20"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Technologies & Tools
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect rounded-2xl p-6 floating-card"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-primary-500/20 rounded-full text-primary-400">
                    {category.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white">{category.title}</h4>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      className="bg-white/5 hover:bg-white/10 rounded-lg px-4 py-2 text-gray-300 hover:text-white transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-12 text-center"
          >
            Education
          </motion.h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect rounded-2xl p-6 floating-card"
              >
                <div className="flex items-start space-x-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary-400/30">
                    <img 
                      src={edu.logo} 
                      alt={edu.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="text-primary-400">
                        {edu.icon}
                      </div>
                      <h4 className="text-xl font-semibold text-white">{edu.title}</h4>
                    </div>
                    
                    <p className="text-gray-300 mb-3">{edu.description}</p>
                    
                    <div className="flex items-center space-x-2 text-accent-400">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{edu.duration}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills