import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaGlobe, FaUniversity } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const About = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const timeline = [
    {
      year: t.about.timeline.graduation.year,
      title: t.about.timeline.graduation.title,
      description: t.about.timeline.graduation.description,
      icon: FaGraduationCap,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      year: t.about.timeline.kuwait.year,
      title: t.about.timeline.kuwait.title,
      description: t.about.timeline.kuwait.description,
      icon: FaBriefcase,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      year: t.about.timeline.usa.year,
      title: t.about.timeline.usa.title,
      description: t.about.timeline.usa.description,
      icon: FaUniversity,
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      year: t.about.timeline.dubai.year,
      title: t.about.timeline.dubai.title,
      description: t.about.timeline.dubai.description,
      icon: FaBriefcase,
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      year: t.about.timeline.freelance.year,
      title: t.about.timeline.freelance.title,
      description: t.about.timeline.freelance.description,
      icon: FaGlobe,
      gradient: 'from-green-500 to-emerald-500',
    },
  ]


  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mb-4 sm:mb-6">
            {t.about.title}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Enhanced Timeline */}
        <div className="max-w-5xl mx-auto mb-12 sm:mb-16 lg:mb-20">
          <div className="relative">
            <div className={`absolute ${language === 'ar' ? 'right' : 'left'}-1/2 transform translate-x-1/2 w-0.5 sm:w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 opacity-30`}></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: (language === 'ar' ? (index % 2 === 0 ? -50 : 50) : (index % 2 === 0 ? 50 : -50)) }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative mb-12 sm:mb-16 flex flex-col sm:flex-row items-center ${
                  language === 'ar' 
                    ? (index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row')
                    : (index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse')
                }`}
              >
                <div className={`w-full sm:w-1/2 ${language === 'ar' 
                  ? (index % 2 === 0 ? 'text-left sm:text-left' : 'text-right sm:text-right')
                  : (index % 2 === 0 ? 'text-left sm:text-left' : 'text-right sm:text-right')
                } px-4 sm:px-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`relative group`}
                  >
                    <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity`}></div>
                    <div className={`relative glass backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-6 hover:border-purple-500/50 transition-all`}>
                      <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg flex-shrink-0`}>
                          <item.icon className="text-lg sm:text-2xl text-white" />
                        </div>
                        <span className="text-purple-400 font-bold text-base sm:text-lg">{item.year}</span>
                      </div>
                      <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 text-white">{item.title}</h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                </div>
                <div className="hidden sm:block w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
