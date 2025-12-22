import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaCode, 
  FaLaptopCode, 
  FaMobileAlt, 
  FaCloud, 
  FaDatabase, 
  FaNetworkWired,
  FaRocket,
  FaCog,
  FaBolt,
  FaGlobe,
  FaServer,
  FaPalette,
  FaShieldAlt,
  FaMicrochip
} from 'react-icons/fa'

const AnimatedBackground = () => {
  // Floating Tech Icons - Increased and more vertical movement
  const techIcons = [
    { icon: FaCode, delay: 0, x: '10%', y: '20%', duration: 18, yRange: [-80, 80] },
    { icon: FaLaptopCode, delay: 2, x: '80%', y: '15%', duration: 22, yRange: [-70, 70] },
    { icon: FaMobileAlt, delay: 4, x: '15%', y: '70%', duration: 16, yRange: [-90, 90] },
    { icon: FaCloud, delay: 1, x: '85%', y: '60%', duration: 20, yRange: [-75, 75] },
    { icon: FaDatabase, delay: 3, x: '20%', y: '40%', duration: 21, yRange: [-85, 85] },
    { icon: FaNetworkWired, delay: 5, x: '75%', y: '35%', duration: 19, yRange: [-65, 65] },
    { icon: FaRocket, delay: 1.5, x: '50%', y: '10%', duration: 14, yRange: [-100, 100] },
    { icon: FaCog, delay: 3.5, x: '60%', y: '80%', duration: 28, yRange: [-95, 95] },
    { icon: FaBolt, delay: 2.5, x: '30%', y: '55%', duration: 15, yRange: [-80, 80] },
    { icon: FaGlobe, delay: 4.5, x: '70%', y: '25%', duration: 17, yRange: [-70, 70] },
    { icon: FaServer, delay: 1.2, x: '25%', y: '85%', duration: 23, yRange: [-90, 90] },
    { icon: FaPalette, delay: 0.8, x: '45%', y: '30%', duration: 19, yRange: [-75, 75] },
    { icon: FaShieldAlt, delay: 3.2, x: '55%', y: '65%', duration: 24, yRange: [-85, 85] },
    { icon: FaMicrochip, delay: 2.8, x: '40%', y: '50%', duration: 20, yRange: [-80, 80] },
    { icon: FaCode, delay: 4.2, x: '90%', y: '45%', duration: 18, yRange: [-70, 70] },
    { icon: FaLaptopCode, delay: 1.8, x: '5%', y: '60%', duration: 22, yRange: [-90, 90] },
    { icon: FaCloud, delay: 3.8, x: '65%', y: '20%', duration: 21, yRange: [-75, 75] },
    { icon: FaDatabase, delay: 2.2, x: '35%', y: '75%', duration: 25, yRange: [-85, 85] },
  ]

  // Animated Shapes
  const shapes = [
    { type: 'circle', size: 200, x: '5%', y: '10%', duration: 15, delay: 0 },
    { type: 'square', size: 150, x: '90%', y: '20%', duration: 20, delay: 2 },
    { type: 'triangle', size: 180, x: '8%', y: '80%', duration: 18, delay: 4 },
    { type: 'circle', size: 120, x: '92%', y: '75%', duration: 22, delay: 1 },
    { type: 'square', size: 100, x: '50%', y: '5%', duration: 25, delay: 3 },
    { type: 'hexagon', size: 140, x: '45%', y: '90%', duration: 17, delay: 2.5 },
    { type: 'diamond', size: 130, x: '88%', y: '45%', duration: 21, delay: 1.5 },
  ]

  // Code Brackets and Tags
  const codeElements = [
    { text: '< />', x: '12%', y: '30%', delay: 0, duration: 12 },
    { text: '{ }', x: '78%', y: '45%', delay: 1, duration: 14 },
    { text: '[ ]', x: '22%', y: '60%', delay: 2, duration: 13 },
    { text: '( )', x: '82%', y: '30%', delay: 1.5, duration: 15 },
    { text: '</>', x: '35%', y: '25%', delay: 0.5, duration: 11 },
    { text: '{}', x: '65%', y: '70%', delay: 2.5, duration: 16 },
  ]

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Gradient Mesh Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Animated Grid Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {[...Array(20)].map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0"
            y1={i * 5 + '%'}
            x2="100%"
            y2={i * 5 + '%'}
            stroke="url(#grid-gradient)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
        {[...Array(20)].map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={i * 5 + '%'}
            y1="0"
            x2={i * 5 + '%'}
            y2="100%"
            stroke="url(#grid-gradient)"
            strokeWidth="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {/* Floating Tech Icons - Enhanced with more vertical movement */}
      {techIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: item.x,
            top: item.y,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 360],
            y: [0, item.yRange[0], item.yRange[1], 0],
            x: [0, 15, -15, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut",
          }}
        >
          <item.icon className="text-purple-400/30 text-4xl sm:text-5xl lg:text-6xl" />
        </motion.div>
      ))}

      {/* Animated Geometric Shapes */}
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        >
          {shape.type === 'circle' && (
            <div className="w-full h-full rounded-full border-2 border-purple-500/20"></div>
          )}
          {shape.type === 'square' && (
            <div className="w-full h-full border-2 border-indigo-500/20 rotate-45"></div>
          )}
          {shape.type === 'triangle' && (
            <div className="w-full h-full">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon
                  points="50,10 90,90 10,90"
                  fill="none"
                  stroke="rgba(139, 92, 246, 0.2)"
                  strokeWidth="2"
                />
              </svg>
            </div>
          )}
          {shape.type === 'hexagon' && (
            <div className="w-full h-full">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon
                  points="50,5 90,25 90,75 50,95 10,75 10,25"
                  fill="none"
                  stroke="rgba(99, 102, 241, 0.2)"
                  strokeWidth="2"
                />
              </svg>
            </div>
          )}
          {shape.type === 'diamond' && (
            <div className="w-full h-full border-2 border-pink-500/20" style={{ transform: 'rotate(45deg)' }}></div>
          )}
        </motion.div>
      ))}

      {/* Animated Code Brackets and Tags */}
      {codeElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute font-mono text-purple-400/25 text-3xl sm:text-4xl lg:text-5xl font-bold"
          style={{
            left: element.x,
            top: element.y,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [0.9, 1.1, 0.9],
            rotate: [0, 5, -5, 0],
            y: [0, -30, 30, 0],
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        >
          {element.text}
        </motion.div>
      ))}

      {/* Animated Code Lines */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`code-${i}`}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
          style={{
            top: `${(i + 1) * 6.66}%`,
          }}
          initial={{ x: '-100%', opacity: 0 }}
          animate={{
            x: ['-100%', '200%'],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 8 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "linear",
          }}
        />
      ))}

      {/* Animated Connection Lines - Enhanced */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        {[...Array(12)].map((_, i) => {
          const x1 = 10 + (i % 4) * 25
          const y1 = 15 + Math.floor(i / 4) * 30
          const x2 = x1 + 20
          const y2 = y1 + 25
          
          return (
            <motion.line
              key={`line-${i}`}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="#8b5cf6"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeInOut",
              }}
            />
          )
        })}
      </svg>

      {/* Pulsing Orbs - Enhanced */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${15 + i * 12}%`,
            top: `${20 + (i % 3) * 30}%`,
            width: 80 + i * 15,
            height: 80 + i * 15,
          }}
          animate={{
            scale: [1, 1.6, 1],
            opacity: [0.08, 0.25, 0.08],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-pink-500/20 blur-2xl"></div>
        </motion.div>
      ))}

      {/* Floating Code Snippets */}
      {[
        { text: 'const', x: '18%', y: '50%' },
        { text: 'function', x: '72%', y: '35%' },
        { text: 'return', x: '40%', y: '65%' },
        { text: 'import', x: '55%', y: '20%' },
        { text: 'export', x: '28%', y: '75%' },
      ].map((snippet, index) => (
        <motion.div
          key={index}
          className="absolute font-mono text-indigo-400/20 text-xs sm:text-sm lg:text-base"
          style={{
            left: snippet.x,
            top: snippet.y,
          }}
          animate={{
            y: [0, -40, 40, 0],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 6 + index,
            repeat: Infinity,
            delay: index * 0.8,
            ease: "easeInOut",
          }}
        >
          {snippet.text}
        </motion.div>
      ))}
    </div>
  )
}

export default AnimatedBackground
