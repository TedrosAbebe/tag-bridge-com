// TagBridge Products Data
// This file contains the products that will be visible to all website visitors
// Admin can update this through the admin panel

export interface Product {
  id: string
  title: string
  description: string
  price: string
  currency: 'USD' | 'ETB'
  category: string
  image?: string
}

// Default products - you can modify these or add new ones
export const defaultProducts: Product[] = [
  {
    id: '1',
    title: 'AI Tools Mastery Course',
    description: 'Complete guide to the latest AI tools, reviews, and implementation strategies for businesses and individuals.',
    price: '2500',
    currency: 'ETB',
    category: 'Course'
  },
  {
    id: '2',
    title: 'Tech Review Templates',
    description: 'Professional templates and frameworks for creating comprehensive technology reviews and analysis.',
    price: '1200',
    currency: 'ETB',
    category: 'Template'
  },
  {
    id: '3',
    title: 'Digital Innovation Consultation',
    description: 'Personalized consultation for selecting and implementing the right digital solutions for your business.',
    price: '99',
    currency: 'USD',
    category: 'Service'
  }
]

// This function will be used to get products for public display
export const getPublicProducts = (): Product[] => {
  return defaultProducts
}