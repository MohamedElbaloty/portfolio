import React, { useState } from 'react'
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
  FaPlay
} from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const Projects = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)

  const categories = [
    { id: 'all', name: t.projects.categories.all, icon: FaCode, color: 'from-indigo-500 to-purple-500' },
    { id: 'web', name: t.projects.categories.web, icon: FaGlobe, color: 'from-blue-500 to-cyan-500' },
    { id: 'mobile', name: t.projects.categories.mobile, icon: FaMobileAlt, color: 'from-purple-500 to-pink-500' },
    { id: 'iot', name: t.projects.categories.iot, icon: FaMicrochip, color: 'from-green-500 to-emerald-500' },
    { id: 'programming', name: t.projects.categories.programming, icon: FaCode, color: 'from-orange-500 to-red-500' },
    { id: 'network', name: t.projects.categories.network, icon: FaNetworkWired, color: 'from-cyan-500 to-blue-500' },
    { id: 'cloud', name: t.projects.categories.cloud, icon: FaCloud, color: 'from-sky-500 to-blue-500' },
    { id: 'security', name: t.projects.categories.security, icon: FaShieldAlt, color: 'from-red-500 to-pink-500' },
    { id: 'design', name: t.projects.categories.design, icon: FaPalette, color: 'from-pink-500 to-rose-500' },
  ]

  const projects = [
    {
      id: 1,
      title: 'Sahlat.sa',
      category: 'web',
      description: t.projects.projectDescriptions.sahlat,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_1',
      link: 'https://sahlat.sa',
      tags: ['React', 'Node.js', 'MongoDB'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Miral Models',
      category: 'web',
      description: t.projects.projectDescriptions.miral,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_2',
      link: 'https://miralmodels.com',
      tags: ['Vue.js', 'PHP', 'MySQL'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Mr Robot Academy',
      category: 'web',
      description: t.projects.projectDescriptions.robot,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_3',
      link: 'https://mrrobotacademy.com',
      tags: ['React', 'Express', 'PostgreSQL'],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      id: 4,
      title: 'Emaar Group',
      category: 'web',
      description: t.projects.projectDescriptions.emaar,
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop',
      video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_4',
      link: 'https://emaargroup.com.kw',
      tags: ['React', 'Node.js', 'MongoDB'],
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      id: 5,
      title: language === 'en' ? 'Task Management App' : 'تطبيق إدارة المهام',
      category: 'mobile',
      description: t.projects.projectDescriptions.taskApp,
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
      video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_5',
      tags: ['React Native', 'Firebase'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 6,
      title: language === 'en' ? 'Smart Weather App' : 'تطبيق الطقس الذكي',
      category: 'mobile',
      description: t.projects.projectDescriptions.weatherApp,
      image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&h=600&fit=crop',
      video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_6',
      tags: ['Flutter', 'API Integration'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      id: 7,
      title: language === 'en' ? 'Smart Home System' : 'نظام منزل ذكي',
      category: 'iot',
      description: t.projects.projectDescriptions.smartHome,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
      video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_7',
      tags: ['Arduino', 'Raspberry Pi', 'Python'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 8,
      title: language === 'en' ? 'Environmental Monitoring' : 'نظام مراقبة بيئية',
      category: 'iot',
      description: t.projects.projectDescriptions.monitoring,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_8',
      tags: ['Arduino', 'Sensors', 'IoT'],
      gradient: 'from-teal-500 to-green-500',
    },
    {
      id: 9,
      title: language === 'en' ? 'Database Management System' : 'نظام إدارة قاعدة بيانات',
      category: 'programming',
      description: t.projects.projectDescriptions.database,
      image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=600&fit=crop',
      video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_9',
      tags: ['Java', 'MySQL', 'Swing'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 10,
      title: language === 'en' ? 'AI Data Analysis' : 'تحليل البيانات بالذكاء الاصطناعي',
      category: 'programming',
      description: t.projects.projectDescriptions.aiAnalysis,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_10',
      tags: ['Python', 'Machine Learning', 'Pandas'],
      gradient: 'from-red-500 to-pink-500',
    },
    {
      id: 11,
      title: language === 'en' ? 'Enterprise Network' : 'شبكة Enterprise متكاملة',
      category: 'network',
      description: t.projects.projectDescriptions.enterprise,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_11',
      tags: ['Cisco', 'Routing', 'Switching'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      id: 12,
      title: language === 'en' ? 'Cloud Architecture' : 'بنية Cloud Architecture',
      category: 'cloud',
      description: t.projects.projectDescriptions.cloudArch,
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
      video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_12',
      tags: ['AWS', 'Docker', 'Kubernetes'],
      gradient: 'from-sky-500 to-blue-500',
    },
    {
      id: 13,
      title: language === 'en' ? 'Network Security System' : 'نظام حماية الشبكات',
      category: 'security',
      description: t.projects.projectDescriptions.networkSecurity,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
      video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_13',
      tags: ['Penetration Testing', 'Firewall', 'Encryption'],
      gradient: 'from-red-500 to-orange-500',
    },
    {
      id: 14,
      title: language === 'en' ? 'Modern UI Design' : 'تصميم واجهة مستخدم حديثة',
      category: 'design',
      description: t.projects.projectDescriptions.uiDesign,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
      video: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_14',
      tags: ['Figma', 'UI/UX', 'Prototyping'],
      gradient: 'from-pink-500 to-rose-500',
    },
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative">
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
            {t.projects.title}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Enhanced Category Filter */}
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

        {/* Enhanced Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onSelect={setSelectedProject}
                t={t}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            t={t}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

const ProjectCard = ({ project, index, onSelect, t }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

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
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              e.target.src = `https://via.placeholder.com/800x600/6366f1/ffffff?text=${encodeURIComponent(project.title)}`
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
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
          <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 sm:px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-xs text-purple-300 border border-purple-500/30"
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

const ProjectModal = ({ project, onClose, t }) => {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        onClick={(e) => e.stopPropagation()}
        className="glass backdrop-blur-xl border border-white/20 rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
      >
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
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 gradient-text">{project.title}</h2>
          <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">{project.description}</p>
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
