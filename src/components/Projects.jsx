import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaGlobe, 
  FaMobileAlt, 
  FaMicrochip, 
  FaCode, 
  FaNetworkWired, 
  FaCloud, 
  FaShieldAlt, 
  FaPalette,
  FaExternalLinkAlt,
  FaPlay,
  FaTools,
  FaList,
  FaBriefcase,
  FaMapMarkerAlt
} from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { projectsData } from '../data/projects'

const Projects = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [selectedCategory, setSelectedCategory] = useState('production')
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeTab, setActiveTab] = useState('description') // description, tools, video
  const [showAllMobile, setShowAllMobile] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Get projects based on language
  const webProjects = projectsData[language] || projectsData.en
  
  // Separate production and academic projects
  const productionProjects = webProjects.filter(p => p.category === 'web' || p.category === 'production')
  const academicProjects = [
    {
      id: 5,
      title: language === 'en' ? 'Task Management App' : 'تطبيق إدارة المهام',
      category: 'mobile',
      description: t.projects.projectDescriptions.taskApp,
      fullDescription: language === 'en' 
        ? 'A comprehensive task management application for Android and iOS platforms. Features include task creation, categorization, priority settings, deadline reminders, team collaboration, file attachments, and progress tracking.'
        : 'تطبيق شامل لإدارة المهام لمنصات Android و iOS. يتضمن إنشاء المهام، التصنيف، إعدادات الأولوية، تذكيرات المواعيد النهائية، التعاون الجماعي، مرفقات الملفات، وتتبع التقدم.',
      tools: ['React Native', 'Firebase', 'Redux', 'Expo', 'Push Notifications'],
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_5',
      tags: ['React Native', 'Firebase'],
      gradient: 'from-purple-500 to-pink-500',
      videoSteps: language === 'en' 
        ? ['App Overview', 'Task Creation', 'Categories & Filters', 'Team Collaboration', 'Notifications']
        : ['نظرة عامة على التطبيق', 'إنشاء المهام', 'الفئات والفلترة', 'التعاون الجماعي', 'الإشعارات']
    },
    {
      id: 6,
      title: language === 'en' ? 'Smart Weather App' : 'تطبيق الطقس الذكي',
      category: 'mobile',
      description: t.projects.projectDescriptions.weatherApp,
      fullDescription: language === 'en'
        ? 'A modern weather forecasting application with real-time updates, 7-day forecasts, weather maps, location-based services, and beautiful UI animations.'
        : 'تطبيق تنبؤ بالطقس حديث مع تحديثات فورية، توقعات لـ 7 أيام، خرائط الطقس، خدمات قائمة على الموقع، وحركات واجهة جميلة.',
      tools: ['Flutter', 'Dart', 'Weather API', 'Google Maps API', 'Location Services'],
      image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&h=600&fit=crop',
      video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_6',
      tags: ['Flutter', 'API Integration'],
      gradient: 'from-cyan-500 to-blue-500',
      videoSteps: language === 'en'
        ? ['Home Screen', 'Location Search', '7-Day Forecast', 'Weather Maps', 'Settings']
        : ['الشاشة الرئيسية', 'بحث الموقع', 'توقعات 7 أيام', 'خرائط الطقس', 'الإعدادات']
    }
  ]

  // For category filtering, keep all projects
  const allProjects = [...productionProjects, ...academicProjects]

  const categories = []

  const getFilteredProjects = () => {
    if (selectedCategory === 'production') {
      return productionProjects
    }
    if (selectedCategory === 'academic') {
      return academicProjects
    }
    if (selectedCategory === 'all') {
      return allProjects
    }
    return allProjects.filter(p => p.category === selectedCategory)
  }
  
  const filteredProjects = getFilteredProjects()

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto relative z-10">

        {/* Projects Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0 }}
          className="relative group max-w-4xl mx-auto mb-8 sm:mb-12"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity"></div>
          <div className="relative glass backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all">
            <div className="p-6 sm:p-10 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 mb-4 sm:mb-6 shadow-lg">
                <FaBriefcase className="text-3xl sm:text-4xl text-white" />
              </div>
              <p className="text-purple-400 text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">{t.projects.subtitle}</p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed px-4">
                {t.projects.cardDescription}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Production vs Academic Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-8 sm:mb-12"
        >
          <motion.button
            onClick={() => {
              setSelectedCategory('production')
              setShowAllMobile(false)
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-base transition-all ${
              selectedCategory === 'production' || selectedCategory === 'all'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'glass border border-white/10 text-gray-300 hover:border-purple-500/50'
            }`}
          >
            {t.projects.productionProjects}
          </motion.button>
          <motion.button
            onClick={() => {
              setSelectedCategory('academic')
              setShowAllMobile(false)
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-xs sm:text-base transition-all ${
              selectedCategory === 'academic'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                : 'glass border border-white/10 text-gray-300 hover:border-purple-500/50'
            }`}
          >
            {t.projects.academicProjects}
          </motion.button>
        </motion.div>

        {/* Enhanced Category Filter */}
        {categories.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 lg:mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative flex items-center gap-2 sm:gap-3 px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-full transition-all overflow-hidden text-xs sm:text-sm ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r ' + category.color + ' shadow-lg shadow-purple-500/50'
                  : 'glass backdrop-blur-xl border border-white/10 hover:border-white/30'
              }`}
            >
              <category.icon className={`text-sm sm:text-lg ${selectedCategory === category.id ? 'text-white' : 'text-purple-400'}`} />
              <span className={`font-medium ${selectedCategory === category.id ? 'text-white' : 'text-gray-300'}`}>
                {category.name}
              </span>
            </motion.button>
          ))}
        </motion.div>
        )}

        {/* Enhanced Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-5 sm:gap-4 lg:gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              // On mobile, show only first 4 projects unless showAllMobile is true
              if (isMobile && !showAllMobile && index >= 4) {
                return null
              }
              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onSelect={setSelectedProject}
                  t={t}
                  isMobile={isMobile}
                />
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* More Button - Mobile Only */}
        {filteredProjects.length > 4 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-6 sm:hidden"
          >
            <motion.button
              onClick={() => setShowAllMobile(!showAllMobile)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full font-semibold text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all"
            >
              {showAllMobile ? t.projects.showLess : t.projects.more}
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => {
              setSelectedProject(null)
              setActiveTab('description')
            }}
            t={t}
            language={language}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

const ProjectCard = ({ project, index, onSelect, t, isMobile }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const marketMeta = {
    sa: { emoji: '🇸🇦', color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' },
    ma: { emoji: '🇲🇦', color: 'bg-red-500/15 text-red-300 border-red-500/30' },
    eg: { emoji: '🇪🇬', color: 'bg-amber-500/15 text-amber-300 border-amber-500/30' },
    kw: { emoji: '🇰🇼', color: 'bg-sky-500/15 text-sky-300 border-sky-500/30' },
  }
  const market = project.marketKey ? marketMeta[project.marketKey] : null
  const corner = project.badgeCorner || 'tr'
  const cornerClass =
    corner === 'tl'
      ? 'top-3 left-3'
      : corner === 'bl'
        ? 'bottom-3 left-3'
        : corner === 'br'
          ? 'bottom-3 right-3'
          : 'top-3 right-3'

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -15, scale: 1.02 }}
      className="group relative cursor-pointer"
      onClick={() => onSelect(project)}
    >
      {/* Glow Effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
      
      <div className="relative glass backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden h-full hover:border-purple-500/50 transition-all">
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
          {(() => {
            return (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/800x600/6366f1/ffffff?text=${encodeURIComponent(project.title)}`
                }}
              />
            )
          })()}
          {/* Market badge - pinned on the image (top-right) so title never wraps */}
          {project.market && market && (
            <div className={`absolute ${cornerClass} z-10 pointer-events-none`}>
              <span
                className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-full border text-[10px] sm:text-xs whitespace-nowrap backdrop-blur-md bg-black/35 ${market.color}`}
              >
                <span className="text-[11px] sm:text-sm leading-none">{market.emoji}</span>
                <FaMapMarkerAlt className="opacity-90" />
                <span className="font-semibold">{project.market}</span>
              </span>
            </div>
          )}
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 flex-wrap">
              {project.video && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-red-500/80 backdrop-blur-md rounded-full border border-white/20"
                >
                  <FaPlay className="text-white text-xs sm:text-sm" />
                  <span className="text-white text-xs sm:text-sm font-medium">{t.projects.video}</span>
                </motion.div>
              )}
              {project.link && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
                >
                  <FaExternalLinkAlt className="text-white text-xs sm:text-sm" />
                  <span className="text-white text-xs sm:text-sm font-medium">{t.projects.viewSite}</span>
                </motion.div>
              )}
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4 sm:p-6">
          {(() => {
            const isMrRobot = isMobile && project.title === 'Mr Robot Academy'
            return (
              <h3
                className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-purple-400 transition-colors ${
                  isMrRobot ? 'text-base whitespace-nowrap' : ''
                }`}
              >
                {project.title}
              </h3>
            )
          })()}
          <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
            {project.description}
          </p>
          <div
            className={`flex gap-1.5 sm:gap-2 ${
              isMobile && project.title === 'Emaar Group' ? 'flex-nowrap' : 'flex-wrap'
            }`}
          >
            {(project.tags || project.tools || []).slice(0, 3).map((tag, i) => (
              <span
                key={i}
                className={`bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 border border-purple-500/30 whitespace-nowrap ${
                  isMobile && project.title === 'Emaar Group'
                    ? 'px-1.5 py-0.5 text-[10px] leading-none'
                    : 'px-1.5 sm:px-2 lg:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs'
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const ProjectModal = ({ project, onClose, t, language, activeTab, setActiveTab }) => {
  const [showVideo, setShowVideo] = useState(false)
  const marketMeta = {
    sa: { emoji: '🇸🇦', color: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30' },
    ma: { emoji: '🇲🇦', color: 'bg-red-500/15 text-red-300 border-red-500/30' },
    eg: { emoji: '🇪🇬', color: 'bg-amber-500/15 text-amber-300 border-amber-500/30' },
    kw: { emoji: '🇰🇼', color: 'bg-sky-500/15 text-sky-300 border-sky-500/30' },
  }
  const market = project?.marketKey ? marketMeta[project.marketKey] : null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        onClick={(e) => e.stopPropagation()}
        className="glass backdrop-blur-xl border border-white/20 rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl my-8"
      >
        {/* Header with Image/Video */}
        <div className="relative">
          {showVideo && project.video ? (
            <div className="relative w-full h-0 pb-[56.25%] bg-black">
              <iframe
                src={project.video}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={project.title}
              ></iframe>
            </div>
          ) : (
            <div className={`h-48 sm:h-64 bg-gradient-to-br ${project.gradient} relative`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover mix-blend-overlay opacity-80"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/800x600/6366f1/ffffff?text=${encodeURIComponent(project.title)}`
                }}
              />
              {project.video && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setShowVideo(true)
                  }}
                  className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/70 transition-colors group"
                >
                  <div className="w-20 h-20 rounded-full bg-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaPlay className="text-white text-2xl ml-1" />
                  </div>
                </button>
              )}
            </div>
          )}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/70 transition-colors text-white text-lg sm:text-xl z-10"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text">{project.title}</h2>
            {project.market && market && (
              <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs sm:text-sm ${market.color}`}>
                <span className="text-sm sm:text-base leading-none">{market.emoji}</span>
                <FaMapMarkerAlt className="opacity-90" />
                <span className="font-semibold">{project.market}</span>
              </span>
            )}
          </div>
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-700">
            <button
              onClick={() => setActiveTab('description')}
              className={`px-4 py-2 rounded-t-lg transition-all ${
                activeTab === 'description'
                  ? 'bg-purple-500/20 text-purple-300 border-b-2 border-purple-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {language === 'en' ? 'Description' : 'الوصف'}
            </button>
            {project.tools && (
              <button
                onClick={() => setActiveTab('tools')}
                className={`px-4 py-2 rounded-t-lg transition-all flex items-center gap-2 ${
                  activeTab === 'tools'
                    ? 'bg-purple-500/20 text-purple-300 border-b-2 border-purple-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <FaTools className="text-sm" />
                {language === 'en' ? 'Tools & Technologies' : 'الأدوات والتقنيات'}
              </button>
            )}
          </div>

          {/* Tab Content */}
          <div className="mb-6">
            {activeTab === 'description' && (
              <div>
                <p className="text-gray-300 mb-4 text-sm sm:text-base lg:text-lg leading-relaxed">
                  {project.fullDescription || project.description}
                </p>
              </div>
            )}

            {activeTab === 'tools' && project.tools && (
              <div>
                <div className="flex flex-wrap gap-3">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-full text-sm text-purple-300 border border-purple-500/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Tags */}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 sm:px-4 py-1 sm:py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-xs sm:text-sm text-purple-300 border border-purple-500/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            {project.link && (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                <FaExternalLinkAlt />
                {t.projects.viewSite}
              </motion.a>
            )}
            {project.video && !showVideo && (
              <motion.button
                onClick={(e) => {
                  e.stopPropagation()
                  setShowVideo(true)
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-pink-600 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:shadow-lg hover:shadow-red-500/50 transition-all"
              >
                <FaPlay />
                {t.projects.video}
              </motion.button>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Projects
