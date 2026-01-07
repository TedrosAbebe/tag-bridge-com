'use client'

import { useLanguage } from '../contexts/LanguageContext'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center bg-white/10 backdrop-blur-xl rounded-2xl p-1 shadow-2xl border border-white/20 hover:border-teal-400/30 transition-all duration-300">
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 ${
          language === 'en'
            ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg shadow-teal-500/25'
            : 'text-gray-300 hover:text-white hover:bg-white/10'
        }`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage('am')}
        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 ${
          language === 'am'
            ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/25'
            : 'text-gray-300 hover:text-white hover:bg-white/10'
        }`}
      >
        አማርኛ
      </button>
    </div>
  )
}