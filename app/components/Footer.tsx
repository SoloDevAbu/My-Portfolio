'use client'

import { motion } from 'framer-motion'
import { Heart, Code } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 text-gray-300"
          >
            <span>Made with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart size={16} className="text-red-400 fill-current" />
            </motion.div>
            <span>and</span>
            <Code size={16} className="text-primary-400" />
            <span>by Abu Bakkar Siddique</span>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-400 text-sm"
          >
            © 2024 All rights reserved.
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer