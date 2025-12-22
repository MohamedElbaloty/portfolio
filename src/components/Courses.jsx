import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaCode, 
  FaLaptopCode, 
  FaDatabase, 
  FaNetworkWired, 
  FaMicrochip,
  FaMobileAlt,
  FaCloud,
  FaShieldAlt,
  FaPalette,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { coursesData } from '../data/courses'

const Courses = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const data = coursesData[language] || coursesData.en
  const [expandedCategory, setExpandedCategory] = useState(null)

  const categoryIcons = {
    'Web Development': FaLaptopCode,
    'تطوير الويب': FaLaptopCode,
    'Mobile Development': FaMobileAlt,
    'تطوير التطبيقات': FaMobileAlt,
    'IoT & Embedded Systems': FaMicrochip,
    'إنترنت الأشياء والأنظمة المدمجة': FaMicrochip,
    'Programming Languages': FaCode,
    'لغات البرمجة': FaCode,
    'Computer Science Fundamentals': FaLaptopCode,
    'أساسيات علوم الحاسب': FaLaptopCode,
    'Databases': FaDatabase,
    'قواعد البيانات': FaDatabase,
    'Networking': FaNetworkWired,
    'الشبكات': FaNetworkWired,
    'Cloud Computing': FaCloud,
    'الحوسبة السحابية': FaCloud,
    'Cyber Security': FaShieldAlt,
    'الأمن السيبراني': FaShieldAlt,
    'UI/UX Design': FaPalette,
    'تصميم واجهة المستخدم': FaPalette,
    'Digital Design': FaMicrochip,
    'التصميم الرقمي': FaMicrochip,
  }

  const categoryGradients = {
    'Web Development': 'from-blue-500 to-cyan-500',
    'تطوير الويب': 'from-blue-500 to-cyan-500',
    'Mobile Development': 'from-purple-500 to-pink-500',
    'تطوير التطبيقات': 'from-purple-500 to-pink-500',
    'IoT & Embedded Systems': 'from-green-500 to-emerald-500',
    'إنترنت الأشياء والأنظمة المدمجة': 'from-green-500 to-emerald-500',
    'Programming Languages': 'from-blue-500 to-cyan-500',
    'لغات البرمجة': 'from-blue-500 to-cyan-500',
    'Computer Science Fundamentals': 'from-purple-500 to-pink-500',
    'أساسيات علوم الحاسب': 'from-purple-500 to-pink-500',
    'Databases': 'from-green-500 to-emerald-500',
    'قواعد البيانات': 'from-green-500 to-emerald-500',
    'Networking': 'from-orange-500 to-red-500',
    'الشبكات': 'from-orange-500 to-red-500',
    'Cloud Computing': 'from-sky-500 to-blue-500',
    'الحوسبة السحابية': 'from-sky-500 to-blue-500',
    'Cyber Security': 'from-red-500 to-pink-500',
    'الأمن السيبراني': 'from-red-500 to-pink-500',
    'UI/UX Design': 'from-pink-500 to-rose-500',
    'تصميم واجهة المستخدم': 'from-pink-500 to-rose-500',
    'Digital Design': 'from-indigo-500 to-purple-500',
    'التصميم الرقمي': 'from-indigo-500 to-purple-500',
  }

  return (
    <section id="courses" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Courses Categories */}
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Teaching Section - First Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative glass backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all">
              <div className="p-6 sm:p-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-4 sm:mb-6 shadow-lg">
                  <FaGraduationCap className="text-3xl sm:text-4xl text-white" />
                </div>
                <p className="text-purple-400 text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">{t.about.teaching.subtitle}</p>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 gradient-text">{t.about.teaching.title}</h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed px-4">
                  {t.about.teaching.description}
                </p>
              </div>
            </div>
          </motion.div>
          {data.categories.map((category, categoryIndex) => {
            const Icon = categoryIcons[category.name] || FaCode
            const gradient = categoryGradients[category.name] || 'from-purple-500 to-pink-500'
            const isExpanded = expandedCategory === categoryIndex

            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="relative group"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity`}></div>
                <div className="relative glass backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all">
                  {/* Category Header */}
                  <button
                    onClick={() => setExpandedCategory(isExpanded ? null : categoryIndex)}
                    className="w-full p-4 sm:p-6 flex items-center justify-between hover:bg-white/5 transition-colors"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className={`p-3 sm:p-4 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}>
                        <Icon className="text-2xl sm:text-3xl text-white" />
                      </div>
                      <div className="flex-1 flex items-center justify-between">
                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                          {category.name}
                        </h3>
                        <span className="text-purple-400 font-semibold text-base sm:text-lg ml-4">
                          {category.courses.length} {language === 'en' ? 'courses' : 'كورسات'}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {language === 'ar' ? (
                        <FaChevronUp className="text-purple-400 text-xl" />
                      ) : (
                        <FaChevronDown className="text-purple-400 text-xl" />
                      )}
                    </motion.div>
                  </button>

                  {/* Courses List */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 sm:p-6 pt-0 space-y-4">
                      {category.courses.map((course, courseIndex) => (
                        <motion.div
                          key={courseIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ 
                            opacity: isExpanded ? 1 : 0,
                            x: isExpanded ? 0 : -20
                          }}
                          transition={{ delay: courseIndex * 0.1 }}
                          className="glass backdrop-blur-sm border border-white/5 rounded-xl p-4 sm:p-6 hover:border-purple-500/30 transition-all"
                        >
                          <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                            {course.name}
                          </h4>
                          <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed">
                            {course.description}
                          </p>
                          <div>
                            <p className="text-purple-400 text-xs sm:text-sm font-semibold mb-2">
                              {language === 'en' ? 'Topics Covered:' : 'المواضيع المشمولة:'}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {course.topics.map((topic, topicIndex) => (
                                <span
                                  key={topicIndex}
                                  className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-xs sm:text-sm text-purple-300 border border-purple-500/30"
                                >
                                  {topic}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Courses
