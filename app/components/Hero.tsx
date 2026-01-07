'use client'

import { useLanguage } from '../contexts/LanguageContext'
import { useState, useEffect } from 'react'

export default function Hero() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative pt-20 pb-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-blue-500/20 to-orange-500/20 animate-pulse"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-teal-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-orange-400/10 to-pink-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/5 to-blue-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Brand Name with Enhanced Animation */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 relative">
            <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-orange-400 bg-clip-text text-transparent animate-gradient-x bg-300% font-black tracking-tight">
              TagBridge
            </span>
            {/* Text Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-blue-400 to-orange-400 bg-clip-text text-transparent blur-sm opacity-50 animate-pulse">
              TagBridge
            </div>
          </h1>

          {/* Enhanced Tagline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            <span className="bg-gradient-to-r from-teal-300 to-orange-300 bg-clip-text text-transparent font-semibold text-shadow">
              {t('taglinePart1')}
            </span>
            <br className="sm:hidden" />
            <span className="text-white/90"> {t('taglinePart2')}</span>
          </p>



          {/* Enhanced Social Media Cards */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* TikTok Card */}
              <a 
                href="https://tiktok.com/@tagbridge" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-pink-500/10 to-purple-600/10 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20 hover:border-pink-400/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-pink-500/25"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z"/>
                    </svg>
                  </div>
                  <p className="text-sm text-gray-300 font-medium mb-2">{t('followTikTok')}</p>
                  <p className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    @tagbridge
                  </p>
                </div>
              </a>

              {/* YouTube Card */}
              <a 
                href="https://youtube.com/@tagbridge" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 hover:border-red-400/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-red-500/25"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <p className="text-sm text-gray-300 font-medium mb-2">{t('subscribeYouTube')}</p>
                  <p className="text-xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                    @tagbridge
                  </p>
                </div>
              </a>

              {/* Telegram Card */}
              <a 
                href="https://t.me/tagbridge" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-blue-500/25"
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.820 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </div>
                  <p className="text-sm text-gray-300 font-medium mb-2">{t('joinTelegram')}</p>
                  <p className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    @tagbridge
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-teal-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/20"
            >
              <span className="relative z-10">{t('exploreWork')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="relative z-10">{t('viewProducts')}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}