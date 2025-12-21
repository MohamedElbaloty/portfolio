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
    <section id="contact" className="py-20 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
            {t.contact.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
              className={`glass rounded-2xl p-8 text-center group cursor-pointer bg-gradient-to-br ${item.color} bg-opacity-10 hover:bg-opacity-20 transition-all`}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="inline-block mb-4"
              >
                <item.icon className="text-5xl text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{item.label}</h3>
              <p className="text-gray-300">{item.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">{t.contact.services.title}</h3>
            <div className={`grid md:grid-cols-2 gap-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              <div className="space-y-2">
                {t.contact.services.list.slice(0, 4).map((service, index) => (
                  <p key={index} className="text-gray-300">✓ {service}</p>
                ))}
              </div>
              <div className="space-y-2">
                {t.contact.services.list.slice(4).map((service, index) => (
                  <p key={index} className="text-gray-300">✓ {service}</p>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-gray-400">
                {t.contact.teachingNote}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
