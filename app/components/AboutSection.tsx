'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

export default function AboutSection() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const specialties = [
    {
      icon: '📱',
      title: t('appReviews'),
      description: t('appReviewsDesc'),
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: '💻',
      title: t('softwareSolutions'),
      description: t('softwareSolutionsDesc'),
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      icon: '🏢',
      title: t('erpSystems'),
      description: t('erpSystemsDesc'),
      gradient: 'from-green-500 to-teal-500',
      bgGradient: 'from-green-500/10 to-teal-500/10'
    },
    {
      icon: '🤖',
      title: t('aiTools'),
      description: t('aiToolsDesc'),
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-500/10 to-red-500/10'
    },
    {
      icon: '₿',
      title: t('cryptoInsights'),
      description: t('cryptoInsightsDesc'),
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-500/10 to-orange-500/10'
    },
    {
      icon: '📊',
      title: t('techAnalysis'),
      description: t('techAnalysisDesc'),
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-500/10 to-purple-500/10'
    }
  ]

  return (
    <section id="about" className="relative section-padding overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl sm:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-orange-400 bg-clip-text text-transparent animate-gradient-x bg-300%">
              {t('aboutTitle')}
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            {t('aboutSubtitle')}
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-orange-400 mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Main Description Card */}
        <div className={`relative mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-effect bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-8 sm:p-12 border border-white/10 hover:border-teal-400/30 transition-all duration-500 floating-animation">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-blue-500/5 to-orange-500/5 rounded-3xl blur-xl"></div>
            
            <div className="relative text-center">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-teal-300 to-orange-300 bg-clip-text text-transparent">
                  {t('trustedPartner')}
                </span>
              </h3>
              <p className="text-lg sm:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
                {t('aboutDescription')}
              </p>
            </div>
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {specialties.map((specialty, index) => (
            <div 
              key={index} 
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="card p-8 text-center h-full relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${specialty.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Icon with Glow */}
                <div className="relative mb-6">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 filter drop-shadow-lg">
                    {specialty.icon}
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${specialty.gradient} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 relative">
                  {specialty.title}
                </h3>
                <p className="text-gray-300 leading-relaxed relative">
                  {specialty.description}
                </p>
                
                {/* Shimmer Effect */}
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="shimmer"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">
              {t('readyToExplore')}
            </span>
          </h3>
          <p className="text-gray-300 mb-10 max-w-3xl mx-auto text-lg leading-relaxed">
            {t('exploreDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="tel:+251991856292"
              className="group relative px-8 py-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-teal-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/20"
            >
              <span className="relative z-10 flex items-center justify-center">
                <span className="mr-2">📞</span>
                {t('callNow')}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            
            <a 
              href="https://wa.me/251991856292"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-2xl shadow-xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/20"
            >
              <span className="relative z-10 flex items-center justify-center">
                <span className="mr-2">💬</span>
                {t('chatWhatsApp')}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}