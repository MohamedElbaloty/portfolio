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
  FaBolt
} from 'react-icons/fa'

const AnimatedBackground = () => {
  // Floating Tech Icons
  const techIcons = [
    { icon: FaCode, delay: 0, x: '10%', y: '20%', duration: 20 },
    { icon: FaLaptopCode, delay: 2, x: '80%', y: '15%', duration: 25 },
    { icon: FaMobileAlt, delay: 4, x: '15%', y: '70%', duration: 18 },
    { icon: FaCloud, delay: 1, x: '85%', y: '60%', duration: 22 },
    { icon: FaDatabase, delay: 3, x: '20%', y: '40%', duration: 24 },
    { icon: FaNetworkWired, delay: 5, x: '75%', y: '35%', duration: 20 },
    { icon: FaRocket, delay: 1.5, x: '50%', y: '10%', duration: 15 },
    { icon: FaCog, delay: 3.5, x: '60%', y: '80%', duration: 30 },
    { icon: FaBolt, delay: 2.5, x: '30%', y: '55%', duration: 16 },
  ]

  // Animated Shapes
  const shapes = [
    { type: 'circle', size: 200, x: '5%', y: '10%', duration: 15, delay: 0 },
    { type: 'square', size: 150, x: '90%', y: '20%', duration: 20, delay: 2 },
    { type: 'triangle', size: 180, x: '8%', y: '80%', duration: 18, delay: 4 },
    { type: 'circle', size: 120, x: '92%', y: '75%', duration: 22, delay: 1 },
    { type: 'square', size: 100, x: '50%', y: '5%', duration: 25, delay: 3 },
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

      {/* Floating Tech Icons */}
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
            y: [0, -30, 0],
            x: [0, 20, 0],
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

      {/* Floating Particles */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-purple-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated Connection Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        {[...Array(8)].map((_, i) => {
          const x1 = Math.random() * 100
          const y1 = Math.random() * 100
          const x2 = Math.random() * 100
          const y2 = Math.random() * 100
          
          return (
            <motion.line
              key={`line-${i}`}
              x1={`${x1}%`}
              y1={`${y1}%`}
              x2={`${x2}%`}
              y2={`${y2}%`}
              stroke="#8b5cf6"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
          )
        })}
      </svg>

      {/* Pulsing Orbs */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
            width: 100 + i * 20,
            height: 100 + i * 20,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        >
          <div className="w-full h-full rounded-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur-xl"></div>
        </motion.div>
      ))}
    </div>
  )
}

export default AnimatedBackground

