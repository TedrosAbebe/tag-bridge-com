// TagBridge Banners Data
// This file contains the banners that will be visible to all website visitors

export interface Banner {
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

// Default banners - visible to all visitors
export const defaultBanners: Banner[] = [
  {
    id: '1',
    title: '🚀 Join TagBridge Telegram Community!',
    description: 'Get exclusive tech insights, AI tool reviews, and digital innovation updates directly on Telegram.',
    buttonText: 'Join Now',
    buttonLink: 'https://t.me/tagbridge',
    backgroundColor: 'from-blue-500 to-cyan-600',
    textColor: 'text-white',
    isActive: true,
    position: 'top'
  },
  {
    id: '2',
    title: '💼 Professional App & Software Advertisement',
    description: 'Promote your mobile apps and software with our expert digital marketing services - ETB 10,000',
    buttonText: 'Get Started',
    buttonLink: 'tel:+251991856292',
    backgroundColor: 'from-teal-500 to-green-600',
    textColor: 'text-white',
    isActive: true,
    position: 'hero'
  }
]

// This function will be used to get banners for public display
export const getPublicBanners = (): Banner[] => {
  return defaultBanners
}