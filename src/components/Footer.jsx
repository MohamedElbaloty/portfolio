import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-10 sm:mt-14">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
      <div className="glass border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-7 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          <p className="text-gray-300 text-xs sm:text-sm text-center sm:text-left">
            {t.footer.rights.replace('{year}', String(year))}
          </p>

          {/* Quick contact icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/201128384787"
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-full p-2 border border-white/10 hover:border-white/25 transition-colors"
              aria-label="WhatsApp"
              title="WhatsApp"
            >
              <FaWhatsapp className="text-xl text-[#25D366]" />
            </a>
            <a
              href="mailto:mo7amed_3ezat@hotmail.com"
              className="glass rounded-full p-2 border border-white/10 hover:border-white/25 transition-colors"
              aria-label="Email"
              title="Email"
            >
              <FaEnvelope className="text-xl text-[#0078D4]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


