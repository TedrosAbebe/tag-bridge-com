'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

interface Product {
  id: string
  title: string
  description: string
  price: string
  category: string
  image?: string
}

export default function ProductsSection() {
  const { t } = useLanguage()
  const [products, setProducts] = useState<Product[]>([])
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Load products from localStorage (admin managed)
    const adminProducts = localStorage.getItem('adminProducts')
    if (adminProducts) {
      setProducts(JSON.parse(adminProducts))
    } else {
      // Default products if no admin data
      const defaultProducts = [
        {
          id: '1',
          title: 'AI Tools Mastery Guide',
          description: 'Complete guide to the latest AI tools, reviews, and implementation strategies for businesses.',
          price: '$49.99',
          category: 'Course'
        },
        {
          id: '2',
          title: 'Tech Review Templates',
          description: 'Professional templates and frameworks for creating comprehensive technology reviews.',
          price: '$29.99',
          category: 'Templates'
        },
        {
          id: '3',
          title: 'Digital Innovation Handbook',
          description: 'Learn how to navigate and leverage emerging technologies for business growth.',
          price: '$39.99',
          category: 'Book'
        },
        {
          id: '4',
          title: 'ERP System Consultation',
          description: 'Personalized consultation for selecting and implementing the right ERP system.',
          price: '$199.99',
          category: 'Service'
        },
        {
          id: '5',
          title: 'Crypto Analysis Reports',
          description: 'Monthly cryptocurrency market analysis and blockchain technology insights.',
          price: '$24.99',
          category: 'Subscription'
        },
        {
          id: '6',
          title: 'Software Review Toolkit',
          description: 'Complete toolkit for evaluating and reviewing business software solutions.',
          price: '$34.99',
          category: 'Digital Product'
        }
      ]
      setProducts(defaultProducts)
    }

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('products')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Book': return '📚'
      case 'Course': return '🎓'
      case 'Templates': return '🎨'
      case 'Service': return '⚡'
      case 'Subscription': return '📊'
      case 'Digital Product': return '💻'
      default: return '💼'
    }
  }

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case 'Book': return 'from-purple-500 to-pink-500'
      case 'Course': return 'from-blue-500 to-cyan-500'
      case 'Templates': return 'from-green-500 to-teal-500'
      case 'Service': return 'from-orange-500 to-red-500'
      case 'Subscription': return 'from-indigo-500 to-purple-500'
      case 'Digital Product': return 'from-teal-500 to-blue-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <section id="products" className="relative section-padding overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl sm:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-orange-400 bg-clip-text text-transparent animate-gradient-x bg-300%">
              {t('products')}
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our collection of digital products, courses, and services to help you succeed in the digital landscape
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-teal-400 to-orange-400 mx-auto rounded-full animate-pulse mt-8"></div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="card h-full relative overflow-hidden">
                {/* Product Image/Icon */}
                <div className={`aspect-video bg-gradient-to-br ${getCategoryGradient(product.category)} relative overflow-hidden`}>
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center relative">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-4 left-4 w-8 h-8 bg-white/20 rounded-full"></div>
                        <div className="absolute top-8 right-8 w-4 h-4 bg-white/20 rounded-full"></div>
                        <div className="absolute bottom-6 left-8 w-6 h-6 bg-white/20 rounded-full"></div>
                        <div className="absolute bottom-4 right-4 w-3 h-3 bg-white/20 rounded-full"></div>
                      </div>
                      
                      <div className="text-center relative z-10">
                        <div className="text-6xl mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 filter drop-shadow-lg">
                          {getCategoryIcon(product.category)}
                        </div>
                        <p className="text-white font-bold text-lg">{product.category}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/30">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white flex-1 group-hover:text-teal-300 transition-colors duration-300">
                      {product.title}
                    </h3>
                    <span className={`text-xl font-bold bg-gradient-to-r ${getCategoryGradient(product.category)} bg-clip-text text-transparent ml-4`}>
                      {product.price}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="tel:+251991856292"
                      className="group/btn relative px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-teal-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/20 flex-1 text-center"
                      onClick={(e) => {
                        console.log('Call button clicked!')
                        // For mobile devices, this should work automatically
                        // For desktop, we can show an alert
                        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                          e.preventDefault()
                          alert('Call: +251 99 185 6292')
                        }
                      }}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <span className="mr-2">📞</span>
                        {t('callNow')}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-blue-700 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </a>
                    <a 
                      href="https://wa.me/251991856292"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/20 flex-1 text-center"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <span className="mr-2">💬</span>
                        {t('chatWhatsApp')}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 rounded-xl opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    </a>
                  </div>
                </div>

                {/* Shimmer Effect */}
                <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="shimmer"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className={`transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass-effect bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-8 sm:p-12 border border-white/10 hover:border-teal-400/30 transition-all duration-500 max-w-4xl mx-auto">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-blue-500/5 to-orange-500/5 rounded-3xl blur-xl"></div>
            
            <div className="relative text-center">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-teal-300 to-orange-300 bg-clip-text text-transparent">
                  {t('readyToStart')}
                </span>
              </h3>
              <p className="text-gray-300 mb-10 text-lg leading-relaxed max-w-3xl mx-auto">
                {t('startDesc')}
              </p>
              
              {/* Enhanced Contact Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                <a 
                  href="tel:+251991856292"
                  className="group relative p-6 bg-gradient-to-br from-teal-500/10 to-blue-600/10 backdrop-blur-sm rounded-2xl border border-teal-500/20 hover:border-teal-400/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                  onClick={(e) => {
                    console.log('Call button clicked!')
                    // For mobile devices, this should work automatically
                    // For desktop, we can show an alert
                    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                      e.preventDefault()
                      alert('Call: +251 99 185 6292\n\nOn mobile devices, this will open your phone app automatically.')
                    }
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-blue-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  
                  <div className="relative text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <span className="text-2xl">📞</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{t('directCall')}</h4>
                    <p className="text-gray-300 text-sm mb-4">{t('directCallDesc')}</p>
                    <span className="text-teal-300 font-semibold">+251 99 185 6292</span>
                  </div>
                </a>

                <a 
                  href="https://wa.me/251991856292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-6 bg-gradient-to-br from-green-500/10 to-emerald-600/10 backdrop-blur-sm rounded-2xl border border-green-500/20 hover:border-green-400/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-600/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  
                  <div className="relative text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                      <span className="text-2xl">💬</span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">WhatsApp Chat</h4>
                    <p className="text-gray-300 text-sm mb-4">{t('whatsappChatDesc')}</p>
                    <span className="text-green-300 font-semibold">{t('chatNow')}</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}