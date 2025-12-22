import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const Hero = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const services = []

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 sm:pt-8 lg:pt-10">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 sm:w-96 sm:h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-3000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 text-center relative z-10"
      >
        <motion.div variants={itemVariants} className="mb-1 sm:mb-2 lg:mb-3">
          <motion.span
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 glass rounded-full text-xs sm:text-sm mb-1 sm:mb-2 backdrop-blur-xl border border-white/10"
            whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.5)' }}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            {t.hero.subtitle}
          </motion.span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-0 sm:mb-1 lg:mb-1 gradient-text leading-tight px-4"
        >
          {t.hero.title}
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="mb-0 sm:mb-0 lg:mb-1 overflow-hidden w-full"
        >
          <div className="marquee-container">
            <div className="marquee-content">
              <span className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-300 whitespace-nowrap">
                {t.hero.description}
              </span>
              <span className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-300 whitespace-nowrap ml-8">
                {t.hero.description}
              </span>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default Hero
