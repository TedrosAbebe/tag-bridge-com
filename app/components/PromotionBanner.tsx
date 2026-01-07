'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

interface Banner {
  id: string
  title: string
  description: string
  buttonText: string
  buttonLink: string
  backgroundColor: string
  textColor: string
  isActive: boolean
  position: 'top' | 'bottom' | 'hero'
}

interface PromotionBannerProps {
  position: 'top' | 'bottom' | 'hero'
}

export default function PromotionBanner({ position }: PromotionBannerProps) {
  const [banners, setBanners] = useState<Banner[]>([])
  const [dismissedBanners, setDismissedBanners] = useState<string[]>([])

  useEffect(() => {
    const loadBanners = () => {
      // Load banners from localStorage
      const savedBanners = localStorage.getItem('adminBanners')
      if (savedBanners) {
        try {
          const parsedBanners = JSON.parse(savedBanners)
          setBanners(parsedBanners)
          console.log('Loaded banners:', parsedBanners) // Debug log
          console.log(`Banners for position ${position}:`, parsedBanners.filter((b: Banner) => b.position === position && b.isActive)) // Debug log
        } catch (error) {
          console.error('Error parsing banners:', error)
        }
      }

      // Load dismissed banners from localStorage
      const dismissed = localStorage.getItem('dismissedBanners')
      if (dismissed) {
        try {
          setDismissedBanners(JSON.parse(dismissed))
        } catch (error) {
          console.error('Error parsing dismissed banners:', error)
        }
      }
    }

    loadBanners()

    // Listen for storage changes (when banners are updated in admin)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'adminBanners') {
        loadBanners()
      }
    }

    window.addEventListener('storage', handleStorageChange)
    
    // Also check for updates every 2 seconds (for same-tab updates)
    const interval = setInterval(loadBanners, 2000)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      clearInterval(interval)
    }
  }, [position])

  const dismissBanner = (bannerId: string) => {
    const newDismissed = [...dismissedBanners, bannerId]
    setDismissedBanners(newDismissed)
    localStorage.setItem('dismissedBanners', JSON.stringify(newDismissed))
  }

  // Filter banners for this position that are active and not dismissed
  const activeBanners = banners.filter(banner => 
    banner.position === position && 
    banner.isActive && 
    !dismissedBanners.includes(banner.id)
  )

  console.log(`Banners for position ${position}:`, activeBanners) // Debug log

  if (activeBanners.length === 0) {
    return null
  }

  return (
    <div className="space-y-2">
      {activeBanners.map((banner) => (
        <div
          key={banner.id}
          className={`relative ${position === 'top' ? 'z-40' : 'z-10'} bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 shadow-lg`}
        >
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-500/80 via-cyan-400/80 to-blue-500/80"></div>
          
          {/* Content */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex-1 flex items-center justify-center text-center">
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-white drop-shadow-sm">{banner.title}</h4>
                  {banner.description && (
                    <p className="text-xs sm:text-sm text-white/90 mt-1 drop-shadow-sm">{banner.description}</p>
                  )}
                </div>
                {banner.buttonText && banner.buttonLink && (
                  <a
                    href={banner.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 px-6 py-2 bg-white/90 hover:bg-white text-gray-800 rounded-full font-medium text-sm transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl backdrop-blur-sm"
                    onClick={() => console.log('Banner button clicked:', banner.buttonLink)}
                  >
                    {banner.buttonText}
                  </a>
                )}
              </div>
              
              {position !== 'hero' && (
                <button
                  onClick={() => dismissBanner(banner.id)}
                  className="ml-4 p-2 hover:bg-white/20 rounded-full transition-all duration-200 text-white/80 hover:text-white"
                  aria-label="Dismiss banner"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/10 rounded-full"></div>
            <div className="absolute top-2 right-8 w-4 h-4 bg-white/10 rounded-full"></div>
            <div className="absolute -bottom-2 left-1/4 w-6 h-6 bg-white/10 rounded-full"></div>
            <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white/10 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  )
}