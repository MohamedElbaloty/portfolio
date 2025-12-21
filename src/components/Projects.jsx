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
  FaGithub
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
      image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=Sahlat.sa',
      link: 'https://sahlat.sa',
      tags: ['React', 'Node.js', 'MongoDB'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      title: 'Miral Models',
      category: 'web',
      description: t.projects.projectDescriptions.miral,
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Miral+Models',
      link: 'https://miralmodels.com',
      tags: ['Vue.js', 'PHP', 'MySQL'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      title: 'Mr Robot Academy',
      category: 'web',
      description: t.projects.projectDescriptions.robot,
      image: 'https://via.placeholder.com/600x400/ec4899/ffffff?text=Mr+Robot+Academy',
      link: 'https://mrrobotacademy.com',
      tags: ['React', 'Express', 'PostgreSQL'],
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      id: 4,
      title: language === 'en' ? 'Task Management App' : 'تطبيق إدارة المهام',
      category: 'mobile',
      description: t.projects.projectDescriptions.taskApp,
      image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=Mobile+App+1',
      tags: ['React Native', 'Firebase'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      id: 5,
      title: language === 'en' ? 'Smart Weather App' : 'تطبيق الطقس الذكي',
      category: 'mobile',
      description: t.projects.projectDescriptions.weatherApp,
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Mobile+App+2',
      tags: ['Flutter', 'API Integration'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      id: 6,
      title: language === 'en' ? 'Smart Home System' : 'نظام منزل ذكي',
      category: 'iot',
      description: t.projects.projectDescriptions.smartHome,
      image: 'https://via.placeholder.com/600x400/ec4899/ffffff?text=Smart+Home',
      tags: ['Arduino', 'Raspberry Pi', 'Python'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      id: 7,
      title: language === 'en' ? 'Environmental Monitoring' : 'نظام مراقبة بيئية',
      category: 'iot',
      description: t.projects.projectDescriptions.monitoring,
      image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=IoT+Project',
      tags: ['Arduino', 'Sensors', 'IoT'],
      gradient: 'from-teal-500 to-green-500',
    },
    {
      id: 8,
      title: language === 'en' ? 'Database Management System' : 'نظام إدارة قاعدة بيانات',
      category: 'programming',
      description: t.projects.projectDescriptions.database,
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Java+Project',
      tags: ['Java', 'MySQL', 'Swing'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      id: 9,
      title: language === 'en' ? 'AI Data Analysis' : 'تحليل البيانات بالذكاء الاصطناعي',
      category: 'programming',
      description: t.projects.projectDescriptions.aiAnalysis,
      image: 'https://via.placeholder.com/600x400/ec4899/ffffff?text=Python+AI',
      tags: ['Python', 'Machine Learning', 'Pandas'],
      gradient: 'from-red-500 to-pink-500',
    },
    {
      id: 10,
      title: language === 'en' ? 'Enterprise Network' : 'شبكة Enterprise متكاملة',
      category: 'network',
      description: t.projects.projectDescriptions.enterprise,
      image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=Cisco+Network',
      tags: ['Cisco', 'Routing', 'Switching'],
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      id: 11,
      title: language === 'en' ? 'Cloud Architecture' : 'بنية Cloud Architecture',
      category: 'cloud',
      description: t.projects.projectDescriptions.cloudArch,
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Cloud+Project',
      tags: ['AWS', 'Docker', 'Kubernetes'],
      gradient: 'from-sky-500 to-blue-500',
    },
    {
      id: 12,
      title: language === 'en' ? 'Network Security System' : 'نظام حماية الشبكات',
      category: 'security',
      description: t.projects.projectDescriptions.networkSecurity,
      image: 'https://via.placeholder.com/600x400/ec4899/ffffff?text=Cyber+Security',
      tags: ['Penetration Testing', 'Firewall', 'Encryption'],
      gradient: 'from-red-500 to-orange-500',
    },
    {
      id: 13,
      title: language === 'en' ? 'Modern UI Design' : 'تصميم واجهة مستخدم حديثة',
      category: 'design',
      description: t.projects.projectDescriptions.uiDesign,
      image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=UX+Design',
      tags: ['Figma', 'UI/UX', 'Prototyping'],
      gradient: 'from-pink-500 to-rose-500',
    },
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="projects" className="py-20 px-6 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text mb-6">
            {t.projects.title}
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Enhanced Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative flex items-center gap-3 px-6 py-3 rounded-full transition-all overflow-hidden ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r ' + category.color + ' shadow-lg shadow-purple-500/50'
                  : 'glass backdrop-blur-xl border border-white/10 hover:border-white/30'
              }`}
            >
              <category.icon className={`text-lg ${selectedCategory === category.id ? 'text-white' : 'text-purple-400'}`} />
              <span className={`font-medium ${selectedCategory === category.id ? 'text-white' : 'text-gray-300'}`}>
                {category.name}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
        <div className="relative h-64 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4">
              {project.link && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
                >
                  <FaExternalLinkAlt className="text-white text-sm" />
                  <span className="text-white text-sm font-medium">{t.projects.viewSite}</span>
                </motion.div>
              )}
            </div>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-purple-500/20 backdrop-blur-sm rounded-full text-xs text-purple-300 border border-purple-500/30"
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
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/90 backdrop-blur-sm"
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
          <div className={`h-64 bg-gradient-to-br ${project.gradient} relative`}>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover mix-blend-overlay opacity-80"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-12 h-12 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-black/70 transition-colors text-white text-xl"
            >
              ✕
            </button>
          </div>
        </div>
        <div className="p-8">
          <h2 className="text-4xl font-bold mb-4 gradient-text">{project.title}</h2>
          <p className="text-gray-300 mb-6 text-lg leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-purple-500/20 backdrop-blur-sm rounded-full text-sm text-purple-300 border border-purple-500/30"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.link && (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              <FaExternalLinkAlt />
              {t.projects.viewSite}
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Projects
