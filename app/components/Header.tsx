'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-teal-500/20' 
          : 'bg-slate-900/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* TagBridge Text Only */}
          <div className="flex items-center">
            <h1 className="text-3xl font-black bg-gradient-to-r from-teal-400 via-blue-400 to-orange-400 bg-clip-text text-transparent hover:from-teal-300 hover:to-orange-300 transition-all duration-500 animate-gradient-x bg-300%">
              TagBridge
            </h1>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="relative group text-gray-300 hover:text-teal-400 font-semibold px-4 py-2 rounded-xl hover:bg-teal-500/10 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">{t('home')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={() => scrollToSection('products')}
              className="relative group text-gray-300 hover:text-orange-400 font-semibold px-4 py-2 rounded-xl hover:bg-orange-500/10 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">{t('products')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <a
              href="/admin"
              className="relative group text-gray-400 hover:text-purple-400 text-sm font-medium px-4 py-2 rounded-xl hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105"
            >
              <span className="relative z-10">{t('admin')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <LanguageSwitcher />
          </nav>

          {/* Enhanced Mobile Menu Button */}
          <button
            className="md:hidden p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-2xl mt-4 p-6 border border-white/10 mx-4">
            <nav className="flex flex-col space-y-6">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-300 hover:text-teal-400 transition-colors duration-300 font-semibold text-lg"
              >
                {t('home')}
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className="text-left text-gray-300 hover:text-orange-400 transition-colors duration-300 font-semibold text-lg"
              >
                {t('products')}
              </button>
              <a
                href="/admin"
                className="text-left text-gray-400 hover:text-purple-400 transition-colors duration-300 text-base"
              >
                {t('admin')}
              </a>
              <div className="pt-4 border-t border-white/10">
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}