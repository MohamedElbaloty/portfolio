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
  FaPlay,
  FaExternalLinkAlt
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
    { id: 'all', name: t.projects.categories.all, icon: FaCode },
    { id: 'web', name: t.projects.categories.web, icon: FaGlobe },
    { id: 'mobile', name: t.projects.categories.mobile, icon: FaMobileAlt },
    { id: 'iot', name: t.projects.categories.iot, icon: FaMicrochip },
    { id: 'programming', name: t.projects.categories.programming, icon: FaCode },
    { id: 'network', name: t.projects.categories.network, icon: FaNetworkWired },
    { id: 'cloud', name: t.projects.categories.cloud, icon: FaCloud },
    { id: 'security', name: t.projects.categories.security, icon: FaShieldAlt },
    { id: 'design', name: t.projects.categories.design, icon: FaPalette },
  ]

  const projects = [
    // Web Projects
    {
      id: 1,
      title: 'Sahlat.sa',
      category: 'web',
      description: t.projects.projectDescriptions.sahlat,
      image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=Sahlat.sa',
      video: 'https://example.com/video1.mp4',
      link: 'https://sahlat.sa',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Miral Models',
      category: 'web',
      description: t.projects.projectDescriptions.miral,
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Miral+Models',
      video: 'https://example.com/video2.mp4',
      link: 'https://miralmodels.com',
      tags: ['Vue.js', 'PHP', 'MySQL'],
    },
    {
      id: 3,
      title: 'Mr Robot Academy',
      category: 'web',
      description: t.projects.projectDescriptions.robot,
      image: 'https://via.placeholder.com/600x400/ec4899/ffffff?text=Mr+Robot+Academy',
      video: 'https://example.com/video3.mp4',
      link: 'https://mrrobotacademy.com',
      tags: ['React', 'Express', 'PostgreSQL'],
    },
    // Mobile Apps
    {
      id: 4,
      title: language === 'en' ? 'Task Management App' : 'تطبيق إدارة المهام',
      category: 'mobile',
      description: t.projects.projectDescriptions.taskApp,
      image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=Mobile+App+1',
      video: 'https://example.com/mobile1.mp4',
      tags: ['React Native', 'Firebase'],
    },
    {
      id: 5,
      title: language === 'en' ? 'Smart Weather App' : 'تطبيق الطقس الذكي',
      category: 'mobile',
      description: t.projects.projectDescriptions.weatherApp,
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Mobile+App+2',
      video: 'https://example.com/mobile2.mp4',
      tags: ['Flutter', 'API Integration'],
    },
    // IoT Projects
    {
      id: 6,
      title: language === 'en' ? 'Smart Home System' : 'نظام منزل ذكي',
      category: 'iot',
      description: t.projects.projectDescriptions.smartHome,
      image: 'https://via.placeholder.com/600x400/ec4899/ffffff?text=Smart+Home',
      video: 'https://example.com/iot1.mp4',
      tags: ['Arduino', 'Raspberry Pi', 'Python'],
    },
    {
      id: 7,
      title: language === 'en' ? 'Environmental Monitoring' : 'نظام مراقبة بيئية',
      category: 'iot',
      description: t.projects.projectDescriptions.monitoring,
      image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=IoT+Project',
      video: 'https://example.com/iot2.mp4',
      tags: ['Arduino', 'Sensors', 'IoT'],
    },
    // Programming Projects
    {
      id: 8,
      title: language === 'en' ? 'Database Management System' : 'نظام إدارة قاعدة بيانات',
      category: 'programming',
      description: t.projects.projectDescriptions.database,
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Java+Project',
      video: 'https://example.com/java1.mp4',
      tags: ['Java', 'MySQL', 'Swing'],
    },
    {
      id: 9,
      title: language === 'en' ? 'AI Data Analysis' : 'تحليل البيانات بالذكاء الاصطناعي',
      category: 'programming',
      description: t.projects.projectDescriptions.aiAnalysis,
      image: 'https://via.placeholder.com/600x400/ec4899/ffffff?text=Python+AI',
      video: 'https://example.com/python1.mp4',
      tags: ['Python', 'Machine Learning', 'Pandas'],
    },
    // Network Projects
    {
      id: 10,
      title: language === 'en' ? 'Enterprise Network' : 'شبكة Enterprise متكاملة',
      category: 'network',
      description: t.projects.projectDescriptions.enterprise,
      image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=Cisco+Network',
      video: 'https://example.com/network1.mp4',
      tags: ['Cisco', 'Routing', 'Switching'],
    },
    // Cloud Projects
    {
      id: 11,
      title: language === 'en' ? 'Cloud Architecture' : 'بنية Cloud Architecture',
      category: 'cloud',
      description: t.projects.projectDescriptions.cloudArch,
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Cloud+Project',
      video: 'https://example.com/cloud1.mp4',
      tags: ['AWS', 'Docker', 'Kubernetes'],
    },
    // Security Projects
    {
      id: 12,
      title: language === 'en' ? 'Network Security System' : 'نظام حماية الشبكات',
      category: 'security',
      description: t.projects.projectDescriptions.networkSecurity,
      image: 'https://via.placeholder.com/600x400/ec4899/ffffff?text=Cyber+Security',
      video: 'https://example.com/security1.mp4',
      tags: ['Penetration Testing', 'Firewall', 'Encryption'],
    },
    // Design Projects
    {
      id: 13,
      title: language === 'en' ? 'Modern UI Design' : 'تصميم واجهة مستخدم حديثة',
      category: 'design',
      description: t.projects.projectDescriptions.uiDesign,
      image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=UX+Design',
      video: 'https://example.com/design1.mp4',
      tags: ['Figma', 'UI/UX', 'Prototyping'],
    },
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            {t.projects.title}
          </h2>
          <p className="text-gray-400 text-lg">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 glow'
                  : 'glass hover:bg-white/10'
              }`}
            >
              <category.icon />
              <span>{category.name}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
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

      {/* Project Modal */}
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
      whileHover={{ y: -10 }}
      className="glass rounded-2xl overflow-hidden cursor-pointer group"
      onClick={() => onSelect(project)}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 mb-2">
              {project.video && (
                <span className="px-3 py-1 bg-red-500 rounded-full text-sm flex items-center gap-1">
                  <FaPlay className="text-xs" /> {t.projects.video}
                </span>
              )}
              {project.link && (
                <span className="px-3 py-1 bg-blue-500 rounded-full text-sm flex items-center gap-1">
                  <FaExternalLinkAlt className="text-xs" /> {t.projects.link}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300"
            >
              {tag}
            </span>
          ))}
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
      className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="relative">
          {project.video ? (
            <video
              src={project.video}
              controls
              className="w-full h-auto"
              poster={project.image}
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto"
            />
          )}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
          <p className="text-gray-300 mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-purple-500/20 rounded-full text-sm text-purple-300"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full hover:scale-105 transition-transform"
            >
              <FaExternalLinkAlt /> {t.projects.viewSite}
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Projects
