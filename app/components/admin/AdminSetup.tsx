'use client'

import { useState } from 'react'
import { Eye, EyeOff, Lock, User, Settings, Shield } from 'lucide-react'

interface AdminSetupProps {
  onSetupComplete: () => void
}

export default function AdminSetup({ onSetupComplete }: AdminSetupProps) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Validation
    if (credentials.username.length < 3) {
      setError('Username must be at least 3 characters long')
      setIsLoading(false)
      return
    }

    if (credentials.password.length < 6) {
      setError('Password must be at least 6 characters long')
      setIsLoading(false)
      return
    }

    if (credentials.password !== credentials.confirmPassword) {
      setError('Passwords do not match')
      setIsLoading(false)
      return
    }

    // Save admin credentials to localStorage
    setTimeout(() => {
      localStorage.setItem('adminCredentials', JSON.stringify({
        username: credentials.username,
        password: credentials.password,
        setupDate: new Date().toISOString()
      }))
      localStorage.setItem('adminSetupComplete', 'true')
      onSetupComplete()
      setIsLoading(false)
    }, 1000)
  }

  const useDefaultCredentials = () => {
    setCredentials({
      username: 'tedy',
      password: '123456',
      confirmPassword: '123456'
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-4xl font-black mb-4">
            <span className="bg-gradient-to-r from-teal-400 via-blue-400 to-orange-400 bg-clip-text text-transparent animate-gradient-x bg-300%">
              TagBridge Admin Setup
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            Create your admin credentials to manage TagBridge
          </p>
        </div>

        <div className="glass-effect bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Quick Setup Button */}
            <div className="text-center mb-6">
              <button
                type="button"
                onClick={useDefaultCredentials}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-medium rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Shield className="h-4 w-4 mr-2" />
                Use Default (tedy/123456)
              </button>
            </div>

            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                Admin Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="block w-full pl-10 pr-3 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-white placeholder-gray-400"
                  placeholder="Enter admin username"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Admin Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  className="block w-full pl-10 pr-10 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-white placeholder-gray-400"
                  placeholder="Enter admin password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                  )}
                </button>
              </div>
            </div>

            {/* Confirm Password Field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  className="block w-full pl-10 pr-10 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-white placeholder-gray-400"
                  placeholder="Confirm admin password"
                  value={credentials.confirmPassword}
                  onChange={(e) => setCredentials({ ...credentials, confirmPassword: e.target.value })}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-300" />
                  )}
                </button>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-3">
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}

            {/* Setup Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-teal-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Setting up...
                </div>
              ) : (
                <div className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Complete Setup
                </div>
              )}
            </button>
          </form>

          {/* Info */}
          <div className="mt-6 bg-blue-500/20 border border-blue-500/30 rounded-xl p-4">
            <p className="text-blue-300 text-sm font-medium mb-2">Setup Information:</p>
            <ul className="text-blue-200 text-sm space-y-1">
              <li>• Username must be at least 3 characters</li>
              <li>• Password must be at least 6 characters</li>
              <li>• You can change these credentials later</li>
            </ul>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <a
            href="/"
            className="text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors duration-200"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}