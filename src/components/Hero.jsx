import React from 'react'
import { motion } from 'framer-motion'
import { FaLaptopCode, FaMobileAlt, FaMicrochip } from 'react-icons/fa'
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

  const services = [
    { 
      icon: FaLaptopCode, 
      text: 'Web Development',
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0
    },
    { 
      icon: FaMobileAlt, 
      text: 'Mobile Apps',
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.1
    },
    { 
      icon: FaMicrochip, 
      text: 'AI & IoT',
      gradient: 'from-indigo-500 to-purple-500',
      delay: 0.2
    },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-8 sm:pt-16 lg:pt-20">
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
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <motion.span
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 glass rounded-full text-xs sm:text-sm mb-4 backdrop-blur-xl border border-white/10"
            whileHover={{ scale: 1.05, borderColor: 'rgba(139, 92, 246, 0.5)' }}
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            {t.hero.subtitle}
          </motion.span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-3 sm:mb-6 lg:mb-8 gradient-text leading-tight px-4"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-4 sm:mb-8 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
        >
          {t.hero.description}
        </motion.p>

        {/* Enhanced Services Cards */}
        <motion.div
          variants={itemVariants}
          className="hidden sm:grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8 mb-12 sm:mb-16 px-4 max-w-4xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: service.delay }}
              whileHover={{ scale: 1.1, y: -10 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>
              <div className="relative glass backdrop-blur-xl border border-white/10 rounded-2xl p-3 sm:p-4 lg:p-8 hover:border-purple-500/50 transition-all">
                <div className={`flex flex-col items-center justify-center mb-1 sm:mb-2 lg:mb-4`}>
                  <div className={`p-2 sm:p-3 lg:p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-2 sm:mb-3 lg:mb-4 shadow-lg`}>
                    <service.icon className="text-xl sm:text-2xl lg:text-4xl text-white" />
                  </div>
                  <p className="text-xs sm:text-sm lg:text-base font-semibold text-white text-center leading-tight">{service.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div variants={itemVariants} className="hidden sm:flex flex-row gap-3 sm:gap-4 lg:gap-6 justify-center px-4 flex-wrap">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(99, 102, 241, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-4 sm:px-6 lg:px-10 py-2.5 sm:py-3 lg:py-5 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full font-semibold text-xs sm:text-sm lg:text-lg overflow-hidden flex-1 sm:flex-none min-w-[140px] sm:min-w-0"
          >
            <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
              <span className="hidden sm:inline">{t.hero.viewProjects}</span>
              <span className="sm:hidden">Projects</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="hidden sm:inline"
              >
                →
              </motion.span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 sm:px-6 lg:px-10 py-2.5 sm:py-3 lg:py-5 glass backdrop-blur-xl border-2 border-purple-500/50 rounded-full font-semibold text-xs sm:text-sm lg:text-lg hover:border-purple-400 hover:bg-white/10 transition-all flex-1 sm:flex-none min-w-[140px] sm:min-w-0"
          >
            <span className="hidden sm:inline">{t.hero.contactMe}</span>
            <span className="sm:hidden">Contact</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
