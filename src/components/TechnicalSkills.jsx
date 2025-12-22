import React from 'react'
import { motion } from 'framer-motion'
import { FaLaptopCode, FaMobileAlt, FaMicrochip, FaCode, FaNetworkWired, FaCloud, FaShieldAlt, FaPalette, FaVideo, FaRobot } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const TechnicalSkills = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const skills = [
    { name: t.about.skills.webDev, level: 95, icon: FaLaptopCode, gradient: 'from-blue-500 to-cyan-500' },
    { name: t.about.skills.mobileApps, level: 90, icon: FaMobileAlt, gradient: 'from-purple-500 to-pink-500' },
    { name: t.about.skills.iotEmbedded, level: 85, icon: FaMicrochip, gradient: 'from-green-500 to-emerald-500' },
    { name: t.about.skills.javaPython, level: 92, icon: FaCode, gradient: 'from-orange-500 to-red-500' },
    { name: t.about.skills.networkEng, level: 88, icon: FaNetworkWired, gradient: 'from-cyan-500 to-blue-500' },
    { name: t.about.skills.cloudSolutions, level: 87, icon: FaCloud, gradient: 'from-sky-500 to-blue-500' },
    { name: t.about.skills.cyberSecurity, level: 85, icon: FaShieldAlt, gradient: 'from-red-500 to-pink-500' },
    { name: t.about.skills.uiUxDesign, level: 80, icon: FaPalette, gradient: 'from-pink-500 to-rose-500' },
    { name: t.about.skills.aiVideoProduction, level: 90, icon: FaVideo, gradient: 'from-rose-500 to-pink-500' },
    { name: t.about.skills.automation, level: 88, icon: FaRobot, gradient: 'from-cyan-500 to-blue-500' },
  ]

  return (
    <section id="skills" className="py-6 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-6 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mb-4 sm:mb-4 lg:mb-6">
            {t.about.skills.title}
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 lg:p-6 hover:border-purple-500/50 transition-all"
              >
                <div className="flex items-center justify-between mb-2 sm:mb-3 lg:mb-4">
                  <div className="flex items-center gap-2 sm:gap-3 lg:gap-4 flex-1 min-w-0">
                    <div className={`p-1.5 sm:p-2 lg:p-3 rounded-lg bg-gradient-to-br ${skill.gradient} shadow-lg flex-shrink-0`}>
                      <skill.icon className="text-xs sm:text-base lg:text-lg text-white" />
                    </div>
                    <span className="text-white font-semibold text-xs sm:text-sm lg:text-lg truncate">{skill.name}</span>
                  </div>
                  <span className="text-purple-400 font-bold text-xs sm:text-sm lg:text-lg flex-shrink-0 ml-1 sm:ml-2">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800/50 rounded-full h-1.5 sm:h-2 lg:h-3 overflow-hidden backdrop-blur-sm">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: index * 0.1, ease: 'easeOut' }}
                    className={`h-full bg-gradient-to-r ${skill.gradient} rounded-full shadow-lg`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnicalSkills

