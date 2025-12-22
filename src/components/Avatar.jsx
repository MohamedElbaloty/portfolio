import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

const Avatar = ({ src, alt = 'Profile', size = 'small' }) => {
  const { theme } = useTheme()
  
  const sizeClasses = {
    // Slightly larger "small" for navbar
    small: 'w-9 h-9 sm:w-11 sm:h-11',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  }

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={`${sizeClasses[size]} relative rounded-full overflow-hidden flex-shrink-0`}
    >
      {/* Gradient Border */}
      <div className={`absolute inset-0 rounded-full p-[2px] ${
        theme === 'dark' 
          ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500' 
          : 'bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600'
      }`}>
        <div className={`w-full h-full rounded-full overflow-hidden ${
          theme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-white'
        }`}>
          <img
            src={src || '/avatar.jfif'}
            alt={alt}
            className="w-full h-full object-cover rounded-full max-w-full max-h-full"
            style={{ 
              maxWidth: '100%', 
              maxHeight: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              pointerEvents: 'none'
            }}
            loading="lazy"
            onError={(e) => {
              // Fallback to gradient circle if image not found
              e.target.style.display = 'none'
              e.target.parentElement.parentElement.className += ' bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500'
            }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default Avatar

