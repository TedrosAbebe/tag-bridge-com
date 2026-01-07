'use client'

import { useState, useEffect } from 'react'
import { Eye, EyeOff, Lock, User } from 'lucide-react'

interface AdminLoginProps {
  onLogin: (success: boolean) => void
}

interface AdminCredentials {
  username: string
  password: string
  setupDate: string
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [adminCreds, setAdminCreds] = useState<AdminCredentials | null>(null)

  useEffect(() => {
    // Load admin credentials from localStorage
    const savedCreds = localStorage.getItem('adminCredentials')
    if (savedCreds) {
      try {
        setAdminCreds(JSON.parse(savedCreds))
      } catch (error) {
        console.error('Error parsing admin credentials:', error)
      }
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    // Check against saved credentials or default
    const isValidLogin = adminCreds 
      ? (credentials.username === adminCreds.username && credentials.password === adminCreds.password)
      : (credentials.username === 'tedy' && credentials.password === '123456')

    if (isValidLogin) {
      setTimeout(() => {
        onLogin(true)
        setIsLoading(false)
      }, 1000)
    } else {
      setTimeout(() => {
        setError('Invalid username or password')
        setIsLoading(false)
      }, 1000)
    }
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
              TagBridge Admin
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            Sign in to manage TagBridge content and insights
          </p>
        </div>

        <div className="glass-effect bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                Username
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
                  placeholder="Enter username"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
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
                  placeholder="Enter password"
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

            {/* Error Message */}
            {error && (
              <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-3">
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex justify-center py-3 px-4 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-teal-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Signing in...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Current Credentials Info */}
          <div className="mt-6 bg-blue-500/20 border border-blue-500/30 rounded-xl p-4">
            <p className="text-blue-300 text-sm font-medium mb-2">
              {adminCreds ? 'Custom Admin Credentials Set' : 'Default Credentials Active'}
            </p>
            {!adminCreds && (
              <div className="space-y-1">
                <p className="text-blue-200 text-sm">Username: <code className="bg-blue-500/20 px-1 rounded">tedy</code></p>
                <p className="text-blue-200 text-sm">Password: <code className="bg-blue-500/20 px-1 rounded">123456</code></p>
              </div>
            )}
            {adminCreds && (
              <p className="text-blue-200 text-sm">
                Setup on: {new Date(adminCreds.setupDate).toLocaleDateString()}
              </p>
            )}
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