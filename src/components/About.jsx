import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaGlobe, FaUniversity } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const About = () => {
  const { language } = useLanguage()
  const t = translations[language]

  // Helper function to get flag background style
  const getFlagBackground = (type) => {
    const baseStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.08,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      borderRadius: 'inherit',
      pointerEvents: 'none',
    }

    switch(type) {
      case 'egypt':
        // Egyptian flag: red, white, black horizontal stripes with golden eagle
        return {
          ...baseStyle,
          background: `
            linear-gradient(to bottom, 
              rgba(206, 17, 38, 0.1) 0%, 
              rgba(206, 17, 38, 0.1) 33.33%,
              rgba(255, 255, 255, 0.1) 33.33%, 
              rgba(255, 255, 255, 0.1) 66.66%,
              rgba(0, 0, 0, 0.1) 66.66%, 
              rgba(0, 0, 0, 0.1) 100%
            )
          `,
        }
      case 'kuwait':
        // Kuwait flag: green, white, red, black horizontal stripes
        return {
          ...baseStyle,
          background: `
            linear-gradient(to bottom, 
              rgba(0, 122, 61, 0.1) 0%, 
              rgba(0, 122, 61, 0.1) 25%,
              rgba(255, 255, 255, 0.1) 25%, 
              rgba(255, 255, 255, 0.1) 50%,
              rgba(206, 17, 38, 0.1) 50%, 
              rgba(206, 17, 38, 0.1) 75%,
              rgba(0, 0, 0, 0.1) 75%, 
              rgba(0, 0, 0, 0.1) 100%
            )
          `,
        }
      case 'usa':
        // American flag pattern (simplified)
        return {
          ...baseStyle,
          background: `
            repeating-linear-gradient(0deg,
              rgba(186, 12, 47, 0.08) 0px,
              rgba(186, 12, 47, 0.08) 7.69%,
              rgba(255, 255, 255, 0.08) 7.69%,
              rgba(255, 255, 255, 0.08) 15.38%
            ),
            linear-gradient(90deg,
              rgba(0, 38, 100, 0.1) 0%,
              rgba(0, 38, 100, 0.1) 40%,
              transparent 40%
            )
          `,
        }
      case 'dubai':
        // UAE flag: red vertical stripe on left, green, white, black horizontal stripes on right
        return {
          ...baseStyle,
          background: `
            linear-gradient(90deg,
              rgba(255, 0, 0, 0.1) 0%,
              rgba(255, 0, 0, 0.1) 25%,
              transparent 25%
            ),
            linear-gradient(to bottom,
              rgba(0, 115, 47, 0.1) 0%,
              rgba(0, 115, 47, 0.1) 33.33%,
              rgba(255, 255, 255, 0.1) 33.33%,
              rgba(255, 255, 255, 0.1) 66.66%,
              rgba(0, 0, 0, 0.1) 66.66%,
              rgba(0, 0, 0, 0.1) 100%
            )
          `,
          backgroundPosition: 'left center, right center',
        }
      case 'freelancer':
        // Multiple world flags pattern
        return {
          ...baseStyle,
          opacity: 0.06,
          background: `
            radial-gradient(circle at 20% 20%, rgba(206, 17, 38, 0.08) 0%, transparent 15%),
            radial-gradient(circle at 80% 30%, rgba(0, 122, 61, 0.08) 0%, transparent 15%),
            radial-gradient(circle at 40% 60%, rgba(0, 38, 100, 0.08) 0%, transparent 15%),
            radial-gradient(circle at 70% 70%, rgba(255, 0, 0, 0.08) 0%, transparent 15%),
            radial-gradient(circle at 30% 80%, rgba(255, 215, 0, 0.08) 0%, transparent 15%),
            radial-gradient(circle at 60% 40%, rgba(0, 115, 47, 0.08) 0%, transparent 15%),
            radial-gradient(circle at 10% 70%, rgba(186, 12, 47, 0.08) 0%, transparent 15%),
            radial-gradient(circle at 90% 60%, rgba(0, 0, 0, 0.08) 0%, transparent 15%),
            radial-gradient(circle at 50% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 15%),
            radial-gradient(circle at 15% 50%, rgba(0, 102, 204, 0.08) 0%, transparent 15%)
          `,
        }
      default:
        return baseStyle
    }
  }

  const timeline = [
    {
      year: t.about.timeline.graduation.year,
      title: t.about.timeline.graduation.title,
      description: t.about.timeline.graduation.description,
      icon: FaGraduationCap,
      gradient: 'from-blue-500 to-cyan-500',
      flagType: 'egypt',
    },
    {
      year: t.about.timeline.kuwait.year,
      title: t.about.timeline.kuwait.title,
      description: t.about.timeline.kuwait.description,
      icon: FaBriefcase,
      gradient: 'from-purple-500 to-pink-500',
      flagType: 'kuwait',
    },
    {
      year: t.about.timeline.usa.year,
      title: t.about.timeline.usa.title,
      description: t.about.timeline.usa.description,
      icon: FaUniversity,
      gradient: 'from-indigo-500 to-purple-500',
      flagType: 'usa',
    },
    {
      year: t.about.timeline.dubai.year,
      title: t.about.timeline.dubai.title,
      description: t.about.timeline.dubai.description,
      icon: FaBriefcase,
      gradient: 'from-pink-500 to-rose-500',
      flagType: 'dubai',
    },
    {
      year: t.about.timeline.freelance.year,
      title: t.about.timeline.freelance.title,
      description: t.about.timeline.freelance.description,
      icon: FaGlobe,
      gradient: 'from-green-500 to-emerald-500',
      flagType: 'freelancer',
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
                className={`relative mb-8 sm:mb-16 flex flex-row items-center ${
                  language === 'ar' 
                    ? (index % 2 === 0 ? 'flex-row-reverse' : 'flex-row')
                    : (index % 2 === 0 ? 'flex-row' : 'flex-row-reverse')
                }`}
              >
                <div className={`w-1/2 ${language === 'ar' 
                  ? (index % 2 === 0 ? 'text-right' : 'text-left')
                  : (index % 2 === 0 ? 'text-left' : 'text-right')
                } px-2 sm:px-0`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`relative group`}
                  >
                    <div className={`absolute -inset-1 bg-gradient-to-r ${item.gradient} rounded-xl sm:rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity`}></div>
                    <div className={`relative glass backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-6 hover:border-purple-500/50 transition-all overflow-hidden`}>
                      {/* Flag Background */}
                      <div style={getFlagBackground(item.flagType)}></div>
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                          <div className={`p-1.5 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg flex-shrink-0`}>
                            <item.icon className="text-sm sm:text-2xl text-white" />
                          </div>
                          <span className="text-purple-400 font-bold text-xs sm:text-lg">{item.year}</span>
                        </div>
                        <h3 className="text-sm sm:text-2xl font-bold mb-1 sm:mb-3 text-white">{item.title}</h3>
                        <p className="text-gray-300 text-[10px] sm:text-base leading-tight sm:leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default About
