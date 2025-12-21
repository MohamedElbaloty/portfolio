import React from 'react'
import { motion } from 'framer-motion'
import { FaGraduationCap, FaBriefcase, FaGlobe, FaCode, FaChalkboardTeacher } from 'react-icons/fa'
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
      color: 'from-blue-500 to-blue-600',
    },
    {
      year: t.about.timeline.kuwait.year,
      title: t.about.timeline.kuwait.title,
      description: t.about.timeline.kuwait.description,
      icon: FaBriefcase,
      color: 'from-purple-500 to-purple-600',
    },
    {
      year: t.about.timeline.usa.year,
      title: t.about.timeline.usa.title,
      description: t.about.timeline.usa.description,
      icon: FaGraduationCap,
      color: 'from-indigo-500 to-indigo-600',
    },
    {
      year: t.about.timeline.dubai.year,
      title: t.about.timeline.dubai.title,
      description: t.about.timeline.dubai.description,
      icon: FaBriefcase,
      color: 'from-pink-500 to-pink-600',
    },
    {
      year: t.about.timeline.freelance.year,
      title: t.about.timeline.freelance.title,
      description: t.about.timeline.freelance.description,
      icon: FaGlobe,
      color: 'from-green-500 to-green-600',
    },
  ]

  const skills = [
    { name: 'Web Development', level: 95 },
    { name: 'Mobile Apps', level: 90 },
    { name: 'IoT & Embedded Systems', level: 85 },
    { name: 'Java & Python', level: 92 },
    { name: 'Network Engineering', level: 88 },
    { name: 'Cloud Solutions', level: 87 },
    { name: 'Cyber Security', level: 85 },
    { name: 'UI/UX Design', level: 80 },
  ]

  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            {t.about.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="relative">
            <div className={`absolute ${language === 'ar' ? 'right' : 'left'}-1/2 transform translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 opacity-20`}></div>
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: (language === 'ar' ? (index % 2 === 0 ? -50 : 50) : (index % 2 === 0 ? 50 : -50)) }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative mb-12 flex items-center ${
                  language === 'ar' 
                    ? (index % 2 === 0 ? 'flex-row-reverse' : 'flex-row')
                    : (index % 2 === 0 ? 'flex-row' : 'flex-row-reverse')
                }`}
              >
                <div className={`w-1/2 ${language === 'ar' 
                  ? (index % 2 === 0 ? 'text-left' : 'text-right')
                  : (index % 2 === 0 ? 'text-left' : 'text-right')
                }`}>
                  <div className={`glass rounded-2xl p-6 bg-gradient-to-br ${item.color} bg-opacity-10 hover:bg-opacity-20 transition-all`}>
                    <div className="flex items-center gap-4 mb-3">
                      <item.icon className="text-2xl text-white" />
                      <span className="text-purple-400 font-bold">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
                <div className={`absolute ${language === 'ar' ? 'right' : 'left'}-1/2 transform translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center glow z-10`}>
                  <item.icon className="text-white text-xl" />
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            {t.about.skills.title}
          </h3>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass rounded-xl p-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-purple-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="glass rounded-2xl p-8 text-center">
            <FaChalkboardTeacher className="text-4xl text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">{t.about.teaching.title}</h3>
            <p className="text-gray-300">
              {t.about.teaching.description}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
