'use client'

import { useState, useEffect } from 'react'
import { Plus, Edit, Trash2, Save, X, DollarSign } from 'lucide-react'

interface Product {
  id: string
  title: string
  description: string
  price: string
  currency: 'USD' | 'ETB'
  category: string
  image?: string
}

export default function ProductManager() {
  const [products, setProducts] = useState<Product[]>([])
  const [isAddingProduct, setIsAddingProduct] = useState(false)
  const [editingProduct, setEditingProduct] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    currency: 'USD' as 'USD' | 'ETB',
    category: 'Course',
    image: ''
  })

  const categories = ['Course', 'Book', 'Software', 'Template', 'Service', 'Consultation', 'Subscription']
  const currencies = [
    { value: 'USD', label: 'USD ($)', symbol: '$' },
    { value: 'ETB', label: 'ETB (Ethiopian Birr)', symbol: 'ETB' }
  ]

  useEffect(() => {
    // Load products from localStorage
    const savedProducts = localStorage.getItem('adminProducts')
    if (savedProducts) {
      try {
        const parsedProducts = JSON.parse(savedProducts)
        // Add backward compatibility for products without currency field
        const productsWithCurrency = parsedProducts.map((product: any) => ({
          ...product,
          currency: product.currency || 'USD' // Default to USD if no currency specified
        }))
        setProducts(productsWithCurrency)
        // Save back with currency field added
        localStorage.setItem('adminProducts', JSON.stringify(productsWithCurrency))
      } catch (error) {
        console.error('Error loading products:', error)
        setProducts([])
      }
    }
    // No default products - start empty
  }, [])

  const saveProducts = (updatedProducts: Product[]) => {
    setProducts(updatedProducts)
    localStorage.setItem('adminProducts', JSON.stringify(updatedProducts))
  }

  const handleAddProduct = () => {
    if (formData.title && formData.description && formData.price) {
      const newProduct: Product = {
        id: Date.now().toString(),
        ...formData
      }
      const updatedProducts = [...products, newProduct]
      saveProducts(updatedProducts)
      setFormData({ title: '', description: '', price: '', currency: 'USD', category: 'Course', image: '' })
      setIsAddingProduct(false)
    }
  }

  const handleEditProduct = (id: string) => {
    const product = products.find(p => p.id === id)
    if (product) {
      setFormData({
        title: product.title,
        description: product.description,
        price: product.price,
        currency: product.currency || 'USD',
        category: product.category,
        image: product.image || ''
      })
      setEditingProduct(id)
    }
  }

  const handleUpdateProduct = () => {
    if (editingProduct && formData.title && formData.description && formData.price) {
      const updatedProducts = products.map(product =>
        product.id === editingProduct
          ? { ...product, ...formData }
          : product
      )
      saveProducts(updatedProducts)
      setFormData({ title: '', description: '', price: '', currency: 'USD', category: 'Course', image: '' })
      setEditingProduct(null)
    }
  }

  const handleDeleteProduct = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      const updatedProducts = products.filter(product => product.id !== id)
      saveProducts(updatedProducts)
    }
  }

  const resetProducts = () => {
    if (confirm('This will clear all products. Are you sure?')) {
      localStorage.removeItem('adminProducts')
      setProducts([])
    }
  }

  const resetForm = () => {
    setFormData({ title: '', description: '', price: '', currency: 'USD', category: 'Course', image: '' })
    setIsAddingProduct(false)
    setEditingProduct(null)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Book': return '📚'
      case 'Course': return '🎓'
      case 'Templates': return '🎨'
      case 'Service': return '⚡'
      default: return '💼'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Product Management</h2>
        <button
          onClick={() => setIsAddingProduct(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Product
        </button>
      </div>

      {/* Add/Edit Form */}
      {(isAddingProduct || editingProduct) && (
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            {editingProduct ? 'Edit Product' : 'Add New Product'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Price
              </label>
              <div className="flex gap-2">
                <select
                  value={formData.currency}
                  onChange={(e) => setFormData({ ...formData, currency: e.target.value as 'USD' | 'ETB' })}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {currencies.map(currency => (
                    <option key={currency.value} value={currency.value}>
                      {currency.label}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="29.99"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URL (Optional)
              </label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter product description"
              />
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
              onClick={editingProduct ? handleUpdateProduct : handleAddProduct}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Save className="h-4 w-4 mr-2 inline" />
              {editingProduct ? 'Update' : 'Add'} Product
            </button>
          </div>
        </div>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {/* Product Image */}
            <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 relative overflow-hidden">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">
                      {getCategoryIcon(product.category)}
                    </div>
                    <p className="text-gray-600 font-medium">{product.category}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-gray-900 flex-1 line-clamp-1">
                  {product.title}
                </h3>
                <span className="text-lg font-bold text-blue-600 ml-2">
                  {product.currency === 'USD' ? '$' : 'ETB'}{product.price}
                </span>
              </div>
              
              <div className="flex items-center mb-3">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {product.description}
              </p>

              {/* Actions */}
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => handleEditProduct(product.id)}
                  className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Edit className="h-4 w-4" />
                </button>
                <button
                  onClick={() => handleDeleteProduct(product.id)}
                  className="p-2 text-gray-600 hover:text-red-600 transition-colors duration-200"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <DollarSign className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No products yet</h3>
          <p className="text-gray-600 mb-4">Get started by adding your first product.</p>
          <button
            onClick={() => setIsAddingProduct(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Add Your First Product
          </button>
        </div>
      )}
    </div>
  )
}