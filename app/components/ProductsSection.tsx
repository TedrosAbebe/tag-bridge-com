'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

interface Product {
  id: string
  title: string
  description: string
  price: string
  currency: 'USD' | 'ETB'
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
      try {
        setProducts(JSON.parse(adminProducts))
      } catch (error) {
        console.error('Error loading products:', error)
        setProducts([])
      }
    }
    // No default products - admin will add them

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
    switch (category.toLowerCase()) {
      case 'book': return '📚'
      case 'course': return '🎓'
      case 'template': return '🎨'
      case 'service': return '⚡'
      case 'subscription': return '📊'
      case 'software': return '💻'
      case 'consultation': return '🤝'
      default: return '💼'
    }
  }

  const getCategoryGradient = (category: string) => {
    switch (category.toLowerCase()) {
      case 'book': return 'from-purple-500 to-pink-500'
      case 'course': return 'from-blue-500 to-cyan-500'
      case 'template': return 'from-green-500 to-teal-500'
      case 'service': return 'from-orange-500 to-red-500'
      case 'subscription': return 'from-indigo-500 to-purple-500'
      case 'software': return 'from-teal-500 to-blue-500'
      case 'consultation': return 'from-amber-500 to-orange-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  const formatPrice = (price: string, currency: 'USD' | 'ETB') => {
    const symbol = currency === 'USD' ? '$' : 'ETB'
    return `${symbol}${price}`
  }

  // If no products, show empty state
  if (products.length === 0) {
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
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-orange-400 bg-clip-text text-transparent animate-gradient-x bg-300%">
                {t('products')}
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
              Discover our collection of digital products, courses, and services
            </p>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-teal-400 to-orange-400 mx-auto rounded-full animate-pulse mt-6 sm:mt-8"></div>
          </div>

          {/* Empty State */}
          <div className="text-center py-16 sm:py-20">
            <div className="glass-effect bg-white/5 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/10 max-w-2xl mx-auto">
              <div className="text-6xl sm:text-8xl mb-6">🚀</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Products Coming Soon</h3>
              <p className="text-gray-300 mb-8 text-sm sm:text-base">
                We're preparing amazing digital products and services for you. Stay tuned!
              </p>
              
              {/* Contact Options */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+251991856292"
                  className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-teal-500/25 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  📞 Call Now
                </a>
                <a 
                  href="https://wa.me/251991856292"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="products" className="relative section-padding overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-blue-900/30 to-slate-900"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header - Optimized for Mobile */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 sm:mb-6">
            <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-orange-400 bg-clip-text text-transparent animate-gradient-x bg-300%">
              {t('products')}
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Discover our collection of digital products, courses, and services
          </p>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-teal-400 to-orange-400 mx-auto rounded-full animate-pulse mt-6 sm:mt-8"></div>
        </div>

        {/* Products Grid - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
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
                        <div className="absolute top-4 left-4 w-6 sm:w-8 h-6 sm:h-8 bg-white/20 rounded-full"></div>
                        <div className="absolute top-6 sm:top-8 right-6 sm:right-8 w-3 sm:w-4 h-3 sm:h-4 bg-white/20 rounded-full"></div>
                        <div className="absolute bottom-4 sm:bottom-6 left-6 sm:left-8 w-4 sm:w-6 h-4 sm:h-6 bg-white/20 rounded-full"></div>
                        <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-2 sm:w-3 h-2 sm:h-3 bg-white/20 rounded-full"></div>
                      </div>
                      
                      <div className="text-center relative z-10">
                        <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 filter drop-shadow-lg">
                          {getCategoryIcon(product.category)}
                        </div>
                        <p className="text-white font-bold text-sm sm:text-base md:text-lg">{product.category}</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                    <span className="px-2 sm:px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs sm:text-sm font-medium rounded-full border border-white/30">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Info - Mobile Optimized */}
                <div className="p-4 sm:p-6 md:p-8">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white flex-1 group-hover:text-teal-300 transition-colors duration-300 leading-tight">
                      {product.title}
                    </h3>
                    <span className={`text-lg sm:text-xl font-bold bg-gradient-to-r ${getCategoryGradient(product.category)} bg-clip-text text-transparent ml-3 sm:ml-4 whitespace-nowrap`}>
                      {formatPrice(product.price, product.currency)}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
                    {product.description}
                  </p>

                  {/* Action Buttons - Mobile Optimized */}
                  <div className="flex flex-col gap-3 sm:gap-4">
                    <a 
                      href="tel:+251991856292"
                      className="group/btn relative px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-teal-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/20 text-center text-sm sm:text-base"
                      onClick={(e) => {
                        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                          e.preventDefault()
                          alert('Call: +251 99 185 6292')
                        }
                      }}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <span className="mr-2">📞</span>
                        Call Now
                      </span>
                    </a>
                    <a 
                      href="https://wa.me/251991856292"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/20 text-center text-sm sm:text-base"
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        <span className="mr-2">💬</span>
                        WhatsApp
                      </span>
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
      </div>
    </section>
  )
}