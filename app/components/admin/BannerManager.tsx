'use client'

import { useState, useEffect } from 'react'
import { Plus, Edit, Trash2, Save, X, ExternalLink, Eye, EyeOff } from 'lucide-react'

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

export default function BannerManager() {
  const [banners, setBanners] = useState<Banner[]>([])
  const [isAddingBanner, setIsAddingBanner] = useState(false)
  const [editingBanner, setEditingBanner] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    buttonText: '',
    buttonLink: '',
    backgroundColor: '#14B8A6',
    textColor: '#FFFFFF',
    isActive: true,
    position: 'top' as 'top' | 'bottom' | 'hero'
  })

  const positions = [
    { value: 'top', label: 'Top of Page' },
    { value: 'hero', label: 'Hero Section' },
    { value: 'bottom', label: 'Bottom of Page' }
  ]

  const presetColors = [
    { bg: '#14B8A6', text: '#FFFFFF', name: 'Teal' },
    { bg: '#F97316', text: '#FFFFFF', name: 'Orange' },
    { bg: '#3B82F6', text: '#FFFFFF', name: 'Blue' },
    { bg: '#EF4444', text: '#FFFFFF', name: 'Red' },
    { bg: '#10B981', text: '#FFFFFF', name: 'Green' },
    { bg: '#8B5CF6', text: '#FFFFFF', name: 'Purple' },
    { bg: '#F59E0B', text: '#000000', name: 'Yellow' },
    { bg: '#6B7280', text: '#FFFFFF', name: 'Gray' }
  ]

  useEffect(() => {
    // Load banners from localStorage
    const savedBanners = localStorage.getItem('adminBanners')
    if (savedBanners) {
      setBanners(JSON.parse(savedBanners))
    } else {
      // Initialize with default banner
      const defaultBanners: Banner[] = [
        {
          id: '1',
          title: '🎉 Welcome to TagBridge!',
          description: 'Get exclusive AI tool insights and early access to reviews',
          buttonText: 'Join Now',
          buttonLink: 'https://t.me/tagbridge',
          backgroundColor: '#14B8A6',
          textColor: '#FFFFFF',
          isActive: true,
          position: 'top'
        },
        {
          id: '2',
          title: '📱 Follow us on Social Media',
          description: 'Stay updated with our latest content',
          buttonText: 'Follow',
          buttonLink: 'https://tiktok.com/@tagbridge',
          backgroundColor: '#F97316',
          textColor: '#FFFFFF',
          isActive: true,
          position: 'hero'
        }
      ]
      setBanners(defaultBanners)
      localStorage.setItem('adminBanners', JSON.stringify(defaultBanners))
    }
  }, [])

  const saveBanners = (updatedBanners: Banner[]) => {
    setBanners(updatedBanners)
    localStorage.setItem('adminBanners', JSON.stringify(updatedBanners))
  }

  const handleAddBanner = () => {
    if (formData.title.trim()) {
      const newBanner: Banner = {
        id: Date.now().toString(),
        title: formData.title.trim(),
        description: formData.description.trim(),
        buttonText: formData.buttonText.trim(),
        buttonLink: formData.buttonLink.trim(),
        backgroundColor: formData.backgroundColor,
        textColor: formData.textColor,
        isActive: formData.isActive,
        position: formData.position
      }
      const updatedBanners = [...banners, newBanner]
      saveBanners(updatedBanners)
      setFormData({
        title: '',
        description: '',
        buttonText: '',
        buttonLink: '',
        backgroundColor: '#14B8A6',
        textColor: '#FFFFFF',
        isActive: true,
        position: 'top'
      })
      setIsAddingBanner(false)
    } else {
      alert('Please enter a banner title')
    }
  }

  const handleEditBanner = (id: string) => {
    const banner = banners.find(b => b.id === id)
    if (banner) {
      setFormData({
        title: banner.title,
        description: banner.description,
        buttonText: banner.buttonText,
        buttonLink: banner.buttonLink,
        backgroundColor: banner.backgroundColor,
        textColor: banner.textColor,
        isActive: banner.isActive,
        position: banner.position
      })
      setEditingBanner(id)
    }
  }

  const handleUpdateBanner = () => {
    if (editingBanner && formData.title.trim()) {
      const updatedBanners = banners.map(banner =>
        banner.id === editingBanner
          ? { 
              ...banner, 
              title: formData.title.trim(),
              description: formData.description.trim(),
              buttonText: formData.buttonText.trim(),
              buttonLink: formData.buttonLink.trim(),
              backgroundColor: formData.backgroundColor,
              textColor: formData.textColor,
              isActive: formData.isActive,
              position: formData.position
            }
          : banner
      )
      saveBanners(updatedBanners)
      setFormData({
        title: '',
        description: '',
        buttonText: '',
        buttonLink: '',
        backgroundColor: '#14B8A6',
        textColor: '#FFFFFF',
        isActive: true,
        position: 'top'
      })
      setEditingBanner(null)
    } else {
      alert('Please enter a banner title')
    }
  }

  const handleDeleteBanner = (id: string) => {
    if (confirm('Are you sure you want to delete this banner?')) {
      const updatedBanners = banners.filter(banner => banner.id !== id)
      saveBanners(updatedBanners)
    }
  }

  const toggleBannerStatus = (id: string) => {
    const updatedBanners = banners.map(banner =>
      banner.id === id
        ? { ...banner, isActive: !banner.isActive }
        : banner
    )
    saveBanners(updatedBanners)
  }

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      buttonText: '',
      buttonLink: '',
      backgroundColor: '#14B8A6',
      textColor: '#FFFFFF',
      isActive: true,
      position: 'top'
    })
    setIsAddingBanner(false)
    setEditingBanner(null)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Promotion Banner Management</h2>
        <div className="flex gap-3">
          <button
            onClick={() => {
              localStorage.removeItem('adminBanners')
              window.location.reload()
            }}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm"
          >
            Reset Banners
          </button>
          <button
            onClick={() => setIsAddingBanner(true)}
            className="flex items-center px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Banner
          </button>
        </div>
      </div>

      {/* Add/Edit Form */}
      {(isAddingBanner || editingBanner) && (
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 border border-gray-200 shadow-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {editingBanner ? 'Edit Banner' : 'Add New Banner'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Banner Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="🎉 Join TagBridge Community!"
                required
              />
              <p className="text-xs text-gray-500 mt-1">Required field</p>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description (Optional)
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Get exclusive AI tool insights and early access to reviews"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Button Text
              </label>
              <input
                type="text"
                value={formData.buttonText}
                onChange={(e) => setFormData({ ...formData, buttonText: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="Join Now"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Button Link
              </label>
              <input
                type="url"
                value={formData.buttonLink}
                onChange={(e) => setFormData({ ...formData, buttonLink: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                placeholder="https://t.me/tagbridge or https://example.com"
              />
              <p className="text-xs text-gray-500 mt-1">Enter a valid URL (e.g., https://t.me/tagbridge, https://wa.me/251991856292)</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Position
              </label>
              <select
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value as 'top' | 'bottom' | 'hero' })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              >
                {positions.map(pos => (
                  <option key={pos.value} value={pos.value}>{pos.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                />
                <span className="ml-2 text-sm text-gray-700">Active</span>
              </label>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Color Presets
              </label>
              <div className="grid grid-cols-4 gap-2">
                {presetColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setFormData({ 
                      ...formData, 
                      backgroundColor: color.bg, 
                      textColor: color.text 
                    })}
                    className="flex items-center justify-center p-3 rounded-lg border-2 transition-all duration-200 hover:scale-105"
                    style={{ 
                      backgroundColor: color.bg, 
                      color: color.text,
                      borderColor: formData.backgroundColor === color.bg ? '#14B8A6' : 'transparent'
                    }}
                  >
                    <span className="text-xs font-medium">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Preview */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preview
              </label>
              <div 
                className="p-4 rounded-lg text-center relative overflow-hidden"
                style={{ backgroundColor: formData.backgroundColor, color: formData.textColor }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-cyan-400/20 to-blue-500/20"></div>
                
                {/* Content */}
                <div className="relative">
                  <h4 className="font-bold text-lg mb-1">{formData.title || 'Banner Title'}</h4>
                  {formData.description && (
                    <p className="text-sm opacity-90 mb-3">{formData.description}</p>
                  )}
                  <button 
                    className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-colors duration-200"
                    style={{ color: formData.textColor }}
                  >
                    {formData.buttonText || 'Button Text'}
                  </button>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-white/10 rounded-full"></div>
                  <div className="absolute top-1 right-4 w-2 h-2 bg-white/10 rounded-full"></div>
                  <div className="absolute -bottom-1 left-1/4 w-3 h-3 bg-white/10 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              onClick={resetForm}
              className="px-4 py-2 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-200"
            >
              <X className="h-4 w-4 mr-2 inline" />
              Cancel
            </button>
            <button
              onClick={() => {
                if (editingBanner) {
                  handleUpdateBanner()
                } else {
                  handleAddBanner()
                }
              }}
              className="px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
              disabled={!formData.title.trim()}
            >
              <Save className="h-4 w-4 mr-2 inline" />
              {editingBanner ? 'Update Banner' : 'Add Banner'}
            </button>
          </div>
        </div>
      )}

      {/* Banners List */}
      <div className="grid grid-cols-1 gap-6">
        {banners.map((banner) => (
          <div key={banner.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Banner Preview */}
            <div 
              className="p-6 text-center relative overflow-hidden"
              style={{ backgroundColor: banner.backgroundColor, color: banner.textColor }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-cyan-400/20 to-blue-500/20"></div>
              
              <div className="relative flex justify-between items-start mb-4">
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
                  {positions.find(p => p.value === banner.position)?.label}
                </span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => toggleBannerStatus(banner.id)}
                    className="p-1 bg-white/20 hover:bg-white/30 rounded transition-colors duration-200"
                  >
                    {banner.isActive ? (
                      <Eye className="h-4 w-4" />
                    ) : (
                      <EyeOff className="h-4 w-4" />
                    )}
                  </button>
                </div>
              </div>
              
              <div className="relative">
                <h3 className="text-xl font-bold mb-2">{banner.title}</h3>
                {banner.description && (
                  <p className="text-sm opacity-90 mb-4">{banner.description}</p>
                )}
                <a
                  href={banner.buttonLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2 bg-white/20 hover:bg-white/30 rounded-lg font-medium transition-colors duration-200"
                >
                  {banner.buttonText}
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/10 rounded-full"></div>
                <div className="absolute top-2 right-8 w-4 h-4 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-2 left-1/4 w-6 h-6 bg-white/10 rounded-full"></div>
                <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white/10 rounded-full"></div>
              </div>
            </div>

            {/* Banner Actions */}
            <div className="p-4 bg-gray-50 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  banner.isActive 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {banner.isActive ? 'Active' : 'Inactive'}
                </span>
                <span className="text-xs text-gray-500">
                  Position: {positions.find(p => p.value === banner.position)?.label}
                </span>
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEditBanner(banner.id)}
                  className="p-2 text-gray-600 hover:text-teal-600 transition-colors duration-200"
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDeleteBanner(banner.id)}
                  className="p-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {banners.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Plus className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No banners yet</h3>
          <p className="text-gray-600 mb-4">Create your first promotion banner to engage visitors.</p>
          <button
            onClick={() => setIsAddingBanner(true)}
            className="px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
          >
            Create Your First Banner
          </button>
        </div>
      )}
    </div>
  )
}