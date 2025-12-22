import React from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const Contact = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const contactInfo = [
    {
      icon: FaWhatsapp,
      label: t.contact.whatsapp,
      value: '+201128384787',
      link: 'https://wa.me/201128384787',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: FaEnvelope,
      label: t.contact.email,
      value: 'mo7amed_3ezat@hotmail.com',
      link: 'mailto:mo7amed_3ezat@hotmail.com',
      color: 'from-blue-500 to-blue-600',
    },
  ]

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 relative">
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
            {t.contact.title}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target={item.link.startsWith('http') ? '_blank' : undefined}
              rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className={`glass rounded-xl sm:rounded-2xl p-3 sm:p-6 lg:p-8 text-center group cursor-pointer bg-gradient-to-br ${item.color} bg-opacity-10 hover:bg-opacity-20 transition-all border border-white/10 hover:border-purple-500/50`}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-2 sm:mb-4"
              >
                <item.icon
                  className={`text-2xl sm:text-4xl lg:text-5xl ${
                    item.label === t.contact.whatsapp
                      ? 'text-[#25D366]'
                      : item.label === t.contact.email
                        ? 'text-[#0078D4]'
                        : 'text-white'
                  }`}
                />
              </motion.div>
              <h3 className="text-xs sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2">{item.label}</h3>
              <p className="text-gray-300 text-[10px] sm:text-sm lg:text-base break-all leading-tight sm:leading-normal">{item.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Contact
