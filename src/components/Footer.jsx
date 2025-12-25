import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const Footer = () => {
  const { language } = useLanguage()
  const t = translations[language]
  const year = new Date().getFullYear()

  return (
    <footer className="relative mt-10 sm:mt-14">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
      <div className="glass border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-7 flex flex-col items-center justify-center gap-2 sm:gap-4">
          <p className="text-gray-300 text-xs sm:text-sm text-center">
            {t.footer.rights.replace('{year}', String(year))}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer


