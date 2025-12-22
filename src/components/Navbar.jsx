import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaBars, FaTimes, FaGlobe, FaMoon, FaSun } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'
import { useTheme } from '../contexts/ThemeContext'
import { translations } from '../translations'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.courses, href: '#courses' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.contact, href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-xl sm:text-2xl font-bold gradient-text"
        >
          {language === 'en' ? 'Mohamed Ezzat' : 'محمد عزت'}
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-white hover:text-purple-400 transition-colors cursor-pointer text-sm lg:text-base"
            >
              {item.name}
            </motion.a>
          ))}
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="glass px-4 py-2 rounded-full flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
          </motion.button>
          {/* Language Toggle */}
          <motion.button
            onClick={toggleLanguage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="glass px-4 py-2 rounded-full flex items-center gap-2 text-white hover:text-purple-400 transition-colors"
            title={language === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}
          >
            <FaGlobe className="text-lg" />
            <span className="text-sm">{language === 'en' ? 'AR' : 'EN'}</span>
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="glass px-3 py-2 rounded-full flex items-center justify-center text-white"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </motion.button>
          <motion.button
            onClick={toggleLanguage}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="glass px-3 py-2 rounded-full flex items-center gap-1 text-white text-sm"
          >
            <FaGlobe />
            <span>{language === 'en' ? 'AR' : 'EN'}</span>
          </motion.button>
          <button
            className="text-white text-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass mt-4 mx-4 rounded-lg p-4"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-white hover:text-purple-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
