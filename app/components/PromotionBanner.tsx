'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { getPublicBanners, type Banner } from '../data/banners'

interface PromotionBannerProps {
  position: 'top' | 'bottom' | 'hero'
}

export default function PromotionBanner({ position }: PromotionBannerProps) {
  const [banners, setBanners] = useState<Banner[]>([])
  const [dismissedBanners, setDismissedBanners] = useState<string[]>([])

  useEffect(() => {
    // Load banners from the public data file (visible to all visitors)
    const publicBanners = getPublicBanners()
    setBanners(publicBanners)

    // Load dismissed banners from localStorage
    const dismissed = localStorage.getItem('dismissedBanners')
    if (dismissed) {
      try {
        setDismissedBanners(JSON.parse(dismissed))
      } catch (error) {
        console.error('Error parsing dismissed banners:', error)
      }
    }
  }, [position])

  const dismissBanner = (bannerId: string) => {
    const newDismissed = [...dismissedBanners, bannerId]
    setDismissedBanners(newDismissed)
    localStorage.setItem('dismissedBanners', JSON.stringify(newDismissed))
  }

  // Filter banners for this position that are active and not dismissed
  const activeBanners = banners.filter((banner: Banner) => 
    banner.position === position && 
    banner.isActive && 
    !dismissedBanners.includes(banner.id)
  )

  if (activeBanners.length === 0) {
    return null
  }

  return (
    <div className="relative">
      {activeBanners.map((banner) => (
        <div
          key={banner.id}
          className={`relative overflow-hidden ${
            position === 'hero' ? 'mb-8' : 'mb-4'
          }`}
        >
          <div className={`bg-gradient-to-r ${banner.backgroundColor} ${banner.textColor} px-4 sm:px-6 py-3 sm:py-4 rounded-xl shadow-lg`}>
            <div className="flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex-1">
                    <h3 className="font-bold text-sm sm:text-base mb-1 sm:mb-0">
                      {banner.title}
                    </h3>
                    <p className="text-xs sm:text-sm opacity-90 mb-2 sm:mb-0">
                      {banner.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <a
                      href={banner.buttonLink}
                      target={banner.buttonLink.startsWith('http') ? '_blank' : '_self'}
                      rel={banner.buttonLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm whitespace-nowrap"
                    >
                      {banner.buttonText}
                    </a>
                    <button
                      onClick={() => dismissBanner(banner.id)}
                      className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
                      aria-label="Dismiss banner"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}