'use client'

import { useState } from 'react'
import { motion, useInView, easeOut } from 'framer-motion'
import { useRef } from 'react'
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from 'lucide-react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  })
  const [errors, setErrors] = useState<{[key: string]: string}>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    if (!formData.user_name.trim()) newErrors.user_name = 'Name is required'
    if (!formData.user_email.trim()) newErrors.user_email = 'Email is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.user_email && !emailRegex.test(formData.user_email)) {
      newErrors.user_email = 'Please enter a valid email'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      )
      
      alert('Message sent successfully!')
      setFormData({ user_name: '', user_email: '', message: '' })
    } catch (error) {
      alert('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "abubakkarsiddique2502@gmail.com",
      link: "mailto:abubakkarsiddique2502@gmail.com"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Silchar, Assam, India",
      link: null
    },
    {
      icon: <Phone size={24} />,
      title: "Available",
      value: "Mon - Fri, 9AM - 6PM",
      link: null
    }
  ]

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "https://github.com/SoloDevAbu",
      color: "hover:text-gray-400"
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abu-bakkar-siddique-546112205/",
      color: "hover:text-blue-400"
    },
    {
      icon: <Twitter size={24} />,
      name: "Twitter",
      url: "https://x.com/AbuBakkar2502",
      color: "hover:text-blue-400"
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
            Get In Touch
          </motion.h2>
          <motion.div 
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-gray-300 text-lg max-w-2xl mx-auto"
          >
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
            
            <form onSubmit={sendEmail} className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="user_name"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.user_name 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-white/20 focus:ring-primary-500 focus:border-primary-500'
                  }`}
                  placeholder="Enter your name"
                />
                {errors.user_name && (
                  <p className="text-red-400 text-sm mt-1">{errors.user_name}</p>
                )}
              </div>

              <div>
                <label htmlFor="user_email" className="block text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
                    errors.user_email 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-white/20 focus:ring-primary-500 focus:border-primary-500'
                  }`}
                  placeholder="Enter your email"
                />
                {errors.user_email && (
                  <p className="text-red-400 text-sm mt-1">{errors.user_email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-white/5 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-white/20 focus:ring-primary-500 focus:border-primary-500'
                  }`}
                  placeholder="Enter your message"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-4"
                  >
                    <div className="p-3 bg-primary-500/20 rounded-full text-primary-400">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{info.title}</h4>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-gray-300 hover:text-primary-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-300">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white/5 hover:bg-white/10 rounded-full text-gray-400 ${social.color} transition-all duration-300`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Let's Build Something Amazing</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm always excited to work on new projects and collaborate with fellow developers. 
                Whether you have a project idea, need help with development, or just want to connect, 
                feel free to reach out!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact