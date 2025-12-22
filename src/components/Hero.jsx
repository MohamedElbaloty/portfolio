import React from 'react'
import { motion } from 'framer-motion'
import { FaLaptopCode, FaMobileAlt, FaMicrochip, FaCode, FaNetworkWired, FaCloud, FaPhotoVideo, FaVideo, FaCogs } from 'react-icons/fa'
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

  const mobileMarqueeItems = [
    { name: t.about.skills.webDev, icon: FaLaptopCode, color: 'text-cyan-400' },
    { name: t.about.skills.mobileApps, icon: FaMobileAlt, color: 'text-pink-400' },
    { name: t.about.skills.iotEmbedded, icon: FaMicrochip, color: 'text-emerald-400' },
    { name: t.about.skills.javaPython, icon: FaCode, color: 'text-red-400' },
    { name: t.about.skills.networkEng, icon: FaNetworkWired, color: 'text-blue-400' },
    { name: t.about.skills.cloudSolutions, icon: FaCloud, color: 'text-sky-400' },
    { name: t.about.skills.motionGraphics, icon: FaPhotoVideo, color: 'text-fuchsia-400' },
    { name: t.about.skills.aiVideoProduction, icon: FaVideo, color: 'text-violet-400' },
    { name: t.about.skills.automationWorkflows, icon: FaCogs, color: 'text-amber-400' },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-4 sm:pt-8 lg:pt-10">
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
        className="container mx-auto px-4 sm:px-6 text-center relative z-10 -mt-8 sm:mt-0"
      >
        {/* Title: name only (no robot animation). */}
        <div className="relative px-4 mb-2 sm:mb-3 lg:mb-4">
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold gradient-text leading-tight"
          >
            {t.hero.title}
          </motion.h1>
        </div>

        <motion.div variants={itemVariants} className="mb-1 sm:mb-2 lg:mb-3">
          <motion.span
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm mb-1 sm:mb-2"
            whileHover={{ scale: 1.05 }}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            {t.hero.subtitle}
          </motion.span>
        </motion.div>

        {/* Marquee - Mobile: Skills Cards Only */}
        <motion.div
          variants={itemVariants}
          className="mb-0 sm:mb-0 lg:mb-1 overflow-hidden w-full mt-4 sm:mt-6 block sm:hidden"
        >
          <div className="marquee-container glass rounded-full py-3 sm:py-4 px-4 backdrop-blur-xl border border-white/10">
            {/* Mobile: Skills Cards Marquee */}
            <div className="block sm:hidden marquee-content">
              {mobileMarqueeItems.map((skill, index) => (
                <div key={index} className="inline-flex items-center gap-2 mx-3 whitespace-nowrap">
                  <skill.icon className={`text-base ${skill.color}`} />
                  <span className={`font-medium text-sm ${skill.color}`}>{skill.name}</span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {mobileMarqueeItems.map((skill, index) => (
                <div key={`dup-${index}`} className="inline-flex items-center gap-2 mx-3 whitespace-nowrap">
                  <skill.icon className={`text-base ${skill.color}`} />
                  <span className={`font-medium text-sm ${skill.color}`}>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  )
}

export default Hero
