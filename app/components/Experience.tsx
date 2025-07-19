import { motion, easeOut } from 'framer-motion'
import { useInViewAnimation } from './useInViewAnimation'

const Experience = () => {
  const [ref, isInView] = useInViewAnimation()

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
            Experience
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"
          />
        </motion.div>
        <div className="space-y-8">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="glass-effect rounded-2xl p-8 floating-card"
          >
            <h3 className="text-xl font-semibold">Full Stack Next.js Developer <span className="text-sm text-gray-400">@ Startup</span></h3>
            <p className="mt-2 text-gray-300">Working as a full stack developer at a startup, building a social media platform using <span className="font-semibold">Next.js</span>, <span className="font-semibold">Prisma</span>, and <span className="font-semibold">PostgreSQL</span>.</p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="glass-effect rounded-2xl p-8 floating-card"
          >
            <h3 className="text-xl font-semibold">Freelance Developer</h3>
            <p className="mt-2 text-gray-300">Developed a payment management system as a freelancer using <span className="font-semibold">Turborepo</span> monorepo architecture, <span className="font-semibold">Next.js</span> frontend, <span className="font-semibold">Express</span> backend, <span className="font-semibold">PostgreSQL</span>, and <span className="font-semibold">Prisma</span>.</p>
          </motion.div>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="glass-effect rounded-2xl p-8 floating-card"
          >
            <h3 className="text-xl font-semibold">Open Source Contributor</h3>
            <p className="mt-2 text-gray-300">Contributed to <span className="font-semibold">Onlook</span>, an open source project with 20k+ GitHub stars.</p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Experience
