'use client'

import { useState, useEffect } from 'react'
import { LogOut, Plus, Edit, Trash2, Megaphone, Package } from 'lucide-react'
import BannerManager from './BannerManager'
import ProductManager from './ProductManager'

interface AdminDashboardProps {
  onLogout: () => void
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'banners' | 'products'>('banners')
  const [stats, setStats] = useState({
    banners: 0,
    products: 0
  })

  useEffect(() => {
    // Load stats from localStorage
    const banners = JSON.parse(localStorage.getItem('adminBanners') || '[]')
    const products = JSON.parse(localStorage.getItem('adminProducts') || '[]')
    
    setStats({
      banners: banners.length,
      products: products.length
    })
  }, [activeTab])

  const exportData = () => {
    const banners = localStorage.getItem('adminBanners') || '[]'
    const products = localStorage.getItem('adminProducts') || '[]'
    
    const data = {
      banners: JSON.parse(banners),
      products: JSON.parse(products),
      exportDate: new Date().toISOString()
    }
    
    const dataStr = JSON.stringify(data, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    
    const link = document.createElement('a')
    link.href = url
    link.download = `tagbridge-data-${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result as string)
        
        if (data.banners) {
          localStorage.setItem('adminBanners', JSON.stringify(data.banners))
        }
        if (data.products) {
          localStorage.setItem('adminProducts', JSON.stringify(data.products))
        }
        
        alert('Data imported successfully! Please refresh the page.')
        window.location.reload()
      } catch (error) {
        alert('Error importing data. Please check the file format.')
      }
    }
    reader.readAsText(file)
  }

  const tabs = [
    {
      id: 'banners' as const,
      name: 'Banners',
      icon: Megaphone,
      count: stats.banners
    },
    {
      id: 'products' as const,
      name: 'Products',
      icon: Package,
      count: stats.products
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-orange-500 rounded-full flex items-center justify-center mr-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 3 L10 3 C11.1046 3 12 3.89543 12 5 L12 7 L10 9 L6 9 C4.89543 9 4 8.10457 4 7 L4 3 Z" fill="white"/>
                  <circle cx="9.5" cy="5" r="0.5" fill="#14B8A6"/>
                  <path d="M5 7 Q8 5.5 11 7" stroke="#F97316" strokeWidth="0.5" fill="none"/>
                </svg>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-orange-600 bg-clip-text text-transparent">
                TagBridge Admin
              </h1>
              <span className="ml-3 px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                Online
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Data Sync Buttons */}
              <button
                onClick={exportData}
                className="flex items-center px-3 py-2 text-sm font-medium text-blue-700 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors duration-200"
                title="Export data to sync between devices"
              >
                📤 Export
              </button>
              
              <label className="flex items-center px-3 py-2 text-sm font-medium text-green-700 bg-green-100 hover:bg-green-200 rounded-lg transition-colors duration-200 cursor-pointer">
                📥 Import
                <input
                  type="file"
                  accept=".json"
                  onChange={importData}
                  className="hidden"
                />
              </label>
              
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 text-sm font-medium"
              >
                View Site
              </a>
              <button
                onClick={onLogout}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors duration-200"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <div key={tab.id} className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{tab.name}</h3>
                    <p className="text-3xl font-bold text-blue-600">{tab.count}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200
                      ${activeTab === tab.id
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }
                    `}
                  >
                    <Icon className="h-5 w-5 mr-2" />
                    {tab.name}
                    <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                      {tab.count}
                    </span>
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'banners' && <BannerManager />}
            {activeTab === 'products' && <ProductManager />}
          </div>
        </div>
      </div>
    </div>
  )
}