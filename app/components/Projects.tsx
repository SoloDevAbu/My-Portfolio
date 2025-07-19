import { motion, easeOut } from 'framer-motion'
import { useInViewAnimation } from './useInViewAnimation'
import { ExternalLink, Github, Sparkles } from 'lucide-react'
import Image from 'next/image'

const Projects = () => {
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

  const projects = [
    {
      name: "YouCollab",
      description: "YouCollab is a collaboration platform for YouTubers and Editors, streamlining the video editing and publishing process. YouTubers can invite editors, review uploaded videos, and publish directly to YouTube with automated workflows.",
      techs: ['React', 'NodeJS', "TailwindCSS", "MongoDB", "Express", "AWS", "YouTube Data API"],
      website: 'https://you-collab.vercel.app/',
      githubLink: 'https://github.com/SoloDevAbu/YouCollab',
      featured: true
    },
    {
      name: "Blog Genie",
      description: "A blogging platform where the backend fetches the top news every hour from news API with the help of cron jobs and the blog is posted on the website with the title, image and summary.",
      techs: ['React', 'NodeJS', "TailwindCSS", "MongoDB", "Express"],
      website: 'https://blog-genie-sigma.vercel.app/',
      githubLink: 'https://github.com/SoloDevAbu/BlogGenie',
      featured: true
    },
    {
      name: "DevCard",
      description: "Generates a card based on the users LeetCode username, like total questions solved, questions solved in each level easy, medium and hard, Skills, Rank, Reputation",
      techs: ['React', 'NodeJS', "TailwindCSS", "MongoDB", "Express"],
      website: 'https://profile-card-generator-eight.vercel.app/',
      githubLink: 'https://github.com/SoloDevAbu/Profile-Card-Generator',
      featured: false
    },
    {
      name: "Emoji Story Teller",
      description: "Generates random story based on the input Emojis. This project uses Hugging Face's AI API to generate the story",
      techs: ['React', "TailwindCSS", "AI API"],
      website: 'https://emoji-story-telling.vercel.app/',
      githubLink: 'https://github.com/SoloDevAbu/emoji-story-telling',
      featured: false
    },
    {
      name: "InventEase",
      description: "This is an inventory management platform to manage all of your inventories",
      techs: ['React', 'NodeJS',"TailwindCSS", 'MongoDB', 'Express'],
      website: 'https://invent-ease.vercel.app/',
      githubLink: 'https://github.com/SoloDevAbu/InventEase',
      featured: false
    },
    {
      name: "VirtualR",
      description: "An AI platform Landing page with stunning UI and Graphics, fully responsive and user Interactive UI",
      techs: ['React', 'NodeJS', 'TailwindCSS', 'Express'],
      website: 'https://virtual-r-taupe.vercel.app/',
      githubLink: 'https://github.com/SoloDevAbu/VirtualR',
      featured: false
    }
  ]

  const getPreviewImage = (website: string) => {
    return `https://api.microlink.io/?url=${encodeURIComponent(website)}&screenshot=true&embed=screenshot.url`
  }

  return (
    <div ref={ref} className="section-padding bg-gradient-to-b from-slate-800/50 to-slate-900/50">
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
            Featured Projects
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Here are some of my recent projects that showcase my skills and passion for development
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect rounded-2xl overflow-hidden floating-card group"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center space-x-2 bg-accent-500/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <Sparkles size={16} className="text-accent-400" />
                      <span className="text-accent-400 text-sm font-medium">Featured</span>
                    </div>
                  </div>
                  
                  <Image
                    src={getPreviewImage(project.website)}
                    alt={`${project.name} preview`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.name}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-primary-500/20 text-primary-300 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 glass-effect hover:bg-white/10 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Other Projects
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect rounded-xl p-6 floating-card group"
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <Image
                    src={getPreviewImage(project.website)}
                    alt={`${project.name} preview`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <h4 className="text-xl font-bold text-white mb-2">{project.name}</h4>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techs.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techs.length > 3 && (
                    <span className="bg-white/10 text-gray-300 px-2 py-1 rounded text-xs">
                      +{project.techs.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex space-x-3">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-primary-400 hover:text-primary-300 text-sm transition-colors"
                  >
                    <ExternalLink size={14} />
                    <span>Demo</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Projects